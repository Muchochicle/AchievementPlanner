// Life is Strange: Before the Storm Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/life-is-strange-before-the-storm.json), whose 34 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   554620 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "life-is-strange-before-the-storm-achievement-guide",
    "category": "game",
    "gameSlug": "life-is-strange-before-the-storm",
    "icon": "🎸",
    "title": "Life is Strange: Before the Storm Achievement Guide",
    "summary": "A practical guide to all 34 Steam achievements in Life is Strange: Before the Storm - none are hidden. Covers the three episode-completion achievements, the ten optional graffiti in each episode, and the all-episodes completion achievement.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Life is Strange: Before the Storm has 34 Steam achievements and none of them are hidden. They are entirely mechanical: complete each of the three episodes, complete each episode's ten optional graffiti (Chloe's tag-a-surface collectibles), and one achievement for finishing all three episodes. None are tied to story choices or difficulty.",
                "The graffiti are the only thing to watch: each is a specific interactable object in a scene, and some can be permanently missed within an episode once you move past the area. Because episodes are replayable from the menu, nothing is lost overall.",
                "Tip: play through once, tagging graffiti when the interact prompt appears, then use a graffiti-location guide on a second pass of any episode where you missed some."
            ]
        },
        {
            "heading": "Episode 1: Awake",
            "body": [
                "Completing the ten optional graffiti in Episode 1: Awake (Recreational Vandalism through Lucid Writing) and completing the episode (Awake, Dear Heart).",
                "The achievements here: Recreational Vandalism (Complete the optional graffiti #1 in Episode 1: Awake); I See U Saw (Complete the optional graffiti #2 in Episode 1: Awake); The Last Unicorn (Complete the optional graffiti #3 in Episode 1: Awake); Home Unimprovement (Complete the optional graffiti #4 in Episode 1: Awake); Rock Idol (Complete the optional graffiti #5 in Episode 1: Awake); Dramatis Personae (Complete the optional graffiti #6 in Episode 1: Awake); Mulligan Stew (Complete the optional graffiti #7 in Episode 1: Awake); Pioneer Spirit (Complete the optional graffiti #8 in Episode 1: Awake); Face Your Anger (Complete the optional graffiti #9 in Episode 1: Awake); Lucid Writing (Complete the optional graffiti #10 in Episode 1: Awake); Awake, Dear Heart (Complete Episode 1: Awake)."
            ]
        },
        {
            "heading": "Episode 2: Brave New World",
            "body": [
                "Completing the ten optional graffiti in Episode 2: Brave New World (Stagehandwriting through Creature Feature) and completing the episode (O, Wonder!).",
                "The achievements here: Stagehandwriting (Complete the optional graffiti #1 in Episode 2: Brave New World); Radical Piratical (Complete the optional graffiti #2 in Episode 2: Brave New World); Feels on Wheels (Complete the optional graffiti #3 in Episode 2: Brave New World); Canon Wall (Complete the optional graffiti #4 in Episode 2: Brave New World); Wishlist (Complete the optional graffiti #5 in Episode 2: Brave New World); Tread Harshly (Complete the optional graffiti #7 in Episode 2: Brave New World); Friendly Forest Friends (Complete the optional graffiti #6 in Episode 2: Brave New World); Permanent Record (Complete the optional graffiti #8 in Episode 2: Brave New World); Vanity Fare (Complete the optional graffiti #9 in Episode 2: Brave New World); Creature Feature (Complete the optional graffiti #10 in Episode 2: Brave New World); O, Wonder! (Complete Episode 2: Brave New World)."
            ]
        },
        {
            "heading": "Episode 3: Hell Is Empty & Completion",
            "body": [
                "Completing the ten optional graffiti in Episode 3: Hell Is Empty (American Graffiti through Messed Up), completing the episode (All the Devils are Here), and completing all three episodes (Before the Storm).",
                "The achievements here: American Graffiti (Complete the optional graffiti #1 in Episode 3: Hell Is Empty); Extra Credit (Complete the optional graffiti #2 in Episode 3: Hell Is Empty); Peer Review (Complete the optional graffiti #3 in Episode 3: Hell Is Empty); Monthly Masterpiece (Complete the optional graffiti #4 in Episode 3: Hell Is Empty); Spit Take (Complete the optional graffiti #5 in Episode 3: Hell Is Empty); Venting Machine (Complete the optional graffiti #6 in Episode 3: Hell Is Empty); Hello Nurse (Complete the optional graffiti #7 in Episode 3: Hell Is Empty); A Penned Appendage (Complete the optional graffiti #8 in Episode 3: Hell Is Empty); Drunk Drawer (Complete the optional graffiti #9 in Episode 3: Hell Is Empty); Messed Up (Complete the optional graffiti #10 in Episode 3: Hell Is Empty); All the Devils are Here (Complete Episode 3: Hell Is Empty); Before the Storm (Complete Episode 1, Episode 2 and Episode 3 of Life is Strange: Before the Storm)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play all three episodes through once at your own pace, making whatever choices you want.",
                "2. Tag graffiti whenever the interact prompt appears - each is a specific object Chloe can write on.",
                "3. After finishing, check which of the 30 graffiti you missed.",
                "4. Replay just the relevant episodes from the menu with a graffiti-location guide to grab the rest.",
                "5. Each episode completion and the all-three-episodes achievement unlock automatically as you progress.",
                "Tip: several graffiti opportunities close the moment you advance the scene - when you enter a new area, sweep it for the interact prompt before you talk to anyone or trigger the next beat."
            ]
        }
    ]
};
