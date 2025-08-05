# NetLogo Introduction & Interface

Welcome to your first encounter with NetLogo! This tutorial will help you become comfortable with the NetLogo environment, even if you've never programmed before.

```{note}
**Time Required:** 40 minutes  
**Prerequisites:** None - just curiosity about how social systems work!
```

## What is NetLogo?

NetLogo is a **visual programming environment** designed specifically for creating and exploring agent-based models. Think of it as a virtual laboratory where you can:

- Create "agents" (like people, animals, or organizations) that follow simple rules
- Watch how these individual behaviors create complex collective patterns
- Test "what if" scenarios by changing rules and seeing what happens

### Why NetLogo for Social Scientists?

```{admonition} Real Research Uses NetLogo
:class: tip

- **Economists** model market dynamics and trading behaviors
- **Sociologists** study how social norms spread through communities
- **Political scientists** explore voting patterns and coalition formation
- **Urban planners** analyze traffic flow and city development
- **Epidemiologists** track disease spread and intervention strategies
```

**Key advantages:**

- **Visual programming** - you see results immediately
- **English-like commands** - no complex syntax to memorize
- **Built-in examples** - hundreds of models to explore and learn from
- **Active community** - used by researchers worldwide

---

## Your First Look: The NetLogo Interface

Let's start by opening NetLogo and taking a tour of the interface.

### Getting Started

1. **Download NetLogo** from [https://ccl.northwestern.edu/netlogo/download.shtml](https://ccl.northwestern.edu/netlogo/download.shtml)
2. **Install and open** NetLogo
3. **Open the Models Library** by clicking "File" → "Models Library"

### Interface Overview

NetLogo has four main areas that work together:

### 1. World View (Top Left)

- This is where your agents "live" and move around
- Black background = the "world" or environment
- You'll see colorful dots (agents) moving around in interesting models

### 2. Interface Tab (Top Right)

- **Buttons** - Start, stop, and control your model
- **Sliders** - Adjust parameters like "population size" or "speed"
- **Monitors** - Display statistics like "average age" or "total wealth"
- **Plots** - Show graphs of how things change over time

### 3. Code Tab (Bottom)

- This is where the "rules" of your model are written
- Don't worry - we'll start simple!
- Code uses English-like commands like "move forward" and "turn right"

### 4. Info Tab (Bottom)

- Documentation explaining what the model does
- Always read this first when exploring a new model!
- Tells you what to look for and what the results mean

---

## Your First Exploration: The Models Library

Let's explore some existing models to understand what agent-based modeling can do.

### Activity 1: Explore Different Model Types

**Step 1:** Open the Models Library (File → Models Library)

**Step 2:** Browse these categories and try one model from each:

```{admonition} Sample Models to Try
:class: note

**Social Science:**
- "Segregation" - Shows how slight preferences can lead to extreme segregation
- "Voting" - Models different voting systems and their outcomes

**Biology:**
- "Flocking" - Watch birds form flocks following simple rules
- "Wolf Sheep Predation" - Classic predator-prey ecosystem

**Networks:**
- "Virus on a Network" - See how diseases spread through social connections
- "Small Worlds" - Explore how social networks form

**Computer Science:**
- "Traffic Basic" - Watch traffic jams emerge from individual driving decisions
- "Market Economy" - See how individual trading creates market patterns
```

**Step 3:** For each model, do this:

1. **Read the Info tab** - understand what the model does
2. **Look at the Interface** - what controls are available?
3. **Click "setup"** to initialize the model
4. **Click "go"** to run the model
5. **Watch for 30-60 seconds** - what patterns emerge?
6. **Try changing sliders** and running again

### Activity 2: Guided Exploration - Segregation Model

Let's look closely at one of the most famous agent-based models.

**Step 1:** Find and open "Segregation" in Social Science models

**Step 2:** Read the Info tab

```{admonition} Key Questions While Reading
:class: question

- **What real-world phenomenon** is this model exploring?
- **Who are the agents** in this model?
- **What simple rules** do the agents follow?
- **What question** is the model trying to answer?
```

**Step 3:** Examine the Interface

- **Sliders:** density, %-similar-wanted
- **Buttons:** setup, go, go-forever
- **Monitor:** % similar
- **Plot:** % similar over time

**Step 4:** Run the Basic Experiment

1. **Set %-similar-wanted to 30%** (agents want at least 30% similar neighbors)
2. **Click "setup"** - agents are randomly distributed
3. **Click "go-forever"** and watch what happens
4. **Let it run until it stops changing** (maybe 100-200 steps)

```{admonition} What Do You Observe?
:class: question

- **How segregated** does the final pattern look?
- **Does the result surprise you?** Why or why not?
- **What does this suggest** about real-world segregation?
```

**Step 5:** Experiment with Parameters

Try these different settings and observe the results:

- **%-similar-wanted = 10%** (very tolerant people)
- **%-similar-wanted = 50%** (moderately preferential people)  
- **%-similar-wanted = 80%** (strong preference for similarity)
- **Different density values** (sparse vs. crowded neighborhoods)

### Activity 3: Understanding Model Output

Choose any model that interests you and practice interpreting its output.

**Focus on these questions:**

```{admonition} Model Analysis Framework
:class: tip

**Patterns:**
- What **visual patterns** emerge in the world view?
- How do **numbers in monitors** change over time?
- What do the **plots** tell you about long-term trends?

**Causation:**
- **Which agent behaviors** create the patterns you see?
- **How do individual decisions** lead to collective outcomes?
- **What would happen** if you changed the rules slightly?

**Real-World Connection:**
- **What real situations** does this model help explain?
- **What insights** does it provide for policy or decision-making?
- **What aspects of reality** does the model simplify or ignore?
```

---

## Basic NetLogo Concepts

Through exploring models, you've encountered the core concepts of agent-based modeling. Let's make them explicit.

### Agents (Usually Called "Turtles" in NetLogo)

- **Individual actors** in your model (people, animals, organizations, etc.)
- Each agent has **properties** (age, wealth, opinion, etc.)
- Each agent follows **behavioral rules** (move randomly, seek food, copy neighbors, etc.)
- **Thousands of agents** can interact simultaneously

### Environment (Made Up of "Patches" in NetLogo)

- **The world** where agents live and move
- Can represent physical space (neighborhood, ecosystem) or abstract space (opinion spectrum)
- Patches can have **properties** too (resource levels, temperature, etc.)
- Agents can **interact with** and **modify** their environment

### Time and Dynamics

- Models run in **discrete time steps** (called "ticks")
- Each tick, **every agent** gets a chance to act
- **Emergent patterns** develop as agents interact over time
- **Collective behaviors** emerge that no individual agent "intended"

### Parameters and Experiments

- **Sliders control parameters** - aspects of the model you can adjust
- **Different parameter values** lead to different outcomes
- **Systematic experimentation** reveals how individual factors affect collective results
- **"What if" questions** become testable hypotheses

---

## The Command Center: Your First Programming

The Command Center lets you give direct commands to agents. This is your gentle introduction to programming!

### Basic Commands to Try

**Step 1:** Open any model (or create a new file)

**Step 2:** Click in the Command Center (bottom section)

**Step 3:** Try these commands one at a time:

```{admonition} Beginner Commands
:class: note

**Create agents:**
```
create-turtles 10
```

**Make them move:**
```
ask turtles [ forward 1 ]
```

**Make them turn:**
```
ask turtles [ right 90 ]
```

**Change their color:**
```
ask turtles [ set color red ]
```

**Make them bigger:**
```
ask turtles [ set size 2 ]
```

**Complex behavior:**
```
ask turtles [ right random 360 forward 2 ]
```
```

### Understanding the Command Structure

NetLogo commands follow logical patterns:

**Pattern 1: "ask [who] [ what to do ]"**

- `ask turtles [ forward 1 ]` - ask all turtles to move forward
- `ask patches [ set pcolor green ]` - ask all patches to turn green
- `ask turtle 0 [ set color blue ]` - ask turtle #0 to turn blue

**Pattern 2: "create-[things] [how many]"**

- `create-turtles 50` - create 50 new turtle agents
- `create-links-with other turtles` - create connections between agents

**Pattern 3: "set [property] [value]"**

- `set color red` - change color to red
- `set size 3` - change size to 3
- `set xcor 0` - move to x-coordinate 0

### Activity 4: Command Center Exploration

**Try creating your own simple "model" using just the Command Center:**

1. **Create a population:** `create-turtles 20`
2. **Spread them out:** `ask turtles [ setxy random-xcor random-ycor ]`
3. **Give them different colors:** `ask turtles [ set color one-of [red blue green yellow] ]`
4. **Make them move randomly:** `ask turtles [ right random 360 forward 1 ]`
5. **Repeat the movement** by pressing the up arrow and Enter several times

```{admonition} Congratulations!
:class: tip

You've just written your first agent-based model! The agents (turtles) have:
- **Properties:** position, color, heading
- **Behaviors:** random movement
- **Interactions:** with the environment (staying within world boundaries)

This is the foundation of all agent-based modeling!
```

---

## Key Concepts Learned

```{admonition} What You've Discovered
:class: tip

✓ **Agent-based models** simulate individual actors following simple rules  
✓ **Emergent patterns** arise from individual interactions  
✓ **Visual programming** makes complex systems accessible  
✓ **Experimentation** reveals how parameters affect outcomes  
✓ **Real-world insights** come from simplified but powerful models  
✓ **Programming basics** use logical, English-like commands  
```

### Why This Matters for Social Science

Agent-based modeling is powerful because it matches how we think about social phenomena:

- **Methodological individualism:** Social patterns emerge from individual actions
- **Complexity theory:** Simple rules can generate complex behaviors  
- **Policy testing:** Try interventions safely before implementing them
- **Theory building:** Formalize verbal theories as computational models
- **Interdisciplinary bridges:** Connect social science with computational methods

---

## Looking Ahead

In the next tutorial, we'll learn how to write our own models from scratch, starting with basic programming concepts. You'll discover how to:

- Create procedures and organize code
- Use variables to store information
- Make agents interact with each other
- Build models that address your own research questions

```{admonition} Coming Up: Basic Programming Concepts
:class: note

**Next Tutorial Preview:**
- Variables and data types
- Procedures and functions  
- Control structures (loops and conditionals)
- Organizing code effectively
- Your first complete model from scratch

You'll move from exploring existing models to creating your own!
```

### Immediate Next Steps

1. **Explore 2-3 more models** from the Models Library that interest you
2. **Practice Command Center** commands until they feel natural
3. **Think about a social phenomenon** you'd like to model
4. **Bring questions** about what you've observed to the next tutorial

### Key Vocabulary

**Agent/Turtle:** Individual actors in the model  
**Patch:** Grid squares that make up the environment  
**Tick:** One time step in the model  
**Setup:** Initialize the model with starting conditions  
**Go:** Run one step of the model  
**Parameter:** Adjustable aspect of the model (sliders)  
**Emergent:** Patterns that arise from individual interactions  

You're now ready to start programming! The visual, interactive nature of NetLogo makes it an ideal environment for learning computational thinking while exploring social phenomena.
