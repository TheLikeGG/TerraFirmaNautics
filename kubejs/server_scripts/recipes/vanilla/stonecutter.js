ServerEvents.recipes(event =>{
    // New recipe
    event.shaped(
        Item.of('minecraft:stonecutter', 1),
        [
            ' W ',
            'SSS'
        ],
        {
            'W':'kubejs:saw_blade',
            'S':'#c:stones/smooth'
        }
    )
})
