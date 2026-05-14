ServerEvents.recipes(event =>{
    // New recipe
    event.shaped(
        Item.of('create:package_frogport', 1),
        [
            'F',
            'V',
            'S'
        ],
        {
            'F':'tfc:food/frog_legs',
            'V':'create:item_vault',
            'S':'kubejs:mechanical_alloy_sheet'
        }
    )
})
