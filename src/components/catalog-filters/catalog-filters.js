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

                <div class="filter-group">

                    <h3>

                        Difficulty

                    </h3>

                    <label>

                        <input type="checkbox">

                        Easy

                    </label>

                    <label>

                        <input type="checkbox">

                        Medium

                    </label>

                    <label>

                        <input type="checkbox">

                        Hard

                    </label>

                </div>

                <div class="filter-group">

                    <h3>

                        Completion Time

                    </h3>

                    <label>

                        <input type="checkbox">

                        Less than 20 h

                    </label>

                    <label>

                        <input type="checkbox">

                        20 - 50 h

                    </label>

                    <label>

                        <input type="checkbox">

                        50 - 100 h

                    </label>

                    <label>

                        <input type="checkbox">

                        100+ h

                    </label>

                </div>

            </div>

        </section>

    `;

}