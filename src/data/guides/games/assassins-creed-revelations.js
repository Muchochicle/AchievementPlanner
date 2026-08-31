// Assassin's Creed Revelations Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/assassins-creed-revelations.json), whose 48 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   201870 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "assassins-creed-revelations-achievement-guide",
    "category": "game",
    "gameSlug": "assassins-creed-revelations",
    "icon": "🗝",
    "title": "Assassin's Creed Revelations Achievement Guide",
    "summary": "A practical guide to all 48 Steam achievements in Assassin's Creed Revelations - none are hidden. Covers the Desmond and Ezio story sequences, the challenge levels and Assassin feats, the collectible and combat achievements, and The Lost Archive add-on. None of the achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Assassin's Creed Revelations has 48 Steam achievements and none are hidden. Fifteen are story - the five Desmond sequences, the nine Ezio DNA sequences, and 100% synchronisation. The rest are open: the Hagia Sofia challenge level and speed climb, all data fragments and books, all Bomb Missions, the Mediterranean Defense meta-game, the Master Assassin recruitment, a set of one-off combat feats (five hidden-blade kills in five seconds, 50 hidden-blade assassinations, poison and caltrop tricks), and the ten achievements from The Lost Archive add-on.",
                "Nothing is missable - sequences replay for full synchronisation, and every collectible, challenge and counter persists. The multiplayer achievements from the original release are not part of this Steam set.",
                "Tip: do the Master Assassin recruitment ('The Mentor', seven trainees to Master) as early as the Assassin Dens open - trainees level through Mediterranean Defense missions over real time, so starting early avoids a grind at the end."
            ]
        },
        {
            "heading": "Story Sequences",
            "body": [
                "Completing Desmond Sequences 1 through 5, Ezio's DNA Sequences 1 through 9, and achieving 100% synchronisation in all sequences.",
                "The achievements here: The Early Years (Complete Desmond Sequence 1.); Best Served Cold (Complete DNA Sequence 1.); The Reluctant Assassin (Complete Desmond Sequence 2.); Istanbul and Constantinople (Complete DNA Sequence 2.); Escape To New York (Complete Desmond Sequence 3.); Seal the Deal (Complete DNA Sequence 3.); The Prince (Complete DNA Sequence 4.); The Plot Thickens (Complete DNA Sequence 5.); Successes and Failures (Complete DNA Sequence 6.); The Rotten Apple (Complete Desmond Sequence 4.); Old Boss, New Boss (Complete DNA Sequence 7.); Priorities (Complete DNA Sequence 8.); Are You Desmond Miles? (Complete Desmond Sequence 5.); Revelations (Complete DNA Sequence 9.); Fond Memories (Achieve 100% Synchronization in all Sequences.)."
            ]
        },
        {
            "heading": "Challenges & Assassin Feats",
            "body": [
                "The Hagia Sofia challenge level, all animus data fragments, all Bomb Missions, controlling every city in Mediterranean Defense, a no-cannon den defence, the sub-25-second Hagia Sofia climb, all Faction Creed Challenges from one faction, reclaiming money from a Templar tax collector, seven trainees to Master Assassin, five hidden-blade kills in five seconds, 50 hidden-blade assassinations, and a parachute-to-zipline.",
                "The achievements here: Holy Wisdom (Complete the Hagia Sofia challenge level.); Capped (Collect all animus data fragments.); Pyromaniac (Complete all Bomb Missions.); Armchair General (Control all cities (except Rhodes) simultaneously in the Mediterranian Defense game.); Iron Curtain (Perform a perfect den defense without using the cannon.); Spider Assassin (Climb Hagia Sofia, from the ground to the pinnacle, in under 25 seconds.); A Friend Indeed (Complete all Faction Creed Challenges from a single faction.); Tax Evasion (Get your money back from a Templar tax collector.); The Mentor (Have seven trainees reach the rank of Master Assassin.); Lightning Strikes (Kill 5 guards in 5 seconds using only your hidden blades.); Overkiller (Assassinate 50 guards with the hidden blade.); Show-Off (Parachute onto a zipline.)."
            ]
        },
        {
            "heading": "Collectibles & Combat",
            "body": [
                "All books, 50 thief-loots, 10 simultaneously poisoned guards, the caltrop-and-scaffold kill, crafting 30 bombs, one trainee to Master Assassin, the Galata Tower parachute, three simultaneous throwing-knife kills, five kills under a smoke screen, a poisoned guard downing three civilians, and beating up Duccio.",
                "The achievements here: Sage (Collect all available books.); Fast Fingers (Loot 50 dead guards with thief looting.); Mosh Pit (Have 10 guards poisoned at the same time.); Mouse Trap (Kill 5 guards with a scaffold after they have been stunned by caltrops.); Craft Maniac (Craft 30 bombs.); My Protégé (Have one trainee reach the rank of Master Assassin.); Almost flying (Parachute directly from the top of the Galata Tower to the golden horn.); Silent but deadly (Kill three guards simultaneously with only throwing knives.); I can see you (Kill 5 guards while under the cover of a smoke screen bomb.); Monster's dance (Have a guard incapacitate 3 civilians while he's poisoned.); Bully (Find and beat up Duccio.)."
            ]
        },
        {
            "heading": "The Lost Archive",
            "body": [
                "The Lost Archive add-on - the induction leap of faith, reaching the Animus memo, entering the simulation, finishing memory five, experiencing the loop, all decipher fragments, breaking the loop, a 25 m fall landing, the no-fail Animus testing, and crossing the river Styx.",
                "The achievements here: Part of the Creed (Take the induction leap of faith); Jump they say (Reach the Animus memo); Enter the Animus (Enter the Animus simulation); Meet your maker (Finish memory five); The Loop (Experience the loop); Find all Pieces (Find all of the decipher fragments); Breaking the Loop (Break the loop, escape the cycle); Save yourself (Land on a block after falling more than 25 meters); Impress Warren Vidic (Complete the Animus testing sequence without failing); Cross Styx without dying (Make it across the river Styx without failing)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the story to completion, going for full synchronisation on each memory the first time through.",
                "2. Start Master Assassin recruitment as soon as the Dens open so trainees have time to rank up.",
                "3. Do the Hagia Sofia challenge level and speed climb, the Bomb Missions and the Mediterranean Defense goals.",
                "4. Sweep the data fragments and books, then the one-off combat feats.",
                "5. Play The Lost Archive add-on for its ten achievements.",
                "Tip: 'Iron Curtain' (a perfect den defence with no cannon) is easiest if you deliberately trigger a den attack early, before your notoriety and the enemy waves scale up."
            ]
        }
    ]
};
