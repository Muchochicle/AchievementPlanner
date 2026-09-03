import { filterDifficulty } from "./difficulty.js";

import { filterCompletionTime } from "./time.js";

import { filterExtras } from "./extras.js";

import { filterCompletionPercent } from "./completion.js";

import { filterPlaytime } from "./playtime.js";

// The orchestrator games.js calls on every keystroke/filter change. Each
// step is an independent AND across filter categories; every step returns
// its input unchanged when nothing in that category is selected, so the
// no-filters case is a straight pass-through.
export function filterGames(games) {

    const selectedGenres = [

        ...document.querySelectorAll(

            ".filter-group:first-child input:checked"

        )

    ].map(input => input.value);

    let filtered = [...games];

    if (selectedGenres.length) {

        // Matches getGenres()'s own guard (utils/catalog/genres.js) and
        // the sibling filter functions, which all defensively handle a
        // missing field on a per-game basis rather than assuming the
        // mapper's shape guarantee always holds.
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
        filterCompletionPercent(filtered);

    filtered =
        filterPlaytime(filtered);

    filtered =
        filterExtras(filtered);

    return filtered;

}
