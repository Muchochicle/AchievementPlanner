// Crypt of the NecroDancer's Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/crypt-of-the-necrodancer.json), whose 61
//   achievements were sourced directly from Steam's own achievement
//   schema for appid 247080 via ISteamUserStats/GetSchemaForGame
//   (fetched through this app's own backend/services/steamApi.js) - all
//   61 ship a real, official Steam description, quoted directly below.
//   Crypt of the NecroDancer has no Steam-hidden achievements at all.
// - Roughly two thirds of the list is gated behind the paid AMPLIFIED
//   and SYNCHRONY DLC; each such achievement's own official Steam
//   description ends with "(AMPLIFIED DLC required)" or "(SYNCHRONY DLC
//   required)", and the two DLC sections below are split out on exactly
//   that basis, matching this catalog's existing DLC-inclusion
//   precedent (Cuphead, Guacamelee! 2, Crypt's own soundtrack aside).
// - The grouping (base-game oddities, Cadence's zone and All Zones
//   clears, the rest of the base roster's All Zones clears, the harder
//   base-game challenge runs, then the AMPLIFIED and SYNCHRONY content)
//   is read directly from what each achievement's own description
//   requires, not invented.
export const GUIDE = {

    slug: "crypt-of-the-necrodancer-achievement-guide",
    category: "game",
    gameSlug: "crypt-of-the-necrodancer",
    icon: "💀",
    title: "Crypt of the NecroDancer Achievement Guide",
    summary: "A practical guide to all 61 Steam achievements in Crypt of the NecroDancer - the base-game character clears and challenge runs, plus the large blocks of AMPLIFIED and SYNCHRONY DLC achievements.",

    relatedSlugs: ["achievement-completion-and-tracking", "understanding-achievement-availability"],

    sections: [

        {
            heading: "Overview",
            body: [
                "Crypt of the NecroDancer has 61 Steam achievements and none are hidden. It is a demanding rhythm roguelike: most of the list is some variation of \"complete All Zones Mode with character X\", and the difficulty comes from doing that on the beat, not from anything obscure.",
                "About 40 of the 61 require paid DLC - each one's official Steam description spells out \"(AMPLIFIED DLC required)\" or \"(SYNCHRONY DLC required)\", and the two DLC sections below are grouped on exactly that wording. Only around 21 achievements are reachable with the base game alone.",
                "Nothing here is missable. Every character, mode, and run type stays available forever, so the list is a skill wall rather than a checklist you can spoil."
            ]
        },

        {
            heading: "Base-Game Oddities",
            body: [
                "A handful of achievements are quick one-offs you can grab in early runs: Mostly Harmless (get killed by a green slime), Bat Trick (kill three green bats), Merchanticide (kill the shopkeeper), Heartthrob (have 10 heart containers at once), and I love gooooooold! (hold 6000 coins in a single run).",
                "8Ball (kill 8 enemies with a single bomb) and Friendly Fire (use a red dragon's fireball to kill another miniboss) are small combat setups, and Carpe Diem just wants you to complete one Daily Challenge - a fixed seed everyone plays once per day."
            ]
        },

        {
            heading: "Cadence: Zones & All Zones",
            body: [
                "Cadence is the default character and the natural starting point. In The Zone, In The Zone (2), In The Zone (3), and In The Zone (4) unlock for completing zones 1 through 4 with solo Cadence, and In The Zone (5) adds zone 5 (AMPLIFIED DLC required).",
                "So Hardcore! rewards clearing the full \"All Zones Mode\" run with solo Cadence in one sitting, and Speed Demon asks for that same run in under 15 minutes.",
                "Tip: All Zones Mode has no checkpoints - one death ends the run. Practice each zone individually first (the zone-select clears also give you the In The Zone achievements), then string them together once each zone feels routine."
            ]
        },

        {
            heading: "The Base-Game Roster",
            body: [
                "Most of the base roster has a single achievement for completing All Zones Mode with that character solo: You Don't Miss a Beat, Do You? (Aria), A Beatless Beatdown (Bard), Tachycardia (Bolt), Vow down! (Monk), Peace Out (Dove), Bombs Away! (Eli), Lute that Loot (Melody), Leaps and Bounds (Dorian), and Impossible, Right? (Coda).",
                "Two Can Tango! is the same run completed in local Co-op. Aria (no healing, dies in one hit, must keep the beat perfectly) and Coda (all of Aria's restrictions plus more) are far and away the hardest of these - save them for last."
            ]
        },

        {
            heading: "Base-Game Challenge Runs",
            body: [
                "Three achievements go beyond a normal clear. Flawless Victory! is an Aria \"Low%\" run - All Zones Mode with solo Aria without picking up any items or using any shrines (gold is allowed). Undeadly asks for 10 wins in a row in Cadence \"Deathless Mode\", which ratchets up one zone at a time.",
                "Polyamorous is an \"All Chars\" run, cycling through every base character back-to-back in one sitting, and Lowest of the Low is that same All Chars run done low% - no items, no shrines, gold only."
            ]
        },

        {
            heading: "AMPLIFIED DLC",
            body: [
                "AMPLIFIED adds the character Nocturna and a set of alternate modes. Bat to the Bone (All Zones with solo Nocturna), Like a Bat Out of Hell (that run under 15 minutes), Golden Loot (8000 coins in a single run with solo Nocturna), and Hard Act to Follow (\"Hard Mode\" with solo Nocturna) are the Nocturna-specific ones.",
                "The mode achievements are Storybook Ending and its bigger sibling covering \"Story Mode\", A Haunting Performance (\"Phasing Mode\"), Mix Master (\"Randomizer Mode\"), What Just Happened? (\"Mystery Mode\"), No I Won't Back Down (\"No Return Mode\" with solo Cadence), and Mode Master, which requires clearing Story, Hard, Phasing, No Return, Randomizer, and Mystery modes.",
                "A Cut Above (Diamond), I Love Ewe (Mary), and Keeps on Ticking (Tempo) are All Zones clears with the three extra AMPLIFIED characters, ElecTrick wants 8 enemies killed at once with electricity, and Very Polyamorous is the All Chars run including the DLC characters."
            ]
        },

        {
            heading: "SYNCHRONY DLC",
            body: [
                "SYNCHRONY adds four more characters, each with an All Zones clear: Klari Clear (Klarinetta), Enchantée, Chaunter (Chaunter), Suzuper (Suzu), and Virtuosoul (Reaper).",
                "Several are character-mechanic showcases: Smitemaster (kill 4 enemies in one swing as Klarinetta), Doppelgänger (kill a miniboss while possessing one of the same kind as Chaunter), Pandaemonium (All Zones in under 10 minutes with solo Suzu), Étude (\"No-Beat Mode\" as Aria), En Passant (get captured by a Pawn while trying to leap past its attack), and Tachyarrhythmia (Zone 1 in \"Double Tempo Mode\" with solo Bolt).",
                "The rest are systemic feats: Fully Loaded (equip an item in every possible slot), Family Trip (All Zones as Cadence, Melody, Aria and Dorian in co-op), Fool's Mate (checkmate Deep Blues without harming another piece), Destructive Interference (kill Dead Ringer with his own attack), Ghost in the Pot (take control of Teh Urn), Sunk Cost (sell your belongings to the Pawnbroker), and Polyphonic (complete an \"Ensemble Mode\" run, solo or co-op)."
            ]
        },

        {
            heading: "Suggested Order",
            body: [
                "Learn the game with Cadence: clear the zones individually for In The Zone through In The Zone (4) (and In The Zone (5) if you own AMPLIFIED), then chain them for So Hardcore! and eventually Speed Demon. Pick up the oddities (Mostly Harmless, Bat Trick, Merchanticide, Heartthrob, I love gooooooold!, 8Ball, Friendly Fire, Carpe Diem) whenever they happen.",
                "Work through the base roster's All Zones clears - A Beatless Beatdown, Tachycardia, Vow down!, Peace Out, Bombs Away!, Lute that Loot, Leaps and Bounds, Two Can Tango! - leaving You Don't Miss a Beat, Do You? and Impossible, Right? until your beat-keeping is solid.",
                "Then the base-game challenge runs: Undeadly, Polyamorous, Flawless Victory!, and Lowest of the Low.",
                "If you own AMPLIFIED, do the Nocturna clears and mode clears (building toward Mode Master) plus A Cut Above, I Love Ewe, Keeps on Ticking, ElecTrick, and Very Polyamorous. If you own SYNCHRONY, finish with its four character clears and the mechanic/systemic feats (Smitemaster, Doppelgänger, Pandaemonium, Étude, En Passant, Tachyarrhythmia, Fully Loaded, Family Trip, Fool's Mate, Destructive Interference, Ghost in the Pot, Sunk Cost, Polyphonic)."
            ]
        }

    ]

};
