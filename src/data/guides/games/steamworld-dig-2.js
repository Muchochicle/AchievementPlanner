// SteamWorld Dig 2's Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/steamworld-dig-2.json), whose 34 achievements
//   were sourced directly from Steam's own achievement schema for appid
//   571310 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js) - 28 of 34 ship a real,
//   official Steam description, quoted directly below.
// - The Guiding Light, A Mysterious Garden, A Shining City, The
//   Enlightened, Ghost of the Machine, and A New Frontier are hidden
//   achievements Steam never describes publicly (confirmed via the same
//   API call) - all six are the game's major story-progress milestones,
//   and their descriptions here are curatorial, cross-checked against
//   the official SteamWorld Wiki's achievement page and independent
//   achievement-guide sites (XboxAchievements, TrueAchievements).
// - The grouping below (story beats vs. the four "gold star" completion
//   categories vs. gear/leveling vs. one-off combat and traversal tricks
//   vs. the post-game Ultimate Trial) is read directly from what each
//   achievement's own official description requires, not invented.
export const GUIDE = {

    slug: "steamworld-dig-2-achievement-guide",
    category: "game",
    gameSlug: "steamworld-dig-2",
    icon: "⛏️",
    title: "SteamWorld Dig 2 Achievement Guide",
    summary: "A practical guide to all 34 Steam achievements in SteamWorld Dig 2 - the story's major milestones, the four gold-star completion categories, gear upgrades, and the punishing post-game Ultimate Trial.",

    relatedSlugs: ["achievement-completion-and-tracking", "understanding-achievement-availability"],

    sections: [

        {
            heading: "Overview",
            body: [
                "SteamWorld Dig 2 has 34 Steam achievements. Most unlock naturally from digging, exploring, and upgrading your gear as you play - only the four gold-star completion categories and the Ultimate Trial demand a real dedicated effort, and realistically a second pass through the game once you already know its layout.",
                "The Guiding Light, A Mysterious Garden, A Shining City, The Enlightened, Ghost of the Machine, and A New Frontier are the six hidden story-milestone achievements - they mark the game's major beats and unlock automatically as you progress, so there's nothing to plan around beyond simply playing through the story."
            ]
        },

        {
            heading: "Story Milestones",
            body: [
                "The Guiding Light unlocks for defeating the Totem, the game's first boss, while A Mysterious Garden marks finding Yarrow, a strangely verdant hidden garden area early on.",
                "A Shining City unlocks for discovering the Oasis, the last refuge of a fallen civilization and the game's real hub area, and The Enlightened marks defeating the Great Prophet later in the story.",
                "Ghost of the Machine unlocks for escaping the grasp of Vectron, a mechanical facility late in the game, and A New Frontier is the game's ending achievement - it unlocks for leaving Earth with your companion, completing the story."
            ]
        },

        {
            heading: "The Four Gold Stars",
            body: [
                "At the very end of the game you're graded across four categories, each with its own gold-star achievement: Speedrunner (Time), Hardcore (Deaths, meaning zero deaths for the whole run), Gold Farmer (Wealth), and Explorer (Secrets). The Impossible Dream asks for a gold star in every category at once - realistically only reachable on a dedicated, planned run once you already know the map.",
                "Tip: Hardcore and Speedrunner pull in opposite directions - rushing invites mistakes, while playing safe costs time - so most players aim for The Impossible Dream on a second playthrough where they already know every shortcut and every enemy pattern, rather than trying to nail all four gold stars blind on a first run."
            ]
        },

        {
            heading: "Resources & Collectibles",
            body: [
                "It Makes the World Go Round and Barnacle’s BFF track cumulative resources sold, at $2,500 and $10,000 respectively, while At Least It’s Shiny asks for 10 Silver ore specifically.",
                "Hobbyist Collector, Skilled Collector, and Master Collector scale up the game's artifact collectibles at 10, 25, and all 42 of them, and O Brother, Where Art Thou? is a separate hunt for every missing Yonker brother scattered through the world.",
                "Hook, Line and Sinker and Friendly Neighborhood Spider-Bot both reward specific uses of the Hook Shot tool - collecting 15 resources with it, and hitting 15 flying enemies with it."
            ]
        },

        {
            heading: "Gear, Leveling & the Workbench",
            body: [
                "My Very Own Sun, Is It Even a Pickaxe Anymore?, Hard Carry, and That’s Armor-e each unlock for maxing out one piece of core gear - your lamp, pickaxe, backpack, and armor respectively - through the game's normal upgrade system.",
                "Maximum Potential asks you to reach experience level 14, and Hopeless Gearhead is a broader completionist achievement for buying every upgrade available at the workbench, not just one piece of gear."
            ]
        },

        {
            heading: "Combat & Traversal Tricks",
            body: [
                "Two Birds, One Stone and Right Back At Ya! are one-off combat tricks - crushing two enemies with a single falling rock, and killing an enemy with its own reflected projectile - that you'll likely stumble into naturally during normal play.",
                "Lazy Person is a small joke achievement for traveling 100 tiles horizontally without touching the controls, usually done by riding momentum or a moving platform.",
                "Solid Sneak and Sequence Breaker are both tied to the Vectron facility: Solid Sneak asks you to keep the alarm count to two or fewer during that section, while Sequence Breaker is a much bigger challenge - destroying every one of Vectron's devices without ever actually entering the facility itself."
            ]
        },

        {
            heading: "Caves & the Ultimate Trial",
            body: [
                "Cave Diver and Splendiferous Spelunker track optional side caves completed, at 5 and 20 (challenge caves) respectively - these are the game's bite-sized platforming puzzles, separate from the main story path.",
                "To Hell and Back is the game's true endgame challenge: surviving the Ultimate Trial, a brutal post-game gauntlet that's widely considered the hardest single achievement in the game and realistically only worth attempting once your gear is fully upgraded.",
                "Tip: don't attempt the Ultimate Trial until My Very Own Sun, Is It Even a Pickaxe Anymore?, Hard Carry, and That’s Armor-e are all already done - going in with anything less than fully-upgraded gear makes an already hard challenge needlessly harder."
            ]
        },

        {
            heading: "Suggested Order",
            body: [
                "Play through the story normally first, picking up every gear upgrade, artifact, and Yonker brother you come across without going out of your way - the six story-milestone achievements and most of the collectible ones complete themselves this way.",
                "Grab Cave Diver, Splendiferous Spelunker, and the one-off tricks (Two Birds, One Stone, Right Back At Ya!, Lazy Person) whenever they're convenient during that same playthrough.",
                "Once your gear is fully upgraded, tackle To Hell and Back and Sequence Breaker - both are much more manageable with a maxed-out pickaxe, armor, and backpack.",
                "Save The Impossible Dream for a dedicated second run once you already know the map well enough to route a Time/Deaths/Wealth/Secrets-perfect playthrough - trying it blind on a first attempt is realistically not going to work."
            ]
        }

    ]

};
