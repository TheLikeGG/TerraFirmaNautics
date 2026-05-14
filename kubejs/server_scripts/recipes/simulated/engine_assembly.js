/*
 * So basically I didn't feel like rewriting the whole recipe in kjs and just needed to change
 * the input (iron sheet) and some of the chance outputs (iron sheet and crushed raw iron) so
 * I casually went to https://github.com/Creators-of-Aeronautics/Simulated-Project/blob/main/simulated/common/src/generated/resources/data/simulated/recipe/sequenced_assembly/gyroscopic_mechanism.json
 * and snatched the original recipe from there :-)
 */

ServerEvents.recipes(event =>{
    event.custom(
        {
          "type": "create:sequenced_assembly",
          "ingredient": {
            "item": "tfc:metal/double_sheet/steel" // <- Change here!
          },
          "loops": 8,
          "results": [
            {
              "chance": 80.0,
              "id": "simulated:engine_assembly"
            },
            {
              "chance": 16.0,
              "id": "tfc:metal/sheet/steel" // <- Change here!
            },
            {
              "chance": 3.0,
              "id": "tfc:metal/rod/steel" // <- Change here!
            },
            {
              "chance": 0.8,
              "id": "tfc:metal/ingot/cast_iron" // <- Change here!
            },
            {
              "chance": 0.2,
              "id": "tfc:metal/rod/cast_iron" // <- Change here!
            }
            // <- Change here! (removed iron helmet with chance 0 for some reason idk why its there but yeah)
          ],
          "sequence": [
            {
              "type": "create:cutting",
              "ingredients": [
                {
                  "item": "simulated:incomplete_engine_assembly"
                }
              ],
              "results": [
                {
                  "id": "simulated:incomplete_engine_assembly"
                }
              ]
            },
            {
              "type": "create:pressing",
              "ingredients": [
                {
                  "item": "simulated:incomplete_engine_assembly"
                }
              ],
              "results": [
                {
                  "id": "simulated:incomplete_engine_assembly"
                }
              ]
            }
          ],
          "transitional_item": {
            "id": "simulated:incomplete_engine_assembly"
          }
        }
    )
})