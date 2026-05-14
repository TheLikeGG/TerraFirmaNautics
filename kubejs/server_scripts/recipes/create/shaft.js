ServerEvents.recipes(event =>{
    event.recipes.tfc.anvil(
        '4x create:shaft',
        'create:andesite_alloy[tfc:heat={min:1040}]',
        [
            'hit_not_last',
            'draw_last'
        ]
    )

    event.shaped(
        Item.of('create:shaft', 1),
        [
            'CR',
            ' R'
        ],
        {
            'C':'#c:tools/chisel',
            'R':'#c:stones/raw'
        }
    ).damageIngredient('#c:tools/chisel')
    event.shaped(
        Item.of('create:shaft', 1),
        [
            ' R',
            'CR'
        ],
        {
            'C':'#c:tools/chisel',
            'R':'#c:stones/raw'
        }
    ).damageIngredient('#c:tools/chisel')
    event.shaped(
        Item.of('create:shaft', 1),
        [
            'RC',
            'R '
        ],
        {
            'C':'#c:tools/chisel',
            'R':'#c:stones/raw'
        }
    ).damageIngredient('#c:tools/chisel')
    event.shaped(
        Item.of('create:shaft', 1),
        [
            'R ',
            'RC'
        ],
        {
            'C':'#c:tools/chisel',
            'R':'#c:stones/raw'
        }
    ).damageIngredient('#c:tools/chisel')
})