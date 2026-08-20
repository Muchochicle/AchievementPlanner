import { test } from "node:test";
import assert from "node:assert";

import { createPodiumCard } from "../src/components/podium/podium.js";

const config = {
    key: "total-playtime",
    icon: "⏱️",
    title: "Most Hours Played",
    description: "Ranked by total hours played.",
    formatValue: minutes => `${Math.round(minutes / 60)} hrs`
};

test("createPodiumCard renders the title, icon, description, and an honest loading message while loading", () => {

    const html = createPodiumCard(config, { status: "loading" });

    assert.match(html, /Most Hours Played/);
    assert.match(html, /⏱️/);
    assert.match(html, /Ranked by total hours played\./);
    assert.match(html, /class="state-message[^"]*"[^]*Loading leaderboard/);

});

test("createPodiumCard renders an honest error message on failure, not a fabricated empty board", () => {

    const html = createPodiumCard(config, { status: "error" });

    assert.match(html, /class="state-message[^"]*"/);
    assert.match(html, /couldn't load this leaderboard/i);

});

test("createPodiumCard exposes a stable heading id/aria-labelledby derived from the category key, for the podiums-page jump nav", () => {

    const html = createPodiumCard(config, { status: "loading" });

    assert.match(html, /aria-labelledby="podium-heading-total-playtime"/);
    assert.match(html, /id="podium-heading-total-playtime"/);

});

test("createPodiumCard adds a visually-hidden rank label per row so screen readers don't rely on the medal emoji alone", () => {

    const top10 = [{ personaName: "Alice", avatarUrl: null, playtimeMinutes: 6000, isMe: false }];

    const html = createPodiumCard(config, { status: "ready", top10, me: null, totalRanked: 1, loggedIn: false });

    assert.match(html, /<span class="sr-only">Rank 1: <\/span>Alice/);

});

test("createPodiumCard renders an explicit empty state when nobody has been ranked yet", () => {

    const html = createPodiumCard(config, { status: "ready", top10: [], me: null, totalRanked: 0, loggedIn: true });

    assert.match(html, /No one has been ranked here yet/);
    assert.doesNotMatch(html, /<ol/);

});

test("createPodiumCard does not crash and degrades to the empty state when top10 is missing entirely (malformed response)", () => {

    // podiumsClient.js's fetchPodium() passes data.top10 straight through
    // with no `?? []` fallback, unlike getGamesIndex()/getPopularGames().
    // That's safe only because this component's own `!top10` guard
    // already covers it - verified empirically here rather than assumed,
    // so a future change to either side can't silently reintroduce a
    // crash.
    let html;
    assert.doesNotThrow(() => {
        html = createPodiumCard(config, { status: "ready", top10: undefined, me: null, totalRanked: 0, loggedIn: true });
    });

    assert.match(html, /No one has been ranked here yet/);

});

test("createPodiumCard renders medal badges for the top 3 and #N for the rest, in order", () => {

    const top10 = [
        { personaName: "Alice", avatarUrl: null, playtimeMinutes: 6000, isMe: false },
        { personaName: "Bob", avatarUrl: null, playtimeMinutes: 5000, isMe: false },
        { personaName: "Carol", avatarUrl: null, playtimeMinutes: 4000, isMe: false },
        { personaName: "Dave", avatarUrl: null, playtimeMinutes: 3000, isMe: false }
    ];

    const html = createPodiumCard(config, { status: "ready", top10, me: null, totalRanked: 4, loggedIn: false });

    assert.match(html, /🥇/);
    assert.match(html, /🥈/);
    assert.match(html, /🥉/);
    assert.match(html, /#4/);

    // Order preserved from the backend (already sorted) - Alice first.
    assert.ok(html.indexOf("Alice") < html.indexOf("Bob"));
    assert.ok(html.indexOf("Bob") < html.indexOf("Carol"));

});

test("createPodiumCard formats each row's value via the supplied formatValue and escapes the persona name", () => {

    const top10 = [
        { personaName: "<script>alert(1)</script>", avatarUrl: null, playtimeMinutes: 120, isMe: false }
    ];

    const html = createPodiumCard(config, { status: "ready", top10, me: null, totalRanked: 1, loggedIn: false });

    assert.match(html, />2 hrs</);
    assert.doesNotMatch(html, /<script>alert/);
    assert.match(html, /&lt;script&gt;/);

});

test("createPodiumCard highlights the viewer's own row with podium-row--me instead of duplicating it", () => {

    const top10 = [
        { personaName: "Alice", avatarUrl: null, playtimeMinutes: 6000, isMe: false },
        { personaName: "Me", avatarUrl: null, playtimeMinutes: 5000, isMe: true }
    ];

    const html = createPodiumCard(config, {
        status: "ready",
        top10,
        me: { playtimeMinutes: 5000, rank: 2 },
        totalRanked: 2,
        loggedIn: true
    });

    assert.match(html, /podium-row--me/);
    // "You" is conveyed by text too, not just the highlight color/border -
    // color alone must never be the only signal.
    assert.match(html, /podium-me-tag/);
    // Rank <= 10 - already visible above, no separate "Your rank" block.
    assert.doesNotMatch(html, /Your rank/);

});

test("createPodiumCard shows a separate 'Your rank' block when the viewer is outside the Top 10", () => {

    const top10 = [
        { personaName: "Alice", avatarUrl: null, playtimeMinutes: 6000, isMe: false }
    ];

    const html = createPodiumCard(config, {
        status: "ready",
        top10,
        me: { playtimeMinutes: 120, rank: 452 },
        totalRanked: 900,
        loggedIn: true
    });

    assert.match(html, /Your rank/);
    assert.match(html, /#452/);
    assert.match(html, /of 900/);
    assert.match(html, /2 hrs/);

});

test("createPodiumCard tells a logged-out viewer to log in, rather than showing 'not ranked'", () => {

    const top10 = [{ personaName: "Alice", avatarUrl: null, playtimeMinutes: 6000, isMe: false }];

    const html = createPodiumCard(config, { status: "ready", top10, me: null, totalRanked: 1, loggedIn: false });

    assert.match(html, /Log in with Steam/);
    assert.doesNotMatch(html, /haven't been ranked/);

});

test("createPodiumCard tells a logged-in but never-indexed viewer they haven't been ranked yet, not a fabricated rank", () => {

    const top10 = [{ personaName: "Alice", avatarUrl: null, playtimeMinutes: 6000, isMe: false }];

    const html = createPodiumCard(config, { status: "ready", top10, me: null, totalRanked: 1, loggedIn: true });

    assert.match(html, /haven't been ranked/);
    assert.doesNotMatch(html, /Log in with Steam/);

});

test("createPodiumCard treats a genuine 0 value as real, not blank", () => {

    const top10 = [{ personaName: "ZeroHours", avatarUrl: null, playtimeMinutes: 0, isMe: false }];

    const html = createPodiumCard(config, { status: "ready", top10, me: null, totalRanked: 1, loggedIn: false });

    assert.match(html, />0 hrs</);

});

test("createPodiumCard falls back to a placeholder avatar when avatarUrl is missing", () => {

    const top10 = [{ personaName: "NoAvatar", avatarUrl: null, playtimeMinutes: 60, isMe: false }];

    const html = createPodiumCard(config, { status: "ready", top10, me: null, totalRanked: 1, loggedIn: false });

    assert.match(html, /podium-avatar--placeholder/);
    assert.doesNotMatch(html, /<img/);

});

test("createPodiumCard shows the total-ranked count in the header when ready, and omits it otherwise", () => {

    const top10 = [{ personaName: "Alice", avatarUrl: null, playtimeMinutes: 60, isMe: false }];

    const ready = createPodiumCard(config, { status: "ready", top10, me: null, totalRanked: 1234, loggedIn: false });
    assert.match(ready, /Top 10 of 1,234 ranked players/);

    const loading = createPodiumCard(config, { status: "loading" });
    assert.doesNotMatch(loading, /ranked players/);

});
