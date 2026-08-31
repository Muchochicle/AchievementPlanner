// Melody's Escape Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/melodys-escape.json), whose 8 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   270210 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "melodys-escape-achievement-guide",
    "category": "game",
    "gameSlug": "melodys-escape",
    "icon": "🎶",
    "title": "Melody's Escape Achievement Guide",
    "summary": "A practical guide to all 8 Steam achievements in Melody's Escape - none are hidden. Covers the score and Perfect Chain achievements and the tracks-played milestones. None of the achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Melody's Escape has 8 Steam achievements and none are hidden. Four are score feats - 3 and 5 hearts on a track, a Perfect Chain Score, and a Perfect Chain on Intense - and four are milestones: playing 1, 10 and 100 tracks, and getting a Perfect Chain on Intense ten times.",
                "The catalog marks it a short single playthrough - 'Lucid Dreamer' (100 tracks) is the only real time sink, and the Intense Perfect Chain achievements need a clean run on the hardest difficulty. Nothing is missable.",
                "Tip: use short, low-tempo tracks for the Intense Perfect Chain achievements - fewer beats means fewer chances to break the chain."
            ]
        },
        {
            "heading": "Scores & Perfect Chains",
            "body": [
                "Scoring at least 3 hearts on a track, 5 hearts on a track, a Perfect Chain Score in any difficulty, and a Perfect Chain Score on Intense difficulty.",
                "The achievements here: Warming Up (Score at least 3 hearts in any difficulty); Runner's High (Score 5 hearts on a track in any difficulty); Self-Actualizer (Get a Perfect Chain Score in any difficulty); Transcendence (Get a perfect Chain Score in Intense difficulty)."
            ]
        },
        {
            "heading": "Track Milestones",
            "body": [
                "Playing one track, ten tracks, 100 tracks, and getting a Perfect Chain Score on Intense difficulty ten times.",
                "The achievements here: A First Taste of Escape (Play one track); Escape Artist (Play 10 tracks); Lucid Dreamer (Play 100 tracks); Synesthesia (Get a Perfect Chain Score in Intense difficulty 10 times)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play a few tracks for the 3-heart and 5-heart score achievements.",
                "2. Get a Perfect Chain Score on an easier difficulty, then on Intense.",
                "3. Grind short, calm Intense tracks for ten Perfect Chains.",
                "4. Keep playing toward 10 and then 100 tracks.",
                "Tip: 'Transcendence' (Perfect Chain on Intense) is much easier on ambient or acoustic tracks where the note density stays low the whole way through."
            ]
        }
    ]
};
