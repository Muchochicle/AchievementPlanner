// Sonic Adventure DX Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/sonic-adventure-dx.json), whose 15 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   71250 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "sonic-adventure-dx-achievement-guide",
    "category": "game",
    "gameSlug": "sonic-adventure-dx",
    "icon": "🧍",
    "title": "Sonic Adventure DX Achievement Guide",
    "summary": "A practical guide to all 15 Steam achievements in Sonic Adventure DX - none are hidden. Covers the character-story achievements and the emblem and mission-completion achievements. None of the achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Sonic Adventure DX has 15 Steam achievements and none are hidden. Seven are for clearing each character's story (Sonic, Tails, Knuckles, Amy, E-102, Big) and all of them (Super Sonic), and the other eight are the collectible and challenge goals - Level A on every Action Stage, all Sub Game / Chao Race / Adventure Field emblems, all 130 emblems (twice - once, then again as 'Metal Sonic'), Level A on every stage as Metal Sonic, and clearing all 60 Missions.",
                "The catalog marks it difficulty 4 - Level A on every Action Stage (and again as Metal Sonic), all 130 emblems, and the 60 Missions are a serious completion grind on this port's control quirks. Nothing is missable: stages, missions and emblems can all be replayed.",
                "Tip: unlock Metal Sonic first (get all 130 emblems once), then do the 'Level A as Metal Sonic' pass - Metal Sonic uses Sonic's stage set, so it's the same 10 stages a second time."
            ]
        },
        {
            "heading": "Character Stories",
            "body": [
                "Becoming friends with Tails, Knuckles, Amy, E-102 and Big, clearing the Sonic story, and clearing all six character stories ('Super Sonic').",
                "The achievements here: Miles \"Tails\" Prower (Become friends with Tails.); Knuckles the Echidna (Become friends with Knuckles.); Amy Rose (Become friends with Amy.); E-102 \"γ\" (Become friends with E-102.); Big the Cat (Become friends with Big.); Sonic the Hedgehog (Clear the Sonic story.); Super Sonic (Clear all characters stories.)."
            ]
        },
        {
            "heading": "Emblems & Missions",
            "body": [
                "Level A on every Action Stage, all Sub Game emblems, all Chao Race emblems, all Adventure Field emblems, all 130 emblems, all 130 emblems again to unlock Metal Sonic, Level A on every Action Stage as Metal Sonic, and clearing all 60 Missions.",
                "The achievements here: The Fastest & Strongest (Get Level A on all the Action Stages.); Sub Game Master (Get all Emblems of the Sub Games.); Chao's Best Friend (Get all Emblems of the Chao Race.); The Adventurer (Get all Emblems in the Adventure Field.); The Perfect Adventurer (Get all 130 Emblems.); Metal Sonic (Get all 130 Emblems by playing Sonic Adventure DX.); Metal Sonic Master (Get Level A on all the Action Stages by using Metal Sonic.); Mission All Accomplished (Clear all 60 missions.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Clear each of the six character stories, then the game for 'Super Sonic'.",
                "2. Collect the Sub Game, Chao Race and Adventure Field emblems.",
                "3. Get Level A on every Action Stage across the characters.",
                "4. Reach all 130 emblems to unlock Metal Sonic, then do a Level-A pass as Metal Sonic.",
                "5. Clear all 60 Missions.",
                "Tip: the 60 Missions and the emblems overlap heavily - do the Missions while emblem-hunting, since many Missions are 'get to X' or 'collect Y' on stages you're already grinding for Level A."
            ]
        }
    ]
};
