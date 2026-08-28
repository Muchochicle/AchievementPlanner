// God of War's Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/god-of-war.json), whose 37 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1593500 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js) - 23 of 37 ship a real,
//   official Steam description, quoted directly below.
// - The 14 hidden achievements are all automatic story-progression
//   markers (apiname ACHIEVEMENT_1..13 plus ACHIEVEMENT_28). They are
//   summarised here only as "a story achievement at a point in the
//   campaign", with no plot detail, per this catalog's spoiler-conscious
//   convention.
// - The grouping (story, upgrades and gear, realm exploration and
//   collectibles, then the optional combat challenges) is read from
//   what each achievement's own description requires.
export const GUIDE = {

    slug: "god-of-war-achievement-guide",
    category: "game",
    gameSlug: "god-of-war",
    icon: "🪓",
    title: "God of War Achievement Guide",
    summary: "A practical guide to all 37 Steam achievements in God of War - the story, weapon and armor upgrades, realm exploration and collectibles, and the optional Muspelheim and Valkyrie challenges.",

    relatedSlugs: ["achievement-completion-and-tracking", "understanding-achievement-availability"],

    sections: [

        {
            heading: "Overview",
            body: [
                "God of War has 37 Steam achievements. 14 are hidden and are all automatic story markers - you cannot miss them. The rest are upgrade milestones, collectible sweeps, and a few optional combat challenges.",
                "Nothing is missable: the game opens back up after the credits, and every region, collectible, and boss can be returned to for full completion.",
                "Tip: don't chase 100% during the story. Finish the campaign first, then use the free-roam post-game to mop up collectibles and take on the Valkyries once your gear is strong."
            ]
        },

        {
            heading: "Story",
            body: [
                "Fourteen hidden achievements unlock automatically as the story advances: The Journey Begins, A New Friend, Feels Like Home, Dragon Slayer, Troubling Consequences, Hello, Old Friend, Promise Fulfilled, Round 2, Past Haunts, Twilight Beckons, Last Wish, Beneath the Surface, Death Happened Here, and Why Fight It? Play the campaign through and all fourteen come on their own."
            ]
        },

        {
            heading: "Upgrades & Gear",
            body: [
                "Crafting and enchanting: Dwarven Ingenuity (upgrade a piece of armor), Nice Moves (obtain a Runic Attack Gem), Best Dressed (craft an outfit for Atreus), and Enchanted (slot an Enchantment).",
                "Full upgrades: Iðunn’s Orchard (max your Health), Quick Tempered (max your rage), The Best Moves (fully upgrade a Runic Attack), and Worthy (fully upgrade the Leviathan Axe).",
                "Armor sets: Path of the Zealot (the Traveler set) and Primordial (the Ancient set), both crafted from materials dropped by tougher enemies."
            ]
        },

        {
            heading: "Exploration & Collectibles",
            body: [
                "Collection sweeps: Trilingual (learn the languages of Muspelheim and Niflheim), Dangerous Skies (free all the Dragons), Like Oil and Water (all of Brok and Sindri's Favors), Curator (all Artifacts), Allfather Blinded (kill all of Odin's Ravens), Unfinished Business (help all the wayward spirits), Treasure Hunter (all treasure-map dig spots), The Truth (read all the Jötnar shrines), and Darkness and Fog (all treasure from the Workshop's center chamber)."
            ]
        },

        {
            heading: "Combat Challenges",
            body: [
                "All Will Fall (kill 1,000 enemies) fills in over a normal playthrough. Fire and Brimstone requires completing every Trial of Muspelheim - a wave-based arena mode - and Chooser of the Slain requires defeating all nine Valkyries, the game's hardest optional fights by a wide margin.",
                "Tip: come back for the Valkyries last, with maxed gear, a good Runic Attack loadout, and resurrection stones stocked. The Valkyrie Queen in particular expects a near-endgame build."
            ]
        },

        {
            heading: "Completion",
            body: [
                "Father and Son unlocks for obtaining every other achievement in the game."
            ]
        },

        {
            heading: "Suggested Order",
            body: [
                "Play the campaign for the fourteen story markers (The Journey Begins through Why Fight It?), doing side content and upgrades as you naturally reach them.",
                "After the credits, sweep the realms for the collectible achievements (Curator, Allfather Blinded, Treasure Hunter, The Truth, Unfinished Business, Dangerous Skies, Like Oil and Water, Darkness and Fog, Trilingual) and finish your upgrades (Iðunn’s Orchard, Quick Tempered, Worthy, The Best Moves, Path of the Zealot, Primordial).",
                "Clear the Trials of Muspelheim for Fire and Brimstone, then take on all nine Valkyries for Chooser of the Slain. All Will Fall will have unlocked along the way, and Father and Son pops with the last of them."
            ]
        }

    ]

};
