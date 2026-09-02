import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/death-stranding-directors-cut.js";

test("the Death Stranding Director's Cut guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "death-stranding-directors-cut-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "death-stranding-directors-cut");

});

test("the Death Stranding Director's Cut guide has all 8 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        ["Overview","Story: The Episodes","Deliveries & Orders","Building & the Chiral Network","Social Strand, Likes & Knowledge","Combat, BB & Milestones","100% Completion","Suggested Order"]
    );

});

test("the Overview states the verified 63-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /63 Steam achievements/);

});

test("every one of the 63 official Death Stranding Director's Cut achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Greatest of Great Deliverers","Delivering Is What I Do","Rebuilding America","We Need You","I Won't Break","BB...","We're Whole Again","BBs: A Bridge Between This World and the One Beyond","\"BB\"","Sixty Deaths and Sixty Births in a Day","The Particle of God","I'm Your Die-Hardman","Bring Back My Baby","She's waiting for you on the Beach.","Thank You, Sam","Thanks for Everything","Everyday Delivery","Deliveries Done","Birth of a Legend","Growth of a Legend","A Helping Hand","The Automation Revolution","Apprentice Builder","Master Builder","A New Day for the UCA","In Sam We Trust","Well Connected","Best Beloved","Like and Be Liked","The People's Porter","The World's Most Popular Porter","Good Samaritan","Giver of Gifts","Chiral Crafter","A Thirst for Knowledge","Fount of Knowledge","The Custom Kid","Soak and Sigh","The Post Guides the Present","The Past Guides the Present","Pathfinder","Childminder","A Baby Blessing","Prominent Porter","Great Deliverer","Catcher Crusher","Snooze 'n' Soothe","Boots Are a Porter's Best Friend","Hooked on Delivering!?","Pumped Porter","Well-Traveled","God Particle Go-Getter","Rest In Pieces","Any Porter in a Storm","Sleep Tight, Little BB","A Shout in the Dark","Public Service Porter","Trail-Blazer","I Couldn't Hold it In!","All Roads Lead to the UCA","Soothing Sounds","Building Bridges","Homo Faber"];

    assert.strictEqual(officialAchievementNames.length, 63, "sanity check on this test's own reference list");

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
