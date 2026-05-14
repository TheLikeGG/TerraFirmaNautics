ServerEvents.recipes(event =>{
    // New recipe
    event.shaped(
        Item.of('simulated:physics_assembler', 1),
        [
            'L',
            'W',
            'M'
        ],
        {
            'L':'minecraft:lever',
            'W':'#minecraft:planks',
            'M':'tfc:brass_mechanisms'
        }
    )
})
