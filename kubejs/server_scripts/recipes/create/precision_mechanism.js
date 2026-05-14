ServerEvents.recipes(event => {
    const transitional = 'create:incomplete_precision_mechanism'
    event.recipes.create.sequenced_assembly(
        // Outputs:
        [
            CreateItem.of('create:precision_mechanism', 0.8), // Main output, will appear in JEI as the result
            CreateItem.of('tfc:metal/sheet/gold', 0.05),
            CreateItem.of('create:cogwheel', 0.05),
            CreateItem.of('create:large_cogwheel', 0.05),
            CreateItem.of('tfc:brass_mechanisms', 0.025),
            CreateItem.of('kubejs:mechanical_alloy_rod', 0.025)
        ],
        // Input:
        'tfc:metal/sheet/gold', 
        // Sequence:
        [
            // The transitional item set by `transitionalItem('create:incomplete_large_cogwheel')` is the item used during the intermediate stages of the assembly
            // Like a normal recipe function, it's used as a sequence step in this array. Input and output have the transitional item
            event.recipes.create.deploying(transitional, [transitional, 'create:cogwheel']),
            event.recipes.create.deploying(transitional, [transitional, 'create:large_cogwheel']),
            event.recipes.create.deploying(transitional, [transitional, 'tfc:brass_mechanisms']),
            event.recipes.create.deploying(transitional, [transitional, 'kubejs:mechanical_alloy_rod'])
        ]
    )
    .transitionalItem(transitional)
    .loops(4)
})