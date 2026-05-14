ServerEvents.recipes(event =>{
    event.recipes.tfc.anvil(
        '4x simulated:spring',
        'tfc:metal/rod/wrought_iron',
        [
            'bend_last',
            'bend_second_last',
            'draw_third_last'
        ]
    )
    event.recipes.tfc.anvil(
        '8x simulated:spring',
        'tfc:metal/rod/steel',
        [
            'bend_last',
            'bend_second_last',
            'draw_third_last'
        ]
    )
    event.recipes.tfc.anvil(
        '16x simulated:spring',
        'firmalife:metal/rod/stainless_steel',
        [
            'bend_last',
            'bend_second_last',
            'draw_third_last'
        ]
    )
})
