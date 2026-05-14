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
        event.recipes.create.pressing(
            Item.of('tfc:metal/sheet/' + m),
            Ingredient.of('tfc:metal/double_ingot/' + m)
        )
    });
    flmetals.forEach(m => {
        event.recipes.create.pressing(
            Item.of('firmalife:metal/sheet/' + m),
            Ingredient.of('firmalife:metal/double_ingot/' + m)
        )
    });

    event.recipes.create.pressing(
        Item.of('kubejs:mechanical_alloy_sheet'),
        Ingredient.of('kubejs:mechanical_alloy_double_ingot')
    )
    
})