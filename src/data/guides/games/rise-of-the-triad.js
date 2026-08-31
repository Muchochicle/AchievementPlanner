// Rise of the Triad Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/rise-of-the-triad.json), whose 80 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   217140 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "rise-of-the-triad-achievement-guide",
    "category": "game",
    "gameSlug": "rise-of-the-triad",
    "icon": "🔫",
    "title": "Rise of the Triad Achievement Guide",
    "summary": "A practical guide to all 80 Steam achievements in Rise of the Triad - none are hidden. Covers the per-level and per-episode 100% completions, the boss speed kills and difficulty clears, the combat and challenge feats, the 666-kill weapon-mastery set, and the secret and oddity achievements. None of the achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Rise of the Triad (the 2013 remake) has 80 Steam achievements and none are hidden. A large block is 100% completion of every level (E1L1 through E4L5) and every episode, plus the four boss speed kills and the four difficulty clears (up to Ludicrous). The rest are combat and challenge feats - 666-kill milestones for each of the twelve weapons plus Dog Mode and God Mode, food and gib counts, rocket-jump and trap kills - and a set of secret and oddity achievements (the Dopefish, the WARP ZONED secret levels, the Bad Ending, running with a custom mod).",
                "The catalog marks it difficulty 4 and roughly three playthroughs - 'Old School' (beat the game on Ludicrous), the every-level 100% requirement, 'Holy Shit' (maximum Ludicrous settings), and the twelve 666-kill weapon grinds all take dedicated time. Nothing is missable: every level replays from the menu and all counters are cumulative.",
                "Tip: farm the 666-kill weapon achievements on an early, enemy-dense level with a save right before a big fight - reload and clear the same room over and over with the weapon you're grinding."
            ]
        },
        {
            "heading": "Episode & Level 100%",
            "body": [
                "Completing every level at 100% (E1L1 through E4L5), completing each of the four episodes, and completing each episode at 100%.",
                "The achievements here: In the Thick of It (Complete E1L1 100%); Burned and Amazed (Complete E1L2 100%); Too Much Room (Complete E1L3 100%); Spring Surprise (Complete E1L4 100%); General Darian's Lair (Complete E1L5 100%); Buried in a Lunchbox (Complete Episode 1); Assault the Base (Complete Episode 1 100%); Into the Castle (Complete E2L1 100%); You're Tearing Me Apart! (Complete E2L2 100%); Spiraling In (Complete E2L3 100%); Four Way Chamber (Complete E2L4 100%); Look Ma! No Legs! (Complete E2L5 100%); Do You Even Stand? (Complete Episode 2); Breach the Castle (Complete Episode 2 100%); Robotricks (Complete E3L1 100%); Down and Over (Complete E3L2 100%); Dead in 5 Seconds (Complete E3L3 100%); Clear and Present Dangers (Complete E3L4 100%); Know Thine NME (Complete E3L5 100%); Enemosity (Complete Episode 3); What Lies Beneath (Complete Episode 3 100%); Monky Business (Complete E4L1 100%); Fire and Brimstone (Complete E4L2 100%); Backfire (Complete E4L3 100%); Circles of Fire (Complete E4L4 100%); El Oscuro (Complete E4L5 100%); Cult Following (Complete Episode 4); Cult Classic (Complete Episode 4 100%)."
            ]
        },
        {
            "heading": "Bosses & Difficulty",
            "body": [
                "Beating General Darian, Krist, NME and El Oscuro within their time limits, and beating the game on Easy, Medium, Hard and Ludicrous difficulty.",
                "The achievements here: 1 On 1 (Beat General Darian in 3 Minutes); Weak Legs (Beat Krist in 3 Minutes); Robo Nono (Beat NME in 5 Minutes); Deck the Hall (Beat El Oscuro in 3 Minutes); Walk in the Park (Beat the Game on Easy Difficulty); Over Easy (Beat the Game on Medium Difficulty); With a Vengeance! (Beat the Game on Hard Difficulty); Old School (Beat the Game on Ludicrous difficulty)."
            ]
        },
        {
            "heading": "Combat & Challenge Feats",
            "body": [
                "666 knife kills, the Barkblast and explosive multi-kills, activating the original soundtrack, a sub-4-hour run, Shrooms Mode, the porridge and coin speed feats, 666 Doomstick kills, the all-weapon Ludicrous gibs, a jump-pad kill, Scott's Mystical Head, 50 trap-turned kills, 50 meals, 50 gibs, a barrel kill, a Split Missile double-gib, a rocket-jump kill, and eating 4 health pickups in Shrooms Mode.",
                "The achievements here: Knife Party (Kill 666 Enemies with Knives); Beaglefaaaace! (Kill 3 Enemies at Once with the Barkblast); Raining Blood (Kill 5 People at Once with Explosives or Magical Weapons); Dat Nostalgia (Activate the Original Soundtrack); Slow Your Roll, Bro (Finish the Game in 4 Hours or Less); Consider This An Intervention (Get Shrooms Mode for the First Time); Aaron the Porridge Baron (Eat 3 Porridge Bowls in 5 Seconds); I'm a Plumber By Trade (Collect 10 Coins in 5 Seconds); This is my Doomstick! (Kill 666 Enemies with the Doomstick); Ludicrosity (Get \"Ludicrous gibs\" With All Weapons that are Capable of Gibbing); ATGM (Kill an Enemy While Under the Effects of a Jump Pad); Head Hunter (Find Scott's Mystical Head); Steppin' Razer (Kill 50 Enemies by Using Their Own Traps Against Them); Sausage Fest (Eat 50 Meals); Gib Fest (Gib 50 Enemies ); Collateral Damage (Kill an Enemy with an Exploding Barrel); Seven Ten (Gib 2 Enemies with the Split Missile); Rocket Scientist (Kill an Enemy During a Rocket Jump); Munchies (Eat 4 Health Pickups While in Shrooms Mode)."
            ]
        },
        {
            "heading": "666-Kill Weapon Mastery",
            "body": [
                "666 kills each with the Excalibat, pistols, MP40, Rocket Launcher, Heat Seeker, Split Missile, Drunk Missile, Dark Staff, Firebomb and Flamewall, and 666 kills each while in Dog Mode and God Mode.",
                "The achievements here: Juiced (Kill 666 Enemies with the Excalibat); Tequila (Kill 666 Enemies with Pistols); Spray and Pray (Kill 666 Enemies with the MP40); Rock-It Man (Kill 666 Enemies with the Rocket Launcher); Hot Blooded (Kill 666 Enemies with the Heat Seeker); Double Vision (Kill 666 Enemies with the Split Missile); Shit Faced (Kill 666 Enemies with the Drunk Missile); You Shall Not Pass (Kill 666 Enemies with the Dark Staff); Nukem (Kill 666 Enemies with the Firebomb); Global Warming (Kill 666 Enemies with the Flamewall); You're The Dog Now, Man! (Kill 666 Enemies While in Dog Mode); Judgement Day (Kill 666 Enemies While in God Mode)."
            ]
        },
        {
            "heading": "Secrets & Oddities",
            "body": [
                "Running with a custom mod or map, submitting a leaderboard score, an execution kill, the Bad Ending, playing all the secret levels (WARP ZONED), maximum Ludicrous settings (Holy Shit), the first Doomstick pickup, disabling gore, finding the Dopefish, 2,000,000 points in one level, a single-pistol Enforcer kill, being killed by a former beggar, and a three-Triad-types single-attack kill.",
                "The achievements here: It's Like DLC, But Free! (Run the Game with a Custom Mod or Map Installed); Come at me World (Submit a Score to the Leaderboard); Executioner (Kill an Enemy While He's Begging for His Life); You Suck (Get the Bad Ending); WARP ZONED (Play Through All The Secret Levels); Holy Shit (Run the Game on Maximum Ludicrous Settings); Shop Smart, Shop S Mart (Pick up the Doomstick for the first time); Grandma's Boy (Disable Gore); That's Dope (Find the Dopefish); Bonus Bonus (Get 2000000 Points in One Level); Tryhard (Kill an Enforcer with a Single Pistol); Fool Me Once (Get Killed by an Enemy Who Was Previously Begging for His Life); Triple Triad (Kill 3 Different Types of Triads with One Attack)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through the game on Easy first, learning each level's layout and secrets.",
                "2. Replay levels for 100% completion, doing the boss speed kills and the WARP ZONED secret levels.",
                "3. Grind the 666-kill weapon achievements on an enemy-dense level with reloads.",
                "4. Do the combat and food/gib feat achievements alongside the grinds.",
                "5. Beat the game on Medium, Hard and Ludicrous (and on maximum Ludicrous settings for 'Holy Shit').",
                "Tip: the difficulty clears do not stack downward - if you want all four, plan to finish the game once on each difficulty, saving Ludicrous for when you know the levels cold."
            ]
        }
    ]
};
