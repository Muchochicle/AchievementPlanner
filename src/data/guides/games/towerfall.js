// TowerFall Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/towerfall.json), whose 30 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   251470 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None are hidden; every one ships a real, official Steam description,
//   quoted verbatim below.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "towerfall-achievement-guide",
    "category": "game",
    "gameSlug": "towerfall",
    "icon": "🏹",
    "title": "TowerFall Achievement Guide",
    "summary": "A practical guide to all 30 Steam achievements in TowerFall - none are hidden. Covers level and archer discovery, combat and Trials-mode feats, Quest mode progression, and the full Dark World expansion.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "TowerFall has 30 Steam achievements and none are hidden. The base game covers discovering the four arena types (Sunken City, Moonstone, TowerForge, Ascension), unlocking all four secondary archers, a run of specific combat feats, Trials-mode diamond-time counts, Versus-mode round-count milestones, and Quest mode progression. The Dark World Expansion adds its own four boss clears plus Hardcore, Legendary, Last Stand, and Overlords challenge-difficulty achievements.",
                "Nothing is missable - every discovery, unlock, and mode-progress achievement is permanent, and Quest mode and Trials stay replayable at any time. The long poles are the two big Versus-mode round counts (1,000 and 5,000 rounds) and the Dark World Expansion's hardest difficulty clears, both of which need real time and skill investment rather than a single trick."
            ]
        },
        {
            "heading": "Discovery & Archers",
            "body": [
                "Discovering the four arena types - Sunken City, Moonstone, TowerForge, and Ascension - and unlocking the four secondary archers (White, Yellow, Cyan, Purple).",
                "The achievements here: Serpent Hymns (Discover Sunken City); Omens (Discover Moonstone); Creation Myth (Discover TowerForge); Ascension (Discover Ascension); Exuluna (Unlock the White Archer); Fabled Recluse (Unlock the Yellow Archer); Demented Thespian (Unlock the Cyan Archer); Demon Queen (Unlock the Purple Archer)."
            ]
        },
        {
            "heading": "Combat & Trials",
            "body": [
                "Specific combat feats and Trials/Versus milestones: falling asleep in combat, putting on the King's crown, earning 90% of Versus mode's awards, beating 10 and then 30 diamond times in Trials, completing all 48 Dark World Trials stages under 3:00 (Time Lord), and playing 1,000 and 5,000 rounds of Versus mode.",
                "The achievements here: Sleepy Master (Fall asleep in combat); High Treason (Put on the King's crown); Battle Stenography (Earn 90% of the awards in Versus mode); Dex Check (Beat 10 diamond times in Trials mode); Thief's Badge (Beat 30 diamond times in Trials mode); Time Lord ([Dark World Expansion] Complete all 48 stages in Trials mode, with a total best time of under 3:00); Tall Tales (Play 1,000 rounds of Versus mode); Massive Mythology (Play 5,000 rounds of Versus mode)."
            ]
        },
        {
            "heading": "Quest Mode",
            "body": [
                "Progressing through Quest mode: clearing the first 3 towers, completing Ascension, and earning 8 then 14 red skulls, plus a gold skull on King's Court.",
                "The achievements here: Way of the Order (Complete the first 3 towers of Quest mode); Rapture (Complete Ascension in Quest mode); Crimson Shield (Earn 8 red skulls in Quest mode); Golden Goddess (Earn 14 red skulls in Quest mode); Reaper's Crown (Earn a gold skull on King's Court in Quest mode)."
            ]
        },
        {
            "heading": "Dark World Expansion",
            "body": [
                "The Dark World Expansion's content: defeating all four bosses (The Amaranth, Dreadwood, Darkfang, Cataclysm), clearing the four main stages on Hardcore and then Legendary difficulty, a no-continues Legendary Cataclysm clear, a 2+ curse Legendary Dark Gauntlet clear, and a Hyper Jump across a level.",
                "The achievements here: Wretched Seer ([Dark World Expansion] Complete The Amaranth in Dark World mode); Lady Abigail ([Dark World Expansion] Complete Dreadwood in Dark World mode); The Blind Lich ([Dark World Expansion] Complete Darkfang in Dark World mode); Cataclysm ([Dark World Expansion] Complete Cataclysm in Dark World mode); Dream Team ([Dark World Expansion] Complete the four main stages of Dark World mode on Hardcore difficulty); Dark World Conquerors ([Dark World Expansion] Complete the four main stages of Dark World mode on Legendary difficulty); Last Stand ([Dark World Expansion] Complete Cataclysm in Dark World mode, on Legendary difficulty with no continues); Overlords ([Dark World Expansion] Complete Dark Gauntlet in Dark World mode, on Legendary difficulty with 2 or more curses active); Speed of Light (Hyper Jump across a level)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play a spread of arena types and modes early to naturally discover Sunken City, Moonstone, TowerForge, and Ascension, and unlock the White, Yellow, Cyan, and Purple archers.",
                "2. Push through Quest mode's towers, aiming for Way of the Order (the first 3 towers) and eventually Rapture (Ascension), collecting red skulls toward Crimson Shield and Golden Goddess and a gold skull on King's Court for Reaper's Crown.",
                "3. Work Trials mode toward Dex Check (10 diamond times) and Thief's Badge (30 diamond times).",
                "4. Play Versus mode regularly toward the 1,000 and 5,000 round counts, and pick off the specific combat feats (Sleepy Master, High Treason, Battle Stenography, Speed of Light) as chances arise.",
                "5. If you own the Dark World Expansion, clear its four bosses (The Amaranth, Dreadwood, Darkfang, Cataclysm), then push Hardcore and Legendary difficulty clears, all 48 Trials stages under 3:00 for Time Lord, a no-continues Legendary Cataclysm clear for Last Stand, and a 2+ curse Legendary Dark Gauntlet clear for Overlords.",
                "Tip: the Dark World achievements scale in difficulty deliberately (Hardcore before Legendary, a normal Legendary clear before the no-continues Last Stand run) - clear them in that order rather than attempting the hardest variant first."
            ]
        }
    ]
};
