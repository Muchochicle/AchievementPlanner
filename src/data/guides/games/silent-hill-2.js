// Silent Hill 2 Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/silent-hill-2.json), whose 43 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   2124490 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 33 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (PowerPyx / Game8 / PlayStationTrophies / TrueAchievements) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "silent-hill-2-achievement-guide",
    "category": "game",
    "gameSlug": "silent-hill-2",
    "icon": "🌫️",
    "title": "Silent Hill 2 Achievement Guide",
    "summary": "A practical guide to all 43 Steam achievements in Silent Hill 2 (33 hidden). Covers James's whole route through the fog and the Otherworld, every boss, all six original endings, the collectibles (memos, Strange Photos, Glimpses of the Past), and the restriction runs (no radio, no ranged kills, under 10 hours). Thirty-three of the achievements are hidden and their unlock conditions are researched from community 100% guides.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Silent Hill 2 (the 2024 Bloober Team remake) has 43 Steam achievements and 33 are hidden. Most of the hidden ones are story markers - reaching Silent Hill, Wood Side and Blue Creek Apartments, Brookhaven Hospital, the Historical Society staircase, the Labyrinth, Toluca Lake and the Lakeview Hotel - and the boss kills: Pyramid Head at Blue Creek, the Flesh Lip, the Abstract Daddy, Eddie, the two Pyramid Heads in the hotel Otherworld, and the final fight. Six more are the classic endings (Leave, Maria, In Water, Rebirth, Dog, UFO), and the rest are secrets and gags: the SH3 reference in Room 106, the pizza in Pete's Bowl-O-Rama, shooting the balloons in Wood Side, interacting with the bread in the hotel kitchen, and a ten-minute swim in Toluca Lake.",
                "The catalog marks it difficulty 3. Nothing is missable in the strict sense because chapter select and New Game Plus let you return for anything, but the Rebirth, Dog and UFO endings are NG+ only, 'Lumberjack' (the chainsaw) only appears in NG+, and 'Archivist' (all 68 memos), 'Pieces Unarranged' (all Strange Photos) and 'Echoes' (all Glimpses of the Past) each want to be completed within a single playthrough. Plan on two playthroughs: a first blind run and one NG+ cleanup run.",
                "Tip: on your NG+ run, combine the restriction achievements - 'Radio Silence' (never use the radio), 'As Close as You Like' (no ranged kills, easiest with the NG+ chainsaw), and 'Faster Than Fog' (finish under 10 hours) can all be earned in the same fast, quiet run."
            ]
        },
        {
            "heading": "Story & Bosses",
            "body": [
                "Trying to leave at the start, reaching Silent Hill, Wood Side and Blue Creek Apartments and Brookhaven Hospital, the Otherworld's first appearance, defeating Pyramid Head at Blue Creek, meeting Maria, the Room 106 secret, the Bowl-O-Rama pizza, the Wood Side balloons, defeating the Flesh Lip, surviving the hospital chase, the long staircase, defeating the Abstract Daddy, finding His room, and killing Eddie.",
                "The achievements here: No Turning Back Now (Try to leave Silent Hill in the Observation Deck area at the start - turn around and follow the road to its end.); Enjoy Your Stay (Reach Silent Hill (story unlock when you obtain the South Vale map).); Nice and Cozy (Reach Wood Side Apartments (automatic on entering).); Let's NOT Party! (Shoot all 11 balloons spelling 'Welcome Home' in Apartment 207 of Wood Side Apartments.); Otherworldly (Enter the Otherworld for the first time (after interacting with the red door in Apartment 201).); Passed (Make your way out of Blue Creek Apartments after defeating Pyramid Head there.); Uncanny (Meet Maria at Rosewater Park.); All Seems in Order (Discover the secret of Room 106 at Jack's Inn - a Silent Hill 3 reference, found by inspecting the damaged wall during the South Vale revisit.); Leftovers (Find the pizza in Pete's Bowl-O-Rama - inspect the open pizza box on a table.); Admitted (Reach Brookhaven Hospital (automatic on entering).); Nightmare Fuel (Defeat the Flesh Lip boss in Brookhaven Hospital.); Alone Again (Survive the Pyramid Head chase sequence in Brookhaven Hospital.); Into the Abyss (Reach the end of the long staircase in the Silent Hill Historical Society.); Unforgivable (Defeat the Abstract Daddy boss in the Labyrinth.); Inner Sanctum (Find His room - enter Pyramid Head's octagonal chamber.); A Human Being (Kill Eddie in the final Labyrinth confrontation.)."
            ]
        },
        {
            "heading": "Toluca Lake, the Hotel & the Final Fight",
            "body": [
                "Spending ten minutes out on Toluca Lake, reaching the Lakeview Hotel and Room 312, interacting with the bread in the hotel kitchen, defeating the two Pyramid Heads in the hotel Otherworld, defeating Her in the final fight, and finding the chainsaw (New Game Plus only).",
                "The achievements here: Scourge of Toluca Lake (Spend 10 minutes out on Toluca Lake - idle on the water after the Eddie boss fight.); Glimmer of Hope (Reach the Lakeview Hotel after rowing across Toluca Lake.); Truly Special (Reach Room 312 in the Lakeview Hotel.); It's Bread (Interact with the bread tray in the kitchen of the Lakeview Hotel's employee section.); Obsolete (Defeat the two Pyramid Heads in the Lakeview Hotel Otherworld.); That Part of Me (Defeat Her - the final boss.); Lumberjack (Find the chainsaw in a log stack near Silent Hill Ranch (New Game Plus only).)."
            ]
        },
        {
            "heading": "Combat Feats & the Six Endings",
            "body": [
                "Fifty stomp finishers, 75 ranged kills, 75 melee kills, trying locked doors 50 times, destroying 50 windows, and reaching each of the six original endings: Leave, Maria, In Water, Rebirth (NG+), Dog (NG+) and UFO (NG+).",
                "The achievements here: Merciless (Finish off 50 enemies with a stomp attack.); No Big Deal (Kill 75 enemies with ranged weapons.); Blunt Force Trauma (Kill 75 enemies with melee weapons.); You Never Know... (Try to open locked doors 50 times.); Shattered (Destroy 50 windows.); Making Peace (Reach the 'Leave' ending.); Vicious Circle (Reach the 'Maria' ending.); Only Way Out (Reach the 'In Water' ending.); Defy Even Death (Reach the 'Rebirth' ending (New Game Plus only - requires four special items).); The Goodest Boi (Reach the 'Dog' ending (New Game Plus only - requires the Dog Key).); Tinfoil Hat (Reach the 'UFO' ending (New Game Plus only - requires using the Blue Gem at four locations).)."
            ]
        },
        {
            "heading": "Playthrough Challenges & Completion",
            "body": [
                "Completing New Game Plus, finishing without the radio, killing at least one enemy with every weapon type in one run, collecting all Strange Photos, finishing under 10 hours, collecting all memos in one playthrough, finishing without any ranged kills, seeing all classic endings, and witnessing every Glimpse of the Past in one playthrough.",
                "The achievements here: I Saw That Town (Complete New Game Plus on any difficulty.); Radio Silence (Complete the game without using the radio.); James of All Trades (Kill at least one enemy with the Wooden Plank, Steel Pipe, Handgun, Shotgun and Rifle in a single playthrough.); Pieces Unarranged (Collect all Strange Photos in a single playthrough.); Faster Than Fog (Finish the game in under 10 hours.); Archivist (Collect all memos in a single playthrough.); As Close as You Like (Finish the game without killing enemies using ranged weapons.); Party Like It's 2001 (See all five classic endings - Leave, Maria, In Water, Rebirth and Dog.); Echoes (Witness every Glimpse of the Past in a single playthrough.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play a blind first run at your own pace, picking up the story and boss achievements naturally and grabbing the secrets (Room 106, the Bowl-O-Rama pizza, the Wood Side balloons).",
                "2. On that first run, focus one collectible set - the Strange Photos, the memos, or the Glimpses of the Past - and finish it before the ending.",
                "3. Take the 'Leave', 'Maria' and 'In Water' endings across your playthroughs by following an ending guide's item and health conditions.",
                "4. Start New Game Plus and grab 'Lumberjack' (the chainsaw), then run 'Radio Silence', 'As Close as You Like' and 'Faster Than Fog' together in one fast, quiet playthrough.",
                "5. Use NG+ runs (or chapter select) for the Rebirth, Dog and UFO endings and any remaining collectibles or combat-feat counters.",
                "Tip: the combat counters ('Merciless', 'No Big Deal', 'Blunt Force Trauma', 'Shattered') accumulate across playthroughs, so there is no need to farm them in one sitting."
            ]
        }
    ]
};
