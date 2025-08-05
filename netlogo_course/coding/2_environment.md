# Environment and Patches

Welcome to understanding how agents interact with their environment! In NetLogo, the environment is made up of "patches" - the grid squares that form the world where your agents live.

```{note}
**Time Required:** 45 minutes  
**Prerequisites:** Completed "Working with Agents (Turtles)"
```

## Understanding the NetLogo World

The NetLogo world is divided into a grid of square cells called **patches**. Think of patches as:

- **Locations** where things can happen
- **Containers** that can hold resources, information, or properties
- **Environmental factors** that influence agent behavior
- **Context** that shapes social interactions

```{admonition} Patches in Social Science Models
:class: tip

Patches can represent:

- **Geographic locations:** neighborhoods, countries, markets
- **Social spaces:** classrooms, workplaces, online communities  
- **Abstract concepts:** topics in a discussion, positions on an issue
- **Resource distributions:** wealth, information, opportunities
- **Environmental conditions:** pollution levels, temperature, safety
```

### Patches vs. Turtles

| **Turtles (Agents)** | **Patches (Environment)** |
|---------------------|---------------------------|
| Move around | Stay in fixed locations |
| Represent individuals | Represent places or conditions |
| Have behaviors | Have properties |
| Make decisions | Provide context |
| Interact with each other | Influence agent behavior |

---

## Basic Patch Operations

Let's start by learning how to work with patches.

### Accessing Patches

Try these commands in the NetLogo Command Center:

```netlogo
ask patches [ set pcolor red ]           ; Make all patches red
ask patches [ set pcolor random 140 ]    ; Random patch colors
ask patch 0 0 [ set pcolor blue ]        ; Make center patch blue
```

### Patch Coordinates

Every patch has coordinates (xcor, ycor):
- **Patch 0 0** is at the center of the world
- **Positive x** goes right, **negative x** goes left  
- **Positive y** goes up, **negative y** goes down

```netlogo
; Color patches based on their location
ask patches [
  if pxcor > 0 and pycor > 0 [ set pcolor green ]    ; Upper right
  if pxcor < 0 and pycor > 0 [ set pcolor blue ]     ; Upper left  
  if pxcor > 0 and pycor < 0 [ set pcolor yellow ]   ; Lower right
  if pxcor < 0 and pycor < 0 [ set pcolor red ]      ; Lower left
]
```

### Activity 1: Create Environmental Zones

Try creating different environmental patterns:

```netlogo
; Concentric circles (distance from center)
ask patches [
  let distance-from-center sqrt (pxcor ^ 2 + pycor ^ 2)
  set pcolor scale-color green distance-from-center 0 20
]

; Horizontal stripes
ask patches [
  if pycor mod 4 = 0 [ set pcolor blue ]
  if pycor mod 4 = 1 [ set pcolor red ]
  if pycor mod 4 = 2 [ set pcolor green ]
  if pycor mod 4 = 3 [ set pcolor yellow ]
]

; Random resource patches
ask patches [
  set pcolor white
  if random 100 < 10 [ set pcolor green ]  ; 10% chance of resources
]
```

```{admonition} Pattern Questions
:class: question

1. **Which pattern** would be best for modeling urban vs. rural areas?
2. **How could you modify** the random resources to create clusters?
3. **What real-world environments** do these patterns remind you of?
```

---

## Custom Patch Variables

Just like turtles, patches can have custom properties that make sense for your model.

### Declaring Patch Variables

```netlogo
patches-own [
  wealth          ; Economic resources in this location
  pollution       ; Environmental quality
  population      ; How many people live here
  temperature     ; Climate conditions
  safety-level    ; Crime or conflict measures
  information     ; Knowledge or rumors present
]
```

### Initializing Patch Properties

```netlogo
to setup-environment
  ask patches [
    set wealth random 100               ; Random wealth distribution
    set pollution 0                     ; Start clean
    set population 0                    ; Start empty
    set temperature 60 + random 40     ; Temperature 60-100°F
    set safety-level 5 + random 5      ; Safety level 5-10
    
    ; Visual representation
    set pcolor scale-color green wealth 0 100
  ]
end
```

### Activity 2: Build a Realistic Environment

Let's create an environment that represents a city with different neighborhoods:

```netlogo
patches-own [
  housing-cost
  job-opportunities  
  school-quality
  crime-rate
  environmental-quality
  neighborhood-type    ; 0=downtown, 1=suburban, 2=rural
]

to setup-city
  ask patches [
    ; Determine neighborhood type based on distance from center
    let distance-from-center sqrt (pxcor ^ 2 + pycor ^ 2)
    
    if distance-from-center < 5 [
      set neighborhood-type 0           ; Downtown
      set housing-cost 80 + random 20   ; Expensive
      set job-opportunities 80 + random 20  ; Many jobs
      set crime-rate 3 + random 4       ; Higher crime
    ]
    
    if distance-from-center >= 5 and distance-from-center < 15 [
      set neighborhood-type 1           ; Suburban  
      set housing-cost 40 + random 40   ; Moderate cost
      set job-opportunities 30 + random 40  ; Fewer jobs
      set crime-rate 1 + random 3       ; Lower crime
    ]
    
    if distance-from-center >= 15 [
      set neighborhood-type 2           ; Rural
      set housing-cost 20 + random 30   ; Cheaper
      set job-opportunities 10 + random 20  ; Few jobs
      set crime-rate 0 + random 2       ; Very low crime
    ]
    
    ; Set other properties
    set school-quality 30 + random 70
    set environmental-quality 100 - (crime-rate * 10) - random 20
    
    ; Color by neighborhood type
    if neighborhood-type = 0 [ set pcolor gray ]
    if neighborhood-type = 1 [ set pcolor green ]  
    if neighborhood-type = 2 [ set pcolor brown ]
  ]
end
```

```{admonition} City Model Questions
:class: question

After running `setup-city`:

1. **What patterns** do you see in the city layout?
2. **How realistic** are the relationships between distance, cost, and opportunities?
3. **What factors** might influence where people choose to live?
4. **How could you improve** this environmental model?
```

---

## Turtle-Patch Interactions

The real power comes from having agents interact with their environment.

### Turtles Reading Patch Information

Turtles can access information about the patch they're currently on:

```netlogo
ask turtles [
  let current-housing-cost [housing-cost] of patch-here
  let current-safety [safety-level] of patch-here
  
  ; Make decisions based on local environment
  if current-housing-cost > 60 [ 
    set color red        ; Show stress about high costs
  ]
]
```

### Turtles Modifying Their Environment

Agents can also change the environment:

```netlogo
ask turtles [
  ; Increase population count on current patch
  ask patch-here [ set population population + 1 ]
  
  ; Generate some pollution
  ask patch-here [ set pollution pollution + 0.1 ]
  
  ; Contribute to local economy
  ask patch-here [ set wealth wealth + 1 ]
]
```

### Activity 3: Residential Choice Model

Let's create agents that choose where to live based on environmental factors:

```netlogo
turtles-own [
  income
  family-size
  preference-safety      ; How much they value safety (0-10)
  preference-cost        ; How much they care about cost (0-10)
  preference-jobs        ; How much they value job opportunities (0-10)
  satisfaction           ; How happy they are with current location
]

to setup-residents
  create-turtles 100 [
    set income 20000 + random 60000     ; $20k-$80k income
    set family-size 1 + random 4        ; 1-4 people
    set preference-safety random 11     ; 0-10 preference
    set preference-cost random 11       ; 0-10 preference  
    set preference-jobs random 11       ; 0-10 preference
    
    ; Start at random location
    setxy random-xcor random-ycor
    
    ; Size based on family size
    set size 0.5 + (family-size * 0.3)
  ]
end

to evaluate-satisfaction
  ask turtles [
    let local-cost [housing-cost] of patch-here
    let local-safety 10 - [crime-rate] of patch-here  ; Convert crime to safety
    let local-jobs [job-opportunities] of patch-here
    
    ; Calculate satisfaction based on preferences
    let cost-satisfaction 10 - (local-cost / 10)  ; Lower cost = higher satisfaction
    let safety-satisfaction local-safety
    let job-satisfaction local-jobs / 10
    
    set satisfaction (
      (preference-cost * cost-satisfaction) +
      (preference-safety * safety-satisfaction) +  
      (preference-jobs * job-satisfaction)
    ) / (preference-cost + preference-safety + preference-jobs)
    
    ; Color based on satisfaction
    set color scale-color red satisfaction 0 10
  ]
end

to move-if-unhappy
  ask turtles [
    if satisfaction < 5 [  ; If unhappy with current location
      ; Look for better nearby locations
      let nearby-patches patches in-radius 5
      let best-patch max-one-of nearby-patches [
        let cost-score 10 - (housing-cost / 10)
        let safety-score 10 - crime-rate
        let job-score job-opportunities / 10
        
        (([preference-cost] of myself * cost-score) +
         ([preference-safety] of myself * safety-score) +
         ([preference-jobs] of myself * job-score)) /
        ([preference-cost] of myself + [preference-safety] of myself + [preference-jobs] of myself)
      ]
      
      if best-patch != nobody [
        move-to best-patch
      ]
    ]
  ]
end
```

```{admonition} Residential Choice Experiment
:class: question

1. **Set up the city:** Run `setup-city`
2. **Add residents:** Run `setup-residents`  
3. **Check satisfaction:** Run `evaluate-satisfaction`
4. **Allow movement:** Run `move-if-unhappy` several times

**Observe:**
- Where do residents tend to cluster?
- Do high-income and low-income residents segregate?
- How do different preferences affect residential patterns?
- What happens to satisfaction levels over time?
```

---

## Environmental Dynamics

Environments can change over time, creating feedback loops with agent behavior.

### Patch Updates Based on Agent Activity

```netlogo
to update-environment
  ask patches [
    ; Population affects local economy
    set wealth wealth + (population * 0.1)
    
    ; Too many people creates pollution and crime
    if population > 5 [
      set pollution pollution + ((population - 5) * 0.2)
      set crime-rate crime-rate + ((population - 5) * 0.1)
    ]
    
    ; Wealth can improve local conditions
    if wealth > 50 [
      set school-quality school-quality + 0.5
      set environmental-quality environmental-quality + 0.2
    ]
    
    ; Reset population count for next round
    set population 0
    
    ; Update visual representation
    set pcolor scale-color green wealth 0 100
  ]
end
```

### Activity 4: Complete Urban Dynamics Model

Combine everything into a dynamic model:

```netlogo
to go
  ; Agents evaluate their current situation
  evaluate-satisfaction
  
  ; Update population counts based on current agent locations
  ask turtles [
    ask patch-here [ set population population + 1 ]
  ]
  
  ; Unhappy agents try to move
  move-if-unhappy
  
  ; Environment responds to agent activity
  update-environment
  
  ; Optional: some agents move randomly (representing job changes, etc.)
  ask n-of 5 turtles [
    setxy random-xcor random-ycor
  ]
  
  tick
end
```

```{admonition} Full Model Analysis
:class: question

Run the complete model for 50-100 time steps:

1. **Segregation patterns:** Do similar agents cluster together?
2. **Environmental changes:** How do neighborhoods evolve over time?
3. **Feedback loops:** How do agent choices affect future environmental conditions?
4. **Policy implications:** What interventions might improve urban dynamics?
```

---

## Advanced Patch Techniques

### Diffusion: Spreading Environmental Effects

```netlogo
to diffuse-pollution
  ask patches [
    ; Pollution spreads to nearby patches
    let nearby-pollution sum [pollution] of neighbors
    set pollution pollution + (nearby-pollution * 0.1)
    
    ; Natural decay
    set pollution pollution * 0.95
  ]
end
```

### Patch Networks: Creating Connections

```netlogo
patches-own [ connected-patches ]

to setup-patch-network
  ask patches [
    ; Connect to patches within distance 3
    set connected-patches patches in-radius 3
  ]
end

to information-spread
  ask patches with [information > 0] [
    ask connected-patches [
      if information = 0 [  ; If this patch doesn't have info yet
        if random 100 < 20 [  ; 20% chance of transmission
          set information 1
          set pcolor yellow  ; Show information presence
        ]
      ]
    ]
  ]
end
```

---

## Key Concepts Mastered

```{admonition} Environment Modeling Skills You've Learned
:class: tip

✓ **Patch properties** and custom variables for environmental characteristics  
✓ **Spatial patterns** representing realistic geographic and social spaces  
✓ **Agent-environment interaction** where agents read and respond to local conditions  
✓ **Environmental feedback** where agent actions change environmental properties  
✓ **Dynamic environments** that evolve over time  
✓ **Complex spatial models** integrating agents, environment, and time  
```

---

## Real-World Applications

The techniques you've learned can model many real-world phenomena:

```{admonition} Applications of Agent-Environment Models
:class: note

**Urban Planning:**
- Residential segregation and neighborhood dynamics
- Traffic flow and transportation planning  
- Economic development and gentrification

**Environmental Science:**
- Pollution spread and environmental justice
- Resource management and conservation
- Climate change adaptation

**Social Science:**
- Information diffusion through communities
- Social media and online communities
- Cultural change and norm transmission

**Economics:**  
- Market formation and economic geography
- Innovation spread and technology adoption
- Supply chain and logistics optimization
```

---

## Looking Ahead

You now have all the core skills needed to build sophisticated agent-based models! In the next tutorial, we'll put everything together to build a complete model from scratch.

### Self-Assessment

```{admonition} Can You...?
:class: question

- ✓ Create patches with custom properties representing environmental conditions?
- ✓ Program agents to read and respond to environmental information?  
- ✓ Design agent behaviors that modify the environment?
- ✓ Create dynamic feedback loops between agents and environment?
- ✓ Build realistic spatial contexts for social phenomena?
```

### Practice Challenge

```{admonition} Environmental Model Challenge
:class: note

**Design an agent-environment model for a social phenomenon of your choice:**

**Examples:**
- **School choice:** Students/families choosing schools based on quality, distance, cost
- **Business location:** Companies choosing locations based on costs, customers, competition
- **Social media:** Users posting content based on local network engagement
- **Innovation adoption:** New technologies spreading through geographic regions

**Requirements:**
1. **Patches represent** relevant spatial or social locations
2. **Agents make decisions** based on local environmental conditions
3. **Agent actions change** the environment over time
4. **Visual representation** shows both agents and environmental patterns
5. **Interesting emergent patterns** arise from agent-environment interactions

**Presentation:** Be ready to explain your model logic and demonstrate key patterns.
```

---

## Next Tutorial Preview

```{admonition} Coming Up: Building Your First Complete Model
:class: note

**Next Tutorial: Building Your First Complete Model**
- Planning and designing complete models
- Integrating agents, environment, and time
- Testing and validating model behavior  
- Documentation and presentation

You're ready to create sophisticated models that provide real insights into social phenomena!
```

Excellent progress! You now understand how to create rich, dynamic environments that interact meaningfully with agent behavior - a crucial skill for realistic social modeling.
