# Introduction & Interface

Welcome to NetLogo! This tutorial will help you get comfortable with NetLogo in just 40 minutes.

```{note}
**Time Required:** 40 minutes  
**Target:** Non-CS students learning agent-based modeling
```

## What is NetLogo? (5 min)

NetLogo is a **visual programming environment for agent-based modeling** - think of it as a virtual laboratory where you can:

- Create "agents" (people, animals, organizations) that follow simple rules
- Watch how individual behaviors create complex collective patterns  
- Test "what if" scenarios by changing rules and seeing results

### Used by Researchers Worldwide (Not Just Programmers!)

```{admonition} Real Research Uses NetLogo
:class: tip

- **Economists** model market dynamics and trading behaviors
- **Sociologists** study how social norms spread through communities  
- **Political scientists** explore voting patterns and coalition formation
- **Urban planners** analyze traffic flow and city development
- **Epidemiologists** track disease spread and intervention strategies
```

**Examples of famous models built in NetLogo:**
- Thomas Schelling's segregation model (Nobel Prize winner)
- Robert Axelrod's cooperation tournaments
- Models of financial markets and economic bubbles

---

## Interface Tour (15 min)

Let's explore the four main areas of NetLogo:

### 1. World View (where agents live and move)
- This is the "stage" where your social drama unfolds
- Agents appear as colored shapes that move and interact
- Think of it as looking down at a city from above

### 2. Interface Tab (buttons, sliders, plots you can interact with)
- **Buttons:** Start, stop, and control your model
- **Sliders:** Adjust parameters like "how many people?" or "how fast do they move?"
- **Plots:** Graphs showing data over time  
- **Monitors:** Display current values like "average wealth"

### 3. Code Tab (where the magic happens - but don't worry!)
- Contains the "rules" that tell agents what to do
- Uses English-like commands: `move-forward`, `turn-right`
- We'll start by reading code, not writing it

### 4. Info Tab (documentation and explanations)
- Always read this first when exploring a model!
- Explains what the model does and what to look for
- Provides background and references

```{admonition} Getting Started
:class: note

1. **Download NetLogo** from [https://ccl.northwestern.edu/netlogo/download.shtml](https://ccl.northwestern.edu/netlogo/download.shtml)
2. **Install and open** NetLogo
3. **Open Models Library:** File → Models Library
```

---

## Your First Model Experience (20 min)

Let's explore classic models to see NetLogo in action.

### Activity 1: Wolf Sheep Predation

**Step 1: Open the model**
- File → Models Library  
- Browse to "Biology" → "Wolf Sheep Predation"
- Click "Open"

**Step 2: Explore the interface**
- **Sliders:** initial-number-sheep, initial-number-wolves, etc.
- **Buttons:** setup, go, go (forever)
- **Plots:** populations over time

**Step 3: Run your first simulation**
- Click **"setup"** (creates initial population)
- Click **"go"** several times (runs step-by-step)
- Or click **"go forever"** (runs continuously)

```{admonition} What Do You Notice?
:class: question

- How do sheep (white) and wolves (black) move?
- What happens when wolves and sheep meet?
- How do population numbers change over time?
- Do you see cycles or patterns?
```

**Step 4: Experiment with parameters**
- Reset: Click "setup"
- Change "initial-number-wolves" to 250 (very high)
- Click "setup" then "go" - what happens?
- Try very few wolves (10) - how does this change things?

### Activity 2: Exploration Exercise

**Your turn!** Pick any model from the Models Library and explore for 10 minutes.

**Suggested models for social scientists:**
- **Segregation** (Social Science) - neighborhood preferences and segregation
- **Voting** (Social Science) - how voting behaviors spread
- **Cooperation** (Social Science) - prisoner's dilemma strategies  
- **Traffic Basic** (Social Science) - traffic jams from individual decisions

**For each model:**
1. **Read the Info tab** - what is this about?
2. **Run with default settings** - what happens?
3. **Change parameters** - how do outcomes change?
4. **Form a hypothesis** - "If I change X, then Y will happen"
5. **Test it** - were you right?

**Share one surprising discovery:** What model did you choose and what surprised you most?

### Activity 3: Parameter Play with Segregation

**Using the Segregation model, predict what happens:**
- Set "%-similar-wanted" to 30% (agents want 30% similar neighbors)
- Click "setup" then "go forever"
- Let it run until it stops changing

```{admonition} Key Insight
:class: important

**Small individual preferences can create dramatic collective outcomes!** Even when people only want 30% similar neighbors, you often get neighborhoods that are 80%+ segregated.
```

**Try different tolerance levels:**
- 10% (very tolerant)
- 50% (moderate preference)  
- 80% (strong preference)

How does each change the final segregation pattern?

---

## Learning Objectives Achieved

By completing this tutorial, you can now:

✓ **Navigate the NetLogo interface confidently**  
✓ **Understand the difference between agents and environment**  
✓ **Experience how changing parameters affects outcomes**  
✓ **Feel comfortable exploring pre-built models**

---

## What's Next?

In the next section, we'll peek "under the hood" to see how these models work. But don't worry - we'll start with simple concepts that build your confidence step by step.

```{admonition} Coming Up: Basic Programming Concepts
:class: note

- Programming = giving detailed instructions (like a recipe)
- Variables, commands, and procedures in plain English
- Reading code before writing code
- Making small modifications to existing models
```

**Preparation for next time:** Think about a social phenomenon you'd like to model. What individual behaviors might create interesting collective patterns?
