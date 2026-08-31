// Orcs Must Die! Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/orcs-must-die.json), whose 27 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   102600 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "orcs-must-die-achievement-guide",
    "category": "game",
    "gameSlug": "orcs-must-die",
    "icon": "👹",
    "title": "Orcs Must Die! Achievement Guide",
    "summary": "A practical guide to all 27 Steam achievements in Orcs Must Die! - none are hidden. Covers the campaign and orc-kill totals, the kill-streak and difficulty achievements, the trap and trick-kill achievements, and the Nightmare-mode and restriction clears. None of the achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Orcs Must Die! has 27 Steam achievements and none are hidden. Six are the three campaign acts plus the 1,000 / 10,000 / 30,000 orc-kill totals, eight are kill streaks (10 up to 40), 'Ultimate War Mage' (5 skulls on every level on War Mage), and restriction wins (single trap type, no traps, 1 rift point left), nine are trick-kill counts on a single level (rolling log, barrels, chandelier, fireballs, pounders, acid pots, gibs, portal trips, an Ogre in a pit), and four are the three acts on Nightmare mode plus 'Deck the Halls'.",
                "The catalog marks it difficulty 4. 'Ultimate War Mage' and the three Nightmare clears are a real skill wall; the trick-kill achievements just need the right level and a bit of setup.",
                "Tip: get 5 skulls on each level as you first clear it on War Mage, then do a dedicated Nightmare run of each act."
            ]
        },
        {
            "heading": "Campaign & Kill Totals",
            "body": [
                "Killing 1,000, 10,000 and 30,000 orcs, and completing Act 1 ('Defender'), Act 2 ('Keepmaster') and Act 3 ('Master War Mage').",
                "The achievements here: Dead Orc = Good Orc (Kill 1,000 orcs); Droppin' Ten Large (Kill 10,000 orcs); Member: 30k Club (Kill 30,000 orcs); Defender (Complete Act 1); Keepmaster (Complete Act 2); Master War Mage (Complete Act 3)."
            ]
        },
        {
            "heading": "Kill Streaks & Difficulty",
            "body": [
                "'Ultimate War Mage' (5 skulls on every level on War Mage), 10/20/30/40 kill streaks, winning an Act 2 or 3 level with a single trap type, winning one with no traps, and winning a level with just 1 rift point left.",
                "The achievements here: Ultimate War Mage (Earn 5 skulls on every level on War Mage difficulty); Perfect 10! (Get a 10 kill streak); Natural 20! (Get a 20 kill streak); What a Mess! (Get a 30 kill streak); Who Wants Some?! (Get a 40 kill streak); Tunnel Vision (Win an act 2 or 3 level using a single trap type); No Traps for You! (Win an act 2 or 3 level without using any traps); Skin of your Teeth (Win a level with 1 rift point left)."
            ]
        },
        {
            "heading": "Trap & Trick Kills",
            "body": [
                "On a single level: 50 rolling-log kills, 50 explosive-barrel kills, 200+ gibs, 20 chandelier kills, 300 fireball kills, 50 pounder kills, 100 acid-pot kills, 20 portal trips, and killing an Ogre in a lava or acid pit.",
                "The achievements here: Who Wants Pancakes? (Get 50 kills with the rolling log in one level); Pow! Pow! (Get 50 kills with explosive barrels on one level); Giblet Storm! (Gib more than 200 enemies on one level); Lights Out! (Get 20 chandelier kills in one level); Great Balls of Fire! (Get 300 fireball kills in one level); Tenderized! (Get 50 pounder kills in one level); In your Face! (Get 100 acid pot kills in one level); SG1 (Go through portals 20 times in one level); Ogre Bisque (Kill an Ogre in a Lava Pit or an Acid Pit)."
            ]
        },
        {
            "heading": "Nightmare & Restrictions",
            "body": [
                "Completing Act 1, Act 2 and Act 3 on Nightmare mode, and clearing the Hallway using only the Arrow Wall trap, weapons and spells ('Deck the Halls').",
                "The achievements here: Legendary Defender (Complete Act 1 on Nightmare mode); Legendary Keepmaster (Complete Act 2 on Nightmare mode); Legendary War Mage (Complete Act 3 on Nightmare mode); Deck the Halls (Complete the Hallway using only the Arrow Wall trap, weapons, and spells)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the three acts on War Mage, aiming for 5 skulls on each level as you go ('Ultimate War Mage').",
                "2. Rack up the orc-kill totals naturally (30k takes replays).",
                "3. Do the trick-kill achievements on levels that suit each trap (choke points for logs and barrels, big rooms for fireballs).",
                "4. Do the restriction wins: single trap type, no traps, 1 rift point, 'Deck the Halls'.",
                "5. Do a Nightmare run of each act for the three Legendary achievements.",
                "Tip: for the trick-kill counts pick an early, easy level with a long approach and just farm - you can retry the level as many times as you need without penalty."
            ]
        }
    ]
};
