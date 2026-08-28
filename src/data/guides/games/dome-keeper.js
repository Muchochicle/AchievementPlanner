// Dome Keeper's Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/dome-keeper.json), whose 47 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1637320 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js) - 36 of 47 ship a real,
//   official Steam description, quoted directly below.
// - The 11 hidden achievements ship no Steam description. Their unlock
//   conditions here are curatorial, cross-checked against a Steam
//   Community 100% achievement guide and the Last Word on Gaming
//   achievements guide (both agreeing on each condition).
// - The grouping (worlds and domes/keepers, the Relic Hunt map sizes,
//   the three battle-ability trees, gadgets and mining feats, the
//   prestige/endless mode, then the Assessor-specific feats and the
//   remaining hidden one-offs) follows the achievements' own apiname
//   prefixes.
export const GUIDE = {

    slug: "dome-keeper-achievement-guide",
    category: "game",
    gameSlug: "dome-keeper",
    icon: "⛏️",
    title: "Dome Keeper Achievement Guide",
    summary: "A practical guide to all 47 Steam achievements in Dome Keeper - the worlds and keepers, the Relic Hunt map sizes, the battle-ability trees, the gadget and mining feats, and the prestige and Assessor content.",

    relatedSlugs: ["achievement-completion-and-tracking", "understanding-achievement-availability"],

    sections: [

        {
            heading: "Overview",
            body: [
                "Dome Keeper has 47 Steam achievements, 11 of them hidden. It is a run-based dig-and-defend game, so nothing is missable - every world, dome, keeper, and gadget is always available on your next run.",
                "The list spans unlocking the worlds and the two keepers, clearing Relic Hunt on each map size, maxing out the three battle-ability trees, a spread of gadget and mining feats, the prestige/endless mode, and a block of achievements specific to the second keeper, the Assessor.",
                "Tip: many feats (big lift loads, resource hoards, gadget usage counts) are easiest on a large map with a slow, deliberate run where survival is never in doubt. Set difficulty low and take your time rather than trying to combo them into a serious attempt."
            ]
        },

        {
            heading: "Worlds, Domes & Keepers",
            body: [
                "Unlock the worlds: Land of the orbs (orb world), Land of the behemoth (behemoth world), Land of the stalks (stalk world), and Land of the Spores (mushroom world).",
                "Stick them with the pointy end unlocks the sword dome, and Master of Gravity unlocks the Assessor, the second keeper. Gifts from the past (retrieve a relic) is the first thing most runs earn."
            ]
        },

        {
            heading: "Relic Hunt",
            body: [
                "Relic Hunt is the main mode. Bite sized, The regular, and The deep end unlock for completing it on a small, medium, and large map respectively.",
                "Quick Finish rewards retrieving the relic within 20 minutes, and I came prepared asks you to beat the final wave after retrieving the relic without using the relic bomb's help.",
                "Veteran Keeper (win 10 runs) accumulates across all of this."
            ]
        },

        {
            heading: "Battle Abilities",
            body: [
                "Each defensive structure has a \"complete\" achievement for unlocking all of its battle abilities: Shield Completed, Repellent completed, and Orchard completed.",
                "Ready for Battle (have 200 or more shield HP ready), Take your time (delay a wave by more than 0.5 cycles with the repellent), and Rich in Fiber (consume an orchard fruit that buffs you for at least 0.9 cycles) are individual ability payoffs."
            ]
        },

        {
            heading: "Gadgets & Mining",
            body: [
                "Gadget-usage feats: Earth shattering (use 15 blast charges in one run), The third eye (detect 15 resources with the probe in one cycle), Waterworld (produce 10 water with the condenser in one run), and Transmogrification (perform 10 conversions in one run).",
                "Hauling and hoarding: Hoarder (hoard 8 cobalt), Shopping Bag Conundrum (carry 20 resources back in one go), We're gonna need a bigger lift (80 resources hanging in the lift), My good mule (have the lift transport 200 resources in one run), and Half Marathon (travel half a Marathon's length in one run).",
                "Doping rewards feeding Drillbert 10 treats in one run."
            ]
        },

        {
            heading: "Prestige & Endless",
            body: [
                "A keeper of status unlocks prestige mode. Then: Compounding interest (reach a prestige multiplier of 10 in endless mode), My name shall be known (win a prestige run with 1000 points or more), and Bringing home the big bucks (gain 200 prestige in one wave)."
            ]
        },

        {
            heading: "The Assessor",
            body: [
                "The Assessor fires and reflects spheres. Its visible achievements are Great-Great-Grandspheres (split a sphere into the 5th generation), Hat Trick (explode 3 spheres with one activation), and Full Clip (have 6 spheres ready to fire).",
                "Its three hidden achievements are Solitaire Pong (reflect a sphere 40 times in a row), Perfect Placement (have a sphere fly for 23 seconds without reflecting it), and Bulky Goods (shoot a bundle of at least 25 resources)."
            ]
        },

        {
            heading: "Other Hidden Achievements",
            body: [
                "Close Call - survive a wave with the dome down to 1% health. Deep and Greedy - reach a depth of 100 (only possible in prestige). Precisely when I meant to - enter the dome the instant a wave begins. Thorough - mine every block on the map.",
                "Learning Opportunity - lose 10 runs. My Savior - find a cobalt while storing none, with the dome below 10% health. Find a Friend - hatch the mysterious egg you find while mining. The Need for Speed - reach a speed of 200 as the Engineer keeper."
            ]
        },

        {
            heading: "Suggested Order",
            body: [
                "Play Relic Hunt normally to unlock the worlds (Land of the orbs, Land of the behemoth, Land of the stalks, Land of the Spores), the sword dome, and eventually the Assessor, while Gifts from the past, Bite sized, The regular, and The deep end fall out along the way.",
                "Do a few slow large-map runs to farm the gadget and hauling feats (Earth shattering, The third eye, Waterworld, Transmogrification, Hoarder, Shopping Bag Conundrum, We're gonna need a bigger lift, My good mule, Half Marathon, Doping, Thorough) and grab Close Call, Precisely when I meant to, My Savior, and Find a Friend.",
                "Finish the battle-ability trees (Shield Completed, Repellent completed, Orchard completed, plus Ready for Battle, Take your time, Rich in Fiber), then unlock prestige for A keeper of status, Compounding interest, My name shall be known, Bringing home the big bucks, and Deep and Greedy.",
                "Round out the Assessor feats (Great-Great-Grandspheres, Hat Trick, Full Clip, Solitaire Pong, Perfect Placement, Bulky Goods), reach speed 200 for The Need for Speed, and let Veteran Keeper and Learning Opportunity tick over."
            ]
        }

    ]

};
