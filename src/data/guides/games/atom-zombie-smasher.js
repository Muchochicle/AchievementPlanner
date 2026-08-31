// Atom Zombie Smasher Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/atom-zombie-smasher.json), whose 40 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   55040 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "atom-zombie-smasher-achievement-guide",
    "category": "game",
    "gameSlug": "atom-zombie-smasher",
    "icon": "☢",
    "title": "Atom Zombie Smasher Achievement Guide",
    "summary": "A practical guide to all 40 Steam achievements in Atom Zombie Smasher - none are hidden. Covers the campaign completions and modifier runs, the helicopter-rescue and per-mission kill feats, the cumulative rescue and kill milestones, and the mini-game and calendar extras.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Atom Zombie Smasher has 40 Steam achievements and none of them are hidden. They cover completing the campaign (and with the Triplets, Hardcore/Permadeath and Alt. Spawning modifiers, and a 20,000-point campaign), the helicopter-rescue feats (40 in one pickup, 100 / 200 / 300 in a mission, everyone in a mission), per-mission kill feats (100 with each unit type, 50 in one artillery / dynamite / landmine blast, 100 in a mission), the cumulative milestones (10,000 kills with each unit type, 500 Llama Bombs, 500 gold medals, 100,000 people and 10,000 scientists rescued), and a few extras - a sub-30-second mission, killing a Mega Zed, surviving the night, a merc at Level 5 veterancy, 100 rescues in July, and the KringleJammer mini-game.",
                "Nothing is missable - the campaign is roguelike and every counter is cumulative across runs.",
                "Tip: the cumulative 10,000-kill counts for each unit type accrue across every campaign you play, so just favour a different unit each run and they will complete over a handful of campaigns."
            ]
        },
        {
            "heading": "Campaign, Rescue & Llama Bombs",
            "body": [
                "Unlocking all vignettes, completing the campaign, the sniper / infantry / artillery / landmine / dynamite 10,000-kill counts, 40 in one helicopter pickup, 500 Llama Bombs, a four-territory Llama Bomb, the Triplets and Hardcore/Permadeath campaigns, a 20,000-point campaign, 500 gold medals, buying a Llama Bomb, and rescuing everyone in a mission.",
                "The achievements here: Bookworm (Unlock all the vignettes.); Zed Industrial Complex (Complete the campaign.); Long Arm (Accrue 10,000 sniper kills.); Big Dipper (Rescue 40 or more people in one helicopter pickup.); The Operators (Accrue 10,000 infantry kills.); The Big Stick (Accrue 10,000 artillery kills.); Remote Control (Accrue 10,000 landmine kills.); Wrecking Crew (Accrue 10,000 dynamite kills.); Llama-rama (Launch 500 Llama Bombs.); Tactical Camelid (Cleanse four Zed territories with one Llama Bomb.); Multiplicity (Complete a campaign with the Triplets modifier.); International Killing Machine (Complete a campaign with the Hardcore and Permadeath modifier.); Long November (Complete a 20,000 point campaign.); The Gold Standard (Accrue 500 gold medals.); Llamas on Demand (Purchase a Llama Bomb.); Champion of the People (Rescue everyone in a mission.)."
            ]
        },
        {
            "heading": "Rescue Milestones & Kill Counts",
            "body": [
                "Rescuing 100 / 200 / 300 people in a mission, a sub-30-second mission, killing a Mega Zed, surviving the night, 100,000 people and 10,000 scientists rescued, level-3 and level-4 outbreak missions, destroying all Zed, and the per-mission kill feats - 100 with snipers / infantry / artillery / dynamite / landmines, and 50 in one blast of each explosive.",
                "The achievements here: Choplifter (Rescue 100 people in a mission.); Rescue Raider (Rescue 200 people in a mission.); Maximum Overrescue (Rescue 300 people in a mission.); How Fast They Are (Complete a mission under 30 seconds.); Giant's Drink (Destroy a Mega Zed.); Night Owl (Survive the night.); The Lucky Ones (Rescue 100,000 people.); Hypothesis Now (Rescue 10,000 scientists.); The Big Leagues (Complete a level-3 outbreak mission.); The Worm has Turned (Complete a level-4 outbreak mission.); Spring Cleaning (Destroy all Zed in a mission.); Snipe Hunt (Use snipers to destroy 100 Zed in a mission.); Street Sweeper (Get 100 infantry kills in a mission.); Bombardier (Destroy 50 Zed in one artillery strike.); Powder Keg (Destroy 50 Zed in one dynamite explosion.); Watch Your Step (Destroy 50 Zed in one landmine explosion.); They Live (Complete a campaign with the Alt. Spawning modifier.); From Above (Get 100 artillery kills in a mission.); Lit Fuse (Get 100 dynamite kills in a mission.); Hit Somebody (Get 100 landmine kills in a mission.)."
            ]
        },
        {
            "heading": "Modifiers & Extras",
            "body": [
                "Completing a mission with 3 players, a merc at Level 5 veterancy, 100 rescues in July, and defeating Wave 7 in the KringleJammer mini-game.",
                "The achievements here: The Diplomats (Complete a mission with 3 players.); Ten Thousand Hours (Have a merc reach Level 5 veterancy.); Dog Days (Rescue at least 100 people in July.); KringleJammer (Defeat Wave 7 in the KringleJammer mini-game.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the campaign, favouring a different unit type each run so the 10,000-kill counts spread.",
                "2. Chase the per-mission feats deliberately - 300 rescues, a sub-30-second mission, 50 Zed in one blast, destroy all Zed.",
                "3. Do the modifier campaigns - Triplets, Hardcore/Permadeath, Alt. Spawning - and a 20,000-point campaign.",
                "4. Let the cumulative rescue and gold-medal milestones (100,000 people, 10,000 scientists, 500 gold medals) accrue.",
                "5. Mop up the extras - 3-player mission, Level 5 merc, a July run, and the KringleJammer mini-game.",
                "Tip: \"Champion of the People\" (rescue everyone in a mission) is easiest on a small early map - flood it with helicopters and infantry escorts and pull every civilian before the Zed spread."
            ]
        }
    ]
};
