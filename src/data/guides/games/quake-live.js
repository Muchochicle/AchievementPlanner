// Quake Live Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/quake-live.json), whose 58 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   282440 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "quake-live-achievement-guide",
    "category": "game",
    "gameSlug": "quake-live",
    "icon": "🔴",
    "title": "Quake Live Achievement Guide",
    "summary": "A practical guide to all 58 Steam achievements in Quake Live - none are hidden. Covers the training levels and first steps, the frag feats and weapon-kill feats, the medal and mode achievements, and the CTF, match-count and grand-total achievements. None of the achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Quake Live has 58 Steam achievements and none are hidden. A small set is the training levels (Crash Course, Elevate, Accelerate) and first steps (first match, first win). The rest are competitive - one-off skill frags (a midair rocket kill, a frag at 1 health, a 60%-accuracy match), weapon-specific kill counts (500 with the Rail Gun, 500 with the Rocket Launcher), medal totals (250 Impressive, 100 Defense), the game-mode feats (CTF, Clan Arena, Domination, Harvester, Attack & Defend), and the big grinds - 250 and 1,000 matches, and 10,000 total frags.",
                "The catalog marks it difficulty 4 - 'Vadri'gar' (10,000 frags), 'Prize Fighter' (1,000 matches) and the accuracy/skill feats against real opponents are all long or demanding. Nothing is missable: every counter is account-wide and cumulative.",
                "Tip: play a lot of Clan Arena and CTF - CA gives the fastest frag accumulation for the big totals, and CTF is where the Capture/Defense/Assist medal achievements and the mode feats all come from."
            ]
        },
        {
            "heading": "Training & First Steps",
            "body": [
                "Completing one match, your first win, the Crash Course skill hallway and trainer match, and the three halls each of the Elevate and Accelerate training levels.",
                "The achievements here: Testing One..Two.. (Complete 1 match.); Victory (Win a match for the first time.); Hall Monitor (Reach the end of the skill test hallway in the Crash Course.); Crash Test (Win the Crash Course match against our trainer.); Elevate Beginner (Finish the first hall in the Elevate training level.); Elevate Adept (Finish the second hall in the Elevate training level.); Elevate Expert (Finish the final hall in the Elevate training level.); Accelerate Beginner (Finish the first hall in the Accelerate training level.); Accelerate Adept (Finish the second hall in the Accelerate training level.); Accelerate Expert (Finish the final hall in the Accelerate training level.)."
            ]
        },
        {
            "heading": "Frag Feats & Weapon Kills",
            "body": [
                "The midair and rocket-in-air frags, a first frag, 3 Excellent medals in a game, a 60%-accuracy win, a frag at 1 health, 100 frags, a 15-frag Rail Gun match, a 1-health Rail Gun frag, the Quad-denial and no-power-up-vs-Quad feats, 5 Gauntlet frags in a match, a no-death Duel win, the Gauntlet-in-air and Gauntlet-Duel frags, a Grenade Launcher CA round win, a full CTF medal set, 500 frags, the last-alive CA clutch, a Gauntlet CA round finish, and 10 Quad frags in a game.",
                "The achievements here: Raptor (Frag an opponent while you are in the air.); Speed Kills (Frag an enemy while moving at over 500 units per second.); Psychic (Use a rocket to kill an opponent who is in the air.); First Frag (Score the first kill in a match.); Hat Trick (Record 3 Excellent medals in 1 game.); Aim Bot (Win a match with 60% or greater accuracy.); Plus One (Frag an opponent when you have only 1 health.); First Taste (Accumulate 100 Frags.); Camper (Record 15 or more frags in a single match with the Rail Gun.); Overkill (Use the Rail Gun to frag an opponent with only 1 point of health.); Bandit (Deny Quad Damage from your opponent.); Killjoy (Frag an opponent who has Quad Damage when you have no power-up.); Brawler (Record 5 Gauntlet frags in one match.); Jesse James (Win a Duel without dying.); Air Hammer (Frag an opponent with Gauntlet while both of you are in the air.); Here Goes Nothing (Frag your opponent with Gauntlet in a Duel.); Nade Spam (Win a CA round using the Grenade Launcher.); Full House (Earn at least 1 Capture, Defense, and Assist medal in a CTF match.); Hooked (Accumulate 500 Frags.); Last Hope (In Clan Arena, frag 3 or more opposing players to win the round, when you're the last alive.); Punch Out (Get the last frag in a CA round with gauntlet.); Smack Down (Accumulate 10 or more Quad Damage frags in 1 game.)."
            ]
        },
        {
            "heading": "Medals & Mode Feats",
            "body": [
                "250 Impressive, 100 Defense and 100 Revenge medals, a no-flag Attack & Defend team wipe, 500 Rocket Launcher frags, 1,000 frags, 5 air Shotgun frags in a match, 250 matches, holding 3 Domination points for 30 seconds, Quad + Battle Suit in one match, 3+ of each CTF medal in a match, 3 skulls at once in Harvester, a Gauntlet-vs-Quad frag, a Kamikaze Item frag, a double flag-carrier kill before a cap, and 250 Excellent medals.",
                "The achievements here: Assassin (Accumulate 250 Impressive Medals.); Guardian (Accumulate 100 Defense Medals.); Evil Eye (Accumulate 100 Revenge Medals.); Missed Opportunity (Kill the opposing team in Attack & Defend without touching the flag.); Rocket Man (Accumulate 500 frags using the Rocket Launcher.); Fear Me (Accumulate 1000 Frags.); Pull (Record 5 Shotgun frags of opponents in the air in one match.); Big Time (Complete 250 matches.); Point Denied (Hold 3 Domination control points in an arena for at least 30 seconds.); Resource Hog (Get Quad and Battle Suit in one match.); Trifecta (Earn 3 or more Capture, Defense, and Assist medals in a CTF match.); Head Hunter (Capture at least 3 skulls at once in Harvester.); Sucker Punch (Use the Gauntlet to frag an opponent who has Quad Damage.); WTF Was That (Record your first frag with the Kamikaze Item.); Miracle Maker (Kill two enemy flag carriers moments before their cap in 1 game.); 2 in 2 (Accumulate 250 Excellent Medals.)."
            ]
        },
        {
            "heading": "CTF, Match Milestones & Grand Totals",
            "body": [
                "50 Humiliation medals, 25 midair projectile frags, a 666 CTF final score, a 1-capture CTF win on your own flag run, a no-kill Attack & Defend capture, 1,000 matches, 1,000 combined CTF medals, 100 Capture and 100 Assist medals, and 10,000 total frags ('Vadri'gar').",
                "The achievements here: Fight Club (Accumulate 50 Humiliation Medals.); Midair (Get 25 frags using projectiles on opponents midair.); Wicked (Record a final score of 666 in Capture the Flag.); Clutch (Win a Capture the Flag match by 1 capture, ending the match with your winning flag run.); Ninja Cap (Capture the flag in Attack & Defend without killing anyone on the team, minimum size 3.); Prize Fighter (Complete 1000 matches.); MVP (Accumulate 1000 combined total Capture the Flag Medals (Capture, Assist, Defense).); Color Guard (Accumulate 100 Capture Medals.); Sidekick (Accumulate 100 Assist Medals.); Vadri'gar (Accumulate 10000 Frags.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Do the Crash Course, Elevate and Accelerate training levels, then win your first match.",
                "2. Play Clan Arena for fast frag accumulation and the CA-specific feats (Last Hope, Punch Out, Nade Spam).",
                "3. Play CTF for the Capture/Defense/Assist medal achievements and the mode feats (Clutch, Ninja Cap, Miracle Maker).",
                "4. Grind the weapon kill counts (500 Rail Gun, 500 Rocket Launcher) and the medal totals in your normal play.",
                "5. Keep playing toward 250 and 1,000 matches and 10,000 total frags.",
                "Tip: 'Aim Bot' (a 60%-accuracy win) is easiest in a small Duel or on a low-population server where you can pick your shots - use hitscan weapons and take your time."
            ]
        }
    ]
};
