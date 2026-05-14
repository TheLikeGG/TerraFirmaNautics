ServerEvents.recipes(event =>{
    // New recipe
    event.shaped(
        Item.of('create:rope_pulley', 1),
        [
            'RCR',
            'RRR',
            ' S '
        ],
        {
            'R':'simulated:rope_coupling',
            'C':'create:andesite_casing',
            'S':'tfc:metal/sheet/wrought_iron'
        }
    )
})
