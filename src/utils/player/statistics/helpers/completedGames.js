export function getCompletedGames() {

    let total = 0;

    Object.keys(localStorage).forEach(key => {

        if (!key.startsWith("planner-")) return;

        const progress = JSON.parse(

            localStorage.getItem(key)

        );

        // Legacy saves were a positional boolean array; current saves are
        // an object keyed by achievement id. Both are readable.
        const values = Array.isArray(progress)
            ? progress
            : Object.values(progress);

        if (

            values.length > 0 &&

            values.every(Boolean)

        ) {

            total++;

        }

    });

    return total;

}