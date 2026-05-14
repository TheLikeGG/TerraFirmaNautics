ServerEvents.recipes(event =>{
    // New recipes
    event.shaped(
        Item.of('create:cogwheel', 1),
        [
            ' L ',
            'LSL',
            ' L '
        ],
        {
            'S':'create:shaft',
            'L':'#tfc:lumber'
        }
    ),
    event.shaped(
        Item.of('create:large_cogwheel', 1),
        [
            ' L ',
            'LSL',
            ' L '
        ],
        {
            'S':'create:cogwheel',
            'L':'#minecraft:planks'
        }
    ),
    event.shaped(
        Item.of('create:large_cogwheel', 1),
        [
            'LPL',
            'PSP',
            'LPL'
        ],
        {
            'S':'create:shaft',
            'L':'#tfc:lumber',
            'P':'#minecraft:planks'
        }
    )
})
