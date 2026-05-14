ServerEvents.recipes(event =>{
    // New recipe
    event.shaped(
        Item.of('create:mechanical_saw', 1),
        [
            'S',
            'C'
        ],
        {
            'S':'kubejs:saw_blade',
            'C':'create:andesite_casing'
        }
    )
})
