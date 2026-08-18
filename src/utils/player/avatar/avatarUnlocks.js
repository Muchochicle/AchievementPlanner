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