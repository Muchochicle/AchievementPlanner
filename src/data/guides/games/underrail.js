// UnderRail Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/underrail.json), whose 55 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   250520 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 2 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (TrueAchievements / Steam Community / game wikis) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "underrail-achievement-guide",
    "category": "game",
    "gameSlug": "underrail",
    "icon": "🚇",
    "title": "UnderRail Achievement Guide",
    "summary": "A practical guide to all 55 Steam achievements in UnderRail (2 hidden). Covers the per-weapon and per-ability kill counts, the skill / consumable / status-effect counters, the one-off combat feats, and the endgame achievements. Two achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "UnderRail has 55 Steam achievements and two are hidden - 'Biodeicide' (kill the final boss, Tchort) and 'Mutated Happily Ever After' (finish the game through the mutant-exclusive endgame, available only after transforming via Mutagen D5). The rest are open: a large matrix of '50 kills with weapon/ability type X' achievements, the skill counters (hack 50, pick 50, disarm 50), the consumable and status-effect counters, and a set of one-off combat feats (a 500-damage overkill, surviving on 1 HP, killing your doppelganger).",
                "The catalog marks it missable and roughly three playthroughs - one character cannot realistically get 50 kills with every weapon and psi school, and the mutant ending is a point-of-no-return path that locks out the normal one. Plan a couple of builds (melee, guns, psi) plus a dedicated mutant run.",
                "Tip: pick two or three weapon/ability lines per character and focus their kill achievements - spreading a single build across firearms, energy weapons, crossbows and three psi schools just makes every fight slower and none of the counters finish."
            ]
        },
        {
            "heading": "Kill Counts by Weapon & Ability",
            "body": [
                "The first kill, 100 rathounds / insectoids / humans and 50 robots, and 50 kills with each of fists, knife, sledgehammer, firearms, energy weapons, acid, grenades, crossbow, metathermics, thought control, psychokinetics and traps.",
                "The achievements here: First Blood! (Kill a living creature); Somebody Called For an Exterminator? (Kill 100 rathounds); It's Buggy (Kill 100 insectoids); Terminator Exterminator (Kill 50 robots); Antisocial Tendencies (Kill 100 humans); Backalley Pugilism (Kill 50 enemies unarmed or with fist weapons); Mr. Stabby (Kill 50 enemies with a knife); It's Hammer Time! (Kill 50 enemies with a sledgehammer); Run and Gun (Kill 50 enemies with firearms); Phasers Set to Kill (Kill 50 enemies with energy weapons); Acid Trip (Kill 50 enemies with acid); Fire in the Hole! (Kill 50 enemies with grenades); Put this Apple on Your Head (Kill 50 enemies with a crossbow); Fire and Ice (Kill 50 enemies with metathermic psi abilities); Look Into My Eyes (Kill 50 enemies with thought control psi abilities); Reach Out and Touch Somebody (Kill 50 enemies with psychokinetic psi abilities); Mine, All Mine! (Kill 50 enemies with traps)."
            ]
        },
        {
            "heading": "Skills, Consumables & Status Effects",
            "body": [
                "Hacking 50 electronic and picking 50 mechanical locks, disarming 50 traps, discovering 10 hidden objects, using 50 health hypos / 50 psi boosters / 30 adrenaline / 15 morphine, stealing 30 items, picking 100 mushrooms, chilling / freezing / stunning / short-circuiting / incapacitating / igniting enemies, missing 10 aimed shots, and eating 50 meals.",
                "The achievements here: Manual Override (Hack 50 electronic locks); Skeleton Key (Pick 50 mechanical locks); It's Always the Blue Wire (Disarm 50 traps); Snoop Dog (Discover 10 hidden objects or passages (traps don't count)); Universal Recipient (Use 50 health hypos); The Other Side (Use 50 psi boosters); Thrill Junkie (Use 30 adrenaline shots); Pain Free (Use 15 morphine shots); Kleptomaniac (Steal 30 items); Shroomhead (Pick 100 mushrooms); Someone Need A Chill Pill? (Chill enemies 50 times); Mr. Freeze (Freeze enemies 30 times); Look At All The Pretty Stars (Stun enemies 30 times); What Does This Button Do? (Short-circuit enemies 30 times); Resisted Arrest (Incapacitate enemies 30 times); Pyromaniac (Ignite enemies 30 times); Back To The Shooting Range... (Miss 10 aimed shots); Rat Meat Gourmand (Eat 50 meals)."
            ]
        },
        {
            "heading": "One-Off Combat Feats",
            "body": [
                "10 Execute kills, a Dirty Kick kill, leaving an area during combat, a last-bullet kill, a 500-damage overkill, surviving on 1 HP, being killed by the same robot three times, restealthing in combat, sniping a full-health enemy, evading three attacks in one turn, shattering an enemy, killing your doppelganger, killing only yourself with a grenade, 5 kills with one grenade, 3 with one burst, and 50 kills each with temporal manipulation, a sword and a spear.",
                "The achievements here: Hitman (Kill 10 humans using the Execute attack); Chuck Attack (Kill an enemy with Dirty Kick); Tactical Retreat (Leave an area during combat); Do You Feel Lucky, Punk? (Kill an enemy with the last bullet in the magazine); It's Super Effective! (Deal over 500 damage with a weapon or an unarmed attack); Just a Flesh Wound (Survive an attack with 1 health); I'm Afraid I Can't Let You Do That (Get killed by the same robot 3 times in one sitting); Now You See Me... (Successfully restealth during combat); One Shot - One Kill (Snipe down a full health enemy); Can't Touch This! (Evade 3 attacks in a row in a single turn); Rest In Pieces (Shatter an enemy); There Can Be Only One (Kill your doppelganger); You Throw Like a Girl (Kill only yourself with a grenade); Within The Budget (Kill 5 enemies with a single grenade); Spray And Pray (Kill 3 enemies with a single burst attack); Your Time is Up! (Kill 50 enemies with temporal manipulation psi abilities); Die by the Sword (Kill 50 enemies with a sword); Impaler (Kill 50 enemies with a spear)."
            ]
        },
        {
            "heading": "Endgame",
            "body": [
                "The two hidden endgame achievements - killing the final boss Tchort, and finishing the game through the mutant-exclusive ending.",
                "The achievements here: Biodeicide (Kill Tchort, the game's final boss.); Mutated Happily Ever After (Finish the game through the mutant-exclusive endgame - available only after transforming via Mutagen D5 and following the Mutant questline.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Plan your first character around two or three weapon/ability lines and drive their 50-kill achievements.",
                "2. Along the way, do the skill counters (hack 50, pick 50, disarm 50) and the consumable and status-effect counts.",
                "3. Finish the main story and kill Tchort for 'Biodeicide'.",
                "4. Do a second character covering the weapon/ability lines the first one skipped.",
                "5. Do a dedicated run that transforms via Mutagen D5 and follows the Mutant questline for 'Mutated Happily Ever After'.",
                "Tip: the status-effect counters (chill, freeze, stun) are fastest on a crossbow or psi build with the right special bolts/abilities - a character with no way to apply a given effect can't get that achievement at all."
            ]
        }
    ]
};
