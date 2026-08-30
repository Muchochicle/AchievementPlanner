// People Playground Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/people-playground.json), whose 17 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1118200 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 4 hidden achievement(s) ship no official description from
//   Steam; their requirements below are curatorial, researched from public
//   community guides.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "people-playground-achievement-guide",
    "category": "game",
    "gameSlug": "people-playground",
    "icon": "🧪",
    "title": "People Playground Achievement Guide",
    "summary": "A practical guide to all 17 Steam achievements in People Playground - 4 are hidden. Covers the kill-count ladder, item and experiment creation, and the 4 hidden contraption-based easter eggs.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "People Playground has 17 Steam achievements, and 4 are hidden. The visible list covers a kill-count ladder from your first kill up to a million, spawning 1000 items, and a run of specific sandbox experiments (injecting a radioactive substance, creating a black hole, detonating an explosive-filled organism, bursting heads with a jukebox, saving someone from a sticky grenade with an EMP, and creating exotic liquid). The 4 hidden achievements are all deliberate contraption-building easter eggs that reward exploring the sandbox's more obscure item interactions.",
                "Nothing is missable - every kill-count tier and experiment achievement is a permanent save-file stat, and the sandbox nature of the game means every hidden contraption can be rebuilt at any time. The genuine long pole is Extinction (kill a million people), which needs either a very long grinding session or an efficient mass-kill contraption rather than manual play.",
                "Tip: build a simple, repeatable kill contraption (an explosive or projectile setup that resets itself) for the big kill-count achievements rather than manually killing each person - Extinction in particular is only realistic with some kind of automated or looping setup."
            ]
        },
        {
            "heading": "Kill Counts",
            "body": [
                "The core sandbox milestones: spawning 1000 items, and killing 1, 3+, 100, 1000, 10,000, and 1,000,000 people.",
                "The achievements here: Creator (Spawn 1000 items); Murderer (Kill a person); Serial killer (Kill at least three people); Mass murderer (Kill 100 people); Massacre (Kill 1000 people); Genocide (Kill 10k people); Extinction (Kill a million people)."
            ]
        },
        {
            "heading": "Experiments & Creations",
            "body": [
                "Specific sandbox experiments: injecting a radioactive substance into a human's bloodstream, creating a black hole, detonating an explosive-liquid-filled organism, bursting heads with the jukebox, saving a human from a sticky grenade with a well-timed EMP, and creating an exotic liquid.",
                "The achievements here: Radiant (Inject a radioactive substance into the bloodstream of a human); Black hole (Create a black hole); My insides hurt (Detonate an organism filled with an explosive liquid); Volume unclamped (Use the jukebox to burst heads); Guardian EMP (Save a human from a sticky grenade by activating an EMP right before it's too late); Potion seller (Create exotic liquid)."
            ]
        },
        {
            "heading": "Hidden Achievements",
            "body": [
                "All 4 of People Playground's hidden achievements are contraption-building easter eggs, sourced from community guides (the People Playground Fandom wiki, Steam Community, ChapterCheats):",
                "Pacifist: Spend a full hour in a single session without killing anything and without going idle (no input) for more than 5 minutes at a stretch.",
                "Uncharted territory: Build the Poortvormer contraption and use it to enter the secret map hidden behind it.",
                "Faraday malfunction: On the Tower map, spawn a Jukebox and a Metal Pole, place the Metal Pole directly on top of the Jukebox, and connect the two with a wire so the Jukebox's signal reaches the pole.",
                "Inverse teleportation: Build the \"Inverse Teleportation\" contraption and use it to obtain the Normal Sized Gun."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Spawn people and experiment freely, working through the kill-count ladder (1, 3+, 100, 1000, 10000, 1,000,000) alongside spawning 1000 total items.",
                "2. Try the specific experiments as you learn the game's tools: inject a radioactive substance into a human, create a black hole, detonate an organism filled with explosive liquid, use the jukebox to burst heads, save someone from a sticky grenade with a well-timed EMP, and create an exotic liquid.",
                "3. For the hidden achievements: build the Poortvormer to find the secret map, place a Metal Pole on a Jukebox and wire them together on the Tower map, build the Inverse Teleportation contraption to obtain the Normal Sized Gun, and spend a full hour without killing anything or going idle for more than 5 minutes for Pacifist.",
                "Tip: for Extinction (1,000,000 kills), build an automated, self-resetting mass-kill contraption and let it run in the background - manually spawning and killing that many people one at a time is not realistic."
            ]
        }
    ]
};
