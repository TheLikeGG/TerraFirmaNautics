TFCEvents.data(event =>{
    event.heat({
        ingredient: 'createaddition:electrum_rod',
        heatCapacity: 0.5,
        forgingTemperature: 650.0,
        weldingTemperature: 795.0
    })
})

ServerEvents.recipes(event => {
    event.recipes.tfc.heating(
        'createaddition:electrum_rod',
        1020.0
    ).resultFluid(Fluid.of('kubejs:molten_electrum', 50))

    event.recipes.tfc.anvil(
        '2x createaddition:electrum_rod',
        'createaddition:electrum_ingot',
        [
            'hit_last',
            'hit_second_last',
            'hit_third_last'
        ]
    )
})