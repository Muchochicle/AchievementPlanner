export function getUnlockedAchievements() {

    let total = 0;

    Object.keys(localStorage).forEach(key => {

        if (!key.startsWith("planner-")) return;

        const progress = JSON.parse(

            localStorage.getItem(key)

        );

        total += progress.filter(Boolean).length;

    });

    return total;

}