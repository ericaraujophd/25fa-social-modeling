# Data Collection and Analysis

Every good model tells us something about the world. To extract meaningful insights, you need to collect and analyze data systematically.

```{note}
**Time Required:** 45 minutes  
**Prerequisites:** Building Your First Complete Model
```

## Why Data Matters in Modeling (10 min)

Models without data are just entertaining animations. To answer research questions, you need systematic measurement and analysis.

### Models Answer Questions with Evidence

**Without data:** "My segregation model seems to create clusters sometimes."
**With data:** "When tolerance is below 30%, segregation emerges in 95% of runs within 200 time steps."

**Without data:** "Cooperation appears to work in this model."
**With data:** "Cooperation is stable when the population is smaller than 50 agents, but collapses above 75 agents."

### What Makes Good Model Data?

**Systematic measurement:**

- Track the same variables consistently
- Measure at regular intervals
- Run multiple times to account for randomness
- Test different parameter values systematically

**Meaningful variables:**

- **Outcome measures:** What you're trying to explain (segregation level, cooperation rate, infection spread)
- **Input parameters:** What you're varying (tolerance levels, payoff values, transmission rates)
- **Process indicators:** How things change over time (movement patterns, network formation, learning rates)

### Activity: Identifying Key Variables

```{admonition} Think About Your Models
:class: question

For a model you've seen or built:

1. **What is the main research question?**
2. **What outcome would answer that question?**
3. **How could you measure that outcome numerically?**
4. **What inputs might affect that outcome?**
5. **What intermediate processes might be important to track?**

**Example - Segregation Model:**
- Research question: How do individual preferences create residential segregation?
- Outcome: Percentage of agents living near similar neighbors
- Measurement: Count neighbors of same type / total neighbors
- Inputs: Tolerance threshold, population size, neighborhood size
- Processes: Movement rate, satisfaction levels over time
```

---

## Using NetLogo's Built-in Analysis Tools (20 min)

NetLogo provides powerful tools for data collection without programming complex analysis routines.

### Monitors: Real-Time Data Tracking

**Monitors show live values** as your model runs:

```netlogo
; In interface, create monitor that shows:
count turtles with [carrying-food?]
; Label it: "Ants with Food"

mean [pheromone] of patches with [pheromone > 0]
; Label it: "Average Pheromone"

ticks
; Label it: "Time Steps"
```

**Strategic monitor placement:**

- **Outcome variables:** Your main research question measures
- **Sanity checks:** Total population, conservation laws
- **Process indicators:** Rates of change, intermediate states

### Plots: Visualizing Change Over Time

**Plots track multiple variables** and show patterns:

**Basic setup in Interface tab:**
1. Click "Plot" button to create new plot
2. Name it (e.g., "Population Dynamics")
3. Set X and Y axis labels and ranges
4. Add "pens" for different variables

**Code to update plots:**
```netlogo
to update-plots
  ; This automatically runs every tick
  
  ; Plot 1: Population by type
  set-current-plot "Population Dynamics"
  set-current-plot-pen "Cooperators"
  plot count turtles with [strategy = "cooperate"]
  
  set-current-plot-pen "Defectors"  
  plot count turtles with [strategy = "defect"]
  
  ; Plot 2: Average satisfaction
  set-current-plot "Satisfaction Levels"
  set-current-plot-pen "satisfaction"
  plot mean [satisfaction] of turtles
end
```

### Histograms: Understanding Distributions

**See how values are distributed** across your population:

```netlogo
; In interface, create histogram
; Set pen update to:
histogram [age] of turtles

; Or show distribution of some other property:
histogram [count link-neighbors] of turtles  ; Network degree
histogram [money] of turtles                  ; Wealth distribution
histogram [satisfaction] of turtles           ; Satisfaction levels
```

### Activity: Build Analysis Dashboard

**Create a complete monitoring system:**

1. **Add 3-4 monitors** tracking key variables in your model
2. **Create 2 plots** showing how important things change over time  
3. **Add 1 histogram** showing distribution of agent properties
4. **Run your model and observe** what patterns emerge

```{admonition} Dashboard Design Tips
:class: tip

**Choose variables that answer your research question:**
- If studying segregation: track segregation index over time
- If studying cooperation: plot cooperation rates and payoffs
- If studying diffusion: monitor adoption rates and network effects

**Use meaningful scales:**
- Percentages (0-100) for rates and proportions
- Natural units (dollars, years, people) for quantities  
- Standardized scales (-1 to 1) for comparing different variables

**Update regularly but not obsessively:**
- Every tick for fast-changing variables
- Every 10-50 ticks for slow-changing variables
- At the end only for final outcome measures
```

### BehaviorSpace: Systematic Experiments

**BehaviorSpace runs multiple experiments automatically** with different parameter combinations.

**Setting up experiments:**
1. Tools menu → BehaviorSpace
2. Click "New" to create experiment
3. Vary parameters systematically:

```
["tolerance" [0.1 0.2 0.3 0.4 0.5]]
["population-size" [100 200 500]]
```

4. Set number of repetitions (e.g., 10 runs per combination)
5. Choose which variables to measure:

```
count turtles with [color = red]
segregation-index
mean [satisfaction] of turtles
```

6. Run experiment (can take a while!)

**BehaviorSpace generates spreadsheet** with all results for further analysis.

---

## Exporting Data for External Analysis (15 min)

Sometimes you need more sophisticated analysis than NetLogo provides. Exporting data lets you use Excel, R, Python, or other tools.

### File Output Commands

**Write data to CSV files** that other programs can read:

```netlogo
; Open file for writing (do this in setup)
file-open "model-output.csv"
file-print "tick,cooperators,defectors,mean-payoff"
file-close

; Write data each tick (do this in go procedure)
file-open "model-output.csv"
file-print (word ticks "," 
                 count turtles with [strategy = "cooperate"] ","
                 count turtles with [strategy = "defect"] ","
                 mean [payoff] of turtles)
file-close
```

**Better approach using procedures:**

```netlogo
to setup
  ; ... other setup code ...
  setup-output-file
end

to setup-output-file
  ; Delete old file and create new one with headers
  if file-exists? "results.csv" [ file-delete "results.csv" ]
  file-open "results.csv"
  file-print "tick,cooperation_rate,mean_payoff,clustering"
  file-close
end

to record-data
  file-open "results.csv"
  let coop-rate count turtles with [strategy = "cooperate"] / count turtles
  let avg-payoff mean [payoff] of turtles
  let clustering-measure calculate-clustering  ; Your custom measure
  
  file-print (word ticks "," coop-rate "," avg-payoff "," clustering-measure)
  file-close
end

to go
  ; ... model update code ...
  record-data  ; Call this every tick or every N ticks
  tick
end
```

### Network Analysis Output

**Export network structure** for analysis in specialized tools:

```netlogo
to export-network
  ; Export edge list
  file-open "network-edges.csv"
  file-print "source,target,weight"
  ask links [
    file-print (word [who] of end1 "," [who] of end2 "," link-weight)
  ]
  file-close
  
  ; Export node attributes
  file-open "network-nodes.csv"
  file-print "id,strategy,payoff,degree"
  ask turtles [
    file-print (word who "," strategy "," payoff "," count link-neighbors)
  ]
  file-close
end
```

### Spatial Data Output

**Export spatial patterns** for GIS or mapping analysis:

```netlogo
to export-spatial-data
  file-open "spatial-data.csv"
  file-print "x,y,population,wealth,satisfaction"
  ask patches [
    if count turtles-here > 0 [
      file-print (word pxcor "," pycor "," 
                       count turtles-here ","
                       mean [wealth] of turtles-here ","
                       mean [satisfaction] of turtles-here)
    ]
  ]
  file-close
end
```

### Activity: Data Export Practice

**Choose one type of data export and implement it:**

1. **Time series:** Track 3-4 key variables over time
2. **Network data:** Export agent connections and attributes  
3. **Spatial data:** Export location-based information
4. **Test your export** by running model and checking output file

```{admonition} Data Export Best Practices
:class: tip

**Use standard formats:**
- CSV for most data (Excel, R, Python can all read it)
- JSON for complex nested data
- GML or GraphML for networks

**Include metadata:**
- Parameter values used
- Date and time of run
- Model version
- Random seed (for reproducibility)

**Organize output files:**
- Create separate folder for data
- Use meaningful filenames (model-name_date_parameters.csv)
- Include documentation explaining what each column means

**Test with small runs first:**
- Make sure data looks reasonable
- Check that files open correctly in other programs
- Verify calculations are correct
```

### Reproducible Research

**Document your analysis process:**

1. **Save parameter settings** used for each analysis
2. **Record random seeds** so others can reproduce exact results
3. **Document data processing steps** from model output to final conclusions
4. **Share both model files and analysis scripts**

---

## Learning Objectives Achieved

By completing this tutorial, you can now:

✓ **Use monitors, plots, and histograms for real-time analysis**  
✓ **Design systematic experiments with BehaviorSpace**  
✓ **Export data for external analysis tools**  
✓ **Create reproducible research workflows**

---

## What's Next?

You now have the tools to extract meaningful insights from your models! Our final tutorial covers advanced techniques and troubleshooting to help you become a confident modeler.

```{admonition} Coming Up: Advanced Topics and Troubleshooting
:class: note

- Common problems and solutions
- Extending models with new features
- Performance optimization
- Where to go next in your modeling journey

**Activities preview:**
- Debug Challenge: Fix broken models
- Extension Workshop: Add complexity to existing models
```

**Well done!** You can now build models that provide real insights about social phenomena. This analytical capability is what separates serious modelers from casual users.
