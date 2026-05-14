ServerEvents.recipes(event =>{
    event.shaped(
        Item.of('offroad:small_tire', 1),
        [
            'SB',
            'B '
        ],
        {
            'S':'create:shaft',
            'B':'create:belt_connector'
        }
    )
    event.shaped(
        Item.of('offroad:tire', 1),
        [
            ' B ',
            'BSB',
            ' B '
        ],
        {
            'S':'create:shaft',
            'B':'create:belt_connector'
        }
    )
    event.recipes.create.mechanical_crafting(
        Item.of('offroad:large_tire', 1),
        [
            ' BBB ',
            'B R B',
            'BRSRB',
            'B R B',
            ' BBB '
        ],
        {
            'S':'create:shaft',
            'B':'create:belt_connector',
            'R':'tfc:metal/rod/wrought_iron'
        }
    )
    event.recipes.create.mechanical_crafting(
        Item.of('offroad:monstrous_tire', 1),
        [
            '  BBB  ',
            ' B R B ',
            'B  R  B',
            'BRRSRRB',
            'B  R  B',
            ' B R B ',
            '  BBB  '
        ],
        {
            'S':'create:shaft',
            'B':'create:belt_connector',
            'R':'tfc:metal/rod/steel'
        }
    )
})
