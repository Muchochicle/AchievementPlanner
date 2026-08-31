// Aliens vs. Predator (2010) Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/aliens-vs-predator-2010.json), whose 50 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   10680 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "aliens-vs-predator-2010-achievement-guide",
    "category": "game",
    "gameSlug": "aliens-vs-predator-2010",
    "icon": "👽",
    "title": "Aliens vs. Predator (2010) Achievement Guide",
    "summary": "A practical guide to all 50 Steam achievements in Aliens vs. Predator (2010) - none are hidden. Covers the Marine, Alien and Predator campaigns, the Hard and Nightmare difficulty clears, the three collectible sets, and the ranked multiplayer achievements.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Aliens vs. Predator (the 2010 Rebellion game) has 50 Steam achievements and none of them are hidden. Twenty-four are the three single-player campaigns - eight mission markers each for the Marine, Alien and Predator - plus completing all three. Six are the Hard and Nightmare difficulty clears of each campaign. Three are the collectible sets (67 Marine audio diaries, 50 Alien royal jelly containers, 45 Predator trophy belts). The remaining seventeen are multiplayer: weapon kill feats, ranked Deathmatch wins (1, 10), a 10-kill streak, Persecutor status, six friends in a match, Survivor and Infestation feats, and 6,000 / 18,060 ranked XP.",
                "The catalog marks it as roughly two playthroughs (a normal run plus Hard/Nightmare) and nothing is missable: missions replay and every counter is cumulative.",
                "Tip: play each campaign once on Hard - that covers the mission markers and the Hard clear at once - then do Nightmare runs. The multiplayer XP and win achievements are the real time sink and are best done with a group."
            ]
        },
        {
            "heading": "Campaign: Marine, Alien & Predator",
            "body": [
                "The \"Not Bad for A Human\" and \"Game Over, Man!\" meta-achievements, and the eight mission markers each for the Marine, Alien and Predator campaigns.",
                "The achievements here: Not Bad for A Human (Get all the Aliens vs Predator achievements); Game Over, Man! (Complete all three Campaigns); Club Hopper (Survive The 'Party' at The Club); Exit Strategy (Escape from C-Block); You Have My Sympathies (Help Van Zandt); Regicide (Defeat the Matriarch); I Will Never Leave You... (Locate Tequila); ...That's A Promise (Get Tequila to surgery); One Big Bug (Defeat the Praetorian); Get to The Chopper! (Recover Weyland's datapad); Come to Mama (Liberate the Matriarch); Breaking Quarantine (Escape from the Research Lab); Grunt Hunt (Wipe out all of the Marines in the Colony); Under Pressure (Solve the riddle of the Ruins); Grim Reaper (Harvest all available civilians in the Alien Campaign); Alien vs Predator (Create a new species); It Uses The Jungle (Find a way through Gateway); Fallen Comrade (Find the Youngbloods in the Jungle); Matter of Honor (Discover the Elite Predator's fate); Eyes of The Demon (Retrieve the ancient mask); World of Hurt (Survive trial by combat); Breaking and Entering (Find a way into the Research Lab); Reclaimer (Retrieve the second artifact); Extinction Agenda (Destroy the Abomination)."
            ]
        },
        {
            "heading": "Difficulty & Collectibles",
            "body": [
                "Completing each campaign on Hard and on Nightmare difficulty, and the three collectible sets - 67 audio diaries, 50 royal jelly containers, 45 trophy belts.",
                "The achievements here: Stay Frosty (Complete Marine Campaign on Hard difficulty setting); I Admire its Purity (Complete Alien Campaign on Hard difficulty setting); It Ain't No Man (Complete Predator Campaign on Hard difficulty setting); I LOVE the Corps! (Complete Marine Campaign on Nightmare difficulty setting); Magnificent, Isn't It? (Complete Alien Campaign on Nightmare difficulty setting); One Ugly Mother (Complete Predator Campaign on Nightmare difficulty setting); Harsh Language (Discover all 67 Audio Diaries); Quite A Specimen (Destroy all 50 Royal Jelly Containers); Fortune and Glory (Find all 45 Predator trophy belts)."
            ]
        },
        {
            "heading": "Multiplayer",
            "body": [
                "The multiplayer achievements - a Survivor team feat, the shotgun / disc / smartgun / rifle / Combi Stick / pistol kill feats, first ranked match and win, 10 ranked Deathmatch wins, a 10-kill no-death streak, Persecutor status, six friends in a match, the Survivor heal feat, the Infestation last-prey feat, and 6,000 and 18,060 ranked XP.",
                "The achievements here: Scatter Shot (As a team, kill 20 enemies in under 60 seconds in a Survivor match.); I Like to Keep This Handy (Kill 2 enemies with one shot with the shotgun); Spin Doctor (Kill two enemies with one throw of the Battle Disc); Let's Rock! (Kill 5 enemies with one burst from the smartgun); Elite Sniper (Kill 10 enemies with head shots from the scoped rifle); Stick Around (Kill 20 enemies with the Combi Stick); Gunslinger (Kill 30 enemies with the pistol); Welcome to The War (Play and complete your first Ranked Match in standard Deathmatch mode); Killer Instinct (Win your first Ranked Match in standard Deathmatch mode); Serial Killer (Win 10 Ranked Matches in any Deathmatch mode); Very Tough Hombre (Kill 10 enemies in a row without dying in a Ranked Match); Persecution Complex (Achieve Persecutor status more than once in any Ranked Match); The Six Pack (Play with six friends in a Ranked Match); Ain't Got Time to Bleed (Heal or regenerate 30 blocks of health in Survivor); The Uninfected (Finish a Ranked Infestation match as the only remaining prey); Welcome to The Party (Get 6000 XP in Ranked Matches); Real Nasty Habit (Get 18060 XP in Ranked Matches)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play each of the three campaigns on Hard for the mission markers and the Hard-difficulty clears.",
                "2. Sweep the collectibles - audio diaries, royal jelly containers and trophy belts - on those runs or replays.",
                "3. Do Nightmare runs of each campaign.",
                "4. Play ranked multiplayer for the weapon feats, wins, streak and Persecutor achievements.",
                "5. Grind ranked XP toward 18,060, ideally in a group for \"The Six Pack\".",
                "Tip: the collectible achievements have no in-game counter shown per level - follow a guide, and grab everything on a slow Hard run rather than back-tracking later."
            ]
        }
    ]
};
