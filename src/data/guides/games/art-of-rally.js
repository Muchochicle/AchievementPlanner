// art of rally Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/art-of-rally.json), whose 43 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   550320 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "art-of-rally-achievement-guide",
    "category": "game",
    "gameSlug": "art-of-rally",
    "icon": "🚙",
    "title": "art of rally Achievement Guide",
    "summary": "A practical guide to all 43 Steam achievements in art of rally - none are hidden. Covers the career groups and collectibles, and the weather, stunt and milestone achievements.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "art of rally has 43 Steam achievements and none of them are hidden. The career set covers winning a season, completing all seasons in each car group (2, 3, 4, B, S, A), finding every collectible in each of the five regions (Finland, Sardinia, Japan, Norway, Germany), completing daily and weekly events, and unlocking all career bonuses. The rest are condition and stunt feats (finish a stage at night, in rain, fog and snow; complete a stage with no damage and with a near-totalled car; spend 5 minutes airborne and 5 minutes sliding; roll 30 times; win against master AI with severe damage simulation) and distance/count milestones (20 rallies, 1,000 stages, 500 km in one car, finish the game).",
                "Nothing is missable - stages, seasons and regions are all replayable and the counters only go up. The completion is short; the longest feats are the airborne/sliding time totals, 1,000 stages, and completing every car group's seasons.",
                "Tip: play through career mode group by group - that alone earns the group-completion, bonus and 20-rally achievements - and use free-roam or replays of a jump-heavy stage to farm the airborne, sliding and roll feats."
            ]
        },
        {
            "heading": "Career: Groups & Collectibles",
            "body": [
                "Winning your first season, completing all seasons in groups 2, 3, 4, B, S and A, finding every collectible in Korkatti Lakes, San Pietro Island, Kanto Mountains, Gimsoymyrene and Mannebach, completing a daily and a weekly event, and unlocking all career bonuses.",
                "The achievements here: podium (win your first season); grocery-getter (complete all group 2 seasons); rwd only (complete all group 3 seasons); turbo (complete all group 4 seasons); monster (complete all group b seasons); parallel universe (complete all group s seasons); antilag (complete all group a seasons); perkele (find all collectibles in korkatti lakes); espresso (find all collectibles in san pietro island); eurobeat (find all collectibles in kanto mountains); viking (find all collectibles in gimsøymyrene); oktoberfest (find all collectibles in mannebach); in like a lamb, out like a lion (complete a daily event); real roads, real fast (complete a weekly event); parking lot (unlock all bonuses in career)."
            ]
        },
        {
            "heading": "Conditions, Stunts & Milestones",
            "body": [
                "Finishing a stage at night, in rain, fog and snow, the car wash and paint booth, completing a stage near-totalled and with no damage, 20 rallies, 500 km in one car, 1,000 stages, terminal damage, a fully dirtied car, reaching 100 / 150 / 200 km/h, 5 minutes airborne and 5 minutes sliding, a master-AI severe-simulation win, 3 seconds on two wheels, finishing a race on fire, 30 rolls, the night-Japan Absolute Drift feat, the German and Italian food tours, 555 km in the Fujin, holding full throttle for 60 seconds, and completing the game.",
                "The achievements here: night ride (finish a stage at night); snorkel (finish a stage during rain); where is the stage? (finish a stage during fog); mittens (finish a stage while it's snowing); car wash (go through the car wash); the artist (go through the paint booth); barely keeping it together (complete a stage with a near totalled car); keep it tidy (complete a stage without damaging the car); to finish first, first you must finish (complete 20 rallies); comfy seats (drive 500km with one vehicle); if everything seems under control, you're not going fast enough (complete 1000 stages); samir (get terminal damage); brail (dirty a vehicle to the fullest extent); light attack (reach 100 km/h); medium attack (reach 150 km/h); maximum attack (reach 200 km/h); autopilot (spend 5 minutes airborne); good drivers have dead flies on the side windows (spend 5 minutes sliding); simulator (win a rally against master ai with severe damage simulation); bicycle race (drive on 2 wheels for 3 seconds); group b (finish a race while on fire); you can't treat a car like a human being. a car requires love (roll 30 times); absolute drift (finish a stage driving the original at night in japan); food tour: pretzel (drive a german car in germany); food tour: pasta (drive an italian car in italy); you're here for a good time, not a long time (drive the fujin for 555km); if in doubt, flat out! (hold the accelerator for 60 seconds); master of rally (complete the game)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play career mode group by group, completing every season - this earns the six group-completion achievements, all bonuses, and the 20-rally and game-completion feats.",
                "2. During career, tick off the weather feats (night, rain, fog, snow) and the speed thresholds (100/150/200 km/h) as conditions and cars allow.",
                "3. Sweep each region for its collectibles in free-roam.",
                "4. Farm the stunt time feats (5 minutes airborne, 5 minutes sliding, 30 rolls, 3 seconds on two wheels) on a jump-heavy or loose-surface stage via replays.",
                "5. Do the one-off gimmick feats (Absolute Drift in night Japan, the food tours, 555 km in the Fujin, the on-fire finish, the master-AI simulation win) and complete a daily and weekly event.",
                "Tip: the 5-minutes-airborne and 5-minutes-sliding totals are cumulative across all your driving, so they will finish on their own during career - only check them at the end and do a couple of deliberate jump or handbrake runs if a little is left."
            ]
        }
    ]
};
