// Tom Clancy's Rainbow Six Siege Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/rainbow-six-siege.json), whose 48 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   359550 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js). None are hidden; every one
//   ships a real, official Steam description, quoted verbatim below.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "rainbow-six-siege-achievement-guide",
    "category": "game",
    "gameSlug": "rainbow-six-siege",
    "icon": "🛡️",
    "title": "Rainbow Six Siege Achievement Guide",
    "summary": "A practical guide to all 48 Steam achievements in Tom Clancy's Rainbow Six Siege - none are hidden. Covers operator progression, gadget and combat feats, weapon mastery, and objective play.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Rainbow Six Siege has 48 Steam achievements and none are hidden. They cover playing and winning with the game's starter \"Pathfinder\" operators, general multiplayer milestones (Clearance level 50, weapon customization, kill and headshot counts), gadget-specific feats tied to nearly every operator tool in the game (breach charges, cameras, barbed wire, nitro cells, claymores, thermite charges), and weapon-category kill counts (DMR, shotgun, AR, SMG, handgun).",
                "Nothing is missable - every counter is a lifetime multiplayer stat that keeps climbing across every Quick Match and Ranked game you ever play, win or lose. The long poles are the 100-round win counts (Can't Breach This, Overachiever) and Full Roster/Jack of All Trades, which need meaningful playtime with every operator in a roster rather than one main.",
                "Tip: play Quick Match with a rotating cast of operators rather than sticking to one main - most of the gadget-specific achievements (Death From Above, Camera Shy, Drone Destruction, Oh Yeah, Wrong Number) come from using operator gadgets you might otherwise never touch, so treat each match as a chance to try someone new."
            ]
        },
        {
            "heading": "Operator Progression & Customization",
            "body": [
                "The early roster and general-progression block: playing the \"Pathfinder\" starter operators on Attack and Defense, playing every operator in a Pathfinder ORG, winning with every Pathfinder operator, reaching Clearance level 50, customizing a weapon, banking 5000 Renown, getting 100 kills, applying 30 weapon skins, and two early gadget feats (a floor breach, a window rappel).",
                "The achievements here: Back in the Day ATK (Play 10 rounds with a Pathfinder Attacker in Quick Match/Ranked Multiplayer.); First Class Defense (Play 10 rounds with a Pathfinder Defender in Quick Match/Ranked Multiplayer.); Old School (Play 10 rounds with all Operators from one Pathfinder ORG in Quick Match/Ranked Multiplayer.); Full Roster (Play 10 rounds with each Pathfinder Operator in Quick Match or Ranked Multiplayer.); Jack of All Trades (Win 1 round with every Pathfinder Operator in Quick Match/Ranked Multiplayer.); To the Top (Reach Clearance level 50.); Designer (Customize a weapon.); Collector (Collect and save 5000 Renown.); Just Getting Started (Get 100 kills in Quick Match/Ranked Multiplayer.); Fashion Week (Apply weapon skins to 30 weapons.); Death From Above (Destroy a floor with a Breach Charge in Quick Match/Ranked Multiplayer.); Coming Through! (Breach and rappel through a window in Quick Match/Ranked Multiplayer.)."
            ]
        },
        {
            "heading": "Gadgets & Objectives",
            "body": [
                "A run of gadget and mode-based achievements: reinforcing walls, destroying cameras as an Attacker, winning 10 Bomb matches, winning 100 rounds as a Defender, completing 10 matches, landing 50 headshots, winning a round in under 2 minutes, playing 10 different maps, killing stunned enemies, destroying drones, and two explosive-gadget kills (a Breach Charge, Thermite's Exothermic Charge).",
                "The achievements here: Fortress (Reinforce 2 breakable walls in Quick Match/Ranked Multiplayer.); Camera Shy (Destroy 10 cameras as an Attacker.); Boomshakalaka (Win 10 matches of Bomb in Quick Match/Ranked Multiplayer.); Can't Breach This (Win 100 rounds as a Defender in Quick Match/Ranked Multiplayer.); It Begins... (Complete 10 matches in Quick Match/Ranked Multiplayer.); Brain Surgeon (Get 50 headshots in Quick Match/Ranked Multiplayer.); Speed Round (Win a round in Quick Match/Ranked Multiplayer in under 2 minutes.); Globetrotter (Play 10 Multiplayer Matches on 10 different maps.); Senseless (Kill 10 enemies blinded by Stun Grenades in Quick Match/Ranked Multiplayer.); Drone Destruction (Destroy 5 drones in Quick Match/Ranked Multiplayer.); Meat Wall (Kill an enemy with a Breach Charge in Quick Match/Ranked Multiplayer.); Oh Yeah! (Destroy a reinforced wall with Thermite's Exothermic Charge in Quick Match/Ranked Multiplayer.)."
            ]
        },
        {
            "heading": "Combat & Weapon Feats",
            "body": [
                "More gadget-specific kills - Barbed Wire, Nitro Cells, barricades placed, Claymore kills, Frag Grenade kills - plus a Squad win-count milestone, the Bomb-round objective achievements (planting and deactivating the defuser), destroying enemy gadgets, and the start of the weapon-category kills (DMR, shotgun, AR).",
                "The achievements here: Don't Go in There! (Kill an Attacker caught inside Barbed Wire in Quick Match/Ranked Multiplayer.); Wrong Number (Kill 10 enemies with Nitro Cells in Quick Match/Ranked Multiplayer.); Woodworker (Place 5 barricades as a Defender in Quick Match/Ranked Multiplayer.); No Trespassing (Get 10 Claymore kills in Quick Match/Ranked Multiplayer.); Room Cleared (Get 10 Frag Grenade kills in Quick Match/Ranked Multiplayer.); Strength in Numbers (Win 10 games as a Squad in Quick Match/Ranked Multiplayer.); That Was Close (Plant the defuser in 10 Bomb rounds in Quick Match/Ranked Multiplayer.); Close, but No Cigar (Deactivate the defuser in 5 Bomb matches in Quick Match/Ranked Multiplayer.); Asset Protection (Destroy 20 gadgets in Quick Match/Ranked Multiplayer.); Sureshot (Get 5 kills with a DMR.); Ride Shotgun (Get 5 kills with a shotgun.); Full Auto (Get 5 kills with an AR.)."
            ]
        },
        {
            "heading": "Mastery & Endgame",
            "body": [
                "The rest of the weapon-category kills (SMG, handgun), the big round-win counts (100 Attacker wins, 50 rounds won), Flawless Victories, finding the bomb fast, completing every Operator Specialty, equipping 50 attachments, winning a Secure Area match, kills through bullet penetration, winning a match without losing a round, and reviving teammates 10 times.",
                "The achievements here: Greaser (Get 5 kills with an SMG.); Perfectionist (Get 5 Flawless Victories in Quick Match/Ranked Multiplayer.); Overachiever (Win 100 rounds as an Attacker in Quick Match/Ranked Multiplayer.); Bang! (Get 5 kills with a handgun.); That Was Fast! (Find a bomb within 15 seconds of the Preparation Phase in Unranked/Ranked Multiplayer.); Objective Driven (Win 50 rounds in Quick Match/Ranked Multiplayer.); Specialist (Complete all Operator Specialties.); Accessorizing (Equip 50 weapon attachments.); Perimeter Secured (Win a match of Secure Area in Quick Match Multiplayer.); That Bullet Pen... (Get 10 kills through bullet penetration in Quick Match/Ranked Multiplayer.); One Mind (Win 1 match without losing a single round in Quick Match/Ranked Multiplayer.); To the Rescue (Revive injured teammates 10 times in Quick Match/Ranked Multiplayer.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through the starter \"Pathfinder\" operators (10 rounds each on Attack and Defense) for the early roster achievements, and push your account to Clearance level 50.",
                "2. Play a wide variety of operators and modes (Bomb, Secure Area) to naturally rack up general milestones: 100 kills, 50 headshots, 10 matches, 10 different maps, and weapon customization.",
                "3. Deliberately use gadgets you would normally skip - breach charges through floors and windows, reinforcements, cameras, drones, barbed wire, claymores, nitro cells, thermite - to clear the gadget-specific feats.",
                "4. Work the weapon-category kills (DMR, shotgun, AR, SMG, handgun) and the objective-focused achievements (planting/deactivating the defuser, securing the objective, reviving teammates) as you play normally.",
                "5. Let the big win-count and roster achievements (100 Defender wins, 100 Attacker wins, Full Roster, Jack of All Trades, 50 rounds won) finish over a longer playtime.",
                "Tip: One Mind (win a match without losing a round) and Speed Round (win in under 2 minutes) both come from stomping a weaker or disorganized team, so do not go out of your way to force them - they tend to happen naturally in a good run."
            ]
        }
    ]
};
