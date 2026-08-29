// Sniper Elite 5 Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/sniper-elite-5.json), whose 71 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1029690 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js). 3 hidden achievements ship no Steam description; their conditions here are curatorial, cross-checked against the game's wiki plus community 100% guides, and kept spoiler-light.
// - Sections group achievements by what each one actually requires.
export const GUIDE = {
    "slug": "sniper-elite-5-achievement-guide",
    "category": "game",
    "gameSlug": "sniper-elite-5",
    "icon": "🎯",
    "title": "Sniper Elite 5 Achievement Guide",
    "summary": "A practical guide to all 71 Steam achievements in Sniper Elite 5 - campaign, multiplayer & survival, weapon mastery, combat techniques, collectibles & map secrets, season pass missions, hidden achievements.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Sniper Elite 5 has 71 Steam achievements, 3 of them hidden (all three are late campaign-mission completion markers). The list covers the eight-mission campaign, a large set of cumulative kill counters and weapon-mastery goals, per-mission \"secret\" objectives, the collectibles on each map, a little multiplayer and Survival, and a block for each Season Pass mission.",
                "Nothing is missable - every mission replays freely at any difficulty, and counters are account-wide. The two real time sinks are the kill-count grind (350 rifle kills, 300 secondary, 100,000 m total kill distance) and Best of the Best, a full campaign clear on Authentic.",
                "Tip: do a first campaign pass on a comfortable difficulty picking up collectibles and the map-specific secret kills, then replay individual missions on Authentic for Best of the Best while the kill counters top themselves off."
            ]
        },
        {
            "heading": "Campaign",
            "body": [
                "The visible campaign markers: the mission completions (Missions 1, 2, 3, 4 and 6), killing Möller at 600 m, completing the campaign, Best of the Best (whole campaign on Authentic), and No Stone Unturned (16 optional objectives).",
                "The achievements here: Meeting Resistance (Weaken the Atlantic wall and rendezvous with Blue Viper.); Confirming Suspicions (Raid Chateau de Berengar and Möller's Office.); The Kraken Wakes (Infiltrate Beaumont-Saint-Denis and Uncover Operation Kraken.); It's Starting to Crack (Destroy Operation Kraken's production facility at Martressac.); Taking it Back (Liberate Desponts-sur-Douve and secure Allied transport routes.); Can't Outrun A Bullet (Kill Möller with a rifle at a distance of 600 meters or more.); Liberté (Complete the campaign.); Best of the Best (Complete the entire campaign on Authentic difficulty.); No Stone Unturned (Complete 16 optional objectives.)."
            ]
        },
        {
            "heading": "Multiplayer & Survival",
            "body": [
                "The non-campaign modes: winning an Axis Invasion as the Invader, defeating an invading Sniper Jager, playing a team-based PVP match, and completing three Survival missions.",
                "The achievements here: Opposing Force (Win one Axis Invasion as an Invader.); Enemy at the Gates (Defeat an invading Sniper Jager.); Fields of Glory (Play one team-based PVP match); Shoot for the Moon (Complete three survival missions.)."
            ]
        },
        {
            "heading": "Weapon Mastery",
            "body": [
                "The progression counters: reaching rank 40, hitting every organ with a rifle, the six-medal mastery goals for pistols, secondaries and rifles, Master-at-arms (master every weapon), the per-class kill counts (150 pistol, 300 secondary, 350 rifle), and 100,000 m of total kill distance.",
                "The achievements here: Climbing the Ladder (Reach rank 40.); Organ Grinder (Hit every organ at least once with a rifle.); Master of Pistols (Obtain six pistol-related mastery medals.); Master of Secondaries (Obtain six secondary-related mastery medals.); Master of Rifles (Obtain six rifle-related mastery medals.); Master-at-arms (Become the Master of each weapon.); Gunslinger (Kill 150 enemies with a Pistol.); Skirmisher (Kill 300 enemies with a Secondary Weapon.); Sharpshooter (Kill 350 enemies with a Rifle.); The Long Game (Total kill distance of 100,000 meters.)."
            ]
        },
        {
            "heading": "Combat Techniques",
            "body": [
                "The technique-specific feats: a no-heal mission, making a tank destroy another vehicle, 50 trap kills, iron-sight kills (150 any weapon, 150 rifle), 20 booby-trap kills, 50 heavy-weapon kills, a 3-for-1 grenade, kills with 20 different weapons, a 100 m+ testicle shot, 50 found-weapon kills, 250 ghost kills, 50 sound-masked kills, 100 lethal takedowns, and 50 tall-grass kills.",
                "The achievements here: Just a Flesh Wound (Complete a mission, excluding the \"Loose Ends\" mission, in any difficulty without healing.); Strategist (Make a tank shoot and destroy another enemy vehicle.); Set Europe Ablaze (Kill 50 enemies with traps.); Precision Is Key (Kill 150 enemies with any weapon while in Iron Sights.); Out of Scope (Kill 150 enemies with a rifle while in Iron Sights.); Rigged to Blow (Kill 20 soldiers using booby traps.); My Little Friend (Kill 50 soldiers with heavy weapons.); Explosive Efficiency (Kill 3 on-foot soldiers with one grenade.); Lord of War (Get a kill with 20 different weapons.); Die Nussknacker Sweet! (Get a testicle shot with a rifle from a distance of 100 meters or more.); Resourceful (Kill 50 enemy soldiers with Found Weapons.); Der Geist (Achieve 250 ghost kills.); As quiet as a mouse (Kill 50 enemies during a Sound Mask.); Close Quarters (Perform 100 lethal takedowns.); Snake in the Grass (While in Tall Grass, kill 50 soldiers.)."
            ]
        },
        {
            "heading": "Collectibles & Map Secrets",
            "body": [
                "The per-map collection sets (41 personal letters, 39 classified documents, 24 hidden items, 24 Dead-eye Targets, 24 workbenches) and the scripted secret kills (Möller's car, the Martressac train accident, the three bridge snipers, every vehicle type in Secret Weapons, the St Nazaire shot without Empty Lung, and the two Möller execution methods).",
                "The achievements here: From Paris with Love (Collect 41 Personal letters.); Burn after reading (Collect 39 classified documents.); Souvenir hunter (Collect 24 Hidden Items.); Eagle Eyed (Destroy 24 Dead-eye Targets.); Tinkerer (Interact with 24 workbenches.); It'll Buff Right Out (Destroy Möller's shiny new car.); Locomotion Commotion (In Martressac, create an accident that destroys the train in the storage area.); Up close and personal (Melee takedown each one of the three snipers guarding the bridge.); Road Rage (In Secret Weapons, find and destroy one of each type of vehicle present in this mission.); Don't hold your breath (Make the final shot in St Nazaire without using Empty Lung.); Brains of the Operation (Kill Möller with a headshot.); Sight Beyond Sights (Kill Möller with a rifle, while in Iron Sights.)."
            ]
        },
        {
            "heading": "Season Pass Missions",
            "body": [
                "One block per Season Pass mission: Wolf Mountain (the many Kill Hitler variants, the star ratings, Authentic), and the Conqueror, Rough Landing and Kraken Awakes missions (each with completion, a 2-star rating and an Authentic clear).",
                "The achievements here: Führerious Repetition (Wolf Mountain - Kill Hitler 5 times.); Reich To The Point (Wolf Mountain - Kill only Hitler and exfiltrate.); From Führer Away (Wolf Mountain - Kill Hitler at a distance of 300 meters or more.); Covert Elimination (Wolf Mountain - Kill Hitler and exfiltrate without ever being detected.); Alpha (Wolf Mountain - Complete the mission on Authentic difficulty.); Herr Today, Gone Tomorrow (Wolf Mountain - Complete the mission.); Operation Foxley (Wolf Mountain - Complete the mission with a 2 star rating.); Das Familienjuwel (Wolf Mountain - Kill Hitler with a testicle shot.); Last Resort (Complete the campaign mission - Landing Force.); Siegebreaker (Complete the campaign mission - Conqueror); Ghost of Falaise (Conqueror - Complete the mission with a 2 star rating.); Operation Overlord (Conqueror - Complete the mission on Authentic difficulty.); If You Go Down To The Woods Today (Complete the campaign mission - Rough Landing); Fight Another Day (Rough Landing - Complete the mission with a 2 star rating.); Stroll in the Woods (Rough Landing - Complete the mission on Authentic difficulty.); Shipbreaker (Complete the campaign mission - Kraken Awakes.); Sink or Swim (Kraken Awakes - Complete the mission with a 2 star rating.); Going Overboard (Kraken Awakes - Complete the mission on Authentic difficulty.)."
            ]
        },
        {
            "heading": "Hidden Achievements",
            "body": [
                "Three achievements are hidden - all are simply campaign-mission completions:",
                "The achievements here: Change the Channel (Complete campaign Mission 5, \"Festung Guernsey\".); Target America (Complete campaign Mission 7, \"Secret Weapons\".); The Kraken Sleeps (Complete campaign Mission 8, \"Rubble and Ruin\".)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the campaign once on a comfortable difficulty, collecting letters, documents, hidden items, Dead-eye Targets and workbenches, and grabbing each map's secret kills as you pass them.",
                "2. Do the two Möller execution achievements and No Stone Unturned (16 optional objectives) across that pass or a light replay.",
                "3. Replay missions on Authentic for Best of the Best; the kill counters and rank 40 will fill on the way.",
                "4. Spend a session on multiplayer/Survival and then work through the Season Pass missions.",
                "Tip: the kill-count achievements are fastest on the large, enemy-dense maps (Spy Academy, Liberation) - replay them on a low difficulty with the relevant weapon class equipped."
            ]
        }
    ]
};
