// Mycopunk Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/mycopunk.json), whose 35 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   3247750 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 5 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (TrueAchievements / Steam Community / game wikis) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "mycopunk-achievement-guide",
    "category": "game",
    "gameSlug": "mycopunk",
    "icon": "🍄",
    "title": "Mycopunk Achievement Guide",
    "summary": "A practical guide to all 35 Steam achievements in Mycopunk (5 hidden). Covers combat and upgrade milestones, all four biomes and threat levels, and the Wrangler/Bruiser/Scrapper/Glider crew classes. Five of the achievements are hidden and their unlock conditions are researched from community 100% guides.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Mycopunk has 35 Steam achievements and 5 are hidden. About twenty cover combat and upgrades - killing a crewmate, applying upgrades, finding an exotic upgrade, fitting 9 upgrades on one grid, big damage dealt and taken, 5000 enemy kills, defeating an Abomination, a full-duration grapple swing, and one hidden pipe-knocking gag. The rest are mission variety and progression - all four biomes (Gravity Farms, Moldy Tundra, Desert, Titan City), all six threat levels, a full 4-class crew, 4+ modifiers in one mission, levels 15 and 30, and three more hidden achievements (a boss kill, greeting the hub NPC Roachard repeatedly, and a grim death counter).",
                "The catalog marks it difficulty 3. Nothing here is missable, but climbing to threat level 6 and stacking 4+ modifiers in one run are genuine challenge spikes in this 4-player co-op shooter.",
                "Tip: cycle through all four crew classes across a few missions for Full Crew, and visit the hub between runs to say hi to Roachard and knock over a pipe for the joke achievements."
            ]
        },
        {
            "heading": "Combat & Upgrades",
            "body": [
                "Killing a crewmate, applying an upgrade, finding an exotic upgrade, collecting 50 upgrades, dying to an overclocked enemy core, dying from fall damage, lassoing another player as the Wrangler, fitting 9 upgrades on one grid, finishing off an Abomination, dealing and racking up big damage totals, killing 5000 enemies, and the hidden pipe-knocking gag.",
                "The achievements here: Best Teammate (Kill a member of your crew); Upgrader (Apply an upgrade); Exotic (Find an exotic upgrade); Collector (Collect 50 upgrades); Overclocked (Die to an overclocked enemy core); Hard Landing (Die from fall damage); Yeehaw (As the Wrangler, lasso another player); Space Optimization (Fit 9 upgrades on one grid); ABOMINATION (Get the final hit on an Abomination); Big Damage (Deal a lot of damage); Serial Killer (Kill 5000 enemies); Oops (Knock over a pipe.)."
            ]
        },
        {
            "heading": "Missions, Biomes & Progression",
            "body": [
                "Completing a mission with a full Wrangler/Bruiser/Scrapper/Glider crew, the hidden death-counter achievement, taking a lot of damage, a full-duration grapple swing, completing a mission with 4+ modifiers, missions in all four biomes (Gravity Farms, Moldy Tundra, Desert, Titan City), and reaching level 15 and level 30.",
                "The achievements here: Full Crew (Complete a mission with a Wrangler, Bruiser, Scrapper, and Glider on your team); Employee of the Month (Die 31 times.); Ow (Take a lot of damage); Swinger (Swing around a grapple pole for its full duration without touching the ground); Yikes (Complete a mission with at least 4 active modifiers); No Broccoli Please (Complete a mission in the Gravity Farms); It's So Red (Complete a mission in the Moldy Tundra); I Like Sand (Complete a mission in the Desert); I Think I Left My Keys in the Taxi, Can We Go Back And Get Them? (Complete a mission in Titan City); Big Shot (Reach level 15); Employee of the Day (Reach level 30)."
            ]
        },
        {
            "heading": "Bosses, Threat Levels & Hub Secrets",
            "body": [
                "The hidden Cranius boss kill, saying hi to Roachard and the hidden achievement for saying hi to him a lot, completing a mission at all six threat levels, the hidden hub basketball-hoop gag, a melee kill on a hornet, and punching a bag of Saxitos.",
                "The achievements here: Cranius (Defeat the Cranius boss.); Hi (Say hi to Roachard); Calm Down (Say hi to Roachard many times in a row.); That Was Tough (Complete a mission on threat level 1); Not Too Bad (Complete a mission on threat level 2); Hazard Pay (Complete a mission on threat level 3); Bush League (Complete a mission on threat level 4); Thanks (Complete a mission on threat level 5); Ok Then (Complete a mission on threat level 6); BANG! (In the hub, kill a teammate and throw one of their body parts into the basketball hoop.); Slap (Kill a hornet with your melee attack); I Want Saxitos (Punch a bag of Saxitos™)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play missions across all four biomes and cycle through all four crew classes to knock out Full Crew.",
                "2. Apply upgrades as you find them, and aim to fit 9 on one grid for Space Optimization.",
                "3. Climb the six threat levels one at a time, and stack 4+ modifiers on a mission once you're comfortable.",
                "4. In the hub between runs, say hi to Roachard repeatedly, knock over a pipe, and punch the bag of Saxitos.",
                "5. Keep playing for the big kill/damage/death counters and levels 15 and 30.",
                "Tip: the hub gag achievements (Oops, Calm Down, BANG!) cost nothing to go for between missions, so knock them out early rather than saving them for later."
            ]
        }
    ]
};
