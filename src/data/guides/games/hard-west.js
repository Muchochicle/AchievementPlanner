// Hard West Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/hard-west.json), whose 35 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   307670 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "hard-west-achievement-guide",
    "category": "game",
    "gameSlug": "hard-west",
    "icon": "🤠",
    "title": "Hard West Achievement Guide",
    "summary": "A practical guide to all 35 Steam achievements in Hard West - none are hidden. Covers the per-scenario challenge achievements, the eight scenario completions and the two endings, the difficulty and tactical feats, and the Scars of Freedom DLC. None of the achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Hard West has 35 Steam achievements and none are hidden. Six are optional objectives inside specific scenarios (finishing the Aspirton bank job before the demons arrive, keeping massacres low in 'Law & Order', nobody hungry in 'Graveyard Shift', and so on), ten cover completing each scenario plus both endings and 'Once Upon a Time in the Weird West' for all of them, fourteen are difficulty and tactical feats (Ironman+Injuries on Hard, no-shot missions, ricochet kills, sure-shot-only runs), and five are the Scars of Freedom DLC.",
                "The catalog marks it difficulty 4. The story runs are manageable, but 'Welcome to Even Harder Times' asks for every scenario cleared on Hard, every scenario with Injuries and every scenario with Ironman, and several tactical achievements impose harsh restrictions on a single encounter.",
                "Tip: play the campaign once on Normal for the scenario and ending achievements and most of the tactical feats, then do a focused Hard + Ironman + Injuries pass scenario by scenario."
            ]
        },
        {
            "heading": "Scenario Challenges",
            "body": [
                "Optional in-scenario objectives: the timed Aspirton bank robbery, at most 2 massacres in 'Law & Order', nobody ever hungry in 'Graveyard Shift', two fully developed tech domains in 'Method in Madness', at most 50 peons dead in 'In Gold We Trust', and killing Joaquim Perez with the Canon Calavera.",
                "The achievements here: The Aspirton Incident (Complete the Aspirton Bank Robbery in \"As Good as Dead\" before demons arrive.); His Leniency, The Inquisitor (Complete \"Law & Order\" having committed at most 2 massacres.); Through Thick and Thick (Complete \"Graveyard Shift\" without anyone being hungry at any time.); Double Excellence (Fully develop two technological domains during \"Method in Madness\".); Daring but Careful (Complete \"In Gold We Trust\" with no more than 50 peons dead.); What Goes Around, Comes Around (Kill Joaquim Perez with the Cañón Calavera.)."
            ]
        },
        {
            "heading": "Scenario Completions & Endings",
            "body": [
                "Completing each of the eight scenarios ('As Good as Dead', 'Law & Order', 'Graveyard Shift', 'A Matter of Time', 'Method in Madness', 'In Gold We Trust', 'Hard Times'), both endings ('On Earth, as It Is in Hell' and 'Requiem for a Gunfighter'), and 'Once Upon a Time in the Weird West' for all scenarios.",
                "The achievements here: Vengeance Served Cold (Complete \"As Good as Dead\".); Drowned in Blood (Complete \"Law & Order\".); The Meaning of Life (Complete \"Graveyard Shift\".); A Gift Scorned (Complete \"A Matter of Time\".); Sanity Engineered (Complete \"Method in Madness\".); Everlasting Fame and Fortune (Complete \"In Gold We Trust\".); Raw Deal (Complete \"Hard Times\".); On Earth, as It Is in Hell (Establish Warren's new world order.); Requiem for a Gunfighter (Restore order in the Weird West.); Once Upon a Time in the Weird West (Complete all Scenarios.)."
            ]
        },
        {
            "heading": "Difficulty & Tactical Feats",
            "body": [
                "The Hard/Ironman/Injuries achievements, plus single-encounter feats: Equalization openings, unlocking all Trinkets, Rusty Peashooter-only and sure-shot-only missions, 30 different characters used, blind-shot kills, a no-shot mission, 25 usable items, a 3-object ricochet kill, a demon-form demon kill, a Five of a Kind hand, and a first-action kill.",
                "The achievements here: Welcome to Hard Times (Complete a single Scenario on Hard difficulty, with both Ironman and Injuries enabled.); Welcome to Even Harder Times (Complete every Scenario on Hard, every Scenario with Injuries and every Scenario with Ironman enabled.); Sudden Death (Use Equalization in the first combat turn, then complete the mission without raising your characters' Hit Points with items.); The Searcher (Unlock all Trinkets in the game.); Arizona Colts (Complete any tactical encounter without firing weapons other than the Rusty Peashooter.); The Shootist (Complete any tactical encounter firing sure shots (100% Chance to Hit) exclusively.); The Wild Bunch (Use at least 30 different characters during tactical encounters throughout the game.); Blind Justice (Kill 10 enemies with blind shots (no line of sight)); Fight No More Forever (Complete any tactical mission without firing a shot.); Treasures of the Sierra Madre (Use 25 different usable items at least once.); Trickshooter (Kill an enemy with a bullet ricocheting off at least 3 different objects.); Brimstone Killer (Kill a demon while your character is in demon form.); Aces in the Hole (Assemble the Five of a Kind hand.); Fastest Gun in the West (Kill an enemy in the very first action in a tactical encounter.)."
            ]
        },
        {
            "heading": "Scars of Freedom DLC",
            "body": [
                "Completing 'Scars of Freedom', completing a Golem hand and a fight with that character, the two-hero train assault, winning a liver at dice, and collecting 75 Ether in one encounter.",
                "The achievements here: Scars of Freedom (Complete 'Scars of Freedom'.); Dr Frankenstein (Complete any of the 'Golem' hands on a character and complete at least one combat encounter with that character.); Army of Two (Complete the train assault with just Libertee and Phineas in your posse.); High Stakes (Win a liver in a game of dice.); Human Resources (Collect at least 75 Ether from enemies fallen in one combat encounter.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the campaign on Normal, doing each scenario's optional challenge objective as you reach it.",
                "2. Pick up the tactical feats opportunistically (ricochet kill, blind shots, first-action kill, no-shot mission).",
                "3. Finish both endings and 'Once Upon a Time in the Weird West'.",
                "4. Do a Hard run with Ironman and Injuries enabled, scenario by scenario, for 'Welcome to Hard Times' and 'Welcome to Even Harder Times'.",
                "5. Play the Scars of Freedom DLC for its five achievements.",
                "Tip: many tactical feats ('Fight No More Forever', 'Arizona Colts', 'The Shootist') are easiest on the shortest, most controllable encounter you can find - reload that one encounter until it lines up rather than attempting them mid-mission."
            ]
        }
    ]
};
