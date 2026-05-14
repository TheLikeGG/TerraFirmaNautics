ServerEvents.recipes(event =>{
    // New recipe
    event.shaped(
        Item.of('create:transmitter', 1),
        [
            'ART',
            'SCS'
        ],
        {
            'C':'createaddition:copper_spool',
            'R':'minecraft:redstone',
            'T':'minecraft:redstone_torch',
            'S':'tfc:metal/sheet/copper',
            'A':'kubejs:mechanical_alloy_sheet',
        }
    )
})
