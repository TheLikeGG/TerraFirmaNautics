ServerEvents.recipes(event =>{
    event.shaped(
        Item.of('create:millstone', 1),
        [
            'L L',
            'AHA',
            'SQS'
        ],
        {
            'L':'#tfc:lumber',
            'A':'tfc:metal/ingot/cast_iron',
            'H':'tfc:handstone',
            'S':'#c:stones/raw',
            'Q':'tfc:quern'
        }
    )
})