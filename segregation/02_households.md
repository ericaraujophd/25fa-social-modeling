# 2. Update Households

We turn now to the aesthetic aspects of the model. Using arrowheads makes it hard to see the state of the agents (if they are happy or not). We can think of many ways to represent the state of the agents. Let's remember that the color represent the households opinions/ideas/ideologies (red or blue). We can use the shape of the agents to represent their happiness. For example, we can use circles for happy agents and squares for unhappy agents. This way, we can easily see the state of the agents in the model.

For this model, we will use an x for the unhappy agents and a square for the happy agents. That is for the sake of visualization. You can use any shape you want. The important thing is to be consistent and to use shapes that are easy to distinguish.

As the agents will be moving around the environment and changing their state, we will need to update their shape accordingly. We can do this by creating a new procedure called `update-households`. This procedure will be called any time we need to change the shape of the agents.

```ruby
to update-households
  ask households [
    if happy? [
      set shape "square" ; set shape to square if happy
    ] [
      set shape "x" ; set shape to x if unhappy
    ]
  ]
end
```

Now we need to call this procedure in the `setup` procedure, so that the agents are updated when the model is initialized. We also need to call this procedure in the `go` procedure, so that the agents are updated every time they move. But we didn't build the `go` procedure yet. We will do that in the next section.

Here is the updated `setup` procedure with the call to `update-households`:

```ruby
to setup
    clear-all ; clear the environment
    ask patches [ 
        set pcolor white ; set all patches to white
        if random-float 100 < density [
        sprout-households 1 [ ; create a household with a probability defined by density
            set color one-of [red blue] ; randomly assign red or blue color
            set size 1 ; set the size of the household
        ]
        ]
    ]
    update-households ; update the shape of the households based on their happiness
    reset-ticks ; reset the tick counter
end
```

