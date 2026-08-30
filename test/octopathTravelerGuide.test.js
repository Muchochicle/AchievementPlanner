import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/octopath-traveler.js";

test("the Octopath Traveler guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "octopath-traveler-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "octopath-traveler");

});

test("the Octopath Traveler guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "The Eight Travelers' Stories",
            "Secondary & Advanced Jobs",
            "Completion, Postgame & Field Commands",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 88-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /88 Steam achievements/);

});

test("every one of the 88 official Octopath Traveler achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["A Story All Your Own", "Setting Out – The Kindling", "Gentle Guidance", "The Savior", "A Hill to Remember", "Setting Out – The Search for Truth", "Traces of the Tome", "The Demonic Headmaster", "For the Future's Sake", "Setting Out – In Search of Treasure", "The Merchants' Fair", "The Most Precious Treasure", "The Next Chapter", "Setting Out – Renewed Purpose", "Reasons for Wielding", "The Twin Blades of Hornburg", "To Protect Those in Need", "Setting Out – Revenge", "Faith Shall Be Your Shield", "A Familiar Place", "A Vow Fulfilled", "Setting Out – Healing", "The Quack", "Life's Worth", "His Hero's Words", "Setting Out – For Master", "Chasing Master's Footprints", "Dragon Hunting", "Master and Prentice", "Setting Out – Freedom", "Chasing the Dragonstones", "\"Partner\"", "A Wanderer's Life", "Aelfric's Wisdom", "Alephan's Wisdom", "Bifelgan's Wisdom", "Brand's Wisdom", "Sealticge's Wisdom", "Dohter's Wisdom", "Draefendi's Wisdom", "Aeber's Wisdom", "Balogar's Wisdom", "Steorra's Wisdom", "Winnehild's Wisdom", "Dreisang's Wisdom", "Aelfric's Auspices", "Alephan's Enlightenment", "Bifelgan's Bounty", "Brand's Thunder", "Sealticge's Seduction", "Dohter's Charity", "Draefendi's Rage", "Aeber's Reckoning", "Balogar's Blade", "Steorra's Prophecy", "Winnehild's Battle Cry", "Dreisang's Spell", "Lone Traveler", "Fleetfoot", "Closure", "Worth the Detour", "Master of Orsterra", "Skillful", "Full Support", "Treasure Hunter", "Eagle-Eyed", "Strategist", "Collector", "The Strongest Sojourner", "Moneybags", "Millionaire", "Better Safe Than Sorry", "Novice Scrapper", "Fighter", "Brawler", "Ultimate Power", "Traveler", "Seasoned Traveler", "Renowned Traveler", "Training", "Lead the Way", "In the Know", "Bargain Hunter", "A New Challenger", "Irresistible", "Tell Me More", "Sticky-Fingered", "Start Something"];

    assert.strictEqual(officialAchievementNames.length, 88, "sanity check on this test's own reference list");

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
