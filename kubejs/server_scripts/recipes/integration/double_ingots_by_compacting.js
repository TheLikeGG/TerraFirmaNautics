ServerEvents.recipes(event =>{
    const metals = [
        'bismuth',
        'bismuth_bronze',
        'black_bronze',
        'bronze',
        'brass',
        'copper',
        'gold',
        'nickel',
        'rose_gold',
        'silver',
        'tin',
        'zinc',
        'sterling_silver',
        'wrought_iron',
        'cast_iron',
        'steel',
        'black_steel',
        'blue_steel',
        'red_steel'
    ]
    const flmetals = [
        'chromium',
        'stainless_steel'
    ]
    const createmetals = [
        'andesite_alloy'
    ]

    metals.forEach(m => {
        event.recipes.create.compacting(
            Item.of('tfc:metal/double_ingot/' + m),
            [
                Ingredient.of('tfc:metal/ingot/' + m),
                Ingredient.of('tfc:metal/ingot/' + m),
                'tfc:powder/flux'
            ]
        ).heated();
    });
    flmetals.forEach(m => {
        event.recipes.create.compacting(
            Item.of('firmalife:metal/double_ingot/' + m),
            [
                Ingredient.of('firmalife:metal/ingot/' + m),
                Ingredient.of('firmalife:metal/ingot/' + m),
                'tfc:powder/flux'
            ]
        ).heated()
    });
    event.recipes.create.compacting(
        Item.of('kubejs:mechanical_alloy_double_ingot'),
        [
            Ingredient.of('create:andesite_alloy'),
            Ingredient.of('create:andesite_alloy'),
            'tfc:powder/flux'
        ]
    ).heated()
    event.recipes.create.compacting(
        Item.of('kubejs:electrum_double_ingot'),
        [
            Ingredient.of('createaddition:electrum_ingot'),
            Ingredient.of('createaddition:electrum_ingot'),
            'tfc:powder/flux'
        ]
    ).heated()

    
})