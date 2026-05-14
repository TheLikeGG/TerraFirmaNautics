ServerEvents.recipes(event =>{
    // New recipe
    event.recipes.create.mechanical_crafting(
        Item.of('create:schematicannon', 1),
        [
            ' P ',
            'CPC',
            'LPL',
            'BDB',
            'BMB'
        ],
        {
            'P':'tfc:steel_pipe',
            'L':'#tfc:log_pile_logs',
            'B':'#minecraft:stone_bricks',
            'D':'minecraft:dispenser',
            'M':'create:precision_mechanism',
            'C':'create:cogwheel'
        }
    )
})
