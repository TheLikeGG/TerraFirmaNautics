ServerEvents.recipes(event => {
    event.recipes.tfc.anvil(
        Item.of('simulated:copper_handle', 1),
        'tfc:metal/rod/copper',
        [
            'bend_last',
            'draw_second_last',
            'bend_third_last'
        ]
    )
})