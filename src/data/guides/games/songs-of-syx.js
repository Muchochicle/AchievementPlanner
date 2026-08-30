// Songs of Syx Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/songs-of-syx.json), whose 34 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1162750 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None are hidden; every one ships a real, official Steam description,
//   quoted verbatim below.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "songs-of-syx-achievement-guide",
    "category": "game",
    "gameSlug": "songs-of-syx",
    "icon": "👑",
    "title": "Songs of Syx Achievement Guide",
    "summary": "A practical guide to all 34 Steam achievements in Songs of Syx - none are hidden. Covers the kingdom's production and prosperity titles, specialist and builder titles, and its ruler and conqueror titles.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Songs of Syx has 34 Steam achievements and none are hidden. Every achievement is a flavorful ruler \"Title\" earned by pushing one specific aspect of your kingdom to an extreme - production output, administration, health, happiness, knowledge, military dominance, slavery, law enforcement, climate survival, or simply outliving and absorbing every rival kingdom. Titles range from lighthearted (The Nudist, The Clumsy) to grim (The Slaver, Heaviest of Hands, The Usurper) since Songs of Syx lets you build a kingdom however you like, virtuous or brutal.",
                "Nothing is missable - every Title is earned by crossing a threshold that stays crossed for the rest of that save, and a new game lets you pursue a completely different playstyle for a different set of Titles. Several achievements are directly opposed (The Merciful vs. The merciless, Breaker of Chains vs. The Slaver, The Nudist vs. a well-clothed population), so plan a handful of separate kingdoms rather than trying to earn every Title in one save.",
                "Tip: pick a clear playstyle for each kingdom before you start - a peaceful, prosperous trade kingdom naturally earns The Provider/Gourmand/Wise/Bureaucrat-style Titles, while a militaristic, harsh empire naturally earns The Conquerer/Slaver/Usurper-style ones - rather than trying to optimize every stat simultaneously in one save."
            ]
        },
        {
            "heading": "Production & Prosperity Titles",
            "body": [
                "Titles earned through peaceful, prosperous kingdom-building: The Provider (high native production), The Bureaucrat (admin), The Caretaker (hospital access), The Clumsy (surviving accidents), The Drunkard (drink production), The Entertainer (entertainment access), The Gourmand (food production), The Merciful (mercy after battle), The merciless (harshness toward conquered foes), The Pleasurer (Massage Parlour access), The Undefeated (battlefield dominance), The Uniter (absorbing kingdoms), and The Wise (knowledge and education).",
                "The achievements here: The Provider (Produce a lot of stuff natively.); The Bureaucrat (Gained by having your papers in order. Increases admin.); The Caretaker (Gained by having proper access to hospitals. Increases health.); The Clumsy (Gained by living through multiple accidents. Makes people a bit more cautious in your presence.); The Drunkard (Gained by having lots of drunk subjects. Increases drink production.); The Entertainer (Gained by having good access to entertainment and repeatedly shouting 'Are you not entertained?' at the screen. Increases happiness.); The Gourmand (Gained by having lots of food. Increases food production.); The Merciful (Gained by being a saint after battles. Adds some loyalty to your name.); The merciless (Gained by being harsh on your conquered foes. Slaves will be more easily controlled.); The Pleasurer (Gained by having good access to Massage Parlour. Increases happiness.); The Undefeated (Gained by being a badass on the field of battle. Increases morale and detriments raids.); The Uniter (Gained by absorbing a lot of kingdoms.); The Wise (Gained by being a knowledge nerd. Increases knowledge and education rates.)."
            ]
        },
        {
            "heading": "Specialist & Builder Titles",
            "body": [
                "Specialist-resource and infrastructure Titles: The Artisan (workshop output), Breaker of Chains (freeing slaves), The Child of the Sun (farms and orchards), First of Their Name (1500 happy people), Heaviest of Hands (executions), Herdsman of Entelodonts (Entelodont pastures), Lifebringer (hospital cures), Lord of the Seven Kingdoms (7 regions controlled), Richest of Kings (low inflation, high wealth), and Warden of the North (thriving in a cold climate).",
                "The achievements here: The Artisan (Gained by workshop output. Increases productivity of all workshops.); Breaker of Chains (Gained by freeing many slaves.); The Child of the Sun (Have loads of farms and orchards.); First of Their Name (Gained by having 1500 happy people and increases your starting population and supplies of new games.); Heaviest of Hands (Gained by a lot of executions. Increases law.); Herdsman of Entelodonts (Have loads of Entelodont pastures.); Lifebringer (Cure a lot of people in the hospital.); Lord of the Seven Kingdoms (Control 7 regions to gain this ancient and prestigious title.); Richest of Kings (Decreases inflation, allowing you to amass even greater wealth.); Warden of the North (Survive and thrive in a cold climate to gain the goodwill of its hardened people.)."
            ]
        },
        {
            "heading": "Ruler & Conqueror Titles",
            "body": [
                "The remaining ruler, conquest, and lifestyle Titles: Ruler of Sedge and Bee (thriving in a hot climate), Seer of the Gods (spiritual devotion), The Builder (fancy world-map buildings), The Conquerer (killing enemies), The Great (many followers), The Mad (insane citizens), The Nudist (an unclothed population), Protector of the Realm (defending against invasions), The Slaver (many slaves), The Usurper (killing foreign royalty), and Ruler of Kings (the game's ultimate title).",
                "The achievements here: Ruler of Sedge and Bee (Survive and thrive in a hot climate to gain the goodwill of its hardened people.); Seer of the Gods (A ruler making his people pay homage to the spiritual realm. Surely the gods reward such piety.); The Builder (Build a bunch of fancy buildings on the world map.); The Conquerer (Gained by killing your enemies.); The Great (Gained by having many people follow and love you.); The Mad (Have a bunch of insane people running around in your city.); The Nudist (Keep your citizens naked, and gain an extra boost to exposure.); Protector of the Realm (Gained by defending against invasions.); The Slaver (Gained by having many slaves.); The Usurper (Kill a couple of foreign royalties to gain this lucrative title.); Ruler of Kings (A master of Syx, a title only granted to the greats.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Start a kingdom focused on production and prosperity: high output across goods, food, drink, and workshops (The Provider, The Gourmand, The Drunkard, The Artisan), good administration and healthcare (The Bureaucrat, The Caretaker, Lifebringer), and happiness/entertainment (The Entertainer, The Pleasurer).",
                "2. In that same kingdom, push knowledge and population growth toward The Wise, First of Their Name (1500 happy people), and specialist-resource Titles like The Child of the Sun (farms/orchards) and Herdsman of Entelodonts (Entelodont pastures).",
                "3. Start a second, more militaristic kingdom for the conquest-and-control Titles: The Conquerer, The Uniter, Lord of the Seven Kingdoms (7 regions), Protector of the Realm, The Undefeated, and eventually Ruler of Kings.",
                "4. In whichever kingdom fits, pursue the darker or stranger Titles deliberately: The Slaver or Breaker of Chains (pick one direction), Heaviest of Hands (executions), The Usurper (kill foreign royalty), The Mad (insane citizens), and The Nudist (keep your citizens unclothed).",
                "5. Round out the harder environmental and wealth Titles: Warden of the North and Ruler of Sedge and Bee (thriving in cold and hot climates), Richest of Kings (low inflation, high wealth), Seer of the Gods (spiritual devotion), and The Builder (fancy buildings on the world map).",
                "Tip: Lord of the Seven Kingdoms and Ruler of Kings are both endgame-scale conquest goals - they need a kingdom that has already survived and grown for a long time, so treat them as the culmination of a long conquest-focused save rather than an early target."
            ]
        }
    ]
};
