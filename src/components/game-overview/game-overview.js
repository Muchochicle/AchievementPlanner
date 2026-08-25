export function createGameOverview(game) {

    // completionTime is optional even on a planner-having game (see
    // gameMapper.js's `planner?.completionTime ?? null`) - matches the
    // same guard already established in catalog-card.js/search.js for
    // this exact field, so a catalog entry missing it never crashes the
    // whole game page (this component's own errors aren't caught locally
    // - they bubble up through game.js's outer try/catch and replace the
    // entire planner with a generic error message).
    const hasCompletionTime =
        typeof game.completionTime?.min === "number" &&
        typeof game.completionTime?.max === "number";

    const timeCard = hasCompletionTime
        ? `
            <div class="overview-card">

                <span>⏱ Time</span>

                <strong>${game.completionTime.min}-${game.completionTime.max} h</strong>

            </div>
        `
        : "";

    // playthroughs is optional the same way completionTime is (see
    // gameMapper.js's `planner?.playthroughs ?? null`) - every currently
    // curated catalog entry happens to set it, but this closes the same
    // gap completionTime above was already guarded against, rather than
    // rendering the literal text "null" the moment a future catalog entry
    // omits it (Phase 69).
    const hasPlaythroughs =
        typeof game.playthroughs === "number";

    const playthroughsCard = hasPlaythroughs
        ? `
            <div class="overview-card">

                <span>🔁 Playthroughs</span>

                <strong>${game.playthroughs}</strong>

            </div>
        `
        : "";

    return `

        <section class="game-overview">

            <div class="overview-card">

                <span>⭐ Difficulty</span>

                <strong>${game.difficulty}/10</strong>

            </div>

            ${timeCard}

            <div class="overview-card">

                <span>🎯 Missables</span>

                <strong>${game.missable ? "Yes" : "No"}</strong>

            </div>

            ${playthroughsCard}

        </section>

    `;

}