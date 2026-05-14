ServerEvents.recipes(event =>{
    // New recipe
    event.shaped(
        Item.of('create:mechanical_harvester', 1),
        [
            'ASA',
            'ASA',
            ' C '
        ],
        {
            'A':'kubejs:mechanical_alloy_rod',
            'S':'tfc:metal/sheet/wrought_iron',
            'C':'create:andesite_casing'
        }
    )
})
