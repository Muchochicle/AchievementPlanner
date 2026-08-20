const STORAGE_KEY = "achievement-planner-avatar";

export function getEquippedAvatar() {

    return localStorage.getItem(STORAGE_KEY) || "default";

}

export function saveEquippedAvatar(id) {

    localStorage.setItem(STORAGE_KEY, id);

}

export function resetEquippedAvatar() {

    localStorage.removeItem(STORAGE_KEY);

}