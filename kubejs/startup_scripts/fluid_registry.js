StartupEvents.registry('fluid', event => {
  event.create('mechanical_alloy')
  .displayName('Mechanical Alloy')
  .tickRate(20)
  .levelDecreasePerBlock(2)
  .slopeFindDistance(2)

  event.create('molten_electrum')
  .displayName('Molten Electrum')
  .tickRate(20)
  .levelDecreasePerBlock(2)
  .slopeFindDistance(2)
})