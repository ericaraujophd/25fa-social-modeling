# Building Your First Complete Model

Time to put everything together! You'll plan and build a complete model from scratch using all the skills you've learned.

```{note}
**Time Required:** 55 minutes  
**Prerequisites:** Environment and Patches
```

## Planning Before Programming (15 min)

Good models start with good plans. Let's think through the process systematically.

### What Question Are You Trying to Answer?

Every model should address a specific question about social phenomena:

**Good research questions:**
- "How do individual preferences for similar neighbors lead to residential segregation?"
- "What factors determine whether cooperation emerges in a group?"
- "How does information spread through a social network?"

**Too vague:**
- "How do people behave?"
- "What makes societies work?"

```{admonition} Your Research Question
:class: question

**Think of a social phenomenon that interests you:**
- Voting behavior in elections
- Formation of friendships in school
- Spread of fashion trends
- Traffic jam formation
- Economic inequality

**Turn it into a specific question:** "How does [individual behavior] lead to [collective outcome]?"
```

### What Are Your Agents and What Do They Do?

Once you have a question, design your agents:

**Agent properties:** What characteristics do they have?
- Demographics (age, income, education)
- Preferences (risk tolerance, social orientation)  
- States (opinion, mood, health status)
- Resources (money, time, information)

**Agent behaviors:** What actions can they take?
- Movement (where do they go?)
- Communication (who do they talk to?)
- Decision-making (how do they choose?)
- Learning (how do they adapt?)

### What Does Success Look Like?

Define what patterns you expect to see:
- **Segregation model:** Clusters of similar agents
- **Cooperation model:** Stable cooperation despite temptation to defect
- **Information spread:** Rapid diffusion through social networks

**Success criteria:**
- Model produces realistic patterns
- Changing parameters creates predictable changes
- Results provide insights about real-world phenomena

---

## Step-by-Step Model Building (30 min)

Let's build a complete model together using systematic steps.

### Our Project: Ants Following Pheromone Trails

**Research question:** "How do individual ants create efficient collective foraging paths?"

**Agents:** Ants that search for food and leave pheromone trails
**Environment:** Food sources and evaporating pheromone trails
**Behavior:** Ants follow pheromone gradients and reinforce successful paths

### Start Simple: Create Agents

**Step 1:** Basic setup
```netlogo
turtles-own [
  carrying-food?    ; Is this ant carrying food back to nest?
]

to setup
  clear-all
  
  ; Create nest at center
  ask patch 0 0 [
    set pcolor brown
    set plabel "NEST"
  ]
  
  ; Create food source
  ask patches with [pxcor > 10 and pycor > 10] [
    if random 100 < 30 [  ; 30% chance of food
      set pcolor green
    ]
  ]
  
  ; Create ants
  create-turtles 50 [
    setxy 0 0           ; Start at nest
    set color red
    set carrying-food? false
  ]
  
  reset-ticks
end
```

**Test it:** Run setup and verify you see nest, food, and ants.

### Add One Behavior at a Time

**Step 2:** Basic movement
```netlogo
to go
  ask turtles [
    ; Simple random movement for now
    right random 60 - 30    ; Turn randomly
    forward 1
  ]
  tick
end
```

**Test it:** Run go repeatedly. Do ants move around randomly?

**Step 3:** Food collection
```netlogo
to go
  ask turtles [
    ; Check if on food patch
    if pcolor = green and not carrying-food? [
      set carrying-food? true
      set color yellow        ; Carrying food
      ask patch-here [ set pcolor black ]  ; Remove food
    ]
    
    ; Check if back at nest with food
    if pcolor = brown and carrying-food? [
      set carrying-food? false
      set color red          ; Not carrying food
    ]
    
    ; Movement
    right random 60 - 30
    forward 1
  ]
  tick
end
```

**Test it:** Do ants pick up food and return to nest?

### Test Frequently, Fix Problems Early

After each step, ask:
- Does the behavior work as expected?
- Are there any error messages?
- Do you see the visual changes you expect?

**Common issues:**
- Ants getting stuck at world edges
- Food disappearing too quickly
- Ants not finding their way back to nest

### Build Complexity Gradually

**Step 4:** Add pheromone trails
```netlogo
patches-own [
  pheromone          ; Amount of pheromone on this patch
]

to setup
  ; ... previous setup code ...
  
  ; Initialize pheromones
  ask patches [
    set pheromone 0
  ]
end

to go
  ask turtles [
    ; Leave pheromone if carrying food
    if carrying-food? [
      ask patch-here [
        set pheromone pheromone + 10
        set pcolor scale-color red pheromone 0 100
      ]
    ]
    
    ; ... previous behavior code ...
  ]
  
  ; Evaporate pheromones
  ask patches [
    set pheromone pheromone * 0.95  ; 5% evaporation
    if pheromone < 0.1 [ set pheromone 0 ]
    if pcolor != brown and pcolor != green [
      set pcolor scale-color red pheromone 0 100
    ]
  ]
  
  tick
end
```

**Test it:** Do you see red trails where ants have been?

**Step 5:** Follow pheromone gradients
```netlogo
to go
  ask turtles [
    ; If not carrying food, follow pheromone gradients
    if not carrying-food? [
      let best-patch max-one-of patches in-radius 2 [pheromone]
      if best-patch != nobody and [pheromone] of best-patch > 0 [
        face best-patch
        forward 1
      ] else [
        right random 60 - 30  ; Random movement if no pheromone
        forward 1
      ]
    ] else [
      ; If carrying food, head toward nest
      face patch 0 0
      forward 1
    ]
    
    ; ... food collection code ...
    ; ... pheromone laying code ...
  ]
  
  ; ... pheromone evaporation code ...
  tick
end
```

### Activity: Mini-Project

**Complete the ant model by adding:**

1. **Better nest-finding:** Ants carrying food should move more directly toward nest
2. **Trail reinforcement:** Successful ants should lay stronger pheromone trails
3. **Energy system:** Ants use energy and must return to nest to refuel

```{admonition} Model Building Tips
:class: tip

**Start simple, add complexity gradually:**
- Get basic movement working first
- Add one new behavior at a time
- Test after every change
- Fix problems immediately

**Use meaningful variable names:**
- `carrying-food?` not `cf?`
- `pheromone-strength` not `ps`
- `energy-level` not `el`

**Add comments explaining what code does:**
```netlogo
; Ants lay pheromone when carrying food
if carrying-food? [
  ask patch-here [
    set pheromone pheromone + 10
  ]
]
```
```

---

## Documentation and Sharing (10 min)

Good models need clear documentation so others can understand and use them.

### Writing Clear Comments in Code

**Comment every major section:**
```netlogo
to go
  ; MOVEMENT PHASE: Ants move based on pheromone trails
  ask turtles [
    if not carrying-food? [
      follow-pheromone-trail
    ] else [
      return-to-nest
    ]
  ]
  
  ; ENVIRONMENT PHASE: Update pheromone trails
  evaporate-pheromones
  
  tick
end
```

**Explain complex calculations:**
```netlogo
; Calculate pheromone gradient (difference between current and best patch)
let current-pheromone [pheromone] of patch-here
let best-nearby max [pheromone] of patches in-radius 2
let gradient best-nearby - current-pheromone
```

### Using the Info Tab Effectively

**Include these sections in your Info tab:**

**WHAT IS IT?**
Brief description of the phenomenon and research question

**HOW IT WORKS**
Explanation of agent behaviors and interactions

**HOW TO USE IT**  
Instructions for running the model and interpreting results

**THINGS TO NOTICE**
Key patterns to watch for

**THINGS TO TRY**
Suggested experiments with different parameters

### Preparing Models for Others to Understand

```{admonition} Model Documentation Checklist
:class: note

**Code Quality:**
- Clear, meaningful variable names
- Comments explaining complex sections
- Organized into logical procedures

**User Interface:**
- Sliders for key parameters
- Buttons for setup and go
- Monitors showing important statistics
- Plots tracking key variables over time

**Documentation:**
- Complete Info tab
- Clear instructions
- Background information and references

**Testing:**
- Model runs without errors
- Results are reasonable and interesting
- Different parameter values produce different outcomes
```

### Activity: Code Review

**Pairs review each other's models:**

1. **Can you understand what the model does** without explanation?
2. **Are variable names clear and meaningful?**
3. **Are there enough comments** to follow the logic?
4. **Does the Info tab explain** how to use the model?
5. **What questions does the model raise** that could be explored further?

```{admonition} Giving Good Feedback
:class: tip

**Focus on understanding, not perfection:**
- "I'm confused about what this variable represents"
- "This section could use more comments"
- "The Info tab could explain the research question more clearly"

**Ask questions rather than giving commands:**
- "What happens if you change this parameter?"
- "How does this relate to real-world ant behavior?"
- "What other factors might be important to include?"
```

---

## Learning Objectives Achieved

By completing this tutorial, you can now:

✓ **Plan and implement a complete simple model**  
✓ **Use iterative development process**  
✓ **Document models clearly for others**  
✓ **Debug common problems**

---

## What's Next?

You can now build complete models! Next we'll learn how to collect meaningful data from your models and analyze the results systematically.

```{admonition} Coming Up: Data Collection and Analysis
:class: note

- Why data matters in modeling
- Using NetLogo's built-in analysis tools
- Exporting data for external analysis
- Designing systematic experiments

**Activities preview:**
- Experiment Design: Plan systematic studies
- Data Visualization: Create meaningful charts and graphs
```

**Congratulations!** You've built your first complete agent-based model from scratch. This is a significant achievement that many researchers never accomplish.
