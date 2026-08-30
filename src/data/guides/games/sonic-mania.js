// Sonic Mania Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/sonic-mania.json), whose 18 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   584400 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "sonic-mania-achievement-guide",
    "category": "game",
    "gameSlug": "sonic-mania",
    "icon": "💍",
    "title": "Sonic Mania Achievement Guide",
    "summary": "A practical guide to all 18 Steam achievements in Sonic Mania - none are hidden. Covers the Chaos Emerald and completion achievements and the per-Zone secret-challenge achievements.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Sonic Mania has 18 Steam achievements and none of them are hidden. Six are progression and Special Stage collection - collect the gold and silver Blue Spheres medallions, get all seven Chaos Emeralds, reach any ending, spin a Star Post, and find the hidden end-of-Zone item boxes. The other twelve are one obscure secret challenge per Zone (cross a bridge with a fire shield in Green Hill, take a photo in Studiopolis, push a barrel in Mirage Saloon, a perfect Titanic Monarch run).",
                "Nothing is missable - Stage Select unlocks after any completion, so every Zone challenge and both medallion sets can be mopped up afterward. This is a short, mostly-relaxed completion; the fiddliest are the perfect Titanic Monarch run (Professional Hedgehog) and the fastest Stardust Speedway run.",
                "Tip: play through once for the ending and Star Post, then use Stage Select with a per-Zone secret guide - most of the twelve Zone challenges are a specific interaction in a specific spot that takes under a minute once you know where it is."
            ]
        },
        {
            "heading": "Chaos Emeralds & Completion",
            "body": [
                "Collecting the gold and silver medallions in the Blue Spheres Bonus stages, all seven Chaos Emeralds, reaching any ending, spinning a Star Post, and finding the hidden item boxes at the end of a Zone.",
                "The achievements here: No Way? No Way! (Collect gold medallions in Blue Spheres Bonus stage); Full Medal Jacket (Collect silver medallions in Blue Spheres Bonus stage); Magnificent Seven (Collect all seven Chaos Emeralds); See You Next Game (Achieve any ending); Superstar (Spin the Star Post!); That's a Two-fer (Find the hidden item boxes at the end of the Zone)."
            ]
        },
        {
            "heading": "Per-Zone Secret Challenges",
            "body": [
                "One secret challenge per Zone - the Green Hill fire-shield bridge, a 3-chain combo in Chemical Plant, a photo in Studiopolis, riding the wind in Flying Battery, wrecking the Press Garden factory, a fast Stardust Speedway run, the Hydrocity boat, a Mirage Saloon barrel push, the Oil Ocean secret sub, a Lava Reef lava barrel run, the Metallic Madness gachas, and a perfect Titanic Monarch run.",
                "The achievements here: Now It Can't Hurt You Anymore (What would happen if you cross a bridge with a fire shield?); Triple Trouble (Try for a 3 chain combo!); The Most Famous Hedgehog in the World (Have your photos taken in Studiopolis Zone); Window Shopping (Let the wind take you through); Crate Expectations (Wreak havoc at the propaganda factory); King of Speed (Get through Stardust Speedway Zone as quickly as possible); Boat Enthusiast (We really like boats); The Password is \"Special Stage\" (Try pushing a barrel to see how far it goes); Secret Sub (You might have to submerge to find it); Without a Trace (Barrel through the lava, don't let anything stop you); Collect 'Em All (Gotta gacha 'em all); Professional Hedgehog (That elusive perfect run, only a professional can achieve)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through the game once for See You Next Game (any ending) and Superstar (spin a Star Post).",
                "2. Grab all seven Chaos Emeralds via the UFO Special Stages (from Giant Ring checkpoints) - retry from Stage Select if you miss any.",
                "3. Do the Blue Spheres Bonus stages (from Star Posts with 25+ rings) for the gold and silver medallions.",
                "4. Use Stage Select with a per-Zone secret guide to do the twelve Zone-specific challenges.",
                "5. Finish with the two skill runs - the fast Stardust Speedway run and the perfect Titanic Monarch run for Professional Hedgehog.",
                "Tip: Professional Hedgehog (a perfect, no-hit run of Titanic Monarch Act 1) is the one genuine skill check - play it repeatedly from Stage Select as a slow, careful no-ring run, since taking zero damage matters more than speed."
            ]
        }
    ]
};
