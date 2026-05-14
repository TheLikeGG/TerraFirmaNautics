ServerEvents.recipes(event =>{
    event.shaped(
        Item.of('simulated:rope_winch'),
        [
            'SFS',
            'GCG'
        ],
        {
            'S':'tfc:metal/sheet/steel',
            'F':'create:shaft',
            'G':'create:cogwheel',
            'C':'create:andesite_casing'
        }
    )
})
