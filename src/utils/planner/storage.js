import { isEntryCompleted } from "./achievement/completion.js";

// Persists the Steam-resolved completion state for every achievement in
// this game's full mergedAchievements list - not just the curated/matched
// planner subset. profile.html's statistics need the same "achievement
// truth" the game page itself shows (getMergedAchievementStats), which
// includes Steam-only achievements with no local planner entry at all.
// Keyed by Steam apiname where available - stable across curated-catalog
// changes and shared with any other game/session that reads this entry -
// falling back to the curated achievement id, then the array index, only
// for entries Steam's schema doesn't know about; those never resolve as
// completed (no steamUnlock to match against), so the fallback key only
// needs to be unique within this game, not stable long-term.
export function saveProgress(game, slug) {

    const merged = game?.mergedAchievements;

    const entries = merged?.achievements ?? [];

    const progress = {};

    entries.forEach((entry, index) => {

        const key = entry.apiname ?? entry.ap?.id ?? `unmatched-${index}`;

        progress[key] = isEntryCompleted(merged, entry);

    });

    localStorage.setItem(

        `planner-${slug}`,

        JSON.stringify(progress)

    );

}
