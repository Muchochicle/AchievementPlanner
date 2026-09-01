// El Hijo - A Wild West Tale Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/el-hijo-a-wild-west-tale.json), whose 22 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   853050 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "el-hijo-a-wild-west-tale-achievement-guide",
    "category": "game",
    "gameSlug": "el-hijo-a-wild-west-tale",
    "icon": "🤠",
    "title": "El Hijo - A Wild West Tale Achievement Guide",
    "summary": "A practical guide to all 22 Steam achievements in El Hijo - A Wild West Tale - none are hidden. Covers the story from the monastery escape to the ending, inspiring children, stealth challenge clears, and a wide range of distraction and traversal feats. None of the achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "El Hijo - A Wild West Tale has 22 Steam achievements and none are hidden. They cover the story (starting the journey, escaping the monastery, reaching the town, completing the game), inspiring 1, 18 and then all children, walking 25,000 steps, a no-capture full clear, two specific no-detection/no-tool level clears, and a long list of stealth feats - hiding in pollen clouds, distracting opponents with stones, hiding in pots and coffins, riding mine carts, shooting lanterns, hitting a chicken, hanging off a train, and multi-target distractions and stuns.",
                "The catalog marks it difficulty 2. El Hijo is a gentle, family-friendly stealth adventure told without dialogue; nothing is missable, though the full no-capture clear and the two level-specific no-detection/no-tool clears are genuine stealth tests.",
                "Tip: inspiring children and most of the stealth-trick achievements come naturally from exploring levels thoroughly - only the no-capture full clear needs a dedicated careful run."
            ]
        },
        {
            "heading": "Story & Inspiring Children",
            "body": [
                "Starting the journey, escaping the monastery, reaching the town, completing the game, and inspiring 1, 18 and then all children.",
                "The achievements here: Truant (Start your journey); Escape Artist (Escape the monastery); Survivor (Reach the town); El Hombre (Complete the game); El Primero (Inspire a child); El Cuarto (Inspire 18 children.); El Heroe (Inspire all children)."
            ]
        },
        {
            "heading": "Stealth Challenges",
            "body": [
                "Walking 25,000 steps, completing the game without being caught, clearing level 10 unseen, clearing level 16 without the slingshot, clearing level 8 without hiding in any objects, and hiding from 20 opponents in pollen clouds.",
                "The achievements here: Adventurer (Walk 25000 steps in the game); Eel Hijo (Complete the game without being caught); El Fantasma (Complete level 10 without being seen); No Stones (Complete level 16 without using the slingshot); Broad Daylight (Complete level 8 without hiding inside any objects); Air Freshener (Hide from 20 opponents in pollen clouds.)."
            ]
        },
        {
            "heading": "Distraction & Traversal Feats",
            "body": [
                "Distracting 50 opponents with stones, hiding in 30 pots, riding 10 mine carts, hiding in a coffin for 300 seconds, shooting all uncaged lanterns in The Gold Mine, hitting a chicken with a stone, hanging off the edge of a train, distracting 3 opponents with 1 stone, and stunning 3 opponents with one fireworks explosion.",
                "The achievements here: Fool me Once (Distract 50 opponents with stones); Hole Up (Hide in 30 pots); Riding the Rails (Ride 10 Mine Carts); El Muerto (Spend 300 seconds hiding in a coffin.); Pitch Black (Shoot all uncaged lanterns in The Gold Mine.); Hunter (Hit a chicken with a stone); Daredevil (Hang off the edge of a train); Two Birds (Distract 3 opponents with 1 stone); Flashbang (Stun 3 opponents with one fireworks explosion)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through the story from the monastery escape to the ending, inspiring every child you meet along the way.",
                "2. Explore levels thoroughly for the stealth-trick achievements - pollen clouds, distracting with stones, hiding in pots and coffins, and riding mine carts.",
                "3. Walk 25,000 steps naturally over the course of the game.",
                "4. Go back for the two specific level clears (level 10 unseen, level 16 without the slingshot) and level 8 without hiding in objects.",
                "5. Once you know the levels well, attempt a full no-capture clear for Eel Hijo.",
                "Tip: most of the trick achievements (multi-target distractions, chicken hits, train hangs) can be grabbed opportunistically during any level - keep them in mind rather than farming one at a time."
            ]
        }
    ]
};
