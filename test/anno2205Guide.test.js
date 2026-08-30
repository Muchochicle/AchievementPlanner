import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/anno-2205.js";

test("the Anno 2205 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "anno-2205-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "anno-2205");

});

test("the Anno 2205 guide has all 10 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story & Sector Projects",
            "Trade Routes & The World Market",
            "Combat & Crisis Sectors",
            "Economy, Population & Corporation",
            "Construction & Special Actions",
            "Citizens, Voting & Milestones",
            "Tundra (Frontiers) Add-on",
            "Orbion & Frontiers Synthetics Add-ons",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 198-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /198 Steam achievements/);

});

test("every one of the 198 official Anno 2205 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["High-Wire Act", "The Second Wave", "Unlimited Energy", "Dam Right!", "To Trace an Ark", "Carved In Concrete", "Change Gonna Come", "Striking Oil", "A New Path", "A Safe Place", "Meteoric Rise", "Enjoy Your Stay!", "Project Manager", "A Matter For The Boss", "A Company of Good Record", "Good Fellows", "Outsider Appeal", "Counter Revolutionist", "Emergency Aid", "Research Assistant", "Preferential Relations", "Amicus Ex Machina", "On the Lookout", "Power Broker", "Don't Expect A Smile", "Agent of Unknown Powers", "Don't Expect Thanks", "Mingling Manager", "Nope", "Voices from the Past", "No Pressure", "Not On My Watch!", "Subdue the Earth", "Urban Gardening", "Cosmic Radiation", "Polar Survivor", "Flood Control", "Updating Firewall", "Courier of the Year", "Bodyguard", "Business Friends", "New Markets", "While Stocks Last", "Expense Is No Object", "Delivered On-Site", "Interpolar Express", "Hauling At The Moon", "Always On Schedule", "Brain Drain", "Energy Turnaround", "World Export Champion", "Global Player", "Sales Oriented", "Below Value", "Rainmaker", "Wildcatter", "Orders Are Orders", "Save the Arctic, Send Ice", "Anything But the Kitchen Sink", "Naval Power", "Diving Expedition", "Terror of the Seas", "Neptune's Wrath", "Under Arms", "Battlewise", "Bemedalled", "Winter Soldier", "Cold Blood", "No White Flags", "War Hero", "Full Service", "Drake's Revenge", "Brute Force", "Demolition", "Titanic", "Ring the Till", "Chief Economist", "My First Million", "Closing the Circuit", "In Machina", "Quantum Leap", "Walk Like a Lunarian", "Thirst Quencher", "This Is... Luna!", "Earl Grey, Hot", "Entertainment Pioneers", "Biotech Pioneers", "A.I. Pioneers", "There Will Be Cake", "Copycat", "The Old School", "Investment Banker", "Cross-Shareholder", "The One Percent", "Fully Automated", "Whiteout", "Wave Rider", "Creating Space", "Expansionist", "Chief Architect", "Cornucopian", "Looks Better There", "Gentrification", "Multinational Company", "Bridge Day", "Monumental", "Because I Can", "Beautiful Mind", "Silicon Valley", "Eye-Hand Coordination", "Changed My Mind", "Relocation Service", "Interior Decorator", "Eco Evangelist", "Chief Optimizer", "Narcissist", "High-end Technology", "Scientific Victory", "Know Your Tools", "Back to the Stone Age", "Medic!", "I'm Rubber, You're Glue", "Get Off Me!", "Stunning Presence", "Me and THAT Army", "Online", "Make It So", "The Upper Crust", "Housing Hypothesis", "Acknowledged", "Democracy, Ho!", "Council Matters", "Scientific Consultant", "Power Struggles", "The Establishment", "The Spy Who Loved Her", "Feed the World", "Part of the System", "Incorruptible", "Legacy", "Heir of the ANNOkrat", "Top of the World", "Shrinking the Big Five", "Anno Day", "Preservation Society", "Quiet Work Environment", "Hedgehopper", "I lost my glasses down there", "I. Drink. Your. Smoothie.", "Industrial Adulteration", "What's That Smell?", "Eden's End", "It's a Kind of Magic", "Globalization... Complete", "Annonaut", "Jack of all Trades", "Key to Life", "Matter of the Universe", "Future of Humankind", "Digital Veins", "Fuelling Civilisations", "Complete Assembly", "Reassembly", "Deorbiting", "Space Botanists", "Astrophysicists", "Duct Tape Experts", "First Flight", "Permanent Crew", "Station Commander", "Extraterrestrial Brain", "Agricultural Frontrunner", "Cyborg Developer", "Weightless Industry", "Electronics Revolutionary", "Energy Optimizer", "Station Pressurized", "The Micromanager From Above", "Human Batteries", "Unchained", "Among Friends", "Portfolio Diversification", "Dirty Deeds", "They Live", "Margin Call", "Fires Below", "Steampowered", "Ghost in the Machine", "Evolutionary Leap", "Settling on the Edge", "Get off my Lawn!", "We Shall Fight on the Beaches", "Counter-Terrorists Win!", "Eradicate THIS", "Island Hopper", "Machine city", "The Hague Called", "Dominium Terrae"];

    assert.strictEqual(officialAchievementNames.length, 198, "sanity check on this test's own reference list");

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
