import { test } from "node:test";
import assert from "node:assert";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

// Phase 57 (PHASE_57_AUDIT.md) - a CSS-visual-accessibility audit found two
// of this app's shared color tokens fell short of WCAG 2.1 contrast
// requirements in real, always-rendered UI: --text-secondary on
// --surface-hover (4.04:1, below the 4.5:1 normal-text AA threshold - used
// by .catalog-planner-soon, .guide-content-category, .guide-card-category)
// and --border on interactive form-control backgrounds (~1.4-1.7:1, well
// below SC 1.4.11's 3:1 non-text-contrast threshold for UI-component
// boundaries - the reason --border-strong exists as a separate token for
// just those controls). This test reads the real, current
// src/css/variables.css and re-derives the same WCAG contrast math the
// audit used, so a future edit that quietly reintroduces either regression
// (e.g. reverting --text-secondary, or reusing --border instead of
// --border-strong on a new form control) fails a test instead of shipping
// unnoticed - CSS has no other test coverage in this codebase, so this is
// the one guard against exactly this class of regression.

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const VARIABLES_CSS_PATH = path.join(__dirname, "..", "src", "css", "variables.css");
const css = fs.readFileSync(VARIABLES_CSS_PATH, "utf-8");

function readVar(name) {

    const match = css.match(new RegExp(`--${name}:\\s*(#[0-9A-Fa-f]{6})`));

    assert.ok(match, `expected to find --${name} defined as a hex color in variables.css`);

    return match[1];

}

function hexToRgb(hex) {

    hex = hex.replace("#", "");

    return [0, 2, 4].map(i => parseInt(hex.substr(i, 2), 16));

}

function relativeLuminance([r, g, b]) {

    const [R, G, B] = [r, g, b].map(c => {

        c = c / 255;

        return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);

    });

    return 0.2126 * R + 0.7152 * G + 0.0722 * B;

}

// WCAG 2.1 contrast ratio formula: (L1 + 0.05) / (L2 + 0.05), with L1 the
// lighter of the two relative luminances.
function contrastRatio(hexA, hexB) {

    const lumA = relativeLuminance(hexToRgb(hexA));
    const lumB = relativeLuminance(hexToRgb(hexB));

    const [lighter, darker] = lumA > lumB ? [lumA, lumB] : [lumB, lumA];

    return (lighter + 0.05) / (darker + 0.05);

}

test("--text-secondary meets the 4.5:1 WCAG AA normal-text threshold against --surface-hover (the tag/badge background it's paired with in .catalog-planner-soon, .guide-content-category, .guide-card-category)", () => {

    const ratio = contrastRatio(readVar("text-secondary"), readVar("surface-hover"));

    assert.ok(ratio >= 4.5, `expected >= 4.5:1, got ${ratio.toFixed(2)}:1`);

});

test("--text-secondary still meets 4.5:1 against --background and --surface too (must not regress the pairs that already passed)", () => {

    const textSecondary = readVar("text-secondary");

    assert.ok(contrastRatio(textSecondary, readVar("background")) >= 4.5);
    assert.ok(contrastRatio(textSecondary, readVar("surface")) >= 4.5);

});

test("--border-strong meets the 3:1 WCAG SC 1.4.11 non-text-contrast threshold against both --background and --surface (the two backgrounds it's used on)", () => {

    const borderStrong = readVar("border-strong");

    const ratioBg = contrastRatio(borderStrong, readVar("background"));
    const ratioSurface = contrastRatio(borderStrong, readVar("surface"));

    assert.ok(ratioBg >= 3, `expected >= 3:1 against --background, got ${ratioBg.toFixed(2)}:1`);
    assert.ok(ratioSurface >= 3, `expected >= 3:1 against --surface, got ${ratioSurface.toFixed(2)}:1`);

});

test("--text on --background is comfortably above WCAG AA (sanity check that the contrast helper itself is correct, against a known-good pair)", () => {

    const ratio = contrastRatio(readVar("text"), readVar("background"));

    assert.ok(ratio >= 4.5);
    assert.ok(ratio > 15, "a near-white on near-black pair should read far above the minimum, not just barely pass");

});
