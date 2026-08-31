// A.R.E.S.: Extinction Agenda Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/ares-extinction-agenda.json), whose 24 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   92300 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "ares-extinction-agenda-achievement-guide",
    "category": "game",
    "gameSlug": "ares-extinction-agenda",
    "icon": "🤖",
    "title": "A.R.E.S.: Extinction Agenda Achievement Guide",
    "summary": "A practical guide to all 24 Steam achievements in A.R.E.S.: Extinction Agenda - none are hidden. Covers the completion and no-repair / no-death runs, the Synthesis Soldier ranks, the perfect boss fights and Hard Mode boss feat, and the collectibles and combat feats.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "A.R.E.S.: Extinction Agenda has 24 Steam achievements and none of them are hidden. Several cover completion - finish the game, finish all stages with no repair kits, finish with no deaths - and the Synthesis Soldier ranks A, S and SS. A boss block asks for a \"perfect\" (no-damage) fight against each of the four bosses and a Hard Mode run defeating every boss with only the Zytron Blaster. The rest are collectibles (all Data cubes, 1000 of each material) and combat feats (1000 kills, a 99-combo, EMP stuns, Dash and Grenade kill counts, Valkyl's cannon multi-kill, a weapon at max level, and tricking a Bomber into a Zytron Walker).",
                "The catalog marks it as roughly two playthroughs - the no-repair, no-death and rank runs plus the Hard Mode boss run - and nothing is missable, since stages replay and every counter is cumulative.",
                "Tip: the perfect boss fights are pattern-recognition - learn each boss on a normal run, then do a dedicated no-damage attempt; the SS rank comes from a fast, high-combo, low-damage full clear."
            ]
        },
        {
            "heading": "Completion & Ranks",
            "body": [
                "Finishing the game, finishing all stages with no repair kits and with no deaths, the Synthesis Soldier A / S / SS ranks, watching every cut-scene, and the Hard Mode all-bosses Zytron Blaster run.",
                "The achievements here: Primary Objective (Finish the game once); Unlimited Energy (Finish all of the stages without using a single repair kit); Die Another Day (Finish all of the stages without dying); I am the Destroyer (Achieve Synthesis Soldier rank 'A'); Here is my True Strength (Achieve Synthesis Soldier rank 'S'); Soldier of the Universe (Achieve Synthesis Soldier rank 'SS'); It's a Long Story (Watch all the cut-scenes without skipping); Boss Headhunter (In Hard Mode, defeat all the bosses using only the Zytron Blaster)."
            ]
        },
        {
            "heading": "Bosses, Collectibles & Combat",
            "body": [
                "The perfect (no-damage) fights against Goliath, Carrion, Sentinel and the Prime Guardian, all Data cubes, 1000 kills, 1000 of each material, Valkyl's cannon multi-kill, a max-level weapon, 10 EMP stuns, a 99-combo, the tutorials, the Dash and Grenade kill counts, the first repair machine, and the Bomber-into-Walker trick.",
                "The achievements here: Don't Come Back Again (Perfect the Goliath boss fight); You Should Have Two (Perfect the Carrion boss fight); Fight with the Same Size (Perfect the Sentinel boss fight); Whatever Your Size Is (Perfect the Prime Guardian boss fight); Bookworm (Collect all the Data cubes); Extinction of the Robots (Destroy 1000 enemies); I Am Trashman (Collect 1000 units of each material type); Burst with the Energy (Destroy 5 or more enemies, at once with Valkyl's Zypher Cannon); Weapon At Maximum (Upgrade one of your weapons to its maximum level); Master of Stun (Stun 10 enemies with the EMP grenade); Ninety-Nine Combo (Maximize your attack combo); Ready For Action (Finish all of the in-game tutorials); Close Combat Fighter (Destroy 10 enemies, using your Dash Attack); Art of Destruction (Destroy 20 enemies, using your Grenade Attack); Where is the Emergency? (Discover and use your first repair machine); It's getting too hot! (Trick a Bomber to hit and destroy a Zytron Walker (LA))."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through the game once on Normal for \"Primary Objective\", learning the boss patterns.",
                "2. Do the collectible and combat feats (Data cubes, materials, EMP stuns, Dash/Grenade kills, the 99-combo) on a second run.",
                "3. Do a no-repair-kit and a no-death run (they can be the same careful run).",
                "4. Do dedicated no-damage attempts on each of the four bosses.",
                "5. Do a Hard Mode run defeating every boss with only the Zytron Blaster, and push for the SS rank on a fast, clean full clear.",
                "Tip: the SS rank rewards speed, a high combo and minimal damage - once you know the levels, a confident aggressive run scores far better than a cautious one."
            ]
        }
    ]
};
