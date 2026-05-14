ServerEvents.recipes(event =>{
    // New recipe
    event.shapeless(
        Item.of('createaddition:diamond_grit_sandpaper', 1),
        [
            Ingredient.of('create:sand_paper').or('create:red_sand_paper'),
            'tfc:powder/diamond',
            'tfc:powder/diamond',
            'tfc:glue',
        ]
    )
})
