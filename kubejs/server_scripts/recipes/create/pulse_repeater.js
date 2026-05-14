ServerEvents.recipes(event =>{
    // New recipe
    event.shaped(
        Item.of('create:pulse_repeater', 1),
        [
            'DST',
            'RRR'
        ],
        {
            'D':'minecraft:redstone',
            'R':'#c:stones/raw',
            'T':'minecraft:redstone_torch',
            'S':'tfc:metal/sheet/brass'
        }
    )
})
