// Fran Bow Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/fran-bow.json), whose 18 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   362680 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "fran-bow-achievement-guide",
    "category": "game",
    "gameSlug": "fran-bow",
    "icon": "😺",
    "title": "Fran Bow Achievement Guide",
    "summary": "A practical guide to all 18 Steam achievements in Fran Bow - none are hidden. Covers minigames, story choices, and puzzle solutions across Fran's journey to find her cat Mr. Midnight. None of the achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Fran Bow has 18 Steam achievements and none are hidden. They cover puzzle solutions and story beats - burning a rope, drugging a guard to sleep, finding the Twin's favorite doll, winning against the Snail five times, returning something you stole, electrocuting the doctor three times, a computer crash, feeding the robot rabbit three carrots, and reuniting with Mr. Midnight - plus three minigames (the Maze, the Toader, the Troll) and finishing the game.",
                "The catalog marks it difficulty 2. Fran Bow is a dark, surreal point-and-click adventure; nothing here is missable, and every achievement comes from working through the story's puzzles naturally.",
                "Tip: try every dialogue and interaction option as you explore - several achievements are tied to small optional actions rather than the main puzzle solutions."
            ]
        },
        {
            "heading": "Puzzles & Minigames",
            "body": [
                "Burning a rope, making the Guard fall asleep, finding the Twin's favorite doll, winning against the Snail five times, returning what you stole, Afuga Merzenis, crashing the Itwork computer, electrocuting the doctor three times, and a cake and sweet craving.",
                "The achievements here: I burn you! (Burning rope ); Sleepy Princess (Make the Guard fall asleep); Hello dolly! (Find the Twin's favorite doll); Faster than a snail! (Win against the Snail five times); The kind thief (Return what you stole); Check! (Afuga Merzenis); Oops! You crashed the game (The Itwork computer crashes); This is Electroman! (Electrocute the doctor three times); It tasted fabulous! (Cake and sweet craving)."
            ]
        },
        {
            "heading": "Story & Endgame",
            "body": [
                "Beating the Maze, the Toader and the Troll minigames, finishing Fran Bow, reuniting with Mr. Midnight, resolving Kotrem's divorce, feeding the robot rabbit three carrots, lighting the memorial candles, and finding the picture behind the door.",
                "The achievements here: I found my way out (Beat the Maze mini-game!); Toad on board! (Beat the Toader mini-game!); A troll... RUN! (Beat the Troll mini-game!); The end (Finish Fran Bow); Find Mr. Midnight! (Reunite with your best friend); Dr. Love (Kotrem is no longer divorced); Feeding the robot rabbit  (Give the robot rabbit three carrots); Memorial (Light the candles); The old story (Find the picture behind the door)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through Fran Bow's story, solving each area's puzzles as you go.",
                "2. Beat the three minigames - the Maze, the Toader, and the Troll.",
                "3. Try optional interactions along the way - winning against the Snail five times, feeding the robot rabbit, and electrocuting the doctor.",
                "4. Finish the game and reunite with Mr. Midnight to close out the story.",
                "Tip: this is a linear point-and-click adventure - a single thorough playthrough that explores every interaction gets all 18 achievements."
            ]
        }
    ]
};
