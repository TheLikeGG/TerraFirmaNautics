ServerEvents.recipes(event =>{
    // New recipes
    event.shaped(
        Item.of('create:hand_crank', 1),
        [
            'LLL',
            'R  '
        ],
        {
            'L':'#tfc:lumber',
            'R':'tfc:metal/rod/cast_iron'
        }
    )
    event.shaped(
        Item.of('create:hand_crank', 1),
        [
            'LLL',
            '  R'
        ],
        {
            'L':'#tfc:lumber',
            'R':'tfc:metal/rod/cast_iron'
        }
    )
})
