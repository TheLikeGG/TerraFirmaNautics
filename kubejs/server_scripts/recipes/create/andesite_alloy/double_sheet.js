TFCEvents.data(event =>{
    event.heat({
        ingredient: 'kubejs:mechanical_alloy_double_sheet',
        heatCapacity: 0.5,
        forgingTemperature: 1040.0,
        weldingTemperature: 1492.0
    })
})

ServerEvents.recipes(event => {
    event.recipes.tfc.heating(
        'kubejs:mechanical_alloy_double_sheet',
        1650.0
    ).resultFluid(Fluid.of('kubejs:mechanical_alloy', 400))

    event.recipes.tfc.welding(
        'kubejs:mechanical_alloy_double_sheet',
        'kubejs:mechanical_alloy_sheet',
        'kubejs:mechanical_alloy_sheet'
    )
})