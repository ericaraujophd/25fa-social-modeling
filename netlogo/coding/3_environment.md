# Environment and Patches

Agents don't exist in empty space - they live in an environment that shapes their behavior. In NetLogo, the environment is made up of "patches" that can represent anything from physical locations to abstract spaces.

```{note}
**Time Required:** 40 minutes  
**Prerequisites:** Working with Agents (Turtles)
```

## The World Patches Live In (10 min)

### Patches = Grid Squares That Make Up the World

Think of the NetLogo world as a **grid of squares**, like:
- **Chessboard squares** where pieces can move
- **City blocks** where people live and work  
- **Pixels on a screen** that create an image
- **Cells in a spreadsheet** that hold information

Each square is called a **patch** and has:
- **Coordinates:** `pxcor` (x-position) and `pycor` (y-position)
- **Color:** `pcolor` (what color is this patch?)
- **Custom properties:** anything you define (temperature, resources, ownership, etc.)

### Each Patch Has Properties (Color, Variables)

**Built-in properties:**
- `pxcor` and `pycor` - location coordinates
- `pcolor` - color of this patch
- `plabel` - text label on this patch

**Custom properties you might add:**
- `temperature` - how hot/cold is this location?
- `resources` - how much food/oil/wealth is here?
- `population-density` - how crowded is this area?
- `pollution-level` - how contaminated is this spot?

### Environment Shapes Agent Behavior

The environment isn't just decoration - it **actively influences** what agents do:

**Examples:**
- **Foraging:** Animals move toward resource-rich patches
- **Urban planning:** People prefer low-pollution, high-amenity areas
- **Disease spread:** Infection rates vary by population density
- **Economic development:** Businesses locate near transportation hubs

```{admonition} Key Insight
:class: tip

**Environment and agents interact dynamically.** Agents respond to their environment, but they can also change it through their actions, creating feedback loops.
```

---

## Patch Properties and Visualization (15 min)

Let's learn how to use patch colors to visualize data and create meaningful environments.

### Using Patch Color to Show Data

**Basic color assignment:**
```netlogo
ask patches [
  set pcolor green    ; All patches green
]

ask patch 0 0 [       ; Center patch only
  set pcolor red
]

ask patches with [pxcor > 0] [  ; Right half of world
  set pcolor blue
]
```

**Color based on data:**
```netlogo
ask patches [
  ; Color based on distance from center
  let distance-from-center sqrt (pxcor ^ 2 + pycor ^ 2)
  set pcolor scale-color red distance-from-center 0 10
]
```

The `scale-color` command creates gradients:
- `scale-color red value 0 10` makes a red gradient from light (value=0) to dark (value=10)
- High values = dark red, low values = light red

### Creating Environmental Gradients

**Temperature gradient (hot in south, cold in north):**
```netlogo
ask patches [
  set temperature pycor + 10        ; Temperature based on y-coordinate
  set pcolor scale-color red temperature 0 20  ; Red = hot, pink = cold
]
```

**Resource distribution (rich center, poor edges):**
```netlogo
ask patches [
  let distance-from-center sqrt (pxcor ^ 2 + pycor ^ 2)
  set resources 100 - distance-from-center * 5
  if resources < 0 [ set resources 0 ]
  set pcolor scale-color green resources 0 100  ; Green = rich, black = poor
]
```

**Random patchy resources:**
```netlogo
ask patches [
  set resources random 100
  set pcolor scale-color brown resources 0 100  ; Brown gradient
]
```

### Activity 1: Heat Map

**Goal:** Create a temperature gradient using patch colors

```netlogo
to setup-heat-map
  ask patches [
    ; Create temperature based on distance from center
    let distance-from-center sqrt (pxcor ^ 2 + pycor ^ 2)
    set temperature 100 - distance-from-center * 3
    if temperature < 0 [ set temperature 0 ]
    
    ; Color patches based on temperature
    set pcolor scale-color red temperature 0 100
  ]
end
```

**Try different patterns:**
- East-west gradient: `set temperature pxcor + 15`
- Diagonal gradient: `set temperature (pxcor + pycor) + 20`  
- Multiple hot spots: Create several high-temperature centers

```{admonition} What Do You Observe?
:class: question

- How does the color pattern reflect the underlying data?
- What would this temperature map represent in real life?
- How might agents behave differently in hot vs. cold areas?
```

---

## Turtle-Patch Interactions (15 min)

Now let's make agents interact with their environment in meaningful ways.

### Turtles Asking Their Current Patch Questions

Turtles can ask the patch they're standing on for information:

```netlogo
ask turtles [
  let current-temp [temperature] of patch-here
  if current-temp > 50 [
    set color red      ; Turn red if on hot patch
  ]
]
```

**Common patch queries:**
- `[pcolor] of patch-here` - what color is this patch?
- `[resources] of patch-here` - how many resources here?
- `[temperature] of patch-here` - what's the temperature?

### Moving Based on Patch Properties

**Move toward better patches:**
```netlogo
ask turtles [
  ; Look at nearby patches
  let nearby-patches patches in-radius 2
  let best-patch max-one-of nearby-patches [resources]
  
  if best-patch != nobody [
    face best-patch     ; Turn toward resource-rich patch
    forward 1
  ]
]
```

**Avoid dangerous areas:**
```netlogo
ask turtles [
  let current-pollution [pollution] of patch-here
  if current-pollution > 50 [
    ; Move away from polluted areas
    let clean-patches patches in-radius 3 with [pollution < 10]
    if any? clean-patches [
      move-to one-of clean-patches
    ]
  ]
]
```

### Turtles Modifying Their Environment

Agents don't just respond to environment - they change it:

**Consume resources:**
```netlogo
ask turtles [
  let current-resources [resources] of patch-here
  if current-resources > 0 [
    ask patch-here [
      set resources resources - 1     ; Consume 1 unit
      set pcolor scale-color green resources 0 100  ; Update color
    ]
  ]
]
```

**Leave traces:**
```netlogo
ask turtles [
  ask patch-here [
    set pheromone pheromone + 1       ; Leave pheromone trail
    set pcolor scale-color yellow pheromone 0 10
  ]
]
```

### Activity 2: Foraging

**Goal:** Turtles move toward resource-rich patches

```netlogo
to setup-foraging
  ; Create resource patches
  ask patches [
    set resources random 50
    set pcolor scale-color green resources 0 50
  ]
  
  ; Create foraging turtles
  create-turtles 20 [
    setxy random-xcor random-ycor
    set color yellow
    set energy 100
  ]
end

to go-foraging
  ask turtles [
    ; Look for nearby resource patches
    let nearby-patches patches in-radius 2
    let best-patch max-one-of nearby-patches [resources]
    
    if best-patch != nobody [
      face best-patch
      forward 1
    ]
    
    ; Consume resources on current patch
    let current-resources [resources] of patch-here
    if current-resources > 0 [
      set energy energy + current-resources
      ask patch-here [
        set resources 0
        set pcolor black  ; Mark as depleted
      ]
    ]
    
    ; Use energy to survive
    set energy energy - 1
    if energy <= 0 [ die ]
  ]
end
```

**Run this model:**
1. Click "setup-foraging" to create resources and turtles
2. Click "go-foraging" repeatedly and watch turtles search for food
3. Notice how they deplete resources and change the environment

### Activity 3: Erosion

**Goal:** Turtles modify patch values as they pass through

```netlogo
to setup-erosion
  ; Create terrain with different soil stability
  ask patches [
    set soil-stability 50 + random 50  ; Stability 50-100
    set pcolor scale-color brown soil-stability 50 100
  ]
  
  create-turtles 30 [
    setxy random-xcor random-ycor  
    set color white
  ]
end

to go-erosion
  ask turtles [
    ; Random movement
    right random 60 - 30
    forward 1
    
    ; Cause erosion on current patch
    ask patch-here [
      set soil-stability soil-stability - 0.5
      if soil-stability < 0 [ set soil-stability 0 ]
      set pcolor scale-color brown soil-stability 0 100
    ]
  ]
end
```

**What happens:** Watch how turtle movement creates "erosion paths" in the landscape!

```{admonition} Reflection Questions
:class: question

- How do the paths develop over time?
- What happens in areas with heavy turtle traffic?
- How does this relate to real-world erosion patterns?
- What if different turtles caused different amounts of erosion?
```

---

## Learning Objectives Achieved

By completing this tutorial, you can now:

✓ **Understand the role of environment in agent-based models**  
✓ **Create meaningful environmental visualizations**  
✓ **Implement agent-environment interactions**

---

## What's Next?

Now you have all the building blocks - agents, environment, and interactions. Time to put it all together into your first complete model from scratch!

```{admonition} Coming Up: Building Your First Complete Model
:class: note

- Planning before programming
- Step-by-step model building  
- Testing and debugging
- Documentation and sharing

**Mini-project preview:** Build a simple "ants following pheromone trails" model that combines everything you've learned!
```

**Think about:** What complete model would you like to build? What social phenomenon interests you? What agents and environment would you need?
