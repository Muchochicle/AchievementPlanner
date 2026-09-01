// Returnal Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/returnal.json), whose 38 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1649240 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 25 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (PowerPyx / Game8 / PlayStationTrophies / TrueAchievements) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "returnal-achievement-guide",
    "category": "game",
    "gameSlug": "returnal",
    "icon": "🟣",
    "title": "Returnal Achievement Guide",
    "summary": "A practical guide to all 38 Steam achievements in Returnal (25 hidden). Covers the six biome surveys, the five story bosses, the three-act narrative, the House sequences, and the free Ascension update's Tower of Sisyphus and Hospital ending. Twenty-four of the achievements are hidden - the biome, boss, act and ending beats - and their unlock conditions are researched from community 100% guides.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Returnal has 38 Steam achievements and 24 are hidden. Five are biome surveys (Crimson Wastes, Derelict Citadel, Echoing Ruins, Fractured Wastes, Abyssal Scar), five are the story bosses (Phrike, Ixion, Nemesis, Hyperion, Ophion), and the narrative beats cover completing Acts 1, 2 and 3, your first death, dying with the Astronaut Figurine, and the six House sequences. The free Ascension update adds the Tower of Sisyphus (first death there, defeating Algos' first and final forms, 100 Disgorger kills) and the Hospital ending chain (the first Hospital sequence, then the 'Empty Embrace' and 'Find Release' finale).",
                "The catalog marks it difficulty 4 - it is a punishing bullet-hell roguelike with no difficulty options and permadeath within each cycle. Nothing is permanently missable (every biome, boss and House stays reachable), but the run-based structure means real skill is required, and Act 3's 'White Shadow' needs all six Sunface Fragments, which are RNG drops across the biomes.",
                "Tip: the biome surveys and boss kills come naturally as you push forward - focus early runs on learning the first three biomes and their bosses, and pick up every Scout Log and Xenoglyph you pass so the collectible achievements ('Alternate Fates', the Xeno-archive set) fill in without dedicated farming."
            ]
        },
        {
            "heading": "Biomes, Bosses & the Three Acts",
            "body": [
                "Learning the basics, the six biome surveys, defeating Phrike, Ixion, Nemesis, Hyperion and Ophion, completing Acts 1, 2 and 3, the Sunface Fragments, dying with the Astronaut Figurine, and your first death.",
                "The achievements here: Atropian Survival (Learn the basics of survival on Atropos); Past the Ruins (Finish Overgrown Ruins Survey); Ascending the Mountain (Complete the Crimson Wastes survey (collect all of that biome's collectibles).); Through the Forgotten City (Complete the Derelict Citadel survey.); Echoes of the Past (Complete the Echoing Ruins survey.); Frozen in Time (Complete the Fractured Wastes survey.); Submerged in Memories (Complete the Abyssal Scar survey.); A Shadow in the Fog (Defeat Phrike, the Overgrown Ruins boss.); Ascension (Defeat Ixion, the Crimson Wastes boss.); Trial by Judgement (Defeat Nemesis, the Derelict Citadel boss.); Silence the Song (Defeat Hyperion, the Echoing Ruins boss.); Inner Darkness (Defeat Ophion, the Abyssal Scar boss (the final boss).); Failed Escape (Complete Act 1 (after defeating Nemesis).); Last Drive (Complete Act 2 (after defeating Ophion).); White Shadow (Collect all six Sunface Fragments and complete Act 3.); Second Chance (Die while carrying the Astronaut Figurine artifact (and revive on the spot).)."
            ]
        },
        {
            "heading": "Collectibles, Upgrades & Houses",
            "body": [
                "Scanning and fully translating Xenoglyphs, five Overloads in a row, weapon proficiency 30, a daily challenge, 200% max integrity, Calculated Risk, max Adrenaline, five Parasites at once, ten Scout Logs, the first and all six House sequences, and a completed Xeno-archive set.",
                "The achievements here: Cryptic Messages (Scan a Xenoglyph); Cryptic Translations (Unlock all translation tiers of a Xenoglyph); Surgical Precision (Perform 5 successful Overloads in a row); Adapting to Circumstance (Achieve Weapon Proficiency level 30); In-Field Training (Complete a daily challenge in Simulation Mode); Hardened Shell (Achieve 200% Max Integrity); Risk Assessment (Finish Calculated Risk); Adrenaline Spike (Achieve maximum Adrenaline Level); Irreversibly Contaminated (Have 5 Parasites simultaneously); Eternal Return (Die for the first time.); Alternate Fates (Retrieve 10 Scout Logs); Welcome Home (Complete the first House sequence.); Sins of the Mother (Complete all six House sequences.); Visions of the Past (Complete a Xeno-archive set (excluding Tower of Sisyphus)); Helios (Collect all main Achievements)."
            ]
        },
        {
            "heading": "Ascension: Tower of Sisyphus & the Hospital",
            "body": [
                "The Helios full-completion achievement, and the free Ascension update: your first death in the Tower of Sisyphus, defeating Algos' first and final forms, 100 Disgorger kills, the first Hospital sequence, and the 'Empty Embrace' and 'Find Release' Hospital ending.",
                "The achievements here: Eternal Ascent (Die and return in the Tower of Sisyphus (Ascension update).); The Watcher (Defeat Algos' first form (the Tower of Sisyphus boss).); Eyes Closed (Defeat Algos' final form.); Destroyer (Kill 100 hostiles with Disgorgers (Tower of Sisyphus consumables).); Broken, Restored, Empty (Complete the first Hospital sequence (Ascension update).); Empty Embrace (Unlock the Hospital ending - after collecting all six poppies, completing every Hospital sequence and defeating Algos' final form, go through the opened Hospital door.); Find Release (Trigger the final Hospital cutscene by interacting with the bed after 'Empty Embrace'.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Learn the first three biomes and their bosses (Phrike, Ixion, Nemesis) and complete Act 1.",
                "2. Push through biomes 4-6, defeating Hyperion and Ophion to complete Act 2.",
                "3. Farm the six Sunface Fragments across the biomes and complete Act 3 for 'White Shadow'.",
                "4. Finish every biome survey and all six House sequences, and mop up the Xenoglyph, Scout Log and stat achievements.",
                "5. Play the Ascension update - grind the Tower of Sisyphus for Algos and the Disgorger kills, then complete the Hospital sequences for the 'Empty Embrace' and 'Find Release' ending.",
                "Tip: keep the Astronaut Figurine artifact equipped on a run you expect to die on - 'Second Chance' just wants you to die while holding it, and it doubles as a free revive."
            ]
        }
    ]
};
