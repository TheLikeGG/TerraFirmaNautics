ServerEvents.recipes(event =>{
    // New recipe
    event.shapeless(
        Item.of('create:netherite_backtank', 1),
        [
            'create:copper_backtank',
            'tfc:powder/flux',
            'tfc:glue',
            '2x tfc:metal/double_sheet/black_steel',
            '#tfc:trip_hammers'
        ]
    ).damageIngredient('#tfc:trip_hammers', 1)
})
