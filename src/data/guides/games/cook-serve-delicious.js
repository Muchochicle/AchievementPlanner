// Cook, Serve, Delicious! Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/cook-serve-delicious.json), whose 52 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   247020 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 2 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (TrueAchievements / Steam Community / game wikis) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "cook-serve-delicious-achievement-guide",
    "category": "game",
    "gameSlug": "cook-serve-delicious",
    "icon": "🍳",
    "title": "Cook, Serve, Delicious! Achievement Guide",
    "summary": "A practical guide to all 52 Steam achievements in Cook, Serve, Delicious! (2 hidden). Covers the restaurant-star progression, the cuisine pins and VIP feats, the food upgrades, and the Perfect Day / Extreme / Battle Kitchen achievements. Two achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Cook, Serve, Delicious! has 52 Steam achievements and two are hidden - 'Platinum Star Restaurant' and 'Hungry Fest Champion', both won by competing in and completing the Hungry Festivities event (Platinum Star also needs the full progression checklist of days played and food upgrades done). The rest are open: the one- through five-star restaurant ratings, the customer-served milestones (up to 15,000), the six cuisine pins (1,500 dishes of each type), every food upgraded to maximum, the Perfect Day achievements, and the Extreme-difficulty and Battle Kitchen achievements.",
                "The catalog marks it difficulty 4 - 'Impossible Perfect Day' (a Perfect Day with a six-item Extreme menu), 'Super Rush Hour', maxing every food and 15,000 customers are all long or demanding. Nothing is missable: the restaurant and its events persist.",
                "Tip: build toward the Platinum Star checklist as your main goal - upgrade every food to max, play enough days, and enter the Hungry Festivities; both hidden achievements pop together once the checklist is done."
            ]
        },
        {
            "heading": "Restaurant Stars & Progression",
            "body": [
                "Earning the one- through five-star restaurant ratings and the hidden Platinum Star, completing all Iron Cook Challenges, the hidden Hungry Fest Champion, dating everyone in Cook4Luv, funding all ClicknStart projects, and the customer-served milestones from 1,000 to 15,000.",
                "The achievements here: One Star Restaurant (Earn your One Star Restaurant); Two Star Restaurant (Earn your Two Star Restaurant); Three Star Restaurant (Earn your Three Star Restaurant); Four Star Restaurant (Earn your Four Star Restaurant); Five Star Restaurant (Earn your Five Star Restaurant); Platinum Star Restaurant (Reach a Platinum Star restaurant - complete the full progression checklist (enough days played, every food upgraded to maximum) and win the Hungry Festivities.); Iron Cook Master (Complete all Iron Cook Challenges); Hungry Fest Champion (Win the Hungry Festivities - the game's competitive cooking event.); The Love Chef (Date the entire pool of people from Cook4Luv); ClicknStart Investor (Successfully funded all ClicknStart projects); 1k Customers Served (Served over 1,000 customers); 2.5k Customers Served (Served over 2,500 customers); 5k Customers Served (Served over 5,000 customers); 7.5k Customers Served (Served over 7,500 customers); 10k Customers Served (Served over 10,000 customers); 15k Customers Served (Served over 15,000 customers)."
            ]
        },
        {
            "heading": "Cuisine Pins & VIPs",
            "body": [
                "Serving 1,500 dishes each of American, Italian/Mexican, exotic (Japanese/Chinese/Asian), oceanic, drink and breakfast cuisine, serving a VIP guest, and the Ryan Davis burger.",
                "The achievements here: American Foods Pin (Served over 1,500 dishes of delicious American Cuisine); Italian/Mexican Foods Pin (Served over 1,500 dishes of delicious Italian and/or Mexican Cuisine); Exotic Foods Pin (Served over 1,500 dishes of Japanese, Chinese and Asian Cuisine ); Oceanic Foods Pin (Served over 1,500 dishes straight from the oceans); Liquid Pin (Served over 1,500 drinks from your restaurant); Breakfast Foods Pin (Served over 1,500 dishes of delicious Breakfast foods); The VIP Treatment (Successfully serve a VIP guest); Forever Remembered (Served a Ryan Davis burger, named after the greatest man of our time)."
            ]
        },
        {
            "heading": "Food Upgrades",
            "body": [
                "Upgrading all two-star and all three-star foods to maximum, and maxing each individual four-star food (Bananas Foster, Chicken Breast, Fish, Fried Rice, Lasagna, Nachos, Pasta, Baked Potato) and five-star food (Hamburger, Shish Kabob, Lobster, Pizza, Soup, Steak, Sushi, Wine).",
                "The achievements here: Two Star Food Upgrade (Upgraded all two star foods to maximum); Three Star Food Upgrade (Upgraded all three star foods to maximum); Four Star Fosters (Upgraded the Bananas Foster to maximum); Four Star Chicken (Upgraded the Chicken Breast to maximum); Four Star Fish (Upgraded the Fish to maximum); Four Star Fried Rice (Upgraded the Fried Rice to maximum); Four Star Lasagna (Upgraded the Lasagna to maximum); Four Star Nachos (Upgraded the Nachos to maximum); Four Star Pasta (Upgraded the Pasta to maximum); Four Star Baked Potato (Upgraded the Baked Potato to maximum); Five Star Burger (Upgraded the Hamburger to maximum); Five Star Kabob (Upgraded the Shish Kabob to maximum); Five Star Lobster (Upgraded the Lobster to maximum); Five Star Pizza (Upgraded the Pizza to maximum); Five Star Soup (Upgraded the Soup to maximum); Five Star Steak (Upgraded the Steak to maximum); Five Star Sushi (Upgraded the Sushi to maximum); Five Star Wine (Upgraded your Wine Collection to maximum)."
            ]
        },
        {
            "heading": "Perfect Days, Extreme & Battle Kitchen",
            "body": [
                "Stopping a robbery, a Perfect Day, a Rare and an Impossible Perfect Day, surviving a Super Rush Hour, the peculiar email, and the Battle Kitchen achievements (unlock 1, 3 and 6 Special Guests, and the Quick Challenge).",
                "The achievements here: Robbery (Successfully stopped a robbery during a workday); Perfect Day (Achieve a Perfect Day); Rare Perfect Day (Achieve a Perfect Day with a Four Star Restaurant or higher); Impossible Perfect Day ((Extreme Difficulty) Achieve a Perfect Day with six items on your active menu); Super Rush Hour ((Extreme Difficulty) Survive a Super Rush Hour); When It's Ready ((Extreme Difficulty) Receive and read a peculiar email); Special Guest Star ((Battle Kitchen) Unlock a Special Guest); Amazing Cameo Appearances ((Battle Kitchen) Unlock Three Special Guests); Quick Challenge ((Battle Kitchen) Complete the Quick Challenge); Superb Lineup of Awesome ((Battle Kitchen) Unlock Six Special Guests)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Grow the restaurant through the one- to five-star ratings, serving customers toward the 15,000 milestone.",
                "2. Serve 1,500 dishes of each cuisine type for the six pins.",
                "3. Upgrade every food to maximum - the two-star, three-star, four-star and five-star sets.",
                "4. Enter the Hungry Festivities to win 'Hungry Fest Champion' and, with the checklist done, 'Platinum Star Restaurant'.",
                "5. Do the Perfect Day, Extreme-difficulty and Battle Kitchen achievements.",
                "Tip: 'Impossible Perfect Day' (a Perfect Day with a six-item Extreme menu) is easiest with six foods you have fully upgraded and know cold - practise that exact menu on normal days first."
            ]
        }
    ]
};
