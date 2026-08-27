// Rogue Legacy's Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/rogue-legacy.json), whose 29 achievements
//   were sourced directly from Steam's own achievement schema for appid
//   241600 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js) - all 29 ship a real,
//   official Steam description, quoted directly below. None of Rogue
//   Legacy's achievements are Steam-hidden.
// - The grouping below (progression/collection vs. the four kingdom
//   bosses vs. the endgame/New Game+ encounters vs. one-off novelties
//   vs. the dedicated no-death challenge) is read directly from what
//   each achievement's own official description requires, not invented.
export const GUIDE = {

    slug: "rogue-legacy-achievement-guide",
    category: "game",
    gameSlug: "rogue-legacy",
    icon: "🏰",
    title: "Rogue Legacy Achievement Guide",
    summary: "A practical guide to all 29 Steam achievements in Rogue Legacy - the manor upgrades, the four kingdoms' bosses, the endgame encounters beyond them, and the dedicated low-death challenge run.",

    relatedSlugs: ["achievement-completion-and-tracking", "understanding-achievement-availability"],

    sections: [

        {
            heading: "Overview",
            body: [
                "Rogue Legacy has 29 Steam achievements, none of them Steam-hidden. As a roguelike, almost everything here accumulates naturally across many runs - gold and skill points carry over between deaths through the manor upgrades, so a 'death' in Rogue Legacy is progress, not a setback, and most achievements reward that persistence rather than any single perfect run. Biophobia (die 20 times or more) is the achievement that says this outright - it's a milestone, not a failure state.",
                "The one real exception is Thanatophobia, a dedicated low-death challenge best attempted once your manor is already strong from earlier, more relaxed runs."
            ]
        },

        {
            heading: "Growing Your Legacy",
            body: [
                "Decidophobia (put at least one point in every skill in the manor) and Plutophobia (reach level 50 or higher) track your manor's overall growth, while Bibliophilia (read the last journal entry) rewards actually reading the lore that unlocks alongside it.",
                "Aurophilia (open your very first gold chest) and Rhabdophilia (earn your very first Enchantress rune) are simple early milestones, while Cainotophilia (have one rune equipped in every item slot) and Gymnophobia (have one piece of equipment in every item slot) ask you to fully kit out a character rather than just collect the gear.",
                "Disposophobia (find all blueprints) and Gnosiophilia (find all the runes) are the two big collection achievements - both explicitly note purchase isn't necessary, so exploring thoroughly across many runs is what actually counts, not how much gold you spend.",
                "Barophobia (use the special class at least once) and Atelophobia (choose a hero with no traits) are both tied to Rogue Legacy's randomized-heir system - the special class and a trait-free hero will both eventually come up as you re-roll your line of descendants."
            ]
        },

        {
            heading: "The Four Kingdoms' Bosses",
            body: [
                "Ommetaphobia (defeat the boss in Castle Hamson), Phasmophobia (defeat the boss in the Forest Abkhazia), Pyrophobia (defeat the boss in the Maya), and Blennophobia (defeat the boss in the Land of Darkness) mark clearing each of the four main kingdoms' guardian bosses - the core progression path through the game.",
                "Zoophobia (defeat all the minibosses) is a separate, broader achievement covering every smaller boss scattered across all four kingdoms, not just the four main guardians above."
            ]
        },

        {
            heading: "Beyond the Final Boss",
            body: [
                "Paterphobia (defeat the last boss) marks your first full clear. Geminiphobia (beat the game... twice) is exactly what it says - a second full clear on the same save, tougher than it sounds since the game only gets harder as your castle scales with you.",
                "Syngenesophobia (defeat the brothers), Chemophobia (defeat the trademarked chemical), Ostiophobia (defeat the son), Scotomaphobia (defeat the doppelganger), Astrophobia (defeat the asteroids), and Katagelasticism (mock the traitor) are all late-game encounters beyond the four kingdoms' main bosses - each its own self-contained fight or moment, best approached once your manor is well-upgraded from earlier runs."
            ]
        },

        {
            heading: "Odd Jobs & Novelties",
            body: [
                "Alektorophobia (kill a chicken), Coulrophilia (beat one of the clown's games at least once), and Somniphobia (play the game for at least 20 hours) are all low-effort, guaranteed-eventually achievements that don't require any dedicated detour - they'll happen naturally the longer and more curiously you play."
            ]
        },

        {
            heading: "The No-Death Challenge",
            body: [
                "Thanatophobia (without using the Architect, complete the game dying 15 times or less) is Rogue Legacy's real skill test - a run that avoids using the Architect's difficulty-softening option entirely, kept under a hard death cap for the whole game.",
                "Tip: attempt Thanatophobia only after your manor is already strong from earlier, more relaxed runs - going in with a weak, low-level character makes the death cap far tighter than it needs to be."
            ]
        },

        {
            heading: "Suggested Order",
            body: [
                "Play normally for your first several hours, focusing on manor upgrades, blueprints, and runes rather than rushing bosses - Decidophobia, Aurophilia, Rhabdophilia, Disposophobia, and Gnosiophilia all come together naturally this way.",
                "Clear the four kingdoms' bosses (Ommetaphobia, Phasmophobia, Pyrophobia, Blennophobia) and all the minibosses (Zoophobia) once your gear can reasonably handle them, then push on to Paterphobia and the endgame encounters beyond it.",
                "Pick up the odd-job achievements (Alektorophobia, Coulrophilia, Barophobia, Atelophobia) whenever they come up naturally rather than hunting for them.",
                "Save Geminiphobia and Thanatophobia for last - both are realistically end-of-save goals that come together once your manor is already strong from everything else on this list."
            ]
        }

    ]

};
