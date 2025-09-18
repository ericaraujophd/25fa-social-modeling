# Module 2: Segregation

:::{warning}
This page is under construction. It is just a draft that will receive a lot of changes yet.
:::

Welcome to the Segregation Models module! This section explores computational models of residential segregation, building on Thomas Schelling's groundbreaking work {cite}`schelling1971dynamic` on how individual preferences can lead to collective patterns of segregation. We will generalize the residential model and see ways to apply it to other contexts.

Segregation models help us understand how micro-level individual choices can lead to macro-level social phenomena {cite}`schelling1978micromotives`. Through agent-based modeling, we'll explore how even mild preferences for similarity can result in highly segregated neighborhoods, providing insights into urban dynamics and social processes.


**Module Duration:** 2 weeks

---

## Student Learning Objectives (SLOs)

By the end of this module, students will be able to:

::::{tab-set}

:::{tab-item} Core SLOs

- Increase students’ knowledge of social systems and of human behavior within such systems
- Apply algorithmic, statistical, and/or mathematical methods to solve problems, broadly defined to find the answers to questions in various domains (as appropriate).
- Represent, interpret, and process information in graphical, numeric, and/or symbolic forms.
:::

:::{tab-item} Conceptual SLOs

- Explain the difference between individual preferences and collective outcomes
- Analyze how threshold models work in social systems
- Evaluate the relationship between micro-motives and macro-behavior
:::

:::{tab-item} Technical SLOs

- Navigate the NetLogo interface and basic programming concepts
- Create simple agent-based models with basic behaviors
- Run simulations and collect data from model outputs
- Interpret basic visualization and data outputs
- Implement Schelling's segregation model in NetLogo
- Modify agent rules and parameters to test different scenarios
- Collect and analyze data from agent-based simulations
:::

:::{tab-item} Critical Thinking

- Assess the implications of segregation models for real-world policy
- Compare model predictions with empirical data on residential patterns
- Critique the assumptions and limitations of segregation models
:::

:::{tab-item} Communication

- Present findings from simulation experiments clearly
- Discuss ethical implications of segregation research
- Connect model insights to contemporary social issues
:::

::::

---

## 📋 Weekly Breakdown

::::{tab-set}

:::{tab-item} Lecture 5
**Week 3: Tuesday, September 16**

*Heckman Library 406C*

**Session A:** *History of segregation in social research.* 

- **Summary:**
  - Traditions: Du Bois’ *The Philadelphia Negro*, Chicago School, Massey & Denton’s structural view.  
  - Concepts: de jure vs. de facto segregation; neighborhood effects; systemic racism.  
- **Slides:** [Segregation](slides/segregation-lecture.pptx)

**Session B:** Discussion of readings.

- **Summary:**
  - Massey & Denton, *American Apartheid* (1993), Ch. 1.  
  - Banaji, Fiske & Massey, “Systemic Racism” (*Cognitive Research*, 2021).  
  - Deliverable: SRG prep sheet.
:::

:::{tab-item} Lecture 6
**Week 3: Thursday, September 18**

*Heckman Library 406C*

**Session A (Lab):** Schelling segregation model.

- **Summary:** Building Schelling's model
- **Slides:** [TBD]()

**Session B:** 

- **Summary:** 
  - Explore tolerance thresholds, group asymmetry, neighborhood sizes.
  - Class critique: What’s realistic? What’s missing (e.g., structural constraints)?
  - Deliverable: **Lab Memo #2**.
- **Slides:** [TBD]()
:::

:::{tab-item} Lecture 7
**Week 4: Tuesday, September 23**

*Heckman Library 406C*

**Session A (SRG):** 

- **Summary:** TBD
  - Bruch, Elizabeth E., and Robert D. Mare. "Neighborhood choice and neighborhood change." American Journal of sociology 112.3 (2006): 667-709.
<!-- - **Slides:** -->

**Session B:** 

- **Summary:** TBD
- **Slides:** [TBD]()
:::

:::{tab-item} Lecture 8
**Week 4: Thursday, September 25**

*Heckman Library 406C*

**Session A (Lab):** TBD

**Session B (Lab):** TBD
:::

::::

---

## 📝 Assignments & Due Dates (Weeks 3–4)

::::{tab-set}

:::{tab-item} Lab Memo #2
**Due:** 9/23 before class | **Points:** 20 points

**Prompt (1-2 pages):**

1. You will receive the code for the Schelling model implemented in class. Your task is to modify the model in some way and analyze the results. You can choose one of the following options:
   - **Add a reporter:** e.g., track the number of moves, average satisfaction, or segregation index over time.
   - **Change the neighborhood definition:** e.g., use a larger or smaller neighborhood size.
   - **Introduce heterogeneity:** e.g., allow agents to have different tolerance levels or preferences.
   - **Add mobility constraints:** e.g., limit how far agents can move in a single step.
2. Write your Lab Memo. You can [download the template in here](../resources/lab-memos/Lab_Memo_1_Worksheet.docx).
3. Make sure you add the codes you've changed, as well as interface modifications.
4. Submit your Lab Memo in PDF format through Moodle.
:::

<!-- :::{tab-item} Reflection Essay #1
**Due:** 9/16 before class | **Points:** 30 points

**Prompt (≥1000 words):**

- How do Durkheim and Weber differ in their approaches to building knowledge?
- Where do you see common ground?
- How might ABMs fit into ongoing discussions about subjectivity, objectivity, and building valid social knowledge?
::: -->
::::

---

## 📚 Readings and Extra Materials

::::{tab-set}

:::{tab-item} 🔒 Required Readings

1. **Bruch, Elizabeth E., and Robert D. Mare.** "Neighborhood choice and neighborhood change." American Journal of sociology 112.3 (2006): 667-709.
   - 📖 [PDF Download](../readings/module2/Bruch-NeighborhoodChoiceNeighborhood-2006.pdf)
:::

:::{tab-item} 🔓 Recommended Readings

1. **Bruch, Elizabeth E.** "How population structure shapes neighborhood segregation." American Journal of Sociology 119.5 (2014): 1221-1278.
   - 📖 [PDF Download](../readings/module2/Bruch-PopulationStructureShapes-2014.pdf)
2. **Schelling, T. C. (1971).** *Dynamic models of segregation.* Journal of Mathematical Sociology, 1(2), 143-186.
   - 📖 [PDF Download](https://www.tandfonline.com/doi/abs/10.1080/0022250X.1971.9989794)
:::

:::{tab-item} 📽️ Inspirational Videos

- 🎥 [American Segregation, mapped at day and night](https://www.youtube.com/watch?v=qaPQN0aW47I) (7 min)
- 🎥 [The Power of Models](https://www.youtube.com/watch?v=FOPu5xM5z2s) (4 min)
- 🎥 [Top 3 aspects people get wrong about Agent Based Modeling](https://www.youtube.com/watch?v=Z3SOxECHLXM) (9 min)
- 🎥 [When is a system complex?](https://www.youtube.com/watch?v=M7Hf6VfsJ0U) (3 min)
- 🎥 [Emergence – How Stupid Things Become Smart Together](https://www.youtube.com/watch?v=16W7c0mb-rE) (7 min)

:::
::::

---

<!-- ## 📝 Homework

```{admonition} Assignment 1: Basic Schelling Model
:class: important

**Due:** End of Week 1 | **Points:** 25 points

**Objectives:**
- Build and run the basic Schelling segregation model
- Experiment with different tolerance levels
- Document your observations

**Deliverables:**
1. NetLogo model file (.nlogo)
2. Screenshots of different simulation runs
3. Short reflection paper (2-3 pages)

**Resources:**
- [Assignment Template](homework/assignment1-template.md)
- [Grading Rubric](homework/assignment1-rubric.pdf)
```

```{admonition} Assignment 2: Model Extensions and Analysis
:class: important

**Due:** End of Week 2 | **Points:** 40 points

**Objectives:**
- Modify the basic model with additional features
- Test hypotheses about segregation dynamics
- Analyze data from multiple simulation runs
- Connect model insights to real-world policy implications

**Possible Extensions:**
- Add economic factors (income, housing costs)
- Include multiple ethnic groups
- Implement different neighborhood definitions
- Add mobility constraints
- Test policy interventions

**Deliverables:**
1. Extended NetLogo model with documentation
2. Data analysis and visualizations comparing scenarios
3. Written report (6-8 pages) including policy analysis
4. Brief presentation (5 minutes) of key findings

**Resources:**
- [Extension Ideas](homework/extension-ideas.md)
- [Data Analysis Guide](homework/data-analysis-guide.pdf)
- [Policy Analysis Framework](homework/policy-analysis.md)
```

---

## 🌟 Extra Materials

```{admonition} Additional Resources
:class: note

**Interactive Demos:**
- 🖥️ [Online Schelling Model](https://ncase.me/segregation/) - Interactive web version
- 🖥️ [NetLogo Models Library](http://ccl.northwestern.edu/netlogo/models/Segregation) - Official model
- 🖥️ [Complexity Explorer Simulations](https://www.complexityexplorer.org/) - Additional ABM examples

**Tools and Software:**
- 💻 **NetLogo:** [Download](https://ccl.northwestern.edu/netlogo/download.shtml) and [Tutorials](https://ccl.northwestern.edu/netlogo/docs/)
- 📊 **R/Python:** Data analysis scripts and tutorials
- 🎨 **Visualization Tools:** Recommended packages for creating compelling graphics

**Study Groups and Office Hours:**
-  **Instructor Office Hours:** Tuesdays & Thursdays 2-4 PM
- 💬 **Course Forums:** Use Moodle for quick questions and discussions
```

### Advanced Readings

```{dropdown} For the Curious Mind

**Historical Context:**
- Clark, K. B. (1965). *Dark ghetto: Dilemmas of social power.* Harper & Row.
- Wilson, W. J. (1987). *The truly disadvantaged.* University of Chicago Press.

**Recent Research:**
- Bruch, E. E., & Mare, R. D. (2006). Neighborhood choice and neighborhood change. *American Journal of Sociology*, 112(3), 667-709.
- Fossett, M. (2006). *Ethnic preferences, social distance dynamics, and residential segregation.* Journal of Mathematical Sociology, 30(3-4), 185-273.

**Technical Extensions:**
- Hatna, E., & Benenson, I. (2012). The Schelling model of ethnic residential dynamics. *Environment and Planning B*, 39(4), 773-794.
```

### Real-World Connections

```{dropdown} Current Events and Applications

**Policy Examples:**
- Housing voucher programs and their effects
- Zoning laws and residential patterns
- School district boundaries and segregation

**Discussion Questions:**
- How do digital platforms (social media, dating apps) create new forms of segregation?
- What role do economic factors play beyond individual preferences?
- How can urban planners use these insights in city design?

**Guest Speaker Series:**
- Dr. Sarah Johnson (Urban Planning, Calvin University) - Week 2
``` -->

<!-- ---

## 🗓️ Weekly Schedule

```{admonition} Module Timeline
:class: note

| Week | Topic | Readings | Assignments |
|------|-------|----------|-------------|
| **Week 1** | Introduction & Basic Model | Schelling (1971), Epstein (2002) | Assignment 1 Due |
| **Week 2** | Extensions & Policy Applications | Card et al. (2008), Supplementary readings | Assignment 2 Due |
``` -->

