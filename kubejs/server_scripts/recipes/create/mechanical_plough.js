ServerEvents.recipes(event =>{
    // New recipe
    event.shaped(
        Item.of('create:mechanical_plough', 1),
        [
            ' S ',
            'RSR',
            ' C '
        ],
        {
            'R':'tfc:metal/rod/wrought_iron',
            'S':'kubejs:mechanical_alloy_sheet',
            'C':'create:andesite_casing'
        }
    )
})
