// Fallout 76 Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/fallout-76.json), whose 72 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1151340 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "fallout-76-achievement-guide",
    "category": "game",
    "gameSlug": "fallout-76",
    "icon": "☢️",
    "title": "Fallout 76 Achievement Guide",
    "summary": "A practical guide to all 72 Steam achievements in Fallout 76 - none are hidden. Covers the original Overseer main quest, C.A.M.P. building and the public Events, the survival, crafting, exploration and PvP milestones, the character-level goals, and the later story updates and expansions (Wastelanders, Steel Dawn, the Pitt Expedition, Atlantic City, Skyline Valley).",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Fallout 76 has 72 Steam achievements and none of them are hidden. The list has grown a lot since launch: the original set covers the Overseer's main questline, building and expanding a C.A.M.P., winning the public Events, and a long tail of survival, crafting, exploration and PvP milestones plus character-level goals (up to level 100). Later achievements were added for each major content update - the Wastelanders story and its faction allegiances, Steel Dawn's Brotherhood questline, gold bullion, Daily Ops, and the Expeditions and regional expansions (the Pitt, Atlantic City, Skyline Valley).",
                "Nothing is missable - this is a persistent online game, every quest and Event repeats or can be picked up later, and all the counter-based achievements accumulate across your whole account. The completion is long mostly because of the level 100 requirement (Fallout Forever) and the sheer number of separate questlines added by updates, several of which you must lead a group through (\"Lead and complete...\").",
                "Tip: prioritise joining a team (or a public group) for the \"Lead and complete\" Expedition and event achievements - a few of them, like Welcome To The Pitt and America's Playground, only credit the player who started and finished the run as group lead, so being a passenger in someone else's run will not unlock them."
            ]
        },
        {
            "heading": "Main Story & Early Quests",
            "body": [
                "The Overseer's main questline from leaving Vault 76 through the endgame, building and expanding a C.A.M.P. (one item, 20, then 100), and the standalone early questlines Mistress of Mystery, Personal Matters and Queen of the Hunt.",
                "The achievements here: Reclamation Day! (Leave Vault 76); First Contact (Complete \"First Contact\"); Final Departure (Complete \"Final Departure\"); Second Helpings (Complete \"Second Helpings\"); Into the Fire (Complete \"Into the Fire\"); Recruitment Blues (Complete \"Recruitment Blues\"); Heart of the Enemy (Complete \"Heart of the Enemy\"); Key to the Past (Complete \"Key to the Past\"); Coming to Fruition (Complete \"Coming to Fruition\"); Bunker Buster (Complete \"Bunker Buster\"); One of Us (Complete \"One of Us\"); Officer on Deck (Complete \"Officer on Deck\"); Happy C.A.M.P.er (Build a C.A.M.P.); We Must Rebuild (Build 20 C.A.M.P. Items); Appalachian HOA (Build 100 C.A.M.P. Items); Mistress of Mystery (Complete \"Mistress of Mystery\"); Personal Matters (Complete \"Personal Matters\"); Queen of the Hunt (Complete \"Queen of the Hunt\")."
            ]
        },
        {
            "heading": "Events, Survival & Exploration",
            "body": [
                "Winning the public Events (Monster Mash, Scorched Earth, Breach and Clear), joining teams, crafting armor and weapons, the survival and skill milestones (locks, terminals, weapon mods, revives, caps, holotapes, challenges), exploration and collectibles (100 locations, Bobbleheads, magazines, photos, junk), the PvP kills, and character levels 10/25/50.",
                "The achievements here: Monster Mash (Complete the \"Monster Mash\" Event); Scorched Earth (Win the \"Scorched Earth' Event); Breach and Clear (Win the \"Breach and Clear\" Event); Never Go it Alone! (Join 20 Teams); Second Skin (Craft 5 Pieces of Armor); A Fighting Chance (Craft a Weapon); Fallout Forever (Reach Level 100); LITerally (Read 20 Magazines); Ground Zero (Be at Ground Zero of a Nuclear Blast); Perked Up (Fully Rank Up one Perk); Gimme Gimme! (Pick 50 Locks); Code Cruncher (Hack 50 Terminals); Monet of Murder (Mod 50 Weapons); Tested Mettle (Complete 5 Challenges); A Real Challenger (Complete 20 Challenges); Field Medic (Revive 20 Fallen Players); Moneybags (Possess 10,000 Caps); Retro Now (Play a Holotape Game); Giant Slayer (Kill 5 Giant Creatures); Pioneer Scout (Discover 100 Locations); Bounty Hunter (Kill a Wanted Player); Kill or Be Killed (Kill Another Player); Good Grief! (Kill 20 Players); Pest Control (Kill 300 Creatures); Junker Funk (Gather 200 Pieces of Junk); Photo Bomber (Take 20 Photos); Ain't He the Cutest? (Collect a Bobblehead); Shwag (Collect 10 Bobbleheads); Wild West Virginian (Reach Level 10); Appalachian Trailblazer (Reach Level 25); American Hero (Reach Level 50)."
            ]
        },
        {
            "heading": "Wastelanders & Content Updates",
            "body": [
                "The story updates and expansions: Wastelanders (finding the Overseer, the Sofia and Beckett companion stories, allegiance with Foundation or Crater), gold bullion milestones, Steel Dawn's \"The Catalyst\", Daily Ops and Gold Star crafting, the Pitt Expedition, Atlantic City, and Skyline Valley - most of which require leading a group through their quests.",
                "The achievements here: I Am Become Death (Complete \"I Am Become Death\"); Wayward Child (Complete \"The Elusive Crane\"); Overdue Reunions (Find the Overseer); Go for the Gold (Complete \"Buried Treasure\"); A Golden Future (Complete \"All That Glitters\"); Wish Upon A Star (Complete Sofia's story); Behind the Curtain (Complete Beckett's story); A Solid Foundation (Become allies with Foundation); Friends in Low Places (Become allies with Crater); Gold Rush (Gain 300 gold bullion); The New Fort Knox (Gain 1500 gold bullion); Steel Brethren (Complete “The Catalyst”); Smooth Operator (Earn Elder Rewards from a Daily Op); Gold Star Crafter (Craft a 1 star legendary mod, a 2 star legendary mod, and a 3 star legendary mod); Welcome To The Pitt (Lead and complete \"Union Dues\" and \"From Ashes to Fire\"); Seeking Refuge (Complete 10 Favors for people in The Whitespring Refuge); Troglodiced (Kill 100 Trogs with an Auto Axe); America’s Playground (Lead and complete “Tax Evasion” and “The Most Sensational Game”); Rip and Tear (Kill 10 Lesser Devils with a melee weapon); The House Always Wins (Build 5 casino games in your CAMP); Community Service (Lead and Complete \"The Human Condition\"); Devil's Bargain (Complete \"Sins of the Father\"); Weed Killer (Kill 100 Overgrown with fire)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the Overseer's main questline from the start, building a C.A.M.P. early and expanding it as you go for the building achievements.",
                "2. As you explore, hit the survival and collection milestones naturally - pick locks, hack terminals, read magazines, grab Bobbleheads, discover locations, and craft armor and weapons.",
                "3. Join public Events whenever they trigger for the Event-win achievements, and team up regularly for the co-op-flavoured milestones (join 20 teams, revive 20 players).",
                "4. Play through the Wastelanders story, pick a faction (Foundation or Crater), finish the companion stories, and start the Steel Dawn Brotherhood questline.",
                "5. As group lead, run the Expeditions and regional-update questlines (the Pitt, Atlantic City, Skyline Valley), then grind toward level 100 for Fallout Forever, which usually lands last.",
                "Tip: the fastest route to level 100 is running high-XP public Events and the Daily Ops repeatedly with a team - passive questing is far slower, and most other achievements will already be done long before you reach the level cap."
            ]
        }
    ]
};
