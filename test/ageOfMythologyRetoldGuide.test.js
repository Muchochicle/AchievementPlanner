import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/age-of-mythology-retold.js";

test("the Age of Mythology: Retold guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "age-of-mythology-retold-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "age-of-mythology-retold");

});

test("the Age of Mythology: Retold guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Combat, Economy & Early Milestones",
            "The Fall of the Trident Campaign",
            "Gods, Myth Units & Skirmish Feats",
            "Expansions, Challenges & Endgame",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 132-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /132 Steam achievements/);

});

test("every one of the 132 official Age of Mythology: Retold achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Annihilation", "Demolition", "Creating a Masterpiece", "Horror Unleashed", "I Believe They Can Fly",
        "Auto Everything", "Big Boomer", "Cyclopean Masonry", "Age against the Machine", "First Blood",
        "Boxing Match", "Zeus Eat Town Center", "Poseidon's Revolt", "Centum Centauri", "Anubitten",
        "A Hero in the Making", "And So It Begins", "To Hades and Back", "Osiris Reborn", "This Is for Chiron",
        "Arkantos Ascended", "Into the Mines!", "Freyr's Gift", "New World, New Gods", "Honor to Kastor!",
        "Fast Food", "No Time for Mortals", "All In", "Hoplite Heresy", "Hersir, Your Honor",
        "Prowl Patrol", "Titanic Terror", "Wrath of the Gods", "Chonkers", "Praise the Sun",
        "Pet of Set", "Thorium Mining", "Kronos' Telephone Booth", "Minoan Tennis", "Ride of the Valkyries",
        "Care and Calamity", "Beastly Bulwark", "Anger Problems", "Norse Space Program", "Terrif-eyeing",
        "Omnivore", "Chiron's Apprentice", "Power of the Gods", "Preparation", "Lost Treasure",
        "Blessed be the Legend", "Chosen by the gods", "Gods' Favorite", "Slayer", "Deicide",
        "Traveler", "Nomad", "Underdog", "Ironside", "Veteran",
        "War Hero", "Through Thick and Thin ", "Imperial Garden", "Forged from Clay", "Agricultural Revolution",
        "Archaic Shot Put", "Bringing All Kinds of Hurt", "Three Kingdoms", "Terracotta Army", "Beast Buffet",
        "Don't Mess With Me", "Set the World on Fire", "Ten-Pin Strike", "Rain of Pain", "Embarrassment of Riches",
        "Pickup Artist", "Become Immortal", "Pillar of the Community", "All Your Base Are Belong to Us", "Gotta Catch ’Em All",
        "It Doesn't Look Scratched", "Burn Baby Burn", "Xuanyuan Sword", "Invincible Warlord", "Eternal Reaper",
        "Typhoon Season!", "Bushido Master", "Classical Champions", "Wheel of Misfortune", "It's Over Nine Thousand!",
        "The One and Oni", "The Ultimate Discount", "A Blessing Sent From Heaven", "Proven Worthy", "Cut Off the Head of the Snake",
        "Emergency Response", "Labyrinth Runner", "God Tier", "A Legendary Rush", "Legends Assemble!",
        "Connoisseur of the Gods", "Don’t Go it Alone", "Friends in the End", "We Have Titans at Home", "I Choose Violence",
        "All Dolled Up", "The Secret Grove", "Relic Racer", "Bandit Buster", "Age of the Goat",
        "Herding for Glory", "Hearth and Home", "Lupine Lethality", "Wither Wood Chipper", "Woodland Whammy",
        "Battle Bard", "Seeing Red", "Wet Ground", "Cleansing Rains", "Migration",
        "Return to Sender", "Hades’ Ruin", "Feast Denied", "Smoke and Mirrors", "Divine Nourishment",
        "It’s a Trap! ", "Daily Ritual", "Eaten Alive", "Surprise!", "Godspeed",
        "Dreamweaver", "Primordial Hunger"
    ];

    assert.strictEqual(officialAchievementNames.length, 132, "sanity check on this test's own reference list");

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
