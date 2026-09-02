// Ys IX: Monstrum Nox Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/ys-ix-monstrum-nox.json), whose 54 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1351630 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 23 achievement(s) are Steam-hidden or ship no Steam
//   description; their description here is researched from community
//   100% guides and is a curatorial summary. Every other description is
//   Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "ys-ix-monstrum-nox-achievement-guide",
    "category": "game",
    "gameSlug": "ys-ix-monstrum-nox",
    "icon": "🌃",
    "title": "Ys IX: Monstrum Nox Achievement Guide",
    "summary": "A practical guide to all 54 Steam achievements in Ys IX: Monstrum Nox (23 hidden). The hidden achievements are the spoiler-free story and character-side-story markers, six 'explore 5 hours as each Monstrum leader' achievements, and the endgame challenges (Time Attack, Boss Rush, Nightmare, Vakh Medios). Everything else - the Balduq 100% sweeps, progression grinds, combat feats and Grimwald Nox - carries Steam's own text.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Ys IX: Monstrum Nox has 54 Steam achievements, 23 of them hidden. Adol Christin, imprisoned in the fortress city of Balduq, is transformed into a 'Monstrum' with supernatural Gifts and joins five others to fight the Lemures that spill from the Grimwald Nox. The visible achievements cover the Balduq 100% sweeps (map, chests, quests, all three Journal categories, affinity, landmarks, graffiti, Azure Petals, ritual relics), the progression grinds (2,000 NOX points, a million gold, all recipes, max skills, Ultimate weapons and armor, level 99), the combat feats (2,000 monsters, 1,000 Lemures, Break/Flash Guard/Flash Move/Boost/Extra counters), and the Grimwald Nox challenges.",
                "The 23 hidden achievements are the spoiler-free main-story and character-side-story markers, the six 'explore Balduq for 5 hours as each Monstrum leader' achievements, and the endgame challenges (Time Attack 30-second and no-damage kills, Boss Rush, Boss Rush no-retry, Nightmare clear, and Vakh Medios).",
                "The catalog marks it difficulty 3 and two playthroughs - the Nightmare clear is far easier carrying New Game + gear."
            ]
        },
        {
            "heading": "The Story",
            "body": [
                "The six hidden main-story markers (including two chapters both titled 'Monstrum Nox'), described spoiler-free.",
                "The achievements here: To Freedom (Story progress marker - reached at a specific point in the story, described here spoiler-free.); Adol, the Fugitive (Story progress marker - reached at a specific point in the story, described here spoiler-free.); Monstrum Nox (Story progress marker - reached at a specific point in the story, described here spoiler-free.); Capriccio of the Prison (Story progress marker - reached late in the story, described here spoiler-free.); Thus Spoke the Alchemist (Story progress marker - reached near the end of the story, described here spoiler-free.); Monstrum Nox (Story progress marker - completed the final chapter, described here spoiler-free.)."
            ]
        },
        {
            "heading": "The Monstrum",
            "body": [
                "Exploring Balduq for 5 hours as each of the six Monstrum leaders, and the five character side-stories (White Cat, Hawk, Doll, Raging Bull, Renegade).",
                "The achievements here: Crimson King, the Radiant (Explore Balduq for a total of 5 hours with the Crimson King (Adol) as the party leader.); White Cat, the Nimble (Explore Balduq for a total of 5 hours with the White Cat as the party leader.); Hawk, the Peerless (Explore Balduq for a total of 5 hours with the Hawk as the party leader.); Doll, the Resplendent (Explore Balduq for a total of 5 hours with the Doll as the party leader.); Raging Bull, the Unyielding (Explore Balduq for a total of 5 hours with the Raging Bull as the party leader.); Renegade, the Cunning (Explore Balduq for a total of 5 hours with the Renegade as the party leader.); The White Cat's Melancholy (Complete the White Cat's character side-story, described here spoiler-free.); The Feral Hawk's Fury (Complete the Hawk's character side-story, described here spoiler-free.); The Doll's Search (Complete the Doll's character side-story, described here spoiler-free.); The Raging Bull's Treasure (Complete the Raging Bull's character side-story, described here spoiler-free.); The Renegade's Secret (Complete the Renegade's character side-story, described here spoiler-free.)."
            ]
        },
        {
            "heading": "Endgame Challenges",
            "body": [
                "The Time Attack 30-second and no-damage boss kills, Boss Rush and Boss Rush without retrying, the Nightmare clear, and Vakh Medios.",
                "The achievements here: Greased Lightning (In Time Attack, defeat a boss in 30 seconds or less.); Fleeting Mirage (In Time Attack, defeat a boss without taking damage.); Paragon (Complete Boss Rush mode.); Indomitable Champion (Complete Boss Rush without retrying.); Nightmare Survivor (Clear the game on Nightmare difficulty or above.); Banisher of Dawn (Defeat the ultimate Lemures, Vakh Medios, outside of Time Attack.)."
            ]
        },
        {
            "heading": "Balduq 100%",
            "body": [
                "The completion sweeps - map, treasure chests, quests, the People / Monsters / Materials Journal categories, 300 krimelye travelled, full affinity, ritual relics, Azure Petals, graffiti, landmarks and shops.",
                "The achievements here: King of the Monstrums (Finish \"Balduq Prison\" by Adol Christin in its entirety by earning all achievements.); Cartographer (Complete the map of Balduq.); Seeker of Fortune (Attain 100% of all treasure chests.); Good Samaritan (Attain 100% of all quests.); Debonair Socialite (Attain 100% of all \"People\" entries in your Journal.); Monster Zoologist (Attain 100% of all \"Monsters\" entries in your Journal.); Material Girl (Attain 100% of all \"Materials\" entries in your Journal.); I Would Walk 300 Krimelye (Travel a total distance of 300 krimelye.); Ambassador of the Dandelion (Attain 100% of Affinity with all characters.); Hermetic Bastion (Attain 100% of Ritual Relics enhanced.); Fields of Blue (Attain 100% of Azure Petals found.); Art Critic (Attain 100% of graffiti discovered.); Intrepid Tourist (Attain 100% of landmarks discovered.); Shopaholic (Attain 100% of shops discovered.)."
            ]
        },
        {
            "heading": "Progression & Combat",
            "body": [
                "NOX points, a million gold, all recipes, max skills, Ultimate armor and weapons, level 99, the kill counters, the combat-technique counters, and the Grimwald Nox (S-rank one, clear all, S-rank all).",
                "The achievements here: Twilight Guardian (Have obtained a total of 2,000 NOX points.); Errant Millionaire (Have 1,000,000 Gold in possession.); Haute Cuisine (Unlock all 13 recipes at the Dandelion.); Virtuoso (Reach max level with all skills.); Dressed to Kill (Forge an Ultimate Armor.); Golden Anvil (Forge Ultimate Weapons for all Monstrums (6 in total).); Apex Predator (Reach level 99 with any character.); Culling the Herd (Defeat 2,000 monsters.); Lemures Exterminator (Defeat 1,000 Lemures.); Heartbreaker (Inflict Break 1,000 times.); Impervious (Use Flash Guard 100 times.); Untouchable (Use Flash Move 100 times.); Overdrive (Use Boost Mode 100 times.); Showstopper (Use Extra Skills 100 times.); Zenith of the Grimwald (Achieve an S in a Grimwald Nox.); Conqueror of the Nox (Clear all Grimwald Nox.); Vanquisher of the Nox (Achieve an S on all Grimwald Nox.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the story; the markers and character side-stories unlock as you progress, and rotate the party leader as you explore so the six 5-hour leader achievements tick down.",
                "2. Sweep Balduq for the 100% categories - map, chests, quests, Journal entries, graffiti, landmarks, Azure Petals - using the Monstrum Gifts to reach everything.",
                "3. Grind progression: a million gold, all recipes, max skills, Ultimate weapons for all six Monstrums and an Ultimate armor, level 99, and the kill and technique counters.",
                "4. Clear all the Grimwald Nox with S-rank, then Boss Rush (and Boss Rush without retrying) and the Time Attack 30-second and no-damage kills.",
                "5. On New Game +, do a Nightmare clear and beat Vakh Medios.",
                "Tip: swap the active leader every time you switch to a new district for collectible sweeps - the six 5-hour 'explore as leader' achievements only count roaming time, and spreading it across your normal 100% run means zero dedicated grind at the end."
            ]
        }
    ]
};
