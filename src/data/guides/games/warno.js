// WARNO Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/warno.json), whose 49 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1611600 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "warno-achievement-guide",
    "category": "game",
    "gameSlug": "warno",
    "icon": "🚩",
    "title": "WARNO Achievement Guide",
    "summary": "A practical guide to all 49 Steam achievements in WARNO - none are hidden. Covers the operations and early campaigns, the multiplayer, skirmish and progression achievements, and the later operations and campaigns. None of the achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "WARNO has 49 Steam achievements and none are hidden. Sixteen are completing the sixteen single-player operations on any difficulty, sixteen more are completing each of the eight campaigns (Bruderkrieg, Fulda Gap, Airborne Assault, The Left Hook, Highway 66, Four Days to the Weser, Armored Fury, Holding Attack, Closing the Trap) with both NATO and PACT, and the rest are multiplayer mode wins (Conquest, Destruction, 2v2 up to 10v10), skirmish wins against each AI level (easy to hardest), player levels 5 / 10 / 20, and adding a friend.",
                "The catalog marks it difficulty 4 and about two campaigns' worth. Playing every campaign twice (once per faction) and winning a 10v10 multiplayer game and against the hardest AI are the real time investment.",
                "Tip: play each campaign with NATO, then again with PACT, do all sixteen operations, and grind skirmish and multiplayer for the AI and mode achievements."
            ]
        },
        {
            "heading": "Operations & Early Campaigns",
            "body": [
                "Completing eight operations (Black Horse's Last Stand, Red Juggernaut, The Kitzingen Ruse, Backhand Blow, Götterdammerung, The Dieburg Salient, Hold Until Relieved, Sledgehammer), and completing the Bruderkrieg, Fulda Gap, Airborne Assault, The Left Hook and Highway 66 campaigns with both NATO and PACT.",
                "The achievements here: Horsemen of the Apocalypse (Complete operation Black Horse's Last Stand on any difficulty); March of the Tankmen (Complete operation Red Juggernaut on any difficulty); It's a Trap! (Complete operation The Kitzingen Ruse on any difficulty); Steel Beasts (Complete operation Backhand Blow on any difficulty); Twilight of the Gods (Complete operation Götterdammerung on any difficulty); En garde! (Complete operation The Dieburg Salient in any difficulty); For Queen and Country (Complete operation Hold Until Relieved in any difficulty); Vanguard (Complete operation Sledgehammer in any difficulty); Civil War (Complete Bruderkrieg campaign with NATO); It takes two men to make one brother (Complete Bruderkrieg campaign with PACT); Allons! Allons! (Complete Fulda Gap campaign with NATO); Breakthrough (Complete Fulda Gap campaign with PACT); The Kassel Airlift (Complete Airborne Assault campaign with NATO); Operation Tauroggen (Complete Airborne Assault campaign with PACT); With a little help from my friends (Complete The Left Hook campaign with NATO); Kulachniy Boy (Complete The Left Hook campaign with PACT); Highway to Hell (Complete Highway 66 campaign with NATO); The Mother Road (Complete Highway 66 campaign with PACT)."
            ]
        },
        {
            "heading": "Multiplayer, Skirmish & Progression",
            "body": [
                "Winning a multiplayer game in Conquest and Destruction, winning 2v2, 3v3, 4v4 and 10v10 games, defeating easy / medium / hard / very hard / hardest AI in skirmish, reaching Level 5, 10 and 20, and adding a friend.",
                "The achievements here: Conqueror (Win a multiplayer game in Conquest mode); Destructor (Win a multiplayer game in Destruction mode); Wingman (Win a 2v2 multiplayer game); Teammate (Win a 3v3 multiplayer game); Companiable (Win a 4v4 multiplayer game); Party Animal (Win a 10v10 multiplayer game); Lieutenant (Defeat easy AI in skirmish mode); Captain (Defeat medium AI in skirmish mode); Major (Defeat hard AI in skirmish mode); Colonel (Defeat very hard AI in skirmish mode); Major General (Defeat hardest AI in skirmish mode); Rookie (Reach Level 5); Trained (Reach Level 10); Elite (Reach Level 20); Keep your friends close... (Add a friend)."
            ]
        },
        {
            "heading": "More Operations & Later Campaigns",
            "body": [
                "Completing eight more operations (Marauders, The Winged Hussars, Running the Gauntlet, Survivors, Siegfried's Wrath, Delayed Retribution, Glory or Attrition, The Hydra), and completing the Four Days to the Weser, Armored Fury, Holding Attack and Closing the Trap campaigns with both NATO and PACT.",
                "The achievements here: Hamburg Hustle (Complete Operation Marauders on any difficulty); When the Winged Hussars arrived (Complete Operation The Winged Hussars on any difficulty); Ordeal by fire (Complete Operation Running the Gauntlet on any difficulty); Brotherhood Under Fire (Complete Operation Survivors on any difficulty); Tides of war (Complete Four Days to the Weser campaign with NATO); Faster, stronger (Complete Four Days to the Weser campaign with PACT); We once shared this crown (Complete Armored Fury campaign with NATO); Fallen Kingdom (Complete Armored Fury campaign with PACT); Siegfried's Wrath (Complete Operation Siegfried's Wrath on any difficulty); Delayed Retribution (Complete Operation Delayed Retribution on any difficulty); Glory or Attrition (Complete Operation Glory or Attrition on any difficulty); The Hydra (Complete Operation The Hydra on any difficulty); The Hammer (Complete Holding Attack campaign with NATO); The Anvil (Complete Holding Attack campaign with PACT); Resilience (Complete Closing the Trap campaign with NATO); Airdrop Denied (Complete Closing the Trap campaign with PACT)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play all sixteen single-player operations on any difficulty.",
                "2. Play each of the eight campaigns with NATO, then replay each with PACT.",
                "3. Do skirmish games against each AI level up to the hardest.",
                "4. Play multiplayer for the Conquest / Destruction wins and the 2v2 through 10v10 team wins.",
                "5. Reach Level 20 and add a friend.",
                "Tip: the 10v10 multiplayer win ('Party Animal') is the awkward one - a coordinated 10-stack lobby (or a large casual game where your side is clearly winning) is the reliable way to get it."
            ]
        }
    ]
};
