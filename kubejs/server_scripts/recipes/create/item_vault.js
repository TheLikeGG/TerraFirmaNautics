ServerEvents.recipes(event =>{
    // New recipe
    event.shaped(
        Item.of('create:item_vault', 2),
        [
            'RSR',
            'S S',
            'RSR'
        ],
        {
            'R':'tfc:metal/rod/wrought_iron',
            'S':'tfc:metal/sheet/wrought_iron'
        }
    )
    event.shaped(
        Item.of('create:item_vault', 4),
        [
            'RSR',
            'S S',
            'RSR'
        ],
        {
            'R':'tfc:metal/rod/steel',
            'S':'tfc:metal/sheet/steel'
        }
    )
})
