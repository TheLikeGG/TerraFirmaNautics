ServerEvents.recipes(event =>{
    // New recipe
    event.recipes.create.mechanical_crafting(
        Item.of('create:mechanical_drill', 1),
        [
            '  T  ',
            ' BTR ',
            'VAMAE',
            'CUFUC',
            ' CCC '
        ],
        {
            'T':'firmalife:metal/rod/stainless_steel',
            'B':'tfc:metal/pickaxe/blue_steel',
            'R':'tfc:metal/pickaxe/red_steel',
            'V':'tfc:metal/shovel/blue_steel',
            'E':'tfc:metal/shovel/red_steel',
            'A':'kubejs:mechanical_alloy_double_ingot',
            'F':'create:shaft',
            'U':'create:electron_tube',
            'C':'create:andesite_casing',
            'M':'create:precision_mechanism'
        }
    )
})
