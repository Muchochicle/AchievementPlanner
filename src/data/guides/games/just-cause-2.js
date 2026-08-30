// Just Cause 2 Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/just-cause-2.json), whose 50 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   8190 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "just-cause-2-achievement-guide",
    "category": "game",
    "gameSlug": "just-cause-2",
    "icon": "🪂",
    "title": "Just Cause 2 Achievement Guide",
    "summary": "A practical guide to all 50 Steam achievements in Just Cause 2 - none are hidden. Covers the seven-mission Agency story and its difficulty bonuses, the stronghold takeovers and faction missions, the Chaos, collection and exploration grinds, the grappling-hook and combat kill feats, and the driving, flying and traversal challenges across the island of Panau.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Just Cause 2 has 50 Steam achievements and none of them are hidden. A handful come from the short Agency story - the seven story missions and the difficulty-completion bonuses (which stack downward, so an Extreme clear also grants the Hard and Normal ones) - but the overwhelming majority are open-world grinds across the enormous island of Panau: causing Chaos, completing 1000 sabotages, assassinating 25 colonels, taking over strongholds, running faction missions, and collecting thousands of resource and faction items from hundreds of locations.",
                "Nothing is missable - every achievement is a cumulative counter or a repeatable activity, and the world stays fully open before and after the story. The catch is sheer volume: 'Destroyer' alone wants 1000 sabotages, 'Leaving No Rock Unturned' wants 1000 resource items, and 'Trying Anything Once' wants you to drive all 104 vehicles in the game. This is a long completion measured in the high tens of hours of free-roam.",
                "Tip: work toward 100% completion of settlements and military bases as your main activity - each one you fully clear counts sabotages, resource items, faction items and location discovery all at once, so chasing settlement completion is by far the most efficient way to move every collection and Chaos counter at the same time."
            ]
        },
        {
            "heading": "Story & The Agency",
            "body": [
                "The seven Agency story missions, the Normal/Hard/Extreme difficulty-completion bonuses, taking over 3 and then 9 strongholds, completing 49 faction missions, and causing Chaos for the first time.",
                "The achievements here: Welcome to Panau (Complete story mission 1.); Casino Bust (Complete story mission 2.); The White Tiger (Complete story mission 3.); Mountain Rescue (Complete story mission 4.); Three Kings (Complete story mission 5.); Into the Den (Complete story mission 6.); A Just Cause (Complete story mission 7.); Top Agent (Bonus for completing the game on normal difficulty.); Heroic Agent (Bonus for completing the game on hard difficulty. Also gives you the bonus for normal difficulty.); Legendary Agent (Bonus for completing the game on extreme difficulty. Also gives you the bonus for hard and normal difficulties.); Gaining a Foothold (Complete 3 stronghold takeovers.); Conqueror of Panau (Complete 9 stronghold takeovers.); A Trusted Ally (Complete 49 faction missions.)."
            ]
        },
        {
            "heading": "Chaos, Collection & Exploration",
            "body": [
                "The big open-world counters: 100 and then 1000 sabotages, assassinating 25 colonels, completing 10 and 50 challenges, collecting 100/1000 resource items and 150 faction items, discovering 100 locations, and reaching 100% completion in 15 and then 100 locations.",
                "The achievements here: First Taste of Chaos (Cause chaos for the first time.); Saboteur (Complete 100 sabotages.); Destroyer (Complete 1000 sabotages.); Professional Hitman (Assassinate 25 colonels.); Up to the Challenge 1 (Complete 10 challenges.); Up to the Challenge 2 (Complete 50 challenges.); Leaving No Rock Unturned (Collect 1000 resource items.); Finders Keepers (Collect 100 resource items.); Faction Benefactor (Collect 150 faction items.); Globetrotter (Discover 100 locations.); Freeroamer 1 (Reach 100% complete in 15 locations.); Freeroamer 2 (Reach 100% complete in 100 locations.)."
            ]
        },
        {
            "heading": "Combat & Grappling-Hook Kills",
            "body": [
                "Kill-feat achievements: 750 total kills, 50 melee kills, and a run of signature grappling-hook stunts - grapple-falls, dragging enemies behind vehicles, suspending them in the air, juggling falling enemies, road-rage vehicle kills, headshots, and the timed killing and destruction frenzies.",
                "The achievements here: Body Count (Kill 750 enemies.); Unarmed and Dangerous (Kill 50 enemies using melee attacks.); Gravity is a Bitch! (Kill 30 enemies by using the grappling hook and making them fall to their death.); Follow Me! (Kill 5 enemies by dragging them behind a vehicle with the grappling hook.); Hang 'em High! (Kill 30 enemies while they're suspended in the air with the grappling hook.); Wrecking Ball (Kill 5 enemies by smashing them with an object tethered to your vehicle with the grappling hook.); Piñata Party (Kill 5 enemies with the melee attack while they're suspended with the grappling hook.); Juggler (Kill 30 enemies while they're falling through the air.); Road Rage (Kill 30 enemies by mowing them down with vehicles.); Marksman (Kill 50 enemies with headshots.); Killing Frenzy (Kill 20 enemies in 60 seconds.); Invincible Warrior (Kill 50 enemies in a row with inventory weapons without losing health.); Destruction Frenzy (Destroy 30 objects in 60 seconds.)."
            ]
        },
        {
            "heading": "Driving, Flying & Traversal",
            "body": [
                "Vehicle and movement challenges: driving 30 different vehicles and then all 104, a 75km land journey, 50 hijacks, 100 stunt-driver points, the parachute-climb and 1000m base jump, flying under 30 unique bridges, low flying, reaching 50% and 75% overall completion, and standing on the highest point of Panau.",
                "The achievements here: Test Driver (Drive 30 different vehicles.); Trying Anything Once (Drive all 104 vehicles.); Road Trip (Travel 75 kilometers by land vehicle.); Please Step Out of the Vehicle (Hijack 50 enemy vehicles.); Stunt Driver (Get 100 stunt driver points.); Halfway there (Reach 50% completion in the normal mode or mercenary mode.); Parachute Climber (Open the parachute and then land on foot 300 meters above the starting height.); I Believe I Can Fly (Base jump 1000 meters.); Bridge Limbo (Fly an airplane under 30 unique bridges in Panau.); Low Flyer (Fly an airplane close to the ground for 30 seconds.); Perfectionist (Reach 75% completion in the normal mode or mercenary mode.); Top of the World (Stand on foot at the highest point of Panau.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through the seven Agency story missions on Normal difficulty to open up the full map and unlock fast travel and the black-market vehicle drops.",
                "2. Switch to systematically 100%-ing settlements and military bases region by region - this simultaneously feeds sabotages, resource items, faction items, location discovery and Chaos, and naturally completes strongholds and faction missions along the way.",
                "3. Knock out the combat and grappling-hook kill feats opportunistically while clearing bases - grapple-falls, air suspensions, drag kills, headshots, and the timed frenzies.",
                "4. Do the driving and flying challenges: drive as many of the 104 vehicles as you can (the black market covers most), fly under the 30 bridges, do the base jump and parachute climb, and rack up stunt points.",
                "5. Mop up the remaining counters (1000 sabotages, 1000 resource items, 25 colonels, all 104 vehicles) and finish with the difficulty grind - an Extreme clear grants the Hard and Normal bonuses too.",
                "Tip: the 104-vehicle achievement is the most commonly missed - keep a checklist and make a point of buying and driving every black-market car, boat, plane and helicopter at least once, since a few vehicles only ever appear in specific story or faction missions."
            ]
        }
    ]
};
