// Pummel Party Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/pummel-party.json), whose 31 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   880940 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "pummel-party-achievement-guide",
    "category": "game",
    "gameSlug": "pummel-party",
    "icon": "🎲",
    "title": "Pummel Party Achievement Guide",
    "summary": "A practical guide to all 31 Steam achievements in Pummel Party - none are hidden. Covers the board-game and item feats, and two blocks of minigame-specific challenges. None of the achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Pummel Party has 31 Steam achievements and none are hidden. Ten are board-game and item feats - starting and winning a game, your first goal, no damage in 'Searing Spotlights', a three-player eggplant or rocket-skewer hit, placing first in every minigame ('Minigame Master') and last in every minigame ('Unlucky'). The other twenty-one are one specific challenge in a named minigame (survive 50 seconds in 'Bullet Barrage', collect 40 keys in 'Morphing Maze', win 'Magma & Mages' without damage, and so on).",
                "The catalog marks it difficulty 3. Nothing is hard, but the minigame achievements need those specific minigames to come up, so you either play many full games or use a private lobby that lets you queue minigames.",
                "Tip: play with friends or bots in a lobby where you can pick minigames, and knock the challenge achievements off one minigame at a time."
            ]
        },
        {
            "heading": "Board Game & Item Feats",
            "body": [
                "Starting your first game, winning your first minigame, your first goal, winning your first game, no damage in 'Searing Spotlights', blowing yourself up in 'Strategic Shockwave', a three-player remote-eggplant hit, a three-player rocket-skewer hit, 'Minigame Master' (first in every minigame) and 'Unlucky' (last in every minigame).",
                "The achievements here: Goodluck! (Start your first game); The First of Many! (Win your first minigame); So Shiny (Get your first goal); You Are The Winner (Win your first game); A Daring Devil (Take no damage in 'Searing Spotlights' minigame); You Made a Mistake (Accidentally blew yourself up in the 'Strategic Shockwave' minigame); The Trifecta (Hit three players with the remote control eggplant); Extra Meat (Skewer three players with the rocket skewer item); Minigame Master (Place first in every minigame); Unlucky (Place last in every minigame)."
            ]
        },
        {
            "heading": "Minigame Challenges I",
            "body": [
                "Scoring over 10 in 'Altitude Attack', a double kill in 'Barn Brawl', 50 seconds in 'Bullet Barrage', 50% area control in 'Elemental Escalation', a full wipe as the lightning holder in 'Thunderous Trench', 10 knockouts in 'Explosive Exchange', a clean 'Rusty Racers', 50 seconds in 'Sorcerers Sprint', getting hit by the train in 'Temporal Trails', 5 knock-offs in 'Snowy Spin', and a 5-player streak in 'Speedy Sabers'.",
                "The achievements here: Altitude Achiever (Score over 10 in 'Altitude Attack'); Two Birds (Get a double kill in 'Barn Brawl'); Dodge This (Survive for 50 seconds in 'Bullet Barrage'); Elementfull (Control over 50% of the area in 'Elemental Escalation'); Lightning Rod (As the lightning holder kill every other player in 'Thunderous Trench'); Seeing Stars (Knockout 10 players in one game of 'Explosive Exchange'); Road Warrior (Complete 'Rusty Racers' without falling off the track); Thread The Needle (Survive for at least 50 seconds in 'Sorcerers Sprint'); Too Slow (Got hit by the train in 'Temporal Trails'); Rolling Master (Knock off 5 players in one game of 'Snowy Spin'); Chopped To Bits (Get a 5 player kill streak in 'Speedy Sabers')."
            ]
        },
        {
            "heading": "Minigame Challenges II",
            "body": [
                "Getting launched off screen in 'Tunneling Tanks', finding the treasure in 'Sandy Search', dying without throwing a barrel in 'Acidic Atoll', a no-damage win in 'Magma & Mages', 40 keys in 'Morphing Maze', 60 seconds in 'Breaking Blocks', stealing the last gift in 'Grifting Gifts', a no-fall 'Slippery Sprint', over 5 in 'Bouncing Balls', and a coal-free 'Gift Grab'.",
                "The achievements here: Starman (Get launched off screen in 'Tunneling Tanks'); Raider (Find the treasure in 'Sandy Search'); Fatal Slip (Died in 'Acidic Atoll' without throwing a barrel); Floor is Lava (Win 'Magma & Mages' without taking damage); Hoarder (Collect 40 keys in 'Morphing Maze' minigame); Move Quick (Survive in 'Breaking Blocks' for 60 seconds); Steal From The Poor (Steal the last gift in a players pile in 'Grifting Gifts'); Light Foot (Complete 'Slippery Sprint' without falling in the water); Quick Reactions (Score over 5 in 'Bouncing Balls'); No Diamonds (Complete 'Gift Grab' without collecting coal)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play a full game to get 'Goodluck!', 'The First of Many!', 'So Shiny' and 'You Are The Winner'.",
                "2. Use a lobby that lets you queue specific minigames (with friends or bots).",
                "3. Work through the minigame challenge achievements one minigame at a time.",
                "4. For 'Minigame Master' and 'Unlucky' you need a first place and a last place in every minigame - a bot lobby makes both easy.",
                "Tip: the item achievements ('The Trifecta', 'Extra Meat') need three opponents clustered together - set them up in a bot game where the AI won't scatter."
            ]
        }
    ]
};
