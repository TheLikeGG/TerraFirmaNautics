ServerEvents.recipes(event =>{
    // New recipe
    event.shaped(
        Item.of('create:hose_pulley', 1),
        [
            'LCL',
            'LGL',
            'LLL'
        ],
        {
            'L':'#c:leathers',
            'C':'create:copper_casing',
            'G':'create:cogwheel'
        }
    )
})
