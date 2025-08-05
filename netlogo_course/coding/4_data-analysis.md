# Data Collection and Analysis

Now that you can build complete models, let's learn how to systematically collect data from them and analyze the results. This is where agent-based modeling becomes a powerful research tool.

```{note}
**Time Required:** 60 minutes  
**Prerequisites:** Completed "Building Your First Complete Model"
```

## Why Data Collection Matters

Agent-based models generate rich, complex data. To extract insights, we need systematic approaches to:

- **Measure** what happens in our models
- **Record** data in useful formats  
- **Analyze** patterns across many runs
- **Compare** different scenarios
- **Connect** model results to real-world data

```{admonition} From Observations to Insights
:class: tip

**Casual Observation:** "It looks like the rumor spreads faster when people are more social"

**Systematic Analysis:** "Increasing average social activity from 3 to 7 reduces time-to-50%-spread from 25 to 12 time steps (average over 20 runs, p < 0.01)"

The second statement is much more convincing and useful!
```

---

## Built-in Data Collection in NetLogo

NetLogo provides several ways to collect data automatically.

### Plots: Real-Time Visualization

Plots show data as your model runs, perfect for watching trends.

#### Setting Up a Basic Plot

1. **Interface tab** → **Add** → **Plot**
2. **Name:** "Rumor Spread Over Time"
3. **X-axis label:** "Time"  
4. **Y-axis label:** "Number of People"

#### Adding Plot Pens

**In the plot editor:**

```netlogo
; Pen 1: "Knows Rumor" (red)
plot count turtles with [knows-rumor?]

; Pen 2: "Believes Rumor" (blue)  
plot count turtles with [believes-rumor?]

; Pen 3: "Total Population" (black)
plot count turtles
```

**Add to your go procedure:**
```netlogo
to go
  move
  share-rumors  
  decide-belief
  tick
  
  ; Update plots automatically
  do-plots
end
```

#### Activity 1: Create Multiple Plots

Create these plots for your rumor model:

**Plot 1: "Population Breakdown"**
- Pen 1: Count who know rumor
- Pen 2: Count who believe rumor  
- Pen 3: Count who are skeptical (know but don't believe)

**Plot 2: "Spreading Rate"**
- Pen 1: New people learning rumor this turn
- Pen 2: New people believing rumor this turn

**Plot 3: "Average Properties"**
- Pen 1: Average social activity of believers
- Pen 2: Average skepticism of believers

```{admonition} Plot Design Tips
:class: note

**Good plots:**
- Show clear trends over time
- Use different colors for different categories
- Have meaningful axis labels
- Update automatically during model runs

**Advanced features:**
- Log scales for exponential growth
- Multiple y-axes for different scales
- Histogram plots for distributions
```

---

## Monitors: Key Statistics

Monitors display single numbers that update automatically.

### Setting Up Monitors

**Monitor 1: Spread Percentage**
```netlogo
; Reporter:
(count turtles with [knows-rumor?] / count turtles) * 100

; Display name: "% Know Rumor"
; Number of decimal places: 1
```

**Monitor 2: Belief Rate**  
```netlogo
; Reporter:
ifelse-value (count turtles with [knows-rumor?] > 0)
  [(count turtles with [believes-rumor?] / count turtles with [knows-rumor?]) * 100]
  [0]

; Display name: "% Believers (of those who know)"
```

**Monitor 3: Spreading Speed**
```netlogo
globals [
  previous-knowers
  current-spread-rate
]

; In setup:
set previous-knowers 0

; In go:
let current-knowers count turtles with [knows-rumor?]
set current-spread-rate current-knowers - previous-knowers
set previous-knowers current-knowers

; Monitor reporter:
current-spread-rate
```

### Activity 2: Design Your Monitor Dashboard

Create 5-6 monitors that give you instant insight into your model's behavior:

```{admonition} Essential Monitors
:class: question

**Which statistics would be most useful for understanding:**
1. **How far has the rumor spread?**
2. **How fast is it spreading?**  
3. **What types of people are most affected?**
4. **Are there spatial patterns?**
5. **How do beliefs differ from knowledge?**

Design monitors that answer these questions.
```

---

## Advanced Data Collection with Reporters

For complex analysis, write custom reporter functions.

### Demographic Analysis

```netlogo
; Who are the believers?
to-report average-social-activity-of-believers
  let believers turtles with [believes-rumor?]
  ifelse any? believers
    [ report mean [social-activity] of believers ]
    [ report 0 ]
end

to-report average-skepticism-of-believers
  let believers turtles with [believes-rumor?]
  ifelse any? believers
    [ report mean [skepticism] of believers ]
    [ report 0 ]
end

; Who spreads rumors most?
to-report most-active-spreaders
  report turtles with [times-shared >= 3]
end

to-report count-super-spreaders
  report count most-active-spreaders
end
```

### Spatial Analysis

```netlogo
; Are rumors spreading in clusters?
to-report spatial-clustering-index
  let believers turtles with [believes-rumor?]
  if count believers < 2 [ report 0 ]
  
  let total-distance 0
  let pair-count 0
  
  ask believers [
    ask other believers [
      set total-distance total-distance + distance myself
      set pair-count pair-count + 1
    ]
  ]
  
  ; Average distance between believers
  report total-distance / pair-count
end

; How far has the rumor reached?
to-report rumor-radius
  let center-x mean [xcor] of turtles with [believes-rumor?]
  let center-y mean [ycor] of turtles with [believes-rumor?]
  
  let max-distance 0
  ask turtles with [believes-rumor?] [
    let dist sqrt ((xcor - center-x) ^ 2 + (ycor - center-y) ^ 2)
    if dist > max-distance [ set max-distance dist ]
  ]
  
  report max-distance
end
```

### Network Analysis

```netlogo
; Analyze the spread network
to-report average-transmission-chain-length
  let chain-lengths []
  
  ask turtles with [knows-rumor? and heard-from != nobody] [
    let chain-length 1
    let current-source heard-from
    
    while [current-source != nobody and [heard-from] of current-source != nobody] [
      set chain-length chain-length + 1
      set current-source [heard-from] of current-source
    ]
    
    set chain-lengths lput chain-length chain-lengths
  ]
  
  ifelse length chain-lengths > 0
    [ report mean chain-lengths ]
    [ report 0 ]
end
```

### Activity 3: Advanced Reporters

Write reporters that measure:

1. **Network properties** of rumor transmission
2. **Timing analysis** (when do rumors spread fastest?)
3. **Demographic patterns** (who believes what types of rumors?)
4. **Spatial dynamics** (how does geographic location affect spread?)

---

## Automated Experiments with BehaviorSpace

BehaviorSpace lets you run hundreds of experiments automatically and export data for analysis.

### Setting Up BehaviorSpace

**Tools** → **BehaviorSpace**

#### Experiment Setup

**Experiment Name:** "Social Activity Effects"

**Variables to vary:**
```
["social-activity-mean" [2 4 6 8]]
["initial-believers" [1 3 5 10]]
["population-size" [100 200 400]]
```

**Repetitions:** 10 (run each combination 10 times)

**Setup commands:**
```netlogo
setup
```

**Go commands:**
```netlogo
go
```

**Stop condition:**
```netlogo
ticks >= 100 or count turtles with [knows-rumor?] = count turtles
```

**Metrics to record:**
```netlogo
count turtles with [knows-rumor?]
count turtles with [believes-rumor?]
ticks
average-social-activity-of-believers
spatial-clustering-index
count-super-spreaders
```

### Activity 4: Design Your Experiment

Create a BehaviorSpace experiment to test your research question:

```{admonition} Experiment Design Checklist
:class: note

1. **Choose 2-3 key variables** to test systematically
2. **Select meaningful value ranges** (not too narrow, not too wide)
3. **Plan adequate repetitions** (at least 10 per combination)
4. **Define clear stop conditions** (when is the experiment "done"?)
5. **Select informative metrics** (what do you really want to measure?)
6. **Estimate runtime** (how long will this take?)
```

### Running and Exporting Results

1. **Click "Run"** to start the experiment
2. **Choose "Table output"** for spreadsheet analysis
3. **Export to CSV** when complete
4. **Open in Excel/R/Python** for analysis

---

## Statistical Analysis of Results

Once you have data from multiple runs, you need to analyze it properly.

### Basic Statistical Concepts

**Why Multiple Runs?**
- Agent-based models have randomness
- Single runs can be misleading
- Need averages and confidence intervals

**Key Statistics:**
- **Mean:** Average outcome across runs
- **Standard Deviation:** How much variation between runs
- **Confidence Intervals:** Range where true value likely lies
- **Statistical Significance:** Is difference real or just random?

### Analyzing BehaviorSpace Output

Your CSV file contains columns for:
- **Input variables** (what you varied)
- **Output metrics** (what you measured)  
- **Run number** (which repetition)

#### Example Analysis in Excel

**Step 1: Calculate averages by condition**
```
=AVERAGEIFS(final_believers, social_activity, 2, population, 100)
```

**Step 2: Calculate standard deviations**
```
=STDEV.S(IF((social_activity=2)*(population=100), final_believers))
```

**Step 3: Create summary tables**

| Social Activity | Population | Avg Believers | Std Dev | 95% CI |
|----------------|------------|---------------|---------|--------|
| 2              | 100        | 45.2          | 8.3     | ±5.1   |
| 4              | 100        | 67.8          | 12.1    | ±7.5   |
| 6              | 100        | 83.4          | 9.7     | ±6.0   |

### Activity 5: Analyze Your Data

Using your BehaviorSpace results:

1. **Create summary statistics** for each experimental condition
2. **Make charts** showing how outcomes change with parameters  
3. **Test hypotheses** about which factors matter most
4. **Calculate effect sizes** (how big are the differences?)

```{admonition} Analysis Questions
:class: question

**For each variable you tested:**
1. **How much does it affect outcomes?** (effect size)
2. **How confident are you in this effect?** (statistical significance)  
3. **Are there interaction effects?** (does variable A's effect depend on variable B?)
4. **What's the practical significance?** (does this matter in the real world?)
```

---

## Connecting Models to Real Data

The ultimate test of a model is how well it matches real-world patterns.

### Types of Real-World Data

**Individual-Level Data:**
- Surveys about attitudes and behaviors
- Social media posting patterns
- Location tracking data
- Behavioral experiments

**Aggregate Data:**
- Population statistics over time
- Geographic patterns
- Network structure measurements
- Historical trend data

### Model Validation Approaches

#### Pattern-Oriented Modeling

Instead of trying to match exact numbers, match patterns:

**Example: Rumor Spreading**
- **Real pattern:** "Most people hear rumors from 1-2 sources"
- **Model test:** Does your model produce similar distribution?

**Example: Social Movements**
- **Real pattern:** "Protest size follows power-law distribution"  
- **Model test:** Plot your model's protest sizes on log-log scale

#### Calibration vs. Validation

**Calibration:** Adjust model parameters to match known data
- Use historical data to set realistic parameter values
- Estimate agent properties from surveys or experiments

**Validation:** Test model predictions against new data
- Run model forward and compare to later real outcomes
- Test model on different contexts or time periods

### Activity 6: Find Real Data

For your model topic:

1. **Search for relevant real-world data**
   - Academic papers with empirical results
   - Government statistics
   - Social media datasets
   - Historical case studies

2. **Identify key patterns to match**
   - Distribution shapes (normal, power-law, etc.)
   - Time series trends
   - Geographic patterns
   - Demographic differences

3. **Compare model output to real patterns**
   - Do the shapes match?
   - Are the scales reasonable?
   - What patterns does your model miss?

```{admonition} Data Sources for Social Phenomena
:class: tip

**Academic Sources:**
- Google Scholar for empirical studies
- Social science data repositories
- Government census and survey data

**Public Data:**
- Social media APIs (Twitter, Reddit)
- Wikipedia page view statistics
- Google Trends data
- Economic indicators

**Historical Cases:**
- News archives for specific events
- Digital humanities projects
- Oral history collections
```

---

## Visualization and Presentation

Good visualizations make your results convincing and accessible.

### Types of Visualizations

**Time Series Plots:**
- Show how outcomes change over time
- Compare different scenarios on same plot
- Use error bars for confidence intervals

**Parameter Sweep Plots:**
- X-axis: Parameter value
- Y-axis: Outcome measure  
- Multiple lines for different conditions

**Distributions:**
- Histograms of final outcomes across runs
- Box plots comparing different conditions
- Scatter plots showing relationships

**Spatial Visualizations:**
- Heat maps of geographic patterns
- Network diagrams of connections
- Animation of spreading processes

### Activity 7: Create Publication-Quality Figures

Make 3-4 figures that tell the story of your model:

1. **Model behavior over time** (time series)
2. **Parameter effects** (sweep plots)
3. **Distribution comparisons** (histograms or box plots)  
4. **Spatial or network patterns** (maps or networks)

```{admonition} Visualization Best Practices
:class: note

**Clear and Informative:**
- Descriptive titles and axis labels
- Legends explaining all symbols/colors
- Error bars showing uncertainty
- Consistent color schemes

**Publication Ready:**
- High resolution (300+ DPI)
- Readable font sizes
- Black and white compatible
- Proper citation of data sources
```

---

## Reproducible Research Practices

Make your research reproducible so others can verify and build on your work.

### Code Documentation

```netlogo
; MODEL: Rumor Spreading in Social Networks
; AUTHOR: [Your Name]
; DATE: [Date]
; VERSION: 1.2
;
; PURPOSE: Investigate how individual skepticism and social activity
;          affect the spread of rumors through a population
;
; KEY PARAMETERS:
;   population-size: Number of agents (50-500)
;   initial-believers: Number who start with rumor (1-20)
;   social-activity-mean: Average social activity level (0-10)
;   skepticism-mean: Average skepticism level (0-10)
;
; MAIN OUTPUTS:
;   percent-know: Percentage who know rumor at end
;   percent-believe: Percentage who believe rumor at end
;   time-to-50-percent: Time steps to reach 50% awareness
;
; VALIDATION: Compared to Smith et al. (2020) Twitter rumor data
;            Model reproduces key patterns (see analysis.xlsx)

globals [
  ; Track spreading dynamics
  previous-knowers      ; Number who knew rumor last time step
  time-to-50-percent   ; Time when 50% first learned rumor
  
  ; Model parameters (set by sliders)
  population-size
  initial-believers
  social-activity-mean
  skepticism-mean
]
```

### Research Log

Keep a record of your modeling decisions:

```{admonition} Modeling Decision Log
:class: note

**Version 1.0** (Initial model)
- Simple random sharing with fixed probability
- All agents equally social and skeptical
- **Issue:** Unrealistic uniform spreading

**Version 1.1** (Added individual differences)
- Variable social activity affects sharing probability
- Variable skepticism affects belief probability  
- **Improvement:** More realistic heterogeneous outcomes

**Version 1.2** (Added credibility effects)
- Agent credibility affects others' belief decisions
- Credibility varies with past sharing accuracy
- **Result:** Creates realistic "super-spreader" effects

**Next:** Add social network structure (Version 2.0)
```

### Parameter Documentation

```{admonition} Parameter Justification
:class: note

**social-activity (0-10):**
- **Meaning:** How often agent shares rumors per time step
- **Calibration:** Based on Rogers (2003) diffusion of innovations
- **Validation:** Average 5.2 matches social media posting frequency

**skepticism (0-10):**
- **Meaning:** Resistance to believing new rumors
- **Calibration:** Survey data from Pennycook & Rand (2019)
- **Validation:** Distribution matches general population skepticism

**credibility (3-10):**
- **Meaning:** How much others trust this agent's information
- **Calibration:** Starts at medium-high (people generally trusted)
- **Validation:** Decreases with inaccurate sharing (realistic)
```

---

## Key Skills Mastered

```{admonition} Data Analysis Skills You've Learned
:class: tip

✓ **Real-time monitoring** with plots and monitors  
✓ **Custom data collection** with reporter functions  
✓ **Automated experimentation** using BehaviorSpace  
✓ **Statistical analysis** of simulation results  
✓ **Model validation** against real-world data  
✓ **Professional visualization** of results  
✓ **Reproducible research** practices and documentation  
✓ **Pattern-oriented modeling** for realistic insights  
```

---

## Looking Ahead

You now have the complete toolkit for professional-quality computational social science research. The final tutorial covers advanced topics and troubleshooting.

```{admonition} Coming Up: Advanced Topics and Troubleshooting
:class: note

**Final Tutorial Topics:**
- Performance optimization for large models
- Advanced NetLogo features and extensions
- Common debugging strategies
- Integration with other tools (R, Python, GIS)
- Publishing and sharing your models

You're ready to conduct research that could be published in academic journals!
```

### Immediate Next Steps

1. **Run a complete BehaviorSpace experiment** on your model
2. **Analyze the results statistically** and create professional visualizations
3. **Find real-world data** to compare with your model outcomes
4. **Document your model thoroughly** using the templates provided
5. **Prepare a research presentation** of your modeling project

You've developed sophisticated research skills that will serve you throughout your academic and professional career in social science research!
