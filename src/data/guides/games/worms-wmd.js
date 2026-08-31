// Worms W.M.D Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/worms-wmd.json), whose 29 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   327030 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "worms-wmd-achievement-guide",
    "category": "game",
    "gameSlug": "worms-wmd",
    "icon": "🪱",
    "title": "Worms W.M.D Achievement Guide",
    "summary": "A practical guide to all 29 Steam achievements in Worms W.M.D - none are hidden. Covers the Training and Campaign, the weapon-crafting and vehicle kill feats, and the online multiplayer, Challenges and customisation achievements.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Worms W.M.D has 29 Steam achievements and none of them are hidden. Training and Campaign contribute a handful (all Training levels, gold on every Training level, complete the Campaign, 15 missions in). Weapon crafting adds two (craft 30 weapons, craft every weapon). A block of combat feats covers 500 worm kills, 20 Prod kills, a 4-kill turn, and 80 kills each in a Tank, Mech and Helicopter (plus 40 with a Mounted Gun). The rest are online (play a ranked match, 50 online games, a Sudden Death win, a 3-win streak, an all-in-buildings win), the Challenges (5, all), the Sub Goals (40, all), and the customisation achievements.",
                "Nothing is missable - every mission, challenge and counter is replayable or cumulative. The longest is \"Online Warrior\" (50 online multiplayer games).",
                "Tip: the vehicle kill counts (80 in a Tank / Mech / Helicopter) are easiest in a custom match against many low-health CPU worms on a small map - spawn the vehicle and mow them down."
            ]
        },
        {
            "heading": "Training & Campaign",
            "body": [
                "Completing Navigation and Basic Training, a gold medal on every Training level, all Training levels, completing the Campaign, 15 Campaign missions, and crafting 30 weapons and every weapon in the game.",
                "The achievements here: Recruitment Drive (Complete Navigation Training); Specialist Forces Qualified (Gain a Gold Medal on all Training levels); Grave Digger (Kill 500 worms); Training Day (Complete all the Basic Training levels); Passing Out Parade (Complete all Training levels); That Camp was no Pain (Complete the Campaign); You Crafty Devil (Craft 30 weapons across all game modes); Do It Yourself! (Craft every weapon in the game)."
            ]
        },
        {
            "heading": "Combat & Vehicle Feats",
            "body": [
                "20 Prod kills, reaching Sheep Rank, 5 and all Challenges, 15 Campaign missions, 500 worm kills, and 80 kills each in a Tank, Mech and Helicopter, plus 40 with a Mounted Gun.",
                "The achievements here: You're so Pushy (Kill 20 worms with Prod); Bleating Ranker (Reach Sheep Rank); No Challenge at all (Complete all Challenges); Call that a Challenge! (Complete 5 Challenges); Halfway House (Complete 15 Campaign Missions); Tanks a lot buddy (Get 80 kills in a Tank); Mech me Proud (Get 80 kills in a Mech); Roto Boating (Get 80 kills in a Helicopter); Mount Killmore (Get 40 kills using a Mounted Gun)."
            ]
        },
        {
            "heading": "Online, Challenges & Customisation",
            "body": [
                "Playing a ranked match, 50 online multiplayer games, a Sudden Death win, a 3-win streak, an all-worms-in-buildings win, a 4-kill turn, collecting a wanted poster, 40 and all Sub Goals, unlocking all customisation items, a heal-past-start-health finish, and fully customising a team.",
                "The achievements here: Bottom Rung (Play a Ranked Match); Online Warrior (Play 50 Online Multiplayer Games); I'm Your Father! (Win an online multiplayer match in Sudden Death); Unstoppable (Win 3 online games in a row); The Worm that Turned (Kill 4 worms in a single turn); I built this city (Win an Online game with all worms in Buildings); Challenge Accepted (Collect a wanted poster); Sub Standard (Complete 40 Sub Goals); Billy No Mates (Complete all the Sub Goals); Sweat Shop (Unlock all the Customisation Items); Gym Membership (Finish a game with a worm on more health than it started with); Full of Swag  (Fully customise a team of Worms using unlocked customisations.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Do all the Training levels for gold, then play the Campaign to completion.",
                "2. Craft 30 weapons and then every weapon across your matches.",
                "3. Farm the vehicle kill counts (Tank / Mech / Helicopter / Mounted Gun) in custom matches against weak CPU worms.",
                "4. Do the Challenges and Sub Goals in full.",
                "5. Play online toward 50 games, and pick up the Sudden Death win, 3-win streak and all-in-buildings win.",
                "Tip: the customisation achievements just need you to unlock and equip cosmetics - play through the Campaign and Challenges, which award most of them, then equip a full set."
            ]
        }
    ]
};
