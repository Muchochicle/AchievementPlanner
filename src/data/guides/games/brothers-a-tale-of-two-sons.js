// Brothers: A Tale of Two Sons Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/brothers-a-tale-of-two-sons.json), whose 12 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   225080 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "brothers-a-tale-of-two-sons-achievement-guide",
    "category": "game",
    "gameSlug": "brothers-a-tale-of-two-sons",
    "icon": "👨‍👧",
    "title": "Brothers: A Tale of Two Sons Achievement Guide",
    "summary": "A practical guide to all 12 Steam achievements in Brothers: A Tale of Two Sons - none are hidden. Covers the optional side interactions and hidden moments scattered through the short story - most of them small acts of kindness or curiosity you can help characters and animals with as you pass through each area.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Brothers - A Tale of Two Sons has 12 Steam achievements and none of them are hidden. Every one is an optional side interaction found while playing through the roughly three-hour story: taking a break on a bench, reuniting love birds, helping turtles to the sea, sounding a giant horn, making the inventor dance, finding a secret behind a curtain, and so on. There are no story-completion, collectible-count or difficulty achievements - just these twelve moments.",
                "All twelve are technically missable in the sense that you have to actively do them, but chapter select lets you replay any section afterward, so nothing is permanently lost. Because the game is short and each achievement is a specific one-off action in a specific place, a guided playthrough (or a cleanup pass with chapter select) is the reliable way to get all twelve.",
                "Tip: play through once purely for the story, then do a second short run with an achievement list open - each of the twelve is tied to a clearly identifiable spot (a well, a bench, a curtain, a horn), and with the list in hand you can revisit exactly the sections you need rather than scrubbing the whole game."
            ]
        },
        {
            "heading": "Early Chapters",
            "body": [
                "Side interactions in the first half of the journey: taking a break, the ball-down-a-well moment, the black sheep, making the bunnies play nice, cheering someone up with a sad tune, and re-uniting the two love birds.",
                "The achievements here: Take a Break (You took a break from adventuring.); Wishing Well (You threw someone's ball down a well… Shame on you.); Black Sheep (Every family's got one.); Bunny Buddies (You made the bunnies play nice.); A sad tune (You made someone feel better.); Love Birds (You re-united the two love birds.)."
            ]
        },
        {
            "heading": "Later Chapters",
            "body": [
                "Side interactions in the second half: making the inventor dance (Windpipe), sounding a giant horn, finding a secret behind a curtain, helping the turtles to the sea, practising singing (Whale Song), and making a wish on a falling star.",
                "The achievements here: Windpipe (You made the inventor dance.); Call of the giants (You sounded a giant horn.); Behind the Curtain (You found a secret.); Turtle Soup (You helped the turtles to the sea.); Whale Song (You practised singing.); Falling star (Make a wish.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through the whole story once without worrying about achievements, simply experiencing it.",
                "2. Open an achievement list and do a second run using chapter select - each achievement names a specific interaction (a well, a bench, love birds, a horn, a curtain, turtles), so jump to the relevant section and perform it.",
                "3. The two easiest to forget are Falling star (make a wish - you must be looking at the sky at the right moment) and Behind the Curtain (a secret that is genuinely tucked away); do those deliberately.",
                "Tip: several interactions require using the correct brother - the older brother for heavy actions (the horn, the well) and the younger for small gaps and animals (the bunnies, the turtles) - so if an interaction does not trigger, try switching which brother approaches it."
            ]
        }
    ]
};
