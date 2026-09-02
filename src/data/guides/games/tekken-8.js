// TEKKEN 8 Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/tekken-8.json), whose 47 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1778820 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 10 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched (community 100%
//   guides / official wikis) and is a curatorial summary. Every non-hidden
//   description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "tekken-8-achievement-guide",
    "category": "game",
    "gameSlug": "tekken-8",
    "icon": "🥊",
    "title": "TEKKEN 8 Achievement Guide",
    "summary": "A practical guide to all 47 Steam achievements in TEKKEN 8 (10 hidden). 10 of the 47 are hidden - 5 are Story Mode chapter/ending markers, 3 are Arcade Quest tournament milestones, 1 is defeating a specific secret CPU Ghost, and the last is the platinum-style completionist achievement. Researched from Steam Community and TrueAchievements guides.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "TEKKEN 8 has 47 Steam achievements, 10 of them hidden. The combat-feat track covers ranked/player/group match wins, 10 online battles, perfect and great victories, a 70-damage air combo, 10 Tornados, 20 Rage Arts, 5 Heat Bursts, Heat activated via a Heat Engager 5 times, 20 Heat Smashes, 10 Heat Dashes, 500 recoverable health healed, 1000 rage-mode damage, wall and floor breaks, the Ortiz Farm stage's lowest area, and 20 Devilish Tekken Ball hits. Three rank promotions (Brawler, Warrior, Vanquisher) mark your online rank climbing.",
                "The 5 hidden Story Mode achievements are all The Dark Awakens markers: finishing Chapter 7, finishing Chapter 12, a 30-hit chain during Chapter 10's open fight, and the two alternate Chapter 15 endings (Hope for Jin's ending, Despair for Kazuya's). Character Episodes and Arcade Battle have their own completion achievements, and Arcade Quest contributes 3 more hidden milestones: winning the Gong Tournament, winning the Chapter 6 tournament match away from home, and clearing the mode's Champion Cup at its final location.",
                "The last 2 hidden achievements are Godfather (defeat the secret CPU Ghost Harada_TEKKEN, the series director's own ultra-high-rank Ghost, in Super Ghost Battle) and 'A fight is about survival.' - the platinum-style completionist achievement for unlocking every other one. The catalog marks it difficulty 4: most feats come from normal play, but the Ghost Battle boss and several combat-mechanic tallies need real execution practice."
            ]
        },
        {
            "heading": "Match Wins & Combat Mechanics",
            "body": [
                "Ranked, Player and Group Match wins, 10 online battles, perfect and great victories, a 70-damage air combo, 10 Tornados, 20 Rage Arts, Heat Bursts/Techniques/Smashes/Dashes, 500 recoverable health healed, 1000 rage-mode damage, wall and floor breaks, the Ortiz Farm stage's lowest area, and 20 Devilish Tekken Ball hits.",
                "The achievements here: Just relax. You can do it. (Won a Ranked Match.); I'll give you a rematch anytime, guv. (Won a Player Match.); Please don't tell my father. (Won a Group Match.); Excellent! (Play a total of 10 online battles of any kind.); That was too easy! (Achieved a perfect victory. (Excluding offline player battles)); Outstanding! (Achieved a great victory. (Excluding offline player battles)); Behold, the fruits of my labors. (Dealt 70+ damage in an air combo. (Excluding offline player battles)); Let the blistering sands consume you. (Triggered 10 Tornados. (Excluding offline player battles)); (That's how a true champion fights!) (Dealt 20 Rage Arts. (Excluding offline player battles)); What a rush! (Performed 5 Heat Bursts. (Excluding offline player battles)); Your fate is already decided. (Activated Heat 5 times with a Heat Engager. (Excluding offline player battles)); Fear my wrath. (Dealt 20 Heat Smashes. (Excluding offline player battles)); You think you can stop me? (Performed 10 Heat Dashes. (Excluding offline player battles)); Under the divine protection of Sirius. (Healed an overall total of 500 damage in recoverable health. (Excluding offline player battles)); Now it's time to destroy you. (Dealt an overall total of 1000 damage while in rage mode. (Excluding offline player battles)); Sorry for getting rough back there. (Performed a Wall Bound. (Excluding offline player battles)); Resuming mission. (Performed a Wall Blast. (Excluding offline player battles)); Come on, just try and kill me. (Performed a Hard Wall Break. (Excluding offline player battles)); ... (Performed a Hard Floor Break. (Excluding offline player battles)); (You never learn.) (Performed a Floor Blast. (Excluding offline player battles)); How do you take your coffee? (Reached the lowest area of the Ortiz Farm stage. (Excluding offline player battles)); My moves are way faster than yours. (Performed 20 Devilish hits in Tekken Ball. (Excluding offline player battles))."
            ]
        },
        {
            "heading": "Rank Promotions",
            "body": [
                "Getting promoted to Brawler, Warrior and Vanquisher rank online.",
                "The achievements here: I aspire to greater heights! (Got promoted to Brawler.); I'm actually pretty strong. (Got promoted to Warrior.); There's no way you can stop me. (Got promoted to Vanquisher.)."
            ]
        },
        {
            "heading": "Story Mode: The Dark Awakens",
            "body": [
                "Finishing Chapter 1, and the 5 hidden story markers: finishing Chapters 7 and 12, a 30-hit chain in Chapter 10, and the two alternate Chapter 15 endings (Hope for Jin, Despair for Kazuya).",
                "The achievements here: Come, humanity! Unleash the dogs of war!  (Finished Chapter 1 of The Dark Awakens.); You aren't alone anymore. (Finish Chapter 7 of The Dark Awakens.); I'll live on, together with my sins. (Finish Chapter 12 of The Dark Awakens.); Hope (Finish Chapter 15 of The Dark Awakens with Jin's ending.); Despair (Finish Chapter 15 of The Dark Awakens with Kazuya's ending.); I would do well to follow your example. (Land a 30-hit chain during Chapter 10 of The Dark Awakens.)."
            ]
        },
        {
            "heading": "Character Episodes & Arcade Battle",
            "body": [
                "Finishing 5 and 10 Character Episode stories, and clearing Arcade Battle.",
                "The achievements here: This should be fun. (Finished 5 Character Episode stories.); Power isn't everything. (Finished 10 Character Episode stories.); I'll put an end to this. (Finished Arcade Battle.)."
            ]
        },
        {
            "heading": "Arcade Quest & Ghost Battle",
            "body": [
                "The 3 hidden Arcade Quest milestones (winning the Gong Tournament, winning the away match in Chapter 6, clearing the Champion Cup at its final location), fighting your own Ghost, defeating a player's Ghost, defeating 10 CPU Ghosts in Super Ghost Battle, and the hidden Godfather achievement for defeating the secret CPU Ghost Harada_TEKKEN.",
                "The achievements here: Congrats on the victory! (Win the Gong Tournament in Arcade Quest.); A new star rising in the world of TEKKEN! (Win the away tournament match in Chapter 6 of Arcade Quest.); Get ready for the next battle! (Clear the Champion Cup at Arcade Quest's final location.); The fists reveal the fighter. (Fought against your own Ghost.); All is vanity. (Defeated a player's Ghost.); (Initiating Analysis) (Defeated 10 CPU Ghosts in Super Ghost Battle.); Godfather (Defeat the secret CPU Ghost Harada_TEKKEN in Super Ghost Battle.)."
            ]
        },
        {
            "heading": "Practice & Miscellaneous",
            "body": [
                "2000 damage dealt in Practice Mode, 5 Combo Challenges completed, practicing with Replay & Tips tips on, saving a custom character, and banking 10,000,000G total.",
                "The achievements here: No pain, no gain! (Dealt 2000 damage in Practice mode.); Do you want to learn Marshall Arts? (Completed 5 Combo Challenges.); (This one's in the bag!) (Practiced with the tips on in Replays & Tips.); You're in for it now! (Saved a custom character in Character Customization.); Your money is my money!  (Obtained an overall total of 10,000,000G.)."
            ]
        },
        {
            "heading": "Completion",
            "body": [
                "The platinum-style completionist achievement, hidden until every other one is unlocked.",
                "The achievements here: A fight is about survival. (Unlock every other achievement.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through The Dark Awakens story mode start to finish, picking up Chapter 1 and the hidden Chapter 7/12 markers along the way.",
                "2. Get both Chapter 15 endings (Jin's Hope, Kazuya's Despair) and the Chapter 10 30-hit chain on separate playthroughs or via chapter select.",
                "3. Clear Arcade Battle, 10 Character Episodes, and Arcade Quest's Champion Cup, watching for the Gong Tournament and Chapter 6 away-match wins.",
                "4. Grind ranked/player/group matches for the combat-mechanic tallies (Heat, Rage Arts, wall/floor breaks, Tornados) and the 3 rank promotions.",
                "5. Head into Super Ghost Battle and look specifically for Harada_TEKKEN (a Feng Wei ghost ranked 'Tekken God') for Godfather.",
                "Tip: the combat-mechanic tallies (Heat Bursts, Rage Arts, wall/floor breaks) explicitly exclude offline player battles - grind them in ranked, player, or CPU-online matches, not local versus."
            ]
        }
    ]
};
