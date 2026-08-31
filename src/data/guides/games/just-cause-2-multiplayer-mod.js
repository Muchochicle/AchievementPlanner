// Just Cause 2: Multiplayer Mod Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/just-cause-2-multiplayer-mod.json), whose 20 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   259080 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "just-cause-2-multiplayer-mod-achievement-guide",
    "category": "game",
    "gameSlug": "just-cause-2-multiplayer-mod",
    "icon": "💥",
    "title": "Just Cause 2: Multiplayer Mod Achievement Guide",
    "summary": "A practical guide to all 20 Steam achievements in Just Cause 2: Multiplayer Mod - none are hidden. Covers the playtime and social achievements, the combat achievements, and the exploration and stunt achievements. None of the achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Just Cause 2: Multiplayer Mod has 20 Steam achievements and none are hidden. Four are playtime milestones (an hour, a day, a week, a month), a few are social (20 players at the Mile High Club, 5 parachuting together, 5 friends on one server), and the rest are combat and stunt feats - 1,000 player kills, kills at specific landmarks (offshore rigs, the power plant), the 'stand on a plane' feats, a 10 km taxi run with 3 passengers, and being on a server with a JC2-MP developer.",
                "The catalog marks it a single playthrough - everything is cumulative on populated servers, so the only real time sink is 'Chaos Immigrant' (a month of play time) and the group achievements that need coordinated players. Nothing is missable.",
                "Tip: do the group achievements (Mile High Club, Sky Cause, Hell on Wheels, Stranded) with a friendly full server or a coordinated group - they need multiple players in one place at one time, which is hard to luck into."
            ]
        },
        {
            "heading": "Playtime & Social",
            "body": [
                "Playing for an hour, a day, a week and a month, visiting the Mile High Club with 20 other players, parachuting with 5 other players at once, and playing with 5 friends on the same server.",
                "The achievements here: Incendiary Sightseer (Play for an hour); Indiscreet Infiltrator (Play for a day); Wilful Wanderer (Play for a week); Chaos Immigrant (Play for a month); Mile High Club (Visit the Mile High Club with 20 other players); Sky Cause (Parachute with 5 other players at the same time); Socialite (Play with 5 friends on the same server)."
            ]
        },
        {
            "heading": "Combat",
            "body": [
                "1,000 player kills by any means, reaching the upper sky limit in a plane, being on a server with a JC2-MP developer, killing a JC2-MP team member (or anyone with that achievement), cruising with four other players in a gun-mounted MV880, 100 kills at any offshore rig, and 10 kills at Awan Sendawan Power Plant.",
                "The achievements here: Firestarter (Kill 1,000 players by any means possible); I Want To Break Free (Reach the upper limit of the sky in a plane); Mom, Get The Camera (Be on the same server as a JC2-MP developer); Only Human (Kill any member of the JC2-MP team, or anyone with this achievement); Hell on Wheels (Cruise around with four other players in a MV880 with a mounted gun); Oil for Blood (Kill 100 players at any offshore rig); Power Surge (Kill 10 players at Awan Sendawan Power Plant)."
            ]
        },
        {
            "heading": "Exploration & Stunts",
            "body": [
                "Meeting 5 other players at Hantu Island, standing on a plane in flight for a minute, a 10 km taxi run with 3 passengers, killing five players standing on a moving plane, connecting to a server for the first time, and visiting the undiscovered settlements on the PDA map.",
                "The achievements here: Stranded (Meet 5 other players at Hantu Island); Careful Down There (Stand on top of a plane in flight for a minute); Taxi Service (Drive a taxi cab with 3 passengers for 10km in a single trip); Stuntshooter (Kill five players who are standing on top of a moving plane); Welcome to Panau (Connect to a server for the first time); Cartographer (Visit the undiscovered settlements on the PDA map)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Connect to a busy server and start playing toward the hour / day / week / month milestones.",
                "2. Grind the 1,000-kill and landmark-kill achievements in the free-for-all servers.",
                "3. Coordinate a group for the multi-player achievements (Mile High Club, Sky Cause, Hell on Wheels, Stranded).",
                "4. Do the plane-stunt feats (stand on a plane for a minute, the stunt-shooter kills).",
                "5. Fly a taxi with 3 passengers for 10 km, and visit the PDA-map settlements for 'Cartographer'.",
                "Tip: 'Mom, Get The Camera' and 'Only Human' just need a developer (or anyone who already has the achievement) on your server - check community events and the busiest servers."
            ]
        }
    ]
};
