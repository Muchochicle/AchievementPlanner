// Noita Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/noita.json), whose 14 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   881100 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 13 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (PowerPyx / Game8 / PlayStationTrophies / TrueAchievements) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "noita-achievement-guide",
    "category": "game",
    "gameSlug": "noita",
    "icon": "🧪",
    "title": "Noita Achievement Guide",
    "summary": "A practical guide to all 14 Steam achievements in Noita (13 hidden). Covers reaching each of the six mid-game biomes, the three 'Gods' feats (an infinite-duration spell, a million-damage hit, killing three enraged guardians), the three 100% discovery milestones, and gathering all Orbs of True Knowledge. Thirteen of the fourteen achievements are hidden and their unlock conditions are researched from community 100% guides.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Noita has 14 Steam achievements and 13 of them are hidden. Six are for reaching biomes on the main descent - the Coal Pits, Snowy Depths, Hiisi Base, Underground Jungle, the Vault, and the Temple of the Art. Three are the 'Gods' feats: 'The Gods Are Impressed' (fire a spell with infinite duration), 'The Gods Are Afraid' (deal over a million damage in a single hit), and 'The Gods Are Enraged' (anger the gods, then kill three Stevari guardians). The last four are the three 100% discovery milestones (all enemies, all spells, all perks) and gathering every Orb of True Knowledge at least once.",
                "The catalog marks it difficulty 5 - Noita is a famously lethal physics roguelite where almost anything can kill you instantly. The biome achievements come with practice, but the 100% discovery achievements and the Orb gathering take dozens of runs and deep game knowledge, and any mods disable achievements entirely.",
                "Tip: play unmodded and let the discovery achievements accumulate naturally over many runs - every new enemy, spell and perk you see counts permanently toward the 100% totals, so the milestones arrive on their own long before you could farm them deliberately."
            ]
        },
        {
            "heading": "Biomes, the Gods & Discovery",
            "body": [
                "Winning the game, reaching the Coal Pits, Snowy Depths, Hiisi Base, Underground Jungle, the Vault and the Temple of the Art, the three Gods feats (infinite-duration spell, million-damage hit, three enraged guardians killed), 100% enemy, spell and perk discovery, and gathering all Orbs of True Knowledge.",
                "The achievements here: Victory (Victory); Reached Coal Pits (Reach the Coal Pits biome.); Reached Snowy Depths (Reach the Snowy Depths biome.); Reached Hiisi Base (Reach the Hiisi Base biome.); Reached Underground Jungle (Reach the Underground Jungle biome.); Reached The Vault (Reach The Vault biome.); Reached Temple of the Art (Reach the Temple of the Art biome.); The Gods Are Impressed (Fire a spell with an infinite duration ('The Gods Are Impressed').); The Gods Are Afraid (Deal over 1,000,000 damage in a single hit ('The Gods Are Afraid').); 100% Enemy Progress (Reach 100% enemy discovery (encounter every enemy at least once).); 100% Spell Progress (Reach 100% spell discovery (find every spell at least once).); 100% Perk Progress (Reach 100% perk discovery (see every perk at least once).); The Gods Are Enraged (Anger the gods, then kill three of the Stevari guardians that spawn in the Holy Mountains ('The Gods Are Enraged').); Gathered All The Knowledge (Discover every Orb of True Knowledge at least once.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play unmodded and learn the descent - reach the Coal Pits, Snowy Depths, Hiisi Base, Underground Jungle, the Vault and the Temple of the Art over your first runs.",
                "2. Win a run for 'Victory', and pick up 'The Gods Are Impressed' by building any wand that fires an infinite-duration projectile.",
                "3. Build a high-damage wand (chainsaw/spells stacking) for 'The Gods Are Afraid' - a million damage in one hit.",
                "4. On a strong run, anger the gods in a Holy Mountain and kill three Stevari for 'The Gods Are Enraged'.",
                "5. Keep playing - the 100% enemy, spell and perk discovery and the Orb gathering fill in across many runs.",
                "Tip: never install mods if you care about the achievements - Noita disables all Steam achievements the moment any mod is active, even a cosmetic one."
            ]
        }
    ]
};
