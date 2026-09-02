// Martha Is Dead Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/martha-is-dead.json), whose 22 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   515960 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 0 achievement(s) are Steam-hidden or ship no Steam
//   description; their description here is researched from community
//   100% guides and is a curatorial summary. Every other description is
//   Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "martha-is-dead-achievement-guide",
    "category": "game",
    "gameSlug": "martha-is-dead",
    "icon": "🃏",
    "title": "Martha Is Dead Achievement Guide",
    "summary": "A practical guide to all 22 Steam achievements in Martha Is Dead (0 hidden). Every achievement carries Steam's own text - the story sequences, the photography and camera-accessory achievements, and the collectible reading (diary, telephone calls, newspapers) and daily-divination routine.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Martha Is Dead has 22 Steam achievements, none of them hidden. Set in 1944 Tuscany, Giulia's twin sister Martha is found drowned, and Giulia takes on her identity as the war closes in. The achievement names follow the Major Arcana of the tarot, but each one carries Steam's own description. They cover the story sequences (the puppet theatre, the family crypt, the White Lady, Lapo's quest), the in-game photography (the first photo, developing, IR photos with hidden riddles, using every camera accessory), and reading every collectible (diary pages, telephone calls, newspaper editions) plus doing a divination every day.",
                "There are no hidden achievements - the list above is the whole set, and none are spoiler-heavy.",
                "The catalog marks it difficulty 2 and single-playthrough. Nothing is missable if you explore thoroughly and use a checklist for the photo and collectible achievements; chapter select also lets you return for anything skipped."
            ]
        },
        {
            "heading": "Story & Setting",
            "body": [
                "The scripted story sequences - the puppet theatre, the family crypt, the White Lady, dressing in Martha's clothes, Lapo's quest, the bike, the house in the woods - and completing the story.",
                "The achievements here: The Lovers (Completed Lapo's quest); The Tower (Discovered the house in the woods); The Sun (Taken the first photo); The Hierophant (Developed the first photo); The Magician (Dressed in Martha's clothes); Temperance (Played the first puppet theatre sequence); The Hermit (Entered the family crypt); The Devil (Played the second puppet theatre sequence); The Moon (Communicated with the White Lady); The Chariot (Fixed the bike); Death (Completed the games story)."
            ]
        },
        {
            "heading": "Photography",
            "body": [
                "The camera: the first photo, developing a photo, taking photos with every accessory, collecting every accessory, and the IR photos - all four of the lady and every one with a hidden riddle.",
                "The achievements here: Strength (Taken all IR photos with hidden riddles); Judgement (Taken all 4 IR photos of the lady); Justice (Taken a photo with every camera accessory); The Hanged Man (Collected all camera accessories); The Empress (Taken 5 photos with no story link); The World (Developed 10 photos with no story link)."
            ]
        },
        {
            "heading": "Collectibles & Routine",
            "body": [
                "Reading every diary page and newspaper edition, completing every information telephone call, observing an in-house object, and carrying out a divination every day.",
                "The achievements here: The High Priestess (All diary pages read); The Fool (Completed all telephone calls for obtaining information); The Stars (Every newspaper edition read); The Emperor (Observed an in-house object); The Wheels of Fortune (Carried out a divination every day)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the story straight through for the scripted-sequence achievements - none are missable.",
                "2. Read every diary page and newspaper as you find them, complete every information phone call, and do a tarot divination every single day.",
                "3. Take the first photo and develop it early, then collect every camera accessory and take a shot with each.",
                "4. Work through the IR photos - all four of the lady, and every IR shot that hides a riddle.",
                "5. Use chapter select to clean up any missed collectible or photo achievement, then finish the story for Death.",
                "Tip: do the daily divination the moment each new day starts - it is the one achievement a single missed day permanently breaks for that playthrough, and it is very easy to forget once a chapter gets tense."
            ]
        }
    ]
};
