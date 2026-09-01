// Beacon Pines Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/beacon-pines.json), whose 11 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1269640 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 2 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (TrueAchievements / Steam Community / game wikis) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "beacon-pines-achievement-guide",
    "category": "game",
    "gameSlug": "beacon-pines",
    "icon": "📖",
    "title": "Beacon Pines Achievement Guide",
    "summary": "A practical guide to all 11 Steam achievements in Beacon Pines (2 hidden). Covers finding Charms, solving Riddles, exploring the town, and the story's Turning Points and endings. Two of the achievements are hidden and their unlock conditions are researched from a community 100% guide.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Beacon Pines has 11 Steam achievements and 2 are hidden. They cover finding a Charm, solving a Riddle, playing Watermelon Bongo, poking around the library, catching all the 'fish', closing the Book, kicking a melon, being 'Born in a Barn', and satisfying every customer in the cooking minigame. The two hidden achievements are for reaching one of the story's colder, darker endings, and for a specific 'Out with a bang' Turning Point outcome.",
                "The catalog marks it difficulty 2. Beacon Pines is a storybook adventure built around rewindable story choices called Turning Points; nothing is missable since you can always go back and pick differently.",
                "Tip: use the story's rewind feature freely - Beacon Pines is built to be replayed through different Turning Point choices, so there's no wrong way to explore its darker branches for the hidden achievements."
            ]
        },
        {
            "heading": "Exploring Beacon Pines",
            "body": [
                "Finding a Charm, solving a Riddle, playing Watermelon Bongo, and poking around the library.",
                "The achievements here: A Charmed Life (Find a Charm); Riddle Me This (Solve a Riddle); Play that Funky Music (Watermelon Bongo); Nerd!!! (Poke around the library)."
            ]
        },
        {
            "heading": "Turning Points, Secrets & Minigames",
            "body": [
                "The hidden 'Big Chill' frozen ending and the hidden 'Pop goes the Weasel' Turning Point outcome, catching all the 'fish', closing the Book, kicking a melon, being 'Born in a Barn', and satisfying every customer in the cooking minigame.",
                "The achievements here: The Big Chill (Reach one of the story's Turning Point endings where Beacon Pines gets frozen over.); Pop goes the Weasel (At the Warehouse of Horrors Turning Point, choose STRUGGLE; later in Chapter 3, while still carrying Gran's jam-delivery basket, interact with the giant watermelon behind Griffin.); Agile Angler (Catch all the \"fish\"); Close the Book (Close the Book); Melon Kicker (Find a way to kick a melon); Born in a Barn (Born in a Barn); Yes Chef! (Satisfy all customers in the cooking minigame.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Explore Beacon Pines freely - find a Charm, solve a Riddle, play Watermelon Bongo, and poke around the library.",
                "2. Play through the cooking minigame to satisfy every customer, and catch all the 'fish'.",
                "3. Use the story's rewind feature to try different Turning Point choices, including ones that freeze the town over for the hidden Big Chill achievement.",
                "4. Choose STRUGGLE at the Warehouse of Horrors Turning Point, then interact with the giant watermelon behind Griffin during Gran's Chapter 3 jam deliveries for the hidden Pop goes the Weasel.",
                "5. Close the Book to finish a run, and try kicking a melon and being 'Born in a Barn' along the way.",
                "Tip: nothing is missable here - freely rewind to explore alternate Turning Point outcomes rather than worrying about locking yourself out of an achievement."
            ]
        }
    ]
};
