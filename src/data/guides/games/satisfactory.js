// Satisfactory's Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/satisfactory.json), whose 44 achievements
//   were sourced directly from Steam's own achievement schema for appid
//   526870 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js) - 40 of 44 ship a real,
//   official Steam description, quoted directly below.
// - The four hidden achievements (Are you sure that's coffee?, No
//   refunds, Wait, you can pet it?, That was a close one) ship no Steam
//   description; their conditions here are curatorial, cross-checked
//   against The Gamer and Destructoid achievement guides.
// - The grouping (Space Elevator progression, building milestones,
//   collectibles, exploration and novelty feats, then the hidden ones)
//   is read from what each achievement's own description requires.
export const GUIDE = {

    slug: "satisfactory-achievement-guide",
    category: "game",
    gameSlug: "satisfactory",
    icon: "🏭",
    title: "Satisfactory Achievement Guide",
    summary: "A practical guide to all 44 Steam achievements in Satisfactory - the Space Elevator phases, the building and collectible milestones, the exploration and novelty feats, and the four hidden achievements.",

    relatedSlugs: ["achievement-completion-and-tracking", "understanding-achievement-availability"],

    sections: [

        {
            heading: "Overview",
            body: [
                "Satisfactory has 44 Steam achievements, four of them hidden. Almost all come from simply playing a save to completion - building a big factory, progressing the Space Elevator, and picking up the map's collectibles along the way.",
                "Nothing is missable. A single world carried to the end of the game earns nearly everything; the collectible-heavy ones (150 Mercer Spheres, 50 Somersloops, 100 Hard Drives) are the main time sink.",
                "Tip: set up automated production for the Space Elevator parts early and let it run in the background while you explore for Power Slugs, Hard Drives, Somersloops and Mercer Spheres. The exploration is where most of the achievement time actually goes."
            ]
        },

        {
            heading: "Space Elevator Progression",
            body: [
                "Do you want a medal? (complete the Onboarding) starts you off. Then the phase achievements: Mediocre pioneering, Adequate pioneering, Pretty good pioneering, Efficient pioneering, and Saved the Day, probably (Phase 5, which finishes the game). Commencing Project Assembly is for building the Space Elevator itself.",
                "Research and milestones: Curiosity killed the cat... (complete one MAM research tree), ...Satisfactory brought it back (complete all MAM research trees), and Efficiency first (unlock all Milestones)."
            ]
        },

        {
            heading: "Building Milestones",
            body: [
                "A Concrete Example (5,000 Foundations), Bigger. Better. FICSIT. (your first Manufacturer), Spaghetti master (5 km of Conveyor Belts), Pipe dream (5 km of Pipelines), Railroad tycoon (5 km of Railway), Rock and stone! (place a Portable Miner), All aboard! (set up a train schedule), and Master Chef (unlock your first alternate recipe)."
            ]
        },

        {
            heading: "Collectibles",
            body: [
                "Power Slugs: Yoink! (one) and Caught them all (all three types). AWESOME Shop: Now where to spend it... (print your first Coupon), Do you need that? (buy the Golden Nut Statue), and Data driven (100 Hard Drives from Crash Sites).",
                "The alien artifacts: I'm sure these play a Critical Role (a Mercer Sphere), Consume (150 Mercer Spheres), Oddly familiar (a Somersloop), and My skin feels itchy all of a sudden... (50 Somersloops).",
                "Nature and world: Thank you for the music (a Boombox tape), Varied diet (all three edible flora), Heal this, nature! (destroy 1,000 foliage), and Let's see what's out there (visit each starting biome)."
            ]
        },

        {
            heading: "Exploration & Novelty",
            body: [
                "Movement feats: The floor is lava (avoid the ground for 30 minutes), Too fast, Too factory (move faster than 140 km/h), Peak gameplay (reach the highest cliff), and What a thrill (reach the maximum world height).",
                "Creatures and mishaps: New fear unlocked (fix a blown fuse), Wheeeee! (bounce on a Space Giraffe), Establish dominance (hit a creature with a vehicle), Look both ways next time (get knocked over by a vehicle), and Pioneer's best friend (tame a Lizard Doggo)."
            ]
        },

        {
            heading: "Hidden Achievements",
            body: [
                "Are you sure that's coffee? - drink the cup of coffee found in the world. That was a close one - survive a fall that leaves you on exactly 1 health point (jump off ladders at decreasing heights to line it up).",
                "Wait, you can pet it? - build up to a flying Manta and hop onto it to pet it. No refunds - unlock and build the Cyber Wagon (feed Coupons back into the AWESOME Sink to unlock the ability to buy it), then drive it."
            ]
        },

        {
            heading: "Suggested Order",
            body: [
                "Play a full save toward the end of the game: automate each Space Elevator phase (Do you want a medal?, Mediocre pioneering through Saved the Day, probably, Commencing Project Assembly) and unlock all Milestones and MAM trees along the way (Efficiency first, Curiosity killed the cat..., ...Satisfactory brought it back).",
                "Hit the building milestones as your factory grows (A Concrete Example, Bigger. Better. FICSIT., Spaghetti master, Pipe dream, Railroad tycoon, Rock and stone!, All aboard!, Master Chef), and explore continuously for Power Slugs (Yoink!, Caught them all), Hard Drives (Data driven), and the alien artifacts (Consume, My skin feels itchy all of a sudden...).",
                "Mop up the novelty and hidden achievements at any point - the movement feats (The floor is lava, Too fast, Too factory, Peak gameplay, What a thrill), the creature ones (Wheeeee!, Establish dominance, Pioneer's best friend), and the four hidden ones (Are you sure that's coffee?, That was a close one, Wait, you can pet it?, No refunds)."
            ]
        }

    ]

};
