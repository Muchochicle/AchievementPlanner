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
import { GUIDE as portal2AchievementGuide } from "./games/portal-2.js";
import { GUIDE as hollowKnightAchievementGuide } from "./games/hollow-knight.js";
import { GUIDE as celesteAchievementGuide } from "./games/celeste.js";
import { GUIDE as insideAchievementGuide } from "./games/inside.js";
import { GUIDE as portalAchievementGuide } from "./games/portal.js";
import { GUIDE as limboAchievementGuide } from "./games/limbo.js";
import { GUIDE as braidAchievementGuide } from "./games/braid.js";
import { GUIDE as oriAndTheBlindForestAchievementGuide } from "./games/ori-and-the-blind-forest.js";
import { GUIDE as whatRemainsOfEdithFinchAchievementGuide } from "./games/what-remains-of-edith-finch.js";
import { GUIDE as returnOfTheObraDinnAchievementGuide } from "./games/return-of-the-obra-dinn.js";
import { GUIDE as stardewValleyAchievementGuide } from "./games/stardew-valley.js";
import { GUIDE as aShortHikeAchievementGuide } from "./games/a-short-hike.js";
import { GUIDE as hyperLightDrifterAchievementGuide } from "./games/hyper-light-drifter.js";
import { GUIDE as cupheadAchievementGuide } from "./games/cuphead.js";
import { GUIDE as superliminalAchievementGuide } from "./games/superliminal.js";
import { GUIDE as transistorAchievementGuide } from "./games/transistor.js";
import { GUIDE as bastionAchievementGuide } from "./games/bastion.js";
import { GUIDE as rimeAchievementGuide } from "./games/rime.js";

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

// Phase 37 shipped the first real Game Guide (Hades). Phase 73 completed
// the set as of that phase's catalog; every real, non-debug catalog game
// (backend/catalog/games/*.json, excluding debug-game) has had a real,
// sourced Game Guide here ever since a game's added to the catalog - see
// each game's own guides/games/<slug>.js for its sourcing notes.
// debug-game declares hasGuide:false and correctly has no entry here.
//
// A real game guide belongs here once actually written, shaped like an
// APP_GUIDES entry plus:
//   - category: "game"
//   - gameSlug: the catalog game it documents, matching
//     backend/catalog/games/<gameSlug>.json's own filename - this is what
//     getGameGuideForSlug() below matches against, distinct from the
//     guide's own `slug` (its guides.html/guide.html URL).
export const GAME_GUIDES = [

    hadesAchievementGuide,
    portal2AchievementGuide,
    hollowKnightAchievementGuide,
    celesteAchievementGuide,
    insideAchievementGuide,
    portalAchievementGuide,
    limboAchievementGuide,
    braidAchievementGuide,
    oriAndTheBlindForestAchievementGuide,
    whatRemainsOfEdithFinchAchievementGuide,
    returnOfTheObraDinnAchievementGuide,
    stardewValleyAchievementGuide,
    aShortHikeAchievementGuide,
    hyperLightDrifterAchievementGuide,
    cupheadAchievementGuide,
    superliminalAchievementGuide,
    transistorAchievementGuide,
    bastionAchievementGuide,
    rimeAchievementGuide

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
