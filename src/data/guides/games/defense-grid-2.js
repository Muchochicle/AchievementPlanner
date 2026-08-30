// Defense Grid 2 Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/defense-grid-2.json), whose 65 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   221540 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "defense-grid-2-achievement-guide",
    "category": "game",
    "gameSlug": "defense-grid-2",
    "icon": "🔫",
    "title": "Defense Grid 2 Achievement Guide",
    "summary": "A practical guide to all 65 Steam achievements in Defense Grid 2 - none are hidden. Covers the kill, medal and economy achievements, the tower-type and Special Weapon achievements, and the challenge-win, campaign and multiplayer achievements.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Defense Grid 2 has 65 Steam achievements and none of them are hidden. A block are kill counts (up to 50,000 aliens) and medal feats (silver and gold on every Story mission, 100 Gold Medals). A large section is building 100 of each of the ten tower types and using each of the six commander Special Weapons, plus Tower Expert (every tower and upgrade). The rest are the restriction-win challenges (win a late mission with only Gun / Inferno / Cannon / level-1 towers), the campaign and mission-6 command-shuttle feats, the Tower Augmentation items, the Grinder survival challenges, and the multiplayer modes.",
                "Nothing is missable - missions and challenges are all replayable and the counters accumulate. The completion's long poles are Alien Tears (gold on every Story mission), the restriction-win challenges on late maps, and the Super Grinder 100-wave survival.",
                "Tip: play the Story campaign for the medal and campaign achievements, then farm the tower-type and kill counters on Grinder mode (which throws endless waves), and do the restriction-win challenges on the earliest chapter-4 map that allows them."
            ]
        },
        {
            "heading": "Kills, Medals & Economy",
            "body": [
                "1 / 100 / 1,000 / 10,000 / 50,000 kills, a silver and a gold medal, an alien boss kill, selling 10 towers, winning with 1,000 / 5,000 / 10,000 resources left, 20 and 50 towers in one mission, selling 10+ in one mission, recovering and defending power cores, upgrading a tower, and the reload-checkpoint feats.",
                "The achievements here: Eradicator (Kill 100 aliens.); First Blood (Kill 1 alien.); Annihilator (Kill 10,000 aliens.); Exterminator (Kill 1000 aliens.); Xenocide (Kill 50,000 aliens.); Field Promotion (Earn a silver (or better) medal.); Flawless Victory (Earn a Gold Medal.); Salvage Rights (Kill an alien boss creature. (Juggernaut, Rumbler, Turtle, or Crasher)); Liquidator (Sell 10 towers.); Surplus (Win a mission with at least 1,000 resources remaining.); Penny Pincher (Win a mission with at least 5,000 resources remaining.); Filthy Rich (Win a mission with at least 10,000 resources remaining.); Arsenal (Build 20 towers of any type in one mission.); Full Defense (Build 50 towers of any type in one mission.); Indecisive (Sell 10 towers or more in a single mission.); Happy Returns (Recover a loose core.); Hey! That's mine! (Kill an alien carrying a power core.); Yellow Beats Green (Upgrade a level 1 tower to a level 2 tower.); Retry (Use the Reload Checkpoint option.); If At First You Don't Succeed, Retry Again (Use the reload checkpoint option five times in a single mission.)."
            ]
        },
        {
            "heading": "Tower Types & Special Weapons",
            "body": [
                "Building 100 of each tower type (Gun, Inferno, Laser, Temporal, Meteor, Tesla, Cannon, Missile, Concussion, Boost), using each of the six commander Special Weapons (Orbital Laser, Temporal Cannon, Resource Reinforcement, Tower Overcharge, Core Teleport, Precision Targeting), Tower Expert (every tower and upgrade), a close-call core save, a no-sell win, a one-of-each-tower mission, and a fully-upgraded-every-tower mission.",
                "The achievements here: Leadhead (Build 100 Gun towers.); Burn Baby Burn (Build 100 Inferno towers.); Pew Pew (Build 100 Laser towers.); Not So Fast (Build 100 Temporal towers.); Great Ball of Fire (Build 100 Meteor towers.); High Voltage (Build 100 Tesla towers.); Kaboom! (Build 100 Cannon towers.); The Not-So-Friendly Skies (Build 100 Missile towers.); Head Trauma (Build 100 Concussion towers.); Would You Like a Boost With That? (Build 100 Boost towers.); Death From Above (Use the Orbital Laser Special Weapon (General Cai).); No Fast Blast (Use the Temporal Cannon Special Weapon (Colonel Rissler).); More Please (Use the Resource Reinforcement Special Weapon (Professor Briel).); Pumped Up Towers (Use the Tower Overcharge Special Weapon (Advisor Zacara).); Go To Your Home (Use the Core Teleport special weapon (Professor Taylor).); Shoot That Guy (Use the Precision Targeting Special Weapon (Rear Admiral Phillips).); Tower Expert (Build every tower and every upgrade for each tower.); Close Call (Save a core that is less than 10 seconds away from the map's exit point.); No Sale (Win any mission without selling any towers.); Diversity (Build 1 of each tower type in any single mission.); What IS that? (Inspect 10 aliens.); Full House (Build and fully upgrade each tower type in one mission.)."
            ]
        },
        {
            "heading": "Challenge Wins, Campaign & Multiplayer",
            "body": [
                "Winning a chapter-4+ mission with only Gun / Inferno / Cannon / level-1 towers, completing the Story campaign, silver and gold on every Story mission, 100 Gold Medals, a level-3-only no-sell win, the Tower Augmentation feats, the mission-6 command-shuttle feat, a no-shuttle gold on mission 19, the 3x speed feat, the multiplayer modes (Competitive, DG Fighter, Co-Op bronze and gold), Chapter 1 completion, the Grinder and Super Grinder 100-wave survivals, and a zero-cores-captured chapter-4+ win.",
                "The achievements here: Gun Crazy (Using only Gun towers, Win any chapter 4 (or later) mission.); Firebug (Using only Inferno towers, Win any chapter 4 (or later) mission.); Shell-shocked (Using only Cannon towers, Win any chapter 4 (or later) mission.); Minimalist (Using only level 1 towers, Win any Chapter 4 (or later) mission.); Base Defender (Complete the single player campaign in Story Mode.); Planet Defender (Earn a silver medal (or better) on all missions in the Story mode.); Master Strategist (Earn 100 Gold Medals on any missions.); Alien Tears (Earn a gold medal on every mission in Story mode.); Full Potential (Win a chapter 4 (or later) mission with level 3 towers only and no selling.); Now With Sprinkles (Enable a Tower Augmentation item on any tower.); 10 Items No Less (Enable a Tower Augmentation Item on 10 Towers.); Master Builder (Use the command shuttle to move 6 map sections in Mission 6.); The Path Most Traveled (Win a Gold medal on mission 19 without using the Command Shuttle.); Confident (Use the speed up control at 3x for a total of 60 seconds in any mission.); Thanks For Playing! (Earn Bronze on a Single Player mission.); Warning Shots (Play a Competitive Multiplayer mission.); Winning Shots (Earn a Victory in a DG Fighter Multiplayer mission.); Brothers in Arms (Earn Bronze in a Co-Op Multiplayer mission.); Go Team! (Earn Gold in a Co-Op Multiplayer mission.); Boot Camp (Finish all the missions in Chapter 1 in Story Mode.); Siege Breaker (Survive 100 waves on Grinder challenge mode on any mission.); Master Siege Breaker (Survive 100 waves on any Super Grinder challenge mode.); Untouchable (Beat a Chapter 4 mission or higher with zero cores captured.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the Story campaign for Base Defender, and earn at least silver on every mission along the way.",
                "2. Farm the kill counters (up to 50,000) and the 100-of-each-tower-type achievements on Grinder mode.",
                "3. Use each of the six Special Weapons and do Tower Expert (build every tower and upgrade).",
                "4. Do the restriction-win challenges on the earliest chapter-4 map: Gun-only, Inferno-only, Cannon-only, level-1-only, and the zero-cores-captured win.",
                "5. Do the multiplayer achievements, the Super Grinder 100-wave survival, and go back for gold on every Story mission (Alien Tears) and 100 Gold Medals total.",
                "Tip: for the single-tower-type challenges, pick the shortest chapter-4 map, build densely at the first choke, and lean on the map's own Special Weapon and boost placement - the restriction only bans the other tower types, not the commander powers."
            ]
        }
    ]
};
