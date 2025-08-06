# Turtle Interactions (15 min)

The real power comes when turtles interact with each other.

## How Turtles "See" Other Turtles Nearby

**Find neighbors within a distance:**

```ruby
ask turtles [
  let nearby-turtles other turtles in-radius 3
  if any? nearby-turtles [
    ; Do something with nearby turtles
  ]
]
```

**Find the closest turtle:**

```ruby
ask turtles [
  let closest min-one-of other turtles [distance myself]
  if closest != nobody [
    face closest  ; Turn toward closest turtle
  ]
]
```

## Simple Interaction Rules

**Follow your neighbors:**

```ruby
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

```ruby
ask turtles [
  let too-close other turtles in-radius 1
  if any? too-close [
    let repel-direction mean [heading] of too-close + 180
    set heading repel-direction
  ]
  forward 1  
]
```

## Collective Behavior from Individual Actions

When individual turtles follow simple rules about their neighbors, amazing collective patterns emerge:

- **Flocking:** Turtles that align with neighbors create flocks
- **Segregation:** Turtles that prefer similar neighbors create clusters  
- **Information spread:** Turtles that copy neighbors spread information
- **Traffic jams:** Turtles that slow down when crowded create jams

## Activity 3: Color Copying

**Goal:** Turtles change color to match nearby turtles

```ruby
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
:class: seealso

- Understanding the world patches live in
- Using patch colors to visualize data
- Agent-environment interactions  
- Creating environmental gradients
```

```{admonition} Activities preview:
:class: seealso

- Heat Map: Create temperature gradients
- Foraging: Agents seek resource-rich areas
- Erosion: Agents modify their environment
```

**Think about:** In your research area, what kind of environment do agents live in? Physical space? Social networks? Economic markets? Information landscapes?
