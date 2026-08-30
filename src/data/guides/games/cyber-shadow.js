// Cyber Shadow Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/cyber-shadow.json), whose 40 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   861250 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "cyber-shadow-achievement-guide",
    "category": "game",
    "gameSlug": "cyber-shadow",
    "icon": "🥷",
    "title": "Cyber Shadow Achievement Guide",
    "summary": "A practical guide to all 40 Steam achievements in Cyber Shadow - none are hidden. Covers the per-boss challenge feats, the ability unlocks and hidden special items, the traversal and combat feats, and the completion runs (minimalist, all upgrades, sub-3-hour, 100%).",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Cyber Shadow has 40 Steam achievements and none of them are hidden. About half are boss challenges - defeating each boss under a restriction (no back-hits, sword only, no damage, without destroying certain objects, by parrying only) - and the rest cover the eight ability unlocks as the story grants them, finding the hidden special items (four, then all eight), traversal and combat feats (30 seconds airborne, 50 parries, a 10-enemy shadow dash), and the completion runs: finishing normal mode, a no-HP/SP-upgrades minimalist run, finding all HP and SP upgrades, a sub-3-hour clear, and a full 100% run.",
                "Nothing is missable in the sense that chapter select lets you replay any section for its boss challenge, but this is a demanding action-platformer and several boss feats (no-damage, parry-only, tight time limits) require real practice. Two full playthroughs is the realistic path: one thorough run for the collectibles and ability achievements, and one focused run for minimalist and the sub-3-hour time.",
                "Tip: do the boss challenge achievements on chapter-select replays after you already have the full moveset - most of them are far easier when you can bring parry, charge and the airstrike to a fight the game originally expected you to do with fewer tools."
            ]
        },
        {
            "heading": "Boss Challenges",
            "body": [
                "The per-boss and per-section restriction feats: a pacifist route to the Smasher, no-turret Smasher and Hunter Tank fights, no-back-hit Apparitor, sword-free Laserbrain, no-kill rust-fly elevator, no-damage Scrambler, sword-only Biohunter, a no-death run to the dojo, a no-water Mekadragon, a no-floor AI turret fight, parry-only and 0-SP Subject Alpha, sub-60-second Tunnel Cleaner, the no-damage bike ride and sub-30-second Dropship, the no-deck-touch boat ride, the ten-strike no-land Combinatron, and the small-eyes-first Spiderail.",
                "The achievements here: Pacifist (Reach the Smasher without killing enemies.); Smashing (Defeat Smasher without destroying the wall turrets.); Fight with honor (Defeat the Apparitor without hitting him in the back.); Long distance (Defeat Laserbrain without hitting it with your sword.); Wouldn't hurt a fly (Complete Chapter 2 elevator without killing rust flies.); Not a scratch (Defeat Scrambler without taking damage.); Focused effort (Defeat Hunter Tank without destroying the popup turrets.); Boring (Destroy 5 hunter bores.); Blade's plenty (Defeat Biohunter with sword only.); Live forever (Reach the dojo without dying.); Dry socks (Defeat Mekadragon without falling into water.); Floor is lava (Defeat six AI vessel defense system turrets without touching floor.); Ping pong (Defeat Subject Alpha v1 by parrying only.); Show off (Defeat Subject Alpha v2 with 0 SP at the start of battle.); Fast track (Defeat Tunnel Cleaner in under 60 seconds.); Don't touch the paint (Complete the bike ride without taking damage.); Attacking aggressively (Defeat the Dropship in under 30 seconds.); This is my boat (Complete boat ride without teambots touching the deck.); Pogo master (Lightning strike the Combinatron head ten times without landing.); Eye for an eye (Defeat each of the small eyes before defeating Spiderail.)."
            ]
        },
        {
            "heading": "Abilities & Secrets",
            "body": [
                "Finding the lone robot in the train tunnel, the special items (four, then all eight), 30 seconds airborne, 50 parries, a 10-enemy shadow dash without touching the ground, and getting each of the eight abilities as the story provides them (shuriken, rising fire, airstrike, wall slide, katana forge, parry, dash, charge).",
                "The achievements here: Lonely robot (Find the lone robot in the train tunnel.); Tools of the trade (Find four different special items.); Gadgetmaster (Find eight different special items.); Airtime (Stay airborne for 30 seconds.); No you (Parry 50 times.); Super ninja (Shadow dash through 10 enemies without touching ground.); Saving the clan (Get shuriken.); Rise to the challenge (Get rising fire.); Strike them down (Get airstrike.); Monkey around (Get wall slide.); Forged will (Get katana forge.); Deflect evil (Get parry.); Sudden movements (Get dash.); Overpowered (Get charge.)."
            ]
        },
        {
            "heading": "Completion Runs",
            "body": [
                "The full-game achievements: a minimalist run with no HP or SP upgrades collected, finding all SP upgrades and all HP upgrades, finishing normal mode, a sub-3-hour clear, and a 100% run with every powerup collected.",
                "The achievements here: Born ready (Finish normal mode without collecting any HP or SP upgrades.); Maximum power (Find all SP upgrades.); A thousand souls (Find all HP upgrades.); Returned to ethos (Finish normal mode.); Fast as lightning (Finish normal mode in under 3 hours.); 100% (Finish normal mode with all powerups collected.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through normal mode once thoroughly - get every ability as it is offered, and explore for the hidden special items and all HP and SP upgrades (aiming for Maximum power, A thousand souls, and eventually 100%).",
                "2. Use chapter select to go back and do the boss challenge feats one at a time with your full moveset - the no-damage, parry-only and time-limited ones benefit most from knowing the fight cold.",
                "3. Do the traversal and combat feats (30 seconds airborne, 50 parries, the 10-enemy shadow dash) on any suitable section.",
                "4. Do a focused second playthrough for Born ready (no HP/SP upgrades) - play cautiously since you will be fragile the whole run.",
                "5. Do a final clean run for Fast as lightning (under 3 hours), skipping optional exploration since you have already collected everything.",
                "Tip: for the sub-3-hour run, the katana forge upgrade path massively speeds up boss fights - prioritise routing to it early, and use the airstrike to skip or shorten platforming gauntlets that otherwise eat time."
            ]
        }
    ]
};
