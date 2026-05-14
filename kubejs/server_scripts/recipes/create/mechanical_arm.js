ServerEvents.recipes(event =>{
    // New recipe
    event.shaped(
        Item.of('create:mechanical_arm', 1),
        [
            'MSA',
            'S  ',
            'PC '
        ],
        {
            'S':'tfc:metal/sheet/brass',
            'A':'kubejs:mechanical_alloy_double_sheet',
            'P':'create:precision_mechanism',
            'C':'create:brass_casing',
            'M':'tfc:brass_mechanisms'
        }
    )
})
