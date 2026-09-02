// MADiSON Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/madison.json), whose 32 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1670870 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 3 achievement(s) are Steam-hidden or ship no Steam
//   description; their description here is researched from community
//   100% guides and is a curatorial summary. Every other description is
//   Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "madison-achievement-guide",
    "category": "game",
    "gameSlug": "madison",
    "icon": "📷",
    "title": "MADiSON Achievement Guide",
    "summary": "A practical guide to all 32 Steam achievements in MADiSON (3 hidden). The three hidden achievements are two 'let the pursuer kill you' deaths and a five-time camera-blind against Blue Knees. Everything else - the story sections, collectible sets, photo counters, timed segments and the completion challenges (low photo count, time limits, hard and possession modes) - carries Steam's own text.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "MADiSON has 32 Steam achievements, 3 of them hidden. Luca wakes with bloody hands and an instant camera that develops photos into new places, drawn into a ritual by the demon Madison. The visible achievements cover the story sections (returning to the main house, the Cathedral and Blue Knees segments), the collectible sets (red, blue and all collectibles), the photo counters (50 / 100 / 500), the timed segments (mausoleum, shelves, tunnels), and the completion challenges - finishing with few photos, under time limits, and on hard and possession modes.",
                "The 3 hidden achievements are letting Hans kill you in the 1951 church, letting Blue Knees kill you in his section, and blinding Blue Knees five times with a close camera flash.",
                "The catalog marks it difficulty 3 and two playthroughs - the low-photo, time-limit, hard-mode and possession-mode clears realistically need more than one run, though several stack."
            ]
        },
        {
            "heading": "Progression",
            "body": [
                "The story sections - storing items and hitting Luca's storage limit, the 'Do not listen' tape, returning to the main house twice, surviving the Cathedral and Blue Knees segments - and completing the game.",
                "The achievements here: Extra pockets (Store an item for the very first time.); Fully loaded (Reach Luca's storage limit.); You shouldn't have listened (Play the \"Do not listen\" tape.); Welcome back (Get back to the main house for the first time.); Welcome back, once again (Get back to the main house a second time.); You know what to do (Find a collectible.); Elizabeth's memoirs (Find Elizabeth's diary lost page.); No time to die (Survive through the entire Cathedral section.); Hunger (Survive through the entire Blue Knees section.); The nightmare is over (Complete the game.)."
            ]
        },
        {
            "heading": "Collectibles & Photos",
            "body": [
                "The red, blue and all-collectibles sets, Elizabeth's diary page, and the 50 / 100 / 500 photo counters.",
                "The achievements here: Red (Find every red collectible.); Blue (Find every blue collectible.); Professional photographer (Find every collectible in the game.); Say cheese! (Take 50 photos.); No more smiles, please (Take 100 photos.); 500X Zoom (Take 500 photos.); Blue Knees? (Find the hidden message on the mirror.)."
            ]
        },
        {
            "heading": "Challenges & Secrets",
            "body": [
                "The three hidden deaths and the camera-blind, the timed mausoleum / shelves / tunnels runs, breaking the shovel, making the four virgins cry, and the completion challenges (low photo counts, time limits, hard and possession modes, all-achievements).",
                "The achievements here: He is here (Let Hans catch and kill you in the 1951 church section - for example, by taking too long.); Grandma was right (Let Blue Knees catch and kill you during his section of the house.); Blinded (Blind Blue Knees five times by taking a camera photo within a few metres of him as he approaches.); You... (Complete the mausoleum section under 5 minutes.); Found it! (Complete the shelves section under 5 minutes.); Follow me (Complete the tunnels section under 3 minutes.); Grandpa's tools (Break the shovel.); BLOODIOUS (Make the four virgins cry.); Do not waste (Complete the game taking 75 or fewer pictures.); Out of film (Complete the game taking 40 or fewer pictures.); The struggle within (Finish the game under 2.5 hrs.); 666 (Finish the game under 6 hrs.); Lived to tell the tale (Complete the game in hard mode or higher.); MAD SON (Unlock every achievement of the game.); You are possessed (Complete the game in possession mode.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Do a blind first run on normal to learn the layout and puzzles, picking up collectibles and taking plenty of photos for the counters.",
                "2. On that run, deliberately grab the three hidden achievements: let Hans kill you in the church, let Blue Knees kill you, and blind Blue Knees five times with the camera.",
                "3. Do a focused run for the completion challenges - hard mode, low photo count (40 or fewer) and under the 2.5-hour time - many of these stack in one careful playthrough.",
                "4. Do a possession-mode run for that achievement, and hit the timed mausoleum, shelves and tunnels targets along the way.",
                "5. Clean up any missed collectible set and Elizabeth's diary page for the all-achievements catch-all.",
                "Tip: photo count is the trap - 'Out of Film' (40 or fewer) and the photo-count achievements (500 photos) pull in opposite directions, so get the 500-photo grind done on an early exploratory run and keep your challenge run photo-disciplined from the start."
            ]
        }
    ]
};
