import {

    getCurrentAvatar,

    getAllAvatars

} from "../../utils/player/avatar/avatarManager.js";

import {

    ownsItem

} from "../../utils/player/inventory/inventoryManager.js";

import { escapeHtml } from "../../utils/format/escapeHtml.js";

// Unlock requirements as implemented in playerProgress.js checkPlayerUnlocks -
// kept in sync manually since there is no shared source of truth to read from.
const AVATAR_REQUIREMENTS = {

    rookie: "Reach Level 5",

    explorer: "Reach Level 10",

    veteran: "Complete 5 games",

    master: "Complete 100 achievements",

    legend: "Complete 500 achievements"

};

export function createAvatarPicker() {

    const current = getCurrentAvatar();

    const avatars = getAllAvatars();

    const tiles = avatars.map(item => {

        const owned = ownsItem("avatars", item.id);

        const equipped = item.id === current.id;

        const requirement = AVATAR_REQUIREMENTS[item.id];

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
