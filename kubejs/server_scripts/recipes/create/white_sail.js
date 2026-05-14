ServerEvents.recipes(event =>{
    // New recipe
    event.shaped(
        Item.of('create:white_sail', 1),
        [
            'CS',
            'SR'
        ],
        {
            'C':'#tfn:any_cloth',
            'S':'#c:rods/wooden',
            'R':'tfc:metal/rod/cast_iron'
        }
    )

    event.shaped(
        Item.of('create:white_sail', 4),
        [
            'WS',
            'SR'
        ],
        {
            'W':'#minecraft:wool',
            'S':'#c:rods/wooden',
            'R':'kubejs:mechanical_alloy_rod'
        }
    )
})
