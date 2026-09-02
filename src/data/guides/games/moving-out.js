// Moving Out Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/moving-out.json), whose 38 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   996770 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 12 achievement(s) are Steam-hidden or ship no Steam
//   description; their description here is researched from community
//   100% guides and is a curatorial summary. Every other description is
//   Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "moving-out-achievement-guide",
    "category": "game",
    "gameSlug": "moving-out",
    "icon": "📦",
    "title": "Moving Out Achievement Guide",
    "summary": "A practical guide to all 38 Steam achievements in Moving Out (12 hidden). All 12 hidden achievements belong to the Movers in Paradise DLC - its stages, Gold medals, bonus objectives, cassette-tape collectibles and island one-offs. Everything else - the base-game completions, Gold-medal milestones, and the many slapstick feats - carries Steam's own text.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Moving Out has 38 Steam achievements, 12 of them hidden. It is a slapstick co-op removals game: grab furniture, throw it through windows, and cram it into the truck before the timer runs out. The visible achievements cover completing all Story and Arcade levels, every level objective, the Gold-medal milestones (10, 20, all levels), the boss levels ('The Chase', the Rat King), and a long list of feats - sit on every toilet, smash 100 windows, throw 500 items, deliver 1,337 items, deliver every pet, get run over by 125 cars, deliver the hidden console from each level.",
                "All 12 hidden achievements are the Movers in Paradise DLC: completing its stages and every bonus objective, Gold on every level, the 13 hidden cassette tapes, and island one-offs (destroy 50 sandcastles, ride every zipline, the pufferfish hot tub, pop the world-map balloons, ride a scuba tank, flip a car twice).",
                "The catalog marks it difficulty 2 and single-playthrough. Nothing is missable - every level is replayable for medals, objectives and the collectible/feat achievements."
            ]
        },
        {
            "heading": "Story & Medals",
            "body": [
                "Completing all Story and Arcade levels, every level objective, the Gold-medal milestones and all-Gold, the boss levels, and the memory levels.",
                "The achievements here: 111% Effort (Achieve 111% in the game); Certified F.A.R.T (Complete all Story levels.); Winners Don't Move Rugs (Complete all Arcade levels); Objectives Complete! (Complete all level objectives in every level); Masters in Moving (Complete all levels with Gold medals); PHD In Moving (Complete 20 story levels with Gold medals); Moving On Up (Complete 10 story levels with Gold medals); Choo Choo (Complete \"The Chase\"); Who's the Boss? (Defeat the Rat King); Remember The Time... (Complete all memory levels); Golden Mover (Get a Gold Medal in one level)."
            ]
        },
        {
            "heading": "Feats & Secrets",
            "body": [
                "The slapstick feats - toilets, 100 windows, 500 throws, 1,337 deliveries, every pet, 125 car hits, hidden consoles, mailboxes, the basketball hoop, the haunted-level no-slap run - and the truck-smashed hidden letterbox.",
                "The achievements here: Where we're going we don't need thrones (Sit on every toilet in the game); Massive Window Attack (Smash 100 windows); An Eye for the Details (Complete all bonus objectives in one level); Rain, hail or shine. (Slap every mailbox in the story levels); Go Long! (Throw 500 items); Nick of Time (Beat a level in story mode with under 5 seconds left on the clock); Minute Mover (Beat a level in under a minute); Quantity over quality (Deliver 1337 items); The Friendly Ghosts (Complete all haunted levels without slapping any ghosts); The Bird (Shoot a basketball hoop); That's Not Landfill! (Deliver the hidden console from each story level); Animal Lover (Deliver every pet); Look left, then right... (Get run over by 125 cars); Totally Certified (Complete Mandatory Training); You Don't Got Mail! (Smash the hidden letterbox with the truck)."
            ]
        },
        {
            "heading": "Movers in Paradise DLC",
            "body": [
                "The Movers in Paradise expansion: its stages and bonus objectives, all-Gold, the 13 cassette tapes, and the island one-offs.",
                "The achievements here: Recertified (Movers in Paradise DLC: complete 'Welcome to Packmore Resort'.); Who lives here? (Movers in Paradise DLC: find out who lives on Packmore Island.); Where to next? (Movers in Paradise DLC: complete all 13 Movers in Paradise stages.); Golden Paradise (Movers in Paradise DLC: earn a Gold medal on every Movers in Paradise level.); Objectives Complete II: The Completionist (Movers in Paradise DLC: complete all 39 bonus objectives across the 13 levels.); Did I do that? (Movers in Paradise DLC: hit a car on the overworld map until it flips and smokes, then hit it again.); Hot Tub Reward Machine (Movers in Paradise DLC: put the pufferfish in the hot tub and deliver both.); SMASH! (Movers in Paradise DLC: destroy 50 sandcastles.); Zip It Good (Movers in Paradise DLC: ride all 8 ziplines on Packmore Island.); Not Landfill 2: Packmore Island's Revenge (Movers in Paradise DLC: find and deliver all 13 hidden cassette tapes.); Oh the humanity (Movers in Paradise DLC: explode all the hot air balloons on the Packmore Island map with geyser launches.); Weeeeeeeeeeeeee! (Movers in Paradise DLC: break open a scuba tank and ride it as it shoots off.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through all Story levels, then the Arcade levels, then the boss and memory levels for the completion achievements.",
                "2. Replay levels for Gold medals - hit 10, then 20, then every level - and complete every level objective and bonus objective.",
                "3. Farm the base-game feats on any convenient level: 100 windows, 500 throws, 1,337 deliveries, every pet, the hidden console in each level, 125 car hits.",
                "4. Play the Movers in Paradise DLC through for its stages and story, then all-Gold and all bonus objectives, and collect the 13 cassette tapes.",
                "5. Mop up the island one-offs - 50 sandcastles, all 8 ziplines, the pufferfish hot tub, the world-map balloons, the scuba ride, and the double car flip.",
                "Tip: 'get run over by 125 cars' and 'deliver 1,337 items' are pure grind - park a second controller/player on a car-heavy overworld tile for the former while the active player farms deliveries on a short Arcade level for the latter, and both counters finish in one sitting."
            ]
        }
    ]
};
