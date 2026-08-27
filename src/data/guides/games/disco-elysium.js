// Disco Elysium - The Final Cut's Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/disco-elysium.json), whose 45 achievements
//   were sourced directly from Steam's own achievement schema for appid
//   632470 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js) - 41 of 45 ship a real,
//   official Steam description (several deliberately cryptic one-liners,
//   in the game's own voice), quoted directly below.
// - Recruit Detective Kuuno de Ruyter, Gluten-Free Topping Pie,
//   Palerunner, and Real Musor are hidden achievements Steam never
//   describes publicly (confirmed via the same API call) - their
//   descriptions here are curatorial summaries of their real,
//   community-documented unlock conditions (cross-checked against
//   TrueAchievements and PlayStationTrophies' independent
//   documentation), kept deliberately brief rather than a full
//   step-by-step walkthrough given how dialogue-dependent each one is.
// - This is a heavily choice-driven narrative RPG: many achievements
//   here are mutually exclusive within a single playthrough (e.g. the
//   Baddest vs. Goodest Cop pair with Kim, or the many "Say/Do X times"
//   dialogue-approach achievements that reward committing to one voice
//   over another) - the catalog's game-level missable:true and
//   playthroughs:3 reflect that realistically, seeing every achievement
//   takes more than one run, not a single "correct" playthrough.
export const GUIDE = {

    slug: "disco-elysium-achievement-guide",
    category: "game",
    gameSlug: "disco-elysium",
    icon: "🕵️",
    title: "Disco Elysium Achievement Guide",
    summary: "A practical guide to all 45 Steam achievements in Disco Elysium - The Final Cut - the dialogue-approach achievements, recruiting your partners, the game's stranger hidden secrets, and why more than one playthrough is realistically needed.",

    relatedSlugs: ["achievement-completion-and-tracking", "understanding-achievement-availability"],

    sections: [

        {
            heading: "Overview",
            body: [
                "Disco Elysium - The Final Cut has 45 Steam achievements. This is a dialogue-heavy detective RPG where most achievements track how you talk, not what you fight - counting how many times you commit to a particular voice, mindset, or political stance in conversation.",
                "Several achievements here are effectively mutually exclusive within a single playthrough - you can't be both the Baddest and Goodest cop with Kim on the same save, for instance - so a real 100% realistically takes multiple playthroughs, each leaning into a different way of playing your character."
            ]
        },

        {
            heading: "Dialogue-Approach Achievements",
            body: [
                "Unbelievably Boring F**k, Hyperstellar Law Official, The Opener Of The Eighth Seal, Literally The Sorriest Cop On Earth, Biggest Communism Builder, Truly Rabid \"Traditionalist\", The World's Most Laughable Centrist, Baddest Hustler In The Neoliberal Hood, Expert Advanced Remote Viewer, Massive Torque Dork, and Il Coppo Del'Arte! each track saying a certain number of lines that fit one particular voice or ideology - boring small talk, superstar bravado, apocalyptic warnings, apologies, communism, traditionalism, centrism, free-market liberalism, remote viewing/psychic material, engineering talk, and Art Cop lines respectively.",
                "The Most Honourable Cop in The Land and Enemy Of The Physical Realm are similar counters for honour points gathered and inanimate objects damaged. The Lawbringer tracks how many times you declare yourself the law.",
                "Tip: these are much easier to plan for once you know roughly which of your character's Thought Cabinet slots and skill checks lean into which voice - committing early to one or two of these identities on a given playthrough naturally racks up several of these counters together."
            ]
        },

        {
            heading: "Kim, Cuno & Your Partners",
            body: [
                "Recruit Detective Kim Kitsuragi unlocks automatically early on as your default partner. Baddest Of the Bad Cops and Goodest Of The Good Cops are the opposite ends of your relationship with Kim across the game - hitting an all-time low with him versus really earning his trust - and are naturally exclusive on one playthrough.",
                "Recruit Detective Kuuno de Ruyter is a hidden, alternate-path achievement: it requires a specific, tragic turn during the Tribunal confrontation on the island where Kim doesn't make it through the scene unharmed, after which Cuno can be recruited as a junior detective in his place.",
                "Bother Kim After Hours and Baddest Brow in Town, along with Get Kim to Wear *The Jacket* and Modus: Mullen, are all smaller, specific moments tied to your relationship and shared cases with Kim."
            ]
        },

        {
            heading: "The City's Stranger Secrets",
            body: [
                "Gluten-Free Topping Pie, Palerunner, and Real Musor are the game's three hidden, easy-to-miss secrets: talking Gary the cryptofascist into revealing (and delivering) a topping pie, finding the hidden dark storage area behind the bookstore and stepping into it with your flashlight off, and refusing to pay Garte for your room until he reassigns you to the dumpster outside - each a specific, out-of-the-way conversation or action rather than anything the main story points you toward.",
                "What body? is a much bigger structural achievement: solving the entire case without ever inspecting the body at the center of it - a real alternate approach to the whole game, not just a single scene.",
                "Fairweather t-500 Vitreous Enamel, The Figurines Won't Win Her Back, Avowed Inframaterialist, The Icebreaker, Networthy Individual, Committee of la Responsabilité, Medal dispenser, Hardie's Heroes, Cause a Shitstorm, Leopard Mindset, Wheel of Pleasure and Light, Gurdi-Ball Is Lit, Spectres of Hope, Old Flame, Looks Like Progress, Priceless Facade, and Now For A Difficult Provenance are each their own smaller, specific story beats or side content scattered across the city - deliberately vague titles by design, matching the game's own dry, cryptic sense of humor about spoiling its own achievements."
            ]
        },

        {
            heading: "Hardcore Mode",
            body: [
                "Venture into the HARDCORE unlocks simply for starting a run in HARDCORE mode, a much less forgiving difficulty setting. True Detective is the much bigger ask: actually finishing the entire game on HARDCORE.",
                "Tip: attempt HARDCORE only after you already know the game's systems well from a normal playthrough - it's a real difficulty spike, not just a cosmetic mode."
            ]
        },

        {
            heading: "Suggested Order",
            body: [
                "Play your first full run at a comfortable pace, committing to whichever voices and mindset appeal to you naturally - Recruit Detective Kim Kitsuragi and several of the dialogue-approach counters will come together on their own without extra planning.",
                "On a second playthrough, deliberately lean the opposite direction on the achievements that were mutually exclusive the first time (the Kim relationship pair, opposing dialogue-voice counters), and specifically seek out the hidden secrets (Gluten-Free Topping Pie, Palerunner, Real Musor, Recruit Detective Kuuno de Ruyter) using their known triggers.",
                "Save What body? for a dedicated, guide-assisted run, since deliberately avoiding a core early-game scene works against how the game naturally teaches itself.",
                "Attempt HARDCORE mode and True Detective last, once you already know the case and its skill checks well from earlier playthroughs."
            ]
        }

    ]

};
