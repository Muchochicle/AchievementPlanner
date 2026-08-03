export function getPlayedGames() {

    let total = 0;

    Object.keys(localStorage).forEach(key => {

        if (!key.startsWith("planner-")) return;

        const progress = JSON.parse(

            localStorage.getItem(key)

        );

        if (progress.some(Boolean)) {

            total++;

        }

    });

    return total;

}