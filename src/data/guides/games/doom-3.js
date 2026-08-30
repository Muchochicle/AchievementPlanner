// DOOM 3 Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/doom-3.json), whose 65 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   208200 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "doom-3-achievement-guide",
    "category": "game",
    "gameSlug": "doom-3",
    "icon": "😈",
    "title": "DOOM 3 Achievement Guide",
    "summary": "A practical guide to all 65 Steam achievements in DOOM 3 - none are hidden. Covers the DOOM 3 campaign difficulty, boss and secret feats, the Resurrection of Evil and The Lost Mission expansions, and the multiplayer and bundled classic DOOM / DOOM II achievements.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "DOOM 3 (the BFG Edition build on Steam) has 65 Steam achievements and none of them are hidden. They span everything in the package: the base DOOM 3 campaign (four difficulties, every PDA and video log, all storage lockers, the boss kills, and a set of kill-feats and hidden rooms), the Resurrection of Evil expansion (four difficulties, its collectibles, the three Hunter fights, the Grabber and Artifact feats), The Lost Mission (four difficulties and its PDAs), DOOM 3 multiplayer, and the bundled Ultimate DOOM and DOOM II with their own episode- and level-completion achievements.",
                "Nothing is missable within a level thanks to chapter/level select, but the highest difficulty (Nightmare) and the 10-hour Speed Run are the gates on a full completion. The multiplayer achievements need a second player or a populated server, so pair up for those early.",
                "Tip: play the base campaign on Veteran for DOOMed Veteran and use guides for the one-off feats (the trapped scientist, the id secret room, the BFG in the Security office, a no-damage level), then replay only what you need on Nightmare - it carries no story weight, just careful play."
            ]
        },
        {
            "heading": "DOOM 3 Campaign, Bosses & Secrets",
            "body": [
                "The base campaign on Recruit, Marine, Veteran and Nightmare, every PDA and video log, all storage lockers, the 10-hour Speed Run, the kill-feats (an enemy at 1 health, 20 melee-hand kills, two Imps with one shotgun blast, 50 barrels, a no-damage level, the STTP3 score, 20 chainsaw kills, 20 Soul Cube kills, getting two demons to fight), the four boss kills (Vagary, Guardian, Sabaoth, Cyberdemon), the BFG-9000 pickup, keeping a Sentry Bot alive, and the id / Betruger / secret-room finds.",
                "The achievements here: DOOMed Recruit (Complete the DOOM 3 single player campaign on Recruit); DOOMed Marine (Complete the DOOM 3 single player campaign on Marine); DOOMed Veteran (Complete the DOOM 3 single player campaign on Veteran); DOOMed Nightmare (Complete the DOOM 3 single player campaign on Nightmare); DOOMed Collector (Collect every PDA in DOOM 3); I Like to Watch (Find all video logs in DOOM 3); That was Close! (Kill an enemy with 1 health remaining in DOOM 3, RoE, or Lost Mission); Goody Finder (Open all storage lockers in DOOM 3); Unarmed Badass (Kill 20 enemies with the fists/melee hands in DOOM 3); To Be or Not to Be (Kill the scientist trapped next to the Reactor Control Room in DOOM 3); Double the Fun! (Kill 2 Imps with one shotgun blast in DOOM 3, RoE, or Lost Mission); Killing time (Score 25000 on Super Turbo Turkey Puncher 3 in DOOM 3 or RoE); Boomtastic (Blow up 50 barrels in the DOOM 3, RoE, or Lost Mission campaigns); Ready for Action! (Get the BFG-9000 from Security Chief's office in DOOM 3); Not a Scratch (Complete a level without taking any damage in DOOM 3, RoE, or Lost Mission (except Mars City)); RAGE (Find the RAGE logo in the Lost Mission); Speed Run (Complete the DOOM 3 single player campaign in 10 hours or less); Sticky Situation (Defeat the Vagary boss in DOOM 3); Cookie Stealer (Defeat Guardian boss in DOOM 3); You're Not My Boss! (Defeat Sabaoth boss in DOOM 3); Big Boy (Defeat Cyberdemon boss in DOOM 3); Bot Buddy (Keep a Sentry Bot alive to its destination in DOOM 3, RoE, or Lost Mission (except Mars City)); Ripped! (Use the chainsaw to kill 20 enemies in DOOM 3); All of Us (Find the id logo secret room in DOOM 3); You Laugh, It Works (Find the bloody handiwork of Betruger (in Delta 4 Hallway) in DOOM 3); Turncoat (Get 2 demons to fight each other in DOOM 3, RoE, or Lost Mission); Soulfood (Use the Soul Cube to defeat 20 enemies in DOOM 3)."
            ]
        },
        {
            "heading": "Resurrection of Evil & The Lost Mission",
            "body": [
                "The RoE campaign on all four difficulties and its PDAs, five kills at once in Hell Time, the Helltime / Berserk / Invulnerability Hunter fights, the Maledict boss, 20 Grabber-projectile kills, 20 Berserk Artifact punch-outs, and The Lost Mission on all four difficulties with its PDAs and the RAGE logo find.",
                "The achievements here: Evil Recruit (Complete the RoE campaign on Recruit); Evil Marine (Complete the RoE campaign on Marine); Evil Veteran (Complete the RoE campaign on Veteran); Evil Nightmare (Complete the RoE campaign on Nightmare); Evil Collector (Collect every PDA in the RoE campaign); Too Slow, Fool! (Kill 5 enemies at once while in Hell Time in RoE); Gimme Time! (Defeat the Helltime Hunter in RoE); Gimme Power! (Defeat the Berserk Hunter in RoE); Shocking! (Defeat the Invulnerability Hunter in RoE); Eat This! (Defeat the Maledict boss in RoE); Play Catch (Kill 20 enemies with projectiles launched from the Grabber in RoE); Fists of Fury (Use the Artifact with Berserk ability to punch out 20 enemies in RoE); Lost Recruit (Complete the Lost Mission campaign on Recruit); Lost Marine (Complete the Lost Mission campaign on Marine); Lost Veteran (Complete the Lost Mission campaign on Veteran); Lost Nightmare (Complete the Lost Mission campaign on Nightmare); Lost Collector (Collect every PDA in the Lost Mission campaign)."
            ]
        },
        {
            "heading": "Multiplayer & Classic DOOM / DOOM II",
            "body": [
                "DOOM 3 multiplayer (a teleporter telefrag, a Reactor crush, five Invisibility kills, a death-free match, a Berserk kill, a two-for-one rocket), and the bundled classics: any Ultimate DOOM level, all four DOOM episodes on Hurt Me Plenty, the Rampage / Nightmare / 100%-completion feats, and the DOOM II set (any level, Hell on Earth and No Rest for the Living completed, Ultra-Violence, a BFG, 100% completion, and a secret area).",
                "The achievements here: Telefragged! (Kill an enemy player by jumping into a teleporter after them in DOOM 3 Multiplayer); Crushed! (Catch an enemy player in the Reactor of Frag Chamber in DOOM 3 Multiplayer); Ninja Killer (Kill 5 enemy players while using Invisibility in DOOM 3 Multiplayer); Clean Sheet (Complete a DOOM 3 Multiplayer match without dying); Berserked! (Use Berserk to kill a player in DOOM 3 Multiplayer); 2 Deaths - 1 Gun (Kill two enemies in the same room with a rocket in DOOM 3 Multiplayer); Neophyte (Complete any level in Ultimate DOOM in singleplayer); DOOM: Episode 1 (Complete DOOM Episode 1 on 'Hurt Me Plenty' or higher in single player); DOOM: Episode 2 (Complete DOOM Episode 2 on 'Hurt Me Plenty' or higher in single player); DOOM: Episode 3 (Complete DOOM Episode 3 on 'Hurt Me Plenty' or higher in single player); DOOM: Episode 4 (Complete DOOM Episode 4 on 'Hurt Me Plenty' or higher in single player); DOOM: Rampage (Complete all DOOM levels on 'Ultra-Violence' or higher in single player); DOOM: Nightmare (Complete any DOOM level on 'Nightmare' in single player); DOOM: Burning Out of Control (Complete any DOOM level with 100% kills, items, and secrets in single player); DOOM II: Just Getting Started (Complete any DOOM II level in single player); DOOM II: From Earth to Hell (Complete all levels in 'DOOM II: Hell on Earth' in single player); DOOM II: And Back Again (Complete all levels in 'DOOM II: No Rest for the Living' in single player); DOOM II: Superior Firepower (Complete all 'DOOM II: Hell on Earth' levels on 'Ultra-Violence' or higher in single player); DOOM II: A Really Big Gun (Find a BFG in DOOM II single player); DOOM II: Burning Out of Control (Complete any DOOM II level with 100% kills, items, and secrets in single player); DOOM II: An Important Looking Door (Find a secret area of a DOOM II level in single player)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the base DOOM 3 campaign on Veteran, using a guide to grab every PDA, video log and storage locker and the one-off feats as you pass them.",
                "2. Do the boss kills and the remaining kill-feats (chainsaw, Soul Cube, barrels, no-damage level) on that run or via level select.",
                "3. Play Resurrection of Evil and The Lost Mission on Veteran, again sweeping collectibles and doing their Hunter/boss and one-off feats.",
                "4. Play through the bundled Ultimate DOOM and DOOM II for their episode, level and 100% achievements.",
                "5. Do the multiplayer achievements with a partner, then replay whatever you still need on Nightmare and do the 10-hour Speed Run.",
                "Tip: the DOOM and DOOM II 100%-completion achievements only need one qualifying level each, not the whole game - pick a short early level (E1M1 for DOOM, MAP01 for DOOM II) and clear every kill, item and secret there rather than trying to play the classics perfectly throughout."
            ]
        }
    ]
};
