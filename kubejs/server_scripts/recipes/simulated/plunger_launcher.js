ServerEvents.recipes(event =>{
    // New recipe
    event.recipes.create.mechanical_crafting(
        Item.of('simulated:plunger_launcher', 1),
        [
            '   RSB',
            ' AMRSB',
            'CCPP  '
        ],
        {
            'R':'simulated:rope_coupling',
            'S':'#c:rods/wooden',
            'B':'afc:rubber_bar',
            'P':'create:fluid_pipe',
            'A':'create:andesite_alloy',
            'C':'tfc:metal/sheet/copper',
            'M':'create:precision_mechanism'
        }
    )
})
