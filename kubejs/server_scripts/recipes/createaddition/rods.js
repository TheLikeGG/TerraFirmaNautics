ServerEvents.recipes(event =>{
    const metals = [
        'bismuth',
        'bismuth_bronze',
        'black_bronze',
        'bronze',
        'brass',
        'copper',
        'gold',
        'nickel',
        'rose_gold',
        'silver',
        'tin',
        'zinc',
        'sterling_silver',
        'wrought_iron',
        'cast_iron',
        'steel',
        'black_steel',
        'blue_steel',
        'red_steel'
    ]
    const flmetals = [
        'chromium',
        'stainless_steel'
    ]
    const createmetals = [
        'andesite_alloy'
    ]

    event.custom({
        type: "createaddition:rolling",
        ingredients:
        [
            {item: "create:andesite_alloy"}
        ],
        results:
        [
            {id: "kubejs:mechanical_alloy_rod", count: 2}
        ]
    })
    metals.forEach(m =>{
        event.custom({
            type: "createaddition:rolling",
            ingredients:
            [
                {item: "tfc:metal/ingot/" + m}
            ],
            results:
            [
                {id: "tfc:metal/rod/" + m, count: 2}
            ]
        })
    })
    flmetals.forEach(m =>{
        event.custom({
            type: "createaddition:rolling",
            ingredients:
            [
                {item: "firmalife:metal/ingot/" + m}
            ],
            results:
            [
                {id: "firmalife:metal/rod/" + m, count: 2}
            ]
        })
    })

    event.replaceInput(
        {output:'createaddition:electric_motor'},
        'createaddition:iron_rod',
        'tfc:metal/rod/steel'
    )
    event.replaceInput(
        {output:'createaddition:alternator'},
        'createaddition:iron_rod',
        'tfc:metal/rod/steel'
    )
    event.replaceInput(
        {output:'createaddition:alternator'},
        'create:iron_sheet',
        'tfc:metal/sheet/steel'
    )
})