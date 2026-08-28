import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/counter-strike-source.js";

test("the Counter-Strike: Source guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "counter-strike-source-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "counter-strike-source");

});

test("the Counter-Strike: Source guide has all 8 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Bomb & Defusal",
            "Hostage Rescue",
            "Weapon Kill Counts & Masteries",
            "Round & Match Achievements",
            "Map Veterans",
            "Combat Feats & Milestones",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 147-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /147 Steam achievements/);

});

test("every one of the 147 official Counter-Strike: Source achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Someone Set Up Us The Bomb", "Boomala Boomala", "The Hurt Blocker", "Body Bagger", "Corpseman",
        "God of War", "Second to None", "Combat Ready", "Counter-Counter-Terrorist", "Rite of First Defusal",
        "Short Fuse", "Newb World Order", "Pro-moted", "Leet-er of Men", "Points in Your Favor",
        "You've Made Your Points", "A Million Points of Blight", "Ballistic", "Lost and F0wnd", "Cowboy Diplomacy",
        "SAR Czar", "Good Shepherd", "Freed With Speed", "Ammo Conservation", "War Bonds",
        "Spoils of War", "Blood Money", "Premature Burial", "Night Hawk .50c Expert", "KM Tactical .45 Expert",
        "9x19 Sidearm Expert", "228 Compact Expert", ".40 Dual Elites Expert", "ES Five-Seven Expert", "Pistol Master",
        "Magnum Sniper Rifle Expert", "CV-47 Expert", "Maverick M4A1 Carbine Expert", "Bullpup Expert", "Krieg 552 Expert",
        "Krieg 550 Commando Expert", "IDF Defender Expert", "Clarion 5.56 Expert", "Schmidt Scout Expert", "D3/AU-1 Expert",
        "Rifle Master", "ES C90 Expert", "KM Sub-Machine Gun Expert", "Schmidt Machine Pistol Expert", "Ingram Mac-10 Expert",
        "KM UMP45 Expert", "Sub-Machine Gun Master", "Leone 12 Gauge Super Expert", "Leone YG1265 Auto Shotgun Expert", "Shotgun Master",
        "HE Grenade Expert", "Knife Expert", "M249 Expert", "Master At Arms", "The Cleaner",
        "Variety Hour", "Dead Shepherd", "War of Attrition", "Magic Bullet", "Kill One, Get One Spree",
        "A World of Pane", "Battle Sight Zero", "Primer", "Finishing Schooled", "Shot With Their Pants Down",
        "Blind Ambition", "Blind Fury", "Friendly Firearms", "Expert Marksman", "Shrapnelproof",
        "Make the Cut", "The Bleeding Edge", "Defuse This!", "Safety First", "Hip Shot",
        "Eye to Eye", "Sknifed", "Snipe Hunter", "Dead Man Stalking", "Three the Hard Way",
        "Street Fighter", "Blitzkrieg", "Piece Initiative", "Give Piece a Chance", "Piece Treaty",
        "Clusterstruck", "Wild Gooseman Chase", "Blast Will and Testament", "Target-Hardened", "Mercy Rule",
        "Clean Sweep", "Mad Props", "Akimbo King", "The Art of War", "Dead of Night",
        "The Unstoppable Force", "The Immovable Object", "Head Shred Redemption", "Assault Map Veteran", "Compound Map Veteran",
        "Havana Map Veteran", "Italy Map Veteran", "Militia Map Veteran", "Office Map Veteran", "Aztec Map Veteran",
        "Cobblestone Map Veteran", "Chateau Map Veteran", "Dust Map Veteran", "Dust2 Map Veteran", "Inferno Map Veteran",
        "Nuke Map Veteran", "Piranesi Map Veteran", "Port Map Veteran", "Prodigy Map Veteran", "Tides Map Veteran",
        "Train Map Veteran", "Death From Above", "Bunny Hunt", "Aerial Necrobatics", "Black Bag Operation",
        "Cold War", "Killanthropist", "The Frugal Beret", "Defusus Interruptus", "Participation Award",
        "Repeat Offender", "Decimator", "Overkill", "Command and Control", "Insurgent",
        "Can't Keep a Good Man Down", "Dressed to Kill", "Hat Trick", "Ten Angry Men", "Excessive Brutality",
        "Spray and Pray", "Friendly Attire", "The Road to Hell", "Avenging Angel", "Clan Warfare",
        "Happy Camper", "Gift Grab"
    ];

    assert.strictEqual(officialAchievementNames.length, 147, "sanity check on this test's own reference list");

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
