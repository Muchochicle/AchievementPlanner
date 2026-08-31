// Rusty Lake Hotel Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/rusty-lake-hotel.json), whose 23 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   435120 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "rusty-lake-hotel-achievement-guide",
    "category": "game",
    "gameSlug": "rusty-lake-hotel",
    "icon": "🏨",
    "title": "Rusty Lake Hotel Achievement Guide",
    "summary": "A practical guide to all 23 Steam achievements in Rusty Lake Hotel - none are hidden. Covers the room-by-room achievements for each of the hotel's six animal guests. None of the achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Rusty Lake Hotel has 23 Steam achievements and none are hidden. Each of the hotel's six guests (Mr. Owl, Mr. Deer, Mr. Boar, Ms. Pheasant, Mr. Rabbit and Mrs. Pigeon) has three or four achievements - the ingredients you prepare for their dinner, plus a final secret interaction in their room.",
                "This is a short point-and-click puzzle game - a single playthrough with all the room secrets found gets every achievement. Nothing is missable: you can revisit the puzzle rooms.",
                "Tip: the last achievement for each guest ('Albert's Way', 'You know what to do!', 'Need a hand?', 'Watch Closely!', \"Can't catch me!\") is a hidden interaction in that guest's room - a hint or walkthrough for the room secrets covers all of them."
            ]
        },
        {
            "heading": "Owl, Deer & Boar",
            "body": [
                "The dinner-ingredient and room-secret achievements for Mr. Owl (the Rusty Lake specialty, the hanging, the elevator), Mr. Deer (deer meat, mushrooms, rosemary, Albert's Way) and Mr. Boar (boar ribs, red wine, tomatoes, 'You know what to do!').",
                "The achievements here: Secret Rusty Lake Specialty (Mr. Owl - 1); Just Hanging (Mr. Owl - 2); The Elevator (Mr. Owl - 3); Deer Meat (Mr. Deer - 1); Mushrooms (Mr. Deer - 2); Rosemary (Mr. Deer - 3); Albert's Way  (Mr. Deer - 4); Boar Ribs (Mr. Boar - 1); Red Wine (Mr. Boar - 2); Tomatoes (Mr. Boar - 3); You know what to do! (Mr. Boar - 4)."
            ]
        },
        {
            "heading": "Pheasant, Rabbit & Pigeon",
            "body": [
                "The dinner-ingredient and room-secret achievements for Ms. Pheasant (pheasant breast, white wine, thyme, 'Need a hand?'), Mr. Rabbit (rabbit leg, carrot, white beans, 'Watch Closely!') and Mrs. Pigeon (pigeon wing, potatoes, blackberries, \"Can't catch me!\").",
                "The achievements here: Pheasant Breast (Ms. Pheasant - 1); White Wine (Ms. Pheasant - 2); Thyme (Ms. Pheasant - 3); Need a hand? (Ms. Pheasant - 4); Rabbit Leg (Mr. Rabbit - 1); Carrot (Mr. Rabbit - 2); White Beans (Mr. Rabbit - 3); Watch Closely! (Mr. Rabbit - 4); Pigeon Wing (Mrs. Pigeon - 1); Potatoes (Mrs. Pigeon - 2); Blackberries (Mrs. Pigeon - 3); Can't catch me! (Mrs. Pigeon - 4)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Work through each guest's room, preparing the correct dinner ingredients.",
                "2. In each room, find the hidden interaction for that guest's final achievement.",
                "3. Use a room-secret walkthrough for the last-achievement interactions if any are unclear.",
                "4. Finish all six guests to complete the hotel.",
                "Tip: the ingredient achievements are just the normal solution path for each room - only the '4th' achievement per guest is off the beaten track, so focus your walkthrough reading there."
            ]
        }
    ]
};
