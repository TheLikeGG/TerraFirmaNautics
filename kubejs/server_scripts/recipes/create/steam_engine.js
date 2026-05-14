ServerEvents.recipes(event =>{
    // New recipe
    event.recipes.create.mechanical_crafting(
        Item.of('create:steam_engine', 1),
        [
            'RSR',
            ' S ',
            'GSG',
            'CPC'
        ],
        {
            'R':'tfc:metal/rod/steel',
            'S':'firmalife:metal/ingot/stainless_steel',
            'G':'tfc:metal/sheet/gold',
            'C':'create:copper_casing',
            'P':'create:fluid_valve'
        }
    )
})
