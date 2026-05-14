ServerEvents.recipes(event =>{
    // New recipe
    event.shaped(
        Item.of('create:nozzle', 2),
        [
            'ACA',
            'C C',
            'ACA'
        ],
        {
            'A':'kubejs:mechanical_alloy_rod',
            'C':'#tfn:any_cloth'
        }
    )
})
