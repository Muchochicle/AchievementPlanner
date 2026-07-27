export function filterExtras(games) {

    const hasGuide =

        document.getElementById(
            "filter-guide"
        )?.checked;

    const missable =

        document.getElementById(
            "filter-missable"
        )?.checked;

    return games.filter(game => {

        if (hasGuide && !game.hasGuide) {

            return false;

        }

        if (missable && !game.missable) {

            return false;

        }

        return true;

    });

}