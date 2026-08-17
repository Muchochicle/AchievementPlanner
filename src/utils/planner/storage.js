import { findMergedEntry, isEntryCompleted } from "./achievement/completion.js";

// Persists the Steam-resolved completion state for this game's matched
// (local/planner) achievements - not a manual claim record. Kept in the
// same planner-{slug} / {id: boolean} shape profile.html's statistics
// helpers already read, but the boolean now always comes from Steam,
// never from user interaction.
export function saveProgress(game, slug) {

    const merged = game?.mergedAchievements;

    const progress = {};

    for (const achievement of game?.achievements ?? []) {

        const entry = findMergedEntry(game, achievement.id);

        progress[achievement.id] = entry
            ? isEntryCompleted(merged, entry)
            : false;

    }

    localStorage.setItem(

        `planner-${slug}`,

        JSON.stringify(progress)

    );

}
