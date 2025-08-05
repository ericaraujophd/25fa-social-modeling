# Basic Programming Concepts

Welcome to your first look at NetLogo programming! Don't worry - we'll start simple and build your confidence step by step.

```{note}
**Time Required:** 50 minutes  
**Prerequisites:** Completed "NetLogo Introduction & Interface"
```

## Programming Without Fear

Let's start with a fundamental truth: **programming is just giving detailed instructions to a computer.** 

Think about it like this:

```{admonition} Programming is Like...
:class: tip

**Writing a recipe:**
- Step 1: Heat the oven to 350°F
- Step 2: Mix flour and sugar in a bowl
- Step 3: Add eggs one at a time

**Giving directions:**
- Step 1: Go straight for 2 blocks
- Step 2: Turn left at the traffic light
- Step 3: The building is on your right

**Programming:**
- Step 1: Create 100 turtles
- Step 2: Ask each turtle to move forward
- Step 3: If turtle sees a neighbor, turn right
```

The only difference is that computers need **very precise** instructions and can't fill in missing details like humans can.

### Why NetLogo is Beginner-Friendly

- **English-like commands:** `move-forward`, `set-color`, `count-neighbors`
- **Visual feedback:** You see results immediately
- **Forgiving:** Easy to experiment and fix mistakes
- **Social science focused:** Concepts that make sense for studying people and societies

---

## Core Programming Concepts

Let's learn the basic building blocks that all programming languages share.

### 1. Variables: Things That Can Change

**Variables** store information that can change over time.

```{admonition} Variables in Real Life
:class: example

Think of variables like **labels on containers** that hold different types of information:

- **Age container:** Holds a number that increases over time
- **Name container:** Holds text that usually stays the same
- **Location container:** Holds coordinates that change when you move
- **Happiness container:** Holds a value that goes up and down
```

**In NetLogo, agents (turtles) can have variables like:**
- `color` - What color is this turtle?
- `size` - How big is this turtle?
- `energy` - How much energy does this turtle have?
- `age` - How old is this turtle?

**Example NetLogo code:**
```netlogo
ask turtles [
  set energy 100        ; Give each turtle 100 energy points
  set color red         ; Make all turtles red
  set age 0            ; Start all turtles at age 0
]
```

### 2. Commands: Actions Agents Can Take

**Commands** tell agents what to do.

```{admonition} Commands in Real Life
:class: example

Commands are like **verbs** - they describe actions:

- **Walk** to the store
- **Turn** left at the corner
- **Pick up** the book
- **Change** your shirt
```

**Common NetLogo commands:**
- `forward 1` - Move forward one step
- `right 90` - Turn right 90 degrees
- `set color blue` - Change color to blue
- `die` - Remove this agent from the model

**Example NetLogo code:**
```netlogo
ask turtles [
  forward 1             ; Move forward
  right random 360      ; Turn a random amount
  set color green       ; Change color to green
]
```

### 3. Reporters: Questions Agents Can Answer

**Reporters** ask questions and get answers back.

```{admonition} Reporters in Real Life
:class: example

Reporters are like **questions** that have answers:

- **"What time is it?"** → "3:15 PM"
- **"How many people are here?"** → "25"
- **"What's the weather like?"** → "Sunny"
- **"Who is nearby?"** → "John, Sarah, and Mike"
```

**Common NetLogo reporters:**
- `count turtles` - How many turtles exist?
- `random 10` - Give me a random number from 0 to 9
- `turtles-nearby` - Which turtles are close to me?
- `who` - What is my ID number?

**Example NetLogo code:**
```netlogo
ask turtles [
  if count turtles-nearby > 3 [    ; If more than 3 neighbors...
    set color red                   ; ...turn red
  ]
]
```

### 4. Procedures: Grouping Instructions Together

**Procedures** group related instructions into reusable chunks.

```{admonition} Procedures in Real Life
:class: example

Procedures are like **recipes or routines** that you can repeat:

- **"Make coffee"** procedure includes: grind beans, add water, brew, pour
- **"Get ready for work"** procedure includes: shower, dress, eat breakfast, grab keys
- **"Do laundry"** procedure includes: sort clothes, wash, dry, fold
```

**In NetLogo, you can create procedures like:**
- `move-randomly` - Move in a random direction
- `find-food` - Look for food patches and move toward them
- `reproduce` - Create new offspring under certain conditions

**Example NetLogo procedure:**
```netlogo
to move-randomly
  right random 360      ; Turn a random amount
  forward 1             ; Move forward one step
end

; Now you can use this procedure anywhere:
ask turtles [ move-randomly ]
```

---

## Reading Code Before Writing

Let's practice reading and understanding NetLogo code before we try to write our own.

### Activity 1: Code Reading Practice

Look at this simple NetLogo procedure and try to understand what it does:

```netlogo
to setup
  clear-all
  create-turtles 50 [
    set color red
    set size 2
    setxy random-xcor random-ycor
  ]
  reset-ticks
end
```

```{admonition} What Do You Think This Does?
:class: question

Before reading the explanation below, try to figure out:

1. What happens when you run this procedure?
2. How many turtles are created?
3. What color are they?
4. Where do they appear?

**Discussion:** Talk with a partner about your interpretation.
```

**Explanation:**
1. `clear-all` - Removes everything from the world (clean slate)
2. `create-turtles 50` - Creates 50 new turtle agents
3. `set color red` - Makes each turtle red
4. `set size 2` - Makes each turtle size 2 (bigger than default)
5. `setxy random-xcor random-ycor` - Places each turtle at a random location
6. `reset-ticks` - Resets the time counter to 0

### Activity 2: Spot the Difference

Compare these two procedures. What's different and what effect would that have?

**Version A:**
```netlogo
to move-around
  ask turtles [
    forward 1
    right 90
  ]
end
```

**Version B:**
```netlogo
to move-around
  ask turtles [
    forward 1
    right random 360
  ]
end
```

```{admonition} Analysis Questions
:class: question

1. What would the turtle movement look like in Version A?
2. What would the turtle movement look like in Version B?
3. Which version would create more interesting patterns?
4. Can you think of real-world situations where each type of movement might be appropriate?
```

### Activity 3: Predict the Outcome

Look at this code and predict what you'll see:

```netlogo
to flocking-demo
  ask turtles [
    let nearby-turtles turtles in-radius 3
    if count nearby-turtles > 0 [
      let average-heading mean [heading] of nearby-turtles
      set heading average-heading
    ]
    forward 1
  ]
end
```

```{admonition} Prediction Challenge
:class: question

1. What happens when turtles are near other turtles?
2. What happens when turtles are alone?
3. What overall pattern might emerge over time?
4. What real-world behavior does this resemble?

**Test your prediction:** Try running this code with some turtles!
```

---

## Connecting Code to Visual Outcomes

One of NetLogo's strengths is the immediate visual feedback. Let's practice connecting what we see to what the code is doing.

### Activity 4: Human Computer

Let's act out some simple NetLogo commands to understand them better.

**Setup:**
- Everyone stands up (you're all turtles!)
- Face the front of the room (this is heading 0)
- Spread out a bit

**Commands to act out:**
1. `forward 2` - Take 2 steps forward
2. `right 90` - Turn right 90 degrees (quarter turn)
3. `forward 1` - Take 1 step forward
4. `right random 180` - Turn right a random amount (instructor calls out numbers)
5. `if count turtles-nearby > 2 [ set color red ]` - If more than 2 people are close to you, raise your hand

```{admonition} Reflection Questions
:class: question

After acting out the commands:

1. How did the random turning change the group's behavior?
2. Which commands created more interesting patterns?
3. How did the conditional command (if-then) affect the group?
4. What would happen if we repeated these commands many times?
```

---

## Understanding NetLogo Syntax

NetLogo has some specific rules for how to write code. Let's learn the basics:

### Key Syntax Rules

1. **Commands are separated by spaces or new lines**
   ```netlogo
   forward 1 right 90    ; Two commands on one line
   
   forward 1             ; Same commands on separate lines
   right 90
   ```

2. **Use square brackets [ ] for groups of commands**
   ```netlogo
   ask turtles [          ; Do everything in brackets
     forward 1
     set color red
   ]
   ```

3. **Comments start with semicolons ;**
   ```netlogo
   forward 1              ; This moves the turtle forward
   ; This whole line is a comment
   ```

4. **Numbers and words are written directly**
   ```netlogo
   set color red          ; red is a built-in color
   set energy 100         ; 100 is just a number
   forward random 10      ; random number between 0 and 9
   ```

### Common Patterns

**Pattern 1: Ask agents to do something**
```netlogo
ask turtles [
  ; commands for all turtles
]

ask patches [
  ; commands for all patches
]
```

**Pattern 2: Conditional actions (if-then)**
```netlogo
if condition [
  ; do this if condition is true
]
```

**Pattern 3: Procedures**
```netlogo
to procedure-name
  ; commands that make up this procedure
end
```

---

## Practice: Reading Real Model Code

Let's look at a piece of code from the Segregation model to practice our new skills.

```netlogo
to go
  if all? turtles [happy?] [ stop ]  ; Stop if everyone is happy
  move-unhappy-turtles
  update-turtles
  tick
end

to move-unhappy-turtles
  ask turtles with [not happy?] [
    find-new-spot
  ]
end

to find-new-spot
  rt random-float 360
  fd random-float 10
  if any? other turtles-here [
    find-new-spot  ; Try again if spot is occupied
  ]
end
```

```{admonition} Code Analysis Exercise
:class: question

Work through this code step by step:

1. **What does the `go` procedure do?**
   - When does it stop running?
   - What procedures does it call?

2. **What does `move-unhappy-turtles` do?**
   - Which turtles does it affect?
   - What does it ask them to do?

3. **What does `find-new-spot` do?**
   - How does a turtle choose where to move?
   - What happens if the chosen spot is occupied?

4. **How do these procedures work together?**
   - What's the overall flow of the model?
   - How does this create the segregation behavior?
```

---

## Key Concepts Learned

```{admonition} Programming Concepts You Now Understand
:class: tip

✓ **Variables** - Store information that can change  
✓ **Commands** - Actions that agents can perform  
✓ **Reporters** - Questions that return answers  
✓ **Procedures** - Groups of instructions  
✓ **Syntax** - Rules for writing NetLogo code  
✓ **Reading Code** - Understanding what code does before writing your own  
```

---

## Preparing for Next Steps

You're now ready to start working with actual NetLogo code! In the next tutorial, we'll focus specifically on creating and controlling agents (turtles).

### Quick Self-Check

```{admonition} Can You...?
:class: question

- ✓ Explain what variables, commands, and reporters are?
- ✓ Read a simple NetLogo procedure and understand what it does?
- ✓ Identify the basic syntax elements (brackets, semicolons, procedure structure)?
- ✓ Connect code commands to visual outcomes?
- ✓ Spot the differences between similar pieces of code?
```

### Homework: Code Reading Practice

```{admonition} Practice Assignment
:class: note

**Choose any model from the NetLogo Models Library and:**

1. **Open the Code tab** and find one simple procedure (5-10 lines)

2. **Read through it line by line** and try to understand what each command does

3. **Write a brief explanation** (2-3 sentences) of what you think the procedure does

4. **Test your understanding** by running the model and seeing if the behavior matches your explanation

5. **Come to class prepared** to share your chosen procedure and explanation

**Tip:** Start with models in the "Social Science" section - they often have clear, readable code related to topics you understand.
```

---

## Looking Ahead

```{admonition} Coming Up Next
:class: note

**Next Tutorial: Working with Agents (Turtles)**
- Creating and controlling turtle agents
- Giving turtles properties and behaviors
- Making turtles interact with each other
- Building your first simple agents from scratch
```

You're making great progress! Programming isn't about memorizing commands - it's about understanding concepts and learning to think step-by-step. You're well on your way!

---

## Troubleshooting

### Common Beginner Concerns

**"I don't understand what this code does"**
- Start by reading comments (lines with ;)
- Look for familiar words like `forward`, `color`, `count`
- Ask: "What would I expect to see if this code ran?"

**"There are so many commands to remember"**
- You don't need to memorize everything!
- Focus on understanding concepts, not memorizing syntax
- Use the NetLogo dictionary when you need specific commands

**"I'm afraid I'll break something"**
- You can't permanently break a NetLogo model
- If something goes wrong, just close and reopen the model
- Experimenting is the best way to learn!

### Getting Help

- **NetLogo Dictionary:** Complete list of commands with examples
- **Model Documentation:** Every model has explanations in the Info tab
- **Course Forums:** Ask questions on Moodle
- **Office Hours:** Bring specific code you'd like help understanding
