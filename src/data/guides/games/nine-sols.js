// Nine Sols Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/nine-sols.json), whose 35 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1809540 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 21 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (TrueAchievements / Steam Community / game wikis) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "nine-sols-achievement-guide",
    "category": "game",
    "gameSlug": "nine-sols",
    "icon": "⚔️",
    "title": "Nine Sols Achievement Guide",
    "summary": "A practical guide to all 35 Steam achievements in Nine Sols (21 hidden). Covers the story bosses and endings, the difficulty and optional-quest achievements, and the collectibles and miscellany. Twenty-one of the achievements are hidden and their unlock conditions are researched from community 100% guides.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Nine Sols has 35 Steam achievements and 21 are hidden. Twelve are story - defeating each of the Sols bosses in order (Baichang, Yingzhao, Goumang, Yanlao, Kanghui, Jiequan, Lady Ethereal, Ji, Fuxi & Nuwa, Eigong) and reaching both the 'Shooting Star' and 'Home Sweet Home' endings. Eleven are difficulty and optional quests - a Standard Mode clear, the 'Fight Dirty' Jiequan trick, rescuing Peach Blossom Village, and the Shennong, Chiyou, Shanhai 9000, Lear, Shuanshuan and cat questlines plus the two music-bell puzzles. The last twelve are collectibles (all skills, items, Jades, arrow tiers, wines, optional minibosses) and small miscellany.",
                "The catalog marks it difficulty 4. 'Fight Dirty', 'What Have You Done?!', 'Robo Fight!' and 'Repurposed' are missable and hard to recover, and the optional minibosses and a full Standard-Mode clear are the skill checks.",
                "Tip: follow a checklist for the missable quest steps - pay every Shanhai 9000 robot for its Map Data Chip, break Shuanshuan's clay pot, and do the robot fight and the Gene Eradicator trick when the game first offers them."
            ]
        },
        {
            "heading": "Story & Endings",
            "body": [
                "Defeating Baichang, Yingzhao, Goumang, Yanlao and Kanghui (the prison escape), then Jiequan, Lady Ethereal, Ji, Fuxi & Nuwa and Eigong, and reaching the 'Shooting Star' and 'Home Sweet Home' endings.",
                "The achievements here: My Revenge Starts Here (Defeat Baichang.); I'm Coming for You, Old Friend (Defeat Yingzhao.); Reap What You Sow (Defeat Goumang.); You Should Respect Your Elders (Defeat Yanlao.); Jail Break (Defeat Kanghui and escape the prison.); No Pain, No Gain (Defeat Jiequan.); Wake Up From My Sin (Defeat Lady Ethereal.); Come, Sweet Death (Defeat Ji.); We Have Each Other (Defeat Fuxi and Nuwa.); Learned From the Best (Defeat Eigong.); Shooting Star (Reach the 'Shooting Star' ending and witness the end of New Kunlun.); Home Sweet Home (Reach the 'Home Sweet Home' ending and return to the Solarians' home world.)."
            ]
        },
        {
            "heading": "Difficulty & Optional Quests",
            "body": [
                "A Standard Mode clear, using the Gene Eradicator against Jiequan, rescuing Peach Blossom Village, completing the Shennong, Chiyou, Shanhai 9000, cat, Shuanshuan-bean, fish and Lear questlines, and finding the New Kunlun blessing message board.",
                "The achievements here: Fight Through Hardship (Finish Nine Sols on Standard Mode.); Fight Dirty (Use the Gene Eradicator (via the Transmutation Crucible's injection port) during the fight with Jiequan.); The Cavalry's Here (Rescue the people of Peach Blossom Village by hacking the system to free them after defeating Lieguan.); Passing on the Torch (Complete Shennong's questline and help him become village leader - provide all wines and finish his village quests.); Rest for the Wicked (Complete Chiyou's questline and defeat Xingtian a second time to bring him peace.); Found You (Complete Shanhai 9000's questline and help him locate Chien by collecting all Map Data Chips.); Evolution (Discover a tremendous secret by hacking the first recording device in the Tianhuo Research Institute.); Magical Bean (Help Shuanshuan grow the Unknown Seed into a full-height tree using GM Fertilizer.); Repurposed (Use the Fortune Teller machine crafted by Shuanshuan.); Across Time and Space (Complete Lear's questline in the Limitless Realm and bid him farewell.); Blessed Messages (Discover the message board for blessings upon the Departure of New Kunlun's Voyage.)."
            ]
        },
        {
            "heading": "Collectibles & Miscellany",
            "body": [
                "The Daybreak Tower music sheet, mastering the full skill tree, finding every resource, Jade and arrow upgrade, drinking all of Shennong's wine, defeating every optional miniboss, breaking Shuanshuan's clay pot, the robot fight against Tianshou, recycling the coin, forcing map data from Shanhai 9000, and befriending Shuanshuan.",
                "The achievements here: Do Re Mi So La (Unravel the mystery of the Daybreak Tower's music sheet.); The Warrior Within (Master all skills in the skill tree.); Treasure Hunter (Find all resources and information marked by Shanhai 9000.); Well Prepared (Collect every Jade.); My Most Trusted Friend (Max out the ammo capacity of the Azure Bow and obtain Cloud Piercer X, Thunder Buster X, and Shadow Hunter X.); I'm Yi, I Have a Drinking Problem (Drink all the wine brewed by Shennong.); One Man Army (Defeat every optional miniboss.); What Have You Done?! (Break the clay pot made by Shuanshuan); Robo Fight! (Defeat Tianshou while driving a robot.); Stonks! (Recycle Shuanshuan's coin.); You Bastard... (Obtain map data from Shanhai 9000 by force.); Gimme Gimme (Establish a deep relationship with Shuanshuan.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through the story on Standard Mode, defeating each Sol boss in turn.",
                "2. Keep a missables checklist: pay every Shanhai 9000 robot for its Map Data Chip, break Shuanshuan's clay pot, do the robot fight, and use the Gene Eradicator on Jiequan.",
                "3. Complete the NPC questlines - Shennong, Chiyou, Shanhai 9000, Lear and Shuanshuan.",
                "4. Mop up collectibles: full skill tree, all Jades, all resources, all arrow tiers, all of Shennong's wine, and every optional miniboss.",
                "5. Reach both endings ('Shooting Star' and 'Home Sweet Home') - one needs a second, short playthrough.",
                "Tip: 'Repurposed' and 'Found You' both depend on buying every Map Data Chip from the Shanhai 9000 robots across the whole map - if you skip a single one you cannot finish the chain until a later playthrough, so pay each robot the moment you meet it."
            ]
        }
    ]
};
