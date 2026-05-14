ServerEvents.recipes(event =>{
    // New recipe
    event.shaped(
        Item.of('create:redstone_requester', 1),
        [
            'R',
            'L',
            'V'
        ],
        {
            'R':'minecraft:redstone',
            'L':'create:stock_link',
            'V':'create:item_vault'
        }
    )
})
