import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/vampire-survivors.json - 243 real achievements
// (the largest list in this catalog) sourced from a live
// ISteamUserStats/GetSchemaForGame/v2 response for appid 1794680
// (fetched through this app's own services/steamApi.js) - all 243 ship
// a real, official Steam description. Vampire Survivors has zero
// Steam-hidden achievements, unusual for a game this size in this
// catalog. difficulty/estimatedTime remain curatorial judgments, same
// convention as every other planner difficulty/time field in this
// catalog.
const vampireSurvivors = getPlannerData("vampire-survivors");

test("getPlannerData('vampire-survivors') returns real planner data with 243 curated achievements", () => {

    assert.ok(vampireSurvivors, "expected real planner data for vampire-survivors");
    assert.ok(Array.isArray(vampireSurvivors.achievements));
    assert.strictEqual(vampireSurvivors.achievements.length, 243);

});

test("every Vampire Survivors achievement has a unique id from 1 to 243 and a unique apiname", () => {

    const ids = vampireSurvivors.achievements.map(a => a.id);
    const apinames = vampireSurvivors.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 243 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 243);
    assert.strictEqual(new Set(apinames).size, 243);

});

test("every Vampire Survivors achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

    for (const achievement of vampireSurvivors.achievements) {

        assert.ok(
            Number.isInteger(achievement.difficulty) && achievement.difficulty >= 1 && achievement.difficulty <= 5,
            `${achievement.name} has an out-of-range difficulty: ${achievement.difficulty}`
        );

        assert.ok(
            Number.isInteger(achievement.estimatedTime) && achievement.estimatedTime > 0,
            `${achievement.name} has an invalid estimatedTime: ${achievement.estimatedTime}`
        );

        assert.ok(achievement.name?.length > 0, "achievement is missing a name");
        assert.ok(achievement.description?.length > 0, `${achievement.name} is missing a description`);
        assert.ok(achievement.apiname?.length > 0, `${achievement.name} is missing an apiname`);

    }

});

test("every one of the 243 Vampire Survivors achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const officialAchievements = [
        ["Wings", "Reach Level 5."],
        ["Crown", "Reach Level 10."],
        ["Hollow Heart", "Survive 1 minute with any character."],
        ["Runetracer", "Survive 5 minutes with Pasqualina."],
        ["Peachone", "Survive 10 minutes with any character."],
        ["Arca", "Get Fire Wand to Level 4."],
        ["Bracer", "Get King Bible to Level 4."],
        ["Candelabrador", "Get Santa Water to Level 4."],
        ["Porta", "Get Lightning Ring to Level 4."],
        ["Duplicator", "Get Magic Wand to Level 7."],
        ["Ebony Wings", "Get Peachone to Level 7."],
        ["Spellbinder", "Get Runetracer to Level 7."],
        ["Empty Tome", "Hold 6 different weapons at once."],
        ["Fire Wand", "Destroy 20 light sources."],
        ["Garlic", "Find 5 Floor Chickens."],
        ["Clover", "Find a Little Clover."],
        ["Magnet", "Find a Vacuum."],
        ["Clock Lancet", "Find an Orologion."],
        ["Cross", "Find a Rosary."],
        ["Lightning Ring", "Defeat a total of 5000 enemies."],
        ["Mortaccio", "Defeat a total of 3000 Skeletons."],
        ["Pentagram", "Survive 20 minutes with any character."],
        ["Hyper Mad Forest", "Defeat the giant Blue Venus in the Mad Forest."],
        ["Hyper Inlaid Library", "Defeat the Hag in the Inlaid Library."],
        ["Inlaid Library", "Reach Level 20 in the Mad Forest."],
        ["Pummarola", "Survive 5 minutes with Gennaro."],
        ["Stone Mask", "Find a Stone Mask."],
        ["Bloody Tear", "Evolve the Whip."],
        ["Holy Wand", "Evolve the Magic Wand."],
        ["Thousand Edge", "Evolve the Knife."],
        ["Death Spiral", "Evolve the Axe."],
        ["Heaven Sword", "Evolve the Cross."],
        ["Unholy Vespers", "Evolve the King Bible."],
        ["Hellfire", "Evolve the Fire Wand."],
        ["Poe Ratcho", "Get Garlic to Level 7."],
        ["Soul Eater", "Evolve the Garlic."],
        ["Vandalier", "Unite Ebony Wings and Peachone."],
        ["Green Acres", "Unlock Hyper mode for 2 normal stages."],
        ["Suor Clerici", "Recover a total of 1000 HP."],
        ["Dommario", "Earn 5000 coins in a single run."],
        ["Krochi", "Defeat a total of 100000 enemies."],
        ["Tiragisú", "Survive 20 minutes with Krochi."],
        ["La Borra", "Evolve the Santa Water."],
        ["Thunder Loop", "Evolve the Lightning Ring."],
        ["Reroll 1", "Reach Level 80 with Mortaccio."],
        ["Skip 2", "Survive 30 minutes in Green Acres."],
        ["Reroll 2", "Reach Level 80 with Yatta Cavallo."],
        ["Yatta Cavallo", "Defeat a total of 3000 Lion Heads."],
        ["Lama", "Survive 20 minutes with at least +10% Curse."],
        ["Skull O'Maniac", "Survive 30 minutes with Lama."],
        ["Dairy Plant", "Reach Level 40 in the Inlaid Library."],
        ["Hyper Dairy Plant", "Defeat the Sword Guardian in the Dairy Plant."],
        ["Milky Way Map", "Find the Milky Way Map."],
        ["Coffin: Dairy Plant", "Find and open the coffin in the Dairy Plant."],
        ["Song of Mana", "Survive 15 minutes with Poppea."],
        ["Mannajja", "Evolve the Song Of Mana."],
        ["Christine", "Get Pentagram to Level 7."],
        ["Il Molise", "Unlock Hyper mode for any normal stage."],
        ["Skip 1", "Survive 15 minutes in Molise."],
        ["Gorgeous Moon", "Evolve the Pentagram."],
        ["Mindbender", "Fill 50 entries in the Collection."],
        ["Coffin: Mad Forest", "Find and open the coffin in the Mad Forest."],
        ["Phiera Der Tuphello", "Survive 10 minutes with Pugnala."],
        ["Eight The Sparrow", "Survive 15 minutes with Pugnala."],
        ["Phieraggi", "Evolve and unite Phiera Der Tuphello and Eight The Sparrow."],
        ["NO FUTURE", "Evolve the Runetracer."],
        ["Reroll 3", "Reach Level 80 with Bianca Ramba."],
        ["Banish 1", "Fill 60 entries in the Collection."],
        ["Hyper Gallo Tower", "Defeat the Giant Enemy Crab in Gallo Tower."],
        ["Sorceress' Tears", "Find the Sorceress' Tears."],
        ["Gallo Tower", "Reach Level 60 in the Dairy Plant."],
        ["Bianca Ramba", "Defeat a total of 3000 Milk Elementals."],
        ["Banish 2", "Fill 70 entries in the Collection."],
        ["Randomazzo", "Find the Randomazzo."],
        ["Gatti Amari", "Survive 15 minutes with Giovanna."],
        ["Coffin: Inlaid Library", "Find and open the coffin in the Inlaid Library."],
        ["V - Chaos in the Dark Night", "Reach Level 50 with Giovanna."],
        ["IV - Awake", "Reach Level 50 with Krochi."],
        ["VI - Sarabande of Healing", "Find the Randomazzo."],
        ["XVI - Slash", "Reach Level 50 with Lama."],
        ["XVII - Lost and Found Painting", "Reach Level 50 with Poppea."],
        ["XIX - Heart of Fire", "Reach Level 50 with Arca."],
        ["O'Sole Meeo", "Defeat a total of 3000 Dragon Shrimps."],
        ["The Bone Zone", "Unlock Hyper mode for 3 normal stages."],
        ["Skip 3", "Survive 30 minutes in The Bone Zone."],
        ["Reroll 4", "Reach Level 80 with O'Sole Meeo."],
        ["XI - Waltz of Pearls", "Reach Level 50 with Imelda."],
        ["VII - Iron Blue Will", "Reach Level 50 with Gennaro."],
        ["Coffin: Gallo Tower", "Find and open the coffin in the Gallo Tower."],
        ["XVIII - Boogaloo of Illusions", "Reach Level 50 with Concetta."],
        ["Vicious Hunger", "Evolve the Gatti Amari."],
        ["Valkyrie Turner", "Evolve the Shadow Pinion."],
        ["XV - Disco of Gold", "Reach minute 31 in the Inlaid Library."],
        ["Banish 3", "Fill 80 entries in the Collection."],
        ["Magic Banger", "Find the Magic Banger."],
        ["Shadow Pinion", "Survive 15 minutes with Concetta."],
        ["Moongolow", "Unlock Hyper mode for 4 normal stages."],
        ["Skip 4", "Survive 15 minutes in Moongolow."],
        ["Glass Vizard", "Find and buy the Glass Vizard."],
        ["XIV - Jail of Crystal", "Reach Level 50 with Pasqualina."],
        ["XII - Out of Bounds", "Reach minute 31 in the Gallo Tower."],
        ["Banish 4", "Fill 90 entries in the Collection."],
        ["Yellow Sign", "Find the Yellow Sign."],
        ["Seeker of the Infinite Corridor", "Obtain the Infinite Corridor."],
        ["Seeker of the Crimson Shroud", "Obtain the Crimson Shroud."],
        ["X - Beginning", "Reach Level 50 with Antonio."],
        ["VIII - Mad Groove", "Reach minute 31 in the Mad Forest."],
        ["Torrona's Box", "Hold 6 different weapon evolutions at once."],
        ["Omni", "Get Torrona's Box to Level 9."],
        ["Cappella Magna", "Reach Level 80 in the Gallo Tower."],
        ["Coffin: Cappella Magna", "Find and open the coffin in the Cappella Magna."],
        ["Vento Sacro", "Survive 15 minutes with Zi'Assunta."],
        ["Fuwalafuwaloo", "Unite Vento Sacro and Bloody Tear."],
        ["Hyper Cappella Magna", "Defeat the Trinacria in the Cappella Magna."],
        ["Sir Ambrojoe", "Defeat a total of 6000 Stage Killers."],
        ["III - Tragic Princess", "Reach Level 50 with Porta."],
        ["XX - Silent Old Sanctuary", "Reach minute 31 in the Dairy Plant."],
        ["Banish 5", "Fill 100 entries in the Collection."],
        ["Reroll 5", "Reach Level 80 with Sir Ambrojoe."],
        ["Grim Grimoire", "Find the Grim Grimoire."],
        ["Ars Gouda", "Find the Ars Gouda."],
        ["Great Gospel", "Find the Great Gospel."],
        ["Game Killer", "Defeat the final enemy in the Cappella Magna."],
        ["Boss Rash", "Unlock Hyper mode for all 5 normal stages."],
        ["Skip 5", "Survive 15 minutes in Boss Rash."],
        ["II - Twilight Requiem", "Reach Level 50 with Dommario."],
        ["I - Gemini", "Reach Level 50 with Pugnala."],
        ["Forbidden Scrolls", "Find the Forbidden Scrolls of Morbane."],
        ["XIII - Wicked Season", "Reach Level 50 with Christine."],
        ["Queen Sigma", "Complete the Collection 1.0."],
        ["Victory Sword", "Defeat 100000 enemies in a single run with Queen Sigma."],
        ["IX - Divine Bloodline", "Reach Level 50 with Suor Clerici."],
        ["XXI - Blood Astronomia", "Reach Level 50 with Poe."],
        ["Bracelet", "Survive 30 minutes with either Gallo or Divano."],
        ["Tri-Bracelet", "Evolve the Bracelet and then the Bi-Bracelet."],
        ["Candybox", "Discover every standard evolution and union."],
        ["The Eudaimonia Machine", "Obtain all standard relics from all stages."],
        ["Gracia's Mirror", "Obtain Gracia's Mirror."],
        ["Seventh Trumpet", "Obtain the Seventh Trumpet."],
        ["Greatest Jubilee", "See the final fireworks."],
        ["EXTRA: Seal I", "Banish 10 or more weapons in a single run."],
        ["EXTRA: Tiny Bridge", "Reach Level 80 in Inverse Gallo Tower."],
        ["Miang", "Find and open the coffin in Mt.Moonspell."],
        ["Silver Wind", "Survive 15 minutes with Miang Moonspell."],
        ["Menya", "Evolve the Silver Wind."],
        ["Four Seasons", "Survive 15 minutes with Menya Moonspell."],
        ["Syuuto", "Evolve the Four Seasons."],
        ["Summon Night", "Survive 15 minutes with Syuuto Moonspell."],
        ["Babi-Onna", "Evolve the Summon Night."],
        ["Mirage Robe", "Survive 15 minutes with Babi-Onna."],
        ["McCoy-Oni", "Evolve the Mirage Robe."],
        ["108 Bocce", "Survive 15 minutes with McCoy-Oni."],
        ["Megalo Menya", "Defeat 100000 enemies in a single run with Menya Moonspell."],
        ["Megalo Syuuto", "Defeat 100000 enemies in a single run with Syuuto Moonspell."],
        ["Gav'Et-Oni", "Defeat 6000 Kappa."],
        ["Night Sword", "Find a Night Sword."],
        ["Muramasa", "Evolve the Night Sword."],
        ["Hyper Mt.Moonspell", "Defeat the Orochimario in Mt.Moonspell."],
        ["Boo Roo Boolle", "Evolve the Mille Bolle Blu."],
        ["EXTRA: Bat Country", "Reach Level 80 in Inverse Mad Forest."],
        ["EXTRA: Apoplexy", "Find the Apoplexy at minute 09:00 in Bat Country."],
        ["EXTRA: Chaos Malachite", "Find the Chaos Malachite at minute 18:00 in Bat Country."],
        ["EXTRA: Seal II", "Banish 20 or more weapons in a single run."],
        ["Eleanor Uziron", "Find and open the coffin in Lake Foscari."],
        ["SpellString", "Survive 15 minutes with Eleanor Uziron."],
        ["SpellStream", "Get SpellStream to Level 6."],
        ["SpellStrike", "Get SpellStrike to Level 6."],
        ["Maruto Cuts", "Unite SpellString, SpellStream, and SpellStrike."],
        ["Eskizzibur", "Survive 15 minutes with Maruto Cuts."],
        ["Keitha Muort", "Evolve the Eskizzibur."],
        ["Flash Arrow", "Survive 15 minutes with Keitha Muort."],
        ["Millionaire", "Evolve the Flash Arrow."],
        ["Abyss Foscari", "With Keitha, break the Seal of the Lake."],
        ["Luminaire Foscari", "With Maruto, break the Seal of the Abyss."],
        ["Genevieve Gruyère", "With Eleanor, break the Seal of the Banished."],
        ["Prismatic Missile", "Survive 15 minutes with Luminaire Foscari."],
        ["Luminaire", "Evolve the Prismatic Missile."],
        ["Shadow Servant", "Survive 15 minutes with Genevieve Gruyère."],
        ["Ophion", "Evolve the Shadow Servant."],
        ["Je-Ne-Viv", "Defeat 100000 enemies in a single run with Genevieve Gruyère."],
        ["Happy Birthday", "Defeat a total of 6000 Sammies."],
        ["Rottin'Ghoul", "Defeat a total of 6000 Rotting Ghouls."],
        ["Hyper Lake Foscari", "Defeat the Avatar of Gaea in Lake Foscari."],
        ["Hyper Abyss Foscari", "Defeat Je-Ne-Viv in Abyss Foscari."],
        ["EXTRA: Astral Stair", "Reach Level 80 in Inverse Inlaid Library."],
        ["EXTRA: Chaos Rosalia", "Find the Chaos Rosalia in Astral Stair."],
        ["EXTRA: Trisection", "Find the Trisection in Astral Stair."],
        ["EXTRA: Astral Stair Map", "Find the Astral Stair Map."],
        ["Mt.Moonspell Map", "Find the Mt.Moonspell Map."],
        ["Lake Foscari Map", "Find the Lake Foscari Map."],
        ["EXTRA: Chaos Altemanna", "Find the Chaos Altemanna in Tiny Bridge."],
        ["EXTRA: Whiteout", "Find 20 Orologions."],
        ["EXTRA: Glass Fandango", "Get Glass Fandango to Level 7."],
        ["EXTRA: Celestial Voulge", "Evolve the Glass Fandango."],
        ["EXTRA: She-Moon Eeta", "Survive 20 minutes in Whiteout."],
        ["EXTRA: Antidote", "Find the Antidote in Whiteout."],
        ["EXTRA: Adventures", "Obtain the Atlas Gate in Boss Rash."],
        ["EXTRA: Space 54", "Find 5 Golden Fingers."],
        ["EXTRA: Phas3r", "Get Phas3r to level 7."],
        ["EXTRA: Evolve the Phas3r.", "Evolve the Phas3r."],
        ["EXTRA: Space Dude", "Survive 20 minutes in Space 54."],
        ["EXTRA: Brave Story", "Find the Brave Story at minute 18 in Space 54."],
        ["EXTRA: Pako Battiliar", "Defeat a total of 161616 bats."],
        ["EXTRA: Bat Robbert", "Evolve the Pako Battiliar."],
        ["EXTRA: Laborratory", "Find 33 Rosaries."],
        ["EXTRA: Santa Javelin", "Get Santa Javelin to level 7."],
        ["EXTRA: Seraphic Cry", "Evolve the Santa Javelin."],
        ["EXTRA: Santa Ladonna", "Survive 20 minutes in Laborratory."],
        ["EXTRA: Arma Dio", "Find an Arma Dio."],
        ["EXTRA: Carlo Cart", "Deal a total of 25120 damage with the Laborratory Train. "],
        ["EXTRA: Seal III", "Banish 40 or more weapons in a single run."],
        ["EXTRA: A Garlic Paradise", "Complete once the adventure A Garlic Paradise."],
        ["EXTRA: World of Light and Dark", "Complete once the adventure World of Light and Dark."],
        ["EXTRA: Room 1665", "Dare to cast the spell "],
        ["EXTRA: Darkasso", "Be embraced by the Darkasso."],
        ["EXTRA: VI - Moonlight Bolero", "Be embraced by the Darkasso."],
        ["EXTRA: I - Sapphire Mist", "Reach a Cooldown bonus of -85% with Space Dude."],
        ["EXTRA: X - Hail from the Future", "Trigger a Weird Souls Purifier with Santa Ladonna."],
        ["EXTRA: XII - Crystal Cries", "Trigger a Starry Heavens with She-Moon Eeta."],
        ["EXTRA: XXI - Wandering the Jet Black", "Reach 665 Max Health with Bat Robbert."],
        ["EXTRA: Hyper The Coop", "Find 500 Floor Chickens."],
        ["EXTRA: Parm Aegis", "Find a Parm Aegis in The Coop."],
        ["EXTRA: Game Speed Modifier", "Find the Roast chicken with a clock in the middle at the end of The Coop."],
        ["EXTRA: Gaze of Gaea", "Defeat 0 enemies in The Coop."],
        ["EXTRA: Gazebo", "Survive 20 minutes in The Coop."],
        ["EXTRA: III - Hidden Anathema", "Eat as much as possible with Gazebo."],
        ["EXTRA: Seal All", "Banish 80 or more weapons in a single run."],
        ["EXTRA: To End An Ice Age", "Complete once the adventure To End An Ice Age."],
        ["EXTRA: Embrace of Gaea", "Evolve the Gaze of Gaea."],
        ["EXTRA: Westwoods", "Find 23 Little Clovers."],
        ["EXTRA: Chula-Reh", "Survive 20 minutes in Westwoods. "],
        ["EXTRA: Karoma's Mana", "Find a Karoma's Mana in Westwoods."],
        ["EXTRA: Masquerade", "Find the Masquerade Relic in Westwoods."],
        ["EXTRA: Magi-Stone", "Get Magi-Stone To Level 7."],
        ["EXTRA: Kyra-Stones", "Evolve the Magi-Stone."],
        ["EXTRA: XIII - Call of a Mad Moon", "Reach +999% Luck with Chula-Reh."],
        ["EXTRA: Mazerella", "Reach Level 80 in Inverse Dairy Plant."],
        ["EXTRA: Chaos Lazulia", "Find the Chaos Lazulia in Mazerella."],
        ["EXTRA: Preserve", "Find the Wax Fetish in Mazerella."],
        ["EXTRA: Ammo Appalate", "Defeat a total of 251096 Shooting Enemies."],
        ["EXTRA: Zi'Appunta Belpaese", "Evolve the Ammo Appalate."],
        ["EXTRA: V - Pale Diamond Incursion", "Find 10 Treasure Chests from Zi'Appunta's ability in a single run."],
        ["EXTRA: XVIII - Victorian Horror", "Survive 30 minutes with no weapons in Inverse Green Acres."],
    ];

    assert.strictEqual(officialAchievements.length, 243, "sanity check on this test's own reference list - Vampire Survivors has no Steam-hidden achievements");

    const dataPairs = vampireSurvivors.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});
