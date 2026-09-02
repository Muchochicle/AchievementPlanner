// Enlisted Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/enlisted.json), whose 60 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   2051620 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "enlisted-achievement-guide",
    "category": "game",
    "gameSlug": "enlisted",
    "icon": "🎖️",
    "title": "Enlisted Achievement Guide",
    "summary": "A practical guide to all 60 Steam achievements in Enlisted - none are hidden. None of the 60 achievements are hidden - every description is Steam's own text. Covers class and weapon feats, large kill and vehicle totals, kill streaks, military ranks, research tiers, Battlepass stages, and per-battle performance milestones.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Enlisted has 60 Steam achievements and none of them are hidden. Enlisted is Darkflow's free-to-play squad-based WWII shooter where each player controls a squad of AI soldiers. None of its 60 achievements are hidden. The list is a long cumulative grind: class and weapon first-kills and 10-kill feats, large kill totals (5,000 defending, 5,000 attacking, 5,000 with explosives), vehicle-destruction totals, kill streaks, military ranks, research tiers, Battlepass stages, and per-battle performance milestones.",
                "The biggest asks are the 5,000-kill totals, the 250- and 500-vehicle destruction totals, 100 hours in battle, reaching the Marshal rank, and completing 50 Battlepass stages.",
                "The catalog marks it difficulty 3 and single-playthrough. Nothing is missable - everything accumulates over dozens of hours - and a few of the single-battle feats (20 headshots, 30 kills with one class, capture 10 points) just need one good match."
            ]
        },
        {
            "heading": "Class & Weapon Feats",
            "body": [
                "The first-kill and 10-kill achievements for each weapon type and class - bolt-action, SMG, pistol, machine gun, sniper, grenades, melee, the flamethrower, mortar, radioman artillery, engineer fortifications, paratroopers, medics, and the tank-commander and long-range hand-weapon kills.",
                "The achievements here: Trooper (Kill 1 enemy using an bolt-action rifle); First Blood (Get your first kill); The Paratrooper (Kill 250 enemies with a Paratrooper); The Trickster (Kill tank commander leaning out of the hatch); Bad Doctor (Kill 25 enemies with a Medic); The Hunter (Kill 10 enemies with headshots); The Eagle Eye (Kill 10 enemies with a hand weapon from more than 75 meters distance); The Technician (Kill 10 enemies using a tank, aircraft or APC); Close combat (Kill an enemy using a melee weapon); Quick draw (Kill 10 enemies using a pistol); Assaulter (Kill 1 enemy using a submachine gun or an assault rifle); Gunner (Kill 10 enemies using a machine gun); Engineer (Build 1 fortification object using engineer class soldier); Grenadier (Kill 1 enemy with hand grenades); Radioman (Kill 10 enemies using artillery fire called by Radioman class soldiers); Mortarman (Kill 10 enemies using a mortar); Flametrooper (Kill 10 enemies using a flamethrower or ampulomet)."
            ]
        },
        {
            "heading": "Kill Totals & Streaks",
            "body": [
                "The large kill totals (5,000 attacking, 5,000 defending, 5,000 with explosives), the vehicle-destruction totals (250 vehicles, 250 aircraft, 500 tanks, 100 with anti-tank weapons, 100 tanks-and-aircraft), the 10-, 50- and single-battle kill streaks and squad wipes, and 20 headshots in one battle.",
                "The achievements here: Wild division (Complete 50 battles by killing at least 100 enemy soldiers); Cannon master (Destroy 250 enemy vehicles (tanks, aircraft and APC) using engineer-built guns); Chief in the sky (Destroy 250 enemy aircraft); Alles Kaput (Destroy 500 enemy tanks); God of War (Kill 5000 enemies with rockets or bombs or artillery fire called by Radioman class soldiers); The Berserk (Perform 50-kill streak with a single soldier without dying); Chief of Mining (Destroy 100 enemy vehicles with anti-tank mines); Trap Master (Kill 10 enemies with anti-personnel mine in single battle); The Desperado (Perform 10-kill streak with a single soldier without dying); The Armor-piercer (Destroy 10 enemy tanks); Burning armor (Destroy 1 enemy tank); Sniper elite (Kill 20 enemies with headshots in a single battle); Wipeout (Kill all soldiers of one enemy infantry squad in less than 5 seconds); Destroyer (Destroy 100 tanks and aircraft); Specialist (Kill 30 enemy soldiers in one battle using flamethrower or mortar)."
            ]
        },
        {
            "heading": "Ranks, Research & Battlepass",
            "body": [
                "The military ranks from Sergeant up to Marshal, research tiers 2 to 5 and 2 / 3 / 4 / 5 / 20 total researches, and completing 2 / 25 / 50 Battlepass stages.",
                "The achievements here: Marshall's baton (Achieve the military rank \"Marshal\"); General's epaulets (Achieve the military rank \"Brigadier General\"); Officer Academy graduate (Achieve the military rank \"Second Lieutenant\"); Excellent combat training (Complete a total of 25 Battlepass stages); Knowledge is Power (Achieve research tier 3 in any country); Sergeant school graduate (Achieve the military rank \"Sergeant\"); Welcome to Battlepass (Complete a total of 2 Battlepass stages); Step towards progress (Achieve research tier 2 in any country); Research II (Complete a total of 2 researches for any country); Research III (Complete a total of 3 researches for any country); Research IV (Complete a total of 4 researches for any country); Research V (Complete a total of 5 researches for any country); General (Complete a total of 20 researches for any country); Medal of honor (Complete a total of 50 Battlepass stages)."
            ]
        },
        {
            "heading": "Battle Performance",
            "body": [
                "Completing battles as Battle Hero, 50 'Wild Division' 10-kill battles, effective rally points and ammo boxes, capturing 25 strategic objectives, a 10-win streak, a first and 10 wins, top-30% and top-1 finishes, 100 hours in battle, capturing 10 points in one match, squad level 35, and a five-perk level-5 soldier.",
                "The achievements here: Battle hero (Complete 50 battles as \"Battle Hero\"); Genius Engineer (Your rally points or mobile spawn points on APC have been used by your teammates 100 times); Master of Defense (Kill 5000 enemies while defending a strategic point); Master of Offense (Kill 5000 enemies while attacking a strategic point); The Invader (Capture or destroy 25 strategic objectives); The Supplier (Your Ammo boxes have been used by your teammates); The Winner (Win 10 battles in a row. If a player left the battle early, then this breaks the winning streak even if the player's team won. Custom battles and battles in events do not affect winning streaks); Natural born leader (Finish the battle in Top 30% of your team); First Victory (Win a battle); Veteran (Spend 100 hours in battles); Conqueror (Capture 10 points in one battle); Best of the best (Achieve top 1 in battle); Special forces (Reach level 35 for any given squad); Professional (Get a level 5 soldier, with five perks)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the campaigns you enjoy and pick up the class and weapon first-kill and 10-kill achievements as you unlock each soldier type.",
                "2. Focus research on one country to move quickly through the research-tier and total-research achievements.",
                "3. Play through Battlepass seasons - the 2 / 25 / 50 stage achievements are the longest single commitment.",
                "4. Grind the 5,000-kill and vehicle-destruction totals over normal play - a defensive infantry squad and a tank crew cover most of them.",
                "5. Chase the single-battle feats (20 headshots, 30 kills with one class, capture 10 points, top 1) on a match where your team is dominating.",
                "Tip: the Marshal rank and 100 hours in battle are pure playtime - they will fall on their own long after everything else, so don't grind specifically for them."
            ]
        }
    ]
};
