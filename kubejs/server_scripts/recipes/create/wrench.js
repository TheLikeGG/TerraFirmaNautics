ServerEvents.recipes(event =>{
    // New recipe
    event.shaped(
        Item.of('create:wrench', 1),
        [
            'SS',
            'SC',
            ' R'
        ],
        {
            'S':'tfc:metal/sheet/gold',
            'C':'create:cogwheel',
            'R':'tfc:metal/rod/cast_iron'
        }
    )
})
