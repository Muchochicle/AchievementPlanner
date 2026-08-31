// Resident Evil Revelations Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/resident-evil-revelations.json), whose 50 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   222480 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "resident-evil-revelations-achievement-guide",
    "category": "game",
    "gameSlug": "resident-evil-revelations",
    "icon": "🚢",
    "title": "Resident Evil Revelations Achievement Guide",
    "summary": "A practical guide to all 50 Steam achievements in Resident Evil Revelations - none are hidden. Covers the campaign episodes and difficulty clears, the scanning and combat feats, and the Raid Mode stage clears, player levels and combat, weapon and bonus goals.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Resident Evil Revelations has 50 Steam achievements and none of them are hidden. Every description is prefixed by Steam with a full-width [CAMPAIGN] or [RAID MODE] tag, kept verbatim. The campaign half covers clearing the episodes in blocks, the Casual / Normal / Infernal difficulty clears, a no-death run, the hidden hand-print and enemy scans, and a set of combat feats (knife bullet-stops, Ooze headshots, Scagdead dodges, boss-specific kills). The Raid Mode half is clearing every stage on Chasm, Trench and Abyss (and with S ranks), the Ghost Ship bonus stage, player levels 5 to 50, and the combat, weapon-rarity, spending and bonus-acquisition goals.",
                "The catalog marks it as roughly two playthroughs - an Infernal campaign clear plus the Raid Mode grind - but nothing is missable: episodes and Raid stages replay freely with cumulative progress.",
                "Tip: level up in Raid Mode on lower regions before attempting the S-rank clears and the level-50 grind - a strong build with a super-rare weapon makes both the S ranks and the 10,000-kill goal much faster."
            ]
        },
        {
            "heading": "Campaign: Episodes & Difficulty",
            "body": [
                "Clearing the campaign in episode blocks (1-3, 4-6, 7-9, 10-12), the Casual, Normal and Infernal difficulty clears, and a no-death run on Normal or higher.",
                "The achievements here: We'll Find You, Jill (【CAMPAIGN】Clear Episodes 1 - 3.); Get Us Out of Here! (【CAMPAIGN】Clear Episodes 4 - 6.); The Queen Zenobia (【CAMPAIGN】Clear Episodes 7 - 9.); The Storm is Gone (【CAMPAIGN】Clear Episodes 10 - 12.); The Dark Forest (【CAMPAIGN】Clear Casual difficulty or higher.); The Shores of Purgatory (【CAMPAIGN】Clear Normal difficulty or higher.); The Vestibule of Hell (【CAMPAIGN】Clear Infernal difficulty.); Surviving Deep Darkness (【CAMPAIGN】Clear the game in Normal difficulty or above without dying once.)."
            ]
        },
        {
            "heading": "Campaign: Scanning & Combat Feats",
            "body": [
                "Scanning 1, 15 and 30 hidden hand prints, scanning one and then all enemy types, 150 enemy defeats, and the combat feats - knife bullet-stops, Rachael, Ooze headshots, Scagdead dodges, the Scarmiglione and Malacoda kills, swimming in the Solarium, 20 dodges and 10 charged physical attacks.",
                "The achievements here: First Victim (【CAMPAIGN】Scan 1 hidden hand print.); Traces of Tragedy (【CAMPAIGN】Scan 15 hidden hand prints.); Last Victim (【CAMPAIGN】Scan 30 hidden hand prints.); Researcher (【CAMPAIGN】Scan an enemy for the first time.); Research Complete (【CAMPAIGN】Scan all enemy types.); B.O.W. Hunter (【CAMPAIGN】Defeat 150 enemies.); Living on the Edge (【CAMPAIGN】Stop an enemy bullet with your knife.); By the Crosshairs (【CAMPAIGN】Defeat Rachael before she gets to the cafeteria.); Bamboozle the Oozes (【CAMPAIGN】Defeat 10 Oozes with headshots.); Die Another Day (【CAMPAIGN】Evade a Scagdead's instant-death attack.); Triple Play (【CAMPAIGN】Defeat 3 enemies with one shock grenade.); A Packaged Deal (【CAMPAIGN】Defeat a Scarmiglione as a whole without killing both parts of its body separately.); Rockets are for Losers (【CAMPAIGN】Defeat a Malacoda without using a rocket launcher.); The Pool Is Open (【CAMPAIGN】Swim in the Solarium.); Dodge Master (【CAMPAIGN】Dodge 20 times.); Angry Fist (【CAMPAIGN】Land 10 fully charged physical attacks.)."
            ]
        },
        {
            "heading": "Raid Mode: Stages & Player Levels",
            "body": [
                "Clearing every Raid Mode stage on Chasm, Trench and Abyss (and each with S ranks), the Ghost Ship bonus stage, and reaching player levels 5, 10, 20, 30, 40 and 50.",
                "The achievements here: First Circle Traveler (【RAID MODE】Clear all stages in Raid mode on Chasm.); Midland Traveler (【RAID MODE】Clear all stages in Raid mode on Trench.); Seventh Circle Traveler (【RAID MODE】Clear all stages in Raid mode on Abyss.); First Circle Overseer (【RAID MODE】Clear all stages in Raid mode on Chasm with an S rank.); Midland Overseer (【RAID MODE】Clear all stages in Raid mode on Trench with an S rank.); Seventh Circle Overseer (【RAID MODE】Clear all stages in Raid mode on Abyss with an S rank.); Beyond the Veil (【RAID MODE】Clear the bonus stage, The Ghost Ship.); On Your Way (【RAID MODE】Reach player level 5.); Moving on Up (【RAID MODE】Reach player level 10.); Reaching Higher (【RAID MODE】Reach player level 20.); Raising the Bar (【RAID MODE】Reach player level 30.); Meteoric Rise (【RAID MODE】Reach player level 40.); Top of My Game (【RAID MODE】Reach player level 50.)."
            ]
        },
        {
            "heading": "Raid Mode: Combat, Weapons & Bonuses",
            "body": [
                "The Raid Mode feats - 10,000 kills, a 100,000-damage hit, a co-op charged attack, obtaining one and all super-rare weapons, spending 1,000,000 BP, the No Damage, Trinity and under-level bonuses, and acquiring 10, 50, 100 and 150 total bonuses.",
                "The achievements here: One for Each Minnesota Lake (【RAID MODE】Defeat 10,000 enemies.); That'll Leave a Mark (【RAID MODE】Inflict 100,000 points of damage to an enemy in one hit.); Dynamic Duo (【RAID MODE】Land a fully charged physical attack on an enemy at the same time as your partner.); Legendary Find (【RAID MODE】Obtain a super rare weapon.); Legends Are Made, Not Born (【RAID MODE】Obtain all super rare weapons.); Shop 'til Ya Drop (【RAID MODE】Spend 1,000,000 BP in the store.); The Unbroken Thread (【RAID MODE】Acquire No Damage Bonus for the first time.); Gutsy (【RAID MODE】Clear a stage at 5 levels lower than the recommended level.); Three is the Magic Number (【RAID MODE】Acquire Trinity Bonus for the first time.); Bonus Enthusiast (【RAID MODE】Acquire 10 bonuses.); Bonus Ace (【RAID MODE】Acquire 50 bonuses.); Bonus Legend (【RAID MODE】Acquire 100 bonuses.); Bonus Demi-god (【RAID MODE】Acquire 150 bonuses.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the campaign on Normal, scanning hidden hand prints and every enemy type as you go.",
                "2. Do the campaign combat feats during that run or via episode select.",
                "3. Clear the campaign on Infernal and do a no-death run (they can be the same run if you are careful).",
                "4. Grind Raid Mode: clear all stages on Chasm, Trench and Abyss, then return for the S ranks and the Ghost Ship.",
                "5. Push player level toward 50 while chasing the kill, damage, weapon-rarity, spending and bonus achievements.",
                "Tip: the Raid Mode S-rank clears reward speed and no damage - over-level the stage, bring a Burst or high-rate weapon, and rush objectives rather than clearing every enemy."
            ]
        }
    ]
};
