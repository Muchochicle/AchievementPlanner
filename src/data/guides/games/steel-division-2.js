// Steel Division 2 Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/steel-division-2.json), whose 58 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   919640 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "steel-division-2-achievement-guide",
    "category": "game",
    "gameSlug": "steel-division-2",
    "icon": "🪖",
    "title": "Steel Division 2 Achievement Guide",
    "summary": "A practical guide to all 58 Steam achievements in Steel Division 2 - none are hidden. Covers the base-game strategic campaigns and historical scenarios, and the DLC campaigns and scenarios.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Steel Division 2 has 58 Steam achievements and none of them are hidden. The base game covers winning each strategic campaign (Orscha, Bobruisk, Berezina, Baranovichi) and each historical scenario with both the Germans and the Soviets, plus multiplayer (Conquest, 2v2 up to 10v10), skirmish (beat easy through very-hard AI, win with each faction), and account levels. The rest are the DLC campaigns and scenarios - Vistula, Karelia, Iasi, Tiraspol, Turda and Dukla Pass, and the associated historical scenarios (River of Blood, Fighting Retreat, Escape from Brest, Memento Mori, Fate of a Nation, The Last Battle).",
                "Nothing is missable - campaigns, scenarios and skirmish are all replayable and there is no time-limited achievement. The completion's main gate is beating the very-hard skirmish AI and clearing the strategic campaigns, which are turn-based operational layers that take a few hours each.",
                "Tip: play every strategic campaign and historical scenario from both sides (the win just needs the victory condition, not a specific score), and do the multiplayer team-size achievements in a private lobby with friends or a co-op-vs-AI setup."
            ]
        },
        {
            "heading": "Base Game Campaigns & Scenarios",
            "body": [
                "Winning the Orscha, Bobruisk, Berezina and Baranovichi strategic campaigns with the Germans and the Soviets, winning each historical scenario (Stemming the Tide, Terminus Krupki, Cavalry Action, Last Hope, Desperate Measures, Autobahn zur Holle) with both sides, a Conquest multiplayer win, 2v2 / 3v3 / 4v4 / 10v10 wins, beating easy / medium / hard / very-hard AI in skirmish, a win with each faction, reaching levels 5 / 10 / 20, and adding a friend.",
                "The achievements here: Not a step back! (Win the Orscha strategic campaign with the Germans); Breakthrough! (Win the Orscha strategic campaign with the Soviets); Bobruisker (Win the Bobruisk strategic campaign with the Germans); Trapping the fascists! (Win the Bobruisk strategic campaign with the Soviets); Berezina, fateful waters ... (Win the Berezina strategic campaign with the Germans); Same place, different enemy ... (Win the Berezina strategic campaign with the Soviets); Death of an Army Group (Win the Baranovichi strategic campaign with the Germans); Red Triumph (Win the Baranovichi strategic campaign with the Soviets); Engagez-vous, rengagez-vous ... (Win the \"Stemming the Tide\" historical scenario with the Germans); Bobr, Berezina, Niemen... (Win the \"Stemming the Tide\" historical scenario with the Soviets); Last train for glory (Win the \"Terminus Krupki\" historical scenario with the Germans); Cat Hunt (Win the \"Terminus Krupki\" historical scenario with the Soviets); Vorwärts! (Win the \"Cavalry Action\" historical scenario with the Germans); Hurrah! (Win the \"Cavalry Action\" historical scenario with the Soviets); A New Hoppe (Win the \"Last Hope\" historical scenario with the Germans); Order No. 227 (Win the \"Last Hope\" historical scenario with the Soviets); Desperate assault (Win the \"Desperate Measures\" historical scenario with the Germans); Desperate resistance (Win the \"Desperate Measures\" historical scenario with the Soviets); Highway to Hell (Win the \"Autobähn zur Hölle\" historical scenario with the Germans); Stairway to Heaven (Win the \"Autobähn zur Hölle\" historical scenario with the Soviets); Conqueror (Win a multiplayer game in Conquest mode); Wingman (Win a 2v2 multiplayer game); Teammate (Win a 3v3 multiplayer game); Companiable (Win a 4v4 multiplayer game); Party Animal (Win a 10v10 multiplayer game); Captain (Beat an easy AI in skirmish mode); Colonel (Beat a medium AI in skirmish mode); General (Beat a hard AI in skirmish mode); Marshal (Beat a very hard AI in skirmish mode); Peacemaker (Win a game with each faction in skirmish mode); Rookie (Reach the level 5); Battle-Hardened (Reach the level 10); Veteran (Reach the level 20); With a little help from my friends… (Add one friend)."
            ]
        },
        {
            "heading": "DLC Campaigns & Scenarios",
            "body": [
                "Winning the Vistula, Karelia, Iasi, Tiraspol and Dukla Pass strategic campaigns with both sides, the Turda campaign with the Hungarians and the Romanians, and the DLC historical scenarios (River of Blood, Fighting Retreat, Escape from Brest, Memento Mori, Fate of a Nation, The Last Battle) with both the Soviets and the Germans.",
                "The achievements here: Polish Marshal (Win the Vistula strategic campaign with the Soviet); Warsaw has fallen (Win the Vistula strategic campaign with the Germans); Berlingowcy (Win the \"River of Blood\" historical scenario with the Soviets); River of Blood (Win the \"River of Blood\" historical scenario with the Germans); Cossack (Win the \"Fighting Retreat\" historical scenario with the Soviets); Hussar (Win the \"Fighting Retreat\" historical scenario with the Germans); Back to Brest (Win the \"Escape from Brest\" historical scenario with the Soviets); The Great Escape (Win the \"Escape from Brest\" historical scenario with the Germans\"); Bonecrusher (Win the \"Memento Mori\" historical scenario with the Soviets); Memento Mori (Win the \"Memento Mori\" historical scenario with the Germans); Red Finland (Win the Karelia strategic campaign with the Soviet); Free Finland (Win the Karelia strategic campaign with the Germans); Crossroad of Destiny (Win the \"Fate of a Nation\" historical scenario with the Soviets); Hanging by a thread (Win the \"Fate of a Nation\" historical scenario with the Germans); Remember Leningrad (Win the \"The Last Battle\" historical scenario with the Soviets); Finland won the peace (Win the \"The Last Battle\" historical scenario with the Germans); Killing Blow (Win the Iasi strategic campaign with the Soviet); Black Sunday (Win the Iasi strategic campaign with the Germans); Red Fortress (Win the Tiraspol strategic campaign with the Soviet); White Castle (Win the Tiraspol strategic campaign with the Germans); Annexation Complete (Win Turda campaign with the Hungarians); Immortal Transylvania (Win Turda campaign with the Romanians); Repression (Win the Dukla Pass strategic campaign with the German); Insurgent (Win the Dukla Pass strategic campaign with the Soviets)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the four base strategic campaigns, each from both the German and Soviet sides.",
                "2. Play the base historical scenarios, again from both sides.",
                "3. Do the skirmish achievements: beat each AI difficulty tier and win once with every faction.",
                "4. Do the multiplayer achievements (Conquest win, 2v2 through 10v10) in a friendly or co-op-vs-AI lobby.",
                "5. Play all the DLC strategic campaigns and historical scenarios from both sides.",
                "Tip: the strategic campaigns only need the campaign victory condition met, so on a lower difficulty you can often win by holding objectives and preserving your force rather than destroying the enemy - play conservatively and let the operational timer run out in your favour."
            ]
        }
    ]
};
