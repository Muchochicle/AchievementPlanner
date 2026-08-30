// Battle Brothers Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/battle-brothers.json), whose 101 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   365360 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js). None are hidden.
// Every achievement ships a real, official Steam description, quoted
// verbatim below.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "battle-brothers-achievement-guide",
    "category": "game",
    "gameSlug": "battle-brothers",
    "icon": "🛡️",
    "title": "Battle Brothers Achievement Guide",
    "summary": "A practical guide to all 101 Steam achievements in Battle Brothers - none are hidden. Covers the game's late-game crises and early contracts, company building and economy milestones, an enormous run of specific monster and enemy-type kills, renown and Ironman-mode challenges, and legendary threats, crafting, and endgame content.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Battle Brothers has 101 Steam achievements and none are hidden. As a mercenary-company sim built around brutal, permanent losses, the list covers defeating the game's four late-game crises (Greenskin Invasion, Undead Scourge, noble feud, Hoggart), early contract and company-building milestones (roster size, treasury totals, reputation with settlements and noble houses), a very long tail of specific enemy-type kills (Necromancers, Orc Warlords, Goblin Shamans, Geists, Direwolves, Krakens, and dozens more named monsters and named-unit types), renown milestones, Ironman-mode-specific achievements, and legendary/DLC content (named artifacts, crafting, cults, and the game's late-game superbosses).",
                "Nothing is missable - every kill-type, economy, and renown achievement is a permanent save-file record that stays earned across every future campaign, and losing a company (even permanently in Ironman mode) does not erase already-earned achievements. The genuine long pole is Savior (defeat all four late-game crises on Ironman mode in a single campaign), since Ironman's permadeath means a single bad battle can end the run before you reach the achievement.",
                "Tip: several of the specific enemy-type kill achievements (a Kraken, an Ifrit, a Barbarian King, the Ijirok, the Lorekeeper) are tied to rare or DLC-specific spawns - if you are missing one after a normal campaign, check whether it needs a specific DLC enabled or a specific late-game location before assuming you did something wrong."
            ]
        },
        {
            "heading": "Main Crises & Contracts",
            "body": [
                "Defeating the Greenskin Invasion, Undead Scourge, the noble feud, and Hoggart, completing settlement and noble house contracts, roster sizes of 12 and 20, losing your first mercenary, failing a contract, crown totals up to 250,000, killing a Necromancer/Orc Warlord/Goblin Overseer/Goblin Shaman, and defeating another mercenary company.",
                "The achievements here: Greenskin Slayer (Defeat the Greenskin Invasion at any difficulty level); Bane Of The Undead (Defeat the Undead Scourge at any difficulty level); Kingmaker (End the noble feud at any difficulty level); Trial By Fire (Defeat Hoggart at any difficulty level); Blood Money (Complete a contract for a settlement); Meddling With Nobles (Complete a contract for a noble house); A Full Company (Have a company roster of 12 brothers); Power In Numbers (Have a company roster of 20 brothers); Bloody Toll (Lose your first mercenary in battle); Broken Promises (Fail a contract); Back In Business (Have a total of 5,000 crowns); Moneymaker (Have a total of 50,000 crowns); Dragon's Hoard (Have a total of 250,000 crowns); Man In Black (Kill a Necromancer); Beastmode (Kill an Orc Warlord in melee); Outgunned (Kill a Goblin Overseer with a ranged weapon); Wildgrowth (Kill a Goblin Shaman)."
            ]
        },
        {
            "heading": "Company Building & Economy",
            "body": [
                "Settlement and noble house reputation, acquiring named items, fleeing combat, losing a game, destroying the Black Monolith, selling trading goods, temple treatment and permanent injuries, and reaching day 10, 100, and 365 on Veteran difficulty or higher.",
                "The achievements here: King Of The Hill (Defeat another mercenary company); Making Friends (Get to friendly relations with a settlement); Making Allies (Get to allied relations with a noble house); Bling Bling (Acquire a named item); Tricked Out (Acquire 5 named items); To Fight Another Day (Flee from combat); Lessons Learned (Lose a game); Rest In Pieces (Destroy the Black Monolith and claim its treasures); Trader (Sell 10 trading good stacks); Master Trader (Sell 50 trading good stacks); Patched Up (Have a temporary injury treated at the temple); Scars For Life (Have a brother receive a permanent injury); Survivor (Reach day 10 on veteran difficulty or higher); Campaigner (Reach day 100 on veteran difficulty or higher); Anniversary (Reach day 365 on veteran difficulty or higher); Who Let The Dogs Out? (Kill an enemy with a wardog); Overcoming Fear (Kill a Geist)."
            ]
        },
        {
            "heading": "Combat Feats I",
            "body": [
                "A wardog kill, a Geist kill, 24+ enemies in one battle, a 3-enemy AoE kill, defeating a Noble House unit, 90 melee/ranged skill, level 11, 5+ brothers injured at once, 3 permanent injuries on one brother, a 2-enemy ranged turn, an Orc Berserker kill on mushrooms, a Bandit Marksman kill, a Direwolf kill, a combat bandage, all four crises on Ironman, betraying an employer, and an Ancient Priest kill.",
                "The achievements here: Outnumbered, Never Outclassed (Kill 24 or more enemies in one battle); Swingin' (Kill 3 enemies with one AoE attack); Not So Noble (Defeat a Noble House's unit); Swordmaster (Get a brother to 90 melee skill); Deadeye (Get a brother to 90 ranged skill); Old And Wise (Get a brother to level 11); Field Hospital (Have 5 or more brothers with a temporary injury at the same time); Hard To Kill (Have a brother with 3 permanent injuries); Hip Shooter (Kill 2 enemies in one turn with a ranged weapon); How To Berserk (Kill an Orc Berserker in melee while high on mushrooms); Taste Your Own Medicine (Kill a Bandit Marksman with a ranged weapon); Ulfhednar (Kill a Direwolf in melee); First Aid (Bandage a wound in combat); Savior (Defeat all four late game crises on Ironman mode); Never Trust A Mercenary (Betray your employer); Atheist (Kill an Ancient Priest); Back To The Grave (Kill a Necrosavant)."
            ]
        },
        {
            "heading": "Combat Feats II & Renown",
            "body": [
                "Killing a Necrosavant, a Fallen Hero, a Knight, a Swordmaster, a Master Archer, and an Ancient Honor Guard, losing 10 Ironman campaigns, renown milestones up to 8,000, losing half your company in one battle, a deserting brother, a brother returning as undead, defeating a crisis on Ironman, losing a level 11+ brother on Ironman, and the three retirement outcomes.",
                "The achievements here: Restless Dead (Kill a Fallen Hero); A Knight's Tale (Kill a Knight); There Can Be Only One (Kill a Swordmaster in melee); Bullseye (Kill a Master Archer with a ranged weapon); Walking Statue (Kill an Ancient Honor Guard); Never Give Up (Lose 10 campaigns on Ironman mode); Making A Name (Reach 1,000 renown); Man Of Renown (Reach 3,000 renown); Stuff Of Legends (Reach 8,000 renown); Time To Rebuild (Lose half or more of your company in one battle); Deserter (Have a brother desert you); Welcome Back (Have a brother come back as undead); Man Of Iron (Defeat a late game crisis on Ironman mode); Tough Farewell (Lose a level 11 or higher brother on Ironman mode); Early Retirement (Retire and have your company break apart); A Bitter End (Retire and have your company go down fighting); Leaving A Mark (Retire and have your company persist)."
            ]
        },
        {
            "heading": "Legendary Threats & Crafting",
            "body": [
                "Retiring a legendary company, knocking out an enemy with a lute, killing a Hexe/Schrat/Kraken/Alp, destroying Webknecht Eggs, finding 10 legendary locations, crafting an item, using a Potion of Oblivion, dyeing a shield, killing a mind-controlled ally, reassembling the legendary sword, running a Davkul cult, defeating a Barbarian King, a level 11 Lone Wolf, defeating an enemy champion, defeating the Ijirok, and an Armored Unhold turning wild.",
                "The achievements here: Leaving A Legacy (Retire from your legendary company); Power Of Music (Knock out an enemy with a lute); Bag a Hag (Kill a Hexe); Chopping Wood (Kill a Schrat); Beast of Beasts (Kill a Kraken); Sleep Tight (Kill an Alp); Scrambled Eggs (Destroy Webknecht Eggs); Famed Explorer (Find 10 legendary locations); I Made This! (Craft an item); Memory Loss (Use a Potion of Oblivion); A Colorful Band (Dye a shield in company colors); Nothing Personal (Kill one of your own men while mind-controlled by a Hexe); Reproach Of The Old Gods (Reassemble the legendary sword); Voice of Davkul (Have a Prophet while playing as a cult of Davkul); King Of The North (Defeat a Barbarian King); Too Stubborn To Die (Have the Lone Wolf become level 11); Give Me That! (Defeat an enemy champion)."
            ]
        },
        {
            "heading": "Endgame & DLC Content",
            "body": [
                "A full 25-man peasant militia roster, losing to barbarians, 10 arena wins, winning the holy war for either side, a Fire Pot kill, southern city-state alliance, defeating an Ifrit, a Deathblow kill with the Qatal Dagger, a 4-enemy Handgonne shot, using all five non-combat follower slots, hiring your first follower, conquering a holy site, and defeating a Blade Dancer and the Lorekeeper.",
                "The achievements here: Putting Down A God (Defeat the Ijirok); Friend Or Foe (Have an Armored Unhold turn wild); Human Wave (Have a full roster of 25 men when playing as peasant militia); Give Me Back My Legions! (Lose a game to barbarians); Gladiator (Win 10 arena matches in a single campaign); Cultural Misunderstanding (Win the holy war for either side); Burn Them All! (Kill an enemy with a Fire Pot); Friend of the South (Reach allied relations with a southern city state); Stone Mason (Defeat an Ifrit); Assassin (Kill an enemy with the Deathblow skill of the Qatal Dagger); Barrage (Hit 4 or more enemies with a single shot of the Handgonne); Full House (Use all five of your slots for non-combat followers); Campfire Company (Hire your first non-combat follower); Under New Management (Conquer a holy site); Dance Off (Defeat a Blade Dancer); Hey! This is Library! (Defeat the Lorekeeper)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play a few early campaigns to build up company-management milestones: a 12 then 20-brother roster, 5,000 then 50,000 then 250,000 crowns, contracts for settlements and noble houses, and reputation with a settlement and a noble house.",
                "2. Work through the huge list of specific-enemy kills as you naturally encounter them across campaigns - Necromancers, Orc Warlords, Goblin Shamans and Overseers, Geists, Direwolves, Ancient Priests, Knights, and the many named unit types.",
                "3. Push renown toward 1,000, then 3,000, then 8,000, and work Ironman-mode achievements once you are comfortable with the game's difficulty (a crisis defeat on Ironman, 10 Ironman losses, a high-level brother lost on Ironman).",
                "4. Defeat each of the four late-game crises (Greenskin Invasion, Undead Scourge, the noble feud, Hoggart) individually before attempting Savior (all four in one Ironman campaign).",
                "5. If you own the DLC, hunt down the legendary and superboss content (the Black Monolith, the Kraken, the Ifrit, the Barbarian King, the Ijirok, the Lorekeeper), craft items, dye a shield, reassemble the legendary sword, and try the retirement-ending achievements (a company that persists, breaks apart, or goes down fighting).",
                "Tip: Broken Promises (fail a contract) and Lessons Learned (lose a game) are both explicitly achievements for things going wrong - do not avoid them out of caution, since a normal campaign eventually triggers both without any special effort."
            ]
        }
    ]
};
