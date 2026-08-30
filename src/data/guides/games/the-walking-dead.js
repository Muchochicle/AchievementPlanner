// The Walking Dead Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/the-walking-dead.json), whose 48 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   207610 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "the-walking-dead-achievement-guide",
    "category": "game",
    "gameSlug": "the-walking-dead",
    "icon": "🧟",
    "title": "The Walking Dead Achievement Guide",
    "summary": "A practical guide to all 48 Steam achievements in The Walking Dead - none are hidden. Covers the chapter- and episode-completion achievements across all five episodes of Season One, plus the 400 Days add-on and its two bonus achievements.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "The Walking Dead (Telltale's Season One) has 48 Steam achievements and none of them are hidden. Every one is a progress achievement - complete each chapter of each of the five episodes, complete each episode, complete the six stories of the 400 Days add-on, and two tiny bonus achievements (win a game of Rock/Paper/Scissors, and a story-moment \"Reunited\"). There are no choice-locked, difficulty, or collectible achievements at all.",
                "Nothing is missable and nothing branches - your choices change the story's tone and some scenes, but every achievement unlocks simply by playing through to the end of each chapter. A single blind playthrough of Season One plus 400 Days earns all 48.",
                "Tip: just play the whole season and the 400 Days DLC once, at your own pace - there is nothing to optimise, collect or replay, so make the choices you want and the achievements arrive on their own."
            ]
        },
        {
            "heading": "Episodes 1-2: A New Day & Starved For Help",
            "body": [
                "Every chapter of Episode 1 (Out of the Frying Pan through Two Enter, One Leaves) and its completion, and every chapter of Episode 2 (Going Hungry through You Fight Like A Dairy Farmer) and its completion.",
                "The achievements here: Out of the Frying Pan (Complete chapter 1 of episode 1.); Adventures in Babysitting (Complete chapter 2 of episode 1.); In Your Charge (Complete chapter 3 of episode 1.); Rock and a Hard Place (Complete chapter 4 of episode 1.); It's Just One Bullet (Complete chapter 5 of episode 1.); Hey, Bud (Complete chapter 6 of episode 1.); Two Enter, One Leaves (Complete chapter 7 of episode 1.); Everything's Going to be Okay (Complete Episode 1: A New Day.); Going Hungry (Complete chapter 1 of episode 2.); Conversation Killer (Complete chapter 2 of episode 2.); Thank you for shopping at Save Lots! (Complete chapter 3 of episode 2.); Guess Who's Coming to Dinner (Complete chapter 4 of episode 2.); Too Much Salt Will Kill You (Complete chapter 5 of episode 2.); Taking Charlotte (Complete chapter 6 of episode 2.); You Fight Like A Dairy Farmer (Complete chapter 7 of episode 2.); It's Not Stealing If You Need It (Complete Episode 2: \"Starved For Help\")."
            ]
        },
        {
            "heading": "Episodes 3-4: Long Road Ahead & Around Every Corner",
            "body": [
                "Every chapter of Episode 3 (Goodbye, She Quietly Says through Look Behind You) and its completion, and every chapter of Episode 4 (Georgia's First City through Penultimate) and its completion.",
                "The achievements here: Goodbye, She Quietly Says (Completed chapter 1 of episode 3.); Bad Blood (Completed chapter 2 of episode 3.); Hit the Road (Completed chapter 3 of episode 3.); What now? (Completed chapter 4 of episode 3.); Handle It (Completed chapter 5 of episode 3.); Unexpected Delay (Completed chapter 6 of episode 3.); Look Behind You (Completed chapter 7 of episode 3.); Lend Me Your Ears (Completed Episode 3: \"Long Road Ahead\"); Georgia's First City (Completed chapter 1 of episode 4.); Down By The River (Completed chapter 2 of episode 4.); Support Group (Completed chapter 3 of episode 4.); Bedside Manor (Completed chapter 4 of episode 4.); Georgia's Last City (Completed chapter 5 of episode 4.); For Whom The Bell Tolls (Completed chapter 6 of episode 4.); The Morning After (Completed chapter 7 of episode 4.); Penultimate (Completed chapter 8 of episode 4.)."
            ]
        },
        {
            "heading": "Episode 5, 400 Days & Bonus",
            "body": [
                "Every chapter of Episode 5 (Into The Fire through What Remains), the six 400 Days stories (Vince's, Wyatt's, Russell's, Bonnie's and Shel's Chapters plus the Epilogue), and the two bonus achievements - winning Rock/Paper/Scissors and Reunited.",
                "The achievements here: Into The Fire (Completed chapter 1 of episode 5.); Twice Shy (Completed chapter 2 of episode 5.); There Ain't No Way (Completed chapter 3 of episode 5.); Mercy (Completed chapter 4 of episode 5.); The Marsh House (Completed chapter 5 of episode 5.); What's in the bag?  (Completed chapter 6 of episode 5.); Stay Close To Me (Completed chapter 7 of episode 5.); What Remains (Completed chapter 8 of episode 5.); Chain Gang (Completed Vince's Chapter.); Abandoner (Completed Wyatt's Chapter.); Friends Like These (Completed Russell's Chapter.); Who Goes There? (Completed Bonnie's Chapter.); Paradise Lost (Completed Shel's Chapter.); Loose Ends (Completed the Epilogue.); Two out of Three (Won a game of Rock/Paper/Scissors.); Reunited (Found an old friend.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play Episode 1 through to the end - every chapter completion and the episode completion unlock as you go.",
                "2. Continue straight through Episodes 2, 3, 4 and 5 the same way.",
                "3. Play the 400 Days add-on and complete all five character chapters and the Epilogue.",
                "4. The two bonus achievements (Two out of Three, Reunited) happen during normal play in 400 Days and the main story - no special action needed.",
                "5. If one somehow does not unlock, replay just that chapter from the episode/chapter select menu.",
                "Tip: play with the autosave alone and do not manually manage save files - Telltale's Season One is stable, but copying saves between slots or PCs is the one thing that has been known to skip a chapter-completion achievement."
            ]
        }
    ]
};
