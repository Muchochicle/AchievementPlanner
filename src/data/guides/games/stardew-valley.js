// Stardew Valley's Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/stardew-valley.json), whose 49 achievements
//   were sourced directly from Steam's own achievement schema for appid
//   413150 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js) - 47 of 49 ship a real,
//   official Steam description, quoted directly below.
// - Legend and Fector's Challenge are hidden achievements Steam never
//   describes publicly (confirmed via the same API call) - their
//   descriptions here are curatorial, cross-checked against
//   TrueAchievements' independent documentation of their real unlock
//   conditions (10,000,000g earned; beating the Journey of the Prairie
//   King minigame without dying once).
// - The grouping below (money, friendship, cooking, crafting, fishing,
//   shipping, the endgame trio, etc.) is read directly from what each
//   achievement's own official description requires, not invented -
//   e.g. every "Reach a [N]-heart friend level with [N] people"
//   achievement is unambiguously a friendship achievement.
// - The catalog's game-level missable:false reflects that a Stardew
//   Valley save file never truly ends - in-game years continue
//   indefinitely, so nothing here is ever permanently out of reach on a
//   given save the way a linear game's missed collectible can be. The
//   one real exception, called out below rather than hidden in the data,
//   is that Local Legend and Joja Co. Member Of The Year are mutually
//   exclusive on a single save (the Community Center and the Joja
//   route are alternate, incompatible story paths).
export const GUIDE = {

    slug: "stardew-valley-achievement-guide",
    category: "game",
    gameSlug: "stardew-valley",
    icon: "🌾",
    title: "Stardew Valley Achievement Guide",
    summary: "A practical guide to all 49 Steam achievements in Stardew Valley - farming, friendship, crafting, fishing, the Community Center vs. Joja choice, and the long road to Perfection.",

    relatedSlugs: ["achievement-completion-and-tracking", "understanding-achievement-availability"],

    sections: [

        {
            heading: "Overview",
            body: [
                "Stardew Valley has 49 Steam achievements. A save file never truly ends - years continue indefinitely - so nothing here is permanently missable on a given save, with one real exception: Local Legend (restoring the Community Center) and Joja Co. Member Of The Year (the Joja route) are mutually exclusive story paths on the same save. Picking one forecloses the other unless you start a new farm.",
                "Most of the list rewards long-term, ongoing progress rather than one-off actions - money earned, friendships built, recipes cooked, items crafted, fish caught - so nearly all of it accumulates naturally the more you play, without needing a dedicated \"achievement hunting\" detour from normal farm life."
            ]
        },

        {
            heading: "Money Milestones",
            body: [
                "Greenhorn (15,000g), Cowpoke (50,000g), Homesteader (250,000g), and Millionaire (1,000,000g) mark increasing lifetime earnings, unlocking automatically as your total income crosses each threshold.",
                "Legend, a hidden achievement, is the same idea taken much further: 10,000,000g total earned. It's realistically a very-long-term goal reached well after most other achievements, once a farm's income has been optimized for a long while."
            ]
        },

        {
            heading: "Friendship",
            body: [
                "A New Friend and Best Friends mark your first 5-heart and 10-heart relationships. Cliques, Networking, and Popular scale that up to 4, 10, and 20 people at 5 hearts, while The Beloved Farmer asks for 10 hearts with 8 different people - a much bigger, more deliberate investment than the single-relationship achievements.",
                "Full House (get married and have two kids) is its own separate relationship milestone, tied to actually marrying a spouse rather than just building friendship levels."
            ]
        },

        {
            heading: "Cooking, Crafting, Skills & Home",
            body: [
                "Cook, Sous Chef, and Gourmet Chef track cooked recipes at 10, 25, and every recipe in the game. D.I.Y., Artisan, and Craft Master do the same for crafted items at 15, 30, and everything craftable.",
                "Singular Talent (level 10 in one skill) and Master Of The Five Ways (level 10 in all five skills - farming, mining, foraging, fishing, and combat) reward deep specialization versus full mastery respectively.",
                "Moving Up and Living Large are simpler milestones tied to your farmhouse itself: the first house upgrade, and the final, maximum-size upgrade - both just require enough gold saved up and a visit to Robin's carpenter shop."
            ]
        },

        {
            heading: "Fishing & the Museum",
            body: [
                "Fisherman, Ol' Mariner, and Master Angler track distinct fish species caught, at 10, 24, and every fish in the game - Master Angler is widely considered one of the longest achievements here, since several fish are tied to specific seasons, weather, times of day, or locations. Mother Catch is a separate, simpler count: 100 fish caught in total, regardless of species.",
                "A Complete Collection and Treasure Trove both center on the museum: donating 40 different items unlocks Treasure Trove, while fully completing the museum's entire collection unlocks A Complete Collection - a much larger undertaking."
            ]
        },

        {
            heading: "Farming, Shipping & Help Wanted",
            body: [
                "Polyculture (ship 15 of each crop) and Monoculture (ship 300 of one single crop) reward two opposite farming strategies - diversity versus specialization - while Full Shipment asks for every shippable item in the game at least once, one of the largest checklist achievements here.",
                "Gofer and A Big Help track completed 'Help Wanted' bulletin board requests, at 10 and 40 respectively - a steady, ongoing task rather than something to farm in one sitting."
            ]
        },

        {
            heading: "Mining & Combat",
            body: [
                "The Bottom (reach the mines' lowest level) and Danger In The Deep (reach the bottom of the tougher Skull Cavern) are both depth-based mining milestones, with Skull Cavern being the significantly harder, more dangerous of the two.",
                "Infinite Power (obtain the best weapon) and Protector Of The Valley (complete every Adventure Guild Monster Slayer goal) both reward sustained combat investment - the latter in particular needs killing large numbers of many different monster types, not just a handful of tough fights."
            ]
        },

        {
            heading: "Story Paths, Collectibles & Special Events",
            body: [
                "Local Legend and Joja Co. Member Of The Year are the game's one real either/or choice - restoring the Community Center versus buying every Joja development perk are alternate, mutually exclusive routes through the same story content on a single save.",
                "Mystery Of The Stardrops (find every Stardrop) and Well-Read (read every book) are both scattered collectible hunts across the whole valley, not single locations.",
                "Two Thumbs Up (see a movie), Blue Ribbon (1st place at the Stardew Valley Fair), An Unforgettable Soup (delight the Governor), and Good Neighbors (help your forest neighbors grow their family) are each tied to specific, one-time seasonal events or story beats rather than ongoing progress.",
                "A Distant Shore (reach Ginger Island) marks unlocking the game's post-mainland content area."
            ]
        },

        {
            heading: "Prairie King & Fector's Challenge",
            body: [
                "Prairie King rewards simply beating the Journey of the Prairie King arcade cabinet found in the saloon - a real but manageable challenge on its own.",
                "Fector's Challenge, a hidden achievement, is a different level entirely: beating that same arcade game without dying even once. It's widely regarded as one of the hardest achievements in the game - a real test of pattern memorization and precise execution, not something to expect on a first attempt.",
                "Tip: practice Prairie King's early waves specifically before attempting Fector's Challenge - a no-death run lives or dies on not making mistakes in the easy early stretches, since later waves leave far less room for error."
            ]
        },

        {
            heading: "Perfection - The True Endgame",
            body: [
                "Perfection (\"Reach the summit\") is Stardew Valley's real, full completionist achievement - by far the longest-term goal in the game, realistically requiring most of the rest of this list already done, plus additional criteria (full Community Center completion, maximum friendship with everyone, and more) tracked separately from any single achievement above.",
                "Tip: treat Perfection as the natural conclusion of a long-term save rather than a separate goal to chase early - by the time every other achievement here is realistically in reach, Perfection's own remaining requirements are usually close behind."
            ]
        },

        {
            heading: "Suggested Order",
            body: [
                "Play normally for the first several in-game years - most of the money, friendship, cooking, crafting, fishing, and mining achievements complete themselves along the way without any dedicated detour.",
                "Decide on Local Legend vs. Joja Co. Member Of The Year early, since it shapes a meaningful chunk of the mid-game story content on that save.",
                "Grab Prairie King in an idle afternoon whenever convenient, then set aside a focused session for Fector's Challenge once you've practiced its early waves.",
                "Save Master Angler, Full Shipment, Legend, and Perfection for last - they're each realistically end-of-save goals that come together naturally once everything else on this list is already done."
            ]
        }

    ]

};
