// BioShock Infinite Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/bioshock-infinite.json), whose 80
//   achievements were sourced directly from Steam's own achievement
//   schema for appid 8870 via ISteamUserStats/GetSchemaForGame (fetched
//   through this app's own backend/services/steamApi.js). 59 of 80 ship
//   a real, official Steam description, quoted verbatim below.
// - The 21 hidden achievements ship no Steam description - all of them
//   unmissable story markers (14 main campaign, 7 Burial at Sea),
//   summarised as bare "story marker, no plot detail" (the God of War /
//   RDR2 house style).
export const GUIDE = {
    "slug": "bioshock-infinite-achievement-guide",
    "category": "game",
    "gameSlug": "bioshock-infinite",
    "icon": "🎈",
    "title": "BioShock Infinite Achievement Guide",
    "summary": "A practical guide to all 80 Steam achievements in BioShock Infinite - the weapon kill-count achievements, the Vigor / Tear / Sky-Line combat feats, the Gear / upgrade / collectible set, the Clash in the Clouds and Burial at Sea DLCs, and the 21 hidden story markers (main campaign and Burial at Sea), covered by name only.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "BioShock Infinite has 80 Steam achievements, 21 of them hidden - all of them story markers (14 in the main campaign, 7 across the Burial at Sea episodes). The visible list is combat feats (kill N with weapon X, with Vigors, on Sky-Lines), the Gear/upgrade/collectible set, the 1999 Mode challenge, and the two DLCs.",
                "Almost nothing is missable - chapter select lets you replay for the combat feats and collectibles, and the story markers are all unmissable - the exception being Scavenger Hunt (finish 1999 Mode without using a Dollar Bill machine), a whole-run challenge.",
                "Tip: play the campaign once for the story markers and the collectibles (Voxophones, Kinetoscopes, Infusions), then do a 1999 Mode run that is also Scavenger Hunt (no Dollar Bill machines), grabbing the weapon and Vigor kill-count feats along the way. The DLCs are separate blocks."
            ]
        },
        {
            "heading": "Weapon Kill Counts",
            "body": [
                "A kill-count achievement for each weapon: Sky-Hook executions and Sky-Line strikes, the Broadsider Pistol, the machine guns, shotguns, carbines, the Hand Cannon, the Sniper Rifle, the volley guns, the RPG and the Crank Gun.",
                "The achievements here: Industrial Accident (Killed 20 enemies with a Sky-Hook Execution.); Aerial Assassin (Killed 20 enemies with a Sky-Line Strike.); A Real Pistol (Killed 25 enemies with the Broadsider Pistol.); Passionately Reciprocated (Killed 150 enemies with the Founder Triple R Machine Gun or Vox Repeater.); Street Sweeper (Killed 50 enemies with the Founder China Broom Shotgun or Vox Heater.); Big Game Hunter (Killed 100 enemies with the Founder Huntsman Carbine or Vox Burstgun.); Loose Cannon (Killed 25 enemies with the Paddywhacker Hand Cannon.); On a Clear Day... (Killed 30 enemies with the Bird's Eye Sniper Rifle.); Here Little Piggy (Killed 30 enemies with the Founder Pig Volley Gun or Vox Hail Fire.); Master of Pyrotechnics (Killed 20 enemies with the Barnstormer RPG.); Seasoned to Taste (Killed 30 enemies with the Peppermill Crank Gun.)."
            ]
        },
        {
            "heading": "Vigors, Tears & Sky-Line Combat",
            "body": [
                "The power and movement feats: using all 8 Vigors and all 8 Vigor combinations, Vigor traps and Vigor kills, possessed machines, opening 30 Tears and killing with Tear-summoned allies, Sky-Line kills and headshots, environmental-hazard and knock-off-Columbia kills, killing falling or drunk enemies, Heavy Hitters, and a Handyman heart-only kill.",
                "The achievements here: Well Rounded (Used all 8 Vigors against enemies.); Vigorous Opposition (Killed 75 enemies either with a Vigor or while the enemy is under the effects of a Vigor.); More for Your Money (Lured 3 enemies into a single Vigor trap 5 times.); Combination Shock (Performed all 8 of the Vigor combinations.); Mind Over Matter (Killed 20 enemies using Possessed machines.); Tear 'em a New One (Opened 30 Tears.); Strange Bedfellows (Killed 20 enemies using allies brought in through a Tear.); On the Fly (Killed 30 enemies while riding a Sky-Line.); Bolt From the Blue (Killed 5 enemies with a headshot while riding a Sky-Line.); Hazard Pay (Killed 10 enemies by utilizing environmental hazards.); Bon Voyage (Killed 20 enemies by knocking them off Columbia.); Skeet Shoot (Killed 5 enemies while they are falling.); Lost Weekend (Killed 5 enemies while you are drunk.); David & Goliath (Killed 20 \"Heavy Hitter\" enemies.); Heartbreaker (Killed a Handyman by only shooting his heart.)."
            ]
        },
        {
            "heading": "Gear, Upgrades & Collectibles",
            "body": [
                "Equipping Gear in all four slots, fully upgrading a weapon and a Vigor, maxing an attribute, every Infusion in one game, all telescopes and Kinetoscopes, 30 Elizabeth lockpicks, every Voxophone, $10,000 spent at vending machines, 200 containers looted, and the 1999 Mode Scavenger Hunt.",
                "The achievements here: Dress for Success (Equipped a piece of Gear in all four slots.); Kitted Out (Fully upgraded one weapon and one Vigor.); Raising the Bar (Upgraded one attribute (Health, Shield, or Salts) to its maximum level.); Infused with Greatness (Collected every Infusion upgrade in a single game.); Sightseer (Used all telescopes and Kinetoscopes in the game.); The Roguish Type (Used Elizabeth to pick 30 locks.); Eavesdropper (Collected every Voxophone.); Grand Largesse (Spent $10,000 at the vending machines of Columbia.); Coins in the Cushion (Looted 200 containers.); Scavenger Hunt (Complete the game in 1999 Mode without purchasing anything from a Dollar Bill vending machine.)."
            ]
        },
        {
            "heading": "Clash in the Clouds (DLC)",
            "body": [
                "The Clash in the Clouds arena DLC: defeating all waves in each of the four maps, unlocking all Gallery items, a kill with each weapon and Vigor, the Undertow rescue-and-repeat feat, all eight Vigor-combo killing blows, the rocket-out-of-the-air splash kill, and all Blue Ribbon Challenges.",
                "The achievements here: Friendly Skies (Defeated all waves in The OPS Zeal.); Duke or Dimwit? (Defeated all waves in Duke and Dimwit Theater.); Rooftop Ruffian (Defeated all waves in Raven's Dome.); Hand of the Prophet (Defeated all waves in Emporia Arcade.); Museum Curator (In CitC, unlocked all Gallery items.); Sergeant-at-Arms (In CitC, got a kill with each weapon and vigor (except Bucking Bronco).); Rope-a-Dope (In CitC, knocked an enemy off the city with Undertow, then rescued him, then knocked him off again.); The Ol' One-Two (In CitC, used all eight different vigor combos to deliver the killing blow on an enemy.); Missile Defense System (In CitC, killed an enemy with splash damage by shooting a rocket out of the air.); Blue Ribbon Champ (In CitC, completed all Blue Ribbon Challenges.)."
            ]
        },
        {
            "heading": "Burial at Sea (DLC)",
            "body": [
                "The Burial at Sea episodes: the audio-diary and Voxophone collections, the Old Man Winter and Radar Range weapon achievements and their feats (freeze/shatter, chain explosions), the turret destruction, the lockpick-noisemaker and Gas Bolt feats, the Ironsides ammo feat, and the stealthy Freight Hook and Peeping Tom takedowns.",
                "The achievements here: Audio Enthusiast (Collected all Audio Diaries in Burial at Sea - Episode 1.); Fully Equipped (Purchased any two upgrades for Old Man Winter or Radar Range in Burial at Sea - Episode 1.); Confirmed Luddite (Destroyed ten Turrets in Burial at Sea - Episode 1.); Cook and Serve (Made 5 enemies explode with the Radar Range in Burial at Sea - Episode 1.); Chain Reaction (Damaged fifteen foes with an exploding enemy, using the Radar Range in Burial at Sea - Episode 1.); Break the Ice (Shattered 5 enemies who had been frozen with Old Man Winter.); Snowball Effect (Froze 2 enemies with the same Old Man Winter trap.); The Whole Story (Collected all Audio Diaries and Voxophones in Burial at Sea - Episode 2. ); Making Some Noise (Gained five noisemakers through lockpicking.); Twofer (Knocked out two or more enemies using the same Gas Bolt. ); Glutton for Punishment (Used Ironsides to collect 20 rounds of ammo or more in Burial at Sea - Episode 2. ); Dead Drop (On three occasions, knocked out an enemy after silently dropping off a Freight Hook.  ); Never Saw It Coming (While invisible, used Peeping Tom to knock out 15 enemies with a melee attack. )."
            ]
        },
        {
            "heading": "Story Markers (Hidden)",
            "body": [
                "Twenty-one achievements are hidden and ship no Steam description - all of them unmissable story markers (14 main campaign, 7 Burial at Sea). Listed by name only:",
                "The achievements here: Written in the Clouds (A story marker reached at a point in the campaign or a Burial at Sea episode - described here by name only, with no plot detail.); Welcome to Monument Island (A story marker reached at a point in the campaign or a Burial at Sea episode - described here by name only, with no plot detail.); Shock Tactics (A story marker reached at a point in the campaign or a Burial at Sea episode - described here by name only, with no plot detail.); First Class Ticket (A story marker reached at a point in the campaign or a Burial at Sea episode - described here by name only, with no plot detail.); Armed Revolt (A story marker reached at a point in the campaign or a Burial at Sea episode - described here by name only, with no plot detail.); Working Class Hero (A story marker reached at a point in the campaign or a Burial at Sea episode - described here by name only, with no plot detail.); Blood in the Streets (A story marker reached at a point in the campaign or a Burial at Sea episode - described here by name only, with no plot detail.); Higher Learning (A story marker reached at a point in the campaign or a Burial at Sea episode - described here by name only, with no plot detail.); The Bird or The Cage (A story marker reached at a point in the campaign or a Burial at Sea episode - described here by name only, with no plot detail.); Tin Soldier (A story marker reached at a point in the campaign or a Burial at Sea episode - described here by name only, with no plot detail.); Saw the Elephant (A story marker reached at a point in the campaign or a Burial at Sea episode - described here by name only, with no plot detail.); Stone Cold Pinkerton (A story marker reached at a point in the campaign or a Burial at Sea episode - described here by name only, with no plot detail.); Auld Lang Syne (A story marker reached at a point in the campaign or a Burial at Sea episode - described here by name only, with no plot detail.); Should Auld Acquaintance... (A story marker reached at a point in the campaign or a Burial at Sea episode - described here by name only, with no plot detail.); Down in the Briney (A story marker reached at a point in the campaign or a Burial at Sea episode - described here by name only, with no plot detail.); Burial at Sea (A story marker reached at a point in the campaign or a Burial at Sea episode - described here by name only, with no plot detail.); Going Places (A story marker reached at a point in the campaign or a Burial at Sea episode - described here by name only, with no plot detail.); Up and Running (A story marker reached at a point in the campaign or a Burial at Sea episode - described here by name only, with no plot detail.); Mein Hair (A story marker reached at a point in the campaign or a Burial at Sea episode - described here by name only, with no plot detail.); Paid in Full (A story marker reached at a point in the campaign or a Burial at Sea episode - described here by name only, with no plot detail.); Taffer's Delight (A story marker reached at a point in the campaign or a Burial at Sea episode - described here by name only, with no plot detail.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the campaign once on any difficulty for the 14 story markers and the collectibles (all Voxophones for Eavesdropper, all telescopes/Kinetoscopes for Sightseer, every Infusion for Infused with Greatness).",
                "2. Do a 1999 Mode run that is also Scavenger Hunt (never use a Dollar Bill machine), using chapter select afterwards for any weapon or Vigor kill-count feats you still need.",
                "3. Play Clash in the Clouds for its 10 achievements - Blue Ribbon Champ (all Blue Ribbon Challenges) is the hardest.",
                "4. Play Burial at Sea Episodes 1 and 2 for that block, including the 7 hidden story markers.",
                "Tip: the weapon and Vigor kill-count achievements are additive across every mode - Clash in the Clouds is an efficient place to top them up if a first campaign run leaves any short."
            ]
        }
    ]
};
