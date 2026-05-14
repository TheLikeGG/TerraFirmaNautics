ServerEvents.recipes(event =>{
    // New recipe
    event.recipes.tfc.anvil(
        'kubejs:saw_blade',
        'tfc:metal/sheet/wrought_iron',
        [
            'bend_not_last',
            'punch_last'
        ]
    ).tier(3)

    event.recipes.tfc.anvil(
        '2x kubejs:saw_blade',
        'tfc:metal/sheet/steel',
        [
            'bend_not_last',
            'punch_last'
        ]
    ).tier(4)

    event.recipes.tfc.anvil(
        '4x kubejs:saw_blade',
        'firmalife:metal/sheet/stainless_steel',
        [
            'bend_not_last',
            'punch_last'
        ]
    ).tier(4)
})
