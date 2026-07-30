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
    
    claimedAchievements: []

};

export function getPlayer() {

    const data = localStorage.getItem(STORAGE_KEY);

    return data

        ? JSON.parse(data)

        : { ...DEFAULT_PLAYER };

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

    player.xp += amount;

    player.totalXP += amount;

    while (

        player.xp >= getXPForNextLevel(

            player.level

        )

    ) {

        player.level++;

    }

    player.title = getTitle(

        player.level

    );

    savePlayer(player);

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

export function getXPForNextLevel(level) {

    return level * level * 100;

}

export function getTitle(level) {

    if (level >= 50) {

        return "Legendary Hunter";

    }

    if (level >= 30) {

        return "Master Hunter";

    }

    if (level >= 20) {

        return "Veteran Hunter";

    }

    if (level >= 10) {

        return "Achievement Seeker";

    }

    return "Rookie Hunter";

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