export function createCatalogFilters(genresHTML) {

    return `

        <section class="catalog-filters">

            <button
                class="filters-toggle"
                id="filters-toggle"
                aria-expanded="false"
                aria-controls="filters-panel"
            >

                ⚙ Filters

            </button>

            <div
                class="filters-panel"
                id="filters-panel"
            >

                <div class="filter-group">

                    <h2>

                        Genre

                    </h2>

                    ${genresHTML}

                </div>

                <div class="filter-group difficulty-filter">

                    <h2>

                        Difficulty

                    </h2>

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

                    <h2>

                        Completion Time

                    </h2>

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

                <div class="filter-group extras-filter">

                    <h2>

                        Extras

                    </h2>

                    <label>

                        <input
                            id="filter-guide"
                            type="checkbox"
                        >

                        Has Guide

                    </label>

                    <label>

                        <input
                            id="filter-missable"
                            type="checkbox"
                        >

                        Missable Achievements

                    </label>

                </div>

            </div>

        </section>

    `;

}