ServerEvents.recipes(event =>{
    // New recipe
    event.shaped(
        Item.of('aeronautics:adjustable_burner', 1),
        [
            'S S',
            'SCS',
            'ARA'
        ],
        {
            'S':'tfc:metal/sheet/wrought_iron',
            'C':'#minecraft:coals',
            'A':'create:andesite_alloy',
            'R':'minecraft:redstone'
        }
    )
})