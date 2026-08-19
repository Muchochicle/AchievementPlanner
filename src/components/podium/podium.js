import { escapeHtml } from "../../utils/format/escapeHtml.js";

// One podium component, reused for both the per-game playtime leaderboard
// (game.html) and every global leaderboard (podiums.html) - parameterized
// by `config` ({icon, title, description, formatValue}) rather than
// duplicated per use, the same "smallest clean architecture" approach
// catalog-card.js already takes for Home/Games/Profile (see
// PHASE_32_AUDIT.md section I).

const MEDALS = ["🥇", "🥈", "🥉"];

function rankBadge(rank) {

    return MEDALS[rank - 1] ?? `#${rank}`;

}

// Top 3 get a distinct visual weight class (gold/silver/bronze accent -
// see podium.css); everyone else shares the plain row style.
function rankClass(rank) {

    return rank <= 3 ? ` podium-row--rank-${rank}` : "";

}

// Backend rows/rank objects use `playtimeMinutes` (per-game) or `value`
// (global) - both mean "this row's ranked number." 0 is a real, legitimate
// value (see leaderboardStore.js), so `??` (not `||`) picks between them.
function rowValue(row) {

    return row.value ?? row.playtimeMinutes;

}

function renderRow(row, index, formatValue) {

    const rank = index + 1;
    const rowClass = `podium-row${rankClass(rank)}${row.isMe ? " podium-row--me" : ""}`;

    const avatar = row.avatarUrl
        ? `<img class="podium-avatar" src="${escapeHtml(row.avatarUrl)}" alt="">`
        : `<div class="podium-avatar podium-avatar--placeholder" aria-hidden="true"></div>`;

    // The medal/#N badge is decorative (aria-hidden) - the rank is spoken
    // to assistive tech via this visually-hidden text instead, so "you are
    // rank 1" is never conveyed by emoji alone.
    return `
        <li class="${rowClass}">
            <span class="podium-rank" aria-hidden="true">${rankBadge(rank)}</span>
            ${avatar}
            <span class="podium-name">
                <span class="sr-only">Rank ${rank}: </span>${escapeHtml(row.personaName)}${row.isMe ? ` <span class="podium-me-tag">(you)</span>` : ""}
            </span>
            <span class="podium-value">${escapeHtml(formatValue(rowValue(row)))}</span>
        </li>
    `;

}

// The current user's own standing, shown per PHASE_32_AUDIT.md section G:
// inside the Top 10 (already highlighted via .podium-row--me) -> no
// separate block; outside it -> a distinct "Your rank" line; never ranked
// at all / not logged in -> an explicit, honest message, never a fabricated
// rank or a silently-omitted section.
function renderMeSection({ me, loggedIn, totalRanked }, formatValue) {

    if (!loggedIn) {

        return `<p class="podium-me podium-me--empty">Log in with Steam to see your own rank.</p>`;

    }

    if (!me) {

        return `<p class="podium-me podium-me--empty">You haven't been ranked here yet — visit your Profile page to get indexed.</p>`;

    }

    if (me.rank <= 10) {

        return "";

    }

    const totalLabel = totalRanked ? ` of ${totalRanked.toLocaleString("en-US")}` : "";

    return `
        <p class="podium-me">
            Your rank: <strong>#${me.rank.toLocaleString("en-US")}${totalLabel}</strong> — ${escapeHtml(formatValue(rowValue(me)))}
        </p>
    `;

}

function renderBody(config, state) {

    if (state.status === "loading") {

        return `<p class="state-message podium-state">Loading leaderboard…</p>`;

    }

    if (state.status === "error") {

        return `<p class="state-message podium-state">We couldn't load this leaderboard right now. Please try again later.</p>`;

    }

    const { top10 } = state;

    if (!top10 || top10.length === 0) {

        return `<p class="state-message podium-state">No one has been ranked here yet — check back once more players have been indexed.</p>`;

    }

    const rows = top10

        .map((row, index) => renderRow(row, index, config.formatValue))

        .join("");

    return `
        <ol class="podium-list">${rows}</ol>
        ${renderMeSection(state, config.formatValue)}
    `;

}

// state: {status: "loading"} | {status: "error"} |
//        {status: "ready", top10, me, totalRanked, loggedIn}
// (see src/utils/podiums/podiumsClient.js)
export function createPodiumCard(config, state) {

    const meta =
        state.status === "ready" && state.totalRanked
            ? `<p class="podium-meta">Top 10 of ${state.totalRanked.toLocaleString("en-US")} ranked players</p>`
            : "";

    return `
        <section class="podium-card" aria-labelledby="podium-heading-${config.key}">
            <header class="podium-card-header">
                <h3 class="podium-title" id="podium-heading-${config.key}">
                    <span class="podium-icon" aria-hidden="true">${config.icon ?? ""}</span>
                    ${escapeHtml(config.title)}
                </h3>
                ${config.description ? `<p class="podium-description">${escapeHtml(config.description)}</p>` : ""}
                ${meta}
            </header>
            ${renderBody(config, state)}
        </section>
    `;

}
