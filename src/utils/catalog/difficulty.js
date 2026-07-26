export function getDifficultyLabel(value) {

    if (value <= 3) {

        return "Easy";

    }

    if (value <= 6) {

        return "Medium";

    }

    return "Hard";

}

export function filterDifficulty(games) {

    const selected = [

        ...document.querySelectorAll(

            ".difficulty-filter input:checked"

        )

    ].map(input => input.value);

    if (!selected.length) {

        return games;

    }

    return games.filter(game =>

        selected.includes(

            getDifficultyLabel(

                game.difficulty

            )

        )

    );

}