ServerEvents.recipes(event =>{
    // New recipe
    event.recipes.tfc.anvil(
        Item.of('create:brass_hand', 1),
        'tfc:metal/ingot/brass',
        [
            'draw_second_last',
            'bend_third_last'
        ]
    )
})
