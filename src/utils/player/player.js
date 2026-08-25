import {

    getXPForNextLevel,

    calculateLevel,

    calculateCurrentXP

} from "./level/levelSystem.js";
import {

    getTitle

} from "./titles/titleSystem.js";
import {

    checkPlayerUnlocks

} from "./playerProgress.js";
import {

    safeParseJSON

} from "../storage/safeJson.js";
import {

    safeSetItem

} from "../storage/safeSetItem.js";
import {

    emitPlayerStateChanged

} from "./sync/syncBus.js";

const STORAGE_KEY = "achievement-planner-player";

const DEFAULT_PLAYER = {

    level: 1,

    xp: 0,

    totalXP: 0,

    completedAchievements: 0,

    completedGames: 0,

    currentStreak: 0,

    longestStreak: 0,

    badges: [],

    title: "Rookie Hunter",

    claimedAchievements: [],

    claimedGames: [],

    hoursPlayed: 0,

    completionRate: 0,

    lastPlayed: null


};

export function getPlayer() {

    const data = localStorage.getItem(STORAGE_KEY);

    const parsed = safeParseJSON(
        data,
        null,
        STORAGE_KEY
    );

    // safeParseJSON only guards against syntactically invalid JSON - a
    // stored value like the literal string "null" (or "42", "[]") is
    // valid JSON, so it parses through untouched instead of falling back.
    // Without this check, a null/array/primitive here crashed on the very
    // next line (`player.claimedAchievements ??= []` throws on null),
    // taking down every page that renders player state on load (Phase 66).
    const player =
        parsed !== null && typeof parsed === "object" && !Array.isArray(parsed)
            ? parsed
            : { ...DEFAULT_PLAYER };

    player.claimedAchievements ??= [];

    player.claimedGames ??= [];

    player.badges ??= [];

    player.totalXP ??= 0;

    player.hoursPlayed ??= 0;

    player.completionRate ??= 0;

    player.lastPlayed ??= null;

    player.level = calculateLevel(

        player.totalXP

    );

    player.xp = calculateCurrentXP(

        player.totalXP

    );

    player.title = getTitle(

        player.level

    );

    return player;

}

export function savePlayer(player) {

    safeSetItem(

        STORAGE_KEY,

        JSON.stringify(player),

        STORAGE_KEY

    );

    emitPlayerStateChanged();

}

export function resetPlayer() {

    savePlayer({

        ...DEFAULT_PLAYER

    });

}

export function addXP(amount) {

    const player = getPlayer();

    player.totalXP += amount;

    savePlayer(player);

    checkPlayerUnlocks();

}

export function completeAchievement() {

    const player = getPlayer();

    player.completedAchievements++;

    savePlayer(player);

}

export function completeGame() {

    const player = getPlayer();

    player.completedGames++;

    savePlayer(player);

}

export function unlockBadge(name) {

    const player = getPlayer();

    if (

        !player.badges.includes(name)

    ) {

        player.badges.push(name);

    }

    savePlayer(player);

}


export function hasClaimedAchievement(slug, id) {

    const player = getPlayer();

    return player.claimedAchievements.includes(`${slug}:${id}`);

}

export function claimAchievement(slug, id) {

    const player = getPlayer();

    const key = `${slug}:${id}`;

    if (

        player.claimedAchievements.includes(key)

    ) {

        return false;

    }

    player.claimedAchievements.push(key);

    savePlayer(player);

    return true;

}

export function hasClaimedGame(slug) {

    const player = getPlayer();

    if (!player.claimedGames) {

        player.claimedGames = [];

        savePlayer(player);

    }

    return player.claimedGames.includes(slug);

}

export function claimGame(slug) {

    const player = getPlayer();

    if (!player.claimedGames) {

        player.claimedGames = [];

    }

    if (

        player.claimedGames.includes(slug)

    ) {

        return false;

    }

    player.claimedGames.push(slug);

    savePlayer(player);

    return true;

}