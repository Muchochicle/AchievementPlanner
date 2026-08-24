import { escapeHtml } from "../format/escapeHtml.js";

export function getGenres(games) {

    const genres = new Set();

    games.forEach(game => {

        if (!game.genres) {

            return;

        }

        game.genres.forEach(genre => {

            genres.add(genre);

        });

    });

    return [...genres].sort();

}

export function createGenresHTML(genres) {

    // genres currently only ever comes from curated static JSON (see
    // src/data/games/*.json via getGenres above), so this was never
    // reachable with attacker-controlled data - escaped anyway (Finding 10,
    // PHASE_51-54_AUDIT.md) to match every other dynamic-string-into-HTML
    // site in this codebase's convention, and to close the gap if genre
    // data is ever sourced dynamically in the future.
    return genres.map(genre => `

        <label>

            <input
                type="checkbox"
                value="${escapeHtml(genre)}"
            >

            ${escapeHtml(genre)}

        </label>

    `).join("");

}