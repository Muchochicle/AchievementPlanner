import { getPlannerProgress } from "./plannerProgress.js";

export function getUnlockedAchievements() {

    return getPlannerProgress().reduce(

        (total, { values }) =>

            total + values.filter(Boolean).length,

        0

    );

}
