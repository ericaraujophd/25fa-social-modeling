# Module 3: Contagion

:::{warning}
This page is under construction. It is just a draft that will receive a lot of changes yet.
:::

Welcome to the **Contagion Models** module! This module explores how ideas, behaviors, diseases, and innovations spread through social networks and populations. Building on threshold models from our segregation module, we'll examine both biological and social contagion processes using computational modeling approaches.

Contagion models help us understand how things spread - from infectious diseases to social movements, from rumors to technological innovations. Through agent-based modeling, we'll explore different mechanisms of transmission, the role of network structure, and intervention strategies for controlling or promoting different types of contagion. We'll see how Granovetter's threshold models {cite}`granovetter1978threshold` provide a foundation for understanding collective behavior and social mobilization.

**Module Duration:** 2 weeks

---

## Student Learning Objectives (SLOs)

By the end of this module, students will be able to:

::::{tab-set}

:::{tab-item} Core SLOs

- Construct data-driven, mathematical, statistical, and/or software models, analyzing their results to answer questions, solve problems, support arguments, draw conclusions, make predictions, and/or identify possible causal relationships.
- Identify and use tools appropriate for solving a given problem, such as algebra, calculus, and other mathematical tools; spreadsheets, databases, and data-analysis software; domain-specific software; and/or writing one's own software.
:::

:::{tab-item} Conceptual SLOs

- Distinguish between different types of contagion (biological, social, behavioral)
- Explain the role of network structure in contagion processes
- Analyze the dynamics of epidemic curves and tipping points
- Understand concepts like basic reproduction number (R₀) and herd immunity
- Connect threshold models to collective behavior and social movements
- Evaluate how individual thresholds aggregate to produce collective outcomes
:::

:::{tab-item} Technical SLOs

- Implement SIR and SEIR epidemiological models in NetLogo
- Model contagion on different network topologies
- Create threshold-based models for collective behavior
- Analyze the effects of intervention strategies on spread dynamics
- Visualize and interpret contagion simulation results
<!-- - Build protest/mobilization models with varying threshold distributions -->
:::

:::{tab-item} Critical Thinking

- Evaluate the effectiveness of public health interventions
- Assess the parallels and differences between biological and social contagion
- Critique assumptions in contagion models and their real-world applicability
- Analyze the ethical implications of contagion research and policy
- Compare model predictions with real-world contagion phenomena
:::

:::{tab-item} Communication

- Present findings from contagion simulation experiments clearly
- Discuss the policy implications of different intervention strategies
- Explain complex contagion concepts to non-technical audiences
- Connect model insights to contemporary public health and social issues
:::

::::

---

## 📋 Weekly Breakdown

::::{tab-set}

:::{tab-item} Lecture 9
**Week 5: Tuesday, September 30**

*Heckman Library 406C*

**Session A:** *Collective behavior: from contagion to thresholds.*

- **Summary:**
  - Historical approaches: Le Bon's crowd psychology, modern collective behavior theory.
  - Threshold models: Granovetter's framework for understanding collective action.
  - Applications: riots, social movements, technology adoption.
- **Slides:** [Collective Behavior](slides/Collective_Behavior_Presentation.pptx)

**Session B (SRG):** Discussion of readings.

- **Summary:**
  - Mark Granovetter, "Threshold Models of Collective Behavior" (*AJS*, 1978).
  - Deliverable: SRG prep sheet due (per role).
:::

:::{tab-item} Lecture 10
**Week 5: Thursday, October 2**

*Heckman Library 406C*

**Session A:** Contagion models: a brief overview.

- **Summary:**
  - Overview of contagion models: SIR, SEIR, and agent-based approaches.
  - Discussions on limitations: norms, emotions, networks.
- **Slides:** [Contagion Models](https://www.beautiful.ai/player/-OaZoGXdCLpuBZxYlVP9)

**Session B (Lab):** Contagion Model in NetLogo.

- **Summary:** Building contagion models in NetLogo.
  - Deliverable: Lab memo #4 due next week.
:::

:::{tab-item} Lecture 11
**Week 6: Tuesday, October 7**

*Heckman Library 406C*

**Session A:** *Social movements: mobilization, resources, grievances.*

- **Summary:**
  - Resource mobilization theory vs. grievance-based explanations.
  - Network effects in movement recruitment and organization.
  - Role of social media in contemporary movements.
- **Slides:** [Social Movements](slides/social-movements-lecture.pptx)

**Session B (SRG):** Discussion of readings.

- **Summary:**
  - Charles Tilly, *Social Movements, 1768–2004*, Ch. 1.
  - Deliverable: SRG prep sheet due (per role).
:::

:::{tab-item} Lecture 12
**Week 6: Thursday, October 9**

*Heckman Library 406C*

**Session A (Lab):** Protest/mobilization toy model.

- **Summary:**
  - Building models with shocks & repression parameters.
  - Testing different network structures and threshold distributions.
- **Slides:** [Protest Models Lab](slides/protest-models-lab.pptx)

**Session B (Project):** **Teams form**; **Problem pitch** (3 ideas per team).

- **Summary:**
  - Team formation process and guidelines.
  - Initial project brainstorming and concept pitches.
  - Deliverable: Problem pitch presentations.
:::

::::

---

## 📝 Assignments & Due Dates (Weeks 3–4)

::::{tab-set}

:::{tab-item} Lab Memo #4
**Due:** 10/9 before class | **Points:** 20 points

**Prompt (1-2 pages):**

Contagion model implementation & analysis

1. Implement a contagion model in NetLogo using the SIR or SEIR framework.
2. Analyze the model's behavior under different parameters (e.g., transmission rate, recovery rate).
3. Write your Lab Memo. You can [download the template in here](../resources/lab-memos/Lab_Memo_1_Worksheet.docx).
4. Make sure you add the codes you've changed, as well as interface modifications.
5. Submit your Lab Memo in PDF format through Moodle.

:::

:::{tab-item} Lab Memo #5
**Due:** 10/16 before class | **Points:** 30 points

**Prompt (1-2 pages):**

1. Take the code for the Schelling model implemented in class in the link above (Lecture 6). Your task is to analyze the results of the model. You will run a batch experiment varying the parameters of the model (e.g., tolerance level, density of agents) and collect data on the outcomes (e.g., number of happy agents, segregation index). You can use the BehaviorSpace tool in NetLogo to set up and run the batch experiment. Here are some steps to guide you:
   - Define the parameters you want to vary and their ranges.
   - Set up the metrics you want to record during the simulations.
   - Run the batch experiment and collect the data.
   - Analyze the results using statistical or graphical methods. Look for patterns or trends in how the parameters affect the outcomes. You may use LLM tools to help you with the analysis. Make sure you are bringing up your own insights and interpretations also.
2. Write your Lab Memo. You can [download the template in here](../resources/lab-memos/Lab_Memo_1_Worksheet.docx).
3. Make sure you add the codes you've changed, as well as interface modifications.
4. Submit your Lab Memo in PDF format through Moodle.

:::
::::

<!-- ### Week 5 (Sep 30 & Oct 2)

| **Assignment Type** | **Details** | **Due Date** | **Weight** |
|:------------------:|:------------|:------------:|:----------:|
| 📖 **SRG Prep Sheet #4** | Granovetter threshold models reading | Tue Sep 30 (start of class) | Participation |
| 🧪 **Lab Memo #4** | Contagion model implementation & analysis | Thu Oct 9 (start of class) | 5% | -->

### Week 6 (Oct 7 & Oct 9)

| **Assignment Type** | **Details** | **Due Date** | **Weight** |
|:------------------:|:------------|:------------:|:----------:|
| 📖 **SRG Prep Sheet #5** | Tilly social movements reading | Tue Oct 7 (start of class) | Participation |
| 🎓 **Project Team Formation** | Form teams & problem pitches | Thu Oct 9 (in class) | Project milestone |

---

## 📚 Reading and Extra Materials

### Required Readings

::::{tab-set}

:::{tab-item} Week 5 Reading
**Mark Granovetter (1978)**  
*"Threshold Models of Collective Behavior"*  
American Journal of Sociology, 83(6), 1420-1443.

**Key concepts:**

- Individual thresholds for participation
- Collective outcomes from individual decisions
- Applications to riots, strikes, and social movements
- Mathematical formalization of social influence

**Discussion questions:**

1. How do individual threshold distributions affect collective outcomes?
2. What role does information play in threshold models?
3. Can threshold models explain the unpredictability of social movements?
:::

:::{tab-item} Week 6 Reading
**Charles Tilly (2004)**  
*Social Movements, 1768–2004*  
Paradigm Publishers, Chapter 1.

**Key concepts:**

- Historical evolution of social movements
- WUNC displays (Worthiness, Unity, Numbers, Commitment)
- Repertoires of contention
- Political opportunity structures

**Discussion questions:**

1. How have social movement tactics evolved historically?
2. What makes some movements successful while others fail?
3. How do digital technologies change movement organization?
:::

::::

### Supplementary Materials

::::{tab-set}

:::{tab-item} Videos

- How Behavior Spreads: The Science of Complex Contagions (Damon Centola) [Link](https://www.youtube.com/watch?v=j5PTukNU4gU)
- Nicholas Christakis, "Social Contagion" [Link](https://www.youtube.com/watch?v=NjgPJi-FBP4)
- Nicholas Christakis: The hidden influence of social networks [Link](https://www.youtube.com/watch?v=2U-tOghblfE)
- Feeling Their Vibes? Uncovering the Mystery of Emotional Contagion 🧠💫 [Link](https://www.youtube.com/watch?v=gjc-wH-r-UA)
- Are Your Emotions Contagious? | On Mirror Neurons [Link](https://www.youtube.com/watch?v=HTFdMwCXpMw)
:::

:::{tab-item} Articles

- **Centola, D.** (2018). ["How Behavior Spreads". Chapter 3: "Social Contagion"](https://press.princeton.edu/books/hardcover/9780691175317/how-behavior-spreads?srsltid=AfmBOop9fIQRI8p5_8EL2MteLDdIIbitq0gWFPS5yhASPYfTWtbPuP0r)
- **Watts, D. J.** (2002). ["A simple model of global cascades on random networks"](https://www.pnas.org/doi/10.1073/pnas.082090499)
- **González-Bailón, S.** (2011). ["The dynamics of protest recruitment through online social networks"](https://www.nature.com/articles/srep00197)
- **Steinert-Threlkeld, Z. C.** (2017). ["Spontaneous collective action: Peripheral mobilization during the Arab Spring"](https://ideas.repec.org/a/cup/apsrev/v111y2017i02p379-403_00.html)

:::

:::{tab-item} NetLogo Models

- **Virus** (Biology section) - Basic epidemic spreading
- **Rebellion** (Social Science section) - Threshold-based uprising
- **Diffusion on a Directed Network** - Information spread
- **Preferential Attachment** - Network formation dynamics

:::

:::{tab-item} Online Resources

- [Complexity Explorer: Social Dynamics](https://www.complexityexplorer.org/)
- [NetLogo Models Library: Social Science](http://ccl.northwestern.edu/netlogo/models/)
- [Stanford Encyclopedia: Social Epistemology](https://plato.stanford.edu/entries/epistemology-social/)
- [Collective Behavior Research Group](https://www.collectivebehavior.org/)

:::

::::
