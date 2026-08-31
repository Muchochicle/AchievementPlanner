// Sniper Elite: Nazi Zombie Army Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/sniper-elite-nazi-zombie-army.json), whose 26 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   227100 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "sniper-elite-nazi-zombie-army-achievement-guide",
    "category": "game",
    "gameSlug": "sniper-elite-nazi-zombie-army",
    "icon": "🧟",
    "title": "Sniper Elite: Nazi Zombie Army Achievement Guide",
    "summary": "A practical guide to all 26 Steam achievements in Sniper Elite: Nazi Zombie Army - none are hidden. Covers the solo kill counts and pickups, the five chapter completions (with four players and on Elite), the four-player co-op feats, and the collectibles.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Sniper Elite: Nazi Zombie Army has 26 Steam achievements and none of them are hidden. Ten are solo-friendly kill counts and feats (500 grunts, 1000 and 5000 enemies, 100 shotgun kills, 20 mid-resurrect kills, a suicide-grenade kill, 100 explosive skeleton kills, the Occult General, and the shotgun and Preacher pickups). The rest need co-op: completing each of the five chapters with four players, completing all chapters four-player on Elite, the big explosive multi-kills (10x / 15x / 20x), 50 kick-downs, 20 sniper and 20 elite kills, 2000 grunt kills in co-op, and the Gold Bar and blood-bottle collectibles, plus owning two Nazi Zombie Army games.",
                "Nothing is missable - every chapter and difficulty is replayable and all counters are cumulative. The list is short; the real gate is assembling a four-player group for the chapter and Elite achievements.",
                "Tip: play through with four players once on a low difficulty to bank the five chapter completions and most of the co-op kill counts, then do a dedicated all-chapters run on Elite."
            ]
        },
        {
            "heading": "Solo Kills & Feats",
            "body": [
                "The solo-achievable kill counts and feats - 500 grunts, 1000 and 5000 enemies, 100 shotgun kills, 20 mid-resurrect kills, a suicide-grenade kill, 100 explosive skeleton kills, killing the Occult General, and picking up a shotgun and the Preacher.",
                "The achievements here: We got this by the ass! (Kill 500 enemy grunts); I’m coming to get you Barbara! (Kill 1000 enemies); I will not negotiate with the Undead (Kill 5000 enemies); ..My BOOMSTICK! (Kill any 100 enemy with the shotgun); Like a drunk who's lost a bet. (Kill 20 enemies as they revive); Explosive Personality! (Kill a suicide grunt by hitting his grenade); You got rid of those stiffs yet? (Kill 100 skeletons with explosives); Resurrect this! (Kill the Occult General); Groovy! (Pick up a shotgun); The Preacher says BOOM! (Pick up the Preacher)."
            ]
        },
        {
            "heading": "Chapter Completions & Co-op",
            "body": [
                "Completing each of the five chapters with four players, all chapters four-player on Elite, the 10x / 15x / 20x explosive multi-kills, 50 kick-downs, 20 sniper and 20 elite kills, 2000 co-op grunt kills, the Gold Bars and blood bottles, and owning two Nazi Zombie Army games.",
                "The achievements here: Don't mention the Z word! (Successfully complete Chapter 1 with 4  players); Resurrection Day (Successfully complete Chapter 2 with 4  players); Play it Thule (Successfully complete Chapter 3 with 4  players); The pen is mightier than the sidearm (Successfully complete Chapter 4 with 4  players); No more room in hell (Successfully complete Chapter 5 with 4  players); Send...more...Paramedics.. (Successfully complete All Chapters 4 players on Elite Difficulty); I have given them the last Reichs. (Get at least 10 for 1 explosive kill in 4 player co-op); They're all messed up (Get at least 15 for 1 explosive kill in 4 player co-op); I ran it under a cold tap. (Get at least 20 for 1 explosive kill in 4 player co-op); Soul survivor (Kick 50 enemies down in co-op); Your blood pressure is zero over zero. (Kill 20 Snipers in co-op); You’ve got red on you (Kill 2000 enemy grunts in co-op); Good, bad, I'm the guy with the gun. (Kill 20 Elites in co-op); Nazi Army Gold (Collect all Gold Bars); Bottles of Blood (Find and shoot all the bottles of blood); Have you come in contact with...the infected? (Own 2 Nazi Zombie Army games)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Do a solo or co-op run knocking out the kill-count and pickup achievements.",
                "2. Get a four-player group and complete each of the five chapters together.",
                "3. On those runs, catch the co-op feats - kick-downs, sniper and elite kills, the big explosive multi-kills.",
                "4. Sweep the Gold Bars and blood bottles across the chapters.",
                "5. Do an all-chapters four-player run on Elite difficulty for \"Send...more...Paramedics..\".",
                "Tip: the 20x explosive multi-kill is easiest at a chokepoint where the horde bunches up - lay Trip Mines and Dynamite, let a big wave pile in, then detonate."
            ]
        }
    ]
};
