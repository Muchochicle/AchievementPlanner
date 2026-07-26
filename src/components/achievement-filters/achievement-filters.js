export function createAchievementFilters() {

    return `

        <div class="achievement-filters">

            <button
                class="filter-btn active"
                data-filter="all"
            >
                All
            </button>

            <button
                class="filter-btn"
                data-filter="pending"
            >
                Pending
            </button>

            <button
                class="filter-btn"
                data-filter="completed"
            >
                Completed
            </button>

        </div>

    `;

}