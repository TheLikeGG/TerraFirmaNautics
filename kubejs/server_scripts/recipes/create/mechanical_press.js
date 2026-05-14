ServerEvents.recipes(event =>{
    event.shaped(
        Item.of('create:mechanical_press', 1),
        [
            'S',
            'C',
            'I'
        ],
        {
            'S':'create:shaft',
            'C':'create:andesite_casing',
            'I':'tfc:metal/double_sheet/cast_iron'
        }
    )
})