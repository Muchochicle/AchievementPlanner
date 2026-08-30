// Chivalry 2 Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/chivalry-2.json), whose 41 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1824220 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None are hidden; every one ships a real, official Steam description,
//   quoted verbatim below.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "chivalry-2-achievement-guide",
    "category": "game",
    "gameSlug": "chivalry-2",
    "icon": "⚔️",
    "title": "Chivalry 2 Achievement Guide",
    "summary": "A practical guide to all 41 Steam achievements in Chivalry 2 - none are hidden. Covers the faction and map-win counters, the class kill-count grinds, and the weapon and combat-technique feats.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Chivalry 2 has 41 Steam achievements and none are hidden. The bulk are multiplayer counters that only go up: lifetime kill-count tiers from 10 up to 2000 kills, win counts for each faction (Agatha Knights, Mason Order) and each map (Dark Forest, Coxwell, Lionspire, Rudhelm Siege) at 5/10/25 wins, per-class 100-kill milestones for all four base classes (Vanguard, Footman, Archer, Knight), and a long tail of one-off combat-technique feats (a bastard-sword-on-bastard-sword kill, a 100-meter projectile kill, 200 successful counters, 100 deflected projectiles, a fire death, an unarmed streak).",
                "Nothing is missable - every counter is a permanent lifetime stat that keeps climbing across every match you play, win or lose. The long poles are the 2000-kill tier and the 25-win faction/map achievements; everything else falls out of normal, varied play across classes and maps.",
                "Tip: play Team Objective or Free For All on populated servers and rotate through all four classes - the class-specific kill counters and the funnier one-off achievements (Baker's Dozen with bread, Night Knight's unarmed kills, This Is Fine's fire death) come up naturally when you experiment with different weapons instead of sticking to one loadout the whole time."
            ]
        },
        {
            "heading": "Support & Team Play",
            "body": [
                "The support achievements: causing an enemy to fall to their death, being revived from a downed state, and reviving 10 downed teammates as Field Medic.",
                "The achievements here: The Things I Do For Love (Make an enemy fall to their death); I got better! (Get revived from a downed state); Field Medic (Revive 10 downed teammates)."
            ]
        },
        {
            "heading": "Faction & Map Wins",
            "body": [
                "The win-count ladder: 10 wins for each faction (Agatha Knights, Mason Order), plus 5/10/25 wins on Dark Forest, Coxwell, Lionspire, and Rudhelm Siege.",
                "The achievements here: Win as Agatha 10 times (Win as Agatha 10 times); Win as Mason 10 times (Win as Mason 10 times); Win Dark Forest 5 times (Win Dark Forest 5 times); Win Dark Forest 10 times (Win Dark Forest 10 times); Win Dark Forest 25 times (Win Dark Forest 25 times); Win Coxwell 5 times (Win Coxwell 5 times); Win Coxwell 10 times (Win Coxwell 10 times); Win Coxwell 25 times (Win Coxwell 25 times); Win Lionspire 5 times (Win Lionspire 5 times); Win Lionspire 10 times (Win Lionspire 10 times); Win Lionspire 25 times (Win Lionspire 25 times); Win Rudhelm Siege 5 times (Win Rudhelm Siege 5 times); Win Rudhelm Siege 10 times (Win Rudhelm Siege 10 times); Win Rudhelm Siege 25 times (Win Rudhelm Siege 25 times)."
            ]
        },
        {
            "heading": "Combat Feats",
            "body": [
                "One-off combat achievements: a bastard-sword-vs-bastard-sword kill (Battle Of The Bastards), 50 siege-weapon kills, a 50-kill single match (Brave Brave Sir Robin), and a 100-meter projectile kill.",
                "The achievements here: Battle Of The Bastards (Kill an enemy wielding a bastard sword, with a bastard sword); Bring Out The Big Guns (Get 50 kills with siege weapons); Brave Brave Sir Robin (Get 50 kills in one match); Long Range Menace (Kill an enemy with a projectile from over 100 meters)."
            ]
        },
        {
            "heading": "Class Mastery",
            "body": [
                "The four base-class kill milestones: 100 kills each as Vanguard (Avant-Garde), Footman (Feet on the Ground), Archer (Playing the wrong game), and Knight (Deus Vult).",
                "The achievements here: Avant-Garde (Achieve 100 kills as Vanguard); Feet on the Ground (Achieve 100 kills as Footman); Playing the wrong game (Achieve 100 kills as Archer); Deus Vult (Achieve 100 kills as Knight)."
            ]
        },
        {
            "heading": "Kill-Count Tiers",
            "body": [
                "The lifetime kill-count ladder in multiplayer matches: 10, 50, 100, 250, 500, 1000, 1500, and 2000 total kills.",
                "The achievements here: Kill 10 Enemies (Kill 10 Enemies in a Multiplayer match.); Kill 50 Enemies (Kill 50 Enemies in a Multiplayer match.); Kill 100 Enemies (Kill 100 Enemies in a Multiplayer match.); Kill 250 Enemies (Kill 250 Enemies in a Multiplayer match.); Kill 500 Enemies (Kill 500 Enemies in a Multiplayer match.); Kill 1000 Enemies (Kill 1000 Enemies in a Multiplayer match.); Kill 1500 Enemies (Kill 1500 Enemies in a Multiplayer match.); Kill 2000 Enemies (Kill 2000 Enemies in a Multiplayer match.)."
            ]
        },
        {
            "heading": "Signature Techniques",
            "body": [
                "The rest of the grind and its funnier feats: Baker's Dozen (13 bread kills), Night Knight (10 unarmed kills), Seeing Red (a low-health kill streak), Fight In The Shade (1000 arrows fired), This Is Fine (die by fire), The Count (200 counters), Yadome (100 deflects), and What Do We Say To the God of Death? (3 self-bandages in one life).",
                "The achievements here: Baker's Dozen (Kill 13 enemies with bread); Night Knight (Get 10 unarmed kills); Seeing Red (Achieve 2 kills in a row without dying while under 25 health); Fight In The Shade (Fire 1000 arrows); This Is Fine (Die from fire); The Count (Successfully counter 200 attacks); Yadome (Deflect 100 projectiles); What Do We Say To the God of Death? (Bandage yourself 3 times in one life)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play a variety of maps and both factions early on - Dark Forest, Coxwell, Lionspire, and Rudhelm Siege, as both Agatha Knights and Mason Order - so the win counters (5/10/25 each) all start climbing at once instead of grinding one map at a time.",
                "2. Rotate through Footman, Archer, Vanguard, and Knight until each hits 100 kills for the four class achievements: Feet on the Ground, Playing the wrong game, Avant-Garde, and Deus Vult.",
                "3. Pick off the one-off combat feats as opportunities appear: a bastard-sword kill, 50 siege-weapon kills, a 50-kill single match, and a 100m ranged kill.",
                "4. Keep an eye on your team - cause a fall-to-death kill, revive 10 downed teammates, and get revived yourself.",
                "5. Let the big lifetime counters (the 10 through 2000 kill tiers, 200 counters, 100 deflects, 1000 arrows fired) finish naturally over your total playtime, and pick off the joke feats (Baker's Dozen, Night Knight, Seeing Red, This Is Fine, What Do We Say To the God of Death?) whenever the opportunity comes up.",
                "Tip: Baker's Dozen (13 kills with bread) and the other silly improvised-weapon feats are easiest during Free For All brawls where thrown food and environmental weapons are lying around every spawn."
            ]
        }
    ]
};
