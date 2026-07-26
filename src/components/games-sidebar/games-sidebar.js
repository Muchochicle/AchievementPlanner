export function createGamesSidebar() {

    return `

        <aside class="games-sidebar">

            <h2>

                Filters

            </h2>

            <section class="sidebar-section">

                <h3>Difficulty</h3>

                <label>

                    <input
                        type="checkbox"
                        value="easy"
                    >

                    Easy (1-3)

                </label>

                <label>

                    <input
                        type="checkbox"
                        value="medium"
                    >

                    Medium (4-6)

                </label>

                <label>

                    <input
                        type="checkbox"
                        value="hard"
                    >

                    Hard (7-10)

                </label>

            </section>

            <section class="sidebar-section">

                <h3>Completion Time</h3>

                <label>

                    <input
                        type="checkbox"
                        value="short"
                    >

                    Under 10 h

                </label>

                <label>

                    <input
                        type="checkbox"
                        value="medium-time"
                    >

                    10-25 h

                </label>

                <label>

                    <input
                        type="checkbox"
                        value="long"
                    >

                    25+ h

                </label>

            </section>

        </aside>

    `;

}