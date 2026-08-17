export function createSessionDuration(selected = 45) {

    return `

        <section class="session-duration">

            <h2>

                ⏱ Session Length

            </h2>

            <label for="session-duration" class="sr-only">

                Session length

            </label>

            <select id="session-duration">

                <option value="30" ${selected === 30 ? "selected" : ""}>

                    30 minutes

                </option>

                <option value="45" ${selected === 45 ? "selected" : ""}>

                    45 minutes

                </option>

                <option value="60" ${selected === 60 ? "selected" : ""}>

                    60 minutes

                </option>

                <option value="90" ${selected === 90 ? "selected" : ""}>

                    90 minutes

                </option>

            </select>

        </section>

    `;

}