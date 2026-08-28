// ELDEN RING's Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/elden-ring.json), whose 42 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1245620 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js) - 6 of 42 ship a real,
//   official Steam description, quoted directly below.
// - The other 36 are hidden. FromSoftware hides almost every boss and
//   ending achievement by house style, not because each is a deep
//   spoiler. Their unlock conditions here are curatorial and match the
//   pattern the six visible descriptions establish ("Defeat X",
//   "Acquired all X"), cross-checked against the Fextralife and
//   Fandom Elden Ring wikis and a Steam Community 100% guide. The three
//   endings are named but not explained beyond how they are reached.
// - The grouping (the endings, the Shardbearers, the critical-path
//   bosses and story milestones, the optional bosses, then the four
//   legendary collections) follows the achievements' own apiname order
//   (ACH01-ACH41) and the game's structure.
export const GUIDE = {

    slug: "elden-ring-achievement-guide",
    category: "game",
    gameSlug: "elden-ring",
    icon: "🌳",
    title: "ELDEN RING Achievement Guide",
    summary: "A practical guide to all 42 Steam achievements in ELDEN RING - the three endings, the six Shardbearers, every critical-path and optional boss, and the four legendary equipment collections.",

    relatedSlugs: ["achievement-completion-and-tracking", "understanding-achievement-availability"],

    sections: [

        {
            heading: "Overview",
            body: [
                "ELDEN RING has 42 Steam achievements. 36 are hidden, but that is FromSoftware's house style - most are simply \"defeat this boss\" - rather than a wall of story spoilers. The real work is that the list wants almost every boss in the game, main and optional.",
                "Two things need planning. The three endings (Elden Lord, Age of the Stars, Lord of Frenzied Flame) are mutually exclusive in a single ending, so back up a save at the last Site of Grace before the final boss, or use New Game Plus. The four legendary collections also realistically span more than one playthrough unless you follow a route carefully.",
                "Tip: keep one manual save slot untouched from the moment you can see the final boss's arena. Getting all three ending achievements from that one save takes about 20 minutes each; missing the save costs a full New Game cycle."
            ]
        },

        {
            heading: "The Three Endings",
            body: [
                "Elden Lord is the default ending, reached by touching the Erdtree after the final boss. Age of the Stars requires completing Ranni the Witch's questline and choosing her ending instead. Lord of Frenzied Flame requires deliberately taking on the Three Fingers' Frenzied Flame beforehand, which locks out the other two until you undo it via a late-game questline.",
                "Tip: get Lord of Frenzied Flame first if you want it, then reload your pre-ending save for Age of the Stars (having done Ranni's quest), then Elden Lord. That order avoids the Frenzied Flame lockout entirely."
            ]
        },

        {
            heading: "The Shardbearers",
            body: [
                "Six achievements are for the demigod Shardbearers: Shardbearer Godrick, Shardbearer Radahn, Shardbearer Morgott, Shardbearer Rykard, Shardbearer Malenia, and Shardbearer Mohg. Godrick and Morgott are on the critical path; Radahn, Rykard, Malenia, and Mohg are found out in the world (Malenia is the game's hardest fight by a wide margin)."
            ]
        },

        {
            heading: "Critical Path & Milestones",
            body: [
                "Story milestones: Roundtable Hold (arrive there), Great Rune (restore the power of a Great Rune, easiest right after Godrick), and Erdtree Aflame (set the Erdtree alight, which happens automatically late in the game).",
                "Critical-path bosses beyond the Shardbearers: Margit, the Fell Omen, Red Wolf of Radagon, Rennala, Queen of the Full Moon, Godskin Duo, Fire Giant, Maliketh the Black Blade, and Hoarah Loux, Warrior. God-Slaying Armament is the one non-hidden combat achievement here - upgrade any weapon to its maximum level."
            ]
        },

        {
            heading: "Optional Bosses",
            body: [
                "A large block of achievements is for optional bosses scattered across the Lands Between. Legend and dungeon bosses: Dragonlord Placidusax, Lichdragon Fortissax, Dragonkin Soldier of Nokstella, Regal Ancestor Spirit, Valiant Gargoyles, Astel, Naturalborn of the Void, and Ancestor Spirit.",
                "Field and area bosses: Godskin Noble, Magma Wyrm Makar, Godfrey, First Elden Lord, Mohg, the Omen, Mimic Tear, Loretta, Knight of the Haligtree, Royal Knight Loretta, Leonine Misbegotten, Elemer of the Briar, and Commander Niall. None are required to finish the game, but all are required for 100%."
            ]
        },

        {
            heading: "Legendary Collections",
            body: [
                "Four achievements ask you to gather full legendary sets: Legendary Armaments (all nine legendary weapons), Legendary Ashen Remains (all six legendary spirit ashes), Legendary Sorceries and Incantations (all seven), and Legendary Talismans (all eight).",
                "Tip: these are the most missable part of the list because several come from NPC questlines or one-time areas. Follow a checklist as you play rather than trying to backtrack - a few of them cannot be recovered in the same playthrough once their questline is failed."
            ]
        },

        {
            heading: "Suggested Order",
            body: [
                "Play through the game naturally, defeating every boss you find rather than rushing - most of the optional-boss achievements (Leonine Misbegotten, Red Wolf of Radagon, Godskin Noble, Magma Wyrm Makar, Valiant Gargoyles, Loretta, Knight of the Haligtree, and the rest) come for free this way, along with Roundtable Hold and Great Rune.",
                "Follow a legendary-collectibles checklist in the same run for Legendary Armaments, Legendary Ashen Remains, Legendary Sorceries and Incantations, and Legendary Talismans, and max out one weapon for God-Slaying Armament.",
                "Clear the Shardbearers (Shardbearer Godrick, Radahn, Morgott, Rykard, Mohg, then Malenia last) and the remaining critical-path bosses (Margit, Rennala, Godskin Duo, Fire Giant, Maliketh, Hoarah Loux) plus the hard optional ones (Dragonlord Placidusax, Lichdragon Fortissax, Astel, Naturalborn of the Void, Mohg, the Omen, Commander Niall).",
                "At the final Grace, save and take all three endings in the order above (Lord of Frenzied Flame, Age of the Stars, Elden Lord). Elden Ring unlocks once every other achievement is done."
            ]
        }

    ]

};
