import {

    getInventory,

    saveInventory

} from "./inventoryStorage.js";

export function ownsItem(

    category,

    id

) {

    const inventory =

        getInventory();

    return inventory[category]

        ?.includes(id);

}

export function addItem(

    category,

    id

) {

    const inventory =

        getInventory();

    if (

        !inventory[category]

    ) {

        return;

    }

    if (

        inventory[category]

            .includes(id)

    ) {

        return;

    }

    inventory[category]

        .push(id);

    saveInventory(

        inventory

    );

}

export function removeItem(

    category,

    id

) {

    const inventory =

        getInventory();

    inventory[category] =

        inventory[category]

            .filter(

                item =>

                    item !== id

            );

    saveInventory(

        inventory

    );

}