ServerEvents.recipes(event =>{
    // New recipe
    event.recipes.create.mixing(
        Item.of('create:sweet_roll', 1),
        [
            Fluid.of('firmalife:cream', 250),
            TFC.ingredient.notRotten().and(Ingredient.of('#c:foods/bread')),
            'kubejs:industrial_preservatives',
            'minecraft:sugar'
        ]
    ).heated()
})

TFCEvents.data(event => {
    event.food({
        ingredient: 'create:sweet_roll',
        food: {
            hunger: 3,
            water: 5,
            saturation: 1,
            nutrients: [1.0, 0, 0, 0, 0.6],
            decayModifier: 0.05
        }
    })
})