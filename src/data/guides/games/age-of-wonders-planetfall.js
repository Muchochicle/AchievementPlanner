// Age of Wonders: Planetfall Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/age-of-wonders-planetfall.json), whose 80 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   718850 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "age-of-wonders-planetfall-achievement-guide",
    "category": "game",
    "gameSlug": "age-of-wonders-planetfall",
    "icon": "👽",
    "title": "Age of Wonders: Planetfall Achievement Guide",
    "summary": "A practical guide to all 80 Steam achievements in Age of Wonders: Planetfall - none are hidden. Covers the quest, leader-win and Doomsday-weapon achievements, the campaign and sandbox feats, and the expansion achievements from Revelations, Invasions and Star Kings / Oathbound.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Age of Wonders: Planetfall has 80 Steam achievements and none of them are hidden. The base game covers the fifteen named skirmish quests, winning as each of the six factions, winning a game with each of the six Doomsday-weapon victories, completing each faction campaign plus the final mission, and a broad set of sandbox feats (100 manual battles, a level-20 commander, Integration with an NPC faction, a Unifier victory, seven doctrines). The rest come from the Revelations, Invasions and Star Kings / Oathbound expansions, which add campaigns, faction-specific feats, and reaching Empire Level 200.",
                "Nothing is missable - skirmish games and campaigns are all replayable and there are no time-limited achievements. This is a long completion: six faction campaigns plus expansion campaigns, plus winning as every faction and with every Doomsday weapon, is a lot of full games.",
                "Tip: the fifteen named quests and the six Doomsday-weapon wins can be pursued in sandbox games you set up for them - low difficulty, small map - rather than only during campaigns, which speeds the count up considerably."
            ]
        },
        {
            "heading": "Quests, Leader Wins & Doomsday Weapons",
            "body": [
                "Completing the fifteen named quests (Invader through Harbinger), winning as an Amazon, Assembly, Dvar, Kir'Ko, Syndicate and Vanguard leader, and winning a game with the Celestian, Promethean, Psynumbra, Synthesis, Voidtech and Xenoplague Doomsday weapons.",
                "The achievements here: Invader (Complete The Invader quest); Emissary (Complete The Emissary quest); Builder (Complete The Builder quest); Warmonger (Complete The Warmonger quest); Diplomat (Complete The Diplomat quest); Operator (Complete The Operator quest); Economist (Complete The Economist quest); Technologist (Complete The Technologist quest); Negotiator (Complete The Negotiator quest); Conquerer (Complete The Conquerer quest); Patron (Complete The Patron quest); Spymaster (Complete The Spymaster quest); Unifier (Complete The Unifier quest); Emperor (Complete The Emperor quest); Harbinger (Complete The Harbinger quest); Galactic Matriarchy (Win as Amazon leader); Resistance is Futile (Win as Assembly leader); RedCore Mining Co. (Win as Dvar leader); Escape to Freedom (Win as Kir'Ko leader); Syndicate Collective (Win as Syndicate leader); Expeditionary Forces (Win as Vanguard leader); Four Noble Truths (Win a game using the Celestian Doomsday weapon); Well Done (Win a game using the Promethean Doomsday weapon); Hello darkness my old friend (Win a game using the Psynumbra Doomsday weapon); Singularity (Win a game using the Synthesis Doomsday weapon); Beyond the Void (Win a game using the Voidtech Doomsday weapon); The Alpha Strain (Win a game using the Xenoplague Doomsday weapon)."
            ]
        },
        {
            "heading": "Campaigns & Sandbox Feats",
            "body": [
                "Completing the Amazon, Vanguard, Dvar, Kir'Ko, Syndicate and Assembly campaigns and the final campaign mission, 25 NPC Faction Quests, 100 manual battles, a level-20 commander with 4 mods, NPC Integration, 3 vassals, a 5-unit tactical-operation kill, a Unifier Victory, converting 30 units, a multiplayer win, a Tier X skill, 7 doctrines, colonies of 3 races, max and min reputation, a 15-casus-belli war, a friendly-fire kill, an orbital-relay move, 10 anomalous sites in a scenario, an Eater of the Dead recruit, 500 Essence Charges, and winning interdimensional poker.",
                "The achievements here: Pustules Everywhere! (Complete the Amazon Campaign); Wide Awake (Complete the Vanguard Campaign); Consortium Dominium (Complete the Dvar Campaign); Homecoming King (Complete the Kir'Ko Campaign); The Art of Deception (Complete the Syndicate Campaign); Missing a Few Lungs (Complete the Assembly Campaign); Eye of the Storm (Complete the Final Campaign mission); Story Master (Complete 25 NPC Faction Quests); Galactic Warlord (Win 100 manual battles); Power Play (Get your commander to level 20 and have them equip 4 mods); The very best, like no one ever was (Achieve Integration with a NPC faction); Overlord (Have 3 vassals during a single playthrough); No one could survive that! (Kill 5 units with a single tactical operation); Mr. Universe (Achieve a Unifier Victory); Wololo (Permanently convert 30 units to your side); All Your Base (Win a multiplayer match); Futurist (Research a Tier X skill); Star Bureaucrat (Have 7 doctrines active); Xenophile (Have colonies of 3 different races in your empire); Paragon (Achieve maximum reputation); Pariah (Achieve minimum reputation); Justice Prevails (Declare war using at least 15 casus belli in a scenario); Friendly Fire (Kill your own unit by missing a shot); Only way to travel (Send a unit between two orbital relays); Numerous Anomalies (Complete 10 Anomalous Sites in a single Scenario.); Eater of the Dead (Recruit an Eater of the Dead from the Forgotten faction); It's Essential (Collect a total of 500 Essence Charges); Me, the Kingpin (Win a game of interdimensional poker); Digging Deep (Complete 40 Anomalous Sites)."
            ]
        },
        {
            "heading": "Expansions: Revelations, Invasions & Star Kings / Oathbound",
            "body": [
                "Refusing Valer-E, the Heritor Dynasty Doomsday weapon, the Revelations campaign sides, the Shakarn / Voidbringer / defector Invasions campaign endings, the no-blown-cover Celaudius-2 mission, Apex DNA, defeating an Invasion in a regular game, the Shakarn Deadeye and Infiltrator feats, capturing a colony in Reflective Dust, finding 15 sleeper agents, the Oathbound campaign and Vrascal's elixir, 13 fumbled attacks, 5 NPC Relics, 7 colony sectors, a maxed Colony Lord, a 300% exp planet, a Tyrannodon kill with an Aspirant, 7 critical hits in a round, and reaching Empire Level 200.",
                "The achievements here: Heartbreaker (Refuse Valer-E's proposal); A New Beginning (Win a game using the Heritor Dynasty Doomsday Weapon); Es'Teq Prophet (Side with Xito Rhemenses at the end of the Revelations campaign); Es'Teq Reformer (Side with Hatyl Es'Ran at the end of the Revelations campaign); Shakarn Loyalist (Win the Invasions campaign for the Shakarn); Nihilist (Win the Invasions campaign for the Voidbringers); Shakarn Defector (Win the Invasions campaign as an ally of the ELOP Confederation); Master Infiltrator (Complete the Celaudius-2 mission on high difficulty without your cover getting blown); Hear me roar! (Have a hero inject DNA to take the form of an Apex.); Against all odds (Defeat the Invasion during a regular scenario game.); Line 'em up! (Use a Shakarn Deadeye to hit 3 units by using a single ability); The superior version (While holoshifted, use the Infiltrator to kill the unit it transformed into); Now you see me… (Capture an enemy colony while covered in Reflective Dust); Hide and Seek (Over the course of a single game, find at least 15 hidden Shakarn sleeper agents); The Fifth Noble Truth (Complete the Oathbound campaign); Alchemist (Complete Vrascal's elixir in the first Oathbound mission without asking your scientists for help); Critical Failure (Make enemy units fumble 13 attacks in a single battle); Mr. Jones (Find and Collect 5 Relics belonging to NPC factions (i.e. any 5 of the 7)); We built this city (Have 7 sectors in a single colony); Is this seat taken? (Assign a Lord or Lady to a Colony while having maxed Colony Lord Skills); Stacked Deck (Complete a planet with a 300% exp multiplier or higher); Saint George (Use an Aspirant to kill a Savage Tyrannodon); Make your own luck (Score 7 successful critical hits in a single round of combat); The True Emperor (Reach Empire Level 200)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the six faction campaigns and the final campaign mission for those achievements and much of the story-feat pool.",
                "2. Set up sandbox games to win as each faction and with each of the six Doomsday weapons, doing the fifteen named quests across them.",
                "3. Do the sandbox feats (100 manual battles, level-20 commander, Integration, doctrines, conversions, tactical-op kills) during normal play.",
                "4. Play the Revelations and Invasions expansion campaigns and do their side-specific and mission feats.",
                "5. Play the Star Kings / Oathbound content and grind toward Empire Level 200 and the remaining combat feats.",
                "Tip: the six Doomsday-weapon wins are the most efficient stack - pick one secret-tech per game, rush its operations, and you also tend to pick up several named quests and a faction win in the same run."
            ]
        }
    ]
};
