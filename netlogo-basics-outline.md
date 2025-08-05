# NetLogo Basics Section - Teaching Outline

## Overview & Philosophy

**Target Audience:** Non-Computer Science students (social sciences, humanities, etc.)  
**Teaching Approach:** Learning by doing, visual-first, gradual complexity increase  
**Duration:** Integrated throughout course modules (not a separate unit)  
**Goal:** Enable students to create, modify, and understand agent-based models without programming background

---

## Proposed Structure

### 1. **NetLogo Introduction & Interface** 

*Location: `netlogo/index.md`*

#### Content Outline:

- **What is NetLogo?** (5 min)
  - Visual programming environment for agent-based modeling
  - Used by researchers worldwide (not just programmers!)
  - Examples of famous models built in NetLogo

- **Interface Tour** (15 min)
  - World view (where agents live and move)
  - Interface tab (buttons, sliders, plots you can interact with)
  - Code tab (where the magic happens - but don't worry!)
  - Info tab (documentation and explanations)

- **Your First Model Experience** (20 min)
  - Open a pre-built model (Wolf Sheep Predation)
  - Interact with sliders and buttons
  - Watch what happens, ask "why?"
  - Make predictions, test them

#### Learning Objectives:

- Navigate the NetLogo interface confidently
- Understand the difference between agents and the environment
- Experience how changing parameters affects outcomes
- Feel comfortable exploring pre-built models

#### Activities:

- **Exploration Exercise:** Students pick any model from the Models Library, explore for 10 minutes, and share one surprising discovery
- **Parameter Play:** Using Segregation model, predict what happens with different tolerance levels

---

### 2. **Basic Programming Concepts** 
*Location: `netlogo/coding/index.md`*

#### Content Outline:
- **Programming Without Fear** (10 min)
  - Programming = giving detailed instructions
  - Like writing a recipe or assembly instructions
  - NetLogo uses English-like commands

- **Core Concepts** (25 min)
  - **Variables:** Things that can change (age, color, position)
  - **Commands:** Actions agents can take (move, change-color, die)
  - **Reporters:** Questions agents can answer (who-is-nearby, count-turtles)
  - **Procedures:** Grouping instructions together (like a recipe)

- **Reading Code Before Writing** (15 min)
  - Look at simple procedures together
  - "What do you think this does?"
  - Connect code to visual outcomes

#### Learning Objectives:

- Understand that code is just detailed instructions
- Recognize basic programming concepts in NetLogo syntax
- Read and interpret simple NetLogo procedures
- Feel prepared to modify existing code

#### Activities:

- **Code Reading:** Given a simple `move-turtle` procedure, predict what it does
- **Spot the Difference:** Compare two similar procedures, identify what's different
- **Human Computer:** Students act out simple NetLogo commands

---

### 3. **Working with Agents (Turtles)** 

*Location: `netlogo/coding/1_agents.md`*

#### Content Outline:

- **Meet the Turtles** (10 min)
  - Turtles = individual agents in your model
  - Each turtle has properties (color, size, position, custom variables)
  - Turtles can move, interact, make decisions

- **Creating and Controlling Turtles** (20 min)
  - `create-turtles` - bringing agents to life
  - `ask turtles` - giving instructions to all or some agents
  - Basic turtle commands: `forward`, `right`, `left`, `set-color`

- **Making Turtles Unique** (15 min)
  - Giving turtles different properties
  - Random vs. systematic assignment
  - Using `who` numbers to identify specific turtles

- **Turtle Interactions** (15 min)
  - How turtles "see" other turtles nearby
  - Simple interaction rules
  - Collective behavior from individual actions

#### Learning Objectives:
- Create and control basic turtle agents
- Understand how individual agent rules create collective patterns
- Modify turtle properties and behaviors
- Implement simple agent interactions

#### Activities:
- **Build a Flock:** Create turtles that move in the same direction
- **Random Walk:** Make turtles move randomly around the world
- **Color Copying:** Turtles change color to match nearby turtles

---

### 4. **Environment and Patches** 
*Location: `netlogo/coding/2_environment.md`*

#### Content Outline:
- **The World Patches Live In** (10 min)
  - Patches = grid squares that make up the world
  - Each patch has properties (color, variables)
  - Environment shapes agent behavior

- **Patch Properties and Visualization** (15 min)
  - Using patch color to show data
  - Creating environmental gradients
  - Resource distributions

- **Turtle-Patch Interactions** (15 min)
  - Turtles asking their current patch questions
  - Moving based on patch properties
  - Turtles modifying their environment

#### Learning Objectives:
- Understand the role of environment in agent-based models
- Create meaningful environmental visualizations
- Implement agent-environment interactions

#### Activities:
- **Heat Map:** Create a temperature gradient using patch colors
- **Foraging:** Turtles move toward resource-rich patches
- **Erosion:** Turtles modify patch values as they pass through

---

### 5. **Building Your First Complete Model** 
*Location: `netlogo/coding/3_first-model.md`*

#### Content Outline:
- **Planning Before Programming** (15 min)
  - What question are you trying to answer?
  - What are your agents and what do they do?
  - What does success look like?

- **Step-by-Step Model Building** (30 min)
  - Start simple: create agents
  - Add one behavior at a time
  - Test frequently, fix problems early
  - Build complexity gradually

- **Documentation and Sharing** (10 min)
  - Writing clear comments in code
  - Using the Info tab effectively
  - Preparing models for others to understand

#### Learning Objectives:
- Plan and implement a complete simple model
- Use iterative development process
- Document models clearly for others
- Debug common problems

#### Activities:
- **Mini-Project:** Build a simple "ants following pheromone trails" model
- **Code Review:** Pairs review each other's models and suggest improvements

---

### 6. **Data Collection and Analysis** 
*Location: `netlogo/coding/4_data-analysis.md`*

#### Content Outline:
- **Why Data Matters** (10 min)
  - Models generate data, not just pretty pictures
  - Quantifying outcomes helps test hypotheses
  - Comparing different scenarios

- **Built-in Data Tools** (20 min)
  - Using plots to track variables over time
  - Monitors for real-time values
  - Simple statistical reporters (mean, count, etc.)

- **Exporting and External Analysis** (15 min)
  - Saving data for analysis in Excel/R/Python
  - BehaviorSpace for systematic experiments
  - Making sense of model outputs

#### Learning Objectives:
- Collect meaningful data from model runs
- Use NetLogo's built-in analysis tools
- Export data for external analysis
- Design systematic experiments

#### Activities:
- **Experiment Design:** Plan a systematic study using a class model
- **Data Visualization:** Create plots and charts from model outputs

---

### 7. **Advanced Topics and Troubleshooting** 
*Location: `netlogo/coding/5_advanced.md`*

#### Content Outline:
- **Common Problems and Solutions** (20 min)
  - Debugging strategies for non-programmers
  - Understanding error messages
  - When to ask for help

- **Extending Existing Models** (15 min)
  - Adding new features to NetLogo Library models
  - Combining ideas from different models
  - Making models your own

- **Where to Go Next** (10 min)
  - NetLogo documentation and community
  - Programming resources for social scientists
  - Career paths that use computational modeling

#### Learning Objectives:
- Solve common programming problems independently
- Extend and modify existing models creatively
- Find additional learning resources
- See connections to future opportunities

#### Activities:
- **Model Mashup:** Combine features from two different NetLogo Library models
- **Debugging Challenge:** Fix intentionally broken model code

---

## Teaching Strategies for Non-CS Students

### 1. **Scaffold Complexity**
- Always start with working examples
- Add one new concept at a time
- Connect to familiar non-technical analogies

### 2. **Visual First**
- Show the outcome before showing the code
- Use lots of screenshots and diagrams
- "What do you see happening?" before "How does the code work?"

### 3. **Social Science Context**
- Every programming concept connects to social phenomena
- Use examples from sociology, psychology, economics
- Emphasize "Why would a social scientist care about this?"

### 4. **Collaborative Learning**
- Pair programming with mixed skill levels
- Code reviews focused on understanding, not perfection
- Group debugging sessions

### 5. **Growth Mindset**
- Celebrate small victories
- "Everyone struggles with programming at first"
- Focus on progress, not perfection

---

## Assessment Philosophy

### Formative Assessment:
- Quick check-ins during tutorials
- Peer code reviews
- "Explain what this code does" exercises

### Summative Assessment:
- Models that work, even if code isn't elegant
- Clear documentation and explanation
- Creative extensions of basic concepts
- Reflection on learning process

### What NOT to Grade:
- Programming style or efficiency
- Complex algorithmic thinking
- Computer science theory

---

## Resources for Each Section

### Templates and Starter Code
- Simple, well-commented model templates
- "Fill in the blanks" exercises
- Progressive complexity challenges

### Reference Materials
- Visual quick reference cards
- "Cheat sheets" with common commands
- Troubleshooting flowcharts

### Community Support
- Class discussion forums for code questions
- Peer mentoring system
- Office hours focused on programming help

---

## Integration with Course Modules

### Module 1 (Introduction): 
- Use NetLogo Basics sections 1-2
- Focus on exploration and interface

### Module 2 (Segregation):
- Use sections 3-4 (agents and environment)
- Build on Schelling model

### Module 3 (Contagion):
- Use section 5 (complete models)
- SIR model implementation

### Module 4 (Cooperation):
- Use section 6 (data analysis)
- Tournament and game theory models

### Module 5 (Polarization):
- Use section 7 (advanced topics)
- Network-based models

---

## Expected Learning Outcomes

By the end of the NetLogo Basics sequence, students should be able to:

1. **Navigate NetLogo confidently** and explore existing models
2. **Read and understand** simple NetLogo code
3. **Modify existing models** to test new hypotheses
4. **Create simple models** from scratch with guidance
5. **Collect and analyze data** from model runs
6. **Debug common problems** and know when to ask for help
7. **Connect programming concepts** to social science questions
8. **Feel prepared** to use computational modeling in future coursework

---

## Success Metrics

- Students complete programming assignments successfully
- Students help each other with code problems
- Students propose creative model extensions
- Students see programming as a tool, not an obstacle
- Students feel confident approaching new computational tools
