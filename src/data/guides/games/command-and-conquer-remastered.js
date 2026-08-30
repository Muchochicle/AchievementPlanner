// Command & Conquer Remastered Collection Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/command-and-conquer-remastered.json), whose 33 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1213210 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "command-and-conquer-remastered-achievement-guide",
    "category": "game",
    "gameSlug": "command-and-conquer-remastered",
    "icon": "💣",
    "title": "Command & Conquer Remastered Collection Achievement Guide",
    "summary": "A practical guide to all 33 Steam achievements in Command & Conquer Remastered Collection - none are hidden. Covers the Tiberian Dawn campaigns and missions, and the Red Alert campaigns and cross-game milestone achievements.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Command & Conquer Remastered Collection has 33 Steam achievements and none of them are hidden. Roughly half are Tiberian Dawn - finishing the GDI and Nod campaigns, all Covert Operations and Spec Ops bonus missions, every mission on the hardest difficulty, the secret Fun Park missions, the Ion Cannon and Bonus Gallery feats. The other half is Red Alert - the Allied and Soviet campaigns, the Counterstrike and Aftermath mission packs, the \"It came from Red Alert\" ant missions, and hardest difficulty. A handful are cross-game cumulative milestones (collectively build 500 tanks, 1,000 infantry, 500 aircraft; fire 100 super weapons; capture 20 structures) plus skirmish and multiplayer match counts.",
                "Nothing is missable - every mission and mode can be replayed, and the cumulative counters carry across all sessions. The completion's main gates are the two hardest-difficulty campaign clears (The Best Around and DEFCON None.) and the cross-game build/capture grinds, which are fastest in skirmish.",
                "Tip: play both games' main campaigns straight through on the hardest difficulty from the start - a completed hard mission also credits the normal one - and let the cumulative build and destroy counters fill up during long skirmish games against easy AI afterward."
            ]
        },
        {
            "heading": "Tiberian Dawn Campaigns & Missions",
            "body": [
                "Finishing the GDI and Nod campaigns, all Covert Operations and Spec Ops bonus missions, all Tiberian Dawn missions on the hardest difficulty, 10 played and 5 won skirmish matches, 10 multiplayer matches, the Ion Cannon Temple of Nod kill, the Fun Park missions, GDI and Nod Mission 1, 500 tanks and 1,000 infantry built across sessions, the Tiberian Dawn Bonus Gallery, and a Jukebox playlist.",
                "The achievements here: The Eagle has Landed (Finish the final mission of the GDI campaign); I did Nod See that Coming! (Finish the final mission of the Nod campaign); Cloak and Daggers (Complete all Covert Operations missions in Tiberian Dawn); Console Madness (Complete all Spec Ops bonus missions in Tiberian Dawn); The Best Around (Complete all Tiberian Dawn missions on the hardest difficulty); Befriend the Robot Overlords (Play 10 skirmish matches between Tiberian Dawn and Red Alert); Destroy the Robot Overlords (Win 5 skirmish matches between Tiberian Dawn and Red Alert); Making Friends (Play 10 multiplayer matches (any settings, including comp stomp)); Death From Above (Use the Ion Cannon to finish off the Temple of Nod in the GDI campaign); Life... Finds a Way (Complete the Fun Park missions in Tiberian Dawn); Capture X16-Y42 (Complete GDI Mission 1); Nikoomba's Demise (Complete Nod Mission 1); Tanks A Lot! (Collectively build 500 tanks across all sessions between Tiberian Dawn and Red Alert.); To the Front Lines! (Collectively build 1,000 infantry across all sessions between Tiberian Dawn and Red Alert); Tiberian Historian (Unlock all Bonus Gallery content in Tiberian Dawn); Act on Instinct (Create a playlist in the Jukebox in Tiberian Dawn)."
            ]
        },
        {
            "heading": "Red Alert Campaigns & Cross-Game Milestones",
            "body": [
                "The Allied and Soviet campaigns, the Counterstrike and Aftermath missions, the \"It came from Red Alert\" ant missions, all Red Alert campaigns on the hardest difficulty, rescuing Einstein, the Soviet Mission 1 village destruction, 50 Navy ships and 100 super weapons and 500 aircraft built/fired across sessions, 100 units destroyed in one mission, capturing an enemy Construction Yard and 20 structures total, the Red Alert Bonus Gallery, a Jukebox playlist, and 100 buildings destroyed with Commando/Tanya C4.",
                "The achievements here: No Remorse (Complete the Allied Campaign); Crush the Resistance (Complete the Soviet Campaign); Electrotherapy (Complete the Counterstrike Missions); Time is only a concept (Complete the Aftermath missions); Ants? (Complete all the \"It came from Red Alert\" missions); DEFCON None. (Complete all the Red Alert campaigns missions on hardest difficulty); Time will Tell (Rescue Einstein in Allies Mission 1); No Survivors (Destroy the village and populace in Soviet Mission 1); Ship Happens (Collectively build 50 Navy ships across all sessions in Red Alert); Short Fuse (Collectively fire 100 super weapons across all sessions in Tiberian Dawn and Red Alert); Mission Casualties (Destroy 100 units in a single mission); High Anxiety (Collectively build 500 aircraft across all sessions in Tiberian Dawn and Red Alert.); A Bit of Everything (Capture an opposing Construction Yard of a different faction in Tiberian Dawn or Red Alert.); All of Everything (Capture 20 structures across all sessions in Tiberian Dawn and Red Alert.); Red Alert Historian (Unlock all Bonus Gallery content in Red Alert); Hell March (Create a playlist in the Jukebox in Red Alert); I've got a present for ya! (Collectively destroy 100 buildings with C4 across all sessions using the Commando in Tiberian Dawn, or Tanya in Red Alert.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the Tiberian Dawn GDI and Nod campaigns on the hardest difficulty (this credits the normal completions too).",
                "2. Do the Tiberian Dawn bonus content: Covert Operations, Spec Ops, the Fun Park missions, and the Bonus Gallery.",
                "3. Play the Red Alert Allied and Soviet campaigns on the hardest difficulty, then the Counterstrike, Aftermath and ant mission packs.",
                "4. Do the skirmish and multiplayer match-count achievements (10 played / 5 won skirmish, 10 multiplayer) - comp stomps count.",
                "5. Grind the cross-game cumulative milestones (tanks, infantry, aircraft, ships, super weapons, captures, C4 kills) in long skirmish games against easy AI.",
                "Tip: the cumulative build achievements count every unit across every session, so a single skirmish where you spam cheap units - riflemen for the 1,000-infantry feat, light tanks for the 500-tank feat - on a high-credit map clears several of them at once."
            ]
        }
    ]
};
