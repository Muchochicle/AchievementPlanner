// The Walking Dead: Telltale Definitive Series Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/the-walking-dead-telltale-definitive-series.json), whose 23 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1449690 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "the-walking-dead-telltale-definitive-series-achievement-guide",
    "category": "game",
    "gameSlug": "the-walking-dead-telltale-definitive-series",
    "icon": "🧟",
    "title": "The Walking Dead: Telltale Definitive Series Achievement Guide",
    "summary": "A practical guide to all 23 Steam achievements in The Walking Dead: Telltale Definitive Series - none are hidden. Every achievement is a single episode-completion marker across Season 1 (and 400 Days), Season 2, A New Frontier, Michonne and The Final Season, so simply finishing the collection unlocks them all.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "The Walking Dead: The Telltale Definitive Series has 23 Steam achievements and none of them are hidden. Every single one is awarded just for completing an episode - there are no collectibles, no missable choices and no difficulty requirements. The list runs through the whole Telltale saga: Season 1's five episodes plus the 400 Days special, Season 2's five episodes, A New Frontier's five episodes, the three-part Michonne miniseries, and The Final Season's four episodes.",
                "Nothing is missable and choices do not matter for achievements - any path through any episode earns its marker. The only requirement is to play the collection to the end.",
                "Tip: play in release order (Season 1, 400 Days, Season 2, A New Frontier, Michonne, The Final Season) so the imported save and recurring characters make sense - the achievements unlock the same either way, but the story lands far better."
            ]
        },
        {
            "heading": "Seasons One & Two",
            "body": [
                "Completing every episode of Season 1 (including the 400 Days episode) and Season 2.",
                "The achievements here: Everything's Going to be Okay (Completed Season 1 Episode 1); It's not stealing if you need it (Completed Season 1 Episode 2); Lend Me Your Ears (Completed Season 1 Episode 3); Penultimate (Completed Season 1 Episode 4); What Remains (Completed Season 1 Episode 5); Loose Ends (Completed Season 1 Episode 6); Split Decision (Completed Season 2 Episode 1); Reunion (Completed Season 2 Episode 2); Eye of the Storm (Completed Season 2 Episode 3); Beyond the Trees (Completed Season 2 Episode 4); All The Dead Lie Down (Completed Season 2 Episode 5)."
            ]
        },
        {
            "heading": "A New Frontier & Michonne",
            "body": [
                "Completing every episode of Season 3: A New Frontier and the three-part Michonne miniseries.",
                "The achievements here: Family Road Trip (Completed Season 3 Episode 1); Bloody Business (Completed Season 3 Episode 2); Southern Hospitality (Completed Season 3 Episode 3); Faces in the Crowd (Completed Season 3 Episode 4); Sole Survivors (Completed Season 3 Episode 5); Landfall (Completed Michonne Episode 1); Quiet Time (Completed Michonne Episode 2); Farewell (Completed Michonne Episode 3)."
            ]
        },
        {
            "heading": "The Final Season",
            "body": [
                "Completing all four episodes of The Final Season.",
                "The achievements here: Protector (Completed Season 4 Episode 1); Defender (Completed Season 4 Episode 2); Leader (Completed Season 4 Episode 3); Savior (Completed Season 4 Episode 4)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play Season 1's five episodes, then the 400 Days bonus episode.",
                "2. Play Season 2's five episodes.",
                "3. Play A New Frontier's five episodes.",
                "4. Play the three Michonne episodes.",
                "5. Play The Final Season's four episodes to finish the collection.",
                "Tip: there is nothing to hunt for - relax and make the choices you want; every episode-completion achievement unlocks regardless of what you decide."
            ]
        }
    ]
};
