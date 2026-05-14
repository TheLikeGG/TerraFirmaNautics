ServerEvents.recipes(event =>{
    // New recipe
    event.shaped(
        Item.of('create:smart_chute', 1),
        [
            'S',
            'C',
            'E'
        ],
        {
            'S':'tfc:metal/sheet/brass',
            'C':'create:chute',
            'E':'create:electron_tube'
        }
    )
})
