// AirMech Strike Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/airmech-strike.json), whose 91 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   206500 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "airmech-strike-achievement-guide",
    "category": "game",
    "gameSlug": "airmech-strike",
    "icon": "🚁",
    "title": "AirMech Strike Achievement Guide",
    "summary": "A practical guide to all 91 Steam achievements in AirMech Strike - none are hidden. Covers the tutorial and core tank-kill and win feats, the per-AirMech and per-unit mastery challenges, and the level, match-count, Faction and Challenge-star progression.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "AirMech Strike has 91 Steam achievements and none of them are hidden. They cover the tutorial and early feats (build 10 units, destroy 10 / 20 / 50 tanks in a match, 1000 tanks lifetime, win online and 10 online), the 1vN AI wins and no-build \"Replicators Down!\" challenges, a large per-AirMech mastery block (Saucer abductions, Helix missiles and rockets, Bomber bombs and melee, Striker power sword, and more), AirMech and account level milestones, match-count totals, Faction membership, Power Play feats, and the Challenge-star achievements (12 / 24 / 36 stars).",
                "Nothing is missable - every counter is cumulative and many feats can be done offline against AI. The longest are the 1000-lifetime-tank kill, 100 matched games, and reaching player level 30.",
                "Tip: most per-AirMech achievements just need that AirMech equipped and one strong match - run them offline against 1v2 or 1v3 AI where you can farm units freely and there is no time pressure."
            ]
        },
        {
            "heading": "Onboarding & Core Feats",
            "body": [
                "The tutorial, building 10 units, the 10 / 20 / 50 tanks-in-a-match and 1000-lifetime-tank kills, online wins, the 1v2 / 1v3 / fast-1v3 AI wins, the no-build \"Replicators Down!\" challenges, and the first per-AirMech feats - Saucer abductions, Helix, Bomber and Striker.",
                "The achievements here: Getting Started (Complete the Tutorial.); Getting Started (part 2) (Build 10 or more units in a single match, online or offline, win or lose.); Destroy 10 Tanks (Destroy 10 Tanks with your AirMech, in a single match; online or offline.); Destroy 1000 Tanks (Destroy 1000 Tanks with your AirMech, over the lifetime of your account.); Destroy 20 Tanks (Destroy 20 Tanks with your AirMech, in a single match; online or offline.); Destroy 50 Tanks (Destroy 50 Tanks with your AirMech, in a single match; online or offline.); Win online Match (Be on the winning team in any match online!); Win 10 online Matches (Win 10 Online Matches); Win 1v2 Match (Win a 1v2 Match against AIs on any map.); Win 1v3 Match (Win a 1v3 Match against AIs on any map.); Fast Win 1v3 Match (Win a 1v3 Match against AIs on any map in under 10 minutes.); Replicators Down! (part 1) (Win a Match on any map without building anything.); Replicators Down! (part 2) (Win a Match on any map in 1v2 mode without building anything.); Close Encounter (part 1) (Abduct 10 Enemy units with the Saucer, on any map, win or lose.); Close Encounter (part 2) (Abduct 25 Enemy units with the Saucer, on any map, and win the match.); Helix Superiority (part 1) (Use the air missiles on the Helix to destroy 5 or more enemy AirMechs in a single match.); Helix Superiority (part 2) (Use the ground rockets on the Helix to destroy 30 or more enemy units in a single match.); Bomber Superiority (part 1) (Use the Bomber AirMech to destroy 30 or more enemy units with the Bombs ability in a single match.); Bomber Superiority (part 2) (Use the Bomber AirMech's melee attack to decimate 30 or more enemy units in a single match.); Striker Superiority (part 1) (Use the Striker AirMech's power sword melee attack to destroy 10 or more enemy units in a single match.  Online or Offline.); Striker Superiority (part 2) (Use the Striker AirMech's power sword melee attack to destroy 15 or more enemy units and 2 or more enemy AirMechs in a single match.  Online or Offline.); Striker Superiority (part 3) (Use the Striker AirMech's power sword melee attack to destroy 20 or more enemy units and 3 or more enemy AirMechs in a single Online match, and win.); Striker Samurai (Use the Striker AirMech's power sword melee attack to destroy 1000 or more enemy units over the lifetime of your account.); Osprey Debut (Use the Osprey AirMech to help win an Online Co-op match against AI.); Osprey - Combat Support (Use the Osprey AirMech to heal friendly units and AirMechs.); Mine Layer (part 1) (Use mines to destroy at least 15 enemy units in a match, and go on to win the match.); Mine Layer (part 2) (Destroy 1000 enemy Units with Mines.); Mine Sweeper (part 1) (Deactivate 5 or more enemy mines in a single online match, and win.); Mine Sweeper (part 2) (Deactivate 50 or more enemy mines.); Mine Sweeper (part 3) (Deactivate 200 or more enemy mines.)."
            ]
        },
        {
            "heading": "AirMech Mastery & Unit Feats",
            "body": [
                "AirMech and account level milestones, the per-AirMech ability feats across the roster, Booster and Air-mode wins, and the per-unit destruction and construction challenges.",
                "The achievements here: High Level (Reach Level 10 in any AirMech in an online or offline game.); Max Level (Reach Level 15 in any AirMech in an online or offline game.); Miser (Reach Level 10 in any AirMech in an online or offline game and win without spending any Ability points.); A Win without Tanks (Win a match, online or offline, without building any Tanks.); A Win without Turrets (Win a match, online or offline, without building any Turrets.); Replicators Failing! (Win a match, online or offline, without building any Tanks or Turrets.); My hands are clean... (Win a match, online or offline, without destroying any Units with your AirMech.  Let your units do the dirty work!); Gladiator (Accumulate 100 Direct AirMech Kills online against human opponents.); AirMech Phalanx (Shoot down 500 enemy missiles.); Destroy 1000 Creeps (Destroy 1000 Creeps with your AirMech, over the lifetime of your account.); Death from Above (Destroy 1000 Enemy Units with your Artillery, over the lifetime of your account.); Kicking Tires (Use each of the AirMech types at least once in game; online or offline.); Blood Thirsty (Destroy 3 Human piloted AirMechs in the first 3 minutes of an online match.); Can't Touch This (Destroy 100 Anti-Air enemy units (HAAT and Seeker).); Turret Breaker (Destroy 200 enemy Turrets with Bombs.); Boosted (Win a match, online or offline, using Boosters, all in Air mode.); Mince Meat (Get 300 unit kills using Gatties.); Project Lehman (Destroy 100 Money Makers); Map Control (part 1) (Capture 3 neutral outposts in a single online game and win.); Map Control (part 2) (Capture 50 neutral outposts.); Map Control (part 3) (Re-capture 250 enemy controlled outposts.); Fortress Assault (part 1) (Inflict 500 damage on the Enemy Fort's shields with your AirMech in an online match and win.); Fortress Assault (part 2) (Accumulate 10,000 damage inflicted on the armor of your enemies Fortresses.); Nerves of Steel (Accumulate 10 human piloted enemy AirMech kills each made while your own health is less than 5%.); Damage Inc. (Do 1,000,000 damage with your AirMech.); Master Thief (Abduct 200 Enemy units with the Saucer.); Hellfire (Use the ground rockets on the Helix to destroy 500 enemy units.); Kill 250 Tanks (Destroy 250 Tanks with your AirMech, over the lifetime of your account.); Moving on Up (Win an online match after reaching player level 10); Going Pro (Win an online match after reaching player level 20)."
            ]
        },
        {
            "heading": "Progression, Factions & Challenges",
            "body": [
                "Winning at player level 30, 100 matched games, joining or creating a Faction, the Power Play +2 feat, and accumulating 12, 24 and 36 stars in the Challenges.",
                "The achievements here: King of the Mountain (Win an online match after reaching player level 30); On a Roll (Win 3 consecutive online matches.); Rock you like a Hurricane! (Win an online game where 100% of the enemy's base health is taken within 1 minute before being destroyed.); Interceptor (Accumulate 20 human piloted enemy AirMech kills, each made while the enemy is carrying a unit.); Finish Him! (Make the killing blow on the enemy fort with your AirMech in an online game, 5 times.); Called to Duty (Win a match using only infantry units.); New Pair of Shoes (Win in an online match using a custom skin); Costume Quest (Win in a 3v3 PVP with all teammates using different custom skins); Masquerade Ball (Win in a 3v3 PVP with all players using different custom skins); Valedictorian (Win in a 3v3 online game at least 3 levels above anyone else.); Tank Killer (Destroy 10 Tanks from the Air with the Warthog AirMech); Creep Killer (Destroy 50 Creeps from the Air with the Warthog AirMech); Guns Blazin' (Destroy 10 enemy AirMechs in ground form from your airborn Warthog.); From Below (Destroy 10 enemy AirMechs in air form from your grounded Warthog.); Let's do this (Complete 10 matched games.); Coming back for more! (Complete 100 matched games.); Match made in heaven (Win 20 matched games.); Serious Competitor (Win 200 matched games.); So good! (Share 28 cakes.); Can't stop eating! (Share 496 cakes.); I put on my robe and Santa hat. (Win in an online match with a total Team Holiday Spirit of 100% or greater.); Deck the halls! (Win in an online match with a total Team Holiday Spirit of 250% or greater.); FA LA LA LA LA, LA LA LA LA! (Win in an online match with a total Team Holiday Spirit of 500% or greater.); Functional and Stylish (Win in an online match with a total Team Style of 100% or greater.); 20% Cooler (Win in an online match with a total Team Style of 250% or greater.); Do a barrel roll! (Win in an online match with a total Team Style of 500% or greater.); United in Combat (Join or create a Faction); Power Play +2 (In a 2v2 Matchmade game, be in a position where all enemy AirMechs are destroyed while your teams is full force.); Challenger: 12 Stars (Accumulate 12 Stars in the Challenges); Challenger: 24 Stars (Accumulate 24 Stars in the Challenges); Challenger: 36 Stars (Accumulate 36 Stars in the Challenges)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Do the tutorial and the early tank-kill and unit-build feats.",
                "2. Farm the per-AirMech ability challenges offline against 1v2 / 1v3 AI, one AirMech at a time.",
                "3. Play online for the win, level-30 and matched-game achievements.",
                "4. Join a Faction and work the Power Play feat in 2v2 matchmade games.",
                "5. Grind the Challenge mode for 12, then 24, then 36 stars.",
                "Tip: the 1000-lifetime-tank kill and 100-matched-games achievements are pure time - they will complete on their own while you chase everything else, so do not grind them deliberately."
            ]
        }
    ]
};
