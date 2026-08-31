// Verdun Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/verdun.json), whose 59 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   242860 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "verdun-achievement-guide",
    "category": "game",
    "gameSlug": "verdun",
    "icon": "🎖",
    "title": "Verdun Achievement Guide",
    "summary": "A practical guide to all 59 Steam achievements in Verdun - none are hidden. Covers the personal levels and co-op XP tiers, the combat feats and squad specialisations, the medal collections, and the long kill-milestone and remaining-squad grinds. None of the achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Verdun has 59 Steam achievements and none are hidden. They are almost all multiplayer grinds: reaching personal level 100, the co-op XP tiers, the headshot and kill milestones (up to 10,000 kills and 5,000 headshots), unlocking every specialisation for all fifteen squads, the medal collections ('Receive all gold medals 10x', 100 of each colour), and the per-medal 'earn this gold medal 10 times' set. A handful are one-off feats (a triple explosive kill, a 100 m kill, a kill while dead, the credits screen).",
                "The catalog marks it a single, long playthrough - there is no campaign, just accumulating stats across public matches. Nothing is missable: every counter is account-wide and cumulative.",
                "Tip: play Frontlines as a squad NCO - it earns squad medals and co-op XP fastest, and covers 'Setting an example', the co-op tiers and most of the 'best squad' gold medals at the same time."
            ]
        },
        {
            "heading": "Levels & Co-op",
            "body": [
                "Reaching personal level 25, 50, 75 and 100, and the four co-op XP tiers earned with a single partner (10k, 50k, 100k, 250k).",
                "The achievements here: Level 25 (Reach personal level 25); Level 50 (Reach personal level 50); Level 75 (Reach personal level 75); Level 100 (Reach personal level 100); War is better with friends I (Gain 10k co-op XP with a player); War is better with friends II (Gain 50k co-op XP with a player); War is better with friends III (Gain 100k co-op XP with a player); War is better with friends IV (Gain 250k co-op XP with a player)."
            ]
        },
        {
            "heading": "Combat Feats & Early Specialisations",
            "body": [
                "100 headshots, 500 kills, the squad-NCO 10-kill match, a triple explosive kill, joining a friend, a 100 m kill, 10 melee kills, a kill while dead, the credits screen, playing 50/100/250 times with the same friend, and unlocking all specialisations for the first seven squads (Poilus, Landsers, Chasseurs, Alpenjäger, Canadians, Tommies, Stoßtrupp).",
                "The achievements here: Headhunter (Make 100 headshots); Corpseman I (Reach 500 kills); Setting an example (Kill 10 enemies as a squad NCO in 1 match); Blast fishing (Make a triple kill with explosives/grenades); Not alone (Join a friend); Eagle Eye (Kill an enemy from over 100 meters); Manual Labour I (Make 10 melee kills); Worth It (Kill an enemy player while you are dead); Developers, Developers, Developers (Check out the credits screen); Buddy (Play together with the same friend 50 times); Comrade (Play together with the same friend 100 times); Blood Brother (Play together with the same friend 250 times); Honneur et Patrie (Unlock all specializations for the Poilus); Gott Mit Uns (Unlock all specializations for the Landsers); Sidi Brahim (Unlock all specializations for the Chasseurs); In Treue Fest (Unlock all specializations for the Alpenjäger); We Stand on Guard (Unlock all specializations for the Canadians); For King and Country (Unlock all specializations for the Tommies); Providentiae Memor (Unlock all specializations for the Stoßtrupp)."
            ]
        },
        {
            "heading": "Medals",
            "body": [
                "100 gold, silver and bronze medals, receiving all gold and all silver medals (and all gold / all silver 10x), and receiving each specific gold medal ten times (longest killstreak, most headshots, most kills, best K/D, best squad, best advancing/defence squad, best player, no misses).",
                "The achievements here: Gold x100 (Receive a total of 100 gold medals); Silver x100 (Receive a total of 100 silver medals); Bronze x100 (Receive a total of 100 bronze medals); Gold Collector (Receive all gold medals); Gold Hoarder (Receive all gold medals 10x); Silver Collector (Receive all silver medals); Silver Hoarder (Receive all silver medals 10x); That's another one down! (Receive the gold medal \"Longest killstreak\" 10 times); Golden Headhunter (Receive the gold medal \"Most headshots\" 10 times); Shoot, Cover, Reload, Repeat (Receive the gold medal \"Most kills\" 10 times); Hunting the Hun (Receive the gold medal \"Best Kill/Death ratio over 10 kills\" 10 times); There is no I in team (Receive the gold medal \"Best squad of match\" 10 times); Offense is the best defence (Receive the gold medal \"Best advancing squad\" 10 times); Let them, come to us (Receive the gold medal \"Best defence squad\" 10 times); #1 (Receive the gold medal \"Best player\" 10 times); Aimbot (Receive the gold medal \"Most shots & none missed\" 10 times)."
            ]
        },
        {
            "heading": "Kill Milestones & Remaining Specialisations",
            "body": [
                "1,000 and 5,000 headshots, 5,000 and 10,000 kills, 100 and 500 melee kills, unlocking all specialisations for the last eight squads (Belgians, Doughboys, Marines, Pioniere, Schützen, Highlanders, ANZACs, Tirailleurs), a no-death Frontlines match, and a 5-in-a-row headshot streak without dying.",
                "The achievements here: Headhunter II (Make 1,000 headshots); Headhunter III (Make 5,000 headshots); Corpseman II (Reach 5,000 kills); Corpseman III (Reach 10,000 kills); Manual Labour II (Make 100 melee kills); Manual Labour III (Make 500 melee kills); Voor De Koning (Unlock all specializations for the Belgians); This We'll Defend! (Unlock all specializations for the Doughboys); Semper Fidelis! (Unlock all specializations for the Marines); Anker wirf! (Unlock all specializations for the Pioniere); Furchtlos und Treu (Unlock all specializations for the Schutzen); In My Defens God Me Defend (Unlock all specializations for the Highlanders); Advance Australia (Unlock all specializations for the ANZACs); Impavidum Ferient Bella! (Unlock all specializations for the Tirailleurs); Do You Even Die? (Survive a full Frontlines match without dying.); Extreme Headhunter (In a Frontlines match headshot 5 enemies in a row without dying.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play regularly toward personal level 100 - most other achievements accrue on the way.",
                "2. Stick with one friend across many matches for the co-op XP tiers and the 'same friend' 50/100/250 achievements.",
                "3. Rotate through all fifteen squads, unlocking every specialisation for each.",
                "4. Grind the kill and headshot milestones (10,000 kills, 5,000 headshots) and the melee counts.",
                "5. Chase the medal achievements last - the 'earn this gold medal 10 times' set is the longest tail.",
                "Tip: the 'unlock all specialisations' achievements only need the career points spent, not kills with each - once you have points banked, cycle squads and dump points to tick several off quickly."
            ]
        }
    ]
};
