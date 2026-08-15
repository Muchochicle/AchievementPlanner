import { saveProgress } from "../storage.js";

import {

    completeAchievement,

    addXP,

    claimAchievement

} from "../../player/player.js";

import {

    checkGameCompletion

} from "../game/gameCompletion.js";

export function toggleAchievement(

    id,

    checked,

    slug,

    refresh,

    game

) {

    const checkbox =

        document.querySelector(

            `.achievement-check input[data-id="${id}"]`

        );

    if (!checkbox) {

        return;

    }

    checkbox.checked = checked;

    if (

        checked

    ) {

        if (

            claimAchievement(slug, id)

        ) {

            completeAchievement();

            addXP(50);

        }

    }

    checkGameCompletion(game);

    saveProgress(slug);

    refresh();

}

export function getCheckbox(id) {

    return document.querySelector(

        `.achievement-check input[data-id="${id}"]`

    );

}

export function isCompleted(id) {

    const checkbox =

        getCheckbox(id);

    return checkbox?.checked ?? false;

}