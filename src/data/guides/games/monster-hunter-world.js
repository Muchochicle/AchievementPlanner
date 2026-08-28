// Monster Hunter: World Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/monster-hunter-world.json), whose 100
//   achievements were sourced directly from Steam's own achievement
//   schema for appid 582010 via ISteamUserStats/GetSchemaForGame
//   (fetched through this app's own backend/services/steamApi.js) - 65
//   of 100 ship a real, official Steam description, quoted directly
//   below.
// - The 35 hidden achievements ship no Steam description. Their
//   conditions here are curatorial, cross-checked against PowerPyx,
//   GameFAQs, Gamer Guides, RPG Site and Steam Community 100% guides.
//   They are the base-game and Iceborne main-story assignment markers
//   (described only by which star rank they unlock, no plot detail),
//   the tempered/variant hunt counts, and the rare endemic-life
//   captures.
// - The grouping is read from what each achievement requires: the two
//   story ladders, hunting and crowns, research and gear, endemic life
//   and collectibles, and multiplayer.
export const GUIDE = {

    slug: "monster-hunter-world-achievement-guide",
    category: "game",
    gameSlug: "monster-hunter-world",
    icon: "🐲",
    title: "Monster Hunter: World Achievement Guide",
    summary: "A practical guide to all 100 Steam achievements in Monster Hunter: World - the base-game and Iceborne story ladders, the hunting counts and crown collections, the research, zenny and gear milestones, the rare endemic-life captures, and the multiplayer achievements.",

    relatedSlugs: ["achievement-completion-and-tracking", "understanding-achievement-availability"],

    sections: [

        {
            heading: "Overview",
            body: [
                "Monster Hunter: World has 100 Steam achievements, 35 of them hidden. 50 belong to the base game, 50 to the Iceborne expansion (you need Iceborne for those). The two 'unlock everything' achievements are Conqueror of the New World (all base-game achievements) and Conqueror of the Hinterlands (all Iceborne achievements).",
                "Almost nothing is permanently missable - every quest can be replayed and every monster re-hunted - but this is a very long list. The crown collections (Miniature Crown Master, Giant Crown Master, True Miniature Crown Collector, True Large Crown Collector) and the rank grinds (Established Hunter at HR 100, Master of Masters at MR 200, Monster Master) are hundreds of hours on their own.",
                "Tip: play the whole base story, then the whole Iceborne story, before grinding anything. Both story ladders unlock huge chunks of the list automatically, raise your rank, and open the Guiding Lands where most of the Iceborne endgame achievements live."
            ]
        },

        {
            heading: "Story Progression (Base Game)",
            body: [
                "Nine hidden achievements track the base-game main story. Eight are 'earn the right to take on N-star assignments' as you climb the Hunter Rank wall: Welcome to the New World (two-star), Nothing Stops This Commission (three-star), Defender of Astera (four-star), Into the Deep (five-star), The Empress of the Highlands (seven-star) and One Shall Stand, One Shall Fall (eight-star). Death Begets Life is the Zorah Magdaros escort, and The Sapphire Star is the final story hunt.",
                "None of these can be missed - they come in order just by doing the story assignments."
            ]
        },

        {
            heading: "Story Progression (Iceborne)",
            body: [
                "Eleven hidden achievements track the Iceborne main story. The Master Rank star ladder is The Beginning of a New Expedition (one-star), Time to Get Serious (two-star), The Elusive Elder Dragon (three-star), Indomitable Spirit (four-star) and The Old Everwyrm (five-star). An End and a Beginning is the final Iceborne assignment.",
                "The rest are the Guiding Lands endgame: To the Land of Discoveries (reach the Guiding Lands and finish its intro quest), Evolving Ecology (raise one region to level 7), In Search of Rare Materials (mine a Giant Ore and a Giant Bone outcrop), Insatiable Investigator (analyse 50 special tracks) and Fate's Conclusion (slay Ruiner Nergigante to remove the MR cap)."
            ]
        },

        {
            heading: "Hunting, Capturing & Crowns",
            body: [
                "Kill and capture counts: Capture Novice (first capture), Capture Pro (50 captures), Elderslayer (50 elder dragons), Monster Slayer (100 large monsters), Monster Hunter (500 large monsters), and in Master Rank The True Hunt Begins (first MR large monster), Hunter Prodigy (100 MR large monsters), Master Capturer (50 MR captures) and Master Slayer (50 MR elder dragons).",
                "Tempered and variant monsters (hidden): Temper Temper (first tempered monster), Indomitable (50 tempered), Confronting the Unknown (first variant monster) and Seen It All (30 variants).",
                "Crowns are size records in your hunting log. Small: Miniature Crown, Miniature Crown Collector (10), Miniature Crown Master (most), and in MR Another Miniature Crown and True Miniature Crown Collector (almost all). Large: Giant Crown, Giant Crown Collector (10), Giant Crown Master (most), and in MR Another Giant Crown and True Large Crown Collector (almost all)."
            ]
        },

        {
            heading: "Research, Gear & Facilities",
            body: [
                "Economy and gear: Commissioned Work (100,000 research points), Bourgeois Hunter (1,000,000 zenny), Impregnable Defense and Power is Everything (five highly rare armor pieces / weapons), and in MR Unwavering Defense and Devastating Offense (five extremely rare armor pieces / weapons).",
                "Research: Monster Ph.D. (max high-rank research on many monsters), Monster Master (max research on almost all large monsters), and the Lynian Researcher requests Fledgling Observer (first) and Outstanding Observer (many).",
                "Home and helpers: Movin On Up (upgraded room), Remodeler and Interior Decorator (50 decor types) and Architectural Artist (120 decor types), First Friends (befriend a Tailraider), Bosom Buddies (a Palico gadget to level 10), Eager Engineer (help the Steamworks 20 times) and Skilled Steamworker (Steamworks overdrive)."
            ]
        },

        {
            heading: "Endemic Life & Collectibles",
            body: [
                "Base-game hidden captures with the capture net: A Living Fossil (the 'living fossil' fish), Snuggles for All (a fluffy creature), Bristles for All (a bristly creature) and Rainbow Bright (a rainbow-glittering creature).",
                "Iceborne hidden captures: Golden Gleam (Goldspring Macaque), Friendly Pointer (Arrowhead Gekko), Sweet Melody (Blue Diva), Submerged Mystery (fish up a Sealord's Crestfish), Celestial Illusion (Wintermoon Nettle), Deft Digger (a Moly in the Guiding Lands) and Creatures of the Earth (endemic life in all four Guiding Lands regions).",
                "Other collectible milestones: New World Settler (establish five camps), Master Explorer (all camps in the Hoarfrost Reach), Source of Relaxation (use a hot spring), Fledgling Collector / Veteran Collector / Ultimate Collector (first treasure / all treasure in one locale / all treasure), Personal Treasure (equip a pendant), Clutch Claw Neophyte (learn the clutch claw), First Ride and Experienced Rider (Raider Ride), Angling for a Bite (catch a fish), Mmm, So Tasty! (cook a well-done steak), The Bigger They Are... (mount a monster) and The Art of Camouflage (escape the Jagras pack by hiding in shrubs)."
            ]
        },

        {
            heading: "Multiplayer & Quests",
            body: [
                "Quest counts: An Inquisitive Mind and The Franchise Hunter (first investigation / 50 investigations), The Hunters Life for Me (50 optional quests), Step into the Arena and Nowhere to Go but Up (first arena quest / 50 arena quests).",
                "Multiplayer: HELP! (fire an SOS flare), I Am the Reinforcements (answer SOS flares to complete 10 quests), Hunters United and Hunters United Forever (a multiplayer quest / 100 multiplayer quests), Spreading the Word (collect 50 Guild Cards) and Helpful Hunter (aid low- or high-rank hunters on 10 quests as a Master Rank hunter).",
                "Ranks: Established Hunter (Hunter Rank 100) and Master of Masters (Master Rank 200)."
            ]
        },

        {
            heading: "Suggested Order",
            body: [
                "Play the base story straight through for the nine base-story achievements (Welcome to the New World, Nothing Stops This Commission, Defender of Astera, Into the Deep, Death Begets Life, The Empress of the Highlands, One Shall Stand, One Shall Fall, The Sapphire Star) and everything that comes with early progress: An Inquisitive Mind, Step into the Arena, New World Settler, Angling for a Bite, Mmm, So Tasty!, The Bigger They Are..., Movin On Up, First Friends, First Ride, Fledgling Collector, Fledgling Observer, Miniature Crown, Giant Crown, Capture Novice, HELP!, The Art of Camouflage.",
                "Then play all of Iceborne for The Beginning of a New Expedition, Time to Get Serious, The Elusive Elder Dragon, Indomitable Spirit, The Old Everwyrm, An End and a Beginning, The True Hunt Begins and Personal Treasure, and open the Guiding Lands for To the Land of Discoveries.",
                "Now grind the endgame: raise Guiding Lands regions (Evolving Ecology, In Search of Rare Materials, Insatiable Investigator, Fate's Conclusion, Creatures of the Earth, Deft Digger), farm tempered and variant monsters (Temper Temper, Indomitable, Confronting the Unknown, Seen It All), and chip away at Elderslayer, Monster Slayer, Monster Hunter, Hunter Prodigy, Master Capturer, Master Slayer, Capture Pro.",
                "Fill in the collections last: the crown sets (Miniature/Giant Crown Collector and Master, Another Miniature/Giant Crown, True Miniature/Large Crown Collector), the endemic captures (A Living Fossil, Snuggles for All, Bristles for All, Rainbow Bright, Golden Gleam, Friendly Pointer, Sweet Melody, Submerged Mystery, Celestial Illusion), research (Monster Ph.D., Monster Master, Outstanding Observer), gear (Commissioned Work, Bourgeois Hunter, Impregnable Defense, Power is Everything, Unwavering Defense, Devastating Offense), the quest and multiplayer counts (The Franchise Hunter, The Hunters Life for Me, Nowhere to Go but Up, I Am the Reinforcements, Hunters United, Hunters United Forever, Spreading the Word, Helpful Hunter), home decor (Remodeler, Interior Decorator, Architectural Artist), Bosom Buddies, Eager Engineer, Skilled Steamworker, Source of Relaxation, Master Explorer, Clutch Claw Neophyte, Experienced Rider, Veteran Collector, Ultimate Collector, Another Miniature Crown, Another Giant Crown, and the rank grinds Established Hunter and Master of Masters. Conqueror of the New World and Conqueror of the Hinterlands then pop for the two full sets."
            ]
        }

    ]

};
