import { getPlannerProgress } from "./plannerProgress.js";

function isComplete(values) {

    return values.length > 0 && values.every(Boolean);

}

export function getCompletedGames() {

    return getPlannerProgress().filter(

        ({ values }) => isComplete(values)

    ).length;

}

export function getCompletedGameSlugs() {

    return getPlannerProgress()

        .filter(({ values }) => isComplete(values))

        .map(({ slug }) => slug);

}
