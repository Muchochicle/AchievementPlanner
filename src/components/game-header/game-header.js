export function createGameHeader(game) {

    return `

        <section class="game-header">

            <img
                class="game-header-image"
                src="${game.image}"
                alt="${game.name}"
            >

            <h1>${game.name}</h1>

            <p class="game-genres">

                ${game.genres.join(" • ")}

            </p>

        </section>

    `;

}