ServerEvents.recipes(event =>{
    // New recipe
    event.shaped(
        Item.of('create:item_drain', 1),
        [
            'B',
            'C'
        ],
        {
            'B':'#tfn:metal_bars',
            'C':'create:copper_casing'
        }
    )
})
