// Dragon Quest XI S Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/dragon-quest-xi.json), whose 57 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1295510 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "dragon-quest-xi-achievement-guide",
    "category": "game",
    "gameSlug": "dragon-quest-xi",
    "icon": "🌳",
    "title": "Dragon Quest XI S Achievement Guide",
    "summary": "A practical guide to all 57 Steam achievements in Dragon Quest XI S - none are hidden. Covers the main story trophies, the combat, crafting and character-mastery achievements, and the casino, quest and postgame-challenge achievements.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "DRAGON QUEST XI S: Definitive Edition has 57 Steam achievements and none of them are hidden. Around 30 are story progress - a trophy for each major beat from the coming-of-age ceremony through the true ending and the postgame. The rest are grind and mastery: defeat 1,000 monsters, ride six mountable monsters, 25 pep powers, collect 500 item types, all appearance-altering gear, the Fun-Size Forge crafting feats, mastering the \"way of\" each of the ten vocations, 10 casino accolades, 40 quests, and the Wheel of Harma trials.",
                "Nothing is permanently missable - the world stays open, the postgame is long, and there are no one-shot achievements. Living Legend (all achievements) mainly waits on the 1,000-monster count, all appearance equipment, the vocation masteries, and clearing the hardest Wheel of Harma trial.",
                "Tip: play the whole story including Act 3 and the postgame, then use free roam to finish the grind - the 1,000 kills, item collection and casino accolades all accumulate naturally, and the vocation masteries come from using each character's skill trees fully."
            ]
        },
        {
            "heading": "Main Story",
            "body": [
                "Living Legend (all achievements) plus the story trophies from Coming of Age atop Cobblestone Tor, through the World Tree, the darkened land of Act 3, the Bastion, saving each region (Phnom Nonh, Sniflheim, Hotto), Saviour of All Erdrea, A Momentous Decision, The Final Fight, Master of the Skies, and Echoes of an Elusive Age.",
                "The achievements here: Living Legend (Awarded for earning all available achievements.); Coming of Age (Awarded for completing the coming of age ceremony atop Cobblestone Tor.); Adventure Awaits! (Awarded for receiving a warm welcome to Heliodor.); A Close Call (Awarded for coming face-to-face with incredible danger, and living to tell the tale.); The Power of the Luminary (Awarded for witnessing the power of the Luminary first-hand.); Terra Incognita (Awarded for making your way to an unknown land.); Yggdrasil's Chosen (Awarded for encountering some steadfast new allies.); Out-Stand-In (Awarded for having a good run at a good race.); New Horizons (Awarded for setting out in search of new lands.); Undisputed Champion of Erdrea (Awarded for becoming a hero of the Octagonian arena.); Wild Blue Yonder (Awarded for opening the gates to the wider world.); Dark Art (Awarded for saving the village of Phnom Nonh.); Sea-Crossed Lovers (Awarded for easing the heart of an ill-omened lover.); Ice-Breaker (Awarded for saving the kingdom of Sniflheim from disaster.); The World Tree (Awarded for reaching Yggdrasil at last and learning the truth.); Light of Hope (Awarded for filling your companions' hearts with hope.); A Spark Still Shines (Awarded for setting out into a benighted land to take up your quest again.); Best of the Bastion (Awarded for claiming a decisive victory and returning light to the land.); A Disciple Worthy of the Name (Awarded for overcoming a taxing trial and mastering a secret skill.); Soldier of Smile (Awarded for encountering some steadfast allies.); Bigger Fish to Fry (Awarded for returning peace to the seas.); Knight of the Living Dread (Awarded for bringing an end to an endless nightmare.); Beating the House (Awarded for awakening a new and exciting power.); Sibling Revivalry (Awarded for achieving a long-awaited atonement.); The Loveliest Catch (Awarded for reviving an ancient legend.); Hot Spring Hero (Awarded for saving Hotto from a fiery fate.); Ready as We'll Ever Be (Awarded for obtaining an abiding symbol of hope.); Saviour of All Erdrea (Awarded for defeating the Lord of Shadows and restoring the World Tree to its rightful place.); A Momentous Decision (Awarded for making a difficult decision at the end of an already long and arduous quest.); The Final Fight (Awarded for fulfilling your destiny at last.); Master of the Skies (Awarded for being fully prepared for the ultimate fight.); Echoes of an Elusive Age (Awarded for solving the myriad mysteries of Erdrea.)."
            ]
        },
        {
            "heading": "Combat, Crafting & Character Mastery",
            "body": [
                "Defeating 1,000 monsters, riding six mountable monsters, 25 pep powers, 500 item types, all appearance-altering equipment, the third page of the album de medailles, 10 crafts and 10 reworks on the Fun-Size Forge, a +3 piece, the finest weapon, and mastering the way of the Luminary, thief, wizard, healer, entertainer, sage, martial artist and knight.",
                "The achievements here: Beast Blaster (Awarded for defeating 1000 monsters.); Mount Olympian (Awarded for successfully riding six or more mountable monsters.); Peppy-Go-Lucky (Awarded for performing 25 pep powers.); Expert Itemologist (Awarded for collecting 500 different types of item.); Dedicated Follower of Fashion (Awarded for collecting all appearance-altering equipment.); Chef de Classe de Médailles (Awarded for completing the third page of your album de médailles.); Forging Ahead (Awarded for crafting 10 items on the Fun-Size Forge.); If At First You Don't Succeed (Awarded for reworking 10 items on the Fun-Size Forge.); Big Hitter (Awarded for crafting a +3 piece of equipment on the Fun-Size Forge.); Swordsmith of Light (Awarded for crafting the finest of all weapons on the Fun-Size Forge.); Next-Level Luminary (Awarded for mastering the way of the Luminary.); Master Thief (Awarded for mastering the way of the thief.); Flawless Sorceress (Awarded for mastering the way of the wizard.); Virtuoso Healer (Awarded for mastering the way of the healer.); Megastar (Awarded for mastering the way of the entertainer.); Venerable Elder (Awarded for mastering the way of the sage.); Undisputed Champion (Awarded for mastering the way of the martial artist.); Knight Exemplar (Awarded for mastering the way of the knight.)."
            ]
        },
        {
            "heading": "Casino, Quests & Postgame Challenges",
            "body": [
                "10 casino-related accolades, the Puff-Puff in all its forms, completing 40 quests, the Wheel of Harma trials, spending quality time with a special someone, saving the Tockles' scriptures, and keeping everyone at 100% health (Worrywart).",
                "The achievements here: Casino Connoisseur (Awarded for attaining 10 casino-related accolades.); Puff-Puff Buff (Awarded for experiencing the pleasure of the Puff-Puff in all its many forms.); Quest to Impress (Awarded for completing 40 quests.); Ultimate Enlightenment (Awarded for overcoming the challenges of the Wheel of Harma.); Magic Moments (Awarded for spending some quality time with a special someone.); Saviour of the Tockles' Scriptures (Awarded for saving all the worlds of the past from certain destruction.); Worrywart (Awarded for taking extra-special care to ensure that everyone is 100% fighting fit at all times.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the story through all three acts and the true ending for the bulk of the trophies.",
                "2. Fill out each character's skill panels to earn the eight \"way of\" vocation-mastery achievements.",
                "3. Do the Fun-Size Forge feats and collect the appearance-altering equipment as you craft gear anyway.",
                "4. Grind the casino for 10 accolades, complete 40 quests, and let the 1,000-monster and 500-item counters fill during free roam.",
                "5. Finish with the Wheel of Harma trials and Worrywart (keep the whole party topped up through a stretch of play).",
                "Tip: the hardest Wheel of Harma trial (Ultimate Enlightenment) has a strict turn limit - go in overlevelled with a pep-power opener (Hallelujah for loot is not needed here, but the damage peps are) and a clear one-turn kill plan rather than a war of attrition."
            ]
        }
    ]
};
