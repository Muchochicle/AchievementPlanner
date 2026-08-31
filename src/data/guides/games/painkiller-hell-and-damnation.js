// Painkiller Hell & Damnation Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/painkiller-hell-and-damnation.json), whose 107 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   214870 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "painkiller-hell-and-damnation-achievement-guide",
    "category": "game",
    "gameSlug": "painkiller-hell-and-damnation",
    "icon": "🔫",
    "title": "Painkiller Hell & Damnation Achievement Guide",
    "summary": "A practical guide to all 107 Steam achievements in Painkiller Hell & Damnation - none are hidden. Covers the per-level ability-card unlocks and the challenge and solo-survival feats.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Painkiller Hell & Damnation has 107 Steam achievements and none of them are hidden. Roughly the first forty unlock the game's ability Tarot cards by completing a specific per-level objective in the solo campaign (beat the level, gib 123 enemies, collect 330 gold, kill a boss under a time limit, collect all Holy Items, and so on). The rest are challenge and skill feats - kill streaks with specific weapons, armour and ammo collection totals, destroying every object on a map, collecting all Holy Items on a map, and beating each of the solo-survival mode challenges.",
                "Nothing is missable - every level and challenge is replayable and the card objectives can each be retried.",
                "Tip: play the solo campaign once for the level completions, then do a dedicated pass per level for its card objective (they are shown in the level's info screen), and finish with the solo-survival challenges."
            ]
        },
        {
            "heading": "Ability Card Unlocks",
            "body": [
                "Unlocking the ability Tarot cards - each by completing a specific objective on its level in the solo campaign (beat the level, gib 123 enemies, collect 330 gold, a timed boss kill, all Holy Items, all ammo boxes, and so on).",
                "The achievements here: Endurance (Cemetery: Beat the level (Solo Campaign)); Haste (Tutorial: Destroy all objects  (Solo Campaign)); Time Bonus (Oriental Castle: Gib 123 enemies  (Solo Campaign)); Speed (Cathedral: Collect 330 pieces of gold dropped by enemies  (Solo Campaign)); Fury (Loonypark: Kill 3 monsters in a row using saw blade  (Solo Campaign)); Double Haste (Opera: Collect 100 souls  (Solo Campaign)); Dexterity (Swamp: Kill SwampThing in under 4:00  (Solo Campaign)); Iron Will (Orphanage: Gib 50 frozen enemies  (Solo Campaign)); Rage (Shadowland: Collect all Holy Items  (Solo Campaign)); Double Time Bonus (Colloseum: Pick up every ammo box  (Solo Campaign)); Triple Haste (Alastor: Kill Alastor in under 5:00  (Solo Campaign)); Soul Keeper (Atrium Complex: Finish level in under 7:00  (Solo Campaign)); Blessing (Enclave: Kill Necrogiant in under 2:00  (Solo Campaign)); Replenish (Colloseum: Morph into demon 3 times  (Solo Campaign)); Dark Soul (Opera: Find all secret areas  (Solo Campaign)); Soul Catcher (Trainstation: Cut limbs of 100 enemies using Soul Catcher  (Solo Campaign)); Forgiveness (Factory: Kill 30 enemies in demon mode  (Solo Campaign)); Greed (Orphanage: Kill all monsters  (Solo Campaign)); Vitality (Cathedral: Collect 500 gold  (Solo Campaign)); Divine Intervention (Loonypark: Possess 25 enemies using Soul Catcher  (Solo Campaign)); Soul Redeemer (Oriental Castle: Collect all Holy Items  (Solo Campaign)); Mercy (Shadowland: Kill Grim Reaper  (Solo Campaign)); Name of the Beast (Kill 666 enemies with Soul Catcher); Upside Down Beast (Kill 999 enemies with Shotgun); Farmer (Solo Campaign: Collect 2012 pieces of gold from fallen enemies); Adventurer (Solo Campaign: Find 25 secret areas); Grave Digger (Solo Campaign: Finish 1st chapter); Penthouse Down (Finish 2nd chapter); Evil's Orphans (Solo Campaign: Finish 3rd chapter); Neighbor of the Beast (Collect 667 souls of dismembered enemies); Spammer (Shoot 50000 times); I have friends (Play 10 different levels in cooperative mode); Warehouseman (Collect 500 ammo crates); Barrel hater (Destroy 300 barrels); Tornado (Kill 333 enemies with explosive weapons); Five Points (Kill 5 enemies with one rocket); Demon Kangaroo (Spend 666 seconds on bunny-hopping); Mass Chopper (Gib 500 enemies entirely with rockets); Nightmare Lover (Solo Campaign: Play whole game on Nightmare difficulty level); Sweet dreams (Solo Campaign: Play whole game on Trauma difficulty level)."
            ]
        },
        {
            "heading": "Challenges & Feats (Part 1)",
            "body": [
                "The collection and kill-streak feats - collecting 40 armours, per-weapon multi-kills, gold and soul totals, and the earlier map-objective and challenge achievements.",
                "The achievements here: Militarist (Collect 40 armors); Sniping Elite (Solo Campaign: Finish the level using stakes only and don't miss any hit); Plague (Kill 6666 enemies with stakes); Beard Grill (Kill 1000 enemies in Survival mode); Collector (Collect all available Black Tarrot cards); Twister (Kill 500 enemies with environmental explosions); Mountebank (Kill 123 enemies with combo damage); Sport Season (Capture 3 flags playing as Eve in one game); Insolent (Get 30 kills in 3 minutes in Deathmatch mode); Ghost (Finish level without being hurt); Surgeon (Play cooperative level and don't let your partner die); Mirror Effect (Kill enemy at the same time he kills you); Skewers (Kill 3 enemies with one Boltgun shot); Robber (Bring enemy flag to your base); Untouched (Don't die and win multiplayer game); Malicious (Don't let any of your enemies collect Quad Damage); 4x4 (Play with at least 4 other people and collect 4 frags more than any of your enemies); Best of the Best (Win Team Deathmatch with the highest score in your team); Last moment (Win Capture The Flag by bringing the flag to your base in last 10 seconds of the game); Employee of the month (Win Survival killing at least 2 times more monsters than your rivals); Scavenger (Kill 3 enemies with one shotgun blast); Jumping Death (Kill 256 enemies when bunnyhopping); Hygienic (Keep the hit ratio above 90% in whole level); Hard-bitten (Win Survival match); Halloween (Finish special Halloween map and collect all lollipops for Lucipher); Satan Claus (Defeat Satan Claus on special Christmas map); Psycho (Win deathmatch game on Psycho); Illuminati (Win survival game on Illuminati); Bridge Player (Kill all enemies on Bridge map (solo campaign)); Town Cleaner (Finish Town map (solo campaign)); Conclave (Select your own Pope in Conclave level); Battle Robber (Find all secrets on Bunker map(solo campaign)); Frag'n'Stein (Win Deathmatch match on Fragenstein); Evil Eggs (Collect all Satan's Eggs on Easter level); Monk (Beat the Atrium Complex challenge in solo survival mode.)."
            ]
        },
        {
            "heading": "Challenges & Feats (Part 2)",
            "body": [
                "The remaining feats - the column-flip, no-MonkTrap and per-map all-Holy-Items / all-objects / all-ammo runs, and beating each of the solo-survival mode challenges (Illuminati, Factory and the rest).",
                "The achievements here: Gondolier (Beat the City on Water challenge in solo survival mode.); Tenor (Beat the Opera challenge in solo survival mode.); Railwayman (Beat the Trainstation challenge in solo survival mode.); Priest (Beat the Unseen challenge in solo survival mode.); Pope (Beat the Chaos challenge in solo survival mode.); Savant (Beat the Illuminati challenge in solo survival mode.); Mourner (Beat the Inhumator challenge in solo survival mode); Psychiatrist (Beat the Psycho challenge in solo survival mode); Doctor (Beat the Fragenstein challenge in solo survival mode); Squint (Beat the Blink challenge in solo survival mode); Pigsticker (Beat the Meatless challenge in solo survival mode); Miner (Beat the Mines challenge in solo survival mode); Prisoner (Beat the Prison challenge in solo survival mode); Snowman (Beat the Snow Town challenge in solo survival mode); Undertaker (Finish the Graveyard); City Lights (Make your way through the Town); Bin Garner (Kill final enemy on Babel); Stoned (Defeat the Stone Golem on Angkor); Tank Killer (Beat the tank hordes on Pentagon); Merciful (Don't kill any zombies while solving the puzzles); Fireproof (Avoid any burns on Fire Plate Puzzle); Charged (Use 5 electric sparks under 20 seconds during boss fight); I ain't afraid o' no ghost (Discover how to summon Ghostship); Medical Supply (Let them burn: Destroy all 3 ambulances); Castle Break (Kill all the castle guards.); Pope Up (Solve the pope puzzle.); Flipper (Flip all 16 columns.); DYI (Finish 3rd arena without using MonkTrap.); Holy Sheet (Collect all holy items on Monastery map (solo campaign)); Destroyer (Destroy all objects on Ruins map (solo campaign)); Hamster (Collect all ammo on Pentagon map  (solo campaign)); Factorize (Beat the Factory challenge in solo survival mode)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the solo campaign once for the level-completion card unlocks.",
                "2. Return to each level for its specific card objective, shown in the level info screen.",
                "3. Grind the collection totals (40 armours, gold, souls) and the per-weapon kill-streak feats across replays.",
                "4. Do the per-map all-Holy-Items, all-objects and all-ammo runs.",
                "5. Beat every solo-survival mode challenge.",
                "Tip: the timed boss-kill card objectives are easiest once you have a few damage and haste cards unlocked - do the easy card levels first, then come back for the timed ones with a stronger loadout."
            ]
        }
    ]
};
