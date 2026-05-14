ServerEvents.tags('fluid', event => {
    event.add('tfc:molten_metals', 'kubejs:mechanical_alloy')
    event.add('tfc:usable_in_ingot_mold', 'kubejs:mechanical_alloy')
})

TFCEvents.data(event =>{
    event.heat({
        ingredient: 'create:andesite_alloy',
        heatCapacity: 0.5,
        forgingTemperature: 1040.0,
        weldingTemperature: 1492.0
    })
    event.fluidHeat({
        fluid: 'kubejs:mechanical_alloy',
        meltTemperature: 1650.0,
        specificHeatCapacity: 0.985
    }) 
})

ServerEvents.recipes(event => {
    
    event.recipes.tfc.alloy(
        'kubejs:mechanical_alloy',
        [
            {
                fluid: 'tfc:metal/cast_iron',
                min: 0.7,
                max: 0.8
            },
            {
                fluid: 'tfc:metal/zinc',
                min: 0.1,
                max: 0.2
            },
            {
                fluid: 'tfc:metal/copper',
                min: 0,
                max: 0.1
            }
        ]
    )
    
    event.recipes.tfc.heating(
        'create:andesite_alloy',
        1650.0
    ).resultFluid(Fluid.of('kubejs:mechanical_alloy', 100))

    event.recipes.tfc.casting(
        'create:andesite_alloy',
        'tfc:ceramic/ingot_mold',
        Fluid.of('kubejs:mechanical_alloy', 100),
        0.05
    )
    event.recipes.tfc.casting(
        'create:andesite_alloy',
        'tfc:ceramic/fire_ingot_mold',
        Fluid.of('kubejs:mechanical_alloy', 100),
        0.001
    )
})
