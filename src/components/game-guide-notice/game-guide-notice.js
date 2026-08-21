import { escapeHtml } from "../../utils/format/escapeHtml.js";
import { getGameGuideForSlug } from "../../data/guides/index.js";

// Resolves the hasGuide inconsistency flagged in PHASE_36_AUDIT.md: a
// game's hasGuide flag (backend/utils/gameMapper.js, sourced from its
// planner data) previously meant "a guide is planned for this game" but
// was never surfaced anywhere in the UI, so a visitor filtering the
// catalog by "Has Guide" would open the game page and find nothing at
// all. This makes that state honest and visible without ever claiming a
// guide exists when it doesn't:
//   - !game.hasGuide            -> render nothing (unchanged for every
//                                  game without curated planner data,
//                                  e.g. debug-game).
//   - hasGuide, no real content -> an explicit "coming soon" notice.
//   - hasGuide, real content    -> a real link to that guide.
// Phase 36 ships zero real per-game guides (see src/data/guides/index.js's
// GAME_GUIDES), so every game with hasGuide:true renders the "coming
// soon" branch today - that's the correct, honest state until real
// content is written.
export function createGameGuideNotice(game) {

    if (!game?.hasGuide) {

        return "";

    }

    const gameTitle = game.name ?? game.title ?? "this game";

    const realGuide = getGameGuideForSlug(game.slug);

    if (realGuide) {

        return `

            <div class="game-guide-notice game-guide-notice--available">

                <span class="game-guide-notice-icon" aria-hidden="true">📖</span>

                <div>

                    <strong>Game Guide available</strong>

                    <p><a href="guide.html?slug=${realGuide.slug}">Read the ${escapeHtml(gameTitle)} guide →</a></p>

                </div>

            </div>

        `;

    }

    return `

        <div class="game-guide-notice game-guide-notice--planned">

            <span class="game-guide-notice-icon" aria-hidden="true">📖</span>

            <div>

                <strong>Game Guide</strong>

                <p>A written achievement guide for ${escapeHtml(gameTitle)} hasn't been published yet.</p>

            </div>

        </div>

    `;

}
