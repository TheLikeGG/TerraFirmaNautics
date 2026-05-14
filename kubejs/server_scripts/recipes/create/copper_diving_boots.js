ServerEvents.recipes(event =>{
    // New recipe
    event.recipes.tfc.welding(
        Item.of('create:copper_diving_boots', 1),
        'tfc:metal/boots/copper',
        'kubejs:mechanical_alloy_double_sheet'
    )
})
