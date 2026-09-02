// Fobia - St. Dinfna Hotel Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/fobia-st-dinfna-hotel.json), whose 28 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1298140 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 5 achievement(s) are Steam-hidden or ship no Steam
//   description; their description here is researched from community
//   100% guides and is a curatorial summary. Every other description is
//   Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "fobia-st-dinfna-hotel-achievement-guide",
    "category": "game",
    "gameSlug": "fobia-st-dinfna-hotel",
    "icon": "🏨",
    "title": "Fobia - St. Dinfna Hotel Achievement Guide",
    "summary": "A practical guide to all 28 Steam achievements in Fobia - St. Dinfna Hotel (5 hidden). The five hidden achievements are three boss kills (the Piano Monster, the Spider Mother, the Red Light) and surviving the Forest and Underground sections. Everything else - the story sections, the puzzles and collectibles, weapon upgrades, and the three-clears and no-damage challenges - carries Steam's own text.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Fobia - St. Dinfna Hotel has 28 Steam achievements, 5 of them hidden. Journalist Roberto investigates the St. Dinfna Hotel with a camera that shows the building in two time periods at once. The visible achievements cover finishing the game (and finishing it three times, and without taking damage), surviving the Hotel, the item and puzzle work (combine items, open the storage chest, the articulated stairs, the chess puzzle, assembling the gears), the collectibles (all survivor documents, all toy rabbits, all Memories), weapon upgrades, and the camera/flashlight endurance achievements.",
                "The 5 hidden achievements are three boss kills - the Piano Monster, the Spider Mother, and the Red Light (Aquiles) - and surviving the Forest and Underground sections.",
                "The catalog marks it difficulty 3 and multiple playthroughs - 'VIP Client' needs three clears and 'Invincible' needs a no-damage run, which is by far the hardest achievement."
            ]
        },
        {
            "heading": "Progression & Bosses",
            "body": [
                "Finishing the game, surviving the Hotel, the three hidden boss kills (Piano Monster, Spider Mother, Red Light), and surviving the Forest and Underground.",
                "The achievements here: Starter (Finish the game); Pianist (Defeat the Piano Monster boss.); Arachnophobia (Defeat the Spider Mother boss.); Violator (Defeat the Red Light (Aquiles) boss.); Check-out (Survive the Hotel); Boy Scout (Survive the Forest section.); Miner (Survive the Underground section.)."
            ]
        },
        {
            "heading": "Exploration & Puzzles",
            "body": [
                "All survivor documents, the articulated stairs, all toy rabbits, the not-a-bug bug, the drawers secret, the chess puzzle, the three gears, Jonisvaldo, and all Memories.",
                "The achievements here: Natural born journalist (Collect all documents from the survivors); Articulated (Open all articulated stairs); Holy Grail (Discover all the toy rabbits throughout the environments); Bug awareness (Find the bug that is not a bug); Anderson (Yes, they're drawers... But not just drawers.); Grandmaster (Solve the chess puzzle); Mechanic (Assemble the 3 gears); Jonisvaldo (Just that, find Jonisvaldo); Collector (Find all the Memories)."
            ]
        },
        {
            "heading": "Habits & Challenges",
            "body": [
                "Discarding and combining items, saving, the storage chest, the night-vision-camera and flashlight endurance, 10 kills, the weapon upgrades, three clears, and the no-damage run.",
                "The achievements here: Detached (Discard items 5 times); Improvisation (Combine 4 items); Cautious (Save the game 3 times); Accumulator (Open the storage chest); Pulsatrix (Use the night vision camera for 15 minutes in a single game); Nicthophobia (Use the flashlight for 15 minutes in a single game); Executioner (Kill 10 enemies); Armed and dangerous (Upgrade one weapon to max level); Adventurer (Collect 50 upgrade items); Killer (Upgrade all weapons to max level); VIP Client (Finish the game 3 times); Invincible (Finish the game without taking damage)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through once on a normal difficulty, doing every puzzle (chess, gears, articulated stairs) and picking up documents, toy rabbits and Memories as you go.",
                "2. Fight the bosses honestly for the three hidden kills, and take the Forest and Underground sections carefully for their survival achievements.",
                "3. Upgrade one weapon to max, then all weapons across your runs, and let the camera/flashlight endurance and kill counters build.",
                "4. Do repeat clears toward 'VIP Client' (three total), keeping saves so you do not have to hunt collectibles again.",
                "5. On a confident final run, go for 'Invincible' - the whole game with no damage taken.",
                "Tip: the no-damage run is the whole platinum - do it last, on your third clear, with a full upgraded arsenal and every puzzle solution memorised, and abuse the dual-timeline camera to see and avoid enemies before they can reach you."
            ]
        }
    ]
};
