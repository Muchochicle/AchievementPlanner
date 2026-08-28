// BioShock Remastered Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/bioshock-remastered.json), whose 65
//   achievements were sourced directly from Steam's own achievement
//   schema for appid 409710 via ISteamUserStats/GetSchemaForGame
//   (fetched through this app's own backend/services/steamApi.js). 52 of
//   65 ship a real, official Steam description, quoted verbatim below
//   (several Challenge Rooms names use curly quotes and apostrophes,
//   preserved byte-for-byte).
// - The 13 hidden achievements ship no Steam description - the bosses,
//   the main story beats and three easter eggs. Their conditions here
//   are curatorial, cross-checked against the BioShock Wiki and Steam
//   community guides, and kept spoiler-light.
export const GUIDE = {
    "slug": "bioshock-remastered-achievement-guide",
    "category": "game",
    "gameSlug": "bioshock-remastered",
    "icon": "🌊",
    "title": "BioShock Remastered Achievement Guide",
    "summary": "A practical guide to all 65 Steam achievements in BioShock Remastered - the weapon-upgrade tiers, the research achievements, the hacking and inventing goals, the Plasmid/Tonic and collectible set, the Museum of Orphaned Concepts (Challenge Rooms) DLC, and the 13 hidden achievements (bosses, story beats and easter eggs), covered spoiler-light.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "BioShock Remastered has 65 Steam achievements, 13 of them hidden (the bosses, the main story beats, and a few easter eggs). The visible list is systematic Rapture completionism: upgrade weapons, research every enemy type, hack everything, invent everything, max the Plasmid/Tonic tracks, and collect every audio diary - plus the standalone Challenge Rooms DLC.",
                "Very little is missable - the levels can be revisited via the bathysphere and research/hacks/collectibles persist - the main exceptions being Little Sister Savior (never harvest a Little Sister, a whole-run choice) and the research on bosses (photograph them before they die). Brass Balls (hardest difficulty, Vita-Chambers off) and A Man Chooses (1998 Mode) each need a dedicated run.",
                "Tip: play a first relaxed run with the research camera out constantly (research fills fast and gives permanent bonuses), rescuing every Little Sister, hacking everything and picking up every diary. Then do a fast Brass Balls run and a 1998 Mode run, and the Challenge Rooms as a separate block."
            ]
        },
        {
            "heading": "Weapons & Upgrades",
            "body": [
                "One achievement per fully-upgraded weapon (one through five), acquiring any upgrade, and all upgrades for all weapons (Weapon Specialist).",
                "The achievements here: Weapon Specialist (Acquire all upgrades for all weapons); Upgraded a Weapon (Acquire at least one weapon upgrade); One Fully Upgraded Weapon (Fully upgrade one weapon); Two Fully Upgraded Weapons (Fully upgrade two weapons); Three Fully Upgraded Weapons (Fully upgrade three weapons); Four Fully Upgraded Weapons (Fully upgrade four weapons); Five Fully Upgraded Weapons (Fully upgrade five weapons)."
            ]
        },
        {
            "heading": "Research",
            "body": [
                "Fully researching each enemy type (Thuggish/Leadhead/Spider/Houdini/Nitro Splicers, the Bouncer, Rosie and Little Sister), taking a photo in every research group, a highest-grade research photo, and maxing all research (Research PhD).",
                "The achievements here: Fully Researched a Bouncer (Fully research the Bouncer); Prolific Photographer (Take at least one photo in every research group); Fully Researched a Thuggish Splicer (Fully research the Thuggish Splicer); Fully Researched a Spider Splicer (Fully research the Spider Splicer); Fully Researched a Houdini Splicer (Fully research the Houdini Splicer); Fully Researched a Leadhead Splicer (Fully research the Leadhead Splicer); Fully Researched a Nitro Splicer (Fully research the Nitro Splicer); Fully Researched a Rosie (Fully research the Rosie); Fully Researched a Little Sister (Fully research the Little Sister); Quality Research Photo (Take a Research Photo of the highest grade); Researched a Splicer (Take at least one Research Photo of a Splicer); Research PhD (Max out all possible research)."
            ]
        },
        {
            "heading": "Hacking & Inventing",
            "body": [
                "Hacking each machine type (security bot, turret, camera, vending machine, safe), 50 successful hacks (Skilled Hacker), inventing an item, all ammo types, and 100 inventions (Avid Inventor).",
                "The achievements here: One Successful Hack (Perform at least one successful hack); Hacked a Security Bot (Successfully hack a security bot); Hacked a Turret (Successfully hack a Turret); Hacked a Security Camera (Successfully hack a Security Camera); Hacked a Vending Machine (Successfully hack a Vending Machine); Hacked a Safe (Successfully hack a safe); Ammo Inventor (Invent all possible ammunication types); Basic Inventer (Invent at least one item); Skilled Hacker (Successfully complete 50 hacks); Avid Inventor (Successfully invent at least 100 items)."
            ]
        },
        {
            "heading": "Plasmids, Tonics & Collectibles",
            "body": [
                "Buying a slot, maxing one track and all four tracks, the Tonic Collector (53 Tonics) achievement, finding every audio diary (Historian), completing Welcome to Rapture, dealing with every Little Sister, Little Sister Savior (harvest none), the hardest-difficulty clear (Seriously Good at This), and the slot-machine and shock-in-water feats.",
                "The achievements here: Completed Welcome to Rapture (Successfully complete the Welcome To Rapture Level); Seriously Good at This (Complete the game on the hardest difficulty setting); Bought One Slot (Purchase a Plasmid Slot or Tonic Slot in any track); Dealt with every Little Sister (Either Harvest or Rescue every Little Sister in the game); Maxed One Track (Purchased every slot in one of the Plasmid or Tonic tracks); Maxed All Tracks (Purchase every slot in all four Plasmid and Tonic tracks); Lucky Winner (Hit the jackpot at a slot machine); Toaster in the Tub (Shock an enemy in the water); Historian (Find every audio diary); Little Sister Savior (Complete the game without harvesting any Little Sisters); Tonic Collector (Collect or Invent 53 Tonics in the Physical, Engineering and Combat tracks)."
            ]
        },
        {
            "heading": "Museum of Orphaned Concepts (Challenge Rooms DLC)",
            "body": [
                "The Challenge Rooms DLC: for each of the three rooms (\"The 'I' in Team\", \"A Shocking Turn of Events\", \"Worlds of Hurt\"), a Rescuer, an Expert (time), a Collector (all Roses) and a special challenge achievement.",
                "The achievements here: “The ‘I’ in Team” - Rescuer (Rescued the Little Sister in “The ‘I’ in Team”); “The ‘I’ in Team” – Expert (Rescued the Little Sister in “The ‘I’ in Team” in under 3:00); “The ‘I’ in Team” – Collector (Found all collectable Roses in “The ‘I’ in Team”); “The ‘I’ in Team” – Pacifist (Rescued the Little Sister in “The ‘I’ in Team” without destroying any Machine Gun Turrets); \"A Shocking Turn of Events\" - Rescuer (Rescued the Little Sister in “A Shocking Turn of Events”); “A Shocking Turn of Events” – Expert (The player has rescued the Little Sister in “A Shocking Turn of Events” in under 4:00); “A Shocking Turn of Events” – Collector (Found all collectable Roses in “A Shocking Turn of Events”); “A Shocking Turn of Events” – Master Electrician (Charged up the Ferris Wheel 9 different times in “A Shocking Turn of Events”); “Worlds of Hurt” - Rescuer (Rescued the Little Sister in “Worlds of Hurt”); “Worlds of Hurt” – Expert (Rescued the Little Sister in “Worlds of Hurt” in under 15:00, on Medium or higher difficulty); “Worlds of Hurt” – Collector (Found all collectable Roses in “Worlds of Hurt”); “Worlds of Hurt” – Tough Guy (Rescued the Little Sister in “Worlds of Hurt” using only plasmids, tonics, the wrench, and the research camera, on Medium or higher difficulty)."
            ]
        },
        {
            "heading": "Story & Bosses (Hidden)",
            "body": [
                "Thirteen achievements are hidden - the bosses, the main story beats, and three easter eggs, described here spoiler-light:",
                "The achievements here: Defeated Dr. Steinman (Defeat Dr. Steinman (Medical Pavilion).); Defeated Peach Wilkins (Defeat Peach Wilkins (Neptune's Bounty).); Defeated Atlas (Defeat Atlas, the final boss.); Restored the Forest (Story: restore Arcadia's forest.); Completed Cohen's Masterpiece (Story: complete Sander Cohen's masterpiece in Fort Frolic.); Defeated Andrew Ryan (Story: the confrontation with Andrew Ryan.); Broke Fontaine's Mind Control (Story: break Frank Fontaine's mind control.); Became a Big Daddy (Story: become a Big Daddy (don the suit).); Irony (Photograph Sander Cohen's corpse.); Found Cohen's Room (Find Sander Cohen's hidden room in Olympus Heights.); Brass Balls (Complete the game on the hardest difficulty with Vita-Chambers disabled.); I Chose the Impossible (Complete all the Challenge Rooms on the hardest difficulty.); A Man Chooses (Complete the game in 1998 Mode (no conventional weapons beyond the wrench).)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through on Normal or Hard, rescuing every Little Sister (Little Sister Savior), researching everything to max as you go (photograph the bosses before killing them), hacking every machine and grabbing every audio diary.",
                "2. Finish the weapon-upgrade tiers, invent 100 items and complete 50 hacks - most of this comes from step 1.",
                "3. Do a fast Brass Balls run (hardest difficulty, Vita-Chambers disabled) and a separate A Man Chooses run (1998 Mode).",
                "4. Play the three Challenge Rooms for that block (I Chose the Impossible needs all of them on the hardest setting).",
                "5. Mop up the easter eggs: Irony (photograph Cohen's corpse), Found Cohen's Room (Olympus Heights).",
                "Tip: research is the highest-value thing to do on the first run - keep the camera out at all times, since every enemy type maxed gives permanent damage and utility bonuses that make Brass Balls far easier."
            ]
        }
    ]
};
