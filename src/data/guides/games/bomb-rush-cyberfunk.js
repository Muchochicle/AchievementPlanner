// Bomb Rush Cyberfunk Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/bomb-rush-cyberfunk.json), whose 23 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1353230 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "bomb-rush-cyberfunk-achievement-guide",
    "category": "game",
    "gameSlug": "bomb-rush-cyberfunk",
    "icon": "🎧",
    "title": "Bomb Rush Cyberfunk Achievement Guide",
    "summary": "A practical guide to all 23 Steam achievements in Bomb Rush Cyberfunk - none are hidden. Covers bombing and scoring every district, cosmetic and photo challenges, combo and trick milestones, and beating the final boss. None of the achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Bomb Rush Cyberfunk has 23 Steam achievements and none are hidden. Seven are for hitting every graffiti spot ('Bombed') in each of the game's 7 districts, and seven more are for hitting a huge score combo ('Tricked') in each district. The rest are covering a stage with unique graffiti, scoring on the Versum Hill basketball court, taking 17 photos of Polo the scuba mascot, a 4-minute combo streak, landing an 8-floor fall on your feet, a 69-second manual, chasing away all the pigeons in Brink Terminal, reaching 6-star heat, and defeating the final boss.",
                "The catalog marks it difficulty 3. Nothing is missable and every district can be revisited freely; the district score-combo achievements are the real test of chaining tricks together.",
                "Tip: fully bomb each district as you visit it story-wise rather than coming back later - it's easier to spot every graffiti spot while you're still exploring a fresh area."
            ]
        },
        {
            "heading": "Style, Skill & Story",
            "body": [
                "Covering a stage with unique graffiti, scoring on the Versum Hill basketball court, taking 17 photos of Polo the scuba mascot, a 4-minute combo streak, an 8-floor fall landed on your feet, a 69-second manual, defeating the final boss, and chasing away all the pigeons in Brink Terminal.",
                "The achievements here: State of the art (Cover an entire stage with unique Graffiti pieces); Baller (Score on the basketball court in Versum Hill); Photo Generic (Take 17 pictures of Polo the scuba mascot ); In the flow (Keep your combo going for 4 minutes ); Iron legs (Fall and land on your feet from 8 floors high ); Nice (69 second manual); Now go outside (Defeat the final boss); Flying rats begone (Chase away all pigeons from High Square in Brink Terminal )."
            ]
        },
        {
            "heading": "Every District: Score Combos & Full Bombing",
            "body": [
                "Hitting a huge score combo in Versum Hill, Hideout, Millennium Mall, Mataan, Pyramid Island, Millennium Square and Brink Terminal, reaching 6-star heat, and hitting every graffiti spot in all 7 of those same districts.",
                "The achievements here: Versum Hill Tricked (Hit a 13.000.000 score combo in Versum Hill); Hideout tricked (Hit a 2.500.000 score combo in Hideout); Millennium Mall Tricked (Hit a 12.000.000 score combo in Millennium Mall); Mataan Tricked (Hit a 16.000.000 score combo in Mataan); Pyramid Island Tricked (Hit a 15.000.000 score combo in Pyramid Island); Millennium Square Tricked (Hit a 1.200.000 score combo in Millennium Square); Brink Terminal Tricked (Hit a 14.000.000 score combo in Brink Terminal); Funk Star (Get 6 star heat); Versum Hill Bombed (Hit all graffiti spots in Versum Hill); Hideout Bombed (Hit all graffiti spots in Hideout); Millennium Mall Bombed (Hit all graffiti spots in Millennium Mall); Mataan Bombed (Hit all graffiti spots in Mataan); Pyramid Island Bombed (Hit all graffiti spots on Pyramid Island); Millennium Square Bombed (Hit all graffiti spots on Millennium Square); Brink Terminal Bombed (Hit all graffiti spots in Brink Terminal)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through the story, fully bombing (hitting every graffiti spot in) each district as you visit it.",
                "2. Chase big score combos in each district for the 'Tricked' achievements, and reach 6-star heat for Funk Star.",
                "3. Pick up the style and skill achievements along the way - a 4-minute combo streak, an 8-floor fall landed on your feet, a 69-second manual, and scoring on the Versum Hill basketball court.",
                "4. Take 17 photos of Polo the scuba mascot and chase away every pigeon in Brink Terminal.",
                "5. Defeat the final boss to finish the story.",
                "Tip: the district score-combo achievements want one big unbroken combo, not a cumulative total - find an open loop in each district to chain tricks without stopping."
            ]
        }
    ]
};
