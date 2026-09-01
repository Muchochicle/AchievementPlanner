// Star Birds Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/star-birds.json), whose 59 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   2719750 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "star-birds-achievement-guide",
    "category": "game",
    "gameSlug": "star-birds",
    "icon": "🐦",
    "title": "Star Birds Achievement Guide",
    "summary": "A practical guide to all 59 Steam achievements in Star Birds - none are hidden. None of the achievements are hidden. Covers completing every campaign sector, hitting the target score and the optional challenge on each one, and the Free Play mode goals - the small/medium/large score targets, the Kardashev-scale completions, and the feature-count challenges.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Star Birds has 59 Steam achievements and none are hidden. The campaign gives most of them: for each of the ~14 sectors there is an achievement for completing it, one for reaching a target score, and often an optional challenge (finish under a time, transport 8 resource types, reach a station level without doubling up on production buildings, complete without moving your Volt Shrooms). The rest are Free Play mode: reaching score targets in small / medium / large sectors, completing sectors at rising Kardashev-scale values, and challenges tied to enabling 1 to 6 of the optional features (ice, plants, seedlings, wigglers, spiderducks, slime, lava, alien trader) plus rover-collection goals.",
                "The catalog marks it difficulty 3. It is a relaxed factory-puzzle game; the campaign completions come naturally, and the target scores and challenges are the optional layer. The Free Play feature challenges - especially the large-sector, high-complexity, 6-features one - are the hardest part.",
                "Tip: go for each sector's optional challenge on your first clear of it - most challenges are about how you build (few extractors, no doubled buildings, no pipes to the launch pad), so retrofitting a finished factory to meet them is more work than building for them from the start."
            ]
        },
        {
            "heading": "Campaign: Sectors 1-7",
            "body": [
                "Completing the early sectors and their optional challenges and target scores - Sector 1 (and the sub-3.5-minute run), Sectors 2 and 2.1 (8-resource transport, few asteroids claimed), Sector 3 (the no-doubled-buildings station level), Sectors 3.1, 4, 5 (the 40-transmission energy network), 5.1, 6 (melt all ice) and 7.",
                "The achievements here: Sector 1 completed! (Complete sector 1.); Hatchling (Reach a score of 20 in sector 1.); Space Falcon (Complete sector 1 in under 3.5 minutes.); Sector 2 completed! (Complete sector 2.); Logistics (Transport 8 different types of resources between asteroids.); Fledgling (Reach a score of 32 in sector 2.); Sector 2.1 completed! (Complete sector 2.1.); Hummingbird (Reach 75% of the maximum score in sector 2.1.); Resident Bird (Complete sector 2.1 without claiming more than 3 asteroids.); Sector 3 completed! (Complete sector 3.); Ruthlessly Efficient (Reach station level 14   without purchasing more than one of each production building.); Sector 3.1 completed! (Complete sector 3.1.); Sector 4 completed! (Complete sector 4.); Sector 5 completed! (Complete sector 5.); Overload (Create an energy network transmitting at least 40   in sector 5.); Sector 5.1 completed! (Complete sector 5.1.); Sector 6 completed! (Complete sector 6.); Hard Melting (Melt all ice on any fully covered asteroid in sector 6.); Sector 7 completed! (Complete sector 7.)."
            ]
        },
        {
            "heading": "Campaign: Sectors 3-14",
            "body": [
                "The remaining sector target scores (Finch through Duck and the Cuckoo scores for Sectors 11-14) and challenges - Sector 8's fixed Volt Shrooms, Sector 9's 10 plants, Sector 10's single extractor, Sector 11's no-pipe launch pad - up to completing Sector 14.",
                "The achievements here: Finch (Reach a score of 52 in sector 3.); Gold Finch (Reach a score of 55 in sector 3.1.); Kingfisher (Reach a score of 64 in sector 4.); Robin (Reach a score of 76 in sector 5.); Crow (Reach a score of 40 in sector 5.1.); Chickadee (Reach a score of 85 in sector 6.); Wren (Reach a score of 70 in sector 7.); Sector 8 completed! (Complete sector 8.); Fungi Friend (Complete sector 8 without recalling or moving any Volt Shrooms.); Warbler (Reach a score of 75 in sector 8.); Sector 9 completed! (Complete sector 9.); Green Alula (Cultivate at least 10 plants in sector 9.); Owl (Reach a score of 85 in sector 9.); Sector 10 completed! (Complete sector 10.); Mostly Organic (Complete sector 10 without using more than 1 extractor.); Duck (Reach a score of 85 in sector 10.); Sector 11 completed! (Complete sector 11.); On the Shoulders of Dwarves (Complete sector 11 without using pipes to transport resources to a launch pad.); Cuckoo (Reach a score of 70 in sector 11.); Sector 12 completed! (Complete sector 12.); Cuckoo (Reach a score of 70 in sector 12.); Sector 13 completed! (Complete sector 13.); Cuckoo (Reach a score of 70 in sector 13.); Sector 14 completed! (Complete sector 14.); Cuckoo (Reach a score of 70 in sector 14.)."
            ]
        },
        {
            "heading": "Free Play Mode",
            "body": [
                "Reaching score targets in small, medium and large Free Play sectors, completing sectors at Kardashev-scale values of 0.5 / 0.6 / 0.7, the feature-count challenges (from one feature in a small sector up to six features in a large high-complexity sector), and the rover and total-collection goals.",
                "The achievements here: Cold Comfort (Reach 25  in a small free play mode sector.); Bloom Boom (Reach 50  in a medium-sized free play mode sector.); Scorching Star (Reach 75  in a large free play mode sector.); Sunny Side Up (Complete a sector in free play mode with a Kardashev scale value of 0.5.); Atomic Habits (Complete a sector in free play mode with a Kardashev scale value of 0.6.); Earthly Delights (Complete a sector in free play mode with a Kardashev scale value of 0.7.); Things Are Looking Up (Collect a total of 10  in free play mode.); Ice Breaker (Complete a small free play mode sector at any complexity with one feature enabled.); Branching Out (Complete a medium-sized free play mode sector at any complexity with 2 features enabled.); Sprout Scout (Collect 100 nuggets with your rover in free play mode.); Crater Caterer (Collect a total of 250  in free play mode.); Leg Day (Complete a medium-sized free play mode sector at medium complexity with 3 features enabled.); Prime Slime (Collect a total of 100  in free play mode.); Melting and Molting (Complete a large free play mode sector at medium complexity with 4 features enabled.); Rare Finds (Complete a large free play mode sector at high complexity with 6 features enabled.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the campaign sector by sector, clearing each one and its target score.",
                "2. On each sector's first clear, also go for its optional challenge (build for it from the start).",
                "3. Finish all ~14 campaign sectors.",
                "4. Move to Free Play: hit the small / medium / large score targets and the Kardashev-scale completions.",
                "5. Work up the feature-count challenges, ending with the six-features large high-complexity sector.",
                "Tip: the Kardashev-scale Free Play achievements just need a high enough energy output at the end of a sector - build a dense solar/energy network and let it run rather than rushing to complete, and 0.7 falls out of a large sector naturally."
            ]
        }
    ]
};
