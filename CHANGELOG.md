# Changelog
## Alpha 0.6
- Fixed a bug where milling graphite would yield 1 powder, whereas grinding it with a quern yields 4. Now milling output is matched to quern (4 powder).
- Removed portable blaze textures.
- Updated TFC to 4.2.7.
- Removed a netherrack crafting recipe.
- Changed portable engine burn time of `createaddition:seed_oil` from 20000 ticks to 7000 ticks as it is really easy to get.
- Added a fuel definition for portable engines to `createaddition:bioethanol` to burn for 20000 ticks (same as lava).
- Removed crafting recipe for blaze cake base and blaze cake, as blaze burners are no longer a thing.
- Removed filling recipes for cinder flour into redstone, glowstone, gunpowder. Now the only recipe shown as a use for cinder flour is bioethanol.
- Added mod `Create Train Physics Reloaded`, primarily to make trains require an engine, and therefore fuel (or electricity).
- Added mod `Xaero Train Map` to allow for the world map to also display train lines.
- Added mod `Create Additions - Sable Compat`.
- Added plenty of entries to the field guide explaining the major changes made in the pack.
## Alpha 0.5
- Updated `JEI` (fixes a visual glitch).
- Updated `ArborFirmaCraft` (AFC).
- Adjusted hot air burner recipe to require `#minecraft:coals` instead of a coal block. Now it can be crafted with one piece of charcoal/lignite/bituminous coal.
- Removed levitite blend recipe to avoid confusion on why it's not obtainable.
- Added mod `Separate Sable Render Distance` to allow for rendering sublevels from farther away.
- Replaced dynamic lights mods to fix issues with sable sublevels not lighting up when the player was holding a light near them.
- Fixed bug where low temperature fireboxes would override heat produced by spring water in steam engines.
- Translated all quern recipes to allow them to be craftable with create's millstone.
- Added mod `Create Aeronautics: Portable Engine Liquid Fuel` which allows for giving fuel definitions to other liquids.
- Added fuel definitions to `tfc:olive_oil`, `tfc:canola_oil` and `firmalife:soybean_oil` to burn for 10000 ticks. Added fuel definition to `createaddition:seed_oil` to burn for 20000 ticks (same as lava). Note these liquids must be pumped via mechanical pump, as feeding the engine with a bucket is apparently impossible.
- Removed mod `Better ModList`.
## Alpha 0.4
- Made a `TerraFirmaNautics Core` mod to allow for mixins.
- Made it so that the firebox acts as a bootleg blaze burner, requiring 750ºC (configurable) to count as heated and 1500ºC (configurable) to count as superheated.
- Allowed fireboxes to heat up steam engines, with firebox temperature over 100ºC starting to contribute, and being able to fully power a max sized steam engine if the firebox reaches 2000ºC.
- Updated JEI.
- Made it so that feeding spring water to steam engines adds a flat +4 heat (configurable), making geothermal power a thing, albeit less efficient than conventional fuels. Note that this extra heat can be combined with a Firebox. Also note that using spring water to power the boiler will require 4x (configurable) as much water (so either more pumps or higher rpm in the pumps).
- Added configurations to `TerraFirmaNautics Core` to allow for tweaking some values.
- Removed portable blazes and the blaze burner recipe chain.
## Alpha 0.3
- Added mod `TFC Mantle Mountains`.
- Updated a lot of mods. I might have gotten distracted and taken 3 months to update this... oops :skull:.
- Changed the copper handle recipe to need a forged copper rod.
- Removed crushing recipes for unobtainable materials.
- Fixed the crushing recipe for leather horse armour resulting in duplicated leather.
- Removed milling recipes for unobtainable items.
- Replaced `minecraft:sea_pickle` with `tfc:sea_pickle` in most recipes.
- Added a crushing recipe for obsidian shards and made it so that crushing obsidian can also produce shards.
- Added mod `Coastal Waves` for more immersion.
- Added mod `TFC Sable Rivers` to allow for aeronautics' ships to drift with the currents.
- Added mod `TFC Water Flasks`.

## Alpha 0.2
- Reduced regrowing forest speed. From 1 (default, overwhelmingly fast) to 1000 (hopefully slower?).
- Made shafts craftable from 2 raw stone and a chisel
- Reduced andesite alloy tier by replacing steel requirement with cast iron and nickel with zinc.
- Changed rose quartz recipe. It is now crafted from cinnabar, a chisel and a hammer (tools not consumed).
- Adjusted engine assembly success rate up from 50% to 80%.
- Reduced requirements to craft blaze burner: No longer requires red steel, reduced lava required from 100b to 10b.
- Removed infinite metal bug.
- Added automation recipes for double ingots, sheets and double sheets.

## Alpha 0.1
- Added everyhing. So much I can't be bothered to retroactively include every single little change. I should've started the changelog a long time ago... Sigh.
