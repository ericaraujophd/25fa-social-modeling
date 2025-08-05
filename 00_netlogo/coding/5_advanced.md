# Advanced Topics and Troubleshooting

You've learned the fundamentals - now let's tackle advanced techniques and solve common problems that every serious modeler encounters.

```{note}
**Time Required:** 45 minutes  
**Prerequisites:** Data Collection and Analysis
```

## Common Problems and Solutions (20 min)

Every modeler faces challenges. Here are the most common issues and how to resolve them systematically.

### Runtime Errors and How to Fix Them

**"I can't reproduce by" error:**

```
Problem: ask patches in-radius 5 [ set color red ]
Error: "I can't reproduce by -1.2345"
```

**Cause:** A patch coordinate calculation produced a non-integer value
**Solution:** Use `round` or explicitly create patch coordinates

```netlogo
; Problem version:
let target-x xcor + distance * cos heading
ask patch target-x ycor [ set color red ]

; Fixed version:
let target-x round (xcor + distance * cos heading)
ask patch target-x ycor [ set color red ]

; Better version:
let target-patch patch-at (distance * dx) (distance * dy)
if target-patch != nobody [ ask target-patch [ set color red ] ]
```

**"Cannot access a property of a turtle/patch/link who doesn't exist" error:**

```netlogo
; Problem: turtle died but code still tries to use it
ask turtle 5 [ set color red ]  ; What if turtle 5 is dead?

; Solution: Check if turtle exists first  
if turtle 5 != nobody [ ask turtle 5 [ set color red ] ]

; Better: Use breeds and with clauses
ask wolves with [energy > 0] [ hunt ]
```

**"Runtime error: Division by zero":**

```netlogo
; Problem:
let average total-wealth / count turtles  ; What if no turtles?

; Solution:
let average 0
if count turtles > 0 [ 
  set average total-wealth / count turtles 
]

; Better: Handle edge cases explicitly
to-report calculate-average [value-list]
  if length value-list = 0 [ report 0 ]
  report sum value-list / length value-list
end
```

### Performance Issues

**Model runs very slowly:**

**Common causes and fixes:**

1. **Too many agents asking too many others:**

```netlogo
; Slow version:
ask turtles [
  ask other turtles [  ; N × N operations!
    if distance myself < 5 [ ... ]
  ]
]

; Faster version:
ask turtles [
  ask other turtles in-radius 5 [  ; Only nearby turtles
    ; ... interaction code ...
  ]
]
```

2. **Unnecessary calculations every tick:**

```netlogo
; Slow: recalculates every tick
ask turtles [
  let my-neighborhood turtles in-radius 5
  let similar count my-neighborhood with [color = [color] of myself]
  let satisfaction similar / count my-neighborhood
]

; Faster: only recalculate when needed
ask turtles [
  if moved-recently? [  ; Only when something changed
    calculate-satisfaction
    set moved-recently? false
  ]
]
```

3. **Complex patch operations:**

```netlogo
; Slow: asking every patch every tick
ask patches [
  set pheromone pheromone * 0.95  ; Even patches with no pheromone
]

; Faster: only patches that need updating
ask patches with [pheromone > 0] [
  set pheromone pheromone * 0.95
  if pheromone < 0.01 [ set pheromone 0 ]
]
```

### Logic Errors

**Model produces unrealistic results:**

```{admonition} Debugging Strategy
:class: tip

**Step 1: Verify basic mechanics**
- Are agents created correctly?
- Do they move as expected?
- Are calculations producing reasonable numbers?

**Step 2: Test edge cases**
- What happens with 1 agent? 1000 agents?
- What if all agents have the same properties?
- What if parameters are set to extreme values?

**Step 3: Add debugging output**
```netlogo
; Add temporary monitors or print statements
if who = 0 and ticks mod 50 = 0 [  ; Only turtle 0, every 50 ticks
  print (word "Energy: " energy " Satisfaction: " satisfaction)
]
```

**Step 4: Simplify temporarily**
- Comment out complex behaviors
- Test one mechanism at a time
- Use simple movement patterns first
```

### Activity: Debug Challenge

**Here's a broken segregation model. Find and fix the errors:**

```netlogo
to setup
  clear-all
  ask patches [
    if random 100 < density [
      sprout 1 [
        set color one-of [red blue]
        set tolerance random-float 1
      ]
    ]
  ]
end

to go
  ask turtles [
    let similar count turtles-here with [color = [color] of myself]
    let total count turtles-here
    if similar / total < tolerance [
      move-to one-of patches with [count turtles-here = 0]
    ]
  ]
  tick
end
```

**Hint:** There are at least 3 logical errors in this code.

---

## Extending Models with New Features (15 min)

Once you have a working model, you can add sophisticated features to address new research questions.

### Adding Social Networks

**Basic network formation:**

```netlogo
turtles-own [
  social-connections  ; List of other turtles this one knows
]

to setup
  ; ... basic setup ...
  ask turtles [
    set social-connections []
  ]
  create-social-network
end

to create-social-network
  ; Each turtle connects to nearby turtles
  ask turtles [
    let potential-friends other turtles in-radius 5
    let num-connections min list 5 count potential-friends
    
    ask n-of num-connections potential-friends [
      ; Create bidirectional social connection
      set social-connections lput myself social-connections
      ask myself [
        set social-connections lput myself social-connections
      ]
    ]
  ]
end

to spread-information
  ask turtles with [has-information?] [
    ; Share with social connections
    foreach social-connections [ friend ->
      ask friend [
        if random 100 < influence-probability [
          set has-information? true
        ]
      ]
    ]
  ]
end
```

### Dynamic Environment Changes

**Environmental shocks and changes:**

```netlogo
to environmental-change
  ; Periodic environmental disruption
  if ticks mod 500 = 0 and ticks > 0 [
    ask n-of (count patches * 0.1) patches [  ; 10% of environment changes
      set resource-level resource-level * 0.5  ; Resources cut in half
      set pcolor scale-color green resource-level 0 100
    ]
  ]
  
  ; Gradual climate change  
  if ticks mod 100 = 0 [
    ask patches [
      set temperature temperature + 0.1  ; Gradual warming
      update-habitat-suitability
    ]
  ]
end
```

### Learning and Adaptation

**Agents that learn from experience:**

```netlogo
turtles-own [
  strategy          ; Current behavior
  memory           ; List of recent experiences
  success-rate     ; How well current strategy works
]

to adapt-strategy
  ask turtles [
    ; Remember recent outcome
    set memory lput last-payoff memory
    if length memory > 10 [ set memory but-first memory ]  ; Keep only recent memories
    
    ; Calculate recent success rate
    if length memory > 5 [
      set success-rate mean memory
      
      ; Change strategy if doing poorly
      if success-rate < 0.3 [
        set strategy one-of ["cooperate" "defect" "tit-for-tat"]
        set memory []  ; Reset memory with new strategy
      ]
    ]
  ]
end
```

### Activity: Feature Addition

**Choose an existing model and add one new feature:**

1. **Social influence:** Agents adopt opinions from friends
2. **Environmental change:** Resources or conditions change over time
3. **Learning:** Agents adapt behavior based on success
4. **Heterogeneity:** Different types of agents with different capabilities

```{admonition} Extension Guidelines
:class: tip

**Start with research question:**
- What new phenomenon do you want to explore?
- How does this relate to your original model?
- What predictions can you make?

**Implement incrementally:**
- Add basic version first
- Test that it works correctly
- Add complexity gradually

**Maintain model clarity:**
- Keep original functionality intact
- Use clear variable names for new features
- Document new behaviors in comments

**Test systematically:**
- Does new feature work as intended?
- Does it interact well with existing features?
- Do results make sense?
```

---

## Where to Go Next in Your Modeling Journey (10 min)

You now have solid NetLogo skills. Here's how to continue developing as a modeler.

### Advanced NetLogo Features

**Extensions for specialized modeling:**

- **Network Extension:** Advanced social network analysis
- **GIS Extension:** Real geographic data and spatial analysis  
- **R Extension:** Integration with statistical analysis
- **Web Extension:** Online experiments and data collection

**Advanced programming techniques:**

- **Breeds and inheritance:** Different types of agents with shared behaviors
- **Lists and tables:** Complex data structures for agent memory
- **File I/O:** Reading real-world data into models
- **Behaviorspace automation:** Large-scale systematic experiments

### Related Tools and Platforms

**Other agent-based modeling platforms:**

- **Mesa (Python):** Code-based modeling with Python libraries
- **MASON (Java):** High-performance modeling for large systems
- **Anylogic:** Commercial platform with GUI design tools
- **Repast:** Research-focused platform with advanced features

**Complementary skills:**

- **Statistical analysis:** R, Python, or SPSS for data analysis
- **Network analysis:** Gephi, igraph, NetworkX for social networks
- **GIS:** QGIS or ArcGIS for spatial modeling
- **Data visualization:** Tableau, D3.js, or ggplot2 for presenting results

### Research and Learning Resources

**Essential readings:**

- **"Think Complexity" by Allen Downey:** Complexity science fundamentals
- **"Agent-Based Models" by Nigel Gilbert:** Social science applications
- **NetLogo User Manual:** Complete reference for all features
- **Journal of Artificial Societies and Social Simulation:** Current research

**Online communities:**

- **NetLogo Users Group:** Active mailing list for questions and discussions
- **Complexity Explorer:** Free courses on complexity science
- **CoMSES (Computational Model Library):** Repository of published models

```{admonition} Your Modeling Portfolio
:class: note

**Build a collection of models that demonstrate your skills:**

1. **Replication:** Reproduce a published model from literature
2. **Extension:** Add new features to existing model  
3. **Original:** Create model addressing novel research question
4. **Application:** Use modeling to solve real-world problem

**Share your work:**
- Upload models to CoMSES repository
- Present findings at conferences
- Write blog posts explaining insights
- Collaborate with domain experts

**Keep learning:**
- Take advanced complexity science courses
- Attend modeling workshops and conferences  
- Join research groups using computational methods
- Apply for fellowships in computational social science
```

### Final Project Ideas

**Choose a project that excites you:**

**Social phenomena:**

- How do rumors spread through social media?
- What factors determine neighborhood gentrification?
- How do social movements grow and decline?

**Economic systems:**

- How do markets form and evolve?
- What causes wealth inequality to persist?
- How do innovations diffuse through industries?

**Environmental issues:**

- How do communities respond to climate change?
- What determines success of conservation efforts?
- How do urban planning decisions affect sustainability?

**Organizational behavior:**

- How do teams coordinate complex projects?
- What makes some organizations more innovative?
- How do company cultures spread and change?

---

## Learning Objectives Achieved

By completing this tutorial series, you can now:

✓ **Debug common programming and logic errors**  
✓ **Optimize model performance for large simulations**  
✓ **Extend models with advanced features**  
✓ **Connect NetLogo to broader modeling ecosystem**  
✓ **Plan independent modeling research projects**

---

## Congratulations!

You've completed the NetLogo tutorial series and developed substantial agent-based modeling skills. You can now:

- Build complete models from scratch
- Collect and analyze meaningful data
- Debug problems systematically  
- Extend models with new capabilities
- Connect your work to the broader research community

**Most importantly:** You can use computational modeling to explore questions about social phenomena that interest you. This is a powerful capability that opens doors to research in many fields.

```{admonition} What You've Accomplished
:class: success

**Technical skills:**
- NetLogo programming and interface design
- Data collection and analysis techniques
- Debugging and performance optimization
- Integration with external analysis tools

**Modeling skills:**
- Translating research questions into computational models
- Designing systematic experiments
- Interpreting and validating results
- Extending models to address new questions

**Research skills:**
- Literature review and model replication
- Hypothesis formation and testing
- Clear documentation and communication
- Reproducible research practices

**You are now a computational modeler!** Use these skills to explore the social world and contribute to scientific understanding.
```

**Keep modeling, keep learning, and most importantly - keep asking interesting questions about how social systems work!**
