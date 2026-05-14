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
            "item": "tfc:metal/sheet/wrought_iron" // <- Change here!
          },
          "loops": 5,
          "results": [
            {
              "chance": 200.0,
              "id": "simulated:gyroscopic_mechanism"
            },
            {
              "chance": 8.0,
              "id": "tfc:metal/sheet/wrought_iron" // <- Change here!
            },
            {
              "chance": 8.0,
              "id": "create:andesite_alloy"
            },
            {
              "chance": 3.0,
              "id": "create:brass_nugget"
            },
            {
              "chance": 2.0,
              "id": "tfc:metal/rod/wrought_iron" // <- Change here!
            }
          ],
          "sequence": [
            {
              "type": "create:deploying",
              "ingredients": [
                {
                  "item": "simulated:incomplete_gyroscopic_mechanism"
                },
                {
                  "item": "create:cogwheel"
                }
              ],
              "results": [
                {
                  "id": "simulated:incomplete_gyroscopic_mechanism"
                }
              ]
            },
            {
              "type": "create:deploying",
              "ingredients": [
                {
                  "item": "simulated:incomplete_gyroscopic_mechanism"
                },
                {
                  "item": "create:shaft"
                }
              ],
              "results": [
                {
                  "id": "simulated:incomplete_gyroscopic_mechanism"
                }
              ]
            },
            {
              "type": "create:deploying",
              "ingredients": [
                {
                  "item": "simulated:incomplete_gyroscopic_mechanism"
                },
                {
                  "item": "create:brass_nugget"
                }
              ],
              "results": [
                {
                  "id": "simulated:incomplete_gyroscopic_mechanism"
                }
              ]
            }
          ],
          "transitional_item": {
            "id": "simulated:incomplete_gyroscopic_mechanism"
          }
        }
    )
})