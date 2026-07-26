export function filterCompletionTime(games) {

    const selected = [

        ...document.querySelectorAll(

            ".time-filter input:checked"

        )

    ].map(input => Number(input.value));

    if (!selected.length) {

        return games;

    }

    return games.filter(game => {

        const hours =
            game.completionTime.max;

        return selected.some(limit => {

            if (limit === 20) {

                return hours < 20;

            }

            if (limit === 50) {

                return hours >= 20 && hours <= 50;

            }

            if (limit === 100) {

                return hours > 50 && hours <= 100;

            }

            return hours > 100;

        });

    });

}