// Kingdom Rush Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/kingdom-rush.json), whose 74 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   246420 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "kingdom-rush-achievement-guide",
    "category": "game",
    "gameSlug": "kingdom-rush",
    "icon": "🏹",
    "title": "Kingdom Rush Achievement Guide",
    "summary": "A practical guide to all 74 Steam achievements in Kingdom Rush - none are hidden. Covers the progression, star and grind achievements, the hero, boss and campaign achievements, and the tower-feat, secret and full-completion achievements.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Kingdom Rush has 74 Steam achievements and none of them are hidden. About a third are progression and grind - earn 15 / 30 / 45 stars, upgrade all basic towers, build 30 / 100 / 150 towers, kill 500 / 2,500 / 10,000 enemies, train and sacrifice thousands of soldiers, call waves early. The rest are map-specific feats (free the sasquatch, catch a fish, keep three Imperial Guards alive), boss defeats, the hero level-ups, and a set of secret discoveries (the elusive acorn, the mysterious crow, Nessie, the ninja master rat). Supreme Defender (finish the campaign in Veteran mode) is the hardest.",
                "Nothing is missable - every stage is replayable and the counters accumulate across all play. This is a short-to-medium completion; the grinds (10,000 kills, 1,000 sacrificed soldiers, 45 stars) and the Veteran-mode campaign clear are the longest parts.",
                "Tip: three-star every stage on normal first for the star achievements and the tower/kill grinds, then replay the campaign on Veteran, and use Stage Select with a guide for the map-specific secret discoveries."
            ]
        },
        {
            "heading": "Progression, Stars & Grinds",
            "body": [
                "Upgrading all basic towers to level 3, earning 15 / 30 / 45 stars, building 30 / 100 / 150 towers, first kill and 500 / 2,500 / 10,000 kills, calling 10 waves early and all waves early in one mission, opening 5 information cards, Rain of Fire 5 times in a stage, 100 meteor-shower kills, changing the rally point 200 times, 50,000 soldier life regenerated, training 100 and sacrificing 1,000 soldiers, selling 30 towers and 5 in one mission, and an impatient early wave call.",
                "The achievements here: Home Improvement (Upgrade all basic tower types to level3.); Starry (Earn 15 stars.); Constructor (Build 30 towers.); First Blood (Kill one enemy.); Bloodlust (Kill 500 enemies.); Daring (Call 10 waves early.); What's that? (Open 5 information cards.); Armageddon (Use Rain of Fire 5 times in a single stage.); Super Mario (Earn 30 stars.); Is he dead yeti? (Defeat J.T.); Engineer (Build 100 towers.); Specialist (Build all 8 towers specializations.); Nuts and Bolts (Defeat The Juggernaut); Slayer (Kill 2.500 enemies); Death from above (Kill 100 enemies with meteor showers.); Tactician (Change soldiers' rally point 200 times.); Superstar (Earn 45 stars.); The Architect (Build 150 towers.); Fearless (Call all waves early in a single mission.); Terminator (Kill 10.000 enemies.); Die Hard (Have your soldiers regenerate a total of 50.000 life.); G.I. Joe (Train 1.00 soldiers.); Cannon Fodder (Send 1.000 soldiers to their deaths.); Real Estate (Sell 30 towers.); Indecisive (Sell 5 towers in a single mission.); Impatient (Call a wave within 3 seconds of the icon showing up.)."
            ]
        },
        {
            "heading": "Heroes, Bosses & Campaign",
            "body": [
                "Recruiting max elves at the Silveroak Outpost, 3 surviving Imperial Guards, freeing the sasquatch, catching a fish, polymorphing 50 enemies, a 10-kill barbarian, holding 500 enemies with Wrath of the Forest, the Paladin heal and Holy Strike feats, 300 electricity kills, 1,000 cluster bomblets, 5 rock elementals, 4 Tesla towers, 50 poison kills, 100 missiles, 50 sniper kills, 500 axes, the sheep and disintegrate and teleport feats, defeating Vez'nan, completing the campaign, all heroic and all iron stages, and the boss defeats (Sarelgaz, Gul'Thak, Greenmuck), plus training a hero to level 5 and to max.",
                "The achievements here: Forest Diplomacy (Recruit max elves at The Silveroak Outpost.); Imperial Saviour (Have at least 3 Imperial Guards survive in the Citadel.); Like a Henderson (Free the sasquatch on the Icewind Pass.); Twin Rivers Angler (Catch a fish.); Shepherd (Polymorph 50 enemies into sheep.); Are you not entertained? (Have a single barbarian kill 10 enemies.); Entangled (Hold 500 or more enemies with Wrath of the Forest.); Medic! (Have your Paladins heal a total of 7.000 life.); Holy Chorus (Have your Paladins perform 100 Holy Strikes.); AC/DC (Kill 300 enemies with electricity.); Clustered (Drop 1.000 or more bomblets with the cluster bomb.); Elementalist (Summon 5 rock elementals in any one stage.); Energy Network (Build 4 Tesla towers in any stage.); Toxicity (Kill 50 enemies by poison damage.); Rocketeer (Shoot 100 missiles.); 50 shots, 50 kills (Snipe 50 enemies.); Axe rain! (Throw 500 or more axes.); Ovinophobia (Kill 10 or more sheep with your hands.); Dust to Dust! (Disintegrate 50 or more enemies.); Beam me up, Scotty (Teleport 250 or more enemies.); This is the end (Defeat Vez'nan.); Great Defender (Complete the campaign.); Heroic Defender (Complete all heroic stages.); Iron Defender (Complete all iron stages.); Arachnophobia (Defeat Sarelgaz and its minions.); Free Fredo (Help Fredo escape.); Orcs must die (Defeat Gul'Thak and its minions.); Lumberjack (Defeat Greenmuck and its minions.); Champion of Linirea (Train a hero up to level 5.); Legend of Linirea. (Train a hero up to max level.)."
            ]
        },
        {
            "heading": "Tower Feats, Secrets & Full Completion",
            "body": [
                "Stopping the Kingpin, the ice-troll and legion and demon feats, defeating Ulguk-Hai, Moloch and Myconid, the Shroom and Wererat and Elf-damage feats, the secret discoveries (Scrat's acorn, the 5 lost ice-shrooms, the mysterious crow, the hidden underwater monster, the ninja master rat), avoiding war by defeating Lord Blackburn, completing the campaign in Veteran mode, and firing the Sunray 20 times.",
                "The achievements here: I'am the law (Do not let The Kingpin escape.); Coolrunning (Defeat 10 Troll Pathfinders while they're treading on ice.); Scrat's Meal (Find the elusive acorn.); Plants vs Trolls (Find the 5 legendary lost ice-shrooms.); Don't feed the troll (Defeat Ulguk-Hai the Troll Warlord.); We dine in hell! (Have your soldiers survive the explosion of 300 demons.); Army of One (Defeat 9 legions before they replicate.); Hell-o! (Defeat Moloch the Demon Overlord.); Super Mushroom (Defeat Myconid, the Rotten Fungus.); Spore (Kill 25 Shrooms without them poisoning your soldiers.); Still counts as one (Have your Elves deal 10000 points of damage.); Nevermore (Capture the attention of the mysterious crow.); Nessie (Discover the hidden monster under water.); Game of Crowns (Defeat Lord Blackburn to avoid war between kingdoms.); Cowabunga (Find the ninja master rat.); Ratatouille (Kill 15 Wererats before they sicken any soldier.); Supreme Defender (Complete the campaign in Veteran mode.); Sunburner! (Fire the Sunray 20 times.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the campaign, three-starring stages for the 15 / 30 / 45 star achievements and the heroic and iron stage completions.",
                "2. Let the tower, kill and soldier grinds accumulate during that, then top up the big ones (10,000 kills, 150 towers, 1,000 sacrificed soldiers).",
                "3. Do the map-specific feats and secret discoveries via Stage Select with a guide.",
                "4. Do the boss defeats and hero level-ups (level 5 and max).",
                "5. Replay the whole campaign in Veteran mode for Supreme Defender.",
                "Tip: the secret-discovery achievements (acorn, crow, Nessie, ninja rat) are single clickable objects hidden on specific stages - a location guide turns each into a 30-second Stage Select visit rather than a hunt."
            ]
        }
    ]
};
