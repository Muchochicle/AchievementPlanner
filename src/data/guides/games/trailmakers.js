// Trailmakers Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/trailmakers.json), whose 22 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   585420 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "trailmakers-achievement-guide",
    "category": "game",
    "gameSlug": "trailmakers",
    "icon": "🚗",
    "title": "Trailmakers Achievement Guide",
    "summary": "A practical guide to all 22 Steam achievements in Trailmakers - none are hidden. Covers the story and gold-medal achievements, the Race Island and Treasure Island exploration achievements, and the Danger Zone and oddity achievements. None of the achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Trailmakers has 22 Steam achievements and none are hidden. Six cover story progress and gold medals (rebuilding your spaceship, entering the volcano, 15 Power Cores in Stranded in Space, gold on Downhill Rush, Sunny Slide and Cliff Land), ten are Race Island and Treasure Island exploration and stunts (landing on every floating island in one session, hitting the blimp, landing on the lighthouse, bumping the whales, Workshop upload and download, driving over 8 chickens, breaking the sound barrier, all rings of fire, all ball puzzles), and six are Danger Zone and novelty moments (60 seconds airborne with no Power Cores, a Tractor Beam salvage pickup, reaching the top of Danger Zone, hugging a tree, visiting the monument, shooting hoops).",
                "The catalog marks it difficulty 2. Most are exploration or one-session stunt achievements; the gold medals on the time trials are the only real skill checks.",
                "Tip: play the Stranded in Space campaign for the story and Power Core achievements, then take a capable flying build around Race Island and Treasure Island to tick off the location stunts."
            ]
        },
        {
            "heading": "Story & Gold Medals",
            "body": [
                "Rebuilding your spaceship, entering the volcano, finding 15 Power Cores in Stranded in Space, and getting gold on Downhill Rush, Sunny Slide and Cliff Land.",
                "The achievements here: Ready For Takeoff (Rebuild your spaceship); Bring Marshmallows! (Enter the volcano); Power Core Collector (Find 15 Power Cores in Stranded in Space); Gold Rush (Get gold on Downhill Rush); Slide to Win (Get gold on Sunny Slide); To Fly or Not To Fly (Get gold on Cliff Land)."
            ]
        },
        {
            "heading": "Race Island & Treasure Island",
            "body": [
                "Landing on all floating islands above Race Island in one session, crashing into the blimp, landing on the lighthouse, bumping the whales, uploading and downloading a Workshop vehicle, driving over 8 chickens, breaking the sound barrier, flying through all rings of fire, and solving all the ball puzzles - most in a single session.",
                "The achievements here: Island Hopper (Land on all the floating islands above Race Island in one session); Hot Air (Crash into the blimp on Race Island); Best View In Town (Land on the lighthouse on Race Island); Moby Dick (Bump into the whales in Treasure Island); Sharing is Caring (Upload a vehicle to the Workshop); Car Collector (Download and load in a vehicle from the Workshop); Monster! (Drive over 8 chickens on Treasure Island in one session); Sonic Boom (Break the sound barrier); Man in Black (Fly through all the rings of fire in Treasure Island one session); Problem Solver (Complete all the ball puzzles on Treasure Island in one session)."
            ]
        },
        {
            "heading": "Danger Zone & Oddities",
            "body": [
                "Staying airborne 60 seconds in a zero-Power-Core vehicle, picking up Salvage with the Tractor Beam, reaching the top of Danger Zone, hugging the tree on the Northeastern Island, visiting the Treasure Island monument, and shooting hoops on Danger Zone.",
                "The achievements here: Leonardo da Vinci (Stay airborne in a zero Power Core vehicle for 60 seconds); So attractive! (Pick up a piece of Salvage with the Tractor Beam); El Capitan (Reach the top of Danger Zone); Treehugger (Hug the Tree on the Northeastern Island in Treasure Island); Pay your respect (Visit the monument on Treasure Island); 3-Pointer (Shoot hoops on Danger Zone)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the Stranded in Space campaign: rebuild the spaceship, enter the volcano, collect 15 Power Cores.",
                "2. Get gold on the three time trials (Downhill Rush, Sunny Slide, Cliff Land).",
                "3. Build a strong flyer and clear the Race Island stunts (islands, blimp, lighthouse) in one session.",
                "4. Do the Treasure Island set in one session: whales, chickens, rings of fire, ball puzzles, tree, monument.",
                "5. Finish the Danger Zone achievements (top of Danger Zone, hoops) and the Workshop upload/download.",
                "Tip: the 'in one session' achievements reset if you leave the map, so plan a route that hits every target on that island before you exit."
            ]
        }
    ]
};
