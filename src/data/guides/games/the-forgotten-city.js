// The Forgotten City's Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/the-forgotten-city.json), whose 40
//   achievements were sourced directly from Steam's own achievement
//   schema for appid 874260 via ISteamUserStats/GetSchemaForGame
//   (fetched through this app's own backend/services/steamApi.js) - 28
//   of 40 ship a real, official Steam description, quoted directly
//   below.
// - Dead Shot, Bloodless Shadow, Italian Plumber, Psycho, Striker,
//   Underworld Explorer, Kleptomaniac, High Diver, Nimble, Allergic,
//   The Oracle, and Callous are hidden achievements Steam never
//   describes publicly (confirmed via the same API call) - their
//   descriptions here are curatorial, cross-checked against
//   independent achievement-guide sites (gamepressure.com,
//   PSNProfiles), and kept deliberately light on the game's real
//   mystery-solving content (who is really behind The Golden Rule, and
//   how each of the four endings is actually reached) the same way this
//   catalog already treats Return of the Obra Dinn - only the
//   achievement's own mechanical trigger is described, never the
//   underlying twist.
// - The grouping below (the four alternate endings vs. the time-loop
//   mechanic itself vs. side-quest character rescues vs. one-off
//   world-interaction jokes) is read directly from what each
//   achievement's own official description requires, not invented.
export const GUIDE = {

    slug: "the-forgotten-city-achievement-guide",
    category: "game",
    gameSlug: "the-forgotten-city",
    icon: "🏛️",
    title: "The Forgotten City Achievement Guide",
    summary: "A practical guide to all 40 Steam achievements in The Forgotten City - the time-loop mechanic, the four alternate endings, every side character you can save, and the game's many one-off world-interaction jokes.",

    relatedSlugs: ["achievement-completion-and-tracking", "understanding-achievement-availability"],

    sections: [

        {
            heading: "Overview",
            body: [
                "The Forgotten City has 40 Steam achievements. The game's central mechanic - looping back in time whenever the ancient Golden Rule is broken - means very little here is truly missable on a single save: if you miss a side quest or an ending, you can simply loop back and try again.",
                "A genuine 100% run realistically needs at least two full playthroughs, since Law Abiding Citizen (never looping) and Minimalist/The Oracle (reaching an ending in as few loops as possible) directly conflict with freely exploring every side quest and hidden interaction on the same save."
            ]
        },

        {
            heading: "The Time Loop",
            body: [
                "Looper and Super Looper track the time loop itself - triggering it once, then ten times total - while Law Abiding Citizen is the opposite achievement, asking you to finish the game without ever looping at all.",
                "Minimalist and The Oracle both reward reaching the best ending in as few loops as possible, with The Oracle specifically tied to the Canon Ending - these are best attempted only once you already know exactly what that ending requires from a previous, more exploratory run."
            ]
        },

        {
            heading: "The Four Endings",
            body: [
                "The Many Shall Suffer, The One That Got Away, The Ones That Got Away, and The Canon Ending correspond to the game's four distinct endings, unlocking whichever one you actually reach on a given loop.",
                "Dead Shot is a variant of The One That Got Away specifically: reaching that ending while playing as the Soldier and holding onto your gun through its final confrontation, rather than the more common peaceful route to the same ending."
            ]
        },

        {
            heading: "Central Mystery",
            body: [
                "Herculean and Psycho both involve confronting the creator of The Golden Rule - Herculean for simply reaching that confrontation, and Psycho for choosing to intimidate them once you get there instead of talking things through.",
                "Bloodless Shadow rewards learning the true identity of a mysterious stranger encountered by the river early in the game - one of the central mysteries the story is actually built around.",
                "Archaeologist marks discovering what lies beneath the city, and Survivor unlocks for surviving the Palace, one of the story's more dangerous set-piece locations."
            ]
        },

        {
            heading: "Side Quests & Saving People",
            body: [
                "Sleuth asks you to find all three missing persons scattered around the city - a self-contained side investigation separate from the main story.",
                "Medic, Counsellor, and Trickster each reward saving one specific person's life - Iulia, Ulpius, and Fabia respectively - while Callous is the deliberate opposite of Trickster: letting Fabia die in the temple instead of saving her.",
                "Lion Tamer rewards solving Vergil's problem, Liberator unlocks for having Duli released from his cell, and Match-maker rewards helping Galerius romance Equitia - three separate character side stories you can pursue across your loops."
            ]
        },

        {
            heading: "Exploration & Collectibles",
            body: [
                "Underworld Explorer asks you to discover the statues of Sisyphus, Tantalus, Ixion, and Belide hidden in the Underworld, and Avid Reader is a separate hunt for 10 different pieces of graffiti scattered through the city.",
                "Italian Plumber and High Diver both reward unconventional traversal - reaching the upper cistern by an unusual route, and jumping into Malleolus's villa from a cliff above it - rather than the paths the game expects you to take.",
                "Nimble asks you to avoid three traps in the catacombs, and Treasure Hunter rewards finding treasure using the golden bow, a specific tool found later in the game."
            ]
        },

        {
            heading: "World-Interaction Jokes",
            body: [
                "Striker, Kleptomaniac, Allergic, and Unhygenic are all small, self-contained jokes: toppling 10 statues by kicking things into them, stealing something 5 times, dying to hornet stings, and picking up a specific gross item respectively.",
                "Smooth Talker and Maverick both reward going against the game's expected social flow - getting rejected by a character named Aurelia, and skipping the opening city tour outright.",
                "Silver Tongue is a bigger, more deliberate challenge than the other jokes here: talking your way through every possible confrontation in the game rather than resorting to force, which realistically takes real knowledge of the game's dialogue options.",
                "Fibber (lying 10 times) and Grave Robber (stealing 2000 coins after the Golden Rule is broken) both reward leaning into the game's more dishonest options rather than avoiding them.",
                "Golden Archer marks gilding your first item with the game's golden bow, and Tourist simply rewards using Photo Mode at least once."
            ]
        },

        {
            heading: "Suggested Order",
            body: [
                "Play your first loop exploring freely - talk to everyone, pursue every side character's story (Medic, Counsellor, Trickster, Lion Tamer, Liberator, Match-maker), and don't worry about loop count. Most of the collectible and world-interaction achievements happen naturally this way.",
                "Use later loops to deliberately chase the achievements that need specific choices - Psycho and Dead Shot both require going against the story's more peaceful default path, and Callous requires letting Fabia die rather than saving her as Trickster does.",
                "Once you understand the full picture, do one clean, no-side-quest loop to reach the Canon Ending in the fewest loops possible for Minimalist and The Oracle, then a completely separate save for Law Abiding Citizen's zero-loop run.",
                "Save Silver Tongue for last - it needs a solid understanding of every dialogue option in the game, which realistically only comes after you've already explored most of the story."
            ]
        }

    ]

};
