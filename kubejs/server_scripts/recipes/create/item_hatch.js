ServerEvents.recipes(event =>{
    // New recipe
    event.shapeless(
        Item.of('create:item_hatch', 1),
        [
            'create:andesite_alloy',
            '#tfn:metal_trapdoors'
        ]
    )
})
