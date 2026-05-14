ServerEvents.recipes(event =>{
    // New recipe
    event.shapeless(
        Item.of('create:track_observer', 2),
        [
            'create:railway_casing',
            '#c:stones/pressure_plate'
        ]
    )
})
