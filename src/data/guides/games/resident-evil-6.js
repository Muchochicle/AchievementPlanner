// Resident Evil 6 Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/resident-evil-6.json), whose 70 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   221040 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "resident-evil-6-achievement-guide",
    "category": "game",
    "gameSlug": "resident-evil-6",
    "icon": "🧟",
    "title": "Resident Evil 6 Achievement Guide",
    "summary": "A practical guide to all 70 Steam achievements in Resident Evil 6 - none are hidden. Covers the four campaigns' chapters, the difficulty and progression achievements, the combat feats and collectibles, and the Mercenaries and multiplayer mode achievements. None of the achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Resident Evil 6 has 70 Steam achievements and none are hidden. Twenty-one are campaign chapters (the tutorial plus five chapters each for Leon, Chris, Jake and Ada), four are the full-game difficulty clears (Amateur through Professional), and the rest are open: the skill and title progression, a set of combat feats, kill-count grinds (500 zombies, 500 J'avo), the collectibles (serpent emblems, medals, figures), and the multiplayer-mode achievements (Mercenaries, Predator, Siege, Onslaught, Survivors).",
                "The catalog marks it missable and roughly two playthroughs - a Professional clear covers the lower difficulties, but several chapter-specific feats ('Flying Ace', 'Hard Choice', 'Sneaking Around') are one-shot per run, so a guide helps you not miss them.",
                "Tip: play the first run on Normal doing every chapter-specific feat as you reach it, then a Professional co-op run for the difficulty achievement and the kill-count grinds."
            ]
        },
        {
            "heading": "Campaign Chapters",
            "body": [
                "The tutorial, and completing all five chapters each of Leon's, Chris's, Jake's and Ada's campaigns.",
                "The achievements here: The Longest Night (Complete the tutorial.); Gone to Hell (Complete Chapter 1 in Leon's campaign.); Buried Secrets (Complete Chapter 2 in Leon's campaign.); Get on the Plane (Complete Chapter 3 in Leon's campaign.); Big Trouble in China (Complete Chapter 4 in Leon's campaign.); The Trouble with Women (Complete Chapter 5 in Leon's campaign.); Rescue the Hostages (Complete Chapter 1 in Chris' campaign.); Tragedy in Europe (Complete Chapter 2 in Chris' campaign.); After Her! (Complete Chapter 3 in Chris' campaign.); There's Always Hope (Complete Chapter 4 in Chris' campaign.); Duty Calls (Complete Chapter 5 in Chris' campaign.); Money Talks (Complete Chapter 1 in Jake's campaign.); A Revolting Development (Complete Chapter 2 in Jake's campaign.); Let's Blow This Joint (Complete Chapter 3 in Jake's campaign.); Still on the Run (Complete Chapter 4 in Jake's campaign.); See You Around (Complete Chapter 5 in Jake's campaign.); I Spy (Complete Chapter 1 in Ada's campaign.); Counterintelligence (Complete Chapter 2 in Ada's campaign.); This Takes Me Back (Complete Chapter 3 in Ada's campaign.); Ada's Demise (Complete Chapter 4 in Ada's campaign.); What's Next? (Complete Chapter 5 in Ada's campaign.)."
            ]
        },
        {
            "heading": "Difficulty & Progression",
            "body": [
                "Completing the entire game on Amateur, Normal, Veteran and Professional, customising dog tags, earning 10 titles and a level-four title, buying one skill and maxing all levelable skills, five stealth kills, ten coups de grâce, three counters in a row, the no-help dying recovery, ten partner rescues, using every weapon for ten kills each, and ten knock-offs.",
                "The achievements here: Green around the Ears (Complete the entire game on Amateur.); Normal Is Good (Complete the entire game on Normal.); Back in My Day (Complete the entire game on Veteran.); Leave It to the Pro (Complete the entire game on Professional.); Check Out My Dogs (Customize your dog tags.); Titular Achievement (Earn 10 different titles.); One Is Better Than None (Purchase one skill.); Mad Skillz (Max out all the skills that allow you to level up.); Silent Killer (Use a stealth attack to take down five enemies.); Finish What You Start (Perform a coup de grâce on ten enemies.); Bob and Weave (Counter an enemy's attack three times in row.); Down, Not Out (Defeat an enemy while dying, then recover without any help.); Lifesaver (Help or rescue your partner ten times.); Weapons Master (Use all the weapons in the game and kill ten enemies with each of them.); Give a Little Push (Knock ten enemies off a high place.); Rising Up (Earn a level-four title.)."
            ]
        },
        {
            "heading": "Combat Feats & Collectibles",
            "body": [
                "Collecting 3 figures, 20 Hydra quick-shot kills, a 50-metre thermal-scope headshot, ten stun-rod charge kills, defeating 500 zombies and 500 J'avo, 100 chrysalid enemies, rescuing two cathedral survivors, the no-scratch VTOL flight, the point-blank Magnum helicopter-pilot shot, the unnoticed aircraft-carrier bridge, 150 medals, and all serpent emblems.",
                "The achievements here: They're ACTION Figures! (Collect 3 figures.); Stuntman (Defeat 20 enemies with the Hydra using a quick shot.); Bring the Heat (Take down an enemy from 50 meters away with a headshot using the thermal scope.); High Voltage (Defeat ten enemies with a stun rod charge attack.); Zombie Massacre (Defeat 500 zombies.); J'avo Genocide (Defeat 500 J'avo.); B.O.W.s Are Ugly (Defeat 100 enemies that have come out of a chrysalid.); I Prefer Them Alive (Rescue two female survivors at the cathedral.); Flying Ace (Pilot the VTOL without getting a scratch on it.); Hard Choice (Shoot the helicopter pilot with a Magnum at point-blank range.); Sneaking Around (Get through the aircraft carrier's bridge area without being noticed.); Covered in Brass (Earn 150 different medals.); Heirlooms (Collect all the serpent emblems.)."
            ]
        },
        {
            "heading": "Mercenaries & Multiplayer Modes",
            "body": [
                "The Onslaught and versus-mode achievements - 2,000 enemies sent, a 3-stage win, a 30-combo chain, dying-state wins, five wins in a row, and the Predator, Siege and Survivors mode feats (defeating Ustanak, capturing humans as Ustanak, no-death creature runs, protecting the BSAA).",
                "The achievements here: Surrounded on All Sides (Send 2,000 enemies to your opponent's map.); Take the Stage (Defeat your opponent and achieve victory in 3 stages.); Killer Combo (Achieve a 30-combo chain.); You Are S.O.L. (Defeat your opponent 10 times with enemies you sent.); Kill or Be Killed (Win while in the dying state.); Last Man Standing--Again (Win five times in a row.); Take 'Em All Down (Defeat 100 agents.); Kung Fu Fighting (Survive to the end only using physical attacks.); Staying Alive (Return to the game as a human character.); Team Effort (Win without any members of your team being killed.); Not without a Fight (Defeat Ustanak 20 times.); Invincible (Defeat Ustanak without anyone on your team being captured.); Easy Pickings (Eliminate all players as Ustanak in less than a minute.); One Is Never Enough (As Ustanak, capture a total of 50 humans.); Held Captive (Defeat Ustanak with only one Agent remaining.); Everybody Dies (Defeat 100 player-controlled agents and 100 player-controlled creatures.); Civilian Casualties (Defeat the BSAA 100 times.); Murder Spree (Defeat the BSAA as a creature without dying once.); Two Sides of the Same Coin (Win 10 times.); Protect and Serve (Protect the BSAA without any of them getting hurt.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play all four campaigns on Normal, doing each chapter-specific feat ('Flying Ace', 'Hard Choice', 'Sneaking Around', the cathedral rescue) as you reach it.",
                "2. Level up skills and titles, and use every weapon for ten kills each.",
                "3. Do a Professional co-op run for the difficulty clear and the 500-zombie / 500-J'avo grinds.",
                "4. Collect the serpent emblems and figures, and grind medals to 150.",
                "5. Play the Mercenaries and versus modes (Predator, Siege, Onslaught, Survivors) for their achievements.",
                "Tip: the difficulty achievements stack down - a single Professional clear grants Amateur, Normal, Veteran and Professional, so don't grind the lower ones separately."
            ]
        }
    ]
};
