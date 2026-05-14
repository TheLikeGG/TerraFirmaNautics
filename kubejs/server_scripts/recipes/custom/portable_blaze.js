ServerEvents.recipes(event => {
    const transitional_ipb = 'kubejs:unfinished_incomplete_portable_blaze'
    event.recipes.create.sequenced_assembly(
        // Outputs:
        [
            CreateItem.of('kubejs:incomplete_portable_blaze', 1) // Main output, will appear in JEI as the result
        ],
        // Input:
        'tfc:metal/double_sheet/rose_gold', 
        // Sequence:
        [
            // The transitional item set by `transitionalItem('create:incomplete_large_cogwheel')` is the item used during the intermediate stages of the assembly
            // Like a normal recipe function, it's used as a sequence step in this array. Input and output have the transitional item
            event.recipes.create.deploying(transitional_ipb, [transitional_ipb, 'createaddition:electrum_ingot']),
            event.recipes.create.deploying(transitional_ipb, [transitional_ipb, 'tfc:powder/kaolinite']),
            event.recipes.create.deploying(transitional_ipb, [transitional_ipb, Ingredient.of('#tfc:gem_powders')]),
            event.recipes.create.deploying(transitional_ipb, [transitional_ipb, 'create:electron_tube']),
            event.recipes.create.pressing(transitional_ipb, transitional_ipb)
        ]
    )
    .transitionalItem(transitional_ipb)
    .loops(4)

    const transitional_pb = 'kubejs:incomplete_portable_blaze'
    event.recipes.create.sequenced_assembly(
        // Outputs:
        [
            CreateItem.of('kubejs:portable_blaze', 1) // Main output, will appear in JEI as the result
        ],
        // Input:
        'kubejs:incomplete_portable_blaze', 
        // Sequence:
        [
            // The transitional item set by `transitionalItem('create:incomplete_large_cogwheel')` is the item used during the intermediate stages of the assembly
            // Like a normal recipe function, it's used as a sequence step in this array. Input and output have the transitional item
            event.recipes.create.filling(transitional_pb, [transitional_pb, Fluid.of('minecraft:lava', 1000)]),
            event.recipes.create.pressing(transitional_pb, transitional_pb)
        ]
    )
    .transitionalItem(transitional_pb)
    .loops(10)
})