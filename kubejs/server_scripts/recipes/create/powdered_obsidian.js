ServerEvents.recipes(event =>{
    // New recipes
    event.recipes.create.crushing(
        [CreateItem.of('create:powdered_obsidian', 0.5), CreateItem.of('tfc:groundcover/obsidian_shard', 0.05)],
        Item.of('tfc:groundcover/obsidian_shard')
    ).processingTime(450)

    event.recipes.create.crushing(
        [CreateItem.of('create:powdered_obsidian', 1), CreateItem.of('tfc:groundcover/obsidian_shard', 0.15), CreateItem.of('minecraft:obsidian', 0.65)],
        Item.of('minecraft:obsidian')
    ).processingTime(500)
})
