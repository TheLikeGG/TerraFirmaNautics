ServerEvents.recipes(event =>{
    // New recipe
    event.shapeless(
        Item.of('create:fluid_valve', 1),
        [
            'create:fluid_pipe',
            'tfc:metal/sheet/cast_iron',
        ]
    )
})
