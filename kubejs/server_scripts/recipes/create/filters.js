ServerEvents.recipes(event =>{
    event.replaceInput(
        {output:'create:filter', input:'minecraft:iron_nugget'},
        'minecraft:iron_nugget',
        'kubejs:mechanical_alloy_rod'
    )
    event.replaceInput(
        {output:'create:attribute_filter', input:'create:brass_nugget'},
        'create:brass_nugget',
        'tfc:metal/rod/brass'
    )
    event.replaceInput(
        {output:'create:package_filter', input:'create:zinc_nugget'},
        'create:zinc_nugget',
        'tfc:metal/rod/zinc'
    )
})
