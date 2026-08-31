// Call of Duty: Black Ops II Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/call-of-duty-black-ops-2.json), whose 35 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   202970 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "call-of-duty-black-ops-2-achievement-guide",
    "category": "game",
    "gameSlug": "call-of-duty-black-ops-2",
    "icon": "🎯",
    "title": "Call of Duty: Black Ops II Achievement Guide",
    "summary": "A practical guide to all 35 Steam achievements in Call of Duty: Black Ops II - none are hidden. Covers the campaign missions, the Veteran clears, the campaign challenges, the Strike Force missions, and the branching story-outcome achievements.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Call of Duty: Black Ops II has 35 Steam achievements and none of them are hidden. Eleven are campaign mission completions. Two are Veteran-difficulty clears (past and future levels), three cover the campaign challenges (1, all in a level, all in the game), and six are the Strike Force missions plus the Hardened/Veteran full clear. The remaining achievements are the branching story outcomes - Mason lives, Harper's face, the Farid duel, Menendez captured, Chloe lives, and more - which depend on choices and challenge performance across the campaign.",
                "The catalog flags it as missable and roughly two playthroughs: the story-outcome achievements are choice- and challenge-gated within a run, several conflict, and the Strike Force outcomes ripple into the ending - so a full \"all outcomes\" completion needs planning and more than one campaign.",
                "Tip: follow an outcomes guide on your first campaign - the good endings require specific choices (keep Mason's dossier, do not shoot Harper, win the Farid duel, complete the Strike Force missions well) and it is far easier to hit them deliberately than to clean up on a second run."
            ]
        },
        {
            "heading": "Campaign Missions",
            "body": [
                "Completing each campaign mission from \"No Man Left Behind\" (rescue Woods) through \"Death from Above\" (stop Menendez).",
                "The achievements here: No Man Left Behind (Rescue Woods.); Gathering Storm (Investigate the jungle facility.); Shifting Sands (Gather intel on Raul Menendez from Mullah Rahmaan.); Driven by Rage (Take down Menendez and his operation.); Waterlogged (Gather information on Raul Menendez' suspected terrorist plot.); What Happens in Colossus... (Find the Karma weapon.); False Profit (Capture Manuel Noriega and bring him to justice.); Deep Cover (Capture Menendez.); Sinking Star (Interrogate Menendez.); Late for the Prom (Escort the president to the secure location in downtown LA.); Death from Above (Stop Menendez once and for all.)."
            ]
        },
        {
            "heading": "Veteran, Challenges & Strike Force",
            "body": [
                "The past-levels and future-levels Veteran clears, the full Hardened/Veteran campaign clear, completing 1 / all-in-a-level / all-in-game challenges, and the five Strike Force mission successes.",
                "The achievements here: Old Fashioned (Complete \"Pyrrhic Victory\", \"Old Wounds\", \"Time And Fate\", and \"Suffer With Me\" in Veteran.); Futurist (Complete all future levels in veteran.); Giant Accomplishment (Complete all challenges in Black Ops II. ); Mission Complete (Complete all challenges in a level. ); Just Gettin' Started (Complete 1 challenge in any level.); Singapore Sling (Successfully neutralize the SDC freighter at Keppel Terminal.); Desert Storm (Successfully escort the VIPs to safety.); Defender (Successfully defend FOB Spectre from incursion.); Black Ops II Master (Complete the campaign on Hardened or Veteran difficulty.); Art of War (Successfully assassinate SDC Chairman Tian Zhao.); Blind Date (Successfully rescue HVI.)."
            ]
        },
        {
            "heading": "Story Outcomes & Endings",
            "body": [
                "The branching story-outcome achievements - Mason lives, Harper's face saved, the Farid duel, the CIA choice, Menendez captured, Harper lives, Chloe lives, and the other choice- and challenge-gated results.",
                "The achievements here: Family Reunion (There are two futures.); Hey Good Looking (Plastic surgery avoided.); Showdown (A duel between rivals.); Dirty Business (Listen and think before you shoot.); Ship Shape (Reinforcements on the way.); Dead or Alive (Jailor or executioner. ); Ultimate Sacrifice (Only one can survive.); Good Karma (Crack the celerium worm.); High IQ (Collect all intel.); Back in Time (Use a future weapon in the past.); Man of the People (Stop the brutality inflicted by the PDF.); Gun Nut (Complete a level with customized loadout.); Ten K (Minimum score of 10k in every mission.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the campaign following an outcomes guide, keeping the dossier intel and making the choices for the good endings.",
                "2. Complete the Strike Force missions successfully - they feed the best ending.",
                "3. Do the challenges as you go, aiming for all-in-a-level and eventually all-in-game.",
                "4. Run the past and future levels on Veteran for the difficulty achievements.",
                "5. Do a second campaign for any conflicting story-outcome achievements you missed.",
                "Tip: several outcomes are mutually exclusive in one run (for example who lives at the end), so expect at least two campaigns for 100% and plan which set you are going for each time."
            ]
        }
    ]
};
