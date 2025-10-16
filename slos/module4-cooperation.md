# Module 4: Cooperation
<!-- pidgeon's conspiracy theory video -->
:::{warning}
This page is under construction. It is just a draft that will receive a lot of changes yet.
:::

Welcome to the **Cooperation Models** module! This module explores one of the most fundamental questions in social science: how and why do humans cooperate? We'll use game theory and agent-based modeling to understand the conditions that promote or hinder cooperation in social systems.

Cooperation models help us understand how individuals can work together for mutual benefit, even when short-term self-interest might suggest otherwise. Through computational modeling, we'll explore classic cooperation dilemmas, evolutionary strategies, and the role of reputation, punishment, and reward systems in maintaining cooperative behavior. We'll examine foundational work from Axelrod on the evolution of cooperation, Ostrom's principles for governing commons, and contemporary research on institutional design and collective action.

**Module Duration:** 2 weeks

---

## Student Learning Objectives (SLOs)

By the end of this module, students will be able to:

::::{tab-set}

:::{tab-item} Core SLOs

- Develop students' understanding of biblically-guided norms of justice, equality, freedom, and stewardship.
- Increase students' knowledge of social systems and of human behavior within such systems (revisited in the context of cooperation and dilemmas).
- Apply algorithmic, statistical, and/or mathematical methods to solve problems (as applied to cooperation and social dilemmas).

:::

:::{tab-item} Conceptual SLOs

- Explain the fundamental cooperation dilemmas (Prisoner's Dilemma, Public Goods, etc.)
- Understand evolutionary approaches to cooperation and reciprocity
- Analyze the role of institutions, norms, and sanctions in promoting cooperation
- Evaluate different mechanisms for solving collective action problems

:::

:::{tab-item} Technical SLOs

- Implement game theory models in NetLogo
- Model evolutionary strategies and fitness landscapes
- Simulate reputation systems and social learning mechanisms
- Analyze equilibrium outcomes and stability conditions

:::

:::{tab-item} Critical Thinking

- Assess the conditions under which cooperation emerges and persists
- Evaluate the effectiveness of different institutional designs
- Critique the assumptions of rational choice and evolutionary models
- Connect cooperation theory to real-world social and political challenges

:::

:::{tab-item} Communication

- Present game theory concepts to diverse audiences
- Discuss the implications of cooperation research for policy design
- Articulate the tension between individual and collective interests
- Engage with debates about human nature and social institutions

:::

::::

---

## 📋 Weekly Breakdown

::::{tab-set}

:::{tab-item} Lecture 13
**Week 7: Tuesday, October 14**

*Heckman Library 406C*

**Session A (Lab):** *Finishing our SIR model and calculating the R-naught.*

- **Summary:**
  - Completing the SIR model in NetLogo
  - Calculating the basic reproduction number (R0)
  - Exploring parameter effects on epidemic dynamics
  - Running simulations and analyzing outcomes

**Session B (Lab):** *Iterated Prisoner's Dilemma—strategy space & ecology.*

- **Summary:**
  - Building IPD tournament models in NetLogo
  - Implementing classic strategies (Tit-for-Tat, Always Cooperate, Always Defect, etc.)
  - Running tournament simulations with different strategy populations
- **Slides:** [The Prisoner's Dilemma and Game Theory](slides/prisoners-dilemma.pdf)
- **Code:** [PD Tournament Template](homework/pd-tournament-template.nlogo)


:::

:::{tab-item} Lecture 14
**Week 7: Thursday, October 16**

*Heckman Library 406C*

**Session A:** *Cooperation & social dilemmas (commons, reciprocity).*

- **Summary:**
  - Introduction to cooperation dilemmas: Prisoner's Dilemma, Public Goods, Tragedy of the Commons
  - Game theory basics and payoff structures
  - Applications to resource management and collective action
- **Slides:** [Introduction to Cooperation Dilemmas](slides/cooperation-intro.pdf)

**Session B (SRG):** Discussion of readings.

- **Summary:**
  - Elinor Ostrom, *Governing the Commons* (1990), Ch. 1
    - [Download PDF](../readings/module4/Ostrom-Ch1.pdf)
  - Robert Axelrod, *The Evolution of Cooperation* (1984), Ch. 1
    - [Download PDF](../readings/module4/Axelrod-Ch1.pdf)
  - Deliverable: SRG prep sheet due (per role).

:::

:::{tab-item} Lecture 15
**Week 8: Tuesday, October 21**

**NO CLASS (Advising Day)**

:::

:::{tab-item} Lecture 16
**Week 8: Thursday, October 23**

*Heckman Library 406C*

**Session A (Lab/Proj):** *From idea → mechanism chart → state variables.*

- **Summary:**
  - Converting project ideas into formal model specifications
  - Identifying key state variables and agent properties
  - Creating mechanism charts for cooperation dynamics
  - Defining interaction rules and decision-making processes
- **Slides:** [Evolutionary Strategies and Reciprocity](slides/evolutionary-cooperation.pdf)

**Session B (Proj):** *1-page Proposal workshop (turn in end of day).*

- **Summary:**
  - Final project proposal development and peer review
  - Articulating research questions about cooperation
  - Defining scope and measurable outcomes
  - Deliverable: Project Proposal (1 page) due end of day.

:::

::::

---

## 📝 Assignments & Due Dates (Weeks 7–8)

::::{tab-set}

:::{tab-item} Lab Memo #6
**Due:** 10/30 before class | **Points:** 25 points

**Prompt (3-4 pages):**

Prisoner's Dilemma Tournament implementation & analysis

1. Program classic strategies (Tit-for-Tat, Always Cooperate, Always Defect, etc.) in NetLogo
2. Run tournament simulations with different strategy populations
3. Analyze strategy performance under different conditions
4. Design and test your own original strategy
5. Write your Lab Memo analyzing the results. You can [download the template here](../resources/lab-memos/Lab_Memo_1_Worksheet.docx).
6. Make sure you document your strategy implementations and interface modifications.
7. Submit your Lab Memo in PDF format through Moodle.

**Resources:**

- [PD Tournament Template](homework/pd-tournament-template.nlogo)
- [Strategy Implementation Guide](homework/strategy-guide.md)
- [Tournament Analysis Framework](homework/tournament-analysis.pdf)

:::

::::

### Week 7 (Oct 14 & 16)

| **Assignment Type** | **Details** | **Due Date** | **Weight** |
|:------------------:|:------------|:------------:|:----------:|
| 📖 **SRG Prep Sheet #6** | Ostrom & Axelrod readings | Tue Oct 16 (start of class) | Participation |
| 🧪 **Lab Memo #5** | IPD tournament implementation & analysis | Thu Oct 23 (start of class) | 5% |

### Week 8 (Oct 21 & 23)

| **Assignment Type** | **Details** | **Due Date** | **Weight** |
|:------------------:|:------------|:------------:|:----------:|
| 🎓 **Project Proposal (1 page)** | Finalized project scope and cooperation mechanisms | Thu Oct 23 (end of day) | Project milestone |

---

## 📚 Reading and Extra Materials

### Required Readings

::::{tab-set}

:::{tab-item} Week 7 Reading
**Robert Axelrod (1984)**  
*The Evolution of Cooperation*  
Basic Books, Introduction + Chapter 1.

**Key concepts:**

- The Prisoner's Dilemma as a model for cooperation
- Iterated vs. one-shot interactions
- Success of Tit-for-Tat strategy
- Evolutionary stability and reciprocity

**Discussion questions:**

1. Why does Tit-for-Tat succeed in tournaments despite its simplicity?
2. How do repeated interactions change cooperation dynamics?
3. What real-world situations resemble the Prisoner's Dilemma?

**Elinor Ostrom (1990)**  
*Governing the Commons*  
Cambridge University Press, Chapter 1 excerpts.

**Key concepts:**

- Common pool resource dilemmas
- Tragedy of the commons vs. successful self-governance
- Design principles for stable resource institutions
- Polycentric governance systems

**Discussion questions:**

1. What makes some communities successfully manage common resources while others fail?
2. How do Ostrom's design principles relate to cooperation theory?
3. Can institutional design overcome individual self-interest?

:::

:::{tab-item} Week 8 Reading
**No new required reading for Week 8**

Week 8 focuses on developing your final project proposal. You should:

- Review readings from Weeks 1-7 relevant to your project topic
- Consult supplementary materials related to your research question
- Identify key mechanisms and variables for your model
- Prepare your 1-page project proposal

**Project Development Resources:**

- Revisit Axelrod and Ostrom readings for cooperation mechanisms
- Explore NetLogo Models Library for similar implementations
- Review successful ABM papers in your area of interest
- Consider design principles that apply to your research question

:::

::::

### Supplementary Materials

::::{tab-set}

:::{tab-item} Videos

- 🎥 [The Evolution of Trust](https://ncase.me/trust/) - Interactive game theory exploration
- 🎥 [Psychological experiment on cooperation](https://www.youtube.com/watch?v=VsyfQeSITww)
- 🎥 [Elinor Ostrom on Common Pool Resources](https://www.youtube.com/watch?v=example)
- 🎥 [Game Theory and the Prisoner's Dilemma](https://www.youtube.com/watch?v=example)

:::

:::{tab-item} Articles

- **Nowak, M. A.** (2006). ["Five rules for the evolution of cooperation"](https://www.science.org/doi/10.1126/science.1133755). *Science*, 314(5805), 1560-1563.
- **Fehr, E., & Gächter, S.** (2000). ["Cooperation and punishment in public goods experiments"](https://www.aeaweb.org/articles?id=10.1257/aer.90.4.980). *American Economic Review*, 90(4), 980-994.
- **Axelrod, R.** (1980). ["Effective choice in the prisoner's dilemma"](https://www.jstor.org/stable/173932). *Journal of Conflict Resolution*, 24(1), 3-25.
- **Ostrom, E.** (2009). ["A general framework for analyzing sustainability of social-ecological systems"](https://www.science.org/doi/10.1126/science.1172133). *Science*, 325(5939), 419-422.

:::

:::{tab-item} NetLogo Models

- **Prisoner's Dilemma** (Social Science section) - Basic 2-player game
- **PD Two Person Iterated** (Social Science section) - Repeated interactions
- **Cooperation** (Social Science section) - Spatial cooperation
- **Altruism** (Biology section) - Evolutionary cooperation

:::

:::{tab-item} Online Resources

- [The Evolution of Trust (Interactive)](https://ncase.me/trust/)
- [Prisoner's Dilemma Lab](http://www.gametheory.net/pd/)
- [Public Goods Game Simulator](http://virtual.vgb.ubc.ca/experiments/public_goods/)
- [Axelrod Python Library](https://axelrod.readthedocs.io/)
- [Game Theory Society Resources](http://www.gametheorysociety.org/)
- [Ostrom Workshop Resources](https://ostromworkshop.indiana.edu/)

:::

::::

### Historical Context

::::{dropdown} The Development of Cooperation Theory

**Game Theory Foundations:**

- Von Neumann, J., & Morgenstern, O. (1944). *Theory of games and economic behavior.* Princeton University Press.
- Nash, J. (1950). Equilibrium points in n-person games. *PNAS*, 36(1), 48-49.
- Tucker, A. W. (1950). A two-person dilemma. Stanford University Press.

**Evolutionary Approaches:**

- Hamilton, W. D. (1964). The genetical evolution of social behaviour. *Journal of Theoretical Biology*, 7(1), 1-16.
- Trivers, R. L. (1971). The evolution of reciprocal altruism. *The Quarterly Review of Biology*, 46(1), 35-57.
- Maynard Smith, J. (1982). *Evolution and the theory of games.* Cambridge University Press.

**Institutional Analysis:**

- Olson, M. (1965). *The logic of collective action.* Harvard University Press.
- Hardin, G. (1968). The tragedy of the commons. *Science*, 162(3859), 1243-1248.
- Ostrom, E. (2009). A general framework for analyzing sustainability of social-ecological systems. *Science*, 325(5939), 419-422.

::::

### Real-World Applications

::::{dropdown} Cooperation in Action

**Natural Resource Management:**

- Community forestry and fisheries management
- Water allocation and irrigation systems
- Common pool resource governance
- Climate change cooperation

**Organizational Behavior:**

- Team collaboration and productivity
- Corporate social responsibility
- Supply chain cooperation
- Innovation networks and knowledge sharing

**International Relations:**

- Trade agreements and economic cooperation
- Environmental treaties and compliance
- Security alliances and peacekeeping
- Global governance institutions

**Discussion Questions:**

- Why do some communities successfully manage common resources while others fail?
- How can organizations design incentives to promote teamwork?
- What role does culture play in cooperation and trust?
- How can technology facilitate or hinder cooperative behavior?

**Contemporary Challenges:**

- Digital commons and open source collaboration
- Platform cooperatives and gig economy governance
- Global cooperation on pandemic response
- Corporate cooperation on sustainability goals

::::

### Additional Tools & Resources

::::{dropdown} Tools and Software

**Interactive Demos:**

- 🖥️ [The Evolution of Trust](https://ncase.me/trust/) - Interactive cooperation game
- 🖥️ [Prisoner's Dilemma Lab](http://www.gametheory.net/pd/) - Online tournaments and analysis
- 🖥️ [Public Goods Game Simulator](http://virtual.vgb.ubc.ca/experiments/public_goods/) - Economic experiment platform

**Tools and Software:**

- 💻 **Axelrod Python Library:** Tournament analysis and strategy development
- 📊 **Gambit:** Game theory software for analysis and computation
- 🎨 **NetworkX:** Python library for network-based cooperation models
- 📈 **R Cooperation Package:** Statistical analysis of cooperation experiments

**Study Groups and Office Hours:**

- 👥 **Study Group Sessions:** Fridays 5-7 PM, Science Building 180
- 🕐 **Instructor Office Hours:** Mondays & Wednesdays 3-5 PM
- 💬 **Course Discord:** #cooperation-models channel for game theory discussions

::::

## 📚 Slides and Readings

```{admonition} Course Materials
:class: note

**Lecture Slides:**
- **Lecture 1:** [Introduction to Cooperation Dilemmas](slides/cooperation-intro.pdf)
- **Lecture 2:** [The Prisoner's Dilemma and Game Theory](slides/prisoners-dilemma.pdf)
- **Lecture 3:** [Evolutionary Strategies and Reciprocity](slides/evolutionary-cooperation.pdf)
- **Lecture 4:** [Institutions and Collective Action](slides/institutions-cooperation.pdf)

**Supplementary Videos:**
- [psychological experiment](https://www.youtube.com/watch?v=VsyfQeSITww)
- 🎥 [The Evolution of Trust](https://ncase.me/trust/) - Interactive game theory exploration
- 🎥 [Prisoner's Dilemma Tournament](https://youtu.be/example) (18 min)
- 🎥 [Public Goods Games](https://youtu.be/example) (15 min)
```

### Required Readings

```{dropdown} Core Reading Materials
:open:

1. **Axelrod, R. (1980).** *Effective choice in the prisoner's dilemma.* Journal of Conflict Resolution, 24(1), 3-25.
   - 📖 [PDF Download](readings/axelrod-1980.pdf)
   - 🎯 Focus on: Tournament results and the success of Tit-for-Tat

2. **Ostrom, E. (1990).** *Governing the commons.* Selected chapters on institutional design principles.
   - 📖 [PDF Download](readings/ostrom-1990-excerpts.pdf)
   - 🎯 Focus on: Design principles for stable resource institutions

3. **Nowak, M. A. (2006).** *Five rules for the evolution of cooperation.* Science, 314(5805), 1560-1563.
   - 📖 [PDF Download](readings/nowak-2006.pdf)
   - 🎯 Focus on: Mechanisms that promote cooperation evolution

4. **Fehr, E., & Gächter, S. (2000).** *Cooperation and punishment in public goods experiments.* American Economic Review, 90(4), 980-994.
   - 📖 [PDF Download](readings/fehr-gachter-2000.pdf)
   - 🎯 Focus on: The role of punishment in maintaining cooperation
```

---
<!-- 
## 📝 Homework

```{admonition} Assignment 1: Prisoner's Dilemma Tournament
:class: important

**Due:** End of Week 1 | **Points:** 25 points

**Objectives:**
- Implement and analyze different strategies in the Prisoner's Dilemma
- Understand the dynamics of repeated interactions
- Explore the conditions that favor cooperative strategies

**Tasks:**
1. Program classic strategies (Tit-for-Tat, Always Cooperate, Always Defect, etc.)
2. Run tournament simulations with different strategy populations
3. Analyze strategy performance under different conditions
4. Design and test your own original strategy

**Deliverables:**
1. NetLogo tournament model with documented strategies
2. Analysis of strategy performance and robustness
3. Reflection on tournament results (3-4 pages)

**Resources:**
- [PD Tournament Template](homework/pd-tournament-template.nlogo)
- [Strategy Implementation Guide](homework/strategy-guide.md)
- [Tournament Analysis Framework](homework/tournament-analysis.pdf)
```

```{admonition} Assignment 2: Public Goods and Policy Analysis
:class: important

**Due:** End of Week 2 | **Points:** 40 points

**Objectives:**
- Model public goods dilemmas and collective action problems
- Explore the effects of group size, communication, and sanctions
- Analyze institutional mechanisms for promoting cooperation
- Connect findings to real-world policy applications

**Tasks:**
1. Implement a public goods game with voluntary contributions
2. Add features like communication, punishment, and reputation
3. Test different institutional arrangements and their effects
4. Compare results with experimental literature
5. Develop policy recommendations for cooperation challenges

**Deliverables:**
1. Extended public goods model with multiple mechanisms and documentation
2. Systematic analysis of cooperation levels under different conditions
3. Policy recommendations based on model insights
4. Technical report (6-8 pages) including real-world applications
5. Brief presentation (5 minutes) of key findings

**Resources:**
- [Public Goods Template](homework/public-goods-template.nlogo)
- [Institutional Design Guide](homework/institutions-guide.md)
- [Experimental Studies Database](homework/cooperation-experiments.pdf)
- [Policy Analysis Framework](homework/policy-analysis.md)
```

--- -->

<!-- ## 🌟 Extra Materials

```{admonition} Additional Resources
:class: note

**Interactive Demos:**
- 🖥️ [The Evolution of Trust](https://ncase.me/trust/) - Interactive cooperation game
- 🖥️ [Prisoner's Dilemma Lab](http://www.gametheory.net/pd/) - Online tournaments and analysis
- 🖥️ [Public Goods Game Simulator](http://virtual.vgb.ubc.ca/experiments/public_goods/) - Economic experiment platform

**Tools and Software:**
- 💻 **Axelrod Python Library:** Tournament analysis and strategy development
- 📊 **Gambit:** Game theory software for analysis and computation
- 🎨 **NetworkX:** Python library for network-based cooperation models
- 📈 **R Cooperation Package:** Statistical analysis of cooperation experiments

**Study Groups and Office Hours:**
- 👥 **Study Group Sessions:** Fridays 5-7 PM, Science Building 180
- 🕐 **Instructor Office Hours:** Mondays & Wednesdays 3-5 PM
- 💬 **Course Discord:** #cooperation-models channel for game theory discussions
``` -->

### Historical Context

```{dropdown} The Development of Cooperation Theory

**Game Theory Foundations:**
- Von Neumann, J., & Morgenstern, O. (1944). *Theory of games and economic behavior.* Princeton University Press.
- Nash, J. (1950). Equilibrium points in n-person games. *PNAS*, 36(1), 48-49.
- Tucker, A. W. (1950). A two-person dilemma. Stanford University Press.

**Evolutionary Approaches:**
- Hamilton, W. D. (1964). The genetical evolution of social behaviour. *Journal of Theoretical Biology*, 7(1), 1-16.
- Trivers, R. L. (1971). The evolution of reciprocal altruism. *The Quarterly Review of Biology*, 46(1), 35-57.
- Maynard Smith, J. (1982). *Evolution and the theory of games.* Cambridge University Press.

**Institutional Analysis:**
- Olson, M. (1965). *The logic of collective action.* Harvard University Press.
- Hardin, G. (1968). The tragedy of the commons. *Science*, 162(3859), 1243-1248.
- Ostrom, E. (2009). A general framework for analyzing sustainability of social-ecological systems. *Science*, 325(5939), 419-422.
```

### Real-World Applications

```{dropdown} Cooperation in Action

**Natural Resource Management:**
- Community forestry and fisheries management
- Water allocation and irrigation systems
- Common pool resource governance
- Climate change cooperation

**Organizational Behavior:**
- Team collaboration and productivity
- Corporate social responsibility
- Supply chain cooperation
- Innovation networks and knowledge sharing

**International Relations:**
- Trade agreements and economic cooperation
- Environmental treaties and compliance
- Security alliances and peacekeeping
- Global governance institutions

**Discussion Questions:**
- Why do some communities successfully manage common resources while others fail?
- How can organizations design incentives to promote teamwork?
- What role does culture play in cooperation and trust?
- How can technology facilitate or hinder cooperative behavior?

**Contemporary Challenges:**
- Digital commons and open source collaboration
- Platform cooperatives and gig economy governance
- Global cooperation on pandemic response
- Corporate cooperation on sustainability goals
```
