ServerEvents.recipes(event =>{
    // New recipe
    event.shapeless(
        Item.of('simulated:honey_glue', 1),
        [
            'create:super_glue',
            'firmalife:food/raw_honey',
            'tfc:powder/lime',
            'firmalife:tirage_mixture'
        ]
    )
})
