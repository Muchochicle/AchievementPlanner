export function updatePlannerStats(game) {

    const checkboxes =
        document.querySelectorAll(".achievement-check input");

    let remainingTime = 0;

    let remainingMissable = 0;

    let difficultySum = 0;

    let difficultyCount = 0;

    game.achievements.forEach((achievement, index) => {

        const checked = checkboxes[index].checked;

        if (!checked) {

            remainingTime += achievement.estimatedTime;

            if (achievement.missable) {

                remainingMissable++;

            }

        }

        difficultySum += achievement.difficulty;

        difficultyCount++;

    });

    const averageDifficulty = difficultyCount
        ? (difficultySum / difficultyCount).toFixed(1)
        : "-";

    document.getElementById("remaining-time").textContent =
        `${remainingTime} min`;

    document.getElementById("average-difficulty").textContent =
        `${averageDifficulty} / 5`;

    document.getElementById("missable-remaining").textContent =
        remainingMissable;

}