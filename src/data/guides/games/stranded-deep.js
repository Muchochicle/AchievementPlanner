// Stranded Deep Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/stranded-deep.json), whose 37 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   313120 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 1 achievement(s) are Steam-hidden or ship no Steam
//   description; their description here is researched from community
//   100% guides and is a curatorial summary. Every other description is
//   Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "stranded-deep-achievement-guide",
    "category": "game",
    "gameSlug": "stranded-deep",
    "icon": "🏝️",
    "title": "Stranded Deep Achievement Guide",
    "summary": "A practical guide to all 37 Steam achievements in Stranded Deep (1 hidden). The one hidden achievement is the escape ending. Everything else - the crafting and survival first-steps, the three sea bosses, the tool and structure milestones, and the survival-day and exploration counters - carries Steam's own text.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Stranded Deep has 37 Steam achievements, 1 of them hidden. You survive a plane crash into the Pacific, crafting your way across a procedural archipelago. The visible achievements cover the survival and crafting first-steps (the intro, opening your backpack, a stone tool, a camp fire, skinning a crab), the tool and structure milestones (craft each tool tier, a raft, a shelter), the three sea bosses (the Great Abaia eel, Lusca the giant squid, the Meg shark), and the survival-day and exploration counters (survive N days, visit N islands, kill N sharks).",
                "The 1 hidden achievement, 'Out Of The Frying Pan', is the escape ending - repair an aircraft and fly off the islands, which requires defeating all three sea bosses first.",
                "The catalog marks it difficulty 3 (the sea bosses are dangerous) and single-playthrough. Nothing is missable in a standard survival save."
            ]
        },
        {
            "heading": "Survival & Crafting",
            "body": [
                "The intro, the crafting first-steps (backpack, stone tool, camp fire, skin a crab), the tool and structure milestones, and the survival-day and exploration counters.",
                "The achievements here: Horrific Pacific (Complete the intro tutorial.); Backpacker (Open your backpack.); Back To The Stone Age (Craft a Stone Tool.); Look What I Have Created! (Craft and light a Camp Fire.); Knife Skills (Skin a crab.); Crabby Patty (Cook crab meat.); Fishing Season Is Open! (Catch your first fish.); Island Hopper (Visit an island other than the first.); Day 10 (Survive for 10 days.); Hermit (Spend 10 days on one island.); Vegetarian (Spent 10 days without eating meat.); Hunter Of The High Seas (Defeat your first sea monster.); New Threads (Craft something using the Loom.); Fish Are Friends (Go 10 days without eating a fish.); The Seas Harvest (Catch 10 fish.); Moving Up (Craft the Hobo Stove.); Green Thumb (Plant your first farm plot.); Horticulturalist (Have 1 of each farm crop planted on the same island.); Another Day, Another Shore (Create a camp (fire) on 5 distinct islands.); Working With My Hands (Craft 20 tools.); Unchained Melody (Make a clay flask.); Day 20 (Survive for 20 days.); Powah! (Craft a Motor Boat.); Nomad (Craft a Sleeping Bag.); Da Vinci (Craft the Gyro-copter.); Call Me Ahab (Collect all sea monster trophies.); Columbus (Create a camp (fire) on 10 distinct islands.); Lean, Mean, Crafting Machine (Craft 40 tools.)."
            ]
        },
        {
            "heading": "Bosses & Escape",
            "body": [
                "The three sea bosses (the Great Abaia, Lusca, the Meg) and the escape ending.",
                "The achievements here: Industrial Fashion (Craft 10 pieces of furniture using corrugated scrap.); Archaeologist (Find all survivor remnants.); Special Package (Find Wolley.); Gotta Craft 'Em All! (Craft 1 of each item on the same island.); Day 50 (Survive for 50 days.); Day 100 (Survive for 100 days.); Out Of The Frying Pan (Repair an aircraft and fly off the islands - the game's escape ending, reached after defeating the three sea bosses.); Magnets (Escaped without using the compass.); This Sparks Joy (Craft 100 item piles.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Do the intro and craft your way up - a stone tool, a camp fire, a raft, a shelter - and skin a crab.",
                "2. Explore outward, visiting islands and surviving days toward those counters, and kill sharks as they harass you.",
                "3. Gather the boss trophy materials, then hunt the three sea bosses (the Great Abaia, Lusca, the Meg) one at a time from a strong raft.",
                "4. With all three boss trophies, repair the aircraft and fly off the islands for 'Out Of The Frying Pan'.",
                "Tip: build a large motorised raft with walls and a container before fighting any boss - the fights happen at sea, a swamped or destroyed raft strands you far from base, and the Meg in particular will wreck a small starter raft in seconds."
            ]
        }
    ]
};
