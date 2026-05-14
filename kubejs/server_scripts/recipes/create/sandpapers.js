ServerEvents.recipes(event =>{
    // New recipe
    event.shapeless(
        Item.of('create:sand_paper', 1),
        [
            'minecraft:paper',
            Ingredient.of('#c:sands/olivine').or('#c:sands/silica'),
            'tfc:glue',
        ]
    )
    event.shapeless(
        Item.of('create:red_sand_paper', 1),
        [
            'minecraft:paper',
            '#c:sands/hematitic',
            'tfc:glue',
        ]
    )
})
