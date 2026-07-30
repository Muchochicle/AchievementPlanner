import { resetPlayer } from "../utils/player/player.js";

export function resetDevelopmentProgress() {

    if (

        !confirm(

            "¿Reiniciar TODO el progreso del desarrollo?"

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