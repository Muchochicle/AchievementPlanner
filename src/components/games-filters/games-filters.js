// Task 7: richer sort UI - a key <select> plus an Asc/Desc direction
// toggle button. games.js reads `.games-sort` (the key) and
// `.games-sort-dir` (data-direction) and re-runs the in-memory
// search->filter->sort pipeline; nothing reloads.
//
// Options marked data-player-sort="true" need live Steam per-game player
// data (/api/profile/game-stats). games.js disables them until that data
// is in (logged-out visitors, or the brief window before it loads), so a
// visitor can't pick a sort that has no data behind it.
export function createGamesFilters() {

    return `

        <section class="games-filters">

            <input
                class="games-search"
                type="text"
                aria-label="Search games"
                placeholder="🔍 Search games..."
            >

            <div class="games-toolbar">

                <span
                    id="games-counter"
                    class="games-counter"
                >

                    Loading…

                </span>

                <div class="games-sort-controls">

                    <label>

                        Sort by

                        <select class="games-sort">

                            <option value="name">Name</option>

                            <option value="playtime" data-player-sort="true">Hours played</option>

                            <option value="completion-percent" data-player-sort="true">Completion %</option>

                            <option value="achievements-completed" data-player-sort="true">Achievements completed</option>

                            <option value="completion-status" data-player-sort="true">Completed 100%</option>

                            <option value="achievements-total">Total achievements</option>

                            <option value="difficulty">Difficulty</option>

                            <option value="time">Completion time</option>

                        </select>

                    </label>

                    <button
                        type="button"
                        class="games-sort-dir"
                        data-direction="asc"
                        aria-label="Sort direction: ascending"
                        title="Toggle ascending / descending"
                    >

                        <span class="games-sort-dir-icon" aria-hidden="true">↑</span>
                        <span class="games-sort-dir-text">A–Z</span>

                    </button>

                </div>

            </div>

        </section>

    `;

}
