// Hand of Fate Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/hand-of-fate.json), whose 53 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   266510 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "hand-of-fate-achievement-guide",
    "category": "game",
    "gameSlug": "hand-of-fate",
    "icon": "🃏",
    "title": "Hand of Fate Achievement Guide",
    "summary": "A practical guide to all 53 Steam achievements in Hand of Fate - none are hidden. Covers the stat and combat-feat achievements, the card and equipment-set collections, the boss encounters and blessing/curse totals, and the encounter-set and quest achievements. None of the achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Hand of Fate has 53 Steam achievements and none are hidden. Sixteen are stat thresholds and combat feats (150 health, no-damage runs, 100 reflected projectiles, trap kills, killing one of every monster type in a session), seven are collection goals (every equipment and encounter card, the Dragon Relic / Skeleton King / Mage full sets, 10 rings), eleven cover the boss encounters, defeating the Dealer, and 10 Blessings or 10 Curses at once, and nineteen are 'complete all X encounters' sets plus the special quests (the Kraken, the White Minotaur, Endless level 30, 'World Saviour' for turning back the Underworld invasion).",
                "The catalog marks it difficulty 4. Beating the Dealer and the story quests is demanding, and the 'complete all encounters of type X' achievements require repeatedly drawing specific cards across many runs - the real time sink.",
                "Tip: play the story to beat the Dealer and reach 'World Saviour' first, then farm encounter cards and equipment sets in free-play and Endless."
            ]
        },
        {
            "heading": "Stats & Combat Feats",
            "body": [
                "150 health, 120 food, 200 gold, no-damage clears of 1 and 3 levels, 15 success and 12 failure chance cards in a session, 3 no-damage combats in a run, 100 reflected projectiles, winning and starting combat below 5 health, 10 trap kills, 2 prone attacks in a row, a reflected-projectile kill, 5 shield-bash trap kills, and killing one of every monster type in a session.",
                "The achievements here: Juggernaut (Possess 150 or more health.); Well Supplied (Possess 120 or more food.); Wealthy Lord (Possess 200 or more gold.); Squire (Complete the first level of a play session, without taking any damage.); Adventurer (Complete the first 3 levels of a play session, without taking any damage.); Very Lucky (Get 15 'Success' or 'Huge Success' chance cards in a single session.); Very Unlucky (Get 12 'Failure' or 'Huge Failure' chance cards in a single session.); Master Combatant (Complete 3 combats in a single run, without taking any damage.); Quick Reflexes (Reflect 100 projectiles over multiple play sessions.); Close Shave (Win a combat with less than 5 health remaining.); Very Brave or Very Stupid (Enter a combat with less than 5 health remaining.); Hunter (Land the killing blow on 10 enemies with a trap.); Slayer (Perform 2 prone attacks in a row.); Ninja (Kill an enemy with their own reflected projectile.); Master of Traps (Bash 5 enemies into traps in a single session.); Champion (Kill one of each monster type in a single session.)."
            ]
        },
        {
            "heading": "Collections & Equipment Sets",
            "body": [
                "Unlocking every equipment card and every encounter card, equipping the full Dragon Relic, Skeleton King and Mage sets, holding 10 rings, and having at least one of each equipment type in your inventory.",
                "The achievements here: Well Equipped (Unlock every equipment card.); Well Travelled (Unlock every encounter card.); Dragon Slayer (Equip all the Dragon Relic items at once.); King of the Undead (Equip all the Skeleton King items at once.); Arch Mage (Equip all the Mage items at once.); Bling (Have 10 rings in your inventory at once.); Combat Ready (Have at least 1 of each type of equipment in your inventory.)."
            ]
        },
        {
            "heading": "Bosses & Blessings",
            "body": [
                "Defeating the Dealer (and again as the Warlord), the Fire in the Deep / Mages / Lich / Minotaur encounters, all 6 Charity, Demon Trader and Blood Auction encounters, and holding 10 Blessings or 10 Curses at once.",
                "The achievements here: Dungeon Master (Defeat the Dealer.); Release the Lava Golems! (Complete the Fire in the Deep encounter.); Release the Mages! (Complete the Mages encounter.); Release the Lich! (Complete the Lich encounter.); Release the Minotaur! (Complete the Minotaur encounter.); Humbled (Complete all 6 Charity encounters.); Corrupted (Complete all 6 Demon Trader encounters.); Drained (Complete all 6 Blood Auction encounters.); Pure Enlightenment (Possess 10 Blessings at once.); Wretched Soul (Possess 10 Curses at once.); Dungeon Conqueror (Defeat the Dealer as the Warlord.)."
            ]
        },
        {
            "heading": "Encounter Sets & Quests",
            "body": [
                "Completing every Apprentice, Warlord, Shadow Agent, Curse of the Lion Prince, Explorer's Gift, Hoarder's Desire, Iron Hunger, Merchant Guard, Monk, Nomad and Soldier's Training encounter set, plus the Kraken and White Minotaur quests, the Kraken Sword+Mask, 300 ore, trading with the Elder Lizard, Endless level 30, the Goblin King's Halls IV, and 'World Saviour'.",
                "The achievements here: Graduation (Complete all Apprentice encounters.); Lord of War (Complete all Warlord encounters.); Master of the Shadows (Complete all Shadow Agent encounters.); The Lion Prince (Complete all Curse of the Lion Prince encounters.); Explorer (Complete all Explorer's Gift encounters.); Never Enough (Complete all Hoarder's Desire encounters.); Hunger Satiated. (Complete all Iron Hunger encounters.); Merchant's Saviour (Complete all Merchant Guard encounters.); Holy Champion (Complete all Monk encounters.); The Wanderer (Complete all Nomad encounters.); Elite Training (Complete all Soldier's Training encounters.); Kraken Master (Defeat the Kraken.); One with the Kraken (Equip the Kraken Sword and Mask at once.); Metal Mogul (Possess 300 or more Ore.); The Elder Lizard (Trade with the Elder Lizard.); Great Hunter (Defeat the White Minotaur.); Deep Delver (Reach level 30 in Endless Mode.); Vault Raider (Complete the Goblin King's Halls IV encounter.); World Saviour (Turn back the invasion from the Underworld.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the story through all four boss keys to defeat the Dealer ('Dungeon Master') and finish 'World Saviour'.",
                "2. Chase the no-damage and low-health combat feats on early, easy floors.",
                "3. Farm free-play and Endless to unlock every equipment and encounter card and reach Endless level 30.",
                "4. Grind the 'complete all X encounters' sets by stacking those cards into your platter each run.",
                "5. Do the Kraken and White Minotaur quests and equip their sets.",
                "Tip: for the 'complete all encounters of type X' achievements, add every copy of that encounter you own to the platter each run so you draw them fast - most sets take several runs regardless."
            ]
        }
    ]
};
