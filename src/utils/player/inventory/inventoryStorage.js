import { CONFIG } from "../../../config.js";
import {

    DEFAULT_INVENTORY

} from "../../../data/player/inventory/inventory.js";
import {

    safeParseJSON

} from "../../storage/safeJson.js";
import {

    safeSetItem

} from "../../storage/safeSetItem.js";
import {

    emitPlayerStateChanged

} from "../sync/syncBus.js";

const STORAGE_KEY =

    "achievement-planner-inventory";

export function getInventory() {

    const data =

        localStorage.getItem(

            STORAGE_KEY

        );

    const parsed = safeParseJSON(

        data,

        null,

        STORAGE_KEY

    );

    // safeParseJSON only guards against syntactically invalid JSON - a
    // stored value like the literal string "null" (or "42", "[]") is
    // valid JSON, so it parses through untouched instead of falling back.
    // Without this check, a null/array/primitive here crashed the very
    // next consumer down the line (e.g. ownsItem()'s `inventory[category]`,
    // since optional chaining only protects the property access, not the
    // base value itself) (Phase 66).
    const inventory =
        parsed !== null && typeof parsed === "object" && !Array.isArray(parsed)
            ? parsed
            : structuredClone(DEFAULT_INVENTORY);

        if (

            CONFIG.DEBUG_UNLOCK_ALL_AVATARS

        ) {

            inventory.avatars = [

                "default",

                "rookie",

                "explorer",

                "veteran",

                "master",

                "legend"

            ];

        }

        return inventory;

}

export function saveInventory(

    inventory

) {

    safeSetItem(

        STORAGE_KEY,

        JSON.stringify(

            inventory

        ),

        STORAGE_KEY

    );

    emitPlayerStateChanged();

}

export function resetInventory() {

    saveInventory(

        structuredClone(

            DEFAULT_INVENTORY

        )

    );

}