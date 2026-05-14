ServerEvents.recipes(event =>{
    // New recipe
    event.recipes.create.mixing(
        Item.of('kubejs:industrial_preservatives', 8),
        [
            Fluid.of('tfc:vinegar', 250),
            Fluid.of('tfc:brine', 250),
            'minecraft:sugar',
            'tfc:powder/salt',
            'tfc:powder/saltpeter',
            'tfc:powder/lime'
        ]
    )
})