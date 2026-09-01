// Muse Dash Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/muse-dash.json), whose 39 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   774171 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 11 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (PowerPyx / Game8 / PlayStationTrophies / TrueAchievements) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "muse-dash-achievement-guide",
    "category": "game",
    "gameSlug": "muse-dash",
    "icon": "🎵",
    "title": "Muse Dash Achievement Guide",
    "summary": "A practical guide to all 39 Steam achievements in Muse Dash (11 hidden). Covers the clear-count and grade milestones, the combo and knockback grinds, the collection achievements, the themed-song clears, and a set of skill-check secrets. Eleven of the achievements are hidden and their unlock conditions are researched from community 100% guides.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Muse Dash has 39 Steam achievements and 11 are hidden. The visible ones are ordinary rhythm-game milestones - clear counts, S grades, full combos, 300 combo, knockback and heart/note collection totals, unlocking 14 characters, and clearing specific themed songs. The hidden ones are skill checks and secrets: playing a hidden sheet, clearing a Lv.4+ stage without collecting Red Hearts, hitting the title-screen mascot ten times in a row, a no-knockback clear, a Silver S on a Lv.7+ stage, a one-Miss Lv.7+ clear, 100% accuracy on a Lv.6+ stage, specific grades on 'Heart-Pounding Flight' and 'Mujinku-Vacuum Track#ADD8E6', and the two completion achievements.",
                "The catalog marks it difficulty 3 - most of the list is easy, but 'Hands of God' (100% accuracy on a Lv.6+ stage) and the Lv.7+ grade and one-Miss achievements need genuine rhythm-game skill. Nothing is missable; every stage can be replayed freely.",
                "Tip: chase the accuracy and grade secrets on the easiest song that meets each level requirement rather than your favourites - a simple Lv.6 chart is far more forgiving for 'Hands of God' than a dense Lv.6+ one."
            ]
        },
        {
            "heading": "Clears, Grades & Combos",
            "body": [
                "The tutorial, clearing 1, 20, 20 Hard and 10 Master stages, S grades (including on a Lv.7+ stage), full combos (one, and 30 different stages), 300 combo, a one-Great clear, and knocking back 100 boss melee attacks.",
                "The achievements here: Welcome to Muse Dash (Complete the tutorial stage); The First Time (Clear a stage); The Strongest among the Weak (Clear 20 stages); Tower of Strength (Clear 20 Hard Mode stages); You’ve Conquered It! (Clear 10 Master Mode stages); S (Achieve grade \"S\" in a stage); NewType (Achieve grade \"S\" in a Lv.7 or Lv.7+ stage); Full Combo!! (Get Full Combo in a stage); Full Combo Master (Get Full Combo in 30 different stages); 300 Combo! (Reach 300 Combo in a stage); You Have a Great (Clear a stage with only one \"Great\"); Melee Fight (Totally knock back 100 BOSS's melee attacks)."
            ]
        },
        {
            "heading": "Collections & Themed Songs",
            "body": [
                "Using the Music Index / filters, clearing a stage with Little Devil Marija, the Ghost, Red Heart, Note and remote-attack knockback totals, unlocking 14 characters, collecting elfins and illustrations, and clearing the themed stages (Mopemope, Blackest Luxury Car, Lights of Muse, the Christmas song, umpopoff, and the April Fool's tutorial).",
                "The achievements here: Accurate Positioning (Select a song through Music Index, Difficulty Filter or Search and play it); Walk on the Tip of a Blade (Clear a song with Little Devil Marija); Stream of Consciousness (Totally knock back 300 Ghosts); Love Actually (Totally collect 300 Red Hearts); Blue Notes Hunter (Totally collect 500 Notes); Playing along Both Lines (Totally knock back 100 enemies or BOSS's remote attacks while playing a Sheet (hold note)); Is the Order a Lovely Girl? ~ I started from scratch and did everything I could to become a Muse master with 14 lovely girls. However, when I looked forward to a happy life in this exotic world, I was suddenly thrown into a \"scene of carnage\" of gears and hanging hammers. There must be something wrong with my Lovely Girl Monogatari~ For these girls’ bright future, I must successfully play Lv.12 songs! (Totally unlock 14 characters); Musemon Master (Totally collect 8 elfins); Illustration Collection (Totally collect 20 illustrations); Have a Try? (Play a Lv.11 stage); Sancheck (Clear a Mopemope stage at any difficulty level); Uh-oh, a Rear-end Collision… (Clear a Blackest Luxury Car stage at any difficulty level); APP Logo Found! (Clear a Lights of Muse stage at any difficulty level); I don't care about Christmas though (Clear a stage of I don’t care about Christmas though at any difficulty level); Trick or treat? (Clear an umpopoff stage at difficulty level \"?\"); Conquering the Newbie Zone (Finish the tutorial April Fool's Day ver)."
            ]
        },
        {
            "heading": "Hidden Skill Checks",
            "body": [
                "Playing a hidden sheet, a no-Red-Heart Lv.4+ clear, the title-screen mascot combo, a no-knockback clear, a Silver S on a Lv.7+ stage, a one-Miss Lv.7+ clear, 100% accuracy on a Lv.6+ stage, the 'Heart-Pounding Flight' and 'Mujinku' grade checks, and the two completion achievements.",
                "The achievements here: Inner World (Play any hidden sheet (accessed via the Music Index; songs marked with a music-note-plus symbol - you only need to complete about 50% of the stage).); Give Up Treatment (Clear a Lv.4 or Lv.4+ stage without collecting any Red Hearts.); GENTLEMAN (Hit the mascot on the ENTER (title) screen more than 10 times in a row.); Is That OK?  (Clear a stage without knocking back any enemies.); You Peak at It (Achieve a 'Silver S' grade on any Lv.7 or Lv.7+ stage.); One More Needed (Finish a Lv.7 or Lv.7+ stage with only one 'Miss' judgement.); Hands of God (Achieve 100% accuracy on a Lv.6 or Lv.6+ stage.); Tutorial (Achieve a 'Silver S' grade on 'Heart-Pounding Flight' on Hard mode.); Mujinku (Achieve an 'S' grade on 'Mujinku-Vacuum Track#ADD8E6' on Hard or Master mode.); Muse Master (Obtain every non-hidden achievement.); THE MUSEM@STER (Obtain all achievements.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through the songs, clearing stages on Normal, Hard and Master and picking up the clear-count, S-grade and full-combo milestones.",
                "2. Grind the knockback and collection totals (Ghosts, Red Hearts, Notes, boss attacks) - they accumulate across every play.",
                "3. Unlock 14 characters and collect the elfins and illustrations, and clear each themed song.",
                "4. Do the easy secrets: the title-screen mascot combo, a no-knockback clear, a no-Red-Heart Lv.4+ clear, and a hidden sheet.",
                "5. Grind the skill checks - 100% accuracy on a Lv.6+ stage, a Silver S and a one-Miss on Lv.7+, and the 'Heart-Pounding Flight' and 'Mujinku' grades.",
                "Tip: 'Inner World' (a hidden sheet) only needs about half the stage completed, so you can fail out afterward - it is one of the easiest hidden achievements once you know which songs have hidden charts."
            ]
        }
    ]
};
