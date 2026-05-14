ServerEvents.recipes(event =>{
    event.recipes.tfc.anvil(
        '3x create:chute',
        'tfc:metal/sheet/cast_iron',
        [
            'hit_last',
            'bend_second_last',
            'bend_third_last'
        ]
    ).tier(3)

    event.recipes.tfc.anvil(
        '6x create:chute',
        'tfc:metal/sheet/steel',
        [
            'hit_last',
            'bend_second_last',
            'bend_third_last'
        ]
    ).tier(4)
})