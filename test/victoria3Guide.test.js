import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/victoria-3.js";

test("the Victoria 3 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "victoria-3-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "victoria-3");

});

test("the Victoria 3 guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Nation Challenges - Part 1",
            "Nation Challenges - Part 2",
            "Nation Challenges - Part 3",
            "Nation Challenges - Part 4",
            "Systems & Feats",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 141-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /141 Steam achievements/);

});

test("every one of the 141 official Victoria 3 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Peccavi", "Perkeletankki", "Luxurious Luxembourg", "Anarchy in the UK", "Muhammed Ali's Ambition",
        "An Empire under the Pun", "I didn't vote for Pedro", "Go West, Young Man", "The Western Protectorate", "The Paris Commune",
        "Barbary's Back", "Minors, not Miners", "The Healthy Man of Europe", "Habsburg Resurgence", "The Great Game",
        "Bourbon for everyone!", "Manifest Mexico", "American Territory", "Broken Promises", "The Berlin Conference",
        "Belle Époque", "Deeds, not words!", "First flight", "Victorian Century", "Poor, Huddled Masses",
        "Billionaire", "Serf’s up", "Risorgimento", "Three Hurrahs", "Solomon's Quest",
        "I am a Scandinavian", "Enlightened Despot", "Mightier than the Sword", "Revolutionary", "Reading Campaign",
        "We are not amused", "Institutional", "Poppydock", "Grander Colombia", "Inventive",
        "Educated", "Tycoon", "Hegemon", "Caretaker", "Star-Swarmed Banner",
        "Amish Paradise", "Euphoric", "It Never Ends", "Hexagon No More", "L'Allemagne, c'est Rien",
        "Vox Populi", "Emperor Norton", "Agitate Elsewhere", "Shut the Door Behind You", "Crush the Commune",
        "Military Junta", "Huge Ego, Sorry", "Authoritarian", "Breadbasket", "Meiji Restoration",
        "Magnanimous", "Federation Day", "Not Yet Lost", "Estado Novo", "Viva la Confederación!",
        "Deșteaptă-te, Române!", "Piratini, not Pira-tiny", "Stonks", "Banana Republic", "Republic or Death!",
        "SPQR", "Devil's Railroad", "Bootlicker", "I'm the Captain Now", "The New Order",
        "Hyperpeace", "Durran Durran", "Great Game no re", "Honor and Life", "Iranzamin",
        "For Twelve Years You Have Been Asking", "Can't Touch This", "Standard Oil", "Diplomatic Victory", "Hermit Kingdom",
        "Cult of Reason", "Declaration of Independence", "ProleCorp", "Azadi", "Be Prepared!",
        "On the Edge", "Caste Away", "The Real Movement", "Folkhemmet", "Cosmopolitan",
        "Our Words are Backed...", "The Man Who Would be King", "It's a Blockade!", "Fordlandia", "Venice, Vidi, Vici",
        "Yes, We Have Bananas!", "Wall of Text", "Swiss Bank Account", "Franchising", "Champagne Socialist",
        "Systembolaget", "All Quiet on the Western Front", "Viribus Unitis", "Quill and Bayonet", "I’m Feeling Hungary",
        "Brotherhood and Unity", "Teamkiller", "David Slays Goliath", "Prussia of the Balkans", "Sorbia is Serbia",
        "Biedermeier", "EXACTLY 100!!!", "Sugar Rush", "The Spanish Lake", "A Las Barricadas!",
        "Regeneration", "Deconquista", "The Most United Kingdom", "One More Time", "Portugal is Not a Small Country!",
        "An Offer You Can't Refuse", "Full Circle", "Mikasa es su Casa", "Nothing Personnel, Kid", "Railroad Taikun",
        "Martin Anward's Pirates!", "Kobu Gattai", "Nobody Did Their Duty", "Wealth, Fame, Power", "Thanks, Obama",
        "Golden Spirit", "Three Mountains", "Thing, Japan", "Knock Knock", "Son of Värmland",
        "Everyone Disliked That",
    ];

    assert.strictEqual(officialAchievementNames.length, 141, "sanity check on this test's own reference list");

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
