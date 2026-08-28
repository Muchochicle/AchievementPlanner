import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/sea-of-thieves.json - 293 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1172620 (fetched through this app's own services/steamApi.js).
// 292 of 293 ship a real, official Steam description; the
// 1 hidden achievement ship no Steam description and
// its condition is curatorial.
// difficulty/estimatedTime remain curatorial judgments, same convention
// as every other planner difficulty/time field in this catalog.
const seaOfThieves = getPlannerData("sea-of-thieves");

test("getPlannerData('sea-of-thieves') returns real planner data with 293 curated achievements", () => {

    assert.ok(seaOfThieves, "expected real planner data for sea-of-thieves");
    assert.ok(Array.isArray(seaOfThieves.achievements));
    assert.strictEqual(seaOfThieves.achievements.length, 293);

});

test("every Sea of Thieves achievement has a unique id from 1 to 293 and a unique apiname", () => {

    const ids = seaOfThieves.achievements.map(a => a.id);
    const apinames = seaOfThieves.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 293 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 293);
    assert.strictEqual(new Set(apinames).size, 293);

});

test("every Sea of Thieves achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

    for (const achievement of seaOfThieves.achievements) {

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

test("every one of the 292 officially-described Sea of Thieves achievement name+description pairs matches the live GetSchemaForGame response", () => {

    // The 1 hidden achievement is excluded here - Steam
    // never exposes a public description for it - and covered by its
    // own dedicated test below instead.
    const officialAchievements = [
        ["Bone-Cronch", "A skeleton cronches through thick yellow peel. Attack it and kill it before it can heal!"],
        ["A Titanic Ensemble", "A pirate may choose to go down with their ship. A musical send-off concludes their sad trip!"],
        ["Dead Pirates DO Tell Tales", "All on the Ferry are sister and brother. Send forth a message to someone or other!"],
        ["Hold My Grog!", "Launched from your vessel, this cannon-fired trip must see you land safe on the deck of a ship!"],
        ["I Don’t See Your Ship", "You fought a crew, stood strong and brave and sent their ship to a watery grave!"],
        ["Laden With Treasure", "You've overcome a score of tests and now you're hoarding twenty chests!"],
        ["I'm On A Whole New Adventure", "So many voyages, but which one to do? Stow yours and vote for one placed by your crew. "],
        ["You Can Always Trust The Untrustworthy", "Plundered from an unwary crew, their Captain's Chest cashed in - by you!"],
        ["When You're A Professional Pirate", "Commendations are given by Companies when you've reached certain targets. Try to earn ten!"],
        ["Tactical Chunder", "When threatened at sword point, remember this trick: blind your poor foe with a bucket of sick!"],
        ["Now Bring Me That Horizon", "Each new pirate greets the world with anchor raised and sails unfurled!"],
        ["Full Billow", "All sails with the wind, what time it saves when speeding across the ocean's waves!"],
        ["Handbrake Turn", "To swiftly avoid a great danger you're dreading, steer hard and drop anchor to alter your heading!"],
        ["I Wanna Be A Pirate!", "A Company's pleased and you've reason to revel if your Reputation increased by one level!"],
        ["Shopping for a Promotion", "Your Voyages have earned you enough recognition so buy a Promotion and prove your position!"],
        ["I'll Drink To That", "Two different crews, their tankards held high, will meet at a tavern and drain them all dry!"],
        ["What Shall We Do with a Drunken Sailor? ", "Too many tankards of sweet, golden grog will first make you queasy, then sick as a dog…"],
        ["#BeMorePirate", "A peg-leg, an eyepatch, a hat and a hook, all purchased to pull off the true pirate look!"],
        ["Aye of Reach", "Visit the Weaponsmith, you'll find they teach the value of buying a new Eye of Reach!"],
        ["Blundarrrrbuss", "The Weaponsmith's open, you'll see it's no fuss to purchase a glorious new blunderbuss!"],
        ["Colourful Sails", "Make your first buy from the Shipwright, who deals in figureheads, cannons, new sails and wheels!"],
        ["You Fight Like A Merchant", "Dexterous swordplay can keep you alive. Block an attack and then strike within five!"],
        ["How Appropriate! You Fight Like A Chicken", "Your trusty blade was just too slow. Now it's your turn to feel their blow!"],
        ["But You Have Heard Of Me?", "Your reputation is starting to thrive. Grab your Promotion, you've reached twenty-five!"],
        ["Self Entitled", "Titles are gathered from deeds near and far. Earn ten to show what type of pirate you are!"],
        ["In Good Company", "A Company's items are sold to the loyal, five upgrades rewards you with their finest spoil!"],
        ["Did Everyone See That?", "A heavy attack while you've boarded their ship may send your foe over the side for a dip!"],
        ["Become Pirate Legend", "A true Pirate Legend is one of the greats and for them, Athena's Fortune awaits…"],
        ["Ignoring The Rules Of Engagement", "To strike from behind is a sneaky attack that leads to a blunderbuss shot in the back!"],
        ["Kraken Good Job", "From under the waves a great creature arrived but you drove it away. Better still, you survived!"],
        ["Perfect Dark", "Through stormy seas in silent flight, no lanterns lit to pierce the night."],
        ["Friends Not Foe", "A greeting, when given with Pirate Salute, can make a new friend - or perhaps a recruit!"],
        ["Legends - \"Cronch\"", "Just like Griffin, your pirate kin, 'cronch' a banana and eat its skin!"],
        ["Legends - \"The Greatest Race of All Time!\"", "Side by side, two ships must race with weapons silenced for first place!"],
        ["Legends - \"This is Unacceptable!\"", "A chest of yours has gone astray and been cashed in as some thief's pay! "],
        ["Legends - \"The Skullduggers\"", "Five legends from across the sea playing instruments in harmony!"],
        ["It's A Pirates Life For Me", "The Voyage is done; a chest of old now safe with those who hoard their gold!"],
        ["Master Gold Hoarder", "You've gathered gold from near and far. A Master Hoarder now, you are!"],
        ["Taking Orders", "Your Voyage complete, a skull returned, praise from the Order thusly earned! "],
        ["Master of the Order", "Sun-bleached skulls from across the ocean earn the Order's highest Promotion!"],
        ["I Am Not Obsessed With Treasure", "A Voyage is over, back to land a merchant's cargo in your hand!"],
        ["Master Merchant", "The Merchant Alliance applauds your devotion bestowing upon you a Master Promotion!"],
        ["Seeker of Lost Maps", "Dig Up 250 chests whilst on Gold Hoarder X Marks the Spot Voyages."],
        ["Golden Voyager", "Receive the Commendation for completing 250 Gold Hoarder Voyages."],
        ["Sailor of the Gold Horizon", "Sail 1,000 nautical miles on Gold Hoarders Voyages, or with their Emissary Flag raised."],
        ["Hoarder of Barnacled Gold", "Receive the Commendation for selling 300 Shipwrecked Chests."],
        ["Keeper of a Glittering Hoard", "Receive the Commendation for earning 150,000 gold from Gold Hoarder voyages."],
        ["Hoarder of the Captain’s Gold", "Receive the Commendation for selling 360 Captain’s Chests."],
        ["Merchant Adventurer", "Correctly fill 250 animal crates whilst on Merchant Alliance Contract Voyages."],
        ["Merchant Voyager", "Receive the Commendation for completing 250 Merchant Alliance Voyages."],
        ["Sailor of the Merchant Alliance", "Sail 1,000 nautical miles on Merchant Alliance Voyages, or with their Emissary Flag raised."],
        ["Black Powder Merchant", "Deliver 100 Gunpowder Barrels or Crates of Unprocessed Gunpowder."],
        ["Merchant Forager", "Deliver 50 Fruit Crates or Crates of Unprepared Ingredients."],
        ["Gilded Merchant", "Receive the Commendation for earning 150,000 gold from Merchant Alliance Voyages."],
        ["Seeker of Lost Souls", "Defeat 500 skeletons on an Order of Souls Bounty Voyage."],
        ["Voyager of Lost Souls", "Receive the Commendation for completing 250 Order of Souls Voyages."],
        ["Sailor of the Whispering Bones", "Sail 1,000 nautical miles on Order of Souls Voyages, or with their Emissary Flag raised."],
        ["Hunter of Cursed Captains", "Receive the Commendation for defeating 1,000 Skeleton Captains."],
        ["Mercenary of the Ancient Order", "Receive the Commendation for earning 150,000 gold from Order of Souls Voyages."],
        ["Master Hunter Of Villainous Skulls", "Receive the Commendation for selling 360 Villainous Skulls."],
        ["Dining With the Stars", "A midnight snack, if you desire, cooked to perfection on a fire!"],
        ["Well Done!", "Your hearty meal's turned out wrong.  You left it on the stove too long!"],
        ["Not So Well Done", "Well-cooked meals are never easy,  dine too soon and you'll get queasy!"],
        ["Five a Day", "Sampling every type of fruit  will keep you fit to fight and loot!"],
        ["Another Pirate's Treasure", "Ill-gotten gains - yet, after all,  they still sold to the Hunter's Call."],
        ["Night Bite", "Little fishie, all aglow,  off to The Hunter's Call you go."],
        ["A Rare Delicacy", "If reeling a coloured fish in, take care,  The Hunter's Call claim they're incredibly rare!"],
        ["Meat and Greet", "A feast of meats all roasted well, each kind to The Hunter's Call you'll sell."],
        ["Hunter of Trophy Fish", "Receive the Commendation for delivering 25 Trophy Fish to The Hunter's Call."],
        ["Hook, Line and Sinker", "A platter of each kind of fish will serve the Hunters quite a dish!"],
        ["Legendary Hunter of the Sea of Thieves", "Receive the Commendation for completing 57 Grade 5 Hunter's Call Commendations."],
        ["Master of the Hunters", "Purchase the Master Hunter Promotion from The Hunter's Call Trading Company."],
        ["The Shroudbreaker", "A sunken ship and ancient key will set you on a great journey!"],
        ["The Cursed Rogue", "A Cursed Rogue searching, never sleeping. What great secrets is she keeping?"],
        ["The Legendary Storyteller", "Adventures told with a fearless grin. Perhaps some truths might lie within?"],
        ["Stars of a Thief", "The heavens' secrets, now concealed through ancient fable are revealed!"],
        ["Wild Rose", "Jealous wrongs must be set right so two young lovers can unite!"],
        ["The Art of the Trickster", "A shining treasure you must claim, the prize within a deadly game!"],
        ["The Fate of the Morningstar", "Guide three wayward souls to rest, the next step on your golden quest!"],
        ["Revenge of the Morningstar", "Great evil sleeps below the sands, revenge at last within your hands!"],
        ["The Shores of Gold", "Forbidden secrets must be told. What lies beneath the Shores of Gold? "],
        ["A Sunken Legacy", "Receive all Commendations for 'The Shroudbreaker' Tall Tale."],
        ["Fateful Memories", " Receive all Commendations for 'The Cursed Rogue' Tall Tale."],
        ["Sea of Dreams", " Receive all Commendations for 'The Legendary Storyteller' Tall Tale."],
        ["The Stolen Sky", "Receive all Commendations for the 'Stars of a Thief' Tall Tale."],
        ["Always Yours", "Receive all Commendations for the 'Wild Rose' Tall Tale."],
        ["The Trickster's Folly", " Receive all Commendations for 'The Art of the Trickster' Tall Tale."],
        ["The Unbroken Bond", " Receive all Commendations for 'The Fate of the Morningstar' Tall Tale."],
        ["The Morningstar Rises", " Receive all Commendations for 'The Revenge of the Morningstar' Tall Tale."],
        ["Seeker of Grand Adventure", "Receive all Commendations for all the Shores of Gold Tall Tales."],
        ["Smile, you son of a…", "That shark bit off more than it could chew, when it chose to mess with you."],
        ["A Spectrum of Shadows", "Defeat each colour of Shadow of Fate."],
        ["Summoning the Damned", "Activate the Fort of the Damned by lighting all six Flames of Fate and sacrificing a Ritual Skull."],
        ["Defeating the Damned", "Clear the Fort of the Damned of all enemies."],
        ["Banishing the Damned", "Clear the Fort of the Damned of all enemies, 10 times."],
        ["The Seabound Soul", "Complete The Seabound Soul"],
        ["Fire and Ash", "Complete all commendations for The Seabound Soul"],
        ["Tome of Curses I ", "Sell the Tome of Curses I."],
        ["Tome of Curses II", "Sell the Tome of Curses II."],
        ["Tome of Curses III", "Sell the Tome of Curses III."],
        ["Tome of Curses IV", "Sell the Tome of Curses IV."],
        ["Tome of Curses V", "Sell the Tome of Curses V."],
        ["Tome of Curses Collector", "Sell all 5 Tomes of Curses."],
        ["Tome of Power I", "Sell the Tome of Power I."],
        ["Tome of Power II", "Sell the Tome of Power II."],
        ["Tome of Power III", "Sell the Tome of Power III."],
        ["Tome of Power IV", "Sell the Tome of Power IV"],
        ["Tome of Power V", "Sell the Tome of Power V."],
        ["Tome of Power Collector", "Sell all 5 Tomes of Power."],
        ["Unto the Horizon", "Complete the Maiden Voyage"],
        ["Tome of Fire I", "Sell the Tome of Fire I."],
        ["Tome of Fire II", "Sell the Tome of Fire II."],
        ["Tome of Fire III", "Sell the Tome of Fire III."],
        ["Tome of Fire IV", "Sell the Tome of Fire IV."],
        ["Tome of Fire V", "Sell the Tome of Fire V."],
        ["Tome of Fire Collector", "Sell all 5 Tomes of Fire."],
        ["Tome of Resurrection I", "Sell the Tome of Resurrection I."],
        ["Tome of Resurrection II", "Sell the Tome of Resurrection II."],
        ["Tome of Resurrection III", "Sell the Tome of Resurrection III."],
        ["Tome of Resurrection IV", "Sell the Tome of Resurrection IV"],
        ["Tome of Resurrection V", "Sell the Tome of Resurrection V."],
        ["Tome of Resurrection Collector", "Sell all 5 Tomes of Resurrection."],
        ["Heart of Fire", "Complete Heart of Fire"],
        ["The Blackwyche Reborn", "Complete all commendations for Heart of Fire"],
        ["Collector of Legendary Treasures", "Find and sell at least one of each Legendary Treasure."],
        ["Golden Ticket", "Be part of a crew that votes to raise an Emissary Flag for the Gold Hoarders."],
        ["Ship of Souls", "Be part of a crew that votes to raise an Emissary Flag for the Order of Souls."],
        ["Trade Ambassador", "Be part of a crew that votes to raise an Emissary Flag for the Merchant Alliance."],
        ["For Athena", "Be part of a crew that votes to raise an Emissary Flag for Athena's Fortune."],
        ["The Reaping Begins", "Be part of a crew that votes to raise an Emissary Flag for the Reaper's Bones."],
        ["So… Many… Chests!", "Be promoted to level 75 with the Gold Hoarders."],
        ["Taking Heads", "Be promoted to level 75 with the Order of Souls."],
        ["Deliverance", "Be promoted to level 75 with the Merchant Alliance."],
        ["Legen… Wait for it… Dary!", "Be promoted to level 20 with Athena's Fortune."],
        ["You Reap What You See", "Be promoted to level 75 with the Reaper's Bones."],
        ["Gold Hoarder Incarnate", "Represent the Gold Hoarders in the Captain Tier at the closure of an Emissary Ledger, 5 times."],
        ["The Order's Finest", "Represent the Order of Souls in the Grandee Tier at the closure of an Emissary Ledger, 5 times."],
        ["Employee of the Month", "Represent the Merchant Alliance in the Admiral Tier at the closure of an Emissary Ledger, 5 times."],
        ["Athena's Greatest", "Represent Athena's Fortune in the Legend Tier at the closure of an Emissary Ledger, 5 times."],
        ["Feeding the Flame", "Represent the Reaper's Bones in the Master Tier at the closure of an Emissary Ledger, 5 times."],
        ["Banisher of the Spectral Flame", "Defeat the ghost of the Burning Blade 10 times!"],
        ["Scourge of the Damned", "Defeat 500 ghost ships!"],
        ["Hunter of Captain Grimm", "Defeat Captain Grimm 5 times"],
        ["Hunter of Red Ruth", "Defeat Red Ruth 5 times"],
        ["Hunter of Old Horatio", "Defeat Old Horatio 5 times"],
        ["Hunter of Warden Chi", "Defeat Warden Chi 5 times"],
        ["We Don't Need Maps", "Find a Vault Key using only 1 piece of Torn Map Parchment."],
        ["Golden Retriever", "Open three Treasure Vaults with gold vault keys."],
        ["No Mound Left Behind", "Pick up all the mounds of gold inside a Treasure Vault."],
        ["Wreckless Pursuit", "Locate the missing ship on a Lost Shipment Voyage without finding all the clues."],
        ["Get Wrecked", "On Lost Shipment Voyages, locate a missing ship along each of the Merchants' trade routes."],
        ["Many, Many Manifests", "Recover 5 Revered Manifests while on Lost Shipment Voyages."],
        ["Convenient Stores", "Supplies from the Merchants will save you a wait. Buy every Resource and Commodity Crate!"],
        ["A Pirate's Life", "Complete 'A Pirate's Life'."],
        ["Mist and Memory", "Complete all Commendations for 'A Pirate's Life'."],
        ["The Sunken Pearl", "Complete 'The Sunken Pearl'."],
        ["Pearl in the Dark", "Complete all Commendations for 'The Sunken Pearl'."],
        ["Captains of the Damned", "Complete 'Captains of the Damned'."],
        ["Captain of Haunted Waters", "Complete all Commendations for 'Captains of the Damned'."],
        ["Dark Brethren", "Complete 'Dark Brethren'."],
        ["Fortress of Sorrow", "Complete all Commendations for 'Dark Brethren'."],
        ["Lords of the Sea", "Complete 'Lords of the Sea'."],
        ["An Eternal Pirate Life", "Complete all Commendations for 'Lords of the Sea'."],
        ["A Pirate's Life for Me", "Complete all Commendations for the 'Sea of Thieves: A Pirate's Life' Tall Tales."],
        ["Mystery of Hungering", "Complete the Mystery of the Shrine of Hungering Commendation."],
        ["Mystery of Flooded Embrace", "Complete the Mystery of the Shrine of Flooded Embrace Commendation."],
        ["Mystery of Ocean's Fortune", "Complete the Mystery of the Shrine of Ocean's Fortune Commendation."],
        ["Mystery of the Coral Tomb", "Complete the Mystery of the Shrine of the Coral Tomb Commendation."],
        ["Mystery of Ancient Tears", "Complete the Mystery of the Shrine of Ancient Tears Commendation."],
        ["Mystery of Tribute", "Complete the Mystery of the Shrine of Tribute Commendation."],
        ["Sunken Kingdom Marauder", "Complete the Marauder of the Sunken Kingdom Commendation."],
        ["Seeker of the Sea", "Complete the Seeker of the Sea Commendation."],
        ["Legend of the Sunken Kingdom", "Complete all Sunken Kingdom Commendations."],
        ["Stolen Secrets", "You stole a Map Bundle from another crew."],
        ["Who Needs A Bigger Boat?", "You attacked a Megalodon or Kraken using a Cannon Rowboat."],
        ["Night-Time Spectacular", "You set off a display of five or more fireworks at night."],
        ["Tribute Seat", "You took a seat upon the throne during the 'Shores of Gold' Tall Tale."],
        ["Sleepover", "Sleep in a bed aboard another crew's ship."],
        ["Critical Roll", "You rolled a natural 20 using the Roll a D20 Emote."],
        ["Hider of Secret Treasures", "You buried treasures for safekeeping."],
        ["Master Cartographer", "You donated Treasure Stash maps to a Quest Board."],
        ["Seeker of Pirate Plunder", "You uncovered valuable treasures buried by other pirate crews."],
        ["Beholder of Buried Treasures", "You completed all Buried Treasures Commendations."],
        ["What's Yours Is Mine", "Open a Sea Fort Treasury"],
        ["Master Burglar", "Discover 100 secret stashed treasures on a Sea Fort"],
        ["From Whence They Came", "Defeat 250 Sea Fort Phantoms"],
        ["Veil Seeker", "Complete 100 Legend of the Veil Quests"],
        ["Legendary Loot Seller", "Sell 500 Legendary Treasures"],
        ["True Legend", "Complete 25 Legend of the Veil Voyages as a Grade 5 Athena Emissary"],
        ["O Captain!", "Set sail on a Captained ship as one of the crew."],
        ["The Quartermaster", "Stock your ship with each type of supply using the Ship's Manifest."],
        ["A Crewed Wisdom", "Read another crew's Captain's Log."],
        ["The Art Collector", "Place 15 trinkets aboard a Captained ship at once."],
        ["Ready for Next Time", "Save a fully-decorated, Captained ship in the Ship Decoration Chest."],
        ["Chasing the Horizon", "Spend 10 days at sea aboard a Captained ship, either as the Captain or one of the crew."],
        ["A Veteran Voyager", "Complete 30 Voyages aboard a Captained Ship."],
        ["A Touch of Class", "Hand in 200 treasure items to the Sovereigns."],
        ["That's 'Captain', Mate...", "Set sail as a Captain of Adventure for the first time."],
        ["Spared No Expense", "Purchase a cherished trinket."],
        ["A Professional Pirate", "Unlock a Legendary Title by progressing your Pirate Milestones."],
        ["A Seasoned Ship", "Unlock a Legendary Ship Title by progressing your Ship Milestones."],
        ["A Fleeting Fancy", "Own 15 ships."],
        ["You Gotta Fight", "Win your first fight in the Battle for the Sea of Thieves."],
        ["A Sunken Century", "Sink 100 Faction ships in the Battle for the Sea of Thieves."],
        ["Nigh Unsinkable!", "Earn an Allegiance Streak of 4 for either Faction."],
        ["Blessing of Athena's Fortune", "Receive the Blessing of Athena's Fortune."],
        ["Ritual of the Flame", "Undergo the Ritual of the Flame."],
        ["Getting A Head", "Uncover a Skull of Destiny."],
        ["Hot-Headed", "Use a Skull of Destiny to begin 3 Fort of the Damned events."],
        ["Fortune-ate Outcome", "Conquer 3 Forts of Fortune."],
        ["A Favour for the Flame", "Hand in 30 Reaper's Chests or Reaper's Bounties."],
        ["Favour the Bold", "Hand in 30 Chests of Fortune."],
        ["The Journey to Mêlée Island", "Complete 'The Journey to Mêlée Island' Commendation."],
        ["Mêlée Island Investigator", "Complete all Commendations for 'The Journey to Mêlée Island'."],
        ["The Quest for Guybrush", "Complete 'The Quest for Guybrush' Commendation."],
        ["Legendary Trial Master", "Complete all Commendations for 'The Quest for Guybrush'."],
        ["The Lair of LeChuck", "You completed The Lair of LeChuck."],
        ["Do the Monkey!", "You completed all Commendations for 'The Lair of LeChuck'."],
        ["Legend of Monkey Island", "You completed all Commendations for 'The Legend of Monkey Island' Tall Tales"],
        ["Guild Initiate", "Set sail on a ship enrolled in a Guild to which you belong."],
        ["Sworn Guild Captain", "Pledge a Captained Ship to a Guild."],
        ["Emissary of Guilds", "Become a Guild Emissary for the first time for a Guild to which you belong."],
        ["Distinguished Guild Member", "Set sail representing a Guild you are a member of with Distinction 1 or higher."],
        ["Legendary Guild Chef", "Complete all 'Chef' Guild Commendations."],
        ["Legendary Guild Cannoneer", "Complete all 'Cannoneer' Guild Commendations."],
        ["Legendary Guild Navigator", "Complete all 'Navigator' Guild Commendations."],
        ["Legendary Guild Helm", "Complete all 'Helm' Guild Commendations."],
        ["Distinguished Guild Legend", "Complete 'Distinguished' Guild Commendations."],
        ["Master of Siren Song", "Awarded the Commendation 'Seeker of The Siren Song Grade 5'"],
        ["Liberator of Siren Song", "Awarded the Commendation 'Sentry of the Siren Song Grade 5'"],
        ["Sacrifice of Siren Song", "Sink a ship carrying a Siren Song Treasure"],
        ["Novice of Siren Song", "Awarded the Commendation 'Savior of the Siren Song Grade 1'"],
        ["Guardian of Siren Song", "Awarded the Commendation 'Savior of the Siren Song Grade 5'"],
        ["Seeking Sanctuary", "Pay a visit to the beautiful Sanctuary Outpost."],
        ["Port of Call", "Pay a visit to the sprawling Port Merrick."],
        ["The Wonder of Plunder", "Pay a visit to the towering Plunder Outpost."],
        ["Be In-Spired", "Pay a visit to the unforgettable Ancient Spire Outpost."],
        ["A Wild Excursion", "Pay a visit to the imposing Dagger Tooth Outpost."],
        ["Pay Your Respects", "Pay a visit to the mysterious Galleon’s Grave Outpost."],
        ["Pirate of Distinction", "Earn a Distinction for any Trading Company."],
        ["Just Getting Started", "Complete the Tutorial Voyage for the Gold Hoarders, Merchant Alliance and Order of Souls."],
        ["Voyager of Gold", "Dive to, and complete, a Voyage for the Gold Hoarders."],
        ["Voyager of the Soul", "Dive to, and complete, a Voyage for the Order of Souls."],
        ["Voyager for the Alliance", "Dive to, and complete, a Voyage for the Merchant Alliance."],
        ["Legendary Plunge", "Dive to, and complete, a Voyage for Athena's Fortune."],
        ["Rib Roast", "Defeat an Ashen Lord with the Double Barrel Pistol."],
        ["Title Fight", "Defeat a Skeleton Lord with a ranged throwing knife attack."],
        ["Krack Shot", "Hit a Kraken tentacle with scattershot."],
        ["A Clash of Bones", "Defeat an enemy Bone Caller Skeleton with your own Bone Caller Skeleton."],
        ["Smooth Landing", "Use the Horn of Fair Winds to avoid fall damage from a great height."],
        ["Walk the Line", "Travel 5 km walking along harpoon tightropes."],
        ["This One's To Go", "Use a zipline while carrying a treasure chest on your back."],
        ["Crew of the Burning Blade", "Pledge your crew to the Burning Blade."],
        ["Burning Vengeance", "Defeat the Burning Blade."],
        ["Sweltering Sword", "Sell a Blade of Souls."],
        ["Hot Shot", "Complete the 'Hot Shot' Commendation."],
        ["Sizzling Sinker", "Complete the 'Sizzling Sinker' Commendation."],
        ["Playing the Part", "Complete the 'Playing the Part' Commendation."],
        ["Astral Protection", "Complete the 'Astral Protection' Commendation."],
        ["Defender of the Pirate's Life", "Complete the 'Defender of the Pirate's Life' Commendation."],
        ["Loyalist of the Flame", "Complete the 'Loyalist of the Flame' Commendation."],
        ["Pressgang Grappler", "Complete the 'Pressgang Grappler' Commendation."],
        ["Enticing Explosion", "Complete the 'Enticing Explosion' Commendation."],
        ["Revenge at Last", "Complete the 'Revenge at Last' Commendation."],
        ["The Power of Three", "Complete the 'The Power of Three' Commendation."],
        ["Comfortable Sneaker", "Complete the 'Comfortable Sneaker' Commendation."],
        ["Hidden in Plain Sight", "Complete the 'Hidden in Plain Sight' Commendation."],
        ["Hung Out to Dry", "Complete the 'Hung Out to Dry' Commendation."],
        ["Red Alert Raider", "Complete the 'Red Alert Raider' Commendation."],
        ["Hunter of the Noble Voyage", "Dive to and complete a Hunter's Call Voyage."],
        ["You're Going to Need a Bigger Bucket!", "Attempt to extinguish the Ancient Feared Redmaw with a water bucket."],
        ["Eel-ectric Tide", "Kill an Eel-ectric Ocean Crawler with a Trident of Dark Tides during a Barnacled Dread attack."],
        ["Sea Beast Spear Hunter", "Hit Krakens, Megalodons or Ancient Megalodons using hunting spears."],
        ["Voyager of Bones", "Dive to, and complete, a Voyage for The Reaper's Bones."],
        ["Bony Bodyguard", "Earn the Commendation 'Bony Bodyguard'."],
        ["Mobile Cannoneer", "Earn the Commendation 'Mobile Cannoneer'."],
        ["Crew of Bone and Blade", "Earn the Commendation 'Crew of Bone and Blade'."],
        ["Devious Dinghy", "Earn the Commendation 'Devious Dinghy'."],
        ["Shady Smuggler", "Dive to and complete a Smugglers' League Voyage."],
        ["Marked Smuggler", "Complete a Smugglers' Route Run Voyage."],
        ["Smugglers' Riches", "Earn 50,000 gold from The Smugglers' League."],
        ["Smuggler at Sea", "Find a lost Smuggler Ship Chronicle."],
        ["Vanquisher of the Eternal", "Defeat an Eternal Guard."],
        ["Explorer of Sacred Places ", "Unlock all three Sanctuaries of the Banished."],
        ["Broker of Banishment", "Sell a Banished Ancient Treasure."],
        ["Violet Violence", "Use a Black Powder Barrel on an Eternal Guard."],
        ["Are You Even Trying?!", "During a Faction battle, indulge in too many tankards of grog."],
        ["Don't Make Me Turn This Ship Around!", "Sail 100 nautical miles with a Chest of Sorrow aboard your ship."],
        ["Oh Wow, Kegs...", "Detonate a Gunpowder Barrel, Stronghold Gunpowder Barrel and Black Powder Barrel at the same time."],
        ["Welcome to Custom Seas!", "Create your first Custom Seas Lobby in Custom Seas."],
        ["So. Much. Silver!", "Earn 50,000 silver by any means during a Custom Seas session."],
        ["Tentacled Tribute", "Slay the Kraken while at Tribute Peak during a Custom Seas session."],
    ];

    assert.strictEqual(officialAchievements.length, 292, "sanity check on this test's own reference list");

    const hiddenApinames = new Set([
        "167",
    ]);

    assert.strictEqual(hiddenApinames.size, 1, "sanity check - Sea of Thieves has 1 hidden achievement");

    const dataPairs = seaOfThieves.achievements
        .filter(a => !hiddenApinames.has(a.apiname))
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});

test("the 1 hidden Sea of Thieves achievement each still have their own real name and a non-empty curatorial description", () => {

    const names = [
        ["167", "The Legend of Glitterbeard"],
    ];

    assert.strictEqual(names.length, 1, "sanity check on this test's own reference list");

    for (const [apiname, name] of names) {

        const achievement = seaOfThieves.achievements.find(a => a.apiname === apiname);

        assert.ok(
            achievement && achievement.name === name && achievement.description.length > 0,
            `expected ${apiname} to be named "${name}" with a non-empty curatorial description`
        );

    }

});
