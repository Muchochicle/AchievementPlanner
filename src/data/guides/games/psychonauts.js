// Psychonauts Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/psychonauts.json), whose 37 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   3830 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 1 achievement(s) are hidden and ship with no official
//   description on Steam; those keep their real name with a curatorial
//   (researched) description sourced from community achievement guides
//   (Steam Community, TrueAchievements, PSNProfiles, and the game's wiki),
//   noted in the Hidden Achievements section. Every other achievement's
//   description is Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "psychonauts-achievement-guide",
    "category": "game",
    "gameSlug": "psychonauts",
    "icon": "🧠",
    "title": "Psychonauts Achievement Guide",
    "summary": "A practical guide to all 37 Steam achievements in Psychonauts - 1 are hidden. Covers the ten mind-world completions, the PSI Cadet rank milestones and full collectible sweep, the many optional camp secrets and character easter eggs, and the single date-gated hidden achievement.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Psychonauts has 37 Steam achievements, only 1 of which is hidden. Ten are for completing each mind world (Basic Braining through Meat Circus), five are PSI Cadet rank milestones (up to the maximum Rank 101), and a block covers the full collectible sweep - all Figments, Vaults, Emotional Baggage, Merit Badges, Scavenger Hunt items and Golden Helmets, plus re-braining the children. The rest are optional camp secrets and character easter eggs (Edgar's garden, Milla's secret, Vernon's ghost story, Maloof's transformation), and the one hidden achievement is a date-gated joke: shopping at the Camp Store on Christmas Day.",
                "Nothing is missable - you can revisit every mind world after completing it (Victory Tour is an achievement for doing exactly that), and collectibles and camp interactions can be mopped up right up until the final level. Rank 101 requires collecting essentially everything (Figments and Vaults are the main rank source), so the collectible achievements and the top rank tend to complete together.",
                "Tip: for the hidden Christmas Shopping achievement, you do not need to wait for December - once you have left the cabin area and can reach the Camp Store, close the game, set your computer's clock to December 25th, relaunch, and buy the cheapest item (the PSI Core) to unlock it, then set your clock back."
            ]
        },
        {
            "heading": "Mind Worlds & Story Completion",
            "body": [
                "Completing each of the ten mind worlds: Basic Braining, Sasha's Shooting Gallery, Milla's Dance Party, Lungfishopolis, The Milkman Conspiracy, Gloria's Theater, Waterloo World, Black Velvetopia, The Asylum, and Meat Circus.",
                "The achievements here: Your Last Chance to Chicken Out (Complete Basic Braining.); A Victory for Good Taste (Complete Sasha’s Shooting Gallery.); Rolling Rock Star (Complete Milla’s Dance Party.); For Insurance Reasons (Complete Lungfishopolis.); Time to Deliver the Milk (Complete The Milkman Conspiracy.); You're All So Kind (Complete Gloria’s Theater.); Thanks for All the Snails (Complete Waterloo World.); I Always Loved You More (Complete Black Velvetopia.); Height of Insanity (Complete The Asylum.); I Thought That Was Unbeatable! (Complete Meat Circus.)."
            ]
        },
        {
            "heading": "Ranks & Collectibles",
            "body": [
                "The PSI Cadet rank milestones (20, 40, 60, 80, and the maximum 101) and the full collectible sweep - sorting all Emotional Baggage, cracking all Vaults, gathering all Figments, earning all Merit Badges, redeeming all 16 Scavenger Hunt items, finding all Golden Helmets, and re-braining the children.",
                "The achievements here: Junior PSI Cadet (Achieve Rank 20.); Regular PSI Cadet (Achieve Rank 40.); Advanced PSI Cadet (Achieve Rank 60.); Super PSI Cadet (Achieve Rank 80.); Math is Hard (Achieve Rank 101.); Happy Bags (Sort all Emotional Baggage.); No More Secrets (Crack all Vaults.); Figgy Piggy (Gather all Figments.); They Should Totally Sell Those (Earn all Merit Badges.); They Call Me the Hunter (Redeem all 16 Scavenger Hunt Items.); I'm Gonna Live Forever (Find all Golden Helmets.); No Solid Food for Six Hours (Re-brain the Children.)."
            ]
        },
        {
            "heading": "Secrets, Easter Eggs & Camp Life",
            "body": [
                "The optional camp secrets and character moments: Edgar's Secret Garden, Milla's Secret, introducing all Camp Kids to Mr. Pokeylope, seeing yourself through others' eyes, the Victory Tour revisit, the bacon and Punchy Target gags, Vernon's ghost story, Maloof's transformation, Bobby's love life, the Coach's stump speech, the bulletin board and stump history, and the Holiday Dinner two-roast feat.",
                "The achievements here: Look at those Pansies! (Find Edgar's Secret Garden.); I'm Sure She's Over It (Uncover Milla's Secret.); I Think They Were Impressed (Introduce all Camp Kids to Mr. Pokeylope.); Self Aware (See yourself through the eyes of many others.); Victory Tour (Revisit all brains after completion.); Mmm… Bacon! (Use the bacon. A lot.); I LOVE PUNCHING! (Complete the Punchy Target mini-game.); Wolpaw Says Thanks (Hear Vernon's Ghost Story.); Made Man (Witness Maloof's transformation.); Maybe It's the Hair (Spy on Bobby's love life.); Stump Speech (Give the Coach's speech on the stump.); Camp Gossip (Read many bulletin board messages.); A Slice of History (Discover the secret history of Whispering Rock.); Holiday Dinner (Cook and consume two different kinds of roast in one sitting.)."
            ]
        },
        {
            "heading": "Hidden Achievements",
            "body": [
                "The single hidden achievement, Christmas Shopping, is a date-gated easter egg with no gameplay difficulty: it unlocks the moment you buy anything from the Camp Store while the system clock reads December 25th.",
                "The hidden achievements: Christmas Shopping (Buy any item from the Camp Store while your system clock is set to December 25th (Christmas Day).)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through the story, completing each mind world - and as you finish each one, sweep it for Figments, Vaults, Emotional Baggage and any Scavenger Hunt items or Golden Helmets before moving on.",
                "2. Between mind worlds, do the camp secrets and character easter eggs (Edgar's garden, Milla's secret, Pokeylope introductions, Vernon's story, Maloof, Bobby, the Coach's speech, the bulletin board), since some become unavailable as the story's final act approaches.",
                "3. Earn all Merit Badges and re-brain the children, which along with the Figment/Vault collection pushes you toward Rank 101.",
                "4. Do Victory Tour by revisiting every completed mind world, and the Holiday Dinner two-roast feat at the camp.",
                "5. For Christmas Shopping, set your system clock to December 25th, launch the game, buy the cheapest Camp Store item, then restore your clock.",
                "Tip: Meat Circus (the final level) is by far the hardest part of the game and locks you out of the rest of the camp once entered - make absolutely sure every collectible, camp secret and the Victory Tour are done before you start it."
            ]
        }
    ]
};
