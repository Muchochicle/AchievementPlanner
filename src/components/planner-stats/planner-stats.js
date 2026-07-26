export function createPlannerStats() {

    return `

        <section class="planner-stats">

            <div class="planner-stat">

                <span class="planner-stat-icon">

                    ⏱

                </span>

                <div>

                    <small>Remaining Time</small>

                    <strong id="remaining-time">

                        0 min

                    </strong>

                </div>

            </div>

            <div class="planner-stat">

                <span class="planner-stat-icon">

                    ⭐

                </span>

                <div>

                    <small>Average Difficulty</small>

                    <strong id="average-difficulty">

                        -

                    </strong>

                </div>

            </div>

            <div class="planner-stat">

                <span class="planner-stat-icon">

                    🎯

                </span>

                <div>

                    <small>Missable Remaining</small>

                    <strong id="missable-remaining">

                        0

                    </strong>

                </div>

            </div>

        </section>

    `;

}