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
import {

    getAllAvatars

} from "../avatar/avatarManager.js";
import {

    ownsItem

} from "../inventory/inventoryManager.js";

export function getPlayerStatistics() {

    const player = getPlayer();

    const avatars = getAllAvatars();

    return {

        level: player.level,

        xp: player.xp,

        totalXP: player.totalXP,

        achievements: getUnlockedAchievements(),

        games: getPlayedGames(),

        completedGames: getCompletedGames(),

        avatarsUnlocked: avatars.filter(

            avatar => ownsItem("avatars", avatar.id)

        ).length,

        avatarsTotal: avatars.length

    };

}