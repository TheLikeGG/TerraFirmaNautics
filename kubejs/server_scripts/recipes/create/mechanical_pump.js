ServerEvents.recipes(event =>{
    // New recipe
    event.shaped(
        Item.of('create:mechanical_pump', 1),
        [
            'CPM',
            'SPS'
        ],
        {
            'C':'create:cogwheel',
            'P':'create:fluid_pipe',
            'M':'create:precision_mechanism',
            'S':'tfc:metal/ingot/steel',
        }
    )
})
