import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/crusader-kings-3.js";

test("the Crusader Kings III guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "crusader-kings-3-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "crusader-kings-3");

});

test("the Crusader Kings III guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Base Game",
            "Flavour Packs",
            "Major Expansions (Part 1)",
            "Major Expansions (Part 2)",
            "Additional Content",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 188-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /188 Steam achievements/);

});

test("every one of the 188 official Crusader Kings III achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Until Death Do Us Part", "Way of Life", "A Legacy to Last the Ages", "A House of My Own", "Dreadful Ruler",
        "Stressful Situation", "Not So Feudal System", "The Succession is Safe", "Álmost There", "Last Count, First King",
        "Prolific", "A Name Known Throughout the World", "End of an Era", "Turning to Diamonds", "Reconquista",
        "Seven Holy Cities", "Frankokratia", "Celebrity", "Saint", "Keeping it in the Family",
        "Non Nobis Domine", "Trapped in the Web", "Followed by Shadows", "What Nepotism?", "Rise from the Ashes",
        "The Emerald Isle", "From Rags to Riches", "Give a Dog a Bone", "Al-Andalus", "Wily as the Fox",
        "Sibling Rivalry", "Blood Eagle", "Kings to the Seventh Generation", "Norman Yoke", "Royal Dignity",
        "Going Places", "Land of the Rus", "Above God", "Paragon of Virtue", "The Things Love Does for Us",
        "Fine Print", "Know Your Place", "Monumental", "It's not a Cult!", "The Things We Do for Love",
        "An Unfortunate Accident", "Death Did Us Part", "For the Faith!", "Bad Blood", "Seductive",
        "The Emperor's New Clothes", "A Perfect Circle", "Carolingian Consolidation", "Moving up in the World", "Beacon of Progress",
        "Mother of us All", "Far from Home", "Miklagarðaríki", "Canute the Greater", "King of all the Isles",
        "Faster than the Fox", "Völva", "Saga in Stone", "First of the Crusader Kings", "Vladimir's Second Choice",
        "A Dangerous Business", "Patronage", "Converging Paths", "Changing Course", "Hoarder",
        "Crème de la Crème", "Polyglot", "Inspirational", "One of a Kind", "True Tolerance",
        "Delusions of Grandeur", "Bod Chen Po", "Turkish Eagle", "Rise of the Ghurids", "Brave and Bold",
        "Lingua Franca", "Beta Israel", "They Belong in a Museum", "I Made This", "Nobody Comes to Fika",
        "The True Royal Court", "History's Best Friends", "Basque In My Glory", "Friendship Is Magic", "High Stakes",
        "Iberia or Iberia?", "The Andalusian Inquisition", "Iberian Hostilities", "Iberian Conciliation", "Iberian Compromise",
        "Holidaying in Iberia", "Legacy of The Campeadores", "The Grandest Tour", "Your Eternal Reward", "Imperial March",
        "Black Dinner", "There and Back Again", "The Very Best", "Like No One Ever Was", "A Thousand and One Night",
        "A Knight's Tale", "Hunting Accident", "Lions and Tigers and Bears, Oh My!", "Fly, My Pretty!", "Pathway to Heaven",
        "Sir Lance-a-Lot", "I'm in my Element(s)", "Ahab", "Little William Marshal", "A True and Perfect Knight",
        "A.E.I.O.U. and Me", "The Iron and Golden King", "Royal Flush", "Fiscal Responsibility", "Iranian Revival",
        "Abbasid Might", "Darius' Revenge", "Mulct Them Dry", "Rich in Diversity", "The Ummayad Strikes Back",
        "Shia Reborn", "All Your Caliphate Are Belong To Us", "Not Today", "Divine Right", "You'll Never Take Me Alive!",
        "The Pharaoh Islands", "Canonized", "Upward Mobility", "Can't Touch This", "Legendary!",
        "Pay Respects", "Local Legend", "Neverending Story", "The old man of the mountain", "Band of Brothers",
        "Mio Cid", "Birthright", "Historically Inaccurate", "Quantum Leap", "Kingdom of Heaven",
        "New Management, same as the Old Management", "Rags to Riches to Rags to Riches", "Tamar Mepe", "Despoiler of Byzantium", "Chaos is a Ladder",
        "Epic Paperwork", "Against the Odds", "In Good Estate", "It's OK, I Got a Permit", "Despotic",
        "Byzywork", "Not Content to Serve", "Started from the Bottom now we're ERE", "The Stallion that Mounts the World", "Nobody's Business",
        "Tribute Band", "This Chinggis Everything", "Steppe by Steppe", "In Xanadu", "Settling In",
        "Blood of my Blood", "Con-fed-up", "Shut Up, Nerge", "Fishing in China", "The Heavenly Kingdom",
        "Sword of Japan", "A Living God on Earth", "Grand Governor", "Mandate of Heaven", "Cut off the Head... and the Body will Follow",
        "Shōgun", "Devaraja", "Confucian Scholar", "Bloc Politics", "Upper-upper",
        "How it's done, done, done", "Daits How You Do It", "Humble Beginnings", "Flying Colors", "Highway of Ideas",
        "Yes I need, I need my Samurai", "Stamp of Approval", "Promised Land"
    ];

    assert.strictEqual(officialAchievementNames.length, 188, "sanity check on this test's own reference list");

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
