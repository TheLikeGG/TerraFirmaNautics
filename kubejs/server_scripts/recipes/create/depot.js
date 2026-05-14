ServerEvents.recipes(event =>{
    // New recipe
    event.shaped(
        Item.of('create:depot', 2),
        [
            'S',
            'C'
        ],
        {
            'S':'tfc:metal/sheet/cast_iron',
            'C':'create:andesite_casing'
        }
    )

    event.shaped(
        Item.of('create:depot', 4),
        [
            'S',
            'C'
        ],
        {
            'S':'tfc:metal/sheet/steel',
            'C':'create:andesite_casing'
        }
    )
})
