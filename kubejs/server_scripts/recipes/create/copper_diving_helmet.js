ServerEvents.recipes(event =>{
    // New recipe
    event.shapeless(
        Item.of('create:copper_diving_helmet', 1),
        [
            '#c:tools/hammer',
            'tfc:metal/helmet/copper',
            'tfc:glue',
            'tfc:powder/flux',
            '#c:glass_blocks'
        ]
    ).damageIngredient('#c:tools/hammer')
})
