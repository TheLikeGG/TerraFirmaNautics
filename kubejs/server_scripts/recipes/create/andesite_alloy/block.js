TFCEvents.data(event =>{
    event.heat({
        ingredient: 'create:andesite_alloy_block',
        heatCapacity: 0.5,
        forgingTemperature: 1040.0,
        weldingTemperature: 1492.0
    })
})


ServerEvents.recipes(event =>{
    event.recipes.tfc.heating(
        'create:andesite_alloy_block',
        1650.0
    ).resultFluid(Fluid.of('kubejs:mechanical_alloy', 100))


    event.shaped(
        Item.of('create:andesite_alloy_block', 8),
        [
            'HS ',
            'SMS',
            ' S '
        ],
        {
            'H': Ingredient.of('#c:tools/hammer'),
            'S': 'kubejs:mechanical_alloy_sheet',
            'M': '#minecraft:planks'
        }
    ).damageIngredient(Ingredient.of('#c:tools/hammer'))
})