// Signs of the Sojourner Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/signs-of-the-sojourner.json), whose 14 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1058690 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 4 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (TrueAchievements / Steam Community / game wikis) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "signs-of-the-sojourner-achievement-guide",
    "category": "game",
    "gameSlug": "signs-of-the-sojourner",
    "icon": "🗺",
    "title": "Signs of the Sojourner Achievement Guide",
    "summary": "A practical guide to all 14 Steam achievements in Signs of the Sojourner (4 hidden). Covers discovering every town, helping the game's cast, completing every caravan route, and the story's three secret endings. Four of the achievements are hidden and their unlock conditions are researched from a community 100% guide.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Signs of the Sojourner has 14 Steam achievements and 4 are hidden. They cover discovering the abandoned city of Hara, the coastal enclave of Persarrey, the Wave Dancer and the Long Gate, befriending the dog Thunder, repairing Oscar, completing all caravan routes, helping Lars find a new home, reuniting the twins, and attending a funeral. The four hidden achievements are the game's three secret endings (settling down with Oscar, riding off with Klaus, sparking revolution with Tariq) and introducing Mimi and Theo to each other.",
                "The catalog marks it difficulty 2. Signs of the Sojourner is a narrative card game about conversation and connection across a year of travel; the three secret endings are mutually exclusive per playthrough, so getting all of them takes multiple runs.",
                "Tip: pay attention to your relationships with Oscar, Klaus and Tariq specifically if you're chasing the secret endings - each one locks you into a different ending path."
            ]
        },
        {
            "heading": "Secret Endings & Discoveries",
            "body": [
                "The three hidden secret endings (Oscar, Klaus, Tariq), discovering Hara, Persarrey, the Wave Dancer and the Long Gate, befriending Thunder, and repairing Oscar.",
                "The achievements here: Settle Down (Reach the secret ending where you settle down with Oscar in the hills of Rimina.); Ride off into the Sunset (Reach the secret ending where you ride off into the sunset with Klaus.); Spark Revolution (Reach the secret ending where you spark revolution alongside Tariq.); Visit Hara (Discover the abandoned city of Hara.); Visit Persarrey (Discover the coastal enclave of Persarrey.); Visit the Wave Dancer (Discover the Wave Dancer.); Visit the Long Gate (Discover the mysterious Long Gate.); Pet the Dog (Become BFFs with Thunder.); Repair Oscar (Help repair Oscar.)."
            ]
        },
        {
            "heading": "Helping the Cast & Completion",
            "body": [
                "The hidden achievement for introducing Mimi and Theo, completing all caravan routes, helping Lars find a new home, reuniting the twins, and attending a funeral.",
                "The achievements here: Play Matchmaker (Introduce Mimi and Theo to each other.); Caravaneer (Complete all caravan routes.); A Home for Lars (Help Lars find a new place to call home.); Reunite the Brothers (Helps the twins reunite and find common ground again.); A Somber Day (Attend a funeral.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Travel the caravan routes, discovering Hara, Persarrey, the Wave Dancer and the Long Gate along the way.",
                "2. Befriend Thunder the dog, repair Oscar, and help Lars find a new home.",
                "3. Introduce Mimi and Theo to each other for the hidden Play Matchmaker achievement.",
                "4. Reunite the twins and attend the funeral as those story threads come up.",
                "5. Build a strong relationship with Oscar, Klaus or Tariq specifically to steer toward their secret ending - you'll need separate playthroughs for all three.",
                "Tip: the three secret endings are mutually exclusive per run, so plan on at least three playthroughs (or careful save management) if you want all of them alongside Caravaneer's full route completion."
            ]
        }
    ]
};
