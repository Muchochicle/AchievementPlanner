// Dredge's Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/dredge.json), whose 60 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1562430 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js) - 41 of 60 ship a real,
//   official Steam description, quoted directly below.
// - The 19 hidden achievements (the 4 relic-delivery/chapter
//   achievements, both endings, all 7 eldritch-relic-ability
//   achievements, the shrine-completion achievement, and several
//   achievements from each DLC) are hidden achievements Steam never
//   describes publicly (confirmed via the same API call) - their
//   descriptions here are curatorial, sourced from the official DREDGE
//   wiki's own achievements page (dredge.wiki.gg/wiki/Achievements),
//   which documents every hidden achievement's real unlock condition.
//   The two ending achievements are described mechanically (what
//   triggers each) without asserting which one is the "good" or "bad"
//   ending, to stay spoiler-light about the story's own framing.
// - The grouping below (fishing milestones, trading/research, the ship
//   itself, the eldritch relics, exploration, and each DLC separately)
//   is read directly from what each achievement's own apiname prefix
//   and description group it under, not invented.
export const GUIDE = {

    slug: "dredge-achievement-guide",
    category: "game",
    gameSlug: "dredge",
    icon: "🎣",
    title: "Dredge Achievement Guide",
    summary: "A practical guide to all 60 Steam achievements in Dredge - fishing milestones, the ship's upgrades, the eldritch relics' hidden powers, the game's two endings, and both The Pale Reach and The Iron Rig expansions.",

    relatedSlugs: ["achievement-completion-and-tracking", "understanding-achievement-availability"],

    sections: [

        {
            heading: "Overview",
            body: [
                "Dredge has 60 Steam achievements across the base game and both of its paid expansions, The Pale Reach and The Iron Rig. Most reward the natural rhythm of the game - fishing, selling, upgrading your ship, and exploring - rather than one-off story beats, so a lot of this list accumulates on its own over a full playthrough.",
                "Nothing here is permanently missable on a given save - Dredge's world stays open after the main story ends, so fishing and collectible goals can always be finished off afterward."
            ]
        },

        {
            heading: "The Four Relics & Two Endings",
            body: [
                "Introductions marks completing the game's opening quest, the first real story milestone, and The Key marks delivering the first of the story's key items shortly after.",
                "The Secret, The Bond, The Chains, and The Moment are four hidden achievements, each unlocked by surrendering one of the four relics you find over the course of the story to the Collector: the Music Box (retrieved in the Gale Cliffs), the Ring (dredged up in the Stellar Basin), the Chains (given by the Airman in the Twisted Strand), and the Pocket Watch, the last of the four.",
                "Unshackled and Sated, both hidden, are the game's two possible endings - Unshackled triggers by following the Collector's instructions and handing over all four relics, while Sated instead requires returning to the Lighthouse Keeper after meeting the Old Mayor and retrieving a book from the Collector before triggering the alternate ending."
            ]
        },

        {
            heading: "Fishing Milestones",
            body: [
                "Lifted From the Deep (catch 250 fish using rods) and Tangled in This Web (catch 150 fish in trawl nets) track your two main fishing methods, while Trapped by These Walls asks for 100 crabs caught in crab pots specifically.",
                "Master Angler (catch all known species of fish) and Aberration Attractor (catch all aberrations, Dredge's corrupted, eldritch fish variants) are the game's two big fish-collection achievements - Aberration Attractor in particular requires seeking out the unsettling, mutated catches rather than just fishing normally.",
                "Careless Harvesting (deplete a total of 25 fishing spots) and Unwanted (discard 25 fish) both reward the opposite of careful play - overfishing a spot until it runs dry, or simply throwing bad catches back."
            ]
        },

        {
            heading: "Trading & Research",
            body: [
                "Lives for Profit (sell a total of $2500 worth of fish) and Cash for Gold (sell a total of $1500 worth of trinkets) track your total earnings from the game's two main sources of income.",
                "Researcher: Rods, Researcher: Nets, Researcher: Pots, and Researcher: Engines each unlock for fully researching every upgrade in that one equipment category at the shipwright - a natural byproduct of investing your earnings back into your boat over the course of a playthrough."
            ]
        },

        {
            heading: "The Ship",
            body: [
                "Hull: Improved, Hull: Refined, and Hull: Advanced mark upgrading your boat's hull through its second, third, and fourth tiers respectively - each a bigger investment than the last.",
                "Perfect Packing (have a full cargo) and Feeling Prepared (install equipment into every slot on your ship) both reward maxing out your ship's capacity rather than earning money, while Swift Reaper, No Time to Linger, and Light up the Night track combined fishing speed, engine speed, and light strength reaching specific thresholds (200%, 75 knots, and 3000 lumens) once enough upgrades are stacked together."
            ]
        },

        {
            heading: "The Eldritch Relics",
            body: [
                "From the Fog, Prey Sighted, Mixed Results, Cruel Heat, Dimensional Bypass, Banisher, and Unsustainable Fishing are all hidden achievements, each tied to one of the game's corrupted eldritch relics and its specific, unsettling power: hearing a foghorn echo through the Foghorn relic, spotting a fish of every category through the Spyglass, using Mixed Bait to attract 3 different species to one spot, keeping the Haste relic's burn meter above 50% for 10 seconds, traveling a long distance in a single use of Manifest, banishing 10 threats with Banish, and using Atrophy on a fishing spot far from where you first triggered it.",
                "Tip: these relics are each found and equipped independently over the course of the story - working toward all 7 of these achievements naturally means trying out every relic's power at least once, rather than sticking with just one favorite for the whole game."
            ]
        },

        {
            heading: "Exploration & Side Content",
            body: [
                "Providence (complete all side quests) and Safe Havens (visit every dock in the game) are both broad, whole-map goals that reward thorough exploration beyond just the main story.",
                "Servant of the Shrines, a hidden achievement, asks you to solve all of the game's fish shrine puzzles - scattered, optional environmental puzzles separate from the main quest line.",
                "From the Depths is the game's completionist achievement, unlocking once every other achievement here has already been earned."
            ]
        },

        {
            heading: "The Pale Reach",
            body: [
                "Polar Angler (catch all known species of fish in The Pale Reach) and Cold Corruptions (catch all aberrations in The Pale Reach) are this expansion's own versions of Master Angler and Aberration Attractor, scoped to its new arctic waters.",
                "Under The Ice marks finishing The Pale Reach's main quest, and Frozen Favors marks finishing all of its side quests.",
                "Feeding Time, Icebreaker, and Fresh Fish are hidden achievements specific to this expansion: feed the Narwhal, equip the Icebreaker hull upgrade, and have 5 ice blocks in your cargo at once.",
                "From The Black Depths, also hidden, asks you to catch the Colossal Squid - The Pale Reach's own rare, singular catch."
            ]
        },

        {
            heading: "The Iron Rig",
            body: [
                "Ancient Angler and Primordial Deviations are this expansion's fish- and aberration-collection achievements, scoped to the waters around the rig - Primordial Deviations specifically excludes the rarer exotic aberrations, which get their own achievement instead.",
                "Missing Shipment marks delivering the expansion's missing shipment to the rig, and Rig Architect asks you to build every level of every building on the rig itself.",
                "Remedial Apparatus (equip the Siphon Trawler) and Hull: Industrial (upgrade to the 5th tier hull) are both specific late-game equipment milestones for this expansion.",
                "Dark Custodian (collect a total of 10 Dark Canisters), Exotic Exemplar (catch any exotic aberration), Enhanced Abilities (upgrade all 3 basic abilities), and Shadowed Splashes (have 5 Dark Splashes in your inventory) round out the expansion's collection and upgrade goals.",
                "The Iron Ruin, a hidden achievement, asks you to override the rig's defenses - a specific story-driven confrontation late in the expansion.",
                "The Gleaming Goliath (evade that which stalks the disturbed sediment) is a tense survival achievement tied to one of the expansion's most dangerous encounters - the achievement's own vague, unsettling phrasing is Dredge's usual style for describing its scarier threats without spelling out exactly what they are."
            ]
        },

        {
            heading: "Suggested Order",
            body: [
                "Play through the main story normally, delivering each relic as you find it (The Secret, The Bond, The Chains, The Moment) and letting fishing/trading/research achievements accumulate as a natural byproduct.",
                "Pick up every eldritch relic and try its power at least once as the story hands them to you, rather than settling on a favorite - this covers all 7 relic-ability achievements without a dedicated detour.",
                "Once the main story wraps up, use the still-open world to mop up Master Angler, Aberration Attractor, Safe Havens, Providence, and Servant of the Shrines before deciding which ending to pursue - Unshackled or Sated.",
                "Play both DLCs (The Pale Reach and The Iron Rig) once you're comfortable with the base game's systems, working through each one's own fishing, exploration, and hidden achievements the same way as the main game.",
                "Save From the Depths for last - it's the natural capstone once every other achievement on this list, across the base game and both expansions, is already done."
            ]
        }

    ]

};
