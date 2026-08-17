import { getPlannerProgress } from "./plannerProgress.js";

export function getPlayedGames() {

    return getPlannerProgress().filter(

        ({ values }) => values.some(Boolean)

    ).length;

}

// Games with some progress but not yet 100% complete - the "continue
// playing" half of the completed/in-progress split shown on the profile.
export function getInProgressGameSlugs() {

    return getPlannerProgress()

        .filter(({ values }) =>

            values.some(Boolean) &&
            !values.every(Boolean)

        )

        .map(({ slug }) => slug);

}
