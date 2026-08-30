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
    assert.strictEqual(GAME_GUIDES.length, 424);

    assert.deepStrictEqual(
        GAME_GUIDES.map(guide => guide.gameSlug).sort(),
        ["20-minutes-till-dawn", "7-billion-humans", "7-days-to-die", "a-hat-in-time", "a-little-to-the-left", "a-short-hike", "a-way-out", "against-the-storm", "age-of-empires-1-de", "age-of-empires-2-de", "age-of-empires-4", "age-of-mythology-retold", "age-of-wonders-3", "age-of-wonders-planetfall", "alan-wake", "alien-isolation", "aliens-fireteam-elite", "ark-survival-evolved", "art-of-rally", "ashes-of-the-singularity-escalation", "astral-ascent", "atomic-heart", "automation-empire", "autonauts", "baba-is-you", "back-4-blood", "backpack-battles", "backpack-hero", "bad-north", "balatro", "baldurs-gate-3", "banished", "barotrauma", "bastion", "batman-arkham-asylum", "batman-arkham-city", "battle-brothers", "battlefield-1", "bayonetta", "beamng-drive", "besiege", "bioshock-infinite", "bioshock-remastered", "bloons-td-6", "book-of-demons", "borderlands-2", "braid", "brawlhalla", "bright-memory-infinite", "brotato", "brothers-a-tale-of-two-sons", "burnout-paradise-remastered", "car-mechanic-simulator-2021", "castle-crashers", "celeste", "chained-echoes", "chicory", "chivalry-2", "chivalry-medieval-warfare", "cities-skylines", "cities-skylines-2", "civilization-5", "civilization-beyond-earth", "civilization-vi", "colony-survival", "command-and-conquer-remastered", "company-of-heroes-2", "company-of-heroes-3", "conan-exiles", "content-warning", "counter-strike-source", "craft-the-world", "crawl", "crusader-kings-3", "crypt-of-the-necrodancer", "cult-of-the-lamb", "cuphead", "curse-of-the-dead-gods", "cyber-shadow", "cyberpunk-2077", "dark-souls-3", "dark-souls-remastered", "darkest-dungeon", "dave-the-diver", "dawn-of-man", "days-gone", "dead-cells", "dead-island-definitive-edition", "dead-rising-3", "dead-space-2023", "deaths-door", "deep-rock-galactic", "deep-rock-galactic-survivor", "devil-may-cry-5", "devil-may-cry-hd-collection", "devour", "dinkum", "dirt-4", "dirt-rally-2", "disco-elysium", "dishonored", "dmc-devil-may-cry", "dome-keeper", "doom-1993", "doom-2016", "doom-3", "doom-eternal", "dorfromantik", "dragon-age-inquisition", "dragon-quest-xi", "dragons-dogma-dark-arisen", "dredge", "duck-game", "dying-light", "dyson-sphere-program", "ea-sports-fc-24", "elden-ring", "endless-space-2", "enshrouded", "enter-the-gungeon", "euro-truck-simulator-2", "europa-universalis-4", "everspace-2", "f1-2020", "f1-24", "factorio", "fall-guys", "fallout-76", "fallout-new-vegas", "far-cry-3", "far-cry-4", "far-cry-5", "farming-simulator-22", "fields-of-mistria", "final-fantasy-ix", "final-fantasy-vii", "final-fantasy-x-x2-hd", "final-fantasy-xii-zodiac-age", "firewatch", "football-manager-2024", "for-honor", "forager", "forza-horizon-4", "forza-horizon-5", "forza-motorsport-2023", "frostpunk", "ftl", "furi", "galactic-civilizations-3", "game-of-thrones-telltale", "garrys-mod", "ghost-recon-wildlands", "ghostrunner", "god-of-war", "going-medieval", "grand-theft-auto-iv", "grand-theft-auto-v", "green-hell", "grid-2019", "grid-autosport", "griftlands", "grounded", "guacamelee-2", "gunfire-reborn", "hades", "hades-2", "half-life-2", "half-life-2-episode-one", "half-life-2-episode-two", "hammerwatch", "hearts-of-iron-4", "helldivers-2", "helldivers-dive-harder", "heroes-of-hammerwatch", "hitman-world-of-assassination", "hogwarts-legacy", "hollow-knight", "homeworld-remastered", "hotline-miami", "human-fall-flat", "human-resource-machine", "humankind", "huntdown", "hyper-light-drifter", "inside", "insurgency", "insurgency-sandstorm", "into-the-breach", "islanders", "it-takes-two", "journey", "jurassic-world-evolution", "just-cause-2", "just-cause-4", "killing-floor", "killing-floor-2", "kingdom-new-lands", "kingdom-two-crowns", "left-4-dead", "left-4-dead-2", "lego-marvel-super-heroes", "life-is-strange", "life-is-strange-before-the-storm", "like-a-dragon-ishin", "limbo", "little-nightmares", "loop-hero", "luck-be-a-landlord", "mad-max", "mafia-2-definitive-edition", "mafia-definitive-edition", "manor-lords", "mark-of-the-ninja", "marvel-rivals", "marvels-midnight-suns", "mass-effect-legendary-edition", "master-of-orion", "max-payne-3", "metal-gear-rising-revengeance", "metal-hellsinger", "metro-2033-redux", "metro-exodus", "mini-metro", "monster-hunter-rise", "monster-hunter-world", "monster-train", "moonlighter", "mortal-kombat-1", "mortal-kombat-11", "mortal-kombat-x", "mount-and-blade-2-bannerlord", "mount-and-blade-warband", "muck", "mudrunner", "my-summer-car", "naraka-bladepoint", "necesse", "need-for-speed-payback", "neon-abyss", "neon-white", "nidhogg", "nightingale", "nioh-2", "nioh-complete-edition", "no-mans-sky", "northgard", "nova-drift", "octopath-traveler", "once-human", "ori-and-the-blind-forest", "ori-and-the-will-of-the-wisps", "overcooked-2", "owlboy", "oxenfree", "oxygen-not-included", "palworld", "papers-please", "party-animals", "path-of-exile", "payday-3", "peak", "peglin", "people-playground", "persona-5-royal", "phasmophobia", "pillars-of-eternity", "pizza-tower", "planet-zoo", "plants-vs-zombies-goty", "plateup", "portal", "portal-2", "powerwash-simulator", "prey-2017", "prison-architect", "project-cars-2", "project-highrise", "psychonauts", "pubg-battlegrounds", "pvz-battle-for-neighborville", "pyre", "raft", "rage-2", "railway-empire", "rainbow-six-siege", "ratropolis", "rayman-legends", "ready-or-not", "red-dead-redemption-2", "red-faction-guerrilla-remastered", "resident-evil-2-remake", "resident-evil-4-remake", "resident-evil-village", "return-of-the-obra-dinn", "rime", "rise-of-the-tomb-raider", "risk-global-domination", "risk-of-rain", "risk-of-rain-2", "rivals-of-aether", "rocket-league", "rogue-legacy", "rust", "sable", "saints-row-the-third", "sanctum-2", "satisfactory", "scp-secret-laboratory", "sea-of-thieves", "sekiro", "serious-sam-4", "shadow-of-mordor", "shadow-of-war", "shadow-warrior-3", "shovel-knight", "sifu", "skullgirls", "skyrim", "skyrim-special-edition", "slay-the-spire", "sleeping-dogs", "slime-rancher", "slime-rancher-2", "sniper-elite-3", "sniper-elite-4", "sniper-elite-5", "sniper-elite-v2", "snowrunner", "songs-of-syx", "space-engineers", "space-marine-2", "spec-ops-the-line", "speedrunners", "spelunky-2", "stardew-valley", "steamworld-dig-2", "stellaris", "street-fighter-6", "streets-of-rage-4", "streets-of-rogue", "subnautica", "subnautica-below-zero", "sun-haven", "sunless-sea", "sunset-overdrive", "superliminal", "surviving-mars", "tales-from-the-borderlands", "team-fortress-2", "techtonica", "terraria", "the-crew-2", "the-division", "the-first-descendant", "the-forest", "the-forgotten-city", "the-last-of-us-part-1", "the-messenger", "the-planet-crafter", "the-riftbreaker", "the-stanley-parable", "the-walking-dead", "the-walking-dead-season-two", "the-witcher-2", "the-witcher-3", "the-wolf-among-us", "they-are-billions", "thomas-was-alone", "thronefall", "titan-quest", "titanfall-2", "tomb-raider-2013", "total-war-attila", "total-war-empire", "total-war-napoleon", "total-war-pharaoh", "total-war-rome-2", "total-war-shogun-2", "total-war-three-kingdoms", "total-war-warhammer", "total-war-warhammer-2", "total-war-warhammer-3", "towerfall", "transistor", "transport-fever-2", "trials-fusion", "trine-2", "trine-4", "trine-5", "trine-enchanted-edition", "trombone-champ", "tropico-6", "two-point-hospital", "ultimate-chicken-horse", "unrailed", "unravel-two", "v-rising", "va11-hall-a", "vampire-survivors", "victoria-3", "viscera-cleanup-detail", "void-bastards", "wallpaper-engine", "war-thunder", "warframe", "warhammer-40k-boltgun", "warhammer-40k-darktide", "warhammer-vermintide-2", "wartales", "watch-dogs", "watch-dogs-2", "watch-dogs-legion", "what-remains-of-edith-finch", "wildermyth", "wildfrost", "wingspan", "wizard-of-legend", "wobbly-life", "wolfenstein-2", "wolfenstein-the-old-blood", "world-of-goo", "world-war-z", "yakuza-like-a-dragon", "yooka-laylee"]
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
            "a-way-out-achievement-guide",
            "against-the-storm-achievement-guide",
            "age-of-empires-1-de-achievement-guide",
            "age-of-empires-2-de-achievement-guide",
            "age-of-empires-4-achievement-guide",
            "age-of-mythology-retold-achievement-guide",
            "age-of-wonders-3-achievement-guide",
            "age-of-wonders-planetfall-achievement-guide",
            "alan-wake-achievement-guide",
            "alien-isolation-achievement-guide",
            "aliens-fireteam-elite-achievement-guide",
            "ark-survival-evolved-achievement-guide",
            "art-of-rally-achievement-guide",
            "ashes-of-the-singularity-escalation-achievement-guide",
            "astral-ascent-achievement-guide",
            "atomic-heart-achievement-guide",
            "automation-empire-achievement-guide",
            "autonauts-achievement-guide",
            "baba-is-you-achievement-guide",
            "back-4-blood-achievement-guide",
            "backpack-battles-achievement-guide",
            "backpack-hero-achievement-guide",
            "bad-north-achievement-guide",
            "balatro-achievement-guide",
            "baldurs-gate-3-achievement-guide",
            "banished-achievement-guide",
            "barotrauma-achievement-guide",
            "bastion-achievement-guide",
            "batman-arkham-asylum-achievement-guide",
            "batman-arkham-city-achievement-guide",
            "battle-brothers-achievement-guide",
            "battlefield-1-achievement-guide",
            "bayonetta-achievement-guide",
            "beamng-drive-achievement-guide",
            "besiege-achievement-guide",
            "bioshock-infinite-achievement-guide",
            "bioshock-remastered-achievement-guide",
            "bloons-td-6-achievement-guide",
            "book-of-demons-achievement-guide",
            "borderlands-2-achievement-guide",
            "braid-achievement-guide",
            "brawlhalla-achievement-guide",
            "bright-memory-infinite-achievement-guide",
            "brotato-achievement-guide",
            "brothers-a-tale-of-two-sons-achievement-guide",
            "burnout-paradise-remastered-achievement-guide",
            "car-mechanic-simulator-2021-achievement-guide",
            "castle-crashers-achievement-guide",
            "celeste-achievement-guide",
            "chained-echoes-achievement-guide",
            "chicory-achievement-guide",
            "chivalry-2-achievement-guide",
            "chivalry-medieval-warfare-achievement-guide",
            "cities-skylines-2-achievement-guide",
            "cities-skylines-achievement-guide",
            "civilization-5-achievement-guide",
            "civilization-beyond-earth-achievement-guide",
            "civilization-vi-achievement-guide",
            "colony-survival-achievement-guide",
            "command-and-conquer-remastered-achievement-guide",
            "company-of-heroes-2-achievement-guide",
            "company-of-heroes-3-achievement-guide",
            "conan-exiles-achievement-guide",
            "content-warning-achievement-guide",
            "counter-strike-source-achievement-guide",
            "craft-the-world-achievement-guide",
            "crawl-achievement-guide",
            "crusader-kings-3-achievement-guide",
            "crypt-of-the-necrodancer-achievement-guide",
            "cult-of-the-lamb-achievement-guide",
            "cuphead-achievement-guide",
            "curse-of-the-dead-gods-achievement-guide",
            "cyber-shadow-achievement-guide",
            "cyberpunk-2077-achievement-guide",
            "dark-souls-3-achievement-guide",
            "dark-souls-remastered-achievement-guide",
            "darkest-dungeon-achievement-guide",
            "dave-the-diver-achievement-guide",
            "dawn-of-man-achievement-guide",
            "days-gone-achievement-guide",
            "dead-cells-achievement-guide",
            "dead-island-definitive-edition-achievement-guide",
            "dead-rising-3-achievement-guide",
            "dead-space-2023-achievement-guide",
            "deaths-door-achievement-guide",
            "deep-rock-galactic-achievement-guide",
            "deep-rock-galactic-survivor-achievement-guide",
            "devil-may-cry-5-achievement-guide",
            "devil-may-cry-hd-collection-achievement-guide",
            "devour-achievement-guide",
            "dinkum-achievement-guide",
            "dirt-4-achievement-guide",
            "dirt-rally-2-achievement-guide",
            "disco-elysium-achievement-guide",
            "dishonored-achievement-guide",
            "dmc-devil-may-cry-achievement-guide",
            "dome-keeper-achievement-guide",
            "doom-1993-achievement-guide",
            "doom-2016-achievement-guide",
            "doom-3-achievement-guide",
            "doom-eternal-achievement-guide",
            "dorfromantik-achievement-guide",
            "dragon-age-inquisition-achievement-guide",
            "dragon-quest-xi-achievement-guide",
            "dragons-dogma-dark-arisen-achievement-guide",
            "dredge-achievement-guide",
            "duck-game-achievement-guide",
            "dying-light-achievement-guide",
            "dyson-sphere-program-achievement-guide",
            "ea-sports-fc-24-achievement-guide",
            "elden-ring-achievement-guide",
            "endless-space-2-achievement-guide",
            "enshrouded-achievement-guide",
            "enter-the-gungeon-achievement-guide",
            "euro-truck-simulator-2-achievement-guide",
            "europa-universalis-4-achievement-guide",
            "everspace-2-achievement-guide",
            "f1-2020-achievement-guide",
            "f1-24-achievement-guide",
            "factorio-achievement-guide",
            "fall-guys-achievement-guide",
            "fallout-76-achievement-guide",
            "fallout-new-vegas-achievement-guide",
            "far-cry-3-achievement-guide",
            "far-cry-4-achievement-guide",
            "far-cry-5-achievement-guide",
            "farming-simulator-22-achievement-guide",
            "fields-of-mistria-achievement-guide",
            "final-fantasy-ix-achievement-guide",
            "final-fantasy-vii-achievement-guide",
            "final-fantasy-x-x2-hd-achievement-guide",
            "final-fantasy-xii-zodiac-age-achievement-guide",
            "firewatch-achievement-guide",
            "football-manager-2024-achievement-guide",
            "for-honor-achievement-guide",
            "forager-achievement-guide",
            "forza-horizon-4-achievement-guide",
            "forza-horizon-5-achievement-guide",
            "forza-motorsport-2023-achievement-guide",
            "frostpunk-achievement-guide",
            "ftl-achievement-guide",
            "furi-achievement-guide",
            "galactic-civilizations-3-achievement-guide",
            "game-of-thrones-telltale-achievement-guide",
            "garrys-mod-achievement-guide",
            "ghost-recon-wildlands-achievement-guide",
            "ghostrunner-achievement-guide",
            "god-of-war-achievement-guide",
            "going-medieval-achievement-guide",
            "grand-theft-auto-iv-achievement-guide",
            "grand-theft-auto-v-achievement-guide",
            "green-hell-achievement-guide",
            "grid-2019-achievement-guide",
            "grid-autosport-achievement-guide",
            "griftlands-achievement-guide",
            "grounded-achievement-guide",
            "guacamelee-2-achievement-guide",
            "gunfire-reborn-achievement-guide",
            "hades-2-achievement-guide",
            "hades-achievement-guide",
            "half-life-2-achievement-guide",
            "half-life-2-episode-one-achievement-guide",
            "half-life-2-episode-two-achievement-guide",
            "hammerwatch-achievement-guide",
            "hearts-of-iron-4-achievement-guide",
            "helldivers-2-achievement-guide",
            "helldivers-dive-harder-achievement-guide",
            "heroes-of-hammerwatch-achievement-guide",
            "hitman-world-of-assassination-achievement-guide",
            "hogwarts-legacy-achievement-guide",
            "hollow-knight-achievement-guide",
            "homeworld-remastered-achievement-guide",
            "hotline-miami-achievement-guide",
            "human-fall-flat-achievement-guide",
            "human-resource-machine-achievement-guide",
            "humankind-achievement-guide",
            "huntdown-achievement-guide",
            "hyper-light-drifter-achievement-guide",
            "inside-achievement-guide",
            "insurgency-achievement-guide",
            "insurgency-sandstorm-achievement-guide",
            "into-the-breach-achievement-guide",
            "islanders-achievement-guide",
            "it-takes-two-achievement-guide",
            "journey-achievement-guide",
            "jurassic-world-evolution-achievement-guide",
            "just-cause-2-achievement-guide",
            "just-cause-4-achievement-guide",
            "killing-floor-2-achievement-guide",
            "killing-floor-achievement-guide",
            "kingdom-new-lands-achievement-guide",
            "kingdom-two-crowns-achievement-guide",
            "left-4-dead-2-achievement-guide",
            "left-4-dead-achievement-guide",
            "lego-marvel-super-heroes-achievement-guide",
            "life-is-strange-achievement-guide",
            "life-is-strange-before-the-storm-achievement-guide",
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
            "master-of-orion-achievement-guide",
            "max-payne-3-achievement-guide",
            "metal-gear-rising-revengeance-achievement-guide",
            "metal-hellsinger-achievement-guide",
            "metro-2033-redux-achievement-guide",
            "metro-exodus-achievement-guide",
            "mini-metro-achievement-guide",
            "monster-hunter-rise-achievement-guide",
            "monster-hunter-world-achievement-guide",
            "monster-train-achievement-guide",
            "moonlighter-achievement-guide",
            "mortal-kombat-1-achievement-guide",
            "mortal-kombat-11-achievement-guide",
            "mortal-kombat-x-achievement-guide",
            "mount-and-blade-2-bannerlord-achievement-guide",
            "mount-and-blade-warband-achievement-guide",
            "muck-achievement-guide",
            "mudrunner-achievement-guide",
            "my-summer-car-achievement-guide",
            "naraka-bladepoint-achievement-guide",
            "necesse-achievement-guide",
            "need-for-speed-payback-achievement-guide",
            "neon-abyss-achievement-guide",
            "neon-white-achievement-guide",
            "nidhogg-achievement-guide",
            "nightingale-achievement-guide",
            "nioh-2-achievement-guide",
            "nioh-complete-edition-achievement-guide",
            "no-mans-sky-achievement-guide",
            "northgard-achievement-guide",
            "nova-drift-achievement-guide",
            "octopath-traveler-achievement-guide",
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
            "pillars-of-eternity-achievement-guide",
            "pizza-tower-achievement-guide",
            "planet-zoo-achievement-guide",
            "plants-vs-zombies-goty-achievement-guide",
            "plateup-achievement-guide",
            "portal-2-achievement-guide",
            "portal-achievement-guide",
            "powerwash-simulator-achievement-guide",
            "prey-2017-achievement-guide",
            "prison-architect-achievement-guide",
            "project-cars-2-achievement-guide",
            "project-highrise-achievement-guide",
            "psychonauts-achievement-guide",
            "pubg-battlegrounds-achievement-guide",
            "pvz-battle-for-neighborville-achievement-guide",
            "pyre-achievement-guide",
            "raft-achievement-guide",
            "rage-2-achievement-guide",
            "railway-empire-achievement-guide",
            "rainbow-six-siege-achievement-guide",
            "ratropolis-achievement-guide",
            "rayman-legends-achievement-guide",
            "ready-or-not-achievement-guide",
            "red-dead-redemption-2-achievement-guide",
            "red-faction-guerrilla-remastered-achievement-guide",
            "resident-evil-2-remake-achievement-guide",
            "resident-evil-4-remake-achievement-guide",
            "resident-evil-village-achievement-guide",
            "return-of-the-obra-dinn-achievement-guide",
            "rime-achievement-guide",
            "rise-of-the-tomb-raider-achievement-guide",
            "risk-global-domination-achievement-guide",
            "risk-of-rain-2-achievement-guide",
            "risk-of-rain-achievement-guide",
            "rivals-of-aether-achievement-guide",
            "rocket-league-achievement-guide",
            "rogue-legacy-achievement-guide",
            "rust-achievement-guide",
            "sable-achievement-guide",
            "saints-row-the-third-achievement-guide",
            "sanctum-2-achievement-guide",
            "satisfactory-achievement-guide",
            "scp-secret-laboratory-achievement-guide",
            "sea-of-thieves-achievement-guide",
            "sekiro-achievement-guide",
            "serious-sam-4-achievement-guide",
            "shadow-of-mordor-achievement-guide",
            "shadow-of-war-achievement-guide",
            "shadow-warrior-3-achievement-guide",
            "shovel-knight-achievement-guide",
            "sifu-achievement-guide",
            "skullgirls-achievement-guide",
            "skyrim-achievement-guide",
            "skyrim-special-edition-achievement-guide",
            "slay-the-spire-achievement-guide",
            "sleeping-dogs-achievement-guide",
            "slime-rancher-2-achievement-guide",
            "slime-rancher-achievement-guide",
            "sniper-elite-3-achievement-guide",
            "sniper-elite-4-achievement-guide",
            "sniper-elite-5-achievement-guide",
            "sniper-elite-v2-achievement-guide",
            "snowrunner-achievement-guide",
            "songs-of-syx-achievement-guide",
            "space-engineers-achievement-guide",
            "space-marine-2-achievement-guide",
            "spec-ops-the-line-achievement-guide",
            "speedrunners-achievement-guide",
            "spelunky-2-achievement-guide",
            "stardew-valley-achievement-guide",
            "steamworld-dig-2-achievement-guide",
            "stellaris-achievement-guide",
            "street-fighter-6-achievement-guide",
            "streets-of-rage-4-achievement-guide",
            "streets-of-rogue-achievement-guide",
            "subnautica-achievement-guide",
            "subnautica-below-zero-achievement-guide",
            "sun-haven-achievement-guide",
            "sunless-sea-achievement-guide",
            "sunset-overdrive-achievement-guide",
            "superliminal-achievement-guide",
            "surviving-mars-achievement-guide",
            "tales-from-the-borderlands-achievement-guide",
            "team-fortress-2-achievement-guide",
            "techtonica-achievement-guide",
            "terraria-achievement-guide",
            "the-crew-2-achievement-guide",
            "the-division-achievement-guide",
            "the-first-descendant-achievement-guide",
            "the-forest-achievement-guide",
            "the-forgotten-city-achievement-guide",
            "the-last-of-us-part-1-achievement-guide",
            "the-messenger-achievement-guide",
            "the-planet-crafter-achievement-guide",
            "the-riftbreaker-achievement-guide",
            "the-stanley-parable-achievement-guide",
            "the-walking-dead-achievement-guide",
            "the-walking-dead-season-two-achievement-guide",
            "the-witcher-2-achievement-guide",
            "the-witcher-3-achievement-guide",
            "the-wolf-among-us-achievement-guide",
            "they-are-billions-achievement-guide",
            "thomas-was-alone-achievement-guide",
            "thronefall-achievement-guide",
            "titan-quest-achievement-guide",
            "titanfall-2-achievement-guide",
            "tomb-raider-2013-achievement-guide",
            "total-war-attila-achievement-guide",
            "total-war-empire-achievement-guide",
            "total-war-napoleon-achievement-guide",
            "total-war-pharaoh-achievement-guide",
            "total-war-rome-2-achievement-guide",
            "total-war-shogun-2-achievement-guide",
            "total-war-three-kingdoms-achievement-guide",
            "total-war-warhammer-2-achievement-guide",
            "total-war-warhammer-3-achievement-guide",
            "total-war-warhammer-achievement-guide",
            "towerfall-achievement-guide",
            "transistor-achievement-guide",
            "transport-fever-2-achievement-guide",
            "trials-fusion-achievement-guide",
            "trine-2-achievement-guide",
            "trine-4-achievement-guide",
            "trine-5-achievement-guide",
            "trine-enchanted-edition-achievement-guide",
            "trombone-champ-achievement-guide",
            "tropico-6-achievement-guide",
            "two-point-hospital-achievement-guide",
            "ultimate-chicken-horse-achievement-guide",
            "unrailed-achievement-guide",
            "unravel-two-achievement-guide",
            "v-rising-achievement-guide",
            "va11-hall-a-achievement-guide",
            "vampire-survivors-achievement-guide",
            "victoria-3-achievement-guide",
            "viscera-cleanup-detail-achievement-guide",
            "void-bastards-achievement-guide",
            "wallpaper-engine-achievement-guide",
            "war-thunder-achievement-guide",
            "warframe-achievement-guide",
            "warhammer-40k-boltgun-achievement-guide",
            "warhammer-40k-darktide-achievement-guide",
            "warhammer-vermintide-2-achievement-guide",
            "wartales-achievement-guide",
            "watch-dogs-2-achievement-guide",
            "watch-dogs-achievement-guide",
            "watch-dogs-legion-achievement-guide",
            "what-remains-of-edith-finch-achievement-guide",
            "wildermyth-achievement-guide",
            "wildfrost-achievement-guide",
            "wingspan-achievement-guide",
            "wizard-of-legend-achievement-guide",
            "wobbly-life-achievement-guide",
            "wolfenstein-2-achievement-guide",
            "wolfenstein-the-old-blood-achievement-guide",
            "world-of-goo-achievement-guide",
            "world-war-z-achievement-guide",
            "yakuza-like-a-dragon-achievement-guide",
            "yooka-laylee-achievement-guide"
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
