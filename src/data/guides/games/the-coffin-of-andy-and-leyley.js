// The Coffin of Andy and Leyley Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/the-coffin-of-andy-and-leyley.json), whose 20 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   2378900 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 0 achievement(s) are Steam-hidden or ship no Steam
//   description; their description here is researched from community
//   100% guides and is a curatorial summary. Every other description is
//   Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "the-coffin-of-andy-and-leyley-achievement-guide",
    "category": "game",
    "gameSlug": "the-coffin-of-andy-and-leyley",
    "icon": "⚰️",
    "title": "The Coffin of Andy and Leyley Achievement Guide",
    "summary": "A practical guide to all 20 Steam achievements in The Coffin of Andy and Leyley (0 hidden). Every achievement carries Steam's own text - the episode clears, the multiple endings, and a set of missable secrets scattered through each episode. Several achievements are mutually exclusive per playthrough.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "The Coffin of Andy and Leyley has 20 Steam achievements, none hidden. Two estranged siblings, trapped in a quarantined apartment building, do increasingly monstrous things to survive and stay together. The achievements cover clearing each episode (1, 2, and Episode 3: Decay), the branching endings ('Happy end!', the Truest of True-ends, the Leyley-wins box ending, the Shots and Such and Deadest of Dead-ends endings), and per-episode secrets (find the hitman, the spectator, a present, a time capsule, summon an unknown entity, leave the gas stop unnoticed / with no witnesses, do Leyley's homework right).",
                "There are no hidden achievements, but many are missable within an episode or locked to one branch, so the descriptions are the whole story.",
                "The catalog marks it difficulty 2 and two playthroughs - the ending achievements alone split across at least two runs, and the secrets each have a single window per episode."
            ]
        },
        {
            "heading": "Episodes",
            "body": [
                "Clearing Episode 1, Episode 2, and surviving Episode 3: Decay.",
                "The achievements here: Episode 1 Clear (Cleared episode 1.); Episode 2 Clear (Cleared episode 2.); Decaying Along (Survived Episode 3: Decay.)."
            ]
        },
        {
            "heading": "Endings",
            "body": [
                "The branching endings - 'Happy end!', the Truest of True-ends, the Leyley-wins box ending, the Shots and Such ending, and the Deadest of Dead-ends.",
                "The achievements here: Happy end! (The ending you deserve.); _____ in a Box (Don't grow a spine.); Splat! (Reached the Deadest of Dead-ends End.); Shots and Such (Reached the Shots and Such ending.); Cleared Burial (Reached the Truest of True-ends ending.)."
            ]
        },
        {
            "heading": "Secrets & Missables",
            "body": [
                "The per-episode secrets: the hitman, the unexpected spectator, a present, the summon, the warden catch, the time capsule, the two gas-stop outcomes, the prophecy tag win, full marks on the test, running out of Ashleys, and Leyley's homework.",
                "The achievements here: Hitman Wins! (Found the hitman.); Vision Watcher (Found an unexpected spectator.); Present (Found a present.); Unknown Summon (Summoned an unknown entity.); Warden Wins (Got caught.); Time Capsule (Found a time capsule.); Undetected (Left the gas stop relatively unnoticed.); No Witnesses (Left no witnesses.); Prophecy Fulfiller (Win at tag, just as the prophecy foretold!); Full marks! (Got full marks on a... test?); Sister Slaughterer (Ran out of Ashleys.); Little Mathematician (Did Leyley's homework right.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play a first run making your natural choices, and grab the per-episode secrets as you reach them (hitman, spectator, present, time capsule, summon, gas-stop outcomes, the homework and test).",
                "2. Note which episode each missable secret is in - reloading an earlier episode save is the only way back.",
                "3. Take one run to a 'good'/true ending (Happy end!, then the Truest of True-ends).",
                "4. Take another run down the darker branch for the Leyley-wins box ending, Shots and Such, and the Deadest of Dead-ends.",
                "5. Clean up any secret you missed with episode-select saves.",
                "Tip: keep a manual save at the start of every episode - the secrets and the ending branches both fork mid-episode with no warning, and a per-episode save turns a five-run completion into a two-run one."
            ]
        }
    ]
};
