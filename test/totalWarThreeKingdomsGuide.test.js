import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/total-war-three-kingdoms.js";

test("the Total War: THREE KINGDOMS guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "total-war-three-kingdoms-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "total-war-three-kingdoms");

});

test("the Total War: THREE KINGDOMS guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Base Game",
            "Yellow Turbans",
            "Eight Princes",
            "Mandate of Heaven & A World Betrayed",
            "The Furious Wild",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 99-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /99 Steam achievements/);

});

test("every one of the 99 official Total War: THREE KINGDOMS achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "The Empire, Long Divided, Must Unite", "The Mandate of Heaven", "Huangdi", "Han Shot First", "Humble Beginnings",
        "Burning Down the House", "First Steps", "To Dust", "Simply the Best", "Branching Out",
        "Satisfaction Guaranteed", "Fair-weather Friend", "Settlers of the Han", "GG No Re!", "Jade Empire",
        "First Taste", "They Who Control The Spice...", "...Controls the Universe!", "Forbidden City", "One Arrow, Two Hawks",
        "An Ambush That's Sure", "Point Break", "Blood-drenched & Fancy Free", "Now the Stuff of Dreams", "A Land of Milk & Honey",
        "Firestarter", "Though the Tortoise Lives Long", "One Hundred Thousand Troops", "Demolition Man", "If You Can't Surrender, Die",
        "If You Can't Die, Surrender", "Friend of Winter", "Live & Let Spy", "No Small Deed Left Undone", "White Horse General",
        "Bandits of the Marsh", "Oath of the Peach Garden", "Diaochan's Revenge", "Party of Five", "Neighsayer",
        "Son of the Tortoise", "Guangdong Coalition", "Take No Prisoners", "This is Total War!", "Frenemies",
        "When the Sun Rises in the West", "BFFs", "Good Luck, Have Fun!", "Ill Omen", "Way of the Tao",
        "Eye of the Beholder", "A Sharp Point Sticks Out", "Special Delivery", "Here Comes the Sun (Jian)", "Double Happiness",
        "Store Some Ice", "There Will Be Fish Every Year", "Dù Zǐténg Will See You Now", "River Crab Pond", "Don't Cheat At The Games",
        "The Knights Who Say Qî", "Vase On A Table", "A Battle A Day Keeps The Doctor Away", "Lord of Heaven", "Lord of the People",
        "Lord of the Land", "Mandate Regained", "The Yellow Sky Has Come", "History Repeats Itself", "Restore the Empire",
        "Yellow Sky", "Fit For a Prince", "Prince of War", "Spies On Me", "Civil Service",
        "Horse Armour", "Upon Closer Inspection", "Sunny Side Up", "Align of Duty", "Usurp Expectations",
        "The World's Protector", "The Librarian", "Trophy Hunter", "First Blood", "Among Men, Lü Bu",
        "Multi-Kill", "Like My Father Before Me", "You Killed My Father, Prepare To Die!", "Fear the Tiger more than the government", "White Tiger Burning Bright",
        "Many Faces, Many Names", "Honour Among Thieves", "Bandit Emperor", "I'm the Man", "That Still Only Counts as One",
        "Tiger King", "Lords of the South", "The Purist", "The Barbarian Emperor"
    ];

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
