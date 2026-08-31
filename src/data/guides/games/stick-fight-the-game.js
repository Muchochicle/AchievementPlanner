// Stick Fight: The Game Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/stick-fight-the-game.json), whose 28 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   674940 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "stick-fight-the-game-achievement-guide",
    "category": "game",
    "gameSlug": "stick-fight-the-game",
    "icon": "🥋",
    "title": "Stick Fight: The Game Achievement Guide",
    "summary": "A practical guide to all 28 Steam achievements in Stick Fight: The Game - none are hidden. Covers the kill feats and multi-kill streaks, and the weapons, snakes and completion achievements. None of the achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Stick Fight: The Game has 28 Steam achievements and none are hidden. Fourteen are kill feats and streaks - a 3-kill round, a no-damage 3-kill round, finishing and winning on every map, a black-hole win, quick double and triple kills, and a streak ladder from 'Killing Spree' (4) up to 'Wicked Stick' (10 in a row without dying). The other fourteen are weapon and situational feats (a bullet-reflect win, a block-then-fists kill, a mid-air kick kill, 77 sniper kills, a bounce-weapon kill, a walkover win, an ice-level win, a triple blink-dagger win, 99 total kills, picking up a lightsabre, a headshot) and 'Xiao Xiao' for all other achievements.",
                "The catalog marks it difficulty 3. 'Wicked Stick' (a 10-kill streak), 'White Death' (77 sniper kills), 'A poultry meal' (99 kills) and 'Conqueror' (win on every one of the game's many maps) are the grinds; everything else is quick against bots.",
                "Tip: play a bots-only match on easy AI - streaks, kill counts and map wins all come far faster than against players."
            ]
        },
        {
            "heading": "Kill Feats & Streaks",
            "body": [
                "A 3-kill round, a no-damage 3-kill round, finishing a round on every map, winning on every level, a black-hole win, quick double and triple kills, and the streak ladder: 'Killing Spree' (4), 'Rampage' (5), 'Dominating' (6), 'Unstoppable' (7), 'Genocide' (8), 'Godlike' (9) and 'Wicked Stick' (10 in a row without dying).",
                "The achievements here: Ace (Kill 3 other players in one round); Royal Ace (kill 3 other players in one round without taking damage); Explorer (Finish a round on each map of the game); Conqueror (Win on every level); 4d Stickmen (Win on a match where a black hole appears); Double Kill (Kill 2 other players within a short amount of time); Triple Kill (Kill 3 other players within a short amount of time); Killing Spree (Kill 4 in a row without dying); Rampage (Kill 5 in a row without dying); Dominating (Kill 6 in a row without dying); Unstoppable (Kill 7 in a row without dying); Genocide (Kill 8 in a row without dying); Godlike (Kill 9 in a row without dying); Wicked Stick (Kill 10 in a row without dying)."
            ]
        },
        {
            "heading": "Weapons, Snakes & Completion",
            "body": [
                "Being killed by a snake and surviving as a snake's target, a bullet-reflect win, a block-then-fists kill, a mid-air kick kill, 77 sniper kills, a bounce-weapon last-bounce kill, a walkover win, an ice-level win, a triple blink-dagger win, 99 total kills, 'Xiao Xiao' for all other achievements, picking up a lightsabre, and a headshot.",
                "The achievements here: Snake (Get killed by a snake); Stick Irvin (Become the target of a snake and survive the round); Ricochet (Win by reflecting a bullet with the block); Riposte (Block your opponent then immediately kill them with fists); Your kung fu is strong (Kill an opponent with a mid air kick); White Death (77 sniper kills); Bounce (Kill an opponent with the last bounce of the bullet of the bounce weapon); Walkover (Win a round by every opponent falling off the map); Ice Age (Win the round after all ice is destroyed on an ice-level); мигающий кинжал (Win a round by killing 3 opponents using the blink dagger); A poultry meal (99 total kills); Xiao Xiao (All other achievements); Bzuhzzzzzzzuhzzzzzuhzzzz (Pick up a Light-sabre); Headshot (Headshot)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Set up a match against bots on the easiest AI.",
                "2. Farm the streak ladder (4 up to 10) and the 99-kill and 77-sniper-kill totals.",
                "3. Cycle through every map for 'Explorer' and 'Conqueror'.",
                "4. Do the situational feats as the right weapons and levels come up (bullet reflect, mid-air kick, bounce weapon, blink dagger, black hole, ice level).",
                "5. 'Xiao Xiao' unlocks once everything else is done.",
                "Tip: 'Conqueror' (win on every level) is the longest - enable only the standard map pool, play bots, and keep a list of which levels you have already won on."
            ]
        }
    ]
};
