// Empyrion - Galactic Survival Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/empyrion-galactic-survival.json), whose 22 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   383120 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 1 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (TrueAchievements / Steam Community / game wikis) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "empyrion-galactic-survival-achievement-guide",
    "category": "game",
    "gameSlug": "empyrion-galactic-survival",
    "icon": "🚀",
    "title": "Empyrion - Galactic Survival Achievement Guide",
    "summary": "A practical guide to all 22 Steam achievements in Empyrion - Galactic Survival (1 hidden). Covers the first-steps and survival achievements, the Drone Wrecker and Light Year progression tiers, and the combat, exploration and novelty achievements. One achievement ('Anniversary 2026') is a Steam-hidden time-limited event and researched from community notes.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Empyrion - Galactic Survival has 22 Steam achievements and one ('Anniversary 2026') is a Steam-hidden, time-limited event. The rest are open: early survival firsts (first pizza, spoiled food, first orbit, placing a base starter, dying to a spider), two progression ladders - Drone Wrecker (10/25/75/200 space drones) and Light Year (1,000/2,500/5,000/10,000 light years warped) - and a set of one-off combat, exploration and novelty moments (digging to bedrock, an explosive-device kill, destroying a POI core with a vessel's fixed weapons, burning in lava, joining a faction, using night-vision in daylight).",
                "The catalog marks it difficulty 2 - the achievements are gentle and most come with normal play. The only real problem is 'Anniversary 2026', which is permanently unobtainable now unless you played in that August 2026 window.",
                "Tip: play a normal survival start and you will pick up most of these; the Drone Wrecker and Light Year tiers just need continued play into space."
            ]
        },
        {
            "heading": "First Steps & Survival",
            "body": [
                "Eating a pizza and then spoiled food, reaching orbit for the first time, curing indigestion at a toilet, placing your first Base starter, killing an Abomination with a chainsaw, and dying to a spider.",
                "The achievements here: Best In Town (Eat a pizza for the first time); Desperate Measures (Eat spoiled food); Escape Velocity (Achieve orbit for the first time); Hazardous Materials Disposal (Treat Indigestion using a toilet); Home Is Where The Core Is (Place your first Base starter); Rip And Tear (Kill an Abomination with a chainsaw); Too Many Legs (Die by a spider)."
            ]
        },
        {
            "heading": "Drone Wrecker & Light Year",
            "body": [
                "Destroying 10, 25, 75 and 200 space drones, and warping a cumulative 1,000, 2,500, 5,000 and 10,000 light years.",
                "The achievements here: Drone Wrecker Novice (Destroy 10 space drones); Drone Wrecker Specialist (Destroy 25 space drones); Drone Wrecker Master (Destroy 75 space drones); Drone Wrecker Expert (Destroy 200 space drones); Light Year Runner (Warp more than 1,000 light years); Light Year Sprinter (Warp more than 2,500 light years); Light Year Pacer (Warp more than 5,000 light years); Light Year Marathoner (Warp more than 10,000 light years)."
            ]
        },
        {
            "heading": "Combat, Exploration & Extras",
            "body": [
                "Digging to a planet's max depth, an Explosive Device kill, destroying a POI core with fixed vessel weapons, burning to death in lava, joining a faction, activating night-vision goggles in daylight, and the Steam-hidden time-limited 'Anniversary 2026'.",
                "The achievements here: Bedrock Digger (Dig to max depth on a planet); A Blasting Welcome (Kill an enemy with an Explosive Device); Just To Be Sure (Destroy a POI core with fixed vessel weapons); Crispy 'n Crunchy (Burn to death in lava); Take Me To Your Leader! (Join a faction); Luminous Experience (Activate Night Vision goggles in broad daylight); Anniversary 2026 (Limited-time event achievement: start a new savegame during Empyrion's anniversary window in early August 2026 (the developers extended the date check to roughly 5-11 August). It cannot be earned outside that window.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Start a normal survival game - the food, toilet, base-starter and 'Too Many Legs' firsts come quickly.",
                "2. Build a small ship, reach orbit ('Escape Velocity'), and start clearing space drones for the Drone Wrecker tiers.",
                "3. Fit a warp drive and rack up light years for the Light Year tiers.",
                "4. Do the one-offs deliberately: dig to bedrock, kill with an explosive device, destroy a POI core with vessel guns, join a faction.",
                "5. 'Anniversary 2026' can only be had by starting a save in that August 2026 window - skip it if you missed it.",
                "Tip: the Light Year and Drone Wrecker counts are cumulative across the save, so they tick over on their own during any longer space playthrough."
            ]
        }
    ]
};
