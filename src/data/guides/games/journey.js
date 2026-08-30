// Journey Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/journey.json), whose 14 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   638230 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "journey-achievement-guide",
    "category": "game",
    "gameSlug": "journey",
    "icon": "🏜️",
    "title": "Journey Achievement Guide",
    "summary": "A practical guide to all 14 Steam achievements in Journey - none are hidden. Covers the per-chapter exploration secrets and skill feats, and the completion, companion and community achievements that span multiple playthroughs.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Journey has 14 Steam achievements and none of them are hidden. Eight are exploration secrets and skill feats found in specific chapters - crossing the broken bridge without rebuilding it, finding the hidden desert flower, discovering all cloth creatures, a 15-gate surf run, finding the mysterious creatures in the temple, a no-scarf-tear underground passage, uncovering all 10 glyphs, and reaching the summit with a companion. The other six are about repeat play: finishing and returning to the beginning, staying with one partner, meditating with another player, meeting 10+ unique travellers, returning after a week's break, and collecting every glowing symbol across one or more journeys.",
                "Nothing is missable within a single playthrough because you can freely re-run the game, and the collectible and community achievements are tracked across all your journeys. Full completion takes at least three playthroughs plus a real-world week-long gap for the Return achievement.",
                "Tip: play with the internet connected so the game pairs you with anonymous companions - Crossing, Companion, Reflection and Wonder all need other players, and a cooperative partner also makes the chapter-secret achievements easier since one of you can scout while the other collects."
            ]
        },
        {
            "heading": "Exploration & Chapter Secrets",
            "body": [
                "The per-chapter discoveries and skill feats: crossing the broken bridge without fully rebuilding it, the hidden desert flower, all desert cloth creatures, a 15-gate sunken-city surf, the temple's mysterious creature, a no-scarf-tear underground passage, all 10 ancient glyphs, and reaching the summit with a companion.",
                "The achievements here: Threshold (Cross the broken bridge without completely rebuilding it.); Mirage (Find the hidden desert flower.); Explore (Discover all cloth creatures in the desert.); Adventure (Pass through 15 gates while surfing through the sunken city.); Ancestors (Find a mysterious creature hidden in the temple.); Trials (Sneak through the underground passage without tearing your scarf.); History (Uncover all 10 ancient glyphs.); Crossing (Reach the summit with a companion and return to the beginning.)."
            ]
        },
        {
            "heading": "Completion, Companions & Community",
            "body": [
                "The repeat-play achievements: finishing the game and returning to the beginning, finishing with the same partner for most of the journey, meditating with another player for 20+ seconds, meeting 10 or more unique travellers, restarting after a week-long break, and collecting all unique glowing symbols across one or more journeys.",
                "The achievements here: Rebirth (Finish the game and return to the beginning.); Companion (Finish the game with the same partner for the majority of the journey and return to the beginning.); Reflection (Sit and meditate with another player for more than 20 seconds.); Wonder (Meet 10 or more unique travelers.); Return (Start the journey again after a week long break.); Transcendence (Collect all unique glowing symbols across one or more journeys.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through once online, taking your time in each chapter to find that chapter's secret (the flower, the cloth creatures, the glyphs, the temple creatures) - a guide screenshot per chapter makes this a single relaxed run.",
                "2. On that run, do the skill feats: the broken-bridge crossing, the 15-gate surf, and the no-scarf-tear underground passage.",
                "3. Finish and return to the beginning for Rebirth; if you kept the same companion most of the way, Companion and Crossing unlock too, and meditating together for 20+ seconds gets Reflection.",
                "4. Do one or two more online journeys to reach 10 unique travellers (Wonder) and to collect every glowing symbol (Transcendence).",
                "5. Wait a full real-world week, then start the game again for Return.",
                "Tip: for Transcendence, the glowing symbols are the same as the glyph murals plus a few extras - clean up any you missed on a dedicated collection run with a map, since they persist across journeys and you only need every unique one once."
            ]
        }
    ]
};
