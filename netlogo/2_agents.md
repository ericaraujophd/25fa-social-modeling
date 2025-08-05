# Working with Agents (Turtles)

Time to meet the stars of your models - the individual agents! In NetLogo, these are called "turtles" and they represent people, animals, organizations, or any individual actors.

```{note}
**Time Required:** 60 minutes  
**Prerequisites:** Basic Programming Concepts
```

## Meet the Turtles (10 min)

### Turtles = Individual Agents in Your Model

In NetLogo, **turtles represent the individual actors** in whatever social system you're studying:

**Examples:**
- **Sociology:** People in a neighborhood, members of an organization
- **Economics:** Individual traders, consumers, firms
- **Political Science:** Voters, political parties, countries
- **Psychology:** Individual decision-makers with different cognitive styles

### Each Turtle Has Properties

Just like real people have characteristics, each turtle can have properties:

**Built-in properties (every turtle has these):**
- `color` - what color is this turtle?
- `size` - how big should this turtle appear?
- `xcor` and `ycor` - where is this turtle located?
- `heading` - which direction is this turtle facing?
- `who` - what is this turtle's unique ID number?

**Custom properties (you define these):**
- `age` - how old is this person?
- `wealth` - how much money does this person have?
- `opinion` - what does this person believe about an issue?
- `social-connections` - how many friends does this person have?

### Turtles Can Move, Interact, Make Decisions

Turtles aren't just static dots - they can:
- **Move** around the world following rules
- **Interact** with other nearby turtles  
- **Make decisions** based on their situation
- **Change** their properties over time
- **Remember** things that happened to them

```{admonition} Key Insight
:class: tip

**Individual turtle behaviors create collective patterns.** When hundreds of turtles follow simple rules, complex social phenomena emerge that no single turtle "intended" or "planned."
```

---

## Creating and Controlling Turtles (20 min)

Let's learn how to bring agents to life and give them instructions.

### `create-turtles` - Bringing Agents to Life

The most basic command for creating a population:

```netlogo
create-turtles 100
```

This creates 100 turtles, each with:
- Random color
- Random location  
- Random heading (direction)
- Size 1, ID numbers 0-99

**Create specific numbers:**
```netlogo
create-turtles 50    ; Create 50 turtles
create-turtles 200   ; Create 200 turtles
```

### `ask turtles` - Giving Instructions to All or Some Agents

The `ask` command lets you give instructions to turtles:

**Ask all turtles to do something:**
```netlogo
ask turtles [
  forward 1           ; Every turtle moves forward
  set color red       ; Every turtle turns red
]
```

**Ask specific turtles to do something:**
```netlogo
ask turtle 0 [         ; Ask turtle #0 specifically
  set color blue
  set size 3
]

ask turtles with [color = red] [    ; Ask only red turtles
  forward 2
]

ask n-of 10 turtles [  ; Ask 10 randomly chosen turtles
  set color green
]
```

### Basic Turtle Commands

**Movement commands:**
- `forward 1` - move forward 1 step
- `right 90` - turn right 90 degrees
- `left 45` - turn left 45 degrees  
- `back 1` - move backward 1 step

**Property commands:**
- `set color red` - change color to red
- `set size 2` - make turtle twice as big
- `set heading 0` - face north (heading 0)

**Try it yourself:**
```netlogo
create-turtles 20 [
  setxy random-xcor random-ycor    ; Random position
  set color one-of [red blue green yellow]  ; Random color
]

ask turtles [
  right random 360    ; Turn random direction
  forward 3           ; Move forward
]
```

### Activity 1: Build a Flock

**Goal:** Create turtles that move in the same direction

**Step 1:** Create the turtles
```netlogo
create-turtles 50 [
  setxy random-xcor random-ycor
  set color yellow
  set heading 90  ; All face east
]
```

**Step 2:** Make them move together
```netlogo
ask turtles [
  forward 1
]
```

**Step 3:** Run this repeatedly and watch your flock move across the screen!

```{admonition} What Do You Observe?
:class: question

- Do the turtles stay together as they move?
- What happens when they reach the edge of the world?
- How could you make them turn together?
```

---

## Making Turtles Unique (15 min)

Real people aren't identical - let's give our turtles individual differences.

### Giving Turtles Different Properties

**Random assignment:**
```netlogo
create-turtles 100 [
  set age 18 + random 62        ; Age between 18-79
  set wealth random 10000       ; Wealth between $0-$9,999
  set social-activity random 11 ; Social activity 0-10
]
```

**Systematic assignment:**
```netlogo
create-turtles 100 [
  set age 20 + who / 2          ; Age increases with ID
  if who < 50 [ set color red ] ; First 50 are red
  if who >= 50 [ set color blue ] ; Last 50 are blue
]
```

**Using probability distributions:**
```netlogo
create-turtles 100 [
  ; Most people are middle-aged, few are very young or old
  set age 20 + random-normal 25 10
  
  ; 70% are cooperative, 30% are competitive  
  if random 100 < 70 [ set strategy "cooperative" ]
  if random 100 >= 70 [ set strategy "competitive" ]
]
```

### Random vs. Systematic Assignment

**Random assignment** creates natural variation:
- `random 10` gives numbers 0-9 randomly
- `one-of [red green blue]` picks one color randomly
- `random-normal 50 15` gives normally distributed numbers around 50

**Systematic assignment** creates patterns:
- Assign properties based on `who` number
- Create spatial gradients
- Assign roles or types deliberately

### Using `who` Numbers to Identify Specific Turtles

Every turtle has a unique `who` number (0, 1, 2, 3, ...):

```netlogo
ask turtle 0 [ set color red ]        ; Color turtle #0 red
ask turtle 5 [ forward 10 ]           ; Move turtle #5 forward
ask turtles with [who < 10] [ ... ]   ; First 10 turtles
ask turtles with [who mod 2 = 0] [ ... ] ; Even-numbered turtles
```

### Activity 2: Random Walk

**Goal:** Make turtles explore randomly

```netlogo
to setup
  clear-all
  create-turtles 20 [
    setxy random-xcor random-ycor
    set color one-of [red green blue yellow orange]
    set size 1 + random 2  ; Size between 1-3
  ]
end

to go
  ask turtles [
    right random 360       ; Turn random direction
    forward 1              ; Move forward
    if xcor > max-pxcor or xcor < min-pxcor [ 
      set xcor random-xcor ; Wrap around edges
    ]
    if ycor > max-pycor or ycor < min-pycor [
      set ycor random-ycor ; Wrap around edges  
    ]
  ]
end
```

**Run this:** Click "setup" once, then click "go" repeatedly to watch random exploration.

---

## Turtle Interactions (15 min)

The real power comes when turtles interact with each other.

### How Turtles "See" Other Turtles Nearby

**Find neighbors within a distance:**
```netlogo
ask turtles [
  let nearby-turtles other turtles in-radius 3
  if any? nearby-turtles [
    ; Do something with nearby turtles
  ]
]
```

**Find the closest turtle:**
```netlogo
ask turtles [
  let closest min-one-of other turtles [distance myself]
  if closest != nobody [
    face closest  ; Turn toward closest turtle
  ]
]
```

### Simple Interaction Rules

**Follow your neighbors:**
```netlogo
ask turtles [
  let neighbors other turtles in-radius 3
  if any? neighbors [
    let average-heading mean [heading] of neighbors
    set heading average-heading
  ]
  forward 1
]
```

**Avoid crowding:**
```netlogo
ask turtles [
  let too-close other turtles in-radius 1
  if any? too-close [
    let repel-direction mean [heading] of too-close + 180
    set heading repel-direction
  ]
  forward 1  
]
```

### Collective Behavior from Individual Actions

When individual turtles follow simple rules about their neighbors, amazing collective patterns emerge:

- **Flocking:** Turtles that align with neighbors create flocks
- **Segregation:** Turtles that prefer similar neighbors create clusters  
- **Information spread:** Turtles that copy neighbors spread information
- **Traffic jams:** Turtles that slow down when crowded create jams

### Activity 3: Color Copying

**Goal:** Turtles change color to match nearby turtles

```netlogo
to setup
  clear-all
  create-turtles 100 [
    setxy random-xcor random-ycor
    set color one-of [red green blue]
  ]
end

to go
  ask turtles [
    ; Look at nearby turtles
    let neighbors other turtles in-radius 2
    
    if any? neighbors [
      ; Find the most common color among neighbors
      let red-neighbors neighbors with [color = red]
      let green-neighbors neighbors with [color = green]  
      let blue-neighbors neighbors with [color = blue]
      
      ; Change to majority color
      if count red-neighbors > count green-neighbors and 
         count red-neighbors > count blue-neighbors [
        set color red
      ]
      if count green-neighbors > count red-neighbors and
         count green-neighbors > count blue-neighbors [
        set color green  
      ]
      if count blue-neighbors > count red-neighbors and
         count blue-neighbors > count green-neighbors [
        set color blue
      ]
    ]
    
    ; Move randomly
    right random 60 - 30
    forward 0.5
  ]
end
```

**Run this model:** 
1. Click "setup" to create mixed-color turtles
2. Click "go" repeatedly and watch colors cluster together
3. Notice how local copying creates global patterns!

```{admonition} Reflection Questions
:class: question

- How quickly do clusters form?
- Do all turtles end up the same color?
- What happens if you change the neighbor radius?
- How does this relate to social influence in real life?
```

---

## Learning Objectives Achieved

By completing this tutorial, you can now:

✓ **Create and control basic turtle agents**  
✓ **Understand how individual agent rules create collective patterns**  
✓ **Modify turtle properties and behaviors**  
✓ **Implement simple agent interactions**

---

## What's Next?

Now that you can work with agents, let's explore their environment! Agents don't exist in a vacuum - they live in a world that shapes their behavior.

```{admonition} Coming Up: Environment and Patches
:class: note

- Understanding the world patches live in
- Using patch colors to visualize data
- Agent-environment interactions  
- Creating environmental gradients

**Activities preview:**
- Heat Map: Create temperature gradients  
- Foraging: Agents seek resource-rich areas
- Erosion: Agents modify their environment
```

**Think about:** In your research area, what kind of environment do agents live in? Physical space? Social networks? Economic markets? Information landscapes?
