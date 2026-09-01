// Lorelei and the Laser Eyes Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/lorelei-and-the-laser-eyes.json), whose 20 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   2008920 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "lorelei-and-the-laser-eyes-achievement-guide",
    "category": "game",
    "gameSlug": "lorelei-and-the-laser-eyes",
    "icon": "👁",
    "title": "Lorelei and the Laser Eyes Achievement Guide",
    "summary": "A practical guide to all 20 Steam achievements in Lorelei and the Laser Eyes - none are hidden. None of the achievements are hidden, but every description is written as a deliberately oblique 'award'. Each one corresponds to fully engaging with one of the game's puzzle threads - the dog, the stories, the computers, the number riddles, the mazes, the maps, the game collection - and the descriptions here are Simogo's own verbatim text.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Lorelei and the Laser Eyes has 20 Steam achievements and none are hidden - but Simogo writes every description as a tongue-in-cheek award ('Awarded for showing remarkable care for our canine friends', 'Awarded for great achievements in the field of solving number related riddles'), so the wording is intentionally vague. Each award maps to fully following one of the manor's puzzle threads: caring for the dog, reading all the stories and fables, heavy use of the computers, the bug taxonomy, the Fraternity of the Eye, answering every brother's question, the number riddles, the two collections (video games and polystyrene), the coffee machine, the charting puzzles, the Ilona & Milton relationship thread, the division puzzles, the mazes, the music, the American Dream thread, the Augenwaldburg race, contacting everyone, and finally revealing the truth.",
                "The catalog marks it difficulty 4. The game is a dense, non-linear puzzle box; most awards come from thorough exploration and solving optional puzzle chains rather than the critical path, and a few (the number riddles, the mazes) are genuinely tricky. Nothing is missable - you can return to any puzzle - but a spoiler guide is worth having for the optional threads.",
                "Tip: keep a notebook. Lorelei expects you to write down codes, dates and diagrams from all over the manor, and several awards are for completing puzzle chains that span multiple rooms and reference notes you took hours earlier."
            ]
        },
        {
            "heading": "The Manor & Its Stories",
            "body": [
                "Caring for the dog, reading every story and fable, the coat-rack running gag, heavy use of the computers, mapping the bug taxonomy, the Fraternity of the Eye, and correctly answering all of the brothers' questions.",
                "The achievements here: Tail Wagging Society Prize (Awarded for showing remarkable care for our canine friends.); Strigiformes Award for Best Listener (Awarded for striking enthusiasm for stories and fables.); Coat Rack Connoisseur of the Year Award (Honorable Mention) (Awarded for outstanding devotion within the field of discarding personal overwear.); Herzmuller’s Computing Prize (Awarded for significant usage of computational devices.); Entomologist of the Year (Awarded for remarkable contributions in mapping the taxonomy of bugs.); Tropaeum Ex Fraternitate Oculi (Awarded to the righteous who seek knowledge beyond human comprehension.); Miss Knowledgeable of the Year (Awarded for correctly answering all brothers’ questions, all while retaining grace and femininity.)."
            ]
        },
        {
            "heading": "Riddles & Collections",
            "body": [
                "Solving the number-related riddles, the video game collection, the polystyrene collection, the coffee machine, the charting puzzles, the Ilona Zevon & Milton Foley relationship thread, and the division puzzles.",
                "The achievements here: S.C. Bolt’s Genius Award (Awarded for great achievements in the field of solving number related riddles.); Super Gamer of the Month (Awarded for significant passion for game collecting.); Simogo Consumer of the Year Award (Awarded for exceptional collections of polystyrene.); The Black Arts Coffee Club Member of the Month (Awarded for plentiful use of our services.); JW Arkitektkontor Employee of the Month (Awarded for excellence within the field of charting.); Ilona Zevon & Milton Foley Grand Prize (Awarded for commendable comradery and masterful navigation of relationships.); Cutter of the Week (Awarded for great perseverance and proficiency within the field of division.)."
            ]
        },
        {
            "heading": "Mazes, Music & the Truth",
            "body": [
                "The maze traversal, spreading the gift of music, the American Dream thread, winning the yearly Augenwaldburg running race, communicating with all friends and family, and revealing the conditions the public was unaware of.",
                "The achievements here: Theseus Award (Awarded for exemplary dexterity and skillful traversal of mazes.); Euterpe Prize of the Year (Awarded for notable contributions in spreading the gift of music.); The True American Award (Awarded for outstanding belief in The American Dream.); Augenwaldburg Race Winner (Awarded to the winner of the yearly running race at Augenwaldburg.); Nobelle Prize in Anthropology or Sociology (Awarded for outstanding communication with friends and family.); Totte Ahla Sanningén Prize (Awarded for endeavors in revealing conditions that the public was previously unaware of.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Explore the whole manor first, taking notes on every code, date and diagram before committing to puzzles.",
                "2. Follow the critical path far enough to open up the optional puzzle threads.",
                "3. Work the collection and riddle awards (video games, polystyrene, the number riddles, the division puzzles).",
                "4. Complete the character and story threads (the dog, the fables, Ilona & Milton, the American Dream, the race).",
                "5. Finish the game and reveal the truth for the final award.",
                "Tip: the number-riddle and maze awards are the ones most players get stuck on - if a puzzle references something you have not seen, it usually means there is a room or document elsewhere you still need to find rather than a leap of logic."
            ]
        }
    ]
};
