// Dinkum Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/dinkum.json), whose 25 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1062520 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js). 1 hidden achievement ships no Steam description; its condition here is curatorial, cross-checked against the game's wiki plus community 100% guides, and kept spoiler-light.
// - Sections group achievements by what each one actually requires.
export const GUIDE = {
    "slug": "dinkum-achievement-guide",
    "category": "game",
    "gameSlug": "dinkum",
    "icon": "🦘",
    "title": "Dinkum Achievement Guide",
    "summary": "A practical guide to all 25 Steam achievements in Dinkum - progression & milestones, exploration & npcs, feats & community challenges, hidden achievement.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Dinkum has 25 Steam achievements, 1 of them hidden (name an animal after the developer). They are the progression milestones (all Licences, a million Dinks, a completed Pedia), the exploration goals (the three deep biomes, the Island Reef, the NPCs), and a set of one-off feats - many of them community-submitted challenges credited to their creators in the description.",
                "Nothing is missable and the island persists indefinitely. The long ones are Fully Licenced, Filthy Dinkin' Rich (1,000,000 Dinks), Pedia Completer, Crafting Master, and Big Heart (5 hearts with every NPC).",
                "Tip: play normally toward the licences and Pedia, and knock out the small community-challenge feats deliberately once you know where things are - most are a single specific action."
            ]
        },
        {
            "heading": "Progression & Milestones",
            "body": [
                "Completing your first day, holding all Licences, earning 1,000,000 Dinks, opening a Swag Pack, completing your Pedia, and learning every recipe (Crafting Master).",
                "The achievements here: New Home (Complete your first day); Fully Licenced (Hold all Licences); Filthy Dinkin' Rich (Earn 1,000,000 Dinks); Jolly Swag Pack (Open a Swag Pack); Pedia Completer (Complete your Pedia); Crafting Master (Learn every recipe and try to learn more from a Blueprint )."
            ]
        },
        {
            "heading": "Exploration & NPCs",
            "body": [
                "Meeting Jimmy and Ted Selly, visiting the Island Reef, descending to the Deep Mines, the Undergrove and The Hot Hot Hot, reaching 5 hearts with every NPC, and welcoming Spring in your fifth year.",
                "The achievements here: Dodgy Bloke (Meet Jimmy); Bush Ranger (Meet Ted Selly); Island Getaway (Take a trip to the Island Reef); Deep Miner (Descend to the Deep Mines.); Undergrove Explorer (Descend to the Undergrove); Cooked, Mate (Decend to The Hot Hot Hot); Big Heart (Have 5 hearts with every NPC! (Creator: Minoentje)); Island Life Expert (Welcome Spring in the 5th year. (Creator: Newbie.))."
            ]
        },
        {
            "heading": "Feats & Community Challenges",
            "body": [
                "The one-off feats, several credited to community creators: eating a Snag, 10+ active buffs at once, eating every Cooking Table recipe in a day, wearing a non-clothing item on your head, going back to bed before 8 AM, hunting a Jackaroo in the Jackaroo Hood, the mine-pass elevator trick, staying in the mines after midnight, moving 500 m while exhausted, and shooting down 10 Flying Lanterns at Sky Fest.",
                "The achievements here: Snag Sizzle (Eat a Snag); Buffed Up (Have more than 10 buffs active at once (excluding stamina and health buffs)); Succulent Meals (Eat one of every recipe that can be cooked at a Cooking Table in one day); On Ya Noggin' (Wear something that isn’t clothing on your head); Chucking a Sickie (Go back to bed before 8AM (Creator: Phoros)); Whats wrong, skip? (Hunt a Jackaroo while wearing the Jackaroo Hood (Creator: Daid)); Oops, Nevermind! (Use mine pass to enter deep mine and travel back up without leaving elevator (Creator: MercuryCocktail)); Risky Behaviour (Stay in the mines after midnight (Creator: BerLInuXXJJ)); Must… Keep… Moving… (Move 500m cumulatively when exhausted  (Creator: Anylu)); Creative Thinker (Shoot down 10 Flying Lanterns with a slingshot at Sky Fest (Creator: baiye))."
            ]
        },
        {
            "heading": "Hidden Achievement",
            "body": [
                "One achievement is hidden - a small tribute to the developer:",
                "The achievements here: Thanks, mate. (Name a pet or farm animal after the developer (James Bendon - try \"James\" or \"Jimbob\").)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through the early game - the first day, meeting the NPCs, the first Swag Pack, and starting on the Licences.",
                "2. Explore downward: the Deep Mines, Undergrove and Hot Hot Hot, and take the trip to the Island Reef.",
                "3. Work the long grinds - all Licences, a completed Pedia, Crafting Master, 5 hearts with every NPC, and a million Dinks - over the seasons.",
                "4. Deliberately do the community-challenge feats once you have the tools and know the locations.",
                "Tip: name your first pet or farm animal \"James\" or \"Jimbob\" when you get it - Thanks, mate. can pop the moment you name an animal after the developer, and it costs nothing to try early."
            ]
        }
    ]
};
