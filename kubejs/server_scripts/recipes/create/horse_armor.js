ServerEvents.recipes(event =>{
    // New recipe
    event.recipes.create.crushing(
        CreateItem.of('minecraft:leather', 0.65),
        Item.of('minecraft:leather_horse_armor')
    ).processingTime(200)
})
