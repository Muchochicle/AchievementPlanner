// Descenders Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/descenders.json), whose 42 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   681280 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 5 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (TrueAchievements / Steam Community / game wikis) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "descenders-achievement-guide",
    "category": "game",
    "gameSlug": "descenders",
    "icon": "🚵",
    "title": "Descenders Achievement Guide",
    "summary": "A practical guide to all 42 Steam achievements in Descenders (5 hidden). Covers the progression and REP achievements, the runs, tricks and boss achievements, and the bonus worlds, Career+ and tour achievements. Five achievements are Steam-hidden and researched from community 100% guides.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Descenders has 42 Steam achievements and five are Steam-hidden (all Volcano bonus-world related, plus the whoopee cushion and a bail finish). The open thirty-seven are biome progression (forest, canyon, peaks, the peaks boss jump), getting sponsored, REP totals (10k/50k/250k), item unlocks (10/25/50), trick landings (double frontflip, 360 frontflip, 720 double backflip), speed and full-run achievements ('The Golden Run' is a no-bail highlands-to-peaks session), all bonus worlds, Career+ in one session ('What A Legend'), and the eight sponsor Amateur/Pro tour completions.",
                "The catalog marks it difficulty 4. It is a roguelike, so 'The Golden Run' (no bailing across a whole session) and 'What A Legend' (finish Career+ in one run) are genuine skill walls; the trick and REP achievements come with practice.",
                "Tip: learn the biomes and trick timing in normal Career, unlock the bonus worlds, then dedicate attempts to the no-bail full run and Career+."
            ]
        },
        {
            "heading": "Progression & REP",
            "body": [
                "Reaching the forest, canyon and peaks, completing the peaks boss jump ('Made It'), getting sponsored by a team, REP totals of 10,000 / 50,000 / 250,000, and unlocking 10 / 25 / 50 items.",
                "The achievements here: Into The Woods (Reach the forest); The Rampage Begins (Reach the canyon); The Final Challenge (Reach the peaks); Made It (Complete boss jump in peaks); It Begins (Get sponsored by a team); Carving a Path (Get 10.000 REP); Found Your Flow (Get 50.000 REP); Ain't No Scrub (Get 250.000 REP); Get Some Gear (Unlock 10 items); It's Getting Cluttered in Here (Unlock 25 items); Quite a Collection (Unlock 50 items)."
            ]
        },
        {
            "heading": "Runs, Tricks & Bosses",
            "body": [
                "Getting REKT, 10 mini-bosses, surviving a boss jump, jumping the train, a team node, unlocking a shortcut, a double frontflip, a 360 frontflip, a 720 double backflip, hitting 100 km/h, a full highlands-to-peaks session, and 'The Golden Run' (a full session with no bails).",
                "The achievements here: Wipeout (Get REKT); Gap in the Market (Complete 10 mini-bosses); Show em who's Boss (Survive a boss jump); The training was worth it (Jump over the train); Represent your style (Complete a team node); Dialed in (Unlock a shortcut); Flipping Heck (Land a double frontflip); Every Axis (Land a 360 frontflip); Getting Dizzy (Land a 720 double backflip); Speed Demon (Reach 100kmh/62mph); A True Descender (Finish a session from highlands to peaks); The Golden Run (Finish a session from highlands to peaks without bailing a single time)."
            ]
        },
        {
            "heading": "Bonus Worlds, Career+ & Tours",
            "body": [
                "The Steam-hidden Volcano achievements ('It's Getting Hot In Here', 'Hotshot', 'The Ring Of Fire') and 'Pull My Finger' and 'Flying Finish', completing all bonus worlds, completing a sponsorship, co-op and 3-crew sessions, finishing the credits, 'What A Legend' (Career+ in one session), and the eight No More Robots / Power Up Audio / Liquicity / RageSquid Amateur and Pro Tours.",
                "The achievements here: It's Getting Hot In Here (Reach the Volcano bonus world.); Hotshot (Complete the boss jump in the Volcano.); The Ring Of Fire (Complete the Volcano's fire-ring boss jump.); Pull My Finger (Use the whoopee cushion 200 times.); Go The Extra Mile (Complete all bonus worlds); Flying Finish (Cross a level's finish line after bailing (crashing).); Veteran (Complete a sponsorship); Bring A Friend (Finish a level together with someone else); Get The Gang Together (Finish a session with 3 different crew members); You're Still Here? (Finish the credits); What A Legend (Finish Career+ in one session); No More Robots Amateur Tour (Complete all of the missions in the No More Robots Amateur Tour); Power Up Audio Amateur Tour (Complete all of the missions in the Power Up Audio Amateur Tour); Liquicity Amateur Tour (Complete all of the missions in the Liquicity Amateur Tour); RageSquid Amateur Tour (Complete all of the missions in the RageSquid Amateur Tour); No More Robots Pro Tour (Complete all of the missions in the No More Robots Pro Tour); Power Up Audio Pro Tour (Complete all of the missions in the Power Up Audio Pro Tour); Liquicity Pro Tour (Complete all of the missions in the Liquicity Pro Tour); RageSquid Pro Tour (Complete all of the missions in the RageSquid Pro Tour)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play Career, progressing through forest, canyon and peaks and getting sponsored.",
                "2. Build up REP and item unlocks, and practise the trick achievements (double frontflip, 360 frontflip, 720 double backflip) in the bike park or early nodes.",
                "3. Unlock and clear all bonus worlds, including the Volcano (hidden achievements).",
                "4. Complete all eight sponsor Amateur and Pro tours.",
                "5. Dedicate runs to 'The Golden Run' (no bails, highlands to peaks) and 'What A Legend' (Career+ in one session).",
                "Tip: 'The Golden Run' is easier if you skip risky shortcuts and land every trick clean rather than pushing for big scores - a bail ends the attempt, a small line does not."
            ]
        }
    ]
};
