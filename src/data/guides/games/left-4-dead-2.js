// Left 4 Dead 2's Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/left-4-dead-2.json), whose 101 achievements
//   were sourced directly from Steam's own achievement schema for appid
//   550 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js) - all 101 ship a real,
//   official Steam description, quoted directly below. Left 4 Dead 2
//   has no Steam-hidden achievements; the total includes every DLC
//   campaign (The Passing, The Sacrifice, Cold Stream, The Last Stand).
// - Valve stores L4D2 achievement names in ALL CAPS, so they appear
//   that way here (matching the catalog data byte-for-byte). With 101
//   achievements the sections group them by activity rather than one
//   line each, weaving the real names in. Read from the achievements'
//   own descriptions.
export const GUIDE = {

    slug: "left-4-dead-2-achievement-guide",
    category: "game",
    gameSlug: "left-4-dead-2",
    icon: "🧟",
    title: "Left 4 Dead 2 Achievement Guide",
    summary: "A practical guide to all 101 Steam achievements in Left 4 Dead 2 - campaign survivals, Expert and Realism runs, per-campaign challenges, Special Infected feats, weapon and melee feats, and Survival and Scavenge modes.",

    relatedSlugs: ["achievement-completion-and-tracking", "understanding-achievement-availability"],

    sections: [

        {
            heading: "Overview",
            body: [
                "Left 4 Dead 2 has 101 Steam achievements and none are hidden. The total includes every DLC campaign - The Passing, The Sacrifice, Cold Stream, and The Last Stand - all of which are free.",
                "Nothing is missable, but a large chunk of the list needs other players: the Special Infected feats only happen in Versus, and Scavenge achievements need a full lobby.",
                "Tip: clear the co-op campaign, Survival, and weapon achievements first with bots on Normal, then organise a Versus session with friends specifically to farm the \"As the Jockey / Spitter / Charger\" achievements, which are otherwise the hardest to arrange."
            ]
        },

        {
            heading: "Campaign Survivals",
            body: [
                "Beat each campaign at least once: PRICE CHOPPER (Dead Center), MIDNIGHT RIDER (Dark Carnival), RAGIN' CAJUN (Swamp Fever), WEATHERMAN (Hard Rain), and BRIDGE BURNER (The Parish). DLC campaigns: TORCH BEARER (The Passing), STREAM CROSSER (Cold Stream), and STILL STANDING (The Last Stand).",
                "The Sacrifice has three of its own: SUPREME SACRIFICE (complete it), KILL BILL (have Bill make the sacrifice), and CHAOS GENERATOR (all three generators running at once in the finale)."
            ]
        },

        {
            heading: "Difficulty & Skill Runs",
            body: [
                "STILL SOMETHING TO PROVE (survive all campaigns on Expert), THE REAL DEAL (a campaign on Expert with Realism enabled), and THE LAST FRONTIER (The Last Stand on Expert Realism).",
                "THE LAST DASH asks you to finish The Last Stand in 13 minutes or less with no Survivor deaths, and THE MAIN ATTRACTION is a no-leave-the-stage clear of the Dark Carnival concert finale."
            ]
        },

        {
            heading: "Per-Campaign Challenges",
            body: [
                "Route and restriction challenges: VIOLENCE IN SILENCE (the Hard Rain impound lot with no alarms), SOB STORY (the Swamp Fever sugar mill without killing a Witch), WING AND A PRAYER (the Hard Rain crashed airliner without taking damage), BRIDGE OVER TREBLED SLAUGHTER (the Parish bridge finale in under three minutes), POLE POSITION (escape Dead Center's atrium before the first Tank), and CONFEDERACY OF CRUNCHES (a full campaign with only melee weapons).",
                "Collectibles and secrets: GUARDIN' GNOME (carry Gnome Chompski out of Dark Carnival), HOUSEHOLD NAMES (the hidden room in The Last Stand), and GNOME ALONE (launch Gnome Chompski into space at the end of The Passing)."
            ]
        },

        {
            heading: "Special Infected Feats",
            body: [
                "Jockey: QUALIFIED RIDE (ride a Survivor for 12+ seconds), BACK IN THE SADDLE (ride twice in one life), and RODE HARD, PUT AWAY WET (steer a rider into a Spitter's acid).",
                "Spitter: GREAT EXPECTORATIONS (hit every Survivor with one acid patch), A SPITTLE HELP FROM MY FRIENDS (spit on a Smoker victim), I SPIT ON YOUR GRAVE and ACID BATH (spit on a Charger or Hunter victim), and SPITFIRE (destroy 20 gas cans as the Spitter).",
                "Charger: SCATTERING RAM (bowl through the whole team in one charge), MEAT TENDERIZER (smash a Survivor into the ground for 15 seconds), LONG DISTANCE CARRIER (carry one 80+ feet), FLIGHT DECK (instantly kill a Survivor), and WEDDING CRASHER (crash one through 8 wedding chairs).",
                "Others: ONE HIT WONDER (a 25-damage Hunter pounce), FAT NINJA (a no-line-of-sight Boomer vomit), HEARTWARMER (leave the saferoom in Versus to defibrillate a teammate), and SACRIFIZZLE (incap someone attempting the sacrifice). FUEL CRISIS and GAS SHORTAGE are gas-can disruption feats as Special Infected."
            ]
        },

        {
            heading: "Weapons & Melee",
            body: [
                "Melee milestones: HEAD HONCHO (decapitate 200 Infected), CHAIN OF COMMAND (100 Common with the chainsaw), CLUB DEAD (every melee weapon), TANK BURGER (kill a Tank with melee), FORE! (18 heads with the golf club), PURE SATISFACTION (20 Jockeys with a shovel or pitchfork), and LEVEL A CHARGE (melee a charging Charger).",
                "Guns and fire: DISMEMBERMENT PLAN (15 Infected in one grenade-launcher blast), BURNING SENSATION (ignite 50 Common with incendiary ammo), TIL IT GOES CLICK (25 kills with one M60 trigger pull), FRIED PIPER (Molotov a Clown leading 10 Common), and CL0WND (honk 10 Clown noses).",
                "Precision kills: ACID REFLEX (kill a Spitter before she spits), A RIDE DENIED (kill a Jockey within 2 seconds of it jumping on), GET SKEETED ON (shotgun a pouncing Hunter), ROCKY HORROR PICTURE THROW (destroy a Tank rock in mid-air), LICKETY-SPLIT (cut a Smoker tongue before it grabs you), NEW HAIRCUT and SHOTGUN WEDDING (kill a Witch / Witch bride cleanly), BARREL ROLLED (a Special Infected with an exploding barrel), KITE LIKE A MAN (kill a Tank with only the original Survivors' damage), and SEPTIC TANK (bile-bomb a Tank)."
            ]
        },

        {
            heading: "Survival & Scavenge",
            body: [
                "Survival medals: GETTING STARTED, ON OUR WAY, and THIS IS WHERE THE FUN BEGINS (bronze/silver/gold on any map), A LITTLE HACK AND SLASH, LIKE LAMBS TO THE SLAUGHTER, and KILLING SPREE (bronze/silver/gold on every map), plus SUPREME SURVIVALIST (30 minutes on any map), THE BIG TEN (10 minutes in Versus Survival), and BEAT THE RUSH (a medal using only melee).",
                "Scavenge: HUNTING PARTY (win a game), GAS GUZZLER (100 gas cans), CACHE AND CARRY (15 in one round), SCAVENGE HUNT (stop the enemy scoring any), PORT OF SCAVENGE (5 full games on The Port), and the Moustachio pair GONG SHOW and STACHE WHACKER."
            ]
        },

        {
            heading: "Co-op & Misc",
            body: [
                "Team play: STRENGTH IN NUMBERS (4v4 Versus or Scavenge win), ARMORY OF ONE (deploy an ammo upgrade for the team), SHOCK JOCK (10 defib revives), THE QUICK AND THE DEAD (10 revives under adrenaline), ELEPHANT IN THE ROOM (revive near a Tank), THREE’S A CROWD (three Survivors from one rescue closet), and CONNECTING FIGHTS (a full Versus game on Dead Air).",
                "Grinds and one-offs: Z-GENOCIDEST 2: EPISODE 2 (kill 53,599 Infected), MUTANT OVERLORD (play 6 Mutations), CRASS MENAGERIE (one of each Uncommon Infected), DEAD IN THE WATER (10 swamp Mudmen in the water), ROBBED ZOMBIE (10 CEDA vomit vials), GRAVE ROBBER (10 Fallen Survivor items), CACHE GRAB (open 5 foot lockers), and KILLING THEM SWIFTLY TO THIS SONG (play the Midnight Riders jukebox song).",
                "Event and community: GOLDEN FREEMAN (the golden crowbars in the L4D1 Survival maps), and the seasonal Valve Gift Grab 2011 – L4D2, GOOD GUY NICK, and GHOST OF CHRISTMAS PRESENT (help free-weekend and holiday players survive)."
            ]
        }

    ]

};
