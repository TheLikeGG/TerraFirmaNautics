ServerEvents.recipes(event =>{
    const metals = [
        "copper",
        "gold"
    ]
    metals.forEach(metal =>{
        event.custom({
            type: "createaddition:rolling",
            ingredients:
            [
                {item: "tfc:metal/rod/" + metal}
            ],
            results:
            [
                {id: "createaddition:" + metal + "_wire", count: 4}
            ]
        })
    })
    event.custom({
        type: "createaddition:rolling",
        ingredients:
        [
            {item: "createaddition:electrum_rod"}
        ],
        results:
        [
            {id: "createaddition:electrum_wire", count: 4}
        ]
    })
    event.custom({
        type: "createaddition:rolling",
        ingredients:
        [
            {item: "tfc:metal/rod/wrought_iron"}
        ],
        results:
        [
            {id: "createaddition:iron_wire", count: 4}
        ]
    })
})