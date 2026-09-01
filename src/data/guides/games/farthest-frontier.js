// Farthest Frontier Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/farthest-frontier.json), whose 74 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1044720 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 3 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (PowerPyx / Game8 / PlayStationTrophies / TrueAchievements) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "farthest-frontier-achievement-guide",
    "category": "game",
    "gameSlug": "farthest-frontier",
    "icon": "🏕",
    "title": "Farthest Frontier Achievement Guide",
    "summary": "A practical guide to all 74 Steam achievements in Farthest Frontier (3 hidden). Covers the Town Center and shelter progression, the population milestones, the three civic Monuments, the burial and knowledge-point totals, the raider-defeat counts, the relic collections, and a large set of harder goals on Vanquisher difficulty. Three of the achievements are hidden - Bear Mode, a 50-villager plague, and a raid-recovery goal - and their conditions are researched from community 100% guides.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Farthest Frontier has 74 Steam achievements and 3 are hidden. The hidden three are 'Bearly Tried' (activate Bear Mode), 'Black Death' (a bubonic plague outbreak that sickens 50 villagers at once) and 'Not on My Watch' (recover all your loot after being robbed by raiders, on non-pacifist Vanquisher difficulty). Everything visible is settlement-building: upgrading the Town Center through four tiers, building and upgrading shelters (6 up to 100, tiers 2-5), reaching populations of 100 / 250 / 500, the three civic Monuments, burying 10 / 100 / 1,000 dead, defeating 100 up to 10,000 raiders, the relic collections, and 1,000,000 gold ingots.",
                "The catalog marks it difficulty 5. A large share of the achievements have a harder 'on non-pacifist Vanquisher difficulty' twin, so full completion means several long games on the hardest setting, plus restriction runs ('Conscientious Diet' - Tier 4 with no meat, 'Barren Land' - Tier 4 with no crop fields, 'There can only be 500' - 500 population with no walls or gates). Expect multiple 15-20 hour settlements.",
                "Tip: plan one big Vanquisher settlement to cover as many of the 'Vanquisher' twin achievements at once as you can - the population, gold, monument, raider-kill and first-winter goals can all be earned on a single well-run hard game rather than one run each."
            ]
        },
        {
            "heading": "Town Center, Shelters & Population",
            "body": [
                "Completing all research, the no-crop-fields 'Barren Land' run, the two hidden achievements (Bear Mode and the 50-villager plague), the Academy, 10 Deep Mines, the Guild Hall, the three civic Monuments and their Vanquisher twins, shelter counts (6 / 25 / 50 / 100), the mountaintop shelters, the shelter-upgrade tiers, and the four Town Center tiers.",
                "The achievements here: Philosopher (Complete all Research in the Technology Tree.); Barren Land (Upgrade the Town Center to Tier 4 while never building crop fields on Vanquisher Difficulty.); Bearly Tried (Activate Bear Mode.); Black Death (Have a bubonic plague outbreak that sickens 50 villagers at once.); Academia (Contruct the Academy and upgrade it to Tier 2.); Dig Greedily and Deeply (Construct 10 Deep Mines of any kind in a single settlement.); Guild Dues (Construct the Guild Hall.); Era of Civility (Construct the Civic Monument.); Monumental Era of Civility (Construct the Civic Monument on non-pacifist Vanquisher Difficulty.); Golden Age (Construct the Economic Monument.); Monumental Golden Age (Construct the Economic Monument on non-pacifist Vanquisher Difficulty.); Age of Heroes (Construct the Military Monument.); Monumental Age of Heroes (Construct the Military Monument on non-pacifist Vanquisher Difficulty.); Ward (Construct 100 Shelters in a single settlement.); Neighborhood (Construct 25 Shelters in a single settlement.); Locality (Construct 50 Shelters in a single settlement.); Sheltering (Construct 6 Shelters in a single settlement.); Extreme Living (Construct 5 Shelters on the tallest mountain tops.); Renovation (Upgrade 20 Shelters to Tier 2 in a single settlement.); Moving Up (Upgrade 20 Shelters to Tier 3 in a single settlement.); Gentrification (Upgrade 20 Shelters to Tier 4 in a single settlement.); Generational Wealth (Upgrade 20 Shelters to Tier 5 in a single settlement.); Founding a Settlement (Construct the Town Center.); Establishing a Foothold (Upgrade the Town Center to Tier 2.); Heart of the Frontier (Upgrade the Town Center to Tier 3.); Master of the Frontier (Upgrade the Town Center to Tier 4.)."
            ]
        },
        {
            "heading": "Civic Buildings & Milestones",
            "body": [
                "Upgrading the Temple, Theater and Trading Post, burying 10 / 100 / 1,000 dead, the no-meat 'Conscientious Diet' run, killing a wolf den with only villagers, 100 decorative structures, an army with no tier-2 or cavalry units, surviving the first winter (and its Vanquisher twin), consecutive Flawless Victories, 1,000,000 gold ingots, and 100% happiness in a Tier 4 settlement.",
                "The achievements here: Piety (Construct the Temple and upgrade it to Tier 2.); Curator of the Arts (Construct the Theater and upgrade it to Tier 2.); Market Forces (Construct the Trading Post and upgrade it to Tier 2.); Death Rites (Bury 10 dead.); Mourn the Dead (Bury 100 dead.); Honor the Dead (Bury 1000 dead.); Conscientious Diet (Upgrade the Town Center to Tier 4 without producing or consuming any meat on Vanquisher Difficulty.); Cry Wolf (Destroy a wolf den on Vanquisher, using only villagers.); Beautification (Construct 100 Decorative Structures in a single settlement.); Elite Squad (Defeat all raider camps on the map on non-pacifist Vanquisher Difficulty without training any tier 2 or cavalry units.); The First Winter (Survive the first winter without losing a villager.); The First Winter Vanquished (Survive the first winter without losing a villager on Vanquisher difficulty.); Barely a Scratch (Crush raiders in 3 consecutive Flawless Victories in a row on non-pacifist difficulty.); Finish Them! (Crush raiders in 3 consecutive Flawless Victories in a row on non-pacifist Vanquisher Difficulty.); Playing the Market (Generate 1,000,000 Gold Ingots in total.); Stocks Only Go Up (Generate 1,000,000 Gold Ingots in total on non-pacifist Vanquisher Difficulty.); My Happy Place (Reach 100% overall happiness in a Tier 4 Settlement on Vanquisher difficulty.)."
            ]
        },
        {
            "heading": "Raiders, Scholars & Defense",
            "body": [
                "Recovering all loot after a raid (hidden), the raider-defeat counts from 100 up to 10,000 with their Vanquisher twins, earning knowledge points, 10 raider kills with a hunter, reaching 500 population with no walls (or no walls or gates), populations of 100 / 250 / 500 and 500 in the Arid Highlands, and recruiting 12 / 50 / 100 military units.",
                "The achievements here: Not on My Watch (Recover all of your loot after being robbed by raiders, on non-pacifist Vanquisher difficulty.); Raider Threat (Defeat 100 Raiders on non-pacifist difficulty.); Raider Invasion (Defeat 1000 Raiders on non-pacifist difficulty.); Vanquished Raider Horde (Defeat 10,000 Raiders on non-pacifist Vanquisher Difficulty.); Raider Menace (Defeat 2000 Raiders on non-pacifist difficulty.); Vanquished Raider Menace (Defeat 2000 Raiders on non-pacifist Vanquisher Difficulty.); Raider Incursion (Defeat 500 Raiders on non-pacifist difficulty.); Vanquished Raider Scourge (Defeat 5000 Raiders on non-pacifist Vanquisher Difficulty.); Intellectual Scholar (Earn 10 Knowledge Points in a single settlement.); Distinguished Scholar (Earn 25 Knowledge Points in a single settlement.); Scholar (Earn 5 Knowledge Points in a single settlement.); Most Dangerous Game (Kill 10 raiders with a hunter in a single settlement on non-pacifist difficulty.); Highlanders (Survive to 500 population without building a single defensive wall in non-pacifist mode.); There can only be 500 (Survive to 500 population without building a single defensive wall or gate on non-pacifist Vanquisher Difficulty.); Town (Reach 100 population in a single settlement.); City (Reach 250 population in a single settlement.); Metropolis (Reach 500 population in a single settlement.); Jewel in the Desert (Reach 500 population in the Arid Highlands on non-pacifist Vanquisher Difficulty.); Standing Army (Recruit 100 military units.); Militia (Recruit 12 military units.); Garrison (Recruit 50 military units.)."
            ]
        },
        {
            "heading": "Relics & Endgame",
            "body": [
                "Finding 10 relics, then all relics and each of the Martyr, Warrior and Wilds relic sets, buying 2,000 meat from Scorv the Butcher, accumulating 100,000 gold ingots in one settlement (and its Vanquisher twin), and surviving 10 consecutive years with the Ark of the Vengeful Dead active (and its Vanquisher twin).",
                "The achievements here: The Collector (Find or purchase 10 relics in a single settlement.); True Devotion (Discover all Relics.); Faith through Sacrifice (Discover all Martyr Relics.); Faith through Conquest (Discover all Warrior Relics.); Faith through Harmony (Discover all Wilds Relics.); Forbidden Flesh (Buy 2000 meat from Scorv the Butcher in a single settlement.); Rainy Day Fund (Accumulate 100,000 Gold Ingots in a single settlement.); Legendary Hoard (Accumulate 100,000 Gold Ingots in a single settlement on non-pacifist Vanquisher Difficulty.); Vengeful Survivor (Survive for 10 consecutive years while the Ark of the Vengeful Dead is active within your Temple in non-pacifist mode.); Vengeful Vanquisher (Survive for 10 consecutive years on non-pacifist Vanquisher Difficulty while the Ark of the Vengeful Dead is active within your Temple.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play a long normal-difficulty settlement for the base versions of every milestone (population, shelters, monuments, relics, raider kills).",
                "2. Play a big Vanquisher settlement and cover as many 'Vanquisher' twin achievements on it as possible.",
                "3. Do the restriction runs - 'Barren Land' (no crops), 'Conscientious Diet' (no meat), 'There can only be 500' (no walls or gates).",
                "4. Grind the long totals: 1,000,000 gold ingots, 10,000 raiders defeated, 1,000 dead buried, all relics.",
                "5. Set up the hidden achievements deliberately (Bear Mode, a big plague outbreak, a full raid recovery on Vanquisher).",
                "Tip: 'Black Death' is easiest to force - stop treating disease, cluster your population, and let a rat-borne plague spread until 50 villagers are sick at once, then reload if you were not going for it seriously."
            ]
        }
    ]
};
