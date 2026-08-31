// Styx: Master of Shadows Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/styx-master-of-shadows.json), whose 33 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   242640 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 7 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (TrueAchievements / Steam Community / game wikis) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "styx-master-of-shadows-achievement-guide",
    "category": "game",
    "gameSlug": "styx-master-of-shadows",
    "icon": "🗡",
    "title": "Styx: Master of Shadows Achievement Guide",
    "summary": "A practical guide to all 33 Steam achievements in Styx: Master of Shadows (7 hidden). Covers the story missions, the combat and stealth feats, and the challenge and collectible achievements. Seven achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Styx: Master of Shadows has 33 Steam achievements and seven are hidden - completing the final mission ('Renaissance'), killing an Inquisitor in a sword duel ('Dose of his own medicine'), 20 open-combat kills ('Outstanding duelist'), 40+ throwing-knife kills ('Sharpshooter'), 50 silent kills ('Sudden silence…'), 200 total eliminations including clone kills ('Serial killer'), and staring at the World Tree too long ('Music Lover'). The rest are open: the other mission completions, the clone and skill feats, the collectibles, and 'Unseen, unknown' - the Insignia of the Shadow (a no-alert run) for every mission.",
                "The catalog marks it difficulty 4 and roughly two playthroughs - 'Unseen, unknown' requires a stealthy no-alert run of every mission, 'Pretentious' (finish a mission using no items) and 'Tidy up your room!' (no body found) are restriction runs, and the kill-count achievements are grinds. Nothing is missable: missions replay from the menu.",
                "Tip: do a first run for the story and the fun feats (chandelier drops, clone tricks), then a careful second run chasing the Insignia of the Shadow on every mission for 'Unseen, unknown'."
            ]
        },
        {
            "heading": "Story Missions",
            "body": [
                "Finishing the introduction and missions 1 through 7 (Akenash's Atrium, Master key, Deliverance, The creator, The architect, Conflagration, and the hidden final mission 'Renaissance').",
                "The achievements here: Reminiscences (Finish the introduction); Akenash's Atrium (Finished mission 1); Master key (Finished mission 2); Deliverance (Finished mission 3); The creator (Finished mission 4); The architect (Finished mission 5); Conflagration (Finished mission 6); Renaissance (Finish mission 7, the final mission ('Renaissance').)."
            ]
        },
        {
            "heading": "Combat & Stealth Feats",
            "body": [
                "A poisoned-food kill, feeding an orc a clone, a two-kill chandelier drop, a three-guard clone smoke-bomb disable, unlocking all skills, aerial and covered kills, a kill on a clone-bound enemy, a booby-trapped-clone kill, gathering all treasures, the hidden Inquisitor duel, a no-body-found mission, the hidden 20 open-combat kills, pickpocketing 15 guards, creating 30 clones, and the hidden 40 throwing-knife kills.",
                "The achievements here: Indigestion (Kill an enemy by poisoning the food); Goblin snack (Give an orc one of your clones to eat); Watch out below!  (Kill two or more enemies by making a chandelier drop on them); Like looking through a wall (Manage to disable three guards, or more, inside a clone's smoke bomb); Great power... (Unlock all skills); Goblin-tossing (Kill an enemy with an aerial kill); Wrong turn (Kill an enemy with a covered kill); Dodge this (Kill an enemy who was bound by a clone); Suicide mission (Eliminate a guard with a booby trapped clone); My precious (Gather all the treasures); Dose of his own medicine (Kill an Inquisitor in an open sword duel.); Tidy up your room! (No body found during a mission); Outstanding duelist (Kill 20 enemies in open (sword-duel) combat.); Sticky-fingered (Pick pocket 15 guards); Army of clones (Create 30 clones); Sharpshooter (Kill more than 40 guards with throwing knives.)."
            ]
        },
        {
            "heading": "Challenges & Collectibles",
            "body": [
                "Unlocking 20 doors, drinking 20 vials of amber, a no-item mission, extinguishing 30 torches, the hidden 50 silent kills, letting 15 clones die, the hidden 200 total kills, the Insignia of the Shadow for every mission, and the hidden World Tree easter egg.",
                "The achievements here: Passkey (Unlock 20 doors); Unquenched thirst (Drink 20 vials of amber); Pretentious (Do not use any item during a mission); Born in the shadow (Extinguish 30 torches); Sudden silence… (Perform 50 silent kills (muffled sneak-attack kills only).); Expendable (Let 15 clones die); Serial killer (Eliminate 200 enemies in total - your kills and your clones' kills both count.); Unseen, unknown (Unlock the Insignia of the Shadow for each mission); Music Lover (Look at the World Tree for a long time (an easter egg).)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the story to the end, doing the fun clone and chandelier feats as you go.",
                "2. Grind the kill-count achievements (200 total, 40 throwing-knife, 50 silent, 20 open-combat) across missions.",
                "3. Do the restriction runs - a no-item mission ('Pretentious') and a no-body-found mission ('Tidy up your room!').",
                "4. Do a careful stealth pass on every mission for the Insignia of the Shadow ('Unseen, unknown').",
                "5. Mop up the collectibles (all treasures) and the World Tree easter egg.",
                "Tip: 'Unseen, unknown' only needs the no-alert Insignia, not a no-kill run - so you can still take out guards silently as long as no alarm is ever raised."
            ]
        }
    ]
};
