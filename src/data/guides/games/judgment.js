// Judgment Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/judgment.json), whose 47 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   2058180 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 10 achievement(s) are Steam-hidden or ship no Steam
//   description; their description here is researched from community
//   100% guides and is a curatorial summary. Every other description is
//   Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "judgment-achievement-guide",
    "category": "game",
    "gameSlug": "judgment",
    "icon": "🕵️",
    "title": "Judgment Achievement Guide",
    "summary": "A practical guide to all 47 Steam achievements in Judgment (10 hidden). Six hidden achievements are missable one-off story moments (a first-try court presentation, an exact dialogue set, a timed rescue); the other four are minigame completion goals (drone races, the Paradise VR board game, the final side case, the landlady's meals). Everything else - chapter markers, side cases, friends, skills, KamuroGo and shopping - carries Steam's own text.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Judgment has 47 Steam achievements, 10 of them hidden. Disgraced lawyer turned private eye Takayuki Yagami investigates a serial murder case tangled up with the Tojo Clan in Kamurocho. The visible achievements cover the chapter-completion markers, the LEGEND-difficulty clear, clearing side cases, making friends, the girlfriend events, learning skills, the KamuroGo shop and city missions, the drone, the stray cats and the Kamuro of the Dead minigame.",
                "Six of the 10 hidden achievements are missable one-off story moments: doubling your casino chips, fully investigating Terasawa, an exact three-answer conversation, first-try gambling-hall passphrases, saving Sugiura with under 10 seconds left, and a first-try evidence presentation in the finale trial. The other four are completion goals for the drone races, the Paradise VR board game, the final 'A Final Request' side case (an Amon fight), and eating all of landlady Tomioka's meals.",
                "The catalog marks it difficulty 3 and two playthroughs (LEGEND unlocks after the first clear). The six story-hidden achievements each have a single window - use a checklist on your first run or expect a full replay."
            ]
        },
        {
            "heading": "Main Story",
            "body": [
                "The chapter-completion markers, the finale, the LEGEND clear, and the six missable one-off story moments paired with them.",
                "The achievements here: The Greatest Detective (Obtain all other achievements.); The Game is Afoot (Retrieved the money from the Horseplayer Detective.); Trust Issues (Completed Chapter 2.); I'll Make it Double (Double your chips at the casino, starting from 300, in blackjack or poker (available around Chapter 2).); Skeletons in the Closet (Completed Chapter 4.); Way Too Thorough! (Fully investigate Terasawa during the Chapter 4 search sequence.); The Kansai Factor (Completed Chapter 6.); The Art of Conversation (Give the exact answers 'Three Times', 'Can I talk to Moon' and 'Chateaubriand, Blue' during a Chapter 6 conversation.); Blowing the Lid Off (Completed Chapter 8.); Professional Password Presenter (Give the correct passphrases on the first attempt to enter the Champion District underground gambling hall in Chapter 8.); Enemies of My Enemies (Completed Chapter 10.); Hung Jury (Save Sugiura with less than 10 seconds left on the timer in Chapter 10.); Politics of Justice (Completed Chapter 12.); The Final Nail (Present the correct evidence to the judge on the first try during the finale court session.); Thank You! (Completed all of the main story.); Detective of Legend (Completed the game on LEGEND difficulty.)."
            ]
        },
        {
            "heading": "Side Cases, Friends & Skills",
            "body": [
                "Clearing side cases, building the friend network, the girlfriend events, and learning skills.",
                "The achievements here: On the Case (Cleared 10 side cases.); Local Detective (Cleared 30 side cases.); Got to the Bottom of It (Cleared all of the side cases.); A Friendly Guy (Made 10 friends.); A Popular Guy (Made 30 friends.); A Guy Everybody Knows (Made 50 friends.); Going Steady (A girl revealed her true feelings.); Ladies, Please (Two girls revealed their true feelings.); Now You're Just Bragging (Four girls revealed their true feelings.); Skill Dabbler (Obtained 30 skills.); Skill Pro (Obtained 60 skills.); Skill Master (Obtained all skills.)."
            ]
        },
        {
            "heading": "KamuroGo & Shopping",
            "body": [
                "The KamuroGo mobile-game shop and city missions, and the pawn/shop spending milestones.",
                "The achievements here: KamuroGo Shopper (Completed five stores in KamuroGo's Shop Missions.); KamuroGo Trendsetter (Completed 10 stores in KamuroGo's Shop Missions.); KamuroGo Socialite (Completed all of KamuroGo's Shop Missions.); KamuroGo Tourist (Completed 10 KamuroGo City Missions.); KamuroGo Local (Completed 30 KamuroGo City Missions.); KamuroGo Guide (Completed all KamuroGo City Missions.); Pawn Star (Sold 100 items to Ebisu Pawn.); Retail Therapy (Shopped 100 times.)."
            ]
        },
        {
            "heading": "Minigames & Completion",
            "body": [
                "The drone (flight time, first-person, all parts, winning every race), the stray cats, Kamuro of the Dead, the Paradise VR board game, every arcade game, the final side case, the landlady's meals, and 100% KamuroGo completion.",
                "The achievements here: The Bird's the Word (Controlled the drone for over an hour.); Electronic Perspective (Flew the drone in first person mode for 60 seconds.); Oh Look, a Cat! (Found all the stray cats while in search mode during the main story.); Zombie Apocalypse Survivor (Obtained 50 pickups in Kamuro of the Dead.); Drone Champion (Win first place in every D-League drone race.); Drone Enthusiast (Obtained all drone parts.); Yagami Party (Complete every Dice & Cube board-game course and rule set at Paradise VR.); The Gamer Life (Played every arcade game.); He Just Doesn't Quit (Defeat Shin Amon in the final side case 'A Final Request', which unlocks after clearing every other side case.); Pay Your Rent, Yagami (Befriend the agency landlady Tomioka and eat every one of her home-cooked meals to max her friendship.); KamuroGo Master (Achieved 100% completion of KamuroGo. Wow!)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. On your first run, keep a checklist for the six missable story-hidden moments - each has one window and cannot be replayed without a full new playthrough.",
                "2. Play the story for the chapter markers and finish it for Thank You!.",
                "3. Clear every side case (this unlocks 'A Final Request' and the Shin Amon fight for He Just Doesn't Quit), build 50 friends, and learn every skill.",
                "4. Work the KamuroGo shop and city missions, the drone parts and every D-League race, and the Paradise VR board-game courses.",
                "5. Do a LEGEND-difficulty run for Detective of Legend, then clean up 100% KamuroGo completion and the platinum.",
                "Tip: the friend network feeds several achievements at once - many friends are tied to side cases, the landlady Tomioka's meals, and skill unlocks, so prioritise befriending everyone early and the side-case, skill and 'Pay Your Rent' achievements largely fill themselves in."
            ]
        }
    ]
};
