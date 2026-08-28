import { test } from "node:test";
import assert from "node:assert";

import {
    APP_GUIDES,
    GAME_GUIDES,
    ALL_GUIDES,
    getGuideBySlug,
    getGameGuideForSlug
} from "../src/data/guides/index.js";

test("Phase 37 ships exactly the 9 approved App Guides (5 rewritten + 4 new)", () => {

    assert.strictEqual(APP_GUIDES.length, 9);

    assert.deepStrictEqual(
        APP_GUIDES.map(guide => guide.slug).sort(),
        [
            "achievement-completion-and-tracking",
            "catalog-and-filters",
            "getting-started",
            "player-progress",
            "podiums-and-leaderboards",
            "profile-and-statistics",
            "session-planner-and-recommendations",
            "steam-login-and-your-data",
            "understanding-achievement-availability"
        ]
    );

});

test("every real catalog game has a real, sourced Game Guide", () => {

    // Per the approved scope: every non-debug game in this app's catalog
    // (backend/catalog/games/*.json) has real, sourced content here - see
    // each game's own guides/games/<slug>.js for its sourcing notes. This
    // count should only grow further once a new game is added to the
    // catalog and its guide is actually authored, never bumped to pad the
    // list ahead of that.
    assert.strictEqual(GAME_GUIDES.length, 142);

    assert.deepStrictEqual(
        GAME_GUIDES.map(guide => guide.gameSlug).sort(),
        ["7-days-to-die", "a-hat-in-time", "a-little-to-the-left", "a-short-hike", "age-of-empires-1-de", "age-of-empires-2-de", "age-of-empires-4", "age-of-mythology-retold", "ark-survival-evolved", "astral-ascent", "baba-is-you", "balatro", "baldurs-gate-3", "bastion", "borderlands-2", "braid", "brotato", "celeste", "chained-echoes", "chicory", "cities-skylines", "cities-skylines-2", "civilization-5", "civilization-vi", "company-of-heroes-2", "content-warning", "counter-strike-source", "crusader-kings-3", "crypt-of-the-necrodancer", "cult-of-the-lamb", "cuphead", "curse-of-the-dead-gods", "cyberpunk-2077", "dark-souls-3", "darkest-dungeon", "dave-the-diver", "dead-cells", "deaths-door", "deep-rock-galactic", "devil-may-cry-5", "disco-elysium", "dome-keeper", "doom-2016", "doom-eternal", "dorfromantik", "dredge", "dying-light", "dyson-sphere-program", "elden-ring", "enter-the-gungeon", "euro-truck-simulator-2", "factorio", "fallout-new-vegas", "farming-simulator-22", "frostpunk", "ftl", "furi", "garrys-mod", "god-of-war", "grand-theft-auto-v", "green-hell", "griftlands", "grounded", "guacamelee-2", "hades", "half-life-2", "hearts-of-iron-4", "hogwarts-legacy", "hollow-knight", "hyper-light-drifter", "inside", "into-the-breach", "left-4-dead", "left-4-dead-2", "limbo", "little-nightmares", "loop-hero", "mark-of-the-ninja", "monster-hunter-rise", "monster-hunter-world", "moonlighter", "mount-and-blade-2-bannerlord", "naraka-bladepoint", "neon-abyss", "neon-white", "no-mans-sky", "ori-and-the-blind-forest", "ori-and-the-will-of-the-wisps", "owlboy", "oxenfree", "palworld", "papers-please", "phasmophobia", "pizza-tower", "portal", "portal-2", "pubg-battlegrounds", "pyre", "raft", "red-dead-redemption-2", "resident-evil-2-remake", "resident-evil-4-remake", "resident-evil-village", "return-of-the-obra-dinn", "rime", "risk-of-rain-2", "rocket-league", "rogue-legacy", "rust", "sable", "satisfactory", "sea-of-thieves", "sekiro", "sifu", "skyrim-special-edition", "slay-the-spire", "slime-rancher", "spelunky-2", "stardew-valley", "steamworld-dig-2", "stellaris", "streets-of-rogue", "superliminal", "team-fortress-2", "terraria", "the-forest", "the-forgotten-city", "the-messenger", "the-stanley-parable", "the-witcher-3", "thomas-was-alone", "total-war-rome-2", "total-war-three-kingdoms", "total-war-warhammer-2", "total-war-warhammer-3", "transistor", "v-rising", "va11-hall-a", "vampire-survivors", "void-bastards", "war-thunder", "what-remains-of-edith-finch"]
    );

    assert.deepStrictEqual(
        GAME_GUIDES.map(guide => guide.slug).sort(),
        [
            "7-days-to-die-achievement-guide",
            "a-hat-in-time-achievement-guide",
            "a-little-to-the-left-achievement-guide",
            "a-short-hike-achievement-guide",
            "age-of-empires-1-de-achievement-guide",
            "age-of-empires-2-de-achievement-guide",
            "age-of-empires-4-achievement-guide",
            "age-of-mythology-retold-achievement-guide",
            "ark-survival-evolved-achievement-guide",
            "astral-ascent-achievement-guide",
            "baba-is-you-achievement-guide",
            "balatro-achievement-guide",
            "baldurs-gate-3-achievement-guide",
            "bastion-achievement-guide",
            "borderlands-2-achievement-guide",
            "braid-achievement-guide",
            "brotato-achievement-guide",
            "celeste-achievement-guide",
            "chained-echoes-achievement-guide",
            "chicory-achievement-guide",
            "cities-skylines-2-achievement-guide",
            "cities-skylines-achievement-guide",
            "civilization-5-achievement-guide",
            "civilization-vi-achievement-guide",
            "company-of-heroes-2-achievement-guide",
            "content-warning-achievement-guide",
            "counter-strike-source-achievement-guide",
            "crusader-kings-3-achievement-guide",
            "crypt-of-the-necrodancer-achievement-guide",
            "cult-of-the-lamb-achievement-guide",
            "cuphead-achievement-guide",
            "curse-of-the-dead-gods-achievement-guide",
            "cyberpunk-2077-achievement-guide",
            "dark-souls-3-achievement-guide",
            "darkest-dungeon-achievement-guide",
            "dave-the-diver-achievement-guide",
            "dead-cells-achievement-guide",
            "deaths-door-achievement-guide",
            "deep-rock-galactic-achievement-guide",
            "devil-may-cry-5-achievement-guide",
            "disco-elysium-achievement-guide",
            "dome-keeper-achievement-guide",
            "doom-2016-achievement-guide",
            "doom-eternal-achievement-guide",
            "dorfromantik-achievement-guide",
            "dredge-achievement-guide",
            "dying-light-achievement-guide",
            "dyson-sphere-program-achievement-guide",
            "elden-ring-achievement-guide",
            "enter-the-gungeon-achievement-guide",
            "euro-truck-simulator-2-achievement-guide",
            "factorio-achievement-guide",
            "fallout-new-vegas-achievement-guide",
            "farming-simulator-22-achievement-guide",
            "frostpunk-achievement-guide",
            "ftl-achievement-guide",
            "furi-achievement-guide",
            "garrys-mod-achievement-guide",
            "god-of-war-achievement-guide",
            "grand-theft-auto-v-achievement-guide",
            "green-hell-achievement-guide",
            "griftlands-achievement-guide",
            "grounded-achievement-guide",
            "guacamelee-2-achievement-guide",
            "hades-achievement-guide",
            "half-life-2-achievement-guide",
            "hearts-of-iron-4-achievement-guide",
            "hogwarts-legacy-achievement-guide",
            "hollow-knight-achievement-guide",
            "hyper-light-drifter-achievement-guide",
            "inside-achievement-guide",
            "into-the-breach-achievement-guide",
            "left-4-dead-2-achievement-guide",
            "left-4-dead-achievement-guide",
            "limbo-achievement-guide",
            "little-nightmares-achievement-guide",
            "loop-hero-achievement-guide",
            "mark-of-the-ninja-achievement-guide",
            "monster-hunter-rise-achievement-guide",
            "monster-hunter-world-achievement-guide",
            "moonlighter-achievement-guide",
            "mount-and-blade-2-bannerlord-achievement-guide",
            "naraka-bladepoint-achievement-guide",
            "neon-abyss-achievement-guide",
            "neon-white-achievement-guide",
            "no-mans-sky-achievement-guide",
            "ori-and-the-blind-forest-achievement-guide",
            "ori-and-the-will-of-the-wisps-achievement-guide",
            "owlboy-achievement-guide",
            "oxenfree-achievement-guide",
            "palworld-achievement-guide",
            "papers-please-achievement-guide",
            "phasmophobia-achievement-guide",
            "pizza-tower-achievement-guide",
            "portal-2-achievement-guide",
            "portal-achievement-guide",
            "pubg-battlegrounds-achievement-guide",
            "pyre-achievement-guide",
            "raft-achievement-guide",
            "red-dead-redemption-2-achievement-guide",
            "resident-evil-2-remake-achievement-guide",
            "resident-evil-4-remake-achievement-guide",
            "resident-evil-village-achievement-guide",
            "return-of-the-obra-dinn-achievement-guide",
            "rime-achievement-guide",
            "risk-of-rain-2-achievement-guide",
            "rocket-league-achievement-guide",
            "rogue-legacy-achievement-guide",
            "rust-achievement-guide",
            "sable-achievement-guide",
            "satisfactory-achievement-guide",
            "sea-of-thieves-achievement-guide",
            "sekiro-achievement-guide",
            "sifu-achievement-guide",
            "skyrim-special-edition-achievement-guide",
            "slay-the-spire-achievement-guide",
            "slime-rancher-achievement-guide",
            "spelunky-2-achievement-guide",
            "stardew-valley-achievement-guide",
            "steamworld-dig-2-achievement-guide",
            "stellaris-achievement-guide",
            "streets-of-rogue-achievement-guide",
            "superliminal-achievement-guide",
            "team-fortress-2-achievement-guide",
            "terraria-achievement-guide",
            "the-forest-achievement-guide",
            "the-forgotten-city-achievement-guide",
            "the-messenger-achievement-guide",
            "the-stanley-parable-achievement-guide",
            "the-witcher-3-achievement-guide",
            "thomas-was-alone-achievement-guide",
            "total-war-rome-2-achievement-guide",
            "total-war-three-kingdoms-achievement-guide",
            "total-war-warhammer-2-achievement-guide",
            "total-war-warhammer-3-achievement-guide",
            "transistor-achievement-guide",
            "v-rising-achievement-guide",
            "va11-hall-a-achievement-guide",
            "vampire-survivors-achievement-guide",
            "void-bastards-achievement-guide",
            "war-thunder-achievement-guide",
            "what-remains-of-edith-finch-achievement-guide"
        ]
    );

});

test("every guide has a unique slug across App and Game guides combined", () => {

    const slugs = ALL_GUIDES.map(guide => guide.slug);

    assert.strictEqual(new Set(slugs).size, slugs.length);

});

test("every guide has a non-empty title, summary, icon, and at least one section", () => {

    for (const guide of ALL_GUIDES) {

        assert.ok(guide.title?.length > 0, `${guide.slug} is missing a title`);
        assert.ok(guide.summary?.length > 0, `${guide.slug} is missing a summary`);
        assert.ok(guide.icon?.length > 0, `${guide.slug} is missing an icon`);
        assert.ok(Array.isArray(guide.sections) && guide.sections.length > 0, `${guide.slug} has no sections`);

    }

});

test("every section has a non-empty heading and at least one non-empty body paragraph", () => {

    for (const guide of ALL_GUIDES) {

        for (const section of guide.sections) {

            assert.ok(section.heading?.length > 0, `${guide.slug} has a section with no heading`);
            assert.ok(Array.isArray(section.body) && section.body.length > 0, `${guide.slug}'s "${section.heading}" section has no body`);

            for (const paragraph of section.body) {

                assert.ok(paragraph?.length > 0, `${guide.slug}'s "${section.heading}" section has an empty paragraph`);

            }

        }

    }

});

test("every guide's relatedSlugs resolves to a real, existing guide (no typos/dangling references)", () => {

    for (const guide of ALL_GUIDES) {

        for (const relatedSlug of guide.relatedSlugs ?? []) {

            const related = getGuideBySlug(relatedSlug);

            assert.ok(related, `${guide.slug} references a related guide "${relatedSlug}" that doesn't exist`);
            assert.notStrictEqual(related.slug, guide.slug, `${guide.slug} lists itself as a related guide`);

        }

    }

});

test("getGuideBySlug finds an existing App Guide by slug", () => {

    const guide = getGuideBySlug("getting-started");

    assert.ok(guide);
    assert.strictEqual(guide.title, "Getting Started");
    assert.strictEqual(guide.category, "app");

});

test("getGuideBySlug returns null for an unknown slug", () => {

    assert.strictEqual(getGuideBySlug("this-guide-does-not-exist"), null);

});

test("getGameGuideForSlug finds each real game's guide", () => {

    const expected = {
        "hades": "hades-achievement-guide",
        "portal-2": "portal-2-achievement-guide",
        "hollow-knight": "hollow-knight-achievement-guide",
        "celeste": "celeste-achievement-guide",
        "inside": "inside-achievement-guide"
    };

    for (const [gameSlug, guideSlug] of Object.entries(expected)) {

        const guide = getGameGuideForSlug(gameSlug);

        assert.ok(guide, `expected a real guide for ${gameSlug}`);
        assert.strictEqual(guide.slug, guideSlug);
        assert.strictEqual(guide.category, "game");

    }

});

test("getGameGuideForSlug returns null for a game that has no guide at all (debug-game)", () => {

    assert.strictEqual(getGameGuideForSlug("debug-game"), null);

});
