ServerEvents.recipes(event =>{
    event.recipes.create.mixing(
        Fluid.of('create:honey', 100),
        'firmalife:food/raw_honey'
    )

    event.recipes.create.filling(
        Item.of('firmalife:jar/honey'),
        [
            'tfc:empty_jar_with_lid',
            Fluid.of('create:honey', 800)
        ]
    )

    event.recipes.create.emptying(
        [
            Fluid.of('create:honey', 800),
            Item.of('tfc:empty_jar')
        ],
        'firmalife:jar/honey'
    )
})