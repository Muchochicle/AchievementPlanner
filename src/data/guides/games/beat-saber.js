// Beat Saber Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/beat-saber.json), whose 26 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   620980 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "beat-saber-achievement-guide",
    "category": "game",
    "gameSlug": "beat-saber",
    "icon": "🗡",
    "title": "Beat Saber Achievement Guide",
    "summary": "A practical guide to all 26 Steam achievements in Beat Saber - none are hidden. Covers the tutorial and cumulative milestones, the rank and combo challenges, and the modifier and campaign achievements. None of the achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Beat Saber has 26 Steam achievements and none are hidden. A few are cumulative milestones (100 million total score, 24 hours played, 100 km of hand travel, 10,000 good cuts, 100 levels cleared), a large block is rank and combo challenges - rank S on 15 different Expert levels, a full combo on 15 different Expert levels, rank SS on an Expert level, a 500-combo Expert clear, all without modifiers - and the rest are the modifier clears (Faster, One Life, Disappearing Arrows, 4 Lives) and the campaign completion.",
                "The catalog marks it difficulty 4 - '15 Expert full combos' and '15 Expert rank S' (solo free-play only) and rank SS on Expert are a real skill wall, though the base-game song list is short. Nothing is missable.",
                "Tip: pick short, low-difficulty-mapped Expert songs for the '15 different Expert' achievements - a full combo and an S rank are much easier on a slow song with few notes than on the hard flagship tracks."
            ]
        },
        {
            "heading": "Tutorial & Milestones",
            "body": [
                "Finishing the tutorial, reaching 100 million total score, 24 hours of total play time, and 100 km of total hand travel.",
                "The achievements here: You Are Ready (Finish the tutorial.); 100 Million (Get total score 100 million or more.); Day & Night (Get total played time 24 hours or more.); Traveller (Get 100 kilometers travelled hand distance or more.)."
            ]
        },
        {
            "heading": "Rank & Combo Challenges",
            "body": [
                "Rank S on 15 different Expert levels, a full combo on 15 different Expert levels, rank S on 15 different Hard levels, a full combo on 15 different Hard levels, an Expert clear and an Expert full combo without modifiers, 10,000 good cuts, rank A on Normal, rank S on Hard, rank SS on Expert, a 50 / 100 / 500 combo on Normal / Hard / Expert, and any no-modifier clear.",
                "The achievements here: Hope (Get rank S on at least 15 different levels on expert difficulty (solo free play only).); No Mistakes (Get full combo on at least 15 different levels on expert difficulty (solo free play only).); Precision (Get rank S on at least 15 different levels on hard difficulty (solo free play only).); Drum Kit (Get full combo on at least 15 different levels on hard difficulty (solo free play only).); Expert (Clear any level on expert difficulty without any modifiers.); Supreme (Get full combo on any level on expert difficulty without any modifiers.); Drill (Get total 10 000 good cuts or more.); Good Enough (Get at least rank A on any level on normal difficulty without any modifiers.); Special (Get at least rank S on any level on hard difficulty without any modifiers.); Flawless (Get rank SS on any level on expert difficulty without any modifiers.); Pay Attention (Clear any level on normal difficulty and get at least 50 combo without any modifiers.); Concentrate (Clear any level on hard difficulty and get at least 100 combo without any modifiers.); Focus (Clear any level on expert difficulty and get at least 500 combo without any modifiers.); Pure (Clear any level without any modifiers.)."
            ]
        },
        {
            "heading": "Modifiers & Campaign",
            "body": [
                "Clearing a level with the Faster Song, One Life, Disappearing Arrows and 4 Lives modifiers, clearing 30 campaign missions, the final campaign mission, all campaign missions, and clearing 100 levels total.",
                "The achievements here: Faster (Clear any level with faster song speed modifier.); On the Edge (Clear any level with One Life modifier.); Memory (Clear any level with disappearing arrows modifier.); Charge (Clear any level with 4 Lives modifier.); Progress (Clear 30 missions in campaign.); Not the End (Clear final mission in campaign.); Peace (Clear all missions in campaign.); Warm-up (Clear 100 levels or more.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Finish the tutorial and clear the campaign missions.",
                "2. Do the modifier clears (Faster, One Life, Disappearing Arrows, 4 Lives) on an easy song.",
                "3. Work the rank-A / rank-S / rank-SS single-clear achievements up the difficulties.",
                "4. Grind rank S and full combos on 15 different Expert (and Hard) songs - pick the easiest-mapped ones.",
                "5. Keep playing toward the cumulative milestones (100M score, 24 hours, 10,000 good cuts, 100 levels).",
                "Tip: 'Flawless' (rank SS on Expert without modifiers) is the hardest single achievement - a slow, sparse custom-feeling official track like 'Angel Voices' or 'One Hope' is the usual pick."
            ]
        }
    ]
};
