ServerEvents.recipes(event =>{
    event.shaped(
        Item.of('aeronautics:steam_vent', 1),
        [
            'W',
            'M'
        ],
        {
            'W':'create:steam_whistle',
            'M':'create:precision_mechanism'
        }
    )
})