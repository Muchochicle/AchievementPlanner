import { safeSetItem } from "../../storage/safeSetItem.js";

const STORAGE_KEY = "achievement-planner-avatar";

export function getEquippedAvatar() {

    return localStorage.getItem(STORAGE_KEY) || "default";

}

export function saveEquippedAvatar(id) {

    safeSetItem(STORAGE_KEY, id, STORAGE_KEY);

}

export function resetEquippedAvatar() {

    localStorage.removeItem(STORAGE_KEY);

}