// Total War: THREE KINGDOMS Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/total-war-three-kingdoms.json), whose 99
//   achievements were sourced directly from Steam's own achievement
//   schema for appid 779340 via ISteamUserStats/GetSchemaForGame
//   (fetched through this app's own backend/services/steamApi.js). None
//   are hidden; every one ships a real, official Steam description,
//   quoted verbatim below (some names carry accented pinyin, preserved
//   byte-for-byte).
// - Sections group by the TK_* apiname family: base game, then the
//   Yellow Turban, Eight Princes, Mandate of Heaven, A World Betrayed
//   and The Furious Wild content packs.
export const GUIDE = {
    "slug": "total-war-three-kingdoms-achievement-guide",
    "category": "game",
    "gameSlug": "total-war-three-kingdoms",
    "icon": "🐉",
    "title": "Total War: THREE KINGDOMS Achievement Guide",
    "summary": "A practical guide to all 99 Steam achievements in Total War: THREE KINGDOMS - none are hidden. The base-game campaign, battle and faction achievements, and the sets tied to each content pack: the Yellow Turbans, Eight Princes, Mandate of Heaven, A World Betrayed and The Furious Wild.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Total War: THREE KINGDOMS has 99 Steam achievements and none are hidden. A bit over half belong to the base game; the rest need a specific content pack (the Yellow Turban faction content, Eight Princes, Mandate of Heaven, A World Betrayed or The Furious Wild) and usually a campaign played as a particular faction or warlord.",
                "Nothing is missable - campaigns and battles replay on any difficulty - but many achievements want a full campaign win as a specific faction, or completing an entire reform tree, so a full completion is many campaigns.",
                "Difficulty and estimatedTime here are curatorial; the \"win the game as X\" and \"unlock all reforms\" achievements are the real time cost.",
                "Tip: play campaigns on the easiest settings with short victory conditions and pick strong starting factions - Cao Cao or Sun Jian in the base game, the strongest warlord in each DLC. Most of the mechanic and battle achievements accumulate inside a campaign you are winning anyway."
            ]
        },
        {
            "heading": "Base Game",
            "body": [
                "The base campaign, battle and faction achievements: declaring yourself Emperor and winning, the early-game milestones (capture a region, destroy a faction), duels and assassinations, diplomacy and espionage feats, the governor and warlord faction goals, and the ACHIEVEMENT_PSYCHOPATH easter egg.",
                "The achievements here: The Empire, Long Divided, Must Unite (Playing as any faction, declare yourself Emperor of the Three Kingdoms.); The Mandate of Heaven (Playing as any faction, become emperor and win the game.); Huangdi (Playing as any faction, declare yourself emperor.); Han Shot First (Playing as any faction, someone else declares themselves emperor before you.); Humble Beginnings (Playing as one of the governor factions, become emperor.); Burning Down the House (Playing as Dong Zhuo, raze an emperor seat.); First Steps (Playing as any faction, capture a region.); To Dust (Playing as any faction, destroy any other faction.); Simply the Best (Playing as any faction, progress a character to the maximum rank.); Branching Out (Playing as any faction, unlock an entire single element of the reforms tree.); Satisfaction Guaranteed (Playing as any faction, win 66 duels.); Fair-weather Friend (Playing as any faction, turn a friend into a rival.); Settlers of the Han (Playing as any faction, capture 29 settlements.); GG No Re! (Playing as any faction, win a ranked match in multiplayer mode.); Jade Empire (Playing as any faction, control all jade resources on the map.); First Taste (Playing as any faction, control a single spice resource.); They Who Control The Spice... (Playing as any faction, control two spice resources.); ...Controls the Universe! (Playing as any faction, control all 3 spice resources on the map.); Forbidden City (Playing as any faction, construct a faction palace.); One Arrow, Two Hawks (Playing as any faction, win a multiplayer co-op campaign.); An Ambush That's Sure (Playing as any faction, successfully ambush and defeat any opponent.); Point Break (Playing as any faction, trigger a civil war in another faction.); Blood-drenched & Fancy Free (Playing as any faction, win 100 battles launched from the campaign map.); Now the Stuff of Dreams (Playing as any faction, complete a campaign on legendary difficulty.); A Land of Milk & Honey (Playing as any faction, make 8,888 income in a single turn.); Firestarter (Playing as Dong Zhuo, raze 11 settlements.); Though the Tortoise Lives Long (Playing as Cao Cao, trigger a proxy war.); One Hundred Thousand Troops (Playing as Yuan Shao, form 6 alliances.); Demolition Man (Playing as any faction, breach a wall during a battle.); If You Can't Surrender, Die (Playing as any faction, kill 92,413 enemies.); If You Can't Die, Surrender (Playing as any faction, capture 9413 enemies.); Friend of Winter (Playing as any faction, unlock every reform in a single playthough.); Live & Let Spy (Playing as any faction, make your spy become faction leader.); No Small Deed Left Undone (Playing as Liu Bei, make 6 allies.); White Horse General (Playing as Gongsun Zan, win 11 battles with White Horse Fellows.); Bandits of the Marsh (Playing as Zheng Jiang, construct a bandit lair.); Oath of the Peach Garden (Fight a battle with Liu Bei, Guan Yu, and Zhang Fei fighting on the same side.); Diaochan's Revenge (With Lü Bu in your party, defeat Dong Zhuo in battle.); Party of Five (Playing as any faction, have all 5 Tiger Generals (Guan Yu, Zhang Fei, Zhao Yun, Ma Chao, Huang Zhong) in your faction.); Neighsayer (Playing as any faction, control all northern horse resources on the map.); Son of the Tortoise (Playing as the child of Cao Cao, proclaim yourself emperor.); Guangdong Coalition (Playing as any faction, defeat Dong Zhuo.); Take No Prisoners (Playing as any faction, execute 24 captives.); This is Total War! (Playing as any faction, win a campaign having declared war on every faction as soon as you encounter them.); Frenemies (Playing as any faction, win 222 battles in multiplayer mode.); When the Sun Rises in the West (Playing as any faction, win every battle (including auto-resolve battles).); BFFs (Playing as any faction, form an alliance.); Good Luck, Have Fun! (Playing as any faction, win a multiplayer match.); Ill Omen (Playing as any faction, have a spy successfully complete an assassination.); Way of the Tao (Playing as any faction, win a single battle with one of each unit type (Melee Cavalry; Shock Cavalry; Melee Infantry; Glaive & Spear Infantry; Ranged).); Eye of the Beholder (Playing as any faction, attack Xiahou Dun with archers.); A Sharp Point Sticks Out (Playing as any faction, obtain the maximum level in any one character attribute.); Special Delivery (Playing as any faction, kill a Hero with a special ability.); Here Comes the Sun (Jian) (Playing as any faction, maintain 8 trade routes.)."
            ]
        },
        {
            "heading": "Yellow Turbans",
            "body": [
                "The Yellow Turban faction content: constructing their unique buildings (Concealed Fort, Grand Fishing Port, House of Compassion, Yellow Turban Headquarters and more), recruiting Youxia units, winning battles with a Healer Hero, unlocking all the Heaven, People and Land reforms, and becoming the Yellow Sky Emperor and completing a campaign.",
                "The achievements here: Double Happiness (Playing as a Yellow Turban faction, construct at least 8 Prosperous Farming Estates.); Store Some Ice (Playing as a Yellow Turban faction, construct a Concealed Fort.); There Will Be Fish Every Year (Playing as a Yellow Turban faction, construct a Grand Fishing Port.); Dù Zǐténg Will See You Now (Playing as a Yellow Turban faction, construct a House of Compassion.); River Crab Pond (Playing as a Yellow Turban faction, construct a Garden of Divine Peace.); Don't Cheat At The Games (Playing as a Yellow Turban faction, construct at least 7 Communal Squares.); The Knights Who Say Qî (Playing as a Yellow Turban faction, recruit at least 7 Youxia units.); Vase On A Table (Playing as a Yellow Turban faction, construct a Yellow Turban Headquarters.); A Battle A Day Keeps The Doctor Away (Playing as any faction, win 7 battles with a Healer-type Hero leading your army.); Lord of Heaven (Playing as a Yellow Turban faction, unlock all Heaven reforms.); Lord of the People (Playing as a Yellow Turban faction, unlock all People reforms.); Lord of the Land (Playing as a Yellow Turban faction, unlock all Land reforms.); Mandate Regained (Playing as a Yellow Turban faction, become the Yellow Sky Emperor.); The Yellow Sky Has Come (Playing as a Yellow Turban faction, complete a campaign.)."
            ]
        },
        {
            "heading": "Eight Princes",
            "body": [
                "The Eight Princes pack: winning as an Eight Princes faction by any means, researching all military, espionage and civic reforms, recruiting Cataphracts, building the Grand Inspector's Palace, taking Luoyang, the alignment achievement, and the become-emperor / become-regent then win achievements.",
                "The achievements here: Fit For a Prince (Playing as any Eight Princes faction, win the game by any means.); Prince of War (Playing as any Eight Princes faction, research all military reforms.); Spies On Me (Playing as any Eight Princes, research all espionage reforms.); Civil Service (Playing as any Eight Princes faction, research all civic reforms.); Horse Armour (Playing as any Eight Princes faction, recruit 10 Cataphract units to your armies.); Upon Closer Inspection (Playing as any Eight Princes faction, construct the Grand Inspector's Palace.); Sunny Side Up (Playing as any Eight Princes faction, capture the settlement of Luoyang.); Align of Duty (Playing as any Eight Princes faction, obtain more than 225 in any alignment. ); Usurp Expectations (Playing as any Eight Princes faction, become the emperor then win the game.); The World's Protector (Playing as any Eight Princes faction, become regent then win the game.)."
            ]
        },
        {
            "heading": "Mandate of Heaven & A World Betrayed",
            "body": [
                "Mandate of Heaven (Dong Zhuo razing Luoyang, winning as the Han Dynasty or a Jiazi Rebellion faction, Lu Zhi's books and Prince Liu Chong's trophies) and A World Betrayed (Lü Bu's kill list, Sun Ce's ambitions and duel with Huang Zu, Yan Baihu and the White Tiger Confederation, granting titles, sharing loot and a bandit-faction win).",
                "The achievements here: History Repeats Itself (Playing as Dong Zhuo Raze Luoyang.); Restore the Empire (Playing as the Han Dynasty win the campaign.); Yellow Sky (Play as a Jiazi Rebellion faction and win the campaign.); The Librarian (Playing as Lu Zhi, collect all books.); Trophy Hunter (Playing as Prince Liu Chong, collect all trophies.); First Blood (As Lü Bu kill a character from your kill list); Among Men, Lü Bu (As Lü Bu Kill 25 characters from your kill list); Multi-Kill (As Lü Bu attack and win three battles in one turn); Like My Father Before Me (Reach greatness like your father and achieve five of Sun Ce ambitions before the end of year 200); You Killed My Father, Prepare To Die! (As Sun Ce kill Huang Zu (In duel or battle)); Fear the Tiger more than the government (As Yan Baihu destroy Sun Ce faction); White Tiger Burning Bright (As Yan Baihu, achieve the highest level of the White Tiger Confederation pooled resource); Many Faces, Many Names (Give out five titles to five different characters); Honour Among Thieves (Use \"Share the spoils\" when the army loot has reached max loot); Bandit Emperor (Win the game with a bandit faction)."
            ]
        },
        {
            "heading": "The Furious Wild",
            "body": [
                "The Furious Wild pack: the Nanman campaign goals (all fealties under control, a full one-sided tech tree, becoming the Han emperor or founding the Nanman kingdom), the tiger- and elephant-unit battle achievements, and Shi Xie's vassal-family achievement.",
                "The achievements here: I'm the Man (During a Nanman campaign, have all Nanman fealties under your control); That Still Only Counts as One (Win a battle against an opponent fielding at least one elephant unit, or an opponent fielding a general that has an elephant as their mount); Tiger King (Win a battle where an entire retinue was made up of tiger units); Lords of the South (When playing as Shi Xie, have 4 vassals that are also members of your family at the start of a turn); The Purist (During a Nanman campaign, complete a tech tree where all major reforms are to one side); The Barbarian Emperor (Playing as a Nanman, become the emperor of the Han, or establish the Nanman kingdom)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play one base-game campaign to a win as a strong faction (Cao Cao) on easy settings - this clears the emperor, milestone, battle and diplomacy achievements in one run.",
                "2. Do a second base run as a governor faction and a bandit/warlord faction for the faction-type achievements.",
                "3. Play one campaign per DLC as its strongest faction: a Yellow Turban run (for the buildings, reforms and Yellow Sky Emperor), an Eight Princes run, a Mandate of Heaven run, an A World Betrayed run as Lü Bu, and a Furious Wild Nanman run.",
                "4. Mop up the specific battle achievements (tiger retinue, elephant opponents, Healer Hero wins) in custom battles or inside those campaigns.",
                "Tip: the \"unlock all reforms\" achievements (Prince of War, Lord of Heaven and friends) need a long campaign - start working the reform tree from turn one of that run rather than rushing military victory."
            ]
        }
    ]
};
