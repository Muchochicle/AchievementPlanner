// State of Decay Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/state-of-decay.json), whose 46 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   241540 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 2 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (TrueAchievements / Steam Community / game wikis) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "state-of-decay-achievement-guide",
    "category": "game",
    "gameSlug": "state-of-decay",
    "icon": "🧟",
    "title": "State of Decay Achievement Guide",
    "summary": "A practical guide to all 46 Steam achievements in State of Decay (2 hidden). Covers the story and base-building achievements, the combat and Breakdown add-on achievements, and the heroes / sieges / Lifeline add-on achievements. Two achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "State of Decay has 46 Steam achievements and two are hidden - both from the Lifeline add-on and mutually exclusive: 'War Never Changes' (have Sasquatch detonate his atomic bomb in Danforth, survive the final siege and evacuate) and 'Last Voice of Danforth' (escape Danforth with Vienna Cho in your community, without losing a member). The rest are open: the story missions, the base-building goals, a large combat block, and the Breakdown add-on's level-gated achievements (up to Breakdown Level 6).",
                "The catalog marks it missable and roughly three playthroughs - the two Lifeline endings need separate runs, Breakdown Level 6 is a long climb, and permadeath means a lost character can cost you 'Badass' (50 missions with one character). A guide helps with the Breakdown level requirements.",
                "Tip: do the base game and Breakdown add-on first, then two Lifeline runs (copy the save before the Sasquatch choice) - one for the nuke ending, one for the Vienna Cho ending."
            ]
        },
        {
            "heading": "Story & Base Building",
            "body": [
                "Reaching Mt. Tanner, the church, escaping Trumbull County, the Army mystery, the Quentin/Becca and courthouse and Wilkerson missions, 5 infestations in a day, a zombie distraction, a survey, building one of every facility and a facility, 500 Fame, a mercy shot, recruiting an enclave, 8 outposts, 15 community members, relocating your base, and maxing a Cardio skill.",
                "The achievements here: Cannibal Family Picnic (Get to the Mt. Tanner Ranger Station.); Holy Rolling (Escape Mt. Tanner and find the survivors at the church.); Survivor (Escape Trumbull County.); It Was Just a Police Action (Find out what the Army was up to.); Home on the Grange (Play matchmaker for Quentin and Becca.); Arrested Developments (See things through at the courthouse.); Gun Thugs (Help the Wilkersons resolve their differences.); Pest Control (Destroy 5 infestations in one day.); Watch the Birdie! (Distract zombies to complete an objective.); I Can See My House From Here (Complete a survey activity.); Land Usage (Build one of every type of facility.); Home Improvement (Build a facility.); I'll Be There For You (Earn 500 Fame.); Mercy Shot (Kill a member of your community to prevent them from turning.); Come and Knock On Our Door (Convince another enclave to join your community.); Manifest Destiny (Build 8 outposts.); Everywhere You Look (Get 15 people in your community.); Movin' On Up! (Relocate your home base.); Rule #1 (Max out a community member's Cardio skill.)."
            ]
        },
        {
            "heading": "Combat & Breakdown",
            "body": [
                "A skill specialization, 10 hordes in a day, the blaze-of-glory sacrifices, being killed by zombies, killing each freak type (and each with a car), a propane triple-kill, a hand-to-hand double kill, a car-door kill, 250 zombies run over, 50 missions with one character, and the Breakdown add-on's level-gated feats (5 Bloaters, 50 executions, 150 resources, 5 Juggernauts, 50 stealth kills, Breakdown Level 6).",
                "The achievements here: Trust Me, I'm an Expert (Earn a skill specialization for one of your community members.); Horde Hoard (Destroy 10 hordes in one day.); Ya Always Were An A-Hole Gorman (Sacrifice your life in a blaze of glory.); Torn Apart (Get killed by zombies.); Get Yo' Freak On (Kill one of each freak zombie type.); The Bruce (Kill 3 zombies with an exploding propane tank.); Double Dead (Perform a hand to hand double kill special attack.); Gotta Enjoy the Little Things (Use a car door to kill a zombie.); Get Outta My Dreams (Kill one of each freak zombie type with your car.); Vehicular Zombicide (Run over 250 zombies.); Badass (Complete 50 missions or activities with the same character.); The Sacrifice (Go Out in a Blaze of Glory (Breakdown Level 1 or Higher).); The Dead Man (Kill 5 Bloaters (Breakdown Level 2 or Higher).); The Judge (Perform 50 Zombie Executions (Breakdown Level 3 or Higher).); The Survivor (Collect 150 Resources (Breakdown Level 4 or Higher).); The Mercenary (Destroy 5 Juggernauts (Breakdown Level 5 or Higher).); The Ninja (Execute 50 Stealth Kills (Breakdown Level 5 or Higher).); The Scientist (Reach Breakdown Level 6.)."
            ]
        },
        {
            "heading": "Heroes, Sieges & Lifeline",
            "body": [
                "Unlocking all heroes, 100 Drone Strike kills, 6 rucksacks in one vehicle, surviving 10 sieges, 2 minutes in a Danger Zone, sending an energy drink flying, all Sasquatch hunting missions, and the two hidden mutually-exclusive Lifeline endings.",
                "The achievements here: The Rescuer (Unlock All Heroes.); Wired for War (Kill 100 zombies with Drone Strikes.); Rucks in Trucks (Deliver 6 rucksacks to your base in the back of a single vehicle.); Under Siege (Survive 10 sieges on your base in a single playthrough.); Maverick (Survive 2 minutes within a Danger Zone.); Flugtag (Send an energy drink flying.); Freak Hunt (Complete all Sasquatch hunting missions.); War Never Changes (In the Lifeline add-on, have Sasquatch detonate his armed atomic bomb in Danforth, survive the final siege, and evacuate via the radio tower.); Last Voice of Danforth (In the Lifeline add-on, escape Danforth with Vienna Cho in your community - save all stranded callers to recruit her, then evacuate without losing a community member.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the base-game story and do the base-building goals (all facilities, 8 outposts, 15 members, relocate base).",
                "2. Grind the combat feats (freak types, car kills, 250 run over) and 'Badass' (50 missions with one survivor).",
                "3. Play the Breakdown add-on, climbing to Level 6 and doing each level's gated achievement.",
                "4. Play a Lifeline run for the nuke ending ('War Never Changes'), saving a copy of the save first.",
                "5. Play a second Lifeline run for the Vienna Cho ending ('Last Voice of Danforth').",
                "Tip: keep one favourite survivor alive for the whole base game - 'Rule #1' (max Cardio), 'Trust Me, I'm an Expert' (a specialization) and 'Badass' (50 missions) all want the same long-lived character."
            ]
        }
    ]
};
