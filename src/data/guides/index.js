import { GUIDE as gettingStarted } from "./app/getting-started.js";
import { GUIDE as understandingAchievementAvailability } from "./app/understanding-achievement-availability.js";
import { GUIDE as sessionPlannerAndRecommendations } from "./app/session-planner-and-recommendations.js";
import { GUIDE as podiumsAndLeaderboards } from "./app/podiums-and-leaderboards.js";
import { GUIDE as playerProgress } from "./app/player-progress.js";
import { GUIDE as catalogAndFilters } from "./app/catalog-and-filters.js";
import { GUIDE as profileAndStatistics } from "./app/profile-and-statistics.js";
import { GUIDE as steamLoginAndYourData } from "./app/steam-login-and-your-data.js";
import { GUIDE as achievementCompletionAndTracking } from "./app/achievement-completion-and-tracking.js";

import { GUIDE as hadesAchievementGuide } from "./games/hades.js";

export const APP_GUIDES = [

    gettingStarted,
    understandingAchievementAvailability,
    sessionPlannerAndRecommendations,
    podiumsAndLeaderboards,
    playerProgress,
    catalogAndFilters,
    profileAndStatistics,
    steamLoginAndYourData,
    achievementCompletionAndTracking

];

// Phase 37 ships the first real Game Guide (Hades - see
// src/data/guides/games/hades.js for its sourcing notes). Hollow Knight
// and Portal 2 both still declare hasGuide:true in their planner data
// (src/data/games/hollow-knight.json, portal-2.json) but have no entry
// here yet - their game pages correctly show the honest "coming soon"
// state (game-guide-notice.js) until real, sourced content is written for
// them too, using hades.js as the template.
//
// A real game guide belongs here once actually written, shaped like an
// APP_GUIDES entry plus:
//   - category: "game"
//   - gameSlug: the catalog game it documents, matching
//     src/data/games/<gameSlug>.json's own `slug` - this is what
//     getGameGuideForSlug() below matches against, distinct from the
//     guide's own `slug` (its guides.html/guide.html URL).
export const GAME_GUIDES = [

    hadesAchievementGuide

];

export const ALL_GUIDES = [...APP_GUIDES, ...GAME_GUIDES];

export function getGuideBySlug(slug) {

    return ALL_GUIDES.find(guide => guide.slug === slug) ?? null;

}

// Used by game-guide-notice.js to tell "a real guide exists for this game"
// (this function) apart from game.hasGuide ("AchievementPlanner has
// curated planner data that also declares a guide is planned for this
// game") - the two combine into an honest 3-state notice: nothing shown,
// "guide planned" (coming soon), or a real link. See game-guide-notice.js.
export function getGameGuideForSlug(gameSlug) {

    return GAME_GUIDES.find(guide => guide.gameSlug === gameSlug) ?? null;

}
