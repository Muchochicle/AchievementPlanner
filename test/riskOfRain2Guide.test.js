import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/risk-of-rain-2.js";

test("the Risk of Rain 2 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "risk-of-rain-2-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "risk-of-rain-2");

});

test("the Risk of Rain 2 guide has all 9 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Survivor Mastery",
            "Signature Survivor Challenges",
            "The Prime Meridian",
            "The Alloyed Collective's Offering",
            "Artifacts & Trials",
            "Run Milestones",
            "Unlocking New Survivors",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 171-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /171 Steam achievements/);

});

test("every one of the 171 official Risk of Rain 2 achievement names is mentioned somewhere in the guide", () => {

    // The full, official list this guide is built from
    // (backend/catalog/games/risk-of-rain-2.json).
    const officialAchievementNames = [
        "Rapidfire",
        "Automation Activation",
        "...To Be Left Alone",
        "Warm For Life",
        "Captain: Worth Every Penny",
        "Captain: Mastery",
        "Captain: Wanderlust",
        "Moon Worshipper",
        "Glorious Battle",
        "Cleanup Duty",
        "Commando: Mastery",
        "Commando: Godspeed",
        "Commando: Rolling Thunder",
        "Commando: Incorruptible",
        "The Long Road",
        "Engineering Perfection",
        "Washed Away",
        "The Calm",
        "Ascendant",
        "Prismatically Aligned",
        "Advancement",
        "Flawless",
        "Warrior",
        "Naturopath",
        "True Respite",
        "Acrid: Mastery",
        "Acrid: Bad Medicine",
        "Acrid: Easy Prey",
        "Acrid: Pandemic",
        "Guidance Offline",
        "Learning Process",
        "I Love Dying!",
        "Experimenting",
        "The Basics",
        "Engineer: Better With Friends",
        "Engineer: Mastery",
        "Engineer: Zero Sum",
        "Engineer: 100% Calculated",
        "\"Is This Bugged?\"",
        "Her Concepts",
        "[REDACTED]",
        "Newtist",
        "Pause.",
        "Deicide",
        "Macho",
        "Huntress: Finishing Touch",
        "Huntress: Mastery",
        "Huntress: One Shot, One Kill",
        "Huntress: Piercing Wind",
        "Blockade Breaker",
        "Keyed Up",
        "Death Do Us Part",
        "Elite Slayer",
        "Cut Down",
        "Blackout",
        "Slaughter",
        "Loader: Earthshatter",
        "Loader: Mastery",
        "Loader: Swing By",
        "Bookworm",
        "Deja Vu?",
        "Artificer: Orbital Bombardment",
        "Artificer: Mastery",
        "Artificer: Chunked!",
        "Artificer: Massacre",
        "Multikill!",
        "One with the Woods",
        "Mercenary: Mastery",
        "Mercenary: Ethereal",
        "Mercenary: Demon of the Skies",
        "Going Fast Recommended",
        "Warmonger",
        "Never Back Down",
        "Trial of Spite",
        "Trial of Command",
        "Trial of Honor",
        "Trial of Enigma",
        "Trial of Chaos",
        "Trial of Glass",
        "Trial of Dissonance",
        "Trial of Evolution",
        "Trial of Metamorphosis",
        "Trial of Sacrifice",
        "Trial of Vengeance",
        "Trial of Kin",
        "Trial of Swarms",
        "Trial of Death",
        "Trial of Frailty",
        "Trial of Soul",
        "...Maybe One More.",
        "Verified",
        "Power Plant",
        "The Lone Survivor",
        "The Demons And The Crabs",
        "MUL-T: Mastery",
        "MUL-T: Pest Control",
        "MUL-T: Gotcha!",
        "Mechanic",
        "Funded!",
        "REX: Mastery",
        "REX: Dunked",
        "REX: Bushwhacked",
        "Cosmic Explorer",
        "Bandit: Mastery",
        "Bandit: Classic Man",
        "Bandit: B&E",
        "Bandit: Sadist",
        "Captain: Smushed",
        "Loader: The Thunderdome",
        "Mercenary: Flash of Blades",
        "MUL-T: Seventh Day",
        "REX: Full of Life",
        "Dragged Below",
        "Railgunner: Annihiliator",
        "Railgunner: Marksman",
        "Railgunner: Trickshot",
        "Railgunner: Mastery",
        "「V??oid Fiend』: Mastery",
        "King of the Hill",
        "Purified Freedom",
        "Order Up!",
        "CHEF: Mastery",
        "CHEF: Barbecued Bison Recipe Complete",
        "CHEF: You’ve Always Been Crazy",
        "CHEF: It’s Getting Hot In Here!",
        "False Son: Mastery",
        "False Son: Stare Them Down",
        "False Son: Family Bonding",
        "False Son: Protein Heavy Diet",
        "Seeker: Mastery",
        "Seeker: Clear Mind",
        "Seeker: Scorched Earth",
        "Seeker: Airborne Souls",
        "Acrid: Cleared Prime Meridian",
        "Artificer: Cleared Prime Meridian",
        "Bandit: Cleared Prime Meridian",
        "Captain: Cleared Prime Meridian",
        "Commando: Cleared Prime Meridian",
        "Engineer: Cleared Prime Meridian",
        "Huntress: Cleared Prime Meridian",
        "Loader: Cleared Prime Meridian",
        "MUL-T: Cleared Prime Meridian",
        "Mercenary: Cleared Prime Meridian",
        "Railgunner: Cleared Prime Meridian",
        "REX: Cleared Prime Meridian",
        "Void Fiend: Cleared Prime Meridian",
        "Experienced Rebirth",
        "Trial of Devotion",
        "Trial of Delusion",
        "Engineer: Purge",
        "Bandit: Accept and Decompile",
        "Captain: Accept and Decompile",
        "Loader: Accept and Decompile",
        "Artificer: Accept and Decompile",
        "REX: Accept and Decompile",
        "Commando: Purge",
        "Acrid: Purge",
        "Huntress: Purge",
        "Mercenary: Purge",
        "MUL-T: Purge",
        "Drifter: Mastery",
        "Drifter: Trash Compactor",
        "Drifter: Leave No Trace",
        "Drifter: In The Bag",
        "Operator: Putting Together a Team",
        "Operator: Not So Different",
        "Operator: That Just Happened",
        "Operator: That All You Got?",
        "Operator: Mastery",
        "Lost in Transit",
        "Trial of Prestige"
    ];

    assert.strictEqual(officialAchievementNames.length, 171, "sanity check on this test's own reference list");

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
