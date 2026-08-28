// Left 4 Dead's Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/left-4-dead.json), whose 73 achievements were
//   sourced directly from Steam's own achievement schema for appid 500
//   via ISteamUserStats/GetSchemaForGame (fetched through this app's own
//   backend/services/steamApi.js) - all 73 ship a real, official Steam
//   description, quoted directly below. Left 4 Dead has no Steam-hidden
//   achievements; the total includes the free Crash Course and The
//   Sacrifice add-on campaigns.
// - Valve stores most Left 4 Dead achievement names in ALL CAPS, so they
//   appear that way here (matching the catalog data byte-for-byte). With
//   73 achievements the sections group them by activity rather than one
//   line each, weaving the real names in. Read from the achievements'
//   own descriptions.
export const GUIDE = {

    slug: "left-4-dead-achievement-guide",
    category: "game",
    gameSlug: "left-4-dead",
    icon: "🧟",
    title: "Left 4 Dead Achievement Guide",
    summary: "A practical guide to all 73 Steam achievements in Left 4 Dead - campaign survivals, Expert runs, full-campaign restriction challenges, Special Infected kills and rescues, playing as the Infected in Versus, Survival mode medals, and the Crash Course and The Sacrifice add-ons.",

    relatedSlugs: ["achievement-completion-and-tracking", "understanding-achievement-availability"],

    sections: [

        {
            heading: "Overview",
            body: [
                "Left 4 Dead has 73 Steam achievements and none are hidden. The total includes the two free add-on campaigns, Crash Course and The Sacrifice.",
                "Nothing is permanently missable, but a large part of the list needs coordination: the play-as-Infected feats only happen in Versus, and the toughest survival and challenge achievements want three reliable teammates rather than bots.",
                "Tip: clear all four original campaigns and Survival with bots on Normal first, then arrange one Expert session with human players for ZOMBICIDAL MANIAC and WHAT ARE YOU TRYING TO PROVE?, and one Versus session specifically to farm the Boomer, Smoker, Hunter and Tank achievements."
            ]
        },

        {
            heading: "Campaign Survivals",
            body: [
                "Beat each original campaign once: MERCY KILLER (No Mercy), TOLL COLLECTOR (Death Toll), DEAD BARON (Dead Air), and GRIM REAPER (Blood Harvest). CRASH-PROOF covers the Crash Course add-on, and Supreme Sacrifice covers The Sacrifice.",
                "Whole-team finish: NO-ONE LEFT BEHIND (beat a campaign with all four Survivors alive)."
            ]
        },

        {
            heading: "Difficulty & Restriction Runs",
            body: [
                "Expert: ZOMBICIDAL MANIAC (survive any campaign on Expert) and WHAT ARE YOU TRYING TO PROVE? (survive all of them on Expert).",
                "Full-campaign restrictions: AKIMBO ASSASSIN (pistols only), DO NOT DISTURB (never disturb a Witch), SAFETY FIRST (no friendly-fire damage), UNBREAKABLE (never use a first aid kit on yourself), STAND TALL (never get incapacitated), NOTHING SPECIAL (no Special Infected damage), STOMACH UPSET (never get vomited on), and UNTOUCHABLES (no damage after reaching the rescue vehicle)."
            ]
        },

        {
            heading: "Special Infected: Kills & Rescues",
            body: [
                "Stopping pounces and grabs: DEAD STOP (punch a pouncing Hunter), JUMP SHOT (headshot a leaping Hunter), HUNTER PUNTER (shove a Hunter off a pinned Survivor), DRAG AND DROP (free a Survivor from a Smoker before damage), TONGUE TWISTER (kill a Smoker who grabbed you), NO SMOKING SECTION (kill 10 Smokers mid-pull), and BLIND LUCK (take no damage after a Boomer vomit).",
                "Witches and Tanks: CR0WND (one-headshot a Witch), WITCH HUNTER (kill a Witch with no Survivor hurt), BURN THE WITCH (Molotov a Witch), MAN VS TANK (solo a Tank), TANKBUSTERS (kill a Tank that deals no damage), and TOWERING INFERNO (Molotov a Tank).",
                "Support and clean-up: MY BODYGUARD (protect Survivors 50 times), DEAD GIVEAWAY (heal a teammate while under 10 health), GROUND COVER (save a downed teammate from a Special Infected), CLEAN KILL (shove and kill a Boomer with no splash), BARF BAGGED (bile four Survivors at once), BACK 2 HELP (leave the safe room to revive a teammate), HERO CLOSET (free a Survivor from a closet), FIELD MEDIC (heal 25 Survivors), PHARM-ASSIST (give pills to 10 Survivors), and HELPING HAND (revive 50 Survivors).",
                "Kill counts: BRAIN SALAD (100 headshots), RED MIST (1000 with a mounted gun), PYROTECHNICIAN (20 in one explosion), 101 CREMATIONS (set 101 on fire), SPINAL TAP (a stealth melee kill from behind), and ZOMBIE GENOCIDEST (kill 53,595 Infected)."
            ]
        },

        {
            heading: "Playing as the Infected",
            body: [
                "Versus feats: BIG DRAG (drag a Survivor 100 feet as a Smoker), CHAIN SMOKER (constrict two Survivors on one life), DOUBLE JUMP (pounce two different Survivors on one life as a Hunter), All 4 Dead (kill all four Survivors on one life as a Tank), DEAD WRECKENING (5000 total Survivor damage as a Special Infected), LAMB 2 SLAUGHTER (incap a Survivor who left a safe room), and WIPEFEST (your team incaps three Survivors within five seconds).",
                "OUTBREAK is the community one: catch the rare infection strain, then pass it to someone else."
            ]
        },

        {
            heading: "Survival Mode",
            body: [
                "LAST STAND (complete a round on The Last Stand), then the medal set: BRONZE METTLE, SILVER BULLETS, and VIOLENCE IS GOLDEN (a medal of each type on any level), and DISTINGUISHED SURVIVOR, HEROIC SURVIVOR, and LEGENDARY SURVIVOR (that tier on every official level)."
            ]
        },

        {
            heading: "Crash Course & The Sacrifice",
            body: [
                "Crash Course: QUICK POWER (restart the generator within 30 seconds), THE LITTLEST GENOCIDE (kill 5,359 Infected there), SMASH HIT (win a Versus round), TRUCK STOP (wipe the Survivors after the escape vehicle opens), 20 CAR PILE-UP (hit 20 Survivors with a car as a Tank), JUMPIN' JACK SMASH (a 25-damage Hunter pounce), SLIPPERY PULL (Smoker-pull a bile-covered Survivor into your hands), and TANK STUMBLE (stun a Tank with an explosion).",
                "The Sacrifice: Kill Bill (have Bill make the sacrifice), Chaos Generator (all three generators running at once in the finale), Barrel Rolled (kill a Special Infected with an exploding barrel), and Sacrifizzle (as an Infected, incap someone trying to sacrifice themselves)."
            ]
        },

        {
            heading: "Suggested Order",
            body: [
                "Play the four original campaigns with bots on Normal for MERCY KILLER, TOLL COLLECTOR, DEAD BARON, and GRIM REAPER, plus NO-ONE LEFT BEHIND, and let the one-off Special Infected feats (DEAD STOP, CR0WND, BLIND LUCK, JUMP SHOT, SPINAL TAP, CLEAN KILL, etc.) and the grinds (BRAIN SALAD, RED MIST, 101 CREMATIONS, FIELD MEDIC, HELPING HAND, PHARM-ASSIST, MY BODYGUARD, ZOMBIE GENOCIDEST) build as you go.",
                "Do the restriction runs one campaign at a time: AKIMBO ASSASSIN, DO NOT DISTURB, SAFETY FIRST, UNBREAKABLE, STAND TALL, NOTHING SPECIAL, STOMACH UPSET, and UNTOUCHABLES. Clear Survival for LAST STAND, BRONZE METTLE, SILVER BULLETS, VIOLENCE IS GOLDEN, DISTINGUISHED SURVIVOR, HEROIC SURVIVOR, and LEGENDARY SURVIVOR.",
                "Play the add-ons: CRASH-PROOF plus the Crash Course feats (QUICK POWER, THE LITTLEST GENOCIDE), and Supreme Sacrifice plus Kill Bill, Chaos Generator, and Barrel Rolled.",
                "Finish with an Expert group session for ZOMBICIDAL MANIAC and WHAT ARE YOU TRYING TO PROVE?, and a Versus session for the play-as-Infected achievements: BIG DRAG, CHAIN SMOKER, DOUBLE JUMP, All 4 Dead, DEAD WRECKENING, LAMB 2 SLAUGHTER, WIPEFEST, OUTBREAK, SMASH HIT, TRUCK STOP, 20 CAR PILE-UP, JUMPIN' JACK SMASH, SLIPPERY PULL, TANK STUMBLE, MAN VS TANK, TANKBUSTERS, TOWERING INFERNO, BURN THE WITCH, WITCH HUNTER, HUNTER PUNTER, TONGUE TWISTER, NO SMOKING SECTION, DRAG AND DROP, GROUND COVER, BARF BAGGED, BACK 2 HELP, HERO CLOSET, DEAD GIVEAWAY, PYROTECHNICIAN, and Sacrifizzle."
            ]
        }

    ]

};
