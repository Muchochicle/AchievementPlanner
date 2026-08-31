// Chasm Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/chasm.json), whose 20 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   312200 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 6 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (TrueAchievements / Steam Community / game wikis) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "chasm-achievement-guide",
    "category": "game",
    "gameSlug": "chasm",
    "icon": "⚔️",
    "title": "Chasm Achievement Guide",
    "summary": "A practical guide to all 20 Steam achievements in Chasm (6 hidden). Covers the boss fights and the completion and challenge achievements. Six achievements are Steam-hidden (the boss kills) and named from community 100% guides.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Chasm has 20 Steam achievements and six are Steam-hidden - one for each of the game's six bosses (the Wendigo, the Bone Worm, the Titan, the Shaman, Ulak and King Trell). The open fourteen are 100 and 1,000 kills, 5,000 gold spent, and the 100% collection goals (all journal entries, powerups, crates, rescued villagers, sidequests, map explored, bestiary), plus a no-hit boss fight, a Hard-difficulty clear, a Mortal (permadeath) clear, and becoming the Arena champion.",
                "The catalog marks it difficulty 4. The Mortal permadeath clear, the no-hit boss fight and the 100% map/journal/bestiary collection are the demanding ones; procedural generation means layouts differ each save.",
                "Tip: do a thorough 100% run for the collection achievements and the six bosses, then a Hard run and a Mortal run."
            ]
        },
        {
            "heading": "Bosses",
            "body": [
                "Defeating 100 and 1,000 enemies, and the six Steam-hidden boss kills: the Wendigo, the Bone Worm, the Titan, King Trell, the Shaman and Ulak.",
                "The achievements here: Warrior (Defeat 100 enemies.); Monster Slayer (Defeat 1,000 enemies.); Wendigo (Defeat the Wendigo.); Bone Worm (Defeat the Bone Worm.); Titan (Defeat the Titan.); King Trell (Defeat King Trell (the final boss).); Shaman (Defeat the Shaman.); Ulak (Defeat Ulak.)."
            ]
        },
        {
            "heading": "Completion & Challenges",
            "body": [
                "Spending 5,000 gold, finding all journal entries, all powerups, breaking all crates, rescuing all villagers, completing all villager sidequests, 100% map exploration, all bestiary entries, a no-hit boss fight, a Hard-difficulty clear, a Mortal (permadeath) clear, and becoming the Arena champion.",
                "The achievements here: Big Spender (Spend 5,000 gold.); Bookworm (Find all the Journal Entries in the game.); Superhero (Find all the Powerups in the game.); Crate Buster (Break all the crates in the game.); Socialite (Rescue all the missing villagers.); Good Samaritan (Complete all villager sidequests.); Explorer (Explore 100% of the map.); Zoologist (Unlock all the Bestiary entries.); Prizefighter (Defeat a boss without getting hit.); Guildean Knight (Complete the game on Hard difficulty.); Mere Mortal (Complete the game as a Mortal.); Gladiator (Become the Arena champion.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Do a thorough first run: explore 100% of the map, find every journal entry, powerup and crate, rescue every villager and finish every sidequest, and fill the bestiary.",
                "2. Defeat all six bosses on that run (the hidden achievements).",
                "3. Get a no-hit boss fight and become the Arena champion.",
                "4. Do a Hard-difficulty run.",
                "5. Do a Mortal (permadeath) run - play cautiously and use the Arena and grinding to over-level before each boss.",
                "Tip: the no-hit boss ('Prizefighter') is easiest on the first boss, the Wendigo - learn its short pattern and use ranged attacks so a single mistake doesn't cost the achievement."
            ]
        }
    ]
};
