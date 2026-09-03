// Task 8: expanded filter panel. Genre stays the FIRST .filter-group -
// utils/catalog/filters.js selects checked genres via
// ".filter-group:first-child input:checked", so its position is load-
// bearing. New groups are appended after it.
//
// Groups marked data-player-filter="true" depend on live Steam per-game
// player data (/api/profile/game-stats). games.js disables their inputs
// (and shows the note) until that data is in - logged-out visitors, or
// the brief window before it loads - so they can never be checked against
// data that isn't there.
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

                    <h2>Genre</h2>

                    ${genresHTML}

                </div>

                <div class="filter-group difficulty-filter">

                    <h2>Difficulty</h2>

                    <label><input type="checkbox" value="Easy"> Easy (1-3)</label>

                    <label><input type="checkbox" value="Medium"> Medium (4-6)</label>

                    <label><input type="checkbox" value="Hard"> Hard (7-10)</label>

                </div>

                <div class="filter-group time-filter">

                    <h2>Completion Time</h2>

                    <label><input type="checkbox" value="20"> Less than 20 h</label>

                    <label><input type="checkbox" value="50"> 20 - 50 h</label>

                    <label><input type="checkbox" value="100"> 50 - 100 h</label>

                    <label><input type="checkbox" value="101"> 100+ h</label>

                </div>

                <div class="filter-group completion-filter" data-player-filter="true">

                    <h2>Achievement Completion</h2>

                    <p class="filter-group-note" hidden>Log in with Steam to filter by your own completion.</p>

                    <label><input type="checkbox" value="0-10"> 0 - 10%</label>

                    <label><input type="checkbox" value="10-20"> 10 - 20%</label>

                    <label><input type="checkbox" value="20-30"> 20 - 30%</label>

                    <label><input type="checkbox" value="30-40"> 30 - 40%</label>

                    <label><input type="checkbox" value="40-50"> 40 - 50%</label>

                    <label><input type="checkbox" value="50-60"> 50 - 60%</label>

                    <label><input type="checkbox" value="60-70"> 60 - 70%</label>

                    <label><input type="checkbox" value="70-80"> 70 - 80%</label>

                    <label><input type="checkbox" value="80-90"> 80 - 90%</label>

                    <label><input type="checkbox" value="90-100"> 90 - 99%</label>

                    <label><input type="checkbox" value="100"> 100% complete</label>

                </div>

                <div class="filter-group playtime-filter" data-player-filter="true">

                    <h2>Hours Played</h2>

                    <p class="filter-group-note" hidden>Log in with Steam to filter by your own playtime.</p>

                    <label><input type="checkbox" value="0-5"> 0 - 5 h</label>

                    <label><input type="checkbox" value="5-10"> 5 - 10 h</label>

                    <label><input type="checkbox" value="10-25"> 10 - 25 h</label>

                    <label><input type="checkbox" value="25-50"> 25 - 50 h</label>

                    <label><input type="checkbox" value="50-100"> 50 - 100 h</label>

                    <label><input type="checkbox" value="100-250"> 100 - 250 h</label>

                    <label><input type="checkbox" value="250"> 250+ h</label>

                </div>

                <div class="filter-group extras-filter">

                    <h2>Extras</h2>

                    <label><input id="filter-guide" type="checkbox"> Has Guide</label>

                    <label><input id="filter-missable" type="checkbox"> Missable Achievements</label>

                    <label><input id="filter-has-achievements" type="checkbox"> Has achievements</label>

                    <label><input id="filter-no-achievements" type="checkbox"> No achievements</label>

                    <label data-player-filter="true"><input id="filter-owned" type="checkbox"> In my Steam library</label>

                    <label data-player-filter="true"><input id="filter-completed" type="checkbox"> Completed 100%</label>

                    <label data-player-filter="true"><input id="filter-recent" type="checkbox"> Played in last 2 weeks</label>

                </div>

            </div>

        </section>

    `;

}
