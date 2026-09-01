// Haiku, the Robot Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/haiku-the-robot.json), whose 40 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1231880 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 1 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (PowerPyx / Game8 / PlayStationTrophies / TrueAchievements) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "haiku-the-robot-achievement-guide",
    "category": "game",
    "gameSlug": "haiku-the-robot",
    "icon": "🤖",
    "title": "Haiku, the Robot Achievement Guide",
    "summary": "A practical guide to all 40 Steam achievements in Haiku, the Robot (1 hidden). None of the achievements are Steam-hidden, though one ('Save The Children') ships no Steam description. Covers the power cell, health and chip collections, the shop buy-outs, the world's NPC side-quests, the three Creators and the Virus, 100% map and game completion, and a no-wrench run.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Haiku, the Robot has 40 Steam achievements. None are marked Steam-hidden, but 'Save The Children' ships no Steam description - it is a Steam Town side-quest (free the mother bot's children trapped in the house behind her, then talk to her again; this also gives the D3 Chip). Everything else is collection (one / half / all Power Cells, health fragments to maximum health, one / half / all Chips), buying out Sonnet's, Echo's and the Reaper's shops, the NPC side-quests (fix the clock, all train stations, help Splunk, reunite Lune and Rondel, listen to all of Lune's poems and Melody's song, interact with every backer tomb), the bosses (free the three Creators, defeat the Virus, find the betrayed Creator), 100%-ing the map and the game, and 'No Manual Repairs' - complete the game without ever picking up the wrench.",
                "The catalog marks it difficulty 4. It is a compact Hollow-Knight-style metroidvania; 100% completion and the 'No Manual Repairs' no-wrench run are the demanding parts, and 'Trepid Explorer' (100% map) requires finding every hidden nook. The story and NPC achievements come from a thorough playthrough.",
                "Tip: plan the no-wrench run ('No Manual Repairs') as a separate, deliberate playthrough - the wrench is your basic melee weapon, so a no-wrench run means clearing the whole game on the sub-weapons alone, and trying to also 100% on that run is far harder than splitting them."
            ]
        },
        {
            "heading": "Upgrades & Shops",
            "body": [
                "Collecting one / half / all Power Cells, three health fragments and maximum health, one / half / all Chips, destroying every map disruptor, buying out Sonnet's, Echo's and the Reaper's shops, and depositing spare parts.",
                "The achievements here: Quatern's Project Initiated (Collect one Power Cell); Quatern's Project In Progress (Collect half the power cells); Quatern's Project Complete (Collect all the power cells); Capsule Fragments (Acquire 3 health fragments); Well-Oiled Machine (Achieve maximum health); Computer Chip (Acquire your first chip); Enhanced System (Acquire half the chips); Upgrades, People - Upgrades (Acquire all the chips); No More Mischief (Destroy all map disruptors); Sold out! (Buy all of Sonnet's items); Bomb-tastic! (Buy all of Echo's items); Scavenger! (Buy all of the Reaper's items); For Safekeeping (Deposit some spare parts)."
            ]
        },
        {
            "heading": "World & NPCs",
            "body": [
                "Fixing the clock, discovering all train stations, talking to Mundo, visiting the Catacombs, seeing Limerick pass, the Verse sacrifice, helping Splunk find purpose, reuniting Lune and Rondel, all of Lune's poems, 575 kills, every backer tomb, Melody's song, and 'Save The Children' (the Steam Town mother-bot side-quest).",
                "The achievements here: Two Minutes To Midnight (Fix the clock); Trainspotter (Discover all the train stations); Mundooooo (Talk to Mundo); The Last Of Humankind (Visit the Catacombs); In Too Deep (See Limerick pass); Balancing Act (Verse sacrifice); Brave Little Toaster (Help Splunk find purpose); Family (Reunite Lune and Rondel); Literate (Listen to all of Lunes poems); Poetic Justice (Kill 575 enemies); The Graveyard Shift (Interact with every backer message/tomb); Finely Tuned (Listen to Melody's song); Save The Children (In Steam Town, free the mother bot's children trapped in the house behind her, then talk to her again (also gives the D3 Chip).)."
            ]
        },
        {
            "heading": "Bosses, Secrets & Completion",
            "body": [
                "Destroying Splunk's house, 100%-ing the map, 100 water-drop hits, the basketball hoop, the mysterious egg, bidding farewell to Rusty, freeing the first, second and third Creators, defeating the Virus, all three Creators, finding the betrayed Creator, the no-wrench clear, and 100%-ing the game.",
                "The achievements here: That Wasn't Nice (Destroy Splunks house); Trepid Explorer (100% the map); Beep - Bop (Get hit by 100 water drops); Two Points! (Jump through the basketball hoop); Evolution (Discover a mysterious egg); Another Adventure (Bid farewell to Rusty); Electron (Free the third Creator); Proton (Free the second Creator); Neutron (Free the first Creator); Symptom (Defeat the Virus); Balanced (Defeat all three Creators); Origins (Find the betrayed Creator); No Manual Repairs (Complete the game without picking up the wrench); Completionist (100% the game)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through the story, freeing the three Creators and defeating the Virus.",
                "2. Do the NPC side-quests (the clock, train stations, Splunk, Lune and Rondel, Save The Children) as you explore.",
                "3. Collect every Power Cell, health fragment and Chip, and buy out all three shops.",
                "4. 100% the map and the game.",
                "5. Do a separate no-wrench run for 'No Manual Repairs'.",
                "Tip: 'Save The Children' has no Steam description and is easy to miss - it is in Steam Town, up and to the right, at a mother bot standing outside a house; go in, free every child, then return to her."
            ]
        }
    ]
};
