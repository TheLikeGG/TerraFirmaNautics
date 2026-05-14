ServerEvents.recipes(event =>{
    // New recipe
    event.shaped(
        Item.of('create:mechanical_crafter', 2),
        [
            'E',
            'C',
            'T'
        ],
        {
            'T':'#tfc:workbenches',
            'C':'create:brass_casing',
            'E':'create:electron_tube'
        }
    )
})
