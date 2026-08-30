// Alan Wake Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/alan-wake.json), whose 67 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   108710 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "alan-wake-achievement-guide",
    "category": "game",
    "gameSlug": "alan-wake",
    "icon": "🔦",
    "title": "Alan Wake Achievement Guide",
    "summary": "A practical guide to all 67 Steam achievements in Alan Wake - none are hidden. Covers the story-progress and difficulty achievements, the combat and encounter feats, and the collectibles plus the two add-on episodes, The Signal and The Writer.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Alan Wake has 67 Steam achievements and none of them are hidden. The base game covers story progress (each episode and set piece), finishing on Normal, Hard and Nightmare, a set of combat feats (defeat 100 Taken with the revolver, 50 each with the rifle, shotgun, flaregun and flashbangs, various multi-kills and cinematic dodges), and a large collectible pool - hidden chests, manuscript pages, coffee thermoses, radio shows, TV shows. The other 17 belong to the two add-on episodes bundled here, The Signal and The Writer, each with its own completion, challenge and collectible achievements.",
                "The manuscript pages are the notable catch: Picking Up After Yourself needs all pages found in Normal mode, and Collector's Edition needs every page including the extra ones that only appear on Nightmare difficulty - so a full completion is at least a Normal run and a Nightmare run. Nothing else is permanently missable thanks to chapter select.",
                "Tip: play your first run on Normal with a collectible guide open, picking up every page, thermos and chest, then do the Nightmare run (which also covers Hard by being higher) purely for the difficulty achievement and the Nightmare-only manuscript pages."
            ]
        },
        {
            "heading": "Story Progress & Difficulty",
            "body": [
                "The story and set-piece achievements from the opening through the tornado finale (the night course, the logging area, calling for help, the TV, the park ranger, the bulldozer, the steam engine, the kidnapper, Hartman's recordings, the transformer yard, the Lady of the Light, defeating the tornado, Child of the Elder God, Perchance to Dream, Drink 'Em Both Up), and completing the game on Normal, Hard and Nightmare.",
                "The achievements here: Follow the Light (Take a night course of light education.); Nordic Walking (Take a walk through the logging area, meet one of the quirky locals.); Bright Falls' Finest (Call for help.); Boob Tube (See what's on TV.); Under a Thin Layer of Skin (Defy the park ranger.); Park Ranger (Enjoy the sounds and sights of Elderwood National Park.); Heavy Metal (Survive the bulldozer attack.); Iron Horse (Encounter a steam engine.); Wheels Within Wheels (Meet the kidnapper.); Medical Opinions (Listen to Hartman's recordings.); Child of the Elder God (Have a rock'n'roll moment without dropping to a low health state.); Perchance to Dream (Take a moment to reflect on past events.); Drink 'Em Both Up (Put de lime in de coconut twice.); Gatekeeper (Cut the power to the transformer yard.); The Lady of the Light (Discover the secret she guards.); Tornado Wrangler (Defeat the tornado.); Departure (Complete the game on Normal difficulty.); Hardboiled Writer (Complete the game on Hard difficulty.); Alan, Wake Up (Complete the game on Nightmare difficulty.)."
            ]
        },
        {
            "heading": "Combat & Encounter Feats",
            "body": [
                "Burn 1,000 birds, 20 possessed-object kills, 100 Taken with the revolver, 50 each with the hunting rifle, shotgun, flaregun and flashbangs, 20 with indirect means, the flaregun / flashbang / shotgun multi-kills, saving yourself with a flare, one and then 20 cinematic dodges, using 100 batteries, getting a generator running, the can-pyramid feat, the Meet the Deadline and one-go and gunless chapter challenges, and driving over 15 Taken.",
                "The achievements here: If It Flies, It Burns (Burn 1,000 birds.); They're Heeeeeere! (Inanimate objects shouldn't move of their own accord. Put a stop to this affront, oh, say, 20 times.); The Six-Gun Scribe (Defeat 100 Taken with the revolver.); Taken Season (Defeat 50 Taken with the hunting rifle.); It's Not Just a Typewriter Brand (Defeat 50 Taken with a shotgun.); What Light Through Yonder Window (Defeat 50 Taken with the flaregun, the way Shakespeare intended.); Thunder and Lightning (Defeat 50 Taken with flashbang grenades.); Collateral Carnage (Defeat 20 Taken with indirect means.); Come One, Come All (Kill four Taken with a single shot from the flaregun.); Sound and Fury (Kill four Taken with a single flashbang.); Two For the Price of One (Kill two Taken with a single shotgun blast.); Back! Back, I Say! (Save yourself with a flare.); Float Like a Butterfly (Perform a cinematic dodge.); Missed by a Mile (Perform a cinematic dodge 20 times.); Energized! (Use 100 batteries.); Let There Be Light (Get a generator running.); Carny (Knock over five can pyramids.); Meet the Deadline (In ''Mirror Peak,'' make it from the Coal Mine Museum to Cauldron Lake in 30 minutes.); An Idyllic Small Town (Make it through ''Night Life in Bright Falls'' in one go without dying or restarting even once.); Gunless Wonder (Make it to Cauldron Lake without firing a single shot in ''On the Road to Cauldron Lake.''); Right of Way (Drive over 15 Taken.)."
            ]
        },
        {
            "heading": "Collectibles, The Signal & The Writer",
            "body": [
                "Discovering 5 and then all hidden chests, 25 manuscript pages, all pages in Normal, all pages including Nightmare-only ones, 25 and all coffee thermoses, all radio shows, all TV shows, Bright Falls Aficionado, then the two add-on episodes - The Signal (find help, follow the signal, the sub-90-second final battle, the furnaces, a no-reload run, a no-vehicle run, 10 alarm clocks, all cardboard standees) and The Writer (the elevator, the final obstacle, the gunless approach, a no-reload run, an unhurt final encounter, the sub-60-second tornado, 10 Night Springs games, the secret area, Heartbreaker).",
                "The achievements here: Finders Keepers (Discover 5 hidden chests.); Every Nook and Cranny (Discover all of the hidden chests.); Paging Mr. Wake (Find 25 manuscript pages.); Picking Up After Yourself (Find all of the manuscript pages in Normal mode.); Collector's Edition (Find all of the manuscript pages in the game, including the ones in Nightmare mode.); Damn Good Cup of Coffee (Discover 25 coffee thermoses.); Hypercaffeinated (Discover all coffee thermoses.); KBF-FM (Listen to all of the radio shows.); Couch Potato (Watch every single TV show.); Bright Falls Aficionado (Absorb every bit of local history and culture.); A Friend in Need (Special 1: Find someone to help you.); A Friend Indeed (Special 1: Follow the signal to its conclusion.); Fast and Furious (Special 1: Make it through the final battle in less than 1 minute and 30 seconds.); Words Will Never Harm You (Special 1: Trigger all of the furnaces in the basement.); Run-On Sentence (Special 1: Complete the episode without reloading the game or restarting a checkpoint.); License Revoked (Special 1: Complete the episode without using a single vehicle.); Tick Tock (Special 1: Discover 10 hidden alarm clocks.); Cardboard Companions (Special 1: Discover all of the cardboard standees.); Ding! (Special 2: Complete the elevator ride.); Kill Your Darlings (Special 2: Defeat the final obstacle between you and your goal.); Go Gentle Into That Good Light (Special 2: Make it through the approach to the lighthouse without firing a weapon.); No Punctuation (Special 2: Complete the episode without reloading the game or restarting a checkpoint.); Iron Will (Special 2: Survive the final encounter without being seriously hurt.); Whirlwind (Special 2: Make your way past the tornado in under 60 seconds.); Licensed Properties (Special 2: Discover 10 Night Springs video games.); Creative Space (Special 2: Discover the secret area.); Heartbreaker (Special 2: Have some poison poured in your ear.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through on Normal with a collectible guide, grabbing every manuscript page, coffee thermos and hidden chest and watching every TV and radio show as you pass them.",
                "2. Do the combat feats that fit naturally on that run (the weapon kill counts, multi-kills, dodges, the can pyramids, batteries).",
                "3. Do the chapter challenges (Meet the Deadline, the one-go and gunless runs) via chapter select.",
                "4. Play The Signal and The Writer, doing their completion, challenge and collectible achievements in one focused pass each.",
                "5. Do a Nightmare run for Alan, Wake Up and the Nightmare-only manuscript pages needed for Collector's Edition.",
                "Tip: the flaregun and flashbang multi-kills (four Taken with one shot) are easiest during the scripted large-group ambushes - hold your special ammo until a wave spawns clustered together rather than spending it on stragglers."
            ]
        }
    ]
};
