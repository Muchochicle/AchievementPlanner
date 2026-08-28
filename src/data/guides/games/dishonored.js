// Dishonored Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/dishonored.json), whose 80 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   205100 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js). 63 of 80 ship a real,
//   official Steam description, quoted verbatim below.
// - The 17 hidden achievements ship no Steam description - the two
//   chaos endings, the optional non-lethal target methods and the side
//   missions. Their conditions here are curatorial, cross-checked
//   against GameTipCenter and Steam community guides, and kept
//   spoiler-light.
export const GUIDE = {
    "slug": "dishonored-achievement-guide",
    "category": "game",
    "gameSlug": "dishonored",
    "icon": "🗡️",
    "title": "Dishonored Achievement Guide",
    "summary": "A practical guide to all 80 Steam achievements in Dishonored - the stealth and chaos-run challenges, the combat and power feats, the collectible and upgrade goals, the story missions, the 17 hidden achievements (chaos endings, target methods and side missions), and the three DLCs (Dunwall City Trials, The Knife of Dunwall, The Brigmore Witches).",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Dishonored has 80 Steam achievements, 17 of them hidden (the chaos endings, the optional target methods and the side missions). The base game rewards two opposite mastery styles: a lethal high-chaos run and a non-lethal, undetected low-chaos run, plus Clean Hands (no kills) and Mostly Flesh and Steel (no powers but Blink). On top sit the combat feats and the three DLCs.",
                "Achievements are largely per-run for the mission-wide challenges (Ghost, Shadow, Clean Hands, the chaos-specific ones), so a full completion is roughly three main-game playthroughs plus one each for the two story DLCs.",
                "Tip: plan the runs - one low-chaos, fully-ghost, no-kills run (covers Ghost, Shadow, Clean Hands, Just Dark Enough and the non-lethal target achievements), one high-chaos combat run (Dunwall in Chaos and the combat feats), and one Mostly Flesh and Steel run. Do the same low/high split for each story DLC."
            ]
        },
        {
            "heading": "Stealth & Chaos Runs",
            "body": [
                "The mission-wide challenges: Ghost and Shadow (no alerts/no kills across all missions), Mostly Flesh and Steel (no powers but Blink), Clean Hands (no kills at all), Specter and Faceless (a single mission unalerted), and Surgical (under 10 kills through Kaldwin's Bridge).",
                "The achievements here: Ghost (Complete all missions after the prologue, alerting no one or killing no one but key targets); Shadow (Complete all missions after the prologue without alerting anyone); Mostly Flesh and Steel (Finish the game without purchasing any supernatural powers or enhancements, besides Blink); Specter (After escaping prison, complete a mission without alerting anyone, and kill less than 5 people); Faceless (After escaping Coldridge Prison, complete a single mission without alerting anyone); Surgical (Play from the first mission through Kaldwin's Bridge killing fewer than 10 characters); Clean Hands (Complete the game without killing anyone)."
            ]
        },
        {
            "heading": "Combat & Power Feats",
            "body": [
                "The one-off combat and power achievements: pickpocketing, using every weapon and gadget, Wall of Light and Wall of Flesh kills, unaware and drop assassinations, making enemies kill each other, the sub-second multi-kills (Hornets' Nest, Speed of Darkness, Tempest), possession, unintentional suicides, and eluding pursuers.",
                "The achievements here: Thief (Pickpocket items worth a total of 200 coins); Versatile (Kill characters with each weapon and offensive gadget); Wall of Sparks (Kill an enemy using a Wall of Light); Rogue (Assassinate 10 unaware enemies); Manipulator (Make others kill 5 of their own allies); Razor Rain (Kill 5 characters with Drop Assassination); Harm's Way (Cause 5 unintentional suicides); Inhabitant (Stay in possession of others for most of a 3 minute period); Hornets' Nest (Kill 4 enemies in less than 1 second using the crossbow); Speed of Darkness (Travel 30 meters in less than 1 second); Tempest (Kill 6 enemies in less than 1 second); The Escapist (After Coldridge Prison, elude 5 pursuers at once without killing them or leaving the map); Cleaner (Fight with 5 enemies at once, without any of them surviving); Wall of Flesh (Use an enemy lifted with Pull as a shield)."
            ]
        },
        {
            "heading": "Collectibles & Upgrades",
            "body": [
                "15 equipment upgrades (Merchant of Disorder), all Sokolov paintings (Art Dealer), and 10 bone charms (Occultist).",
                "The achievements here: Merchant of Disorder (Acquire 15 equipment upgrades); Art Dealer (Collect all the Sokolov paintings); Occultist (Collect 10 bone charms)."
            ]
        },
        {
            "heading": "Story Missions",
            "body": [
                "The mission-completion markers, described by their objective only - the intro, eliminating High Overseer Campbell, finding Emily, the Bridge mission, the Lord Regent, recovering your belongings and finishing the game.",
                "The achievements here: Dishonored (Complete the Intro missions); Excommunication (Eliminate High Overseer Campbell); Child Care (Find Emily Kaldwin); Capturing Genius and Madness (Complete the Bridge mission); Regicide (Assassinate the Lord Regent, Hiram Burrows); Political Suicide (Expose the Lord Regent's crimes and bring about his arrest); This Is Mine (Recover your belongings); Resolution (Complete the game)."
            ]
        },
        {
            "heading": "Hidden Achievements",
            "body": [
                "Seventeen achievements are hidden - the two chaos endings, the optional non-lethal target methods, the side-mission chains, and a few one-off feats:",
                "The achievements here: Dunwall in Chaos (Complete the game in high chaos.); Just Dark Enough (Complete the game in low chaos.); Vanished (Escape prison and navigate the sewers undetected.); Gentleman Caller (Complete all of Granny Rags's side missions.); Street Conspiracy (Complete all of Slackjaw's side missions.); The Art of the Steal (Get the Art Dealer's safe combination for Slackjaw, but rob the safe first.); An Unfortunate Accident (Kill Morgan Pendleton with steam.); Well Mannered (Complete the Boyle Estate mission without spoiling the party.); King of the World (Reach the top of Kaldwin's Bridge.); Bodyguard (Protect Callista's uncle, Captain Geoff Curnow.); Mercy is the Mark (Spare Daud's life.); Lights Out (Deactivate at least 5 security systems on Kingsparrow Island.); Long Live the Empress (Save Empress Emily Kaldwin.); Poetic Justice (Neutralise every key target using indirect (non-lethal) means.); Food Chain (Assassinate an assassin.); Alive Without Breath (Take possession of a fish.); Creepy Crawly (Use a rat tunnel.)."
            ]
        },
        {
            "heading": "Dunwall City Trials (DLC)",
            "body": [
                "The challenge-map DLC: finding Emily's doll in each of the 10 challenges, all-challenge 3-star ratings, and the individual map achievements (Back Alley Brawl wave 13, Train Runner, Kill Cascade, Assassin's Run, Bonfires, Mystery Foe, Chain Kill / Bend Time Massacre).",
                "The achievements here: Back Home (Grab a live grenade and use it to kill an attacker); Big Boy (Kill a tallboy with only your sword); Mrs Pilsen's Remorse (Find Emily's doll hidden in each of the 10 challenges); Void Star (Complete all Normal and Expert challenges with a 3-Stars rating); By My Hand Alone (Get to Wave 13 in Back Alley Brawl killing all combatants personally); Assassin Vs. Machine (Complete Train Runner before the train arrives at the station); Rare Collector (Find all of the collectable figurines in Burglar on Expert); Long Way Down (Perform a drop assassination of at least 150 meters in the Kill Cascade challenge); Headhunter (Complete Assassin's Run with 100% accuracy using only head shots); Daredevil (In Bonfires, perform all the special combination jumps in 1 round); Natural Talent (Finish Mystery Foe without using any active supernatural powers); Time Management (Finish Chain Kill or Bend Time Massacre without failing any wave, including bonuses)."
            ]
        },
        {
            "heading": "The Knife of Dunwall (DLC)",
            "body": [
                "Playing as Daud: the story markers (the Slaughterhouse, Thalia Timsh, recovering your belongings, delivering the blow to Corvo), all Favors, high-chaos and low-chaos completions, no-alert and no-kill completions, and the feat achievements (arc-mine rat, Empress-statue drop, Delilah's statue).",
                "The achievements here: Just Business  (Get the information you need from the Rothwild Slaughterhouse); Missing Pieces (Meet with Thalia Timsh, the Barrister's Niece); Well Connected (Purchase all of the Favors in The Knife of Dunwall); No Regrets (Complete The Knife of Dunwall in High Chaos); Redemptive Path (Complete The Knife of Dunwall in Low Chaos); Whisper Ways (Complete The Knife of Dunwall without alerting anyone); Cleaner Hands (Complete The Knife of Dunwall without killing anyone); Rats and Ashes (Attach an arc mine to a rat, resulting in a kill); Message from the Empress (Perform a drop assassination from atop the Empress statue in The Knife of Dunwall); Stone Cold Heart (Speak with the statue of Delilah Copperspoon in Timsh's estate); Parting Shot (Deliver (or attempt) the killing blow on Corvo)."
            ]
        },
        {
            "heading": "The Brigmore Witches (DLC)",
            "body": [
                "Daud's second episode: breaking out Lizzy Stride, restoring the Undine, 8 favors, high-chaos and low-chaos completions, no-alert and no-kill completions, and surviving in low chaos with 10,000 coins.",
                "The achievements here: Breakout (Break Lizzy Stride out of Coldridge Prison); Gangs of Dunwall (Restore the Undine to working condition); Deal Maker (Purchase at least 8 favors in The Brigmore Witches); All Come To Ruin (Complete The Brigmore Witches in High Chaos); Changed Ways (Complete The Brigmore Witches in Low Chaos); Silence is Golden (Complete The Brigmore Witches without alerting anyone); Cleanest Hands (Complete The Brigmore Witches without killing anyone); Enough Coin to Disappear (Survive The Brigmore Witches in low chaos with 10,000 coins)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Low-chaos run: fully ghost, no kills, all bone charms and paintings, doing the non-lethal target methods and side missions (Poetic Justice, Gentleman Caller, Street Conspiracy, The Art of the Steal, Bodyguard, Mercy is the Mark, Long Live the Empress, Just Dark Enough, Ghost, Shadow, Clean Hands, Occultist, Art Dealer).",
                "2. High-chaos run: the combat feats, the lethal target kills (An Unfortunate Accident, Food Chain), Dunwall in Chaos, and the sub-second multi-kills.",
                "3. Mostly Flesh and Steel run (Blink only).",
                "4. Play the Dunwall City Trials DLC for its block, then The Knife of Dunwall and The Brigmore Witches, each with a low-chaos/no-kill and a high-chaos pass.",
                "Tip: Clean Hands and Ghost/Shadow can all be done in the same run if you are patient - knock out (do not kill) or avoid every human, keep the alarm from ever sounding, and use the non-lethal target options; a single perfect low-chaos run covers a huge fraction of the list."
            ]
        }
    ]
};
