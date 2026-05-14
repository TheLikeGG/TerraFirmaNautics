ServerEvents.tags('fluid', event => {
    event.add('tfc:molten_metals', 'kubejs:molten_electrum')
    event.add('tfc:usable_in_ingot_mold', 'kubejs:molten_electrum')
})

TFCEvents.data(event =>{
    event.heat({
        ingredient: 'createaddition:electrum_ingot',
        heatCapacity: 0.5,
        forgingTemperature: 650,
        weldingTemperature: 795
    })
    event.fluidHeat({
        fluid: 'kubejs:molten_electrum',
        meltTemperature: 1020.0,
        specificHeatCapacity: 0.591
    }) 
})

ServerEvents.recipes(event => {
    
    event.recipes.tfc.alloy(
        'kubejs:molten_electrum',
        [
            {
                fluid: 'tfc:metal/gold',
                min: 0.4,
                max: 0.6
            },
            {
                fluid: 'tfc:metal/silver',
                min: 0.4,
                max: 0.6
            },
            {
                fluid: 'tfc:metal/copper',
                min: 0.0,
                max: 0.1
            }
        ]
    )
    
    event.recipes.tfc.heating(
        'createaddition:electrum_ingot',
        1020
    ).resultFluid(Fluid.of('kubejs:molten_electrum', 100))

    event.recipes.tfc.casting(
        'createaddition:electrum_ingot',
        'tfc:ceramic/ingot_mold',
        Fluid.of('kubejs:molten_electrum', 100),
        0.05
    )
    event.recipes.tfc.casting(
        'createaddition:electrum_ingot',
        'tfc:ceramic/fire_ingot_mold',
        Fluid.of('kubejs:molten_electrum', 100),
        0.001
    )
})
