import { test } from "node:test";
import assert from "node:assert";
import { spawn } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

// GET /api/games (routes/games.js) is the actual HTTP contract the Games
// page's frontend (gameService.js's getGamesIndex()) depends on - it had
// only been verified manually (curl, during ad-hoc audits), never as an
// automated regression test. In particular, nothing previously proved
// end-to-end (through the real route, not just the underlying
// plannerCatalog.js functions already covered by
// backend/test/plannerCatalog.test.js) that the internal debug-game
// fixture never reaches this response. Spawns the real, unmodified
// server.js as a child process, matching this suite's established
// pattern (see server.test.js, serverSecurity.test.js, apiMe.test.js).

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SERVER_PATH = path.join(__dirname, "..", "server.js");
const BACKEND_DIR = path.join(__dirname, "..");

let nextPort = 34631;

function startServer(envOverrides = {}) {

    const port = nextPort++;

    const child = spawn("node", [SERVER_PATH], {
        cwd: BACKEND_DIR,
        env: {
            ...process.env,
            PORT: String(port),
            CORS_ORIGIN: "http://127.0.0.1:5500",
            FRONTEND_URL: "http://127.0.0.1:5500",
            COOKIE_SECURE: "false",
            ...envOverrides
        },
        stdio: ["ignore", "pipe", "pipe"]
    });

    let stderr = "";
    child.stderr.on("data", chunk => { stderr += chunk; });

    const ready = new Promise((resolve, reject) => {

        let stdout = "";
        const timeout = setTimeout(() => {
            reject(new Error(`server did not start in time.\nstdout: ${stdout}\nstderr: ${stderr}`));
        }, 5000);

        child.stdout.on("data", chunk => {

            stdout += chunk;

            if (stdout.includes("Server running on port")) {

                clearTimeout(timeout);
                resolve();

            }

        });

        child.on("error", reject);

        child.on("exit", code => {

            if (code !== null) {

                clearTimeout(timeout);
                reject(new Error(`server exited early with code ${code}.\nstderr: ${stderr}`));

            }

        });

    });

    return { child, port, baseUrl: `http://127.0.0.1:${port}`, ready };

}

async function withServer(envOverrides, fn) {

    const server = startServer(envOverrides);

    try {

        await server.ready;
        await fn(server);

    } finally {

        server.child.kill();

    }

}

test("GET /api/games never includes the internal debug-game fixture, for a logged-out (no session) request", async () => {

    await withServer({}, async ({ baseUrl }) => {

        const res = await fetch(`${baseUrl}/api/games`);

        assert.strictEqual(res.status, 200);

        const body = await res.json();

        assert.strictEqual(body.success, true);
        assert.ok(Array.isArray(body.games));

        const slugs = body.games.map(g => g.slug);

        assert.ok(!slugs.includes("debug-game"), "the internal sandbox fixture must never reach the real /api/games response");
        assert.ok(!body.games.some(g => g.title === "Developer Sandbox"), "the sandbox's title must never leak into the response either, under any slug");

    });

});

test("GET /api/games returns the real catalog games with hasPlanner:true and the expected count/games shape", async () => {

    await withServer({}, async ({ baseUrl }) => {

        const res = await fetch(`${baseUrl}/api/games`);
        const body = await res.json();

        assert.strictEqual(body.count, body.games.length, "count must match the actual number of games returned");

        const slugs = body.games.map(g => g.slug).sort();
        assert.deepStrictEqual(slugs, ["20-minutes-till-dawn", "7-billion-humans", "7-days-to-die", "a-hat-in-time", "a-little-to-the-left", "a-short-hike", "a-way-out", "against-the-storm", "age-of-empires-1-de", "age-of-empires-2-de", "age-of-empires-4", "age-of-mythology-retold", "age-of-wonders-3", "alan-wake", "alien-isolation", "aliens-fireteam-elite", "ark-survival-evolved", "art-of-rally", "astral-ascent", "atomic-heart", "automation-empire", "autonauts", "baba-is-you", "back-4-blood", "backpack-battles", "backpack-hero", "bad-north", "balatro", "baldurs-gate-3", "banished", "barotrauma", "bastion", "batman-arkham-asylum", "batman-arkham-city", "battle-brothers", "battlefield-1", "bayonetta", "beamng-drive", "besiege", "bioshock-infinite", "bioshock-remastered", "bloons-td-6", "book-of-demons", "borderlands-2", "braid", "brawlhalla", "bright-memory-infinite", "brotato", "brothers-a-tale-of-two-sons", "burnout-paradise-remastered", "car-mechanic-simulator-2021", "castle-crashers", "celeste", "chained-echoes", "chicory", "chivalry-2", "chivalry-medieval-warfare", "cities-skylines", "cities-skylines-2", "civilization-5", "civilization-vi", "colony-survival", "company-of-heroes-2", "company-of-heroes-3", "conan-exiles", "content-warning", "counter-strike-source", "craft-the-world", "crawl", "crusader-kings-3", "crypt-of-the-necrodancer", "cult-of-the-lamb", "cuphead", "curse-of-the-dead-gods", "cyber-shadow", "cyberpunk-2077", "dark-souls-3", "dark-souls-remastered", "darkest-dungeon", "dave-the-diver", "dawn-of-man", "days-gone", "dead-cells", "dead-island-definitive-edition", "dead-rising-3", "dead-space-2023", "deaths-door", "deep-rock-galactic", "deep-rock-galactic-survivor", "devil-may-cry-5", "devil-may-cry-hd-collection", "devour", "dinkum", "dirt-4", "dirt-rally-2", "disco-elysium", "dishonored", "dmc-devil-may-cry", "dome-keeper", "doom-1993", "doom-2016", "doom-3", "doom-eternal", "dorfromantik", "dragon-age-inquisition", "dredge", "duck-game", "dying-light", "dyson-sphere-program", "ea-sports-fc-24", "elden-ring", "endless-space-2", "enshrouded", "enter-the-gungeon", "euro-truck-simulator-2", "europa-universalis-4", "everspace-2", "f1-2020", "f1-24", "factorio", "fall-guys", "fallout-76", "fallout-new-vegas", "far-cry-3", "far-cry-4", "far-cry-5", "farming-simulator-22", "fields-of-mistria", "firewatch", "football-manager-2024", "for-honor", "forager", "forza-horizon-5", "forza-motorsport-2023", "frostpunk", "ftl", "furi", "garrys-mod", "ghost-recon-wildlands", "ghostrunner", "god-of-war", "going-medieval", "grand-theft-auto-iv", "grand-theft-auto-v", "green-hell", "grid-2019", "grid-autosport", "griftlands", "grounded", "guacamelee-2", "gunfire-reborn", "hades", "hades-2", "half-life-2", "half-life-2-episode-one", "half-life-2-episode-two", "hammerwatch", "hearts-of-iron-4", "helldivers-2", "helldivers-dive-harder", "heroes-of-hammerwatch", "hitman-world-of-assassination", "hogwarts-legacy", "hollow-knight", "hotline-miami", "human-fall-flat", "human-resource-machine", "humankind", "huntdown", "hyper-light-drifter", "inside", "insurgency", "insurgency-sandstorm", "into-the-breach", "islanders", "it-takes-two", "journey", "jurassic-world-evolution", "just-cause-2", "just-cause-4", "killing-floor", "killing-floor-2", "kingdom-new-lands", "kingdom-two-crowns", "left-4-dead", "left-4-dead-2", "lego-marvel-super-heroes", "like-a-dragon-ishin", "limbo", "little-nightmares", "loop-hero", "luck-be-a-landlord", "mad-max", "mafia-2-definitive-edition", "mafia-definitive-edition", "manor-lords", "mark-of-the-ninja", "marvel-rivals", "marvels-midnight-suns", "mass-effect-legendary-edition", "max-payne-3", "metal-gear-rising-revengeance", "metal-hellsinger", "metro-2033-redux", "metro-exodus", "mini-metro", "monster-hunter-rise", "monster-hunter-world", "monster-train", "moonlighter", "mortal-kombat-1", "mortal-kombat-11", "mortal-kombat-x", "mount-and-blade-2-bannerlord", "mount-and-blade-warband", "muck", "mudrunner", "my-summer-car", "naraka-bladepoint", "necesse", "need-for-speed-payback", "neon-abyss", "neon-white", "nidhogg", "nightingale", "nioh-2", "nioh-complete-edition", "no-mans-sky", "northgard", "nova-drift", "once-human", "ori-and-the-blind-forest", "ori-and-the-will-of-the-wisps", "overcooked-2", "owlboy", "oxenfree", "oxygen-not-included", "palworld", "papers-please", "party-animals", "path-of-exile", "payday-3", "peak", "peglin", "people-playground", "persona-5-royal", "phasmophobia", "pillars-of-eternity", "pizza-tower", "planet-zoo", "plants-vs-zombies-goty", "plateup", "portal", "portal-2", "powerwash-simulator", "prey-2017", "prison-architect", "project-cars-2", "project-highrise", "psychonauts", "pubg-battlegrounds", "pvz-battle-for-neighborville", "pyre", "raft", "rage-2", "railway-empire", "rainbow-six-siege", "ratropolis", "rayman-legends", "ready-or-not", "red-dead-redemption-2", "red-faction-guerrilla-remastered", "resident-evil-2-remake", "resident-evil-4-remake", "resident-evil-village", "return-of-the-obra-dinn", "rime", "rise-of-the-tomb-raider", "risk-global-domination", "risk-of-rain", "risk-of-rain-2", "rivals-of-aether", "rocket-league", "rogue-legacy", "rust", "sable", "saints-row-the-third", "sanctum-2", "satisfactory", "scp-secret-laboratory", "sea-of-thieves", "sekiro", "serious-sam-4", "shadow-of-mordor", "shadow-of-war", "shadow-warrior-3", "shovel-knight", "sifu", "skullgirls", "skyrim", "skyrim-special-edition", "slay-the-spire", "sleeping-dogs", "slime-rancher", "slime-rancher-2", "sniper-elite-3", "sniper-elite-4", "sniper-elite-5", "sniper-elite-v2", "snowrunner", "songs-of-syx", "space-engineers", "space-marine-2", "spec-ops-the-line", "speedrunners", "spelunky-2", "stardew-valley", "steamworld-dig-2", "stellaris", "street-fighter-6", "streets-of-rage-4", "streets-of-rogue", "subnautica", "subnautica-below-zero", "sun-haven", "sunless-sea", "sunset-overdrive", "superliminal", "surviving-mars", "team-fortress-2", "techtonica", "terraria", "the-crew-2", "the-division", "the-first-descendant", "the-forest", "the-forgotten-city", "the-last-of-us-part-1", "the-messenger", "the-planet-crafter", "the-riftbreaker", "the-stanley-parable", "the-walking-dead", "the-witcher-2", "the-witcher-3", "they-are-billions", "thomas-was-alone", "thronefall", "titan-quest", "titanfall-2", "tomb-raider-2013", "total-war-attila", "total-war-empire", "total-war-napoleon", "total-war-pharaoh", "total-war-rome-2", "total-war-shogun-2", "total-war-three-kingdoms", "total-war-warhammer", "total-war-warhammer-2", "total-war-warhammer-3", "towerfall", "transistor", "transport-fever-2", "trials-fusion", "trine-2", "trine-4", "trine-5", "trine-enchanted-edition", "trombone-champ", "tropico-6", "two-point-hospital", "ultimate-chicken-horse", "unrailed", "unravel-two", "v-rising", "va11-hall-a", "vampire-survivors", "victoria-3", "viscera-cleanup-detail", "void-bastards", "wallpaper-engine", "war-thunder", "warframe", "warhammer-40k-boltgun", "warhammer-40k-darktide", "warhammer-vermintide-2", "wartales", "watch-dogs", "watch-dogs-2", "watch-dogs-legion", "what-remains-of-edith-finch", "wildermyth", "wildfrost", "wingspan", "wizard-of-legend", "wobbly-life", "wolfenstein-2", "wolfenstein-the-old-blood", "world-of-goo", "world-war-z", "yakuza-like-a-dragon", "yooka-laylee"]);

        for (const game of body.games) {

            assert.strictEqual(game.hasPlanner, true);
            assert.strictEqual(typeof game.slug, "string");
            assert.strictEqual(typeof game.title, "string");
            assert.ok(Array.isArray(game.genres));

            // attachAchievementAvailability (routes/games.js) only fetches
            // Steam's achievement schema for owned, planner-less games -
            // every catalog game here always has a curated planner, so none
            // of them should trigger that fan-out at all.
            assert.strictEqual("achievementAvailability" in game, false);

        }

    });

});

test("GET /api/games with a garbage/invalid session cookie still succeeds as a logged-out request, not an error", async () => {

    await withServer({}, async ({ baseUrl }) => {

        const res = await fetch(`${baseUrl}/api/games`, {
            headers: { Cookie: "connect.sid=s%3Anot-a-real-session-id.invalidsignature" }
        });

        assert.strictEqual(res.status, 200);

        const body = await res.json();
        assert.strictEqual(body.success, true);
        assert.strictEqual(body.games.every(g => g.owned === false), true, "a request with no real session must never report any game as owned");

    });

});

// GET /api/games/:slug (Phase 45 - see PHASE_45_AUDIT.md) had no end-to-end
// HTTP coverage at all before this phase, despite being the single most
// complex route in the app and the exact place mergedAchievements.
// steamOnlyCount is computed and shipped - the field two real, user-facing
// bugs (Phases 42-43) were fixed around. The bulk of branch coverage for
// this route lives in gameDetail.test.js (unit-level, with injected
// synthetic Steam responses, so it needs no live network access at all);
// the tests below exist specifically to prove the real, fully-wired route -
// as an actual client would hit it - still produces the correct shape for
// the two branches that resolve *before* ever touching Steam, so they're
// exercisable with no live Steam call.
//
// Deliberately does NOT assert on a real catalog game's live-fetched
// achievement data (e.g. asserting Hades' steamOnlyCount is 0 via a real
// HTTP call) - this route's ISteamUserStats/GetSchemaForGame/v2 call
// requires a genuinely valid STEAM_API_KEY, which CI only ever provides a
// placeholder for (see .github/workflows/ci.yml's own comment: "No test in
// this suite ever makes a real Steam API call"). A test asserting exact
// merged-achievement counts here would silently depend on whether the
// environment running it happens to have a real Steam credential -
// passing locally, then failing (or worse, passing for the wrong reason:
// with no live schema data, every curated achievement becomes unmatched but
// steamOnlyCount still reads 0, since there's nothing on the Steam side to
// be "extra") in CI. That exact live-data verification is covered instead
// by manual browser verification against the real dev backend (see
// PHASE_45_AUDIT.md's verification section) and by gameDetail.test.js's
// steamOnlyCount tests, which use hades.json's own real curated apinames
// without needing a live network call.

test("GET /api/games/:slug returns a real 404 (not a crash or a 200 with empty data) for a slug matching no owned or catalog game", async () => {

    await withServer({}, async ({ baseUrl }) => {

        const res = await fetch(`${baseUrl}/api/games/this-game-does-not-exist-anywhere`);

        assert.strictEqual(res.status, 404);

        const body = await res.json();
        assert.strictEqual(body.success, false);
        assert.match(body.message, /this-game-does-not-exist-anywhere/);

    });

});

test("GET /api/games/:slug 404s for slugs matching a JS Object.prototype member instead of returning a fake 200", async () => {

    // Phase 65: plannerCatalog.js's loadCatalog() used to cache entries in
    // a plain {} literal, so catalog[slug] resolved through the prototype
    // chain for a slug like "__proto__" or "constructor" - returning a
    // truthy value (Object.prototype itself, or the Object constructor
    // function) instead of undefined, which mapPlannerOnlyGame() then
    // treated as a real (if malformed) planner entry and returned as a
    // fake 200. Fixed by building the cache with Object.create(null).
    await withServer({}, async ({ baseUrl }) => {

        for (const slug of ["__proto__", "constructor", "toString", "hasOwnProperty"]) {

            const res = await fetch(`${baseUrl}/api/games/${slug}`);
            assert.strictEqual(res.status, 404, `GET /api/games/${slug} should 404, not resolve through the prototype chain`);

        }

    });

});

test("GET /api/games/debug-game never reaches the internal sandbox fixture either - it 404s the same as any other unknown slug", async () => {

    // Mirrors the existing "GET /api/games never includes the internal
    // debug-game fixture" test above, extended to the single-game route -
    // plannerCatalog.js's loadCatalog() already excludes any "internal":true
    // entry from every consumer (getPlannerData/getAllPlannerSlugs/
    // getPlannerDataByAppId), so mapPlannerOnlyGame("debug-game") must
    // resolve to null here too, not leak the sandbox fixture through this
    // route just because the other one is covered.
    await withServer({}, async ({ baseUrl }) => {

        const res = await fetch(`${baseUrl}/api/games/debug-game`);

        assert.strictEqual(res.status, 404);

    });

});
