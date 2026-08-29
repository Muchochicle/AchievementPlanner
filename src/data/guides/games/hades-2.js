// Hades II Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/hades-2.json), whose 50 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1145350 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js). None are hidden; every one
//   ships a real, official Steam description, quoted verbatim below.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "hades-2-achievement-guide",
    "category": "game",
    "gameSlug": "hades-2",
    "icon": "🌙",
    "title": "Hades II Achievement Guide",
    "summary": "A practical guide to all 50 Steam achievements in Hades II - none are hidden. region clears & escapes, bosses & combat milestones, weapons, aspects & arcana, gods, relationships & the crossroads, endgame, true ending & completion.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Hades II has 50 Steam achievements and none are hidden. They cover clearing each region on both the Underworld and surface paths, the boss defeats and combat milestones, the weapon/Aspect/Arcana build systems, the Crossroads hub and relationships, and the endgame - the true ending, the epilogue, and higher Fear clears.",
                "Nothing is missable and everything persists between runs. The commitment is the true ending (Death to Chronos, which needs the full incantation and resource chain) and the epilogue, plus mastering every weapon and its Aspects.",
                "Tip: play normally toward both path completions, then work the systems - every weapon and Aspect, the Arcana, the incantations - while gathering the resources the true ending requires. Save the high-Fear clears for when your build knowledge is solid."
            ]
        },
        {
            "heading": "Region Clears & Escapes",
            "body": [
                "The run-progress achievements: clearing each region on the way to Chronos (Erebus, Oceanus, the Fields of Mourning, Tartarus, Ephyra, the Rift of Thessaly, Olympus, the Summit) and the surface and Underworld path completions.",
                "The achievements here: Witch of the Woods (Clear Erebus); Witch of the Depths (Clear Oceanus); Witch of the Plains (Clear the Fields of Mourning); Witch of the Abyss (Clear Tartarus); Witch of the Outskirts (Clear the City of Ephyra); Witch of the Waters (Clear the Rift of Thessaly); Witch of the Mountains (Clear Mount Olympus); Witch of the Clouds (Clear the Summit); So Mote It Be (Cast 50 Incantations at the Crossroads Cauldron); Soothing Soak (Take one of your comrades to the Hot Springs)."
            ]
        },
        {
            "heading": "Bosses & Combat Milestones",
            "body": [
                "The boss defeats and combat feats: the guardians of each region, the first defeat of Chronos, and the mid-run milestones (damage, kills, no-damage clears).",
                "The achievements here: Catch of the Night (Take one of your comrades to the Fishing Pier); Ambrosia for Two (Take one of your comrades to the Taverna); Close Comrades (Forge a bond with 10 comrades); Hand of the Fates (Fulfill 60 Minor Prophecies); Mind for Magick (Gain 30 Grasp at the Altar of Ashes); Breadth of Knowledge (Fulfill the Prophecy 'Breadth of Knowledge'); Unassailable Insight (Fully upgrade all Arcana); The Arms of Night (Fulfill the Prophecy 'The Arms of Night'); The Unseen Sentinel (Fulfill the Prophecy 'The Unseen Sentinel'); Familiar Confidant (Fulfill the Prophecy 'Familiar Confidant')."
            ]
        },
        {
            "heading": "Weapons, Aspects & Arcana",
            "body": [
                "The build systems: unlocking and mastering each Nocturnal Arm, its Aspects, the Arcana cards, and the Hex and Omega-move goals.",
                "The achievements here: Animal Whisperer (Recruit all Animal Familiars); Beast Master (Fully upgrade all Animal Familiars); Giving Back (Earn 10,000 Kudos); Sentimental Value (Collect every Keepsake); Infinite Possibility (Clear 20 Chaos Trials); Improbable Outcomes (Fulfill the Prophecy 'Improbable Outcomes'); Chaos in Hell (Clear the 'Great Chaos Below' Trial); Natural Talent (Fulfill the Prophecy 'Natural Talent'); Unfinished Business (Fulfill the Prophecy 'Unfinished Business'); Haunted by the Past (Fulfill the Prophecy 'Haunted by the Past')."
            ]
        },
        {
            "heading": "Gods, Relationships & the Crossroads",
            "body": [
                "The hub content: meeting and gifting the Olympians and the Crossroads cast, the training-grounds and cauldron incantations, the resource-gathering goals, and the relationship milestones.",
                "The achievements here: Soundest of Sleepers (Fulfill the Prophecy 'Soundest of Sleepers'); Silk and Spitefulness (Fulfill the Prophecy 'Silk and Spitefulness'); Voice and Vanity (Fulfill the Prophecy 'Voice and Vanity'); Denizens of the Depths (Fulfill the Prophecy 'Denizens of the Depths'); Unrivaled Prowess (Fulfill the Prophecy 'Unrivaled Prowess'); Sword of the Night (Fulfill the Prophecy 'Sword of the Night'); Arcana of the Ages (Fulfill the Prophecy 'Arcana of the Ages'); Bearing Dark Gifts (Fulfill the Prophecy 'Bearing Dark Gifts'); Born to Win (Fulfill the Prophecy 'Born to Win'); Fair Fight (Earn 1,000 Gold competing against Nemesis)."
            ]
        },
        {
            "heading": "Endgame, True Ending & Completion",
            "body": [
                "The late game: the higher Fear (heat) clears, the true ending (Death to Chronos), reaching the epilogue (Golden Age), and Goddess of Nightmares for every other achievement.",
                "The achievements here: Unfamiliar Forms (Alter the appearance of each Animal Familiar); Sheep's Clothing (Slay a Sister of the Dead while afflicted with Twilight Curse); Breaking Up the Band (Use Night Bloom to raise a Siren); Dressed to Kill (Reach the final confrontation in an Arachne outfit); Behold Night's Champion (Earn the first Gift of the Veil); Mercy, Night's Executioner (Earn the second Gift of the Veil); Elysian Glory (Prevail in the Contest of Champions); Death to Chronos (Complete the lifelong task of the Princess of the Underworld); Golden Age (Reach the epilogue of the story); Goddess of Nightmares (Earn all other Achievements)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Clear each region on the Underworld path (toward Chronos) and the surface path (toward Olympus).",
                "2. Unlock and play every Nocturnal Arm and its Aspects, buy out the Arcana, and complete the cauldron incantations.",
                "3. Gather the resources for the true ending's incantation chain and complete it (Death to Chronos), then reach the epilogue.",
                "4. Push higher Fear for the difficulty clears, and Goddess of Nightmares unlocks with the last achievement.",
                "Tip: the true ending requires a long chain of incantations, resource gathering and repeat boss visits - follow a checklist rather than expecting it to trigger from a single good run."
            ]
        }
    ]
};
