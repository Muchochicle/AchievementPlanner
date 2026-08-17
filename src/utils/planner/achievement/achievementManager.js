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

    // Best-effort DOM sync only: progress/stats/filters/saveProgress/
    // checkGameCompletion still read the legacy achievement-list
    // checkbox directly (unchanged in this phase), so keep it in sync
    // when it exists. Completion itself no longer depends on finding
    // it - callers always pass the resolved `checked` state explicitly.
    const checkbox = getCheckbox(id);

    if (checkbox) {

        checkbox.checked = checked;

    }

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