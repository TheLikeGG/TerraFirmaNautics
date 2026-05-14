ServerEvents.recipes(event => {
    const transitional = 'kubejs:unfinished_belt_connector'
    event.recipes.create.sequenced_assembly(
        // Outputs:
        [
            CreateItem.of('4x create:belt_connector', 0.95), // Main output, will appear in JEI as the result
            CreateItem.of('minecraft:string', 0.05)
        ],
        // Input:
        '#c:leathers', 
        // Sequence:
        [
            // The transitional item set by `transitionalItem('create:incomplete_large_cogwheel')` is the item used during the intermediate stages of the assembly
            // Like a normal recipe function, it's used as a sequence step in this array. Input and output have the transitional item
            event.recipes.create.deploying(transitional, [transitional, Ingredient.of('#c:tools/hammer')]).keepHeldItem(),
            event.recipes.create.pressing(transitional, transitional)
        ]
    )
    .transitionalItem(transitional)
    .loops(4)
})