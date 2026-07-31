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

    const player = data
        ? JSON.parse(data)
        : { ...DEFAULT_PLAYER };

    player.claimedAchievements ??= [];

    player.claimedGames ??= [];

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

    localStorage.setItem(

        STORAGE_KEY,

        JSON.stringify(player)

    );

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


export function hasClaimedAchievement(id) {

    const player = getPlayer();

    return player.claimedAchievements.includes(id);

}

export function claimAchievement(id) {

    const player = getPlayer();

    if (

        player.claimedAchievements.includes(id)

    ) {

        return false;

    }

    player.claimedAchievements.push(id);

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