// The Precinct Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/the-precinct.json), whose 39 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   490110 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 6 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (PowerPyx / Game8 / PlayStationTrophies / TrueAchievements) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "the-precinct-achievement-guide",
    "category": "game",
    "gameSlug": "the-precinct",
    "icon": "🚓",
    "title": "The Precinct Achievement Guide",
    "summary": "A practical guide to all 39 Steam achievements in The Precinct (6 hidden). Covers the main story and its three gang takedowns, the everyday patrol duties (tickets, bookings, arrests, callouts), player rank and upgrades, the artifact and rare-vehicle collections, the time trials and street races, and a handful of joke achievements. Six of the achievements are hidden - all story progression - and their conditions are researched from community 100% guides.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "The Precinct has 39 Steam achievements and 6 are hidden. The hidden six are the story beats: completing your first shift, taking down the August Gang, the Crimson Serpents and the Jawheads, being saved by Kelly from Warehouse 6 near the end, and completing the main story. Everything visible is the sandbox police work - parking tickets (3, 50, and 10 in one shift), 30 bookings, 100 arrests, 50 callouts, 10,000 XP in a shift - plus reaching maximum police rank, unlocking upgrades, recovering every artifact, commandeering every vehicle type, the time trials and street races, and jokes like flushing every toilet in the precinct and parking in the Chief's space.",
                "The catalog marks it difficulty 3. Nothing is missable - it is an open sandbox where you can replay shifts freely - and the main story is short. The grind achievements (100 arrests, 50 callouts) and the gold medals in every time trial and street race are the longest part; 'On Top Form' (first on the shift scoreboard) needs a clean, efficient shift.",
                "Tip: chase the everyday-duty achievements (tickets, bookings, callouts) during the story shifts rather than in separate sessions - you are patrolling Averno City anyway, so writing tickets and responding to callouts en route costs you nothing."
            ]
        },
        {
            "heading": "Story & Gangs",
            "body": [
                "Completing your first shift, submitting 5 pieces of evidence against gangs, taking down the August Gang, the Crimson Serpents and the Jawheads, being saved by Kelly from Warehouse 6, and completing the main story.",
                "The achievements here: Thrown in the Deep End (Complete your first shift on patrol.); Cleaning the Streets (Take down the August Gang (their storyline becomes a priority on your third day).); Building a Case (Submit 5 pieces of evidence against gangs.); Big Trouble in Chinatown (Take down the Crimson Serpents gang and complete their storyline.); Unlucky, Punk (Take down the Jawheads gang and complete their storyline.); Partner in Law (Reach the story beat where Kelly saves you from Warehouse 6 (unlocks automatically near the end of the main story).); The Secrets of the ACPD (Complete the main story.)."
            ]
        },
        {
            "heading": "Patrol Duties & Progression",
            "body": [
                "Parking tickets (3, 50, and 10 in one shift), 30 bookings, 100 arrests, two suspects from different crimes in your car at once, a 30-second sprint, unlocking a player upgrade and every upgrade in a category, the first and maximum police rank, the first and all artifacts, commandeering a garbage truck and every vehicle type, and 6 bookings in a single shift.",
                "The achievements here: Ruined Their Day (Issue 3 valid parking violation tickets.); The Most Hated Person in Averno City (Issue 50 valid parking violation tickets.); Fine Work (Issue 10 valid parking violation tickets in one shift.); Book 'Em, Cordell (Book 30 suspects.); There's Gonna Be a Lot of Paperwork (Arrest 100 suspects.); What Are You in For? (Have two suspects from different crimes in your police car at the same time.); Track Star (Sprint for 30 seconds without stopping.); Self Improvement (Unlock a Player Upgrade.); Maxed Out (Unlock every Player Upgrade in a category.); Making Your Mark (Achieve the rank of Police Officer 1.); A Promising Career (Reach the maximum Police Rank.); What's in the Box? (Recover an artifact.); A Sharp Mind (Recover every artifact.); Taking Out the Trash (Commandeer a Garbage Truck.); We'll Pay for the Damage (Commandeer every type of vehicle.); We're Gonna Need a Bigger Holding Cell (Book 6 criminals in one shift.)."
            ]
        },
        {
            "heading": "Challenges, Races & Secrets",
            "body": [
                "Vehicle jumps (5 and all), 10,000 XP in a shift, reading every plaque, 20 helicopter-assisted arrests, 50 completed callouts, the time trials and their gold medals, first place in the street races, catching one suspect with three different support options, flushing every toilet in the precinct, parking in the Chief's space, discovering all rare vehicles, and topping the shift scoreboard.",
                "The achievements here: Is It a Bird? (Complete 5 vehicle jumps.); No, It's the Law (Complete every vehicle jump.); Employee of the Day (Earn 10,000 XP in a single shift.); Historian (Read every Plaque.); I See Everything (Help ground officers arrest 20 suspects while you're in the helicopter.); Radio Responder (Respond to and complete 50 callouts during your shifts.); Ready for the Real Thing (Complete a time trial.); Pedal to the Metal (Get a gold medal in a time trial.); Fast Responder (Get a gold medal in every time trial.); Coming in Clutch (Finish in 1st place in a Street Race.); I'm Fast, I'm Very Fast (Finish in 1st place in all Street Races.); Nowhere to hide (Use three different support options to catch a single suspect.); Clean Slate (Flush every toilet in The Precinct.); Career Limiting Move (Park in the Chief's Space.); Hidden in the Hood (Discover and drive all the rare vehicles.); On Top Form (Achieve first place on the Shift scoreboard.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the main story shifts, taking down the August Gang, the Crimson Serpents and the Jawheads.",
                "2. Write tickets, book suspects and answer callouts during those shifts for the duty achievements.",
                "3. Push player rank to maximum and unlock every upgrade in a category.",
                "4. Collect every artifact and discover all the rare vehicles.",
                "5. Gold-medal every time trial and win every street race, and mop up the joke achievements.",
                "Tip: 'Clean Slate' (flush every toilet) and 'Career Limiting Move' (park in the Chief's space) are easy to forget - do them on your first visit to the precinct building so they are off the list."
            ]
        }
    ]
};
