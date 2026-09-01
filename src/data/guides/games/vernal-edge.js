// Vernal Edge Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/vernal-edge.json), whose 16 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1546710 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 4 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (TrueAchievements / Steam Community / game wikis) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "vernal-edge-achievement-guide",
    "category": "game",
    "gameSlug": "vernal-edge",
    "icon": "⚔",
    "title": "Vernal Edge Achievement Guide",
    "summary": "A practical guide to all 16 Steam achievements in Vernal Edge (4 hidden). Covers beating the game and its Vicious difficulty, minigames, combat feats, and hidden secret areas and story beats. Four of the achievements are hidden and their unlock conditions are researched from community 100% guides.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Vernal Edge has 16 Steam achievements and 4 are hidden. They cover beating the game and then again on Vicious difficulty, finding the hidden palette, buying out every shop, an 8-hit no-damage parry streak, acquiring Treasure Sense and the Pacifist's Curse, winning the fishing and baseball minigames, tending to a lonely flower, completing the Pyramid without its shortcut, and becoming a 'one-note wonder', plus four hidden achievements for entering Unreality, discovering your roots, finding the hidden Slime's Summit area, and meeting Chervil's new friend.",
                "The catalog marks it difficulty 3. Nothing is missable, but Vicious difficulty and the 8-hit parry streak are genuine skill checks; the four hidden achievements are all about finding secret areas and optional story beats rather than combat.",
                "Tip: use Pulse Fly to reach the rift for the hidden Slime's Summit area, and keep exploring off the main path - most of the hidden achievements reward curiosity, not combat skill."
            ]
        },
        {
            "heading": "Beating the Game & Minigames",
            "body": [
                "Beating the game, beating it again on Vicious difficulty, the hidden Unreality achievement, finding the hidden palette, buying out every shop, an 8-hit no-damage parry streak, acquiring Treasure Sense, and acquiring the Pacifist's Curse.",
                "The achievements here: Ending (Beat the game); Vicious (Beat the game on Vicious difficulty); Unreal (Enter Unreality of your own accord.); New Look (Find the hidden palette); Big Spender (Purchase every item from every shop); Parry Master (Parry 8 hits without taking damage); Treasure Hunter (Acquire Treasure Sense); Pacifist (Acquire Pacifist's Curse)."
            ]
        },
        {
            "heading": "Secrets, Minigames & Story",
            "body": [
                "The hidden 'discover your roots' achievement, winning the fishing minigame, winning the baseball minigame, tending to a lonely flower, completing the Pyramid without its shortcut, the hidden Slime's Summit discovery, becoming a one-note wonder, and the hidden achievement for meeting Chervil's new friend.",
                "The achievements here: Deeply Rooted (Discover your roots.); Fisher Queen (Win the fishing minigame); Slugger (Win the baseball minigame); Green Thumb (Tend to the lonely flower); Pyramid Master (Complete the Pyramid without using the shortcut); Slime Time (Use Pulse Fly to reach the rift and enter it to discover the hidden area, Slime's Summit.); Knocked Around The Clock (Become a one-note wonder); Hello George (Meet Chervil's new friend.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through the story toward the ending, keeping an eye out for the hidden palette and buying out every shop along the way.",
                "2. Practice parrying for an 8-hit no-damage streak, and acquire Treasure Sense and the Pacifist's Curse.",
                "3. Play the fishing and baseball minigames, tend to the lonely flower, and complete the Pyramid without its shortcut.",
                "4. Explore off the beaten path - use Pulse Fly to reach the rift for Slime's Summit, discover your roots, meet Chervil's new friend, and enter Unreality on your own.",
                "5. Once you've beaten the game once, replay it on Vicious difficulty for the harder ending achievement.",
                "Tip: the hidden achievements are all optional exploration and story beats, not combat challenges - if you're stuck, backtrack and look for paths you haven't taken yet."
            ]
        }
    ]
};
