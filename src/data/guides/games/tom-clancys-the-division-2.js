// Tom Clancy's The Division 2 Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/tom-clancys-the-division-2.json), whose 67 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   2221490 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "tom-clancys-the-division-2-achievement-guide",
    "category": "game",
    "gameSlug": "tom-clancys-the-division-2",
    "icon": "🎯",
    "title": "Tom Clancy's The Division 2 Achievement Guide",
    "summary": "A practical guide to all 67 Steam achievements in Tom Clancy's The Division 2 - none are hidden. None of the 67 achievements are hidden - every description is Steam's own text. Covers the D.C. campaign, endgame progression, the Dark Zones and PvP, the eight-player raids, the Warlords of New York expansion and the free Battle for Brooklyn update.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Tom Clancy's The Division 2 has 67 Steam achievements and none of them are hidden. The Division 2 is an online third-person looter-shooter set in a collapsed Washington, D.C. None of its 67 achievements are hidden. The base list covers the D.C. main missions and strongholds, fully upgrading settlements, control points, the Dark Zones, PvP, endgame progression to level 30, gear and crafting, specializations, and the eight-player raid.",
                "The rest of the list is the Warlords of New York expansion (the Lower Manhattan campaign, the manhunt for Aaron Keener and his rogue lieutenants, and level 40) and the free Battle for Brooklyn update (its own safe houses, control points, bounties and location liberation).",
                "The catalog marks it difficulty 3 and single-playthrough. Nothing is missable, but several achievements (Operation Dark Hours, Operation Iron Horse, Dark Zone rogue-agent kills, clan conflict) need a group or the endgame, and 'Hard as Nails' requires replaying every mission on Hard or above."
            ]
        },
        {
            "heading": "Washington, D.C. Campaign",
            "body": [
                "The base-game main missions and strongholds, plus rebuilding the city's settlements.",
                "The achievements here: Checking In (Rescue Eleanor Sawyer from the Hyenas in the Grand Washington Hotel); Opening the Vault (Discover what the Hyenas stole from Air Force One); Bunker Buster (Recover essential SHD Network equipment from the Federal Emergency Bunker); Sick Note (Shut down Outcast activity at the DCD Headquarters); Jailbreak (Recover interrogation data from the American History Museum); Global Communications (Reestablish the SHD Satellite Network at the Space Administration HQ); Getting the Word Out (Seize control of the ViewPoint Museum from the True Sons); Season Ticket (Eliminate the Hyena council in the District Union Arena); Strategic Extraction (Capture the Outcasts' Chief Strategist at the Potomac Event Center); Into the Wilderness (Take down the Outcast stronghold on Roosevelt Island); State of the Union (Drive the True Sons out of the Capitol building); Rebuilding DC (Fully upgrade all settlements); Caged Animal (Put an end to Emeline Shaw at the Manning National Zoo)."
            ]
        },
        {
            "heading": "Progression, Gear & Specializations",
            "body": [
                "Leveling to 30 and 40, gear and blueprints, crafting an exotic, equipping and investing in a specialization, projects, commendation patches, and replaying every mission on Hard.",
                "The achievements here: Hard as Nails (Finish all missions on hard difficulty or above); Patchwork (Get 10 patches from commendations); Next Level Operative (Reach Level 30); Crafty Collector (Collect 20 blueprints); Taste of the Exotic (Craft an exotic weapon or item); Specialized (Equip your first specialization); Best of the Best (Invest in each type of upgrade available for a specialization); Project Management (Complete a project for both the Theater and Campus settlements); King of the Skill (Equip and use each skill); Dress to Impress (Equip high-end gear (or above) in each slot); Over The Hill (Reach Level 40 with an agent)."
            ]
        },
        {
            "heading": "Open World & Co-op",
            "body": [
                "Control points, calls for backup, open-world tricks and signature-weapon kills, bounties, and helping other agents.",
                "The achievements here: Undressed to Kill (Destroy every piece of a tank's armor, then eliminate the tank); Command and Control (Discover 20 control points in DC); Group Therapy (Take over a control point in a group without anyone being downed); A Friend in Need (Respond to a call for help and revive the agent); Help Me! (Put out a call for backup); Suits You, Sir! (Collect any suit of cards in the open world); TV Cop (Perform a slide across the hood of a car); Negative Ramos! (Shock enemy medics by shooting their defibrillator); Resourceful Agent (Help friendlies in resource gathering); Big Game Hunter (Complete a bounty from each safe house); Autograph Hunter (Kill one enemy with each of the signature weapons (crossbow, sniper rifle & grenade launcher)); Arrow to the Knee (Shoot 10 enemies in the leg with a crossbow); Strength in Numbers (Create or join a clan); For Posterity (Photo mode: take a photo of a group of 4 agents); Shut that door (again) (Shut two car doors while in cover)."
            ]
        },
        {
            "heading": "Dark Zone, PvP & Raids",
            "body": [
                "The three Dark Zones (safe houses, extractions, rogue-agent kills, occupied hijacks), Conflict PvP, clan conflict, and the two eight-player raids.",
                "The achievements here: Dark Zone: Safe House (Access a Safe House in a Dark Zone); Dark Zone: Extraction (Extract an item from each dark zone); Dark Zone: Takedown (Eliminate a rogue agent in each Dark Zone); First Among Equals (Win a match of skirmish or domination); Clan War (With your clan, face off against another clan in conflict); Dark Zone: Occupied Hijack (Hijack an extraction in any occupied dark zone); Washington Raiders (Complete the full Operation Dark Hours raid in a group of eight players); Iron Breakers (Complete the full Operation Iron Horse raid in a group of eight players)."
            ]
        },
        {
            "heading": "Warlords of New York",
            "body": [
                "The Lower Manhattan expansion - its missions, the manhunt for Aaron Keener's rogue lieutenants (Parnell, Kajika, Dragov, Conley), the seasonal manhunt system, and directives.",
                "The achievements here: Country Retreat (Take part in the operation at Camp White Oak); Drilling Down (Discover the Black Tusk's purpose at the Pentagon and thwart it); Reactor Heist (Secure the perfusion bioreactor from the DARPA labs below the Pentagon); To Sum It All Up (Successfully extract Tchernenko after confronting and defeating Elijah Sumner); You Can't Have Him (Prevent Dolores Jones from capturing or killing the rogue Division agent Aaron Keener); Jail Break (Survive all of Theo Parnell's traps and defeat him); Deep Underground (Shut down the Cleaners' drill and eliminate Javier Kajika); Plummeting Stock (Defeat James Dragov at the NYC Stock Exchange); Boiling Point (Shutdown the Cleaners' oil refinery and defeat Vivian Conley); Liberation (Prevent the missile launch and defeat Aaron Keener); Almost a band (Complete a Main Mission in New York with at least one directive active); Under Lady Liberty's Gaze (Complete the manhunt and eliminate Aaron Keener); Extreme Manhunt (Complete a Seasonal Manhunt mission on Challenge difficulty or above)."
            ]
        },
        {
            "heading": "Battle for Brooklyn",
            "body": [
                "The free Brooklyn update - its own safe house, control points, backup calls, bounties, the Smart Cover skill, and liberating every Brooklyn location.",
                "The achievements here: Brooklyn Brains (Unlock and use the Smart Cover skill); Brooklyn Controller (Discover 4 Control Points in Brooklyn); Brooklyn Bounty Hunter (Complete a bounty from each Safe House in Brooklyn); Brooklyn Local (Access a Safe House in Brooklyn); Brooklyn Buddies (Put out a call for backup in Brooklyn); Brooklyn Backup (Respond to a call for help and revive a fellow agent in Brooklyn); Hometown Hero (Liberate all of Brooklyn's Main and Secondary locations)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the D.C. campaign to level 30, taking the strongholds and clearing control points and open-world activities along the way.",
                "2. Rebuild all three settlements fully and complete a project for each for Rebuilding DC and Project Management.",
                "3. Move into Warlords of New York: the Manhattan campaign, then hunt Keener's four lieutenants and finish the manhunt to level 40.",
                "4. Do the Dark Zone and Conflict PvP achievements, ideally with a group, and run Operation Dark Hours and Operation Iron Horse with a full squad of eight.",
                "5. Play the Battle for Brooklyn update for its separate set of borough achievements, and replay missions on Hard for Hard as Nails.",
                "Tip: the two raids and the clan-conflict achievement are the main blockers for solo players - use the in-game group finder or a community Discord to fill an eight-player raid team rather than waiting on matchmaking."
            ]
        }
    ]
};
