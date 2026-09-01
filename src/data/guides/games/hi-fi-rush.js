// Hi-Fi Rush Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/hi-fi-rush.json), whose 71 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1817230 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 22 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (TrueAchievements / Steam Community / game wikis) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "hi-fi-rush-achievement-guide",
    "category": "game",
    "gameSlug": "hi-fi-rush",
    "icon": "🎸",
    "title": "Hi-Fi Rush Achievement Guide",
    "summary": "A practical guide to all 71 Steam achievements in Hi-Fi Rush (22 hidden). Covers difficulty completions, boss defeats, upgrade/shop milestones, combat-technique achievements, and the free Arcade Update's BPM RUSH and Power Up! Tower Up! modes. Twenty-two of the achievements are hidden and their unlock conditions are researched from community guides.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Hi-Fi Rush has 71 Steam achievements and 22 are hidden. Seven are for defeating each of the game's floor bosses (QA-1MIL, Rekka, the Head of Development, Korsica, the Head of Marketing, the Head of Finance, and CEO Kale Vandelay), five are for completing the whole game on each of its five difficulties, and a batch of shop/upgrade, combat-technique and Vandelay Vlog achievements round out the base game. Ten more hidden achievements come from the free Arcade Update - visiting the arcade machine after finishing the story, clearing BPM RUSH and its EX Mode, completing all 25 floors of Power Up! Tower Up!, unlocking and using the CNMANIAC and My Hero! special attacks, perfect-parrying the update's two new enemies, and finding the secret room's gift basket and developer messages.",
                "The catalog marks it difficulty 3. Every level can be replayed from the hideout's stage select, so nothing here is missable within a single playthrough - the difficulty achievements are the only ones that need dedicated repeat runs.",
                "Tip: chip away at the grind achievements (beat-hits, robots destroyed, parries) naturally as you replay levels for combo practice rather than farming them in one sitting - Hi-Fi Rush's stage select makes revisiting any level painless."
            ]
        },
        {
            "heading": "Story Bosses & Difficulty Runs",
            "body": [
                "Defeating QA-1MIL, Rekka, the Head of Development, Korsica, the Head of Marketing, the Head of Finance, and CEO Kale Vandelay, plus completing the whole game on Easy, Normal, Hard, Very Hard, and Rhythm Master difficulty.",
                "The achievements here: Start with a bang! (Defeat QA-1MIL, the last line of defense in Quality Assurance, in Track 1.); Cream of the Crop (Defeat Rekka, the Head of Production, in Track 2.); This will cost you big time (Remove the Head of Development's creative control by defeating them.); The Negotiator (Defeat Korsica, the Head of Security.); Headliner (Defeat the Head of Marketing.); Time to pay up! (Settle the bill with the Head of Finance by defeating them.); Who's the boss now? (Defeat the CEO, Kale Vandelay.); Easy Listening (Finish the game completing every level on the Easy difficulty.); Well that was a rush! (Finish the game and complete every level on the Normal difficulty.); I think I deserve some praise, here! (Finish the game and complete every level on the Hard difficulty.); And the crowd goes wild! (Finish the game and complete every level on the Very Hard difficulty.); Didn't skip a beat! (Finish the game and complete every level on the Rhythm Master difficulty.)."
            ]
        },
        {
            "heading": "SPECTRA Mystery & Upgrades",
            "body": [
                "The hidden SPECTRA door mystery and its epic battle, chip and Special Attack purchases, health and Reverb Gauge upgrades, reading the Vandelay Vlogs, landing beat-hit attacks, and calling in Peppermint and Macaron.",
                "The achievements here: Problem solved... wait, what? (Discover the deeper mystery behind the SPECTRA doors scattered across the campus.); I can't see this ever being a problem again (Solve the SPECTRA mystery once and for all in an epic battle.); Thanks for the free chip, Peppermint! (Purchase and equip your first upgrade chip.); Chip-tuned (Increase your chip slots to the maximum capacity.); I play my own way! (Purchase and equip your first Special Attack.); Whoa! There's ANOTHER health bar!? (Increase your health to where you unlock a second tier.); I think that's enough health for now (Fully upgrade your health bar by collecting all Life Gauges.); Fully Powered Up! (Fully upgrade your Reverb Gauge to the maximum.); I have to read these things? (Find and read half of the Vandelay Vlogs on the campus.); I have to read ALL of these things? (Find and read every Vandelay Vlog on the campus.); Feeling the beat! (Land 20 beat-hit attacks on enemies.); Beat-hit mania (Land 500 beat-hit attacks on enemies.); You got this, Peppermint? (Destroy 10 barriers by calling in Peppermint.); You must like calling me in, Chai (Destroy 50 barriers by calling in Peppermint.); Z-shielding's got nothing on us! (Shatter 10 enemy shields by calling in Macaron.); I think I found your calling, Macaron (Shatter 50 enemy shields by calling in Macaron.)."
            ]
        },
        {
            "heading": "Combat Mastery & Hideout Secrets",
            "body": [
                "Putting out Korsica's fires, perfect parries, destroying security robots, Aerial Raves, Jam Combos, overkills, parry counters, the Rhythm Tower, costumes, the Wall of Fame, hideout decorations, Smidge's tips, the HR investigator, Kale's golden statues, S-rank Choruses, no-damage stages, petting 808, changing the hideout music, QA-1MIL's weakpoint, the transit rail, a volcanic parry, helping robots, shooting down drones, the largest foe's finale, and every non-boss Rhythm Parry.",
                "The achievements here: Out in a puff of smoke (Put out 10 fires in battle with Korsica.); This is a breeze! (Put out 50 fires in battle with Korsica.); Perfect Parry (Sucessfully parry with perfect timing 15 times.); Perfecter Parry-er! (Sucessfully parry with perfect timing 200 times.); Uh, they were broken when I got here (Destroy 200 Vandelay security robots.); That's a lot of junk metal… (Destroy 500 Vandelay security robots.); OK, well THEY came after ME! (Destroy 1000 Vandelay security robots.); Kissing the sky! (Perform 50 Aerial Raves.); We're Jammin' (Successfully pull off 20 Jam Combos); I'm not done with you yet (Overkill 20 enemies.); First we parry, then we counter (Perform 20 parry counters using any partner.); Now this is how you fight like a team! (Perform 100 parry counters using any partner.); My Ultimate Setlist (Complete all the floors in the Rhythm Tower.); I look cool. But I can look COOLER. (Equip any costume.); What a journey it was... (Complete the Wall of Fame in the hideout.); This was... not what I expected. (Have \"The Artist\" decorate your hideout.); There's such a thing as TOO helpful (Find and engage with every Smidge, while completing all of his practice tips.); Have we met before? (Find Vandelay HR's investigator and hear all of its monologues.); Who put gears in there? (Destroyed your first golden statue of Kale.); Alright, that felt AWESOME! (Defeated your first enemy with a Rhythm Parry Attack.); I hit things with a guitar really well. (Finish a stage with a S rank for every Chorus. (Any difficulty.)); I'm untouchable! (Finish a stage without taking any damage. (Any difficulty.)); You can pet the cat! (Play with 808 in the hideout.); Wanna hear my playlist? (Change the background music in the hideout.); Does that say weakpoint? (Destroy QA-1MIL's face, revealing its shame.); I told you I'd be fine, Peppermint! (Complete the ride through production on the transit rail without taking damage.); You ever parry a volcano? (Successfully parry a volcanic rock outside of research and development.); I am a good person who likes to help (Help out 3 Vandelay robots with their pressing issues.); I'm trying to FOCUS HERE! (Find and shoot down every hovering announcement drone.); With our powers combined…and to the rhythm… (Perfectly time your take down of your largest foe yet in a musical finale.); I saw all those hits coming a measure away! (Perfectly parry every non-boss enemy's Rhythm Parry attack. (Only for enemies in the main game.))."
            ]
        },
        {
            "heading": "Training & Arcade Update",
            "body": [
                "Purchasing every combo and partner attack, mastering the Training Room, and the free Arcade Update's arcade machine, BPM RUSH and its EX Mode, Power Up! Tower Up!, the CNMANIAC and My Hero! special attacks, perfect-parrying the update's new enemies, and the secret room's gift basket, developer messages, and Low Budget finale.",
                "The achievements here: Check out my moves! (Purchase every combo and partner attack.); OK, I THINK I know what I'm doing now (Successfully pull off every combo and attack in the Training Room.); NOW we got a kickass hideout! (Interact with the arcade machine after completing the main story.); Call me Turbo Chai (Finish a BPM RUSH run without dying, on Easy or Normal difficulty, across all 6 waves.); Choose your own adventure (Complete all 25 floors of the Power Up! Tower Up! mode.); It'll do, CNMN (Unlock the CNMANIAC special attack through arcade points, then use it in combat.); Please don't make this awkward (Obtain the My Hero! special attack via arcade points and deploy it in battle.); That was just EVIL (Clear a run of BPM RUSH in EX Mode (unlocked by earning an S rank on Easy or Normal).); New bad guys? No problem! (Execute perfect rhythm parries against both of the Arcade Update's new enemies, KEM-N0 and DM-ET1L.); It was all for this (Collect the gift basket in the secret room, unlocked after clearing 40 arcade challenges.); Voices from within (Read every developer message scattered throughout the secret room.); Low budget finish (Defeat the final boss while Chai and 808 are both wearing their Low Budget costumes.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through the campaign, defeating each floor boss and picking up upgrade chips and Special Attacks as they unlock.",
                "2. Investigate the SPECTRA doors on campus for their hidden two-part mystery achievement.",
                "3. Revisit favorite levels for the grind achievements - beat-hits, robot kills, parries and combos come naturally with practice.",
                "4. Clear the post-game Rhythm Tower, then dive into the free Arcade Update for BPM RUSH, Power Up! Tower Up!, and the secret room.",
                "5. Finish a final run in the Low Budget costumes for Chai and 808 for the last hidden achievement.",
                "Tip: the difficulty achievements for Easy through Rhythm Master each require a full separate clear - save those for planned replays rather than trying to combine them with a single blind playthrough."
            ]
        }
    ]
};
