# Working with Agents (Turtles)

Now that you understand basic programming concepts, let's dive into creating and controlling individual agents in NetLogo. In NetLogo, we call these agents "turtles."

```{note}
**Time Required:** 60 minutes  
**Prerequisites:** Completed "Basic Programming Concepts"
```

## Meet the Turtles

In NetLogo, **turtles** are individual agents that can:

- Move around the world
- Have their own properties (age, color, energy, beliefs, etc.)
- Make decisions based on their situation
- Interact with other turtles and their environment
- Change and adapt over time

```{admonition} Why "Turtles"?
:class: tip

The name comes from Logo, an early programming language that used a "turtle" with a pen to draw on screen. In NetLogo, turtles have evolved into sophisticated agents that can represent any individual actor: people, animals, organizations, vehicles, ideas, or anything else that moves and acts in your model.
```

### Turtles as Social Agents

In social science models, turtles often represent:

- **Individual people** with preferences, beliefs, and social connections
- **Organizations** like companies, political parties, or social movements
- **Ideas or information** spreading through a population
- **Resources** like money or goods flowing through an economy
- **Abstract entities** like votes, rumors, or cultural practices

---

## Creating and Controlling Turtles

Let's start by learning how to create turtles and give them basic commands.

### Your First Turtles

Open NetLogo and try these commands in the Command Center (the text box at the bottom):

```netlogo
clear-all
create-turtles 10
```

```{admonition} What Just Happened?
:class: question

- How many turtles appeared?
- What do they look like?
- Where are they positioned?
- What direction are they facing?
```

### Basic Turtle Commands

Now let's make our turtles do something:

```netlogo
ask turtles [ forward 5 ]
```

Try these commands one at a time:

```netlogo
ask turtles [ right 90 ]        ; Turn right 90 degrees
ask turtles [ left 45 ]         ; Turn left 45 degrees
ask turtles [ forward 10 ]      ; Move forward 10 steps
ask turtles [ back 3 ]          ; Move backward 3 steps
```

```{admonition} The "ask" Command
:class: important

**`ask turtles [ commands ]`** is how you give instructions to agents in NetLogo. 

- `ask turtles` means "tell all turtles to..."
- `ask turtle 0` means "tell turtle number 0 to..."
- `ask turtles with [color = red]` means "tell all red turtles to..."

This is like being a director giving instructions to actors on a stage!
```

### Activity 1: Turtle Simon Says

Practice giving turtles commands by playing "Turtle Simon Says":

1. Create 20 turtles: `create-turtles 20`
2. Try each command and observe what happens:

```netlogo
ask turtles [ forward 5 ]
ask turtles [ right 90 ]
ask turtles [ forward 3 ]
ask turtles [ left 180 ]
ask turtles [ back 2 ]
ask turtles [ right random 360 ]    ; Random turn!
```

```{admonition} Observation Questions
:class: question

- Which commands affect all turtles the same way?
- Which commands create different outcomes for different turtles?
- What happens when you use `random` in a command?
- How could you make turtles spread out more?
```

---

## Giving Turtles Properties

Turtles can have many different properties that make them unique individuals.

### Built-in Properties

Every turtle automatically has these properties:

- **`who`** - Unique ID number (0, 1, 2, ...)
- **`color`** - What color the turtle appears
- **`size`** - How big the turtle appears
- **`heading`** - Which direction the turtle is facing (0-359 degrees)
- **`xcor` and `ycor`** - The turtle's x and y coordinates

### Changing Turtle Properties

```netlogo
ask turtles [ set color red ]       ; Make all turtles red
ask turtles [ set size 2 ]          ; Make all turtles bigger
ask turtles [ set heading 90 ]      ; Make all turtles face east
```

### Making Turtles Unique

```netlogo
ask turtles [ set color random 140 ]           ; Random colors
ask turtles [ set size 1 + random 3 ]          ; Random sizes (1-3)
ask turtles [ set heading random 360 ]         ; Random directions
```

### Activity 2: Create a Diverse Population

Try creating different types of agents:

```netlogo
clear-all
create-turtles 50 [
  set color random 140              ; Random color
  set size 0.5 + random 2          ; Size between 0.5 and 2.5
  setxy random-xcor random-ycor     ; Random starting position
  set heading random 360            ; Random starting direction
]
```

```{admonition} Experiment Time
:class: note

Try modifying the code above:

1. **Change the numbers:** What happens with 100 turtles? Size between 1 and 5?
2. **Add patterns:** Can you make half the turtles red and half blue?
3. **Positioning:** Can you make all turtles start on the left side of the screen?

**Share your discoveries:** What interesting patterns did you create?
```

---

## Custom Turtle Variables

You can give turtles custom properties that make sense for your model.

### Creating Custom Variables

To give turtles custom properties, you need to declare them at the top of your code:

```netlogo
turtles-own [
  energy          ; How much energy this turtle has
  age             ; How old this turtle is
  wealth          ; How much money this turtle has
  happiness       ; How happy this turtle is (0-10)
  social-group    ; Which group this turtle belongs to
]
```

### Using Custom Variables

Once you've declared variables, you can use them just like built-in properties:

```netlogo
ask turtles [
  set energy 100                    ; Start with full energy
  set age 0                         ; Start as babies
  set wealth random 1000            ; Random starting wealth
  set happiness 5                   ; Start moderately happy
  set social-group random 3         ; Assign to groups 0, 1, or 2
]
```

### Activity 3: Build a Simple Society

Let's create a population with social and economic characteristics:

```netlogo
turtles-own [
  age
  income
  education-level
  political-leaning    ; -10 (very liberal) to +10 (very conservative)
]

to setup-society
  clear-all
  create-turtles 100 [
    ; Demographics
    set age 18 + random 62          ; Age 18-80
    set education-level random 5    ; 0-4 (high school to PhD)
    set income 20000 + random 80000 ; $20k-$100k
    
    ; Politics (slightly correlated with education and income)
    set political-leaning (random 21) - 10  ; -10 to +10
    if education-level > 2 [ set political-leaning political-leaning - 2 ]
    if income > 60000 [ set political-leaning political-leaning + 1 ]
    
    ; Visual representation
    set size 0.8 + (age / 100)     ; Older people appear larger
    if political-leaning < 0 [ set color blue ]
    if political-leaning > 0 [ set color red ]
    if political-leaning = 0 [ set color gray ]
    
    ; Random starting position
    setxy random-xcor random-ycor
  ]
end
```

```{admonition} Understanding the Society
:class: question

After running `setup-society`:

1. **What patterns do you see?** Are there more red or blue turtles?
2. **Size patterns:** Which turtles appear larger and why?
3. **Modify the code:** What happens if you make education more strongly correlated with political leaning?
4. **Real-world connections:** How well does this simple model capture real demographic patterns?
```

---

## Making Turtles Move and Interact

Now let's make our turtle society come alive with movement and behavior.

### Random Movement

```netlogo
to move-randomly
  ask turtles [
    right random 360      ; Turn a random amount
    forward 1             ; Move forward
  ]
end
```

### Goal-Directed Movement

```netlogo
to move-toward-friends
  ask turtles [
    ; Find nearby turtles with similar political views
    let similar-neighbors turtles in-radius 5 with [
      abs (political-leaning - [political-leaning] of myself) < 3
    ]
    
    ; If we found some, move toward them
    if any? similar-neighbors [
      face one-of similar-neighbors
      forward 0.5
    ]
  ]
end
```

### Activity 4: Build a Flocking Behavior

Let's create simple flocking behavior where turtles try to:
1. Stay close to nearby turtles
2. Face the same direction as their neighbors
3. Avoid getting too crowded

```netlogo
to flock
  ask turtles [
    let nearby turtles in-radius 3
    
    if count nearby > 1 [
      ; Face the average direction of neighbors
      let avg-heading mean [heading] of nearby
      set heading avg-heading
      
      ; Move forward
      forward 0.5
      
      ; If too crowded, move away
      if count nearby > 5 [
        right 180
        forward 1
        right 180
      ]
    ]
  ]
end
```

```{admonition} Flocking Experiment
:class: question

1. **Create some turtles** and run the `flock` procedure repeatedly
2. **What patterns emerge?** Do groups form? Do they move together?
3. **Modify the numbers:** What happens with different radius values or crowd thresholds?
4. **Real-world connections:** Where do we see flocking behavior in human societies?
```

---

## Turtle Interactions and Social Dynamics

Let's explore how turtles can influence each other, creating emergent social patterns.

### Simple Influence Model

```netlogo
to social-influence
  ask turtles [
    ; Find nearby turtles
    let neighbors turtles in-radius 2
    
    if any? neighbors [
      ; Pick a random neighbor
      let influence-source one-of neighbors
      
      ; Move political leaning slightly toward neighbor's view
      let neighbor-view [political-leaning] of influence-source
      let my-view political-leaning
      let influence-strength 0.1
      
      set political-leaning my-view + (influence-strength * (neighbor-view - my-view))
      
      ; Update color based on new political leaning
      if political-leaning < -1 [ set color blue ]
      if political-leaning > 1 [ set color red ]
      if political-leaning >= -1 and political-leaning <= 1 [ set color gray ]
    ]
  ]
end
```

### Activity 5: Watch Opinions Spread

1. **Set up your society** with the code from Activity 3
2. **Run the influence model** repeatedly: `social-influence`
3. **Observe changes over time**

```netlogo
; Run this to see the process step by step:
to go
  social-influence
  move-randomly
  tick    ; Advance the time counter
end
```

```{admonition} Social Dynamics Questions
:class: question

As you watch the model run:

1. **Opinion changes:** Do political views become more moderate or more extreme over time?
2. **Spatial patterns:** Do like-minded turtles cluster together?
3. **Stability:** Does the system reach a stable state, or does it keep changing?
4. **Intervention ideas:** How could you model factors that reduce or increase polarization?
```

---

## Debugging and Troubleshooting Agent Behavior

When working with turtles, you'll sometimes get unexpected behavior. Here are common issues and solutions:

### Common Problems

**Problem: Turtles disappear or seem to freeze**
```netlogo
; Check if turtles still exist
print count turtles

; Check if they're moving off-screen
ask turtles [
  if xcor > max-pxcor or xcor < min-pxcor [ die ]
  if ycor > max-pycor or ycor < min-pycor [ die ]
]
```

**Problem: Variables have unexpected values**
```netlogo
; Monitor specific turtle properties
ask turtle 0 [ 
  print (word "Energy: " energy " Age: " age " Position: " xcor "," ycor)
]
```

**Problem: Interactions aren't working as expected**
```netlogo
; Check what turtles can "see"
ask turtle 0 [
  let neighbors turtles in-radius 3
  print (word "I can see " count neighbors " neighbors")
]
```

### Debugging Strategies

1. **Start simple:** Test one behavior at a time
2. **Use print statements:** Monitor variable values as your model runs
3. **Visual debugging:** Use colors or sizes to show turtle states
4. **Test with few turtles:** Easier to track individual behavior
5. **Check your logic:** Walk through the code step by step

---

## Putting It All Together

Let's create a complete mini-model that demonstrates everything we've learned.

### Activity 6: Build a Social Network Model

```netlogo
turtles-own [
  social-energy     ; How much energy for social interaction
  influence-level   ; How influential this turtle is
  opinion          ; Opinion on a topic (0-100)
  connections      ; How many friends this turtle has
]

to setup-social-network
  clear-all
  create-turtles 80 [
    ; Initialize properties
    set social-energy 50 + random 50    ; 50-100 energy
    set influence-level random 10        ; 0-9 influence
    set opinion random 101               ; 0-100 opinion
    set connections 0
    
    ; Visual setup
    set size 0.5 + (influence-level / 20)  ; More influential = bigger
    set color scale-color red opinion 0 100  ; Color shows opinion
    setxy random-xcor random-ycor
  ]
end

to interact
  ask turtles [
    if social-energy > 0 [
      ; Find nearby turtles to interact with
      let potential-friends turtles in-radius 3
      
      if any? potential-friends [
        let friend one-of potential-friends
        
        ; Influence each other's opinions
        let friend-opinion [opinion] of friend
        let my-influence-strength influence-level / 10
        let friend-influence-strength [influence-level] of friend / 10
        
        ; I influence friend
        ask friend [
          set opinion opinion + (my-influence-strength * (opinion - friend-opinion) * 0.1)
          if opinion > 100 [ set opinion 100 ]
          if opinion < 0 [ set opinion 0 ]
          set color scale-color red opinion 0 100
        ]
        
        ; Friend influences me
        set opinion opinion + (friend-influence-strength * (friend-opinion - opinion) * 0.1)
        if opinion > 100 [ set opinion 100 ]
        if opinion < 0 [ set opinion 0 ]
        set color scale-color red opinion 0 100
        
        ; Spend energy on interaction
        set social-energy social-energy - 1
      ]
    ]
    
    ; Move randomly
    right random 60 - 30
    forward 0.5
  ]
end

to recharge
  ask turtles [
    set social-energy social-energy + 2
    if social-energy > 100 [ set social-energy 100 ]
  ]
end
```

```{admonition} Complete Model Experiment
:class: question

1. **Run the setup:** `setup-social-network`
2. **Watch interactions:** Run `interact` multiple times
3. **Observe patterns:** How do opinions change? Do clusters form?
4. **Add recharging:** Run `recharge` periodically
5. **Long-term dynamics:** What happens after many iterations?

**Analysis questions:**
- Do opinions become more similar or more polarized?
- How does influence level affect the dynamics?
- What role does movement play in opinion change?
- How could you make this model more realistic?
```

---

## Key Concepts Mastered

```{admonition} Turtle Programming Skills You've Learned
:class: tip

✓ **Creating turtles** with specific properties and behaviors  
✓ **Using built-in variables** like color, size, position, heading  
✓ **Creating custom variables** for model-specific properties  
✓ **Movement commands** for realistic agent motion  
✓ **Interaction logic** for agents influencing each other  
✓ **Debugging strategies** for troubleshooting agent behavior  
✓ **Complete model building** integrating multiple turtle behaviors  
```

---

## Looking Ahead

You now have the skills to create and control sophisticated agent populations! In the next tutorial, we'll explore how agents interact with their environment through patches.

### Quick Self-Check

```{admonition} Can You...?
:class: question

- ✓ Create turtles with custom properties?
- ✓ Make turtles move in realistic ways?
- ✓ Program turtle interactions and influence?
- ✓ Debug problems with turtle behavior?
- ✓ Build a complete model with multiple turtle behaviors?
```

### Practice Challenge

```{admonition} Build Your Own Agent Model
:class: note

**Choose a social phenomenon you're interested in and create a simple turtle model:**

**Examples:**
- **Classroom seating:** Students choose seats based on friendships
- **Party formation:** People at a party cluster by interests
- **Rumor spreading:** Information spreads through a social network
- **Consumer behavior:** Shoppers influence each other's purchases

**Requirements:**
1. At least 2 custom turtle variables
2. Movement or interaction behavior
3. Some form of turtle-to-turtle influence
4. Visual representation of turtle states

**Come to class ready to demonstrate your model and explain:**
- What real-world phenomenon you're modeling
- How your turtle rules create emergent patterns
- What insights your model provides
```

---

## Next Tutorial Preview

```{admonition} Coming Up: Environment and Patches
:class: note

**Next Tutorial: Environment and Patches**
- How agents interact with their environment
- Creating meaningful spatial contexts
- Agent-environment feedback loops
- Building complete spatial models

You're building toward creating full agent-based models that capture both individual behavior and environmental context!
```

Great work! You're developing real computational modeling skills that you can apply to understand complex social phenomena.
