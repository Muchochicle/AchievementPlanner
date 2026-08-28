// Raft Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/raft.json), whose 104 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   648800 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js) - 85 of 104 ship a real,
//   official Steam description, quoted directly below (two carry a
//   deliberate trailing space, preserved byte-for-byte).
// - The 19 hidden achievements ship no Steam description; their
//   conditions here are curatorial, cross-checked against the official
//   Raft Wiki, Prima Games, GINX and Steam Community 100% guides. The
//   story-island secrets and the final cutscene are described only by
//   what you do to reach them, kept free of plot detail.
// - The grouping is read from what each achievement requires: building
//   and survival, the hunting families, the story islands and their
//   note collections, the gathering and travel families, and the
//   hidden secrets.
export const GUIDE = {

    slug: "raft-achievement-guide",
    category: "game",
    gameSlug: "raft",
    icon: "🛟",
    title: "Raft Achievement Guide",
    summary: "A practical guide to all 104 Steam achievements in Raft - the building and survival milestones, the tiered hunting families, the story islands and their Historian note collections, the gathering, zipline and excavation families, and the 19 hidden story-island secrets.",

    relatedSlugs: ["achievement-completion-and-tracking", "understanding-achievement-availability"],

    sections: [

        {
            heading: "Overview",
            body: [
                "Raft has 104 Steam achievements, 19 of them hidden. Most are simple tiered grinds (kill N of a creature, build N foundations, travel N metres) plus one achievement per story location, its note collection, and a secret on it.",
                "Nothing is permanently missable - the world persists and every island can be revisited - but Master Survivor (survive 365 in-game days) and the Expert hunting tiers are long, and the story secrets are easy to sail past if you do not know they exist.",
                "Tip: play through the story islands in order (Vasagatan, Radio Tower, Balboa, Caravan Town, Tangaroa, Varuna Point, Temperance), and on each one collect every note and do its hidden achievement before you move on - backtracking across the ocean later is slow."
            ]
        },

        {
            heading: "Building, Crafting & Survival",
            body: [
                "Early crafting: Beginner Builder! (10 foundations), Dinnertime! (a simple grill), It's Better Without The Salt. (a simple purifier), Aye Aye Captain! (a sail and a stationary anchor), Bookworm! (research everything), A More Complex Concoction! (cook from a recipe), Teamplay! (play with a friend), and the raft-size goals Hoarder! (20 storages) and Farmer! (20 cropplots).",
                "Building tiers: Intermediate Builder! (100 foundations), Expert Builder! (1000 foundations) and the painter set Beginner Painter! (50 blocks), Intermediate Painter! (200) and Expert Painter! (1000). Survival: Beginner Survivor! (1 day), Intermediate Survivor! (7 days), Expert Survivor! (30 days) and Master Survivor! (365 days).",
                "Later infrastructure: Plumber Power! (30 pipes at once), Bee Keeper! (10 beehives at once), Powered Up! (every meal and drink buff active at once) and All Aboard! (unlock every playable character)."
            ]
        },

        {
            heading: "Hunting & Wildlife",
            body: [
                "Every hostile creature has a Beginner / Intermediate / Expert tier for 1, 10 and 50 kills: Beginner Shark Hunter!, Intermediate Shark Hunter!, Expert Shark Hunter!; Beginner Bird Hunter!, Intermediate Bird Hunter!, Expert Bird Hunter!; Beginner Poison-Puffer Hunter!, Intermediate Poison-Puffer Hunter!, Expert Poison-Puffer Hunter!; Beginner Screecher Hunter!, Intermediate Screecher Hunter!, Expert Screecher Hunter!; Beginner Warthog Hunter!, Intermediate Warthog Hunter!, Expert Warthog Hunter!; Beginner Lurker Hunter!, Intermediate Lurker Hunter!, Expert Lurker Hunter!; Beginner Bear Hunter!, Intermediate Bear Hunter!, Expert Bear Hunter!; Beginner Anglerfish Hunter!, Intermediate Anglerfish Hunter!, Expert Anglerfish Hunter!; and Beginner Disruptor!, Intermediate Disruptor!, Expert Disruptor! for disrupting 1, 10 and 20 Butler-Bots.",
                "Animal capture has its own tiers - Beginner Wrangler!, Intermediate Wrangler!, Expert Wrangler! (1, 10, 50 animals), Some Look Different! (a rare animal), and the bee set Beginner Bee-nevolent!, Intermediate Bee-nevolent!, Expert Bee-nevolent! (1, 10, 25 bees).",
                "Named foes: Mother Lode! (the Mama Bear on Balboa) and the hidden boss kills covered below."
            ]
        },

        {
            heading: "Story Islands & Historians",
            body: [
                "Discovering the world: Large Landmass Ahoy! (find a large island). Each story location has a Historian achievement for finding all its notes: Radio Tower Historian!, Vasagatan Historian!, Balboa Historian!, Caravan Town Historian!, Tangaroa Historian! , Varuna Point Historian! and Temperance Historian!.",
                "Location-specific tasks: Fix Errol! (repair the parrot on Caravan Town), Cache Collector! (all Grabber caches on Varuna Point), the token-spending set Small Spender! , Medium Spender! and Big Spender! (10, 20, 30 tokens on Tangaroa), the merchant tiers Beginner Merchant!, Intermediate Merchant! and Expert Merchant!, Real Fireworks! (witness 50 firework explosions) and That's Not A Boat... (drive a snowmobile into the sea in Temperance)."
            ]
        },

        {
            heading: "Gathering, Travel & Excavation",
            body: [
                "Hooking items: Beginner Gatherer! (100), Intermediate Gatherer! (500) and Expert Gatherer! (5000). Ziplines: Zip Zap! (50 m in one go without disjointing), Beginner Ziponaut! (100 m total), Intermediate Ziponaut! (500 m) and Expert Ziponaut! (1500 m).",
                "Treasure digging: Beginner Excavator! (dig up one), Intermediate Excavator! (20) and Expert Excavator! (50)."
            ]
        },

        {
            heading: "Hidden Achievements",
            body: [
                "General secrets: This Goes Here! (break or pick up 100 build blocks), An Ocean Cemetery! (die 25 times), Exploring The depths! (reach 100 m deep), The Renovator! (learn every mystery-package recipe), Artistic Collection! (find and place every hidden developer painting) and Former Glory! (rebuild the Tiki pole from four treasure-hunt wood pieces).",
                "Radio Tower and Vasagatan: Is There A Utopia? (read the note at the top of the Radio Tower) and Bootleg Fireworks! (breach the Vasagatan cockpit with an explosive), plus Not A Great Landing! (find the rare small island with a crashed plane).",
                "Balboa Island: O Captain! My Captain!? (reach it), Pling! (ring a bicycle bell), A Revelation! (place all of Bruno's tools on the toolboard to reveal the hidden photo) and Tiny Little Murderer (rip the lightbulb out of the doll at the mountain campsite).",
                "Tangaroa: Boxed In! (the secret behind the boxes), Instrumentalist! (play a note on the piano), Launch Initiated! (the backup emergency launch system) and You Should Not Be Here! (reach the hidden -20th floor via the Plantation elevator's concealed button).",
                "Varuna Point and the ending: Explosive Force! (slay the Varuna Point boss) and There Is A Utopia! (finish the game)."
            ]
        },

        {
            heading: "Suggested Order",
            body: [
                "Survive the opening: Beginner Survivor!, Beginner Builder!, Dinnertime!, It's Better Without The Salt., Aye Aye Captain!, Teamplay!, and start the note-hunting and hidden achievements at each story island as you reach it (Vasagatan Historian! and Bootleg Fireworks!, then Is There A Utopia! at the Radio Tower, then Balboa's O Captain! My Captain!?, Pling!, A Revelation!, Tiny Little Murderer and Balboa Historian!, and so on through Caravan Town, Tangaroa, Varuna Point and Temperance).",
                "Push the story to its end for Explosive Force! and There Is A Utopia!, keeping every Historian collection complete on the way, plus Fix Errol!, Mother Lode!, Cache Collector! and the merchant and token achievements.",
                "Let the grinds run in a long-lived save: the Beginner/Intermediate/Expert kill tiers for every creature, the building and painting tiers, the gathering, zipline and excavation tiers, the bee and animal wrangling tiers, Master Survivor! (365 days) and Real Fireworks!. Finish with the odds and ends - This Goes Here!, An Ocean Cemetery!, Exploring The depths!, The Renovator!, Artistic Collection!, Former Glory!, Boxed In!, Instrumentalist!, Launch Initiated!, You Should Not Be Here!, Powered Up!, All Aboard!, Plumber Power!, Bee Keeper! and That's Not A Boat...."
            ]
        }

    ]

};
