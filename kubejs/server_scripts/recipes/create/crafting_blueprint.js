ServerEvents.recipes(event =>{
    event.replaceInput(
        {output:'create:crafting_blueprint'},
        'minecraft:crafting_table',
        '#c:player_workstations/crafting_tables'
    )
})