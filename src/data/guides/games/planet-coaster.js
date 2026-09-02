// Planet Coaster Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/planet-coaster.json), whose 32 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   493340 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 4 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched (community 100%
//   guides / official news posts) and is a curatorial summary. Every
//   non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "planet-coaster-achievement-guide",
    "category": "game",
    "gameSlug": "planet-coaster",
    "icon": "🎢",
    "title": "Planet Coaster Achievement Guide",
    "summary": "A practical guide to all 32 Steam achievements in Planet Coaster (4 hidden). 4 of the 32 are hidden - a coaster crash, oversalting a fries stand, firing a staff member, and winning a go-kart race - researched from community 100% guides.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Planet Coaster has 32 Steam achievements, 4 of them hidden. The career track is the three star tiers (bronze, silver, gold) plus completing every campaign star, unlocking the three theme sets (Princess Amelie's Fairy Tale, Dex-R's Science Shenanigans, King Coaster's Royal Decree), and finishing 1, 5 and 10 challenges. The business track covers a $10,000 monthly profit, repaying a $20,000 loan, spending $10,000 on marketing in a month, completing a research project, and a Park Rating of 1000. Coaster engineering is speed (100/150/200mph), drop height (80m/150m), length (750m/1500m/2500m) and airtime moments (5/10/15), each in its own tiered family.",
                "The 4 hidden achievements are Crashing the Party (deliberately crash a coaster train into a crowd of guests), Salt on the Senses (max out the salt on a Monsieur Frites fries stand's sales settings), You're Fired! (fire a member of staff), and You're a winner! (win a go-kart race while personally driving the kart, which needs a track named 'Bollard' to unlock first-person driving before the race starts). These are researched from Steam Community 100% achievement guides, not Steam's own text, since Frontier ships them with no description.",
                "Tip: 'You're a winner!' needs a specific workaround (naming a go-kart track 'Bollard') just to be able to drive in first person before the race begins - build that track early since it takes real setup, not just play time, to trigger."
            ]
        },
        {
            "heading": "Getting Started & Career",
            "body": [
                "Creating your avatar, the bronze/silver/gold career star tiers, completing every campaign star, unlocking all three theme sets, and completing your first, fifth and tenth challenges.",
                "The achievements here: Welcome to Planet Coaster. (Create your avatar and place them on the globe..); A Star is born (Gain a bronze star in career mode.); Rising Star (Gain a silver star in career mode.); Brightest Star in the Sky (Gain a gold star in career mode.); Star Studded Career (Gain all the stars in career mode!); Princess Amelie's Fairy Tale (Unlock Princess Amelie's Fairy Tale.); Dex-R's Science Shenanigans (Unlock DexR's Science Shenanigans.); King Coaster's Royal Decree (Unlock King Coaster's Royal Decree.); Rise to the Challenge (Complete a challenge.); Challenge Experience (Complete five challenges.); Challenge Veteran (Complete ten challenges.)."
            ]
        },
        {
            "heading": "Business, Staff & Guests",
            "body": [
                "A $10,000 monthly profit, repaying a $20,000 loan, a $10,000 marketing spend in one month, completing a research project, a Park Rating of 1000, training a staff member to the highest level, and the three hidden achievements for crashing a coaster into a crowd, overloading a fries stand with salt, and firing a staff member.",
                "The achievements here: Money Spinner (Achieve a monthly profit of $10,000.); Loan Survivor (Repay a loan of $20,000.); Marketing Mogul (Spend $10,000 on marketing in one month.); Doing Your Homework (Complete a research project.); The Ratings Are Through the Roof! (Achieve a Park Rating of 1000.); Crashing the Party (Deliberately crash a coaster train into a crowd of guests.); Salt on the Senses  (Max out the salt on a Monsieur Frites fries stand's sales-tab extras.); Investing in People (Train a member of staff to the highest level.); You're Fired! (Fire a member of staff.)."
            ]
        },
        {
            "heading": "Coaster Engineering",
            "body": [
                "Tiered coaster speed (100/150/200mph), drop height (80m/150m), track length (750m/1500m/2500m) and airtime moments (5/10/15), plus the hidden go-kart race win.",
                "The achievements here: Scream if You Want to Go Faster! (Get a coaster up to 100mph.); Speed Freak  (Get a coaster up to 150mph.); Faster than Lightning (Get a coaster up to 200mph.); A Head for Heights (Create a coaster with an 80m drop.); Jaw Dropping (Create a coaster with a 150m drop.); Coasting Along (Build a 750m long coaster.); Don't Stop Me Now (Build a coaster 1500m long.); The Ride of Your Life (Build a coaster 2500m long.); Hang Time (Create a coaster with 5 moments of airtime.); Air Raising (Create a coaster with 10 moments of airtime.); Air Miles (Wow guests with a coaster with 15 moments of airtime.); You're a winner! (Win a go-kart race while personally driving the kart (build a go-kart track named 'Bollard' to unlock first-person driving before the race starts).)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through career mode for the three star tiers, all campaign stars, and the three theme-set unlocks.",
                "2. Build one large park and chase the business milestones (profit, loan repayment, marketing spend, research, Park Rating 1000).",
                "3. Design coasters specifically aimed at the speed/drop/length/airtime tiers - a single very long, very fast coaster with deliberate airtime hills can clear several tiers at once.",
                "4. Mop up the 4 hidden achievements: fire a staff member, oversalt a fries stand, crash a coaster into a crowd, and build a 'Bollard'-named go-kart track to win a race in first person.",
                "Tip: for 'Crashing the Party', build a short coaster that dead-ends directly onto a crowded queue line or path, then run a test - the train derails or collides with the crowd and triggers the achievement immediately."
            ]
        }
    ]
};
