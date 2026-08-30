import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/octopath-traveler.json - 88 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 921570 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("octopath-traveler");

test("getPlannerData('octopath-traveler') returns real planner data with 88 curated achievements", () => {

    assert.ok(game, "expected real planner data for octopath-traveler");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 88);

});

test("every Octopath Traveler achievement has a unique id from 1 to 88 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 88 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 88);
    assert.strictEqual(new Set(apinames).size, 88);

});

test("every Octopath Traveler achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

    for (const achievement of game.achievements) {

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

test("every one of the 88 Octopath Traveler achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["\"Partner\"", "Therion finds the emerald dragonstone at last, only to have it stolen by none other than Darius, his former partner in crime."],
        ["A Familiar Place", "With Albus, the Right-hand Man, vanquished, Primrose learns the truth: Simeon, her childhood friend, is responsible for her father's murder."],
        ["A Hill to Remember", "The Savior defeated and Lianna saved, Ophilia continues offering guidance to the people of the realm. May the Sacred Flame light your path."],
        ["A New Challenger", "Challenged someone for the first time."],
        ["A Story All Your Own", "Unlocked all achievements."],
        ["A Vow Fulfilled", "Her revenge complete, Primrose sets out anew, vowing to continue dancing."],
        ["A Wanderer's Life", "Therion wrests control of the emerald and gold dragonstones from Darius. His freedom restored, Therion resumes traveling wherever the wind takes him."],
        ["Aeber's Reckoning", "Mastered thief as a secondary job."],
        ["Aeber's Wisdom", "Obtained thief as a secondary job."],
        ["Aelfric's Auspices", "Mastered cleric as a secondary job."],
        ["Aelfric's Wisdom", "Obtained cleric as a secondary job."],
        ["Alephan's Enlightenment", "Mastered scholar as a secondary job."],
        ["Alephan's Wisdom", "Obtained scholar as a secondary job."],
        ["Balogar's Blade", "Mastered runelord as a secondary job."],
        ["Balogar's Wisdom", "Obtained runelord as a secondary job."],
        ["Bargain Hunter", "Purchased something for the first time."],
        ["Better Safe Than Sorry", "Fled from battle."],
        ["Bifelgan's Bounty", "Mastered merchant as a secondary job."],
        ["Bifelgan's Wisdom", "Obtained merchant as a secondary job."],
        ["Brand's Thunder", "Mastered warrior as a secondary job."],
        ["Brand's Wisdom", "Obtained warrior as a secondary job."],
        ["Brawler", "Fought 200 battles."],
        ["Chasing Master's Footprints", "H'aanit finds Z'aanta turned to stone by the beast known as Redeye. Following the instructions in Z'aanta's letter, she travels to see Susanna the Seeress."],
        ["Chasing the Dragonstones", "Therion vanquishes Orlick to claim the ruby dragonstone before following the trail of the emerald dragonstone to a desert town."],
        ["Closure", "Defeated the dark god Galdera and sealed the Gate of Finis once more."],
        ["Collector", "Acquired every item."],
        ["Dohter's Charity", "Mastered apothecary as a secondary job."],
        ["Dohter's Wisdom", "Obtained apothecary as a secondary job."],
        ["Draefendi's Rage", "Mastered hunter as a secondary job."],
        ["Draefendi's Wisdom", "Obtained hunter as a secondary job."],
        ["Dragon Hunting", "H'aanit fells a dragon and obtains the herb that should ward off Redeye's curse. Brew in hand, H'aanit makes haste for the desert where Redeye was last seen."],
        ["Dreisang's Spell", "Mastered sorcerer as a secondary job."],
        ["Dreisang's Wisdom", "Obtained sorcerer as a secondary job."],
        ["Eagle-Eyed", "Found every hidden item."],
        ["Faith Shall Be Your Shield", "Primrose crosses Rufus, the Left-hand Man, off her list and takes the next step in her journey to learn the truth about her father's death."],
        ["Fighter", "Fought 100 battles."],
        ["Fleetfoot", "Finished your journey with lightning speed."],
        ["For the Future's Sake", "After defeating Lucia in the ancient ruins, Cyrus succeeds in deciphering From the Far Reaches of Hell. He continues his research, resolute in his personal mission to see knowledge passed on to future generations."],
        ["Full Support", "Learned every support skill."],
        ["Gentle Guidance", "Rite completed, Ophilia helps three quarreling children mend their friendship before setting out for her next destination."],
        ["His Hero's Words", "Alfyn cures Ogen and continues on his journey, carrying on the convictions of Graham, the traveling apothecary who once saved Alfyn's own life."],
        ["In the Know", "Scrutinized someone for the first time."],
        ["Irresistible", "Allured someone for the first time."],
        ["Lead the Way", "Guided someone for the first time."],
        ["Life's Worth", "Alfyn's faith in his journey is shaken when a man he helped nearly kills a young boy. Ogen's theory that some lives aren't worth saving echoes in Alfyn's head as he makes his way to the Cliftlands."],
        ["Lone Traveler", "Saw your journey through without aid from others."],
        ["Master and Prentice", "H'aanit defeats Redeye and at last reunites with her master. Surely this is the first in a long line of tales yet to be told."],
        ["Master of Orsterra", "Traveled to every location on the map."],
        ["Millionaire", "Obtained 1,000,000 leaves."],
        ["Moneybags", "Obtained 80,000 leaves."],
        ["Novice Scrapper", "Fought 10 battles."],
        ["Reasons for Wielding", "Olberic emerges victorious from the tournament and ventures into the desert in pursuit of Erhardt."],
        ["Renowned Traveler", "Played more than 100 hours."],
        ["Sealticge's Seduction", "Mastered dancer as a secondary job."],
        ["Sealticge's Wisdom", "Obtained dancer as a secondary job."],
        ["Seasoned Traveler", "Played more than 50 hours."],
        ["Setting Out – For Master", "H'aanit and her trusty snow leopard companion Linde begin their hunt for Master Z'aanta, who has gone missing."],
        ["Setting Out – Freedom", "Therion sets out to obtain the three dragonstones in a bargain that would see the fool's bangle marking him a criminal removed."],
        ["Setting Out – Healing", "With the encouragement of his dear friend Zeph, Alfyn embarks on a journey to heal Orsterra's sick and wounded."],
        ["Setting Out – In Search of Treasure", "Tressa dreams of becoming a renowned merchant. With the mysterious notebook she received from Captain Leon in hand, she sets out on her journey to see all the treasures the world holds."],
        ["Setting Out – Renewed Purpose", "The denizens of Cobbleston come out to give their hero Olberic a proper sendoff. The battle with the brigands behind him, Olberic sets out with a renewed sense of purpose."],
        ["Setting Out – Revenge", "Primrose, finally in possession of the lead she needed, takes off in pursuit of the three men bearing the mark of the crow—the men against whom she swore revenge."],
        ["Setting Out – The Kindling", "The ember from the Cave of Origin in hand, Ophilia embarks on the first leg of the Kindling as the Flamebearer."],
        ["Setting Out – The Search for Truth", "Driven from the academy, Cyrus sets out to unravel the mystery of From the Far Reaches of Hell, a tome missing for fifteen years."],
        ["Skillful", "Learned every skill."],
        ["Start Something", "Provoked a fight for the first time."],
        ["Steorra's Prophecy", "Mastered starseer as a secondary job."],
        ["Steorra's Wisdom", "Obtained starseer as a secondary job."],
        ["Sticky-Fingered", "Stole something for the first time."],
        ["Strategist", "Discovered every enemy's weaknesses."],
        ["Tell Me More", "Inquired about something for the first time."],
        ["The Demonic Headmaster", "Yvon defeated, Cyrus chases after the mastermind behind the plot: Lucia, the headmaster's secretary."],
        ["The Merchants' Fair", "Tressa rescues her rival, Ali, and drives Morlock from the town. Before resuming her journey, Tressa promises Ali they will one day meet again at the Merchants' Fair."],
        ["The Most Precious Treasure", "After reuniting with Leon and hearing him tell of his friend Baltazar, Tressa wonders just what she treasures most. With those thoughts in mind, she makes for Grandport and the Merchants' Fair."],
        ["The Next Chapter", "Content in the knowledge that her journey itself was her treasure all along, Tressa entrusts the next chapter of the journal to Noa and presses on, determined to become a famed merchant."],
        ["The Quack", "Alfyn exposes Vanessa's plot to sicken the residents of Goldshore so she may treat them at a premium, and saves a young girl who fell ill by Vanessa's hand. His journey now takes him to Saintsbridge, the largest city in the Riverlands."],
        ["The Savior", "Ophilia rescues the child kidnapped by the Savior's followers and performs the rite, but she is later betrayed by Lianna. Ophilia must hurry to Wispermill in the Flatlands in pursuit of her sister and the stolen ember."],
        ["The Strongest Sojourner", "Dealt maximum damage."],
        ["The Twin Blades of Hornburg", "The brief reunion of the twin blades of Hornburg comes to an end as Olberic takes his leave of the desert town in search of his true adversary: the tyrant Werner."],
        ["To Protect Those in Need", "With Werner defeated, Olberic continues his journey, vowing to protect those in need."],
        ["Traces of the Tome", "After Cyrus solves the mystery of the missing townspeople, he and Odette ascertain where a copy of the tome was reproduced."],
        ["Training", "Challenged every villager in Cobbleston."],
        ["Traveler", "Played more than 10 hours."],
        ["Treasure Hunter", "Opened every treasure chest."],
        ["Ultimate Power", "Used a Lv.4 Boost for the first time in battle."],
        ["Winnehild's Battle Cry", "Mastered warmaster as a secondary job."],
        ["Winnehild's Wisdom", "Obtained warmaster as a secondary job."],
        ["Worth the Detour", "Resolved the troubles of everyone in the realm."],
    ];

    assert.strictEqual(officialAchievements.length, 88, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
