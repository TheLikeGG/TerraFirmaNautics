ServerEvents.recipes(event =>{
    // New recipe
    event.shapeless(
        Item.of('create:rose_quartz', 2),
        [
            '#c:tools/hammer',
            '#c:tools/chisel',
            'tfc:ore/cinnabar'
        ]
    ).damageIngredient('#c:tools/hammer').damageIngredient('#c:tools/chisel')
})
