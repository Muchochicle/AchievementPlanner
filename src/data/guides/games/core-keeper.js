// Core Keeper Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/core-keeper.json), whose 55 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1621690 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 31 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (PowerPyx / Game8 / PlayStationTrophies / TrueAchievements) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "core-keeper-achievement-guide",
    "category": "game",
    "gameSlug": "core-keeper",
    "icon": "⛏️",
    "title": "Core Keeper Achievement Guide",
    "summary": "A practical guide to all 55 Steam achievements in Core Keeper (31 hidden). Covers every boss in the mining sandbox - the Slime, Larva and Titan bosses, the Hydra trio, the endgame void bosses - plus the skill maxes, the legendary weapon obtains, and a set of one-off secrets. Thirty-one of the achievements are hidden and their unlock conditions are researched from community 100% guides.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Core Keeper has 55 Steam achievements and 31 are hidden. Twenty are boss kills: the three early bosses (Glurch, Ghorm, the Hive Mother), the Titans (Azeos, Ivy, Omoroth, Morpha, Ra-Akar, Igneous), Malugaz and King Slime, the Atlantean Worm, the three Hydras (Druidra, Crydra, Pyrdra), the Core Commander, Urschleim, and the Sunken Sea / void bosses (Nimruza, Oblidra, Sahabar). The rest are legendary-weapon obtains (the Oracle Card deck, the Rune Song, the Phantom Spark, the Soul Seeker, Stormbringer, the Credence of Ruin, the Titan Breath) and secrets (the Starlight Nautilus fossil, 200+ movement speed, sitting on a Caveling Toilet in a crown, and dressing as a key-art character).",
                "The catalog marks it difficulty 3. Nothing is missable - the world is persistent and every biome and boss stays reachable - but the progression is gated behind gear and biome unlocks, so the later Titans and void bosses need a well-equipped character. The skill-max achievements (100 points in each of a dozen skills) simply accumulate as you play.",
                "Tip: the boss achievements follow the natural progression order - Glurch, Ghorm and the Hive Mother open the way, then each Titan gates the next biome - so just keep pushing outward and upgrading gear rather than trying to skip ahead to a later boss."
            ]
        },
        {
            "heading": "Bosses: Slimes, Titans & Hydras",
            "body": [
                "Defeating Glurch, Ghorm, the Hive Mother, Azeos, Malugaz, Ivy, Omoroth, Morpha, Ra-Akar, Igneous and King Slime.",
                "The achievements here: A Slimey Encounter (Defeat Glurch the Abominous Mass.); Bugging Out (Defeat Ghorm the Devourer.); Watch Your Step (Defeat the Hive Mother.); From the Skies! (Defeat Azeos the Sky Titan.); You're a Wizard (Defeat Malugaz the Corrupted.); Toxic Personality (Defeat Ivy the Poisonous Mass.); From the Depths! (Defeat Omoroth the Sea Titan.); Slippery When Wet (Defeat Morpha the Aquatic Mass.); Just Deserts (Defeat Ra-Akar the Sand Titan.); Burning Through (Defeat Igneous the Molten Mass.); Slippery Shinobi (Defeat King Slime.)."
            ]
        },
        {
            "heading": "Skills, Legendary Items & Secrets",
            "body": [
                "Maxing 100 points in mining, cooking, fishing, gardening, melee, range, vitality, running, crafting, magic, summoning and explosives, the Oracle Card deck, the Rune Song, the Phantom Spark and the Soul Seeker legendary weapons, the Starlight Nautilus fossil, 200+ movement speed, the crowned-toilet secret, dressing as a key-art character, cherry trees, the Tune of Tempest, pets, cattle, the Ring of Rock and Stone, and 100 cookbook recipes.",
                "The achievements here: Diggy Diggy Hole (Gained 100 skill points in mining); Cheese it! (Gained 100 skill points in cooking); Completely Hooked (Gained 100 skill points in fishing); Nature Nurturer (Gained 100 skill points in gardening); ...Sting like a bee (Gained 100 skill points in melee); Robin Hood (Gained 100 skill points in range); Health Conscious (Gained 100 skill points in vitality); Float like a butterfly... (Gained 100 skill points in running); Crafty Explorer (Gained 100 skill points in crafting); The Heart of the Cards (Obtain the Oracle Card deck (collect all nine Oracle Cards from across the biomes).); The Rune Song (Obtain the Rune Song legendary sword.); The Phantom Spark (Obtain the Phantom Spark legendary bow (from the three ancient Sunken Sea cities).); The Soul Seeker (Obtain the Soul Seeker (an upgraded pickaxe crafted at the Ancient Forge).); Gossip Group (Talked to a Big Larva); Legendary Fossil (Catch the Starlight Nautilus in the Molten Quarry with the Galaxite Fishing Rod.); In a Rush (Reach over 200 movement speed.); Certified Chef (Discovered 100 recipes in the cook book); Farmer Midas (Harvested a golden plant); A Throne Fit for a King (Sit on a Caveling Toilet while wearing the King Slime Crown.); Rock and Stone! (Equipped the Ring of Rock and Ring of Stone); Impersonator Syndrome (Use a Magic Mirror to dress your character to match a key-art illustration character.); 5 Centimeters Per Second (Planted 10 Cherry Trees); A Strange Song (Play the Tune of Tempest); Your Very First (Hatched your first pet from an egg); Thalassophobia (Defeat the Atlantean Worm.); I want ’em all! (Stored all color variations of one pet type in a chest); A Good Life (Fed cattle); Pet Prodigy (Reached max level on a pet); A Wizard Is Never Late (Gained 100 skill points in magic); Stay Away From The Summoner! (Gained 100 skill points in summoning)."
            ]
        },
        {
            "heading": "Endgame Bosses & Legendary Weapons",
            "body": [
                "Defeating Druidra, Crydra and Pyrdra, the Core Commander, Urschleim, Nimruza, Oblidra and Sahabar, 8+ active minions, the Stormbringer, the Credence of Ruin and the Titan Breath legendary weapons, and using a waypoint.",
                "The achievements here: Song of the Woods (Defeat Druidra the Wild Titan.); Howl of the Sea (Defeat Crydra the Ice Titan.); Roar of the Flames (Defeat Pyrdra the Fire Titan.); Visitor From A Dying World (Defeat the Core Commander.); Cambrian Behemoth (Defeat Urschleim.); Legion Commander (Had 8 or more active minions); Wielder of Legends (Obtain the Stormbringer legendary weapon at a Rift Statue.); Beam Me Up (Used a waypoint); Explosion Mastery (Gained 100 skill points in explosions); Silence the Symphony (Defeat Nimruza, Queen of the Burrowed Sands.); Whisper of the Void (Defeat Oblidra the Void Lord (after collecting 10 Oblivion Fragments).); Calculated Prophecy (Defeat S.A.H.A.B.A.R.); The Credence of Ruin (Obtain the Credence of Ruin (two parts from puzzle structures, one from S.A.H.A.B.A.R.).); The Titan Breath (Obtain the Titan Breath (combine drops from the three Hydra bosses).)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Beat the three early bosses (Glurch, Ghorm, the Hive Mother) to open the main biomes.",
                "2. Push outward biome by biome, defeating each Titan and the Aquatic/Molten Masses as your gear allows.",
                "3. Collect the Oracle Cards, the Rune Song, the Phantom Spark and the Soul Seeker as you explore.",
                "4. Take on the Hydras, the Core Commander and Urschleim, then the Sunken Sea void bosses (Nimruza, Oblidra, Sahabar).",
                "5. Assemble the endgame legendary weapons (Stormbringer, the Credence of Ruin, the Titan Breath) and mop up the skill maxes and secrets.",
                "Tip: the dozen skill-max achievements just want 100 points each - play naturally and use every tool (mine, fish, cook, garden, fight melee and ranged) rather than grinding one skill in isolation."
            ]
        }
    ]
};
