// We Were Here Too Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/we-were-here-too.json), whose 20 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   677160 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 1 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (PowerPyx / Game8 / PlayStationTrophies / TrueAchievements) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "we-were-here-too-achievement-guide",
    "category": "game",
    "gameSlug": "we-were-here-too",
    "icon": "🗣️",
    "title": "We Were Here Too Achievement Guide",
    "summary": "A practical guide to all 20 Steam achievements in We Were Here Too (1 hidden). Covers escaping (or assisting the escape from) each of the castle's puzzle rooms as both the Explorer and the Librarian, the three endings, and inviting a friend. One achievement is hidden - the secret ending - and its unlock condition is researched from community 100% guides.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "We Were Here Too has 20 Steam achievements and 1 is hidden. The visible list is two achievements per puzzle room (one for the player who escapes it, one for the partner who assists) across the Royal Tomb, Crypts, Ritual Chamber, Dark Stairwell, Royal Promenade, the 'Windows' painting room, the Arena, the Battlefield and the Incinerator, plus two of the three endings and 'Conundrum Comrades' for inviting a friend. The single hidden one, 'Another way..', is the secret third ending.",
                "The catalog marks it difficulty 2 - it is a short two-player co-op puzzle game where each player sees only half the information and must communicate over voice. Nothing is missable; to get every achievement you play through twice, once as each role, and reach all three endings.",
                "Tip: swap roles and replay - the Explorer and Librarian each have their own per-room achievement, so a single playthrough only gives you half the list."
            ]
        },
        {
            "heading": "Puzzle Rooms, Endings & Co-op",
            "body": [
                "Escaping and assisting the escape from the Royal Tomb, the Crypts, the Ritual Chamber, the Dark Stairwell, the Royal Promenade, the 'Windows' painting room, the Arena, the Battlefield and the Incinerator, the 'escaped alone' and 'left behind' endings, the secret third ending, and inviting a friend.",
                "The achievements here: Big Hit (Escape from the Royal Tomb); Payline (Escape from the Crypts); Occultist Culling (Escape from the Ritual Chamber); Esoteric Etymology (Assisted in escaping the Ritual Chamber); Step by Step (Escape from the Dark Stairwell); Ascending Acuity (Assisted in escaping the Dark Stairwell); The Pointy End (Assisted in escaping the Royal Promenade); Astriction Constriction (Escaped the Royal Promenade); Layer Illustrator (Succesfully installed Windows); The Joy of Puzzling (Assisted in installing Windows); Maze Jogger (Escaped the Arena); The Runner Games (Assisted in escaping the Arena); Parallel Peril (Escaped the Battlefield); Gordian Knight (Assisted in escaping the Battlefield); Too Hot To Handle (Escaped the Incinerator); Medium-Rare (Assisted in escaping the Incinerator); Relation Elevation (Was this sacrifice neccessary?); Ups and Downs (Was there another way?); Another way.. (Reach the secret third ending ('Another way..').); Conundrum Comrades (Invite a friend who is good at solving puzzles!)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through once as the Explorer, escaping each puzzle room.",
                "2. Play through again as the Librarian, assisting the escape from each room.",
                "3. Reach the 'escaped alone' and 'left behind' endings across your playthroughs.",
                "4. Reach the secret third ending for 'Another way..'.",
                "5. Invite a friend for 'Conundrum Comrades'.",
                "Tip: the secret ending depends on a specific choice at the finale - look it up before your last run so you can steer toward it deliberately."
            ]
        }
    ]
};
