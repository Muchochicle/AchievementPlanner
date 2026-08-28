import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/total-war-rome-2.js";

test("the Total War: ROME II guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "total-war-rome-2-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "total-war-rome-2");

});

test("the Total War: ROME II guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Faction Victories",
            "Campaign Completions & Objectives",
            "Historical Battles",
            "Play As & DLC Campaigns",
            "Campaign & Battle Feats",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 188-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /188 Steam achievements/);

});

test("every one of the 188 official Total War: ROME II achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Siege!", "Champion of the Gods", "Noble Master", "Legendary Commander", "Spymaster",
        "Veteranus", "Conqueror", "Supremacy", "Rome Wasn't Built in a Day", "The Great Library",
        "The Die is Cast", "In the Footsteps of Great Men", "When in Rome…", "Beyond the Dreams of Avarice", "I Came, I Saw, I Conquered",
        "Imperator", "This is Total War!", "Their Legacy Lives On", "Tempus Fugit", "The Lost Eagle",
        "Bloodthirsty", "Butcher", "Gore-drenched", "Legatus Legionis", "Praefectus Classis",
        "Walled Crown", "Crown of the Preserver", "Wipe Them Out… All of Them!", "Slave-driver", "Executioner",
        "Liberator", "Vae Victis", "I Will Find a Way or Make One", "Status Quo", "A League of Their Own",
        "Field Commander", "Primus Inter Pares", "Antagonist", "Tactician", "Master Tactician",
        "Strategist", "Master Strategist", "Et tu…?", "Vercingetorix", "The New Hannibal",
        "Pharaoh of the World", "British Empire", "Alexander's Legacy", "The New Xerxes", "Roma Invicta",
        "Furor Germanicus", "Heir of Mithridates", "This is Sparta!", "Heir of Pyrrhus ", "Philosopher King",
        "Auxilia", "Veteran", "Evocatus", "Augustus!", "God of War!",
        "Quaestor", "Praetor", "Censor", "Pontifex Maximus", "Consul",
        "Empire-builder", "Carthage Must Be Destroyed", "The Alexandrine War", "Reclaiming the Desert", "Disaster Averted",
        "The Boat that Rocked", "Great Balls of Fire", "Unleash Hades!", "Sightseeing", "Grand Tour",
        "Weapon of Mass Destruction", "Impenetrable Wall", "Ambush!", "Surprise!", "The Great Escape",
        "Seize the Initiative!", "Hold Your Ground!", "Look to the Defences", "In the Navy!", "On Land & Sea",
        "Dock of the Bay", "Rostra", "First Time Lucky", "The Power of Three", "Veni, Vidi, Vici!",
        "Close but No Amphora", "Every Day I'm not Auto-resolving", "Centurion", "Decurion", "Optio",
        "Alae", "Mare Nostrum", "Balanced Force", "Carthago Delenda Est", "Legio Victrix",
        "This Army Will Fight On", "Masters of Germania", "Bello Gallico", "The Gallic War", "The Punic War",
        "Pincer Movement", "Arevaci Ascendant", "Ba'al-Hammon Be Praised", "In The Name Of Cariociecus", "Africanus",
        "Get Heiro, Baby", "Hoist the Colours!", "Celtiberia Victorious", "Baktria to the Future", "That’s my Boii",
        "Anatolia Not to Come", "Getae In!", "Fast & Lusitani", "We Can’t Axe for More", "Struck a Nervii",
        "Thrace for Impact", "Put On Your Red Light", "My Kingdom for a Horse", "Megas Basileus", "Tyrannus",
        "Comontorios Eternal", "Phalanx But No Thanks", "Greatest Armenia", "Princeps Civitatis", "A Plain, Blunt Man",
        "Tigranes Magnus", "Champions of Zalmoxis", "Glory of the Father", "No More the Fool", "Bellum Germanicum",
        "King of Kings", "Pompeius Magnus", "Andraste's Way or the Highway!", "Conquer Fear", "“No, I’m Spartacus!”",
        "A Colchis Goodbye", "A Trip Around the Earth", "Pergamon Champion", "The Golden Age", "Where Ares Dances",
        "Heart & Soul", "Spartan Supremacy", "A Relic of the Past", "Company of Zeroes, more like…", "Make War, Not Love",
        "Horse Called 'War'", "Unity is Power", "There Can Be Only One", "The Great Pretender", "Romanus Maximus",
        "Unite the Tribes", "Queen of the Orient", "Restitutor Orbis", "King of All Kings", "Winds of Change",
        "Mr. Super-Clean", "Loremaster", "Asking for Trouble", "Almost Famous", "Unitas in Varitete",
        "Of Gold and Gods", "Sacred Petra", "Rise of Numidia", "The Spice Must Flow", "Mater Patriae",
        "Warrior Queen of the Iceni", "Insubredinaton", "The Tower of Power", "Second Founder of Rome", "Linen Legionnaire",
        "Gallia Italiana", "Make Syracuse Great Again", "Polymath", "Tomb Maker", "My Kingdom for a Horse",
        "Conquered Carthage Before it was Cool", "Etruscan Megapolis", "Warring States", "Rome in Flames", "Old School Republic",
        "Great Dynasty", "Bloody Murder", "Scythian Legend"
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
