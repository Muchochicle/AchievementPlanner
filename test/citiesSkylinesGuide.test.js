import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/cities-skylines.js";

test("the Cities: Skylines guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "cities-skylines-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "cities-skylines");

});

test("the Cities: Skylines guide has all 9 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Building the City",
            "Weather, Seasons & Disasters",
            "Transport Lines",
            "Green Cities, Parklife & Industries",
            "Campus & Sunset Harbor",
            "Airports, Plazas, Financial Districts & Hotels",
            "Hidden Achievements (Race Day)",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 135-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /135 Steam achievements/);

});

test("every one of the 135 official Cities: Skylines achievement names is mentioned somewhere in the guide", () => {

    // The full, official list this guide is built from
    // (backend/catalog/games/cities-skylines.json).
    const officialAchievementNames = [
        "Pioneer", "Decorator", "Terraformer", "Well Informed", "City Planner",
        "Lawmaker", "Power at Your Fingertips", "Heavenly City", "Medic!", "A Huge Hadron",
        "Beam Me Up", "New Eden", "Short Fuse", "I Want It All", "Metropolis",
        "Distroy", "City in Motion", "City in Motion 2", "Climbing the Social Ladder", "Unpopular Mayor",
        "Rolling in Dough", "Frenetic Player", "Happy Town", "Tough City", "Fire Watch",
        "The Safest Town", "Professional Dumper", "Earthloving City", "Higher Education", "SIMulated City",
        "Safe City", "Power to the People", "Make Them Pay", "Leisure Suites", "Playing With The Boys",
        "Prison Break", "1001 Nights", "Does My Bum Look Big In This?", "Singing In The-", "Foggy Weather",
        "Brrr!", "Get Your Snowshoes Ready!", "Here's A Tram", "I Love Trams!", "Are They Naked In There?",
        "It's Wintertime!", "Speed up!", "The Plowmaster", "Quay-King", "With Canals You Can!",
        "We need snorkels!", "Shake It Up!", "It's heading right for us!", "Drop the Base", "Run, Bambi!",
        "Thunder and Lightning", "Twist and shout", "What the...?", "Eternal City", "Creator",
        "We Have A Winner!", "The Underdog", "Rejoice And Be Ferry", "Ferry Faerie", "Triorail",
        "Not So Mono", "Clark Cable", "Cables Galore", "Blimp? Blimp.", "Put Some Blimp In Your Blimp",
        "Combo Breaker!", "Nomen Est Omen", "Centurion", "It's Called Steve", "Totally In Motion",
        "Reporting!", "Super Self-Sufficient", "I to the T", "Organistic", "Green Energy",
        "Friendly Teaching", "Greenest City", "The Park To Rule All Parks", "Parking Not Forbidden", "Z00",
        "Ambulare", "Maintain That Park", "Coaster Tycoon", "Naturally", "Sights To Be Seen",
        "Full Capacity", "Serial Investor", "Offshore Assets", "Industry Tycoon", "Postman",
        "Just Tolling", "Scaling Up", "Student Housing Project", "Education Nation", "Distinguished Academics",
        "Varsity Sports Patron", "Higher Learning", "Academic Scholar", "For For-Profit Education!", "Aquaculture",
        "Fisher King", "Multidisciplinary Transport Tycoon", "Trolleyface", "World of Rotorcraft", "Come Fly With Me!",
        "The Waters of Our Lives", "Airline Tycoon ", "Airlifter", "Airport Architect", "Airfield Expertise",
        "High-cost-carrier ", "Garbage Collection Issues", "The Sweetest City", "Very Focused", "Can't Buy Me Love ",
        "All In", "Cash Flow", "So Much Cash!", "No risk, no fun!", "Very Accommodating",
        "Peak Season", "Fully Booked!", "Start your engines!", "Grand Circuit Pro", "I Run This City",
        "Tour de Metro", "Foot Traffic", "White Night", "He Did What in This Cup?", "Grande Parade"
    ];

    assert.strictEqual(officialAchievementNames.length, 135, "sanity check on this test's own reference list");

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
