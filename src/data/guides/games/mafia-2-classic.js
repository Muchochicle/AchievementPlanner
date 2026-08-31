// Mafia II (Classic) Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/mafia-2-classic.json), whose 67 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   50130 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "mafia-2-classic-achievement-guide",
    "category": "game",
    "gameSlug": "mafia-2-classic",
    "icon": "🔫",
    "title": "Mafia II (Classic) Achievement Guide",
    "summary": "A practical guide to all 67 Steam achievements in Mafia II (Classic) - none are hidden. Covers the story chapters and mission feats, the difficulty and vehicle achievements, the combat and collectible achievements, and both the Jimmy's Vendetta and Joe's Adventures add-ons. None of the achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Mafia II (Classic) has 67 Steam achievements and none are hidden. A block follows the story - completing each chapter and a handful of mission-specific feats (protecting Francesca, the no-alarm ration-stamp job, the timed gas-stamp sale). The rest cover the difficulty clears, driving feats (125 mph, 50 miles in one car, keeping 30 mph for 5 minutes), the combat feats (a 5-headshot streak, 30 melee kills, robbing 5 stores in 5 minutes), the collectibles (all Playboy magazines and Wanted posters), and the two add-on campaigns - Jimmy's Vendetta and Joe's Adventures.",
                "The catalog marks it missable and roughly two playthroughs - the Playboy and Wanted-poster collectibles are per-chapter and easy to miss, and the difficulty achievements do not stack downward. A Hard run also covers the Medium 'Made Man' achievement.",
                "Tip: use a collectibles map from your first chapter - the magazines and posters are spread across the whole city and there is no in-game counter that tells you which you already have."
            ]
        },
        {
            "heading": "Story & Chapter Feats",
            "body": [
                "Completing each story chapter (2 through 14), the mission-specific feats (protecting Francesca, helping the woman with her car, the no-alarm ration-stamp job, the timed gas-stamp sale, the no-capture Leo rescue), and finishing what you started.",
                "The achievements here: Home Sweet Home (Complete Chapter 2.); Back in Business (Do your first job for Mike Bruski.); Big Brother (Protect Francesca.); A Real Gentleman (Help the woman fix her car in Home Sweet Home.); The Price of Oil (Complete Chapter 3.); The Professional (Obtain the ration stamps without raising the alarm.); Mail Man (Sell all the gas stamps before the time runs out.); Night Shift (Complete Chapter 4.); Good Spirits (Complete Chapter 5.); Time Well Spent (Complete Chapter 6.); Last Respects (Complete Chapter 7.); The Wild Ones (Complete Chapter 8.); Man of Honor (Complete Chapter 9.); Checking Out (Complete Chapter 10.); Our Good Friend (Complete Chapter 11.); Wake Up Call (Help Leo out of a tricky situation without getting caught.); Chasing the Dragon (Complete Chapter 12.); Chop Chop! (Complete Chapter 13.); Men at Work (Complete Chapter 14.); Finish Him (Finish what you started.)."
            ]
        },
        {
            "heading": "Difficulty & Vehicle Feats",
            "body": [
                "Finishing the story on Medium and on Hard, keeping a vehicle airborne 5 seconds, hitting 125 mph, driving 50 miles in one vehicle, selling 5 cars to the scrapyard and 5 to the dock, and holding 30 mph for 5 minutes.",
                "The achievements here: Made Man (Finish the story on Medium difficulty level or higher.); Tough Nut (Finish the story on Hard difficulty level.); Get Rich or Die Flyin' (Keep a vehicle in the air for over 5 seconds); Pedal to the Metal (Travel at 125 mph.); One Careful Owner (Travel a total of 50 miles in one vehicle.); Proper Scrapper (Sell 5 vehicles to Mike Bruski at the scrapyard.); Exporter (Sell 5 vehicles to Derek at the dock.); Cruise Control (Keep any vehicle at 30mph or over for 5 or more minutes.)."
            ]
        },
        {
            "heading": "Combat, Collectibles & Extras",
            "body": [
                "A 5-headshot streak, 30 melee kills, robbing 5 stores in 5 minutes, 50 street-gangster kills, a luxury suit, upgrading a car one level and to maximum, surviving a 10-minute police chase, a collectible, driving 30 different vehicles, all Playboy magazines and Wanted posters, and the story-epilogue feats.",
                "The achievements here: Hairdresser (Kill 5 enemies in rapid succession with a headshot.); Knucklehead (Kill a total of 30 enemies using melee attacks.); Stuck Up (Rob 5 stores in under 5 minutes.); The Enforcer (Kill 50 street gangsters.); Sharp Suiter (Buy your first luxury suit.); Tuned Ride (Upgrade one of your cars one level.); Dream Handling (Upgrade one of your cars to the maximum level.); Hard to Kill (The police want you dead.  Survive for 10 minutes!); Collector's Item (Find at least one collectible in the game.); Petrol Head (Drive at least 30 different vehicles.); Ladies Man (Find all of the Playboy magazines.); Card Sharp (Find all of the Wanted posters.); He Who Pays the Barber (Improve the dockworkers' hair cuts.); A Lesson in Manners (Show you know how to talk to a hooker.); Hey Joe (Clean up after Joe.); End of the Rainbow (Settle the score with Irish once and for all.); The Mafia Never Forgets (Pay a visit to an old friend.); Out for Justice (Learn what it means to be a Scaletta.)."
            ]
        },
        {
            "heading": "The Betrayal of Jimmy (Jimmy's Vendetta)",
            "body": [
                "The Jimmy's Vendetta add-on - the first mission, a 10x point multiplier, 1,000 miles driven, kills with every weapon, 100 destroyed vehicles, 100 headshots, all Car Dealer missions, finishing the campaign, 1,000,000 points, and 1,000 kills.",
                "The achievements here: First Step (Complete your first mission in \"Jimmy's Vendetta.\"); Faster than Light (Achieve a 10x point multiplier in \"Jimmy's Vendetta.\"); Explorer (Drive a total of 1,000 miles in vehicles in \"Jimmy's Vendetta.\"); Armament King (Kill your enemies in \"Jimmy's Vendetta\" with every weapon available in the game.); Firebug (Destroy 100 vehicles in \"Jimmy’s Vendetta.\"); Sharp Shooter (Kill 100 enemies by headshots in \"Jimmy's Vendetta.\"); Carnapper (Finish all Car Dealer missions in \"Jimmy's Vendetta.\"); Revenged (Finish \"Jimmy's Vendetta\" on any difficulty level.); Millionaire (Earn 1,000,000 points in \"Jimmy's Vendetta.\"); Massacre (Kill 1,000 enemies in \"Jimmy's Vendetta.\")."
            ]
        },
        {
            "heading": "Joe's Adventures",
            "body": [
                "The Joe's Adventures add-on - completing Chapter 1 and the Witness, Connection, Supermarket and Cathouse levels, pushing the witness into the ice lake, finishing the campaign, and the velocity / jump / drift / score-action point feats.",
                "The achievements here: Viva la Resistenza! (Complete Chapter 1.); What Witness? (Finish the Witness level in \"Joe's Adventures.\"); Arctic Grave (Push the chief witness into the ice lake in \"Joe's Adventures.\"); Dockyard Discord (Finish the Connection level in \"Joe's Adventures.\"); Five Finger Discount (Finish the Supermarket level in \"Joe's Adventures.\"); Mind the Goods (Finish the Cathouse level in \"Joe's Adventures.\"); Same Shirt Different Day (Finish Joe's Adventures on any difficulty.); Hypersonic (Reach 2000 points for one velocity run in \"Joe's Adventures.\"); Jacked Jumper (Reach 200 points for one Jump in \"Joe's Adventures.\"); Driftin' Daddy-O (Reach 200 points for one Drift in \"Joe's Adventures.\"); Jack of all Trades (Reach 10 different score actions in one mission in \"Joe's Adventures.\")."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the story on Hard, using a collectibles map to grab every Playboy magazine and Wanted poster.",
                "2. Do the driving and combat feats (125 mph, 50 miles, 5-headshot streak, 5-store robbery) during the open-world segments.",
                "3. Sell cars to Mike Bruski and Derek for the scrapyard and dock achievements.",
                "4. Play the Jimmy's Vendetta add-on and grind its point, mileage and kill milestones.",
                "5. Play the Joe's Adventures add-on and its velocity / jump / drift feats.",
                "Tip: 'Stuck Up' (rob 5 stores in under 5 minutes) is easiest in a free-roam session with a fast car - map five clothing/gun stores on one loop and hit them back to back."
            ]
        }
    ]
};
