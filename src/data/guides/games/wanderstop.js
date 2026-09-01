// Wanderstop Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/wanderstop.json), whose 11 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1299460 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "wanderstop-achievement-guide",
    "category": "game",
    "gameSlug": "wanderstop",
    "icon": "🍵",
    "title": "Wanderstop Achievement Guide",
    "summary": "A practical guide to all 11 Steam achievements in Wanderstop - none are hidden. Covers the story of Elevada's stay at the wandering tea shop across all five chapters. None of the achievements are hidden and every one unlocks automatically as the story plays out.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Wanderstop has 11 Steam achievements and none are hidden. All of them unlock automatically as you play through the story - a five-chapter narrative about Elevada, an exhausted swordfighter who can no longer fight, and the strange tea shop she is stranded at while she waits to leave.",
                "The catalog marks it difficulty 1. There is nothing to grind or miss: brewing tea, tending the garden and talking to visitors moves the story forward on its own, and every achievement fires as a chapter or story beat concludes.",
                "Tip: just play through Wanderstop at your own pace - there's no wrong way to brew a cup of tea, and all 11 achievements will unlock by the time the credits roll."
            ]
        },
        {
            "heading": "Early Chapters",
            "body": [
                "The first half of the story, as Elevada settles into the tea shop and starts learning its rhythms - from her first hard lesson through to a quiet, hard-won peace.",
                "The achievements here: Her Gift (They used her gift against her.); So Much Time (It will be okay. You have so, so much time.); Satisfactory (Satisfactory numbers, but we are going to have to let you go.); Unyielding Yes (Yes to everything, to all of it, the unyielding yes.); Noble and Futile (A noble and futile effort, best of luck.); At Long Last. (At long last. Peace.)."
            ]
        },
        {
            "heading": "Later Chapters & Ending",
            "body": [
                "The back half of the story, as the tea shop's mysteries and Elevada's own past come into focus on the way to the ending.",
                "The achievements here: Rewarded (The devotion, the commitment, it will surely be rewarded, it must be.); Both Pieces (And then, as both pieces failed to merge, an insight.); Your Moment (You were not ready, but it was your moment all the same.); Inward (In spite of these failures, I invite you inward still.); What is Needed (He who is drawn simply to what is needed, to what is not realized.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through Wanderstop's story naturally - brew tea, tend the garden, and talk to every visitor who arrives.",
                "2. Let each chapter conclude in its own time; the achievements are pinned to story beats, not side objectives.",
                "3. There's no time pressure and no fail state, so there's nothing to plan around beyond enjoying the story.",
                "Tip: this is a narrative game meant to be experienced once at a relaxed pace - a single unhurried playthrough is enough for all 11 achievements."
            ]
        }
    ]
};
