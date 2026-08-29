// The First Descendant Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/the-first-descendant.json), whose 24 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   2074920 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js). None are hidden; every one
//   ships a real, official Steam description, quoted verbatim below.
// - Sections group achievements by roughly what part of the game they belong to.
export const GUIDE = {
    "slug": "the-first-descendant-achievement-guide",
    "category": "game",
    "gameSlug": "the-first-descendant",
    "icon": "🔫",
    "title": "The First Descendant Achievement Guide",
    "summary": "A practical guide to all 24 Steam achievements in The First Descendant - none are hidden. story & void intercept, modules & weapons, descendants, research & endgame.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "The First Descendant has 24 Steam achievements and none are hidden. They cover the early campaign regions and Void Intercept boss battles, the module and weapon crafting systems, and the endgame progression (an Ultimate weapon, 5 Descendants, Level 40, Colossi part removal).",
                "Nothing is missable and everything is account-wide. Most are early-game taps that come naturally; the slower ones are Mastery Rank 10, an Ultimate-tier weapon (research grind), and the module dismantle/combine counts.",
                "Tip: play the campaign through the first three regions, then farm Void Intercepts for the boss-count achievements while the module and weapon crafting taps accumulate from normal upgrading."
            ]
        },
        {
            "heading": "Story & Void Intercept",
            "body": [
                "The campaign and boss-fight goals: returning to Albion after Retrieve the Ironheart, completing all missions and Descendant duties in Kingston, The Sterile Land and Vespers, a first Void Intercept Battle and 10 of them, Mastery Rank 10, and equipping your first module.",
                "The achievements here: Ready to Move On? (Complete Retrieve the Ironheart operation and return to Albion); First Sweep Operation (Complete all available missions and Descendant duties in Kingston); Hope Within the Dust (Complete all available missions and Descendant duties in The Sterile Land); Knock, Knock! Who is it?  (Complete all available missions and Descendant duties in Vespers); Pre-emptive Strike for the Future (Complete a Void Intercept Battle for the first time); I Can See the Future of the Colossi (Complete 10 Void Intercept Battles); Power! O, Infinite Power! (Reach Mastery Rank Level 10); Is This How You Insert it? (Equip a module for the first time)."
            ]
        },
        {
            "heading": "Modules & Weapons",
            "body": [
                "The gear systems: enhancing a module to +7, combining modules 7 times, dismantling 77 modules, 10 socket-type assigns, expanding a Special-Rounds weapon's and a Descendant's module capacity, a Weapon Transmission level-up, a first Unique Ability enhancement, and dismantling 50 weapons.",
                "The achievements here: This Is Great, Sevenfold (Enhance any module to +7); And Combining, to Boot (Combine modules 7 times); Execute Order 77 (Dismantle modules 77 times); Slot Maketh Module (Assign module socket types 10 times); Place for Something Special (Expand the module capacity of a weapon that uses Special Rounds); Modules Maketh Descendant (Expand a Descendant's Module Capacity); Ready, Extract, Complete (Level up a weapon through Weapon Transmission); Growing Possibility (Enhance a weapon's Unique Ability for the first time); Out of Weapons (Dismantle weapons 50 times)."
            ]
        },
        {
            "heading": "Descendants, Research & Endgame",
            "body": [
                "The progression goals: a first Reactor enhancement, a first completed research, an Ultimate-tier weapon, owning 5 Descendants, Level 40 with any Descendant, Wave 7 in the Kingston Albion Resource Defense mission, and removing Colossi parts twice.",
                "The achievements here: This Reaction's a First (Enhance a Reactor for the first time); The Sensible Life of Research (Complete research for the first time); No Hope for the Vulgus (Obtain an Ultimate tier weapon); Descendants, Assemble (Own 5 Descendants); What Was Always Expected (Reach Level 40 with any Descendant); Special Operation Task Squad (Clear up to Wave 7 in the Kingston Albion Resource Defense mission.); Good Things Happen Twice (Successfully remove Colossi parts 2 times (excluding Retrieve the Ironheart operation))."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the campaign: return to Albion, then fully clear Kingston, The Sterile Land and Vespers.",
                "2. Farm Void Intercept Battles for the first and 10th-battle achievements and the Colossi part removals.",
                "3. Work the module and weapon systems as you upgrade - +7 enhance, 7 combines, 77 dismantles, capacity expansions, Weapon Transmission.",
                "4. Grind toward Mastery Rank 10, 5 Descendants, Level 40 and an Ultimate-tier weapon.",
                "Tip: Execute Order 77 (dismantle 77 modules) and Out of Weapons (dismantle 50 weapons) fill naturally if you break down every low-tier drop for materials rather than selling it - never sell, always dismantle."
            ]
        }
    ]
};
