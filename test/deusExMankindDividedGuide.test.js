import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/deus-ex-mankind-divided.js";

test("the Deus Ex: Mankind Divided guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "deus-ex-mankind-divided-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "deus-ex-mankind-divided");

});

test("the Deus Ex: Mankind Divided guide has all 8 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        ["Overview","Main Story & Difficulty","Prague & Side Missions","Augments & Combat Feats","Breach Mode","System Rift DLC","A Criminal Past DLC","Suggested Order"]
    );

});

test("the Overview states the verified 81-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /81 Steam achievements/);

});

test("every one of the 81 official Deus Ex: Mankind Divided achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["We Are Human Beings","Pacifist","Foxiest of the Hounds","I Never Asked For This","The Supreme Enlightened","Spokes in Two Wheels","He's [Not] Dead, Jim","Laputan Machine","A Heated Combination","Ghost","Singh No Swan Song","Between Technology and the Divine","Honor Holds Us All Together","God Killer","The Golden Rookery","Core Driller","The Net Is Vast and Infinite","So Many Cucumbers","Time Traveler","Tablet Collector","Ruthless Efficiency","Humanity +","And Embrace What You've Become","The Jack of All Augments","The Invincible Body, Fighting an Iron Devil","Slow & Sharp","This is Great for Spring Cleaning","Ramming Speed!!","Express Elevator to Hell, Going Down","Invisible War","Ground Mail Was a Better Option","****! Taser Fist!","I Can Only Fight Enemies I Can See","Samizdat","K is for Kazdy","The Harvester","The Golden Ticket","The Last Harvest","01011000","Cult of Personality","All in the Family","Handle with Care","Neon Nights","Ballsy","Adept of the Metaverse","Fresh Out of the Package","Data Disciple","Data Detective","Data Expert","Data Master","Extract the Data…","Expose the Truth!","Murder He Wrote","Help Desk","Go Figure","Knock Knock","Too Hot to Handle","Clean Sweep","Hourglass","Ashes to Ashes","Excess Baggage Fees","Data Emperor","The 40-Yard Digital Dash","Camera, Action, Red-Handed","A Heist of Olympic Proportions","Bad Sector","Fire Sale","Burning Neodymium","Not The Rippers You Are Looking For","Now I'm Feeling A Little Motivated","You're Not Worthy As My Opponent","A Criminal Past","Winners Don't Use Drugs (or Biocells)","Code of Conduct","Don't Reach, Kid","Smooth Like Soap","Objection!","Quid Pro Quo","Dressed for the Occasion","A Just Cause","Umlauts or no Umlauts"];

    assert.strictEqual(officialAchievementNames.length, 81, "sanity check on this test's own reference list");

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
