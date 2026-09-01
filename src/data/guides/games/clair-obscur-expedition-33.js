// Clair Obscur: Expedition 33 Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/clair-obscur-expedition-33.json), whose 55 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1903340 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 40 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (PowerPyx / Game8 / PlayStationTrophies / TrueAchievements) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "clair-obscur-expedition-33-achievement-guide",
    "category": "game",
    "gameSlug": "clair-obscur-expedition-33",
    "icon": "🖌️",
    "title": "Clair Obscur: Expedition 33 Achievement Guide",
    "summary": "A practical guide to all 55 Steam achievements in Clair Obscur: Expedition 33 (40 hidden). Covers every story area from the Expedition's landing through the final boss, the Esquie world-map upgrades, all optional superbosses (Simon, Clea, Sprong, the Serpenphare, the Chromatic Petank), the Endless Tower, companion relationships, and per-character combat-mastery challenges. Forty of the achievements are hidden and their unlock conditions are researched from community 100% guides.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Clair Obscur: Expedition 33 has 55 Steam achievements and 40 are hidden. Sixteen track the main story - finding your way through Spring Meadows, Flying Waters, Ancient Sanctuary, the Gestral Village, Esquie's Nest, Stone Wave Cliffs, the Forgotten Battlefield, Monoco's Station and Old Lumiere, defeating the first and second Axon, reaching the Monolith, defeating the Paintress, returning to Lumiere in Act 2, and beating the final boss. The rest are optional: unlocking all of Esquie's world-map abilities, the ten Nevron quests, the five Gestral Beach minigames, the superbosses Simon, Clea, Sprong, the Serpenphare and the Chromatic Petank, clearing all 33 Endless Tower fights, finding the nine Lost Gestrals, completing the Painting Workshop, maxing each companion relationship, and a set of per-character combat feats.",
                "The catalog marks it difficulty 3. The game has one main ending path for achievements and free exploration opens up in Act 3, so almost nothing is permanently missable - but a few need care: 'Follow The Trail' (all 49 journals) can only be finished in Act 3 after the optional superboss, 'Connoisseur' (all 33 music records) is easy to leave incomplete, 'Professional' (a no-damage boss kill) and the Act 1 prologue 'A Peculiar Encounter' both want to be done at the first opportunity, and Maelle's relationship achievement requires picking the '(Truth)' dialogue during her level 7 scene.",
                "Tip: build one character around a combat-mastery achievement and keep them in the active party - 'Perfect Flow' (Lune), 'Synergy' (Maelle), 'Maximisation' (Sciel), 'Wheel Control' (Monoco) and 'Perfection' (Verso) each want a specific mechanic executed over several consecutive turns, which is far easier to set up deliberately than to stumble into."
            ]
        },
        {
            "heading": "Main Story: Across the Continent",
            "body": [
                "Embarking on the Expedition and finding your way through Spring Meadows, Flying Waters, Ancient Sanctuary, the Gestral Village, Esquie's Nest, Stone Wave Cliffs, the Forgotten Battlefield, Monoco's Station and Old Lumiere, defeating the first and second Axon, reaching the Monolith, defeating the Paintress, returning to Lumiere in Act 2, and defeating the final boss at the end of Act 3.",
                "The achievements here: Lumière (Embark on the Expedition.); Spring Meadows (Find your way through Spring Meadows (story progress).); Flying Waters (Find your way through Flying Waters (story progress).); Ancient Sanctuary (Find your way through Ancient Sanctuary (story progress).); Gestral Village (Find your way through the Gestral Village (story progress).); Esquie's Nest (Find your way through Esquie's Nest (story progress).); Stone Wave Cliffs (Find your way through Stone Wave Cliffs (story progress).); Forgotten Battlefield (Find your way through the Forgotten Battlefield (story progress).); Monoco's Station (Find your way through Monoco's Station (story progress).); Old Lumière (Find your way through Old Lumiere (story progress).); First Axon (Defeat the first Axon boss.); Second Axon (Defeat the second Axon boss.); Monolith (Reach the Monolith.); Paintress (Defeat the Paintress.); Back to Lumière (Return to Lumiere during Act 2.); The End (Defeat the final boss at the end of Act 3.)."
            ]
        },
        {
            "heading": "World Exploration & Superbosses",
            "body": [
                "Unlocking all of Esquie's world-map traversal abilities, collecting every prior-expedition journal, completing all ten Nevron quests, defeating the optional bosses Simon, winning the five Gestral Beach minigames, defeating Clea, clearing all 33 Endless Tower fights, finding the nine Lost Gestrals, defeating the Serpenphare and Sprong world bosses, completing the Painting Workshop, and reaching relationship level 7 with Sciel, Monoco, Maelle, Lune and Esquie.",
                "The achievements here: Plane, Train, and Submarine (Unlock all five of Esquie's world-map traversal abilities (swim, fly, dive, and the rest).); Follow The Trail (Find all of the journals from prior expeditions.); Aiding the Enemy (Complete all ten Nevron ('Sad Monster') quests scattered across the world map.); Peace At Last (Defeat Simon, an optional endgame superboss.); Gestral Games (Win all five of the Gestral Beach minigames.); Clea (Defeat Clea, an optional superboss.); “Endless” (Complete all 33 fights of the Endless Tower.); Lost Gestrals (Find all nine Lost Gestrals.); À On (Defeat the Serpenphare world boss (the 'A On' encounter).); Sprong (Defeat the Sprong world boss.); Noir et Blanc (Complete the Painting Workshop area ('Noir et Blanc').); Sciel (Reach relationship level 7 with Sciel.); Monoco (Reach relationship level 7 with Monoco.); Maelle (Reach relationship level 7 with Maelle - requires choosing the '(Truth)' dialogue option during her level 7 scene.); Lune (Reach relationship level 7 with Lune.); Esquie (Reach relationship level 7 with Esquie.)."
            ]
        },
        {
            "heading": "Progression & Combat Mastery",
            "body": [
                "Upgrading a weapon once and then fully, consuming a Lumina point, reaching levels 33, 66 and 99, Gustave's charged Overcharge break, and the per-character feats: Lune's Perfect Flow, Maelle's Synergy, Sciel's Maximisation, Verso's Perfection, Monoco's Wheel Control, the Chromatic Petank's Carreau Parfait, acquiring all 45 of Monoco's skills, unlocking every playable character, and using a level 3 Gradient Attack.",
                "The achievements here: Weapon Upgrade (Upgrade a weapon once.); Weapon Mastery (Fully upgrade a weapon.); Lumina (Consume a Lumina point.); Expeditioner (Reach level 33.); Trailbreaker (Reach level 66.); Survivor (Reach level 99.); Overcharge (With Gustave, use a fully charged Overcharge that Breaks an enemy.); Perfect Flow (As Lune, consume Stains on four consecutive turns ('Perfect Flow').); Synergy (As Maelle, use Percee on a marked enemy while in Virtuose Stance ('Synergy').); Maximisation (As Sciel, consume 20 Foretell on a single target during Twilight ('Maximisation').); Perfection (Reach Rank S as Verso ('Perfection').); Wheel Control (As Monoco, cast an upgraded Bestial Wheel skill on four consecutive turns ('Wheel Control').); Carreau Parfait (Defeat the Chromatic Petank boss ('Carreau Parfait').); Feet Collection (Acquire all 45 of Monoco's Bestial Wheel skills ('Feet Collection').); Expedition 33 (Unlock all playable characters.); Chroma Proficiency (Use a level 3 Gradient Attack.)."
            ]
        },
        {
            "heading": "Records, Encounters & the Legend",
            "body": [
                "Finding all 33 music records, breaking a Paint Cage, breaking an enemy, defeating a boss without taking damage, witnessing an optional scene at camp, unlocking Esquie as a playable character, and defeating the Mime in Lumiere.",
                "The achievements here: Connoisseur (Find all 33 music records.); Paint Cage (Break a Paint Cage.); Time to Spill Some Ink (Break an enemy.); Professional (Defeat a boss without taking any damage.); Curious (Witness an optional scene at camp.); Legend (Unlock Esquie as a playable party member ('Legend').); A Peculiar Encounter (Defeat the Mime in Lumière.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the main story through all three acts, picking up 'A Peculiar Encounter' against the Mime in Lumiere as soon as it is available.",
                "2. As soon as free exploration opens, unlock all of Esquie's world-map abilities and start clearing the Nevron quests, Lost Gestrals and Gestral Beach minigames.",
                "3. Work through the optional bosses - Sprong, the Serpenphare, the Chromatic Petank, the Painting Workshop, then Simon and Clea once your party is strong.",
                "4. Grind the Endless Tower's 33 fights and finish the journal and music-record collections (both are only completable in Act 3).",
                "5. Set up the per-character combat-mastery feats deliberately in a safe fight, and max each companion relationship - remember Maelle needs the '(Truth)' choice.",
                "Tip: keep a 'Professional' attempt (a no-damage boss kill) in mind for an early, low-damage boss you can out-level and parry cleanly, rather than saving it for a hard late fight."
            ]
        }
    ]
};
