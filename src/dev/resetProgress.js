import { resetPlayer } from "../utils/player/player.js";
import { resetInventory } from "../utils/player/inventory/inventoryStorage.js";
import { resetEquippedAvatar } from "../utils/player/avatar/avatarStorage.js";

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
    resetInventory();
    resetEquippedAvatar();

    location.reload();

}