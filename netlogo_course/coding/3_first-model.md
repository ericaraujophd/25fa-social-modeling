# Building Your First Complete Model

Congratulations! You now have all the skills needed to build a complete agent-based model from scratch. This tutorial will guide you through the entire process, from planning to implementation to analysis.

```{note}
**Time Required:** 75 minutes  
**Prerequisites:** Completed previous NetLogo tutorials
```

## The Model Development Process

Building a good agent-based model is like writing a research paper or designing an experiment. It requires careful planning, iterative development, and thoughtful analysis.

```{admonition} The ODFM Framework
:class: tip

We'll use the **ODD (Overview, Design concepts, Details)** framework, modified for beginners:

**O - Overview:** What question are you asking?  
**D - Design:** What are your agents and environment?  
**F - Function:** How do agents behave and interact?  
**M - Model:** Build it step by step!  
```

### Step 1: Choose Your Research Question

Every good model starts with a clear question about social phenomena.

```{admonition} Good Research Questions for Agent-Based Models
:class: example

**Clear and Specific:**
- "How do individual preferences for similar neighbors lead to residential segregation?"
- "What factors determine whether cooperation emerges in a community?"
- "How does misinformation spread through social networks?"

**Too Vague:**
- "How do people behave?"
- "What makes societies work?"
- "Why do people move?"

**Good Questions:**
- Start with individual behavior
- Ask about collective outcomes  
- Involve interactions between agents
- Can be tested with observable patterns
```

---

## Mini-Project: Rumor Spreading Model

Let's build a complete model together to demonstrate the process. We'll model how rumors spread through a community.

### Step 1: Research Question and Overview

**Research Question:** "How does a rumor spread through a community, and what factors determine how far and fast it spreads?"

**Overview:**
- **Agents:** Individual people in a community
- **Environment:** Social space where people meet and interact
- **Process:** People with rumor share it with nearby people
- **Outcome:** Patterns of rumor spread over time

### Step 2: Design the Agents

What properties should our people have?

```{admonition} Agent Design Questions
:class: question

Think about real rumor spreading:

1. **Who spreads rumors?** Social people? Credulous people? People who like drama?
2. **Who believes rumors?** Everyone? Only if it comes from trusted sources?
3. **What affects spreading?** Social connections? Personality? Topic relevance?
4. **How do rumors change?** Do they get distorted? Forgotten? Verified?
```

**Our Agent Properties:**
```netlogo
turtles-own [
  knows-rumor?          ; Does this person know the rumor?
  believes-rumor?       ; Does this person believe it?
  social-activity       ; How social is this person? (0-10)
  credibility          ; How much others trust this person (0-10)  
  skepticism           ; How skeptical is this person? (0-10)
  times-shared         ; How many times has this person shared the rumor?
  heard-from           ; Who did this person hear the rumor from?
]
```

### Step 3: Design the Environment

How should we represent the social space?

**Option 1: Physical space** - People move around and meet others nearby  
**Option 2: Social network** - Fixed connections between friends  
**Option 3: Mixed model** - Some physical movement, some social connections

**We'll choose Option 1** for simplicity, but discuss how to extend it.

### Step 4: Design the Behaviors

What do our agents do each time step?

```{admonition} Behavior Planning
:class: note

**Basic Behaviors:**
1. **Move around** the social space
2. **Meet other people** in nearby locations
3. **Share rumors** if they know one and are social enough
4. **Decide whether to believe** rumors they hear
5. **Sometimes forget** or verify rumors

**Key Questions:**
- How likely is sharing? (depends on social-activity?)
- How likely is believing? (depends on credibility of source and skepticism of listener?)
- How does the rumor change over time?
```

---

## Implementation: Building the Model Step by Step

Now let's build our rumor model piece by piece.

### Step 1: Basic Setup

```netlogo
turtles-own [
  knows-rumor?
  believes-rumor?
  social-activity
  credibility
  skepticism
  times-shared
  heard-from
]

to setup
  clear-all
  
  ; Create population
  create-turtles 200 [
    ; Initialize properties
    set knows-rumor? false
    set believes-rumor? false
    set social-activity random 11        ; 0-10 social activity
    set credibility 3 + random 7         ; 3-10 credibility  
    set skepticism random 11             ; 0-10 skepticism
    set times-shared 0
    set heard-from nobody
    
    ; Visual setup
    set color blue                       ; Blue = doesn't know rumor
    set size 0.5 + (social-activity / 20) ; More social = bigger
    setxy random-xcor random-ycor        ; Random starting position
  ]
  
  ; Start rumor with a few people
  ask n-of 3 turtles [
    set knows-rumor? true
    set believes-rumor? true
    set color red                        ; Red = knows and believes rumor
  ]
  
  reset-ticks
end
```

**Test it:** Run `setup` and see your initial population.

### Step 2: Basic Movement

```netlogo
to move
  ask turtles [
    ; More social people move around more
    let movement-distance social-activity / 5
    right random 60 - 30                ; Turn randomly
    forward movement-distance            ; Move based on social activity
  ]
end
```

**Test it:** Run `move` several times and watch people move around.

### Step 3: Rumor Sharing

```netlogo
to share-rumors
  ask turtles with [knows-rumor? and believes-rumor?] [
    ; Find nearby people to potentially share with
    let nearby-people other turtles in-radius 2
    
    if any? nearby-people [
      ; Decide whether to share based on social activity
      let sharing-probability social-activity / 10
      
      if random-float 1 < sharing-probability [
        ; Choose someone to share with
        let target one-of nearby-people
        
        ask target [
          if not knows-rumor? [  ; Only if they don't know it yet
            set knows-rumor? true
            set heard-from myself
            set color yellow      ; Yellow = knows but hasn't decided to believe
            
            ; Update sharer's count
            ask myself [ set times-shared times-shared + 1 ]
          ]
        ]
      ]
    ]
  ]
end
```

**Test it:** Run `setup`, then alternate between `move` and `share-rumors` to see rumors spread.

### Step 4: Belief Decision

```netlogo
to decide-belief
  ask turtles with [knows-rumor? and color = yellow] [
    ; Decision based on source credibility and own skepticism
    let source-credibility [credibility] of heard-from
    let belief-probability (source-credibility - skepticism) / 10
    
    ; Add some randomness
    set belief-probability belief-probability + (random-float 0.4 - 0.2)
    
    ; Ensure probability is between 0 and 1
    if belief-probability < 0 [ set belief-probability 0 ]
    if belief-probability > 1 [ set belief-probability 1 ]
    
    ; Decide whether to believe
    if random-float 1 < belief-probability [
      set believes-rumor? true
      set color red         ; Red = believes and will share
    ] [
      set believes-rumor? false  
      set color gray        ; Gray = knows but doesn't believe
    ]
  ]
end
```

### Step 5: Put It All Together

```netlogo
to go
  move
  share-rumors
  decide-belief
  tick
end
```

### Step 6: Add Data Collection

```netlogo
; Add these reporters for data collection
to-report total-knows
  report count turtles with [knows-rumor?]
end

to-report total-believes  
  report count turtles with [believes-rumor?]
end

to-report percent-knows
  report (total-knows / count turtles) * 100
end

to-report percent-believes
  report (total-believes / count turtles) * 100
end
```

---

## Testing and Experimentation

Now let's systematically test our model to understand how it behaves.

### Activity 1: Basic Model Behavior

1. **Run the model:** Execute `setup` then click `go` repeatedly (or use forever button)
2. **Watch the colors:** How do rumors spread visually?
3. **Monitor the numbers:** Track `total-knows` and `total-believes` over time

```{admonition} Initial Observations
:class: question

- **Speed of spread:** How quickly does the rumor reach most of the population?
- **Belief patterns:** What percentage of people who hear the rumor actually believe it?
- **Spatial patterns:** Do rumors spread evenly or in clusters?
- **Stopping points:** Does the rumor eventually stop spreading? Why?
```

### Activity 2: Parameter Experiments

Test how different factors affect rumor spreading:

**Experiment 1: Population Density**
```netlogo
; In setup, try different numbers of turtles:
create-turtles 100    ; Sparse population
create-turtles 400    ; Dense population
```

**Experiment 2: Initial Spreaders**
```netlogo
; In setup, try different numbers of initial rumor-knowers:
ask n-of 1 turtles [...]    ; Single source
ask n-of 10 turtles [...]   ; Multiple sources
```

**Experiment 3: Social Activity Distribution**
```netlogo
; Try different social activity patterns:
set social-activity random 6          ; Low social activity (0-5)
set social-activity 5 + random 6      ; High social activity (5-10)
```

```{admonition} Experimental Questions
:class: question

For each experiment:

1. **How does this change affect the speed of rumor spreading?**
2. **Does it change the final percentage of people who know/believe the rumor?**
3. **What real-world situations might this represent?**
4. **What insights does this provide about rumor control or information campaigns?**
```

---

## Model Extensions and Improvements

Once you have a basic working model, you can add sophisticated features.

### Extension 1: Rumor Verification

```netlogo
to verify-rumors
  ask turtles with [knows-rumor?] [
    ; Small chance of verifying rumor each turn
    if random 100 < 2 [  ; 2% chance per turn
      ; For simplicity, assume verification shows rumor is false
      set believes-rumor? false
      set color gray
    ]
  ]
end
```

### Extension 2: Rumor Mutation

```netlogo
turtles-own [
  rumor-version    ; Different versions of the rumor (0, 1, 2, ...)
]

; In sharing code, add chance of mutation:
ask target [
  set knows-rumor? true
  set rumor-version [rumor-version] of myself
  
  ; Small chance rumor changes
  if random 100 < 10 [  ; 10% chance of mutation
    set rumor-version rumor-version + 1
  ]
]
```

### Extension 3: Social Networks

```netlogo
turtles-own [
  friends    ; Other turtles this agent is connected to
]

to setup-friendships
  ask turtles [
    set friends n-of (2 + random 6) other turtles  ; 2-7 friends each
  ]
end

to share-with-friends
  ask turtles with [knows-rumor? and believes-rumor?] [
    ask friends [
      ; Share with friends regardless of physical proximity
      if not knows-rumor? [
        set knows-rumor? true
        set heard-from myself
        set color yellow
      ]
    ]
  ]
end
```

---

## Model Documentation and Presentation

Good models need clear documentation explaining what they do and why.

### Writing Your Model Description

```{admonition} Model Documentation Template
:class: note

**1. Purpose and Research Question**
- What social phenomenon are you modeling?
- What specific question are you trying to answer?

**2. Agents and Environment**  
- Who are the agents and what do they represent?
- What properties do they have and why?
- How is the environment structured?

**3. Agent Behaviors**
- What do agents do each time step?
- How do they make decisions?
- How do they interact with each other and the environment?

**4. Key Assumptions**
- What simplifications have you made?
- What aspects of reality are you ignoring?
- How might these affect your results?

**5. Interesting Outcomes**
- What patterns emerge from your model?
- How do different parameters affect these patterns?
- What insights does this provide about the real world?
```

### Activity 3: Document Your Model

Write a brief description of the rumor model using the template above.

---

## Analyzing and Interpreting Results

Agent-based models generate complex data that needs careful interpretation.

### Types of Analysis

**1. Pattern Analysis**
- What spatial or temporal patterns emerge?
- How do these change with different parameters?

**2. Sensitivity Analysis**  
- Which parameters have the biggest effect on outcomes?
- How robust are your results to small changes?

**3. Comparison with Reality**
- How well do model patterns match real-world observations?
- What aspects of reality does your model capture or miss?

### Activity 4: Systematic Analysis

Design and conduct a systematic study of your rumor model:

```{admonition} Analysis Plan
:class: question

1. **Choose 2-3 parameters** to vary systematically (e.g., initial spreaders, population density, skepticism levels)

2. **Design experiments** testing different combinations of these parameters

3. **Run multiple trials** for each combination (models have randomness!)

4. **Collect data** on key outcomes (final spread percentage, time to peak, etc.)

5. **Analyze patterns** - which factors matter most?

6. **Interpret results** - what do these patterns tell us about real rumor spreading?
```

---

## Common Pitfalls and How to Avoid Them

### Model Development Pitfalls

**Pitfall 1: "Everything but the kitchen sink"**
- **Problem:** Trying to include every possible realistic detail
- **Solution:** Start simple, add complexity gradually

**Pitfall 2: "It doesn't work perfectly"**
- **Problem:** Expecting models to perfectly match reality
- **Solution:** Focus on insights and patterns, not perfect prediction

**Pitfall 3: "Random isn't realistic"**
- **Problem:** Avoiding randomness because "people aren't random"
- **Solution:** Randomness represents uncertainty and individual differences

### Analysis Pitfalls

**Pitfall 1: "One run is enough"**
- **Problem:** Drawing conclusions from a single model run
- **Solution:** Always run multiple trials and look at averages

**Pitfall 2: "Correlation implies causation"**
- **Problem:** Assuming parameter changes cause outcome changes
- **Solution:** Think carefully about causal mechanisms in your model

**Pitfall 3: "The model proves this"**
- **Problem:** Claiming models prove things about the real world
- **Solution:** Models suggest possibilities and test logical consistency

---

## Your Turn: Independent Model Building

Now it's time to build your own complete model from scratch!

### Final Project Guidelines

```{admonition} Build Your Own Model
:class: note

**Choose a social phenomenon that interests you:**

**Examples:**
- How do fashion trends spread through a school?
- What determines whether protests grow or shrink?
- How do housing prices affect neighborhood composition?
- Why do some online content go viral while others don't?
- How do study habits spread among students?
- What factors determine cooperation in group projects?

**Requirements:**
1. **Clear research question** and real-world motivation
2. **Agent design** with at least 3 meaningful properties
3. **Environment design** that affects agent behavior  
4. **Behavioral rules** that create interesting interactions
5. **Data collection** to track important outcomes
6. **Experimental analysis** testing different scenarios
7. **Documentation** explaining your model and insights

**Deliverables:**
- Working NetLogo model with clear comments
- Brief written explanation (2-3 pages)
- Demonstration of interesting patterns or insights
```

### Success Criteria

```{admonition} What Makes a Good Model?
:class: tip

**Technical Quality:**
- Model runs without errors
- Code is well-commented and organized
- Parameters can be easily adjusted for experiments

**Conceptual Quality:**  
- Clear connection to real-world phenomenon
- Reasonable agent behaviors and interactions
- Thoughtful analysis of emergent patterns

**Insight Quality:**
- Model reveals something non-obvious about the phenomenon
- Results provide practical insights or policy implications
- Analysis considers model limitations and assumptions
```

---

## Key Skills Mastered

```{admonition} Complete Model Building Skills You've Learned
:class: tip

✓ **Research question formulation** for agent-based modeling  
✓ **Agent and environment design** based on real-world phenomena  
✓ **Behavioral rule implementation** creating realistic interactions  
✓ **Iterative model development** building complexity step by step  
✓ **Systematic experimentation** testing model behavior  
✓ **Data collection and analysis** extracting insights from model runs  
✓ **Model documentation** explaining models clearly to others  
✓ **Critical evaluation** understanding model limitations and assumptions  
```

---

## Looking Ahead

Congratulations! You now have the complete toolkit for agent-based modeling. In the next tutorial, we'll explore more advanced topics like data analysis and connecting models to real-world data.

```{admonition} Coming Up: Data Analysis and Validation
:class: note

**Next Tutorial: Data Collection and Analysis**
- Systematic data collection from models
- Statistical analysis of model outputs  
- Connecting models to real-world data
- Advanced visualization techniques
- BehaviorSpace for automated experiments

You're now ready to conduct serious computational social science research!
```

### Immediate Next Steps

1. **Complete your model** following the project guidelines
2. **Test thoroughly** with different parameter combinations  
3. **Document carefully** so others can understand and use your model
4. **Prepare to present** your model and key insights to the class

You've accomplished something remarkable - building a complete computational model of social behavior from scratch. This is a skill that will serve you throughout your academic and professional career!
