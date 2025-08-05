# Basic Programming Concepts

Don't worry - programming is just giving detailed instructions! This tutorial builds your confidence with NetLogo's English-like commands.

```{note}
**Time Required:** 50 minutes  
**Prerequisites:** Completed NetLogo Introduction & Interface
```

## Programming Without Fear (10 min)

Let's start with a fundamental truth: **Programming is just giving detailed instructions to a computer.**

### Programming = Giving Detailed Instructions

```{admonition} Programming is Like...
:class: tip

**Writing a recipe:**

- Step 1: Heat oven to 350°F
- Step 2: Mix flour and sugar
- Step 3: Add eggs one at a time

**Giving directions:**  

- Step 1: Go straight for 2 blocks
- Step 2: Turn left at traffic light
- Step 3: Building is on your right

**Programming:**

- Step 1: Create 100 turtles  
- Step 2: Ask each turtle to move forward
- Step 3: If turtle sees neighbor, turn right
```

The only difference: computers need **very precise** instructions and can't fill in missing details like humans can.

### Like Writing a Recipe or Assembly Instructions

Think about IKEA furniture instructions - they're extremely detailed because they assume you know nothing. Programming is the same way!

### NetLogo Uses English-like Commands

Unlike many programming languages, NetLogo reads almost like English:

- `create-turtles 50` (create 50 turtles)
- `move-forward 1` (move forward 1 step)  
- `set-color red` (change color to red)
- `count-neighbors` (how many neighbors do I have?)

---

## Core Concepts (25 min)

Let's learn the basic building blocks that all programming uses.

### Variables: Things That Can Change

**Variables store information that can change over time.**

Examples in real life:

- Your age (changes every year)
- Your bank account balance (goes up and down)
- Your location (changes as you move)

Examples in NetLogo:

- `age` - how old is this turtle?
- `wealth` - how much money does this turtle have?
- `xcor` - what is the turtle's x-coordinate?
- `color` - what color is this turtle?

```{admonition} Think of Variables as Labels
:class: note

Imagine each turtle wearing name tags:

- "Hi, my name is Turtle #42"
- "My age is 25"  
- "My wealth is $1,500"
- "My location is (10, 15)"

Variables are just labels that can be updated!
```

### Commands: Actions Agents Can Take

**Commands tell agents what to do.**

Basic movement commands:

- `forward 1` - move forward 1 step
- `right 90` - turn right 90 degrees  
- `left 45` - turn left 45 degrees

Property change commands:

- `set color red` - change color to red
- `set size 2` - make turtle bigger
- `die` - remove this turtle from the world

Social commands:

- `create-link-with turtle 5` - form connection with turtle #5
- `ask neighbors` - give instructions to nearby turtles

### Reporters: Questions Agents Can Answer  

**Reporters ask questions and get answers.**

About myself:

- `who` - what is my ID number?
- `xcor` - what is my x-coordinate?
- `count my-links` - how many connections do I have?

About others:

- `count turtles` - how many turtles exist?
- `count neighbors` - how many turtles are near me?
- `mean [wealth] of turtles` - what's the average wealth?

About the environment:

- `pcolor` - what color is the patch I'm on?
- `patches in-radius 3` - which patches are within 3 units?

### Procedures: Grouping Instructions Together

**Procedures are like recipes - they group related instructions.**

#### Simple Procedure Example

```nelogo
to move-randomly
  right random 360    ; turn a random amount
  forward 1           ; move forward 1 step  
end
```

This procedure called `move-randomly` does two things:

1. Turn a random direction (0-360 degrees)
2. Move forward 1 step

Now you can just say `move-randomly` instead of repeating those two lines!


**Why use procedures?**

- Organize related instructions
- Avoid repeating the same code
- Make code easier to read and understand
- Break complex tasks into smaller pieces

---

## Reading Code Before Writing (15 min)

Let's practice reading and understanding NetLogo code together.

### Activity 1: Code Reading

**Look at this simple procedure. What do you think it does?**

```ruby
to setup
  clear-all
  create-turtles 100 [
    setxy random-xcor random-ycor
    set color one-of [red green blue yellow]
  ]
  reset-ticks
end
```

```{admonition} "What Do You Think This Does?"
:class: question

Before looking at the answer, discuss with a partner:
1. What happens when you run this procedure?
2. How many turtles get created?
3. Where do they appear?
4. What colors might they be?
```

**Answer:** This procedure:

1. Clears everything from the world
2. Creates 100 turtles
3. Places each turtle at a random location  
4. Gives each turtle a random color (red, green, blue, or yellow)
5. Resets the tick counter to 0

### Activity 2: Spot the Difference

**Compare these two procedures. What's different?**

**Procedure A:**

```sh
to move-turtles
  ask turtles [
    forward 1
  ]
end
```

**Procedure B:**  

```
to move-turtles
  ask turtles [
    right random 360
    forward 1  
  ]
end
```

**What's the difference in behavior?**

- Procedure A: All turtles move straight forward
- Procedure B: All turtles turn randomly first, then move forward

### Activity 3: Human Computer

**Let's act out NetLogo commands!**

**Setup:** 

- 5 students are "turtles" 
- Classroom is the "world"
- One student is the "computer" giving commands

**Commands to try:**

1. `create-turtles 5` - 5 students enter the "world"
2. `ask turtles [ forward 2 ]` - everyone takes 2 steps forward
3. `ask turtles [ right 90 ]` - everyone turns right  
4. `ask turtle 0 [ set color red ]` - student #0 puts on red hat
5. `ask turtles [ if color = red [ forward 3 ] ]` - only red turtle moves

```{admonition} Connect Code to Visual Outcomes
:class: tip

**Key insight:** Every line of code creates a visible change in the world. When reading code, always ask:
- "What would I see happening?"
- "How would the world look different?"
- "Which agents would be affected?"
```

---

## Learning Objectives Achieved

By completing this tutorial, you now:

✓ **Understand that code is just detailed instructions**  
✓ **Recognize basic programming concepts in NetLogo syntax**  
✓ **Can read and interpret simple NetLogo procedures**  
✓ **Feel prepared to modify existing code**

---

## What's Next?

Now that you understand the basic building blocks, we'll learn how to work with individual agents (turtles) - creating them, controlling them, and making them interact.

```{admonition} Coming Up: Working with Agents
:class: note

- Creating and controlling turtle agents
- Giving turtles different properties  
- Making turtles interact with each other
- Building simple collective behaviors

**Activities preview:**
- Build a Flock: Make turtles move together
- Random Walk: Turtles explore randomly  
- Color Copying: Turtles influence each other
```

**Think about:** What kinds of agents would you want in a model of your research interest? What properties would they need? What behaviors?
