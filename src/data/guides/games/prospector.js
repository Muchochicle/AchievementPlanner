// Prospector Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/prospector.json), whose 35 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1928080 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "prospector-achievement-guide",
    "category": "game",
    "gameSlug": "prospector",
    "icon": "🪐",
    "title": "Prospector Achievement Guide",
    "summary": "A practical guide to all 35 Steam achievements in Prospector - none are hidden. Covers the building and systems achievements, and the contracts, aliens and feat achievements. None of the achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Prospector has 35 Steam achievements and none are hidden. Fourteen are building and progression (repairing O.P.H.E.L.I.A, a jetpack, a Moth Incubator, a Rune Gate, a logistics bot, 100 Kinetic Suit charges, 20 wind turbines, shipping your first order, and landing on each of the four worlds), and twenty-one are the five planet contracts, alien content (the Jelly Momma, freeing the alien prisoner, the Rune Gate boons, all alien boons), and one-off feats (a Tesla Sentry kill, a Cryo Cannon kill, drowning, domesticating an animal, an Agroforge harvest, a hovercraft mod).",
                "The catalog marks it difficulty 3. It is a fairly compact survival-automation game; completing all five planet contracts and acquiring every alien boon are the main goals.",
                "Tip: work through the story and all five planet contracts, building each named structure and system as you go, and mop up the alien and one-off feats."
            ]
        },
        {
            "heading": "Building & Systems",
            "body": [
                "Repairing the O.P.H.E.L.I.A unit, a jetpack, a Moth Incubator, finding a Rune Gate, a logistics bot, 100 Kinetic Suit charges, sheltering from a solar storm, 20 wind turbines, having Ophelia carry salvage, shipping your first order, and landing on Tojo c-2A1, Volaris Prime, Praetoria and the abandoned asteroid mine.",
                "The achievements here: Friend in need (Repair O.P.H.E.L.I.A unit); Rocket man (Acquire a jetpack); Moth Whisperer (Build a Moth Incubator ); Alien Presence (Find a Rune Gate ); Machina Maestro (Build your first logistics bot); Daily step count (Charge your suit 100 times with the Kinetic Suit mod); Safe from the storm  (Hide in Ophelia or your Habitat during a solar storm); Wind farm (Build 20 wind turbines ); Pack mule (Ask Ophelia to carry some heavy salvage); To the moon! (Ship your first order); Purple marble (Touchdown on Tojo c-2A1); Blue marble (Touchdown on Volaris Prime); Yellow marble (Touchdown on Praetoria); Broken marble (Touchdown on abandoned asteroid mine)."
            ]
        },
        {
            "heading": "Contracts, Aliens & Feats",
            "body": [
                "Completing the Volaris Prime, Chrono's Reach, Praetoria, Icaron and Starborne Collective contracts, defeating the Jelly Momma, freeing the alien prisoner, repairing the Volaris Prime mining facilities, a Stellaris Array on every planet, joining the Starborne Collective, max shipping rank, a Tesla Sentry kill, an alien-collectable sacrifice, re-repairing Ophelia, drowning, acquiring an alien collectable, all alien boons, an Agroforge harvest, a Cryo Cannon kill, a hovercraft mod, and domesticating an animal.",
                "The achievements here: Mothballs required (Complete contract for Volaris Prime); Family business (Complete contract for Chrono's Reach); Beastmaster (Complete contract for Praetoria); Lesser evil (Complete contract for Icaron); Time for a star trip (Complete contract for Starborne Collective); Danger, Will Robinson! (Defeat the Jelly Momma); Prison break (Free the alien prisoner); Human touch (Repair the automated mining facilities on Volaris Prime); Contact (Place a Stellaris Array on every planet); New beginnings (Join the Starborne Collective); Shipping master (Achieve max rank shipping); Shocking... (Attack a hostile with a Tesla Sentry); The old gods are watching.... (Sacrifice alien collectables for a boon); BEST friends forever! (Repair O.P.H.E.L.I.A. after she is damaged); Like a stone (Drown in a water hazard); Archeologist (Acquire an alien collectable); Alien mastery (Acquire all alien boons); Shreaded  (Use Agroforge to harvest organics); Mr. Freeze (Kill a hostile with the Cryo Cannon); Big sky theory (Acquire hovercraft mod); Cowpoke (Domesticate a wild animal)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Repair O.P.H.E.L.I.A, ship your first order, and build the early systems (jetpack, wind turbines, Moth Incubator, logistics bot).",
                "2. Land on all four worlds and complete all five planet contracts.",
                "3. Do the alien content: find the Rune Gate, free the prisoner, defeat the Jelly Momma, and acquire every alien boon.",
                "4. Place a Stellaris Array on every planet, reach max shipping rank, and join the Starborne Collective.",
                "5. Mop up the one-off feats (Tesla Sentry, Cryo Cannon, Agroforge, hovercraft, domesticate an animal, and drowning).",
                "Tip: 'Alien mastery' (all alien boons) requires repeatedly sacrificing alien collectables at the Rune Gate - hoard collectables from every planet before spending them so you don't run short."
            ]
        }
    ]
};
