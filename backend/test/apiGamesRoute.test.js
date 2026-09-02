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
        assert.deepStrictEqual(slugs, ["20-minutes-till-dawn","60-seconds","7-billion-humans","7-days-to-die","a-hat-in-time","a-little-to-the-left","a-musical-story","a-plague-tale-innocence","a-short-hike","a-total-war-saga-troy","a-way-out","adventure-capitalist","against-the-storm","age-of-empires-1-de","age-of-empires-2-de","age-of-empires-4","age-of-mythology-extended-edition","age-of-mythology-retold","age-of-wonders-3","age-of-wonders-planetfall","airmech-strike","alan-wake","alien-isolation","alien-swarm","aliens-fireteam-elite","aliens-vs-predator-2010","american-truck-simulator","among-us","ancestors-legacy","anger-foot","anno-117-pax-romana","anno-2205","apex-legends","arc-raiders","ares-extinction-agenda","ark-survival-ascended","ark-survival-evolved","armored-core-vi-fires-of-rubicon","art-of-rally","ashes-of-the-singularity-escalation","assassins-creed-3","assassins-creed-4-black-flag","assassins-creed-mirage","assassins-creed-odyssey","assassins-creed-origins","assassins-creed-revelations","assassins-creed-rogue","assassins-creed-shadows","assassins-creed-syndicate","assassins-creed-unity","assassins-creed-valhalla","assemble-with-care","astral-ascent","atom-zombie-smasher","atomic-heart","attack-on-titan-2","automation-empire","autonauts","aven-colony","avowed","baba-is-you","baby-steps","back-4-blood","backpack-battles","backpack-hero","bad-north","balatro","baldurs-gate-3","banished","barotrauma","bastion","batman-arkham-asylum","batman-arkham-city","batman-arkham-knight","batman-arkham-origins","battle-brothers","battleblock-theater","battleborn","battlefield-1","battlefield-2042","battlefield-5","battlefield-6","bayonetta","beacon-pines","beamng-drive","beat-hazard","beat-saber","besiege","betrayal-at-club-low","bioshock-2","bioshock-infinite","bioshock-remastered","blasphemous","blasphemous-2","blood-and-bacon","bloody-good-time","bloons-td-6","bomb-rush-cyberfunk","book-of-demons","bopl-battle","borderlands-2","borderlands-game-of-the-year","borderlands-the-pre-sequel","braid","brawlhalla","bridge-constructor-portal","bright-memory-infinite","brotato","brothers-a-tale-of-two-sons","buckshot-roulette","bugsnax","burnout-paradise-remastered","bus-simulator-18","call-of-duty-black-ops","call-of-duty-black-ops-2","call-of-duty-black-ops-iii","call-of-duty-modern-warfare-2","call-of-duty-modern-warfare-2019","car-mechanic-simulator-2021","carx-drift-racing-online","castle-crashers","cat-quest","cat-quest-iii","celeste","chained-echoes","chained-together","chasm","chicory","children-of-the-sun","chivalry-2","chivalry-medieval-warfare","chrono-ark","chrono-trigger","circuit-superstars","cities-skylines","cities-skylines-2","civilization-5","civilization-beyond-earth","civilization-vi","civilization-vii","clair-obscur-expedition-33","cliff-empire","closure","cobalt-core","code-vein","colony-survival","command-and-conquer-remastered","company-of-heroes-2","company-of-heroes-3","conan-exiles","consume-me","content-warning","control-ultimate-edition","cook-serve-delicious","core-keeper","cossacks-3","costume-quest","counter-strike-source","craft-the-world","crawl","creaks","cronos-the-new-dawn","crow-country","crusader-kings-2","crusader-kings-3","crypt-custodian","crypt-of-the-necrodancer","crysis-remastered","cult-of-the-lamb","cuphead","curse-of-the-dead-gods","cyber-shadow","cyberpunk-2077","dakar-desert-rally","danganronpa-2-goodbye-despair","danganronpa-trigger-happy-havoc","dark-souls-3","dark-souls-ii-scholar-of-the-first-sin","dark-souls-remastered","darkest-dungeon","dave-the-diver","dawn-of-man","dawn-of-war-2","days-gone","dayz","dead-cells","dead-island-definitive-edition","dead-rising","dead-rising-2","dead-rising-3","dead-space-2023","deadlink","deadly-premonition-directors-cut","death-must-die","death-stranding-directors-cut","deaths-door","deep-rock-galactic","deep-rock-galactic-survivor","defense-grid-2","delta-force","demolition-inc","descenders","despelote","destiny-2","deus-ex-human-revolution-directors-cut","deus-ex-mankind-divided","devil-may-cry-5","devil-may-cry-hd-collection","devour","diablo-iv","dinkum","dino-d-day","directive-8020","dirt-3-complete-edition","dirt-4","dirt-rally","dirt-rally-2","disc-room","disco-elysium","discstorm","dishonored","dishonored-2","dishonored-death-of-the-outsider","distance","distant-worlds-universe","dmc-devil-may-cry","dome-keeper","doom-1993","doom-2016","doom-3","doom-eternal","doom-plus-doom-ii","doom-the-dark-ages","door-kickers","dorfromantik","downwell","dragon-age-inquisition","dragon-ball-fighterz","dragon-quest-xi","dragons-dogma-2","dragons-dogma-dark-arisen","dredge","duck-detective-the-secret-salami","duck-game","duke-nukem-forever","dungeon-defenders","dungeon-of-the-endless","dungeons-3","dungeons-of-hinterberg","dusk","dust-an-elysian-tail","dying-light","dying-light-2","dying-light-the-beast","dyson-sphere-program","ea-sports-fc-24","ea-sports-fc-25","ea-sports-fc-26","ea-sports-wrc","earth-defense-force-4-1","earth-defense-force-5","el-hijo-a-wild-west-tale","el-paso-elsewhere","elden-ring","elden-ring-nightreign","empyrion-galactic-survival","endless-space-2","enshrouded","enter-the-gungeon","euro-truck-simulator-2","europa-universalis-4","everspace-2","exapunks","f1-2020","f1-24","fabledom","factorio","fall-guys","fallen-enchantress-legendary-heroes","fallout-76","fallout-new-vegas","fallout-shelter","far-cry-3","far-cry-4","far-cry-5","far-cry-primal","farming-simulator-15","farming-simulator-17","farming-simulator-19","farming-simulator-22","farming-simulator-25","farthest-frontier","fashion-police-squad","fatal-fury-city-of-the-wolves","fate","feist","fez","field-of-glory-ii","fields-of-mistria","fifa-23","fight-n-rage","fights-in-tight-spaces","final-fantasy-ix","final-fantasy-v","final-fantasy-vii","final-fantasy-vii-rebirth","final-fantasy-vii-remake-intergrade","final-fantasy-x-x2-hd","final-fantasy-xii-zodiac-age","final-fantasy-xiii","final-fantasy-xv-windows-edition","firewatch","fistful-of-frags","football-manager-2021","football-manager-2023","football-manager-2024","for-honor","forager","forced-showdown","forza-horizon-4","forza-horizon-5","forza-motorsport-2023","foundation","fran-bow","frog-detective-1-the-haunted-island","from-the-depths","frostpunk","frostpunk-2","frozen-synapse","ftl","furi","galactic-civilizations-3","galaxy-on-fire-2","game-of-thrones-telltale","gang-beasts","garrys-mod","gears-5","gears-tactics","get-in-the-car-loser","ghost-of-tsushima-directors-cut","ghost-recon-wildlands","ghostrunner","god-of-war","god-of-war-ragnarok","going-medieval","golf-peaks","gorogoa","gotham-city-impostors","grand-theft-auto-iii-the-definitive-edition","grand-theft-auto-iv","grand-theft-auto-san-andreas-the-definitive-edition","grand-theft-auto-v","grand-theft-auto-vice-city-the-definitive-edition","greedfall","green-hell","grey-goo","grid-2","grid-2019","grid-autosport","griftlands","grip-combat-racing","grounded","guacamelee-2","guacamelee-super-turbo-championship-edition","guilty-gear-strive","gunfire-reborn","gwent","hacknet","hades","hades-2","haiku-the-robot","half-life-2","half-life-2-episode-one","half-life-2-episode-two","half-life-alyx","halo-infinite","halo-the-master-chief-collection","hammerwatch","hand-of-fate","hard-west","hearts-of-iron-4","hell-is-us","helldivers-2","helldivers-dive-harder","helltaker","heroes-of-hammerwatch","hi-fi-rush","hitman-world-of-assassination","hogwarts-legacy","hollow-knight","hollow-knight-silksong","homefront","homeworld-3","homeworld-remastered","horizon-forbidden-west-complete-edition","horizon-zero-dawn-remastered","hotline-miami","hotshot-racing","house-flipper","human-fall-flat","human-resource-machine","humankind","hunt-showdown-1896","huntdown","hyper-light-drifter","hyperdimension-neptunia-rebirth1","iconoclasts","imperator-rome","indiana-jones-and-the-great-circle","injustice-gods-among-us","inside","instruments-of-destruction","insurgency","insurgency-sandstorm","into-the-breach","intrusion-2","invisible-inc","islanders","it-takes-two","jojos-bizarre-adventure-all-star-battle-r","journey","jurassic-world-evolution","jurassic-world-evolution-2","just-cause-2","just-cause-2-multiplayer-mod","just-cause-3","just-cause-4","kaiserpunk","keep-talking-and-nobody-explodes","killer-is-dead","killing-floor","killing-floor-2","kine","kingdom-classic","kingdom-come-deliverance","kingdom-come-deliverance-ii","kingdom-eighties","kingdom-new-lands","kingdom-rush","kingdom-two-crowns","layers-of-fear-2016","laysara-summit-kingdom","left-4-dead","left-4-dead-2","legend-of-grimrock","legend-of-grimrock-2","lego-jurassic-world","lego-marvel-super-heroes","lego-star-wars-the-force-awakens","lets-build-a-zoo","lies-of-p","life-is-strange","life-is-strange-before-the-storm","lightyear-frontier","like-a-dragon-infinite-wealth","like-a-dragon-ishin","limbo","little-kitty-big-city","little-misfortune","little-nightmares","little-nightmares-3","loop-hero","lorelei-and-the-laser-eyes","lost-judgment","luck-be-a-landlord","lyne","machinarium","mad-games-tycoon-2","mad-max","mafia-2-classic","mafia-2-definitive-edition","mafia-definitive-edition","mafia-iii-definitive-edition","mafia-the-old-country","magicka","manor-lords","mark-of-the-ninja","marvel-cosmic-invasion","marvel-rivals","marvel-s-spider-man-miles-morales","marvels-midnight-suns","marvels-spider-man-2","marvels-spider-man-remastered","mass-effect-3","mass-effect-legendary-edition","master-of-orion","max-payne-3","medieval-dynasty","megabonk","megaquarium","melodys-escape","men-of-war-assault-squad-2","metal-eden","metal-gear-rising-revengeance","metal-hellsinger","metaphor-refantazio","metro-2033","metro-2033-redux","metro-exodus","metro-last-light-redux","mgs-v-ground-zeroes","microsoft-flight-simulator-2020","middle-earth-shadow-of-war","mind-diver","mini-metro","mini-motorways","mirrors-edge-catalyst","momodora-reverie-under-the-moonlight","monday-night-combat","monster-hunter-rise","monster-hunter-wilds","monster-hunter-world","monster-train","monster-train-2","moonlighter","mordhau","mortal-kombat-1","mortal-kombat-11","mortal-kombat-x","motorsport-manager","mount-and-blade-2-bannerlord","mount-and-blade-warband","mountain","muck","mudrunner","mullet-madjack","muse-dash","mutazione","my-summer-car","mycopunk","naraka-bladepoint","naruto-shippuden-ultimate-ninja-storm-4","nba-2k23","nba-2k24","nba-2k25","necesse","necrobarista","need-for-speed-heat","need-for-speed-payback","neon-abyss","neon-white","neva","new-cycle","new-world-aeternum","nidhogg","nier-automata","nier-replicant-ver-1-22474487139","nightingale","nightmare-reaper","nightsky","nine-sols","ninja-gaiden-4","nioh-2","nioh-complete-edition","no-mans-sky","noita","norland","northgard","nova-drift","nubbys-number-factory","oceanhorn-monster-of-uncharted-seas","octopath-traveler","octopath-traveler-ii","offspring-fling","old-mans-journey","once-human","onde","oneshot","orcs-must-die","orcs-must-die-3","order-of-battle-world-war-ii","ori-and-the-blind-forest","ori-and-the-will-of-the-wisps","orion-prelude","overcooked-2","overcooked-all-you-can-eat","owlboy","oxenfree","oxygen-not-included","ozymandias-bronze-age-empire-sim","pacific-drive","painkiller-hell-and-damnation","paladins","palworld","panzer-corps-2","papers-please","party-animals","path-of-exile","patricks-parabox","payday-3","payday-the-heist","peak","peglin","pentiment","people-playground","persona-3-reload","persona-4-golden","persona-5-royal","persona-5-strikers","phasmophobia","pillars-of-eternity","pizza-tower","plague-inc-evolved","planet-coaster","planet-coaster-2","planet-explorers","planet-zoo","planetary-annihilation-titans","plants-vs-zombies-goty","plateup","portal","portal-2","powerwash-simulator","prey-2017","prince-of-persia-the-lost-crown","prison-architect","production-line","project-cars","project-cars-2","project-highrise","project-winter","promise-mascot-agency","prospector","prototype-2","psychonauts","pubg-battlegrounds","pummel-party","pvz-battle-for-neighborville","pyre","quake-live","rabbit-and-steel","raft","rage","rage-2","railway-empire","rainbow-six-siege","ratchet-and-clank-rift-apart","ratropolis","ravenswatch","rayman-legends","ready-or-not","red-dead-redemption","red-dead-redemption-2","red-faction-armageddon","red-faction-guerrilla-remastered","rematch","remnant-ii","resident-evil-2-remake","resident-evil-4-remake","resident-evil-5","resident-evil-6","resident-evil-7","resident-evil-revelations","resident-evil-village","return-of-the-obra-dinn","return-to-monkey-island","returnal","rhythm-doctor","rime","riptide-gp2","rise-of-industry","rise-of-nations-extended","rise-of-the-tomb-raider","rise-of-the-triad","risk-global-domination","risk-of-rain","risk-of-rain-2","risk-of-rain-returns","rivals-of-aether","rivals-of-aether-ii","robocop-rogue-city","robocraft","rocket-league","rogue-legacy","roguebook","rust","rusty-lake-hotel","sable","sackboy-a-big-adventure","saints-row-iv","saints-row-the-third","sanabi","sanctum-2","satellite-reign","satisfactory","savage-lands","schedule-i","scp-secret-laboratory","sea-of-stars","sea-of-thieves","sekiro","selaco","sengoku-dynasty","serious-sam-2","serious-sam-3-bfe","serious-sam-4","serious-sam-hd-tfe","serious-sam-hd-tse","session-skate-sim","settlement-survival","severed-steel","shadow-of-mordor","shadow-of-war","shadow-warrior-2","shadow-warrior-3","shapez","shotgun-cop-man","shovel-knight","sid-meiers-ace-patrol-pacific-skies","sid-meiers-starships","sifu","signs-of-the-sojourner","silent-hill-2","sins-of-a-solar-empire-rebellion","six-days-in-fallujah","skate-story","skullgirls","skyrim","skyrim-special-edition","slay-the-spire","sleeping-dogs","slime-rancher","slime-rancher-2","sniper-elite-3","sniper-elite-4","sniper-elite-5","sniper-elite-nazi-zombie-army","sniper-elite-resistance","sniper-elite-v2","sniper-elite-v2-remastered","sniper-ghost-warrior-contracts-2","snow-the-ultimate-edition","snowrunner","snuggle-truck","songs-of-conquest","songs-of-syx","sonic-adventure-2","sonic-adventure-dx","sonic-cd","sonic-frontiers","sonic-mania","sons-of-the-forest","south-of-midnight","space-engineers","space-hulk-deathwing-enhanced","space-marine-2","spacechem","spec-ops-the-line","speedrunners","spelunky","spelunky-2","spiral-knights","splinter-cell-blacklist","split-fiction","stacklands","star-birds","star-trucker","star-wars-battlefront","star-wars-jedi-fallen-order","star-wars-jedi-survivor","star-wars-kotor-2","star-wars-outlaws","stardew-valley","starfield","state-of-decay","steamworld-dig-2","steel-division-2","stellaris","stick-fight-the-game","stray","street-fighter-5","street-fighter-6","streets-of-rage-4","streets-of-rogue","stronghold-crusader-definitive-edition","styx-master-of-shadows","subnautica","subnautica-below-zero","sun-haven","sunless-sea","sunset-overdrive","super-meat-boy","superbrothers-sword-sworcery-ep","superliminal","supermarket-simulator","surviving-mars","tales-from-the-borderlands","team-fortress-2","teardown","techtonica","tekken-8","tempest-rising","tempopo","terraria","the-alters","the-ascent","the-banner-saga","the-callisto-protocol","the-case-of-the-golden-idol","the-crew-2","the-crew-motorfest","the-division","the-elder-scrolls-iv-oblivion-remastered","the-escapists-2","the-evil-within-2","the-final-station","the-finals","the-first-descendant","the-forest","the-forgotten-city","the-gardens-between","the-last-of-us-part-1","the-last-of-us-part-i","the-last-of-us-part-ii-remastered","the-lego-movie-videogame","the-longing","the-messenger","the-outer-worlds","the-planet-crafter","the-precinct","the-riftbreaker","the-slormancer","the-stanley-parable","the-swapper","the-walking-dead","the-walking-dead-season-two","the-walking-dead-telltale-definitive-series","the-wandering-village","the-witcher-2","the-witcher-3","the-wolf-among-us","they-are-billions","thief","thomas-was-alone","thronefall","timberborn","time-wasters","tiny-rogues","titan-quest","titan-souls","titanfall-2","tmnt-shredders-revenge","tom-clancys-ghost-recon-breakpoint","tom-clancys-the-division-2","tomb-raider-2013","tooth-and-tail","torchlight","total-war-attila","total-war-empire","total-war-napoleon","total-war-pharaoh","total-war-rome-2","total-war-rome-remastered","total-war-shogun-2","total-war-three-kingdoms","total-war-warhammer","total-war-warhammer-2","total-war-warhammer-3","towa-and-the-guardians-of-the-sacred-tree","towerfall","trailmakers","transistor","transport-fever-2","trepang2","trials-fusion","tricky-towers","trine-2","trine-4","trine-5","trine-enchanted-edition","trombone-champ","tropico-4","tropico-5","tropico-6","trove","turbo-overkill","turmoil","two-point-campus","two-point-hospital","two-point-museum","ufo-50","ultimate-chicken-horse","ultimate-general-civil-war","ultra-street-fighter-4","umurangi-generation","uncharted-legacy-of-thieves-collection","underrail","unity-of-command-2","universe-sandbox-legacy","unrailed","unravel-two","v-rising","va11-hall-a","vampire-survivors","venba","verdun","vernal-edge","victoria-3","viscera-cleanup-detail","void-bastards","vvvvvv","wallpaper-engine","wanderstop","war-thunder","warframe","warhammer-40000-space-marine","warhammer-40k-boltgun","warhammer-40k-darktide","warhammer-40k-mechanicus","warhammer-vermintide-2","warno","wartales","wasteland-2-directors-cut","watch-dogs","watch-dogs-2","watch-dogs-legion","we-were-here-too","what-remains-of-edith-finch","where-winds-meet","wildermyth","wildfrost","windblown","wingspan","wizard-of-legend","wizardry-proving-grounds-of-the-mad-overlord","wobbly-life","wolfenstein-2","wolfenstein-the-new-order","wolfenstein-the-old-blood","wolfenstein-youngblood","workers-resources-soviet-republic","world-of-goo","world-of-warships","world-war-z","worms-reloaded","worms-ultimate-mayhem","worms-wmd","wreckfest","xcom-2","xcom-enemy-unknown","yakuza-0","yakuza-like-a-dragon","yooka-laylee","yu-gi-oh-duel-links","yu-gi-oh-master-duel","zeno-clash","zombie-army-trilogy"]);

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
