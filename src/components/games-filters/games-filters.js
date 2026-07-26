export function createGamesFilters() {

    return `

        <section class="games-filters">

            <input
                class="games-search"
                type="text"
                placeholder="🔍 Search games..."
            >

            <div class="games-toolbar">

                <span
                    id="games-counter"
                    class="games-counter"
                >

                    Showing 0 games

                </span>

                <label>

                    Sort by

                    <select class="games-sort">

                        <option value="name">

                            Alphabetical

                        </option>

                        <option value="difficulty">

                            Difficulty

                        </option>

                        <option value="time">

                            Completion Time

                        </option>

                    </select>

                </label>

            </div>

        </section>

    `;

}