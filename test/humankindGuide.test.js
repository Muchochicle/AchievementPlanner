import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/humankind.js";

test("the HUMANKIND guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "humankind-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "humankind");

});

test("the HUMANKIND guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Empire Feats & Production Milestones",
            "Era Stars & Battle/Campaign Feats",
            "Victory Conditions & Completion",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 99-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /99 Steam achievements/);

});

test("every one of the 99 official HUMANKIND achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Everybody's Friend", "Millionaires Club", "Midas Touch", "Omnist", "Animal Lover", "Welcome to the Club", "Welcome to the Collective", "Welcome to the Borg", "Extremist", "Pacesetter", "From Zero to Hero", "King of Kings", "Unplugged", "Disconnected", "Terminated", "Wonder-Full", "Collector", "Hoarder", "Obsessive", "Polymath", "Key Influencer", "I'm a Lumberjack...", "Unbend the Knee", "Does Not Play Well With Others", "Deterrence Era", "M.A.D.", "Nuclear Power", "All You Can Eat Buffet", "Captain of Industry", "Money, Money, Money", "Nerdopolis", "Just Eat", "Industrial Action", "Money for Nothing", "Eureka!", "Hard Rock Knife", "Price Cuts", "Swordpay", "Hatchepsut", "Sejong", "Timur", "Antoine-Augustin", "Nikola", "Moctezuma", "Khufu", "Victoria", "Genghis", "Jawaharlal", "Ada", "Napoléon", "Blasphemer", "Don't Know Much About History", "Neanderthal", "Trans-Siberian Lover", "All the Things", "Talk to the Hand", "In Sargon's Footsteps", "Landstalker", "Material World", "Continental Shift", "MVP", "One Man Army", "Check my Bling!", "Crossroads of the World", "One True Faith", "Capital Punishment", "Big Red Button Masher", "Falling Out", "Megalopolis", "Gigalopolis", "Seven Wonders of My World", "Sí, Patrón", "Row, Row, Row Your Boat", "There Can Be Only One", "Lord of the Flies", "Peacemonger", "Spartan", "The Six-Turns War", "No Man Down", "Rave Culture", "An Endless Civilization", "The Meek Shall Inherit the Earth", "Toe in the Water", "Heroic Patience", "Flawless", "Cartographer", "Behold!", "Jack of All Trades", "They Know Not What They Ask", "Culture Vulture", "Life of Luxury", "How the Mighty Have Fallen", "The Stars My Destination", "Ave Caesar!", "Punching Up", "The Land of Smiles", "A Meeting of Minds", "Rewilder", "Close Encounters of the Endless Kind"];

    assert.strictEqual(officialAchievementNames.length, 99, "sanity check on this test's own reference list");

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
