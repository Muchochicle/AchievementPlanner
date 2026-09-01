// Sword & Sworcery EP Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/superbrothers-sword-sworcery-ep.json), whose 14 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   204060 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "superbrothers-sword-sworcery-ep-achievement-guide",
    "category": "game",
    "gameSlug": "superbrothers-sword-sworcery-ep",
    "icon": "🌙",
    "title": "Sword & Sworcery EP Achievement Guide",
    "summary": "A practical guide to all 14 Steam achievements in Sword & Sworcery EP - none are hidden. Covers retrieving the Megatome, taming all three Trigons, and a set of optional and joke achievements along the Scythian's journey. None of the achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Superbrothers: Sword & Sworcery EP has 14 Steam achievements and none are hidden. They cover retrieving the Megatome, summoning a Space Baby, taming the Gold, Dark Moon and Bright Moon Trigons (and all three together), completing the journey without cheating, and a set of optional and joke achievements - slaying 7 lagomorphs, the Grizzled Boor fight, a divinatory mushroom, deliberately cheating by changing your system clock, the White Stag, the Moon Grotto, and finishing the game.",
                "The catalog marks it difficulty 2. Sword & Sworcery is a short, atmospheric adventure built around real-world moon phases; a couple of achievements (like #honest and Cheating Cheater) are opposites of each other, so you may need two playthroughs to get both.",
                "Tip: #honest and Cheating Cheater are mutually exclusive within a clean run - if you want both, play once without touching your system clock and once deliberately changing it to access other moon phases."
            ]
        },
        {
            "heading": "The Scythian's Journey",
            "body": [
                "Retrieving the Megatome, summoning a Space Baby, taming the Gold Trigon and the Dark Moon Trigon, completing all three Trigons together, finishing the journey without cheating, and slaying 7 lagomorphs.",
                "The achievements here: We Got the Megatome (Retrieve the burdensome book of sinister sworcery from the darkness beneath Mingi Taw.); The Ballad of the Space Babies (Summon a slumbering sylvan sprite & send it skyward.); The Gold Trigon (Tame the cosmic geometry of The Gold Trigon in a sunlit meadow where angry bird sculptures loom.); The Dark Moon Trigon (Despite everything, tame the Dark Moon Trigon in a rain-soaked forest during a storm of thunder & lightning.); Assemble the Trigon Trifecta (Complete the three trigons in The Dark Moon Rock Show.); #honest (Complete the Scythian's woeful errand without cheating.); Monster Hunter (Find & somehow slay at least 7 lagomorphs, you jerk.)."
            ]
        },
        {
            "heading": "Secrets & Ending",
            "body": [
                "The Grizzled Boor fight, using a divinatory mushroom, deliberately cheating by changing your system clock, the White Stag, the Moon Grotto, the Bright Moon Trigon, and completing the Scythian's woeful errand.",
                "The achievements here: The Grizzled Boor (Feel free to take this opportunity to secretly self-identify as a principled, loving individual or a violent psychopath.); The Mushroom Kingdom (Experience the strange insight offered by a divinatory mushroom.); Cheating Cheater (Adjust your computer's date/time settings to access other moon phases & thus feel profound shame.); #moar (It has been said that something lurks within the White Stag of Scythia, wherever/whenever/whatever that might be.); The Moon Grotto (Use the Grizzled Boor's key to open the locked door to you-know-where.); The Bright Moon Trigon (Be awesome, get the Bright Moon Trigon from beneath an impossible island in the centre of a placid lake.); Now We Are Cosmic Friends Forever (Upload the Megatome at the summit of Mingi Taw & complete the Scythian's woeful errand.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through the Scythian's journey, retrieving the Megatome and taming the Gold and Dark Moon Trigons as you go.",
                "2. Try the optional side content - slay 7 lagomorphs, fight the Grizzled Boor, and use the divinatory mushroom.",
                "3. Find the Bright Moon Trigon beneath the island in the lake, and open the Moon Grotto with the Boor's key.",
                "4. Complete the journey honestly for #honest, then replay and deliberately change your system clock for Cheating Cheater if you want both.",
                "5. Upload the Megatome at the summit of Mingi Taw to finish the game.",
                "Tip: this is a short game meant to be played across real-world days as the moon phases change - don't rush it if you want the intended atmosphere."
            ]
        }
    ]
};
