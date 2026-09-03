import {

    getCurrentAvatar,

    getAllAvatars

} from "../../utils/player/avatar/avatarManager.js";

import {

    ownsItem

} from "../../utils/player/inventory/inventoryManager.js";

import { escapeHtml } from "../../utils/format/escapeHtml.js";

// Reads each avatar's own requiredAchievements straight off the AVATARS
// catalog (src/data/player/avatars.js) - the same field
// playerProgress.js's checkPlayerUnlocks() actually gates unlocking on -
// instead of keeping a second, hand-maintained copy of these numbers here.
// That copy used to describe level/completedGames-based requirements that
// no longer match what actually unlocks each avatar.
function describeRequirement(avatar) {

    if (typeof avatar.requiredAchievements !== "number") {

        return "Locked";

    }

    return `Complete ${avatar.requiredAchievements} achievements`;

}

export function createAvatarPicker() {

    const current = getCurrentAvatar();

    const avatars = getAllAvatars();

    const tiles = avatars.map(item => {

        const owned = ownsItem("avatars", item.id);

        const equipped = item.id === current.id;

        const requirement = describeRequirement(item);

        const stateClass = [
            "avatar-tile",
            equipped ? "avatar-tile--equipped" : "",
            owned ? "" : "avatar-tile--locked"
        ].filter(Boolean).join(" ");

        const title = owned
            ? item.name
            : `Locked - ${requirement ?? "Locked"}`;

        return `

            <button

                type="button"

                class="${stateClass}"

                data-avatar-id="${escapeHtml(item.id)}"

                ${owned ? "" : "disabled"}

                aria-pressed="${equipped}"

                title="${escapeHtml(title)}"

            >

                <img

                    class="avatar-tile-image"

                    src="${escapeHtml(item.image)}"

                    alt="${escapeHtml(item.name)} avatar"

                >

                <span class="avatar-tile-name">${escapeHtml(item.name)}</span>

                ${owned
                    ? (equipped
                        ? `<span class="avatar-tile-badge">Equipped</span>`
                        : "")
                    : `
                        <span class="avatar-tile-lock" aria-hidden="true">🔒</span>
                        <span class="avatar-tile-requirement">${escapeHtml(requirement ?? "Locked")}</span>
                    `}

            </button>

        `;

    }).join("");

    return `

        <div

            id="avatar-picker"

            class="avatar-picker"

            role="group"

            aria-label="Choose your avatar"

        >

            ${tiles}

        </div>

    `;

}
