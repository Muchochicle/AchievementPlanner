// Single source of truth for how much XP each real-world progression event
// is worth. Previously these were separate magic-number literals
// (addXP(50) in achievementManager.js, addXP(300) in gameCompletion.js)
// with nothing tying them together - reconcileProgressFromProfileStats
// (playerProgress.js) needs the exact same values to award the correct
// back-fill XP for achievements/games completed outside the per-game-visit
// flow those two files drive, so both now import from here instead of
// re-stating the numbers.
export const XP_PER_ACHIEVEMENT = 50;

export const XP_PER_GAME_COMPLETION = 300;
