export function createAchievementFilters() {

    return `

        <div class="achievement-filters">

            <button
                class="filter-btn active"
                data-filter="all"
                aria-pressed="true"
            >
                All
            </button>

            <button
                class="filter-btn"
                data-filter="pending"
                aria-pressed="false"
            >
                Pending
            </button>

            <button
                class="filter-btn"
                data-filter="completed"
                aria-pressed="false"
            >
                Completed
            </button>

        </div>

    `;

}