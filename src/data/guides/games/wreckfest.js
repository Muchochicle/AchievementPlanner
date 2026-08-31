// Wreckfest Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/wreckfest.json), whose 20 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   228380 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 3 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (TrueAchievements / Steam Community / game wikis) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "wreckfest-achievement-guide",
    "category": "game",
    "gameSlug": "wreckfest",
    "icon": "🚗",
    "title": "Wreckfest Achievement Guide",
    "summary": "A practical guide to all 20 Steam achievements in Wreckfest (3 hidden). Covers the rank / vehicle / career achievements and the wrecking and one-off feat achievements. Three achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Wreckfest has 20 Steam achievements and three are hidden - 'Glutton For Punishment' (get wrecked 100 times), 'Look Mom, I Can Fly' (5 minutes of total airborne time) and 'Garden Variety' (drive a total of 1 hour with the Lawn Mower). The rest are open: the Player Rank milestones, collecting 10 and 20 vehicles, completing each career championship (up to World Masters) and all career challenges, 20 multiplayer event wins, wrecking 100 opponents, 50 School Bus wrecks, a 210 km/h Rocket run, and earning 50,000 credits.",
                "The catalog marks it a single playthrough - everything is cumulative across career, multiplayer and custom events. Nothing is missable.",
                "Tip: knock out 'Garden Variety' and 'Look Mom, I Can Fly' in a single-player custom event with no opponents - pick the Lawn Mower and a course with a big jump, and leave it running."
            ]
        },
        {
            "heading": "Ranks, Vehicles & Career",
            "body": [
                "Reaching Player Rank 10, 25 and 50, collecting 10 and 20 vehicles, completing the Regional Juniors, National Amateurs, Challengers, Pro Internationals and World Masters championships, all career challenges, and your first career race win.",
                "The achievements here: Dirty Roller (Reach Player Rank 10.); Trashing Around (Reach Player Rank 25.); Showing Some Dedication (Reach Player Rank 50.); Wheeler Dealer (Collect 10 Vehicles.); Junk Collector (Collect 20 Vehicles.); Regional Juniors Champion (Complete Regional Juniors Championship.); National Amateurs Champion (Complete National Amateurs Championship.); Challengers Champion (Complete Challengers Championship.); Pro Internationals Champion (Complete Pro Internationals Championship.); World Masters Champion (Complete World Masters Championship.); Highballer (Complete All Career Challenges.); Storm Warning (Win Your First Career Race.)."
            ]
        },
        {
            "heading": "Wrecking & Feats",
            "body": [
                "20 multiplayer event wins, wrecking 100 opponents, the three hidden feats (get wrecked 100 times, 5 minutes airborne, 1 hour with the Lawn Mower), 50 wrecks with the School Bus, reaching 210 km/h with the Rocket, and earning 50,000 credits.",
                "The achievements here: Human Lover (Win 20 Events In Multiplayer.); Hating Them Tin Cans (Wreck 100 Opponents.); Glutton For Punishment (Get wrecked (taken out of a race or derby) by opponents 100 times.); Look Mom, I Can Fly (Spend a total of 5 minutes airborne across all events - big derby-arena ramps rack it up fastest.); Garden Variety (Drive a total of 1 hour with the Lawn Mower vehicle - a no-opponent custom event is the easy way.); Maniac Driver (Wreck 50 Opponents With School Bus.); Rocketeer (Reach 210 Km/h (130 Mph) With Rocket.); Cash For Crashes (Earn 50 000 Credits.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through the career, completing each championship up to World Masters and all career challenges.",
                "2. Collect 20 vehicles and earn 50,000 credits along the way.",
                "3. Do the wrecking feats - 100 opponents wrecked, 50 School Bus wrecks - in derby events.",
                "4. Set up a no-opponent custom event with the Lawn Mower for 'Garden Variety' and 'Look Mom, I Can Fly'.",
                "5. Play multiplayer for the 20-wins achievement.",
                "Tip: 'Rocketeer' (210 km/h with the Rocket) needs the Rocket vehicle and a long straight - the figure-8 or oval tracks with a clear back stretch are best."
            ]
        }
    ]
};
