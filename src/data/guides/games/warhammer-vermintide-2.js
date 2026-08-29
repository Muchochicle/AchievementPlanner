// Warhammer: Vermintide 2 Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/warhammer-vermintide-2.json), whose 26 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   552500 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js). None are hidden; every one ships a real, official Steam description, quoted verbatim below.
// - Sections group achievements by what each one actually requires.
export const GUIDE = {
    "slug": "warhammer-vermintide-2-achievement-guide",
    "category": "game",
    "gameSlug": "warhammer-vermintide-2",
    "icon": "🐀",
    "title": "Warhammer: Vermintide 2 Achievement Guide",
    "summary": "A practical guide to all 26 Steam achievements in Warhammer: Vermintide 2 - campaign & skittergate, hero progression, crafting & gear.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Warhammer: Vermintide 2 has 26 Steam achievements and none are hidden. They fall into three groups: campaign completion (the Prologue, the three Acts, and the Skittergate finale on each of the four difficulties), hero progression (level 30 with each of the five heroes and a talent build-out), and the crafting/gear loop.",
                "Nothing is missable. The time is in the levelling - five heroes to 30 - and in Norscannihilation, which needs a Skittergate clear on Legend difficulty and usually a coordinated group and good gear.",
                "Tip: pick one hero to main to 30 first (that unlocks all their talent points for Exemplar), then spread play across the other four. Do the lower Skittergate difficulties as your power level allows and save Legend for last with a full team."
            ]
        },
        {
            "heading": "Campaign & Skittergate",
            "body": [
                "The completion markers: the Prologue and Acts 1-3, Skittergate on Recruit, Veteran, Champion and Legend, and Virtuoso for completing a level as every Hero.",
                "The achievements here: Escaped! (Complete Prologue); The Plot Thickens (Complete Act 1); Striking Back (Complete Act 2); Reikland Rumble (Complete Act 3); The Frozen North (Complete Skittergate on Recruit); Pact-Smasher (Complete Skittergate on Veteran); Righteous Crusade (Complete Skittergate on Champion); Norscannihilation (Complete Skittergate on Legend); Virtuoso (Complete a level as every Hero)."
            ]
        },
        {
            "heading": "Hero Progression",
            "body": [
                "The levelling goals: reaching level 30 with Kerillian, Saltzpyre, Kruber, Sienna and Bardin, then with all characters, plus unlocking your first talent point and all talent points for one career.",
                "The achievements here: Avatar of Drakira (Reach level 30 with Kerillian); Witch Hunter General (Reach level 30 with Saltzpyre); Champion of Taal (Reach level 30 with Kruber); Conflagration of Doom (Reach level 30 with Sienna); Just Like Cousin Okri (Reach level 30 with Bardin); Pantheon of Heroes (Reach Level 30 with all characters); Tempered by War (Unlock 1st Talent point); Exemplar (Unlock all Talent points for 1 career)."
            ]
        },
        {
            "heading": "Crafting & Gear",
            "body": [
                "The item loop: crafting 1 and 50 items, salvaging 1 and 100, and equipping a Common, Rare, Exotic and Veteran item, plus Exotic items in every slot at once.",
                "The achievements here: Craftsman (Craft an Item); Master Craftsman (Craft 50 items); Waste Not, Want Not (Salvage an item); Make Do And Mend (Salvage 100 items); My First Wargear (Equip a Common Item); Quite the Find (Equip a Rare Item); Heirloom (Equip an Exotic Item); Now You're Showing Off (Equip Exotic items in every slot); Mark of Expertise (Equip a Veteran Item)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the campaign (Prologue, Acts 1-3) and the crafting taps come naturally as you gear up.",
                "2. Main one hero to level 30 for Exemplar, then level the other four.",
                "3. Run Skittergate on each difficulty as your gear allows, and play a level as each Hero for Virtuoso.",
                "4. Finish with Norscannihilation - Skittergate on Legend - with a coordinated group.",
                "Tip: salvaging 100 items (Make Do And Mend) comes for free while chasing crafting materials - break down every low-quality drop rather than selling it."
            ]
        }
    ]
};
