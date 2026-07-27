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

        filtered = filtered.filter(game =>

            game.genres.some(genre =>

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