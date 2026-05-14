ServerEvents.recipes(event =>{
    // New recipe
    event.shaped(
        Item.of('create:andesite_funnel', 2),
        [
            ' R ',
            'RLR'
        ],
        {
            'R':'kubejs:mechanical_alloy_rod',
            'L':'#c:leathers'
        }
    )
    event.shaped(
        Item.of('create:andesite_tunnel', 2),
        [
            ' R ',
            'RLR'
        ],
        {
            'R':'kubejs:mechanical_alloy_sheet',
            'L':'#c:leathers'
        }
    )
    event.shaped(
        Item.of('create:brass_funnel', 2),
        [
            ' E ',
            ' R ',
            'RLR'
        ],
        {
            'R':'tfc:metal/rod/brass',
            'L':'#c:leathers',
            'E':'create:electron_tube'
        }
    )
    event.shaped(
        Item.of('create:brass_tunnel', 2),
        [
            ' E ',
            ' R ',
            'RLR'
        ],
        {
            'R':'tfc:metal/sheet/brass',
            'L':'#c:leathers',
            'E':'create:electron_tube'
        }
    )
})
