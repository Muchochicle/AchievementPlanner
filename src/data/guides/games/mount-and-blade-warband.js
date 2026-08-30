// Mount & Blade: Warband Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/mount-and-blade-warband.json), whose 80 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   48700 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "mount-and-blade-warband-achievement-guide",
    "category": "game",
    "gameSlug": "mount-and-blade-warband",
    "icon": "⚔️",
    "title": "Mount & Blade: Warband Achievement Guide",
    "summary": "A practical guide to all 80 Steam achievements in Mount & Blade: Warband - none are hidden. Covers the single-player combat and character-skill feats, roaming and roleplaying across Calradia, building a kingdom and conquering the map, the multiplayer kill and win achievements, the female-character achievement line, and the combined 'complete these achievements' meta awards.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Mount & Blade: Warband has 80 Steam achievements and none of them are hidden. The list is a sandbox checklist rather than a story path: combat and character-skill feats (kill counts, trick shots, raising skills to thresholds), roaming Calradia (visiting every town, banditry, tournaments, marriage, learning poems), and the full kingdom arc (getting a fief, forming your own faction, gaining vassals, conquering towns). A big block is multiplayer (kill feats and round wins in the various modes), there is a parallel female-character achievement line, and six \"meta\" achievements require completing specific named sets of the others.",
                "Nothing is missable in a single continuous game because you can keep playing a save indefinitely, but full completion realistically needs at least two playthroughs (one male, one female character) plus multiplayer time. The kingdom achievements (conquer 10 towns as a ruler, rule all of Calradia) are the longest single-player commitment.",
                "Tip: plan one male and one female character run from the start - the female-character achievements (Man Handler, Girl Power, Queen, Empress, Lady of the Lake, and more) all require a female protagonist, and Man Eater (kill 50 men as a female character) plus the throne-claim achievements are easy to forget if you only ever roll a male lord."
            ]
        },
        {
            "heading": "Combat & Character Skills",
            "body": [
                "Kill-count and trick-shot feats (throwing weapons, horse archery, high-difficulty bow/crossbow/throwing shots, 500 and 5,000 enemies felled), raising weapon proficiencies to 250, and getting the various skill groups (strength, agility, party, personal, engineering, healing) to their achievement thresholds - plus installing a mod.",
                "The achievements here: Man Eater (Kill 50 men as a female character.); None Shall Pass (Successfully defend a castle.); The Holy Hand Grenade (Kill 75 enemies with throwing weapons.); Look at the Bones! (Face off against 100 enemies using custom battle mode.); Khaaan! (Kill 75 enemies with horse archery.); Get up Stand up (Cleanse the town of bandits in the opening mission.); Baron got back (Win a battle against a lord or party who previously beat or captured you.); Best served cold (Defeat 10 enemy parties in the snowy regions of Calradia.); Trick Shot (Land a shot with a difficulty of 10 while using a bow and arrow.); Gambit ( Land a shot with a difficulty of 5 while using a throwing weapon.); Old school Sniper ( Land a shot with a difficulty of 6 while using a crossbow.); Calradian Army Knife (Kill 10 enemies with a throwing weapon's secondary function.); Mountain Blade (Kill 10 parties of Mountain Bandits.); Holy Diver (Kill or wound at least 500 enemies.); Force of Nature (You and your army have killed or wounded 5,000 enemy troops.); Bring out your Dead (Get one of your healing skills to 5.); Might makes Right (Get either two strength related skills to 5 or one to 7.); Community Service (Install and play one mod.); Agile Warrior (Get either two agility related skills to 5 or one to 7.); Melee Master (Make one of your melee weapon skills 250.); Dexterous Dastard (Make one of your ranged weapon skills 250.); Mind on the Money (Have two of the following skills at a 5; Looting, Inventory Management, Trade, or Prisoner Management.); Art of War (Have two of the following skills at a 5; Trainer, Tactics, Leadership, or Persuasion.); The Ranger (Have a 7 in one of the following skills or a 5 in two; Tracking, Path-finding, or Spotting.); Trojan Bunny Maker (Get the engineering skill up to 5.)."
            ]
        },
        {
            "heading": "Roaming Calradia & Roleplay",
            "body": [
                "Exploration and sandbox roleplay: visiting every major town, camping in specific regions, banditry (raiding caravans and villages, stealing cattle, selling people), winning a tournament, helping a lord in a fight, raising army morale, the feasting and reading feats, marriage and elopement, being chosen marshall, recruiting heroes, and picking (or insulting your way into) a fight with a lord.",
                "The achievements here: Migrating Coconuts (Visit every major town in Calradia.); Help Help I'm being Repressed (Harass wandering peasants on the map.); Sarranidian Nights (Camp in the Sarranid region of the map.); Old dirty scoundrel (Have a -50 relation with a lord, village, or faction.); The Bandit (Raid 3 caravans and raid 3 villages.); Got Milk? (Steal 3 cattle from a single village.); Sold into Slavery (Sell 5 people to the ransom broker.); Medieval Times (Enter and win a tournament.); Good Samaritan (Help a lord or party win a fight.); Morale Leader (Raise your soldiers' morale from low to excellent.); Abundant Feast (Eat 6 different types food concurrently.); Book Worm (Finish reading one book through the camping screen.); Romantic Warrior (Learn 3 poems from tavern bards.); Happily ever after (Get Married.); Heart Breaker (Get a character to elope.); Autonomous Collective (Be chosen as marshall.); I dub thee (Promote one of your followers into a position of power.); Sassy! (As a female character get into a duel with male lord by insulting him.); The Golden Throne  (Rule all of Calradia!); Knights of the Round (Recruit 6 hero characters.); Talking helps (Engage in a conversation with a hero character through the party screen.); Kingmaker (Put a pretender on their rightful throne.); Pugnascious D (Pick a fight with a lord by insulting him or by challenging him to a duel.)."
            ]
        },
        {
            "heading": "Kingdom & Conquest",
            "body": [
                "The kingdom arc: amassing 100,000 denars, being granted your first fief, owning five fiefs, forming your own faction, helping your faction conquer Calradia, having three vassals as a ruler, and conquering 10 towns or castles as a ruler.",
                "The achievements here: Gold Farmer (Amass a fortune of 100,000 denars.); Royality Payment (Be granted your first fief.); Medieval Emlak (Become the owner of at least 5 fiefs.); Calradian Tea Party (Make your own faction.); Manifest Destiny (Assist your faction in conquering Calradia.); Concilio Calradi (As a ruler have 3 vassals.); Victum Sequens (As a ruler conquer 10 towns or castles.)."
            ]
        },
        {
            "heading": "Multiplayer & Meta Awards",
            "body": [
                "The multiplayer achievements (defending a castle, cavalry and mounted-projectile kills, throwing-weapon and blunt and slashing kills, lance kills, round wins in every mode, a positive K/D), the female-character achievement line (Man Handler through Lady of the Lake), and the six combined 'complete these achievements' meta awards (Son of Odin, Iron Bear, King Arthur, and the rest).",
                "The achievements here: This is our land ((MP) Your team successfully defended a castle in siege battle mode.); Spoil the charge ((MP) Kill 50 cavalry while on foot, the enemy must be killed while mounted.); Harassing Horseman ((MP) Kill 100 people with mounted projectiles.); Throwing Star ((MP) Kill 25 people with throwing weapons.); Shish Kebab ((MP) Perform 25 lance kills while mounted.); Last man standing ((MP) Win one round in battle mode.); Every breath you take ((MP) In any multiplayer mode have more kills than deaths.); Choppy Chop Chop ((MP) Slay 50 foes with slashing weapons.); Mace in yer Face! ((MP) Kill 25 foes with a blunt weapon.); The Huscarl ((MP) Kill 50 foes with throwing axes.); Ruin the Raid ((MP) Win in Conquest mode.); Glorious Mother Faction ((MP) Win a round of team deathmatch mode.); Elite Warrior ((MP) Win a round of deathmatch mode.); Son of Odin (You have completed the following achievements: Might makes Right, The Huscarl, Melee Master/Dexterous Dastard, and Holy Diver/Elite Warrior.); Iron Bear (You have completed the following achievements: Mace in yer Face!, Spoil the Charge, Agile Warrior, and This is our land.); Legendary Rastam (You have completed the following achievements: Abudant Feast, Mace in yer Face!, Sarranidian Nights, and Art of War/Melee Master.); Svarog the Mighty (You have completed the following achievements: Might Makes Right, Choppy Chop Chop, Glorious Mother Faction, and Old school Sniper.); King Arthur (You have completed the following achievements: Melee Master, Knights of the Round, Every breath you take, I dub thee/Good Samaritan.); Kassai Master (You have completed the following achievements: Trick Shot, Khaaan!, Agile Warrior, and Harassing Horseman.); Man Handler (As a female character, Capture and sell three NPC lords. ); Girl Power (As a female character, help a female claimant reclaim her throne.); Queen (As a female character, make your own faction.); Empress (As a female character, become queen of all Calradia.); Talk of the town (As a female character, raise your renown to 50.); Lady of the Lake (As a female character, give a companion character a great sword.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Start a male character and play a long sandbox game: do the combat and skill feats early (kill counts, trick shots, proficiencies to 250, skill thresholds), then roam Calradia for the exploration, banditry, tournament and roleplay achievements.",
                "2. Push that character through the full kingdom arc - fiefs, your own faction, vassals, and conquering 10+ towns, ideally all of Calradia for The Golden Throne.",
                "3. Play multiplayer sessions for the kill-feat and round-win achievements across every mode (deathmatch, team deathmatch, battle, siege, conquest).",
                "4. Roll a female character and run through the female-character achievement line (Man Eater, Man Handler, Girl Power, Queen, Empress, Lady of the Lake) plus any single-player achievements you skipped.",
                "5. The six meta awards (Son of Odin, Iron Bear, Legendary Rastam, Svarog the Mighty, King Arthur, Kassai Master) unlock automatically once their component achievements are all done - check which pieces you are missing and mop those up.",
                "Tip: install a lightweight mod purely for Community Service - any mod counts, it does not have to change gameplay, and it is otherwise easy to finish the whole list on vanilla and forget this one."
            ]
        }
    ]
};
