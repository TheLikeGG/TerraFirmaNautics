ServerEvents.recipes(event =>{
    // New recipe
    event.recipes.tfc.anvil(
        Item.of('create:propeller', 1),
        'tfc:metal/sheet/wrought_iron',
        [
            'bend_not_last',
            'hit_last'
        ]
    )
    event.recipes.tfc.anvil(
        Item.of('create:propeller', 2),
        'tfc:metal/sheet/steel',
        [
            'bend_not_last',
            'hit_last'
        ]
    )
})
