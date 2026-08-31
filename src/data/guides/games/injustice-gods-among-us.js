// Injustice: Gods Among Us Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/injustice-gods-among-us.json), whose 50 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   242700 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "injustice-gods-among-us-achievement-guide",
    "category": "game",
    "gameSlug": "injustice-gods-among-us",
    "icon": "⚖",
    "title": "Injustice: Gods Among Us Achievement Guide",
    "summary": "A practical guide to all 50 Steam achievements in Injustice: Gods Among Us - none are hidden. Covers the Story, Classic Battle and Battle modes, the online and S.T.A.R. Labs content, and the combat, character-mastery and Archives unlock feats.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Injustice: Gods Among Us Ultimate Edition has 50 Steam achievements and none of them are hidden. They cover the single-player modes (complete Story Mode to 50% and 100%, clear Battle Mode, Classic Battle with any and all characters, win the story minigames), a levelling pair (Level 10 and Level 100), the online modes (first win, dethrone a King of the Hill, vote correctly, defeat a Survivor, 100 and 200 online matches, Ranked wins), the S.T.A.R. Labs missions (one mission, three stars, 100 stars, all missions with three stars), and a large combat and character-mastery block (10-hit combos with every character, every supermove, special and Meter Burn move, transitions and interactables, and the Archives cosmetic unlocks).",
                "Nothing is missable - every mode is replayable and all counters are cumulative. The longest are \"World's Finest\" (all S.T.A.R. Labs missions with three stars), the every-character mastery achievements, and the 200 online matches.",
                "Tip: the every-character achievements (10-hit combos, supermoves, special moves, Meter Burn moves) are best done in Training Mode one character at a time - keep a checklist, since the game does not show you which characters you have left."
            ]
        },
        {
            "heading": "Story, Classic Battle & Progression",
            "body": [
                "Completing Classic Battle with any and all characters, Battle Mode, the throw / interactable / timeout multiplayer feats, all S.T.A.R. Lab missions, the story minigames, viewing your Hero Card, reaching Level 10 and 100, and 50% and 100% Story Mode.",
                "The achievements here: Top Rung (Complete Classic Battle with all characters); Rise to the Top (Complete Classic Battle with any character); Ultimate Battler (Complete Battle Mode); Throwdown! (Perform 8 throws and win in a multiplayer match); Groundbreaking (Use every interactable and win in a multiplayer match); Go Sit in the Corner (Win a multiplayer match with a timeout); I Conquered All (Beat All S.T.A.R. Lab Missions (Excluding DLC)); Mini-Master (Win all story mode minigames); Statistical Advantage (View Your Hero Card); Sidekick (Reach Level 10); The Hero We Deserve (Reach Level 100); Almost There (Complete 50% of Story Mode); Justice for All (Complete 100% of Story Mode)."
            ]
        },
        {
            "heading": "Online & S.T.A.R. Labs",
            "body": [
                "The online achievements - first win, dethroning a King, a correct King of the Hill vote, defeating a Survivor, 100 wins and 200 matches, Ranked wins, online practice with a friend, the tutorial, and the S.T.A.R. Labs progression (1 mission, 3 stars, 100 stars, all missions with 3 stars).",
                "The achievements here: Beginner's Luck! (Win a single online match); Overthrown (Dethrone the King in an online match); I Voted! (Vote Correctly in a KOTH match); Streak Ender (Defeat a Survivor); Breaking Records (Win 100 complete Online Matches); Over The Top! (Play 200 complete Online Matches); Lucky Break (Win 1 complete Ranked match); Holy Knockout Batman! (Win 10 complete Ranked matches); Buddy System (Enter Online Practice with someone on your friends list); Practice Makes Perfect (Enter Practice Mode); Learning is Fun (Complete Tutorial); It Has Begun (Complete 1 S.T.A.R. Lab Mission); Overachiever (Get 3 stars on 1 S.T.A.R. Lab Mission); All Star (Get 100 Stars in S.T.A.R. Lab Mode); World's Finest (Complete All S.T.A.R. Lab Missions with 3 Stars)."
            ]
        },
        {
            "heading": "Combat, Character Mastery & Archives",
            "body": [
                "The mastery and feat achievements - 10-hit combos, supermoves, special moves and Meter Burn moves with every character, Clash wins, stage transitions and interactions, the Green Arrow / Batman / Deathstroke character challenges, comebacks, and unlocking costumes and cosmetics in the Archives.",
                "The achievements here: Heavy Hitter (Perform a 10 hit combo with every character); Unstoppable Force (Win a Clash sequence with any character); Wrecking Ball (Knock an opponent through a transition); Around The World (Knock opponent through all transitions across all levels); FINISHED (Win a match with the super move of any character); Superhuman! (Perform every character's supermove); Metahuman (Perform every special move of every character); Feel the Burn! (Perform every Meter Burn special move of every character); True Marksman (Win a match with Green Arrow using only arrows); The Caped Crusader (Win with Batman using every special move and his Supermove); Around and Around We Go (Perform every level interaction once); Arkham City Lockdown (Defeat every Villain With Batman); Only a Real Master (Make a comeback when at low health (10% or less)); Perfect Aim (Win a match as Deathstroke without missing a shot (minimum 12 shots)); Tourist (Send an opponent through all three Metropolis transitions in one fight); Cosplay (Unlock a costume in the Archives); Gonna Need More Closet Space (Unlock All costumes in the Archives); Hoarder (Unlock everything in the Archives); I Can Back it Up (Equip a new Background Image); Iconic Representation (Equip a new Icon); Looking Good! (Equip a new Character Portrait); Bull in a China Shop (Cause maximum damage in all Arenas (does not include Practice mode))."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play Story Mode to 100%, winning the minigames along the way.",
                "2. Clear Classic Battle with every character and finish Battle Mode.",
                "3. Work through S.T.A.R. Labs - all missions, building toward three stars on every one.",
                "4. Do the online achievements: first win, King of the Hill, Survivor, Ranked wins, and the 100-win / 200-match totals.",
                "5. Grind the every-character mastery achievements in Training Mode and unlock everything in the Archives.",
                "Tip: knock out the per-character combo and move achievements while you are already clearing Classic Battle with each character - doing both in one pass saves a lot of repeated character switching."
            ]
        }
    ]
};
