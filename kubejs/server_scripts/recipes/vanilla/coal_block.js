ServerEvents.recipes(event =>{
    // New recipe
    event.replaceInput(
        {output:'minecraft:coal_block', input:'minecraft:coal'},
        'minecraft:coal',
        'tfc:ore/lignite'
    )
    event.replaceOutput(
        {input:'minecraft:coal_block', output:'minecraft:coal'},
        'minecraft:coal',
        'tfc:ore/lignite'
    )
})
