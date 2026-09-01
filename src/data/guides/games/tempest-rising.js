// Tempest Rising Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/tempest-rising.json), whose 98 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1486920 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 1 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (PowerPyx / Game8 / PlayStationTrophies / TrueAchievements) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "tempest-rising-achievement-guide",
    "category": "game",
    "gameSlug": "tempest-rising",
    "icon": "🌪",
    "title": "Tempest Rising Achievement Guide",
    "summary": "A practical guide to all 98 Steam achievements in Tempest Rising (1 hidden). Covers both 11-mission campaigns (GDF and Dynasty) with their secondary objectives and all four difficulty clears, the long list of unit and ability mastery feats, the skirmish-AI clears for both factions, and the multiplayer milestones. One achievement is hidden - 'Participation Trophy', for losing your first multiplayer match - and its condition is confirmed from community guides.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Tempest Rising has 98 Steam achievements and 1 is hidden. The bulk are campaign progress: each of the 11 GDF missions and 11 Dynasty missions has an achievement for completing it and a '+' achievement for completing it with all secondary objectives, plus four achievements per campaign for finishing on Easy, Normal, Hard and Insane. Then there is a large block of gameplay feats - kill counts with specific units, ability uses, buildings and units produced in one match - and finally the skirmish-AI clears (Easy/Normal/Hard for both factions), a few skirmish challenges, and the multiplayer milestones (win 1, win 5, play 25). The one hidden achievement, 'Participation Trophy', is for losing your first multiplayer match.",
                "The catalog marks it difficulty 4. Completing both campaigns on Insane is the hardest part; the '+' achievements need all secondary objectives in a single run of each mission, and several feats ('The Great Explosive Barrel Massacre' - blow up 999 barrels, '999' style grinds) are pure repetition. The multiplayer ones just need matches played.",
                "Tip: play each mission on Insane going for all secondary objectives on the first try - a clean Insane + run covers the mission achievement, its '+' achievement and progress toward the Insane campaign clear all at once."
            ]
        },
        {
            "heading": "GDF Campaign",
            "body": [
                "All 11 missions of the Global Defense Force campaign ('Signal Lost' through 'Heart of Glass'), each with a base and a '+' (all secondary objectives) achievement, and the four campaign clears on Easy, Normal, Hard and Insane.",
                "The achievements here: Signal Lost (Complete the first mission of the GDF Campaign on any difficulty level); Signal Lost + (Complete the first mission of the GDF Campaign, alongside all of its secondary objectives on any difficulty level); The Hornet's Nest (Complete the second mission of the GDF Campaign on any difficulty level); The Hornet's Nest + (Complete the second mission of the GDF Campaign, alongside all of its secondary objectives on any difficulty level); Paradropped (Complete the third mission of the GDF Campaign on any difficulty level); Paradropped + (Complete the third mission of the GDF Campaign, alongside all of its secondary objectives on any difficulty level); Retaliation (Complete the fourth mission of the GDF Campaign on any difficulty level); Retaliation + (Complete the fourth mission of the GDF Campaign, alongside all of its secondary objectives on any difficulty level); The Pass (Complete the fifth mission of the GDF Campaign on any difficulty level); The Pass + (Complete the fifth mission of the GDF Campaign, alongside all of its secondary objectives on any difficulty level); Pull That Base Apart (Complete the sixth mission of the GDF Campaign on any difficulty level); Pull That Base Apart + (Complete the sixth mission of the GDF Campaign, alongside all of its secondary objectives on any difficulty level); Public Relations (Complete the seventh mission of the GDF Campaign on any difficulty level); Public Relations + (Complete the seventh mission of the GDF Campaign, alongside all of its secondary objectives on any difficulty level); The Ancient Basin (Complete the eighth mission of the GDF Campaign on any difficulty level); The Ancient Basin + (Complete the eighth mission of the GDF Campaign, alongside all of its secondary objectives on any difficulty level); Ancient Power (Complete the ninth mission of the GDF Campaign on any difficulty level); Ancient Power + (Complete the ninth mission of the GDF Campaign, alongside all of its secondary objectives on any difficulty level); The Fall of Alexandria (Complete the tenth mission of the GDF Campaign on any difficulty level); The Fall of Alexandria + (Complete the tenth mission of the GDF Campaign, alongside all of its secondary objectives on any difficulty level); Heart of Glass (Complete the eleventh and final mission of the GDF Campaign on any difficulty level); Heart of Glass + (Complete the eleventh mission of the GDF Campaign, alongside all of its secondary objectives on any difficulty level); GDF Recruit (Complete the GDF Campaign on Easy Difficulty); GDF Sergeant (Complete the GDF Campaign on Normal Difficulty); GDF Colonel (Complete the GDF Campaign on Hard Difficulty); GDF General (Complete the GDF Campaign on Insane Difficulty)."
            ]
        },
        {
            "heading": "Dynasty Campaign",
            "body": [
                "All 11 missions of the Tempest Dynasty campaign ('Harvest The Tempest' through 'Fire Of The Gods'), each with a base and a '+' achievement, and the four campaign clears on Easy, Normal, Hard and Insane.",
                "The achievements here: Harvest The Tempest (Complete the first mission of the Dynasty Campaign on any difficulty level); Harvest The Tempest + (Complete the first mission of the Dynasty Campaign, alongside all of its secondary objectives on any difficulty level); The Informant (Complete the second mission of the Dynasty Campaign on any difficulty level); The Informant + (Complete the second mission of the Dynasty Campaign, alongside all of its secondary objectives on any difficulty level); Redirection (Complete the third mission of the Dynasty Campaign on any difficulty level); Redirection + (Complete the third mission of the Dynasty Campaign, alongside all of its secondary objectives on any difficulty level); Where it Hurts (Complete the fourth mission of the Dynasty Campaign on any difficulty level); Where it Hurts + (Complete the fourth mission of the Dynasty Campaign, alongside all of its secondary objectives on any difficulty level); Rat Catcher (Complete the fifth mission of the Dynasty Campaign on any difficulty level); Rat Catcher + (Complete the fifth mission of the Dynasty Campaign, alongside all of its secondary objectives on any difficulty level); Harvesting Duty (Complete the sixth mission of the Dynasty Campaign on any difficulty level); Harvesting Duty + (Complete the sixth mission of the Dynasty Campaign, alongside all of its secondary objectives on any difficulty level); Sins of the Son (Complete the seventh mission of the Dynasty Campaign on any difficulty level); Sins of the Son + (Complete the seventh mission of the Dynasty Campaign, alongside all of its secondary objectives on any difficulty level); Buried (Complete the eighth mission of the Dynasty Campaign on any difficulty level); Buried + (Complete the eighth mission of the Dynasty Campaign, alongside all of its secondary objectives on any difficulty level); Power of the Tempest (Complete the ninth mission of the Dynasty Campaign on any difficulty level); Power of the Tempest + (Complete the ninth mission of the Dynasty Campaign, alongside all of its secondary objectives on any difficulty level); The Fall of a Dynasty (Complete the tenth mission of the Dynasty Campaign on any difficulty level); The Fall of a Dynasty + (Complete the tenth mission of the Dynasty Campaign, alongside all of its secondary objectives on any difficulty level); Fire Of The Gods (Complete the eleventh and final mission of the Dynasty Campaign on any difficulty level); Fire Of The Gods + (Complete the eleventh mission of the Dynasty Campaign, alongside all of its secondary objectives on any difficulty level); Dynasty Conscript (Complete the Dynasty Campaign on Easy Difficulty); Dynasty Field Officer (Complete the Dynasty Campaign on Normal Difficulty); Dynasty Major (Complete the Dynasty Campaign on Hard Difficulty); Dynasty Minister of War (Complete the Dynasty Campaign on Insane Difficulty)."
            ]
        },
        {
            "heading": "Unit & Ability Mastery",
            "body": [
                "'Deprived' (finish a campaign with no Doctrine or Armory points), and a long list of single-match feats - unit-specific kill counts, ability uses (Override, Repair Turret, Airstrike, Barrage, Tempest Engines), mines laid and disarmed, buildings and units produced, 999 explosive barrels, 25 invisible units at once.",
                "The achievements here: Deprived (Complete any Campaign without putting any points into the Doctrine and Armory systems); Western BBQ (Kill 25 Field Scout units with Ignitor units in one mission or match); Clay Pigeons (Destroy 100 Combat Drones with Missile Troopers in one mission or match); Squatters Rights (Capture 15 enemy buildings with either Engineers or Technicians in one mission or match); Dude! Where's my car? (Flatten 50 Vehicles); Making Bacon Pancakes (Crush 50 infantry units by running them over with vehicles in one mission or match); Marked for life (Intel Mark 98 units over one mission or match); Not a step back! ('Inspire' 25 units with the Line Officer at once in one mission or match); Firewatch (Use the Engineer to deploy 10 Guard Towers in one mission or match); Plowing the Fields (Harvest 200,000$ worth of tempest in one mission or match); High Voltage! (Activate Distribution Mode from two Dynasty Power Plants on one building); Reduce, Reuse, Recycle! (Salvage' 25 vehicles from the Salvage Center in one mission or match); Road paved with bad intentions (Use Technicians to lay down 200 Mines); I'm a mechanical man (Disarm 200 mines); What's mine is mine, what's yours is now mine too (Use the Hijacker's 'Override' ability 5 times over the course of a mission or match); Drive By Mechanic (Deploy the Shieldmaiden's 'Repair Turret' 20 times in one mission or match); Same-Day Delivery (Use 150 support powers); Doctor's Visit (Deploy the Riot Medic's 'Healing Turret' 10 times in one mission or match); Cloudy with a Chance of Explosions (Use the Commando's Airstrike ability 10 times in one mission or match); Hidden in Plain Sight (Make the Sniper go into Stealth mode 100 times); Keep rollin', rollin' (Activate the 'Tempest Engines' ability on the Tempest Sphere 50 times); Hovering Hammer of Doom (Use the Leveler's 'Barrage' ability 30 times in one mission or match); Base-Builder’s Fiesta (Produce 5 MCVs in one mission or match); The Ultimate Silo-fest (Construct 10 Silos in one mission or match); Air Traffic Controller (Construct 12 Air Pads in one mission or match); Fortress of Solitude (Construct 50 Concrete Walls in one mission or match); Tempest Hoarder (Produce 15 Tempest Rigs in one mission or match); The Great Explosive Barrel Massacre (Blow up 999 Explosive Barrels); You Can't See Me (Have 25 Units be Invisible at one time); Multitasker (Have 10 Construction Sites active at one time); Marked for Death (Kill 50 Intel Marked enemy units with 'Networked' units in one mission or match); Bug Zapper (Use the Voltaic Reaction Perk to Kill 100 Units affected with Tempest Overflow); Pinata Party (Blow up a Hammerhead or Skycrane Carrier filled up with units); Rambo (Kill 60 units using the Assault Gunner's 'Tempest Dynamos' Ability)."
            ]
        },
        {
            "heading": "Skirmish & Multiplayer",
            "body": [
                "Beating the skirmish AI on Easy, Normal and Hard as both GDF and Dynasty, the 'Last Man Standing' and 'Going Commando' skirmish challenges, the multiplayer milestones (win 1, win 5, play 25), and the hidden 'Participation Trophy' for losing your first multiplayer match.",
                "The achievements here: Obstacle Course (Beat the Skirmish AI on \"Easy\" while playing as GDF); Boot Camp (Beat the Skirmish AI on \"Normal\" while playing as GDF); Live Fire Exercise (Beat the Skirmish AI on \"Hard\" while playing as GDF); Conscription (Beat the Skirmish AI on \"Easy\" while playing as Dynasty); Training Grounds (Beat the Skirmish AI on \"Normal\" while playing as Dynasty); Academy of War (Beat the Skirmish AI on \"Hard\" while playing as Dynasty); Last Man Standing (Win a Skirmish Match against 3 AI Players that are on the same team); Going Commando (Win a Skirmish Match only using Infantry Units); Partying like its 1998 (Win 1 Multiplayer Match); The Midas Touch (Win 5 Multiplayer Matches); Around the block (Play 25 Multiplayer Matches); Participation Trophy (Lose your first ranked/multiplayer match.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the GDF campaign on Insane, going for every secondary objective on each mission the first time through.",
                "2. Do the same for the Dynasty campaign on Insane.",
                "3. Mop up the unit and ability mastery feats on custom skirmish maps where you control the pace.",
                "4. Beat the skirmish AI on Easy/Normal/Hard as each faction, and do 'Last Man Standing' and 'Going Commando'.",
                "5. Play multiplayer for the win-1 / win-5 / play-25 milestones - and lose one on purpose early for 'Participation Trophy'.",
                "Tip: grind feats like 'The Great Explosive Barrel Massacre' and the big ability-use counts on a 1v1 skirmish vs an Easy AI with a huge starting economy - you can ignore the enemy and just farm the counter."
            ]
        }
    ]
};
