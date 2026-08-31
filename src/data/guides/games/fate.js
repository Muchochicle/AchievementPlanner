// FATE Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/fate.json), whose 10 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   246840 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "fate-achievement-guide",
    "category": "game",
    "gameSlug": "fate",
    "icon": "🗡",
    "title": "FATE Achievement Guide",
    "summary": "A practical guide to all 10 Steam achievements in FATE - none are hidden. Covers the character and pet achievements and the collectible and stat-threshold achievements. None of the achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "FATE has 10 Steam achievements and none are hidden. Two are character basics (create a character, permanently change your pet's form), four are collections and chests (all 20 fish, all 15 gem types, 10 large chests opened), and four are stat thresholds (Magic 25, Strength 45, Dexterity 40, Vitality 45) plus creating a Descendant character.",
                "The catalog marks it a single playthrough - FATE is an endless dungeon crawler, so the stat and collection achievements just take a few hours of diving. Nothing is missable.",
                "Tip: fish at every well and pond you pass and transmute duplicate gems - 'I Guess You Were Hungry...' (all 20 fish) and 'Shiny!' (all 15 gems) are the slowest and are easy to forget to work on."
            ]
        },
        {
            "heading": "Character, Pet & Chests",
            "body": [
                "Creating and customising a character, permanently changing your pet's form, catching all 20 types of fish, and opening 10 large chests.",
                "The achievements here: Fate Seeker (Create and Customize a New Character); Best In Show (Permanently change your pet's form); I Guess You Were Hungry ... (Catch all 20 types of Fish); Ka-Ching! (Open 10 Large Chests)."
            ]
        },
        {
            "heading": "Stats & Legacy",
            "body": [
                "Raising Magic to 25, Strength to 45, Dexterity to 40 and Vitality to 45, creating a Descendant character, and finding all 15 gem types.",
                "The achievements here: Lightning Bolt! Lightning Bolt! (Raise Magic to 25); These Guns? (Raise Strength to 45); Skillful Warrior (Raise Dexterity to 40); Energized (Raise Vitality to 45); Fate Ensured (Create a Descendent character); Shiny! (Find all 15 Gem Types)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Create and customise a character, and change your pet's form once.",
                "2. Dive the dungeon, opening large chests and building your stats.",
                "3. Fish at every water source and collect all 20 fish types.",
                "4. Transmute and collect all 15 gem types.",
                "5. Push a stat build to the thresholds (Strength 45 or Magic 25) and create a Descendant when you retire the character.",
                "Tip: 'Fate Ensured' (a Descendant character) is done from the retirement screen - retire a high-level character and start the heir, which also carries a bonus item forward."
            ]
        }
    ]
};
