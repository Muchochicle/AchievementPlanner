import {

    getPlayer

} from "../player.js";
import {

    getCompletedGames

} from "./helpers/completedGames.js";
import {

    getPlayedGames

} from "./helpers/games.js";
import {

    getUnlockedAchievements

} from "./helpers/achievements.js";

export function getPlayerStatistics() {

    const player = getPlayer();

    return {

        level: player.level,

        xp: player.xp,

        totalXP: player.totalXP,

        achievements: getUnlockedAchievements(),

        games: getPlayedGames(),

        completedGames: getCompletedGames(),

        streak: 0

    };

}