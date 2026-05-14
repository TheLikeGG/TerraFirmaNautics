ServerEvents.recipes(event =>{
    event.recipes.create.mechanical_crafting(
        Item.of('simulated:red_portable_engine'),
        [
            ' EEE ',
            ' ACA ',
            'SGPGS',
            'AWTWA',
            ' LFL '
        ],
        {
            'A':'create:andesite_casing',
            'C':'create:chute',
            'S':'tfc:metal/double_sheet/steel',
            'G':'simulated:engine_assembly',
            'P':'create:precision_mechanism',
            'W':'createaddition:electrum_spool',
            'T':'create:electron_tube',
            'F':'create:shaft',
            'E':'tfc:metal/sheet/cast_iron',
            'L':'kubejs:mechanical_alloy_double_sheet'
        }
    )
})
