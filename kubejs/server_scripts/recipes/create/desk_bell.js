ServerEvents.recipes(event =>{
    // New recipe
    event.shaped(
        Item.of('create:desk_bell', 2),
        [
            'N',
            'S',
            'L'
        ],
        {
            'N':'create:brass_nugget',
            'S':'tfc:metal/sheet/brass',
            'L':'#minecraft:wooden_slabs'
        }
    )
})
