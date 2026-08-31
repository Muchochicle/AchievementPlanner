// Planet Coaster 2 Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/planet-coaster-2.json), whose 36 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   2688950 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "planet-coaster-2-achievement-guide",
    "category": "game",
    "gameSlug": "planet-coaster-2",
    "icon": "🎢",
    "title": "Planet Coaster 2 Achievement Guide",
    "summary": "A practical guide to all 36 Steam achievements in Planet Coaster 2 - none are hidden. Covers career progress and medals, park-building and guest milestones, and the advanced coaster and completion achievements. None of the achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Planet Coaster 2 has 36 Steam achievements and none are hidden. About a third are career progress and scenario medals (Bronze / Silver / Gold / Platinum on the named parks, unlocking Chapters 1-4 and the Epilogue), a third are park-building and guest milestones (1,000 guests at once, 70% happy with 2,500+ guests, a 100 mph coaster, a 100 m water slide, $50,000 of scenery), and a third are advanced coaster feats and completion (a 2,500 m coaster, 10 inversions, 5 Classic rides, all research, a 5-star Sandbox park, and 'Fully Loaded' for all 72 base-game career medals).",
                "The catalog marks it difficulty 3. Nothing is hard, but the Platinum medals and 'Fully Loaded' (every career medal) are the real time investment; the building feats can be knocked out quickly in Sandbox.",
                "Tip: play the career for the chapter and medal achievements, and use a Sandbox park with unlimited money for the coaster stat feats (speed, length, inversions, excitement)."
            ]
        },
        {
            "heading": "Career Progress & Medals",
            "body": [
                "A Silver on Parks and Restoration, Bronze on Labyrinth Secrets, Double Trouble and Paradise Lost, 10 hired staff at once, opening your first Coaster, Flume and Flat Ride, a 3-star park, and unlocking Chapters 1, 2 and 3.",
                "The achievements here: Ancient Achievements (Earn a Silver Medal on Parks and Restoration); What Lurks Beneath (Earn a Bronze Medal on Labyrinth Secrets); Park Half Full (Earn a Bronze Medal on Double Trouble); Sunken Pleasures (Earn a Bronze Medal on Paradise Lost); People Person's Person People (Have 10 Hired Staff simultaneously in any park); On a Roll (Open your first Coaster in any park); Get Your Feet Wet (Open your first Flume in any park); Time to Ride (Open your first Flat Ride in any park); Showstopper (Build a 3 Star Park); First Drop (Unlock Chapter 1); Rolling With It (Unlock Chapter 2); Wheel-y Good Time (Unlock Chapter 3)."
            ]
        },
        {
            "heading": "Park Building & Guests",
            "body": [
                "$50,000 of scenery in one park, a 100 m water slide, 1,000 guests at once, a coaster at Excitement 7+, a 100 mph coaster, 70% guests happy with 2,500+ in the park, 30 slide riders and 250 flat-ride riders at once, a Gold on Thrills'n'Spills, Platinum on The Garden of Edith and A Shore Thing, and a 4-star park.",
                "The achievements here: What a View! (Spend $50,000 on Scenery in a single park); Ride the Waterfall (Build and open a Water Slide or Flume with a Drop of at least 100m); Quite the Crowd (Have 1,000 Guests in a park simultaneously); Not For The Faint-Hearted (Build and open a Coaster with Excitement at 7 or above); In a Word, Whoooosh (Build and open a Coaster that reaches at least 100 mph / 161 kph); Satisfaction Guaranteed (Achieve 70% of Guests in a Positive Mood at the End of a Day With At Least 2,500 Guests In The Park); Slip 'n Slide (Have 30 Guests riding Water Slides or Flumes simultaneously); No Track Required (Have at least 250 Guests on Flat Rides simultaneously); Mess Without Stress (Earn a Gold Medal on Thrills'n'Spills); Envy of the Gods (Earn a Platinum Medal on The Garden of Edith); Water Wonderful World (Earn a Platinum Medal on A Shore Thing); Crowd Pleaser (Build a 4 Star park)."
            ]
        },
        {
            "heading": "Advanced Coasters & Completion",
            "body": [
                "Unlocking Chapter 4 and its Epilogue, all Career research, 500 guests in pools at once, a 2,500 m coaster, 20 slides open at once, a 500 m+ coaster with 10 inversions, 5 Classic-status rides, a $20,000 loan, a 2,500 m coaster at Excitement 9+, a 5-star Sandbox park, and 'Fully Loaded' for all 72 base-game Career medals.",
                "The achievements here: Twisting Tracks (Unlock Chapter 4); Final Plunge (Unlock Chapter 4's Epilogue); Eugene Would Be Proud (Unlock all Research in Career Mode); Splashing Around (Have 500 Guests in Pools simultaneously); Test of Endurance (Build and open a Coaster with at least 2,500m of track); All the Slides (Have 20 Water Slides or Flumes open in a single park); Down Is Up (Build and open a Coaster over 500m in length with at least 10 inversions); Golden Oldies (Have 5 Rides achieve \"Classic\" status in a single park); What Even Is Interest? (Take out a Loan of at least $20,000); Best of the Best (Build and open a Coaster with 2,500m of Track and Excitement greater than 9); Against the Odds (Build a 5 Star Park in Sandbox Mode); Fully Loaded (Unlock all 72 Career Medals in the base game)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the career, earning at least the required medal on each scenario and unlocking every chapter and the Epilogue.",
                "2. Go back and push scenarios to Platinum where the achievements ask for it, and grind toward all 72 Career medals.",
                "3. Unlock all Career research.",
                "4. In a money-unlocked Sandbox park, build the coaster-stat feats: 100 mph, 2,500 m, 10 inversions, Excitement 9+, and hit the guest and pool/slide-rider counts.",
                "5. Take out a loan and reach a 5-star Sandbox park for the last two.",
                "Tip: the guest-count and rider-count achievements ('Quite the Crowd', 'Splashing Around') come fastest in a compact, high-capacity Sandbox park with cheap entry - build for throughput, not looks."
            ]
        }
    ]
};
