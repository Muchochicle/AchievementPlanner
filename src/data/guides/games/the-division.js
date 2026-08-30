// Tom Clancy's The Division Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/the-division.json), whose 60 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   365590 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "the-division-achievement-guide",
    "category": "game",
    "gameSlug": "the-division",
    "icon": "🩹",
    "title": "Tom Clancy's The Division Achievement Guide",
    "summary": "A practical guide to all 60 Steam achievements in Tom Clancy's The Division - none are hidden. Covers the story missions and Manhattan feats, the collectibles and Base of Operations upgrades, the skills, gear and crafting feats, and the Dark Zone, Underground and Survival achievements.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Tom Clancy's The Division has 60 Steam achievements and none of them are hidden. The campaign covers the story missions, reaching Level 30, discovering every Safe House, finishing all missions on Hard at Level 30, a Challenge-mode mission, and a no-death co-op mission. Then there are the collectible sets (ECHOes, drone photos, Survival Guide pages, phone recordings, agent profiles, incident reports), the Base of Operations rescues and upgrades, a broad set of skill, gear and crafting feats, and three endgame pillars: the Dark Zone (contaminated extractions, named Elites, Rogue Agents), the Underground expansion (ranks, collectibles, Tier One), and the Survival expansion (escape, temperature rating, Master Rank).",
                "Nothing is story-missable, but this is a long, group-friendly completion. Know No Fear (all missions on Hard at 30), Tier One (a 5-Directive Challenge Operation in a full group) and the Survival-mode achievements are the hardest, and several feats explicitly need a group of other players.",
                "Tip: level to 30 through the story, then find a regular group - the co-op, Dark Zone, Underground Tier One and no-death mission achievements are dramatically easier with three coordinated players than through matchmaking."
            ]
        },
        {
            "heading": "Story Missions & Manhattan",
            "body": [
                "Getting to Manhattan, the story-mission beats (the virus sample, the Cleaners, Rikers, the power plant, the comm relay, the Last Man Battalion, the Russian Consulate, the propaganda tape, the Amherst/Keener finale), reaching Level 30, discovering all Safe Houses, all missions on Hard at 30, a Challenge-mode mission, and a no-death Level 30 co-op mission.",
                "The achievements here: Activated (Get to Manhattan.); Outbreak (Secure a sample of the original virus strain.); Can't Stand the Heat! (Eliminate the leader of the Cleaners and escape the Napalm Production Site.); Crime and Punishment (Eliminate the leader of the Rikers gang and her bodyguards in Lexington Event Center.); I've Got the Power (Secure the power plant.); Fly on the Wall  (Restore the JTF comm relay.); Last Man Standing (Eliminate the leader of the Last Man Battalion.); You Win Some, You Lose Some (Recover Tchernenko's research data from the Russian Consulate.); What Needs To Be Done (Recover Charles Bliss' propaganda tape.); The Final Curtain (Uncover the fates of Gordon Amherst and Aaron Keener.); On the Level (Reach Level 30 with an Agent.); Marathon (Discover ALL of the Safe Houses in Manhattan.); Know No Fear (Finish all of the missions at Level 30 on the Hard difficulty.); Hardened Combatant (Complete a mission in Challenge mode.); United We Stand (At lvl 30 start and complete a Co-op Mission without anyone being Downed or Dying.)."
            ]
        },
        {
            "heading": "Collectibles & Base of Operations",
            "body": [
                "63 ECHO scenes, 16 drone photos, 24 Survival Guide pages, 130 phone recordings, 20 agent profiles, 40 incident reports, regrouping with Faye Lau, rescuing Paul Rhodes, Dr. Kandel and Captain Benitez, and fully upgrading the Base of Operations.",
                "The achievements here: Shadows of the past (Activate 63 ECHO scenes.); Droning on... (Extract 16 aerial photos from crashed drones.); Survivalist (Recover 24 Survival Guide pages.); Agent Diaries (Extract 130 phone recordings from phones found in Manhattan.); The Finder (Retrieve 20 missing first wave Division agent profiles.); Incident Reports (Extract 40 audio incident reports from JTF laptops.); Gain a Foothold (Regroup with Faye Lau in the Base of Operations.); The Engineer (Rescue Paul Rhodes.); The Doctor (Rescue and extract Dr. Jessica Kandel.); The Captain (Rescue Captain Roy Benitez.); State of the Art (Fully Upgrade the Base of Operations.)."
            ]
        },
        {
            "heading": "Skills, Gear & Crafting",
            "body": [
                "Equipping 10 skill mods, 50 skill kills, the Canine Unit / Pediatric Care upgrade, 100 Signature Skill activations, a talent-active kill, upgrading one and then two wings, a full Superior/High-end loadout, crafting 10 items and a High-end item, deconstructing 100 items, joining a group, 20 co-op revives, 100 group heals/buffs, 20 group missions, the car-door-in-cover feat, and a kill with each of the 6 gun classes.",
                "The achievements here: Skillz (Equip 10 different skill mods.); Skill Kill (Finish off 50 enemies using Skills.); The Humanitarian (Purchase the Canine Unit and Pediatric Care Base of Operations Upgrade.); Those Signature Moves (Activate any of the Signature Skills 100 times.); Natural Talent (Be attributed with a kill whilst having a talent active.); One Down, Two to Go! (Completely upgrade any one wing of the Base of Operations.); Fixer Upper (Completely upgrade any two wings of the Base of Operations.); Bling! Bling! (Equip all Equipment slots with Superior or High end Items.); Good With My Hands (Craft 10 items.); Master Craftsman (Craft a High end item.); Deconstructive Criticism (Deconstruct 100 items.); Looking for Group (Join or create a group.); Medic! (Revive a team mate 20 times in co-op.); Lean On Me (Heal or buff 100 times whilst in a group.); Networking (Complete 20 Missions as part of a group.); Shut that door (Close a car door whilst in cover.); Raid the Arsenal (Kill 1 enemy with each of the 6 Gun classes.)."
            ]
        },
        {
            "heading": "Dark Zone, Underground & Survival",
            "body": [
                "A contaminated Dark Zone extraction, extracting at all 8 zones, a Superior/High-end DZ extraction, a named DZ Elite, 10 named DZ enemies, killing a Rogue and 20 Rogue Agents, the Underground (the Tactical Operations Centre, all 6 objective types, Rank 40, a 5-Directive Challenge Operation in a full group, all audio logs and diaries), and Survival (escape, a -22C/-7F rating, 100 Survival DZ extractions, crafting the Virus Filter and Flare Gun, Master Rank).",
                "The achievements here: Worth the Wait (Successfully Extract a contaminated item from the Dark Zone.); Mass Extraction (Extract an item at all 8 Extraction Zones.); Plundered! (Extract a Superior or High end Item from the Dark Zone); Headhunter (Kill a named Elite in the Dark Zone.); You Just Made the List... (Kill 10 Named Enemies in the Dark Zone.); For Justice! (Kill a player who has gone Rogue.); I am the LAW! (Kill 20 Rogue Agents.); Begin with a BANG (Access the Tactical Operations Centre); Objectively Experienced (Complete each of the 6 different mission objectives in the Underground); The Beast Below (Reach Underground Rank 40); Tier One (In a group of 4 finish an Operation on Challenge with 5 Directives Enabled); Gone Spelunking (Retrieve all 55 Audio Logs and 25 UrbEx Diaries in Underground); Born Survivor (Successfully survive and escape in Survival Mode.); Subzero Hero (Obtain clothing to get a survivable temperature rating of -22°C / -7°F.); For the Hoarder… (Successfully extract 100 items from the Survival Dark Zone.); Tools of the Trade (Craft the Virus Filter and Flare Gun in Survival mode.); Survival Instincts (Achieve Master Rank rank in Survival Mode.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the story to Level 30, picking up ECHOes, phone recordings and other collectibles in each district as you clear it.",
                "2. Do the Base of Operations rescues and fully upgrade all three wings.",
                "3. Grind the skill, gear and crafting feats at endgame (skill kills, Signature Skill activations, crafting and deconstructing, a full High-end loadout).",
                "4. Form a regular group and do the Hard-difficulty mission sweep, the Challenge mission, the no-death co-op mission, and the Dark Zone achievements together.",
                "5. Do the Underground expansion (up to Rank 40 and the Tier One group Operation) and the Survival expansion (escape and Master Rank) last.",
                "Tip: the collectibles are the least forgiving part if you rush the story - use a map resource and sweep each zone's ECHOes, drones, Survival Guide pages and recordings before you outlevel the area, since backtracking across the whole map afterward is far slower."
            ]
        }
    ]
};
