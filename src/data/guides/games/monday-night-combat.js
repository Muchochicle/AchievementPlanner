// Monday Night Combat Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/monday-night-combat.json), whose 51 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   63200 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "monday-night-combat-achievement-guide",
    "category": "game",
    "gameSlug": "monday-night-combat",
    "icon": "🏈",
    "title": "Monday Night Combat Achievement Guide",
    "summary": "A practical guide to all 51 Steam achievements in Monday Night Combat - none are hidden. Covers the Blitz Mode waves and the Crossfire match feats, the cumulative per-weapon and turret kill and build counts, and the tutorial and miscellaneous goals.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Monday Night Combat has 51 Steam achievements and none of them are hidden. The Blitz Mode (co-op wave defence) achievements ask you to complete Exhibition, Season, Playoff and The Scramble. The Crossfire (PvP) block covers single-match feats (15 kills, a 3-kill streak, a Ring Out, 10 grapple kills, a Gunner pancake, MVP, a Triple Kill, killing an upgrading player) and the Highlight feats (a 6-kill Multikill, a 25-kill streak, an Assault Bomb on a Pro, a melee kill, a juiced spin kill). The rest are large cumulative counts - 2500 kills with each class weapon, 100,000 kills on Slim Bots / Black Jacks / Buzzers / Gremlins, 2500 kills on the other bot types, building or upgrading each turret type 500 times, and destroying 2500 of each enemy turret.",
                "Nothing is missable - every counter is cumulative across matches. This is a long completion purely by volume: the 100,000-bot-kill and 2500-weapon-kill counts are hundreds of games.",
                "Tip: the bot-kill counts pile up fastest in Blitz Mode against endless waves - play Season and Playoff on a class whose weapon count you still need, and the per-weapon 2500 and per-bot 100,000 counts progress together."
            ]
        },
        {
            "heading": "Blitz Mode & Crossfire Feats",
            "body": [
                "Completing the Exhibition, Season, Playoff and The Scramble Blitz modes, and the early Crossfire single-match feats - 15 kills, a 3-kill streak, a Ring Out, 10 grapple kills, a Gunner pancake, MVP, a Triple Kill, killing an upgrading player, and the Air Strike Beacon, Multikill and Uber Streak Highlights.",
                "The achievements here: Exhibitor (Completed \"Exhibition\" Blitz Mode); Sacker (Achieved 15 kills in a Crossfire match); Hot Streak (Achieved a 3 kill streak in a Crossfire match); Seasoned Veteran (Completed \"Season\" Blitz Mode); All Star (Completed \"Playoff\" Blitz Mode); Outta My House! (Achieved a Ring Out during a Crossfire match); Grappler (Achieved 10 grapple kills in a Crossfire match); Flapjack Master (Achieved a pancake on an opposing player using the Gunner's Ground Slam ability); MVP (Achieved \"Most Valuable Player\" in a Crossfire match); Elusive (Completed \"The Scramble\" Blitz Mode); Caught 'em Nappin' (Achieved a kill on an opposing player while they were upgrading skills in a Crossfire match); 3-fer (Achieved a Triple Kill); Ground Zero (Attach a Support Air Strike Beacon to an enemy Pro); All Time Great (Score a 6 Kill Multikill); Uber Streak (Score a 25 Kill Streak)."
            ]
        },
        {
            "heading": "Weapon Mastery, Highlights & Cumulative",
            "body": [
                "The 2500-kill counts with each class weapon (Assault Rifle, Heal/Hurt Gun, Minigun, Jet Gun, Sniper Rifle, Assassin's blade), 100 Bacon Pickups, and the remaining Highlight and single-match feats - $9000 earnings, team leader, Jackbot kills, the Assault Bomb, a melee kill, a juiced spin kill, 100 prizes, and 7 Juices.",
                "The achievements here: Center of Attention (Score 2500 Kills with Assault's Rifle); The Draw (Score 2500 Kills with Support's Heal/Hurt Gun); Keep 'Em Down (Score 2500 Kills with the Gunner's Minigun or Dual Minigun); Red Hot (Score 2500 Kills with the Tank's Jet Gun); Drop The Boom (Score 2500 Kills with the Sniper Rifle); Ninja (Score 2500 Kills with the Assassin's Dagger or Sword); Bacon Hunter (Collect 100 Bacon Pickups); Over 9000 (Receive over $9000 in lifetime earnings after a Crossfire Match); Team Leader (Score the most kills in a single Crossfire Match); Team Player (Score the most assists in a single Crossfire Match); Strike It XL (Score 2 Jackbot Kills in a single Crossfire Match); Head Crab (Attach an Assault Bomb to an enemy Pro); Humiliation (Score a Kill with a melee attack); Spin N Juice (Score a Kill with the Jet Gun's alternate fire spin while juiced); I Got Candy! (Pickup a total of 100 prizes in one match); Overdose (Use Juice 7 times in one match)."
            ]
        },
        {
            "heading": "Turret & Bot Kill Counts",
            "body": [
                "150 Ringouts and Ejector Kills, building or upgrading each turret type 500 times, destroying 2500 of each enemy turret, 100,000 kills on Slim Bots / Black Jacks / Buzzers / Gremlins, and 2500 or 1000 kills on Bouncers, Scramblers, Gap Shots and Jackbot XLs.",
                "The achievements here: Ringouts (Score 150 Ringouts); Get Out Of Here (Score 150 Ejector Kills); Pew Pew (Build or Upgrade a Lazer Blazer Turret 500 times); Stand N Deliver (Build or Upgrade a RockIt Turret 500 times); Speed Kills (Build or Upgrade a Shave Ice Turret 500 times); Into The Breach (Destroy 2500 Lazer Blazer Turrets); Break The Armor (Destroy 2500 RockIt Turrets); Hell Mary (Destroy 2500 Long Shot Turrets); Global Warming (Destroy 2500 Shave Ice Turrets); Big Break (Score 100,000 Kills on Slim Bots); House Wins (Score 100,000 Kills on Black Jacks); Bzzz (Score 100,000 Kills on Buzzers); Thrown Out (Score 2500 Kills on Bouncers); Lich (Score 2500 Kills on Scramblers); G's (Score 100,000 Kills on Gremlins); Ground Rule (Score 2500 Kills on Gap Shots); Grand Prize (Score 1000 Kills on Jackbot XLs)."
            ]
        },
        {
            "heading": "Tutorial & Extras",
            "body": [
                "Finishing the Tutorial, scoring 30 kills in a Crossfire match, and the \"Bayheimer\" no-look-at-explosions gag.",
                "The achievements here: Rookie (Finish Tutorial); All Star Sacker (Score 30 Kills in a Crossfire Match); Bayheimer (Cool guys don't look at explosions)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Finish the Tutorial, then clear the four Blitz modes (Exhibition, Season, Playoff, The Scramble).",
                "2. Play Crossfire matches for the single-match feats - grapple kills, pancakes, streaks, MVP, Triple Kills, the Highlight feats.",
                "3. Grind Blitz Mode on rotating classes to build the per-weapon 2500-kill counts.",
                "4. Let the 100,000-bot-kill and turret build/destroy counts accrue across those runs.",
                "5. Mop up the Ringout, Ejector Kill and Bacon Pickup totals.",
                "Tip: the endless later waves of a Blitz match are the single best place to farm every kill count at once - stay alive, keep your turrets up, and let the bot waves come."
            ]
        }
    ]
};
