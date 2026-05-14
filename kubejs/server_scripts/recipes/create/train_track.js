ServerEvents.recipes(event => {
    const transitional = 'create:incomplete_track'
    event.recipes.create.sequenced_assembly(
        // Outputs:
        [
            CreateItem.of('create:track', 0.7), // Main output, will appear in JEI as the result
            CreateItem.of('tfc:metal/rod/cast_iron', 0.15),
            CreateItem.of('2x tfc:metal/rod/cast_iron', 0.05)
        ],
        // Input:
        '#c:stones/smooth_slabs', 
        // Sequence:
        [
            // The transitional item set by `transitionalItem('create:incomplete_large_cogwheel')` is the item used during the intermediate stages of the assembly
            // Like a normal recipe function, it's used as a sequence step in this array. Input and output have the transitional item
            event.recipes.create.deploying(transitional, [transitional, 'tfc:metal/rod/cast_iron']),
            event.recipes.create.deploying(transitional, [transitional, Ingredient.of('#c:tools/hammer')]).keepHeldItem(),
            event.recipes.create.pressing(transitional, transitional)
        ]
    )
    .transitionalItem(transitional)
    .loops(4)

    event.recipes.create.sequenced_assembly(
        [
            CreateItem.of('create:track', 0.95),
            CreateItem.of('tfc:metal/rod/steel', 0.04),
            CreateItem.of('2x tfc:metal/rod/steel', 0.01)
        ],
        '#c:stones/smooth_slabs',
        [
            event.recipes.create.deploying(transitional, [transitional, 'tfc:metal/rod/steel']),
            event.recipes.create.deploying(transitional, [transitional, Ingredient.of('#c:tools/hammer')]).keepHeldItem(),
            event.recipes.create.pressing(transitional, transitional)
        ]
    )
    .transitionalItem(transitional)
    .loops(3)
    
    event.recipes.create.sequenced_assembly(
        [
            CreateItem.of('create:track', 0.99),
            CreateItem.of('firmalife:metal/rod/stainless_steel', 0.009),
            CreateItem.of('2x firmalife:metal/rod/stainless_steel', 0.001)
        ],
        '#c:stones/smooth_slabs',
        [
            event.recipes.create.deploying(transitional, [transitional, 'firmalife:metal/rod/stainless_steel']),
            event.recipes.create.deploying(transitional, [transitional, Ingredient.of('#c:tools/hammer')]).keepHeldItem(),
            event.recipes.create.pressing(transitional, transitional)
        ]
    )
    .transitionalItem(transitional)
    .loops(2)
})