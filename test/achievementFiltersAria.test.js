import { test } from "node:test";
import assert from "node:assert";

// PHASE_50_AUDIT.md Finding 13: the All/Pending/Completed achievement
// filter buttons used to communicate "currently selected" purely via a
// CSS class (.filter-btn.active) - no aria-pressed/aria-current was ever
// set, so a screen-reader user had no way to know which filter was
// active. initAchievementFilters() now toggles aria-pressed alongside the
// existing classList toggle; this hand-rolled fake button (classList +
// dataset + addEventListener/click + setAttribute/getAttribute) is the
// smallest shim that can prove that real toggle behavior, matching this
// project's existing "smallest shim that does the job" convention (see
// test/layout.test.js for the same pattern applied to a different element).
function makeButton(filter, active) {

    const classes = new Set(active ? ["filter-btn", "active"] : ["filter-btn"]);
    const attributes = { "aria-pressed": active ? "true" : "false" };
    let clickHandler = null;

    return {

        dataset: { filter },

        classList: {
            add(name) { classes.add(name); },
            remove(name) { classes.delete(name); },
            contains(name) { return classes.has(name); }
        },

        addEventListener(type, handler) {
            if (type === "click") clickHandler = handler;
        },

        setAttribute(name, value) { attributes[name] = value; },
        getAttribute(name) { return attributes[name] ?? null; },

        click() { clickHandler?.(); }

    };

}

function buildDom(buttons) {

    globalThis.document = {

        querySelectorAll(selector) {

            if (selector === ".filter-btn") return buttons;
            if (selector === ".steam-achievement-card") return [];
            return [];

        },

        querySelector(selector) {

            if (selector === ".filter-btn.active") {
                return buttons.find(btn => btn.classList.contains("active")) ?? null;
            }

            return null;

        }

    };

}

const { initAchievementFilters } = await import("../src/utils/planner/filters.js");

test("initAchievementFilters sets aria-pressed=true on the initially-active button and false on the others", () => {

    const buttons = [
        makeButton("all", true),
        makeButton("pending", false),
        makeButton("completed", false)
    ];

    buildDom(buttons);
    initAchievementFilters();

    assert.strictEqual(buttons[0].getAttribute("aria-pressed"), "true");
    assert.strictEqual(buttons[1].getAttribute("aria-pressed"), "false");
    assert.strictEqual(buttons[2].getAttribute("aria-pressed"), "false");

});

test("clicking a filter button flips aria-pressed to exactly that button, in sync with the active class", () => {

    const buttons = [
        makeButton("all", true),
        makeButton("pending", false),
        makeButton("completed", false)
    ];

    buildDom(buttons);
    initAchievementFilters();

    buttons[1].click(); // Pending

    assert.strictEqual(buttons[0].getAttribute("aria-pressed"), "false");
    assert.strictEqual(buttons[0].classList.contains("active"), false);

    assert.strictEqual(buttons[1].getAttribute("aria-pressed"), "true");
    assert.strictEqual(buttons[1].classList.contains("active"), true);

    assert.strictEqual(buttons[2].getAttribute("aria-pressed"), "false");
    assert.strictEqual(buttons[2].classList.contains("active"), false);

});

test("only ever one button reports aria-pressed=true at a time, across repeated clicks", () => {

    const buttons = [
        makeButton("all", true),
        makeButton("pending", false),
        makeButton("completed", false)
    ];

    buildDom(buttons);
    initAchievementFilters();

    buttons[2].click(); // Completed
    buttons[0].click(); // back to All

    const pressedCount = buttons.filter(btn => btn.getAttribute("aria-pressed") === "true").length;

    assert.strictEqual(pressedCount, 1);
    assert.strictEqual(buttons[0].getAttribute("aria-pressed"), "true");

});
