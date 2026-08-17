// Single scan of every planner-{slug} localStorage entry, shared by
// achievements.js / games.js / completedGames.js so the legacy-array-vs-
// object-map handling only lives in one place.
export function getPlannerProgress() {

    const entries = [];

    Object.keys(localStorage).forEach(key => {

        if (!key.startsWith("planner-")) {

            return;

        }

        const progress = JSON.parse(
            localStorage.getItem(key)
        );

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
