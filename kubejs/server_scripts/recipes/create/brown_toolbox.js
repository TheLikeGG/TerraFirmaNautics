ServerEvents.recipes(event =>{
    // New recipe
    event.replaceInput(
        {output:'create:brown_toolbox', input:'create:golden_sheet'},
        'create:golden_sheet',
        'tfc:metal/sheet/gold'
    )
})
