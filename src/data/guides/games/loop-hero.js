// Loop Hero's Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/loop-hero.json), whose 50 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1282730 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js) - 42 of 50 ship a real,
//   official Steam description, quoted directly below.
// - The 8 remaining hidden achievements are all built around the
//   game's four chapter bosses (the Lich, the Priestess, the Hunter,
//   and Omega) - Steam never describes any of them publicly (confirmed
//   via the same API call). Their descriptions here are curatorial,
//   based on cross-agreeing community documentation establishing the
//   consistent pattern: each boss has one achievement for its first
//   defeat, and a second for defeating it multiple times (three times
//   for the Lich, Priestess, and Hunter; six times for Omega).
// - The grouping below (expeditions/classes, combat, resources and
//   alchemy, camp building and crafting, the encyclopedia/map/cards,
//   and the four chapter bosses) is read directly from what each
//   achievement's own requirement is, not invented.
export const GUIDE = {

    slug: "loop-hero-achievement-guide",
    category: "game",
    gameSlug: "loop-hero",
    icon: "🔁",
    title: "Loop Hero Achievement Guide",
    summary: "A practical guide to all 50 Steam achievements in Loop Hero - expeditions and classes, resource gathering and alchemy, camp building, the encyclopedia, and the game's four chapter bosses.",

    relatedSlugs: ["achievement-completion-and-tracking", "understanding-achievement-availability"],

    sections: [

        {
            heading: "Overview",
            body: [
                "Loop Hero has 50 Steam achievements. As a roguelike built around repeated expeditions, almost nothing here is missable in the usual sense - any requirement not met on one expedition can always be chased on a later one, since the camp's permanent upgrades carry forward between runs.",
                "The list splits into long-term accumulating milestones (expeditions taken, enemies killed, resources gathered) and a smaller set of one-off discoveries and the four chapter boss fights."
            ]
        },

        {
            heading: "Expeditions, Death & Classes",
            body: [
                "New beginning (embark on your first expedition), Practically a job (embark on your tenth expedition), and Go-getter (embark on your fiftieth expedition) mark increasing expedition counts. First time? (die for the first time) and Groundhog day (die ten times) do the same for deaths - dying is a normal, expected part of a roguelike run, not a failure state to avoid.",
                "Tripped (die outside of battle) and Undying (die and resurrect 3 times in one expedition) are smaller, more specific death-related achievements. Around the world (complete 100 loops) and In time for lunch (defeat the boss in the first expedition) round out this group.",
                "Trickster (unlock the \"Rogue\" class) and Grandma says hello (unlock the \"Necromancer\" class) reward unlocking the game's two additional playable classes beyond the starting Warrior."
            ]
        },

        {
            heading: "Combat & Enemies",
            body: [
                "First blood (kill 5 enemies) and Lost count (kill 1000 enemies) track lifetime kills at two very different scales, while Trophy collection (kill each enemy) asks for every distinct enemy type at least once.",
                "Crunchy company (have 10 living skeletons in one battle) is a more specific, build-dependent achievement tied to the Necromancer's skeleton-summoning playstyle."
            ]
        },

        {
            heading: "Resources & Alchemy",
            body: [
                "Part of the world (find 100 resources) and Make a puzzle (find all possible types of resources) track resource collection breadth and volume, while Can't get it back (lose 100 resources) rewards the opposite - resources are lost when your camp's warehouse overflows or a card is dismantled.",
                "Not gold... and Still not gold... (synthesize 5 and then 100 resources with alchemy) track use of the alchemy crucible, while Alchemist's apprentice and Don't breathe it in (transmute 5 and then 50 resources into hydrogen) track a more specific alchemical process."
            ]
        },

        {
            heading: "Camp Building & Crafting",
            body: [
                "Foundation stone (build the first camp structure) and Small town (build all the possible camp structures) bookend the camp-building achievements, with Hole in memory (dismantle a camp structure) and Always been here? (build the river) as smaller milestones along the way.",
                "What's not tied down (get 5 camp items) and Collector (get all the camp items) track the camp's separate equippable-item system, while Fence (get 10 orange items in exchange for the trophies in camp) rewards a specific trading loop.",
                "From dust and sticks (craft 5 items) and Handyman (craft 25 items) track crafting volume, while Easier than making (dismantle 5 items) and Barbarian (dismantle 10 items) track the reverse."
            ]
        },

        {
            heading: "Encyclopedia, Map & Cards",
            body: [
                "Scholar (unlock a chapter in the encyclopedia), Observer (unlock 50 chapters), and Book worm (unlock all the encyclopedia) track the game's core knowledge-gathering system - most of the game's tile and enemy lore is locked behind placing enough of each card to trigger its own encyclopedia entry.",
                "Small talker (read 50 different dialogues) is a separate narrative-progress milestone. As anew (fill the whole map) and See the world and not die (see all the possible tiles) are both large-scale single-expedition map-completion goals.",
                "Cardsharp (place 1000 cards) tracks lifetime card placement, while Broken geography (in one expedition place 10 cards you didn't have in your deck, not counting \"Oblivion\") rewards a specific in-run card-generation interaction. Bartender! Refill! (drink 50 potions) is a smaller, unrelated consumables milestone."
            ]
        },

        {
            heading: "The Four Chapter Bosses",
            body: [
                "Each of the game's four chapter bosses has a matched pair of achievements: one for defeating it for the first time, and one for defeating it repeatedly. Just starting out and Punching bag cover the Lich, the boss of Chapter 1 - first defeat, then three defeats total.",
                "Glass Queen and Faith alone is not enough cover the Priestess, the boss of Chapter 2, the same way - one defeat, then three. For whom the horn tolls... and Hunter's Nightmare do the same for the Hunter, the boss of Chapter 3.",
                "Memory pieces and Godslayer close out the set with Omega, the boss of Chapter 4 - Godslayer specifically needs six defeats rather than three, making it the hardest repeated-boss achievement in the game.",
                "Tip: repeated boss defeats need to happen in that boss's own original chapter to count toward these achievements - defeating an earlier chapter's boss again during a later, harder expedition doesn't reliably progress the counter."
            ]
        },

        {
            heading: "Suggested Order",
            body: [
                "Play through normally at first - most of the expedition-count, kill-count, resource, crafting, and encyclopedia achievements accumulate naturally the more you play.",
                "Unlock the Rogue and Necromancer classes as soon as reasonably possible, since some achievements (like Crunchy company) are much easier with a specific class.",
                "Dedicate focused expeditions to the four chapter bosses once your camp is strong enough to survive them repeatedly, working through each boss's own pair of achievements one chapter at a time.",
                "Save As anew, See the world and not die, and Book worm for later runs, once your build is strong enough to survive a very long single expedition."
            ]
        }

    ]

};
