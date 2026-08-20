import { filterDifficulty } from "./difficulty.js";

import { filterCompletionTime } from "./time.js";

import { filterExtras } from "./extras.js";

export function filterGames(games) {

    const selectedGenres = [

        ...document.querySelectorAll(

            ".filter-group:first-child input:checked"

        )

    ].map(input => input.value);

    let filtered = [...games];

    if (selectedGenres.length) {

        // Matches getGenres()'s own guard (utils/catalog/genres.js) and
        // the sibling filterDifficulty/filterCompletionTime/filterExtras
        // functions below, which all defensively handle a missing field
        // on a per-game basis rather than assuming the mapper's shape
        // guarantee always holds.
        filtered = filtered.filter(game =>

            (game.genres ?? []).some(genre =>

                selectedGenres.includes(genre)

            )

        );

    }

    filtered =
        filterDifficulty(filtered);

    filtered =
        filterCompletionTime(filtered);

    filtered =
        filterExtras(filtered);

    return filtered;

}