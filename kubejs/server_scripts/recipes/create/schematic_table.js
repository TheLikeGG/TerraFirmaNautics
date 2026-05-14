ServerEvents.recipes(event =>{
    // New recipe
    event.shaped(
        Item.of('create:schematic_table', 1),
        [
            'WWW',
            ' S ',
            ' S '
        ],
        {
            'S':'#c:stones/raw',
            'W':'#minecraft:wooden_slabs'
        }
    )
})
