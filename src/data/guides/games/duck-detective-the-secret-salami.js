// Duck Detective: The Secret Salami Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/duck-detective-the-secret-salami.json), whose 7 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   2637990 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "duck-detective-the-secret-salami-achievement-guide",
    "category": "game",
    "gameSlug": "duck-detective-the-secret-salami",
    "icon": "🦆",
    "title": "Duck Detective: The Secret Salami Achievement Guide",
    "summary": "A practical guide to all 7 Steam achievements in Duck Detective: The Secret Salami - none are hidden. Covers solving deducktions, inspecting suspects, and cracking the case of the Secret Salami. None of the achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Duck Detective: The Secret Salami has 7 Steam achievements and none are hidden. They track solving your first, then 5, then 10 'deducktions' (the game's core puzzle-solving mechanic), completing 5 inspections, filling out every suspect's name, kicking over every bin at the BearBus office, and solving the mystery of the Secret Salami itself.",
                "The catalog marks it difficulty 1. This is a short, breezy point-and-click mystery game; every achievement is a natural side effect of playing through and solving its case normally.",
                "Tip: just play through the case at your own pace, filling in suspect names and inspecting everything you can - all 7 achievements come from normal play."
            ]
        },
        {
            "heading": "Solving Deducktions",
            "body": [
                "Solving your first deducktion, completing 5 inspections, solving 5 deducktions, and filling out every suspect's name.",
                "The achievements here: Early Bird (Solve a deducktion); Fits the Bill (Complete 5 inspections); Poultry Case (Solve 5 deducktions); Ducks in a Row (Fill out all suspects' names)."
            ]
        },
        {
            "heading": "Case Closed",
            "body": [
                "Solving 10 deducktions, kicking over every bin at the BearBus office, and solving the mystery of the Secret Salami.",
                "The achievements here: Beak Performance (Solve 10 deducktions); Rage Uncaged (Kick over all the bins at BearBus office); Quacked the Case (Solve the mystery of the Secret Salami)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through the case, inspecting scenes and filling out suspects' names as you go.",
                "2. Solve deducktions naturally as the story presents them - the count-based achievements (5, then 10) come from normal play.",
                "3. Kick over the bins at the BearBus office if you get the chance, for the odd one out.",
                "4. Solve the mystery of the Secret Salami to finish the case.",
                "Tip: this is a short, one-sitting mystery game - a single normal playthrough is enough for all 7 achievements."
            ]
        }
    ]
};
