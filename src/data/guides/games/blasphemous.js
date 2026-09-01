// Blasphemous Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/blasphemous.json), whose 45 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   774361 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 23 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (PowerPyx / Game8 / PlayStationTrophies / TrueAchievements) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "blasphemous-achievement-guide",
    "category": "game",
    "gameSlug": "blasphemous",
    "icon": "✝️",
    "title": "Blasphemous Achievement Guide",
    "summary": "A practical guide to all 45 Steam achievements in Blasphemous (23 hidden). Covers every main boss, both original endings, the free Stir of Dawn ending, the collectible completion sets, the NPC quest lines, and the arena challenges. Twenty-three of the achievements are hidden - the bosses, secret bosses and questlines - and their unlock conditions are researched from community 100% guides.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Blasphemous has 45 Steam achievements and 23 are hidden. Ten are the main bosses - the Warden of the Silent Sorrow, Ten Piedad, Our Lady of the Charred Visage, the Tres Angustias, Esdras, Melquiades, Exposito, Quirce, Crisanta, and His Holiness Escribar - and the rest are secret bosses and NPC quest lines: Perpetua, the cherubs, talking with every corpse, the arena challenges, and the multi-step quests for Cleofas, the Pilgrim, the Kissers of Wounds, Viridiana, Lvdovico's shrine, the Lord of Salty Shores, the Candelaria shop, and the Egg of Deformity.",
                "The catalog marks it difficulty 4. Several achievements are permanently missable within a save because they depend on long NPC quest chains and offering sequences that lock out if you progress the main story too far - 'Rebirth' (Cleofas), 'Ultreia Et Suseia' (the Pilgrim), 'Mediterranean Diet' (the Kissers of Wounds) and 'Warm and Soft' (the Egg) are the classic traps. Follow a quest-order guide on a single run rather than improvising.",
                "Tip: prioritise the missable NPC quests over the collectible sets - the prayers, beads, relics and hearts can all be mopped up freely at the end via backtracking, but the questlines have hard cutoffs tied to boss kills."
            ]
        },
        {
            "heading": "Main Bosses",
            "body": [
                "Defeating the Warden of the Silent Sorrow, Ten Piedad, Our Lady of the Charred Visage, the Tres Angustias, Esdras, Melquiades, Exposito, Quirce, Crisanta and His Holiness Escribar, and unlocking endings A and B.",
                "The achievements here: A Long Path Ahead (Beat the Warden of the Silent Sorrow (the first boss).); No Mercy (Beat Ten Piedad.); Look Her In The Eye (Beat Our Lady of the Charred Visage.); Danse Macabre (Beat the Tres Angustias.); The Brother (Beat Esdras, of the Anointed Legion.); The Bejeweled Saint (Beat Melquiades, The Exhumed Archbishop.); Blind Innocence (Beat Exposito, Scion of Abjuration.); Ashes to Ashes (Beat Quirce of the Eternal Pyre.); Duel of Faith (Beat Crisanta of the Anointed Blade.); Summa Blasphemia (Beat His Holiness Escribar (the final boss).); The Path of the Believer (Unlock ending A.); The Path of the Unworthy (Unlock ending B.)."
            ]
        },
        {
            "heading": "Collectibles & Character Growth",
            "body": [
                "The Bull and the Moon (all cherubs), the 13 prayers, 7 relics, 30 rosary beads, 44 collectibles and 9 sword hearts, discovering every main area, maximum health, fervour, Mea Culpa level, flask capacity and bead slots, five different executions, and five Righteous Ripostes.",
                "The achievements here: The Bull and the Moon (Release all of the cherubs.); Last Words (Talk with all of the corpses.); Detestatio Sacrorum (Beat all of the arena challenges.); Unwavering Devotion (Get the 13 original prayers.); Skin and Bones (Get the 7 original relics.); Mysteria Lucis (Get the 30 original rosary beads.); Warden of the Ossuary (Get the 44 original collectibles.); Heartbreaker (Get the 9 original sword hearts.); Cvstodia's Pilgrim (Discover the main areas of Cvstodia.); Six Stinging Pains (Achieve maximum health.); Baptism of Faith (Achieve maximum fervor.); Mea Culpa (Achieve the maximum level of the sword Mea Culpa.); The Fountain of Life (Achieve maximum flask capacity.); Engracia (Achieve the maximum number of rosary bead slots.); Inquisition (Execute 5 different enemies.); Power Unleashed (Use a Righteous Riposte 5 times.)."
            ]
        },
        {
            "heading": "Secret Bosses, Quests & Challenges",
            "body": [
                "The tomb of the Lady of the Tailed Gown, Lvdovico's shrine, Viridiana's dying moments, Cleofas' redemption, the Pilgrim's final destination, the Lord of Salty Shores offerings, the Kissers of Wounds, the Candelaria shop, the Egg of Deformity, Perpetua, the bestiary, the Mea Culpa altars, 666 kills, the Redento/Cleofas meeting, a no-flask boss clear, the sub-3-hour bronze door, and 100% completion.",
                "The achievements here: The Desire of the Corrupted (Visit the tomb of The Lady of the Tailed Gown.); True Shrine (Bring all of the offerings to Lvdovico.); Dying Breath (Witness the dying moments of Viridiana.); Rebirth (Help Cleofas in his path of redemption.); Ultreia Et Suseia (Help the Pilgrim reach his final destination.); In the name of the High Wills (Bring all of the offerings to the Blessed Lord of Salty Shores.); Mediterranean Diet (Save all of the Kissers of Wounds.); Flea Market (Buy all of the items from the Candelaria shops.); Warm and Soft (Hatch the Egg of Deformity.); The Sister (Beat Perpetua.); Bestiary (Defeat the 51 original types of enemies.); Blood and Tears (Unlock all the abilities on the Mea Culpa altars.); The Number of the Beasts (Kill 666 enemies.); Crossing Souls (Provoke the meeting between Redento and Cleofás.); Requiem Aeternam (Defeat the original bosses without consuming any bile flasks.); Bronze Medal (Pass through the bronze door on the Bridge of Calvary in less than 3 hours.); Witness of The Miracle (Beat 100% of the game.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through the main story, defeating each boss as you reach it.",
                "2. Follow a quest-order guide for the missable NPC chains - Cleofas, the Pilgrim, the Kissers of Wounds, Viridiana, and the offering sequences for Lvdovico and the Lord of Salty Shores.",
                "3. Buy out the Candelaria shop and hatch the Egg of Deformity before their cutoffs.",
                "4. Fight the secret bosses (Perpetua, the tomb of the Lady of the Tailed Gown) and clear the arena challenges.",
                "5. Backtrack for the collectible sets (prayers, beads, relics, hearts), the no-flask boss clear, and 100% completion.",
                "Tip: 'Bronze Medal' (reach the bronze door on the Bridge of Calvary in under 3 hours) is easiest as a fresh speed run - don't try to fold it into your completion save."
            ]
        }
    ]
};
