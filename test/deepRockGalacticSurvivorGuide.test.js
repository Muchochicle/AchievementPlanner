import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/deep-rock-galactic-survivor.js";

test("the Deep Rock Galactic: Survivor guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "deep-rock-galactic-survivor-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "deep-rock-galactic-survivor");

});

test("the Deep Rock Galactic: Survivor guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Unlocks, Stats & Damage",
            "Weapons & Overclocks - Part 1",
            "Weapons & Overclocks - Part 2",
            "Biomes, Enemies & Milestones",
            "Hazard Levels, Commendations & Feats",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 300-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /300 Steam achievements/);

});

test("every one of the 300 official Deep Rock Galactic: Survivor achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Run for the hills", "Dig down deep", "Enjoy a relaxing stroll", "Lock and load", "Squint and squeeze the trigger",
        "Delicious BLT", "It's got electrolytes", "Swift guns for swift hands", "Get that Midas touch", "Sprinkle of Nitra",
        "A freeze is coming", "Hot, hot, hot!", "Slick, like butter", "Pillar of Society", "Big spender",
        "No pain, no gain", "Gotta stay Nitrated", "Relish the pain", "Au-fully rich", "Close call",
        "Hoxxes Manual", "Why so Salty?", "Book of Experience", "Corporate Discount", "Pro side wobble compensator",
        "Hangry?", "Count em!", "Multitool", "What's in the box!?", "Works 100% of the time",
        "Freezing hot acid", "Crystalline Caverns", "Hollow Bough", "Magma Core", "Salt Pits",
        "Azure Weald", "Got bait?", "Feeling lucky punk?", "Jetty boots", "That's how the cookie crumbles",
        "Axe in face!", "Overclock: DeepCore GK2", "Overclock: Zhukov NUK17", "Overclock: Cryo Grenade", "Overclock: Jury-Rigged Boomstick",
        "Overclock: M1000", "Overclock: Stun Sweeper", "Overclock: TH-0R Bug Taser", "Overclock: Cryo Guard", "Overclock: Plasma Carbine",
        "Overclock: Nishanka Boltshark", "Overclock: Heavy Revolver", "Overclock: Incendiary Grenade", "Overclock: Powered Minigun", "Overclock: Burst Fire Gun",
        "Overclock: Tactical Leadburster", "Overclock: Heavy Autocannon", "Overclock: Firefly Hunter Drone", "Overclock: Hurricane", "Overclock: Seismic Repulsor",
        "Overclock: Coil Gun", "Overclock: Warthog Auto", "Overclock: Voltaic SMG", "Overclock: Hi-Volt Thunderbird", "Overclock: LMG Gun Platform",
        "Overclock: Voltaic Shock Fence", "Overclock: LOK-1 Smart Rifle", "Overclock: DeepCore PGL", "Overclock: Breach Cutter", "Overclock: Shard Diffractor",
        "Overclock: Plasma Burster", "Overclock: Swarm Grenade", "Overclock: Subata 120", "Overclock: Krakatoa Sentinel", "Overclock: HE Grenade",
        "Overclock: CRSPR Flamethrower", "Overclock: Sludge Pump", "Overclock: Wave Cooker", "Overclock: Impact Axe", "Overclock: Neurotoxin Grenade",
        "Overclock: Cryo Cannon", "Overclock: K1-P Viper Drone", "Overclock: Plasma Charger", "Mastery: DeepCore GK2", "Mastery: Zhukov NUK17",
        "Mastery: Cryo Grenade", "Mastery: Jury-Rigged Boomstick", "Mastery: M1000", "Mastery: Stun Sweeper", "Mastery: TH-0R Bug Taser",
        "Mastery: Cryo Guard", "Mastery: Plasma Carbine", "Mastery: Nishanka Boltshark", "Mastery: Heavy Revolver", "Mastery: Incendiary Grenade",
        "Mastery: Powered Minigun", "Mastery: Burst Fire Gun", "Mastery: Tactical Leadburster", "Mastery: Heavy Autocannon", "Mastery: Firefly Hunter Drone",
        "Mastery: Hurricane", "Mastery: Seismic Repulsor", "Mastery: Coil Gun", "Mastery: Warthog Auto", "Mastery: Voltaic SMG",
        "Mastery: Hi-Volt Thunderbird", "Mastery: LMG Gun Platform", "Mastery: Voltaic Shock Fence", "Mastery: LOK-1 Smart Rifle", "Mastery: DeepCore PGL",
        "Mastery: Breach Cutter", "Mastery: Shard Diffractor", "Mastery: Plasma Burster", "Mastery: Swarm Grenade", "Mastery: Subata 120",
        "Mastery: Krakatoa Sentinel", "Mastery: HE Grenade", "Mastery: CRSPR Flamethrower", "Mastery: Sludge Pump", "Mastery: Wave Cooker",
        "Mastery: Impact Axe", "Mastery: Neurotoxin Grenade", "Mastery: Cryo Cannon", "Mastery: K1-P Viper Drone", "Mastery: Plasma Charger",
        "True Mastery: DeepCore GK2", "True Mastery: Zhukov NUK17", "True Mastery: Cryo Grenade", "True Mastery: Jury-Rigged Boomstick", "True Mastery: M1000",
        "True Mastery: Stun Sweeper", "True Mastery: TH-0R Bug Taser", "True Mastery: Cryo Guard", "True Mastery: Plasma Carbine", "True Mastery: Nishanka Boltshark",
        "True Mastery: Heavy Revolver", "True Mastery: Incendiary Grenade", "True Mastery: Powered Minigun", "True Mastery: Burst Fire Gun", "True Mastery: Tactical Leadburster",
        "True Mastery: Heavy Autocannon", "True Mastery: Firefly Hunter Drone", "True Mastery: Hurricane", "True Mastery: Seismic Repulsor", "True Mastery: Coil Gun",
        "True Mastery: Warthog Auto", "True Mastery: Voltaic SMG", "True Mastery: Hi-Volt Thunderbird", "True Mastery: LMG Gun Platform", "True Mastery: Voltaic Shock Fence",
        "True Mastery: LOK-1 Smart Rifle", "True Mastery: DeepCore PGL", "True Mastery: Breach Cutter", "True Mastery: Shard Diffractor", "True Mastery: Plasma Burster",
        "True Mastery: Swarm Grenade", "True Mastery: Subata 120", "True Mastery: Krakatoa Sentinel", "True Mastery: HE Grenade", "True Mastery: CRSPR Flamethrower",
        "True Mastery: Sludge Pump", "True Mastery: Wave Cooker", "True Mastery: Impact Axe", "True Mastery: Neurotoxin Grenade", "True Mastery: Cryo Cannon",
        "True Mastery: K1-P Viper Drone", "True Mastery: Plasma Charger", "Mastery: Crystalline Caverns", "Mastery: Magma Core", "Mastery: Hollow Bough",
        "Mastery: Salt Pits", "Mastery: Azure Weald", "True Mastery: Crystalline Caverns", "True Mastery: Magma Core", "True Mastery: Hollow Bough",
        "True Mastery: Salt Pits", "True Mastery: Azure Weald", "Feeling a bit sour", "Zone of control", "Cross the beams",
        "Dwarven architecture", "Deep freeze", "Modern warfare", "Stormbringer", "Bomberman",
        "Keeper of the flame", "Who touched my gun!?", "Blunt force trauma", "Delayed gratification", "Fleet of foot",
        "Tried and tested", "Light show", "Professionals have standards", "Weight of fire", "Spray 'n pray",
        "It's all in the wrist", "Sentry goin' up", "The journey begins", "Measure twice, shoot once", "Adventure awaits",
        "10,000 rounds per minute", "Tough as nails", "Ka-boom!", "I solve problems", "Brainstorming",
        "A whiff of brimstone", "Diggy diggy hole", "Chemical burns", "And my axe", "Grow fat from strength",
        "BOOM! Headshot", "You're locked in here with me", "Lord of war", "Know no fear", "Walk without rhythm",
        "Unreasonable uptime", "Fully overclocked", "Going nuclear", "With fire and blood", "Elemental avatar",
        "Fastest hands on the rig", "Endurance: Dives I", "Endurance: Dives II", "Endurance: Dives III", "Endurance: Dives IV",
        "Endurance: Dives V", "Endurance: Kills I", "Endurance: Kills II", "Endurance: Kills III", "Endurance: Kills IV",
        "Endurance: Kills V", "Endurance: Damage I", "Endurance: Damage II", "Endurance: Damage III", "Endurance: Damage IV",
        "Endurance: Damage V", "Endurance: Mine I", "Endurance: Mine II", "Endurance: Mine III", "Endurance: Mine IV",
        "Endurance: Mine V", "Endurance: Run I", "Endurance: Run II", "Endurance: Run III", "Endurance: Run IV",
        "Endurance: Run V", "Just like the old days", "Mind over matter", "Legendary!", "Truly epic",
        "Fabled fittings", "Expertly tuned", "Professional setup", "Custom rig", "We're keeping this one",
        "Master artificer", "Karl, is that you?", "Anomaly: Hazard 1", "Anomaly: Hazard 2", "Anomaly: Hazard 3",
        "Anomaly: Hazard 4", "Anomaly: Hazard 5", "Vanguard: Hazard 3", "Vanguard: Hazard 4", "Vanguard: Hazard 5",
        "Employee of the Week", "Employee of the Month", "Employee of the Year", "They belong in a museum", "I ain't buying it",
        "Extreme indecision", "Underclocked", "The dwarf with the golden bug", "Still only counts as one!", "Denied",
        "Bullseye", "This hurts me more", "Perfect run", "Cheapskate", "Underpromise, overdeliver",
        "Eye of the storm", "Roadkill", "Fully armed and operational", "Early access", "Salvage operation",
        "They fly now?", "They see 'em rollin', they hatin'", "Tower defense", "Perfectly balanced", "Deep scan",
        "All sides", "Back from the brink!", "Survivor squad", "This is brilliant, but I like this", "Fill 'er up",
        "Drill baby, drill", "The only drilldozer here is me", "Mission Possible", "Now, where did I put my keys?", "Rock and Stone!",
    ];

    assert.strictEqual(officialAchievementNames.length, 300, "sanity check on this test's own reference list");

    const fullText = GUIDE.sections.map(section => section.body.join(" ")).join(" ");

    const missing = officialAchievementNames.filter(name => !fullText.includes(name));

    assert.deepStrictEqual(missing, [], "every official achievement name must be mentioned somewhere in the guide");

});

test("Tip: paragraphs (strategy) are distinguishable from the surrounding factual paragraphs", () => {

    const tipParagraphs = GUIDE.sections
        .flatMap(section => section.body)
        .filter(paragraph => paragraph.startsWith("Tip:"));

    assert.ok(tipParagraphs.length > 0, "expected at least one clearly-labeled strategy paragraph");

});
