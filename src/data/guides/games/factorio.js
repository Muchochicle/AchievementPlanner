// Factorio Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/factorio.json), whose 88 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   427520 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js). None are hidden; 87 ship a
//   real, official Steam description quoted verbatim below, and "So long
//   and thanks for all the fish" ships a blank description on Steam - it
//   is given a curatorial one ("Eat a raw fish."), cross-checked against
//   the Factorio Wiki.
// - Roughly half the list belongs to the Space Age expansion. Sections
//   split base game from Space Age and group by what each achievement
//   needs.
export const GUIDE = {
    "slug": "factorio-achievement-guide",
    "category": "game",
    "gameSlug": "factorio",
    "icon": "🏭",
    "title": "Factorio Achievement Guide",
    "summary": "A practical guide to all 88 Steam achievements in Factorio - none are hidden. The early automation milestones, the per-hour production ladders, the rocket launches and speedrun/restriction achievements, the combat and nature feats, and the two large Space Age blocks (the new planets, their science packs, and the endgame quality and enemy content).",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Factorio has 88 Steam achievements and none are hidden (one, So long and thanks for all the fish, ships a blank description on Steam - it is simply \"eat a raw fish\"). Roughly the first half are base-game milestones; the rest were added with the Space Age expansion and need its planets and science packs.",
                "Steam achievements only unlock in games with the default settings and no mods active, and several base-game achievements are mutually exclusive within one run - Lazy Bastard (hand-craft ≤111 items), Raining Bullets (no laser turrets), Steam All The Way (no solar), Solaris (solar only) and Logistic Network Embargo (no logistic chests) each restrict how you build.",
                "Difficulty and estimatedTime here are curatorial; the per-hour production ladders and the speedrun achievements (There Is No Spoon at 8 hours) are the hard ones.",
                "Tip: plan the restriction achievements before you start a save - Lazy Bastard in particular has to be respected from the very first minute. A default-settings, no-mods, peaceful-off world with a route learned from a speedrun is the standard vehicle for the timed and no-build achievements."
            ]
        },
        {
            "heading": "Getting Started & Automation",
            "body": [
                "The early game: your first assembling machine, steam, solar and nuclear power, automation science, the first locomotive (and doing it within 90 minutes), researching oil processing, depleting a resource patch, and the construction-robot milestones.",
                "The achievements here: Automated cleanup (Deconstruct 100 objects with the construction robots.); Automated construction (Construct 100 machines using robots.); You've got a package (Supply the character by logistic robot.); Eco unfriendly (Research oil processing.); Getting on track (Build a locomotive.); Getting on track like a pro (Build a locomotive within the first 90 minutes of the game.); You are doing it right (Construct more machines using robots than manually.); Automate this! (Build an assembling machine.); Mining with determination (Completely deplete a resource patch.); Research with automation (Research a technology using automation science packs.); Steam power (Start producing electric power by steam engine.)."
            ]
        },
        {
            "heading": "Production Ladders",
            "body": [
                "The per-hour and total production tiers: advanced circuits (Circuit veteran 1-3), processing units (Computer age 1-3), iron plates (Iron throne 1-3), electronic circuits (Mass production 1-3) and the solar-only 10 GJ/h Solaris.",
                "The achievements here: Circuit veteran 1 (Produce 1.0k advanced circuits per hour.); Circuit veteran 2 (Produce 10k advanced circuits per hour.); Circuit veteran 3 (Produce 25k advanced circuits per hour.); Computer age 1 (Produce 500 processing units per hour.); Computer age 2 (Produce 1.0k processing units per hour.); Computer age 3 (Produce 5k processing units per hour.); Iron throne 1 (Produce 20k iron plates per hour.); Iron throne 2 (Produce 200k iron plates per hour.); Iron throne 3 (Produce 400k iron plates per hour.); Mass production 1 (Produce 10k electronic circuits.); Mass production 2 (Produce 1M electronic circuits.); Mass production 3 (Produce 20M electronic circuits.); Solaris (Produce more than 10 GJ per hour using only solar panels.)."
            ]
        },
        {
            "heading": "Rockets, Speedruns & Game Completion",
            "body": [
                "Launching a rocket (Smoke me a kipper, I'll be back for breakfast) and doing it under 15 and 8 hours, the build-restriction launches (no laser turrets, no solar panels, no logistic chests), Lazy Bastard, and finishing the game within 40 and 100 hours and the Space Age victory.",
                "The achievements here: Lazy bastard (Launch a rocket to space while manually crafting no more than 111 items.); Logistic network embargo (Finish research with space science pack for the base game or any planetary science pack for Space Age without building any active provider, buffer, or requester chests.); Smoke me a kipper, I'll be back for breakfast (Launch a rocket to space.); No time for chitchat (Launch a rocket to space within 15 hours.); There is no spoon (Launch a rocket to space within 8 hours.); Raining bullets (Launch a rocket to space without building any laser turrets.); Steam all the way (Launch a rocket to space without building any solar panels.); Express delivery (Finish the game within 40 hours.); Second star to the right and straight on till morning (Finish the game.); Work around the clock (Finish the game within 100 hours.)."
            ]
        },
        {
            "heading": "Combat, Trains & Nature",
            "body": [
                "The combat and environment feats: surviving a big hit, a robot army, burning and ramming trees and spawners, triggering a pollution attack, spidertrons and artillery, the atomic bomb, biter-spawner and cliff destruction, being run over by your own train, and a very long train path.",
                "The achievements here: Delivery service (Supply the character with 10k items delivered by logistic robots.); Golem (Survive a hit of 500 damage or more.); It stinks and they don't like it (Trigger an alien attack by pollution.); Minions (Have 100 combat robots or more following you.); Pyromaniac (Destroy 10k trees with fire.); Run Forrest, run (Destroy 100 trees by impact.); Steamrolled (Destroy 10 spawners by impact.); Trans-Factorio express (Have a train plan a path 1,000 tiles or longer.); Watch your step (Get killed by a moving locomotive.); Arachnophilia (Build a spidertron.); Art of siege (Destroy an enemy structure using artillery.); I am the destroyer of worlds (Use an atomic bomb.); Terraformer (Destroy a cliff.)."
            ]
        },
        {
            "heading": "Space Age: Planets, Travel & Science",
            "body": [
                "The expansion's travel and research block: creating a space platform, visiting Vulcanus, Fulgora, Gleba and Aquilo, and researching a technology with each science pack type (automation through promethium, including the rush-to-space out-of-order research).",
                "The achievements here: Reach for the stars (Create a space platform.); Research with agriculture (Research a technology using agricultural science packs.); Research with chemicals (Research a technology using chemical science packs.); Research with cryogenics (Research a technology using cryogenic science packs.); Research with electromagnetics (Research a technology using electromagnetic science packs.); Research with logistics (Research a technology using logistic science packs.); Research with metallurgics (Research a technology using metallurgic science packs.); Research with military (Research a technology using military science packs.); Research with production (Research a technology using production science packs.); Research with space (Research a technology using space science packs.); Research with utility (Research a technology using utility science packs.); Rush to space (Research a technology using another planet's science pack before unlocking production or utility science packs.); Visit Aquilo (Travel to planet Aquilo.); Visit Fulgora (Travel to planet Fulgora.); Visit Gleba (Travel to planet Gleba.); Visit Vulcanus (Travel to planet Vulcanus.); Research with promethium (Research a technology using promethium science packs.)."
            ]
        },
        {
            "heading": "Space Age: Enemies, Quality & Endgame",
            "body": [
                "The rest of Space Age: the quality-module crafting tiers up to legendary, rare/legendary power armor and a fully legendary mech suit, fusion power, the demolisher and pentapod enemies, agricultural spores, the shattered-planet distance tiers, eating a legendary fish, and Research all technologies (Tech maniac).",
                "The achievements here: So long and thanks for all the fish (Eat a raw fish.); Tech maniac (Research all technologies.); Crafting with efficiency (Craft an efficiency module 3.); Crafting with productivity (Craft a productivity module 3.); Crafting with quality (Craft a quality module 3.); Crafting with speed (Craft a speed module 3.); Fusion power (Start producing electric power by fusion powerplant.); Get off my lawn (Disturb a demolisher by building on its territory.); If it bleeds, we can kill it (Kill a small demolisher.); It stinks and they do like it (Attract a group of pentapods using spores.); Keeping your hands clean (Destroy your first enemy structure using artillery.); Look at my shiny rare armor (Equip rare or better quality of power armor MK2 or mech armor.); Make it better (Manually insert a quality module into a module slot.); My modules are legendary (Craft a legendary quality module 3.); No room for more (Fill every tile of legendary mech armor with legendary equipment.); Nuclear power (Start producing electric power by nuclear powerplant.); Pest control (Destroy a biter spawner.); Going to shattered planet 1 (Travel 10 000 km towards the shattered planet.); Going to shattered planet 2 (Travel 30 000 km towards the shattered planet.); Going to shattered planet 3 (Travel 60 000 km towards the shattered planet.); Size doesn't matter (Kill a big demolisher.); Solar power (Start producing electric power by solar panels.); Today's fish is trout a la creme (Eat a legendary fish.); We need bigger guns (Kill a medium demolisher.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. First serious save: default settings, no mods, and decide up front whether it is your Lazy Bastard run (it should be - respect the hand-craft limit from minute one).",
                "2. Push that save to a rocket launch and then a Space Age victory, picking up the automation, ladder, combat and planet achievements on the way, and doing the per-science-pack research as you unlock each one.",
                "3. Grow it into a megabase for the top production ladders (25k advanced circuits/h, 20M electronic circuits, 400k iron plates/h) and Tech maniac.",
                "4. Do the mutually-exclusive restriction launches (Raining Bullets, Steam All The Way, Solaris, Logistic Network Embargo) and the speedruns (No Time For Chitchat, There Is No Spoon, Express Delivery) as their own dedicated saves with a learned route.",
                "Tip: the Space Age per-science-pack research achievements (Research with automation ... Research with promethium) all pop naturally on a single victory run - do not treat them as a checklist, just make sure you actually research something with each pack rather than skipping a tier."
            ]
        }
    ]
};
