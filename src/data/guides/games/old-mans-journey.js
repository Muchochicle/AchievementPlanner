// Old Man's Journey Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/old-mans-journey.json), whose 13 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   581270 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "old-mans-journey-achievement-guide",
    "category": "game",
    "gameSlug": "old-mans-journey",
    "icon": "🧓",
    "title": "Old Man's Journey Achievement Guide",
    "summary": "A practical guide to all 13 Steam achievements in Old Man's Journey - none are hidden. Covers meeting the game's cast, discovering hidden vignettes, and a few gentle challenge runs. None of the achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Old Man's Journey has 13 Steam achievements and none are hidden. They cover learning the terrain-shaping basics, meeting Adeline, Hugo, Georges, Tilda and Albert, discovering the Window Piano, the Frogs' Chorus and the elusive tortoise Kassiopeia, riding the train without an emergency brake, guiding the sheep with minimal interactions, driving the truck for a mile, and watching the credits to the end.",
                "The catalog marks it difficulty 1. This is a short, gentle terrain-puzzle game about an old man's journey home; nothing here is missable, and every achievement comes from exploring the world at a relaxed pace.",
                "Tip: pause at each new area and look around before moving on - the hidden vignettes (the piano, the frogs, the tortoise) are easy to walk past if you rush."
            ]
        },
        {
            "heading": "The Journey Begins",
            "body": [
                "Learning the terrain-shaping basics, meeting Adeline the Village Gossiper, discovering the Window Piano, finding Kassiopeia the Tortoise, meeting Hugo the Vagabond, hearing the Frogs' Chorus, and meeting Georges the Lighthouse Keeper.",
                "The achievements here: The Beginning (Now you’ve got the hang of shaping hills and you're all set to help the old man on his journey.); Adeline the Village Gossiper (Adeline likes to think she is always in the know of the latest events in the little village.); Window Piano (As a strange consequence of erosion, the hotel window shutters create a harmonic range of squeaks.); Kassiopeia the Tortoise (Kassiopeia is an elusive creature, but will reveal herself for those with patience.); Hugo the Vagabond (Hugo likes to invite passing hikers for a pause and a game of Canasta.); Frogs' Chorus (A small group of frogs with big vocal ambitions.); Georges the Lighthouse Keeper (Georges spends most of his time indulging in his passion for fishing.)."
            ]
        },
        {
            "heading": "Later Encounters & The End",
            "body": [
                "Riding the train without an emergency brake, guiding the sheep with minimal interactions, driving the truck for a mile, meeting Tilda the Whiz Kid and Albert the Gardener, and watching the credits to the end.",
                "The achievements here: Smooth Ride (Ride the train without an emergency break.); Sheep Whisperer (Guide the sheep in a level with the minimal amount of interactions.); Enjoy the Ride (Drive the truck for one mile.); Tilda the Whiz Kid (Tilda developed an uncanny talent to repair things after she discovered her dad's toolbox.); Albert the Gardener (Albert worked an office job in finance before he dared to fulfill his dream and became a gardener.); The End (Watched the credits to the end.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through the story, taking your time to shape terrain and explore each new area.",
                "2. Meet every character you come across - Adeline, Hugo, Georges, Tilda and Albert.",
                "3. Keep an eye and ear out for the hidden vignettes - the Window Piano, the Frogs' Chorus, and Kassiopeia the tortoise.",
                "4. Try the train ride without an emergency brake, guide the sheep minimally, and drive the truck for a mile.",
                "5. Watch the credits through to the end.",
                "Tip: this is a short, relaxed game - a single unhurried playthrough that explores every area thoroughly gets all 13 achievements."
            ]
        }
    ]
};
