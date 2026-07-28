import { createSessionPlanner } from "../../../components/session-planner/session-planner.js";

import {
    getSession
} from "../session/sessionManager.js";

import {
    toggleAchievement
} from "../achievement/achievementManager.js";

export function renderSession(

    game,
    slug,
    refresh

) {

    const duration = Number(

        document.getElementById(
            "session-duration"
        ).value

    );

    const session =

        getSession(

            game,
            slug,
            duration

        );

    document.getElementById(
        "session-container"
    ).innerHTML =

        createSessionPlanner(
            session
        );

    document
        .querySelectorAll(
            ".session-check input"
        )
        .forEach(box => {

            box.addEventListener(
                "change",
                () => {

                    toggleAchievement(

                        Number(
                            box.dataset.id
                        ),

                        box.checked,

                        slug,

                        refresh

                    );

                }

            );

        });

}