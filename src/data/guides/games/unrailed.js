// Unrailed! Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/unrailed.json), whose 53 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1016920 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js). None are hidden; every one
//   ships a real, official Steam description, quoted verbatim below.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "unrailed-achievement-guide",
    "category": "game",
    "gameSlug": "unrailed",
    "icon": "🚂",
    "title": "Unrailed! Achievement Guide",
    "summary": "A practical guide to all 53 Steam achievements in Unrailed! - none are hidden. Covers Endless-mode distance milestones across all three difficulties, general feats and biome exploration, and track-length and special crafting achievements.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Unrailed! has 53 Steam achievements and none are hidden - though many keep the game's own dry sense of humor in their official descriptions rather than spelling out exactly what to do (\"Incurious - There are other biomes?!\", \"Achievement Master - You're still playing?\"). The core structure is a distance ladder in Endless mode (100/200/500/1000/2000 meters) repeated across all three difficulties (Easy, Medium, Hard/Expert), alongside general biome-exploration and crafting feats, track-length milestones, and a run of specific situational and joke achievements.",
                "Nothing is missable - every distance, track-length, and crafting-count achievement is a permanent save-file stat, and Endless mode can be replayed as many times as needed. The distance ladder is the real backbone of the list: reaching further distances at harder difficulties naturally clears the easier tiers along the way, so there is no need to grind each tier in isolation.",
                "Tip: push for distance on Hard/Expert difficulty specifically when you have a strong, coordinated crew - since reaching a given distance on a harder difficulty does not automatically credit the easier-difficulty version of that same milestone, plan separate runs per difficulty rather than assuming one great run covers everything."
            ]
        },
        {
            "heading": "Endless Mode: Easy Distance Ladder",
            "body": [
                "The Easy-difficulty distance tiers in Endless mode: reaching 100, 200, 500, 1000, and 2000 meters.",
                "The achievements here: Stroller (Reached 100m in endless mode (easy).); Hiker (Reached 200m in endless mode (easy).); Voyager (Reached 500m in endless mode (easy).); Wayfarer (Reached 1000m in endless mode (easy).); Explorer (Reached 2000m in endless mode (easy).)."
            ]
        },
        {
            "heading": "General Feats & Biomes",
            "body": [
                "A wide mix of general achievements: removing 100 ducks with dynamite, four animals on the milk wagon at once, crafting 10,000 tracks, heavy dynamite use, crashing at exactly 1337m, a full minute of nonstop crafting-wagon use, 30 minutes of jetpack flight in one round, several biome-discovery jokes (Nanuk, Mojave Courier, Incurious, Satan's Minion, Apollo 13, Wrong way!), 50 ignored train stations, hoarding 25 bolts, unlocking everything, and a run of \"you've been playing a while\" jokes (Achievement Master, Marathon, Lost, Shopaholic).",
                "The achievements here: Ducky Danger (Removed 100 ducks with dynamite.); Shepherd (Had four different animals attached to the milk wagon at the same time.); Engineer (Crafted over 10000 tracks in total.); Destructionist (Used (a lot of) dynamite.); Leet (Crashed at exactly 1337m.); Industrialist (Crafting wagon busy for an entire minute.); Rocketman (Flew around with the jetpack for 30 minutes in one round.); Nanuk (You really like cold weather, don't you?); Mojave Courier (The heat never bothered you anyway.); Incurious (There are other biomes?!); Satan's Minion (Is it really that pleasant around here?); Apollo 13 (Reached for the far side of the universe.); Wrong way! (You need to get to the right side!); Missed Opportunities (50 train stations successfully ignored!); Scrooge (Hoarded 25 bolts.); Collector (Unlocked everything.); Achievement Master (You're still playing?); Marathon (You just ran a marathon!); Lost (Please come back!); Shopaholic (Who doesn't like long shopping trips?)."
            ]
        },
        {
            "heading": "Endless Mode: Medium & Hard Distance Ladders",
            "body": [
                "The same 100/200/500/1000/2000 meter distance tiers, repeated on Medium difficulty (Advanced tiers) and then Hard difficulty (Expert tiers).",
                "The achievements here: Advanced Stroller (Reached 100m in endless mode (medium).); Advanced Hiker (Reached 200m in endless mode (medium).); Advanced Voyager (Reached 500m in endless mode (medium).); Advanced Wayfarer (Reached 1000m in endless mode (medium).); Advanced Explorer (Reached 2000m in endless mode (medium).); Expert Stroller (Reached 100m in endless mode (hard).); Expert Hiker (Reached 200m in endless mode (hard).); Expert Voyager (Reached 500m in endless mode (hard).); Expert Wayfarer (Reached 1000m in endless mode (hard).); Expert Explorer (Reached 2000m in endless mode (hard).)."
            ]
        },
        {
            "heading": "Track Length & Special Feats",
            "body": [
                "The track-building ladder (500m through 4000m of track in one Endless run) plus a long tail of specific feats: bringing a cow into space, melting snow with a bucket, extinguishing 10 Lava Blobs, a triple-animal dynamite blast, reaching the space biome without spending bolts on anything but engines, bringing a bandit or outlaw into hell, reaching the terminal station, disassembling 20 snowmen, reaching the winter biome on Extreme, discovering a new world, underwater exploration, explosive fishing, finding an exit, and a bolt-heavy achievement for spending a lot of time collecting them.",
                "The achievements here: Toy Train (Built a 500m long track in endless (any difficulty).); Orient Express (Built a 1000m long track in endless (any difficulty).); Trans-Siberian Railway (Built a 2000m long track in endless (any difficulty).); Deep Space Transit (Built a 4000m long track in endless (any difficulty).); Cowter Space (Brought a cow into space.); Climate Change (Use the bucket to melt snow.); Fire fighter (Extinguish 10 Lava Blobs in one game.); Megalomaniac ( Blow up 3 different types of animals at once with dynamite.); No Space For Improvement (Reach the space biome without spending any bolts except for the engines.); Where They Belong (Bring a bandit or outlaw into hell.); Terminal Station (Reach the terminal station in endless); Snowman's Land (Disassemble 20 snowmen.); Tough Nut! (Reach the winter biome on extreme.); Martian (Discover a new world.); 20 Miles Under the Sea (You tend to like it underwater!); Dynamite Fishing (These fish are explosive - handle with care!); Saved by Nausicaä (You found the exit.); Fireworks! (Getting all those bolts surely took some time!)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play a spread of Endless runs on Easy first, pushing for the 100/200/500/1000/2000 meter tiers (Stroller through Explorer), picking up general biome and crafting feats as you go.",
                "2. Repeat the same distance ladder on Medium (Advanced tiers) and then Hard (Expert tiers) once your crew is comfortable with the harder pace.",
                "3. Work toward the track-length milestones (500m through 4000m of track built in a single Endless run) alongside your distance pushes.",
                "4. Pick off the specific situational and biome achievements as opportunities appear: dynamite feats, animal-related jokes, biome-discovery achievements, and the various \"you've been playing a while\" jokes (Marathon, Lost, Achievement Master).",
                "5. Finish with the deep-cut challenge achievements - a bolt-free run to the space biome (No Space For Improvement), a sub-1337m crash (Leet), and reaching the space biome itself (Martian, Apollo 13).",
                "Tip: Collector (unlock everything) and the bolt-spending achievements (Scrooge, Shopaholic) pull in opposite directions - hoarding bolts for Scrooge conflicts with unlocking everything, so treat them as goals for separate runs rather than one perfect run that satisfies both."
            ]
        }
    ]
};
