// Super Meat Boy Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/super-meat-boy.json), whose 48 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   40800 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 8 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (PowerPyx / Game8 / PlayStationTrophies / TrueAchievements) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "super-meat-boy-achievement-guide",
    "category": "game",
    "gameSlug": "super-meat-boy",
    "icon": "🥩",
    "title": "Super Meat Boy Achievement Guide",
    "summary": "A practical guide to all 48 Steam achievements in Super Meat Boy (8 hidden). Covers beating the light and dark worlds, the no-death chapter runs, the retro warp zones, unlocking every character, and the chapter par-time challenges. Eight of the achievements are hidden - the Cotton Alley clears, the Tofu Boy code, and the chapter par-time runs - and their unlock conditions are researched from community 100% guides.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Super Meat Boy has 48 Steam achievements and 8 are hidden. Two are for completing Cotton Alley's light and dark worlds (dying allowed), one is for unlocking Tofu Boy via a character-select code, and five are the chapter par-time challenges - beating The Forest, The Hospital, The Salt Factory, Hell and The Rapture (light and dark) within a target time. Everything visible is beating the light and dark worlds, the no-death chapter 'Iron Man' runs, the retro warp zones, and unlocking the guest characters with bandages.",
                "The catalog marks it difficulty 5 - Super Meat Boy is a notoriously brutal precision platformer, and the no-death chapter runs ('Wood Boy', 'Brimstone Boy', etc) plus the par-time challenges demand real mastery and hundreds of attempts.",
                "Tip: 'Well look at you!' is free - on the character select screen (not the pause-menu one), type 'petaphile' to unlock Tofu Boy and the achievement, no skill required."
            ]
        },
        {
            "heading": "Worlds, Iron Man Runs & Warps",
            "body": [
                "The no-death runs of The Forest, Hospital, Salt Factory, Hell, Rapture, The End and Cotton Alley, unlocking one, 5, 10 and all retro warp zones, beating the light and dark worlds, and 100%-ing the game.",
                "The achievements here: Wood Boy  (Complete the Forest without dying ); Needle Boy  (Complete the Hospital without dying ); Salt Boy  (Complete the Salt Factory without dying ); Brimstone Boy  (Complete Hell without dying ); Maggot Boy  (Complete the Rapture without dying ); Dead Boy  (Complete The End without dying ); Girl Boy  (Complete the Cotton Alley without dying ); Nostalgia  (Unlock a single retro warp zone ); Living In the Past  (Complete 5 retro warp zones ); Old School  (Complete 10 retro warp zones ); Retro Rampage  (Complete all retro warp zones ); The End  (Beat the light world ); The Real End  (Beat the dark world ); Golden God  (100% the game )."
            ]
        },
        {
            "heading": "Cotton Alley, Characters & Glitch Levels",
            "body": [
                "Completing Cotton Alley's light and dark worlds, unlocking the guest characters (Head Crab, Machinarium Robot, Naija, Mr. Minecraft, RunMan, Captain Viridian, CommanderVideo, Jill, Ogmo, Flywrench, the Kid) with bandages, and the six glitch-level achievements.",
                "The achievements here: Suffragette  (Complete Cotton Alley's light world (dying is allowed).); Seneca Falls  (Complete Cotton Alley's dark world (dying is allowed).); I Have Crabs!  (Unlock the Head Crab (10 bandages) ); Metal Head  (Unlock the Machinarium Robot (30 bandages) ); I Smell something Fishy...  (Unlock Naija (50 bandages) ); Accidental Arsonist   (Unlock Mr. Minecraft (100 bandages) ); MS PAINT RULZ!  (Unlock RunMan (70 bandages) ); Vx6  (Unlock Captain Viridian (90 bandages) ); The Commander  (Unlock CommanderVideo ); The Bootlicker  (Unlock Jill ); The Jump man  (Unlock Ogmo ); The Fly guy  (Unlock Flywrench ); The Kid  (Unlock the Kid ); N#7*<1!23  (8*(@31^ ); &*>?1$  (8*(@31^ ); (=+66&1$  (8*(@31^ ); ^**5%_=+12  (8*(@31^ ); *|-0&& (8*(@31^ ); N&8^2^%$1``  (8*(@31^ )."
            ]
        },
        {
            "heading": "Dark World Iron Man, Par Times & Super Meat World",
            "body": [
                "The Tofu Boy code, the Dark World no-death runs, the chapter par-time challenges (Forest, Hospital, Salt Factory, Hell, Rapture), and the Super Meat World 'The Kids Xmas' chapter (one level, and all levels in one session).",
                "The achievements here: Well look at you! (Unlock Tofu Boy - on the character select screen, type 'petaphile'.); Squirrel Boy (Complete the Forest Dark World without dying ); Blood Clot Boy (Complete the Hospital Dark World without dying ); Missile Boy (Complete the Salt Factory Dark World without dying ); Demon Boy (Complete the Hell Dark World without dying.); Zombie Boy (Complete the Rapture Dark World without dying); Dr.Fetus Boy (Complete The End Dark World without dying); Impossible Boy (Complete The Cotton Alley Dark World without dying); Medium Well (Beat Hell (light and dark worlds) within the par time.); Rare (Beat The Forest (light and dark worlds) within the par time.); Medium (Beat The Salt Factory (light and dark worlds) within the par time.); Well Done (Beat The Rapture (light and dark worlds) within the par time.); Medium Rare (Beat The Hospital (light and dark worlds) within the par time.); The Kids Xmas! (Complete a single level of \"The Kids Xmas\" chapter in super meat world); The Golden Gift! (Complete all levels in \"The Kids Xmas\" chapter in super meat world IN ONE PLAY SESSION.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Get 'Well look at you!' immediately - type 'petaphile' on the character select screen.",
                "2. Beat the light world, then the dark world, then work toward 100%.",
                "3. Complete Cotton Alley's light and dark worlds (dying is allowed for those two).",
                "4. Do the no-death 'Iron Man' chapter runs, one chapter at a time, in both light and dark worlds.",
                "5. Grind the chapter par-time challenges (Forest, Hospital, Salt Factory, Hell, Rapture) - these are speedrun-tier.",
                "Tip: unlock characters like the Kid (very fast, high jump) before attempting the par-time challenges - the right guest character makes the target times far more achievable."
            ]
        }
    ]
};
