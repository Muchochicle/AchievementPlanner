// Slay the Spire's Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/slay-the-spire.json), whose 46 achievements
//   were sourced directly from Steam's own achievement schema for appid
//   646570 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js) - 33 of 46 ship a real,
//   official Steam description, quoted directly below.
// - The Guardian, The Ghost, The Boss, The Automaton, The Collector, The
//   Champion, The Crow, The Shapes, The Time Eater, Ruby+, Emerald+,
//   Sapphire+, and The End? are hidden achievements Steam never
//   describes publicly (confirmed via the same API call) - their
//   descriptions here are curatorial, cross-checked against multiple
//   independent community sources (TrueAchievements, PSNProfiles,
//   SteamAH's 100% guide) documenting their real unlock conditions:
//   defeating each of the game's named bosses, and defeating the secret
//   Corrupt Heart final boss with each of the three original characters
//   (Amethyst/Amethyst+'s official description confirms the same "beat
//   the ending" pattern for the fourth character, the Watcher).
// - The grouping below (single-combat stat checks vs. named bosses vs.
//   character-specific wins vs. self-imposed challenge runs vs.
//   Ascension Mode vs. the secret ending) is read directly from what
//   each achievement's own official description requires, not invented.
export const GUIDE = {

    slug: "slay-the-spire-achievement-guide",
    category: "game",
    gameSlug: "slay-the-spire",
    icon: "🃏",
    title: "Slay the Spire Achievement Guide",
    summary: "A practical guide to all 46 Steam achievements in Slay the Spire - combat stat checks, every named boss, beating the game with each character, self-imposed challenge runs, Ascension Mode, and the secret Corrupt Heart ending.",

    relatedSlugs: ["achievement-completion-and-tracking", "understanding-achievement-availability"],

    sections: [

        {
            heading: "Overview",
            body: [
                "Slay the Spire has 46 Steam achievements. Nothing here is missable in the usual sense - it's a roguelike deckbuilder where every achievement is earned across repeated runs, so a stat check or boss fight you don't manage on one run is always available again on the next.",
                "Most of the list falls into a few natural groups: single-combat stat thresholds you'll often hit by accident just from playing normally, defeating each of the game's distinct bosses at least once, beating the game with each of the four characters, a handful of self-imposed challenge runs, and the much longer-term Ascension Mode and secret-ending goals."
            ]
        },

        {
            heading: "Combat Stat Checks",
            body: [
                "Shrug It Off (win at 1 HP), Come At Me (win without playing an Attack), The Pact (exhaust 20 cards in one combat), and Purity (3 or fewer cards across hand/draw/discard combined) are all situational one-off combat states - none require a specific deck, just the right combat unfolding the right way.",
                "Adrenaline (9 Energy in one turn), Powerful (10+ buffs), Jaxxed (50+ Strength), Impervious (99+ Block) and its much bigger sibling Barricaded (999 Block), Catalyst (99+ Poison on one enemy), Plague (3 enemies killed by Poison in one combat), Ninja (10 Shivs in one turn), Infinity (25 cards in one turn), Focused (25+ Focus), and Neon (channel 9 Plasma in one turn) are all scaling-stat achievements that unlock naturally once you build a deck around the right mechanic - Strength/Block-stacking for the Ironclad, Poison/Shiv synergies for the Silent, and Focus/Plasma-orb stacking for the Defect.",
                "Tip: don't chase these stat checks with a dedicated deck on your first few runs - play normally with each character first, and most of them will fall out of decks you'd build anyway once you understand each character's core mechanic."
            ]
        },

        {
            heading: "Every Named Boss",
            body: [
                "The Guardian, The Ghost (Hexaghost), and The Boss (the Slime Boss) are Act 1's three bosses. The Automaton, The Collector, and The Champion are Act 2's three. The Crow (the Awakened One), The Shapes (Donu and Deca), and The Time Eater are Act 3's three. Each achievement simply asks you to defeat that specific boss at least once - since every run's Act boss is chosen somewhat randomly, all nine will naturally come up over enough runs.",
                "You Are Nothing (defeat a boss on turn 1) and Perfect (defeat a boss without taking any damage) are much harder variants of the same idea, realistically requiring a strong, specific deck rather than just persistence.",
                "Ooh Donut! and The Transient are smaller, situational boss-adjacent achievements: finishing Donu with a Feed card, and defeating the rare Transient elite before it fades away on its own."
            ]
        },

        {
            heading: "Beating the Game with Each Character",
            body: [
                "Ruby, Emerald, Sapphire, and Amethyst each ask you to beat the game (defeat the Act 3 boss) once with the Ironclad, the Silent, the Defect, and the Watcher respectively - the game's four playable characters, each with a completely different deck-building identity.",
                "Tip: the Ironclad is generally considered the most straightforward character to learn on, since Strength-stacking and Block are the most direct, least combo-dependent way to win - a good place to start if you're aiming for Ruby first."
            ]
        },

        {
            heading: "Self-Imposed Challenge Runs",
            body: [
                "Who Needs Relics? (beat the game with a single relic), Speed Climber (beat the game in under 20 minutes), Minimalist (beat the game with a 5-card deck or smaller), and Common Sense (beat the game with a deck containing no uncommons or rares) are all deliberate constraint runs - each asks you to win while giving up something the game normally hands you freely.",
                "Tip: these are much easier once you already understand a character's strongest core loop well - Minimalist and Common Sense in particular reward knowing exactly which common cards can carry a run on their own, rather than experimenting blind."
            ]
        },

        {
            heading: "Ascension Mode",
            body: [
                "Ascend 0 simply unlocks Ascension Mode itself - an optional, increasingly difficult modifier stack unlocked after your first win. Ascend 10 and Ascend 20 ask you to clear a run at Ascension Level 10 and 20 respectively, each level adding a new, permanent extra challenge on top of every level below it.",
                "Ascend 20 in particular is one of the longest-term goals on this list, realistically requiring real mastery of deck-building and run-planning rather than just repeated attempts."
            ]
        },

        {
            heading: "The Secret Corrupt Heart Ending",
            body: [
                "Beyond the normal Act 3 boss lies a secret Act 4 and its own final boss, the Corrupt Heart - reached by collecting one each of the Ruby, Emerald, and Sapphire keys across a single run before defeating the Act 3 boss, which opens a hidden door to the final Act instead of ending the run there.",
                "Ruby+, Emerald+, Sapphire+, and Amethyst+ each ask you to defeat the Corrupt Heart with the Ironclad, the Silent, the Defect, and the Watcher respectively - a clear step up from simply beating the normal ending with each character. The End? is the capstone: defeat the Corrupt Heart with the Ironclad, the Silent, and the Defect specifically.",
                "Tip: don't attempt the Corrupt Heart on the same run as one of the challenge runs above - reaching Act 4 already asks a lot of a deck, and stacking a self-imposed constraint on top makes it dramatically harder than either goal is on its own."
            ]
        },

        {
            heading: "Daily Climb & Eternal One",
            body: [
                "My Lucky Day simply asks you to win a Daily Climb - the game's rotating, shared-seed daily challenge mode, separate from normal runs.",
                "Eternal One is the true completionist capstone: it unlocks automatically once every other achievement on this list has already been earned, so there's nothing to do for it directly beyond finishing everything else."
            ]
        },

        {
            heading: "Suggested Order",
            body: [
                "Play normally with each of the four characters first - most of the combat stat checks and several named-boss achievements will fall out of that alone, and you'll build the character knowledge everything else depends on.",
                "Once you've won at least once, unlock Ascension Mode (Ascend 0) and start working toward Ascend 10 while continuing to pick up any remaining named-boss achievements along the way.",
                "Tackle the self-imposed challenge runs (Who Needs Relics?, Speed Climber, Minimalist, Common Sense) once you know each character's strongest simple lines well.",
                "Save the Corrupt Heart achievements, Ascend 20, and Eternal One for last - they're each realistically end-of-mastery goals that come together naturally once everything else on this list is already done."
            ]
        }

    ]

};
