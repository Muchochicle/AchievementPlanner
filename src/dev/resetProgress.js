import { resetPlayer } from "../utils/player/player.js";

export function resetDevelopmentProgress() {

    if (

        !confirm(

            "Reset ALL development progress?"

        )

    ) {

        return;

    }

    const keys = [];

    for (

        let i = 0;

        i < localStorage.length;

        i++

    ) {

        keys.push(

            localStorage.key(i)

        );

    }

    keys.forEach(key => {

        if (

            key.startsWith("planner-") ||

            key.startsWith("session-")

        ) {

            localStorage.removeItem(key);

        }

    });

    resetPlayer();

    location.reload();

}