// Void Bastards's Game Guide. Sources:
//
// - PRIMARY (and only): this app's own catalog data
//   (backend/catalog/games/void-bastards.json), whose 24 achievements
//   were sourced directly from Steam's own achievement schema for
//   appid 857980 via ISteamUserStats/GetSchemaForGame (fetched through
//   this app's own backend/services/steamApi.js) - all 24 ship a real,
//   official Steam description, quoted directly below. Void Bastards
//   is the rare catalog game with zero hidden achievements, so nothing
//   here is curatorial guesswork.
// - The grouping below (story progress, ship upgrades, collectibles,
//   difficulty/no-death runs, and the four single-restriction runs) is
//   read directly from what each achievement's own official
//   description requires, not invented.
export const GUIDE = {

    slug: "void-bastards-achievement-guide",
    category: "game",
    gameSlug: "void-bastards",
    icon: "🚀",
    title: "Void Bastards Achievement Guide",
    summary: "A practical guide to all 24 Steam achievements in Void Bastards - the story run, ship upgrades, collectibles, and the harder difficulty and single-restriction challenge runs.",

    relatedSlugs: ["achievement-completion-and-tracking", "understanding-achievement-availability"],

    sections: [

        {
            heading: "Overview",
            body: [
                "Void Bastards has 24 Steam achievements, every one of them with a real, official Steam description - there's nothing hidden or ambiguous about any unlock condition here. A normal first playthrough on Normal naturally covers most of the story-progress and upgrade achievements; the harder difficulty and single-restriction runs are separate, deliberate challenge goals for afterward.",
                "The game restarts your specific client character often (part of its roguelike structure), but ship-wide upgrades and unlocks persist, so nothing meaningful is lost between runs - it's realistic to work toward several of these achievements across more than one escape attempt."
            ]
        },

        {
            heading: "Story Progress",
            body: [
                "Bodge Job (build an upgrade) and Specially Selected (get killed by pirates) are both early, near-unavoidable story beats. Swanning Around (pilot S.T.E.V. to nebula depth two) and Staff Turnover (rehydrate a second client) mark further story progress as you push deeper into the nebula and lose/replace your playable character.",
                "Sorted (escape the nebula) is the base completion achievement, unlocked by beating the game on any difficulty. Tooled Up (upgrade the regulator) is an early weapon-upgrade milestone along the way."
            ]
        },

        {
            heading: "Ship Upgrades & Progress Buildings",
            body: [
                "Brown Noser (build a Citizen Card), Human Resource (build the HR Computer), Chilled Out (build the Water Cooling unit), and Software Pirate (build the Transmitter) are four sequential story-critical ship upgrades, each required to advance further into the campaign. Trainspotter (build every upgrade) asks for every optional upgrade on top of these required ones - a much larger undertaking across a full run."
            ]
        },

        {
            heading: "Collectibles & Encounters",
            body: [
                "Kippers for Breakfast (blow up a void whale), Shiver Their Timbers (survive a pirate encounter), Mingin (catch a garbage collector), and Lombard (loot a pupbot) are each tied to a specific enemy or hazard type encountered while exploring derelict ships - none of them require anything beyond normal exploration and combat."
            ]
        },

        {
            heading: "Difficulty & No-Death Runs",
            body: [
                "Cooking with Gas and Cor Blimey! scale up the base completion achievement to the HARD and HARD BASTARD difficulties respectively. Coffin Dodger and Off the Hook add a no-death requirement on top: escaping the nebula on NORMAL or HARD without dying, and escaping on HARD BASTARD without dying - the latter being one of the hardest achievements in the game, combining the toughest difficulty with a perfect run.",
                "Tip: attempt the no-death runs only once you're comfortable with the game's enemy types and hazards from a normal run first - a single unexpected pirate ambush or garbage collector swarm can end a no-death attempt instantly."
            ]
        },

        {
            heading: "Single-Restriction Runs",
            body: [
                "Mahatma, Squaddie, Guy Fawkes, and Clever Dick are four separate challenge runs, each escaping the nebula on NORMAL while restricted to one category of tool: the UNARMED restriction (no weapons at all), the ONLY FIREARMS restriction, the ONLY INDIRECT restriction, and the ONLY DEVICES restriction respectively. Tight Arse rounds this group out with a different constraint - escaping the nebula on NORMAL without building any non-progress upgrades.",
                "Each of these five runs asks you to solve the game's usual encounters with a meaningfully narrower toolkit than normal, so they're best attempted only after you already understand the game's full range of tools well enough to know what you're giving up."
            ]
        },

        {
            heading: "Suggested Order",
            body: [
                "Play through a normal escape attempt on NORMAL first, picking up Bodge Job, Specially Selected, Tooled Up, Swanning Around, Staff Turnover, Sorted, the four story-critical upgrade achievements, and the collectible/encounter achievements along the way.",
                "Go back for Trainspotter once you understand every optional upgrade available, then work up through Cooking with Gas and Cor Blimey! on higher difficulties.",
                "Attempt Coffin Dodger and Off the Hook only once a difficulty's enemy patterns feel familiar, since a no-death run has zero room for a careless mistake.",
                "Save the five single-restriction runs (Mahatma, Squaddie, Guy Fawkes, Clever Dick, Tight Arse) for last - each is its own dedicated, differently-constrained playthrough rather than something to combine with the others."
            ]
        }

    ]

};
