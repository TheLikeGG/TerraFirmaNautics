ServerEvents.recipes(event =>{
    // New recipe
    event.shaped(
        Item.of('create:sticker', 1),
        [
            'AGA',
            'CRC'
        ],
        {
            'A':'kubejs:mechanical_alloy_rod',
            'G':'tfc:glue',
            'C':'#c:cobblestones',
            'R':'minecraft:redstone'
        }
    )
})
