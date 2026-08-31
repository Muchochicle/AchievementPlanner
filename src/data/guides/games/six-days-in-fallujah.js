// Six Days in Fallujah Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/six-days-in-fallujah.json), whose 34 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1548850 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "six-days-in-fallujah-achievement-guide",
    "category": "game",
    "gameSlug": "six-days-in-fallujah",
    "icon": "🏜️",
    "title": "Six Days in Fallujah Achievement Guide",
    "summary": "A practical guide to all 34 Steam achievements in Six Days in Fallujah - none are hidden. Covers the roles, training and co-op achievements, the FUBAR Hard and special-condition achievements, the Hard-AI Veteran and campaign achievements, and the single-player Tactician achievements. None of the achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Six Days in Fallujah has 34 Steam achievements and none are hidden. Eight cover the fireteam roles (Assist, Fire, Ready), training, healing a teammate, six hours played, a full-friends fireteam and a Team Lead win. Eight are FUBAR missions on Hard AI difficulty on specific maps plus a no-deaths FUBAR Hard run and missions during Flare and Sandstorm conditions. Nine are Hard-AI 'Veteran' clears of each map and the two named campaign missions (Vigilant Resolve, Operation al-Fajr). Nine are 'Tactician' - completing each map single-player with an AI fireteam.",
                "The catalog marks it difficulty 4. It is a procedurally generated tactical shooter, mostly co-op; the Hard-AI FUBAR clears and the no-deaths run are demanding, and grinding every map on Hard in three modes is a long haul.",
                "Tip: learn the maps on normal difficulty, then do Hard-AI Veteran and FUBAR clears with a coordinated fireteam, and the Tactician set solo with AI teammates."
            ]
        },
        {
            "heading": "Roles, Training & Co-op",
            "body": [
                "A full-friends fireteam mission, six hours played, healing a downed teammate, your first promotion, completing a mission as the Assist, Fire and Ready roles, and a minimal-loss 4-player Team Lead win.",
                "The achievements here: Band of Brothers (Complete a fireteam mission with a full fireteam of players from your Friends List.); Six in Six (Play Six Days for six hours.); Heal a Teammate (Interact with a downed teammate to prevent bleeding out and bring them back into the battle.); First Promotion (Congratulations! You earned your first stripe!); Assist (Complete a fireteam mission playing the ASSIST role, who specializes in CQB.); Fire (Complete a fireteam mission playing the FIRE role, who uses the M249 SAW and specializes in suppression.); Ready (Complete a fireteam mission playing the READY role, who specializes as the fireteam's scout.); Proven Leader (Successfully complete a 4 player fireteam mission as Team Lead with minimal loss.)."
            ]
        },
        {
            "heading": "FUBAR Hard & Conditions",
            "body": [
                "FUBAR missions on Hard AI on the Apartment Building, Jolan Public Square, Phase Line Henry and Northern Train Station, a mission during 'Flare' time of day, a mission during a Sandstorm, a no-deaths FUBAR Hard-AI mission, and the Train Station Veteran clear.",
                "The achievements here: Apartment Expert (Complete a FUBAR Apartment Building Mission with Hard AI difficulty.); Jolan Square Expert (Complete a FUBAR Jolan Public Square Mission with Hard AI difficulty.); Own the Night (Complete a mission during the \"Flare\" Time of Day.); Phase Line Henry Expert (Complete a FUBAR Phase Line Henry Mission with Hard AI difficulty.); Ride Out the Storm (Complete a mission during a Sandstorm.); Slow is Smooth, Smooth is Fast (Complete a FUBAR mission on Hard AI difficulty, with no deaths.); Train Station Expert (Complete a FUBAR Northern Train Station Mission with Hard AI difficulty.); Train Station Veteran (Complete a Northern Train Station mission with Hard AI difficulty.)."
            ]
        },
        {
            "heading": "Hard-AI Veteran & Campaign",
            "body": [
                "Hard-AI 'Veteran' clears of the Apartment Building, Phase Line Henry, Jolan Public Square, Jolan Amusement Park, Objective Virginia, West Manor and HLZ Wolf, plus the Vigilant Resolve and Operation al-Fajr campaign missions.",
                "The achievements here: Apartment Veteran (Complete an Apartment Building mission with Hard AI difficulty.); Phase Line Henry Veteran (Complete a Phase Line Henry mission with Hard AI difficulty.); Jolan Square Veteran (Complete a Jolan Public Square mission with Hard AI difficulty.); Amusement Park Veteran (Complete a Jolan Amusement Park mission with Hard AI difficulty.); Objective Virginia Veteran (Complete an Objective Virginia mission with Hard AI difficulty.); West Manor Veteran (Complete a West Manor mission with Hard AI difficulty.); HLZ Wolf Veteran (Complete an HLZ Wolf mission with Hard AI difficulty.); Vigilant Resolve Veteran (Complete the Vigilant Resolve Campaign Mission.); Operation al-Fajr Veteran (Complete the Operation al-Fajr Campaign Mission.)."
            ]
        },
        {
            "heading": "Single-Player Tactician & Training",
            "body": [
                "Completing the Northern Train Station, Apartment Building, Phase Line Henry, Jolan Public Square, Jolan Amusement Park, Objective Virginia, West Manor and HLZ Wolf maps single-player with an AI fireteam, and completing training ('Firewatch Medal').",
                "The achievements here: Train Station Tactician (Complete Northern Train Station single-player, playing with an AI fireteam.); Apartment Tactician (Complete Apartment Building single-player, playing with an AI fireteam.); Phase Line Henry Tactician (Complete Phase Line Henry single-player, playing with an AI fireteam.); Jolan Square Tactician (Complete Jolan Public Square single-player, playing with an AI fireteam.); Amusement Park Tactician (Complete Jolan Amusement Park single-player, playing with an AI fireteam.); Objective Virginia Tactician (Complete Objective Virginia single-player, playing with an AI fireteam.); West Manor Tactician (Complete West Manor single-player, playing with an AI fireteam.); HLZ Wolf Tactician (Complete HLZ Wolf single-player, playing with an AI fireteam.); Firewatch Medal (Complete training.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Complete training, earn your first promotion, and play each of the three roles (Assist, Fire, Ready) to completion.",
                "2. Learn every map on lower difficulty.",
                "3. Do the Hard-AI 'Veteran' clears of each map and the two campaign missions.",
                "4. Do the 'Tactician' set - each map solo with an AI fireteam.",
                "5. Do the FUBAR Hard-AI clears, the Flare and Sandstorm missions, and a no-deaths FUBAR Hard run with a coordinated team.",
                "Tip: the no-deaths FUBAR Hard run ('Slow is Smooth, Smooth is Fast') is easiest on the smallest map you know well - clear rooms methodically with the fireteam stacked, and reset the mission if anyone goes down."
            ]
        }
    ]
};
