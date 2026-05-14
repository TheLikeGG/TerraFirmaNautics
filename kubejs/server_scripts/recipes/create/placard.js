ServerEvents.recipes(event =>{
    // New recipe
    event.shapeless(
        Item.of('create:placard', 2),
        [
            'minecraft:item_frame',
            'tfc:metal/sheet/brass'
        ]
    )
})
