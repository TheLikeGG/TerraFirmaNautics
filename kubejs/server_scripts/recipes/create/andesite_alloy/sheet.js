TFCEvents.data(event =>{
    event.heat({
        ingredient: 'kubejs:mechanical_alloy_sheet',
        heatCapacity: 0.5,
        forgingTemperature: 1040.0,
        weldingTemperature: 1492.0
    })
})

ServerEvents.recipes(event => {
    event.recipes.tfc.heating(
        'kubejs:mechanical_alloy_sheet',
        1650.0
    ).resultFluid(Fluid.of('kubejs:mechanical_alloy', 200))

    event.recipes.tfc.anvil(
        'kubejs:mechanical_alloy_sheet',
        'kubejs:mechanical_alloy_double_ingot',
        [
            'hit_last',
            'hit_second_last',
            'hit_third_last'
        ]
    )
})