import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/project-highrise.js";

test("the Project Highrise guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "project-highrise-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "project-highrise");

});

test("the Project Highrise guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Finances, Population & Tenants",
            "Tenant Types, Building & Utilities",
            "Contracts, Prestige, Consultants & Campaigns",
            "Meta, Scenarios & Las Vegas DLC",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 88-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /88 Steam achievements/);

});

test("every one of the 88 official Project Highrise achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Baron of Business", "Cashflow Chief", "Revenue Royalty", "It is Payday", "In the Black", "Swimming in Surplus", "Profound Proceeds", "People Mover", "Master of Puppets", "Lofty Landlord", "First 100 Days", "Happy Tenants", "Thrilled Tenants", "28 Days Later", "Destination Destiny", "Don't Feel a Loan", "Plebs Are Needed", "It's Technical", "Meet Me at HQ", "Lux Living", "Penthouse in the Sky", "Refined Palates", "Tasty Profits", "Dinner Dash", "Potent Potables", "Starred Dining", "Retail Revenue", "Emporium Empire", "Leveled Up Shops", "Boutique Benefits", "Starting Skyward", "Careful Constructor", "Such Great Heights", "Floor Galore", "Under One Roof", "Terrifically Trashed", "Maximum Reuse", "Grime is Not Good", "Delegate Maintenance", "Rehab Expert", "Smooth Service", "Get Electrified", "Phoning It In", "Tuned In", "Pipe Up", "It's a Gas", "Office Bigwigs", "Loft Life", "Glut of Gastronomy", "Luxury Boutiques", "Your Prestige is Rising", "Established Fame", "Sky High Stature", "Need a Consult", "Upgrade Unlock", "Aestheticly Pleased", "I'm Busy Ruling", "Smooth Operator", "Campaign Launch", "Apartment Awareness", "Infrastructure Info", "Commercial Campaigns", "Office Ovation", "Artfully Done", "Decorator's Touch", "Curated Class", "Artistic Largesse", "Plaza Plan", "Statue Stature", "Water Features", "Proper Walls", "We Don't Need No Education", "Meet ADA/360", "Golden Opportunity", "Scenario Success", "Scenario Master", "Mod Squad", "Experimential Experience", "Three of a Kind", "Four of a Kind", "Full House", "Royal Flush", "Sandbagger", "In the Money", "Double Down", "Poker Face", "High Hand", "The King of Cool"];

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
