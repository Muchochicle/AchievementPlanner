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
    assert.strictEqual(GAME_GUIDES.length, 280);

    assert.deepStrictEqual(
        GAME_GUIDES.map(guide => guide.gameSlug).sort(),
        ["20-minutes-till-dawn", "7-billion-humans", "7-days-to-die", "a-hat-in-time", "a-little-to-the-left", "a-short-hike", "against-the-storm", "age-of-empires-1-de", "age-of-empires-2-de", "age-of-empires-4", "age-of-mythology-retold", "ark-survival-evolved", "astral-ascent", "atomic-heart", "automation-empire", "autonauts", "baba-is-you", "backpack-battles", "backpack-hero", "bad-north", "balatro", "baldurs-gate-3", "banished", "barotrauma", "bastion", "batman-arkham-city", "battlefield-1", "beamng-drive", "besiege", "bioshock-infinite", "bioshock-remastered", "bloons-td-6", "borderlands-2", "braid", "brotato", "celeste", "chained-echoes", "chicory", "chivalry-2", "chivalry-medieval-warfare", "cities-skylines", "cities-skylines-2", "civilization-5", "civilization-vi", "colony-survival", "company-of-heroes-2", "content-warning", "counter-strike-source", "craft-the-world", "crusader-kings-3", "crypt-of-the-necrodancer", "cult-of-the-lamb", "cuphead", "curse-of-the-dead-gods", "cyberpunk-2077", "dark-souls-3", "darkest-dungeon", "dave-the-diver", "dawn-of-man", "dead-cells", "dead-space-2023", "deaths-door", "deep-rock-galactic", "deep-rock-galactic-survivor", "devil-may-cry-5", "devour", "dinkum", "dirt-rally-2", "disco-elysium", "dishonored", "dome-keeper", "doom-1993", "doom-2016", "doom-eternal", "dorfromantik", "dragon-age-inquisition", "dredge", "duck-game", "dying-light", "dyson-sphere-program", "ea-sports-fc-24", "elden-ring", "enshrouded", "enter-the-gungeon", "euro-truck-simulator-2", "europa-universalis-4", "everspace-2", "f1-24", "factorio", "fall-guys", "fallout-new-vegas", "far-cry-3", "far-cry-5", "farming-simulator-22", "fields-of-mistria", "football-manager-2024", "for-honor", "forza-horizon-5", "frostpunk", "ftl", "furi", "garrys-mod", "ghostrunner", "god-of-war", "going-medieval", "grand-theft-auto-v", "green-hell", "griftlands", "grounded", "guacamelee-2", "gunfire-reborn", "hades", "hades-2", "half-life-2", "hearts-of-iron-4", "helldivers-2", "hitman-world-of-assassination", "hogwarts-legacy", "hollow-knight", "hotline-miami", "human-fall-flat", "human-resource-machine", "hyper-light-drifter", "inside", "insurgency", "insurgency-sandstorm", "into-the-breach", "it-takes-two", "just-cause-4", "killing-floor-2", "left-4-dead", "left-4-dead-2", "like-a-dragon-ishin", "limbo", "little-nightmares", "loop-hero", "luck-be-a-landlord", "mad-max", "mafia-2-definitive-edition", "mafia-definitive-edition", "manor-lords", "mark-of-the-ninja", "marvel-rivals", "marvels-midnight-suns", "mass-effect-legendary-edition", "metro-2033-redux", "metro-exodus", "monster-hunter-rise", "monster-hunter-world", "monster-train", "moonlighter", "mortal-kombat-1", "mortal-kombat-11", "mount-and-blade-2-bannerlord", "muck", "naraka-bladepoint", "necesse", "neon-abyss", "neon-white", "nidhogg", "nightingale", "nioh-2", "no-mans-sky", "once-human", "ori-and-the-blind-forest", "ori-and-the-will-of-the-wisps", "overcooked-2", "owlboy", "oxenfree", "oxygen-not-included", "palworld", "papers-please", "party-animals", "path-of-exile", "payday-3", "peak", "peglin", "people-playground", "persona-5-royal", "phasmophobia", "pizza-tower", "planet-zoo", "plateup", "portal", "portal-2", "powerwash-simulator", "prison-architect", "pubg-battlegrounds", "pyre", "raft", "rage-2", "rainbow-six-siege", "ready-or-not", "red-dead-redemption-2", "resident-evil-2-remake", "resident-evil-4-remake", "resident-evil-village", "return-of-the-obra-dinn", "rime", "rise-of-the-tomb-raider", "risk-global-domination", "risk-of-rain", "risk-of-rain-2", "rocket-league", "rogue-legacy", "rust", "sable", "satisfactory", "scp-secret-laboratory", "sea-of-thieves", "sekiro", "shadow-of-mordor", "shadow-of-war", "shovel-knight", "sifu", "skyrim-special-edition", "slay-the-spire", "sleeping-dogs", "slime-rancher", "sniper-elite-5", "snowrunner", "songs-of-syx", "speedrunners", "spelunky-2", "stardew-valley", "steamworld-dig-2", "stellaris", "streets-of-rage-4", "streets-of-rogue", "sun-haven", "sunless-sea", "superliminal", "surviving-mars", "team-fortress-2", "techtonica", "terraria", "the-first-descendant", "the-forest", "the-forgotten-city", "the-last-of-us-part-1", "the-messenger", "the-planet-crafter", "the-riftbreaker", "the-stanley-parable", "the-witcher-2", "the-witcher-3", "they-are-billions", "thomas-was-alone", "tomb-raider-2013", "total-war-rome-2", "total-war-three-kingdoms", "total-war-warhammer-2", "total-war-warhammer-3", "towerfall", "transistor", "trombone-champ", "tropico-6", "two-point-hospital", "ultimate-chicken-horse", "unrailed", "v-rising", "va11-hall-a", "vampire-survivors", "victoria-3", "void-bastards", "wallpaper-engine", "war-thunder", "warframe", "warhammer-40k-boltgun", "warhammer-40k-darktide", "warhammer-vermintide-2", "watch-dogs-2", "watch-dogs-legion", "what-remains-of-edith-finch", "wildfrost", "wingspan", "wobbly-life", "wolfenstein-2", "world-of-goo", "yakuza-like-a-dragon"]
    );

    assert.deepStrictEqual(
        GAME_GUIDES.map(guide => guide.slug).sort(),
        [
                                                                                                                                                                                                            "20-minutes-till-dawn-achievement-guide",
            "7-billion-humans-achievement-guide",
            "7-days-to-die-achievement-guide",
            "a-hat-in-time-achievement-guide",
            "a-little-to-the-left-achievement-guide",
            "a-short-hike-achievement-guide",
            "against-the-storm-achievement-guide",
            "age-of-empires-1-de-achievement-guide",
            "age-of-empires-2-de-achievement-guide",
            "age-of-empires-4-achievement-guide",
            "age-of-mythology-retold-achievement-guide",
            "ark-survival-evolved-achievement-guide",
            "astral-ascent-achievement-guide",
            "atomic-heart-achievement-guide",
            "automation-empire-achievement-guide",
            "autonauts-achievement-guide",
            "baba-is-you-achievement-guide",
            "backpack-battles-achievement-guide",
            "backpack-hero-achievement-guide",
            "bad-north-achievement-guide",
            "balatro-achievement-guide",
            "baldurs-gate-3-achievement-guide",
            "banished-achievement-guide",
            "barotrauma-achievement-guide",
            "bastion-achievement-guide",
            "batman-arkham-city-achievement-guide",
            "battlefield-1-achievement-guide",
            "beamng-drive-achievement-guide",
            "besiege-achievement-guide",
            "bioshock-infinite-achievement-guide",
            "bioshock-remastered-achievement-guide",
            "bloons-td-6-achievement-guide",
            "borderlands-2-achievement-guide",
            "braid-achievement-guide",
            "brotato-achievement-guide",
            "celeste-achievement-guide",
            "chained-echoes-achievement-guide",
            "chicory-achievement-guide",
            "chivalry-2-achievement-guide",
            "chivalry-medieval-warfare-achievement-guide",
            "cities-skylines-2-achievement-guide",
            "cities-skylines-achievement-guide",
            "civilization-5-achievement-guide",
            "civilization-vi-achievement-guide",
            "colony-survival-achievement-guide",
            "company-of-heroes-2-achievement-guide",
            "content-warning-achievement-guide",
            "counter-strike-source-achievement-guide",
            "craft-the-world-achievement-guide",
            "crusader-kings-3-achievement-guide",
            "crypt-of-the-necrodancer-achievement-guide",
            "cult-of-the-lamb-achievement-guide",
            "cuphead-achievement-guide",
            "curse-of-the-dead-gods-achievement-guide",
            "cyberpunk-2077-achievement-guide",
            "dark-souls-3-achievement-guide",
            "darkest-dungeon-achievement-guide",
            "dave-the-diver-achievement-guide",
            "dawn-of-man-achievement-guide",
            "dead-cells-achievement-guide",
            "dead-space-2023-achievement-guide",
            "deaths-door-achievement-guide",
            "deep-rock-galactic-achievement-guide",
            "deep-rock-galactic-survivor-achievement-guide",
            "devil-may-cry-5-achievement-guide",
            "devour-achievement-guide",
            "dinkum-achievement-guide",
            "dirt-rally-2-achievement-guide",
            "disco-elysium-achievement-guide",
            "dishonored-achievement-guide",
            "dome-keeper-achievement-guide",
            "doom-1993-achievement-guide",
            "doom-2016-achievement-guide",
            "doom-eternal-achievement-guide",
            "dorfromantik-achievement-guide",
            "dragon-age-inquisition-achievement-guide",
            "dredge-achievement-guide",
            "duck-game-achievement-guide",
            "dying-light-achievement-guide",
            "dyson-sphere-program-achievement-guide",
            "ea-sports-fc-24-achievement-guide",
            "elden-ring-achievement-guide",
            "enshrouded-achievement-guide",
            "enter-the-gungeon-achievement-guide",
            "euro-truck-simulator-2-achievement-guide",
            "europa-universalis-4-achievement-guide",
            "everspace-2-achievement-guide",
            "f1-24-achievement-guide",
            "factorio-achievement-guide",
            "fall-guys-achievement-guide",
            "fallout-new-vegas-achievement-guide",
            "far-cry-3-achievement-guide",
            "far-cry-5-achievement-guide",
            "farming-simulator-22-achievement-guide",
            "fields-of-mistria-achievement-guide",
            "football-manager-2024-achievement-guide",
            "for-honor-achievement-guide",
            "forza-horizon-5-achievement-guide",
            "frostpunk-achievement-guide",
            "ftl-achievement-guide",
            "furi-achievement-guide",
            "garrys-mod-achievement-guide",
            "ghostrunner-achievement-guide",
            "god-of-war-achievement-guide",
            "going-medieval-achievement-guide",
            "grand-theft-auto-v-achievement-guide",
            "green-hell-achievement-guide",
            "griftlands-achievement-guide",
            "grounded-achievement-guide",
            "guacamelee-2-achievement-guide",
            "gunfire-reborn-achievement-guide",
            "hades-2-achievement-guide",
            "hades-achievement-guide",
            "half-life-2-achievement-guide",
            "hearts-of-iron-4-achievement-guide",
            "helldivers-2-achievement-guide",
            "hitman-world-of-assassination-achievement-guide",
            "hogwarts-legacy-achievement-guide",
            "hollow-knight-achievement-guide",
            "hotline-miami-achievement-guide",
            "human-fall-flat-achievement-guide",
            "human-resource-machine-achievement-guide",
            "hyper-light-drifter-achievement-guide",
            "inside-achievement-guide",
            "insurgency-achievement-guide",
            "insurgency-sandstorm-achievement-guide",
            "into-the-breach-achievement-guide",
            "it-takes-two-achievement-guide",
            "just-cause-4-achievement-guide",
            "killing-floor-2-achievement-guide",
            "left-4-dead-2-achievement-guide",
            "left-4-dead-achievement-guide",
            "like-a-dragon-ishin-achievement-guide",
            "limbo-achievement-guide",
            "little-nightmares-achievement-guide",
            "loop-hero-achievement-guide",
            "luck-be-a-landlord-achievement-guide",
            "mad-max-achievement-guide",
            "mafia-2-definitive-edition-achievement-guide",
            "mafia-definitive-edition-achievement-guide",
            "manor-lords-achievement-guide",
            "mark-of-the-ninja-achievement-guide",
            "marvel-rivals-achievement-guide",
            "marvels-midnight-suns-achievement-guide",
            "mass-effect-legendary-edition-achievement-guide",
            "metro-2033-redux-achievement-guide",
            "metro-exodus-achievement-guide",
            "monster-hunter-rise-achievement-guide",
            "monster-hunter-world-achievement-guide",
            "monster-train-achievement-guide",
            "moonlighter-achievement-guide",
            "mortal-kombat-1-achievement-guide",
            "mortal-kombat-11-achievement-guide",
            "mount-and-blade-2-bannerlord-achievement-guide",
            "muck-achievement-guide",
            "naraka-bladepoint-achievement-guide",
            "necesse-achievement-guide",
            "neon-abyss-achievement-guide",
            "neon-white-achievement-guide",
            "nidhogg-achievement-guide",
            "nightingale-achievement-guide",
            "nioh-2-achievement-guide",
            "no-mans-sky-achievement-guide",
            "once-human-achievement-guide",
            "ori-and-the-blind-forest-achievement-guide",
            "ori-and-the-will-of-the-wisps-achievement-guide",
            "overcooked-2-achievement-guide",
            "owlboy-achievement-guide",
            "oxenfree-achievement-guide",
            "oxygen-not-included-achievement-guide",
            "palworld-achievement-guide",
            "papers-please-achievement-guide",
            "party-animals-achievement-guide",
            "path-of-exile-achievement-guide",
            "payday-3-achievement-guide",
            "peak-achievement-guide",
            "peglin-achievement-guide",
            "people-playground-achievement-guide",
            "persona-5-royal-achievement-guide",
            "phasmophobia-achievement-guide",
            "pizza-tower-achievement-guide",
            "planet-zoo-achievement-guide",
            "plateup-achievement-guide",
            "portal-2-achievement-guide",
            "portal-achievement-guide",
            "powerwash-simulator-achievement-guide",
            "prison-architect-achievement-guide",
            "pubg-battlegrounds-achievement-guide",
            "pyre-achievement-guide",
            "raft-achievement-guide",
            "rage-2-achievement-guide",
            "rainbow-six-siege-achievement-guide",
            "ready-or-not-achievement-guide",
            "red-dead-redemption-2-achievement-guide",
            "resident-evil-2-remake-achievement-guide",
            "resident-evil-4-remake-achievement-guide",
            "resident-evil-village-achievement-guide",
            "return-of-the-obra-dinn-achievement-guide",
            "rime-achievement-guide",
            "rise-of-the-tomb-raider-achievement-guide",
            "risk-global-domination-achievement-guide",
            "risk-of-rain-2-achievement-guide",
            "risk-of-rain-achievement-guide",
            "rocket-league-achievement-guide",
            "rogue-legacy-achievement-guide",
            "rust-achievement-guide",
            "sable-achievement-guide",
            "satisfactory-achievement-guide",
            "scp-secret-laboratory-achievement-guide",
            "sea-of-thieves-achievement-guide",
            "sekiro-achievement-guide",
            "shadow-of-mordor-achievement-guide",
            "shadow-of-war-achievement-guide",
            "shovel-knight-achievement-guide",
            "sifu-achievement-guide",
            "skyrim-special-edition-achievement-guide",
            "slay-the-spire-achievement-guide",
            "sleeping-dogs-achievement-guide",
            "slime-rancher-achievement-guide",
            "sniper-elite-5-achievement-guide",
            "snowrunner-achievement-guide",
            "songs-of-syx-achievement-guide",
            "speedrunners-achievement-guide",
            "spelunky-2-achievement-guide",
            "stardew-valley-achievement-guide",
            "steamworld-dig-2-achievement-guide",
            "stellaris-achievement-guide",
            "streets-of-rage-4-achievement-guide",
            "streets-of-rogue-achievement-guide",
            "sun-haven-achievement-guide",
            "sunless-sea-achievement-guide",
            "superliminal-achievement-guide",
            "surviving-mars-achievement-guide",
            "team-fortress-2-achievement-guide",
            "techtonica-achievement-guide",
            "terraria-achievement-guide",
            "the-first-descendant-achievement-guide",
            "the-forest-achievement-guide",
            "the-forgotten-city-achievement-guide",
            "the-last-of-us-part-1-achievement-guide",
            "the-messenger-achievement-guide",
            "the-planet-crafter-achievement-guide",
            "the-riftbreaker-achievement-guide",
            "the-stanley-parable-achievement-guide",
            "the-witcher-2-achievement-guide",
            "the-witcher-3-achievement-guide",
            "they-are-billions-achievement-guide",
            "thomas-was-alone-achievement-guide",
            "tomb-raider-2013-achievement-guide",
            "total-war-rome-2-achievement-guide",
            "total-war-three-kingdoms-achievement-guide",
            "total-war-warhammer-2-achievement-guide",
            "total-war-warhammer-3-achievement-guide",
            "towerfall-achievement-guide",
            "transistor-achievement-guide",
            "trombone-champ-achievement-guide",
            "tropico-6-achievement-guide",
            "two-point-hospital-achievement-guide",
            "ultimate-chicken-horse-achievement-guide",
            "unrailed-achievement-guide",
            "v-rising-achievement-guide",
            "va11-hall-a-achievement-guide",
            "vampire-survivors-achievement-guide",
            "victoria-3-achievement-guide",
            "void-bastards-achievement-guide",
            "wallpaper-engine-achievement-guide",
            "war-thunder-achievement-guide",
            "warframe-achievement-guide",
            "warhammer-40k-boltgun-achievement-guide",
            "warhammer-40k-darktide-achievement-guide",
            "warhammer-vermintide-2-achievement-guide",
            "watch-dogs-2-achievement-guide",
            "watch-dogs-legion-achievement-guide",
            "what-remains-of-edith-finch-achievement-guide",
            "wildfrost-achievement-guide",
            "wingspan-achievement-guide",
            "wobbly-life-achievement-guide",
            "wolfenstein-2-achievement-guide",
            "world-of-goo-achievement-guide",
            "yakuza-like-a-dragon-achievement-guide"
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
