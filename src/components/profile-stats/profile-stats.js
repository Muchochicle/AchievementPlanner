import {

    getPlayerStatistics

} from "../../utils/player/statistics/playerStatistics.js";

export function createProfileStats() {

    const stats = getPlayerStatistics();

    return `

        <section class="profile-stats">

            <div class="profile-stat-card">

                <h2>🏆</h2>

                <strong>${stats.achievements ?? 0}</strong>

                <span>Achievements</span>

            </div>

            <div class="profile-stat-card">

                <h2>🎮</h2>

                <strong>${stats.games ?? 0}</strong>

                <span>Games</span>

            </div>

            <div class="profile-stat-card">

                <h2>⭐</h2>

                <strong>${stats.completedGames ?? 0}</strong>

                <span>100%</span>

            </div>

            <div class="profile-stat-card">

                <h2>🔥</h2>

                <strong>${stats.streak ?? 0}</strong>

                <span>Day Streak</span>

            </div>

        </section>

    `;

}