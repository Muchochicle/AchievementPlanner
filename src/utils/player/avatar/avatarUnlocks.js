import {

    addItem,

    ownsItem

} from "../inventory/inventoryManager.js";

export function unlockAvatar(id) {

    if (

        ownsItem(

            "avatars",

            id

        )

    ) {

        return false;

    }

    addItem(

        "avatars",

        id

    );

    return true;

}
export const AVATAR_UNLOCKS = {

    default: {

        unlocked: true,

        description: "Default avatar"

    },

    rookie: {

        unlocked: false,

        description: "Complete 10 achievements"

    },

    explorer: {

        unlocked: false,

        description: "Complete 25 achievements"

    },

    veteran: {

        unlocked: false,

        description: "Complete 10 games"

    },

    master: {

        unlocked: false,

        description: "Reach Level 20"

    },

    legend: {

        unlocked: false,

        description: "Unlock every badge"

    }

};