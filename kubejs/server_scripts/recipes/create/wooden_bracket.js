ServerEvents.recipes(event =>{
    // New recipe
    event.shaped(
        Item.of('create:wooden_bracket', 4),
        [
            'SSS',
            'LLL'
        ],
        {
            'S':'#c:rods/wooden',
            'L':'#tfc:lumber'
        }
    )
})
