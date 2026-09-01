// Venba Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/venba.json), whose 15 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1491670 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 5 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (TrueAchievements / Steam Community / game wikis) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "venba-achievement-guide",
    "category": "game",
    "gameSlug": "venba",
    "icon": "🍛",
    "title": "Venba Achievement Guide",
    "summary": "A practical guide to all 15 Steam achievements in Venba (5 hidden). Covers successfully cooking every recipe, a perfect no-mistake playthrough, and reading the game's text and phone conversations. Five of the achievements are hidden and their unlock conditions are researched from a community 100% guide.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Venba has 15 Steam achievements and 5 are hidden. They cover successfully cooking idlis, puttu, biriyani, the dinner spread, Chicken Rasam and dosas, completing the park level, a failed 'launched' puttu, a single perfect recipe and a perfect run of every recipe. The five hidden achievements are reading all the texts in Venba's phone, reading all the texts in Kavin's phone, reading every level's flavor text, getting all three of those reading achievements in the same run, and making an oothappam without chillies in Chapter 7.",
                "The catalog marks it difficulty 2. Venba is a short, story-focused cooking game about an immigrant family; nothing is missable within a playthrough since you can read texts and flavor text at your own pace before moving on.",
                "Tip: take your time in each chapter to read every phone conversation and flavor-text prompt before continuing - most of the hidden achievements are about not rushing through the story."
            ]
        },
        {
            "heading": "Cooking Every Recipe",
            "body": [
                "Successfully making idlis, 'launching' puttu, completing the park level, making the biriyani, the dinner spread, the Chicken Rasam and the dosas, and a crumbling puttu launch.",
                "The achievements here: Put Chutney (Successfully make idlis.); Agni Prithvi Puttu (Successfully “Launch” puttu.); Hair off the Head (Complete the park level.); Family Beef (Successfully make the biriyani.); Arambikalama? (Make the dinner spread.); Taking Stock (Successfully finish cooking the Chicken Rasam.); Fermented Feelings (Successfully finish cooking the Dosas.); Vada Poche (\"Launch\" a crumbling puttu.)."
            ]
        },
        {
            "heading": "Reading, Perfection & Secrets",
            "body": [
                "The hidden achievements for reading all of Venba's phone texts, all of Kavin's phone texts, every level's flavor text, and earning all three in the same run, a single perfect recipe, a perfect run of every recipe, and the hidden no-chillies oothappam.",
                "The achievements here: Silicon Heartbreak (Read all the texts in Venba's phone.); Doomscroll (Read all the texts in Kavin's phone.); Flavor Text (Read the flavor text in every level.); Paavalan Would Be Proud (Earn Silicon Heartbreak, Doomscroll and Flavor Text within the same playthrough.); Like it was Yesterday (Complete one recipe without messing up.); Queen of the Six Tastes (Complete every recipe without messing up once. ); Annanukku oru Oothappammm! (In Chapter 7, prepare the oothappam with every topping except green chillies.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Cook each recipe as it comes up - idlis, puttu, biriyani, the dinner spread, Chicken Rasam and dosas.",
                "2. Take your time reading every phone conversation (Venba's and Kavin's) and each level's flavor text as you go.",
                "3. In Chapter 7, top the oothappam with everything except green chillies for the hidden achievement.",
                "4. For a perfect run, cook every recipe without a single mistake.",
                "5. As long as you've read all the phone texts and flavor text in the same playthrough, the combined reading achievement follows automatically.",
                "Tip: reading everything and cooking a perfect run don't conflict - a single careful, unhurried playthrough can realistically pick up most of these achievements at once."
            ]
        }
    ]
};
