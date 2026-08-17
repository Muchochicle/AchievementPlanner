import {

    safeParseJSON

} from "../../../storage/safeJson.js";

// Single scan of every planner-{slug} localStorage entry, shared by
// achievements.js / games.js / completedGames.js so the legacy-array-vs-
// object-map handling only lives in one place.
export function getPlannerProgress() {

    const entries = [];

    Object.keys(localStorage).forEach(key => {

        if (!key.startsWith("planner-")) {

            return;

        }

        // A malformed entry for one game must not break stats for every
        // other game - skip just this key rather than throwing.
        const progress = safeParseJSON(
            localStorage.getItem(key),
            null,
            key
        );

        if (!progress) {

            return;

        }

        const values = Array.isArray(progress)
            ? progress
            : Object.values(progress);

        entries.push({

            slug: key.slice("planner-".length),

            values

        });

    });

    return entries;

}
