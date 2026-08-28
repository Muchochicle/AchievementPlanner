// DARK SOULS III's Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/dark-souls-3.json), whose 43 achievements
//   were sourced directly from Steam's own achievement schema for appid
//   374320 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js) - 12 of 43 ship a real,
//   official Steam description, quoted directly below.
// - The other 31 are hidden (FromSoftware's house style: bosses,
//   covenants, endings, hidden areas). Their unlock conditions here are
//   curatorial, following the pattern the visible descriptions set
//   ("Defeat X", "Acquire all X"), cross-checked against the Fextralife
//   Dark Souls 3 wiki. The three endings are named but not explained.
// - The grouping (endings, Lords of Cinder, the boss list, hidden
//   areas, the covenants, the collection/upgrade sets, then completion)
//   follows the achievements' own apiname order.
export const GUIDE = {

    slug: "dark-souls-3-achievement-guide",
    category: "game",
    gameSlug: "dark-souls-3",
    icon: "🔥",
    title: "DARK SOULS III Achievement Guide",
    summary: "A practical guide to all 43 Steam achievements in DARK SOULS III - the three endings, the four Lords of Cinder, every boss, the eight covenants, and the sorcery/pyromancy/miracle/ring collections.",

    relatedSlugs: ["achievement-completion-and-tracking", "understanding-achievement-availability"],

    sections: [

        {
            heading: "Overview",
            body: [
                "DARK SOULS III has 43 Steam achievements, 31 of them hidden - almost all boss defeats, covenant discoveries, and the three endings, which is FromSoftware's house style rather than a spoiler wall.",
                "This realistically spans two or three playthroughs. The three endings are mutually exclusive per run, the eight covenants require items from all over the world (and some conflict), and the spell/ring collections are far too large for one playthrough.",
                "Tip: pick up every covenant item and every spell as you pass through an area on your first run - most are one-time or tied to NPCs who can die. Backtracking for them later, or in NG+, is much slower than grabbing them in order."
            ]
        },

        {
            heading: "The Three Endings",
            body: [
                "To Link the First Flame is the default ending. The End of Fire requires completing the Fire Keeper's questline. The Usurpation of Fire requires the Yoel/Yuria of Londor questline (taking all five free levels from Yoel, then following Yuria). Reload a save before the final boss to get all three from one character."
            ]
        },

        {
            heading: "Lords of Cinder",
            body: [
                "Four achievements for the mandatory Lords: Lords of Cinder: Abyss Watchers, Lord of Cinder: Yhorm the Giant, Lord of Cinder: Aldrich, Devourer of Gods, and Lord of Cinder: Lothric, Younger Prince. All four are required to reach the endgame."
            ]
        },

        {
            heading: "Bosses",
            body: [
                "Mandatory-path bosses: Iudex Gundyr, Vordt of the Boreal Valley, Curse-rotted Greatwood, Crystal Sage, Deacons of the Deep, High Lord Wolnir, Pontiff Sulyvahn, Dancer of the Boreal Valley, and Dragonslayer Armour.",
                "Optional bosses: Old Demon King, Oceiros, the Consumed King, Champion Gundyr, Ancient Wyvern, and The Nameless King - the hardest fight in the base game by a wide margin, hidden away in Archdragon Peak."
            ]
        },

        {
            heading: "Hidden Areas",
            body: [
                "Untended Graves is a dark mirror of the opening area, reached through Oceiros's arena. Archdragon Peak is entered by performing the Path of the Dragon gesture at a specific altar. Both contain required bosses (Champion Gundyr, Ancient Wyvern, The Nameless King)."
            ]
        },

        {
            heading: "Covenants",
            body: [
                "Eight achievements for discovering (finding the covenant item for) each: Covenant: Warrior of Sunlight, Covenant: Way of Blue, Covenant: Blue Sentinels, Covenant: Blade of the Darkmoon, Covenant: Rosaria's Fingers, Covenant: Mound-makers, Covenant: Watchdogs of Farron, and Covenant: Aldrich Faithful. You only need to obtain each covenant's item, not rank it up."
            ]
        },

        {
            heading: "Collections & Upgrades",
            body: [
                "Spell and item sets: Master of Sorceries, Master of Pyromancies, Master of Miracles, and Master of Rings (some rings are NG+/NG++ exclusive), plus Master of Infusion (every infusion type) and Master of Expression (learn all gestures).",
                "Upgrade milestones: Supreme Weapon Reinforcement (max any weapon), Ultimate Bonfire (max the bonfire via the Coiled Sword Fragment), Ultimate Estus (max the Estus Flask), Enkindle (light your first bonfire), and Embrace the Flame (become a Host of Embers for the first time)."
            ]
        },

        {
            heading: "Suggested Order",
            body: [
                "First run: play through the whole game, defeating every boss you find (Iudex Gundyr, Vordt of the Boreal Valley, Curse-rotted Greatwood, Crystal Sage, Deacons of the Deep, High Lord Wolnir, Pontiff Sulyvahn, Dancer of the Boreal Valley, Dragonslayer Armour, Old Demon King, Oceiros, the Consumed King) and the four Lords. Detour to Untended Graves for Champion Gundyr and Archdragon Peak for Ancient Wyvern and The Nameless King. Grab every covenant item and every spell you pass, and pick up the easy upgrade achievements (Enkindle, Embrace the Flame, Supreme Weapon Reinforcement, Ultimate Estus, Ultimate Bonfire).",
                "Before the final boss, reload and take all three endings (To Link the First Flame, The End of Fire, The Usurpation of Fire), having done the Fire Keeper and Yuria questlines.",
                "New Game Plus (and NG++) for the rings that only appear there, finishing Master of Rings, Master of Sorceries, Master of Pyromancies, Master of Miracles, Master of Infusion, and Master of Expression. The Dark Soul unlocks with the last of them."
            ]
        }

    ]

};
