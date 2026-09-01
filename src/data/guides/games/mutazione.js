// Mutazione Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/mutazione.json), whose 20 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1080750 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "mutazione-achievement-guide",
    "category": "game",
    "gameSlug": "mutazione",
    "icon": "🌿",
    "title": "Mutazione Achievement Guide",
    "summary": "A practical guide to all 20 Steam achievements in Mutazione - none are hidden. Covers arriving in Mutazione, gardening and seed collection, food preferences, exploration, and the village's community moments. None of the achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Mutazione has 20 Steam achievements and none are hidden. They cover arriving in the village, meeting its cast (swimming, sailing, a spirit guide), collecting half, three quarters and nearly all of the game's seeds, gardening variety and a rebellious garden, food preferences (omnivore, veggie, vegan, ravenous), exploring the island, cycling, sleeping among bugs, strange dreams, Papu blooming, green-fingered gardening, and a group photo.",
                "The catalog marks it difficulty 1. Mutazione is a gentle, story-driven adventure about visiting a village of mutants and tending a garden; nothing here is missable, and most achievements come from simply exploring and gardening at your own pace.",
                "Tip: talk to everyone and try a variety of food and garden combinations - many of these achievements are about experimenting rather than following a single correct path."
            ]
        },
        {
            "heading": "Meeting Mutazione",
            "body": [
                "Arriving in Mutazione, wild swimming, sailing the seas, meeting a spirit guide, collecting half, three quarters and nearly all of the game's seeds, garden variety, a rebel garden, and being an omnivore.",
                "The achievements here: Welcome To Mutazione (Arrive at Mutazione.); Wild Swimmer (What are you supposed to do without lane ropes?); Seasoned Sea Dog (Ahoy m'hearties!); Spirit Guide (Did you imagine her?); Apprentice Botanist (Collect half of the seeds in Mutazione.); Intermediate Botanist (Collect three quarters of the seeds in Mutazione.); Expert Botanist (An almost complete collection of seeds.); Spice Of Life (Variety has something to do with it...); Rebel Gardener (It's not right, but it sure looks cool.); Omnivore (If it's on a plate...)."
            ]
        },
        {
            "heading": "Gardens, Dreams & Community",
            "body": [
                "Eating veggie, vegan and ravenous, exploring the island thoroughly, cycling, sleeping close to nature, strange dreams, Papu blooming, green-fingered gardening, and a group photo.",
                "The achievements here: Veggie (Environmentally friendly.); Vegan (Environmentally BFF.); Ravenous (Hungry as heck.); Seasoned Explorer (Not all who wander are lost.); N+1 (The velominati speaks.); Bug-a-Bed (Living close to nature.); Strange Dreams (Don't eat Biffalo Mozzarella before bed.); Bloom (Papu hasn't bloomed in years, they say.); Green Fingers (How does your garden grow?); Group Photo (A fine Mutazione tradition.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Arrive in Mutazione and explore the village, talking to everyone you meet.",
                "2. Tend your garden and collect seeds as you play - work up from half to three quarters to nearly all of them.",
                "3. Try different food combinations and garden layouts for the variety-based achievements.",
                "4. Explore the island thoroughly and keep playing through to the village's later story beats.",
                "Tip: this is a relaxed, exploration-friendly game - most achievements reward curiosity rather than a specific walkthrough order."
            ]
        }
    ]
};
