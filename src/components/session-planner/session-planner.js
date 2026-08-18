import {

    findMergedEntry,
    isEntryCompleted

} from "../../utils/planner/achievement/completion.js";

export function createSessionPlanner(session, game) {

    if (!game?.achievements?.length) {

        return `

            <section class="session-planner">

                <div class="session-header">

                    <div>

                        <h2>

                            🎯 Today's Session

                        </h2>

                        <p>

                            Curated planner data isn't available for this game yet.

                        </p>

                    </div>

                </div>

            </section>

        `;

    }

    const merged = game?.mergedAchievements;

    const isDone = achievement => {

        const entry = findMergedEntry(game, achievement.id);

        return entry ? isEntryCompleted(merged, entry) : false;

    };

    const completed = session.filter(isDone).length;

    const progress =

        session.length === 0

            ? 0

            : Math.round(

                (completed / session.length) * 100

            );

    const totalMinutes =
        session.reduce(

            (sum, achievement) =>

                sum + achievement.estimatedTime,

            0

        );

    const targetMinutes =
        Number(

            document.getElementById(
                "session-duration"
            )?.value ?? 45

        );

    return `

        <section class="session-planner">

            <div class="session-header">

                <div>

                    <h2>

                        🎯 Today's Session

                    </h2>

                    <p>

                        ${session.length} achievement${session.length !== 1 ? "s" : ""} planned

                    </p>

                </div>

                <div class="session-time">

                    ${totalMinutes} / ${targetMinutes} min

                </div>

            </div>

            <div class="session-progress-info">

                <span>

                    Session Progress

                </span>

                <strong>

                    ${completed} / ${session.length}

                </strong>

            </div>

            <div

                class="progress-bar"

                role="progressbar"

                aria-valuemin="0"

                aria-valuemax="${session.length}"

                aria-valuenow="${completed}"

                aria-label="Session progress"

            >

                <div

                    class="progress-fill"

                    style="width:${progress}%"

                ></div>

            </div>

            <ul>

                ${session.map(achievement => `

                    <li>

                        <span aria-hidden="true">

                            ${isDone(achievement) ? "✅" : "⬜"}

                        </span>

                        <div>

                            <strong>

                                ${achievement.name}

                            </strong>

                            <small>

                                Difficulty ${achievement.difficulty}/5

                            </small>

                        </div>

                        <span>

                            ⏱ ${achievement.estimatedTime} min

                        </span>

                    </li>

                `).join("")}

            </ul>

            <div class="session-footer">

                <span>

                    Session completed

                </span>

                <strong>

                    ${progress}%

                </strong>

            </div>

        </section>

    `;

}
