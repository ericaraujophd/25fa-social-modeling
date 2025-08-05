# Advanced Topics and Troubleshooting

Congratulations on making it to the final tutorial! You now have solid foundations in NetLogo programming. This tutorial covers advanced techniques, common problems, and how to take your modeling to the next level.

```{note}
**Time Required:** 60 minutes  
**Prerequisites:** Completed all previous NetLogo tutorials
```

## Performance Optimization

As your models grow more complex, you may encounter performance issues. Here's how to keep your models running smoothly.

### Common Performance Bottlenecks

**Problem 1: Too Many Agents**
```{admonition} Symptoms and Solutions
:class: warning

**Symptoms:** Model slows down dramatically with more agents

**Causes:**
- Inefficient agent interaction code
- Every agent checking every other agent
- Complex calculations repeated unnecessarily

**Solutions:**
- Use `in-radius` instead of checking all agents
- Cache expensive calculations
- Use `with` to filter agents before operations
```

**Problem 2: Inefficient Spatial Operations**
```netlogo
; SLOW - checks all patches every time
ask turtles [
  let nearby-patch min-one-of patches [distance myself]
]

; FAST - only checks nearby patches  
ask turtles [
  let nearby-patch min-one-of patches in-radius 5 [distance myself]
]
```

**Problem 3: Repeated Complex Calculations**
```netlogo
; SLOW - recalculates same thing repeatedly
ask turtles [
  if (sum [wealth] of turtles / count turtles) > 100 [
    ; do something
  ]
]

; FAST - calculate once, use many times
let average-wealth sum [wealth] of turtles / count turtles
ask turtles [
  if average-wealth > 100 [
    ; do something  
  ]
]
```

### Performance Optimization Strategies

#### Strategy 1: Use Efficient Agent Selection

```netlogo
; Instead of this:
ask turtles [
  ask other turtles [
    if distance myself < 5 [
      ; interact
    ]
  ]
]

; Do this:
ask turtles [
  ask other turtles in-radius 5 [
    ; interact
  ]
]
```

#### Strategy 2: Batch Operations

```netlogo
; Instead of individual updates:
ask turtles [
  set color red
  set size 1.5
  move-to one-of patches
]

; Group similar operations:
ask turtles [ set color red ]
ask turtles [ set size 1.5 ]  
ask turtles [ move-to one-of patches ]
```

#### Strategy 3: Smart Data Structures

```netlogo
; Keep lists of important agents
globals [
  active-agents     ; Only agents that need updating
  wealthy-agents    ; Only agents above wealth threshold
]

to update-active-lists
  set active-agents turtles with [energy > 0]
  set wealthy-agents turtles with [wealth > 1000]
end

; Then operate only on relevant agents
ask active-agents [ 
  ; expensive operations only on active agents
]
```

### Activity 1: Optimize Your Model

Take your rumor model and apply these optimizations:

1. **Profile your model** - identify the slowest parts
2. **Apply spatial optimizations** for neighbor interactions  
3. **Cache expensive calculations** that don't change often
4. **Use agent filtering** to reduce unnecessary operations

---

## Advanced NetLogo Features

NetLogo has many powerful features beyond basic turtle and patch operations.

### Extensions: Adding External Capabilities

Extensions connect NetLogo to external libraries and tools.

#### Network Extension
```netlogo
extensions [nw]  ; Load network extension

to setup-social-network
  ; Create random network connections
  ask turtles [
    create-links-with n-of (2 + random 4) other turtles
  ]
  
  ; Use network algorithms
  let centrality nw:betweenness-centrality
  ask turtles [
    set size centrality * 2  ; Size based on network centrality
  ]
end
```

#### GIS Extension
```netlogo
extensions [gis]

to load-geographic-data
  ; Load real geographic data
  let city-data gis:load-dataset "cities.shp"
  gis:set-world-envelope (gis:envelope-of city-data)
  
  ; Place agents on real locations
  foreach gis:feature-list-of city-data [ feature ->
    let location gis:location-of feature
    if location != nobody [
      create-turtles 1 [
        setxy (item 0 location) (item 1 location)
      ]
    ]
  ]
end
```

#### Table Extension
```netlogo
extensions [table]

globals [
  agent-connections  ; Table storing social connections
]

to setup-connection-table
  set agent-connections table:make
  
  ask turtles [
    let my-friends n-of (2 + random 4) other turtles
    table:put agent-connections who (sort [who] of my-friends)
  ]
end

to interact-with-friends
  ask turtles [
    let friends table:get agent-connections who
    foreach friends [ friend-id ->
      ask turtle friend-id [
        ; interact with this friend
      ]
    ]
  ]
end
```

### Breeds: Different Types of Agents

Create different classes of agents with different properties and behaviors.

```netlogo
breed [students student]
breed [teachers teacher]  
breed [administrators administrator]

students-own [
  grade-level
  study-time
  social-connections
]

teachers-own [
  subject-area
  experience-years
  classroom-number
]

administrators-own [
  department
  budget-authority
]

to setup
  create-students 200 [
    set grade-level 9 + random 4      ; Grades 9-12
    set study-time 1 + random 5       ; 1-5 hours per day
    set color blue
  ]
  
  create-teachers 20 [
    set subject-area one-of ["Math" "Science" "English" "History"]
    set experience-years random 30
    set color red
  ]
  
  create-administrators 5 [
    set department one-of ["Academic" "Student Life" "Operations"]
    set budget-authority 10000 + random 50000
    set color green
  ]
end

; Different behaviors for different breeds
to go
  ask students [ student-behavior ]
  ask teachers [ teacher-behavior ]
  ask administrators [ administrator-behavior ]
  tick
end

to student-behavior
  ; Students interact with other students and teachers
  move-to one-of patches in-radius 3
  
  let nearby-students other students in-radius 2
  if any? nearby-students [
    ask one-of nearby-students [
      ; Share study habits
    ]
  ]
end

to teacher-behavior
  ; Teachers interact with students and other teachers
  let my-students students in-radius 5
  if any? my-students [
    ask my-students [
      set study-time study-time + 0.1  ; Positive influence
    ]
  ]
end

to administrator-behavior
  ; Administrators make policy decisions
  if random 100 < 5 [  ; 5% chance per turn
    ; Implement new policy affecting all agents
    ask students [ set study-time study-time * 1.1 ]
  ]
end
```

### Activity 2: Add Advanced Features

Enhance your model with:

1. **Extension usage** - Add network or GIS capabilities
2. **Multiple breeds** - Create different types of agents  
3. **Complex interactions** - Different behaviors for different agent types

---

## Debugging Strategies

Even experienced programmers encounter bugs. Here are systematic approaches to finding and fixing problems.

### Common Error Types

#### Syntax Errors
```{admonition} NetLogo Syntax Error Examples
:class: error

**Missing brackets:**
```netlogo
; ERROR:
ask turtles
  set color red
]

; CORRECT:
ask turtles [
  set color red
]
```

**Wrong variable scope:**
```netlogo
; ERROR - using turtle variable in patch context:
ask patches [
  set color color + 1  ; 'color' here refers to patch color
]

; ERROR - using patch variable in turtle context:
ask turtles [
  set pcolor red  ; turtles don't have pcolor
]
```

**Undefined variables:**
```netlogo
; ERROR - variable not declared:
set social-activity 5  ; Should be set social-activity

; CORRECT - declare first:
turtles-own [social-activity]
```
```

#### Logic Errors

**Infinite loops:**
```netlogo
; ERROR - can create infinite loop:
while [any? turtles with [color = red]] [
  ask turtles [ set color red ]  ; Makes MORE red turtles!
]

; CORRECT:
while [any? turtles with [color = red]] [
  ask turtles with [color = red] [ set color blue ]
]
```

**Off-by-one errors:**
```netlogo
; ERROR - misses last element:
let i 0
while [i < length my-list] [
  ; process item i
  set i i + 1
]

; CORRECT:
let i 0
while [i < length my-list] [
  ; process item i
  set i i + 1
]
```

### Debugging Techniques

#### Technique 1: Print Debugging

```netlogo
to debug-agent-behavior
  ask turtles [
    print (word "Turtle " who " has energy " energy " at position " xcor "," ycor)
    
    if energy > 50 [
      print "  -> This turtle is high energy"
      ; high energy behavior
    ]
  ]
end
```

#### Technique 2: Visual Debugging

```netlogo
to visualize-agent-states
  ask turtles [
    ; Color code by internal state
    if energy > 80 [ set color green ]
    if energy > 40 and energy <= 80 [ set color yellow ]
    if energy <= 40 [ set color red ]
    
    ; Size by another property
    set size wealth / 100
    
    ; Shape by behavior mode
    if mode = "seeking-food" [ set shape "circle" ]
    if mode = "social" [ set shape "person" ]
  ]
end
```

#### Technique 3: Step-by-Step Analysis

```netlogo
; Add debugging globals
globals [
  debug-mode?
  debug-target
]

to setup
  ; ... normal setup ...
  set debug-mode? false
  set debug-target nobody
end

to debug-single-agent [agent-id]
  set debug-mode? true
  set debug-target turtle agent-id
end

to go
  if debug-mode? [
    ask debug-target [
      print (word "Step " ticks ": Starting at " xcor "," ycor)
      print (word "  Energy: " energy " Wealth: " wealth)
    ]
  ]
  
  ; Normal model step
  ask turtles [ agent-behavior ]
  
  if debug-mode? [
    ask debug-target [
      print (word "  After behavior: " xcor "," ycor)
      print (word "  Energy now: " energy " Wealth now: " wealth)
    ]
  ]
  
  tick
end
```

### Activity 3: Debug a Broken Model

I'll give you a model with several bugs. Find and fix them:

```netlogo
; BUGGY MODEL - Find and fix the errors!
globals [
  total-wealth
]

turtles-own [
  wealth
  age
]

to setup
  clear-all
  create-turtles 100 [
    set wealth 100 + random 50
    set age random 80
    set color green
    setxy random-xcor random-ycor
  ]
  
  set total-wealth sum [wealth] of turtles
  reset-ticks
end

to go
  ask turtles [
    ; Move randomly
    right random 360
    forward 1
    
    ; Age and lose wealth
    set age age + 1
    set wealth wealth - 1
    
    ; Interact with neighbors
    let neighbors other turtles in-radius 3
    if any? neighbors [
      let trading-partner one-of neighbors
      ask trading-partner [
        ; Trade wealth
        let trade-amount 5
        set wealth wealth + trade-amount
        ask myself [ set wealth wealth - trade-amount ]
      ]
    ]
    
    ; Death from old age
    if age > 100 [
      die
    ]
  ]
  
  ; Update global statistics
  set total-wealth sum [wealth] of turtles
  
  ; Create new turtles to replace dead ones
  while [count turtles < 100] [
    create-turtles 1 [
      set wealth 100 + random 50
      set age 0
      set color green
      setxy random-xcor random-ycor
    ]
  ]
  
  tick
end
```

**Bugs to find:**
1. **Scope error** in trading code
2. **Logic error** in death/replacement timing
3. **Performance issue** with the while loop
4. **Missing error checking** for edge cases

---

## Integration with Other Tools

NetLogo can work with other software for advanced analysis and visualization.

### Exporting Data

#### CSV Export for Excel/R/Python
```netlogo
to export-agent-data
  let filename (word "agent-data-" date-and-time ".csv")
  
  ; Export turtle data
  file-open filename
  file-print "turtle-id,wealth,age,xcor,ycor"
  ask turtles [
    file-print (word who "," wealth "," age "," xcor "," ycor)
  ]
  file-close
end

to export-network-data
  let filename (word "network-" date-and-time ".csv")
  
  file-open filename
  file-print "source,target,weight"
  ask links [
    file-print (word [who] of end1 "," [who] of end2 "," link-weight)
  ]
  file-close
end
```

#### JSON Export for Web Visualization
```netlogo
to export-json-data
  let filename (word "model-data-" date-and-time ".json")
  
  file-open filename
  file-print "{"
  file-print "  \"agents\": ["
  
  let first-turtle? true
  ask turtles [
    if not first-turtle? [ file-print "," ]
    file-print (word "    {\"id\": " who ", \"x\": " xcor ", \"y\": " ycor 
                     ", \"wealth\": " wealth "}")
    set first-turtle? false
  ]
  
  file-print "  ],"
  file-print (word "  \"timestamp\": " ticks)
  file-print "}"
  file-close
end
```

### R Integration

Using the RNetLogo package, you can control NetLogo from R:

```r
# R code to run NetLogo experiments
library(RNetLogo)

# Start NetLogo
nl.path <- "/Applications/NetLogo 6.4.0/NetLogo"
NLStart(nl.path)

# Load your model
NLLoadModel("path/to/your/model.nlogo")

# Run experiments
results <- data.frame()
for(social_activity in c(2, 4, 6, 8)) {
  for(skepticism in c(2, 4, 6, 8)) {
    # Set parameters
    NLCommand(paste("set social-activity-mean", social_activity))
    NLCommand(paste("set skepticism-mean", skepticism))
    
    # Run model
    NLCommand("setup")
    NLCommand("repeat 100 [go]")
    
    # Collect results
    final_believers <- NLReport("count turtles with [believes-rumor?]")
    
    results <- rbind(results, data.frame(
      social_activity = social_activity,
      skepticism = skepticism,
      final_believers = final_believers
    ))
  }
}

# Analyze results in R
library(ggplot2)
ggplot(results, aes(x=social_activity, y=final_believers, color=factor(skepticism))) +
  geom_line() + 
  labs(title="Effect of Social Activity on Rumor Spread",
       color="Skepticism Level")
```

### Python Integration

Use pyNetLogo to control NetLogo from Python:

```python
import pynetlogo
import pandas as pd
import matplotlib.pyplot as plt

# Connect to NetLogo
netlogo = pynetlogo.NetLogoLink(gui=False)
netlogo.load_model('path/to/your/model.nlogo')

# Run experiments
results = []
for social_activity in [2, 4, 6, 8]:
    for skepticism in [2, 4, 6, 8]:
        # Set parameters
        netlogo.command(f'set social-activity-mean {social_activity}')
        netlogo.command(f'set skepticism-mean {skepticism}')
        
        # Run model multiple times
        for run in range(10):
            netlogo.command('setup')
            netlogo.command('repeat 100 [go]')
            
            final_believers = netlogo.report('count turtles with [believes-rumor?]')
            
            results.append({
                'social_activity': social_activity,
                'skepticism': skepticism,
                'run': run,
                'final_believers': final_believers
            })

# Analyze with pandas
df = pd.DataFrame(results)
avg_results = df.groupby(['social_activity', 'skepticism'])['final_believers'].mean()

# Visualize with matplotlib
plt.figure(figsize=(10, 6))
for skepticism in [2, 4, 6, 8]:
    data = avg_results[avg_results.index.get_level_values('skepticism') == skepticism]
    plt.plot(data.index.get_level_values('social_activity'), data.values, 
             label=f'Skepticism {skepticism}')

plt.xlabel('Social Activity')
plt.ylabel('Final Believers')
plt.title('Effect of Social Activity on Rumor Spread')
plt.legend()
plt.show()
```

### Activity 4: Export and Analyze

1. **Export data** from your model in CSV format
2. **Import into Excel or R/Python** for advanced analysis
3. **Create visualizations** that go beyond NetLogo's built-in plots
4. **Run automated experiments** from external software

---

## Publishing and Sharing Models

Share your models with the research community and public.

### NetLogo Modeling Commons

The [NetLogo Modeling Commons](http://modelingcommons.org/) is a repository for sharing models.

#### Preparing Your Model for Publication

```{admonition} Publication Checklist
:class: note

**Code Quality:**
- Clear, commented code
- Meaningful variable names
- Consistent formatting
- No debugging print statements

**Documentation:**
- Comprehensive Info tab
- Clear parameter descriptions  
- Usage instructions
- Known limitations

**Testing:**
- Works with different parameter values
- No runtime errors
- Reasonable default settings
- Multiple random seeds tested

**Legal:**
- Appropriate license (Creative Commons recommended)
- Citation of data sources
- Attribution of borrowed code
```

#### Model Documentation Template

```markdown
# MODEL TITLE

## WHAT IS IT?
Brief description of the phenomenon being modeled and the research question.

## HOW IT WORKS
Explanation of the agents, environment, and behavioral rules.

## HOW TO USE IT
Step-by-step instructions for running the model and interpreting results.

## THINGS TO NOTICE
Key patterns and behaviors to observe when running the model.

## THINGS TO TRY
Suggested experiments and parameter combinations to explore.

## EXTENDING THE MODEL
Ideas for how others could build on or modify your model.

## RELATED MODELS
References to similar models in the literature or model library.

## CREDITS AND REFERENCES
Citation information and acknowledgments.
```

### Academic Publication

#### Writing Model Papers

**Structure for agent-based modeling papers:**

1. **Introduction**
   - Research question and motivation
   - Review of existing approaches
   - Contribution of your model

2. **Model Description**
   - Agent properties and behaviors
   - Environment structure
   - Interaction rules
   - Parameter specifications

3. **Implementation and Validation**  
   - Software platform and technical details
   - Calibration against real data
   - Sensitivity analysis
   - Verification tests

4. **Results**
   - Key patterns and emergent behaviors
   - Parameter effects
   - Scenario analysis
   - Comparison with alternative models

5. **Discussion**
   - Interpretation of results
   - Policy implications
   - Model limitations
   - Future research directions

#### Code and Data Availability

**Best practices for reproducible research:**

```{admonition} Reproducibility Checklist
:class: tip

- **Model code** available in public repository (GitHub, ModelingCommons)
- **Complete datasets** with proper documentation
- **Analysis scripts** for generating all figures and tables
- **README files** with clear setup and usage instructions
- **Version control** with tagged releases for published versions
- **Dependency documentation** (NetLogo version, extensions used)
```

### Activity 5: Prepare for Publication

1. **Document your model** using the template above
2. **Clean up your code** with proper comments and formatting
3. **Test thoroughly** with different parameters and random seeds
4. **Write a brief research summary** (2-3 pages) suitable for sharing

---

## Troubleshooting Reference

Quick reference for common problems and solutions.

### Performance Issues

| Problem | Symptoms | Solution |
|---------|----------|----------|
| Model runs slowly | High CPU usage, unresponsive interface | Use `in-radius` instead of checking all agents |
| Memory errors | NetLogo crashes or freezes | Reduce number of agents, use smaller world |
| Infinite loops | Model hangs indefinitely | Add loop counters and exit conditions |

### Programming Errors

| Error Message | Common Cause | Fix |
|---------------|--------------|-----|
| "Variable doesn't exist" | Typo in variable name | Check spelling and declaration |
| "Expected command" | Missing bracket or quote | Balance all brackets and quotes |
| "Division by zero" | Math on empty agentsets | Check `any?` before calculations |
| "Can't move to patch" | Coordinates outside world | Use `max-pxcor` and `min-pxcor` limits |

### Logic Errors

| Problem | Symptoms | Debugging Approach |
|---------|----------|-------------------|
| Unexpected behavior | Agents do wrong things | Add print statements to trace execution |
| Wrong statistics | Numbers don't match expectations | Verify calculation logic step by step |
| Model doesn't stop | Continues running past end condition | Check stop conditions in all relevant places |
| Unrealistic outcomes | Results don't make sense | Validate assumptions and parameter ranges |

---

## Final Project: Complete Research Model

Put all your skills together in a comprehensive modeling project.

### Project Requirements

```{admonition} Capstone Project Guidelines
:class: note

**Objective:** Create a complete agent-based model addressing a real social science research question

**Technical Requirements:**
- Working NetLogo model with advanced features
- Systematic data collection and analysis
- Professional documentation and presentation
- Integration with external tools for analysis

**Research Requirements:**  
- Clear research question with real-world relevance
- Connection to existing literature
- Validation against empirical data or patterns
- Policy-relevant insights

**Deliverables:**
1. **NetLogo model** (.nlogo file) with complete functionality
2. **Research paper** (5-10 pages) following academic format
3. **Data analysis** with statistical tests and visualizations  
4. **Presentation** (10-15 minutes) for class
5. **Code repository** with documentation for reproducibility
```

### Success Criteria

**Excellent projects demonstrate:**

- **Technical sophistication** beyond basic tutorials
- **Methodological rigor** in experimentation and analysis
- **Clear communication** to both technical and general audiences
- **Real insights** that advance understanding of social phenomena
- **Reproducible research** that others can build upon

---

## Congratulations!

You have completed the NetLogo tutorial series and developed sophisticated computational social science skills.

```{admonition} Skills You've Mastered
:class: tip

**Programming Skills:**
✓ NetLogo syntax and programming concepts  
✓ Agent-based model design and implementation  
✓ Advanced features: breeds, extensions, networks  
✓ Performance optimization and debugging  

**Research Skills:**
✓ Research question formulation for computational modeling  
✓ Systematic experimentation and data collection  
✓ Statistical analysis of simulation results  
✓ Model validation and comparison with real data  

**Professional Skills:**
✓ Code documentation and version control  
✓ Reproducible research practices  
✓ Academic writing and presentation  
✓ Integration with other software tools  
```

### Where to Go Next

**Advanced NetLogo:**
- Explore the NetLogo Models Library for inspiration
- Learn about machine learning and AI in NetLogo  
- Try large-scale modeling with cluster computing

**Other Modeling Platforms:**
- Mesa (Python) for web-based models
- MASON (Java) for high-performance simulation
- R packages for network and spatial modeling

**Research Opportunities:**
- Collaborate with domain experts on real problems
- Contribute to open-source modeling projects
- Pursue graduate research in computational social science

**Professional Applications:**
- Policy analysis and evaluation
- Business strategy and market modeling
- Urban planning and smart cities
- Public health and epidemiology

You now have the tools to make meaningful contributions to our understanding of complex social phenomena. Use them wisely and ethically to make the world a better place!

### Keep Learning

The field of computational social science is rapidly evolving. Stay current by:

- **Following research conferences** (AAMAS, ESSA, SIMSOC)
- **Reading key journals** (JASSS, Computational and Mathematical Organization Theory)
- **Joining online communities** (NetLogo Users Group, Stack Overflow)
- **Taking advanced courses** in complex systems, network science, and machine learning

The journey of discovery has just begun!
