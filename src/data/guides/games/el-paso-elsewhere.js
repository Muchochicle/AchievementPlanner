// El Paso, Elsewhere Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/el-paso-elsewhere.json), whose 21 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1546310 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 6 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (TrueAchievements / Steam Community / game wikis) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "el-paso-elsewhere-achievement-guide",
    "category": "game",
    "gameSlug": "el-paso-elsewhere",
    "icon": "🧛",
    "title": "El Paso, Elsewhere Achievement Guide",
    "summary": "A practical guide to all 21 Steam achievements in El Paso, Elsewhere (6 hidden). Covers collectibles, weapon pickups, combat-mechanic totals, boss kills, and the game's two mutually exclusive endings. Six of the achievements are hidden and their unlock conditions are researched from community 100% guides.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "El Paso, Elsewhere has 21 Steam achievements and 6 are hidden. They cover finding all Pill Cop segments and all projectors, collecting the Uzi and the Launcher, combat-mechanic totals (250 stakes, 150 rolls, 150 dives, 1,000 weak-point hits, 50 heals), saving 10 hostages versus killing 5 of them, clearing the tutorial, and defeating the Puppeteer, the Burned Man and the Angel. The six hidden achievements are defeating Draculae and Djedefre, the game's two mutually exclusive endings, killing a mega enemy, and clearing the first Landmark level.",
                "The catalog marks it difficulty 3. This is a short, story-heavy Max Payne-style vampire noir shooter; nothing is missable except that the two endings are mutually exclusive per playthrough.",
                "Tip: the two ending achievements (Scars Fade and Thanks for Believing) can't both happen in the same run - plan on two playthroughs, or use separate saves near the end, if you want both."
            ]
        },
        {
            "heading": "Collectibles & Endings",
            "body": [
                "Finding all Pill Cop segments and all projectors, the hidden Draculae and Djedefre boss kills, the hidden Scars Fade and Thanks for Believing endings, and collecting the Uzi and the Launcher.",
                "The achievements here: FAITHFUL LISTENER (Find all Pill Cop segments.); FLASHBACK (Find all projectors.); GOODBYE (Defeat Draculae.); BURIAL (Defeat Djedefre.); SCARS FADE (Get the 'Scars Fade' ending.); THANKS FOR BELIEVING (Get the 'Thanks for Believing' ending.); OLD CLASSIC (Collect the Uzi.); LIFTOFF (Collect the Launcher.)."
            ]
        },
        {
            "heading": "Combat, Hostages & Bosses",
            "body": [
                "Staking 250 enemies, 150 rolls, 150 dives, 1,000 weak-point hits, saving 10 hostages, healing 50 times, killing 5 hostages, defeating the Puppeteer, the Burned Man and the Angel, the hidden mega-enemy kill, clearing the tutorial, and the hidden first Landmark level clear.",
                "The achievements here: HIGH STAKES (Stake 250 enemies.); SPRING LOADED (Roll 150 times.); BULLET TIMED (Dive 150 times.); SHARPSHOOTER (Hit 1,000 weak points.); RELUCTANT HERO (Save 10 hostages.); DIGGING YOUR OWN GRAVE (Heal 50 times.); I DIDN'T MEAN TO (Kill 5 hostages.); HATE THAT GUY (Kill the Puppeteer for the first time.); FRANKENSTEIN (Kill the Burned Man.); BIBLICALLY ACCURATE (Kill the Angel.); UPGRADED (Kill a mega enemy.); WAKEUP (Clear the tutorial.); NEEDLE DROP (Clear the first Landmark level.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Clear the tutorial, then play through the story, finding Pill Cop segments and projectors along the way.",
                "2. Collect the Uzi and the Launcher, and rack up stakes, rolls, dives and weak-point hits as you fight.",
                "3. Choose whether to save or kill hostages you encounter - both have their own achievement.",
                "4. Defeat the Puppeteer, the Burned Man, the Angel, Draculae and Djedefre as they appear.",
                "5. Clear the first Landmark level and kill a mega enemy, then pick an ending - replay (or use a separate save) to get the other one.",
                "Tip: 'Thanks for Believing' and 'Scars Fade' are mutually exclusive per playthrough, so budget for two runs (or a late save split) if you want both endings."
            ]
        }
    ]
};
