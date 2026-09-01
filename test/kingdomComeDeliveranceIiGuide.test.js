import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/kingdom-come-deliverance-ii.js";

test("the Kingdom Come: Deliverance II guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "kingdom-come-deliverance-ii-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "kingdom-come-deliverance-ii");

});

test("the Kingdom Come: Deliverance II guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Main Story & Quest Outcomes",
            "Side Quests, Feats & Hardcore",
            "DLC: Brushes with Death, Legacy of the Forge & Mysteria Ecclesiae",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 83-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /83 Steam achievements/);

});

test("every one of the 83 official Kingdom Come: Deliverance II achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Déjà Vu", "Silence is Golden", "Vengeance", "New Horizons", "High Noon", "Bohemian Sniper", "Overkill", "Fancy Fighting", "Lights Out", "Hic-Hic-Boom", "Reforged", "Man's Best Friend", "Original Gunslinger", "Shiny", "Henry the Bruiser", "Die Another Day", "Tales of Kuttenberg", "True Cardinal", "Penitent One", "Groschen Must Flow", "Slip the Noose", "The End", "Been There Done That", "The Lord Taketh Away", "Nimble Fingers", "My Shoes!", "Old Raven", "Lent", "Rock and Stone!", "No Good Deed", "An Old Friend", "The Hydra's Heads", "Truce", "Master of Masters", "Without Protection", "Henry the Matchmaker", "Face to Face", "Under a Brown Flag", "Canny Shooter", "Under Pressure", "This Won't End Well", "A Bird in the Hand", "The Dirty Seven", "Martyr", "Jack of All Trades", "Weapon of Choice", "A Knight's Word", "Remember Remember…", "Hardcore Henry II", "Against All Odds", "Flagellum Dei", "Boneworks", "Nothing But the Best", "Rest in One Piece", "All Fun and Games", "Curiosity Killed the Cat", "Painted", "Confessor", "Poet's Gut", "Vengeance Solves Nothing", "Masterpiece", "Bohemian Graffitti", "Bohemians Rise Up!", "Martin’s Legacy", "Innovator", "Master of the Blacksmiths’ Guild", "Home Sweet Home!", "Nevermore", "Racing the Leech", "Two Brothers", "The Ragman’s Dream", "Silent Partner", "Voice of the Bell", "Warlock’s Riddle  ", "Fresh Air", "Holy Relic", "Better Safe Than Sorry", "Do Good to All People", "Feline Affection", "Survivor", "Stop Licking That!", "Ostraconophobia", "Quiet as a Church Mouse"];

    assert.strictEqual(officialAchievementNames.length, 83, "sanity check on this test's own reference list");

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
