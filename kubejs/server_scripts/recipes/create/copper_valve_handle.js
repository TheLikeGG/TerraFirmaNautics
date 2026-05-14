ServerEvents.recipes(event =>{
    // New recipe
    event.shaped(
        Item.of('create:copper_valve_handle', 1),
        [
            'RGR',
            ' I '
        ],
        {
            'R':'tfc:metal/rod/copper',
            'G':'tfc:glue',
            'I':'tfc:metal/ingot/copper'
        }
    )
})
