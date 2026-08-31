// Ancestors Legacy Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/ancestors-legacy.json), whose 62 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   620590 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 7 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (TrueAchievements / Steam Community / game wikis) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "ancestors-legacy-achievement-guide",
    "category": "game",
    "gameSlug": "ancestors-legacy",
    "icon": "🛡️",
    "title": "Ancestors Legacy Achievement Guide",
    "summary": "A practical guide to all 62 Steam achievements in Ancestors Legacy (7 hidden). Covers the tutorial and base campaigns, the multiplayer, skirmish and squad-mastery achievements, the campaign secrets and mission challenges, and the DLC campaigns. Seven achievements are Steam-hidden and researched from community 100% guides.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Ancestors Legacy has 62 Steam achievements and seven are Steam-hidden (finding all secrets in each of the six base campaigns, and 'NO LIFE IS WORTH SAVING...' for 2000 peasant kills). The open fifty-five are the four training missions and every campaign completion (six base plus the Slavs, Teutons and Saracens DLC), a multiplayer / skirmish and squad-mastery block (win against Insane AI, specialise 10 squads, an elite unit, ranged-only wipeouts), and a long list of mission-specific challenges (defend a level with ranged units only, finish a battle under a time limit, no squads lost).",
                "The catalog marks it difficulty 3. Most is playing through every campaign; the mission challenges want you to replay specific missions with a restriction, and the 2000-peasant-kill hidden achievement is a farm.",
                "Tip: play all campaigns on the story path, collecting secrets as you go, then replay the flagged missions for their challenge achievements."
            ]
        },
        {
            "heading": "Tutorial & Base Campaigns",
            "body": [
                "The four training missions (basic, squad, economy, base building) and completing the campaigns of Ulf Ironbeard, Rurik, Edward, Harold, Rudolf of Habsburg and Mieszko.",
                "The achievements here: Off the Course (Complete the basic training mission); Rebuilding Forces (Complete the squad training mission); Unexpected Allies (Complete the economy training mission); The Last Impediment (Complete the base building training mission); Lindisfarne Riches (Complete Ulf Ironbeard's campaign); Rurik's Reign (Complete Rurik's campaign); Edward and Godwin (Complete Edward's campaign); Harold's Guerilla Warriors (Complete Harold's campaign); Rudolf of Habsburg (Complete Rudolf's campaign); Mieszko (Complete Mieszko's campaign)."
            ]
        },
        {
            "heading": "Multiplayer, Skirmish & Squad Mastery",
            "body": [
                "Starting, winning and losing a Multiplayer/AI match, a sub-8-minute win, a win against Insane AI, specialising 10 squads, 10 veterancy unlocks, 10 replenishments, an elite max-level squad, max squad armour, destroying a Gold-defence village and a building with a siege machine, defeating and recruiting every unit type, building and detecting traps, 50 resource-point trips, a ranged-only squad wipeout, and raising village defence and alarm.",
                "The achievements here: Firestarter (Start a match in Multiplayer or against AI); Conqueror (Win a match in Multiplayer or against AI); Fallen Warrior (Lose a match in Multiplayer or against AI); Indisputable (Win a Multiplayer match or AI Skirmish in less than 8 minutes.); Uber Micro (Win a match against an AI on Insane difficulty); Squad Proficiency (Specialize ten squads); Squad Veterancy (Unlock a veterancy ten times); Lost Ones (Replenish a squad ten times); Elite Unit (Reach maximum level with any squad); Rock-Solid (Raise a squad's armor to its maximum level); Through Defenses (Destroy a village with Gold defense ); War Machine (Destroy any building with a siege machine); War Veteran (Defeat each type of unit in the game at least once); Commander Veteran (Recruit each type of unit in the game at least once); It's a... trap. (Make an enemy trigger a trap you built); It's a TRAP! (Detect and destroy five enemy traps); Time to Work (Send peasants to work at a resource point 50 times); Untouchable (Defeat an entire enemy squad with ranged attacks only); Protector (Raise the defense level of your village); Panic (Raise the alarm in your village)."
            ]
        },
        {
            "heading": "Campaign Secrets & Mission Challenges",
            "body": [
                "The six Steam-hidden 'all secrets' achievements, the Steam-hidden 2000-peasant-kill 'NO LIFE IS WORTH SAVING...', and the Slavs mission challenges (sneak in undetected, stop every convoy, uncover the cult, destroy all ships, protect the catapults).",
                "The achievements here: A Ship That Doesn't Sink (Find all the hidden secrets in Ulf Ironbeard's campaign.); All for Rurik (Find all the hidden secrets in Rurik's campaign.); Edward Needs Those (Find all the hidden secrets in Edward's campaign.); Dunstan's Revenge (Find all the hidden secrets in Harold's campaign.); Vienna's Finest Armor (Find all the hidden secrets in Rudolf's campaign.); Under Mieszko's Banner (Find all the hidden secrets in Mieszko's campaign.); NO LIFE IS WORTH SAVING... (Kill 2000 peasants - the resource-gathering villagers with a name icon, not the peasant troop units - across your whole playtime.); Who is there? (Sneak into the enemy base undetected); Deer hunter (Don't let any of the enemy convoys pass through the outpost); Church of misery (Find out what happened to the villagers); Not on my watch! (Destroy all enemy ships); Whack a mole (Don't let the enemy attack any of the catapults from your team)."
            ]
        },
        {
            "heading": "DLC Campaigns: Slavs, Teutons & Saracens",
            "body": [
                "Completing Boleslav's, Konrad von Thierberg's and Salah ad-Din Yusuf's campaigns (and starting the latter two), plus their mission challenges - the Teutonic 'Goodfella', 'Elite Marksman', 'Teutonic Meticulousness', 'Trap Sweeper' and 'Blitzkrieg', and the Saracen 'Perfect Commander', 'Hard To Kill', 'Waterkeeper', 'No Pain, No Gain', 'Holy War', 'Assassinated', 'Boy Scouts', 'Tanned', 'Divine Duty' and 'Destructive Stinger'.",
                "The achievements here: Boleslav the Brave (Complete Boleslav's campaign); Goodfella (Get rid of all the bandits and save all the villagers in Pokarvis); Elite Marksman (Defend Lubawa only using ranged units); Teutonic Meticulousness (Capture all the villages near Christburg); Trap Sweeper (Disarm all the traps without being detected in Natangia forest); Blitzkrieg (Finish the Battle of Lidzbark in less than 25 minutes); Konrad von Thierberg (Complete Konrad's campaign); The Knights of the Cross (Start Konrad's campaign); Perfect Commander (Don't lose any squads in the mission 'Battle of The Horns of Hattin'); Hard To Kill (Complete all the quests with only one Hassassins squad in Akka); Waterkeeper (Claim all the wells in the mission 'Impatient Vengeance'); No Pain, No Gain (Claim all the villages and expand your base in 30 minutes in 'The Final Straw'); Holy War (Kill all the Christian preachers in the mission, 'Siege of Jerusalem'); Salah ad-Din Yusuf (Complete Salah ad-Din Yusuf's campaign); Righteousness of the Faith (Start Salah ad-Din Yusuf's campaign); Assassinated (Kill an enemy hero in a Multiplayer or Skirmish match with a Hassassin squad); Boy Scouts (Kill 5 enemy squads in 1 minute only using Grenadiers); Tanned (Win a match on Desert and Wilderness, Crusade of Anarchy or Scorching Quarrel); Divine Duty (Win a match as the Saracens in Anihilation Mode); Destructive Stinger (Destroy the enemy's Town Hall using Scorpions)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Do the four training missions, then play every base campaign (Ulf, Rurik, Edward, Harold, Rudolf, Mieszko), hunting the campaign secrets as you go.",
                "2. Play the Slavs, Teutons and Saracens DLC campaigns.",
                "3. Replay the flagged missions for their challenge achievements (ranged-only, time limits, no-losses, undetected).",
                "4. Do the multiplayer / skirmish achievements against AI: a fast win, a win vs Insane AI, and the squad-mastery counters.",
                "5. Farm 2000 peasant kills for 'NO LIFE IS WORTH SAVING...' on a mission with large enemy villages.",
                "Tip: the squad-mastery counters (specialise 10, replenish 10, 10 veterancies) all accumulate across the campaign, so you will likely have them before you finish - check what is left before grinding skirmishes."
            ]
        }
    ]
};
