// AdVenture Capitalist Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/adventure-capitalist.json), whose 31 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   346900 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "adventure-capitalist-achievement-guide",
    "category": "game",
    "gameSlug": "adventure-capitalist",
    "icon": "💰",
    "title": "AdVenture Capitalist Achievement Guide",
    "summary": "A practical guide to all 31 Steam achievements in AdVenture Capitalist - none are hidden. Covers the Earth achievements (investment counts, Angels, big-number milestones, unlock-menu goals), The Moon, and Mars.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "AdVenture Capitalist has 31 Steam achievements and none of them are hidden. Several descriptions carry a dash-suffixed joke line, kept verbatim. They are grouped by planet: Earth (buy 100 Lemonade Stands, buy 100 / 1000 / 3000 of everything, the Buy Earth upgrade, 100,000 Angels, becoming a Decillionaire and a Googolaire, and the achievement-unlock milestones), The Moon (manager and investment counts, the 9000 Moon Shoes and 777-of-each goals, Moon Angels, 10^100 Moon Bucks), and Mars (deploy Profit Martians, the 2500-everything unlock).",
                "Nothing is missable - it is an idle game, so every counter climbs on its own over time, and prestiging for Angels or Moon Angels only speeds things up.",
                "Tip: prestige (reset for Angels) as soon as the Angel gain is a meaningful multiplier of your current bonus - the big-number achievements like Googolaire come far faster after a couple of well-timed resets than by grinding a single run."
            ]
        },
        {
            "heading": "Earth",
            "body": [
                "The Earth achievements - 100 Lemonade Stands, buying 100 / 1000 / 3000 (and 666) of everything, the Buy Earth upgrade, 100,000 Angels, Decillionaire and Googolaire, the 500 / 626 achievement-unlock milestones, and the Cana-dough, Forever And Ever and lemonade-only-managers goals.",
                "The achievements here: Serious Citrus! (Purchase 100 Lemonade Stands); You've Struck Oil! (Purchase Your First Oil Rig); The Big Hundsky! (Buy 100 of Everything on Earth); Grand Standing! (Buy 1000 of Everything on Earth); Frankly Ridiculous! (Buy 3000 of Everything on Earth); The Great AdVenture! (Unlock the 626th Achievement on Earth ); Earth Overlord! (Purchase the \"Buy Earth\" Upgrade on Earth); Wholy Holy! (Reach 100,000 Total Angels on Earth); Let's Learn Big Numbers! (Become a Decillionaire on Earth); Googolaire! (Become a Googolaire on Earth); Capitalism Classic (Unlock 500 Earth Achievements - Grats! The cash amounts you’ve earned have no meaningful mathematical comparison in the universe!); Meta Reference ( Purchase the “Cana-dough Exchange” Earth upgrade - Where’s the roof on this thing?); Accurate Description ( Purchase the “Forever And Ever” Earth upgrade - Many Angels died to bring us this acceleration...); Life's Manager ( Buy 32 of Earth's managers with only Lemonade Stands - The only investment you need.); Triumph! ( Unlock the “Achievement” Everything unlock on Earth (5000) - This is probably quite stupendous. ); Ominous... ( Buy 666 or more of each Earth investment - A lot of unlucky numbers.)."
            ]
        },
        {
            "heading": "The Moon",
            "body": [
                "The Moon achievements - 20 managers, one of every investment, the first Moon Angel upgrade, 9000 Moon Shoes, Moon-Shoe-only managers, 777 of each investment, the Special Relativity and 1111-everything unlocks, the first Moon Angel reset, 1112 Giant Lasers, 10^100 Moon Bucks, 2 Decillion angels and the Gallery button.",
                "The achievements here: Delegation! ( Hire 20 Managers on the Moon - The mark of a true leader!); 1 Small Step... ( Get 1 of every Moon investment - 1 giant leap for management! ); Here We Go Again! ( Purchase the first angel upgrade on the Moon, “It Begins Again” - Great renewable resource, or GREATEST?); OVER 9000! ( Purchase more than 9000 Moon Shoe investments - No reference is too tired.); Moon Walk ( Hire 20 Moon managers with only Moon Shoes. - One Product. One Destiny.); Lucky Ducky (Buy 777 or more of each Moon investment. Jackpot!); That Achievement's Name... ( Reach the “Special Relativity” Moon unlock (100 everything) - …Was Albert Einstein.); Moonumental Achievement ( Reach 1111 of everything on the Moon - Literally out of this world. ); Divine Intervention ( Reset for your first Moon Angel - Help is on the way!); One More ( Purchase your 1112nd Giant Laser - Not because it is easy...); Moogal ( Reach 10^100 Moon Bucks - It’s fun to say.); 2 Decillion Wings ( Reach 2 Decillion angels - Holy!); Gallery Tour ( Click the Gallery button on the Moon (in the Unlock Menu) - Did you know that was a button?)."
            ]
        },
        {
            "heading": "Mars",
            "body": [
                "The Mars achievements - deploying your Profit Martians for the first time, and unlocking the 2500-of-everything achievement.",
                "The achievements here: Release The Hounds (Deploy your Profit Martians for the First Time); Mars Attacks (Unlock \"2500\" of Everything Achievement - \"Show Them the Meaning of Haste\")."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through Earth, buying up investments and prestiging for Angels once the multiplier is worthwhile - this pulls in the big-number and Angel achievements.",
                "2. Clear the Earth unlock-menu milestones (500 and 626 achievements) as your run matures.",
                "3. Unlock The Moon and work its manager, investment and Moon Shoe achievements.",
                "4. Reset for Moon Angels and push to 10^100 Moon Bucks and 2 Decillion angels.",
                "5. Unlock Mars, deploy the Profit Martians, and reach the 2500-of-everything unlock.",
                "Tip: leave the game running (or use the offline-earnings mechanic) between sessions - the highest big-number goals are designed to be reached by an idle run over days, not a single sitting."
            ]
        }
    ]
};
