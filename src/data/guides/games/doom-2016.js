// DOOM (2016) Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/doom-2016.json), whose 54 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   379720 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js). 49 of 54 ship a real,
//   official Steam description, quoted verbatim below.
// - The 5 hidden achievements ship no Steam description; their
//   conditions here are curatorial, cross-checked against PowerPyx,
//   XboxAchievements and the Doom Wiki, and kept spoiler-light (boss
//   names and story milestones only).
export const GUIDE = {
    "slug": "doom-2016-achievement-guide",
    "category": "game",
    "gameSlug": "doom-2016",
    "icon": "😈",
    "title": "DOOM (2016) Achievement Guide",
    "summary": "A practical guide to all 54 Steam achievements in DOOM (2016) - the campaign and boss markers, the upgrade and collectible completions, the combat feats, the challenge and Arcade Mode achievements, and the Multiplayer and SnapMap set. 5 achievements are hidden and covered with spoiler-light conditions.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "DOOM (2016) has 54 Steam achievements, 5 of them hidden. The campaign and single-player achievements are the bulk; there is also a full Multiplayer and SnapMap block that needs online play (still populated, or bot/co-op friendly) and a small Arcade Mode set from a later update.",
                "Nothing is permanently missable in single-player - chapter select lets you revisit any mission for its collectibles, Rune trials and challenges - and the multiplayer feats are mostly \"kill 10 with X\" that a friendly lobby clears quickly. The one hard achievement is A Toe into Madness: clearing the first mission on Ultra-Nightmare (permadeath).",
                "Tip: play the campaign once on Hurt Me Plenty grabbing everything as you go (collectibles, Data Logs, Rune trials, weapon-mod Masteries, argent/Praetor upgrades), then use chapter select for anything missed. Do A Toe into Madness on its own - it is only the first mission, so restart until it sticks."
            ]
        },
        {
            "heading": "Campaign & Bosses",
            "body": [
                "The story markers and boss kills: E1M1 (first mission), the campaign completion (Knee-Deep in the Dead), the Cyberdemon, the Hell Guards, the Spider Mastermind, the first warp to Hell and acquiring the BFG.",
                "The achievements here: Shoot it Until it Dies (Defeat the Cyberdemon boss.); Outnumbered? No Problem (Defeat the Hell Guards.); Who's Next? (Defeat the final boss, the Spider Mastermind.); E1M1 (Complete the first mission of the campaign); Into the Unknown (Warp to Hell for the first time (during the Argent Energy Tower mission).); Knee-Deep in the Dead (Complete the campaign on 'I'm Too Young to Die', 'Hurt Me Plenty', 'Ultra Violence', or 'Nightmare'.); An Old Friend (Acquire the BFG 9000.)."
            ]
        },
        {
            "heading": "Upgrades & Collectibles",
            "body": [
                "The single-player completion set: earning and mastering weapon mods (Specialist, IDKFA, Hot Swapper), all Data Logs and Collectibles, fully upgrading Health/Armor/Ammo and the Praetor Suit (Argent Overload, Argent Fiend, Tinkering, Overclocked), and earning and upgrading Runes (A Gift from Beyond, The Circle is Complete, Momentum Shift, IDDQD) plus all Multiplayer Runes.",
                "The achievements here: Specialist (Earn the Mastery for a weapon mod); IDKFA (Earn the Masteries for all weapon mods); Hot Swapper (Acquire all weapon mods); Historian (Find all Data Logs); Every Nook and Cranny (Find all Collectibles); Argent Overload (Fully upgrade Health, Armor, or Ammo capacity); Argent Fiend (Fully upgrade Health, Armor, and Ammo capacity on a single campaign run.); A Gift from Beyond (Earn a Rune); The Circle is Complete (Earn all Runes); Tinkering (Fully upgrade a Praetor Suit category.); Overclocked (Fully upgrade all Praetor Suit categories on a single campaign run.); Momentum Shift (Upgrade a Rune); IDDQD (Upgrade all Runes); Slotted for Success (Unlock all Multiplayer Runes)."
            ]
        },
        {
            "heading": "Combat Feats",
            "body": [
                "The kill-count feats: 50 Chainsaw kills, 100 explosive-barrel kills, 200 Glory Kills, Glory-killing every common enemy type, and 150 kills while a Power Up is active.",
                "The achievements here: Up Close and Personal (Kill 50 enemies using the Chainsaw); Timing is Everything (Use explosive barrels to kill 100 enemies); Butcher (Perform 200 Glory Kills); Rip and Tear (Glory Kill all common enemy types in the campaign.); Juicin' it up (Kill 150 enemies while using Power Ups)."
            ]
        },
        {
            "heading": "Challenges & Arcade Mode",
            "body": [
                "The challenge achievements: the Ultra-Nightmare first mission, completing all challenges for one mission and all Mission Challenges, and the Arcade Mode set (every medal type in one run, a gold rating, 20 bonus lives/relics).",
                "The achievements here: A Toe into Madness (Complete The UAC on Ultra-Nightmare); Thorough Shopper (Complete all Challenges for a single mission.); What Else Ya Got? (Complete all Mission Challenges); Filling the Trophy Case (Earn every medal type in Arcade Mode in one run); Go for the Gold (Earn a gold rating in Arcade Mode); Arcade Stockpile (Collect 20 bonus lives or relics in Arcade Mode)."
            ]
        },
        {
            "heading": "Multiplayer & SnapMap",
            "body": [
                "The online block: winning a Multiplayer match, reaching Level 5, the SnapMap create/play/tutorial achievements, and the many \"kill 10 enemies with X\" / \"equip cosmetic Y\" / \"use taunt Z\" Multiplayer achievements from the base game and the three expansion updates.",
                "The achievements here: IPXSETUP.EXE (Win a Multiplayer match); Combat tested, Doomguy approved (Reach Level 5 in Multiplayer); Shareware (Create and publish a SnapMap); No Rest for the Living (Play 5 published SnapMaps); Entryway (Complete the SnapMap Basic and Advanced Tutorials); Tenderizing the Crops (Kill 10 enemies with the Harvester demon in Multiplayer); Marked for Death (Kill 10 enemies with the EMG Mark V Pistol in Multiplayer); Motion in the Explosion (Kill 5 enemies with the Kinetic Mine in Multiplayer); Sitting Duck (Use a taunt from Expansion 1 during a Multiplayer Match); Computing with Style (Play a Multiplayer Match with a piece of Robotic Armor equipped); Threat Assessment (Detect 20 enemies using the Threat Pulse in Multiplayer); Eat Your Vitamins (Kill 10 enemies with the Cacodemon in Multiplayer); Reaping all the Benefits (Kill 10 enemies with the Reaper in Multiplayer); Beauty is Pain (Play a Multiplayer Match with a piece of Cyber-Demonic armor equipped); Like Nobody is Watching (Use a taunt from Expansion 2 during a Multiplayer Match); Bowling for Gibs (Perform a MultiKill with the Spectre demon in Multiplayer); Head First (Kill 10 enemies with the Spectre demon in Multiplayer); Successful Launch (Kill 10 enemies with the Grenade Launcher in Multiplayer); Fashion Fanatic (Play a Multiplayer Match with a piece of Evil Cultist armor equipped); Insult to Injury (Use a taunt from Expansion 3 during a Multiplayer Match); On Track (Complete a tracked challenge in a Multiplayer Match); A Memorable Performance (Earn a Gold Rating in a Multiplayer Match)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. One full campaign run on Hurt Me Plenty, collecting everything and doing every Rune trial, weapon-mod challenge and argent/Praetor upgrade as you reach them.",
                "2. Chapter select to mop up any missed collectibles, Data Logs and Mission Challenges, and to finish the Rune and weapon-mod Masteries.",
                "3. Do A Toe into Madness (Ultra-Nightmare, first mission only) as a focused attempt.",
                "4. Play a few Arcade Mode runs for its three achievements.",
                "5. Do the Multiplayer and SnapMap block last - a co-op/private lobby or a friend makes the \"kill 10 with X\" achievements fast, and SnapMap only needs you to publish and play a handful of maps.",
                "Tip: the Multiplayer weapon/demon-kill achievements count in Bot Matches, so you can clear most of that block solo against bots without needing a populated lobby."
            ]
        }
    ]
};
