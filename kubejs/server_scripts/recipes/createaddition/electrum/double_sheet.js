TFCEvents.data(event =>{
    event.heat({
        ingredient: 'kubejs:electrum_double_sheet',
        heatCapacity: 0.5,
        forgingTemperature: 650.0,
        weldingTemperature: 795.0
    })
})

ServerEvents.recipes(event => {
    event.recipes.tfc.heating(
        'kubejs:electrum_double_sheet',
        1020.0
    ).resultFluid(Fluid.of('kubejs:molten_electrum', 400))

    event.recipes.tfc.welding(
        'kubejs:electrum_double_sheet',
        'createaddition:electrum_sheet',
        'createaddition:electrum_sheet'
    )
})