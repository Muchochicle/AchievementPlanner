import { AVATARS } from "../../../data/player/avatars.js";

import {

    getEquippedAvatar,

    saveEquippedAvatar

} from "./avatarStorage.js";

import {

    ownsItem

} from "../inventory/inventoryManager.js";

export function getCurrentAvatar() {

    const id = getEquippedAvatar();

    return AVATARS[id] ?? AVATARS.default;

}

export function equipAvatar(id) {

    if (!AVATARS[id]) {

        return false;

    }

    if (

        !ownsItem(

            "avatars",

            id

        )

    ) {

        return false;

    }

    saveEquippedAvatar(id);

    return true;

}

export function getAllAvatars() {

    return Object.values(AVATARS);

}