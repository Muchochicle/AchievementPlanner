export function createSessionDuration() {

    return `

        <section class="session-duration">

            <h2>

                ⏱ Session Length

            </h2>

            <select id="session-duration">

                <option value="30">

                    30 minutes

                </option>

                <option value="45" selected>

                    45 minutes

                </option>

                <option value="60">

                    60 minutes

                </option>

                <option value="90">

                    90 minutes

                </option>

            </select>

        </section>

    `;

}