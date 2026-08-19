import { test } from "node:test";
import assert from "node:assert";

import { renderProfileStatsState } from "../../src/components/profile-stats/profile-stats.js";

// This project has no DOM-testing framework (no jsdom/testing-library) and
// none is being introduced here. renderProfileStatsState only ever calls
// document.getElementById(...) and sets .textContent/.hidden on whatever
// comes back, so a plain object mock is enough to exercise its real logic
// under Node - same minimal, hand-rolled-fake style already used elsewhere
// in this suite (see profileStatistics.test.js's localStorage mock,
// steamController.test.js's mock res).
function createElementStub() {

    return { textContent: undefined, hidden: undefined };

}

function withStubbedDocument(run) {

    const elements = {
        "profile-stat-achievements": createElementStub(),
        "profile-stat-games": createElementStub(),
        "profile-stat-completed-games": createElementStub(),
        "profile-stats-status": createElementStub()
    };

    const previousDocument = globalThis.document;

    globalThis.document = {
        getElementById: id => elements[id] ?? null
    };

    try {

        run(elements);

    } finally {

        globalThis.document = previousDocument;

    }

}

test("renderProfileStatsState renders the explicit ready state's numbers and hides the caveat when nothing is unavailable", () => {

    withStubbedDocument(elements => {

        renderProfileStatsState({

            status: "ready",
            achievements: 1185,
            games: 56,
            completedGames: 3,
            gamesConsidered: 144,
            gamesWithPlayerDataUnavailable: 0,
            gamesWithTransientErrors: 0

        });

        assert.strictEqual(elements["profile-stat-achievements"].textContent, 1185);
        assert.strictEqual(elements["profile-stat-games"].textContent, 56);
        assert.strictEqual(elements["profile-stat-completed-games"].textContent, 3);
        assert.strictEqual(elements["profile-stats-status"].hidden, true);

    });

});

test("renderProfileStatsState's ready state shows the unavailable-games caveat when some games couldn't be counted", () => {

    withStubbedDocument(elements => {

        renderProfileStatsState({

            status: "ready",
            achievements: 1185,
            games: 56,
            completedGames: 3,
            gamesConsidered: 144,
            gamesWithPlayerDataUnavailable: 24,
            gamesWithTransientErrors: 0

        });

        assert.strictEqual(elements["profile-stats-status"].hidden, false);
        assert.match(
            elements["profile-stats-status"].textContent,
            /24 of your 144 games/
        );

    });

});

test("renderProfileStatsState treats an unrecognized status as a failure instead of rendering undefined", () => {

    withStubbedDocument(elements => {

        renderProfileStatsState({ status: "some-future-status-nobody-added-a-case-for" });

        assert.notStrictEqual(elements["profile-stat-achievements"].textContent, undefined);
        assert.strictEqual(elements["profile-stat-achievements"].textContent, "–");
        assert.strictEqual(elements["profile-stats-status"].hidden, false);

    });

});

test("renderProfileStatsState's loading/logged-out/error behavior is unchanged", () => {

    withStubbedDocument(elements => {

        renderProfileStatsState({ status: "loading" });
        assert.strictEqual(elements["profile-stat-achievements"].textContent, "…");
        assert.strictEqual(elements["profile-stats-status"].hidden, true);

        renderProfileStatsState({ status: "logged-out" });
        assert.strictEqual(elements["profile-stat-achievements"].textContent, "–");
        assert.strictEqual(elements["profile-stats-status"].hidden, false);
        assert.match(elements["profile-stats-status"].textContent, /Log in with Steam/);

        renderProfileStatsState({ status: "error" });
        assert.strictEqual(elements["profile-stat-achievements"].textContent, "–");
        assert.strictEqual(elements["profile-stats-status"].hidden, false);
        assert.match(elements["profile-stats-status"].textContent, /couldn't load your Steam stats/);

    });

});
