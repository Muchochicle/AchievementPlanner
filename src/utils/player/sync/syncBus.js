// Minimal pub/sub so player.js/inventoryStorage.js/avatarStorage.js can
// announce "local state just changed" without importing playerSync.js
// directly - playerSync.js needs to import getPlayer/getInventory/
// getEquippedAvatar from those same modules to collect state for a push,
// and importing back the other way would make that an import cycle. This
// module has no imports of its own, so it can sit underneath both sides
// without creating one.
const listeners = [];

export function onPlayerStateChanged(listener) {

    listeners.push(listener);

}

export function emitPlayerStateChanged() {

    for (const listener of listeners) {

        listener();

    }

}
