// Batman: Arkham Asylum Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/batman-arkham-asylum.json), whose 47 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   35140 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "batman-arkham-asylum-achievement-guide",
    "category": "game",
    "gameSlug": "batman-arkham-asylum",
    "icon": "🦇",
    "title": "Batman: Arkham Asylum Achievement Guide",
    "summary": "A practical guide to all 47 Steam achievements in Batman: Arkham Asylum - none are hidden. Covers the story beats and boss fights inside Arkham, the FreeFlow combat and Invisible Predator challenge medals, the island-wide Riddler hunt, and the Perfect Knight 100% completion.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Batman: Arkham Asylum (Game of the Year Edition) has 47 Steam achievements and none of them are hidden. Most unlock naturally from playing the story: taking down Victor Zsasz, escaping Intensive Treatment, surviving the Scarecrow's fear-gas nightmares, and beating Bane, Poison Ivy and the Joker. The rest are split between the FreeFlow combat and Invisible Predator challenge maps (earning medals, chaining big combos, clean stealth clears) and Edward Nigma's 240 Riddler challenges scattered across the island.",
                "Only two things really need planning. The Joker knock-out achievements (Big Bang / Bigger Bang / Biggest Bang) are tied to the difficulty you finish the story on, and Hard difficulty is unlocked only after one full playthrough - so a Normal run then a Hard run covers all three. Everything else, including Perfect Knight (100% completion), can be mopped up in free-roam after the credits since the island stays open.",
                "Tip: solve Riddler challenges as you go rather than saving them - many require scanning a specific object or landmark while you are already in that room during the story, and although you can return later, tracking down the last handful of the 240 across the whole island is far slower than tagging them in passing."
            ]
        },
        {
            "heading": "Story & Boss Encounters",
            "body": [
                "The main campaign, from the opening Zsasz takedown in the Patient Pacification Chamber through the escape from Intensive Treatment, the Scarecrow fear-gas sequences, and the boss fights against Bane, Killer Croc's lair, the Titan Ivy plant and the Joker (including the difficulty-graded knock-out blow).",
                "The achievements here: Shocking Rescue (Take down Zsasz in the Patient Pacification Chamber); Leave No Man Behind (Rescue the guards and henchman from the Joker toxin in Decontamination); Malpractice Needs More Practice (Survive the onslaught from the deformed Joker henchman); Born Free (Escape from Intensive Treatment to the island surface); Just What The Doctors Ordered (Save all the doctors in medical); Daydreamer (Survive the nightmare of the Scarecrow's fear gas); Baneful Payback (Defeat Bane); Breaking And Entering (Gain access to Administration after it is locked down by the Joker); Recurring Nightmare (Face your biggest fears and keep your sanity); Zsasz Cut Down To Size (Save Dr. Young from being killed by Victor Zsasz); Solitary Confinement (Capture and lock up Harley Quinn); Double Trouble (Defeat two Titan Henchmen at once); Resist The Fear (Conquer the effects of the Scarecrow's fear gas); Crocodile Tears (Venture into Killer Croc's lair and come out alive); Poisoned Ivy (Defeat the giant Titan Ivy plant); Big Bang (Deliver an explosive knock out blow to the Joker (Easy difficulty)); Bigger Bang (Deliver an explosive knock out blow to the Joker (Normal difficulty)); Biggest Bang (Deliver an explosive knock out blow to the Joker (Hard difficulty)); Party Pooper (KO all the henchmen celebrating your arrival at the party)."
            ]
        },
        {
            "heading": "FreeFlow Combat & Predator Feats",
            "body": [
                "Combat-system achievements earned in either story mode or the challenge maps: FreeFlow combos of 5, 10, 20 and 40 moves, a perfect all-moves combo, gliding distance, the Titan-henchman rodeo, catching a Batarang, and the bronze/silver/gold medal tiers plus clean-run feats on the combat and predator challenges.",
                "The achievements here: Freeflow Combo 20 (Complete a combo of 20 moves (any play mode)); Freeflow Combo 40 (Complete a combo of 40 moves (any play mode)); Night Glider (Glide continuously for over 100m); Rope-a-dope-a-dope (String up one henchman and drop him to surprise a second (any play mode)); Mano-a-mano (Defeat Titan henchman without using Batarangs (any play mode)); Catch! (Catch a Batarang (any play mode)); Freeflow Combo 5 (Complete a combo of 5 moves (any play mode)); Freeflow Combo 10 (Complete a combo of 10 moves (any play mode)); Freeflow Perfection (Perform a perfect combo including all of Batman's combat moves (any play mode)); Freak Show Rodeo (Ride a Titan henchman and knock down 5 thugs (any play mode)); Freeflow Bronze (Achieve 8 medals on combat challenges); Freeflow Silver (Achieve 16 medals on combat challenges); Freeflow Gold (Achieve 24 medals on combat challenges); Predator Bronze (Achieve 8 medals on predator challenges); Predator Silver (Achieve 16 medals on predator challenges); Predator Gold (Achieve 24 medals on predator); Invisible Predator (Complete one predator challenge by using only Silent Takedowns and without being detected); Flawless Freeflow Fighter (Complete one combat challenge without taking damage)."
            ]
        },
        {
            "heading": "The Riddler & 100% Completion",
            "body": [
                "Edward Nigma's island-wide puzzle hunt - solving a rising percentage of the 240 Riddler challenges, then every last one for Crack The E Nigma - together with revealing the spirit of Amadeus Arkham (World's Greatest Detective) and the Perfect Knight 100%-completion award.",
                "The achievements here: Crack The E Nigma (Solve every riddle on the island); Arkham Analyst (Solve 5% of Riddler challenges); Cryptic Investigator (Solve 10% of Riddler challenges); Lateral Thinker (Solve 25% of Riddler challenges); Mystery Solver (Solve 40% of Riddler challenges); Conundrum Cracker (Solve 55% of Riddler challenges); Mental Athlete (Solve 70% of Riddler challenges); Riddle Resolver (Solve 85% of Riddler challenges); World's Greatest Detective (Spirit of Amadeus Arkham revealed); Perfect Knight (100% Complete)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the story on Normal difficulty, solving Riddler challenges and collecting Riddler trophies in each area as you pass through it rather than backtracking later.",
                "2. During the story, take the opportunity to build big FreeFlow combos, glide long distances, ride a Titan henchman, and catch a thrown Batarang - most of the combat feats can be ticked off in the campaign itself.",
                "3. Finish the story once for the campaign achievements and the Normal-difficulty Joker knock-out (Bigger Bang), then start a second run on the now-unlocked Hard difficulty for Biggest Bang (Big Bang, the Easy version, can be picked up on a quick separate Easy run if needed).",
                "4. Work through the FreeFlow combat and Invisible Predator challenge maps for the bronze, silver and gold medal achievements plus the no-damage and silent-takedown feats.",
                "5. Return to free-roam to finish any remaining Riddler challenges for Crack The E Nigma, which also completes the last of the collectibles for Perfect Knight.",
                "Tip: the gold-medal challenge achievements are the hardest part of the list - learn each challenge map's enemy layout on lower-scoring attempts first, and prioritise varied combos (using every move type) since variety bonuses are what push scores into gold territory."
            ]
        }
    ]
};
