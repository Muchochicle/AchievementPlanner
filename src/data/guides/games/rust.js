// Rust's Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/rust.json), whose 105 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   252490 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js) - 93 of 105 ship a real,
//   official Steam description, quoted directly below.
// - The 12 hidden achievements ship no Steam description; their
//   conditions here are curatorial, cross-checked against Steam
//   Community hidden-achievement guides and Gamepur.
// - The grouping (the crafting-and-building starter chain, mid-game
//   tech, monuments and vehicles, music and DLC party achievements,
//   the seafaring update, social/clan achievements, then the hidden
//   ones) is read from what each achievement's own description
//   requires. Nearly all of it can be done solo on a private server.
export const GUIDE = {

    slug: "rust-achievement-guide",
    category: "game",
    gameSlug: "rust",
    icon: "🔩",
    title: "Rust Achievement Guide",
    summary: "A practical guide to all 105 Steam achievements in Rust - the crafting and building starter chain, mid-game tech, the monument and vehicle achievements, the music and DLC party achievements, and the seafaring update.",

    relatedSlugs: ["achievement-completion-and-tracking", "understanding-achievement-availability"],

    sections: [

        {
            heading: "Overview",
            body: [
                "Rust has 105 Steam achievements, 12 of them hidden. The large majority are simple \"craft this / place this / collect this\" milestones from the early game, plus a set of one-off feats at the map's monuments.",
                "Nothing is missable, and almost everything can be done alone. A private server (or an official server at a quiet time) with no wipe pressure lets you work through the whole list at your own pace.",
                "Tip: spin up your own server, disable decay if you can, and just play a long solo save. The crafting chain, the monument feats, and the vehicle achievements all fall out of normal progression when nobody is raiding you."
            ]
        },

        {
            heading: "Survival & Building Basics",
            body: [
                "The starter chain: Fresh Graduate (complete Tutorial Island), Craft Camp Fire and Place Camp Fire, Collect Wood, Craft Stone Hatchet, Collect 200 Stone, Craft Stone Pickaxe, Craft Sleeping Bag and Place Sleeping Bag, Collect 700 Wood, Craft Spear, Collect 30 Cloth, Craft Building Plan, Craft Hammer, Construct Base, and Upgrade Base.",
                "Doors and security: Craft Wooden Door, Place Wooden Door, Craft Lock, Place Lock, Lock the Lock, Craft Tool Cupboard, and Place Tool Cupboard. Storage and clothing: Craft Wooden Box, Place Wooden Box, Collect 50 Cloth, Craft Burlap Headwrap, Craft Burlap Shirt, Craft Burlap Pants, and Equip Clothing (three pieces).",
                "Hunting: Craft Hunting Bow, Craft Arrows, Kill an Animal, and Skin an Animal."
            ]
        },

        {
            heading: "Mid-Game Tech",
            body: [
                "Smelting and metal: Acquire 50 Low Grade Fuel, Craft a Furnace, Place a Furnace, and Collect 300 Metal Ore. Then Craft a Machete, Visit a Road, Collect 65 Scrap, and Destroy 10 Barrels.",
                "Workbenches and research: Craft a Workbench, Place a Workbench, Craft a Nailgun, Craft Nailgun Nails, Craft a Research Table, Place a Research Table, and Research an Item."
            ]
        },

        {
            heading: "Monuments & Vehicles",
            body: [
                "Monument feats: Terror in the Deep (reach an underwater lab by submarine), Heavy Industry (activate the Excavator), High Roller (win 3 rounds of poker at Bandit Camp), Mission Accomplished (5 NPC missions), Death from Above (a kill with the MLRS), On Track (10 Tunnel Dwellers from a moving work cart), Waste Not, Want Not (recycle 10 cars at the Junkyard), and Arctic Speed (get a snowmobile from an Arctic Research Base).",
                "Vehicles and travel: Buckle Up (start a fully repaired car with T3 engine parts), Thread the Needle (land a Minicopter on the Cargo Ship), Rust Air (pilot a Scrap Transport Helicopter with 5 passengers), Battle Bus (drive a modular car with 4 passengers), Smooth Sailing (3 km in a Kayak with a companion), and Big Brother (watch another player on a CCTV camera).",
                "Wildlife and farming: Apex Predator (3 sharks with a speargun), Pro Angler (catch every fish), and It's Honest Work (a different seed in every slot of a Large Planter Box)."
            ]
        },

        {
            heading: "Music & Party (DLC)",
            body: [
                "Instrument Pack: First Notes (play your first instrument) and Musical Maestro (play every instrument).",
                "Voice Props Pack: Party Boat, Bad Neighbour, On the Record, Like Nobody's Watching, I can no longer see, I should buy this Soundtrack, and Full Collection.",
                "Sunburn (summer) Pack: Cool Kids Club, Paparazzi, Radical, Soaked, Liquidator, and No Pressure - all water-gun and pool-float antics that need other players."
            ]
        },

        {
            heading: "The Seas",
            body: [
                "The seafaring content: Shipshape (build your first boat), Oceans are now battlefields (hit another boat with a cannon), New Horizons (enter the Deep Sea), Stolen Goods (a kill from a stolen PT boat), Need more fibre (eat 10 coconuts), Treasure ahoy! (open 5 loot containers on Tropical Islands), Hostile Waters (start hacking a locked crate on a Ghost Ship), and Safe Harbor (reach a Floating City)."
            ]
        },

        {
            heading: "Social & Clans",
            body: [
                "Friendly Neighbour (wave at 5 different players), Strength in Numbers (join a clan), New friends (be in a clan of 10+), and Working together (score points for your clan)."
            ]
        },

        {
            heading: "Hidden Achievements",
            body: [
                "Quick ones: Glutton (fill your food bar), Sealbreaker (fill your hydration bar), Save The Planet (recycle 5 empty cans), Sunglasses at Night (equip sunglasses after dark), and Pew Pew (find the hidden revolver on Tutorial Island).",
                "Setups: Giddy Up! (ride a horse 1 km), Something of a scientist myself (kill 5 Scientists), Getting the band together (a team of 4+ all holding instruments), I'm the Captain now (reach the Cargo Ship bridge), On The Deck (land a Minicopter on an Oil Rig helipad), Dude, where's my boat? (swim 200 m in the deep sea), and Swim with the fishes (jump off a diving board in handcuffs and a hood)."
            ]
        },

        {
            heading: "Suggested Order",
            body: [
                "On a quiet private server, do the whole crafting chain (Fresh Graduate, the Craft/Place/Collect starter achievements, Construct Base through Place a Research Table) in your first hours, then the mid-game tech (Furnace, Workbench, Nailgun, research).",
                "Tour the monuments for their feats (Terror in the Deep, Heavy Industry, High Roller, Mission Accomplished, Death from Above, On Track, Waste Not, Want Not, Arctic Speed) and build up vehicles for Buckle Up, Thread the Needle, Rust Air, Battle Bus, Smooth Sailing, and Big Brother. Fish and farm for Pro Angler, Apex Predator, and It's Honest Work.",
                "Do the seafaring set (Shipshape through Safe Harbor) and grab the solo hidden achievements (Glutton, Sealbreaker, Save The Planet, Sunglasses at Night, Pew Pew, Giddy Up!, Something of a scientist myself, I'm the Captain now, On The Deck, Dude, where's my boat?, Swim with the fishes).",
                "Save the group-only achievements for a session with friends: the Voice Props and Sunburn party achievements, Getting the band together and Musical Maestro, the co-op vehicle ones, and the clan achievements (Strength in Numbers, New friends, Working together, Friendly Neighbour)."
            ]
        }

    ]

};
