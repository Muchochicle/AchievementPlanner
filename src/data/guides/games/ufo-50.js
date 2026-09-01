// UFO 50 Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/ufo-50.json), whose 30 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1147860 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 1 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (PowerPyx / Game8 / PlayStationTrophies / TrueAchievements) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "ufo-50-achievement-guide",
    "category": "game",
    "gameSlug": "ufo-50",
    "icon": "👾",
    "title": "UFO 50 Achievement Guide",
    "summary": "A practical guide to all 30 Steam achievements in UFO 50 (1 hidden). Covers dusting off all 50 games, the high-score boards, and earning Gold and Cherry disks (Cherry being the hard mastery goal for each game). One achievement is hidden - 'Superuser', for entering a valid code into the in-game Terminal - and its condition is confirmed from community guides.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "UFO 50 has 30 Steam achievements and 1 is hidden. The hidden one is 'Superuser' - enter a valid code into the Terminal in the Garden. Everything visible tracks the collection: dusting off (opening) your first, then 25, then all 50 game disks; getting your initials on a high-score board and reaching a top-3 and top score; earning Gold disks (beating a game) up to all 50 for 'Pure Gold'; and earning Cherry disks (the game's harder per-title mastery challenge) up to all 50 for 'Cherry Pie'. 'Master of Play' needs every other achievement.",
                "The catalog marks it difficulty 5. Dusting off disks and the early Gold-disk milestones are quick, but 'Pure Gold' (beat all 50) and especially the Cherry disks - each an extra mastery goal set by the developers, several of them brutal - make this one of the longest and hardest completions in the catalog. Budget dozens of hours minimum.",
                "Tip: chase Gold disks first across all 50 games to learn each one, then come back for Cherry disks - the Cherry goals assume you already know the game well, and grinding them cold is far slower."
            ]
        },
        {
            "heading": "Disks & High Scores",
            "body": [
                "Dusting off your first disk, 25 disks, and all 50 on a single profile, entering your initials on a high-score board, and reaching a top-3 and then the top score on one.",
                "The achievements here: Taste Test (Dust off your first game disk.); Sampler (Dust off 25 disks on a single profile.); All You Can Eat (Dust off all 50 disks on a single profile.); Score Lord (Enter your initials on a high score board.); Arcade Ace (Obtain a top 3 score on a high score board.); Points Potentate (Obtain the top score on a high score board.)."
            ]
        },
        {
            "heading": "Gold Disks",
            "body": [
                "Beating your first game, then 2 / 3 / 4 / 5 / 10 / 15 / 20 / 30 / 40 Gold disks on a single profile, and 'Pure Gold' for beating all 50.",
                "The achievements here: The Road to Gold (Beat your first game.); 2 Gold Disks (Beat 2 games on a single profile.); 3 Gold Disks (Beat 3 games on a single profile.); 4 Gold Disks (Beat 4 games on a single profile.); 5 Gold Disks (Beat 5 games on a single profile.); 10 Gold Disks (Beat 10 games on a single profile.); 15 Gold Disks (Beat 15 games on a single profile.); 20 Gold Disks (Beat 20 games on a single profile.); 30 Gold Disks (Beat 30 games on a single profile.); 40 Gold Disks (Beat 40 games on a single profile.); Pure Gold (Beat all 50 games on a single profile.)."
            ]
        },
        {
            "heading": "Cherry Disks & Mastery",
            "body": [
                "Your first Cherry disk, then 2 / 3 / 4 / 5 / 10 / 15 / 20 / 30 / 40 Cherry disks, 'Cherry Pie' for all 50, the hidden 'Superuser' (a valid Terminal code), and 'Master of Play' for every other achievement.",
                "The achievements here: The Road to Cherry (Obtain your first cherry disk.); 2 Cherry Disks (Obtain 2 cherry disks on a single profile.); 3 Cherry Disks (Obtain 3 cherry disks on a single profile.); 4 Cherry Disks (Obtain 4 cherry disks on a single profile.); 5 Cherry Disks (Obtain 5 cherry disks on a single profile.); 10 Cherry Disks (Obtain 10 cherry disks on a single profile.); 15 Cherry Disks (Obtain 15 cherry disks on a single profile.); 20 Cherry Disks (Obtain 20 cherry disks on a single profile.); 30 Cherry Disks (Obtain 30 cherry disks on a single profile.); 40 Cherry Disks (Obtain 40 cherry disks on a single profile.); Cherry Pie (Obtain 50 cherry disks on a single profile.); Superuser (Enter a valid code into the in-game Terminal (accessed from the Garden).); Master of Play (Obtain all other achievements.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Dust off all 50 disks early so the collection achievements are done.",
                "2. Work through the games earning Gold disks (a normal completion of each), learning every title.",
                "3. Push a few high-score boards to a top-3 and a top score.",
                "4. Return for Cherry disks, starting with the games whose mastery goals you find most approachable.",
                "5. Grind toward 'Pure Gold', 'Cherry Pie' and finally 'Master of Play'.",
                "Tip: keep everything on one profile - every disk, Gold and Cherry milestone counts 'on a single profile', so starting a fresh save resets your progress toward them."
            ]
        }
    ]
};
