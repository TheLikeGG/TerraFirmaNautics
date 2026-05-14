ServerEvents.recipes(event =>{
    event.shaped(
        Item.of('createaddition:spool', 16),
        [
            'S',
            'R',
            'S'
        ],
        {
            'S':'tfc:metal/sheet/wrought_iron',
            'R':'tfc:metal/rod/wrought_iron'
        }
    )
    event.shaped(
        Item.of('createaddition:spool', 32),
        [
            'S',
            'R',
            'S'
        ],
        {
            'S':'tfc:metal/sheet/steel',
            'R':'tfc:metal/rod/steel'
        }
    )
    event.shaped(
        Item.of('createaddition:spool', 8),
        [
            'S',
            'R',
            'S'
        ],
        {
            'S':'tfc:metal/sheet/tin',
            'R':'tfc:metal/rod/tin'
        }
    )
})

const wires = [ 'copper', 'gold', 'electrum' ]
wires.forEach(wire =>{
    ServerEvents.recipes(event =>{
        event.shaped(
            Item.of('createaddition:' + wire + '_spool'),
            [
                'WWW',
                'WSW',
                'WWW'
            ],
            {
                'W':'createaddition:' + wire + '_wire',
                'S':'createaddition:spool'
            }
        )
    })
})