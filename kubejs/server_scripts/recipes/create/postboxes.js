
ServerEvents.recipes(event =>{
    const COLOURS = [
        'white',
        'light_gray',
        'gray',
        'black',
        'brown',
        'red',
        'orange',
        'yellow',
        'lime',
        'green',
        'cyan',
        'light_blue',
        'blue',
        'purple',
        'magenta',
        'pink'
    ]
    // New recipes
    COLOURS.forEach(colour =>{
        event.shaped(
            Item.of('create:' + colour + '_postbox', 1),
            [
                'D',
                'B',
                'S'
            ],
            {
                'D':'minecraft:' + colour + '_dye',
                'B':'#tfc:barrels',
                'S':'kubejs:mechanical_alloy_sheet'
            }
        )
    })
})
