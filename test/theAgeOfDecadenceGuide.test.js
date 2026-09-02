import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/the-age-of-decadence.js";

test("the The Age of Decadence guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "the-age-of-decadence-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "the-age-of-decadence");

});

test("the The Age of Decadence guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        ["Overview","Openings & Backgrounds","Teron & Maadoran","Questlines & Approaches","Ganezzar & Endgame","Endings","Suggested Order"]
    );

});

test("the Overview states the verified 109-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /109 Steam achievements/);

});

test("every one of the 109 official The Age of Decadence achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["\"Is Life Always This Hard?\"","Killed More People Than Malaria","Killer of Men","Terminator","Demonbane","Stone-Cold Killer","300!","Ordu New Champion","Kingslayer","The Nameless One","Grim Reaper","Champion of the Arena","Mercenary","Thief","Assassin","Loremaster","Drifter","Grifter","Merchant","Praetor","It's a Thing of Honor...","Under New Management","The Great Cart Robbery","Pulling the Strings","On His Lordship's Secret Service","To Serve and Protect","Hero of Harran's Pass","It's Just Business. Nothing Personal...","Anyone Can Be Killed","The Game of Thrones","Beware of Greeks Bearing Gifts","Rough Men Standing Ready To Do Violence","Liegeman (House Daratan)","Liegeman (House Aurelian)","Legionary (Imperial Guards)","Centurion (Imperial Guards)","Legatus (Imperial Guards)","The City of All Cities","The Men of the Plains","The Highest Peak","A Trip Into The Past","Gazed Into The Abyss","Great Vengeance and Furious Anger","Once a Traitor...","My Precious...","Explosion Expert","Silver-Tongued Devil","Diplomat","Kingmaker","\"Good Morrow To You, Magistrate!\"","Never Felt Better","Peacemaker","Extremely Persuasive","Interrogator","Infiltrator","Manipulator","Collector of Rarities","Antiquities Expert","A Magus!","The Chosen One","Personal Magnetism","Godslayer","Deal with the Devil","Patriot Militia Sponsor","Well-Trained","The House of Wisdom","Take Heed And Bear Witness","Arch of the Covenant","Friends on the Other Side","Hidden from the World","The Lich","The Right Thing","The Eye of the Desert","MR. FIXIT","The City in the Sky","Computer Literate","My Vision is augmented","Urban Explorer","The Pax Imperium","Airworthy!","The Birthplace of the Gods","The Holy City","Iron Man","Unto the Breach","Mage-Killer","Power to the People","Checks and Balances","Knights of the Temple","The Imperial Army","The First Sword","The Opium of the People","Corporate Interests","The Lord of Lowtown","Aggressive Negotiations","The Inquisitor","The Guildsman","Matters of Faith","Delenda Est","The Gods Shalt Walk Among Us","Hellgate","Dead River","Fire in the Hole!","The One God","Desperate Times","Kingdom of God","Novus Ordo Seclorum","Godless World","Sleeping Dogs","Burn it"];

    assert.strictEqual(officialAchievementNames.length, 109, "sanity check on this test's own reference list");

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
