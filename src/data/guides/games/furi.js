// Furi's Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/furi.json), whose 33 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   423230 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js) - 19 of 33 ship a real,
//   official Steam description, quoted directly below.
// - The 9 Guardian-defeat achievements, the 3 ending achievements, and
//   the 2 "meet The Voice" achievements are hidden achievements Steam
//   never describes publicly (confirmed via the same API call) - their
//   descriptions here are curatorial, cross-checked against
//   independent community documentation (Steam Community and
//   TrueAchievements-style guides) of their real unlock conditions:
//   which Guardian each corresponds to, which of the three endings each
//   represents, and where/when to find The Voice.
// - The grouping below (guardians, endings, The Voice, combat technique
//   achievements, difficulty/rank achievements, speedrun achievements)
//   is read directly from what each achievement's own description
//   requires, not invented.
export const GUIDE = {

    slug: "furi-achievement-guide",
    category: "game",
    gameSlug: "furi",
    icon: "⚔️",
    title: "Furi Achievement Guide",
    summary: "A practical guide to all 33 Steam achievements in Furi - the nine Guardian boss fights, the three story endings, meeting The Voice, and the deeper combat-technique and speedrun challenges.",

    relatedSlugs: ["achievement-completion-and-tracking", "understanding-achievement-availability"],

    sections: [

        {
            heading: "Overview",
            body: [
                "Furi has 33 Steam achievements. A single playthrough naturally unlocks most of the story-progress achievements - defeating each Guardian, reaching one of the game's three endings, and a handful of combat-technique achievements along the way. The deeper combat-technique, rank, and speedrun achievements reward mastering specific fights rather than just finishing the game.",
                "Nothing here is permanently missable in the strict sense - Furi lets you replay any completed fight from the main menu, so a missed combat-technique achievement (a specific parry count, a no-hit clear) can always be gone back for on a later attempt."
            ]
        },

        {
            heading: "The Nine Guardians",
            body: [
                "Kill the Jailer, A Prison within a Prison, Master of Time, Single Impact, Can You Feel It?, Don't Listen to Her, She's an 11, All That Nonsense, and Amateur. Pushover. are each unlocked by defeating one specific Guardian - The Chain, The Strap, The Line, The Scale, The Hand, The Song, The Burst, The Edge, and The Beat respectively - on your way through the story. These unlock naturally as you progress; there's no way to skip a Guardian and still finish the game.",
                "Breakout is a smaller, more specific technical achievement tied to one of these fights: break all of The Line's shields before landing a hit on him, rather than damaging him through the shields directly."
            ]
        },

        {
            heading: "The Three Endings",
            body: [
                "Welcome Back, Rider, Who Will Protect Them Next Time?, and There Is Kindness in You are Furi's three distinct story endings, each reached through a different choice made in the game's final confrontation: letting the invasion of the Free World proceed, turning against the invasion to defend the Free World, or accepting The Song's compromise instead of fighting at all.",
                "Since these three outcomes are mutually exclusive on a single ending, getting all three achievements realistically means replaying the final confrontation more than once, choosing differently each time.",
                "Tip: don't feel pressured to pick an ending based on the achievement list on your first playthrough - experience the story's real choice first, then come back for the other two endings once you already know what each one involves."
            ]
        },

        {
            heading: "Meeting The Voice",
            body: [
                "My Only Chance and Lucky for You are both tied to a secret side character called The Voice, encountered outside the main boss-fight structure of the game. My Only Chance is found after the credits, near the shore of the Free World. Lucky for You is found much earlier - immediately after defeating The Chain, back at your starting cage.",
                "Both are easy to miss on a normal playthrough since they require deliberately backtracking to specific, easy-to-overlook locations rather than just following the story forward."
            ]
        },

        {
            heading: "Combat Technique Achievements",
            body: [
                "Light It Up, Give It a Real Try, Neon Swagger, and So Fresh are all straightforward technique achievements tied to the game's core mechanics: turning your armor's light on during a path section, rising from a K.O. 20 times over the course of play, keeping your armor's glow at maximum for a full phase, and grabbing 10 heal pickups during a single fight.",
                "Perfect Parrier, Boost Master, Ping Pong, Let's Brawl, Take It Back, and Jedi Master all reward specific parry/melee/boost counts against a Guardian within a single fight - 5 perfect parries, 10 boost hits, a bounced bullet parried 3 times in a row against The Hand's shield, 10 melee hits, 20 parried bullets, and 20 consecutive parries without being hit, respectively.",
                "Speedrunner and Untouchable are both single-fight performance achievements - defeating any Guardian within 5 minutes, and defeating any Guardian without taking a single hit."
            ]
        },

        {
            heading: "Difficulty & Rank Achievements",
            body: [
                "What a Thrill and It Gives Me Hope reward earning an A rank and an S rank respectively on the base Furi difficulty (story mode). Furier than Ever and That Was Intense scale the same idea up to the harder Furier difficulty, unlocked after finishing the game once - completing the game on it, and earning an S rank on it.",
                "Tip: attempt rank-based achievements only once you're comfortable with a fight's full pattern - an S rank typically requires a near-flawless, efficient clear, not just a win."
            ]
        },

        {
            heading: "Speedrunning",
            body: [
                "Faster than M and Faster than B are the game's hardest achievements to plan for: beating the whole game faster than Furi's own designer's best time (2:12:42) and faster than Furi's combat designer's best time (1:29:56) respectively. Both realistically require a knowledge-of-the-route, dedicated speedrun attempt rather than a casual playthrough.",
                "Tip: treat these two as a genuinely separate goal from everything else on this list - route-optimize on a save where you already know every fight, ideally well after your first normal playthrough."
            ]
        },

        {
            heading: "Suggested Order",
            body: [
                "Play through the story normally first, picking up all nine Guardian-defeat achievements and whichever ending you choose along the way, plus any combat-technique achievements that happen naturally.",
                "Replay the final confrontation twice more to collect the other two endings, then go back for Lucky for You and My Only Chance once you know where and when to find The Voice.",
                "Once you're comfortable with individual fights, do a dedicated pass for the remaining parry/melee/rank achievements, then Furier than Ever and its S-rank counterpart.",
                "Save Faster than M and Faster than B for last - they're realistically a separate, dedicated speedrunning goal rather than something to fold into a normal playthrough."
            ]
        }

    ]

};
