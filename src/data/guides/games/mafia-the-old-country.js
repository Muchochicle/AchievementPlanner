// Mafia: The Old Country Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/mafia-the-old-country.json), whose 62 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1941540 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 26 achievement(s) are Steam-hidden or ship no Steam
//   description; their description here is researched from community
//   100% guides and is a curatorial summary. Every other description is
//   Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "mafia-the-old-country-achievement-guide",
    "category": "game",
    "gameSlug": "mafia-the-old-country",
    "icon": "🎩",
    "title": "Mafia: The Old Country Achievement Guide",
    "summary": "A practical guide to all 62 Steam achievements in Mafia: The Old Country (26 hidden). The hidden set is the 14 spoiler-light story-chapter markers, the one-shot chapter challenges (undetected villa infiltration, beating the train, no-alarm kills, a no-hit knife duel), and collectible milestones. Sourced from PowerPyx and TheGamer; post-launch update achievements (Classic difficulty, Man of Honor, Free Ride) carry Steam's own text.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Mafia: The Old Country has 62 Steam achievements, 26 of them hidden. Mafia: The Old Country is a linear, chapter-based crime story set in early-1900s Sicily. The visible achievements are difficulty clears, the 'rare weapons expert' kill sets for each unlockable weapon, knife and explosive combat feats, driving and horse customization, and finding the collectible types (Trinacria coins, newspapers, Mystery Foxes) plus completing the full collection.",
                "The 26 hidden achievements are the 14 story-chapter markers (the game's own spoiler-light one-line descriptions, which Steam hides), a set of one-time chapter challenges (infiltrate the villa undetected, beat the train in the Chapter 7 race, kill named targets without raising the alarm, defeat Don Torrisi without taking a hit), and single-collectible / full-collectible milestones.",
                "The catalog marks it difficulty 3, missable:true and recommends 2 playthroughs. Salvatore's Apprentice (crack a safe with no combination note) is the one commonly-cited missable, and the chapter challenges are each tied to a single mission, so a cleanup run on an easier difficulty is the safe way to catch anything missed - and a second full run is needed anyway for the Hard/Classic difficulty clears and the free Man of Honor update content."
            ]
        },
        {
            "heading": "The Story (Chapters 1-14)",
            "body": [
                "The first achievement unlocks in the prologue; the other 14 are Steam-hidden chapter markers that unlock automatically at the end of each chapter. Descriptions here use the game's own one-line summaries and stay spoiler-light.",
                "The achievements here: The Carusu (Enzo escaped the mine); Guest of Honor (Story progress - Enzo found a new home (completes Chapter 1)); Forza San Celeste (Story progress - Enzo won the Palio (completes Chapter 2)); The Family Business (Story progress - Enzo learned the ropes (completes Chapter 3)); A Trip to the Coast (Story progress - Enzo saved Isabella (completes Chapter 4)); This Thing of Ours (Story progress - Enzo got made (completes Chapter 5)); Lira for Lira (Story progress - Enzo freed the counterfeiter (completes Chapter 6)); Everything’s Golden (Story progress - Enzo won the race (completes Chapter 7)); The Rat (Story progress - Enzo and Cesare killed L'Ombra (completes Chapter 8)); Total Shutdown (Story progress - Enzo found the foreman (completes Chapter 9)); No More Running (Story progress - Enzo killed his nemesis (completes Chapter 10)); Neutral Ground (Story progress - Enzo lost his mentor (completes Chapter 11)); Most Dutiful Soldier (Story progress - Enzo exacted revenge (completes Chapter 12)); Everything you Deserve (Story progress - Enzo killed the Spadaro holdouts (completes Chapter 13)); Only One Way Out (Story progress - Enzo and Isabella's story came to an end (completes the final chapter))."
            ]
        },
        {
            "heading": "Difficulty & Chapter Challenges",
            "body": [
                "The two difficulty clears plus the one-shot challenges tied to individual missions - infiltrations, no-alarm kills, race times and a no-hit duel. Each challenge is missable within its chapter, so note which you want before starting a mission.",
                "The achievements here: The Old Country (Completed the story on any difficulty); True Soldato (Completed the story on Hard difficulty); Fantasma (Infiltrate the villa in Chapter 5 without being spotted); Silent Hunter (Kill Mazzone in Chapter 13 without alerting his men); Trail of Destruction (Destroy 10 pursuing cars while escaping the Tonnara in Chapter 11); Garden Rendezvous (Meet Isabella in secret in the villa gardens during Chapter 3); Worthy Opponent (Defeat Don Torrisi in the Chapter 14 knife fight without taking a single hit); Fastest Man in Sicily (Finish the Chapter 7 road race in under 8 minutes); Not So Fast (Kill Caccini before he reaches the Salt Flats in Chapter 13); Full Steam Ahead (Beat the train during the Chapter 7 race); Man of Honor (Refuse Tino's order to kill a defenseless target in cold blood (Chapter 5)); The Old Ways (Reach the foreman's office in Chapter 9 without alerting any enemies)."
            ]
        },
        {
            "heading": "Weapons & Combat",
            "body": [
                "The 'rare weapons expert' 20-kill sets for each unlockable weapon, plus knife, headshot and explosive kill feats. All of these are cumulative across the whole playthrough.",
                "The achievements here: Rare Weapons Expert: Praecisione (Killed 20 enemies with a Praecisione); Rare Weapons Expert: Lupara (Killed 20 enemies with a Lupara); Rare Weapons Expert: Pump-Action (Killed 20 enemies with a Pump-Action Shotgun); Live by the Blade (Performed all Special Actions 5 times with each knife); Bombas Away! (Killed 10 enemies with explosives); Rare Weapons Expert: Vendetti (Killed 20 enemies with a Vendetti); Secret Assassin (Killed 20 enemies with Knife Takedowns); Rare Weapons Expert: Modello (Killed 20 enemies with a Modello C96); Cold-Blooded (Performed 30 headshots); Rare Weapons Expert: Repeater (Killed 20 enemies with a Repeater)."
            ]
        },
        {
            "heading": "Driving, Collectibles & Customization",
            "body": [
                "Car and horse customization, the single-collectible and full-collection milestones (Trinacria coins, newspapers, Mystery Foxes, photos, saint cards), and the driving stunt achievements.",
                "The achievements here: Driving in Style (Customized a car); Vulpi Misteriusa (Find one of the 50 Mystery Fox collectibles); Riding in Style (Customized a horse); Protected (Equipped a Charm); Bona Furtuna (Found a Trinacria coin); Read All About It (Found a Newspaper); Salvatore's Apprentice (Cracked a safe without a combination); Mystery Fox Domination (Find all 50 Mystery Fox collectibles across Sicily); The Collector (Completed the collection); Good as New (Fixed a broken vehicle by using the crank); Daredevil (Jumped a car over 40 meters); The Finer Things (Bought all available cars from Pasquale); Getaway Driver (Drove at 120 km/h for at least 15 seconds)."
            ]
        },
        {
            "heading": "Post-Launch Updates & Man of Honor",
            "body": [
                "Achievements added after launch by free and paid updates - the Classic difficulty clear, the Playing with Fire and Man of Honor content, and the Free Ride mode's races, standoffs, assassinations, Salieri's Jobs, Wanted Posters and stunt jumps. These carry Steam's own descriptions.",
                "The achievements here: Classico (Completed the story on Classic difficulty); Firestarter (Completed Playing with Fire); Speed Demon (Completed all Races, earning at least a medal in each); Seasoned Hunter (Completed all Standoffs, earning at least a medal in each); Deadly Assassin (Completed all Assassinations, earning at least a medal in each); A Friend of Ours (Completed Man of Honor); Against All Odds (Completed Man of Honor on Classic difficulty); The Challenger (Completed all of Salieri's Challenges, earning at least a medal in each); A Working Man (Completed all of Salieri's Jobs); The Usual Suspects (Collected all of the Wanted Posters); Stuntman (Completed all the Stunt Jumps in Free Ride); Snapshot (Enzo had his photograph taken by Isabella)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the story once on Hard difficulty (it stacks with the any-difficulty clear), taking your time with the chapter challenges as each mission comes up.",
                "2. Before each mission with a known challenge (Chapter 5 villa, Chapter 7 race, Chapter 9 foreman's office, Chapter 11 Tonnara escape, Chapters 13-14 named kills and the duel), decide whether to go for it now or reload the chapter later.",
                "3. Grind the 'rare weapons expert' kill sets and knife/explosive feats during normal combat - swap weapons deliberately so no single set lags far behind.",
                "4. Clean up collectibles with a map or guide after the story: all 50 Mystery Foxes, Trinacria coins, newspapers, photos and saint cards for The Collector.",
                "5. Run the post-launch content - a Classic-difficulty story pass, Playing with Fire, Man of Honor, and the Free Ride mode challenges.",
                "Tip: chapter select lets you replay any mission after finishing the story, so if you miss a one-shot challenge you can come back for it - but the difficulty clears must be done in a single continuous playthrough on that difficulty."
            ]
        }
    ]
};
