ServerEvents.recipes(event =>{
    // New recipe
    event.recipes.tfc.anvil(
        '4x create:fluid_pipe',
        'tfc:metal/sheet/copper',
        [
            'hit_last',
            'bend_not_last'
        ]
    )
})
