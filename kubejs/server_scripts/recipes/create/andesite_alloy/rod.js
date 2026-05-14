TFCEvents.data(event =>{
    event.heat({
        ingredient: 'kubejs:mechanical_alloy_rod',
        heatCapacity: 0.5,
        forgingTemperature: 1040.0,
        weldingTemperature: 1492.0
    })
})

ServerEvents.recipes(event => {
    event.recipes.tfc.heating(
        'kubejs:mechanical_alloy_rod',
        1650.0
    ).resultFluid(Fluid.of('kubejs:mechanical_alloy', 50))

    event.recipes.tfc.anvil(
        '2x kubejs:mechanical_alloy_rod',
        'create:andesite_alloy',
        [
            'hit_last',
            'hit_second_last',
            'hit_third_last'
        ]
    )
})