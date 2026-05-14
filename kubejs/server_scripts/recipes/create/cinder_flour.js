ServerEvents.recipes(event =>{
    // New recipe
    event.recipes.create.mixing(
        Item.of('create:cinder_flour', 1),
        [
            Fluid.of('firmalife:yeast_starter', 100),
            'minecraft:sugar',
            TFC.ingredient.notRotten().and(Ingredient.of('firmalife:food/butter')),
            '4x tfc:powder/wood_ash'
        ]
    )
})
