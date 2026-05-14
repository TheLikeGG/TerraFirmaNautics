ServerEvents.recipes(event =>{
    event.recipes.tfc.anvil(
        '4x create:metal_girder',
        'tfc:metal/double_ingot/cast_iron',
        [
            'hit_last',
            'hit_second_last',
            'upset_third_last'
        ]
    )
})
