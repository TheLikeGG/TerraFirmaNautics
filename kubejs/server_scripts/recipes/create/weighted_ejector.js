ServerEvents.recipes(event =>{
    // New recipe
    event.shaped(
        Item.of('create:weighted_ejector', 1),
        [
            'SW',
            'PC'
        ],
        {
            'S':'tfc:metal/sheet/cast_iron',
            'P':'simulated:spring',
            'C':'create:andesite_casing',
            'W':'create:cogwheel'
        }
    )

    event.shaped(
        Item.of('create:weighted_ejector', 2),
        [
            'SW',
            'PC'
        ],
        {
            'S':'tfc:metal/sheet/steel',
            'P':'simulated:spring',
            'C':'create:andesite_casing',
            'W':'create:cogwheel'
        }
    )
})
