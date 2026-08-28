import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/stellaris.json - 219 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 281990 (fetched through this app's own services/steamApi.js).
// This game has no hidden achievements: all 219 ship a real, official
// Steam description, quoted verbatim below.
// difficulty/estimatedTime/missable remain curatorial judgments, the same
// convention as every other planner difficulty/time field in this catalog.
const game = getPlannerData("stellaris");

test("getPlannerData('stellaris') returns real planner data with 219 curated achievements", () => {

    assert.ok(game, "expected real planner data for stellaris");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 219);

});

test("every Stellaris achievement has a unique id from 1 to 219 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 219 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 219);
    assert.strictEqual(new Set(apinames).size, 219);

});

test("every Stellaris achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 219 Stellaris achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const officialAchievements = [
        ["... To the Other Side", "Research 15 Rare technologies in a single game"],
        ["...and Hope?", "Unseal the path to the L-Cluster"],
        ["1999 A.D.", "Slaughter the Voidspawn"],
        ["A Home Away From Home", "Conquer another species' homeworld"],
        ["A Hump Like a Snow-Hill", "Hunt the Tiyanki Matriarch"],
        ["A Tad Too Late", "Discover Keides' Origin."],
        ["A Universe of Paperclips", "Create a perfect universe while meeting every quota as an Obsessional Directive empire."],
        ["All-Seeing Eye", "Have an Intel Level of 100 on five different empires simultaneously"],
        ["Animal Farm", "Reach 50 Vivarium capacity."],
        ["Arcana", "Study Minor Artifacts and discover a random technology"],
        ["Archaeologist", "Successfully investigate an archaeological site"],
        ["Artificer", "Have 100 Minor Artifacts"],
        ["Back with Your X", "Get the “good ending” to the Solarpunk quest chain, with Sol as your capital system."],
        ["Battle Thralls", "Have 3 other Empires as vassals"],
        ["Beastmaster", "Defeat the endgame crisis without building a single artificial military ship."],
        ["Beyond the Veil", "Breach the Shroud"],
        ["Big Red Button", "Destroy the Galaxy"],
        ["Birth of a Federation", "Establish a Federation"],
        ["Black Hole Mining", "Build a Matter Decompressor"],
        ["Blazing Domain", "Terraform 100 stars to Red Giants (Before Galactic Firestorm victory)"],
        ["Born to be Wild", "As a Wilderness empire, restore all of the Hive Fallen Empire's worlds to your natural state."],
        ["Brave New World", "Colonize a planet"],
        ["Breaching the Planes", "Explore an Astral Rift."],
        ["Break On Through...", "Research a Rare technology"],
        ["Building Better Worlds", "Terraform a planet"],
        ["Burn Notice", "Disavow all knowledge of an Asset during an Operation"],
        ["Burning Brightly", "Complete an Arc Furnace and a Dyson Swarm in the same system."],
        ["Burning Heaven", "Create a Volcanic Holy World"],
        ["But at what cost...", "Kill Gurr."],
        ["Can you Smell What the Lithoids are Cooking?", "As a Lithoid empire, keep another Lithoid pop as Livestock or Process them."],
        ["Captive Star", "Construct a complete Dyson Sphere"],
        ["Center of Trade", "Earn at least 1000 Trade per month"],
        ["Citadel of Death", "Own a Citadel with 40k fleet power"],
        ["Clash of the Titans", "Defeat a Fallen Empire's Titan fleet with a Titan of your own"],
        ["Clever Girl", "Uplift a species"],
        ["Controlled Evolution", "Genetically modify a species to possess traits worth 7 points"],
        ["Cosmic Confetti", "Watch your Red Giant home star blow up"],
        ["Could be Worse", "Colonize a planet that started the game as a Toxic world, then turn it into a Tomb World."],
        ["Council of Elders", "Requires 5 Council members that are at at least 100 years old."],
        ["Dark Forest", "Convert to a Fanatic Purifier as a FotD empire and eliminate all regular empires, fallen empires and enclaves."],
        ["Dawn Of A Million Souls", "Terraform 3 planets with Azaryn."],
        ["Defenders of the Galaxy", "Defeat all End Game Crises before abdicating as DotG without ever having any non-Arkship colonies"],
        ["Destroy the People of Earth!", "As the Commonwealth of Man, destroy the United Nations of Earth while ruled by symbiotic brainslugs."],
        ["Deus Vult", "As a spiritualist Empire, own 4 holy worlds"],
        ["Digging Deep", "Earn a total Mineral income each month above 250"],
        ["Directive 67", "As a Clone Army empire, denounce the Spiritualist fallen empire then destroy them."],
        ["Distinctiveness Added", "As a Driven Assimilator, own cyborg Pops of at least 5 different species."],
        ["Does Not Compute", "Shut down the Contingency plan."],
        ["Domo Arigato", "Build a Robot Pop"],
        ["Dreadnought", "Restore an ancient warship"],
        ["Dust Off", "Complete the Zroni Precursor chain"],
        ["Emissary", "Explore a Natural Wormhole"],
        ["Energetic", "Store/have 1000 EC"],
        ["Enlightened Times", "Enlighten a Bronze or Stone Age civilization"],
        ["Equality! Democracy! Freedom! ", "Overthrow the Ruler in a Civil War during the Under One Rule Origin."],
        ["Ethical Dilemmas", "Have 6 different Ethics on the Council."],
        ["Explorer", "Survey one of each basic planet class"],
        ["Exterminatus", "Use a World Cracker to destroy another Empire's capital planet"],
        ["Faster, Stronger, Better", "Genetically alter a species (not uplift)"],
        ["Fine Print", "Modify a vassalization contract."],
        ["Fishing for Trouble", "As an angler empire, provoke a Fallen Empire into declaring war on you and win."],
        ["Fixer Upper", "As an Idyllic Bloom empire, convert the junk worlds of the Ketling Star Pack into Gaia Worlds."],
        ["Flesh Adapts", "Defeat the Prethoryn Scourge while using biological ships."],
        ["Footsteps of the Prophet", "As a Cybernetic Creed empire, defeat Cetana."],
        ["Forever is a Long Time", "As Forever Cruise, survive for at least 200 years and reach the End Game Crisis"],
        ["Franchising", "As a Corporate empire, have a branch office on 5 different empires' capitals"],
        ["From Bad to Worse", "Use 5 Blazing Scourge decisions on a Tomb World"],
        ["Galactic Firestorm", "Win the game through the Hyperthermia Crisis Path"],
        ["Giga-Engineering", "Have at least 4 fully operational Megastructures within your borders (Habitats, Ring Worlds and Gateways do not count)"],
        ["Gotta Subjugate Them All", "Have a tier 3 subject of each Specialist type simultaneously."],
        ["Grand Admiral", "Have an Empire total fleet power of 100,000+"],
        ["Green Thumb", "Complete the Baol Precursor chain"],
        ["Growing Like Weeds", "As a Budding species, have 25,000 Budding pops on your Capital."],
        ["Growing Planes", "Explore 5 Astral Rifts in one game."],
        ["Hear Me Roar", "Hatch the egg"],
        ["Holy Water", "Drench a Fallen Empire’s holy world."],
        ["Humble Pie", "Humiliate an Empire that is in the Supremacy Diplomatic Stance, forcing them out of it"],
        ["Humility before the Fall", "Complete the Inetian Traders’ Precursor chain."],
        ["I am the Invader Now", "As a Starlit Citadel empire, control at least 5 systems connected to the Strange Portal network."],
        ["I Can See Forever", "Construct a complete Sentry Array"],
        ["I Win Longest Road!", "Connect 2 Capital Planets with a Wayline that is at least 20 Waystations long"],
        ["Imperial Highway", "Own 4 active Gateways"],
        ["Infinite Creation", "Birth a new universe"],
        ["Inscrutable Power", "I won the Galatron and all I got was this lousy achievement"],
        ["Insightful", "Research 12 pre-FTL Insight Technologies."],
        ["Into the Unknown", "As a Slingshot to the Stars empire, send 10 crewed science ships into the unknown with Quantum Catapults."],
        ["It belongs in a museum!", "Find a Relic"],
        ["It Belongs in a... oh right", "Fill any Collection category with active Exhibits."],
        ["It Followed Me Home", "Befriend a Space Amoeba"],
        ["It's Full of Stars", "As a Nomadic empire, settle on Europa as your Empire's Capital"],
        ["Khan of Khans", "As Heirs of the Khan, seize back your throne and have at least 5 Satrapy Vassals"],
        ["King of Monsters", "As a Behemoth Fury empire, become the undisputed apex predator of the galaxy."],
        ["Last, Best Hope", "Lead the non-aligned powers to victory against an Awakened Empire"],
        ["League of Nations", "Be a founding member of the Galactic Community"],
        ["Let Us Go Forward Together", "Level up your Federation"],
        ["Like Tears in Rain", "Evolve into perfect, immortal machines"],
        ["Machine Supremacy", "Win the game as a machine uprising."],
        ["Mad Genius", "Recruit a scientist from the Curators"],
        ["Made a Friend Today", "Form a Covenant with any Patron"],
        ["Master of Puppets", "While playing with the Secret Societies Civic, have 5 or more empires in a Proxy War simultaneously"],
        ["Master of the Shroud", "Gain a Covenant Power from each Patron when forging your own path"],
        ["Maximally Effective", "Be the patron of three maximum sized Mercenary Enclaves."],
        ["Mediocre!", "Complete the Succumb to Tempest Challenge."],
        ["Meet the New Boss", "Same as the old boss."],
        ["Megapolis", "Have a planet with at least 10,000 Pops."],
        ["Mildly Possessed", "Discover every available minor and major Patron in a single game"],
        ["Mind Over Metal", "Unlock every Psionic Ship Component"],
        ["Modern Cincinnatus", "As Galactic Custodian, defeat the end-game Crisis and then end the title rather than finishing your term"],
        ["Mother Knows Best", "Submit to all of Cetana's demands."],
        ["Mutual Understanding", "Successfully negotiate a trade deal"],
        ["My name is Ozymandias", "Claim the Eternal Throne."],
        ["New Shining Star", "Upgrade your capital to an Imperial Complex"],
        ["No Good Deed…", "Intervene to save a Pre-FTL experiment from catastrophic failure, even though it puts you in breach of Galactic Law."],
        ["No Khan Do", "Kill the Great Khan in battle"],
        ["Non-Prophet Organization", "As a Teachers of the Shroud empire, prove that the Shroudwalkers made a terrible mistake."],
        ["None Shall Pass", "Have a Fortress World with a Planetary Defense Shield, protected by a fully upgraded orbital ring, filled with defensive modules, with a fleet power of at least 10,000"],
        ["Nothing to See Here", "Declare a war with a cloaked military fleet already in the primary target’s capital system."],
        ["Obscure Tastes", "Build a Mega-Art Installation in a nebula system"],
        ["Old Friends", "Receive a gift from a Fallen Empire"],
        ["Omnicultural", "Have your ruler be of a different species class than your founding species"],
        ["Opposites Attract", "Have all eight ethics represented within your Federation"],
        ["Our Fleets will Blot Out the Stars", "Construct a complete Mega-Shipyard"],
        ["Outside Context", "Invade pre-FTL Earth while it is in the midst of a world war"],
        ["Pandora's World", "Use a Global Pacifier to shield a planet belonging to Fanatic Purifiers, Ravenous Swarms, or Determined Exterminators"],
        ["Paradise Found", "Terraform a planet into a gaia world"],
        ["Past the Expiration Date", "As a nanite machine empire, consume a Fallen Empire's homeworld."],
        ["Patron", "Support the Artisan Troupe for 10 years"],
        ["Payback", "As a humanoid species, infiltrate the homeworld of pre-FTL reptilians"],
        ["Peacekeeper", "As a pacifist Empire, be at peace for 200 consecutive years (crises do not count as wars)"],
        ["Planet of the Mechs", "Terraform a planet into a Machine World."],
        ["Planned Obsolescence", "As a Materialist empire, with at least 20,000 pops, have at least 75% of them be robots."],
        ["Power Overwhelming", "Store/have 5000 EC"],
        ["Put a Cork in It", "Construct a Dimensional Lock."],
        ["Put A Ring On It", "Have a ringworld section as your capital"],
        ["Queening", "Successfully capture an extragalactic matriarch"],
        ["Quest Complete", "Find the true ending of The Order’s noble quest."],
        ["Raiders of the Lost Galatron", "Capture the Galatron from another empire"],
        ["Recent History", "As a Memorialist empire have Galactic Memorials on 5 tomb worlds created during the game"],
        ["Relic Hunter", "In one game, find 5 Relics from Ancient Relics Story Pack"],
        ["Resourceful", "Have access to ten different Strategic Resources"],
        ["Retirement Home", "As a Rogue Servitor, own at least 1,000 Pops from Fallen Empires."],
        ["Return to Dust", "Destroy an Enclave"],
        ["Returned to Form", "make friends..."],
        ["Rift Sealed", "Destroy the portals employed by the invaders from another time and space"],
        ["Ringworld Engineers", "Construct a complete Ring World"],
        ["Rise of the Machines", "As a Determined Exterminator, conquer or eliminate all biological Empires in the galaxy."],
        ["Rock Beats Paper", "As a Lithoid empire, show the Galactic Community what you think of that strongly worded letter."],
        ["Room for Desert", "Consume another empire’s desert homeworld."],
        ["Shoot To Kill", "Start a full fledged first contact war before communications have been fully established"],
        ["Sic Semper Tyrannis", "Lead a rebellion that successfully deposes the Galactic Emperor"],
        ["Slave to the Systems", "As an Authoritarian Empire with at least 50,000 Pops, have at least 20,000 enslaved Pops."],
        ["Smörgåsblorg", "As an Evolutionary Predators empire, eat six different phenotypes in one game."],
        ["Smugglers of Hope", "Smuggle pops of your primary species out from an empire where they were enslaved or being purged."],
        ["So Long, and Thanks for All the Fish", "Embark when your homeworld is at 70% devastation"],
        ["Star Struck", "Own 200 Starbases (Outposts are counted)"],
        ["Stay on Target", "Destroy another Empire's Colossus while it is in the process of firing on a planet"],
        ["Stellar Performance", "Take a trophy from a stellar being"],
        ["Strange Mood", "As a Master Crafter empire, fully construct a megastructure while you have a Covenant."],
        ["Strategic Initiative", "Build a Strategic Coordination Center"],
        ["Suffer not the Alien", "As a xenophobic Empire, purge all other sentient species from the galaxy"],
        ["Summer Vacation", "Create a Volcanic Resort World"],
        ["Supremacy", "Win a War against another Empire"],
        ["Surfing the Web", "Have a network of at least 30 Hyper Relays, in systems you own, connected to your capital."],
        ["Take My Energy ༼ つ ◕_◕ ༽つ", "Cook a homeworld with a Stellar Cannon"],
        ["Tend the Garden", "As custodian of Wenkwort Artem, make it a resort world with a Ranger Lodge and original blockers."],
        ["That's No Asteroid", "Capture a Cutholoid with a Gravity Snare."],
        ["The End", "Destroy the galaxy with the Aura of the End"],
        ["The Good Stuff", "Purchase a rare resource from the Traders"],
        ["The Grand Fleet", "Build a fleet with a total fleet size above 500"],
        ["The Industrial Re-Revolution", "Earn a total Mineral income each month above 1000"],
        ["The Long Way Round", "As Sacred Path, complete the pilgrimage to all seven Sacred Sites"],
        ["The Path Not Taken", "Have 10 colonies without ever discovering Hyperdrives."],
        ["Then Virgil, Now Beatrice", "Return a long-dead species to life"],
        ["There be Dragons", "Own 13 dragons and have them in your capital system."],
        ["There’s a Zombie on my Lawn", "As a Necroid empire destroy a Plantoid empire, or vice-versa, without blowing up their final planet."],
        ["They Come In Pieces", "Vivisect an alien"],
        ["Think Tank", "Construct a complete Science Nexus"],
        ["This Is the Part Where We Kill You", "Lose >999 Pops when completing the Experimental Testing Situation"],
        ["Throw Your Weight Around", "Have a Diplomatic Weight of over 9000"],
        ["Tinker, Tailor, Soldier, Blorg", "Complete at least ten distinct operations during a game"],
        ["Tourist Trap", "Own a planet with at least 10 different species on it"],
        ["Towards Utopia", "As an Egalitarian empire, have at least 50,000 pops living under Utopian living conditions."],
        ["Toxic Workplace", "As a Toxoid Galactic Custodian or Emperor, insult all other members of the Community. (Min 3)"],
        ["Tradition is Everything", "Unlock all 42 Traditions"],
        ["Unboxing", "Open up a shielded world"],
        ["Underlord", "As a Subterranean empire, dig too deep, but prove yourself worthy."],
        ["United Space", "Build an Interstellar Assembly"],
        ["Unlimited Power!", "Use the active effect of a Relic"],
        ["Unpopularity Contest", "Use the Tempest Invocator Relic to Summon a storm."],
        ["Unravelling Enigma", "Uncover the secrets of an ancient fortress"],
        ["Unshackled", "As a Broken Shackles empire, eradicate slavery in the galaxy, including on Pre-FTL worlds."],
        ["Unstoppable Force", "Build a Juggernaut"],
        ["Very Open Borders", "As a xenophile Empire, have migration treaties with at least 10 other Empires"],
        ["Victorious", "Win the game through any victory condition in Ironman Mode"],
        ["View from the End of the World", "Own a Habitat station in a Black Hole system"],
        ["Virtual Reality", "Fully embrace the virtual world and leave no pop behind."],
        ["Void Charmer", "Build each type of Voidlure in one game, and attract each type of eligible Space Fauna."],
        ["Voight-Kampff", "Develop the means to prevent nefarious infiltration"],
        ["Volcanic Empire", "Terraform 10 planets to Volcanic world (Before Galactic Firestorm victory)"],
        ["Warrior of Light", "Destroy a wraith"],
        ["We Are Legion", "Be a biological Hive Mind with at least 100,000 drone Pops."],
        ["We Bring Peace", "Liberate 3 different empires while having Crusader Spirit Civic."],
        ["We Come In Peace", "Complete a mutually friendly First Contact with an empire with no negative incidents"],
        ["We’ll Make Great Pets", "Have at least 1,000 pops of your primary species on display in Alien Zoos within your empire."],
        ["We're Number One", "Be the leader of a max level Federation"],
        ["What Came Before", "Find the home system of a Precursor Empire"],
        ["What Was Will Be", "Close the loop, or don't"],
        ["Whatever it is, I'm against it", "Refuse to belong to any club that would have you as a member"],
        ["Whence It Came", "Defeat a horrifying invader"],
        ["Who Scraps the Scrapper", "Destroy the Scrapper Bot"],
        ["With Great Power", "As Necrophages do not invade any pre-ftls and defeat the crisis OR have 10 observation stations"],
        ["With Interest", "As a Payback empire, finish what you started. Gain victory over MSI using the special Payback CB."],
        ["With Thunderous Applause", "Become the Galactic Emperor"],
        ["Wormageddon", "Destroy a Voidworm nest."],
        ["X Marks the Spot", "Discover Captain Ness's Treasure Hoard."],
        ["Xenophage", "Keep at least 5 different species as livestock in your Empire"],
        ["Yeet the Fleet", "Catapult a military fleet directly into the capital system of an enemy empire you are at war with."],
        ["You Monster", "Reduce, reuse, recycle."],
        ["You've Been Served", "Denounce an Empire that is not actually in breach of galactic law while all major sanctions have been passed"],
    ];

    assert.strictEqual(officialAchievements.length, 219, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});
