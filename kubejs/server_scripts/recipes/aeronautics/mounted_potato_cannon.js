ServerEvents.recipes(event =>{
    event.recipes.create.mechanical_crafting(
        Item.of('aeronautics:mounted_potato_cannon', 1),
        [
            'SR  ',
            'NCPP',
            'SR  '
        ],
        {
            'S':'tfc:metal/sheet/copper',
            'R':'minecraft:redstone',
            'N':'create:potato_cannon',
            'C':'create:cogwheel',
            'P':'create:fluid_pipe',
        }
    )
})
