TFCEvents.data(event =>{
    event.heat({
        ingredient: 'createaddition:electrum_sheet',
        heatCapacity: 0.5,
        forgingTemperature: 650.0,
        weldingTemperature: 795.0
    })
})

ServerEvents.recipes(event => {
    event.recipes.tfc.heating(
        'createaddition:electrum_sheet',
        1020.0
    ).resultFluid(Fluid.of('kubejs:molten_electrum', 200))

    event.recipes.tfc.anvil(
        'createaddition:electrum_sheet',
        'kubejs:electrum_double_ingot',
        [
            'hit_last',
            'hit_second_last',
            'hit_third_last'
        ]
    )

    event.replaceInput(
        {input:'createaddition:electrum_ingot', output:'createaddition:electrum_sheet', type:'create:pressing'},
        'createaddition:electrum_ingot',
        'kubejs:electrum_double_ingot'
    )
})