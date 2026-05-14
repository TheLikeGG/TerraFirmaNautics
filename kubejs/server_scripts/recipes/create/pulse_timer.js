ServerEvents.recipes(event =>{
    // New recipe
    event.shaped(
        Item.of('create:pulse_timer', 1),
        [
            'AST',
            'RRR'
        ],
        {
            'A':'tfc:gem/amethyst',
            'R':'#c:stones/raw',
            'T':'minecraft:redstone_torch',
            'S':'tfc:metal/sheet/brass'
        }
    )
})
