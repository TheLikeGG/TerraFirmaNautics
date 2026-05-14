ServerEvents.recipes(event =>{
    // New recipe
    event.shaped(
        Item.of('create:encased_chain_drive', 2),
        [
            ' H ',
            'HCH',
            ' H '
        ],
        {
            'H':'#c:chains',
            'C':'create:andesite_casing'
        }
    )
})
