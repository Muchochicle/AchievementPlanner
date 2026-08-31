// Metro: Last Light Redux Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/metro-last-light-redux.json), whose 49 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   287390 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 6 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (TrueAchievements / Steam Community / game wikis) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "metro-last-light-redux-achievement-guide",
    "category": "game",
    "gameSlug": "metro-last-light-redux",
    "icon": "🚇",
    "title": "Metro: Last Light Redux Achievement Guide",
    "summary": "A practical guide to all 49 Steam achievements in Metro: Last Light Redux (6 hidden). Covers the combat and stealth feats, the moral-choice endings and one-off secrets, and the difficulty and chapter-completion achievements.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Metro: Last Light Redux has 49 Steam achievements and six are hidden - all tied to the moral system and story choices (the two endings, the Polis revelation, letting Pavel die, the Contagion gas-mask choice, and the Depot cutscene). The rest are open: combat and stealth feats (Invisible Intruder/Savior/Soldier no-kill-no-alarm level runs, throwing-knife streaks, disarm and light feats), collectibles (all 43 Diary pages, all Dead City Visions, safe boxes), the Survival and Spartan mode clears, and the chapter-completion markers.",
                "The catalog flags it missable and roughly two playthroughs - the two endings conflict (you cannot get both on one run), the Invisible/no-kill level achievements are one-shot per level, and Survival vs Spartan mode are separate completions. Moral points accrue from small actions throughout, so the endings are effectively decided by how you play.",
                "Tip: do a first playthrough focused on stealth and positive moral points (spare enemies, explore, listen to conversations) for the Redemption ending and the Invisible-run achievements, then a second run being aggressive for the Ranger ending and Revenge."
            ]
        },
        {
            "heading": "Combat, Stealth & the Ranger Ending",
            "body": [
                "The combat and stealth achievements - 30 minutes of Filters, 100 Mutant and 100 Human kills, the Rhino, all Dead City Visions, the Clean Escape / Commando / Derailed / no-alarm level runs, the light, lever, trap, cobweb and spider feats, the Bear rescue, freeing the Prisoners, drinking, throwing-knife streaks, the no-hit Ashes run, the Theater show, all 43 Diary pages, the training sequence, the no-kill Bridge run - and, sorted early by its internal name, the hidden 'C'est la vie' Ranger ending.",
                "The achievements here: Air! (Spend 30 minutes' worth of Filters.); Antibiotic (Kill 100 Mutants.); Back to the Past (See all Visions in the Dead City.); Big Momma (Kill the Rhino.); C'est la vie (Reach the 'Ranger' ending - the default outcome when Artyom finishes the game with too many negative or too few positive moral points.); Clean Escape (Escape the chasing Nazis on the REICH level without being caught once.); Commando (Rescue the Women and Children on the BANDITS level without raising alarm.); Derailed (Kill all armed enemies on the REVOLUTION level, including all reinforcements.); Edison (Turn off 40 Lights without breaking them.); Engineer (Use 10 Lever Switches.); Ever Vigilant (Disarm 10 Traps.); Forest Guardian (Save the Bear from the Watchmen after the fight.); Freedom! (Free the Prisoners.); Invisible Intruder (Complete the SEPARATION level without killing or raising alarm.); Invisible Savior (Complete the FACILITY level without killing or raising alarm.); Invisible Soldier (Complete the REVOLUTION level without killing and raising an alarm.); Cheers! (Drink at every occasion.); Mouse (Complete the ECHOES level undetected by the Watchmen.); No shooting allowed (Kill 10 enemies in a row with Throwing Knives.); Not A Rabbit (Finish the ASHES level without taking a hit.); Patron of the Arts (Watch the entire Theater Show.); Published (Complete all 43 of Artyom's hidden Diary pages.); Pyromaniac (Burn 50 Cobwebs.); Rabbit (Complete training sequence.); Rain Man (Complete the BRIDGE level without a kill.)."
            ]
        },
        {
            "heading": "Moral Choices, Endings & One-Off Feats",
            "body": [
                "The hidden Redemption ending, the Polis revelation, letting Pavel die (Revenge), the Contagion gas-mask choice (Savior), the Depot cutscene (Secret), plus the Teddy Bear return, the no-damage Railcar fight, 15 stealth kills, 100 human kills, the spider flip, the three-different-ammo weapon feat, and the Red Line escape.",
                "The achievements here: Redemption (Reach the 'Redemption' ending by accumulating enough positive moral points over the course of the game.); Reunion (Find and return the crying child's Teddy Bear.); Revelation (Reveal Secretary Moskvin's true plans during the level POLIS.); Revenge (Let Pavel die on the RED SQUARE level - do not help him when hands drag him under during the Vision.); Savior (On the CONTAGION level, take off your gas mask when Lesnitsky demands it instead of shooting.); Scram (Kill the Watchmen attacking the Railcar without taking any damage.); Secret (Complete the level DEPOT on any difficulty - the Little Dark One reveals the Reds' plans in a cutscene.); Shadow (Stealthily kill 15 Enemies.); Soldier (Kill 100 Human Enemies.); Tortoise (Make 10 Spiders flip belly-up.); Veteran (Choose three primary weapons that use different ammo.); Within a Hair of Death (Escape from the Red Line.)."
            ]
        },
        {
            "heading": "Difficulty & Chapter Completions",
            "body": [
                "Completing the game in Survival Mode and in Spartan Mode, opening 10 safe boxes, spending 1 hour on the Developer level, and the chapter-completion markers (Sniper Team, Kshatriya, Heavy Squad, Tower, Spider Lair, Pavel, Khan, Anna).",
                "The achievements here: Survivor 2034 (Complete the game in Survival Mode.); Spartan 2034 (Complete the game in Spartan Mode.); Master Thief (Open 10 locked safe boxes.); Saboteur (Complete the SNIPER TEAM level.); Kshatriya (Complete the KSHATRIYA level.); Hail Reich! (Complete the HEAVY SQUAD level.); Test Complete (Complete the TOWER level.); Through the Fire (Complete the SPIDER LAIR level.); Developer (Spend 1 hour on the DEVELOPER level.); Heads Up! (Complete the PAVEL level.); No Way Out (Complete the KHAN level.); The Sunset of Hope (Complete the ANNA level.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play a first run stealthily, sparing enemies and exploring, aiming for positive moral points and the Redemption ending.",
                "2. On that run, do the Invisible Intruder / Savior / Soldier no-kill-no-alarm level runs and collect all 43 Diary pages and Dead City Visions.",
                "3. Make the Contagion gas-mask choice (Savior) and the Polis revelation on that run.",
                "4. Do a second, aggressive run for the Ranger ending ('C'est la vie') and let Pavel die (Revenge).",
                "5. Clear the game once in Survival Mode and once in Spartan Mode, and spend an hour on the Developer level.",
                "Tip: moral points are earned by small, easy-to-miss actions - overhearing full conversations, tipping performers, sparing surrendering enemies, giving ammo to beggars - so on the Redemption run, slow down and interact with everyone."
            ]
        }
    ]
};
