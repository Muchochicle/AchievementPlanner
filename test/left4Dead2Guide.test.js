import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/left-4-dead-2.js";

test("the Left 4 Dead 2 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "left-4-dead-2-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "left-4-dead-2");

});

test("the Left 4 Dead 2 guide has all 8 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Campaign Survivals",
            "Difficulty & Skill Runs",
            "Per-Campaign Challenges",
            "Special Infected Feats",
            "Weapons & Melee",
            "Survival & Scavenge",
            "Co-op & Misc"
        ]
    );

});

test("the Overview states the verified 101-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /101 Steam achievements/);

});

test("every one of the 101 official Left 4 Dead 2 achievement names is mentioned somewhere in the guide", () => {

    // The full, official list this guide is built from
    // (backend/catalog/games/left-4-dead-2.json).
    const officialAchievementNames = [
        "CL0WND", "FRIED PIPER", "LEVEL A CHARGE", "ACID REFLEX", "CONFEDERACY OF CRUNCHES",
        "CRASS MENAGERIE", "A RIDE DENIED", "HEAD HONCHO", "HEARTWARMER", "STILL SOMETHING TO PROVE",
        "THE REAL DEAL", "STRENGTH IN NUMBERS", "DEAD IN THE WATER", "ROBBED ZOMBIE", "DISMEMBERMENT PLAN",
        "BURNING SENSATION", "ARMORY OF ONE", "SHOCK JOCK", "THE QUICK AND THE DEAD", "CHAIN OF COMMAND",
        "SEPTIC TANK", "CLUB DEAD", "TANK BURGER", "BRIDGE OVER TREBLED SLAUGHTER", "PRICE CHOPPER",
        "MIDNIGHT RIDER", "RAGIN' CAJUN", "WEATHERMAN", "BRIDGE BURNER", "VIOLENCE IN SILENCE",
        "GUARDIN' GNOME", "SOB STORY", "WING AND A PRAYER", "QUALIFIED RIDE", "BACK IN THE SADDLE",
        "RODE HARD, PUT AWAY WET", "GREAT EXPECTORATIONS", "A SPITTLE HELP FROM MY FRIENDS", "SCATTERING RAM", "MEAT TENDERIZER",
        "LONG DISTANCE CARRIER", "BEAT THE RUSH", "HUNTING PARTY", "GAS GUZZLER", "CACHE AND CARRY",
        "SCAVENGE HUNT", "GONG SHOW", "FUEL CRISIS", "GAS SHORTAGE", "STACHE WHACKER",
        "TORCH BEARER", "WEDDING CRASHER", "TIL IT GOES CLICK", "GRAVE ROBBER", "MUTANT OVERLORD",
        "FORE!", "KILLING THEM SWIFTLY TO THIS SONG", "KITE LIKE A MAN", "CACHE GRAB", "PORT OF SCAVENGE",
        "SUPREME SACRIFICE", "KILL BILL", "BARREL ROLLED", "CHAOS GENERATOR", "SACRIFIZZLE",
        "STREAM CROSSER", "CONNECTING FIGHTS", "Valve Gift Grab 2011 – L4D2", "GOOD GUY NICK", "GHOST OF CHRISTMAS PRESENT",
        "GETTING STARTED", "ON OUR WAY", "THIS IS WHERE THE FUN BEGINS", "STILL STANDING", "THE LAST FRONTIER",
        "GOLDEN FREEMAN", "ELEPHANT IN THE ROOM", "I SPIT ON YOUR GRAVE", "ACID BATH", "SPITFIRE",
        "FLIGHT DECK", "FAT NINJA", "THREE’S A CROWD", "LICKETY-SPLIT", "GET SKEETED ON",
        "ROCKY HORROR PICTURE THROW", "SHOTGUN WEDDING", "ONE HIT WONDER", "PURE SATISFACTION", "THE BIG TEN",
        "Z-GENOCIDEST 2: EPISODE 2", "POLE POSITION", "HOUSEHOLD NAMES", "A LITTLE HACK AND SLASH", "LIKE LAMBS TO THE SLAUGHTER",
        "KILLING SPREE", "SUPREME SURVIVALIST", "NEW HAIRCUT", "THE MAIN ATTRACTION", "THE LAST DASH",
        "GNOME ALONE"
    ];

    assert.strictEqual(officialAchievementNames.length, 101, "sanity check on this test's own reference list");

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
