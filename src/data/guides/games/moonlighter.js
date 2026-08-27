// Moonlighter's Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/moonlighter.json), whose 67 achievements
//   were sourced directly from Steam's own achievement schema for
//   appid 606150 via ISteamUserStats/GetSchemaForGame (fetched through
//   this app's own backend/services/steamApi.js) - 49 of 67 ship a
//   real, official Steam description, quoted directly below.
// - The 18 hidden achievements (all the shop-management quirks, the
//   Wanderer Dungeon elevator floors, and a few boss/dungeon secrets)
//   are hidden achievements Steam never describes publicly (confirmed
//   via the same API call) - their descriptions here are curatorial,
//   sourced from an independent Steam Community 100% achievement guide
//   documenting each one's real unlock condition.
// - The grouping below (bosses, crafting, the shop itself, dungeon
//   exploration, combat grinding, and the game's shop-management
//   quirks) is read directly from what each achievement's own
//   description requires, not invented.
export const GUIDE = {

    slug: "moonlighter-achievement-guide",
    category: "game",
    gameSlug: "moonlighter",
    icon: "🏪",
    title: "Moonlighter Achievement Guide",
    summary: "A practical guide to all 67 Steam achievements in Moonlighter - the four dungeon bosses, running your shop by day, crafting every weapon, and the game's many playful shop-management quirks.",

    relatedSlugs: ["achievement-completion-and-tracking", "understanding-achievement-availability"],

    sections: [

        {
            heading: "Overview",
            body: [
                "Moonlighter has 67 Steam achievements. A normal playthrough - exploring the four dungeons by night and running your shop by day - naturally unlocks the boss, shop-upgrade, and story achievements; the deeper crafting, grinding, and shop-quirk achievements reward longer-term play across many runs.",
                "Nothing here is permanently missable - Moonlighter's dungeons are proc-generated and endlessly repeatable, so a missed one-off interaction (a specific shop-floor moment, a rare dungeon room) can always be gone back for on a later run."
            ]
        },

        {
            heading: "The Four Bosses",
            body: [
                "Overthrow the king! (defeat the Golem King), Prune the plant! (defeat Carnivurous Mutae), Behead the snake! (defeat Naja), and Unplug the energy! (defeat Energy Flux) mark first clears of the game's four main dungeon bosses.",
                "Perfect Golem King, Perfect Carnivurous Mutae, Perfect Naja, and Perfect Energy Flux ask for the same four fights again, but flawlessly - a much stricter combat-skill test than the first-clear versions.",
                "Improve Yourself, a hidden achievement, is a smaller combat milestone along the way: defeat Evil Will, a miniboss found in the Wanderer Dungeon.",
                "Greed is Over, also hidden, is the payoff for pushing past the main story: defeat the boss of the New Portal on floor 10 of the Wanderer Dungeon, well beyond the four main bosses."
            ]
        },

        {
            heading: "Crafting & Trick Weapons",
            body: [
                "Weaponmaster (craft every weapon in the game) is the big crafting achievement, broken down into five smaller ones by weapon type: Balanced Warrior (short swords), Heavy Warrior (big swords), Berserk Warrior (gloves), Piercing Warrior (spears), and Distant Warrior (bows).",
                "Strange Weapon (get your first Trick Weapon) and Trick Weapon Collector (get every Trick Weapon from the Dimensional Watcher) are a separate, smaller crafting track built around the game's special Trick Weapons rather than its standard weapon lines.",
                "Inter-Dimensional Blacksmith, a hidden achievement, marks a specific milestone within that same system: craft your first weapon using an inter-dimensional blueprint.",
                "Janitor (kill all four bosses using only the broom) is its own separate, self-imposed challenge - a much harder way to clear fights you've likely already beaten normally."
            ]
        },

        {
            heading: "Running the Shop",
            body: [
                "First Investment, Expansion, Luxury, and Emporium track your shop's four upgrade tiers, from the very first upgrade to the fully-expanded final version.",
                "Good Merchant (sell 20 items at the perfect price) and Evil Merchant (sell 20 items slightly overpriced) reward two very different, deliberate pricing strategies. Naive Merchant and Scammer, both hidden, push those same ideas to extremes: sell 40 items well below their perfect price, or rack up 60 negative customer reactions by pricing items far too high.",
                "Distracted Merchant, also hidden, is the flip side of a slow sales day: make 20 visitors leave your shop without buying anything.",
                "Decorative Mind (buy every decorative item) and Rynoka's Major! (buy all Town Board improvements) both track your longer-term spending on the town itself rather than the shop's own upgrades."
            ]
        },

        {
            heading: "Dungeon Exploration & the Wanderer Dungeon",
            body: [
                "Archeologist (read all of Crazy Pete's notes) and No Secrets (find a secret room 10 times) both reward thorough dungeon exploration rather than combat.",
                "Golem Apasionate, Forest Apasionate, Desert Apasionate, and Tech Apasionate each ask you to reach the third floor of their respective dungeon 10 times - a measure of how much you've run each dungeon, not how far you've pushed in any single run.",
                "Horde Mode (defeat four waves of enemies in a Wave room) is a smaller, single-room combat challenge distinct from the main boss fights.",
                "Second Floor, Fourth Floor, Sixth Floor, and Eight Floor, all hidden, mark building the elevator up through the Wanderer Dungeon's floors - each one a concrete progress milestone in that dungeon's much longer climb toward Greed is Over."
            ]
        },

        {
            heading: "Grinding & Shop-Floor Quirks",
            body: [
                "Rage against the Golems, Rage against the Forest, Rage against the Desert, and Rage against the Machinery each ask for 1000 kills of that dungeon's enemy type - long-term grinding milestones rather than single-run goals, alongside the simpler Savage! (10,000 total enemies killed across every dungeon).",
                "A handful of hidden achievements reward noticing small, easy-to-miss interactions: There is no avarice without penalty (die with a completely full inventory), Going for supplies... (use the Catalyst emblem in the room right before a boss room), Slime Protection Service (hit the Witch's slime attack 42 times), Does it grow on the trees?!?1 and Really?!? (get money from a money tree once, then 100 times), Healthcare System (get potions from breakable objects 20 times), Special Place (find Crazy Pete's special place), and Exterminator (kill 100 passive bugs).",
                "It takes a thief to catch a thief (earn money from the Banker 5 times) and Wasteful Merchant (buy more than 10 times from Le Retalier) both center on the game's two rival-merchant NPCs."
            ]
        },

        {
            heading: "Everything Else",
            body: [
                "Careful Merchant (complete the game under 40 deaths), Gotta go fast! (beat the game under 10 hours), and Hero or Merchant? (finish the game and discover the mystery of the fifth door) are each their own distinct completion-style challenge on top of a normal playthrough.",
                "Scribe (complete the Notebook) is the game's full enemy-bestiary achievement - it fills in naturally over many runs as you encounter and defeat every enemy type, rather than needing a dedicated hunt.",
                "Saver, Saver+, Saver++, and Greedy track increasing gold-on-hand thresholds (5,000 up to 1,000,000) - a natural byproduct of playing and saving rather than spending.",
                "A Bigger Family (get all DLC companions) is tied to Moonlighter's free DLC content rather than the base game.",
                "100% is the natural final achievement, unlocking once every other achievement on this list is already done.",
                "Tip: the four Apasionate (third-floor-10-times) and four Rage-against (1000-kills) achievements accumulate automatically the more you play - don't treat them as a separate grind, just keep track of them across your normal runs."
            ]
        },

        {
            heading: "Suggested Order",
            body: [
                "Play through the story normally first - defeating each boss, upgrading your shop through all four tiers, and crafting weapons as ingredients allow - picking up most of the easy shop-quirk achievements along the way without hunting for them.",
                "Push into the Wanderer Dungeon once the main story is done, working toward each elevator floor and eventually Greed is Over and Improve Yourself.",
                "Go back for the four Perfect boss fights, Weaponmaster, and Trick Weapon Collector once you're comfortable with combat and have every crafting ingredient in reach.",
                "Save the long-term grinds (Savage!, the four Rage-against achievements, the four Apasionate achievements, and Scribe) for last - they accumulate naturally the more you keep playing, rather than needing a dedicated final push."
            ]
        }

    ]

};
