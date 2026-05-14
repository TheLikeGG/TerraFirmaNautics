ItemEvents.modification(event =>{
    function SetBurnTime(item, time){
        event.modify(item, i =>{
            i.burnTime = time
        })
    }
  
    SetBurnTime('tfc:ore/bituminous_coal', 6600)
    SetBurnTime('tfc:ore/lignite', 3000)
    SetBurnTime('minecraft:coal', 3000)
    SetBurnTime('minecraft:charcoal', 2500)

    // FLUIDS THINGS NO WORKEY :-(
    //SetBurnTime('tfc:canola_oil', 12000)
    //SetBurnTime('firmalife:soybean_oil', 7800)
    //SetBurnTime('createaddition:seed_oil', 4200)
    //SetBurnTime('createaddition:biodiesel', 24000)
})