import { getPlayer } from "../../utils/player/player.js";
import { getAllAvatars } from "../../utils/player/avatar/avatarManager.js";
import { ownsItem } from "../../utils/player/inventory/inventoryManager.js";

// XP and avatars are this device's own local progress, not Steam data -
// they render synchronously and never participate in the async
// Achievements/Games/100% flow below (see renderProfileStatsState).
function getLocalStats() {

    const player = getPlayer();

    const avatars = getAllAvatars();

    return {

        totalXP: player.totalXP,

        avatarsUnlocked: avatars.filter(

            avatar => ownsItem("avatars", avatar.id)

        ).length,

        avatarsTotal: avatars.length

    };

}

export function createProfileStats() {

    const local = getLocalStats();

    return `

        <section class="profile-stats">

            <div class="profile-stat-card">

                <h2>🏆</h2>

                <strong id="profile-stat-achievements">…</strong>

                <span>Achievements</span>

            </div>

            <div class="profile-stat-card">

                <h2>🎮</h2>

                <strong id="profile-stat-games-owned">…</strong>

                <span>Games</span>

                <span class="profile-stat-sub" id="profile-stat-games-sub"></span>

            </div>

            <div class="profile-stat-card">

                <h2>⭐</h2>

                <strong id="profile-stat-completed-games">…</strong>

                <span>100%</span>

            </div>

            <div class="profile-stat-card">

                <h2>✨</h2>

                <strong>${local.totalXP ?? 0}</strong>

                <span>Total XP</span>

            </div>

            <div class="profile-stat-card">

                <h2>🎭</h2>

                <strong>${local.avatarsUnlocked ?? 0}/${local.avatarsTotal ?? 0}</strong>

                <span>Avatars</span>

            </div>

        </section>

        <p id="profile-stats-status" class="state-message" hidden></p>

    `;

}

// Renders one async state of the live Steam-backed cards created above.
// Called by profile.js with {status:"loading"} immediately, then again
// once fetchProfileStats() settles - never leaves a fabricated 0 up while
// still loading, and never silently swallows an error/unavailable result
// into a misleading number.
export function renderProfileStatsState(state) {

    const achievementsEl = document.getElementById("profile-stat-achievements");
    const gamesOwnedEl = document.getElementById("profile-stat-games-owned");
    const gamesSubEl = document.getElementById("profile-stat-games-sub");
    const completedEl = document.getElementById("profile-stat-completed-games");
    const statusEl = document.getElementById("profile-stats-status");

    if (!achievementsEl || !gamesOwnedEl || !gamesSubEl || !completedEl || !statusEl) {

        return;

    }

    if (state.status === "loading") {

        achievementsEl.textContent = "…";
        gamesOwnedEl.textContent = "…";
        gamesSubEl.textContent = "";
        completedEl.textContent = "…";
        statusEl.hidden = true;

        return;

    }

    if (state.status === "logged-out") {

        achievementsEl.textContent = "–";
        gamesOwnedEl.textContent = "–";
        gamesSubEl.textContent = "";
        completedEl.textContent = "–";
        statusEl.hidden = false;
        statusEl.textContent = "Log in with Steam to see your achievement stats.";

        return;

    }

    if (state.status === "error") {

        achievementsEl.textContent = "–";
        gamesOwnedEl.textContent = "–";
        gamesSubEl.textContent = "";
        completedEl.textContent = "–";
        statusEl.hidden = false;
        statusEl.textContent = "We couldn't load your Steam stats right now. Please try again later.";

        return;

    }

    if (state.status === "ready") {

        achievementsEl.textContent = state.achievements;
        // "Games" is the actual Steam library size (owned), not the older
        // "games with an unlocked achievement" figure - see
        // state.gamesWithUnlockedAchievements if that's ever needed again.
        // The sub-line breaks that single number down: played (any
        // playtime), completed (100% per the same live scan as the "100%"
        // card), and "with achievements" - games whose Steam schema itself
        // reports >=1 achievement, regardless of whether this player has
        // unlocked any of them (see profileStats.js's gamesWithAchievements,
        // deliberately distinct from gamesWithUnlockedAchievements).
        gamesOwnedEl.textContent = state.gamesOwned;
        gamesSubEl.textContent =
            `${state.gamesPlayed} played · ${state.completedGames} completed · ${state.gamesWithAchievements} with achievements`;
        completedEl.textContent = state.completedGames;

        const unavailable =
            (state.gamesWithPlayerDataUnavailable ?? 0) +
            (state.gamesWithTransientErrors ?? 0);

        if (unavailable > 0) {

            statusEl.hidden = false;

            statusEl.textContent =
                `Steam didn't report achievement data for ${unavailable} of your ${state.gamesConsidered} games - achievement/completion stats above may be incomplete.`;

        } else {

            statusEl.hidden = true;

        }

        return;

    }

    // Unknown/unexpected status - degrade to the same explicit failure
    // state as "error" rather than silently rendering undefined values.
    achievementsEl.textContent = "–";
    gamesOwnedEl.textContent = "–";
    gamesSubEl.textContent = "";
    completedEl.textContent = "–";
    statusEl.hidden = false;
    statusEl.textContent = "We couldn't load your Steam stats right now. Please try again later.";

}