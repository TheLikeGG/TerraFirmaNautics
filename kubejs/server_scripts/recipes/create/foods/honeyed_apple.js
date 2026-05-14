ServerEvents.recipes(event =>{
    // New recipe
    event.recipes.create.filling(
        Item.of('create:honeyed_apple', 1),
        [
            Fluid.of('create:honey', 250),
            TFC.ingredient.notRotten().and(Ingredient.of('tfc:food/green_apple')),
        ]
    )
    event.recipes.create.filling(
        Item.of('create:honeyed_apple', 1),
        [
            Fluid.of('create:honey', 250),
            TFC.ingredient.notRotten().and(Ingredient.of('tfc:food/red_apple')),
        ]
    )
})

TFCEvents.data(event => {
    event.food({
        ingredient: 'create:honeyed_apple',
        food: {
            hunger: 2,
            water: 10,
            saturation: 1,
            nutrients: [0, 1.0, 0, 0, 0],
            decayModifier: 1.5
        }
    })
})