import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/triangle-strategy.js";

test("the TRIANGLE STRATEGY guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "triangle-strategy-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "triangle-strategy");

});

test("the TRIANGLE STRATEGY guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        ["Overview","Convictions & Story Paths","Battle & Exploration","Unit Mastery","Character Stories","Suggested Order"]
    );

});

test("the Overview states the verified 108-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /108 Steam achievements/);

});

test("every one of the 108 official TRIANGLE STRATEGY achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Champion of a New Era","One and All","Defender of Morality","Seeker of Utility","Believer of Liberty","Unshakable Convictions","Negotiator","Unanimous","Tiebreaker","As Lord","The Enemy of an Enemy","Birthright","Secret of the Continent","Wrongdoing Exposed","Never-Ending Path","The End of Sin","Silent Sea","Grand Finale","First Campaign","Veteran Warrior","Efficiency Is Key","Working Together","From Behind","Playing with Fire","Playing with Ice","Playing with Water","Playing with Lightning","Forces Collide","From Above","On the Defensive","Healer","Supporter","Enfeebling Force","Item User","One Fell Swoop","Few but Fierce","Careful!","Spoils of War","Shrewd Strategist","Bold Battler","A Heavy Purse","Reaper of 100 Souls","Tavern Regular","Feline Fanatic","Sundry Shop Regular","Weaver of Histories","Avid Reader","Wise Warrior","Smithy Regular","Swordmaster","Master Cavalryman","Master Strategist","Fire Master","Master Curist","Master Assassin","Master Flyer","Master Guardian","Bow Master","Ice Master","Master Advisor","Master Dancer","Prayer Master","Big Boss","Treasure Hunter","Great General","Cure Knight","Spell Master","Medicine Master","Craft Master","Divine Spear","Divine Bow","Winguard","Spirit Master","Elocutionist","Divine Fist","Trick Master","Numerologist","Timespeaker","Land Master","King and Friend","A Toast to the Future","Beneath the Starry Sky","Tutor","True Parents","To the Open Skies","For an Eternity","A Promise Fulfilled","Groundbreaking Research","A Lord Worth Serving","A Useful Poisonous Plant","A Princess and Her People","Bandit Boss","Allies of the Poor","For a Peaceful World","A Spot of Sunshine","Disciple of the Archmage","The Value of a Life","The Perfect Weapon","A Righteous Kingdom","An Old Soldier's Regrets","A Shield for the People","Blessed Rain","A Merchant's Joy","Unwavering Fist","Of Circuses and Smiles","The Automaton's Master","Dreaming of Mother","Every Corner of Norzelia"];

    assert.strictEqual(officialAchievementNames.length, 108, "sanity check on this test's own reference list");

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
