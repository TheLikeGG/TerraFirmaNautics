ServerEvents.recipes(event =>{
    event.shaped(
        'simulated:redstone_magnet',
        [
            'CSC',
            'CRC',
            'CSC'
        ],
        {
            'C':'createaddition:copper_spool',
            'S':'tfc:metal/sheet/cast_iron',
            'R':'minecraft:redstone_block'
        }
    )
})
