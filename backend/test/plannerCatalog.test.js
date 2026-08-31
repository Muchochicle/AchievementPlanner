import { test } from "node:test";
import assert from "node:assert";

import {
    getPlannerData,
    getAllPlannerSlugs,
    getPlannerDataByAppId
} from "../utils/plannerCatalog.js";

// src/data/games/debug-game.json is a real, checked-in fixture marked
// "internal": true (a developer sandbox with fake achievements) -
// plannerCatalog.js's loadCatalog() is supposed to exclude any such entry
// from every consumer (getPlannerData/getAllPlannerSlugs/
// getPlannerDataByAppId), which is the one thing standing between it and
// showing up as a real game on Home/Games. This had no dedicated test
// before - only indirect coverage via gameMapper.test.js picking
// getAllPlannerSlugs()[0] as a fixture, which never actually asserted the
// exclusion itself.

test("getAllPlannerSlugs never includes the internal debug-game fixture", () => {

    const slugs = getAllPlannerSlugs();

    assert.ok(!slugs.includes("debug-game"), "the internal sandbox fixture must never be listed as a real catalog entry");

});

test("getAllPlannerSlugs still includes the real, non-internal catalog games", () => {

    const slugs = getAllPlannerSlugs();

    // Sanity check that the internal-exclusion filter isn't accidentally
    // excluding everything - these are checked-in, non-internal fixtures
    // (see src/data/games/*.json).
    assert.ok(slugs.includes("hades"));
    assert.ok(slugs.includes("hollow-knight"));
    assert.ok(slugs.includes("portal-2"));
    assert.ok(slugs.includes("celeste"));
    assert.ok(slugs.includes("inside"));
    assert.ok(slugs.includes("portal"));
    assert.ok(slugs.includes("limbo"));
    assert.ok(slugs.includes("braid"));
    assert.ok(slugs.includes("ori-and-the-blind-forest"));
    assert.ok(slugs.includes("what-remains-of-edith-finch"));
    assert.ok(slugs.includes("return-of-the-obra-dinn"));
    assert.ok(slugs.includes("stardew-valley"));
    assert.ok(slugs.includes("a-short-hike"));
    assert.ok(slugs.includes("hyper-light-drifter"));
    assert.ok(slugs.includes("cuphead"));
    assert.ok(slugs.includes("superliminal"));
    assert.ok(slugs.includes("transistor"));
    assert.ok(slugs.includes("bastion"));
    assert.ok(slugs.includes("rime"));
    assert.ok(slugs.includes("slay-the-spire"));
    assert.ok(slugs.includes("disco-elysium"));
    assert.ok(slugs.includes("a-hat-in-time"));
    assert.ok(slugs.includes("the-stanley-parable"));
    assert.ok(slugs.includes("papers-please"));
    assert.ok(slugs.includes("dead-cells"));
    assert.ok(slugs.includes("baba-is-you"));
    assert.ok(slugs.includes("owlboy"));
    assert.ok(slugs.includes("oxenfree"));
    assert.ok(slugs.includes("rogue-legacy"));
    assert.ok(slugs.includes("ori-and-the-will-of-the-wisps"));
    assert.ok(slugs.includes("the-messenger"));
    assert.ok(slugs.includes("pyre"));
    assert.ok(slugs.includes("steamworld-dig-2"));
    assert.ok(slugs.includes("the-forgotten-city"));
    assert.ok(slugs.includes("guacamelee-2"));
    assert.ok(slugs.includes("va11-hall-a"));
    assert.ok(slugs.includes("thomas-was-alone"));
    assert.ok(slugs.includes("furi"));
    assert.ok(slugs.includes("void-bastards"));
    assert.ok(slugs.includes("deaths-door"));
    assert.ok(slugs.includes("darkest-dungeon"));
    assert.ok(slugs.includes("moonlighter"));
    assert.ok(slugs.includes("frostpunk"));
    assert.ok(slugs.includes("spelunky-2"));
    assert.ok(slugs.includes("into-the-breach"));
    assert.ok(slugs.includes("cult-of-the-lamb"));
    assert.ok(slugs.includes("ftl"));
    assert.ok(slugs.includes("mark-of-the-ninja"));
    assert.ok(slugs.includes("enter-the-gungeon"));
    assert.ok(slugs.includes("loop-hero"));
    assert.ok(slugs.includes("little-nightmares"));
    assert.ok(slugs.includes("griftlands"));
    assert.ok(slugs.includes("dredge"));
    assert.ok(slugs.includes("vampire-survivors"));
    assert.ok(slugs.includes("risk-of-rain-2"));
    assert.ok(slugs.includes("streets-of-rogue"));
    assert.ok(slugs.includes("sable"));
    assert.ok(slugs.includes("neon-white"));
    assert.ok(slugs.includes("chained-echoes"));
    assert.ok(slugs.includes("crypt-of-the-necrodancer"));
    assert.ok(slugs.includes("dorfromantik"));
    assert.ok(slugs.includes("pizza-tower"));
    assert.ok(slugs.includes("dave-the-diver"));
    assert.ok(slugs.includes("curse-of-the-dead-gods"));
    assert.ok(slugs.includes("astral-ascent"));
    assert.ok(slugs.includes("dome-keeper"));
    assert.ok(slugs.includes("chicory"));
    assert.ok(slugs.includes("sifu"));
    assert.ok(slugs.includes("neon-abyss"));
    assert.ok(slugs.includes("a-little-to-the-left"));
    assert.ok(slugs.includes("elden-ring"));
    assert.ok(slugs.includes("baldurs-gate-3"));
    assert.ok(slugs.includes("cyberpunk-2077"));
    assert.ok(slugs.includes("terraria"));
    assert.ok(slugs.includes("skyrim-special-edition"));
    assert.ok(slugs.includes("the-witcher-3"));
    assert.ok(slugs.includes("god-of-war"));
    assert.ok(slugs.includes("red-dead-redemption-2"));
    assert.ok(slugs.includes("left-4-dead-2"));
    assert.ok(slugs.includes("grand-theft-auto-v"));
    assert.ok(slugs.includes("sekiro"));
    assert.ok(slugs.includes("dark-souls-3"));
    assert.ok(slugs.includes("satisfactory"));
    assert.ok(slugs.includes("phasmophobia"));
    assert.ok(slugs.includes("garrys-mod"));
    assert.ok(slugs.includes("rust"));
    assert.ok(slugs.includes("dying-light"));
    assert.ok(slugs.includes("palworld"));
    assert.ok(slugs.includes("fallout-new-vegas"));
    assert.ok(slugs.includes("no-mans-sky"));
    assert.ok(slugs.includes("deep-rock-galactic"));
    assert.ok(slugs.includes("left-4-dead"));
    assert.ok(slugs.includes("half-life-2"));
    assert.ok(slugs.includes("the-forest"));
    assert.ok(slugs.includes("ark-survival-evolved"));
    assert.ok(slugs.includes("civilization-vi"));
    assert.ok(slugs.includes("sea-of-thieves"));
    assert.ok(slugs.includes("monster-hunter-world"));
    assert.ok(slugs.includes("cities-skylines"));
    assert.ok(slugs.includes("age-of-empires-2-de"));
    assert.ok(slugs.includes("hogwarts-legacy"));
    assert.ok(slugs.includes("borderlands-2"));
    assert.ok(slugs.includes("raft"));
    assert.ok(slugs.includes("pubg-battlegrounds"));
    assert.ok(slugs.includes("monster-hunter-rise"));
    assert.ok(slugs.includes("team-fortress-2"));
    assert.ok(slugs.includes("rocket-league"));
    assert.ok(slugs.includes("euro-truck-simulator-2"));
    assert.ok(slugs.includes("stellaris"));
    assert.ok(slugs.includes("hearts-of-iron-4"));
    assert.ok(slugs.includes("crusader-kings-3"));
    assert.ok(slugs.includes("total-war-warhammer-3"));
    assert.ok(slugs.includes("dyson-sphere-program"));
    assert.ok(slugs.includes("war-thunder"));
    assert.ok(slugs.includes("v-rising"));
    assert.ok(slugs.includes("resident-evil-2-remake"));
    assert.ok(slugs.includes("resident-evil-4-remake"));
    assert.ok(slugs.includes("resident-evil-village"));
    assert.ok(slugs.includes("factorio"));
    assert.ok(slugs.includes("slime-rancher"));
    assert.ok(slugs.includes("naraka-bladepoint"));
    assert.ok(slugs.includes("7-days-to-die"));
    assert.ok(slugs.includes("green-hell"));
    assert.ok(slugs.includes("grounded"));
    assert.ok(slugs.includes("civilization-5"));
    assert.ok(slugs.includes("age-of-empires-4"));
    assert.ok(slugs.includes("total-war-three-kingdoms"));
    assert.ok(slugs.includes("doom-2016"));
    assert.ok(slugs.includes("doom-eternal"));
    assert.ok(slugs.includes("devil-may-cry-5"));
    assert.ok(slugs.includes("cities-skylines-2"));
    assert.ok(slugs.includes("age-of-mythology-retold"));
    assert.ok(slugs.includes("total-war-warhammer-2"));
    assert.ok(slugs.includes("balatro"));
    assert.ok(slugs.includes("content-warning"));
    assert.ok(slugs.includes("mount-and-blade-2-bannerlord"));
    assert.ok(slugs.includes("brotato"));
    assert.ok(slugs.includes("total-war-rome-2"));
    assert.ok(slugs.includes("counter-strike-source"));
    assert.ok(slugs.includes("age-of-empires-1-de"));
    assert.ok(slugs.includes("farming-simulator-22"));
    assert.ok(slugs.includes("company-of-heroes-2"));
    assert.ok(slugs.includes("bloons-td-6"));
    assert.ok(slugs.includes("the-witcher-2"));
    assert.ok(slugs.includes("payday-3"));
    assert.ok(slugs.includes("hitman-world-of-assassination"));
    assert.ok(slugs.includes("doom-1993"));
    assert.ok(slugs.includes("wallpaper-engine"));
    assert.ok(slugs.includes("batman-arkham-city"));
    assert.ok(slugs.includes("far-cry-5"));
    assert.ok(slugs.includes("fall-guys"));
    assert.ok(slugs.includes("far-cry-3"));
    assert.ok(slugs.includes("metro-2033-redux"));
    assert.ok(slugs.includes("tomb-raider-2013"));
    assert.ok(slugs.includes("rise-of-the-tomb-raider"));
    assert.ok(slugs.includes("ghostrunner"));
    assert.ok(slugs.includes("hotline-miami"));
    assert.ok(slugs.includes("bioshock-remastered"));
    assert.ok(slugs.includes("bioshock-infinite"));
    assert.ok(slugs.includes("dishonored"));
    assert.ok(slugs.includes("helldivers-2"));
    assert.ok(slugs.includes("marvel-rivals"));
    assert.ok(slugs.includes("powerwash-simulator"));
    assert.ok(slugs.includes("enshrouded"));
    assert.ok(slugs.includes("oxygen-not-included"));
    assert.ok(slugs.includes("beamng-drive"));
    assert.ok(slugs.includes("ready-or-not"));
    assert.ok(slugs.includes("planet-zoo"));
    assert.ok(slugs.includes("two-point-hospital"));
    assert.ok(slugs.includes("the-last-of-us-part-1"));
    assert.ok(slugs.includes("nioh-2"));
    assert.ok(slugs.includes("forza-horizon-5"));
    assert.ok(slugs.includes("against-the-storm"));
    assert.ok(slugs.includes("sniper-elite-5"));
    assert.ok(slugs.includes("atomic-heart"));
    assert.ok(slugs.includes("human-fall-flat"));
    assert.ok(slugs.includes("overcooked-2"));
    assert.ok(slugs.includes("warhammer-vermintide-2"));
    assert.ok(slugs.includes("20-minutes-till-dawn"));
    assert.ok(slugs.includes("party-animals"));
    assert.ok(slugs.includes("gunfire-reborn"));
    assert.ok(slugs.includes("yakuza-like-a-dragon"));
    assert.ok(slugs.includes("mortal-kombat-11"));
    assert.ok(slugs.includes("sleeping-dogs"));
    assert.ok(slugs.includes("watch-dogs-2"));
    assert.ok(slugs.includes("mafia-2-definitive-edition"));
    assert.ok(slugs.includes("mortal-kombat-1"));
    assert.ok(slugs.includes("mafia-definitive-edition"));
    assert.ok(slugs.includes("dirt-rally-2"));
    assert.ok(slugs.includes("warhammer-40k-boltgun"));
    assert.ok(slugs.includes("football-manager-2024"));
    assert.ok(slugs.includes("watch-dogs-legion"));
    assert.ok(slugs.includes("f1-24"));
    assert.ok(slugs.includes("metro-exodus"));
    assert.ok(slugs.includes("ea-sports-fc-24"));
    assert.ok(slugs.includes("devour"));
    assert.ok(slugs.includes("mad-max"));
    assert.ok(slugs.includes("just-cause-4"));
    assert.ok(slugs.includes("rage-2"));
    assert.ok(slugs.includes("barotrauma"));
    assert.ok(slugs.includes("dinkum"));
    assert.ok(slugs.includes("warhammer-40k-darktide"));
    assert.ok(slugs.includes("insurgency-sandstorm"));
    assert.ok(slugs.includes("they-are-billions"));
    assert.ok(slugs.includes("prison-architect"));
    assert.ok(slugs.includes("shadow-of-mordor"));
    assert.ok(slugs.includes("shadow-of-war"));
    assert.ok(slugs.includes("wolfenstein-2"));
    assert.ok(slugs.includes("backpack-battles"));
    assert.ok(slugs.includes("deep-rock-galactic-survivor"));
    assert.ok(slugs.includes("sun-haven"));
    assert.ok(slugs.includes("persona-5-royal"));
    assert.ok(slugs.includes("dead-space-2023"));
    assert.ok(slugs.includes("like-a-dragon-ishin"));
    assert.ok(slugs.includes("hades-2"));
    assert.ok(slugs.includes("path-of-exile"));
    assert.ok(slugs.includes("luck-be-a-landlord"));
    assert.ok(slugs.includes("manor-lords"));
    assert.ok(slugs.includes("once-human"));
    assert.ok(slugs.includes("snowrunner"));
    assert.ok(slugs.includes("the-first-descendant"));
    assert.ok(slugs.includes("plateup"));
    assert.ok(slugs.includes("nightingale"));
    assert.ok(slugs.includes("marvels-midnight-suns"));
    assert.ok(slugs.includes("the-planet-crafter"));
    assert.ok(slugs.includes("peglin"));
    assert.ok(slugs.includes("victoria-3"));
    assert.ok(slugs.includes("surviving-mars"));
    assert.ok(slugs.includes("fields-of-mistria"));
    assert.ok(slugs.includes("europa-universalis-4"));
    assert.ok(slugs.includes("necesse"));
    assert.ok(slugs.includes("the-riftbreaker"));
    assert.ok(slugs.includes("mass-effect-legendary-edition"));
    assert.ok(slugs.includes("dragon-age-inquisition"));
    assert.ok(slugs.includes("tropico-6"));
    assert.ok(slugs.includes("battlefield-1"));
    assert.ok(slugs.includes("chivalry-2"));
    assert.ok(slugs.includes("it-takes-two"));
    assert.ok(slugs.includes("rainbow-six-siege"));
    assert.ok(slugs.includes("for-honor"));
    assert.ok(slugs.includes("shovel-knight"));
    assert.ok(slugs.includes("insurgency"));
    assert.ok(slugs.includes("trombone-champ"));
    assert.ok(slugs.includes("chivalry-medieval-warfare"));
    assert.ok(slugs.includes("warframe"));
    assert.ok(slugs.includes("monster-train"));
    assert.ok(slugs.includes("wildfrost"));
    assert.ok(slugs.includes("killing-floor-2"));
    assert.ok(slugs.includes("risk-of-rain"));
    assert.ok(slugs.includes("muck"));
    assert.ok(slugs.includes("techtonica"));
    assert.ok(slugs.includes("banished"));
    assert.ok(slugs.includes("going-medieval"));
    assert.ok(slugs.includes("scp-secret-laboratory"));
    assert.ok(slugs.includes("nidhogg"));
    assert.ok(slugs.includes("unrailed"));
    assert.ok(slugs.includes("towerfall"));
    assert.ok(slugs.includes("ultimate-chicken-horse"));
    assert.ok(slugs.includes("peak"));
    assert.ok(slugs.includes("streets-of-rage-4"));
    assert.ok(slugs.includes("dawn-of-man"));
    assert.ok(slugs.includes("songs-of-syx"));
    assert.ok(slugs.includes("risk-global-domination"));
    assert.ok(slugs.includes("backpack-hero"));
    assert.ok(slugs.includes("duck-game"));
    assert.ok(slugs.includes("speedrunners"));
    assert.ok(slugs.includes("people-playground"));
    assert.ok(slugs.includes("world-of-goo"));
    assert.ok(slugs.includes("human-resource-machine"));
    assert.ok(slugs.includes("7-billion-humans"));
    assert.ok(slugs.includes("besiege"));
    assert.ok(slugs.includes("craft-the-world"));
    assert.ok(slugs.includes("automation-empire"));
    assert.ok(slugs.includes("wobbly-life"));
    assert.ok(slugs.includes("bad-north"));
    assert.ok(slugs.includes("autonauts"));
    assert.ok(slugs.includes("colony-survival"));
    assert.ok(slugs.includes("wingspan"));
    assert.ok(slugs.includes("sunless-sea"));
    assert.ok(slugs.includes("everspace-2"));
    assert.ok(slugs.includes("wizard-of-legend"));
    assert.ok(slugs.includes("rivals-of-aether"));
    assert.ok(slugs.includes("slime-rancher-2"));
    assert.ok(slugs.includes("kingdom-two-crowns"));
    assert.ok(slugs.includes("total-war-shogun-2"));
    assert.ok(slugs.includes("endless-space-2"));
    assert.ok(slugs.includes("pillars-of-eternity"));
    assert.ok(slugs.includes("age-of-wonders-3"));
    assert.ok(slugs.includes("battle-brothers"));
    assert.ok(slugs.includes("total-war-warhammer"));
    assert.ok(slugs.includes("wartales"));
    assert.ok(slugs.includes("northgard"));
    assert.ok(slugs.includes("subnautica"));
    assert.ok(slugs.includes("subnautica-below-zero"));
    assert.ok(slugs.includes("prey-2017"));
    assert.ok(slugs.includes("firewatch"));
    assert.ok(slugs.includes("a-way-out"));
    assert.ok(slugs.includes("titanfall-2"));
    assert.ok(slugs.includes("titan-quest"));
    assert.ok(slugs.includes("days-gone"));
    assert.ok(slugs.includes("space-marine-2"));
    assert.ok(slugs.includes("batman-arkham-asylum"));
    assert.ok(slugs.includes("sniper-elite-4"));
    assert.ok(slugs.includes("street-fighter-6"));
    assert.ok(slugs.includes("wolfenstein-the-old-blood"));
    assert.ok(slugs.includes("sniper-elite-3"));
    assert.ok(slugs.includes("just-cause-2"));
    assert.ok(slugs.includes("metal-gear-rising-revengeance"));
    assert.ok(slugs.includes("dmc-devil-may-cry"));
    assert.ok(slugs.includes("sunset-overdrive"));
    assert.ok(slugs.includes("dead-rising-3"));
    assert.ok(slugs.includes("devil-may-cry-hd-collection"));
    assert.ok(slugs.includes("dead-island-definitive-edition"));
    assert.ok(slugs.includes("alien-isolation"));
    assert.ok(slugs.includes("bayonetta"));
    assert.ok(slugs.includes("serious-sam-4"));
    assert.ok(slugs.includes("saints-row-the-third"));
    assert.ok(slugs.includes("back-4-blood"));
    assert.ok(slugs.includes("world-war-z"));
    assert.ok(slugs.includes("fallout-76"));
    assert.ok(slugs.includes("red-faction-guerrilla-remastered"));
    assert.ok(slugs.includes("metal-hellsinger"));
    assert.ok(slugs.includes("mount-and-blade-warband"));
    assert.ok(slugs.includes("railway-empire"));
    assert.ok(slugs.includes("wildermyth"));
    assert.ok(slugs.includes("trine-2"));
    assert.ok(slugs.includes("trine-4"));
    assert.ok(slugs.includes("trine-5"));
    assert.ok(slugs.includes("journey"));
    assert.ok(slugs.includes("brothers-a-tale-of-two-sons"));
    assert.ok(slugs.includes("psychonauts"));
    assert.ok(slugs.includes("rayman-legends"));
    assert.ok(slugs.includes("cyber-shadow"));
    assert.ok(slugs.includes("huntdown"));
    assert.ok(slugs.includes("company-of-heroes-3"));
    assert.ok(slugs.includes("transport-fever-2"));
    assert.ok(slugs.includes("yooka-laylee"));
    assert.ok(slugs.includes("mini-metro"));
    assert.ok(slugs.includes("islanders"));
    assert.ok(slugs.includes("unravel-two"));
    assert.ok(slugs.includes("helldivers-dive-harder"));
    assert.ok(slugs.includes("shadow-warrior-3"));
    assert.ok(slugs.includes("bright-memory-infinite"));
    assert.ok(slugs.includes("project-highrise"));
    assert.ok(slugs.includes("car-mechanic-simulator-2021"));
    assert.ok(slugs.includes("viscera-cleanup-detail"));
    assert.ok(slugs.includes("dirt-4"));
    assert.ok(slugs.includes("forza-motorsport-2023"));
    assert.ok(slugs.includes("the-crew-2"));
    assert.ok(slugs.includes("mudrunner"));
    assert.ok(slugs.includes("my-summer-car"));
    assert.ok(slugs.includes("nova-drift"));
    assert.ok(slugs.includes("killing-floor"));
    assert.ok(slugs.includes("book-of-demons"));
    assert.ok(slugs.includes("aliens-fireteam-elite"));
    assert.ok(slugs.includes("mortal-kombat-x"));
    assert.ok(slugs.includes("skullgirls"));
    assert.ok(slugs.includes("brawlhalla"));
    assert.ok(slugs.includes("heroes-of-hammerwatch"));
    assert.ok(slugs.includes("hammerwatch"));
    assert.ok(slugs.includes("crawl"));
    assert.ok(slugs.includes("kingdom-new-lands"));
    assert.ok(slugs.includes("thronefall"));
    assert.ok(slugs.includes("ratropolis"));
    assert.ok(slugs.includes("plants-vs-zombies-goty"));
    assert.ok(slugs.includes("sanctum-2"));
    assert.ok(slugs.includes("pvz-battle-for-neighborville"));
    assert.ok(slugs.includes("total-war-attila"));
    assert.ok(slugs.includes("total-war-napoleon"));
    assert.ok(slugs.includes("total-war-empire"));
    assert.ok(slugs.includes("humankind"));
    assert.ok(slugs.includes("total-war-pharaoh"));
    assert.ok(slugs.includes("forager"));
    assert.ok(slugs.includes("grand-theft-auto-iv"));
    assert.ok(slugs.includes("skyrim"));
    assert.ok(slugs.includes("dark-souls-remastered"));
    assert.ok(slugs.includes("max-payne-3"));
    assert.ok(slugs.includes("nioh-complete-edition"));
    assert.ok(slugs.includes("doom-3"));
    assert.ok(slugs.includes("alan-wake"));
    assert.ok(slugs.includes("spec-ops-the-line"));
    assert.ok(slugs.includes("sniper-elite-v2"));
    assert.ok(slugs.includes("half-life-2-episode-one"));
    assert.ok(slugs.includes("half-life-2-episode-two"));
    assert.ok(slugs.includes("trine-enchanted-edition"));
    assert.ok(slugs.includes("space-engineers"));
    assert.ok(slugs.includes("conan-exiles"));
    assert.ok(slugs.includes("jurassic-world-evolution"));
    assert.ok(slugs.includes("watch-dogs"));
    assert.ok(slugs.includes("far-cry-4"));
    assert.ok(slugs.includes("the-division"));
    assert.ok(slugs.includes("ghost-recon-wildlands"));
    assert.ok(slugs.includes("the-walking-dead"));
    assert.ok(slugs.includes("project-cars-2"));
    assert.ok(slugs.includes("lego-marvel-super-heroes"));
    assert.ok(slugs.includes("need-for-speed-payback"));
    assert.ok(slugs.includes("grid-2019"));
    assert.ok(slugs.includes("burnout-paradise-remastered"));
    assert.ok(slugs.includes("castle-crashers"));
    assert.ok(slugs.includes("trials-fusion"));
    assert.ok(slugs.includes("grid-autosport"));
    assert.ok(slugs.includes("f1-2020"));
    assert.ok(slugs.includes("art-of-rally"));
    assert.ok(slugs.includes("dragons-dogma-dark-arisen"));
    assert.ok(slugs.includes("command-and-conquer-remastered"));
    assert.ok(slugs.includes("homeworld-remastered"));
    assert.ok(slugs.includes("life-is-strange"));
    assert.ok(slugs.includes("the-wolf-among-us"));
    assert.ok(slugs.includes("tales-from-the-borderlands"));
    assert.ok(slugs.includes("game-of-thrones-telltale"));
    assert.ok(slugs.includes("life-is-strange-before-the-storm"));
    assert.ok(slugs.includes("the-walking-dead-season-two"));
    assert.ok(slugs.includes("civilization-beyond-earth"));
    assert.ok(slugs.includes("galactic-civilizations-3"));
    assert.ok(slugs.includes("age-of-wonders-planetfall"));
    assert.ok(slugs.includes("forza-horizon-4"));
    assert.ok(slugs.includes("master-of-orion"));
    assert.ok(slugs.includes("ashes-of-the-singularity-escalation"));
    assert.ok(slugs.includes("final-fantasy-vii"));
    assert.ok(slugs.includes("final-fantasy-ix"));
    assert.ok(slugs.includes("final-fantasy-xii-zodiac-age"));
    assert.ok(slugs.includes("dragon-quest-xi"));
    assert.ok(slugs.includes("octopath-traveler"));
    assert.ok(slugs.includes("final-fantasy-x-x2-hd"));
    assert.ok(slugs.includes("final-fantasy-xiii"));
    assert.ok(slugs.includes("chrono-trigger"));
    assert.ok(slugs.includes("dirt-rally"));
    assert.ok(slugs.includes("sonic-mania"));
    assert.ok(slugs.includes("sonic-adventure-2"));
    assert.ok(slugs.includes("sonic-frontiers"));
    assert.ok(slugs.includes("dawn-of-war-2"));
    assert.ok(slugs.includes("songs-of-conquest"));
    assert.ok(slugs.includes("mad-games-tycoon-2"));
    assert.ok(slugs.includes("mgs-v-ground-zeroes"));
    assert.ok(slugs.includes("splinter-cell-blacklist"));
    assert.ok(slugs.includes("rise-of-nations-extended"));
    assert.ok(slugs.includes("anno-2205"));
    assert.ok(slugs.includes("ark-survival-ascended"));
    assert.ok(slugs.includes("steel-division-2"));
    assert.ok(slugs.includes("cossacks-3"));
    assert.ok(slugs.includes("grey-goo"));
    assert.ok(slugs.includes("space-hulk-deathwing-enhanced"));
    assert.ok(slugs.includes("kingdom-rush"));
    assert.ok(slugs.includes("defense-grid-2"));
    assert.ok(slugs.includes("planetary-annihilation-titans"));
    assert.ok(slugs.includes("tooth-and-tail"));
    assert.ok(slugs.includes("dungeon-of-the-endless"));
    assert.ok(slugs.includes("unity-of-command-2"));
    assert.ok(slugs.includes("crusader-kings-2"));
    assert.ok(slugs.includes("imperator-rome"));
    assert.ok(slugs.includes("cliff-empire"));
    assert.ok(slugs.includes("distant-worlds-universe"));
    assert.ok(slugs.includes("spacechem"));
    assert.ok(slugs.includes("exapunks"));
    assert.ok(slugs.includes("men-of-war-assault-squad-2"));
    assert.ok(slugs.includes("gwent"));
    assert.ok(slugs.includes("lego-star-wars-the-force-awakens"));
    assert.ok(slugs.includes("apex-legends"));
    assert.ok(slugs.includes("halo-the-master-chief-collection"));
    assert.ok(slugs.includes("attack-on-titan-2"));
    assert.ok(slugs.includes("jojos-bizarre-adventure-all-star-battle-r"));
    assert.ok(slugs.includes("ea-sports-fc-25"));
    assert.ok(slugs.includes("nba-2k24"));
    assert.ok(slugs.includes("fifa-23"));
    assert.ok(slugs.includes("star-wars-battlefront"));
    assert.ok(slugs.includes("star-wars-outlaws"));
    assert.ok(slugs.includes("the-walking-dead-telltale-definitive-series"));
    assert.ok(slugs.includes("battlefield-2042"));
    assert.ok(slugs.includes("battlefield-5"));
    assert.ok(slugs.includes("naruto-shippuden-ultimate-ninja-storm-4"));
    assert.ok(slugs.includes("assassins-creed-4-black-flag"));
    assert.ok(slugs.includes("assassins-creed-unity"));
    assert.ok(slugs.includes("assassins-creed-syndicate"));
    assert.ok(slugs.includes("ea-sports-fc-26"));
    assert.ok(slugs.includes("football-manager-2021"));
    assert.ok(slugs.includes("lets-build-a-zoo"));
    assert.ok(slugs.includes("ultra-street-fighter-4"));
    assert.ok(slugs.includes("street-fighter-5"));
    assert.ok(slugs.includes("injustice-gods-among-us"));
    assert.ok(slugs.includes("resident-evil-5"));
    assert.ok(slugs.includes("resident-evil-7"));
    assert.ok(slugs.includes("resident-evil-revelations"));
    assert.ok(slugs.includes("bioshock-2"));
    assert.ok(slugs.includes("world-of-warships"));
    assert.ok(slugs.includes("the-banner-saga"));
    assert.ok(slugs.includes("sins-of-a-solar-empire-rebellion"));
    assert.ok(slugs.includes("payday-the-heist"));
    assert.ok(slugs.includes("adventure-capitalist"));
    assert.ok(slugs.includes("yu-gi-oh-master-duel"));
    assert.ok(slugs.includes("yu-gi-oh-duel-links"));
    assert.ok(slugs.includes("alien-swarm"));
    assert.ok(slugs.includes("spelunky"));
    assert.ok(slugs.includes("dungeon-defenders"));
    assert.ok(slugs.includes("killer-is-dead"));
    assert.ok(slugs.includes("sniper-elite-nazi-zombie-army"));
    assert.ok(slugs.includes("robocraft"));
    assert.ok(slugs.includes("order-of-battle-world-war-ii"));
    assert.ok(slugs.includes("kingdom-classic"));
    assert.ok(slugs.includes("orion-prelude"));
    assert.ok(slugs.includes("airmech-strike"));
    assert.ok(slugs.includes("call-of-duty-modern-warfare-2"));
    assert.ok(slugs.includes("call-of-duty-black-ops-2"));
    assert.ok(slugs.includes("prototype-2"));
    assert.ok(slugs.includes("call-of-duty-modern-warfare-2019"));
    assert.ok(slugs.includes("carx-drift-racing-online"));
    assert.ok(slugs.includes("fistful-of-frags"));
    assert.ok(slugs.includes("blood-and-bacon"));
    assert.ok(slugs.includes("dirt-3-complete-edition"));
    assert.ok(slugs.includes("trove"));
    assert.ok(slugs.includes("monday-night-combat"));
    assert.ok(slugs.includes("red-faction-armageddon"));
    assert.ok(slugs.includes("mass-effect-3"));
    assert.ok(slugs.includes("zombie-army-trilogy"));
    assert.ok(slugs.includes("atom-zombie-smasher"));
    assert.ok(slugs.includes("frozen-synapse"));
    assert.ok(slugs.includes("ares-extinction-agenda"));
    assert.ok(slugs.includes("universe-sandbox-legacy"));
    assert.ok(slugs.includes("intrusion-2"));
    assert.ok(slugs.includes("doom-plus-doom-ii"));
    assert.ok(slugs.includes("aliens-vs-predator-2010"));
    assert.ok(slugs.includes("worms-reloaded"));
    assert.ok(slugs.includes("worms-wmd"));
    assert.ok(slugs.includes("demolition-inc"));
    assert.ok(slugs.includes("savage-lands"));
    assert.ok(slugs.includes("magicka"));
    assert.ok(slugs.includes("painkiller-hell-and-damnation"));
    assert.ok(slugs.includes("offspring-fling"));
    assert.ok(slugs.includes("gotham-city-impostors"));
    assert.ok(slugs.includes("closure"));
    assert.ok(slugs.includes("sonic-cd"));
    assert.ok(slugs.includes("the-lego-movie-videogame"));
    assert.ok(slugs.includes("lego-jurassic-world"));
    assert.ok(slugs.includes("final-fantasy-v"));
    assert.ok(slugs.includes("farming-simulator-19"));
    assert.ok(slugs.includes("farming-simulator-15"));
    assert.ok(slugs.includes("bloody-good-time"));
    assert.ok(slugs.includes("nba-2k23"));
    assert.ok(slugs.includes("dead-rising-2"));
    assert.ok(slugs.includes("worms-ultimate-mayhem"));
    assert.ok(slugs.includes("metro-last-light-redux"));
    assert.ok(slugs.includes("call-of-duty-black-ops"));
    assert.ok(slugs.includes("tropico-5"));
    assert.ok(slugs.includes("saints-row-iv"));
    assert.ok(slugs.includes("just-cause-3"));
    assert.ok(slugs.includes("batman-arkham-origins"));
    assert.ok(slugs.includes("xcom-2"));
    assert.ok(slugs.includes("borderlands-game-of-the-year"));
    assert.ok(slugs.includes("assassins-creed-3"));
    assert.ok(slugs.includes("assassins-creed-rogue"));
    assert.ok(slugs.includes("assassins-creed-revelations"));
    assert.ok(slugs.includes("far-cry-primal"));
    assert.ok(slugs.includes("homefront"));
    assert.ok(slugs.includes("serious-sam-3-bfe"));
    assert.ok(slugs.includes("rage"));
    assert.ok(slugs.includes("serious-sam-hd-tfe"));
    assert.ok(slugs.includes("serious-sam-hd-tse"));
    assert.ok(slugs.includes("verdun"));
    assert.ok(slugs.includes("farming-simulator-17"));
    assert.ok(slugs.includes("project-cars"));
    assert.ok(slugs.includes("legend-of-grimrock"));
    assert.ok(slugs.includes("legend-of-grimrock-2"));
    assert.ok(slugs.includes("underrail"));
    assert.ok(slugs.includes("grid-2"));
    assert.ok(slugs.includes("panzer-corps-2"));
    assert.ok(slugs.includes("warhammer-40k-mechanicus"));
    assert.ok(slugs.includes("rise-of-the-triad"));
    assert.ok(slugs.includes("downwell"));
    assert.ok(slugs.includes("costume-quest"));
    assert.ok(slugs.includes("mafia-2-classic"));
    assert.ok(slugs.includes("dayz"));
    assert.ok(slugs.includes("battleborn"));
    assert.ok(slugs.includes("metro-2033"));
    assert.ok(slugs.includes("dusk"));
    assert.ok(slugs.includes("serious-sam-2"));
    assert.ok(slugs.includes("microsoft-flight-simulator-2020"));
    assert.ok(slugs.includes("deadly-premonition-directors-cut"));
    assert.ok(slugs.includes("hyperdimension-neptunia-rebirth1"));
    assert.ok(slugs.includes("plague-inc-evolved"));
    assert.ok(slugs.includes("keep-talking-and-nobody-explodes"));
    assert.ok(slugs.includes("beat-hazard"));
    assert.ok(slugs.includes("fallout-shelter"));
    assert.ok(slugs.includes("fallen-enchantress-legendary-heroes"));
    assert.ok(slugs.includes("door-kickers"));
    assert.ok(slugs.includes("sid-meiers-starships"));
    assert.ok(slugs.includes("settlement-survival"));
    assert.ok(slugs.includes("quake-live"));

});

test("getPlannerData('debug-game') returns null, not the internal sandbox data", () => {

    assert.strictEqual(getPlannerData("debug-game"), null);

});

// Phase 65: loadCatalog() used to build its cache as a plain {} literal,
// so catalog[slug] resolved through the JS prototype chain for slugs that
// collide with a real Object.prototype member - a caller could hit
// GET /api/games/__proto__ (or /constructor, /toString, /hasOwnProperty,
// /valueOf, /isPrototypeOf) and get back a truthy, non-null "planner
// entry" (Object.prototype itself, or the Object constructor function)
// instead of the expected null/404. Fixed by building the cache with
// Object.create(null) instead.
test("getPlannerData never resolves a prototype-chain property name to a fake catalog entry", () => {

    for (const slug of ["__proto__", "constructor", "toString", "hasOwnProperty", "valueOf", "isPrototypeOf"]) {

        assert.strictEqual(getPlannerData(slug), null, `getPlannerData("${slug}") must return null, not a prototype-chain value`);

    }

});


test("getPlannerData returns real data for a non-internal catalog slug", () => {

    const data = getPlannerData("hades");

    assert.ok(data, "expected real planner data for a known non-internal game");
    assert.strictEqual(data.name, "Hades");

});

test("getPlannerDataByAppId(-1) (the internal fixture's steamAppId) returns null", () => {

    assert.strictEqual(getPlannerDataByAppId(-1), null);

});

// Phase 40: src/data/games/portal-2.json went from a 3-entry stub to all 51
// of Portal 2's real Steam achievements (verified against the live
// ISteamUserStats/GetSchemaForGame/v2 response for appid 620 - see
// PHASE_40_AUDIT.md). Before this, a player who finished the 3 curated
// achievements got told "100% completion" by getRecommendedAchievement()
// (src/utils/planner/recommendation/recommendation.js) while ~48 real Steam
// achievements remained. These tests exist to catch that regressing back to
// a partial set - through getPlannerData("portal-2"), the same read path
// every consumer (routes/games.js, gameMapper.js) uses.

test("getPlannerData('portal-2') returns the complete 51-achievement curated set, not the old 3-entry stub", () => {

    const data = getPlannerData("portal-2");

    assert.ok(data, "expected real planner data for portal-2");
    assert.strictEqual(
        data.achievements.length,
        51,
        "Portal 2 has 51 real Steam achievements (verified live) - any count below that silently reintroduces the false '100% completion' state in getRecommendedAchievement()"
    );

});

test("getPlannerData('portal-2') achievements have no duplicate id or apiname", () => {

    const { achievements } = getPlannerData("portal-2");

    const ids = achievements.map(a => a.id);
    const apinames = achievements.map(a => a.apiname);

    assert.strictEqual(new Set(ids).size, ids.length, "duplicate achievement id found in portal-2.json");
    assert.strictEqual(new Set(apinames).size, apinames.length, "duplicate achievement apiname found in portal-2.json");

});

test("getPlannerData('portal-2') achievements all carry well-formed Steam-sourced and curatorial fields", () => {

    const { achievements } = getPlannerData("portal-2");

    for (const achievement of achievements) {

        // Steam-sourced fields (copied verbatim from the live schema).
        assert.strictEqual(typeof achievement.apiname, "string");
        assert.ok(achievement.apiname.length > 0, `achievement ${achievement.id} has an empty apiname`);
        assert.strictEqual(typeof achievement.name, "string");
        assert.ok(achievement.name.length > 0, `achievement ${achievement.id} has an empty name`);
        assert.strictEqual(typeof achievement.description, "string");
        assert.ok(achievement.description.length > 0, `achievement ${achievement.id} has an empty description`);

        // Curatorial fields (assigned, not Steam-sourced).
        assert.ok(
            Number.isInteger(achievement.difficulty) && achievement.difficulty >= 1 && achievement.difficulty <= 5,
            `achievement ${achievement.id} has an out-of-range difficulty: ${achievement.difficulty}`
        );
        assert.strictEqual(typeof achievement.missable, "boolean");
        assert.ok(
            Number.isInteger(achievement.estimatedTime) && achievement.estimatedTime > 0,
            `achievement ${achievement.id} has an invalid estimatedTime: ${achievement.estimatedTime}`
        );

    }

});

test("getPlannerDataByAppId(620) resolves to the portal-2 slug with the same complete achievement set", () => {

    const result = getPlannerDataByAppId(620);

    assert.ok(result, "expected a planner entry for Portal 2's appid");
    assert.strictEqual(result.slug, "portal-2");
    assert.strictEqual(result.data.achievements.length, 51);

});

// Phase 41: src/data/games/hollow-knight.json went from an empty
// achievements[] to all 63 of Hollow Knight's real Steam achievements
// (verified against the live ISteamUserStats/GetSchemaForGame/v2 response
// for appid 367520 - see PHASE_41_AUDIT.md). 24 of those 63 are
// Steam-hidden, and Steam's schema never returns a description for a
// hidden achievement (confirmed live, not a fetch failure) - those 24 use
// the same "Hidden achievement" fallback text
// src/components/steam-achievement-card/steam-achievement-card.js already
// falls back to for the Steam-view side, rather than an invented spoiler
// description or a blank/null field (which would render literally as
// "null"/"undefined" via escapeHtml - see recommended-achievement.js).

const HOLLOW_KNIGHT_HIDDEN_APINAMES = [
    "DREAM_FK",
    "HORNET_2",
    "DREAM_BROKEN_VESSEL",
    "COLLECTOR",
    "ZOTE",
    "NAILSMITH_KILL",
    "NAILSMITH_SPARE",
    "QUIRREL_EPILOGUE",
    "ENDING_A",
    "ENDING_B",
    "ENDING_C",
    "VOID",
    "MR_MUSHROOM",
    "DREAM_SOUL_MASTER_DEFEAT",
    "WHITE_DEFENDER",
    "GREY_PRINCE",
    "GRIMM",
    "NIGHTMARE_GRIMM",
    "BANISHMENT",
    "PANTHEON1",
    "PANTHEON2",
    "PANTHEON3",
    "PANTHEON4",
    "ENDINGD"
];

test("getPlannerData('hollow-knight') returns the complete 63-achievement curated set, not an empty planner", () => {

    const data = getPlannerData("hollow-knight");

    assert.ok(data, "expected real planner data for hollow-knight");
    assert.strictEqual(
        data.achievements.length,
        63,
        "Hollow Knight has 63 real Steam achievements (verified live) - the Session Planner and Recommended Achievement are inert without the complete set"
    );

});

test("getPlannerData('hollow-knight') achievements have no duplicate id or apiname", () => {

    const { achievements } = getPlannerData("hollow-knight");

    const ids = achievements.map(a => a.id);
    const apinames = achievements.map(a => a.apiname);

    assert.strictEqual(new Set(ids).size, ids.length, "duplicate achievement id found in hollow-knight.json");
    assert.strictEqual(new Set(apinames).size, apinames.length, "duplicate achievement apiname found in hollow-knight.json");

});

test("getPlannerData('hollow-knight') achievements all carry well-formed Steam-sourced and curatorial fields", () => {

    const { achievements } = getPlannerData("hollow-knight");

    for (const achievement of achievements) {

        // Steam-sourced fields (apiname/name verbatim; description verbatim
        // for visible achievements, or the approved hidden-achievement
        // fallback - either way, always a real non-empty string, never
        // null/undefined/empty, so it can never render as literal
        // "null"/"undefined" text).
        assert.strictEqual(typeof achievement.apiname, "string");
        assert.ok(achievement.apiname.length > 0, `achievement ${achievement.id} has an empty apiname`);
        assert.strictEqual(typeof achievement.name, "string");
        assert.ok(achievement.name.length > 0, `achievement ${achievement.id} has an empty name`);
        assert.strictEqual(typeof achievement.description, "string");
        assert.ok(achievement.description.length > 0, `achievement ${achievement.id} has an empty description`);

        // Curatorial fields (assigned, not Steam-sourced).
        assert.ok(
            Number.isInteger(achievement.difficulty) && achievement.difficulty >= 1 && achievement.difficulty <= 5,
            `achievement ${achievement.id} has an out-of-range difficulty: ${achievement.difficulty}`
        );
        assert.strictEqual(typeof achievement.missable, "boolean");
        assert.ok(
            Number.isInteger(achievement.estimatedTime) && achievement.estimatedTime > 0,
            `achievement ${achievement.id} has an invalid estimatedTime: ${achievement.estimatedTime}`
        );

    }

});

test("exactly the 24 known Steam-hidden Hollow Knight achievements use the 'Hidden achievement' fallback description, and no others do", () => {

    const { achievements } = getPlannerData("hollow-knight");

    const actualHiddenApinames = achievements
        .filter(a => a.description === "Hidden achievement")
        .map(a => a.apiname)
        .sort();

    assert.deepStrictEqual(
        actualHiddenApinames,
        [...HOLLOW_KNIGHT_HIDDEN_APINAMES].sort(),
        "the set of achievements using the hidden-achievement fallback must exactly match Steam's live hidden flag - no more, no fewer"
    );

    const visibleAchievements = achievements.filter(
        a => !HOLLOW_KNIGHT_HIDDEN_APINAMES.includes(a.apiname)
    );

    for (const achievement of visibleAchievements) {

        assert.notStrictEqual(
            achievement.description,
            "Hidden achievement",
            `${achievement.apiname} is not one of the known-hidden achievements but has the hidden fallback description`
        );

    }

});

test("getPlannerDataByAppId(367520) resolves to the hollow-knight slug with the same complete achievement set", () => {

    const result = getPlannerDataByAppId(367520);

    assert.ok(result, "expected a planner entry for Hollow Knight's appid");
    assert.strictEqual(result.slug, "hollow-knight");
    assert.strictEqual(result.data.achievements.length, 63);

});

// Phase 72: src/data/games/celeste.json and inside.json add two new
// curated catalog games (see PHASE_72_AUDIT.md and celesteAchievementData.
// test.js/insideAchievementData.test.js for the full per-achievement
// coverage) - these two mirror the existing appid-resolution smoke tests
// above for portal-2/hollow-knight.

test("getPlannerDataByAppId(504230) resolves to the celeste slug with the same complete achievement set", () => {

    const result = getPlannerDataByAppId(504230);

    assert.ok(result, "expected a planner entry for Celeste's appid");
    assert.strictEqual(result.slug, "celeste");
    assert.strictEqual(result.data.achievements.length, 32);

});

test("getPlannerDataByAppId(304430) resolves to the inside slug with the same complete achievement set", () => {

    const result = getPlannerDataByAppId(304430);

    assert.ok(result, "expected a planner entry for INSIDE's appid");
    assert.strictEqual(result.slug, "inside");
    assert.strictEqual(result.data.achievements.length, 14);

});
