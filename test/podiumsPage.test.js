import { test } from "node:test";
import assert from "node:assert";

// Finding 24 (PHASE_53_AUDIT.md) - src/js/podiums.js's per-category
// fetchGlobalPodium(...).then(...) had no .catch(), so an exception thrown
// while rendering a "ready" result (e.g. createPodiumCard/renderMeSection
// dereferencing an unexpected field) would strand that section on
// "Loading leaderboard..." forever with no visible error, instead of
// falling back to the same error-state card already used for network
// failures. This test drives the real, unmodified podiums.js end-to-end
// (matching this project's "smallest shim that does the job" convention -
// see test/app.test.js, test/layout.test.js) with a mocked fetch that
// returns a malformed "ready" response for exactly one category (a real
// top10 row but a `me.rank` that's missing - the same field
// renderMeSection unconditionally calls .toLocaleString() on), and asserts
// that category's section still ends up showing *something* other than a
// stuck loading state, while every other (normally-shaped) category
// renders its real content unaffected.

function makeElement() {

    return { innerHTML: "" };

}

const registry = new Map();

globalThis.document = {

    getElementById(id) {

        if (id === "podiums-nav" || id === "podiums-content" || id.startsWith("podium-")) {

            if (!registry.has(id)) {

                registry.set(id, makeElement());

            }

            return registry.get(id);

        }

        // loadNavbar() (layout.js) looks up "navbar" - returning null here
        // makes it short-circuit to {logged:false} without ever touching
        // fetch/DOM further, exactly like a page with no #navbar element.
        return null;

    }

};

const CRASHING_CATEGORY = "games-owned";

globalThis.fetch = async url => {

    if (url.includes(`/global/${CRASHING_CATEGORY}`)) {

        return {

            ok: true,

            json: async () => ({

                success: true,

                top10: [{ personaName: "Someone", value: 5, avatarUrl: null, isMe: false }],

                // A real backend never sends `me` without a numeric `rank`
                // (see PHASE_53_AUDIT.md §5 Finding 24's trace through
                // leaderboardStore.js/podiumController.js) - this simulates
                // exactly the shape that would make renderMeSection throw.
                me: { rank: undefined, value: 3 },

                totalRanked: 1,

                loggedIn: true

            })

        };

    }

    return {

        ok: true,

        json: async () => ({

            success: true,
            top10: [],
            me: null,
            totalRanked: 0,
            loggedIn: false

        })

    };

};

async function flushPendingPromises() {

    for (let i = 0; i < 10; i++) {

        await new Promise(resolve => setTimeout(resolve, 0));

    }

}

test("a rendering exception on one category falls back to an error card instead of hanging on 'Loading...' forever, and does not affect the other categories", async () => {

    await import("../src/js/podiums.js");

    await flushPendingPromises();

    const crashedSection = registry.get(`podium-${CRASHING_CATEGORY}`);

    assert.ok(crashedSection, "the crashing category's section must exist");
    assert.doesNotMatch(
        crashedSection.innerHTML,
        /Loading leaderboard/,
        "must not still be stuck on the loading state after the render exception"
    );
    assert.match(
        crashedSection.innerHTML,
        /couldn't load this leaderboard/,
        "must fall back to the same error-state message createPodiumCard already uses for network failures"
    );

    // Every other category received a normal, valid response and must
    // render its real (non-error, non-stuck) content, proving one
    // category's rendering exception is fully contained to its own
    // section.
    const otherSection = registry.get("podium-achievements");

    assert.ok(otherSection, "an unrelated category's section must exist");
    assert.doesNotMatch(otherSection.innerHTML, /Loading leaderboard/);
    assert.doesNotMatch(otherSection.innerHTML, /couldn't load this leaderboard/);

});

// Phase 60 (PHASE_60_AUDIT.md) - WCAG SC 4.1.3 Status Messages: each
// per-category placeholder div must carry aria-live="polite"
// aria-atomic="true" so a screen-reader user is told when that section's
// "Loading leaderboard..." placeholder becomes real content or an error,
// without needing to move focus there. Checks the actual generated markup
// string written into #podiums-content, since this project's DOM stub
// doesn't parse innerHTML into real child elements.
test("every per-category podium placeholder div carries aria-live=\"polite\" aria-atomic=\"true\", so its loading-to-result transition is announced to assistive technology", () => {

    const podiumsContent = registry.get("podiums-content");

    assert.ok(podiumsContent, "the podiums-content container must exist");

    // One assertion per known category id, rather than a single blanket
    // regex, so a future category addition/removal doesn't silently pass
    // this test without actually checking its own div.
    for (const key of ["games-owned", "total-playtime", "achievements", "completed-games", "games-played"]) {

        const divPattern = new RegExp(`<div id="podium-${key}"[^>]*aria-live="polite"[^>]*aria-atomic="true"`);

        assert.match(
            podiumsContent.innerHTML,
            divPattern,
            `expected podium-${key}'s placeholder div to carry aria-live="polite" aria-atomic="true"`
        );

    }

});
