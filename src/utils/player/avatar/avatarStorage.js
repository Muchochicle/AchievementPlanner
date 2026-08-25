import { safeSetItem } from "../../storage/safeSetItem.js";
import { emitPlayerStateChanged } from "../sync/syncBus.js";

const STORAGE_KEY = "achievement-planner-avatar";

export function getEquippedAvatar() {

    return localStorage.getItem(STORAGE_KEY) || "default";

}

export function saveEquippedAvatar(id) {

    safeSetItem(STORAGE_KEY, id, STORAGE_KEY);
    emitPlayerStateChanged();

}

export function resetEquippedAvatar() {

    localStorage.removeItem(STORAGE_KEY);
    emitPlayerStateChanged();

}