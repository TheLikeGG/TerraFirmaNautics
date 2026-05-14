ServerEvents.recipes(event =>{
    // New recipe
    event.recipes.tfc.anvil(
        Item.of('create:whisk', 1),
        'tfc:metal/rod/wrought_iron',
        [
            'bend_second_last',
            'upset_not_last'
        ]
    )
    event.recipes.tfc.anvil(
        Item.of('create:whisk', 2),
        'tfc:metal/rod/steel',
        [
            'bend_second_last',
            'upset_not_last'
        ]
    )
})
