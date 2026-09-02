// Please, Touch The Artwork Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/please-touch-the-artwork.json), whose 33 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1097100 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 33 achievement(s) are Steam-hidden or ship no Steam
//   description; their description here is researched from community
//   100% guides and is a curatorial summary. Every other description is
//   Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "please-touch-the-artwork-achievement-guide",
    "category": "game",
    "gameSlug": "please-touch-the-artwork",
    "icon": "🎨",
    "title": "Please, Touch The Artwork Achievement Guide",
    "summary": "A practical guide to all 33 Steam achievements in Please, Touch The Artwork (0 hidden). The achievements ship no Steam description, so each is a curatorial summary here: they are the three gallery visits and one achievement per puzzle level across the three galleries (The Style, Boogie Woogie, New York City), plus a completion achievement for each gallery.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Please, Touch The Artwork has 33 Steam achievements, none marked hidden - though all of them ship with no Steam description, so the text here is a curatorial summary. The game turns three works inspired by Piet Mondrian into gentle puzzle chapters: 'The Style' (a Composition-with-Red-Blue-Yellow line-connecting puzzle), 'Boogie Woogie' (a lights-out grid), and 'New York City' (an abstract narrative). The achievements are: visiting each gallery, one per named puzzle level within each gallery, and a completion achievement for each of the three galleries.",
                "Because every description is blank in Steam's own data, this guide names each puzzle level and its gallery rather than reproducing Steam text.",
                "The catalog marks it difficulty 2 and single-playthrough. The game is short and relaxing; nothing is missable and levels can be replayed freely."
            ]
        },
        {
            "heading": "The Style",
            "body": [
                "The Style gallery visit and each of its puzzle levels (The First Day through The Seventh Day, Counter Composition, The Split, The Diamond), plus the gallery completion.",
                "The achievements here: Visit The Style Gallery (Visit The Style gallery (the Composition-with-Red-Blue-Yellow puzzle mode).); The First Day (Solve 'The First Day' puzzle in The Style gallery.); The Second Day (Solve 'The Second Day' puzzle in The Style gallery.); The Third Day (Solve 'The Third Day' puzzle in The Style gallery.); The Fourth Day (Solve 'The Fourth Day' puzzle in The Style gallery.); The Fifth Day (Solve 'The Fifth Day' puzzle in The Style gallery.); The Sixth Day (Solve 'The Sixth Day' puzzle in The Style gallery.); The Seventh Day (Solve 'The Seventh Day' puzzle in The Style gallery.); Counter Composition (Solve the 'Counter Composition' puzzle in The Style gallery.); The Split (Solve 'The Split' puzzle in The Style gallery.); The Style : The End (Complete every puzzle in The Style gallery.); The Diamond (Solve 'The Diamond' puzzle in The Style gallery.)."
            ]
        },
        {
            "heading": "Boogie Woogie",
            "body": [
                "The Boogie Woogie gallery visit and each of its puzzle levels (White Squares, Red Squares, Family, Plazas & Buildings, Tunnels, Night, Broadway, Victory, Betrayal, Nightmare), plus the gallery completion.",
                "The achievements here: Visit The Boogie Woogie Gallery (Visit the Boogie Woogie gallery.); White Squares (Solve the 'White Squares' puzzle in the Boogie Woogie gallery.); Red Squares (Solve the 'Red Squares' puzzle in the Boogie Woogie gallery.); Family (Solve the 'Family' puzzle in the Boogie Woogie gallery.); Plazas & Buildings (Solve the 'Plazas & Buildings' puzzle in the Boogie Woogie gallery.); Tunnels (Solve the 'Tunnels' puzzle in the Boogie Woogie gallery.); Night (Solve the 'Night' puzzle in the Boogie Woogie gallery.); Broadway (Solve the 'Broadway' puzzle in the Boogie Woogie gallery.); Victory (Solve the 'Victory' puzzle in the Boogie Woogie gallery.); Betrayal (Solve the 'Betrayal' puzzle in the Boogie Woogie gallery.); Nightmare (Solve the 'Nightmare' puzzle in the Boogie Woogie gallery.); Boogie Woogie : The End (Complete every puzzle in the Boogie Woogie gallery.)."
            ]
        },
        {
            "heading": "New York City",
            "body": [
                "The New York City gallery visit and each of its puzzle levels (Crossing Borders, Home No Longer, Silence, Back To Reality, I Love The Rain, Winter Is Coming, Changing Perspectives), plus the gallery completion.",
                "The achievements here: Visit The New York City Gallery (Visit the New York City gallery.); Crossing Borders (Solve the 'Crossing Borders' puzzle in the New York City gallery.); Home No Longer (Solve the 'Home No Longer' puzzle in the New York City gallery.); Silence (Solve the 'Silence' puzzle in the New York City gallery.); Back To Reality (Solve the 'Back To Reality' puzzle in the New York City gallery.); I Love The Rain (Solve the 'I Love The Rain' puzzle in the New York City gallery.); Winter Is Coming (Solve the 'Winter Is Coming' puzzle in the New York City gallery.); Changing Perspectives (Solve the 'Changing Perspectives' puzzle in the New York City gallery.); New York City : The End (Complete every puzzle in the New York City gallery.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play 'The Style' gallery through all its levels - it is the line-connecting puzzle - for its per-level achievements and the completion.",
                "2. Play 'Boogie Woogie' - the grid lights-out puzzle - through all its levels and its completion.",
                "3. Play 'New York City' through all its levels and its completion.",
                "Tip: if a level stalls, use the built-in hint/solution nudge - the game is designed to be finished by everyone, and the achievements only track that each level ends solved, not how you got there."
            ]
        }
    ]
};
