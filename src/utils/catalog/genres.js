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

    return genres.map(genre => `

        <label>

            <input
                type="checkbox"
                value="${genre}"
            >

            ${genre}

        </label>

    `).join("");

}