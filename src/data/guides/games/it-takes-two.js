// It Takes Two Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/it-takes-two.json), whose 20 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1426210 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 2 hidden achievement(s) ship no official description from
//   Steam; their requirements below are curatorial, researched from public
//   community guides (Twinfinite, TheGamer, TrueAchievements).
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "it-takes-two-achievement-guide",
    "category": "game",
    "gameSlug": "it-takes-two",
    "icon": "🧸",
    "title": "It Takes Two Achievement Guide",
    "summary": "A practical guide to all 20 Steam achievements in It Takes Two - 2 are hidden. Covers the story completion, the chapter-by-chapter minigames and moments, and the two hidden easter-egg rooms.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "It Takes Two has 20 Steam achievements, and 2 are hidden - both tied to secret rooms in Cody and May's shrunken house that most players would otherwise walk straight past. Every other achievement is a chapter-specific moment or optional minigame across the Tree, Garden, Workshop, Cuckoo Clock, Rose's Room, and later chapters, plus one for finishing the whole story co-op and one for finding every one of the game's many optional minigames.",
                "Nothing story-critical is missable since chapters stay accessible via Chapter Select after the credits roll, but Minigame Megalomania (finding every minigame) and the two hidden achievements are easy to miss on a straight run to the credits if you and your co-op partner do not deliberately explore side paths.",
                "Tip: this is a strictly two-player game (split-screen or Friend's Pass online), so plan a full co-op session with your partner - most of these achievements pop for both players simultaneously, and a couple (Plastic Prison Breakers) explicitly need both players pressing something at the same time."
            ]
        },
        {
            "heading": "Story & Chapter Achievements",
            "body": [
                "The early-chapter and story-wide achievements: finishing the whole story co-op (It Took Two), finding every optional minigame (Minigame Megalomania), and two chapter-specific moments (Fried Friendship, Struck A Pose).",
                "The achievements here: It Took Two (You did it! CO-LLA-BO-RATION!); Minigame Megalomania (All minigames found!); Fried Friendship (It takes two to… torture.); Struck A Pose (Self-inflicted paparazzi.)."
            ]
        },
        {
            "heading": "Garden, Workshop & Tree Chapters",
            "body": [
                "A run of chapter moments and minigames from the middle stretch of the game: Faraway Frequencies, Look At Him Go, Break the Bank, A Daring Devil, Snackosaurus, Realize Your Art, On Rails Experience, and Platforming Prodigy.",
                "The achievements here: Faraway Frequencies (The truth was out there all along!); Look At Him Go (Shoot for the stars, literally.); Break the Bank (Guess it was time to cash out.); A Daring Devil (Put on a show and die trying.); Snackosaurus (Now look who's extinct!); Realize Your Art (Isn't it pretty? That's going on the fridge.); On Rails Experience (Choo Choo!); Platforming Prodigy (Helltower? More like hello-from-up-here-tower!)."
            ]
        },
        {
            "heading": "Later Chapters & Endgame",
            "body": [
                "The back half of the game's chapter moments: Lost And Found, Mood Swing, Something Fishy, Terror Of The Seven Seas, Bug Sized Relaxation, and Meditation Maestro.",
                "The achievements here: Lost And Found (Again? Keep track of your kids!); Mood Swing (Took things a bit too far, didn't you?); Something Fishy (Don't feed the animals! Or do, they're adorable.); Terror Of The Seven Seas (Scurvy! Ye look smashing, captain!); Bug Sized Relaxation (Release that tension at the root level.); Meditation Maestro (You reached a higher state of mind. Or at least some peace and quiet.)."
            ]
        },
        {
            "heading": "Hidden Achievements",
            "body": [
                "Both of It Takes Two's hidden achievements are secret-room easter eggs off the main path, sourced from community guides (Twinfinite, TheGamer, TrueAchievements):",
                "Plastic Prison Breakers: In the Rose's Room \"Pillow Fort\" chapter, veer off the main path across the pillow platforms to find a hidden tunnel with a red-and-white polka-dot cushion. Inside is a secret jail cell holding two action-figure prisoners - Leo and Vincent, the two heroes of Hazelight's previous game A Way Out. Both players slam the two buttons at once to free them and pop the achievement.",
                "Force Triangulated: In the \"Gates Of Time\" section of the Cuckoo Clock chapter, take the boat waiting to the left of the small bridge, ride it through the door, then enter the small building on the dock. Just walking in unlocks the achievement; the jars inside break with a chime lifted straight from The Legend of Zelda."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through the story from the Tree onward with a co-op partner, taking time to explore side paths and try every optional minigame you find along the way - most of the chapter achievements happen naturally if you do not rush.",
                "2. In Rose's Room's \"Pillow Fort\" section, detour off the main path to find the hidden jail-cell room and have both players hit the two buttons together for Plastic Prison Breakers.",
                "3. In the Cuckoo Clock chapter's \"Gates Of Time\" section, take the boat to the left of the bridge and enter the small dockside building for Force Triangulated.",
                "4. If you skipped any optional minigames on your first pass, use Chapter Select after finishing the story to go back and find the rest for Minigame Megalomania.",
                "5. Finish the story to the end credits for It Took Two.",
                "Tip: Minigame Megalomania is the one that catches most players out - It Takes Two hides dozens of small optional minigames off the critical path in almost every chapter, so if you are aiming for 100% it is worth a dedicated cleanup pass with a chapter-select checklist rather than trying to remember them all on a single playthrough."
            ]
        }
    ]
};
