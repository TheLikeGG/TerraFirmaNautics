ServerEvents.recipes(event =>{
    // New recipe
    event.shaped(
        Item.of('create:spout', 1),
        [
            'T',
            'V'
        ],
        {
            'T':'create:fluid_tank',
            'V':'create:fluid_valve'
        }
    )
})
