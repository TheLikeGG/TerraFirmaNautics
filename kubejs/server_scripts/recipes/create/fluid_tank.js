ServerEvents.recipes(event =>{
    // New recipe
    event.shaped(
        Item.of('create:fluid_tank', 2),
        [
            'RSR',
            'G G',
            'RSR'
        ],
        {
            'S':'tfc:metal/sheet/copper',
            'R':'tfc:metal/rod/copper',
            'G':'#c:glass_panes'
        }
    )
})
