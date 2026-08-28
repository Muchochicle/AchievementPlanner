// Resident Evil 4 (2023) Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/resident-evil-4-remake.json), whose 46
//   achievements were sourced directly from Steam's own achievement
//   schema for appid 2050650 via ISteamUserStats/GetSchemaForGame
//   (fetched through this app's own backend/services/steamApi.js). 33 of
//   46 ship a real, official Steam description, quoted verbatim below.
// - The 13 hidden achievements ship no Steam description; their
//   conditions here are curatorial, cross-checked against PowerPyx,
//   XboxAchievements/PlayStationTrophies and the Resident Evil Wiki, and
//   kept spoiler-light (boss and chapter/act names only).
export const GUIDE = {
    "slug": "resident-evil-4-remake-achievement-guide",
    "category": "game",
    "gameSlug": "resident-evil-4-remake",
    "icon": "🔫",
    "title": "Resident Evil 4 (2023) Achievement Guide",
    "summary": "A practical guide to all 46 Steam achievements in the Resident Evil 4 remake - the story boss kills, the combat and Merchant feats, the difficulty and rank challenge runs, the treasure-map, weapon and shooting-range collectibles, and the Separate Ways DLC set. 13 achievements are hidden and covered with spoiler-light boss/act conditions.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "The Resident Evil 4 remake has 46 Steam achievements, 13 of them hidden. A full completion needs the main story on Professional, an S+ rank on Standard and on Hardcore, several restrictive runs (no recovery items, knives-and-handguns only, no Merchant chat, under 8 hours), all three treasure maps, all weapons, all Merchant requests, the shooting range, and the Separate Ways DLC on Professional with S+.",
                "Nothing is permanently missable across a save - chapters and modes replay freely, and New Game+ carries your gear - but many achievements are per-run, so it is worth stacking restrictions into single playthroughs.",
                "Tip: do a first blind Standard run for the story and boss achievements, then a New Game+ Professional run with your carried-over gear that is also routed for S+ (under ~5:30, few saves) and done knives-and-handguns-only and without talking to the Merchant - one good NG+ run can clear Peerless Agent, S+ Rank Investigator, Mission Accomplished S+, Sprinter, Minimalist and Silent Stranger together."
            ]
        },
        {
            "heading": "Story Bosses",
            "body": [
                "One hidden achievement for each major boss - Del Lago, Bitores Mendez, the Verdugo, Ramon Salazar, Jack Krauser and the final boss Osmund Saddler - plus the trick achievement for feeding Salazar a grenade.",
                "The achievements here: Harpoon Hurler (Boss: defeat Del Lago, the lake creature (Chapter 3).); Grilled Big Cheese (Boss: defeat Bitores Mendez (Chapter 6).); Wave Goodbye, Right Hand (Boss: defeat the Verdugo (Chapter 10).); No Thanks, Bro! (Boss: defeat Ramon Salazar (Chapter 12).); You Used to Be a Good Guy (Boss: defeat Jack Krauser (Chapter 14).); You're Small Time! (Boss: defeat the final boss, Osmund Saddler (Chapter 16).); You Talk Too Much! (During the Ramon Salazar boss fight (Chapter 12), land a grenade in his open maw.)."
            ]
        },
        {
            "heading": "Combat & the Merchant",
            "body": [
                "The combat and vendor feats: knife parries, weapon upgrades and the exclusive upgrade, Merchant requests (one and all), rescuing Ashley, the Clockwork Castellan bonus targets, flash-grenade and knife-only kills, the two-parasites-one-bullet Regenerador shot and the cannon zealot kill.",
                "The achievements here: Knife Basics (Parry an enemy with a knife.); My Preferred Piece (Upgrade a weapon.); A Masterpiece (Get the exclusive upgrade for a weapon.); Nice One, Stranger! (Complete a request for the Merchant.); Talk About Near-Death Experience! (Rescue Ashley as she's being carried away by the enemy.); Revolt Against the Revolting (Destroy a Clockwork Castellan.); Shield Your Eyes (Defeat 3 enemies at once with a flash grenade.); Never Heard It Coming (Defeat a Garrador using only knives.); Two Bugs, One Stone (Kill 2 parasites inside a Regenerador with a single bullet.); Overkill (Use a cannon to defeat a zealot.); Revolution Wind-up (Destroy all Clockwork Castellans.)."
            ]
        },
        {
            "heading": "Challenge Runs & Ranks",
            "body": [
                "The restrictive playthroughs: the no-damage minecart and water-scooter sections and the non-stop clock-tower lift, Standard / Hardcore / Professional clears, S+ ranks on Standard and Hardcore, Sprinter (under 8 hours), Frugalist (no recovery items), Minimalist (knives and handguns only) and Silent Stranger (no Merchant conversation).",
                "The achievements here: Hope You Like Thrill Rides! (Make it through both minecart sections in the underground tunnel without taking any damage.); Capacity Compliance (Reach the top of the clock tower without the lift stopping once.); Smooth Escape (Escape on the water scooter without taking any damage.); Promising Agent (Complete the main story on Standard mode or higher.); Mission Accomplished S+ (Complete the main story on Standard mode with an S+ rank.); Proficient Agent (Complete the main story on Hardcore mode or higher.); S+ Rank Investigator (Complete the main story on Hardcore mode with an S+ rank.); Peerless Agent (Complete the main story on Professional difficulty.); Sprinter (Complete the main story within 8 hours.); Frugalist (Complete the main story without using a recovery item.); Minimalist (Complete the main story using only knives and handguns. (Excluding specific battles.)); Silent Stranger (Complete the main story without talking to the Merchant once.)."
            ]
        },
        {
            "heading": "Treasures, Weapons & the Shooting Range",
            "body": [
                "The collectible clears: selling a treasure for 100,000 ptas, completing each of the village, castle and island treasure maps, obtaining all weapons, completing all Merchant requests, and the shooting-range achievements (play one, S rank them all, the five-target trick shot).",
                "The achievements here: Astute Appraiser (Sell a single treasure for at least 100000 ptas.); Bandit (Obtain all treasures indicated on the village treasure map in a single playthrough.); Burglar (Obtain all treasures indicated on the castle treasure map in a single playthrough.); Raider (Obtain all treasures indicated on the island treasure map in a single playthrough.); Gun Fanatic (Obtain all weapons.); Jack of All Trades (Complete all requests from the Merchant.); Amateur Shooter (Complete a game at the shooting range.); Real Deadeye (Earn an S rank in all games at the shooting range.); Trick Shot (Shoot through and destroy 5 targets at the shooting range with a single shot.)."
            ]
        },
        {
            "heading": "Separate Ways",
            "body": [
                "The Separate Ways DLC campaign: complete it on Standard and on Hardcore, defeat its bosses (El Gigante, Pesanta and Saddler), and complete it on Professional - with an S+ rank for the final achievement.",
                "The achievements here: Giant Slayer (Separate Ways: defeat El Gigante.); \"It\" Kept You Busy (Separate Ways: defeat Pesanta.); Had Enough of Preachers (Separate Ways: defeat the final boss, Osmund Saddler.); Capable Operative (Complete Separate Ways on Standard mode or higher.); Skilled Agent (Complete Separate Ways on Hardcore mode or higher.); The Perfect Mission (Complete Separate Ways on Professional difficulty.); Ada the \"S+\"py (Complete Separate Ways on Professional difficulty with an S+ rank.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. First run on Standard, blind - clears the story bosses, Promising Agent, most combat/Merchant feats and the treasure/weapon collectibles as you go.",
                "2. New Game+ Professional run with carried gear, routed for S+ and done Minimalist + Silent Stranger + Sprinter - stacks Peerless Agent, S+ Rank Investigator, Mission Accomplished S+, Frugalist and the rank achievements.",
                "3. Clean up the no-damage set-pieces (Hope You Like Thrill Rides!, Capacity Compliance, Smooth Escape) and the shooting range (Real Deadeye, Trick Shot) on any run.",
                "4. Play Separate Ways: a Standard run for the bosses and Capable Operative, then a Professional S+ run for Skilled Agent, The Perfect Mission and Ada the \"S+\"py.",
                "Tip: the exclusive-upgrade and \"all weapons\" achievements need a lot of pesetas and Spinels - sell treasures in complete combined sets and prioritise the Merchant's requests, whose rewards include Spinels and exclusive-upgrade tickets."
            ]
        }
    ]
};
