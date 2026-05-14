ServerEvents.recipes(event =>{
    // New recipes
    event.shaped(
        Item.of('create:empty_blaze_burner', 1),
        [
            'C C',
            'RWR',
            'RSR'
        ],
        {
            'C':'tfc:metal/chain/steel',
            'W':'minecraft:red_wool',
            'S':'tfc:metal/sheet/steel',
            'R':'tfc:metal/rod/steel'
        }
    )

    event.shapeless(
        Item.of('create:blaze_burner', 1),
        [
            'kubejs:portable_blaze',
            'create:empty_blaze_burner'
        ]
    )
})
