ServerEvents.recipes(event =>{
    // New recipe
    event.recipes.create.milling(
        CreateItem.of('minecraft:leather', 0.65),
        Item.of('minecraft:saddle')
    ).processingTime(200)
})
