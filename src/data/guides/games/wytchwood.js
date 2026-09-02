// Wytchwood Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/wytchwood.json), whose 14 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   729000 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 0 achievement(s) are Steam-hidden or ship no Steam
//   description; their description here is researched from community
//   100% guides and is a curatorial summary. Every other description is
//   Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "wytchwood-achievement-guide",
    "category": "game",
    "gameSlug": "wytchwood",
    "icon": "🐐",
    "title": "Wytchwood Achievement Guide",
    "summary": "A practical guide to all 14 Steam achievements in Wytchwood (0 hidden). Every achievement carries Steam's own text - remembering the Goat's contract, collecting each of the twelve wicked souls, and completing the contract by collecting all twelve.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Wytchwood has 14 Steam achievements, none hidden. An old witch of the woods, bound by a contract with a mysterious Goat, must gather twelve wicked souls by crafting the right concoctions from the things she scavenges. The achievements are simply: remembering your contract with the Goat, collecting each of the twelve individual souls (the Bear, Cat, Fish, Hawk, Hog, Leech, Ox, Rat, Ram, Snake, Stag, Wolf, each in a specific region), and completing the Goat's contract by collecting all twelve.",
                "There are no hidden achievements - the list above is the whole set, and it maps one-to-one to story progress.",
                "The catalog marks it difficulty 2 and single-playthrough. Nothing is missable; the game is a linear sequence of soul-collection chapters and the final achievement unlocks when the last one is done."
            ]
        },
        {
            "heading": "The Contract",
            "body": [
                "Remembering the Goat's contract, and completing it by collecting all twelve wicked souls.",
                "The achievements here: First Things First (Remember your contract with the Goat.); The Goat (Collect all twelve wicked souls to complete the Goat's contract.)."
            ]
        },
        {
            "heading": "The Twelve Souls",
            "body": [
                "Collecting each wicked soul in its region - the Bear in the Forest, the Cat and the Hogs in the Market, the Fish in the Docks, the Hawk and the Ox in the Fields, the Leech in the Swamp, the Rat in the Graveyard, the Ram and the Wolf in the Village, the Snake in the Forest, and the Stag in the Mountains.",
                "The achievements here: The Bear (Collect the soul of the Bear in the Forest.); The Cat (Collect the soul of the Cat in the Market.); The Fish (Collect the soul of the Fish in the Docks.); The Hawk (Collect the soul of the Hawk in the Fields.); The Hog (Collect  the souls of the Hogs in the Market.); The Leech (Collect the soul of the Leech in the Swamp.); The Ox (Collect the Soul of the Ox in the Fields.); The Rat (Collect the soul of the Rat in the Graveyard.); The Ram (Collect the soul of the Ram in the Village.); The Snake (Collect the soul of the Snake in the Forest.); The Stag (Collect the soul of the Stag in the Mountains.); The Wolf (Collect the soul of the Wolf in the Village.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through the story chapters in order; each one culminates in collecting a wicked soul, which is one achievement.",
                "2. Craft toward each soul's required concoction using the recipe book - the game gives you every ingredient you need within reach of each chapter.",
                "3. Collect the twelfth and final soul to trigger 'The Goat' for completing the contract.",
                "Tip: there is no missable content and no reason to rush - explore each region fully for recipes and ingredients before you close out its soul, since later chapters assume you have a stocked satchel and a broad recipe book."
            ]
        }
    ]
};
