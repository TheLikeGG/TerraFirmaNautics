ServerEvents.recipes(event =>{
    // New recipe
    event.shaped(
        Item.of('create:steam_whistle', 1),
        [
            'S',
            'P'
        ],
        {
            'S':'tfc:metal/sheet/gold',
            'P':'create:fluid_pipe'
        }
    )
})
