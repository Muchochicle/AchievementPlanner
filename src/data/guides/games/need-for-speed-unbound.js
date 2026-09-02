// Need for Speed Unbound Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/need-for-speed-unbound.json), whose 41 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1846380 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 5 achievement(s) are Steam-hidden or ship no Steam
//   description; their description here is researched from community
//   100% guides and is a curatorial summary. Every other description is
//   Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "need-for-speed-unbound-achievement-guide",
    "category": "game",
    "gameSlug": "need-for-speed-unbound",
    "icon": "🏎️",
    "title": "Need for Speed Unbound Achievement Guide",
    "summary": "A practical guide to all 41 Steam achievements in Need for Speed Unbound (5 hidden). The 5 hidden achievements are spoiler-free story progression markers. The rest - collectibles, 3-star activities, money and Takeover milestones, cop chases, and the Lakeshore Online playlist tiers - carry Steam's own text.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Need for Speed Unbound has 41 Steam achievements, 5 of them hidden. Need for Speed Unbound is Criterion's cel-shaded street racer set in Lakeshore City. The visible achievements are the collectible sets (bears, billboards, street art), 3-starring every activity type (Speed Runs, Long Jumps, Drift Zones, Speed Traps), the money and Takeover-score milestones, the story-garage and Lakeshore Online garage upgrades, cop-chase escapes, driving-distance and top-speed feats, and the Lakeshore Online playlist tiers up to S+.",
                "The 5 hidden achievements are story progression markers, from 'New Crew' through 'Hey Lakeshore'. They unlock as the campaign's weekly qualifier structure advances and are described here spoiler-free.",
                "The catalog marks it difficulty 3 and single-playthrough. Nothing is missable - the open world stays available - but the S+ Lakeshore Online playlist win and 3-starring every activity are the main challenges."
            ]
        },
        {
            "heading": "Story Campaign",
            "body": [
                "The five Steam-hidden story markers, the Heat 5 cop-chase escapes (any car and an A+ car), 30 street races, 10 Takeover events, the Takeover score milestones, banking $75,000 in a session and $1,000,000 total, fully upgrading the story garage, taking down 5 cops in a session, escaping 50 chases, a 200 MPH run, and 100 miles driven.",
                "The achievements here: Most Wanted (Escape a Heat 5 cop chase); New Crew (Story progress marker - unlocks at a specific point in the campaign, described here spoiler-free); Oh, It's On (Story progress marker - unlocks at a specific point in the campaign, described here spoiler-free); Lake Better Watch Out (Story progress marker - unlocks at a specific point in the campaign, described here spoiler-free); Found Family (Story progress marker - unlocks at a specific point in the campaign, described here spoiler-free); Hey Lakeshore (Story progress marker - unlocks at a specific point in the campaign, described here spoiler-free); Serious Guap (Bank $75,000 during one session); Cash Money Millionaire (Earn $1,000,000 in story mode); Flow Master (Score 250,000 during a Takeover event); In the Flow (Score 200,000 during a Takeover event); Rebel Without a Pause (Complete 30 street races in story mode); Style it Out (Complete 10 Takeover events ); Rydell's Rydes (Fully upgrade your story garage); Escape Artist (Escape a Heat 5 cop chase in an A+ car); Public Enemy (Take down 5 cops within a single session); Untouchable (Escape 50 cop chases); Hey Speedie! (Reach 200MPH in story mode); 100 Miles and Runnin' (Drive a total of 100 miles in story mode); Drop the Beat (Use max Burst Nitrous 5 times during story mode events)."
            ]
        },
        {
            "heading": "Collectibles & Activities",
            "body": [
                "Smashing all bears, billboards and street art, 3-starring every Speed Run, Long Jump, Drift Zone and Speed Trap, the all-collectibles-and-3-stars catch-all, owning 10 story-mode vehicles, and the driving-effect and clothing customization.",
                "The achievements here: The Bear Champ (Smash all bear collectibles); Adbusting (Break all billboard collectibles); Heaven Spot (Collect all street art collectibles); In The Zone (Get 3 stars on all Speed Run activities); Frequent Flyer (Get 3 stars on all Long Jump activities); Catch My Drift (Get 3 stars on all Drift Zone activities); Caught On Camera (Get 3 stars on all Speed Trap activities); Cleaning Up (Collect all collectibles and get 3 stars on all activities); #Blessed (Own 10 vehicles in your story mode garage); Throwing up Tags (Customize your Driving Effects); Fashion Killa (Customize your clothing); Cool Whip (Apply a custom wrap to your ride)."
            ]
        },
        {
            "heading": "Lakeshore Online",
            "body": [
                "Fully upgrading the Lakeshore Online garage, completing a playlist with a full lobby, winning a playlist at each tier from B up to S+, completing 25 playlists, owning 10 online vehicles, and the Burst Nitrous feat.",
                "The achievements here: Access All Areas (Fully upgrade your Lakeshore Online garage); Full House (Complete a Lakeshore Online playlist with 7 other players); B for My Name (Win a Tier B Lakeshore Online playlist); Bring Your A Game (Win a Tier A Lakeshore Online playlist); Teacher's Pet (Win a Tier A+ Lakeshore Online playlist); Superstar (Win a Tier S Lakeshore Online playlist); Top Billin' (Win a Tier S+ Lakeshore Online playlist); Mixtape (Complete 25 Lakeshore Online playlists); The Collector (Own 10 vehicles in your Lakeshore Online garage); Kick it (Use max Burst Nitrous 5 times during Lakeshore Online events)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the four-week story campaign, banking the five hidden markers and doing street races and Takeover events along the way.",
                "2. Sweep the three collectible sets (bears, billboards, street art) and 3-star every activity while you're driving between races.",
                "3. Bank toward $1,000,000 in story mode and fully upgrade the story garage.",
                "4. Do the cop-chase achievements - escape a Heat 5 chase in an A+ car, take down 5 cops in a session, and escape 50 chases overall.",
                "5. Play Lakeshore Online, winning a playlist at each tier from B up to S+ (S+ is the hardest single achievement) and completing 25 playlists.",
                "Tip: the S+ playlist win is a real skill check against strong opponents - grind your online garage to a top-tier car and learn the meta builds before attempting it."
            ]
        }
    ]
};
