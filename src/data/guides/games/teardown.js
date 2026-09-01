// Teardown Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/teardown.json), whose 27 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1167630 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 8 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (PowerPyx / Game8 / PlayStationTrophies / TrueAchievements) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "teardown-achievement-guide",
    "category": "game",
    "gameSlug": "teardown",
    "icon": "🧱",
    "title": "Teardown Achievement Guide",
    "summary": "A practical guide to all 27 Steam achievements in Teardown (8 hidden). Covers the campaign story and its heist restriction challenges, the voxel-destruction and valuables grinds, and completing the game with all optional targets. Eight of the achievements are hidden - map-specific easter eggs and challenge conditions - and their conditions are researched from community 100% guides.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Teardown has 27 Steam achievements and 8 are hidden. The hidden eight are 'Visit the developers' (watch the full developer credits from the main menu), 'Couch potato' (destroy the home-hub treadmill 10 times, restarting between each), 'Drive for treasure' (on Muratori Beach, open the submerged shipping container and get in the car - unavailable once you finish 'Alarm system'), 'Paintjob' (find the hidden cave with a boat on the Quilez Security map and fully spray it), 'McFly' (reach 88 mph in a vehicle), 'I was on a boat' (sink the largest luxury yacht at the Marina in Sandbox), 'Meticulous planner' (take a very long time in a mission before acting) and 'Speedrunner' (complete a mission very fast). Everything visible is the story beats (reach part 2, travel to Muratori, complete the game, complete it with all optional targets), the restriction challenges (complete specific missions without tools / vehicles / getting wet / getting spotted / getting hit), and the grinds (destroy 1M / 10M / 100M voxels, find 50 / 100 / 200 valuables).",
                "The catalog marks it difficulty 4. Most of it comes from a normal campaign playthrough plus a sandbox session; the restriction challenges are the skill part, and 'Drive for treasure' is missable - do it before completing the 'Alarm system' mission.",
                "Tip: get 'Drive for treasure' as early as possible - the submerged container on Muratori Beach becomes permanently inaccessible once you finish the 'Alarm system' mission, so it is the one achievement here you can lock yourself out of."
            ]
        },
        {
            "heading": "Sandbox & Secrets",
            "body": [
                "Watching the developer credits, destroying 1,000,000 voxels, the treadmill gag, full score on skeetmaster 10 times, finding 100 valuables, the sunken car on Muratori Beach, painting the hidden boat on Quilez Security, reaching 100m altitude, 2 seconds of car airtime, 88 mph ('McFly') and sinking the Marina yacht.",
                "The achievements here: Visit the developers (Open the 'Developers' credits from the main menu and watch them all the way through (about 3 minutes).); Whoops (Destroy 1 000 000 voxels.); Couch potato (Destroy the treadmill in your home hub's gym 10 times (break it, restart the level, repeat).); Sharpshooter (Get full score on skeetmaster 10 times.); Average looter (Find 100 valuables.); Drive for treasure (On Muratori Beach (the map before the 'Alarm system' mission), open the submerged shipping container and get into the car inside - missable once 'Alarm system' is complete.); Paintjob (On the Quilez Security map, find the hidden cave containing a boat and spray-paint the boat completely.); Above and beyond (Reach an altitude of 100m.); Liftoff (Get airtime of 2 seconds in a car.); McFly (Reach 88 mph in a vehicle (easiest with rocket boosters on a long straight, e.g. the Villa Gordon racetrack).); I was on a boat (In Sandbox mode at the Marina, completely sink the largest luxury yacht (holes in the hull or heavy explosives).)."
            ]
        },
        {
            "heading": "Story & Restriction Challenges",
            "body": [
                "Completing Flooding without getting wet, Making space without tools, An assortment of dishes without being hit by the chopper, Ornamental ordeal unseen, The Chase without a vehicle, reaching part 2, travelling to Muratori, completing the game (and with all optional targets), a no-tools mission, and the 'Meticulous planner' and 'Speedrunner' hidden challenges.",
                "The achievements here: The floor is water (Complete Flooding without getting wet.); Where's my hammer? (Complete Making space without using any tools.); Swiss cheese (Complete An assortment of dishes without getting hit by the chopper.); Big brother (Complete Ornamental ordeal without getting seen by the robots.); Runner up (Complete The Chase without using any vehicles.); Summer is over (Reach part 2.); Tourist (Travel to Muratori.); Beat it (Complete the game.); Completionist (Complete the game with all optional targets.); Bare bones (Complete a mission without using any tools.); Meticulous planner (Spend a very long time in a mission before triggering anything ('Meticulous planner').); Speedrunner (Complete a mission very quickly - the first mission, 'The Old Building Problem', is easiest, trivial with the Rocket Launcher.)."
            ]
        },
        {
            "heading": "Grinds",
            "body": [
                "Destroying 10,000,000 and 100,000,000 voxels, and finding 50 and 200 valuables.",
                "The achievements here: Wasn't me (Destroy 10 000 000 voxels.); Now what (Destroy 100 000 000 voxels.); I took a thing (Find 50 valuables.); True looter (Find 200 valuables.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Get 'Drive for treasure' on Muratori Beach before finishing the 'Alarm system' mission.",
                "2. Play the campaign to the end, taking the restriction challenges on the relevant missions.",
                "3. Complete the game with all optional targets for 'Completionist'.",
                "4. In Sandbox, do the map-specific secrets (developer credits, treadmill, paint the boat, sink the yacht, McFly, 100m altitude).",
                "5. Grind the voxel-destruction and valuables counts.",
                "Tip: 'Meticulous planner' and 'Speedrunner' are opposites - do the slow one on a mission with alarm boxes by just waiting around before acting, and the fast one on 'The Old Building Problem' with the Rocket Launcher."
            ]
        }
    ]
};
