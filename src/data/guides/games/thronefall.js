// Thronefall Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/thronefall.json), whose 34 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   2239150 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "thronefall-achievement-guide",
    "category": "game",
    "gameSlug": "thronefall",
    "icon": "🛡️",
    "title": "Thronefall Achievement Guide",
    "summary": "A practical guide to all 34 Steam achievements in Thronefall - none are hidden. Covers the tutorial and per-map wins and quest completions, the Eternal Trials stages, the total-crowns milestones, and unlocking all equipment.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Thronefall has 34 Steam achievements and none of them are hidden. Most are per-map: winning on each of the game's maps (Nordfels, Durststein, Frostsee, and the rest) and completing all of that map's quests (the optional modifier challenges). Seven are for winning each stage of the Eternal Trials endless mode, four are total-crowns milestones (5, 10, 20, 30, plus 40 and 50 added later), and the last few are the tutorial and unlocking every building, perk, mutator and weapon.",
                "Nothing is missable - maps and their quests can be replayed freely, and crowns and equipment unlocks accumulate across your whole profile. The completion is medium-length; the hardest parts are completing every quest on every map (some quests stack difficult modifiers) and reaching the later Eternal Trials stages.",
                "Tip: each map's quests are individual runs with a specific modifier active (extra enemies, no walls, a time limit), and completing one also counts as a win - so work through a map's quest list one at a time rather than doing a plain win first, since the plain-win achievement comes free with the first quest you clear."
            ]
        },
        {
            "heading": "Tutorial & Map Wins",
            "body": [
                "Destroying a practice target and completing the tutorial, and the win and all-quests-complete achievements for the first maps - Nordfels, Durststein, Frostsee and Uferwind - plus unlocking all buildings, perks, mutators and weapons.",
                "The achievements here: Your Throne Awaits (Destroy a practice target in the tutorial.); A New King (Complete your training.); Nordfels (Win on Nordfels); Ruler of Nordfels (Complete all quests on Nordfels); Durststein (Win on Durststein); Ruler of Durststein (Complete all quests on Durststein); Frostsee (Win on Frostsee); Ruler of Frostsee (Complete all quests on Frostsee); All Equipment Unlocked (Unlock all buildings, perks, mutators and weapons); Uferwind (Win on Uferwind); Ruler of Uferwind (Complete all quests on Uferwind)."
            ]
        },
        {
            "heading": "Eternal Trials & Crowns",
            "body": [
                "Winning stages 1 through 7 of the Eternal Trials endless mode, the win and all-quests achievements for Sturmklamm, and the total-crowns milestones at 5, 10, 20 and 30 crowns.",
                "The achievements here: Eternal Peasant (Win stage 1 in the eternal trials.); Eternal Squire (Win stage 2 in the eternal trials.); Eternal Knight (Win stage 3 in the eternal trials.); Eternal Baron (Win stage 4 in the eternal trials.); Eternal Warlord (Win stage 5 in the eternal trials.); Eternal Conqueror (Win stage 6 in the eternal trials.); Eternal Legend (Win stage 7 in the eternal trials.); Sturmklamm (Win on Sturmklamm); Ruler of Sturmklamm (Complete all quests on Sturmklamm); 5 Crowns (Collect a total of 5 crowns.); 10 Crowns (Collect a total of 10 crowns.); 20 Crowns (Collect a total of 20 crowns.); 30 Crowns (Collect a total of 30 crowns.)."
            ]
        },
        {
            "heading": "Later Maps & More Crowns",
            "body": [
                "The win and all-quests-complete achievements for the later maps - Wildbach, Moorweg, Freifort and Totend - and the 40- and 50-crown total milestones.",
                "The achievements here: Wildbach (Win on Wildbach); Ruler of Wildbach (Complete all quests on Wildbach); Moorweg (Win on Moorweg); Ruler of Moorweg (Complete all quests on Moorweg); Freifort (Win on Freifort); Ruler of Freifort (Complete all quests on Freifort); Totend (Win on Totend); Ruler of Totend (Complete all quests on Totend); 40 Crowns (Collect a total of 40 crowns.); 50 Crowns (Collect a total of 50 crowns.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Do the tutorial, then win each map once to unlock the roster of buildings, perks, mutators and weapons.",
                "2. Go back through each map's quest list, doing one quest per run - each quest completion also counts as a win and progresses your crown total.",
                "3. Play the Eternal Trials endless mode, pushing to stage 7 as your equipment and skill improve.",
                "4. The total-crowns milestones (up to 50) accumulate across all this play; grind a few extra map or quest runs for any that remain.",
                "5. Finish by clearing the all-quests achievement on the last maps (Wildbach, Moorweg, Freifort, Totend), which are the hardest quest sets.",
                "Tip: for the harder quests and the late Eternal Trials stages, a wall-and-archer-tower core with a strong personal weapon (the bow or the daggers) lets you patch weak points yourself - spend your night phase reinforcing whichever gate the next wave targets rather than upgrading evenly."
            ]
        }
    ]
};
