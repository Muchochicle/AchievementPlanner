// ARK: Survival Ascended Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/ark-survival-ascended.json), whose 32 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   2399830 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "ark-survival-ascended-achievement-guide",
    "category": "game",
    "gameSlug": "ark-survival-ascended",
    "icon": "🦕",
    "title": "ARK: Survival Ascended Achievement Guide",
    "summary": "A practical guide to all 32 Steam achievements in ARK: Survival Ascended - none are hidden. Covers the survival and progression milestones, and the Explorer Note and full-completion achievements.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "ARK: Survival Ascended has 32 Steam achievements and none of them are hidden. About twenty are survival and progression milestones - collect every Dossier, defeat each of the three Island Guardians (and the finale), tame and ride your first dinosaur, reach maximum Survivor and dinosaur level, ride a T-Rex and a Giganotosaurus, uncover 80% of the map, reach the highest peak and the ocean floor, cure Swamp Fever, and the three Ascension tiers (Gamma, Beta, Alpha). The rest are the Explorer Note discovery tiers (10% through 100%), Master Zoologist (tame every domesticable creature), and defeating the Guardians of The Center map.",
                "Nothing is missable in principle - the world persists and everything is repeatable - but this is a long, demanding completion. The Guardian boss fights need a strong tamed army and good gear, taming every creature (Master Zoologist) is enormous, and 100% Explorer Notes plus Alpha Ascension gate the finish.",
                "Tip: play on a private/single-player server with generous settings if you just want the achievements - the boss fights, the 100% note sweep and the tame-everything grind are far faster without the wipes and competition of an official PvP server."
            ]
        },
        {
            "heading": "Survival & Progression Milestones",
            "body": [
                "Finding every Dossier, defeating the first, second and third Guardian and the finale, surviving a full day, your first tame and ride, maximum Survivor and dinosaur level, riding a T-Rex and a Giganotosaurus, 80% of the map, the highest peak, the ocean floor, curing Swamp Fever, retrieving all Artifacts, and the Gamma / Beta / Alpha Ascensions.",
                "The achievements here: Veteran Paleontologist (You found the Dossiers of each of ARK's initial Specimens!); Veteran Survivor (You defeated ARK's first Guardian!); Artifact Archaeologist (You personally retrieved all the Artifacts!); Expert Survivor (You defeated ARK's second Guardian!); Master Survivor (You defeated ARK's third Guardian!); Survivor Evolved (You've defeated ARK's three Guardians! And yet...); Your first day... (You Survived a full day and night on the ARK!); Your first Dino... (You Tamed a Dinosaur!); Your first Ride... (You Rode a Dinosaur!); Maximum Survivor (You reached the Maximum Survivor Level!); Maximum Dinosaur (One of your Dinosaurs reached Maximum Level!); Rex Rider (You rode on the back of a T-Rex!); Giga Rider (You rode on the back of a Giganotosaurus!); Map Maker (You uncovered more than 80% of the Mini-Map!); Highest Peak (You've reached the highest mountain peak of the ARK!); Lowest Depth (You've reached the bottom of the ARK's oceans!); Cure-All (You've cured yourself of Swamp Fever!); Gamma Ascension (You Ascended off the ARK, at Gamma level!); Beta Ascension (You Ascended off the ARK, at Beta level!); Alpha Ascension (You Ascended off the ARK, at Alpha level!)."
            ]
        },
        {
            "heading": "Explorer Notes & Full Completion",
            "body": [
                "Discovering 10%, 20%, 30%, 40%, 50%, 60%, 70%, 80%, 90% and 100% of the Explorer Notes, Master Zoologist (taming every domesticable creature), and defeating the Guardians of The Center.",
                "The achievements here: Beginner Explorer (You discovered 10% of the Explorer Notes on the ARK!); Experienced Explorer (You've discovered 20% of the Explorer Notes on the ARK!); Adventurous Explorer (You've discovered 30% of the Explorer Notes on the ARK!); Studious Explorer (You've discovered 40% of the Explorer Notes on the ARK!); Veteran Explorer (You've discovered 50% of the Explorer Notes on the ARK!); Adept Explorer (You've discovered 60% of the Explorer Notes on the ARK!); Professional Explorer (You've discovered 70% of the Explorer Notes on the ARK!); Expert Explorer (You've discovered 80% of the Explorer Notes on the ARK!); Master Explorer (You've discovered 90% of the Explorer Notes on the ARK!); Perfect Explorer (You've discovered 100% of the Explorer Notes on the ARK!); Master Zoologist (You tamed all of the domesticable creatures on the ARK!); Survivor of The Center (You defeated the Guardians of The Center!)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play on a private or single-player server with comfortable rates so the taming and boss grinds are manageable.",
                "2. Do the early milestones (first day, first tame, first ride, a Rex and a Giga ride) and reach maximum Survivor level.",
                "3. Sweep the map for all Dossiers, all Artifacts, the highest peak and the ocean floor, and grind the Explorer Notes toward 100%.",
                "4. Breed and tame a strong army, then defeat the three Island Guardians and the finale, and the Guardians of The Center.",
                "5. Do the three Ascension tiers (Gamma, then Beta, then Alpha), and finish the long Master Zoologist grind of taming every creature.",
                "Tip: the Explorer Note percentage tiers are the most reliable progress - use a note-location map and a fast flyer to collect them in one dedicated tour, since they persist and unlock the tier achievements automatically as your total climbs."
            ]
        }
    ]
};
