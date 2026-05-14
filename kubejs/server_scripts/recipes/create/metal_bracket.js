ServerEvents.recipes(event =>{
    // New recipe
    event.recipes.tfc.anvil(
        '4x create:metal_bracket',
        'tfc:metal/double_ingot/cast_iron',
        [
            'draw_not_last'
        ]
    )

    event.recipes.tfc.anvil(
        '8x create:metal_bracket',
        'tfc:metal/double_ingot/steel',
        [
            'draw_not_last'
        ]
    )
})
