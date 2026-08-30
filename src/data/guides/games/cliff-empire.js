// Cliff Empire Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/cliff-empire.json), whose 42 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   895570 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "cliff-empire-achievement-guide",
    "category": "game",
    "gameSlug": "cliff-empire",
    "icon": "🌉",
    "title": "Cliff Empire Achievement Guide",
    "summary": "A practical guide to all 42 Steam achievements in Cliff Empire - none are hidden. Covers the cumulative star-milestone achievements and the completion and disaster achievements.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Cliff Empire has 42 Steam achievements and none of them are hidden. Thirty-six are a single ladder - earn a cumulative total of 5 stars, then 10, then 15, all the way up to 180 stars, where stars are awarded for completing the game's levels well. The other six are completing a level on hardcore mode, completing all levels, and getting your city hit by each of the four disasters (lightning, fire, ogre, dragon).",
                "Nothing is missable - stars accumulate across all your play and levels are replayable, so the whole completion is just playing the campaign thoroughly. The only real work is earning 180 total stars, which means near-perfect completion of most of the game's levels.",
                "Tip: play every level aiming for all three stars (economy, ecology and population goals), replay any level where you fell short, and let a couple of disasters hit an already-stable city on purpose for the four disaster achievements."
            ]
        },
        {
            "heading": "Star Milestones",
            "body": [
                "The cumulative star ladder from 5 stars up to 180 stars, in 5-star steps - each awarded once your running total of level stars reaches that number.",
                "The achievements here: 5! (Get 5 stars); 10! (Get 10 stars); 15! (Get 15 stars); 20! (Get 20 stars); 25! (Get 25 stars); 30! (Get 30 stars); 35! (Get 35 stars); 40! (Get 40 stars); 45! (Get 45 stars); 50! (Get 50 stars); 55! (Get 55 stars); 60! (Get 60 stars); 65! (Get 65 stars); 70! (Get 70 stars); 75! (Get 75 stars); 80! (Get 80 stars); 85! (Get 85 stars); 90! (Get 90 stars); 95! (Get 95 stars); 100! (Get 100 stars); 105! (Get 105 stars); 110! (Get 110 stars); 115! (Get 115 stars); 120! (Get 120 stars); 125! (Get 125 stars); 130! (Get 130 stars); 135! (Get 135 stars); 140! (Get 140 stars); 145! (Get 145 stars); 150! (Get 150 stars); 155! (Get 155 stars); 160! (Get 160 stars); 165! (Get 165 stars); 170! (Get 170 stars); 175! (Get 175 stars); 180! (Get 180 stars)."
            ]
        },
        {
            "heading": "Completion & Disasters",
            "body": [
                "Completing a level on hardcore mode, completing all levels, and being hit by lightning, fire, an ogre and a dragon.",
                "The achievements here: Hardcore (Complete level on hardcore mode); The End (Complete all levels); Strike! (Get stroked by lightning); Fire! (Get burnt); My land! (Get hit by ogre); Air threat (Get hit by dragon)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through the campaign, going for all three stars on every level (the economy, ecology and population objectives).",
                "2. Replay any level where you missed a star - the total is cumulative and only ever goes up.",
                "3. Do one level on hardcore mode for that achievement.",
                "4. On a stable, well-defended city, deliberately let each of the four disasters (lightning, fire, ogre attack, dragon attack) reach you for the disaster achievements.",
                "5. Keep playing and replaying levels until your total reaches 180 stars and you have completed every level.",
                "Tip: the third star on most levels is the ecology or population target, which competes with the economy target - build wind and solar power and green modules early so pollution never blocks the ecology star, then push population late once the economy is stable."
            ]
        }
    ]
};
