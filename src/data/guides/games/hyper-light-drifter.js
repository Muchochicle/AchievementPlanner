// Hyper Light Drifter's Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/hyper-light-drifter.json), whose 23
//   achievements were sourced directly from Steam's own achievement
//   schema for appid 257850 via ISteamUserStats/GetSchemaForGame (fetched
//   through this app's own backend/services/steamApi.js) - 17 of 23 ship
//   a real, official Steam description, quoted directly below.
// - Natural Leader, The Dash Eternal, Star Athlete, Boss Rush Level 1,
//   Boss Rush Level 2, and Boss Rush Level 3 are hidden achievements
//   Steam never describes publicly (confirmed via the same API call) -
//   their descriptions here are curatorial, cross-checked against
//   independent unlock guides (TrueAchievements, XboxAchievements, and
//   the Hyper Light Drifter Fandom wiki) that agree on the same
//   requirements.
// - The catalog's game-level missable:true reflects that a handful of
//   world-state achievements (like taming the wild creature for Natural
//   Leader) are tied to a specific point in a given save and are easiest
//   to guarantee via New Game+ if missed on a first run - not because
//   anything is lost forever on a single save.
export const GUIDE = {

    slug: "hyper-light-drifter-achievement-guide",
    category: "game",
    gameSlug: "hyper-light-drifter",
    icon: "💠",
    title: "Hyper Light Drifter Achievement Guide",
    summary: "A practical guide to all 23 Steam achievements in Hyper Light Drifter - collectibles, boss fights, the brutal Boss Rush loadout challenges, and the no-death run at the very top of the list.",

    relatedSlugs: ["achievement-completion-and-tracking", "understanding-achievement-availability"],

    sections: [

        {
            heading: "Overview",
            body: [
                "Hyper Light Drifter has 23 Steam achievements. Most track normal exploration, combat, and collectibles, but a few - especially One Shot and the three Boss Rush loadout achievements - are genuine, deliberate skill challenges rather than things that fall out of casual play.",
                "Nothing here is permanently lost on a single save the way a linear game's missed collectible can be - the world stays fully explorable throughout, and New Game+ (needed for Masochist anyway) is always available as a second pass at anything missed the first time."
            ]
        },

        {
            heading: "Collectibles & World Achievements",
            body: [
                "Diamonds Are Forever (collect all modules), Shine Bright (collect all Gearbits), Walk-In Closet (collect all outfits), Librarian (collect all tablets), and Armory (collect all Weapons) are the game's five main collection categories, each scattered across every region. Hoarder (Collect Everything) is the sum of all of them - the single largest checklist achievement in the game.",
                "Bully (beat all bosses) and Contender (beat Hoarde Mode) round out the core combat content outside the main story bosses.",
                "Meditation (\"Casey would know what to do\") and Natural Leader both reward noticing small, easy-to-miss world details rather than fighting anything - Natural Leader in particular comes from taming one of the wild wolf-like creatures roaming the world by feeding it until it starts following you."
            ]
        },

        {
            heading: "Combat Techniques",
            body: [
                "Nice Shot! (kill 5 enemies with a bomb), Dummy (trick a Dirk into jumping off a ledge), Chain Dash Champion, Line Em' Up (hit 4 enemies with one railgun shot), and The Dash Eternal all reward specific combat and movement techniques rather than raw progress. The Dash Eternal is the most demanding of these - performing 800 dashes in a single visit to the chain-dash room found in the western region.",
                "Star Athlete is a lighter break from combat: win the Drifters' soccer minigame south of town by dashing the ball into the goal.",
                "Nothing's Easy, Now is it? and Don't Give Up! both track dying - the opening tutorial death, and repeated deaths over the course of a full playthrough respectively - so unlike almost everything else on this list, these don't require any deliberate effort to avoid."
            ]
        },

        {
            heading: "Boss Rush & One Shot",
            body: [
                "Boss Rush Level 1, Boss Rush Level 2, and Boss Rush Level 3 form an escalating gauntlet: clear the Boss Rush mode with the Fully Loaded loadout (all weapons, both grenade types, sword deflection, and 5 starting health packs) for Level 1, then the harder Mid-Range loadout for Level 2 once it unlocks, then the brutal Naked loadout - pistol only, no grenades, no sword deflection, just 3 health packs - for Level 3.",
                "One Shot is widely considered the hardest achievement in the game: finish the entire main story without dying even once. It demands a clean, careful run from start to finish, not just skilled boss fights.",
                "Tip: attempt One Shot only once you're already comfortable with every boss and area from normal play - dying anywhere, including to a regular enemy far from any boss, resets the attempt, so familiarity with the whole map matters as much as combat skill."
            ]
        },

        {
            heading: "Suggested Order",
            body: [
                "Play through normally first, picking up collectibles as you naturally explore - most of Diamonds Are Forever, Shine Bright, Walk-In Closet, Librarian, and Armory falls out of thorough exploration without a dedicated hunt.",
                "Grab Natural Leader, Meditation, Star Athlete, and The Dash Eternal whenever convenient during that same playthrough - none of them require any real combat skill, just knowing where to look.",
                "Save One Shot and the three Boss Rush loadout achievements for once every boss and area is already familiar - both are pure execution challenges best attempted after full-game knowledge is in place, and Masochist (beat NG+) naturally follows once a first full clear is done."
            ]
        }

    ]

};
