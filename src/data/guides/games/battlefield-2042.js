// Battlefield 2042 Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/battlefield-2042.json), whose 34 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1517290 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "battlefield-2042-achievement-guide",
    "category": "game",
    "gameSlug": "battlefield-2042",
    "icon": "🏗",
    "title": "Battlefield 2042 Achievement Guide",
    "summary": "A practical guide to all 34 Steam achievements in Battlefield 2042 - none are hidden. Covers the player-level milestones, the T1 Mastery badges for Specialists, weapons, vehicles and gadgets, the per-Specialist gadget feats, and the cumulative combat, vehicle and support goals across All-Out Warfare and Hazard Zone.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Battlefield 2042 has 34 Steam achievements and none of them are hidden. They are all multiplayer: player-level milestones (5, 15, 25), a T1 Mastery badge with any Specialist, weapon, vehicle and gadget, a batch of Specialist-specific gadget feats (Mackay's grappling hook distance, Dozer's ballistic shield kills, Boris' sentry gun damage, Falck's healing, Angel's loadout crates), and a long list of cumulative combat and support goals (500 infantry kills, 50 vehicle kills, 50 vehicles destroyed, 100 revives, 50 resupplies, travel distances on foot and in vehicles) plus the Hazard Zone extraction achievements.",
                "Nothing is missable - every counter accrues across as many matches as you like. The single longest is \"The Winner Takes It All\" (win 42 rounds across all game modes); the T1 Mastery badges also take sustained play with one Specialist or weapon.",
                "Tip: pick one Specialist and one weapon to main early and let their T1 Mastery badges build while you chip at the cumulative kill, revive and resupply counters - most of the list completes as a by-product of playing the objective in Conquest and Breakthrough."
            ]
        },
        {
            "heading": "Progression & All-Round Mastery",
            "body": [
                "The player-level milestones (5, 15, 25), a quad-kill on defence, 100 Conquest captures, 25 and 50 Hazard Zone extractions and Data Drives, 42 round wins, and a T1 Mastery badge with any Specialist, weapon, vehicle and gadget.",
                "The achievements here: Adapt and Overcome (Reach Player Level 5); Making Dunn Proud (Reach Player Level 15); Luck of the Irish (Reach Player Level 25); Dead in their tracks! (Get a quad-kill while defending an objective); Command and Conquest  (Capture 100 objectives in Conquest); Escape Artist (Successfully extract 25 times in Hazard Zone); Pack Rat (Successfully extract with 50 Data Drives in Hazard Zone); The Winner Takes It All (Win 42 rounds across all game modes); Universal Soldier (Earn a T1 Mastery Badge with any Specialist); Gun Master (Earn a T1 Mastery Badge with any Weapon); Wheeled Warrior  (Earn a T1 Mastery Badge with any Vehicle); Jack of all Trades (Earn a T1 Mastery Badge with any Gadget or Throwable)."
            ]
        },
        {
            "heading": "Specialist Gadget Feats",
            "body": [
                "The Specialist-specific achievements - a parachuting rocket-launcher air kill, Mackay's grappling-hook travel, Dozer's ballistic-shield kill streak, Boris' sentry-gun damage, Falck's syrette-pistol healing, and Angel's loadout crates.",
                "The achievements here: Aerial Destroyer (Destroy an air vehicle with a rocket launcher while parachuting); A bird?  A plane? (Wingsuit fly from the Rocket Hangar to the Launch Pad on Orbital); Going Places (Travel for 1000m in one round with Mackay's Grappling Hook); Doze this (Perform 7 kills in one life with Dozer's SOB-8 Ballistic Shield); B gun's dry (Inflict 2500 damage in one round while defending objectives using Boris' SG-36 Sentry Gun); Doctor Falck in the house (Heal 3000 points of damage within a single round with Falck's S21 Syrette Pistol); Happy birthday (Call in 15 Loadout Crates with Angel)."
            ]
        },
        {
            "heading": "Combat, Vehicle & Support Feats",
            "body": [
                "The cumulative and single-round combat goals - 500 infantry kills, 50 vehicle kills, 50 vehicles destroyed, 100 revives, 50 resupplies, ribbon and squad achievements, travel-distance goals, and the melee, headshot, roadkill and clean-extraction feats.",
                "The achievements here: Squad Wiper (Kill 500 enemy soldiers while not in a Vehicle); War machine (Killed 50 enemies while in Vehicles); I'm Five by Five, B (Earn a Ribbon III of each type); Tool Time (Repair 1000 damage on Vehicles in one round); Wrecking Crew (Destroy 50 Vehicles); No-one gets left behind (Revive 100 teammates); Thank you, Santa (Resupply 50 teammates); Clean Exit (Successfully extract in Hazard Zone without anyone in the squad having died); Foot Soldier (Travel 25 km without using vehicles); CQC Specialist (Perform 20 melee kills in one round); Deadshot (Perform 20 headshot kills in one round); One Careful Owner (Perform a roadkill with an air vehicle); Good Company (Earn first place as a squad); Showoff (Outstanding performance achieved); Burnout (Travel 15km using ground vehicles)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play Conquest and Breakthrough normally to reach player levels 5, 15 and 25 and let the cumulative kill, revive and resupply counters build.",
                "2. Main one Specialist, one weapon, one vehicle and one gadget type to earn their four T1 Mastery badges.",
                "3. Set up the Specialist gadget feats deliberately with the right character equipped - most are one good round.",
                "4. Grind the travel-distance, single-round melee/headshot and Hazard Zone extraction achievements.",
                "5. Keep playing toward 42 round wins across all modes - the last box to tick.",
                "Tip: the single-round achievements (20 melee kills, 20 headshots, 2500 sentry damage) are far easier on a small, infantry-heavy mode like a 64-player Breakthrough chokepoint than on open Conquest maps."
            ]
        }
    ]
};
