// Legend of Grimrock 2 Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/legend-of-grimrock-2.json), whose 60 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   251730 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 1 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (TrueAchievements / Steam Community / game wikis) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "legend-of-grimrock-2-achievement-guide",
    "category": "game",
    "gameSlug": "legend-of-grimrock-2",
    "icon": "🐉",
    "title": "Legend of Grimrock 2 Achievement Guide",
    "summary": "A practical guide to all 60 Steam achievements in Legend of Grimrock 2 (1 hidden). Covers the completion, difficulty and combat achievements, the secret / treasure / item sweeps, the boss and area achievements, and the challenge feats and Insane Ironman clear. One achievement is hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Legend of Grimrock 2 has 60 Steam achievements and one is hidden - 'Relic', earned by digging three times on a single hidden spot in the Barren Desert to unearth the Cube (the clue is shown in an ending cinematic). The rest are open: entering the Nexus to finish the game, the Hard and Old School clears, the cumulative combat and travel counters, the secret and treasure sweeps, the four elemental essences and named items, all four armour sets, defeating each boss, entering each gated area, and the demanding 'Insane Ironman' clear (Ironman plus Single-use Crystals).",
                "The catalog marks it roughly three playthroughs and difficulty 4 - 'Insane Ironman', the Hard and Old School clears, and 'Seeker of Secrets' (every secret on the open island) are all separate, careful runs. Nothing is missable within a run: the island is open and fully backtrackable until you enter the Nexus.",
                "Tip: on your first run, use a secrets map and dig up every treasure chest as you find its spot - both 'Seeker of Secrets' and 'Treasure Hunter' are miserable to clean up after the fact on this large open island."
            ]
        },
        {
            "heading": "Completion, Difficulty & Combat",
            "body": [
                "Entering the Nexus, the Hard and Old School clears, a backstab, the cumulative counters (250 monsters, 500 melee, 500 missile/throwing, 100 power attacks, 10,000 tiles, 250 dives, 25/250/500 spells), learning 15 spells, mixing 10/50 potions, and polymorphing 10 times.",
                "The achievements here: Island Master (Enter the Nexus); Hard Boiled (Complete the game with hard difficulty setting); Doin’ It Old School (Complete the game with old school mode); Backstabber (Defeat a monster with a backstab attack); Monster Killer (Kill 250 monsters); Swordsman (Perform 500 melee weapon attacks); Marksman (Perform 500 missile or throwing weapon attacks); Specialist (Perform 100 power attacks); Go the Extra Mile (Travel 10000 tiles); Holy Diver (Dive 250 tiles); Apprentice Wizard (Cast 25 spells); Master Wizard (Cast 250 Spells); Archmage (Cast 500 spells); Sage (Learn 15 spells); Apprentice Alchemist (Mix a total of 10 potions); Master Alchemist (Mix a total of 50 potions); Identity Crisis (Polymorph 10 times)."
            ]
        },
        {
            "heading": "Secrets, Treasures & Items",
            "body": [
                "Finding 10 / 25 / 50 and all secrets, digging up three and all treasure chests, 8 skulls, one and four elemental essences, Bane, the pie, the assembled Meteor Hammer, 25 fish, 5 gold locks, maxing one and three skills, visiting 10 and all levels, and the archmage, rogue, Crystal and Meteor armour sets.",
                "The achievements here: Secret Spotter (Find 10 secrets); Secret Sniffer (Find 25 secrets); Secret Searcher (Find 50 secrets); Seeker of Secrets (Find all secrets); Booty Addict (Dig up three treasure chests); Treasure Hunter (Dig up all treasure chests); Skull Snatcher (Find 8 skulls); Elementary (Collect an elemental essence); Master of the Elements (Collect four elemental essences); Chop Chop (Find Bane); Piece of the Pie (Find the pie); Watcher of the Skies (Assemble the Meteor Hammer); Rodman (Catch 25 fish); Golden Boy (Open 5 gold locks); Expert (Max out a skill); Guru (Max out three skills); Explorer (Visit 10 levels); Cartographer (Visit all levels); I Have the Power! (Collect and wear archmage's uniform (4 pieces)); Like a Shadow (Collect and wear rogue's wardrobe (5 pieces)); Shiniest Knight of Them All (Collect and wear full set of Crystal armor (6 pieces)); Hard as a Rock (Collect and wear full set of Meteor armor (6 pieces))."
            ]
        },
        {
            "heading": "Bosses & Areas",
            "body": [
                "Defeating the Viper Roots, Summon Stones, Ratling Boss, Herder's Den, the Wormbound brothers and the Lindworm, and entering the Shrine of Balance, the Archives, the Pyramid of Umas, the Cemetery, the Castle and the Crystal Mines.",
                "The achievements here: Extreme Gardening (Defeat the Viper Roots); Having a Gneiss Time (Defeat the Summon Stones); Pest Control (Defeat the Ratling Boss); Fumigation (Defeat Herder's Den); Rest in Peace (Defeat the Wormbound brothers); Dragon Slayer (Defeat the Lindworm); Enlightenment (Enter the Shrine of Balance); Code Cracker (Open the door to the Archives); Snake Charmer (Enter the Pyramid of Umas); Hallowed Ground (Open the gate to the Cemetery); Castle Crasher (Enter the Castle); Mine Sweeper (Enter the Crystal Mines)."
            ]
        },
        {
            "heading": "Challenge Feats & Ironman",
            "body": [
                "Summoning the Viper Roots in under 6 minutes, killing a monster by throwing pants, a level-10 farmer, a one-blow kill, a Magma Golem, the hidden Cube relic, an unarmed killing blow, a telefrag, and the Insane Ironman clear (Ironman plus Single-use Crystals).",
                "The achievements here: Gotta Go Fast (Summon the Viper Roots in under 6 minutes); Full Monty (Kill a monster by throwing pants at it); Gluttony (Reach level 10 with a farmer); Unstoppable (Kill a monster with a single blow); Turn off the Heat (Defeat a Magma Golem); Relic (Dig three times on a single hidden spot in the Barren Desert to unearth the Cube relic - it also counts as a secret, and the clue is shown in one of the ending cinematics.); Fist Fighter (Deal a killing blow with unarmed attack); Telefragged (Kill a monster by teleporting on it); Insane Ironman (Complete the game with Ironman and Single-use Crystals modes turned on)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play a first run on Normal with a secrets map, digging up every treasure chest as you go.",
                "2. Collect the four elemental essences, the named items and all four armour sets, and defeat every boss.",
                "3. Dig up the hidden Cube in the Barren Desert for the 'Relic' achievement.",
                "4. Replay on Hard, and do an Old School run.",
                "5. Do a dedicated Insane Ironman run (Ironman plus Single-use Crystals) once you know the island and the puzzle solutions.",
                "Tip: 'Gotta Go Fast' (summon the Viper Roots in under 6 minutes) is a standalone attempt from a fresh save - learn the opening route and the four essence-free path to the trigger."
            ]
        }
    ]
};
