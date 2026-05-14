ServerEvents.recipes(event =>{
    // New recipe
    event.shaped(
        Item.of('create:smart_fluid_pipe', 1),
        [
            'S',
            'P',
            'E'
        ],
        {
            'S':'tfc:metal/sheet/brass',
            'P':'create:fluid_pipe',
            'E':'create:electron_tube'
        }
    )
})
