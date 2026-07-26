export function createCatalogFilters(genresHTML) {

    return `

        <section class="catalog-filters">

            <button
                class="filters-toggle"
                id="filters-toggle"
            >

                ⚙ Filters

            </button>

            <div
                class="filters-panel"
                id="filters-panel"
            >

                <div class="filter-group">

                    <h3>

                        Genre

                    </h3>

                    ${genresHTML}

                </div>

                <div class="filter-group difficulty-filter">

                    <h3>

                        Difficulty

                    </h3>

                    <label>

                        <input
                            type="checkbox"
                            value="Easy"
                        >

                        Easy (1-3)

                    </label>

                    <label>

                        <input
                            type="checkbox"
                            value="Medium"
                        >

                        Medium (4-6)

                    </label>

                    <label>

                        <input
                            type="checkbox"
                            value="Hard"
                        >

                        Hard (7-10)

                    </label>

                </div>

                <div class="filter-group time-filter">

                    <h3>

                        Completion Time

                    </h3>

                    <label>

                        <input
                            type="checkbox"
                            value="20"
                        >

                        Less than 20 h

                    </label>

                    <label>

                        <input
                            type="checkbox"
                            value="50"
                        >

                        20 - 50 h

                    </label>

                    <label>

                        <input
                            type="checkbox"
                            value="100"
                        >

                        50 - 100 h

                    </label>

                    <label>

                        <input
                            type="checkbox"
                            value="101"
                        >

                        100+ h

                    </label>

                </div>

            </div>

        </section>

    `;

}