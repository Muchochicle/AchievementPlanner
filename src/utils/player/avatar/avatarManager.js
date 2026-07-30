import { AVATARS } from "../../../data/player/avatars.js";

import {

    getEquippedAvatar,

    saveEquippedAvatar

} from "./avatarStorage.js";

export function getCurrentAvatar() {

    const id = getEquippedAvatar();

    return AVATARS[id] ?? AVATARS.default;

}

export function equipAvatar(id) {

    if (!AVATARS[id]) {

        return false;

    }

    saveEquippedAvatar(id);

    return true;

}

export function getAllAvatars() {

    return Object.values(AVATARS);

}