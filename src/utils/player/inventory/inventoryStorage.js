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

const STORAGE_KEY =

    "achievement-planner-inventory";

export function getInventory() {

    const data =

        localStorage.getItem(

            STORAGE_KEY

        );

    const inventory = safeParseJSON(

        data,

        structuredClone(DEFAULT_INVENTORY),

        STORAGE_KEY

    );

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

}

export function resetInventory() {

    saveInventory(

        structuredClone(

            DEFAULT_INVENTORY

        )

    );

}