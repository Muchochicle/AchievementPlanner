import { CONFIG } from "../../../config.js";
import {

    DEFAULT_INVENTORY

} from "../../../data/player/inventory/inventory.js";

const STORAGE_KEY =

    "achievement-planner-inventory";

export function getInventory() {

    const data =

        localStorage.getItem(

            STORAGE_KEY

        );

    const inventory =

            data

                ? JSON.parse(data)

                : structuredClone(

                    DEFAULT_INVENTORY

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

    localStorage.setItem(

        STORAGE_KEY,

        JSON.stringify(

            inventory

        )

    );

}

export function resetInventory() {

    saveInventory(

        structuredClone(

            DEFAULT_INVENTORY

        )

    );

}