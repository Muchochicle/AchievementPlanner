// DRAGON BALL FighterZ Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/dragon-ball-fighterz.json), whose 35 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   678950 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 5 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (TrueAchievements / Steam Community / game wikis) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "dragon-ball-fighterz-achievement-guide",
    "category": "game",
    "gameSlug": "dragon-ball-fighterz",
    "icon": "🐉",
    "title": "DRAGON BALL FighterZ Achievement Guide",
    "summary": "A practical guide to all 35 Steam achievements in DRAGON BALL FighterZ (5 hidden). Covers the story and Arcade achievements, the local, practice and tournament achievements, and the online, Arena and currency achievements. Five achievements are Steam-hidden and researched from community 100% guides.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "DRAGON BALL FighterZ has 35 Steam achievements and five are Steam-hidden (completing the Enemy Warrior and Android 21 story arcs, defeating Clone Kid Buu, a special conversation, and 20,000,000 Zeni). The open thirty are Arcade course clears and an S Rank, the Super Warrior Arc, Link Level 20 and 40, all battle tutorials, a 5,000-damage combo, 30 / 100 / 200 Combo Challenges, ranked and casual online counts, Arena match counts, 530,000 BP, the Zeni milestones (1M, 5M) and the quest tutorials.",
                "The catalog marks it difficulty 3. The 200 Combo Challenges are the real grind (execution-heavy), and the online-match counts need active servers; the story and Arcade achievements are quick.",
                "Tip: clear all three story arcs and the Arcade courses first, then work through the Combo Challenges, and play online for the ranked/casual/Arena counts."
            ]
        },
        {
            "heading": "Story & Arcade",
            "body": [
                "Completing the Snake Way, Extreme Gravity and Hyperbolic Time Chamber Arcade courses, an S Rank on any course, the Super Warrior Arc, the Steam-hidden Enemy Warrior and Android 21 arcs, Link Level 20 and 40, and the Steam-hidden 'Bye-Bye Buu' (Clone Kid Buu) and 'Conversationalist' (special conversation).",
                "The achievements here: Snake Way Sensei (Arcade - Complete the Snake Way Course.); Extreme Gravity Guru (Arcade - Complete the Extreme Gravity Spaceship Course.); Hyperbolic Heavyweight (Arcade - Complete the Hyperbolic Time Chamber Course.); Care to Become the next God of Destruction? (Arcade - Complete a course with an S Rank.); I am Goku, the Legendary Super Saiyan! (Story - Complete the Super Warrior Arc.); Ho ho ho... What an Unexpected Thrill (Story - Complete the Enemy Warrior Arc.); My Appetite...Is Insatiable...! (Story - Complete the Android 21 Arc.); Link Level 20 (Story - Raise Link Level to 20.); Link Level 40 (Story - Raise Link Level to 40.); Bye-Bye Buu (Story - Defeat Clone Kid Buu.); Conversationalist (Story - Trigger a special conversation sequence between characters.)."
            ]
        },
        {
            "heading": "Local, Practice & Tournament",
            "body": [
                "Playing a Local Battle, winning a Tournament, completing all battle tutorials, a 5,000+-damage Training Mode combo, and completing 30, 100 and 200 different Combo Challenges.",
                "The achievements here: To Test Myself, I Too Will Fight (Local Battle - Play a match.); Ladies and Gents, We Have a Winner! (Tournament - Emerge as champion.); Battle-Ready (Practice - Complete all battle tutorials.); Practice Makes Perfect (Practice - Perform a combo that deals 5000 or more damage in Training Mode.); Don't Underestimate Earth! (Practice - Complete 30 Different Combo Challenges.); The Power to Go Beyond the Super Saiyan! (Practice - Complete 100 Different Combo Challenges.); Before Creation Comes Destruction... (Practice - Complete 200 Different Combo Challenges.)."
            ]
        },
        {
            "heading": "Online, Arena & Currency",
            "body": [
                "Playing 1 / 10 / 20 Ranked Matches, 530,000 BP, 10 / 20 Casual Matches, playing / watching Arena Matches (1 / 10 / 20), a Replay Z Stamp, 1,000,000 and 5,000,000 Zeni, the Steam-hidden 20,000,000 Zeni ('Set for Life'), and completing 1 and 7+ quest tutorials.",
                "The achievements here: Goku Isn't the Only Super Saiyan... (World Match - Play a Ranked Match.); You Can't Win This... (World Match - Play 10 Ranked Matches.); This Pain Will Make Me Stronger! (World Match - Play 20 Ranked Matches.); My Power Level is 530,000 (World Match - Acquire 530,000 BP.); Casual Combatant (World Match - Play 10 Casual Matches.); Arena Enthusiast (Arena Match - Play a match.); Arena Expert (Arena Match - Play 10 matches.); Just Looking (Arena Match - Observe a match.); It's Play Time! (World Match - Play a Casual Match.); Lemme Play Too! (World Match - Play 20 Casual Matches.); Stamp of Approval (Replay - Use a Z Stamp while watching a Replay Channel.); Deep Pockets (Acquire 5,000,000 Zeni throughout the course of playing.); Arena Aficionado (Arena Match - Play 20 matches.); Set for Life (Acquire 20,000,000 Zeni over the course of playing.); Millionaire (Acquire 1,000,000 Zeni throughout the course of playing.); Yo, I'm Goku! (Complete a quest tutorial.); Farewell, Tien... (Complete seven or more quest tutorials.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play all three story arcs (Super Warrior, Enemy Warrior, Android 21) - that covers 'Bye-Bye Buu' and the Link Level and arc achievements.",
                "2. Clear the Arcade courses and get an S Rank on one.",
                "3. Do all battle tutorials and quest tutorials, and land a 5,000-damage combo.",
                "4. Grind the Combo Challenges to 200.",
                "5. Play online for the Ranked/Casual/Arena counts and 530,000 BP, and let Zeni accumulate toward 'Set for Life' (20M).",
                "Tip: 'Conversationalist' triggers when specific character pairs are on screen in story mode - it usually pops naturally during the arcs, but if not, replay chapters with different squad compositions."
            ]
        }
    ]
};
