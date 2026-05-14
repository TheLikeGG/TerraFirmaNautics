ServerEvents.recipes(event =>{
    // New recipe
    event.shaped(
        Item.of('create:redstone_contact', 2),
        [
            ' S ',
            'CRC',
            'CCC'
        ],
        {
            'S':'tfc:metal/sheet/wrought_iron',
            'C':'#c:cobblestones',
            'R':'minecraft:redstone'
        }
    )
})
