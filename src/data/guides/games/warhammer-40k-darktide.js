// Warhammer 40,000: Darktide Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/warhammer-40k-darktide.json), whose 36 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1361210 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js). 1 hidden achievement ships no Steam description; its condition here is curatorial, cross-checked against the game's wiki plus community 100% guides, and kept spoiler-light.
// - Sections group achievements by what each one actually requires.
export const GUIDE = {
    "slug": "warhammer-40k-darktide-achievement-guide",
    "category": "game",
    "gameSlug": "warhammer-40k-darktide",
    "icon": "💀",
    "title": "Warhammer 40,000: Darktide Achievement Guide",
    "summary": "A practical guide to all 36 Steam achievements in Warhammer 40,000: Darktide - story & progression, combat feats, class challenges, hidden achievement.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Warhammer 40,000: Darktide has 36 Steam achievements, 1 of them hidden (kill a Daemonhost). They cover the Path of Trust story chapters and account progression, a block of combat feats, and three class-specific challenges for each of the four classes (Ogryn, Veteran, Psyker, Zealot).",
                "Nothing is missable, but several want higher difficulties (Malice / Heresy threat) or long streaks - Dream Team is 100 missions with nobody downed, and Purge the Heretic is 40,000 lifetime kills.",
                "Tip: level all four classes toward rank 30 (Like a four-leaf Clover) while chipping at each class's three challenges when you play it, and let the big counters (40,000 kills, 100 flawless missions) accrue over time."
            ]
        },
        {
            "heading": "Story & Progression",
            "body": [
                "The prologue and the six Path of Trust chapters, unlocking your first Curio slot and Sire Melk's Requisitiorium, and having 2 and then 4 different classes at rank 30.",
                "The achievements here: Don't Let Me Down, Criminal (Complete the prologue.); Circle of Trust I (Complete Path of Trust chapter 1.); Circle of Trust II (Complete Path of Trust chapter 2.); Circle of Trust III (Complete Path of Trust chapter 3.); Circle of Trust IV (Complete Path of Trust chapter 4.); Circle of Trust V (Complete Path of Trust chapter 5.); Circle of Trust VI (Complete Path of Trust chapter 6.); Unconsidered Trifles (Unlock your first Curio slot.); Well met, Whippersnapper (Unlock access to Sire Melk's Requisitiorium.); Two’s Company (Have 2 different Classes at rank 30.); Like a four-leaf Clover (Have 4 different Classes at rank 30.)."
            ]
        },
        {
            "heading": "Combat Feats",
            "body": [
                "The general challenges: a 10-mission no-down streak on Malice+, blocking 600 damage in 10 seconds, 12 consecutive dodges, 20 consecutive headshot kills, a 20-second Monstrosity kill, 90 kills in 30 seconds, 100 missions with nobody downed, 100 revives, one of every mission type on Uprising and on Heresy, a flawless Data Interrogation, and 40,000 total kills.",
                "The achievements here: Flawless Execution (Complete 10 missions in a row without going down on Malice difficulty or higher.); The Emperor Protects (Block 600 damage in 10 seconds.); Preternatural Dodge (Dodge 12 attacks in a row.); Serial Killer (Kill 20 consecutive enemies with headshots.); Time to Die (Kill a Monstrosity in 20 seconds or less.); Frenzied Killer (Kill 90 enemies in less than 30 seconds.); Dream Team (Complete 100 missions without anyone being downed.); Up and at 'Em! (Help 100 downed Operatives back up.); Inquisitorial Veteran (Complete at least one of each Mission type on Uprising difficulty or higher.); Inquisitorial Legend (Complete at least one of each Mission type on Heresy difficulty or higher.); Flawless Interrogator (Complete a Data Interrogation without an incorrect Auspex entry.); Purge the Heretic (Kill a total of 40.000 enemies.)."
            ]
        },
        {
            "heading": "Class Challenges",
            "body": [
                "Three feats for each class: the Ogryn (grenade-box eye kill, Bull Rush a charging Plague Ogryn, 60-enemy Bull Rush), the Veteran (unbounced Frag 5-hit, 4 weak spots in one Volley Fire, a no-melee-damage Malice mission), the Psyker (7-enemy ledge kill, Brain Burst a leaping Pox Hound, an elite kill on a single Perils), and the Zealot (dashing Mutant melee kill, 40 m sniper stagger with a Stun Grenade, 40 stunned-enemy kills in 10 seconds).",
                "The achievements here: Something In Your Eye (As the Ogryn, kill a Corruptor by hitting it in the eye with your grenade box.); I'm in Charge! (As the Ogryn, use Bull Rush to interrupt a Plague Ogryn's charge.); Gone Bowling (As the Ogryn, knock down 60 enemies with a single Bull Rush on Malice Threat or higher.); Long Bomb (As the Veteran, hit 5 enemies with a Frag Grenade explosion without it bouncing.); Marked For Death (As the Veteran, hit 4 weak spots without missing a shot during a single use of Volley Fire.); On Overwatch (As the Veteran, complete a Mission on Malice Threat or higher without taking any melee damage.); Cliffhanger (As the Psyker, kill 7 enemies in 2 seconds by knocking them off a ledge with Psykinetic's Wrath.); Not Even Close (As the Psyker, kill a pouncing Pox Hound with Brain Burst.); Going Out With a Bang (As the Psyker, kill 1 elite with a single Perils of the Warp on Malice Threat or higher.); Abhor the Mutant (As the Zealot, kill a Mutant with a melee attack while dashing when using Chastise the Wicked.); Buying Time (As the Zealot, hit an enemy sniper more than 40 metres away using a Stun Grenade.); Shocking Stuff (As the Zealot, kill 40 stunned enemies within 10 seconds on Malice Threat or higher.)."
            ]
        },
        {
            "heading": "Hidden Achievement",
            "body": [
                "One achievement is hidden - a rare-enemy kill:",
                "The achievements here: Banisher (Kill a Daemonhost.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the prologue and the six Path of Trust chapters, unlocking Curios and Melk's shop.",
                "2. Level each class toward rank 30, doing that class's three challenges while you main it.",
                "3. Push Malice / Heresy difficulty for the mission-type and no-damage achievements, and grab the Daemonhost kill when one spawns.",
                "4. Let the long counters finish - 40,000 kills, 100 flawless missions, 100 revives - across normal play.",
                "Tip: the Daemonhost only wakes if a player gets close to it - on a run where you want Banisher, deliberately approach and melee it, then focus it down as a team; on any other run, give it a wide berth."
            ]
        }
    ]
};
