import { test } from "node:test";
import assert from "node:assert";

const { attemptMailto } = await import("../src/utils/contact/attemptMailto.js");

test("attemptMailto navigates to the given url", async () => {

    let navigatedTo = null;

    await attemptMailto("mailto:someone@example.com", {

        navigate: url => { navigatedTo = url; },
        addBlurListener: () => {},
        removeBlurListener: () => {},
        wait: () => Promise.resolve()

    });

    assert.strictEqual(navigatedTo, "mailto:someone@example.com");

});

test("attemptMailto resolves true when the window blurs before the wait resolves (a mail client likely opened)", async () => {

    let onBlurHandler = null;

    const result = await attemptMailto("mailto:someone@example.com", {

        navigate: () => {},
        addBlurListener: handler => {

            onBlurHandler = handler;
            // Simulates the OS switching focus to an external mail app
            // immediately after navigate() - fires synchronously here so
            // the assertion below is deterministic, matching how a real
            // blur event would already have fired by the time the
            // (necessarily longer) detection window elapses.
            handler();

        },
        removeBlurListener: () => {},
        wait: () => Promise.resolve()

    });

    assert.strictEqual(result, true);
    assert.strictEqual(typeof onBlurHandler, "function");

});

test("attemptMailto resolves false when the window never blurs before the wait resolves (no mail client detected)", async () => {

    const result = await attemptMailto("mailto:someone@example.com", {

        navigate: () => {},
        // Registers the handler but never invokes it - simulates a device
        // with no mailto: handler configured, where nothing ever steals
        // focus from the page.
        addBlurListener: () => {},
        removeBlurListener: () => {},
        wait: () => Promise.resolve()

    });

    assert.strictEqual(result, false);

});

test("attemptMailto always removes the same blur listener it registered, win or lose", async () => {

    let registeredHandler = null;
    let removedHandler = null;

    await attemptMailto("mailto:someone@example.com", {

        navigate: () => {},
        addBlurListener: handler => { registeredHandler = handler; },
        removeBlurListener: handler => { removedHandler = handler; },
        wait: () => Promise.resolve()

    });

    assert.ok(registeredHandler, "sanity check: a handler was registered");
    assert.strictEqual(removedHandler, registeredHandler, "cleanup must remove the exact handler that was registered, not a different function reference");

});

test("attemptMailto waits using its default 1200ms timeout when the caller doesn't override it", async () => {

    let waitedMs = null;

    await attemptMailto("mailto:someone@example.com", {

        navigate: () => {},
        addBlurListener: () => {},
        removeBlurListener: () => {},
        wait: ms => { waitedMs = ms; return Promise.resolve(); }

    });

    assert.strictEqual(waitedMs, 1200);

});

test("attemptMailto respects a caller-supplied timeoutMs override", async () => {

    let waitedMs = null;

    await attemptMailto("mailto:someone@example.com", {

        navigate: () => {},
        addBlurListener: () => {},
        removeBlurListener: () => {},
        wait: ms => { waitedMs = ms; return Promise.resolve(); },
        timeoutMs: 50

    });

    assert.strictEqual(waitedMs, 50);

});
