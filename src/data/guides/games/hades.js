// Hades' first real Game Guide (Phase 37). Sources, cross-checked:
//
// - PRIMARY (official achievement names/descriptions, achievement count,
//   "no missables"): Steam's own community achievement stats page,
//   steamcommunity.com/stats/1145360/achievements, fetched directly.
//   Every one of the 49 official achievement names/descriptions below is
//   quoted or closely paraphrased from that page.
// - Cross-check for "no missables": also independently confirmed by this
//   app's own catalog data (src/data/games/hades.json's `missable: false`)
//   and by the live achievement count (0/49) verified in-browser during
//   Phase 36's Hades game-page testing.
// - SECONDARY (community-reported time investment, difficulty framing):
//   steamvault.dev/games/1145360 (median ~87h to 100%, community
//   difficulty/grindiness ratings) and general web search results citing
//   an 80-100 hour range - both roughly agree, so stated as a range.
// - Strategy/practical paragraphs (marked "Tip:" in the content itself)
//   are drawn from a community Steam guide
//   (steamcommunity.com/sharedfiles/filedetails/?id=2826206694), kept
//   deliberately general. One specific claim from that same source (a
//   description of "One for the Ages" involving a feast/all-9-gods
//   mechanic) directly contradicted Steam's own official description
//   ("Reach the epilogue of the story") and was discarded rather than
//   used - the official Steam text is authoritative wherever the two
//   disagreed. A separately-searched claim about exact Titan Blood costs
//   per weapon also varied significantly across sources (figures from 8
//   to 51+ per weapon depending on source and what exactly was being
//   measured), so no specific Titan Blood total is stated here - only the
//   general, well-corroborated mechanic (Aspects cost Titan Blood to
//   unlock/upgrade, hidden Aspects require conditions to be met first).
//
// No achievement requirement, route, or missable warning in this file is
// invented - every factual (non-"Tip:") paragraph traces to the official
// Steam achievement list above.
export const GUIDE = {

    slug: "hades-achievement-guide",
    category: "game",
    gameSlug: "hades",
    icon: "🗡️",
    title: "Hades Achievement Guide",
    summary: "A practical, achievement-by-achievement guide to 100%-completing Hades' 49 Steam achievements.",

    relatedSlugs: ["achievement-completion-and-tracking", "getting-started"],

    sections: [

        {
            heading: "Overview",
            body: [
                "Hades has 49 Steam achievements, and none of them are missable - confirmed both by Steam's own achievement data for the game and by AchievementPlanner's own catalog listing. You can pursue them in any order, across as many escape attempts as you like, with no risk of permanently locking yourself out of one.",
                "Community trackers report 100%-completion times in roughly the 80-100 hour range, spread across dozens of runs - this is a long-term project, not something to rush in a handful of sessions.",
                "This guide groups the 49 achievements into 6 practical categories based on how they're actually earned, plus a suggested order at the end. Paragraphs marked \"Tip:\" are community strategy suggestions, not official Steam text - every other sentence describing what an achievement requires is drawn directly from Steam's own achievement descriptions."
            ]
        },

        {
            heading: "Story & Escape Progress",
            body: [
                "These are earned automatically just by clearing the game's regions on your way to escaping: Escaped Tartarus (clear Tartarus), Escaped Asphodel (clear Asphodel), Escaped Elysium (clear Elysium), Is There No Escape? (clear any full escape attempt), The Family Secret (complete the main story quest), and One for the Ages (reach the story's epilogue).",
                "Back to Work (gain access to and enter the Administrative Chamber) also belongs in this group - an early-to-mid-game unlock tied to normal story progress, not a dedicated side objective.",
                "Tip: don't chase any of these directly - they complete themselves as a natural byproduct of playing through escape attempts. Focus your actual attention on the categories below."
            ]
        },

        {
            heading: "Weapons & Aspects",
            body: [
                "Hades has 6 Infernal Arms (weapons). Arms Collector requires unlocking every one of them. Infernal Arms requires unlocking every weapon's Aspects (weapon variants). Blood Bound only requires fully maxing one Aspect on any single weapon. Weapon of Fate requires clearing a full escape attempt with a hidden Aspect equipped. Master of Arms is tied to its own named Prophecy (see below).",
                "Each weapon has several Aspects, unlocked and upgraded by spending Titan Blood, a resource earned gradually through play. Some Aspects are hidden and only become available once specific in-game conditions are met first.",
                "Tip: since Infernal Arms only needs every Aspect unlocked (not maxed) and Blood Bound only needs one Aspect fully maxed, you don't need to fully invest in every weapon at once - spread early Titan Blood across unlocking Aspects broadly, then commit further to whichever one weapon you want maxed first."
            ]
        },

        {
            heading: "Prophecies",
            body: [
                "The Fated List of Prophecies is an in-game book of specific goals, and 11 of the 49 achievements are tied directly to it: 10 named Prophecies - Chthonic Colleagues, Master of Arms, War-God's Bloodlust, Musician and Muse, Slashed Benefits, Night and Darkness, End to Torment, Dark Reflections, Divided by Death, and Harsh Conditions - plus one cumulative one, Had to Happen (fulfill any 15 Prophecies total).",
                "Most Prophecies complete naturally across varied runs with different weapons and boon choices; a few of the named ones are gated behind specific story-relationship progress rather than in-run performance.",
                "Tip: check the Prophecies book in the House of Hades periodically - it tells you exactly what each unfulfilled Prophecy still needs, which is more reliable than guessing from the achievement name alone."
            ]
        },

        {
            heading: "Companions, Codex & Collection",
            body: [
                "The largest group of \"collect everything\" achievements: Something From Everyone (unlock every standard Keepsake) and Friends Forever (max-rank every standard Keepsake); Rare Collectible (equip a Chthonic Companion) and Complete Set (earn every Chthonic Companion); Well Versed (fully unlock the Olympians' Codex entries); Nyx's Mirror (at least one rank in every Mirror of Night Talent); River Denizens (catch a fish from every region); Home Makeover (pay for 50 House Contractor jobs); and Tools of the Architect (choose 50 different Daedalus Hammer enchantments across your runs).",
                "Tip: these naturally take the longest of any category, since several - Friends Forever especially - require many repeated runs to fully max out. Don't expect to finish this group early."
            ]
        },

        {
            heading: "Relationships",
            body: [
                "Three-Headed Boy (pet Cerberus 10 times), Day-or-Night Trader (trade 20 times with the Wretched Broker), Grown Close (forge a bond with any character), Urge to Sing (compel Orpheus to sing again), and To Charon's Credit (earn a Loyalty Card) all come from repeated, everyday interactions with House of Hades characters between runs.",
                "Skelly Slayer (slay Skelly 15 times), The Useless Trinket (earn Skelly's first prize), and Skelly's Last Lamentations (earn Skelly's second prize) are a separate track tied to fighting the training dummy Skelly, not conversation.",
                "Tip: these accumulate for free just by talking to everyone you pass in the House between escape attempts - it costs nothing to check in on each character every run."
            ]
        },

        {
            heading: "Skill & Challenge Achievements",
            body: [
                "This group needs a specific in-run performance rather than just playing normally: Hold the Onions (clear an Infernal Gate encounter without taking damage), Champion of Elysium (clear Elysium with the Extreme Measures condition active), Death Dealer (beat Thanatos by 15 kills or more in one encounter), Well Stocked (buy 9 items from the Well of Charon in a single escape attempt), Friends in High Places and Bad Call (using an Olympian's Greater Call, including against them in a Trial), Thanks, But No Thanks (purge a Legendary Boon), Blessed by the Gods (choose 100 different Olympian Boon effects total, across runs), and two weapon-specific stat checks - Haste of Hermes (20% dodge chance with the Lambent Plume) and Thorn of Thanatos (30% bonus damage with the Pierced Butterfly).",
                "Tip: leave these for once you're comfortable with the game's combat - several, especially the no-damage gate and Extreme Measures Elysium, are genuinely harder than normal play and easier to chase once your weapon Aspects and Mirror talents are further along."
            ]
        },

        {
            heading: "Suggested Order",
            body: [
                "Play normally first. Story/escape achievements, several weapon unlocks, and early Prophecies complete themselves as a byproduct of just progressing - don't go out of your way for them early on.",
                "Talk to everyone in the House of Hades between every run. The relationship achievements cost nothing extra and add up quickly this way.",
                "Vary your boon and weapon choices deliberately once you're past the early game - both to work through Blessed by the Gods (100 different boon effects) and to spread Titan Blood across unlocking every weapon's Aspects for Infernal Arms.",
                "Save the skill/challenge achievements for once you're mechanically comfortable - they're the ones most likely to cause frustration if attempted too early.",
                "Expect the collection achievements (Friends Forever, Complete Set, Home Makeover, Tools of the Architect) to be the last things you finish - they naturally take the most repeated runs regardless of strategy."
            ]
        }

    ]

};
