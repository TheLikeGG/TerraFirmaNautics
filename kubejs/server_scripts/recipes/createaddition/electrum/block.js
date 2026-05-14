TFCEvents.data(event =>{
    event.heat({
        ingredient: 'createaddition:electrum_block',
        heatCapacity: 0.5,
        forgingTemperature: 650.0,
        weldingTemperature: 795.0
    })
})


ServerEvents.recipes(event =>{
    event.recipes.tfc.heating(
        'createaddition:electrum_block',
        1020.0
    ).resultFluid(Fluid.of('kubejs:molten_electrum', 100))


    event.shaped(
        Item.of('createaddition:electrum_block', 8),
        [
            'HS ',
            'SMS',
            ' S '
        ],
        {
            'H': Ingredient.of('#c:tools/hammer'),
            'S': 'createaddition:electrum_sheet',
            'M': '#minecraft:planks'
        }
    ).damageIngredient(Ingredient.of('#c:tools/hammer'))
})