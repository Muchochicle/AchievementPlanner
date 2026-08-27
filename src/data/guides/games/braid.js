// Braid's Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data (backend/catalog/games/braid.json),
//   whose 12 achievements were sourced directly from Steam's own
//   achievement schema for appid 26800 via ISteamUserStats/GetSchemaForGame
//   (fetched through this app's own backend/services/steamApi.js) - every
//   quoted description below is that official Steam text, not a
//   curatorial guess.
// - The World 2-6 structure (no World 1 achievement) is read directly from
//   the achievement list itself, not assumed: Braid's own apinames
//   (traversed2-6, solved2-6) number only worlds 2 through 6, matching the
//   game's well-documented structure where World 1 is played last as the
//   game's ending rather than first.
// - The catalog's game-level missable:false reflects Braid's own
//   always-available world-select from the house hub - nothing is
//   permanently lost by moving on, which is why 5 of the 12 achievements
//   (the "Solved" puzzle-piece ones, plus Speed Run) are still flagged
//   missable:true individually: they need a specific extra action beyond
//   just finishing a world, but that action stays available forever via
//   the house.
export const GUIDE = {

    slug: "braid-achievement-guide",
    category: "game",
    gameSlug: "braid",
    icon: "⏳",
    title: "Braid Achievement Guide",
    summary: "A practical guide to all 12 Steam achievements in Braid - traversing and solving each world's puzzle, finishing the story, and the notoriously difficult Speed Run.",

    relatedSlugs: ["achievement-completion-and-tracking", "understanding-achievement-availability"],

    sections: [

        {
            heading: "Overview",
            body: [
                "Braid has 12 Steam achievements. Nothing is permanently missable - every world is always reachable again from doors in the house hub, so an unsolved puzzle piece or a world you rushed through the first time is never lost.",
                "The list splits cleanly into three groups: reaching the end of each world (5 achievements), fully solving each world's puzzle-piece picture (5 achievements), finishing the story (1 achievement), and one dedicated, famously difficult Speed Run achievement."
            ]
        },

        {
            heading: "Traversing Each World",
            body: [
                "Traversed World 2, Traversed World 3, Traversed World 4, Traversed World 5, and Traversed World 6 (each \"Travel all the way across World [N]\") unlock just by reaching the end of that world's stages during a normal playthrough - no extra action needed, they happen automatically as you progress through the house's doors in order.",
                "There's no Traversed World 1 achievement: World 1 is the game's true ending, played last after the other five, and doesn't carry its own progression achievement the way Worlds 2-6 do."
            ]
        },

        {
            heading: "Solving Each World's Puzzle",
            body: [
                "Every world hides a set of jigsaw puzzle pieces scattered across its stages. Solved World 2, Solved World 3, Solved World 4, Solved World 5, and Solved World 6 (each \"Fit together all the world [N] puzzle pieces and align the puzzle in its frame\") need every piece from that specific world collected and then physically assembled in its frame back at the house - collecting them all isn't enough by itself, the puzzle has to actually be completed.",
                "Tip: pieces are easy to miss on a first playthrough since several require using that world's specific time-manipulation mechanic in a non-obvious way to reach. A dedicated cleanup pass per world, using a piece-location guide, is far more efficient than trying to grab every piece on the first pass through each level."
            ]
        },

        {
            heading: "Closure & Speed Run",
            body: [
                "Closure (\"Complete the game\") unlocks with the ending after finishing World 1 last - simply finishing the story.",
                "Speed Run (\"Complete a full speed run, beating the challenge time\") is a separate, dedicated challenge accessed from the house once the game is finished: a full run of the game under a strict time limit. This is widely considered one of the hardest achievements in any Steam game - it demands near-flawless, memorized execution of every world's mechanics back to back, and realistically needs many practice attempts before a clean run comes together.",
                "Tip: don't attempt Speed Run until you've already 100%'d the puzzle pieces and know every world's layout from memory - learning the game's mechanics and routing the speedrun at the same time makes an already hard achievement much harder."
            ]
        },

        {
            heading: "Suggested Order",
            body: [
                "Play through Worlds 2-6 and then World 1 normally to pick up Traversed World 2-6 and Closure, grabbing any obvious puzzle pieces along the way.",
                "Do a dedicated cleanup pass per world afterward, using a puzzle-piece location guide, to pick up the remaining pieces and unlock each Solved achievement.",
                "Save Speed Run for last, once you know the game well enough to route an efficient run - treat it as its own separate goal, not something to combine with the puzzle-piece cleanup."
            ]
        }

    ]

};
