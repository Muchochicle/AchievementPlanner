// TMNT: Shredder's Revenge Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/tmnt-shredders-revenge.json), whose 30 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1361510 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 13 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (PowerPyx / Game8 / PlayStationTrophies / TrueAchievements) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "tmnt-shredders-revenge-achievement-guide",
    "category": "game",
    "gameSlug": "tmnt-shredders-revenge",
    "icon": "🐢",
    "title": "TMNT: Shredder's Revenge Achievement Guide",
    "summary": "A practical guide to all 30 Steam achievements in TMNT: Shredder's Revenge (13 hidden). Covers the Story Mode episodes and endings, the Arcade Mode clears (hardest difficulty, no-credit), the multiplayer team-play achievements, the collectibles and special requests, and a set of one-off combat gags. Thirteen of the achievements are hidden - the episode completions and secrets - and their unlock conditions are researched from community 100% guides.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Teenage Mutant Ninja Turtles: Shredder's Revenge has 30 Steam achievements and 13 are hidden. Five are episode-completion story markers (Episode 1's Channel 6 broadcast, Episode 5's Rat King, Episode 7's Bebop and Rocksteady, Episode 11's Triceratons, Episode 13's Chrome Dome). The other eight are secrets and combat gags: playing as Casey Jones, beating the Rat King as Splinter, the Episode 9 balloon minigame, a Super Attack boss kill, throwing 16 enemies at the camera, getting hit while taunting, a no-damage Super Shredder fight, and cheering up Raphael as Casey Jones.",
                "The catalog marks it difficulty 2 - it is a short, approachable beat 'em up. Nothing is missable; every episode and mode can be replayed freely, characters and Power Levels carry across runs, and the collectibles and special requests can be mopped up in stage select. The only real challenges are the no-credit Arcade clear and the no-damage Super Shredder fight.",
                "Tip: play Story Mode first to level every character to max Power (grinding damage and health), then do the Arcade Mode challenges - the hardest difficulty and no-credit runs are far more manageable once the whole roster is maxed."
            ]
        },
        {
            "heading": "Story Mode & Endings",
            "body": [
                "The five episode-completion markers (Channel 6, the Rat King, Bebop and Rocksteady, the Triceratons, Chrome Dome), completing Story Mode, seeing every ending, finding all cameos and collectibles, completing every special request, maxing every character's Power Level, and playing as Casey Jones.",
                "The achievements here: Buffoons! (Complete Episode 7 (defeat Bebop and Rocksteady).); Special Report (Complete Episode 1 (stop the rogue Channel 6 broadcast).); Piped Piper!  (Complete Episode 5 (defeat the Rat King in the NYC sewers).); Empire Strikes Out (Complete Episode 11 (turn back the Triceraton empire).); Clean Up in Aisle 4 (Complete Episode 13 (stop Chrome Dome rebuilding the Technodrome).); Complete Season (Complete the Story Mode.); Complete Cast! (See all of the different endings in Story Mode.); Classic Couch Memories (Complete the Arcade Mode in Multiplayer.); Like the Old Days! (Complete the Arcade Mode on the hardest difficulty.); Master of One Quarter (Complete the Arcade Mode without using a credit.); Most Fearsome Fighting Team! (Complete a Stage in any mode in multiplayer.); Teamwork (Perform 10 Team Attacks in multiplayer.); Kind Brother (Revive a teammate in multiplayer.); Sharing is Caring! (Cheer up the same teammate 3 times in a single stage.); Biggest Fan! (Find all cameos in Story Mode.); Multitasker (Complete all of the special requests in Story Mode.); Beware Lawbreakers! (Play as Casey Jones.)."
            ]
        },
        {
            "heading": "Arcade, Multiplayer & Combat Feats",
            "body": [
                "Completing Arcade Mode in multiplayer, on the hardest difficulty and without a credit, multiplayer stage clears, team attacks, reviving and cheering teammates, destroying 200 objects, a 250-hit string, eating 20 pizzas, deflecting 10 projectiles, and the secrets: the Rat King as Splinter, the balloon minigame, a Super Attack boss kill, 16 enemies thrown at the camera, getting hit while taunting, a no-damage Super Shredder, and cheering up Raphael as Casey Jones.",
                "The achievements here: Breaking Out! (Destroy 200 breakable objects.); INEFFECTIVE! (Defeat the Rat King while playing as Splinter.); Button Masher (Win the balloon minigame in Episode 9.); A + B (Defeat a boss with a Super Attack.); Mode 7  (Throw 16 enemies toward the camera.); Cowabunga It Is (Perform a 250-hits string.); Come On! (Get hit while taunting.); Who Needs A Dock? (Defeat Super Shredder without taking damage.); Pizza Time!  (Eat 20 pizzas.); Opening an Antique Store? (Find 5 different collectibles in Story Mode.); No need for Mutagen! (Bring all characters to max Power Level in Story Mode.); Finally Getting Along! (Cheer up Raphael while playing as Casey Jones.); Return to Sender (Deflect 10 projectiles. )."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play Story Mode to completion, letting the episode markers unlock and finding cameos and collectibles as you go.",
                "2. Complete every special request and max every character's Power Level (grinding a few replays of early stages).",
                "3. See all of the endings, and unlock and play as Casey Jones (and Splinter) for their secret achievements.",
                "4. Do the Arcade Mode challenges - a co-op clear, the hardest difficulty, and a no-credit run.",
                "5. Mop up the combat gags: a Super Attack boss kill, 16 enemies thrown at the camera, a taunt hit, the balloon minigame, and the no-damage Super Shredder fight.",
                "Tip: 'Who Needs A Dock?' (no-damage Super Shredder) is easiest with a maxed character, plenty of Super stock, and knowledge of his attack patterns - practice the final fight in stage select before the real attempt."
            ]
        }
    ]
};
