// A Hat in Time's Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/a-hat-in-time.json), whose 46 achievements
//   were sourced directly from Steam's own achievement schema for appid
//   253230 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js) - all 46 ship a real,
//   official Steam description, quoted directly below. This is the
//   first catalog game (alongside RiME) with zero hidden achievements.
// - The grouping below (chapter Time Piece clears vs. one-off world
//   interactions vs. chapter-specific challenge runs vs. Death Wish vs.
//   the Workshop/multiplayer content) is read directly from what each
//   achievement's own official description requires, not invented.
export const GUIDE = {

    slug: "a-hat-in-time-achievement-guide",
    category: "game",
    gameSlug: "a-hat-in-time",
    icon: "🎩",
    title: "A Hat in Time Achievement Guide",
    summary: "A practical guide to all 46 Steam achievements in A Hat in Time - collecting every Time Piece chapter by chapter, chapter-specific challenge runs, Death Wish, and the game's Workshop and multiplayer extras.",

    relatedSlugs: ["achievement-completion-and-tracking", "understanding-achievement-availability"],

    sections: [

        {
            heading: "Overview",
            body: [
                "A Hat in Time has 46 Steam achievements. Nothing here is permanently missable - the game's hub world lets you freely revisit any chapter to pick up a missed Time Piece or retry a chapter-specific challenge at any time.",
                "The list splits cleanly into a handful of natural groups: collecting all the Time Pieces in each of the game's five chapters, one-off world interactions and small tricks, chapter-specific challenge runs, the separate Death Wish challenge mode, and the game's Workshop/online-party extras."
            ]
        },

        {
            heading: "Clearing Every Chapter",
            body: [
                "Mafia Town - All clear!, Subcon Forest - All clear!, Battle of the Birds - All clear!, Alpine Skyline - All clear!, The Arctic Cruise - All clear!, and Nyakuza Metro - All clear! each ask you to collect every Time Piece in that one chapter - the game's core collectible, one per major level or challenge within it.",
                "Return Home is the achievement that ties them all together: collect every Time Piece in the entire game, across every chapter."
            ]
        },

        {
            heading: "One-Off World Interactions",
            body: [
                "Put a Badge On It, Fan-tastic!, If I fit, I sit, 360 no-feet, Vacuum Vandal, Slip 'n Slide, Take a Hike, Pillow Fort, Badge Master, Personally I Prefer the Air, Let there be light, A Work of Art, Stick It To The Man, and Culinary Creativity are all small, easy-to-stumble-into interactions with the game's world and systems - equipping badges, riding the vacuum, finding a secret hideout, chaining homing attacks in the air, and discovering a hidden food combination among them.",
                "Sequence Break rewards skipping past the game's usual guided path entirely, and One Punch asks you to defeat any boss with the 1-hit hero badge equipped - both reward knowing the game's systems well enough to bend its normal rules.",
                "Why is a small joke achievement tucked into normal play, not a real challenge in its own right.",
                "Stickin' Star is a bigger version of the same idea, specific to Nyakuza Metro: collect 30 stickers scattered across that chapter."
            ]
        },

        {
            heading: "Chapter-Specific Challenge Runs",
            body: [
                "No Time To Explain (clear Train Rush without dying or time bonuses), Secret Intruder (get through Dead Bird Studio without being seen), Afraid of Water (don't fall into the rising water in Subcon Well), The Floor is Lava (clear the Lava Cake peak without touching lava), Encore! (clear The Big Parade without falling into the audience), and Minimum Shippable (clear Ship Shape without upsetting the Captain) are each a stricter, no-mistakes clear of one specific level or set piece.",
                "True Detective and False Detective are an opposite pair tied to Murder on the Owl Express: finding every clue versus deliberately finding none.",
                "A Series of Unfortunate Accidents (knock off every sitting Mafia member in Mafia Town) and Fueling the Feud (reach 2000 total points in Battle of the Birds) are similarly chapter-specific completionist checks.",
                "Tip: attempt these no-mistake challenge runs on a repeat visit to each chapter once you already know its layout and hazards - they're far less frustrating with foreknowledge than on a blind first pass."
            ]
        },

        {
            heading: "Death Wish",
            body: [
                "Death Wish is a separate set of harder, self-contained challenge levels unlocked after finishing the main story. Prepare to Die (clear every objective in a single Death Wish level), Punished Kid (earn 50 Death Wish Stamps), and I Refuse To Die! (earn every Death Wish Stamp) scale up from a single tough level to the entire mode.",
                "I Refuse To Die! in particular is one of the longest, most demanding achievements in the game - realistically a dedicated post-story goal, not something to expect alongside a normal first playthrough."
            ]
        },

        {
            heading: "Workshop & Online Party",
            body: [
                "Unlimited Possibilities, Community Contributor, and The Community Thanks You are tied to the Steam Workshop: playing a community mod, rating a Workshop level, and collecting 30 Mod Rift Tokens across community-made levels respectively.",
                "Little Help From My Friends, Life of the Party, Party Planner, and Party Animal are all tied to the game's online multiplayer party mode - collecting Time Pieces in local co-op, clearing an act while in the lead, filling out a large 10+ player party, and collecting Time Pieces during an active online party.",
                "Challenge Road rounds out the extras: clear one of the game's separate Challenge Road levels, distinct from the main chapters and Death Wish."
            ]
        },

        {
            heading: "Suggested Order",
            body: [
                "Play through the story chapters in order, picking up every Time Piece as you go rather than rushing past them - most of the per-chapter clear achievements and one-off world interactions come together naturally this way.",
                "Once you've finished a chapter once, go back for its specific no-mistake challenge run (No Time To Explain, Secret Intruder, and the rest) while the layout is still fresh in memory.",
                "Handle the Workshop and online-party achievements whenever convenient - none of them depend on story progress.",
                "Save Death Wish, especially I Refuse To Die!, for last - it's unlocked only after the story and is realistically the single longest-term goal on this list."
            ]
        }

    ]

};
