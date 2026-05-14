ServerEvents.recipes(event =>{
    // New recipe
    event.shaped(
        Item.of('create:copper_backtank', 1),
        [
            'RFR',
            'STS',
            ' R '
        ],
        {
            'R':'tfc:metal/rod/copper',
            'F':'create:shaft',
            'S':'tfc:metal/sheet/copper',
            'T':'create:fluid_tank'
        }
    )
})
