// Ready or Not Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/ready-or-not.json), whose 66 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1144200 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js). 6 hidden achievements ship no Steam description; their conditions here are curatorial, cross-checked against the game's wiki plus community 100% guides, and kept spoiler-light.
// - Sections group achievements by what each one actually requires.
export const GUIDE = {
    "slug": "ready-or-not-achievement-guide",
    "category": "game",
    "gameSlug": "ready-or-not",
    "icon": "🚔",
    "title": "Ready or Not Achievement Guide",
    "summary": "A practical guide to all 66 Steam achievements in Ready or Not - campaign completion, individual missions, challenge runs, equipment, arrests & career, dlc completion meta, hidden achievements.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Ready or Not has 66 Steam achievements, 6 of them hidden. The core of the list is completing every mission - the base Los Sueños campaign plus the Home Invasion, Dark Waters and Boiling Point DLCs - first at a C+ rating, then at S, then under heavy self-imposed restrictions (single-weapon runs, no-armor runs, taser-only runs).",
                "Most achievements require 'Standard' difficulty or higher, and several of the hardest want Ironman mode or 'Hard'. Ratings depend heavily on non-lethal, by-the-book play: report every downed suspect, arrest rather than kill, secure all evidence and civilians. Nothing is missable - missions replay freely.",
                "Tip: do a clean C+ pass of every mission first to learn the layouts, then S-rank them (which mostly means zero officer casualties, zero civilian harm, all suspects/evidence secured). Save the restriction runs and Ironman for last, when you know each map cold."
            ]
        },
        {
            "heading": "Campaign Completion",
            "body": [
                "The base-campaign chapter clears at C+ (The War, The Decaying City, The Left Behind, The Abducted, The Exploited), then Medal of Valor for all base missions at S, I'm Too Old For This for all base missions on Hard, and the two Ironman achievements - The World, and The Hermit without losing an officer.",
                "The achievements here: The War (Complete ‘Thank You, Come Again’, ‘Rust Belt’ and ‘Twisted Nerve’ at C+ on 'Standard' difficulty or higher); The Decaying City (Complete ‘Elephant’, ‘Relapse’ and ‘Neon Tomb’ at C+ on 'Standard' difficulty or higher); The Left Behind (Complete ‘Carriers of the Vine’, ‘Sins of the Father’, ‘Ides of March’, and ‘A Lethal Obsession’ at C+ on 'Standard' difficulty or higher); The Abducted (Complete ‘Buy Cheap, Buy Twice', ‘Hide and Seek', 'Ends of the Earth’, and 'Greased Palms’ at C+ on 'Standard' difficulty or higher); The Exploited (Complete ‘The Spider’, ‘Valley of the Dolls’, ‘Sinuous Trail’, and '23 Megabytes a Second' at C+ on 'Standard' difficulty or higher); Medal of Valor (Complete all base game missions at S on 'Standard' difficulty or higher); The World (Complete Ready or Not in ‘Ironman mode’ on 'Standard' difficulty or higher); The Hermit (Complete Ready or Not in ‘Ironman mode’ without losing a single officer on 'Standard' difficulty or higher); I'm Too Old For This… (Complete all base game missions on 'Hard' difficulty in any game mode)."
            ]
        },
        {
            "heading": "Individual Missions",
            "body": [
                "The per-mission and per-DLC completion markers: Dorms, Lawmaker and Narcos at C+; the Dark Waters missions (Mirage at Sea, Leviathan, 3 Letter Triad) at C+ and all at S; the Boiling Point missions (No Good Deed, All Gods Burn, A New America) at C+ and all at S; and After the Storm for all Home Invasion levels at S.",
                "The achievements here: Back To School (Complete ‘Dorms’ at C+ on 'Standard' difficulty or higher); Panic Room (Complete ‘Lawmaker’ at C+ on 'Standard' difficulty or higher); Cut To Pieces (Complete ‘Narcos’ at C+ on 'Standard' difficulty or higher); After the Storm (Complete all Home Invasion levels at S on 'Standard' difficulty or higher); The Dogs Heads (Complete ‘Mirage at Sea’ at C+ on 'Standard' difficulty or higher); The Meek & The Earth (Complete ‘Leviathan’ at C+ on 'Standard' difficulty or higher); The Margay (Complete ‘3 Letter Triad’ at C+ on 'Standard' difficulty or higher); From Land to Sea (Complete all Dark Waters levels at S on 'Standard' difficulty or higher); The Flashpoint (Complete ‘No Good Deed’ at C+ on 'Standard' difficulty or higher); The False Idol (Complete ‘All Gods Burn’ at C+ on 'Standard' difficulty or higher); The Final Directive (Complete ‘A New America’ at C+ on 'Standard' difficulty or higher); Nosce Te Ipsum (Complete all Boiling Point levels at S on 'Standard' difficulty or higher)."
            ]
        },
        {
            "heading": "Challenge Runs",
            "body": [
                "The restriction and skill-specific runs: taser-only Hide and Seek, .357-only Rust Belt, lethal-pistols-only Narcos, a full non-lethal Lawmaker, a five-minute Dorms, gas-only Twisted Nerve, no-armor Thank You Come Again, the timing/marksmanship feats on the Dark Waters missions (Party Crasher, Big Shell Specialist, Sleeper Agent), no-loadout and command-only mission clears (The Tactician, By the Book), and the Boiling Point trio My Eyes It Burns, The Heat is On and Programmed Psychosis.",
                "The achievements here: The Hanged Man (Complete ‘Hide and Seek' using only a taser, flashbangs, and bash on 'Standard' difficulty or higher); Way Out West (Complete ‘Rust Belt’ using only the .357 Magnum as a weapon on 'Standard' difficulty or higher); Beat Cop (Complete ‘Narcos’ using only lethal pistols but without using grenades or launchers on 'Standard' difficulty or higher); Hidden and Dangerous (Restrain all civilians in ‘Lawmaker’ without neutralizing any suspects on 'Standard' difficulty or higher); Meldonin (Complete all ‘Dorms’ main objectives in five minutes on 'Standard' difficulty or higher); Party Crasher (During ‘Mirage at Sea’, apprehend Sah’id before the order is given to murder civilians, and no civilians are killed on 'Standard' difficulty or higher); Big Shell Specialist (During ‘Leviathan’, successfully hit two long-range headshots, on two different active Suspects, located over 30m away from you on 'Standard' difficulty or higher); Sleeper Agent (During ‘3 Letter Triad’, apprehend or incapacitate 15 suspects consecutively, within 15 seconds of one another on 'Standard' difficulty or higher); Toxic Fumes (Complete 'Twisted Nerve' using only VPL-25, cs gas, gasmasks, and bash on 'Standard' difficulty or higher); Off Duty (Complete ‘Thank You, Come Again’ without armor and a helmet on 'Standard' difficulty or higher); The Tactician (Complete a mission without using a weapon and only relying on deployables, tactical gear, and bash on 'Standard' difficulty or higher); By the Book (Complete a mission while only commanding your officers and not using anything from your loadout on 'Standard' difficulty or higher); My Eyes, It Burns! (During any Boiling Point mission, while you are actively taking damage from toxic gas, incapacitate three different active Suspects within 5 seconds of one another on ‘Standard’ or higher.); The Heat is On (Complete ‘All Gods Burn’ without Armor or a Shield equipped and without using grenades, on ‘Hard’ difficulty.); Programmed Psychosis (Complete ‘A New America’, alone in a multiplayer lobby, on ‘Hard’ difficulty. )."
            ]
        },
        {
            "heading": "Equipment, Arrests & Career",
            "body": [
                "The cumulative counters and one-off feats: first arrest, 50 and 100 arrests, the tool-use counters (battering ram, mirrorgun, M320, lockpick gun, tripwire disarms, commanded breaches), completing Training, unlocking every officer trait and all base customization, and the situational gags (The Devil, The Magician, The Fool, Due Process, Temperance, Who is Pepe Silvia?, What's In The Box?!, Door Kickers).",
                "The achievements here: First Arrest (Arrest your first suspect or civilian); The Devil (Use the secret command for your SWAT team (kill me command)); The Magician (Arrest a downed suspect only to find out they were faking it); The Fool (Be killed by a civilian); Due Process (Incapacitate a suspect with a C2 charge); The Emperor (Unlock each unique officer trait at least once); Practice Makes Perfect (Complete 'Training'); Dress to Impress (Unlock all base game customization items); Temperance (Drink one too many coffees); Who is Pepe Silvia? (On 'A Lethal Obsession' play all of the audiotapes that can be found in the mission); Walnut Warrior (Command your squad to breach a door, 20 times); Mahogany Masochist (Command your squad to breach a door, 50 times); Arrest Warrant (Arrest 50 suspects or civilians); A Rest For The Wicked (Arrest 100 suspects or civilians); What's In The Box?! (Inspect any evidence item from the 'Evidence locker' in the 'Headquarters'); Silly String (Disarm 10 tripwires); Here's Johnny (Breach 20 locked doors with the 'Battering Ram'); Peeping Tom (Use the 'Mirrorgun' 30 times under a door); Say Hello To My Little Friend (Stun enemies with any 'M320' 30 times); Click From 3, 4 Is Binding (Unlock 20 doors using the 'Lockpick Gun'); Door Kickers (Have 2 officers with an active “Kicker” trait assigned to the roster and kick a door open in any mission)."
            ]
        },
        {
            "heading": "DLC Completion Meta",
            "body": [
                "The catch-all achievements: From House to Home (earn every Home Invasion DLC achievement), Getting Your Sea Legs (earn every Dark Waters DLC achievement), and Eye of Providence (find and use every major world interactable across all Boiling Point levels).",
                "The achievements here: From House to Home (Get all Ready Or Not Home Invasion DLC achievements); Getting Your Sea Legs (Get all Ready Or Not Dark Waters DLC achievements); Eye of Providence (Find and use all major world interactables in every Boiling Point level.)."
            ]
        },
        {
            "heading": "Hidden Achievements",
            "body": [
                "Six achievements are hidden - two bomb-defusal timing feats and four DLC secrets:",
                "The achievements here: Smile, You’re On Camera! (In any Dark Waters DLC mission, open your tablet, switch to the helicopter camera feed and spot yourself on it.); Justice Uncovers Depths Ghosts in Elysium (In the Dark Waters DLC, find the location of the secret MLO meeting room.); Fool Me Once (On 'Elephant', defuse the second bomb within two minutes of defusing the first, on Standard difficulty or higher.); Fool Me Twice (On 'Relapse', defuse the second bomb within two minutes of defusing the first, on Standard difficulty or higher.); All Secrets Safe (In the Boiling Point DLC, answer the phone call in the bank vault on 'All Gods Burn'.); Targeted Manipulation (In the Boiling Point DLC, detonate the explosives yourself during 'A New America'.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play Training, then a C+ pass of every base and DLC mission to learn the maps (First Arrest and the arrest counters come along the way).",
                "2. S-rank the campaign and each DLC - Medal of Valor, After the Storm, From Land to Sea, Nosce Te Ipsum - by playing perfectly clean (no officer down, no civilian harmed, everything secured).",
                "3. Do the restriction runs on maps you now know well, and grind the tool-use counters (ram, mirrorgun, M320, lockpick, tripwires, commanded breaches).",
                "4. Finish with Ironman (The World, The Hermit), the Hard-difficulty clears, and the hidden achievements (the two bomb-timing ones on Elephant and Relapse, the four DLC secrets).",
                "Tip: The Hermit (Ironman, no officer lost) is the single biggest hurdle - run it solo or with one trusted partner, take the easiest qualifying difficulty, and treat every room as if it is the one that ends the run."
            ]
        }
    ]
};
