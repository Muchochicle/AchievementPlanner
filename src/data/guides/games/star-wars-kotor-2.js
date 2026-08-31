// STAR WARS: KOTOR II Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/star-wars-kotor-2.json), whose 57 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   208580 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "star-wars-kotor-2-achievement-guide",
    "category": "game",
    "gameSlug": "star-wars-kotor-2",
    "icon": "🗡",
    "title": "STAR WARS: KOTOR II Achievement Guide",
    "summary": "A practical guide to all 57 Steam achievements in STAR WARS: KOTOR II - none are hidden. Covers the story and endings, the companion and planet-choice achievements, the alignment / skill / feat achievements, and the late-game secrets. None of the achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "STAR WARS: Knights of the Old Republic II - The Sith Lords has 57 Steam achievements and none are hidden. They cover the story (the Prologue, defeating Nihilus and Sion, the Light Side and Dark Side endings), the mutually-exclusive planet choices (Queen or Vaklu on Onderon, Settlers or mercenaries at Khoonda), recruiting each companion, both alignment extremes, 30 points in every skill, Player Level 30, and a set of late-game secrets (claiming Nihilus' mask, replacing a Sith Lord on the main menu, HK-47's dialogue).",
                "The catalog marks it missable and roughly two playthroughs - a Light Side run and a Dark Side run cover the endings and both alignment extremes, and many planet choices are one-way. A guide helps with the influence-gated companion content.",
                "Tip: do a Light Side run first (Settlers at Khoonda, Queen on Onderon, recruit the Disciple and Handmaiden) and a Dark Side run second (mercenaries, Vaklu, recruit Hanharr and Mira), covering the mutually-exclusive achievements across the two."
            ]
        },
        {
            "heading": "Story & Endings",
            "body": [
                "Completing the Prologue, the two Peragus asteroid outcomes, your first Light Side and Dark Side points, building a lightsaber, defeating Nihilus and Sion, the Light Side and Dark Side endings, installing HK-47's module, siding with the Queen or Vaklu on Onderon, and the Handmaiden and Mandalorian Battle Circles.",
                "The achievements here: Training Wheels (Complete the Prologue); It Was Like That When I Got Here! (Destroy Peragus Astroids); I Didn't Do It! (Let the Sith destroy the Peragus Asteroids); Larger World (Get your first Light Side points); Starting Down the Dark Path (Get your first Dark Side points); An Elegant Weapon (Contruct your first Lightsaber); Hunger Strike (Defeat Nihilus); Pain Relief (Defeat Sion); Seeker (Complete the game on the Light Side); Destiny, Dominated (Complete the game on the Dark Side); Short Circuit (Install HK-47's unique module); Royal Protocol (Side with the Queen on Onderon); Martial Law (Side with Vaklu on Onderon); The First Rule... (Complete the Handmaiden Battle Circle); The Second Rule... (Complete the Mandalorian Battle Circle)."
            ]
        },
        {
            "heading": "Companions & Planet Choices",
            "body": [
                "Repairing the Ebon Hawk droid, learning Moving Meditation and Force Sight, recruiting Hanharr, Mira, the Handmaiden and the Disciple, looting a body on Korriban, fleeing Korriban after Sion, breaking Hanharr's spirit, beating the Nar Shaddaa Pazaak champ, the named crystal, siding with (or against) the Settlers at Khoonda, and gaining a Prestige class.",
                "The achievements here: Unadulterated Violence (Repair the damaged droid on the Ebon Hawk); Lost in Your Work (Learn Moving Meditation); Your Eyes Can Deceive You (Learn Force Sight); The Walking Carpet (Recruit Hanharr); Lost Girl (Recruit Mira); Grave Robber (Loot a body on Korriban); Fight Another Day (Flee Korriban after fighting Sion); Laugh It Up, Fuzzball (Break Hanharr's spirit); Pure Pazaak (Beat the champ on Nar Shadaa); Pet Rock (Get the named Lightsaber crystal); Last Stand (Side with the Settlers at Khoonda); Nothing Personal (Change your mind about siding with the Settlers at Khoonda); Orphan White (Recruit the Handmaiden); Ancient History (Recruit the Disciple); A Certain Set of Skills (Gain a Prestige class)."
            ]
        },
        {
            "heading": "Alignment, Skills & Feats",
            "body": [
                "Maximum Light Side and Dark Side points, a full-board Pazaak win, 10,000 credits, Persuasion over 30, killing all Sith troopers before they board, filling the party screen, zeroing a companion's Influence, all Dark Side and all Light Side Powers, dancing for Vogga, killing all the Jedi masters, Player Level 30, 30 points in Stealth / Demolitions / Repair / Computer Use / Treat Injury, and starting the 'Trapped' quest.",
                "The achievements here: Luminous Beings (Reach maximum Light Side points); If You Only Knew... (Reach maximum Dark Side points); Never Tell Me the Odds (Win a Pazaak game with a full board); In It For the Money (Collect 10,000 credits); Talk Them to Death (Have Persuasion over 30); Don't Get Cocky (Kill all Sith troopers before they can board the Ebon Hawk); The Gang's All Here (Fill the Party Selection screen); I hate everything about you (Reduce a companion's Influence to zero.); Unlimited Power (Acquire all Dark Side Powers.); I Am A Jedi (Acquire all Light Side Powers); Dancing Queen (Dance for Vogga); No Jedi can stop us (Kill all the Jedi masters); Over Achiever (Reach Player Level 30); Silent, But Deadly (Have 30 points in Stealth); Let's Blow This Place! (Have 30 points in Demolitions.); I've Seen How You Use a Hydrospanner (Have 30 points in Repair.); We Have to Hack Into the Mainframe! (Have 30 points in Computer Use.); Trust Me, I'm a Doctor (Have 30 points in Treat Injury.)."
            ]
        },
        {
            "heading": "Late-Game Secrets",
            "body": [
                "Convincing Vogga to sell fuel to Telos, making the Pazaak champ lose without playing, claiming Nihilus' mask, replacing a Sith Lord on the main menu, teaching the Handmaiden the Force, deducing G0-T0's identity, learning to kill Jedi from HK-47, and hearing HK-47's definition of love.",
                "The achievements here: It's a trap! (Get this by starting the \"Trapped\" Quest on Korriban.); Hutt Oil (Convince Vogga the Hutt to sell fuel to Telos.); Cheater (Convince the \"champ\" to lose the game without playing.); Finders Keepers (Claim Darth Nihilus' mask.); The Sith Lord (Have your character replace any of the Sith Lords on the main menu screen.); Breaking the Oath (Teach the Handmaiden the ways of the Force.); You ARE the droid I'm looking for (Deduce G0-T0's identity); Assassination Protocol: Active (Learn how to kill Jedi from HK-47); Cupid's Rifle (Listen to HK-47's definition of love.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play a Light Side run - Settlers at Khoonda, Queen on Onderon, recruit the Disciple and Handmaiden, and reach maximum Light Side points.",
                "2. On that run, spread skill points to hit 30 in every skill and reach Player Level 30.",
                "3. Do the secrets and one-off feats (Nihilus' mask, the Pazaak champ, Vogga's fuel, HK-47's dialogue).",
                "4. Play a Dark Side run - mercenaries, Vaklu, recruit Hanharr and Mira, and reach maximum Dark Side points.",
                "5. Clean up any mutually-exclusive planet outcomes and both endings across the two runs.",
                "Tip: teaching the Handmaiden the Force ('Breaking the Oath') needs a male Exile and high influence with her - build that influence early on the first Light Side run."
            ]
        }
    ]
};
