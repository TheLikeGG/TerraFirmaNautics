ServerEvents.recipes(event =>{
    // New recipe
    event.recipes.create.mechanical_crafting(
        Item.of('create:wand_of_symmetry', 1),
        [
            ' G ',
            'GTG',
            'SMS',
            ' R ',
            ' O '
        ],
        {
            'G':'#c:glass_blocks',
            'T':'create:transmitter',
            'S':'tfc:metal/sheet/brass',
            'M':'create:precision_mechanism',
            'R':'tfc:metal/rod/brass',
            'O':'#c:obsidians'
        }
    )
})
