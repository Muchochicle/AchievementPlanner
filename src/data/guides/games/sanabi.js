// SANABI Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/sanabi.json), whose 21 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1562700 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 3 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (PowerPyx / Game8 / PlayStationTrophies / TrueAchievements) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "sanabi-achievement-guide",
    "category": "game",
    "gameSlug": "sanabi",
    "icon": "🪝",
    "title": "SANABI Achievement Guide",
    "summary": "A practical guide to all 21 Steam achievements in SANABI (3 hidden). Covers the chapter boss fights and story beats, both endings, the time-attack record medals, and the Spin-Off DLC episode. Three of the achievements are hidden - the chapter 4 boss and the two endings - and their conditions are researched from community 100% guides.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "SANABI has 21 Steam achievements and 3 are hidden. The hidden three are 'Mutiny' (defeat Major Song at the end of Chapter 4), 'What's important is seeing this through to the end.' (the bad ending - at the Chapter 4 ending choice, go right) and 'Farewell' (the true ending - finish Chapter 5). Everything visible is the other chapter bosses and beats (Kang Seon, the giant mechanical worm, the Chapter 1 boss, the talk with Mari, Justice, the core guardian, the Overseer, the Firebird, encountering every truth), the daughter roleplay and cat achievements, the time-attack medals (beat your own record, then Major Song's), and the four Spin-Off DLC achievements.",
                "The catalog marks it difficulty 3. SANABI is a short, fast grappling-hook action game; the story and boss achievements come from a single playthrough, and the two endings need you to make (or reload for) both choices in Chapter 4. The time-attack medals are the only real skill check.",
                "Tip: get the bad ending first by going right at the Chapter 4 choice, then reload and go the other way for the true ending and 'Farewell' - you cannot see both on one run."
            ]
        },
        {
            "heading": "Story & Endings",
            "body": [
                "Defeating Kang Seon, the giant mechanical worm, the Chapter 1 boss ('Fishing'), the talk with Mari, Justice, the core guardian, the Overseer, the Firebird, Major Song at the end of Chapter 4 ('Mutiny'), encountering every truth, the bad ending, and the true ending 'Farewell' for finishing Chapter 5.",
                "The achievements here: You should have seen who you were attacking (Defeat Kang Seon.); City cleaning department (Encountered a noisy giant mechanical worm.); Fishing (You need a large bait for a large prey.); Organizing Positions (Had a deep discussion with Mari.); Pitiful hero (Defeated Justice.); Core Keeper (Escaped from the core guardian.); In the Factory King’s palace (Escaped from the Overseer.); Hovering Hellfire (Defeated the Firebird.); Mutiny (Defeat Major Song at the end of Chapter 4.); The unfolding truth (Encountered every truth.); What’s important is seeing this through to the end. (Reach the bad ending - at the Chapter 4 ending choice, go right.); Farewell (Reach the true ending by finishing Chapter 5 (take the other Chapter 4 choice).)."
            ]
        },
        {
            "heading": "Challenges & Spin-Off DLC",
            "body": [
                "The daughter roleplay and 'Special Forces Cat' achievements, 'The legend has returned', the time-attack medals (beat your own record, then Major Song's), and the four Spin-Off DLC achievements - defeating Recommendation of Execution, the Bulgasal, clearing the episode, and its no-hit 'Government-Certified Living Weapon'.",
                "The achievements here: There is nowhere to run (Roleplaying with your daughter is the most sacred duty.); Special Forces Cat (Received the kitty member’s recognition.); Undeteriorating Skill (Beat your own record.); Taking the lead (Beat Major Song’s record.); The legend has returned (The once legend, YOU have returned.); Prototype (Defeated Recommendation of Execution.); Supernatural Phenomena (Defeated the Bulgasal.); An Ending Marks a New Start (Cleared the Spin-Off episode.); Government-Certified Living Weapon (Nothing but ashes mark the path scorched by the monster that is you.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through the story, defeating each chapter's boss and encountering every truth.",
                "2. At the Chapter 4 ending choice, go right for the bad ending.",
                "3. Reload and take the other path to finish Chapter 5 for the true ending ('Farewell').",
                "4. Do the daughter roleplay and cat side-achievements, and beat your own then Major Song's time record.",
                "5. Play the Spin-Off DLC episode, including its no-hit clear.",
                "Tip: the time-attack medals are on individual stages - once you have a clear, replay a short early stage focusing purely on grapple momentum and you will beat both your own and Major Song's records on the same run."
            ]
        }
    ]
};
