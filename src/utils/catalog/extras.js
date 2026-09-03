// The "Extras" filter group. Each control is an independent AND: a game
// must satisfy every checked one. Every check is a no-op unless its
// checkbox exists AND is checked, so this stays inert for the (default)
// no-filters case and for pages/tests that only render some of the
// controls.
//
// Task 8 added the player-progress checks (owned / completed / recently
// played) and the achievement-presence checks alongside the original
// guide/missable pair. The player checks read the same merged fields the
// player-aware sort uses (game.owned, game.playerPercent, game.lastPlayed
// - filled in by games.js from /api/games + /api/profile/game-stats).

const RECENTLY_PLAYED_WINDOW_MS = 14 * 24 * 60 * 60 * 1000;

function isChecked(id) {

    return Boolean(document.getElementById(id)?.checked);

}

// "Does this game have achievements at all?" - true if our catalog lists
// any, or Steam's schema reported some, or the player-stats merge saw a
// non-zero total. Deliberately conservative: returns null ("don't know")
// rather than false when we have no signal either way, so the
// "no achievements" filter never hides a game we simply lack data for.
function hasAchievements(game) {

    if (Array.isArray(game.achievements) && game.achievements.length > 0) {

        return true;

    }

    if (game.hasSteamAchievements === true) {

        return true;

    }

    if (typeof game.playerTotal === "number" && game.playerTotal > 0) {

        return true;

    }

    if (game.hasSteamAchievements === false) {

        return false;

    }

    if (typeof game.playerTotal === "number" && game.playerTotal === 0) {

        return false;

    }

    return null;

}

export function filterExtras(games) {

    const wantGuide = isChecked("filter-guide");
    const wantMissable = isChecked("filter-missable");
    const wantOwned = isChecked("filter-owned");
    const wantCompleted = isChecked("filter-completed");
    const wantRecent = isChecked("filter-recent");
    const wantHasAchievements = isChecked("filter-has-achievements");
    const wantNoAchievements = isChecked("filter-no-achievements");

    const now = Date.now();

    return games.filter(game => {

        if (wantGuide && !game.hasGuide) {

            return false;

        }

        if (wantMissable && !game.missable) {

            return false;

        }

        if (wantOwned && game.owned === false) {

            return false;

        }

        if (wantCompleted && !(typeof game.playerPercent === "number" && game.playerPercent >= 100)) {

            return false;

        }

        if (wantRecent) {

            const lastPlayedMs = (game.lastPlayed ?? 0) * 1000;

            if (!(lastPlayedMs > 0 && now - lastPlayedMs <= RECENTLY_PLAYED_WINDOW_MS)) {

                return false;

            }

        }

        if (wantHasAchievements && hasAchievements(game) !== true) {

            return false;

        }

        if (wantNoAchievements && hasAchievements(game) !== false) {

            return false;

        }

        return true;

    });

}
