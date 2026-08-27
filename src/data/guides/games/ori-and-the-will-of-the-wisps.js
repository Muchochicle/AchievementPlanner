// Ori and the Will of the Wisps' Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/ori-and-the-will-of-the-wisps.json), whose 37
//   achievements were sourced directly from Steam's own achievement
//   schema for appid 1057090 via ISteamUserStats/GetSchemaForGame
//   (fetched through this app's own backend/services/steamApi.js) - 25
//   of 37 ship a real, official Steam description, quoted directly
//   below.
// - Close Call, Take the Bug by the Horn, Laser Brain, Home Sweet Home,
//   Let the Waters Flow, Icy Escape, Dark Triumph, Guardian's Rest,
//   Quick Sand, Stone Cold, Untouchable, and Timely Demise are hidden
//   achievements Steam never describes publicly (confirmed via the same
//   API call) - their descriptions here are curatorial, cross-checked
//   against multiple independent achievement-guide sites (XboxAchievements,
//   TrueAchievements, Gamepur) that agree on each one's real unlock
//   condition: the first ten are unmissable story-progression beats tied
//   to specific boss fights and set-pieces, while Untouchable and Timely
//   Demise are dedicated no-damage/speed variants of two of those same
//   boss fights (Mora and Kwolok respectively).
// - The grouping below (story/boss progression vs. ability & shard
//   upgrades vs. collectibles & side content vs. the combat-trick
//   achievements vs. the no-damage/speed boss variants vs. the
//   dedicated challenge runs) is read directly from what each
//   achievement's own official description requires, not invented.
export const GUIDE = {

    slug: "ori-and-the-will-of-the-wisps-achievement-guide",
    category: "game",
    gameSlug: "ori-and-the-will-of-the-wisps",
    icon: "🦉",
    title: "Ori and the Will of the Wisps Achievement Guide",
    summary: "A practical guide to all 37 Steam achievements in Ori and the Will of the Wisps - the story's boss fights, ability and shard upgrades, collectibles and side content, and the game's toughest no-damage and challenge-run achievements.",

    relatedSlugs: ["achievement-completion-and-tracking", "understanding-achievement-availability"],

    sections: [

        {
            heading: "Overview",
            body: [
                "Ori and the Will of the Wisps has 37 Steam achievements. Most of them - story beats, ability and shard upgrades, collectibles - unlock naturally across one thorough playthrough, with the real difficulty concentrated in a handful of dedicated challenge runs meant for after you already know the game.",
                "Nothing here is permanently missable on a given save - Ori's metroidvania structure lets you freely revisit earlier areas once you have the abilities to reach what you missed the first time through."
            ]
        },

        {
            heading: "Story & Boss Progression",
            body: [
                "Close Call (fend off Howl at the start of the game), Take the Bug by the Horn (defeat the giant Horn Beetle boss), and Laser Brain (defeat the Willow Stone) mark the game's early story beats and first real boss fights.",
                "Home Sweet Home (reach the Wellspring Glades for the first time), Let the Waters Flow (clear the puzzle and escape sequence in the Watermill), and Icy Escape (escape the avalanche in Baur's Reach) are unmissable area-transition and escape-sequence milestones.",
                "Dark Triumph (defeat the spider boss Mora), Guardian's Rest (fend off Kwolok), and Quick Sand (escape the ruins) continue the main story through its middle stretch, while Stone Cold (defeat Shriek) and Destiny (complete the Game) mark the final boss and the ending itself.",
                "Hardcore Fan (complete Hard Mode) is the same full clear again, just on the game's harder difficulty setting."
            ]
        },

        {
            heading: "Abilities & Shards",
            body: [
                "Tools of the Trade (unlock all Abilities) and Mad Skills (upgrade all Abilities) track your core movement and combat kit, while Fully Slotted (upgrade all Shard Slots), Shard Hunter (unlock all Shards), and Shard Specialist (upgrade all Shards) do the same for the game's equippable Shard system.",
                "Powerful (max out Energy) and Healthy (max out Life) reward fully upgrading your two core stat pools, both natural byproducts of thorough exploration."
            ]
        },

        {
            heading: "Collectibles & Side Content",
            body: [
                "Cartographer's Protégé (buy all Maps from Lupo), Shrine Bright (complete all Spirit Shrines), Lost and Found (find all Collectibles), Mark of the Trader (complete the Trade Sequence Quest), Completionist (complete every Side Quest), and Fixer Upper (complete all Wellspring Glades Projects) are all thorough-exploration and side-content achievements, each covering a different corner of the game's world outside the main story path.",
                "Speed Demon (complete all Spirit Trials) is its own separate set of optional timed challenge rooms scattered through the world, distinct from any of the story's escape sequences."
            ]
        },

        {
            heading: "Combat Tricks",
            body: [
                "Juggling Act (juggle 3 or More Projectiles in the Air for Over 5 Seconds), Bring it On (defeat 5 Enemies Without Touching the Ground), Damage Spike (defeat 3 Enemies with a Single Spike), and Did I Do That? (defeat 10 Enemies using Environmental Hazards) are all combat-technique achievements that reward experimenting with Ori's move set rather than just fighting normally.",
                "High and Dry (avoid Touching any Corrupted Water) is a longer-running achievement tracking a whole playthrough's worth of careful movement around one specific hazard type, rather than a single trick."
            ]
        },

        {
            heading: "No-Damage & Speed Boss Variants",
            body: [
                "Untouchable (defeat Mora without taking any damage) and Timely Demise (defeat Kwolok in under 2 minutes) are dedicated harder variants of two boss fights you'll already have beaten normally for Dark Triumph and Guardian's Rest - both are widely considered easiest to attempt on the game's Easy difficulty setting, regardless of what difficulty you're playing the rest of the game on.",
                "Tip: for Untouchable, a fully-upgraded damage-boosting Shard like Reckless shortens the fight considerably, which directly reduces how long you need to stay perfect."
            ]
        },

        {
            heading: "Full-Run Challenges",
            body: [
                "Shardless (beat the Game Without Equipping a Shard) and Lightless (beat the Game Without Spending any Spirit Light) are both whole-playthrough restriction runs, each removing one of the game's core upgrade systems for the entire game.",
                "Look at the Time (complete the Game in Under 4 Hours) and Immortal (complete the Game without Dying) are the game's speed and no-death challenges respectively - both realistically require already knowing the game's layout and boss patterns from an earlier normal playthrough.",
                "Tip: attempt Shardless, Lightless, Look at the Time, and Immortal only after you've already beaten the game normally at least once - all four assume route and boss knowledge you won't have on a first playthrough."
            ]
        },

        {
            heading: "Suggested Order",
            body: [
                "Play through the story normally first, picking up every ability, shard, and collectible achievement along the way without going far out of your way for any single one.",
                "Once you've beaten the game once, use that knowledge for Untouchable and Timely Demise - both are much more manageable once you already know the Mora and Kwolok fights.",
                "Save the full-run challenges (Shardless, Lightless, Look at the Time, Immortal) and Hardcore Fan for dedicated replays once you already know the game well - none of them mix easily with a normal, exploratory playthrough."
            ]
        }

    ]

};
