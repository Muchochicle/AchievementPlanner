export function createProgress(game) {

    const total = game.achievements.length;

    return `

        <section class="progress">

            <div class="progress-header">

                <h2>Progress</h2>

                <span id="progress-counter">

                    0 / ${total}

                </span>

            </div>

            <div class="progress-bar">

                <div
                    id="progress-fill"
                    class="progress-fill"
                ></div>

            </div>

            <p id="progress-text">

                0% completed

            </p>

        </section>

    `;

}