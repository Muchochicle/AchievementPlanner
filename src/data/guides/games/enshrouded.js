// Enshrouded Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/enshrouded.json), whose 52 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1203620 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js). None are hidden; every one
//   ships a real, official Steam description, quoted verbatim below.
// - Sections group achievements by what each one actually requires.
export const GUIDE = {
    "slug": "enshrouded-achievement-guide",
    "category": "game",
    "gameSlug": "enshrouded",
    "icon": "🏔️",
    "title": "Enshrouded Achievement Guide",
    "summary": "A practical guide to all 52 Steam achievements in Enshrouded - none are hidden. getting started & crafting, bosses & elixir wells, character level, region mastery - shrines & spires, region mastery - mining & obelisks, region mastery - shroud roots.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Enshrouded has 52 Steam achievements and none are hidden. The list is one long completion checklist for a single save: reach every character level milestone, beat the four bosses, and fully clear each of the game's regions across five repeated collectible types - flame shrines/sanctums, mineable materials, obelisks, ancient spires, and Shroud roots.",
                "Nothing is missable - regions, roots and collectibles persist and the world can be revisited freely - so this is a marathon, not a puzzle. The bulk of the time is the per-region \"do X everywhere\" achievements across seven regions (Springlands, Revelwoods, Nomad Highlands, Kindlewastes, Albaneve Summits, Veilwater Basin, plus the early game).",
                "Tip: use the in-game map markers and a community interactive map for the flame shrine, obelisk and spire locations - they are the achievements most likely to leave you one collectible short. Clear each region's Shroud roots as you unlock its flame altars, since roots gate exploration anyway."
            ]
        },
        {
            "heading": "Getting Started & Crafting",
            "body": [
                "The early-game unlock achievements: your first crafted item, first mined terrain, the flame altar that establishes a base, the glider and grappling hook that open up traversal, the upgraded ghost glider, unlocking your first skill, and collecting the full \"guard of the north\" forgotten armor set.",
                "The achievements here: Thus it begins (Craft a simple item.); Leave a mark (Mine terrain for the first time.); A place to call home (Create a flame altar.); Freefall (Craft or obtain a glider.); Shortcut (Craft or obtain a grappling hook.); Winged Victory (Obtain a ghost glider.); Erudite (Unlocked the first skill.); Pieces of the past (Find all forgotten \"guard of the north\" armor pieces.)."
            ]
        },
        {
            "heading": "Bosses & Elixir Wells",
            "body": [
                "The four combat milestones: clearing the first Elixir Well, then defeating its guardian, the Shroud Wyvern, and finally the Dragon.",
                "The achievements here: Well done! (Cleared the first elixir well.); Thundering success (Defeat the guardian of the first elixir well.); Dethroned (Defeat the shroud wyvern.); King of the mountain (Defeat the dragon.)."
            ]
        },
        {
            "heading": "Character Level",
            "body": [
                "The level-milestone achievements at 2, 5, 10, 15, 20, 25, 30, 35, 40 and 45. These come naturally from exploring, crafting and clearing regions; nothing here needs to be farmed deliberately.",
                "The achievements here: Doing something right (Reach level 2.); On the way (Reach level 5.); Things come together (Reach level 10.); Getting a feel for it (Reach level 15.); How far we have come (Reach level 20.); Impressive journey (Reach level 25.); Climbing to new heights (Reach level 30.); Reaching the top (Reach level 35.); Ready for new lands (Reach level 40.); Onto new horizons (Reach level 45.)."
            ]
        },
        {
            "heading": "Region Mastery - Shrines & Spires",
            "body": [
                "Per-region exploration: finding every flame shrine and sanctum (the \"Spark of\" achievements) and reaching the ancient spire (the \"stargazer\" achievements) in the Springlands, Revelwoods, Nomad Highlands, Kindlewastes, Albaneve Summits and Veilwater Basin.",
                "The achievements here: Spark of the Springlands (Find all flame shrines and sanctums in the Springlands.); Spark of the Revelwoods (Find all flame shrines and sanctums in the Revelwoods.); Spark of the Nomad Highlands (Find all flame shrines and sanctums in the Nomad Highlands.); Spark of the Kindlewastes (Find all flame shrines and sanctums in the Kindlewastes.); Spark of the Albaneve Summits (Find all flame shrines and sanctums in the Albaneve Summits.); Spark of the Veilwater Basin (Find all flame shrines and sanctums in the Veilwater Basin.); Springlands stargazer (Reached an ancient spire in the Springlands.); Revelwoods stargazer (Reached the ancient spire in the Revelwoods.); Nomad Highlands stargazer (Reached the ancient spire in the Nomad Highlands.); Kindlewastes stargazer (Reached the ancient spire in the Kindlewastes.); Albaneve Summits stargazer (Reached the ancient spire in the Albaneve Summits.); Veilwater Basin stargazer (Reached the ancient spire in the Veilwater Basin.)."
            ]
        },
        {
            "heading": "Region Mastery - Mining & Obelisks",
            "body": [
                "Per-region collection: mining every valuable material type (the \"Mole of\" achievements) and reading every obelisk (the \"secret keeper\" achievements) in each of the six mapped regions.",
                "The achievements here: Mole of the Springlands (Mine every valuable material in the Springlands.); Mole of the Revelwoods (Mine every valuable material in the Revelwoods.); Mole of the Nomad Highlands (Mine every valuable material in the Nomad Highlands.); Mole of the Kindlewastes (Mine every valuable material in the Kindlewastes.); Mole of the Albaneve Summits (Mine every valuable material in the Albaneve Summits.); Mole of the Veilwater Basin (Mine every valuable material in the Veilwater Basin.); Springlands secret keeper (Read all obelisks in the Springlands.); Revelwoods secret keeper (Read all obelisks in the Revelwoods.); Nomad Highlands secret keeper (Read all obelisks in the Nomad Highlands.); Kindlewastes secret keeper (Read all obelisks in the Kindlewastes.); Albaneve Summits secret keeper (Read all obelisks in the Albaneve Summits.); Veilwater Basin secret keeper (Read all obelisks in the Veilwater Basin.)."
            ]
        },
        {
            "heading": "Region Mastery - Shroud Roots",
            "body": [
                "Clearing every Shroud root in a region (the \"weeding\" achievements): Springlands, Revelwoods, Nomad Highlands, Kindlewastes, Albaneve Summits and Veilwater Basin. Roots must be burned at their heart; a region's map tab tracks how many remain.",
                "The achievements here: Springland weeding (Clear the Springlands of all shroud roots.); Revelwood weeding (Clear the Revelwood of all shroud roots.); Nomad Highlands weeding (Clear the Nomad Highlands from all shroud roots.); Kindlewastes weeding (Clear the Kindlewastes of all shroud roots.); Albaneve Summits weeding (Clear the Albaneve Summits of all shroud roots.); Veilwater Basin weeding (Clear the Veilwater Basin of all shroud roots.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Early game: Thus it begins, Leave a mark, A place to call home, then Freefall and Shortcut once you have the crafting materials, plus Erudite (first skill).",
                "2. Progress region by region in the intended order (Springlands to Veilwater Basin). In each one, as you go: clear its Shroud roots, find its flame shrines/sanctums, read its obelisks, mine its materials, and reach its spire - that is five achievements per region.",
                "3. Fight the bosses as the story presents them: the first Elixir Well and its guardian early, the Shroud Wyvern mid-game, the Dragon in the Albaneve Summits.",
                "4. Mop up: Winged Victory (ghost glider), Pieces of the past (guard of the north set), and any single missing collectible flagged by a region's map tab.",
                "Tip: the \"Mole of\" achievements need every distinct valuable ore/resource node in the region, not a quantity - if one is stuck, check a resource map for the rarer nodes (e.g. region-specific metals and gems) you may have skipped."
            ]
        }
    ]
};
