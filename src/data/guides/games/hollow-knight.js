// Hollow Knight's Game Guide (Phase 73). Sources, cross-checked:
//
// - PRIMARY (official names/descriptions for every non-hidden achievement):
//   this app's own catalog data (src/data/games/hollow-knight.json, itself
//   sourced from Steam's schema per PHASE_41_AUDIT.md) and independently
//   re-confirmed against Steam's own public achievement stats page for
//   appid 367520, which exposes the same official text for every
//   non-hidden entry (e.g. "Neglect" - "Leave Zote to die", "Solace" -
//   "Bring peace to the Grey Mourner").
// - Steam marks roughly a third of this game's 63 achievements "Hidden
//   achievement" with no official description at all. For those, this
//   guide relies on the achievement's own internal Steam apiname (e.g.
//   `NAILSMITH_KILL` -> "Purity", `NAILSMITH_SPARE` -> "Happy Couple",
//   `MOURNER` -> "Solace") cross-checked against multiple independent
//   community sources (a Steam community achievement guide and a curated
//   achievements guide site, both fetched directly). Two claims that
//   surfaced during that research were dropped rather than used because
//   they directly contradicted the apiname mapping already confirmed
//   elsewhere (one source's claim about "Obsession"/"Passing of the Age"
//   conflicted with `COLLECTOR`/`MR_MUSHROOM`'s own naming and with a
//   second, independent source) - apiname + multi-source agreement was
//   treated as authoritative wherever sources disagreed, same practice as
//   this project's existing Hades guide.
// - The four named Pantheons of Godhome (`PANTHEON1`-`PANTHEON4` ->
//   Brotherhood/Inspiration/Focus/Soul & Shade) are described only in
//   general terms below (as one advanced post-game challenge category)
//   rather than each pinned to an exact 1:1 Pantheon name, since sources
//   disagreed on that specific mapping and it isn't confirmable from this
//   app's own catalog data - the well-corroborated general fact (Godhome's
//   Pantheons are the game's hardest optional boss-rush content) is stated
//   instead, deliberately omitting the unconfirmed specific.
export const GUIDE = {

    slug: "hollow-knight-achievement-guide",
    category: "game",
    gameSlug: "hollow-knight",
    icon: "🗺️",
    title: "Hollow Knight Achievement Guide",
    summary: "A practical guide to Hollow Knight's 63 Steam achievements - story bosses, collection, NPC storylines, endings, and the hardest optional challenges.",

    relatedSlugs: ["achievement-completion-and-tracking", "understanding-achievement-availability"],

    sections: [

        {
            heading: "Overview",
            body: [
                "Hollow Knight has 63 Steam achievements, and this app's catalog data marks the game overall as missable - unlike a game with free chapter select, several achievements here depend on choices made at specific, one-time points in a given save file (detailed below), and Hollow Knight has no in-game chapter select. Community trackers commonly cite 60-90+ hours for a thorough 100% run across two full playthroughs (a normal completion, then a from-scratch Steel Soul permadeath run for the two Steel Soul achievements).",
                "This guide groups the 63 achievements into 7 practical categories: story bosses and the Dreamers, collection/exploration, the Colosseum and Godhome's hardest challenges, missable NPC storylines, the game's four endings, and the speedrun/Steel Soul challenge achievements."
            ]
        },

        {
            heading: "Story Bosses & the Dreamers",
            body: [
                "Falsehood (defeat the False Knight), Test of Resolve (defeat Hornet in Greenpath), Respect (defeat the Mantis Lords), Honour (defeat the Dung Defender), and Illumination (defeat the Soul Master) mark the main story's early-to-mid boss gauntlet, alongside Release (defeat the Broken Vessel).",
                "Teacher, Watcher, and Beast (destroy Monomon the Teacher, Lurien the Watcher, and Herrah the Beast respectively) are the three Dreamers - defeating all three is required to reach the Black Egg Temple and progress toward any ending. Execution (defeat the Traitor Lord) is a separate optional boss in Deepnest.",
                "Several achievements are the \"dream\" rematch of an earlier boss, fought via the Dream Nail once unlocked: Strength (the dream version of the False Knight, entered through a hidden wall in his original arena), Mortality (the dream version of the Soul Master, found in the Soul Sanctum), and Peace (the dream version of the Broken Vessel, found deep in the Abyss).",
                "Proof of Resolve is a separate, non-dream rematch: overcoming the Hornet Sentinel in Kingdom's Edge, guarding the way toward the White Palace."
            ]
        },

        {
            heading: "Charms, Masks, Vessels & Exploration",
            body: [
                "The largest non-combat group: Charmed (acquire your first Charm), Enchanted (half of Hallownest's Charms), Blessed (all Charms, plus Salubra's blessing); Protected (4 Mask Shards) and Masked (all Mask Shards); Soulful (3 Vessel Fragments) and Worldsoul (all Vessel Fragments); Attunement/Awakening/Ascension (collect 600/1800/2400 total Essence, the last awakening the Dream Nail and then hearing the Seer's final words).",
                "Exploration and collection round out the group: Grubfriend (rescue half the imprisoned grubs) and Metamorphosis (rescue all of them); Cartographer (a map of every area); Connection (half of Hallownest's Stag Stations) and Hope (all of them, discovering the Stag Nest); and Keen Hunter / True Hunter (record every creature in the Hunter's Journal, then receive the Hunter's Mark).",
                "Tip: none of these are missable in the sense of being lockable-out - they're all things you can still go back for as long as your save exists, just easy to under-collect on a single casual playthrough."
            ]
        },

        {
            heading: "The Colosseum & Godhome's Hardest Challenges",
            body: [
                "Warrior, Conqueror, and Fool (complete the Trial of the Warrior, Conqueror, and Fool respectively) are the three Colosseum of Fools trials, increasing in difficulty.",
                "Obsession is earned by defeating the Collector, an optional boss found in the Resting Grounds area. Dark Romance and Memory are two further optional superbosses - Grey Prince Zote and the White Defender respectively - both notably harder than the main story's required fights.",
                "Brotherhood, Inspiration, Focus, and Soul & Shade are tied to Godhome, the free Godmaster content update's dedicated boss-rush hub, and its four named Pantheons - the single hardest optional content in the game, each Pantheon stringing together dozens of the game's bosses back-to-back with no checkpoints.",
                "Tip: leave the Colosseum trials and especially Godhome for last - they assume you already have most of the game's Charms, Nail upgrades, and boss-fighting experience from everything else on this list."
            ]
        },

        {
            heading: "Missable NPC Storylines - Read Before You Choose",
            body: [
                "These are genuinely missable: a specific one-time choice at an NPC locks in the achievement (and its opposite) for that save. Purity (kill the Nailsmith when he asks you to, after maxing your Nail) and Happy Couple (spare him instead, and later find him reunited with Nailmaster Sheo) are mutually exclusive outcomes of the same storyline - pick one.",
                "Neglect (leave Zote to die the first time you can save him) and Rivalry (defeat Zote as a boss instead, in one of his later encounters) are similarly tied to what you do the first time you meet Zote in trouble.",
                "Solace (bring peace to the Grey Mourner, by delivering the Delicate Flower to the right grave) and Passing of the Age (find and speak with Mr. Mushroom multiple times across the game, culminating in a post-credits scene) are separate, self-contained NPC arcs rather than binary choices - both stay available as long as you follow through on that character's full storyline before the game ends.",
                "Grand Performance (defeat Grimm) versus Ritual (defeat the stronger Nightmare King Grimm) and Banishment (banish the Grimm Troupe instead of fighting Grimm's strengthened form) are three different outcomes of the Grimm Troupe questline - which one(s) you get depend on choices made across that questline's several stages.",
                "Tip: if you're going for 100%, look up the Grimm Troupe and Nailsmith questlines specifically before starting them - both have points of no return that are easy to stumble into blind."
            ]
        },

        {
            heading: "The Four Endings",
            body: [
                "The Hollow Knight (the default ending: defeat the Hollow Knight after breaking all three Dreamer seals) is available from a normal first playthrough with no extra requirements.",
                "Sealed Siblings and Dream No More both require first obtaining the Void Heart charm (via the Abyss and the Kingsoul upgrade) - equipping it before the final fight changes what's possible. Void itself is a separate achievement for simply obtaining the Void Heart charm.",
                "Witness is earned by visiting Quirrel's resting place late in the game to see his own epilogue scene - a quiet, easy-to-miss story beat tied to following his character arc through Hallownest rather than to any boss fight.",
                "Embrace the Void is the odd one out of this group - unlike the other three, it isn't reached through the Black Egg Temple at all. It's tied to the hardest Godhome Pantheon content covered in the previous section, capping off with the game's ultimate superboss - treat it as a late-game goal well after your first ending, not an alternative available on a normal playthrough."
            ]
        },

        {
            heading: "Speedrun & Steel Soul Challenges",
            body: [
                "Speedrun 1 and Speedrun 2 (finish the game in under 10 hours, then under 5) and Speed Completion (100% completion in under 20 hours) are timed runs best attempted on a dedicated, knowledgeable playthrough rather than your first.",
                "Steel Soul (finish the game in Steel Soul mode, this game's permadeath difficulty) and Steel Heart (100% completion in Steel Soul mode) require a separate save file - Steel Soul is selected at the very start of a new game and can't be turned on partway through.",
                "Completion (100%) and Pure Completion (112%, the highest completion percentage the game tracks) are the two headline completionist achievements, effectively requiring everything else on this list to be finished on the same save.",
                "Tip: treat Steel Soul as its own separate project after you already know the game well from a normal completion run - permadeath punishes exactly the kind of exploratory mistakes a first playthrough is full of."
            ]
        }

    ]

};
