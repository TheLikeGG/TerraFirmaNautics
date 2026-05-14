ServerEvents.recipes(event =>{
    // New recipe
    event.shaped(
        Item.of('create:packager', 1),
        [
            'R R',
            'RBR',
            'DCD'
        ],
        {
            'R':'kubejs:mechanical_alloy_rod',
            'B':'create:cardboard_block',
            'D':'minecraft:redstone',
            'C':'create:andesite_casing'
        }
    )
})
