// Battlefield 6 Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/battlefield-6.json), whose 53 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   2807960 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 20 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched (community 100%
//   guides) and is a curatorial summary, except for a small number of
//   unreleased DLC placeholder slots explicitly flagged as such. Every
//   non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "battlefield-6-achievement-guide",
    "category": "game",
    "gameSlug": "battlefield-6",
    "icon": "🎖️",
    "title": "Battlefield 6 Achievement Guide",
    "summary": "A practical guide to all 53 Steam achievements in Battlefield 6 (20 hidden). 20 of the 53 are hidden - 9 campaign mission secrets and 11 REDSEC Battle Royale/Gauntlet achievements, researched from Steam Community and GameFAQs guides.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Battlefield 6 has 53 Steam achievements, 20 of them hidden. The campaign track covers completing each mission (Always Faithful, The Rock/Operation Gladius, Night Raid, No Sleep/Moving Mountains, Nile Guard, Operation Ember Strike, and the full campaign), collecting campaign collectibles (1/5/10/20/all), a hardest-difficulty clear, 50 campaign headshot kills, a 3-enemy grenade kill, and 10 destroyed vehicles. Multiplayer covers rank promotions (9/14/25), Conquest and Breakthrough objective totals, M-COM arming/disarming, class-specific kill/revive/repair tallies, and vehicle/melee/explosive feats.",
                "9 of the hidden achievements are campaign secrets: a hidden dinosaur figurine in Always Faithful, destroying 10 mannequins in The Rock, 3 floating mines in Operation Gladius, clearing Night Raid with only pistols/knives/gadgets, 5 sledgehammer kills in No Sleep, 6 consecutive headshots in Moving Mountains, collapsing an overpass on a tank in Nile Guard, spotting 20 enemies with a drone in Operation Ember Strike, and shooting down the reinforcement chopper with a tank in Always Forward.",
                "The other 11 hidden achievements are REDSEC Battle Royale and Gauntlet mode achievements: playing 74 Battle Royale matches, using 42 call-ins, looting 10 Superior/Custom items, 316 stun effects, 1,988 revives, winning 7 Duos matches, 125 Gauntlet rounds, a full-squad-survival win, 214 completed missions, 9 dog-tags from kills, and pinging a shotgun. The catalog marks it difficulty 3 - the campaign secrets need attentive, chapter-select-friendly play, and the REDSEC totals are the real long-term grind."
            ]
        },
        {
            "heading": "Campaign",
            "body": [
                "Completing each campaign mission (Always Faithful; The Rock and Operation Gladius; Night Raid; No Sleep and Moving Mountains; Nile Guard; Operation Ember Strike; and the full campaign), collecting campaign collectibles (1/5/10/20/all), a hardest-difficulty mission clear, 50 campaign headshot kills, a 3-enemy grenade kill, and destroying 10 enemy vehicles in Single Player.",
                "The achievements here: Stand Alone (Complete Always Faithful); Rock of Gibraltar (Complete The Rock and Operation Gladius); Devil in the Dark (Complete Night Raid); Secret Service (Complete No Sleep and Moving Mountains); High Roller (Complete Nile Guard); Damned If You Do (Complete Operation Ember Strike); Cloak and Dagger (Complete the Battlefield 6 Campaign); In Memoriam (Pick up a Campaign collectible); Dogs of War (Pick up 5 Campaign collectibles); Hounds of War (Pick up 10 Campaign collectibles); Wolves of War (Pick up 20 Campaign collectibles); Pack Leader (Pick up all Campaign collectibles); Peak Performance (Complete a Single Player mission on the hardest difficulty); Liquidator (Headshot kill 50 Enemies in the Campaign.); One Stone (Eliminate 3 enemies with a single grenade in Single Player); Armor Annihilation (Destroy 10 enemy vehicles in Single Player)."
            ]
        },
        {
            "heading": "Campaign Secrets",
            "body": [
                "9 hidden mission-specific secrets: a hidden figurine in Always Faithful, 10 destroyed mannequins in The Rock, 3 floating mines in Operation Gladius, clearing Night Raid with only pistols/knives/gadgets, 5 sledgehammer kills in No Sleep, 6 consecutive headshots in Moving Mountains, collapsing an overpass on a tank in Nile Guard, spotting 20 enemies with a drone in Operation Ember Strike, and shooting down the reinforcement chopper with a tank in Always Forward.",
                "The achievements here: End of an Era (Find the hidden dinosaur figurine in the NATO base during Always Faithful.); Efficiency (Destroy 10 mannequins in The Rock.); Deep-Six (Destroy 3 floating mines in Operation Gladius.); Sidearm Savant (Complete Night Raid using only pistols, knives, or gadgets.); Looks Like A Nail (Kill 5 enemies with a sledgehammer in No Sleep.); Bullseye Blitz (Land 6 consecutive headshots in Moving Mountains.); Roadside Assistance (Collapse an overpass onto a tank in Nile Guard.); Being Watched (Spot a total of 20 enemies with your drone in Operation Ember Strike.); No Reinforcements (Shoot down the reinforcement chopper with a tank during Always Forward.)."
            ]
        },
        {
            "heading": "Multiplayer",
            "body": [
                "Rank promotions at 9/14/25, 128 Conquest objectives captured, 41 Breakthrough sectors taken or defended, 5 M-COM explosives armed or disarmed, 5 Assault multi-kills, 2,042 vehicle-repair damage, 250 Recon sniper kills, 1,996 Support revives, 414 acts of valor, 5 no-reload LMG kills, 6 sidearm headshots in one match, a vehicle roadkill, 2,000 Demolition Charge damage, 10 takedowns in one match, and 129 total multiplayer kills.",
                "The achievements here: Private First Class Montes (Reach Rank 9); Lance Corporal Matkovic (Reach Rank 14); Sergeant Redford (Reach Rank 25); Command and Conquest 2 (Capture 128 objectives in Conquest); Front line  (Take or Defend 41 sectors in Breakthrough); Super Bomb man (Arm or disarm 5 M-COM explosives in a Multiplayer match); Five by Five (Get 5 multi-kills as Assault in Multiplayer); Wrench Monkey (Repair vehicles for 2042 damage in Multiplayer); Stolz der Nation (Get 250 sniper rifle kills as Recon in Multiplayer); A Joyful Nurse (Revive 1996 players as Support in Multiplayer); Medal of Honor (Commit 414 acts of valor in Multiplayer); Heavy Weaponry (Get 5 kills with LMGs without reloading in Multiplayer); 1200 (Get 6 sidearm headshot kills in a Multiplayer match); Road Rash (Get a Roadkill with vehicles in Multiplayer); A Little C-4 Knocking on Your Door (Deal 2000 damage to enemy vehicles with the Demolition Charge); First Blood 2 (Perform 10 takedowns in a Multiplayer match); Punished (Get 129 kills in Multiplayer.)."
            ]
        },
        {
            "heading": "REDSEC: Battle Royale & Gauntlet",
            "body": [
                "11 hidden REDSEC achievements: 74 Battle Royale matches played, 42 call-ins used, 10 Superior/Custom items looted, 316 stun effects, 1,988 revives, winning 7 Duos matches, 125 Gauntlet rounds, a full-squad-survival win, 214 completed missions, 9 dog-tags from kills, and pinging a shotgun.",
                "The achievements here: May the Odds Forever Be in Your Favor (Play 74 matches of any version of Battle Royale.); Here's Your Birthday Present  (Use 42 call-ins in Battle Royale.); Collector (Loot 10 Superior or Custom items in Battle Royale.); Stone Cold (Get 316 stun effects on enemies in Battle Royale or Gauntlet.); Rise from Your Grave (Get 1,988 revives in Battle Royale or Gauntlet.); Army of Two (Win 7 matches in Battle Royale Duos.); Never-Ending Game (Play 125 rounds of Gauntlet.); Everybody Fights, Nobody Quits (Win a Battle Royale match with your full squad surviving.); Mission Accepted (Complete 214 missions in any version of Battle Royale.); Dog of War (Get 9 dog-tags from kills in Battle Royale or Gauntlet.); Mozambique Here! (Ping a Shotgun in Battle Royale.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through the campaign on any difficulty first, watching for the 9 hidden mission secrets and collecting every collectible.",
                "2. Replay a hard mission on the hardest difficulty using chapter select for the difficulty achievement.",
                "3. Play multiplayer normally, banking rank promotions and class-specific tallies as you go.",
                "4. If you own REDSEC, work through Battle Royale and Gauntlet matches for their own achievement set - most are cumulative totals that build up naturally.",
                "Tip: 'Sidearm Savant' (clear Night Raid with only pistols/knives/gadgets) is easiest on the lowest difficulty with chapter select, since dying and restarting mid-mission doesn't reset the achievement's weapon-restriction tracking within that attempt."
            ]
        }
    ]
};
