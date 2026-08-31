// Apex Legends Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/apex-legends.json), whose 12 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1172470 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "apex-legends-achievement-guide",
    "category": "game",
    "gameSlug": "apex-legends",
    "icon": "🎯",
    "title": "Apex Legends Achievement Guide",
    "summary": "A practical guide to all 12 Steam achievements in Apex Legends - none are hidden. Covers the account-level and loadout milestones and the in-match combat and class-victory feats.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Apex Legends has 12 Steam achievements and none of them are hidden. They are all simple play milestones: reach player level 50, equip legendary and fully-kitted gear, respawn a teammate, be the Jumpmaster five times, become the Kill Leader, deal 5,000 damage with eight different Legends, and win a game as each of the four class types (Assault, Controller, Support, Recon) plus a win with eight different Legends.",
                "Nothing is missable - Apex Legends is a live service game and every achievement can be worked toward across any number of matches. The two that take the longest are \"Well-Rounded\" (5,000 damage on eight different Legends) and \"Apex Legend\" (a win with eight different Legends), both of which just require spreading your playtime across the roster rather than maining one character.",
                "Tip: rotate through one Legend of each class while you push for the class-win achievements - a single good game can knock out \"Apex Assault\", \"Apex Controller\", \"Apex Support\" or \"Apex Recon\" and also chip away at \"Well-Rounded\" and \"Apex Legend\" at the same time."
            ]
        },
        {
            "heading": "Progression & Loadout",
            "body": [
                "The account and equipment milestones - reaching player level 50, equipping two legendary items at once, respawning a teammate, and equipping a fully-kitted weapon.",
                "The achievements here: The Player (Reach player level 50); Decked Out (Equip any 2 legendary equipment items at the same time); Team Player (Respawn a teammate); Fully Kitted (Equip a fully kitted weapon)."
            ]
        },
        {
            "heading": "Combat & Class-Victory Feats",
            "body": [
                "The in-match achievements - being Jumpmaster five times, becoming the Kill Leader, dealing 5,000 damage with eight Legends, and winning a game as an Assault, Controller, Support and Recon character as well as with eight different Legends.",
                "The achievements here: Jumpmaster (Be the Jumpmaster 5 times); Well-Rounded (Deal 5,000 damage with 8 different Legends); Kill Leader (Become the Kill Leader); Apex Assault (Win a game as an assault character); Apex Controller (Win a game as a controller character); Apex Support (Win a game as a support character); Apex Recon (Win a game as a recon character); Apex Legend (Win a game with 8 different Legends)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Just play - reaching player level 50 (\"The Player\") and equipping legendary / fully-kitted gear happens naturally over your first dozens of matches.",
                "2. Volunteer as Jumpmaster each match until \"Jumpmaster\" pops, and respawn a downed teammate whenever you can for \"Team Player\".",
                "3. Push for kills and knocks each game to eventually \"Become the Kill Leader\".",
                "4. Deliberately rotate Legends across all four classes, aiming for a win with one of each (\"Apex Assault\" / \"Apex Controller\" / \"Apex Support\" / \"Apex Recon\").",
                "5. Keep spreading your games across the roster until \"Well-Rounded\" (5,000 damage on 8 Legends) and \"Apex Legend\" (win with 8 Legends) complete.",
                "Tip: the class-based achievements follow Apex's current class system, so check a Legend's class in the character select screen before a match if you are hunting a specific class win."
            ]
        }
    ]
};
