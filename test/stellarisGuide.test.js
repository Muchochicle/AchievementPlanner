import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/stellaris.js";

test("the Stellaris guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "stellaris-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "stellaris");

});

test("the Stellaris guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Era 1: Base Game & Early Milestones",
            "Era 2: Utopia, Apocalypse & the Megastructure Age",
            "Era 3: MegaCorp, Ancient Relics & Federations",
            "Era 4: Nemesis, Overlord & the Crisis Path",
            "Era 5: Recent Expansions & Story Packs",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 219-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /219 Steam achievements/);

});

test("every one of the 219 official Stellaris achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Brave New World", "Digging Deep", "The Industrial Re-Revolution", "Energetic", "Power Overwhelming",
        "Birth of a Federation", "New Shining Star", "Battle Thralls", "Explorer", "Grand Admiral",
        "Building Better Worlds", "Domo Arigato", "Clever Girl", "Faster, Stronger, Better", "The Grand Fleet",
        "A Home Away From Home", "Break On Through...", "... To the Other Side", "Mutual Understanding", "Supremacy",
        "Queening", "Rift Sealed", "Voight-Kampff", "Victorious", "Hear Me Roar",
        "Infinite Creation", "Whence It Came", "Dreadnought", "Stellar Performance", "Warrior of Light",
        "Unravelling Enigma", "Patron", "Mad Genius", "The Good Stuff", "Return to Dust",
        "Last, Best Hope", "Put A Ring On It", "Slave to the Systems", "Suffer not the Alien", "Tourist Trap",
        "Planned Obsolescence", "Peacekeeper", "Very Open Borders", "Deus Vult", "Omnicultural",
        "Old Friends", "Unboxing", "Enlightened Times", "Payback", "Paradise Found",
        "What Came Before", "Outside Context", "Then Virgil, Now Beatrice", "What Was Will Be", "Resourceful",
        "Captive Star", "Ringworld Engineers", "I Can See Forever", "Think Tank", "Beyond the Veil",
        "Like Tears in Rain", "Controlled Evolution", "View from the End of the World", "Towards Utopia", "Xenophage",
        "Rise of the Machines", "Distinctiveness Added", "Retirement Home", "Does Not Compute", "Planet of the Mechs",
        "Exterminatus", "Clash of the Titans", "Stay on Target", "Star Struck", "Pandora's World",
        "Imperial Highway", "Citadel of Death", "Tradition is Everything", "Emissary", "No Khan Do",
        "Who Scraps the Scrapper", "1999 A.D.", "A Hump Like a Snow-Hill", "It Followed Me Home", "...and Hope?",
        "Franchising", "Inscrutable Power", "Megapolis", "Obscure Tastes", "Black Hole Mining",
        "Strategic Initiative", "Center of Trade", "Giga-Engineering", "We Are Legion", "United Space",
        "Artificer", "It belongs in a museum!", "Relic Hunter", "Archaeologist", "Green Thumb",
        "Dust Off", "Raiders of the Lost Galatron", "Arcana", "Unlimited Power!", "League of Nations",
        "Let Us Go Forward Together", "We're Number One", "Unstoppable Force", "Our Fleets will Blot Out the Stars", "Whatever it is, I'm against it",
        "Throw Your Weight Around", "Opposites Attract", "Humble Pie", "You've Been Served", "Big Red Button",
        "With Thunderous Applause", "Sic Semper Tyrannis", "Modern Cincinnatus", "We Come In Peace", "They Come In Pieces",
        "Shoot To Kill", "Burn Notice", "All-Seeing Eye", "Tinker, Tailor, Soldier, Blorg", "Surfing the Web",
        "Yeet the Fleet", "None Shall Pass", "Gotta Subjugate Them All", "Fine Print", "Maximally Effective",
        "You Monster", "Meet the New Boss", "Underlord", "Into the Unknown", "Non-Prophet Organization",
        "Fixer Upper", "Growing Like Weeds", "Tend the Garden", "Machine Supremacy", "Strange Mood",
        "Directive 67", "Destroy the People of Earth!", "Room for Desert", "Can you Smell What the Lithoids are Cooking?", "Rock Beats Paper",
        "There’s a Zombie on my Lawn", "With Great Power", "Recent History", "Holy Water", "Fishing for Trouble",
        "There be Dragons", "Quest Complete", "Toxic Workplace", "Could be Worse", "With Interest",
        "Unshackled", "Dark Forest", "Back with Your X", "Insightful", "No Good Deed…",
        "The Path Not Taken", "Nothing to See Here", "We’ll Make Great Pets", "A Tad Too Late", "Dawn Of A Million Souls",
        "Ethical Dilemmas", "Council of Elders", "Equality! Democracy! Freedom! ", "We Bring Peace", "Breaching the Planes",
        "Growing Planes", "Put a Cork in It", "My name is Ozymandias", "Returned to Form", "A Universe of Paperclips",
        "Virtual Reality", "Burning Brightly", "Past the Expiration Date", "Mother Knows Best", "Footsteps of the Prophet",
        "Mediocre!", "Humility before the Fall", "Unpopularity Contest", "But at what cost...", "It Belongs in a... oh right",
        "Void Charmer", "Animal Farm", "Wormageddon", "That's No Asteroid", "X Marks the Spot",
        "Beastmaster", "King of Monsters", "Born to be Wild", "Smörgåsblorg", "I am the Invader Now",
        "Smugglers of Hope", "Flesh Adapts", "Made a Friend Today", "Mildly Possessed", "The End",
        "Master of the Shroud", "Mind Over Metal", "Master of Puppets", "This Is the Part Where We Kill You", "Cosmic Confetti",
        "Galactic Firestorm", "Blazing Domain", "Volcanic Empire", "From Bad to Worse", "Summer Vacation",
        "Burning Heaven", "Khan of Khans", "Forever is a Long Time", "The Long Way Round", "Take My Energy ༼ つ ◕_◕ ༽つ",
        "So Long, and Thanks for All the Fish", "I Win Longest Road!", "It's Full of Stars", "Defenders of the Galaxy"
    ];

    assert.strictEqual(officialAchievementNames.length, 219, "sanity check on this test's own reference list");

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
