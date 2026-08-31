// Dishonored 2 Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/dishonored-2.json), whose 50 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   403640 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 9 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (TrueAchievements / Steam Community / game wikis) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "dishonored-2-achievement-guide",
    "category": "game",
    "gameSlug": "dishonored-2",
    "icon": "🗡️",
    "title": "Dishonored 2 Achievement Guide",
    "summary": "A practical guide to all 50 Steam achievements in Dishonored 2 (9 hidden). Covers the mission completions, the situational and optional objectives, the powers, combat and collectibles achievements, and the full-playthrough challenges. Nine achievements are Steam-hidden and researched from community 100% guides.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Dishonored 2 has 50 Steam achievements and nine are Steam-hidden - the mission-completion markers for the nine missions plus 'Years Ago, Another Time'. The rest are open: seventeen situational and optional-objective achievements (save the Courier's Printer, kill Paolo three times, eliminate Jindosh unseen, crack the Jindosh Lock unaided), sixteen powers/combat/collectibles achievements (chain Possession through five creature types, 6 kills in 1.5 seconds, all paintings, 40 Heart secrets), and nine full-playthrough challenges (Ghostly and no-casualty missions, 'Clean Hands' for a whole game with no kills, 'Shadow' for never being spotted, 'Flesh and Steel' with no powers, both protagonists, low and high chaos).",
                "The catalog marks it difficulty 4 and about three runs. Many optional objectives are one-shot per mission, so a checklist matters, and the endgame achievements ('Clean Hands' + 'Shadow' together, 'Flesh and Steel') are demanding stealth runs.",
                "Tip: do a relaxed first run to see the story, a low-chaos Clean Hands + Shadow run with a full optional-objective checklist, then a no-powers run and the other protagonist."
            ]
        },
        {
            "heading": "Mission Completions",
            "body": [
                "The Steam-hidden completion markers for the first eight missions: 'Imperial Seal', 'Jewel of the South', 'The Beast Within', 'Labyrinthine Mind', 'A Night in 1849', 'Spirit Thief', 'Down with the Duke' and 'The Greatest Gift'.",
                "The achievements here: Imperial Seal (Recover your signet ring during the first mission, 'A Long Day in Dunwall'.); Jewel of the South (Reach Karnaca - arrive on the dock at the start of the second mission, 'Edge of the World'.); The Beast Within (Complete the third mission, 'The Good Doctor'.); Labyrinthine Mind (Complete the fourth mission, 'The Clockwork Mansion'.); A Night in 1849 (Complete the fifth mission, 'The Royal Conservatory'.); Spirit Thief (Take Delilah's soul - the non-lethal resolution of the final confrontation.); Down with the Duke (Eliminate Duke Luca Abele (lethally or non-lethally) in 'The Grand Palace'.); The Greatest Gift (Reach the ending having saved your last known living family member.)."
            ]
        },
        {
            "heading": "Situational & Optional Objectives",
            "body": [
                "Saving the Courier's Printer, stealing a corpse for Mindy Blanchard, stopping a Wall of Light execution, an Addermire high-drop kill, chatting with Hypatia, killing Paolo three times, eliminating Jindosh unseen, the Oracular voices, siding with the Howlers or the Overseers, cracking the Jindosh Lock unaided, the under-the-table key, draining the flooded basement, the hidden balcony passage, the Steam-hidden 'Years Ago, Another Time', paying tribute to Jessamine, and robbing Galvani repeatedly.",
                "The achievements here: Freedom of Speech (Save the Printer of the Dunwall Courier); Morbid Theft (Steal a corpse for Mindy Blanchard); Stay of Execution (Stop the Grand Guard from pushing someone into the Wall of Light); Fearless Fall (Drop from Addermire’s highest point and take out an enemy below); Counter-serum (Chat with Dr. Hypatia aboard the Dreadful Wale); Place of Three Deaths (Kill Paolo three times); Silence (Eliminate Jindosh without him ever knowing you were there); Oracular Echoes (Listen to the voices of the Sisters of the Oracular Order); Howlers ’til the End (Side with the Howlers in the Dust District); Faithful to the Abbey (Side with the Overseers in the Dust District); Eureka (Crack the Jindosh Lock without finding the solution elsewhere); Under the Table (Obtain Stilton’s Master Key from under the table, with the guards there conscious & unalerted); Flooded Basement (Drain the water to recover a Rune); Dilapidation (Find the hidden balcony passageway); Years Ago, Another Time (Complete 'The Grand Palace' in low chaos, then listen to Meagan Foster's story aboard the Dreadful Wale before the final mission (or steal her key and read her journal).); Gazebo (Pay tribute to Jessamine one last time); Familiarity Breeds Contempt (Rob Galvani multiple times)."
            ]
        },
        {
            "heading": "Powers, Combat & Collectibles",
            "body": [
                "A Domino lovers' kill, a sliding headshot, crafting 10 Bonecharms, 6 kills in 1.5 seconds, a redirected-bullet kill, chaining Possession through five creature types, a no-detection and a no-kill mission, robbing a black market, 60% loot, all Dreadful Wale souvenirs, 40 Heart secrets, 3 Clockwork Soldier plates, all paintings, all Meagan/Sokolov journals, and the three Serkonos musical duos.",
                "The achievements here: The Lovers (Link 2 characters with Domino just before one kills the other); Sliding Marksman (Score a headshot while sliding); Occult Carver (Craft 10 Bonecharms); Heartbeat Reaper (Eliminate 6 enemies in less than 1.5 seconds); Fatal Redirect (Kill an enemy with their own bullet); Circle of Life (Cast Possession once, chaining between human, hound, rat, fish, and bloodfly); Ghostly (Finish an entire mission without being spotted); Alternative Approach (Finish an entire mission with no casualties); Black Market Burglar (Rob a black market shop); Well Funded (Find 60% of available loot); Souvenirs (Collect all the decorative objects for the Dreadful Wale); Heart Whispers (Using the Heart, listen to the secrets of 40 different people); Clockwork Collector (Obtain numbered plates for 3 Clockwork Soldiers); Art Collector (Acquire all collectible paintings); Royal Spymaster (Peruse all journals and audiographs by Meagan Foster and Anton Sokolov aboard the Dreadful Wale); Songs of Serkonos (Find 3 musical duos across Karnaca, and listen to their songs)."
            ]
        },
        {
            "heading": "Playthrough Challenges",
            "body": [
                "20 unaware eliminations, 10 drop assassinations, finishing the game unseen ('Shadow'), with no powers ('Flesh and Steel'), as Corvo, as Emily, in low chaos, in high chaos, and with no kills at all ('Clean Hands').",
                "The achievements here: Rogue (Eliminate 20 unaware enemies); Acrobat (Eliminate 10 enemies with Drop Assassination); Shadow (Finish the game without being spotted); Flesh and Steel (Complete the game without supernatural powers); The Royal Protector (Finish the game with Corvo Attano); The Empress (Finish the game with Emily Kaldwin); In Good Conscience (Complete the game in low chaos); Empire in Chaos (Complete the game in high chaos); Clean Hands (Complete the game without killing anyone)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. First run: play freely to see the story and the mission-completion (hidden) achievements.",
                "2. Second run: low-chaos, no-kill, never-spotted, working a full optional-objective checklist for 'Clean Hands', 'Shadow', 'In Good Conscience' and most situational achievements.",
                "3. Get 'Years Ago, Another Time' on that run (low chaos through The Grand Palace, then hear Meagan out).",
                "4. Third run: no powers ('Flesh and Steel'), high chaos ('Empire in Chaos'), and the other protagonist.",
                "5. Mop up collectibles (paintings, Clockwork plates, souvenirs) and the combat feats on any run.",
                "Tip: crack the Jindosh Lock yourself ('Eureka') and take Stilton's key from under the table with the guards conscious ('Under the Table') on your careful run - both are one-shot per playthrough and easy to spoil."
            ]
        }
    ]
};
