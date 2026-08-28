import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/hearts-of-iron-4.js";

test("the Hearts of Iron IV guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "hearts-of-iron-4-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "hearts-of-iron-4");

});

test("the Hearts of Iron IV guide has all 8 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Era 1: Base Game & Together for Victory",
            "Era 2: Death or Dishonor, Waking the Tiger & Man the Guns",
            "Era 3: La Résistance & Battle for the Bosporus",
            "Era 4: No Step Back & By Blood Alone",
            "Era 5: Arms Against Tyranny, Trial of Allegiance & Beyond",
            "The Hidden Achievement",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 293-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /293 Steam achievements/);

});

test("every one of the 293 official Hearts of Iron IV achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Friend in Need", "Time is on our side", "Canada First", "We'll build it in a day", "Transport Tycoon",
        "Destroyer of Worlds", "Wunderwaffen", "United Netherlands", "Vive la France", "Master of War",
        "Mine is bigger than yours", "No country for old men", "Poland can into space", "True Blitzkrieg", "Northern Light",
        "Nobody expects...", "The bell tolls for us", "The Revolution Triumphant", "Once More Mate", "Forge of Victory",
        "Sunset Invasion", "Duce Nuked'em", "Operation Sea Lion", "One Empire", "Party like it's 1520",
        "Med plutonium...", "The Revenge of Montezuma", "Big Entente", "New World Order", "Bearer of Artillery",
        "Braaaaains!", "District 9", "Our Words Are Backed With Nuclear Weapons", "Crusader Kings", "Crusader Kings 2",
        "Rule Britannia", "Cut The Strings", "It's 1812 All Over Again", "The weapons of the Third Emu War", "I Am the Tong Master",
        "The Empire Strikes Back", "The Puppetmaster", "Freegypt", "Miklos Horthy and the Habsburg Prince", "Better than the Szent István",
        "Death or Dishonor or Cake", "Neither Death nor Dishonor", "The Munich Disagreement", "Czechmate", "Huge-oslavia",
        "The Balkan Powder Keg", "En Svensk Tiger", "Lethal Straight", "Awake and Angry", "Romance of the Three Kingdoms",
        "Sun Tzu Reborn", "The People Have Stood Up!", "Made in China", "Tojo Shot First", "Sunrise Invasion",
        "The Dragon Swallowed the Sun", "Hail to the Qing", "The Good, the Bad and the Weird", "Battlecry", "Panda-monium",
        "Make a Man Out Of You", "Our Other Place in the Sun", "Australia-Hungary", "My Ships Don't Lie", "I Swear I’m Not a Byzantophile",
        "Monarchy is Back In Fashion", "Team America", "History Repeated Itself", "Georgia On My Mind", "To Arms in Dixie!",
        "Arsenal of Democracy", "Underpaid, Undersexed, and Under Eisenhower", "Last for a Thousand Years", "Britzkrieg", "Nothing Wrong with our Bloody Ships",
        "William Wallis", "Crush the Dream", "Treading the Narrow Path", "Putting the Raid on the Medway to Shame", "Bevrijding",
        "Mi Casa es tu Casa", "The New Home of the Revolution", "Assuming Direct Control", "Vive la Jeune Ecole", "30 Minutes of Hel",
        "Pride and Extreme Prejudice", "Do You Mined?", "BFFs", "Man of a Thousand Faces, Every One the Same", "We Will Rock You",
        "Warszawo, Walcz!", "Play It, Sam", "Shaken, Not Stirred", "Listen Very Carefully, I Shall Say This...", "One King, Two Crowns",
        "Well, I Didn’t Vote for You", "Die, Perfidious Albion!", "Spies Trade", "You Will Never Kill Me Alive", "I SEE EVERYTHING",
        "Turing Complete!", "Our Chief Weapon is Surprise...", "Second Time’s the Charm", "Why Die For Danzig?", "Tour de France",
        "Go Ahead, Macau My Day", "Don’t Die for Your Country", "Finnish Him!", "I Captured the Bosporus and All I Got Was This Lousy Achievement", "Istanbul is Constantinople. Again.",
        "Peter’s Pride", "This is Madness!", "Nobody’s Business but the Turks", "House of Kurds", "Hellenic Civility",
        "Hoofin’ It", "We’re Putting the Band Back Together", "Dracula’s Revenge", "Prussia of the Balkans", "Balkan Problem Solved",
        "Bad Romeance", "Totally Not Cool, Bromania", "Freedom or Death", "Now This is Getting Childish", "Hardly Anything Sèvres",
        "One Nation Under Atatürk, Indivisible", "Master Puppeteer", "At least they run on time!", "Not much fun in Stalingrad", "No more Partitions",
        "Habsburgs. Habsburgs everywhere", "The Pope? How many Divisions does he have?", "This is going to be LIT", "It has my name on it", "This Achievement is Cheesy",
        "Esti is Scandi", "Not a step back!", "One Step Forward", "The Soviet Onion", "Crusader Kings III",
        "The Romanovs laugh last", "We don’t really like statistics", "Race for Germany", "Siberian Tiger", "Just proper gander",
        "Around Eurasia in 80 days", "Poland Peasant Revolution", "...and you get a canton, everybody gets a canton!", "I’m not locked in here with you…", "Swiss Cheese",
        "You Shall Not Pass", "The Lion that Roared", "The Lion King", "This time for Africa", "Crusader Kings IV",
        "The Red Sea", "Holy, Roman, and an Empire", "Pizza Time!", "Collect all the Romes", "Nothing personal, Adolf",
        "Not today", "This time it will stick", "By Beer Alone", "By merit alone", "Snakes on a plane",
        "Stalin, how many guns does he have? ", "Sapmi united by the fire", "Norway Jose", "Pinot Noirway", "Cheese your fighter.",
        "Med plutonium 2.", "Everything is awesome.", "The Danelaw", "Vinland", "Brexit",
        "Two Arms Against Tyranny.", "Uralic brothers united", "Lone Wolf", "No one crosses the finnish line", "Danzig queen",
        "Caramelldansen", "The return of the king", "Satisfactory", "Cod wars", "The Magic School Bus",
        "Rumble in the Jungle", "And the snake smoked", "Red Hot Chile Peppers", "Bad Ending - The whole world is now Brazil", "A Land of Fire",
        "I'm Home!", "Proactive Defense", "The Merry Band", "Somehow He Has Returned", "URSAL",
        "Islas Malvinas", "Lamento Boliviano", "Revenge for the triple alliance", "The Dragon Rises", "King of What?",
        "True Condor Legion", "Chilean Empire", "Reconquistadors", "Hispanics of the world unite!", "Cisplatine War 2, Electric Boogaloo",
        "America Decolonized!", "Antischluss", "No Friends, Only Family", "Edelweiss Seedelweiss", "Otto-man",
        "Spaak of Genius", "Brentry", "The 501st Legion", "Congolese Belgium", "The Lenin Boys are Back in Town",
        "A Great Hunger", "Weltpolitik", "Naval Arms Race", "Woman in a High Castle", "American Prometheus",
        "Tsar Bomba", "Super Heavy Metal", "Backfire", "Dam It!", "Bullseye",
        "The True Successor", "Graveyard of Empires", "This achievement is dedicated to the brave soldiers of... ", "I have the high ground", "Pesky Greeks",
        "The Sands of Time", "The Legacy of Cyrus the Great", "From Tehran with Love", "Cradle of Civilization", "It's Just Good Business",
        "Media Mughal", "Oh, how the turntables", "I'm just passing by", "That's SIkh!", "Oil Sheiks",
        "Revenge for 1925", "Avenging the Sack of Baghdad", "I shall either find a way or make one", "Savior of the holy lands", "Doctrine of Choice",
        "Manifesting a Better Tomorrow", "Genghis Khan't", "The Neverending Story", "Its all coming together", "The Coast is Clear",
        "A Fullmetal Brotherhood", "Battle Royale", "The Winner takes it all", "Master Infiltrator", "Paradisus Paradoxum",
        "An Equivalent Exchange", "The Sun Will Never Set", "The Juannines", "Declare Military Emergency", "Cobalt Sea",
        "I Have Avenged You, Father!", "I'm playing both sides, so I always come out on top", "I didn't hear no bell", "Premyslid's Dream", "Kuťáci",
        "First train home", "Ain't like that now", "Czechoslovaustrohungarian Union", "Steiner", "Saving Private Bryansk",
        "Et tu, Paulus?", "Hunt for the Desert Fox", "A Bridge too Far", "Waltzing Matilda", "The 7th State",
        "The rightside up", "A Succulent Chinese Meal", "ANZAC", "Noone Will Notice the Difference", "Java-Script",
        "The Man of Medan", "Maphilindia", "Old Zealand", "From Rags to Admiral Stripes", "Hail to the King",
        "Grand Siam", "ThaiTanic", "Thai fighters"
    ];

    assert.strictEqual(officialAchievementNames.length, 293, "sanity check on this test's own reference list");

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
