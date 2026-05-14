ServerEvents.tags('item', event =>{
    event.add('tfn:any_cloth', ['tfc:burlap_cloth', 'tfc:silk_cloth', 'tfc:wool_cloth'])
    event.add(
        'tfn:metal_bars',
        [
            'tfc:metal/bars/copper',
            'tfc:metal/bars/bronze',
            'tfc:metal/bars/bismuth_bronze',
            'tfc:metal/bars/black_bronze',
            'tfc:metal/bars/wrought_iron',
            'tfc:metal/bars/steel',
            'tfc:metal/bars/black_steel',
            'tfc:metal/bars/blue_steel',
            'tfc:metal/bars/red_steel',
        ]
    )
    event.add(
        'create:chest_mounted_storage',
        '#c:chests/wooden'
    )

    // Base TFC
    const woods = [
        'acacia',
        'ash',
        'aspen',
        'birch',
        'blackwood',
        'chestnut',
        'fir',
        'hickory',
        'kapok',
        'mangrove',
        'maple',
        'oak',
        'palm',
        'pine',
        'rosewood',
        'sequoia',
        'spruce',
        'sycamore',
        'cedar',
        'willow',
    ]
    // ArborFirmaCraft
    const afc_woods = [
        'baobab',
        'eucalyptus',
        'mahogany',
        'hevea',
        'tualang',
        'teak',
        'cypress',
        'fig',
        'ironwood',
        'ipe',
        'araucaria',
        'beech',
        'gingko',
        'mahoe'
    ]

    function addwood(mod, wood){
        event.add('c:stripped_logs', mod + ':wood/stripped_log/' + wood)
        event.add('c:stripped_woods', mod + ':wood/stripped_wood/' + wood)
    }

    woods.forEach(wood =>{
        addwood('tfc', wood)
    })
    afc_woods.forEach(wood =>{
        addwood('afc', wood)
    })


    const metals = [
        'copper',
        'bronze',
        'black_bronze',
        'bismuth_bronze',
        'wrought_iron',
        'steel',
        'black_steel',
        'red_steel'
    ]
    metals.forEach(metal =>{
        event.add('tfn:metal_trapdoors', 'tfc:metal/trapdoor/' + metal)
    })

    const stones = [
        'granite',
        'diorite',
        'gabbro',
        'shale',
        'claystone',
        'limestone',
        'conglomerate',
        'dolomite',
        'chert',
        'chalk',
        'tuff',
        'rhyolite',
        'basalt',
        'andesite',
        'dacite',
        'quartzite',
        'slate',
        'phyllite',
        'schist',
        'gneiss',
        'marble'
    ]
    stones.forEach(stone =>{
        event.add('tfn:chiseled_bricks', 'tfc:rock/chiseled/' + stone)
    })
})