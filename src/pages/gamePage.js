import {

    createGameHeader

} from "../components/game-header/game-header.js";

import {

    createGameOverview

} from "../components/game-overview/game-overview.js";

import {

    createProgress

} from "../components/progress/progress.js";

import {

    createPlannerStats

} from "../components/planner-stats/planner-stats.js";

import {

    createAchievementList

} from "../components/achievement-list/achievement-list.js";

import {

    createSessionDuration

} from "../components/session-duration/session-duration.js";

export function createGamePage(game) {

    return `

        ${createGameHeader(game)}

        ${createGameOverview(game)}

        <div id="recommended-container"></div>

        ${createSessionDuration()}

        <div id="session-container"></div>

        ${createProgress(game)}

        ${createPlannerStats()}

        ${createAchievementList(game)}

    `;

}