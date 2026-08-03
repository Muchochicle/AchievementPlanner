export function getCompletedGames() {

    let total = 0;

    Object.keys(localStorage).forEach(key => {

        if (!key.startsWith("planner-")) return;

        const progress = JSON.parse(

            localStorage.getItem(key)

        );

        if (

            progress.length > 0 &&

            progress.every(Boolean)

        ) {

            total++;

        }

    });

    return total;

}