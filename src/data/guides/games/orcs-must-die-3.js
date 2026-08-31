// Orcs Must Die! 3 Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/orcs-must-die-3.json), whose 38 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1522820 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "orcs-must-die-3-achievement-guide",
    "category": "game",
    "gameSlug": "orcs-must-die-3",
    "icon": "🏰",
    "title": "Orcs Must Die! 3 Achievement Guide",
    "summary": "A practical guide to all 38 Steam achievements in Orcs Must Die! 3 - none are hidden. Covers the campaign progress achievements, Endless mode and gear, the Scramble mode and combo scoring, and the Cold as Eyes and Tipping the Scales DLC. None of the achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Orcs Must Die! 3 has 38 Steam achievements and none are hidden. Ten cover campaign progress (finishing the main and Drastic Steps campaigns, on Rift Lord, with 5 skulls everywhere, plus gear and coin milestones), eight are Endless mode, gear unlocks and Weekly Challenges, eight are Scramble mode tiers and the huge combo-score achievements, and twelve are the two content packs - 'Cold as Eyes' (Cyclopes) and 'Tipping the Scales' (Tuatara) - with their scenario clears, kill counts and gear.",
                "The catalog marks it difficulty 4 and about three campaigns' worth of play. The 5-skull Rift Lord achievements across every campaign and the 5,000,000 combo scores are the grind; 'Rifts Protected' asks for every other achievement.",
                "Tip: play each campaign on Rift Lord from the start so the completion, difficulty and 5-skull achievements stack, then farm Endless and Scramble for the score achievements."
            ]
        },
        {
            "heading": "Campaign Progress",
            "body": [
                "Completing the main campaign ('War Mage') and on Rift Lord, 5 skulls on every scenario ('Valedictorian'), acquiring every item ('Collector'), 100 minion kills, 100,000 coin, fully upgrading one trap, the first war scenario, and upgrading and buying gear.",
                "The achievements here: War Mage (Complete the main campaign.); Collector (Acquire every item in the game.); Assassin (Kill 100 minions.); Moneybags (Earn 100,000 coin.); Valedictorian (Earn 5 skulls on every scenario of the story campagin on Rift Lord difficulty.); Rift Lord (Complete the story campaign on Rift Lord difficulty.); Upgraded (Purchase all upgrades for a single trap.); War Lord (Beat the first war scenario.); Tinkerer (Upgrade a piece of gear.); Fair Trade (Purchase a new piece of gear.)."
            ]
        },
        {
            "heading": "Endless, Gear & Weekly",
            "body": [
                "Surviving 10 and 25 waves in Endless, unlocking all gear slots, completing the Drastic Steps campaign (and on Rift Lord, and 5 skulls everywhere), 10,000 minion kills, and any Weekly Challenge.",
                "The achievements here: Survivor (Survive 10 waves in a single endless match.); Well Equipped (Unlock all gear slots.); First Flight (Complete the Drastic Steps campaign.); The Landing (Complete the Drastic Steps campaign on Rift Lord difficulty.); Top Floor (Earn 5 skulls on every scenario of the Drastic Steps campagin on Rift Lord difficulty.); Warpath (Kill 10,000 minions.); Can't Stop Me Now (Survive 25 waves in a single endless match.); Challenge Accepted (Complete any Weekly Challenge.)."
            ]
        },
        {
            "heading": "Scramble & Combo Scoring",
            "body": [
                "Completing Scramble Tier 2 and Tier 5, rerolling a debuff, scoring 500,000 in a scenario, 5,000,000 in an endless match, 5,000,000 total in Scramble, earning 1,000,000 coin, and 'Rifts Protected' for all other achievements.",
                "The achievements here: Cracking Eggs (Complete Tier 2 in Scramble.); Making an Omelet (Complete Tier 5 in Scramble.); Scrambled Eggs (Reroll a debuff in Scramble.); Combo Apprentice (Score 500,000 in any campaign scenario.); Combo War Mage (Score 5,000,000 in any endless match.); Combo Rift Lord (Score 5,000,000 total in Scramble.); Millionaire (Earn 1,000,000 coin.); Rifts Protected (Complete all acheivements.)."
            ]
        },
        {
            "heading": "Cold as Eyes & Tipping the Scales DLC",
            "body": [
                "Beating all 'Cold as Eyes' scenarios (and on Rift Lord, and Endless), killing 250 and 1000 Cyclopes, its gear, then the same set for 'Tipping the Scales' - all scenarios, 250 and 1000 Tuatara, gear upgrades and 5-skull runs.",
                "The achievements here: Ice Breaker (Beat all \"Cold as Eyes\" scenarios); Poke in the Eye (Kill 250 Cyclopes); Golden Monocle (Purchase all 3 pieces of \"Cold as Eyes\" gear); The Eyes Have It (5 Skull one \"Cold as Eyes\" scenario on Endless); Close Their Eyes (Kill 1000 Cyclopes); Willing to Sacrifice (5 Skull all \"Cold as Eyes\" scenarios on Rift Lord); Perfect Balance (Beat all \"Tipping the Scales\" scenarios); Scale Necklace (Kill 250 Tuatara); Shedding Skin (Purchase one upgrade for any \"Tipping the Scales\" gear); Heads and Tails (5 Skull one \"Tipping the Scales\" scenario on Endless); Collecting Tails (Kill 1000 Tuatara); Thumb on the Scale (5 Skull all \"Tipping the Scales\" scenarios on Rift Lord)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the main campaign on Rift Lord, aiming for 5 skulls each scenario ('War Mage', 'Rift Lord', 'Valedictorian').",
                "2. Do the same for the Drastic Steps campaign ('First Flight', 'The Landing', 'Top Floor').",
                "3. Buy and upgrade gear, unlock all slots, hit the coin and kill milestones.",
                "4. Grind Endless and Scramble for the wave-survival and 5,000,000 combo-score achievements.",
                "5. Play both DLC packs on Rift Lord and Endless, killing 1000 of each new enemy and buying their gear.",
                "6. 'Rifts Protected' unlocks once everything else is done.",
                "Tip: the combo-score achievements come fastest in Endless with a maxed trap layout in a tight kill box - one good long run can clear 'Combo War Mage' outright."
            ]
        }
    ]
};
