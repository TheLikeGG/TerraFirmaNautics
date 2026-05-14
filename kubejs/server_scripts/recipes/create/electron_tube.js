ServerEvents.recipes(event =>{
    // New recipe
    event.shaped(
        Item.of('create:electron_tube', 2),
        [
            'Q',
            'Q',
            'S'
        ],
        {
            'Q':'create:polished_rose_quartz',
            'S':'tfc:metal/sheet/steel'
        }
    )
    event.replaceInput(
        {input:'create:iron_sheet', input:'create:polished_rose_quartz', output:'create:electron_tube'},
        'create:iron_sheet',
        'tfc:metal/sheet/wrought_iron'
    )
})
