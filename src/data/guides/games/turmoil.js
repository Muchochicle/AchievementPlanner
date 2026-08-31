// Turmoil Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/turmoil.json), whose 39 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   361280 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "turmoil-achievement-guide",
    "category": "game",
    "gameSlug": "turmoil",
    "icon": "🛢",
    "title": "Turmoil Achievement Guide",
    "summary": "A practical guide to all 39 Steam achievements in Turmoil - none are hidden. Covers the money and campaign achievements, the oil / upgrade / land achievements, and both DLC campaigns (The Heat Is On and Deeper Underground). None of the achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Turmoil has 39 Steam achievements and none are hidden. The base game covers profit milestones ($50,000 and $100,000 in one level), beating the campaign on Normal and Expert, owning all the town's shares plus a million in the bank, the oil-price manipulation feats, buying every factory / workshop / stable upgrade, reading all the Mayor's Tips, and the land-auction achievements. The rest are the two DLC campaigns - The Heat Is On (gas conversion, treasure hunting) and Deeper Underground (Deep Mode to 1,000 metres, the minigames).",
                "The catalog marks it roughly two playthroughs - the base and DLC campaigns each need an Expert clear, and 'Oil Tycoon' (all shares plus a million) is a focused economic run. Nothing is missable: levels and campaigns replay.",
                "Tip: for 'Oil Tycoon', buy shares aggressively every level once you have spare cash - share price rises over the campaign, so early buys are cheap and the dividends compound toward the million."
            ]
        },
        {
            "heading": "Money & Campaign",
            "body": [
                "Earning $50,000 and $100,000 profit in one level, a million in the bank, beating the campaign on Normal and on Expert, 'Filthy Rich' (campaign plus a million), owning all the shares, and 'Oil Tycoon' (all shares plus a million).",
                "The achievements here: Serious Money (Earn a profit of more than $50,000 in a single level.); The Big Haul (Earn a profit of more than $100,000 in a single level.); Millionaire (Have more than one million in your bank account); Cake! (Beat the campaign.); Expert (Beat the campaign in expert mode.); Filthy Rich (Beat the campaign and have more than one million in your bank account.); Mayor Shareholder (Own all the shares.); Oil Tycoon (Own all the shares and have one million in your bank account.)."
            ]
        },
        {
            "heading": "Oil, Upgrades & Land",
            "body": [
                "Getting all above-ground oil in a level, boosting the oil price above $2.00 and $2.50, a below-$0.25 sale, buying every factory, workshop and stable upgrade, getting a diamond, reading all Mayor's Tips, a $10,000+ spillage fine, overbidding at the land auction, a $10,000 land purchase, and the $10,000 and $25,000 profit milestones.",
                "The achievements here: Empty Milkshake (Get all the oil in a level above ground.); Good Deal (Boost the oil price above $2.00.); Great Deal (Boost the oil price above $2.50.); Dubious Deal (Sell oil at a price below $0.25.); Factory Man (Buy all the factory upgrades.); Workshopper (Buy all the workshop upgrades.); Stablelized (Buy all the stable upgrades.); Shiny (Get a diamond.); Tip Top (Read all the Mayor's Tips.); Big Spiller (Get a spillage fine of over $10,000.); Overbidder (Overbid someone at the land auction.); Big Spender (Pay $10,000 or more for a piece of land.); Promising (Earn a profit of more than $10,000 in a single level.); Juicy (Earn a profit of more than $25,000 in a single level.)."
            ]
        },
        {
            "heading": "The Heat Is On DLC",
            "body": [
                "Boosting the oil price to $3.50, the dove and village-cat gags, a $2,000 treasure sale, completing Anthony's treasure collection, converting an oil well to gas and tripling it, buying all the shed upgrades, and beating The Heat Is On campaign on Normal and Expert.",
                "The achievements here: Tree Fiddy (Boost the oil price up to $3.50.); Dove Hunt (Practice shooting on the dove. (The Heat Is On)); Cat Whisperer (Acquaint yourself with the village cat. (The Heat Is On)); As Good As It Gets (Sell a treasure for $2,000 or more (The Heat Is On)); Digging It (Complete Anthony’s treasure collection. (The Heat Is On)); Magmificent (Convert an oil well to gas and triple its size. (The Heat Is On)); Methodical (Buy all the shed upgrades. (The Heat Is On)); Taking the Heat (Beat the The Heat Is On campaign.); On Fire (Beat the The Heat Is On campaign in expert mode.)."
            ]
        },
        {
            "heading": "Deeper Underground DLC",
            "body": [
                "Beating the Deeper Underground campaign, getting a ruby, reaching 1,000 metres in Deep Mode, winning Dice Dice Dice, blowing up hard rock with dynamite, doing a water-map research, boosting a refinery, and beating the campaign on Expert.",
                "The achievements here: There's no more panic in this town (Beat the Deeper Underground campaign (Deeper Underground)); Ruby ruby ruby ruby! (Get a ruby (Deeper Underground)); Truly, Madly, Deeply (Reach a depth of 1000 meters in Deep Mode (Deeper Underground)); Know when to hold 'em (Win a game of Dice Dice Dice (Deeper Underground)); Boom, boom, boom, boom!! (Blow up hard rock with dynamite (Deeper Underground)); Chasing Waterfalls (Do a water map research (Deeper Underground)); Gasolina (Boost a refinery (Deeper Underground)); You're the Best (Beat the Deeper Underground campaign in expert mode (Deeper Underground))."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Beat the base campaign on Normal, doing the profit, oil-price and upgrade achievements as you go.",
                "2. Replay the base campaign on Expert, this time buying every share and building to a million for 'Oil Tycoon'.",
                "3. Do the land-auction and one-off feats (diamond, spillage fine, all Mayor's Tips).",
                "4. Play The Heat Is On DLC campaign on Normal and Expert, including the treasure collection and gas conversion.",
                "5. Play the Deeper Underground DLC campaign on Normal and Expert, and its Deep Mode and minigame feats.",
                "Tip: 'Empty Milkshake' (all above-ground oil in a level) is easiest on an early, small level - map every pocket with a scan before you place pipes so you don't leave any behind."
            ]
        }
    ]
};
