import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/vampire-survivors.js";

test("the Vampire Survivors guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "vampire-survivors-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "vampire-survivors");

});

test("the Vampire Survivors guide has all 13 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Level, Timer & Stage Milestones",
            "Weapon Evolutions",
            "Character Mastery & Endgame Runs",
            "Boss Fights & Kill Counts",
            "Secret Items & Collectibles",
            "The Collection & True Completion",
            "Hyper Mode & Banish Challenges",
            "Legacy of the Moonspell",
            "Tides of the Foscari",
            "Post-Launch Extras & Adventures",
            "The Hardest Challenges",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 243-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /243 Steam achievements/);

});

test("every one of the 243 official Vampire Survivors achievement names is mentioned somewhere in the guide", () => {

    // The full, official list this guide is built from
    // (backend/catalog/games/vampire-survivors.json).
    const officialAchievementNames = [
        "Wings", "Crown", "Hollow Heart", "Runetracer", "Peachone", "Arca", "Bracer", "Candelabrador", "Porta", "Duplicator", "Ebony Wings", "Spellbinder", "Empty Tome", "Fire Wand", "Garlic", "Clover", "Magnet", "Clock Lancet", "Cross", "Lightning Ring", "Mortaccio", "Pentagram", "Hyper Mad Forest", "Hyper Inlaid Library", "Inlaid Library", "Pummarola", "Stone Mask", "Bloody Tear", "Holy Wand", "Thousand Edge", "Death Spiral", "Heaven Sword", "Unholy Vespers", "Hellfire", "Poe Ratcho", "Soul Eater", "Vandalier", "Green Acres", "Suor Clerici", "Dommario", "Krochi", "Tiragisú", "La Borra", "Thunder Loop", "Reroll 1", "Skip 2", "Reroll 2", "Yatta Cavallo", "Lama", "Skull O'Maniac", "Dairy Plant", "Hyper Dairy Plant", "Milky Way Map", "Coffin: Dairy Plant", "Song of Mana", "Mannajja", "Christine", "Il Molise", "Skip 1", "Gorgeous Moon", "Mindbender", "Coffin: Mad Forest", "Phiera Der Tuphello", "Eight The Sparrow", "Phieraggi", "NO FUTURE", "Reroll 3", "Banish 1", "Hyper Gallo Tower", "Sorceress' Tears", "Gallo Tower", "Bianca Ramba", "Banish 2", "Randomazzo", "Gatti Amari", "Coffin: Inlaid Library", "V - Chaos in the Dark Night", "IV - Awake", "VI - Sarabande of Healing", "XVI - Slash", "XVII - Lost and Found Painting", "XIX - Heart of Fire", "O'Sole Meeo", "The Bone Zone", "Skip 3", "Reroll 4", "XI - Waltz of Pearls", "VII - Iron Blue Will", "Coffin: Gallo Tower", "XVIII - Boogaloo of Illusions", "Vicious Hunger", "Valkyrie Turner", "XV - Disco of Gold", "Banish 3", "Magic Banger", "Shadow Pinion", "Moongolow", "Skip 4", "Glass Vizard", "XIV - Jail of Crystal", "XII - Out of Bounds", "Banish 4", "Yellow Sign", "Seeker of the Infinite Corridor", "Seeker of the Crimson Shroud", "X - Beginning", "VIII - Mad Groove", "Torrona's Box", "Omni", "Cappella Magna", "Coffin: Cappella Magna", "Vento Sacro", "Fuwalafuwaloo", "Hyper Cappella Magna", "Sir Ambrojoe", "III - Tragic Princess", "XX - Silent Old Sanctuary", "Banish 5", "Reroll 5", "Grim Grimoire", "Ars Gouda", "Great Gospel", "Game Killer", "Boss Rash", "Skip 5", "II - Twilight Requiem", "I - Gemini", "Forbidden Scrolls", "XIII - Wicked Season", "Queen Sigma", "Victory Sword", "IX - Divine Bloodline", "XXI - Blood Astronomia", "Bracelet", "Tri-Bracelet", "Candybox", "The Eudaimonia Machine", "Gracia's Mirror", "Seventh Trumpet", "Greatest Jubilee", "EXTRA: Seal I", "EXTRA: Tiny Bridge", "Miang", "Silver Wind", "Menya", "Four Seasons", "Syuuto", "Summon Night", "Babi-Onna", "Mirage Robe", "McCoy-Oni", "108 Bocce", "Megalo Menya", "Megalo Syuuto", "Gav'Et-Oni", "Night Sword", "Muramasa", "Hyper Mt.Moonspell", "Boo Roo Boolle", "EXTRA: Bat Country", "EXTRA: Apoplexy", "EXTRA: Chaos Malachite", "EXTRA: Seal II", "Eleanor Uziron", "SpellString", "SpellStream", "SpellStrike", "Maruto Cuts", "Eskizzibur", "Keitha Muort", "Flash Arrow", "Millionaire", "Abyss Foscari", "Luminaire Foscari", "Genevieve Gruyère", "Prismatic Missile", "Luminaire", "Shadow Servant", "Ophion", "Je-Ne-Viv", "Happy Birthday", "Rottin'Ghoul", "Hyper Lake Foscari", "Hyper Abyss Foscari", "EXTRA: Astral Stair", "EXTRA: Chaos Rosalia", "EXTRA: Trisection", "EXTRA: Astral Stair Map", "Mt.Moonspell Map", "Lake Foscari Map", "EXTRA: Chaos Altemanna", "EXTRA: Whiteout", "EXTRA: Glass Fandango", "EXTRA: Celestial Voulge", "EXTRA: She-Moon Eeta", "EXTRA: Antidote", "EXTRA: Adventures", "EXTRA: Space 54", "EXTRA: Phas3r", "EXTRA: Evolve the Phas3r.", "EXTRA: Space Dude", "EXTRA: Brave Story", "EXTRA: Pako Battiliar", "EXTRA: Bat Robbert", "EXTRA: Laborratory", "EXTRA: Santa Javelin", "EXTRA: Seraphic Cry", "EXTRA: Santa Ladonna", "EXTRA: Arma Dio", "EXTRA: Carlo Cart", "EXTRA: Seal III", "EXTRA: A Garlic Paradise", "EXTRA: World of Light and Dark", "EXTRA: Room 1665", "EXTRA: Darkasso", "EXTRA: VI - Moonlight Bolero", "EXTRA: I - Sapphire Mist", "EXTRA: X - Hail from the Future", "EXTRA: XII - Crystal Cries", "EXTRA: XXI - Wandering the Jet Black", "EXTRA: Hyper The Coop", "EXTRA: Parm Aegis", "EXTRA: Game Speed Modifier", "EXTRA: Gaze of Gaea", "EXTRA: Gazebo", "EXTRA: III - Hidden Anathema", "EXTRA: Seal All", "EXTRA: To End An Ice Age", "EXTRA: Embrace of Gaea", "EXTRA: Westwoods", "EXTRA: Chula-Reh", "EXTRA: Karoma's Mana", "EXTRA: Masquerade", "EXTRA: Magi-Stone", "EXTRA: Kyra-Stones", "EXTRA: XIII - Call of a Mad Moon", "EXTRA: Mazerella", "EXTRA: Chaos Lazulia", "EXTRA: Preserve", "EXTRA: Ammo Appalate", "EXTRA: Zi'Appunta Belpaese", "EXTRA: V - Pale Diamond Incursion", "EXTRA: XVIII - Victorian Horror"
    ];

    assert.strictEqual(officialAchievementNames.length, 243, "sanity check on this test's own reference list");

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
