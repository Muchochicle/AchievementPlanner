// Beat Hazard Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/beat-hazard.json), whose 63 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   49600 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "beat-hazard-achievement-guide",
    "category": "game",
    "gameSlug": "beat-hazard",
    "icon": "🎵",
    "title": "Beat Hazard Achievement Guide",
    "summary": "A practical guide to all 63 Steam achievements in Beat Hazard - none are hidden. Covers the core score, streak and boss feats, the track-count and rank and playtime milestones, the Survival and Boss Rush achievements, the power-up kill counts, and the Shadow Mission DLC. None of the achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Beat Hazard has 63 Steam achievements and none are hidden. The core set is score and skill feats (a x100 multiplier, a 1,000 kill streak, 'Perfect' no-death track, killing 8 bosses in one game), the track-count milestones (25, 50, 100), the rank and playtime milestones, the Survival Mode time thresholds (up to 20 minutes), and the Boss Rush achievements. The rest are power-up kill counts (10,000 kills with Micro Missiles, the Ultra Beam, the Reflect Shield), the Insane and Suicidal track clears, the date-gated Christmas Radio Station survival achievements, and the Shadow Mission DLC (nine missions plus its rank ladder).",
                "The catalog marks it difficulty 4 - the Suicidal and Insane 4-minute track clears, 20 minutes in Survival, Boss Rush wave 30, and the 10,000-kill power-up grinds all take time. Nothing is missable, though the Christmas achievements only unlock while a Christmas radio station is playing.",
                "Tip: pick a long, loud, high-energy track for the score and streak achievements - more on-screen enemies means a faster multiplier climb and easier x100, million-point and kill-streak runs."
            ]
        },
        {
            "heading": "Score, Streak & Boss Feats",
            "body": [
                "A no-death 3-minute track ('Perfect'), 60 seconds without firing, a x100 multiplier, 8 boss kills in one game, a brutal pre-fire boss kill, a 1,000 kill streak, 10 Dare Devil multipliers, a 1-million-point track, and completing your first, 25th, 50th and 100th tracks.",
                "The achievements here: Perfect (Complete a track of at least 3 minutes without losing a life); Don't Panic (Don't fire for 60 seconds); x100 (Get a x100 Multiplier); Boss Slayer (Kill 8 bosses in 1 game); Brutal Boss Kill (Kill a boss before it fires); Pwnage (Get a 1,000 kill streak); A Real Dare Devil (In Normal Mode get the Dare Devil multiplier 10 times); Go Platinum (In Normal Mode score 1 million points in one track); 1st Track Cleared (Complete your first track); 25! (Complete 25 tracks); 50! (Complete 50 tracks); 100! (Complete 100 tracks)."
            ]
        },
        {
            "heading": "Ranks, Playtime & Score Milestones",
            "body": [
                "Levelling up, reaching Senior Officer and Elite rank, 1 / 5 / 10 hours of play, scoring 1 / 5 / 10 million points total, and the Survival Mode time thresholds (5, 10, 15 and 20 minutes).",
                "The achievements here: The First Step (Level up); Half Way There (Reach the rank of Senior Officer); Elite! (Reach the rank of Elite); The First Hour (Accumulate 1 hour of play); High 5 (Accumulate 5 hours of play); Veteran (Accumulate 10 hours of play); Millionare (Score 1 Million Points); Muti Millionare (Score 5 Million Points); Dude of Hazard (Score 10 Million Points); I'm Just Starting (Reach 5 Minutes in Survival Mode); Don't Stop Me Now (Reach 10 Minutes in Survival Mode); Coming Through! (Reach 15 Minutes in Survival Mode); Survival Champion! (Reach 20 Minutes in Survival Mode)."
            ]
        },
        {
            "heading": "Perks, Difficulty & Power-Up Kills",
            "body": [
                "Unlocking all Perks, maxing a Perk and all Perks, $10,000 in the bank, the Insane and Suicidal 4-minute track clears, 10,000 Micro Missile kills, and the Ultra Beam / Reflect Shield feats (10,000 kills, a 150-kill blast, a 150-projectile reflect).",
                "The achievements here: Perks! (Unlock all the Perks); Perk MAXED (Buy all the upgrades for a Perk); Mad MAXED (Max out all the Perks); Cash Grab (Get $10,000 in the bank); Completely Insane (Complete a 4+ minute track on Insane difficulty); Tough Guy (Complete a 4+ minute track on Suicidal difficulty); Death By A Thousand Cuts (Get 10,000 kills using Micro Missiles); Death Star (Get 10,000 kills using the Ultra Beam power up); Untouchable (Reflect 10,000 projectiles using the Reflect Shield power up); Ultra Beam of Death (Kill 150 enemies with 1 Ultra Beam blast); Reflection (Reflect 150 projectiles with 1 Shield burst); Cool Tracks! (Visit a musicians website from the Credits screen); Music Tour (Score at least 1,000,000 on each built in track); A Real Mine Sweeper (Hit 50 mines in one track without losing a life); Tug of War (Have a 10 second tug of war with a Stalker)."
            ]
        },
        {
            "heading": "Modes & Boss Rush",
            "body": [
                "A 10-second Stalker tug of war, surviving 4 bosses on screen and reaching wave 30 in Boss Rush, stripping two bosses of their turrets, and the four Christmas Radio Station Survival thresholds (5, 10, 15 and 20 minutes).",
                "The achievements here: Boss Dance (Survive with 4 bosses on the screen in Boss Rush mode); Boss King (Get to Wave 30 in Boss Rush mode); Striptease (Strip 2 bosses of their turrets and keep them alive for 60s); Survive Christmas 5 (In Survival Mode last 5 mins while playing to a Christmas Radio Station); Survive Christmas 10 (In Survival Mode last 10 mins while playing to a Christmas Radio Station); Survive Christmas 15 (In Survival Mode last 15 mins while playing to a Christmas Radio Station); Survive Christmas 20 (In Survival Mode last 20 mins while playing to a Christmas Radio Station)."
            ]
        },
        {
            "heading": "Shadow Mission DLC",
            "body": [
                "Completing the nine Shadow Missions (Razorburn, Dragon Fire, The Collector, Speedy, Slick, Mosquito, Death Blossom, Juggernaut, Star Runner), the 'Music Tour', 'Cool Tracks!' and mine-sweeper feats, and the Shadow Rank ladder from Rookie to Shadow Force Elite.",
                "The achievements here: Razorburn Shadow Mission (Complete The Razorburn Shadow Mission); Dragon Fire Shadow Mission (Complete The Dragon Fire Shadow Mission); The Collector Shadow Mission (Complete The Collector Shadow Mission); Speedy Shadow Mission (Complete  The Speedy Shadow Mission); Slick Shadow Mission (Complete  The Slick Shadow Mission); Mosquito Shadow Mission (Complete  The Mosquito Shadow Mission); Death Blossom Shadow Mission (Complete The Death Blossom Shadow Mission); Juggernaut Shadow Mission (Complete  The Juggernaut Shadow Mission); Star Runner Shadow Mission (Complete The Star Runner Shadow Mission); Shadow Rank Rookie (Level up to Shadow Rookie); Shadow Rank Operative (Level up to Shadow Operative); Shadow Rank Covert Agent (Level up to Shadow Covert Agent); Shadow Rank Shadow Officer (Level up to Shadow Officer); Shadow Rank Shadow Captain (Level up to Shadow Captain); Shadow Rank Shadow Commander (Level up to Shadow Commander); Shadow Rank Shadow Force Elite (Level up to Shadow Force Elite)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Complete your first tracks and level up, then do the score and streak feats (x100, 1M points, 1,000 kill streak) on a loud energetic track.",
                "2. Unlock and max the Perks, and do the Insane and Suicidal 4-minute track clears.",
                "3. Grind the power-up kill counts (Micro Missiles, Ultra Beam, Reflect Shield) across tracks.",
                "4. Push Survival Mode to 20 minutes and Boss Rush to wave 30.",
                "5. Do the Shadow Mission DLC missions and climb its rank ladder; do the Christmas Survival achievements during December.",
                "Tip: the 10,000-kill power-up achievements are cumulative - dedicate a few long tracks each to Micro Missiles, the Ultra Beam and the Reflect Shield rather than spreading power-ups around."
            ]
        }
    ]
};
