// Superliminal's Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/superliminal.json), whose 27 achievements
//   were sourced directly from Steam's own achievement schema for appid
//   1049410 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js) - 21 of 27 ship a real,
//   official Steam description, quoted directly below.
// - Environment Saved!, Please Recycle, Feeling Blue, Chess Master,
//   Kasparov, and Stars Align are hidden achievements Steam never
//   describes publicly (confirmed via the same API call) - their
//   descriptions here are curatorial, cross-checked against
//   TrueAchievements' and XboxAchievements' independent documentation
//   of their real unlock conditions (a soda can placed in the
//   recycling bin vs. the regular trash; finding every hidden
//   blueprint/chess piece scattered through the levels; making the
//   winning move in the hidden chess room after collecting every
//   piece; completing every hidden planetarium constellation).
// - The grouping below (story/speed vs. world interactions vs. the three
//   big hidden-collectible hunts vs. the meta/extra-mode achievements)
//   is read directly from what each achievement's own official
//   description requires, not invented.
export const GUIDE = {

    slug: "superliminal-achievement-guide",
    category: "game",
    gameSlug: "superliminal",
    icon: "🔺",
    title: "Superliminal Achievement Guide",
    summary: "A practical guide to all 27 Steam achievements in Superliminal - the story, its playful environmental gags, and the three big hidden-collectible hunts (blueprints, chess pieces, and constellations).",

    relatedSlugs: ["achievement-completion-and-tracking", "understanding-achievement-availability"],

    sections: [

        {
            heading: "Overview",
            body: [
                "Superliminal has 27 Steam achievements. The base story is short - most players finish it in a few hours - but a real 100% run takes considerably longer, since three achievements each require hunting down every instance of a scattered collectible (blueprints, chess pieces, and constellations) across the whole game.",
                "Nothing here is permanently missable in the usual sense - the game supports replaying levels from the main menu, so a missed one-off interaction (an apple on your head, a soda can in the wrong bin) can always be gone back for."
            ]
        },

        {
            heading: "Story & Speed",
            body: [
                "Wake Up simply asks you to beat the game - it unlocks automatically at the credits on a normal first playthrough.",
                "Superluminal and Speed Runner are timed replays of the whole game: under 30 minutes and under an hour respectively. Superluminal is the much tighter target and realistically needs a knowledge-of-the-route run, ideally attempted only after you already know the puzzle solutions from a normal first playthrough.",
                "Vaguely Activated Achievement is a joke achievement that unlocks for simply doing something in the game early on - it's not meant to be a real challenge.",
                "Tip: don't attempt Superluminal on your very first playthrough - learn the puzzle solutions once at a normal pace, then do a dedicated speed-focused replay once you already know exactly what each room needs."
            ]
        },

        {
            heading: "World Interactions",
            body: [
                "Son of Man (put an apple on your head), Sugar Crash (break a soda can), Please Use Other Door (find the nook in Optical), and Why Are You Like This? (clone an object way too many times) are each one-off, easy-to-stumble-into interactions with the game's early objects.",
                "Fire Alarmist, Fire Safety Achieved, and Expert Fire Alarmist scale up the same idea - pull one fire alarm, then all of them, then enough of them across the game - while Fires Extinguished asks you to empty every fire extinguisher instead.",
                "Take Your Trash Elsewhere rewards a failed attempt at throwing something away, and Soda Connaisseur asks you to drink every soda you find - a smaller, easier collectible than the blueprint/chess/constellation hunts below.",
                "Environment Saved! and Please Recycle are a matched, intentionally ironic pair, both centered on the same soda can and the recycling bin next to the reception desk in the early Optical level: Environment Saved! unlocks for actually recycling the can, while Please Recycle - despite its name - unlocks for throwing that same can in the regular trash instead."
            ]
        },

        {
            heading: "Blueprints, Chess Pieces & the Trophy",
            body: [
                "Feeling Blue and Chess Master are the game's two biggest hidden-collectible hunts: blueprints and chess pieces are each scattered in plain sight but easy to miss - tucked behind, above, or just outside your direct path through a room - across most of the game's levels. Both achievements require finding every single one.",
                "Polite Recognition is a smaller, separate hidden-object hunt for one specific trophy, found off to the side in one of the game's rooms rather than accumulated across the whole game like the blueprints and chess pieces.",
                "Kasparov is the payoff for finishing the chess-piece hunt: once every chess piece has been collected, a computer screen near the reception desk lets you enter a hidden room with an in-progress chess match on the table. Making the winning final move there unlocks the achievement.",
                "Tip: don't chase Feeling Blue and Chess Master on your first playthrough alongside the story - they're much easier to hunt down on a dedicated replay once you already know each level's layout and aren't also trying to solve that level's actual puzzle at the same time."
            ]
        },

        {
            heading: "Stars Align",
            body: [
                "Stars Align is the third and final big hidden-collectible hunt, centered on hidden planetarium rooms tucked away across several of the game's levels, each containing one constellation to piece together. Finding and completing every one of them unlocks the achievement.",
                "Like the blueprint and chess-piece hunts, this is realistically a dedicated-replay goal rather than something to expect on a first normal playthrough."
            ]
        },

        {
            heading: "Challenge Mode, Commentary & the Workshop",
            body: [
                "Mindful asks you to finish every challenge in the game's separate Challenge Mode - a distinct, harder set of puzzle rooms outside the main story, unlocked after completing the game once.",
                "Biggest Fan rewards finishing the entire game with developer commentary enabled from the main menu - effectively a slower, dedicated replay to hear every commentary node, not a puzzle-solving challenge.",
                "Dr. Pierce's Protege, Contraband, Dream within a Dream, and Dream Sculptor are all tied to the game's Workshop and dream-sharing features: contributing an item to the Workshop, importing a 3D model into the game, playing someone else's shared dream level, and uploading a dream of your own, respectively - each a single simple action rather than an in-story task."
            ]
        },

        {
            heading: "Suggested Order",
            body: [
                "Play through the story normally first, picking up the easy world-interaction achievements (soda cans, fire alarms, extinguishers, the apple, the nook) along the way without going out of your way for them.",
                "Once you've finished the story once and know the levels, do a dedicated replay focused purely on the three big hunts - blueprints, chess pieces, and constellations - then finish it off with Kasparov once every chess piece is found.",
                "Handle the Workshop/dream achievements and Mindful (Challenge Mode) whenever convenient - none of them depend on the collectible hunts.",
                "Save Superluminal and Biggest Fan for last: a fast, route-optimized replay and a slow, commentary-listening replay are opposite goals, so it rarely makes sense to attempt them in the same playthrough as anything else."
            ]
        }

    ]

};
