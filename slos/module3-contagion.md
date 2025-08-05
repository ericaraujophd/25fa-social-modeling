# Module 3: Contagion

Welcome to the Contagion Models module! This module explores how ideas, behaviors, diseases, and innovations spread through social networks and populations. We'll examine both biological and social contagion processes using computational modeling approaches.

## Overview

Contagion models help us understand how things spread - from infectious diseases to social movements, from rumors to technological innovations. Through agent-based modeling, we'll explore different mechanisms of transmission, the role of network structure, and intervention strategies for controlling or promoting different types of contagion.

```{note}
**Module Duration:** 2 weeks | *Estimated time: 8-12 hours*
```

---

## 🎯 Student Learning Objectives (SLOs)

```{admonition} Learning Goals
:class: tip

By the end of this module, students will be able to:

**Conceptual Understanding:**
- Distinguish between different types of contagion (biological, social, behavioral)
- Explain the role of network structure in contagion processes
- Analyze the dynamics of epidemic curves and tipping points
- Understand concepts like basic reproduction number (R₀) and herd immunity

**Technical Skills:**
- Implement SIR and SEIR epidemiological models in NetLogo
- Model contagion on different network topologies
- Analyze the effects of intervention strategies on spread dynamics
- Visualize and interpret contagion simulation results

**Critical Thinking:**
- Evaluate the effectiveness of public health interventions
- Assess the parallels and differences between biological and social contagion
- Critique assumptions in contagion models and their real-world applicability
- Analyze the ethical implications of contagion research and policy

**Communication:**
- Present epidemiological concepts to diverse audiences
- Discuss the role of modeling in public health decision-making
- Communicate uncertainty and risk in contagion scenarios
- Engage with contemporary debates about disease control and social influence
```

---

## 📚 Slides and Readings

```{admonition} Course Materials
:class: note

**Lecture Slides:**
- **Lecture 1:** [Introduction to Contagion Models](slides/contagion-intro.pdf)
- **Lecture 2:** [SIR and SEIR Models](slides/sir-seir-models.pdf)
- **Lecture 3:** [Network Effects in Contagion](slides/network-contagion.pdf)
- **Lecture 4:** [Social vs. Biological Contagion](slides/social-contagion.pdf)

**Supplementary Videos:**
- 🎥 [How Viruses Spread](https://youtu.be/example) (14 min)
- 🎥 [Network Contagion Visualization](https://youtu.be/example) (16 min)
- 🎥 [Social Contagion Examples](https://youtu.be/example) (12 min)
```

### Required Readings

```{dropdown} Core Reading Materials
:open:

1. **Kermack, W. O., & McKendrick, A. G. (1927).** *A contribution to the mathematical theory of epidemics.* Proceedings of the Royal Society of London, 115(772), 700-721.
   - 📖 [PDF Download](readings/kermack-mckendrick-1927.pdf)
   - 🎯 Focus on: The foundational SIR model

2. **Pastor-Satorras, R., & Vespignani, A. (2001).** *Epidemic spreading in scale-free networks.* Physical Review Letters, 86(14), 3200-3203.
   - 📖 [PDF Download](readings/pastor-satorras-vespignani-2001.pdf)
   - 🎯 Focus on: Network topology effects on epidemic spread

3. **Centola, D. (2010).** *The spread of behavior in an online social network experiment.* Science, 329(5996), 1194-1197.
   - 📖 [PDF Download](readings/centola-2010.pdf)
   - 🎯 Focus on: Experimental evidence of social contagion

4. **Funk, S., et al. (2010).** *Modelling the influence of human behaviour on the spread of infectious diseases.* Journal of the Royal Society Interface, 7(50), 1247-1256.
   - 📖 [PDF Download](readings/funk-2010.pdf)
   - 🎯 Focus on: Behavioral responses to epidemic threats
```

---

## 📝 Homework

```{admonition} Assignment 1: Basic SIR Model Implementation
:class: important

**Due:** End of Week 1 | **Points:** 25 points

**Objectives:**
- Build and analyze a basic SIR epidemic model
- Explore the effects of different parameters on disease spread
- Compare model predictions with real epidemic data

**Deliverables:**
1. NetLogo SIR model with clear documentation
2. Parameter sensitivity analysis
3. Comparison with historical epidemic data (Spanish flu, COVID-19, etc.)
4. Short report (3-4 pages) discussing findings

**Resources:**
- [SIR Model Template](homework/sir-template.nlogo)
- [Historical Epidemic Data](homework/epidemic-data.csv)
- [Parameter Analysis Guide](homework/parameter-analysis.md)
```

```{admonition} Assignment 2: Network Contagion and Policy Analysis
:class: important

**Due:** End of Week 2 | **Points:** 40 points

**Objectives:**
- Implement contagion models on different network structures
- Analyze how network properties affect spread dynamics
- Test intervention strategies for epidemic control
- Connect findings to real-world policy implications

**Tasks:**
1. Model contagion on random, small-world, and scale-free networks
2. Analyze the effect of network clustering and degree distribution
3. Implement and test vaccination, quarantine, and social distancing interventions
4. Compare biological and social contagion dynamics
5. Develop policy recommendations based on model results

**Deliverables:**
1. Extended NetLogo model with network capabilities and documentation
2. Network analysis and visualization comparing scenarios
3. Intervention strategy evaluation with policy analysis
4. Technical report (6-8 pages) including recommendations
5. Brief presentation (5 minutes) of key findings

**Resources:**
- [Network Contagion Template](homework/network-contagion-template.nlogo)
- [Network Analysis Tools](homework/network-analysis-guide.md)
- [Intervention Strategies Guide](homework/interventions-guide.pdf)
- [Policy Analysis Framework](homework/policy-analysis.md)
```

---

## 🌟 Extra Materials

```{admonition} Additional Resources
:class: note

**Interactive Demos:**
- 🖥️ [Epidemic Calculator](https://gabgoh.github.io/COVID/) - Interactive epidemic modeling
- 🖥️ [Network Contagion Simulator](http://ncase.me/pandemic/) - Visual network spread simulation
- 🖥️ [R₀ Interactive Visualization](https://www.washingtonpost.com/graphics/2020/world/corona-simulator/) - Social distancing effects

**Tools and Software:**
- 💻 **EpiModel (R):** Statistical modeling of epidemics
- 📊 **GLEAM:** Global epidemic and mobility modeling
- 🎨 **Cytoscape:** Network visualization and analysis software
- 📈 **Gephi:** Network exploration and visualization

**Study Groups and Office Hours:**
-  **Instructor Office Hours:** Tuesdays & Thursdays 2-4 PM
- 💬 **Course Forums:** Use Moodle for quick questions and discussions
```

### Historical Context

```{dropdown} The Evolution of Epidemic Modeling

**Mathematical Foundations:**
- Bernoulli, D. (1760). Essai d'une nouvelle analyse de la mortalité causée par la petite vérole.
- Ross, R. (1911). *The prevention of malaria.* John Murray.
- Bailey, N. T. J. (1975). *The mathematical theory of infectious diseases.* Griffin.

**Modern Developments:**
- Anderson, R. M., & May, R. M. (1991). *Infectious diseases of humans.* Oxford University Press.
- Keeling, M. J., & Rohani, P. (2007). *Modeling infectious diseases in humans and animals.* Princeton University Press.

**Network Epidemiology:**
- Watts, D. J., & Strogatz, S. H. (1998). Collective dynamics of 'small-world' networks. *Nature*, 393(6684), 440-442.
- Barabási, A. L., & Albert, R. (1999). Emergence of scaling in random networks. *Science*, 286(5439), 509-512.
```

### Real-World Applications

```{dropdown} Contagion Models in Practice

**Public Health Applications:**
- COVID-19 pandemic modeling and policy responses
- Seasonal influenza vaccination strategies
- HIV prevention and treatment programs
- Malaria control in endemic regions

**Social Contagion Examples:**
- Viral marketing and social media campaigns
- Political movement organization and spread
- Financial contagion and market crashes
- Behavioral interventions for health promotion

**Discussion Questions:**
- How do behavioral changes affect epidemic dynamics?
- What are the ethical considerations in epidemic modeling?
- How can we balance individual privacy with public health surveillance?
- What role should predictive models play in policy decisions?

**Current Research:**
- Digital contact tracing and privacy concerns
- Vaccine hesitancy and misinformation spread
- Climate change effects on disease emergence
- One Health approaches to pandemic prevention
```

---

## 🗓️ Weekly Schedule

```{admonition} Module Timeline
:class: note

| Week | Topic | Readings | Assignments |
|------|-------|----------|-------------|
| **Week 1** | SIR Models & Basic Epidemiology | Kermack & McKendrick (1927), Historical Epidemic Data | SIR Implementation Due |
| **Week 2** | Network Effects & Policy Applications | Pastor-Satorras & Vespignani (2001), Centola (2010), Funk et al. (2010) | Network Analysis Due |
```

---

## 📞 Getting Help

```{admonition} Need Support?
:class: tip

- **Quick Questions:** Use the Moodle class forums
- **Technical Issues:** Visit our troubleshooting guide
- **Conceptual Help:** Attend office hours
- **Accessibility:** Contact the instructors for accommodations
```
