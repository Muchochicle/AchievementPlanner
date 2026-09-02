// Visage Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/visage.json), whose 27 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   594330 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 4 achievement(s) are Steam-hidden or ship no Steam
//   description; their description here is researched from community
//   100% guides and is a curatorial summary. Every other description is
//   Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "visage-achievement-guide",
    "category": "game",
    "gameSlug": "visage",
    "icon": "🕯️",
    "title": "Visage Achievement Guide",
    "summary": "A practical guide to all 27 Steam achievements in Visage (4 hidden). The four hidden achievements are small secrets - trying the front door, the microwave, the hidden Room 302, and finding the Shotgun. Everything else - the three chapters, the two endings, and the memento and collectible sets - carries Steam's own text.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Visage has 27 Steam achievements, 4 of them hidden. You wander a haunted house at night, exploring the lives and deaths of its former residents while managing your sanity with light. The visible achievements cover completing Lucy's, Dolores' and Rakan's chapters, the two endings (Void and Family Reunion), and the memento/collectible sets - Matryoshka dolls, George's cassettes, The Neighbors' comic pages, Dwayne's VHS tapes, the mirror mask pieces, the appreciation-book pages - plus small one-offs like replacing a light bulb, drinking the hot chocolate, and the Bernard the Alien easter egg.",
                "The 4 hidden achievements are secrets: trying the front door, using the microwave, finding the hidden Room 302, and finding the Shotgun.",
                "The catalog marks it difficulty 3 and single-playthrough. Nothing is strictly missable - you can revisit chapters from the basement hub - but the game is deliberately obtuse and a guide helps for the collectibles and the Shotgun."
            ]
        },
        {
            "heading": "Chapters & Endings",
            "body": [
                "Completing Lucy's, Dolores' and Rakan's chapters, and both the Void and Family Reunion endings.",
                "The achievements here: Chapter: Lucy (Complete Lucy's chapter.); Chapter: Dolores (Complete Dolores' chapter.); Void (Complete the void ending.); Family reunion (Complete the family reunion ending.); Chapter: Rakan (Complete Rakan's chapter.)."
            ]
        },
        {
            "heading": "Mementos & Collectibles",
            "body": [
                "The collectible sets - Matryoshka dolls, George's cassettes, The Neighbors' comic pages, Dwayne's VHS tapes, the mirror mask pieces - and the appreciation-book pages.",
                "The achievements here: Matryoshka doll (Find a Matryoshka doll.); Matryoshka dolls master (Find all Matryoshka dolls.); George's memento (Find one of George's audio cassette.); George's memento master (Find all George's audio cassettes.); The Neighbors (Find one of The Neighbors' page.); The Neighbors master (Find all The Neighbors' pages.); Dwayne's memento (Find one VHS tape.); Dwayne's memento master (Find all VHS tape.); 10 on the 10th (Find all the pages from the appreciation book.); Mirror mask (Find one piece of the mirror mask.); Mirror mask master (Find all pieces of the mirror mask.)."
            ]
        },
        {
            "heading": "Secrets & Oddities",
            "body": [
                "The four hidden secrets (front door, microwave, Room 302, Shotgun), plus replacing a light bulb, the hot chocolate, the smiley sticker, Rakan's psych-evaluation tape, using the revolver, the Bernard the Alien easter egg, and Johnny's gift.",
                "The achievements here: First reaction (Try to leave through the house's front door early on.); Special recipe (Attempt to use the kitchen microwave.); Novice electrician (Replace a light bulb.); Dance, dance (Find the hidden Room 302 (a rhythm-game easter egg).); Gearing up! (Find the hidden Shotgun.); Hot chocolate (Drink the hot chocolate.); Smile! (Find the smiley face sticker.); Psychological evaluation (Find Rakan's psychological evaluation tape.); Easy way out (Use the revolver.); Gotcha, you little... (You warped Bernard the Alien back to planet Ceiphe.); Special gift (Find Johnny's gift.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the three chapters from the basement hub; each completion is one achievement, and Rakan's tends to be last.",
                "2. As you explore, collect the memento sets - dolls, cassettes, comic pages, VHS tapes, mask pieces - and the appreciation-book pages; use a guide, as several are easy to walk past.",
                "3. Grab the small one-offs: replace a light bulb, drink the hot chocolate, find the smiley sticker, use the revolver, do the Bernard the Alien easter egg.",
                "4. Get the four hidden secrets - try the front door and the microwave early, then hunt down Room 302 and the Shotgun.",
                "5. Finish with both endings (Void and Family Reunion) from the same late save.",
                "Tip: keep a candle or lighter burning whenever you can - most of the collectible hunting happens in low light, and letting your sanity drop turns the house hostile and makes methodical searching almost impossible."
            ]
        }
    ]
};
