// Lost Judgment Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/lost-judgment.json), whose 56 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   2058190 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 13 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (PowerPyx / Game8 / PlayStationTrophies / TrueAchievements) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "lost-judgment-achievement-guide",
    "category": "game",
    "gameSlug": "lost-judgment",
    "icon": "🔍",
    "title": "Lost Judgment Achievement Guide",
    "summary": "A practical guide to all 56 Steam achievements in Lost Judgment (13 hidden). Covers the main story chapters, the School Stories investigations, the side cases and the Amon superboss, the detective-tool and minigame achievements, and the Kaito Files DLC. Thirteen of the achievements are hidden - the Professor investigation, the free skateboard, the Amon fight, the girlfriend chain, Squirrel Search, and the five Kaito Files chapters - and their unlock conditions are researched from community 100% guides.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Lost Judgment has 56 Steam achievements and 13 are hidden. Most visible ones are story-chapter completions and the huge slate of side content (TownGo, Dance Club, Robotics, Boxing, drone racing, skateboarding, side cases, skills). The hidden ones are: completing the Professor's School Stories investigation, getting the skateboard for free, defeating the Amon superboss after 41 side cases, the girlfriend chain (asked out by one, two, three and four girls), completing all of Squirrel Search, and the five achievements of The Kaito Files DLC (its four chapters plus defeating all masked warriors).",
                "The catalog marks it difficulty 3. Nothing is missable - the city stays open after the story and Premium Adventure lets you finish every side case, School Story, minigame and TownGo mission afterward. The two real time sinks are 'Elementary, My Dear' (all base-game side cases, which also gates the Amon fight) and the various 'all skills / all equipment / all records' completion achievements.",
                "Tip: keep taking side cases from notice boards as you play - you need the first 41 done to unlock the final case that triggers the Amon superboss, and clearing all of them is also one of the longest achievements, so start early rather than saving them for Premium Adventure."
            ]
        },
        {
            "heading": "Main Story & Investigations",
            "body": [
                "Resolving Keiko's dilemma, the Seiryo High bullying, the chapter completions through Chapter 12, the highest-difficulty clear, and the Dance Club, Robotics, Boxing, Biker and Professor School Stories investigations.",
                "The achievements here: Master Detective (Obtained all achievements.); The Game is Afoot (Resolved Keiko's dilemma.); The First Penguin (Stopped the bullying at Seiryo High School.); Trending Video (Completed Chapter 4.); Unexpected Guests (Completed Chapter 6.); All Are Punished (Completed Chapter 7.); To Survive (Completed Chapter 8.); Lessons Taught (Completed Chapter 9.); The Mole (Completed Chapter 11.); Scales of Justice (Completed Chapter 12.); The Cycle is Broken (Thank you for playing to the end!); Legendary Detective (Beat the main story on the highest difficulty.); Hop, Step, Rabbits (Completed the investigation of the dance club.); Revenge of the Nerds (Completed the investigation of the robotics club.); Everybody Can Change (Completed the investigation of the boxing gym.); Born to Ride (Completed the investigation of the biker gang.); High School Drama (Complete the investigation of the Professor (School Stories side content).)."
            ]
        },
        {
            "heading": "Side Cases, Skills & Detective Tools",
            "body": [
                "Clearing 10, 30 and all side cases, the skateboard, making an enemy surrender, the Amon superboss, the four detective-tool finds (Observation Mode, Detector, Noise Amp, dog), the first girlfriend, and obtaining 30, 100 and all skills.",
                "The achievements here: On the Case (Cleared 10 Side Cases.); Private Eye (Cleared 30 Side Cases.); Elementary, My Dear (Cleared all Side Cases (not including DLC).); Kick Flip (Get the skateboard for free (story-related).); Merciful (Made one enemy surrender.); A Man Among Amons (Defeat the Amon superboss - after completing the first 41 side cases, take the final case from the Yokohama 99 notice board.); Very Observant (Find ten targets in Observation Mode.); Receiving Signals (Find ten targets with the Detector.); Eavesdropping (Find ten targets with the Noise Amp.); Who's a Good Boy? (Find ten targets with the dog.); Irresistible Charm (Get asked out by a girl (progress School Stories to the Girls' Bar investigation to unlock dating).); Skill Dabbler (Obtained 30 skills.); Skill Pro (Obtained 100 skills.); Skill Master (Obtained all skills.)."
            ]
        },
        {
            "heading": "TownGo, Minigames & The Kaito Files",
            "body": [
                "The TownGo shop, city and school missions and 100% completion, all equipment, skateboards and records, Squirrel Search, drone racing, Dice & Cube, Aircelios, the skateboard race, Hama of the Dead, every arcade game, the rest of the girlfriend chain, and the five Kaito Files DLC achievements (its four chapters and defeating all masked warriors).",
                "The achievements here: TownGo Casual (Completed 30 stores in TownGo's Shop Missions.); TownGo Whale (Completed all of TownGo's Shop Missions.); TownGo Tourist (Completed 20 TownGo City Missions.); TownGo Tour Guide (Completed all TownGo City Missions.); TownGo Freshman (Completed ten TownGo School Missions.); TownGo Senior (Completed all TownGo School Missions.); TownGo Master (Achieved 100% completion of TownGo. Wow!); An Ounce of Prevention (Obtained all equipment.); Skate or Die (Obtained all skateboards.); Sweet Jams (Obtained all records.); Bad Fur Day (Complete all of Squirrel Search (find all 56 squirrel graffiti across Yokohama and Kamurocho).); The Aviator (Won first place in every Grand Prix drone race.); Party Star (Clear all of the stages in Dice & Cube.); No Blind Spots in Any Direction (Completed the final stage of Aircelios.); Yagami Pro Skater (Get first place on the final course of the skateboard race.); Suffer Like G Did (Obtained 50 pickups in Hama of the Dead.); The Gamer Life (Played every arcade game.); Such a Flirt (Get asked out by two girls.); Hopeless Romantic (Get asked out by three girls.); All's Fair in Love (Get asked out by four girls.); What Goes Around (Complete Chapter 1 of The Kaito Files DLC.); Like Father, Like Son (Complete Chapter 2 of The Kaito Files DLC.); Out for Blood (Complete Chapter 3 of The Kaito Files DLC.); Cat & Mouse (Complete Chapter 4 of The Kaito Files DLC.); Escaping a Daydream (Defeat all masked warriors (The Kaito Files DLC finale).)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the main story to completion, letting the chapter achievements unlock.",
                "2. Work through the School Stories investigations (Dance, Robotics, Boxing, Biker, Professor) as they open up.",
                "3. Take side cases constantly - clear the first 41 to unlock the Amon superboss, then finish the rest for 'Elementary, My Dear'.",
                "4. Grind the completion achievements (all skills, all equipment, all records, 100% TownGo, Squirrel Search) and the minigames in Premium Adventure.",
                "5. Play The Kaito Files DLC - all four chapters and defeating all masked warriors for 'Escaping a Daydream'.",
                "Tip: the girlfriend chain ('asked out by' one through four girls) runs through the Girls' Bar School Story and dating side content - progress a few dates with each girl rather than maxing one out, since the achievements only need the initial ask-out."
            ]
        }
    ]
};
