ServerEvents.recipes(event =>{
    event.replaceInput(
        {output:'simulated:velocity_sensor'},
        'minecraft:barrel',
        '#tfc:barrels'
    )
})
