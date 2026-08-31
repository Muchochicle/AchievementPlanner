// Stray Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/stray.json), whose 24 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1332010 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 11 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (TrueAchievements / Steam Community / game wikis) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "stray-achievement-guide",
    "category": "game",
    "gameSlug": "stray",
    "icon": "🐱",
    "title": "Stray Achievement Guide",
    "summary": "A practical guide to all 24 Steam achievements in Stray (11 hidden). Covers the cat-antics milestones, the story and chase achievements, and the collectibles and extras. Eleven achievements are Steam-hidden and researched from community 100% guides.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Stray has 24 Steam achievements and eleven are Steam-hidden - the story-beat markers (meeting B-12, reaching Midtown, going to jail, opening the city), the two stealth challenges (the first Zurk chase uncaught, Midtown undetected), 'Pacifist' (Sewers with no Zurk kills), 'Scratch' (the nightclub record), 'Missed Jump' (a scripted fall) and 'I Remember!' (all B-12 memories). The open thirteen are cat antics (100 meows, 500 jumps, dunk the basketball, die 9 times), 'I Am Speed' (finish in under 2 hours), and collectibles (all music sheets, all badges, scratch in every chapter, browse every TV channel).",
                "The catalog marks it difficulty 2 and about two short runs. The game is only a few hours; the pointed achievements are 'Sneakitty', 'Pacifist', 'Can't Cat-ch Me' and the sub-2-hour speed run.",
                "Tip: do a relaxed first run for the story, memories, music sheets and badges, then a fast focused run for 'I Am Speed', 'Sneakitty' and 'Pacifist'."
            ]
        },
        {
            "heading": "Cat Antics & Milestones",
            "body": [
                "Meowing 100 times, jumping 500 times, sleeping over an hour, dunking the basketball, the Steam-hidden 'Can't Cat-ch Me' and 'Sneakitty' stealth runs, dying 9 times, the Steam-hidden 'Scratch' (nightclub record) and 'Pacifist' (Sewers, no Zurk kills), and 'I Am Speed' for finishing in under 2 hours.",
                "The achievements here: A Little Chatty (Meow 100 times.); Cat-a-Pult (Jump 500 times.); Productive Day (Sleep for more than one hour.); Boom Chat Kalaka (Dunk the basketball.); Can't Cat-ch Me (Complete the first Zurk chase without being caught.); Sneakitty (Get through Midtown without being detected by the Sentinels.); No More Lives (Die 9 times.); Scratch (In the nightclub, take the record from a table to the main stage, place it on the record player and interact with it to scratch the vinyl.); Pacifist (Complete the Sewers section without killing any Zurks.); I Am Speed (Complete the game in less than 2 hours.)."
            ]
        },
        {
            "heading": "Story & Chases",
            "body": [
                "The Steam-hidden story markers: the scripted 'Missed Jump', meeting B-12 ('Not Alone'), the first robot translation ('Cat Got Your Tongue?'), reaching Midtown ('Catwalk'), going to jail ('Al-Cat-Raz'), and opening the city at the end ('Eye Opener').",
                "The achievements here: Missed Jump (Story: miss the pipe jump at the end of the first chapter and fall into the walled city.); Not Alone (Story: meet B-12.); Cat Got Your Tongue? (Story: have B-12 translate a robot for you (during Chapter 4).); Catwalk (Story: reach Midtown.); Al-Cat-Raz (Story: get thrown in jail.); Eye Opener (Story: finish the game and open the city.)."
            ]
        },
        {
            "heading": "Collectibles & Extras",
            "body": [
                "Bringing all the music sheets to Morusque, wearing the paper bag, trying to play mahjong, nuzzling 5 robots, the Steam-hidden 'I Remember!' (all B-12 memories), browsing every TV channel, collecting all badges, and scratching in every chapter.",
                "The achievements here: Meowlody (Bring all the music sheets to Morusque.); Curiosity Killed the Cat (Wear the paper bag.); Cat-a-strophe (Try to play mahjong with the robots.); Cat's best friend (Nuzzle up against 5 robots.); I Remember! (Collect all of B-12's memories.); Télé à chat (Browse through all of the TV channels.); Badges (Collect all badges.); Territory (Scratch in every chapter.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. First run: explore fully - collect all B-12 memories ('I Remember!'), all music sheets ('Meowlody'), all badges, and do the small antics (basketball, mahjong, TV channels, nuzzles, paper bag).",
                "2. On that run the story-marker hidden achievements unlock automatically (Not Alone, Catwalk, Al-Cat-Raz, Cat Got Your Tongue?, Missed Jump, Eye Opener).",
                "3. Do the nightclub record for 'Scratch' and scratch in every chapter for 'Territory'.",
                "4. Second run: go fast for 'I Am Speed' (under 2 hours), and do 'Sneakitty' (Midtown undetected), 'Pacifist' (Sewers, no kills) and 'Can't Cat-ch Me' (first chase uncaught) along the way.",
                "5. Meow and jump counters ('A Little Chatty', 'Cat-a-Pult') and 'No More Lives' fill in naturally.",
                "Tip: 'Pacifist' and 'Can't Cat-ch Me' are single-section challenges - if you botch one, reload the chapter from the menu rather than restarting the whole run."
            ]
        }
    ]
};
