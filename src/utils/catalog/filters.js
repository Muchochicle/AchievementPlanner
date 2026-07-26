export function filterGames(games) {

    const selectedGenres = [

        ...document.querySelectorAll(

            ".filter-group:first-child input:checked"

        )

    ].map(input => input.parentElement.textContent.trim());

    if (!selectedGenres.length) {

        return games;

    }

    return games.filter(game =>

        game.genres.some(genre =>

            selectedGenres.includes(genre)

        )

    );

}