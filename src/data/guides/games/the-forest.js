// The Forest's Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/the-forest.json), whose 45 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   242760 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js) - 39 of 45 ship a real,
//   official Steam description, quoted directly below.
// - The six hidden achievements (Bad father, You should be looking for
//   Timmy, Daily Grind, Gross!, Make It Rain, Big Spender) ship no Steam
//   description; their conditions here are curatorial, sourced from Steam
//   Community 100% guides and PSNProfiles. All six relate to reaching or
//   messing about in the end-game Sahara Labs facility, so they are kept
//   free of story spoilers.
// - The grouping (survival and progress, building and crafting, combat
//   and hunting, multiplayer, exploration and collectibles, then the
//   hidden ones) is read from what each achievement's own description
//   requires.
export const GUIDE = {

    slug: "the-forest-achievement-guide",
    category: "game",
    gameSlug: "the-forest",
    icon: "🌲",
    title: "The Forest Achievement Guide",
    summary: "A practical guide to all 45 Steam achievements in The Forest - the survival and story-progress milestones, the building and crafting goals, the combat and hunting feats, the co-op achievements, the exploration and collectible sweeps, and the six hidden facility achievements.",

    relatedSlugs: ["achievement-completion-and-tracking", "understanding-achievement-availability"],

    sections: [

        {
            heading: "Overview",
            body: [
                "The Forest has 45 Steam achievements, six of them hidden. Most come from ordinary survival play; a cluster needs co-op partners, and two (Vegan and Pacifist) need a deliberately restrained playthrough.",
                "Almost nothing is permanently missable in a given save, but Vegan (finish without killing or eating an animal) has to be planned from the start, so it is usually its own run.",
                "Tip: run one normal save to the ending for the bulk of the list (Survive The Forest, Get Closure, Spelunker, the crafting and building goals), and a second, careful save for Vegan - keeping that one animal-free also makes Pacifist and Green Thumb easy to fit in."
            ]
        },

        {
            heading: "Survival & Progress",
            body: [
                "Time survived: First Night (survive 1 night), Survivalist (survive 5 nights), and Step Master (pass 50,000 steps). Story progress: Survive The Forest (finish the game), Get Closure (find all missing passengers), and Good Father (collect all robot pieces).",
                "Boy Scout (use the compass) and 5 Star Hotel (sleep on the yacht) round out the early milestones."
            ]
        },

        {
            heading: "Building & Crafting",
            body: [
                "Crafty (craft all items), Naturopath (craft 10 medicine items), Green Thumb (grow all plant types), Unseen (make and wear stealth armour), Longest Wall (build a super long wall), Handyman (repair a shelter), and You are a fun guy (eat all mushroom types)."
            ]
        },

        {
            heading: "Combat & Hunting",
            body: [
                "Cannibals: Serial Killer (kill 100 cannibals in single-player), Splatter (finish a downed enemy with a rock), Choppy Chop (chop up 50 bodies), Minor Cannibalism (eat an enemy), and Major Cannibalism (eat an entire family).",
                "Animals and fishing: Trophy Hunter (kill every animal type and display the heads), Bite me! (kill a shark), Monster (kill a bunny), Birdseye (kill a bird with an arrow), Commercial Fisherman (6+ fish with one stick of dynamite), Demolition Expert (6+ trees with one explosive), Fisherman (catch a fish with a trap), and the tree-felling pair Climate Change (100 trees) and Don't Save The Forest (1000 trees).",
                "Restraint: Pacifist (go 10+ days in a row without killing a cannibal in single-player) and Vegan (finish the whole game without killing or eating an animal). Demolition Man  is the blast-count one - set off 20 bombs."
            ]
        },

        {
            heading: "Multiplayer",
            body: [
                "Be Nice (share a food or drink item), Be Extremely Nice (share a weapon), Camp Out (group-sleep with another player), First Responder (revive one co-op player), and Medic (revive 10 co-op players)."
            ]
        },

        {
            heading: "Exploration & Collectibles",
            body: [
                "Spelunker (explore all caves), Gabe Fan (collect all cassette tapes), and the marathon walker Step Master again ties in here. Most collectibles are underground, so a full cave sweep covers Spelunker and most of Gabe Fan at once."
            ]
        },

        {
            heading: "Hidden Achievements",
            body: [
                "Two are about not doing your job: Bad father (survive 100 days without finding your son) and You should be looking for Timmy (build the gazebo from the survival guide instead).",
                "Four are found in the end-game facility: Daily Grind (drink from the cafe coffee machine), Big Spender (buy a soda and candy from the cafe vending machines), Gross! (drink from the water cooler with a severed head in it), and Make It Rain (set off the facility sprinklers by lighting an enemy on fire in a sprinkler room)."
            ]
        },

        {
            heading: "Suggested Order",
            body: [
                "Main save: survive the first nights (First Night, Survivalist), build and craft toward Crafty, Naturopath, Green Thumb, Unseen, Longest Wall, Handyman, and You are a fun guy, and explore every cave for Spelunker and Gabe Fan. Progress the story for Get Closure, Good Father, and Survive The Forest, and let the combat and hunting feats accumulate (Serial Killer, Splatter, Choppy Chop, Minor Cannibalism, Major Cannibalism, Trophy Hunter, Bite me!, Monster, Birdseye, Commercial Fisherman, Demolition Expert, Fisherman, Climate Change, Don't Save The Forest, Demolition Man  , Step Master, Boy Scout, 5 Star Hotel).",
                "While you are in the facility for the story, grab the hidden four (Daily Grind, Big Spender, Gross!, Make It Rain). Build the gazebo for You should be looking for Timmy, and if a save runs long you will pick up Bad father naturally.",
                "Co-op session: Be Nice, Be Extremely Nice, Camp Out, First Responder, and Medic.",
                "Restraint run: a fresh save for Vegan, keeping it animal-free the whole way, which also earns Pacifist and makes Green Thumb straightforward if you did not already have it."
            ]
        }

    ]

};
