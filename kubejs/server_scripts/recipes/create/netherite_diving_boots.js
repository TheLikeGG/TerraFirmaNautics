ServerEvents.recipes(event =>{
    // New recipe
    event.shapeless(
        Item.of('create:netherite_diving_boots', 1),
        [
            '#c:tools/hammer',
            'create:copper_diving_boots',
            'tfc:metal/double_sheet/black_steel',
            'tfc:metal/double_sheet/black_steel',
            'tfc:powder/flux',
            'tfc:glue',
        ]
    ).damageIngredient('#c:tools/hammer')
})
