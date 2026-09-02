import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/batman-arkham-knight.js";

test("the Batman: Arkham Knight guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "batman-arkham-knight-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "batman-arkham-knight");

});

test("the Batman: Arkham Knight guide has all 8 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        ["Overview","Main Story","Most Wanted Side Missions","The Riddler","Combat, Predator & Batmobile Feats","AR Challenges & the Iceberg Lounge","Story DLC (Batgirl, Harley Quinn, Red Hood)","Suggested Order"]
    );

});

test("the Overview states the verified 113-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /113 Steam achievements/);

});

test("every one of the 113 official Batman: Arkham Knight achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["A Battle Within","A Heart Broken in Two","Absolution","Angel in the Dark","As the Crow Flies","Be Not Afraid","Beautiful Boy","A Leap of Faith","Blind Love","Blunt Trauma","Brotherhood of the Fist","City of Fear","Cold World","Creature of the Night","Cycle of Violence","Dark Allegiances","Dark Wings Fly Away in Fear","Days of Fire","Brutality 101","Death and Glory","Death by Design","Death of Innocents","Double Jeopardy","Savage Metal","Fear of Faith","Fear of Success","Fortunate Son","Gates of Gotham","Gotham After Midnight","Gotham Underground","Jekyll & Hyde","Journey into Knight","Judgment Day","Knightfall","Lethal Pursuits","Living Hell","The Monster Machine","Master of Fear","Nine Lives","No Man's Land","Pieces of the Puzzle","Practice Run","Riddle Me That","Riddler on the Rampage","The Cat and the Bat","Dirty Tricks","Scar of the Bat","Seduction of the Gun","Sins of Youth","Strange Deadfellows","Streets of Gotham","The Burning Question","The Cult","The Frequency of Fear","The Long Halloween","The Primal Riddle","The Real Deal","The Riddle Factory","Point of Impact","The Road Home","The Road to Hell","Run Through the Jungle","Touch of Death","Trail of Fear","Two Faces of Fear!","Two Sides of the Same Coin!","Choice of Weapons","Who Rules The Night","With a Vengeance!","A Blade of Memory","A House Made of Spun Glass","A Fire in the Heavens","The Laughing Fish!","A Courtship of Razors","Ambush","Weird War Tales","All Snug in Their Beds","Cuckoo for Incarceration","Under The Red Hood","Street Demonz","Gangland Express","Rough Justice","Joy Ride","The Cat Came Back","Succession Plans","The World's Finest","The Big Leagues","Acts of Violence","Relentless","Shock and Awe","Motherlode","Higher Learning","Vengeance Unlimited","The Demon Lives Again!","Daughter Of The Demon!","Ashes to Ashes","The Scene of the Crime","Head Games","In Storybook Endings","Cold Case","Out in the Cold","The Resurrection and the Life","The Beast Beneath","Breaking the Skin","Evolution","Life After Death","What the Butler Saw","Secrets of the Batcave","Silent Night, Deadly Night","Eternal","The Chill in the Air","The Curtain Falls","Requiem for a Killer"];

    assert.strictEqual(officialAchievementNames.length, 113, "sanity check on this test's own reference list");

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
