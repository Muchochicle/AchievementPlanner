// Pacific Drive Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/pacific-drive.json), whose 49 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1458140 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 21 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (TrueAchievements / Steam Community / game wikis) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "pacific-drive-achievement-guide",
    "category": "game",
    "gameSlug": "pacific-drive",
    "icon": "🚗",
    "title": "Pacific Drive Achievement Guide",
    "summary": "A practical guide to all 49 Steam achievements in Pacific Drive (21 hidden). Covers every story mission from first contact with Oppy through the end of the Zone, car-customization and driving-technique achievements, and a set of quirky one-off gags. Twenty-one of the achievements are hidden and their unlock conditions are researched from community guides.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Pacific Drive has 49 Steam achievements and 21 are hidden. Thirteen are story missions charting your route deeper into the Zone with the mechanic Oppy - from your first trip out of the Auto Shop, through the Mid-Zone and Deep-Zone crossings, to returning from the Well at the story's end. The rest are car-customization and driving-technique achievements (fully upgrading the Auto Shop, filling your inventory, replacing every original car part, surviving a storm's total collapse) and a handful of gags - forgetting to shift into drive twenty times, discovering your own Remnant Ghost, kicking an Anomaly, curing a Quirk, and giving your car a few swift kicks just to see what happens.",
                "The catalog marks it difficulty 3. Runs are replayable and most achievements accumulate naturally across multiple trips into the Zone, so very little here needs a dedicated farming session.",
                "Tip: 'Car Of Theseus' wants every original door, panel, wheel and the engine replaced with different parts - this tends to happen naturally over a long save if you don't have auto-repair turned on, so just keep swapping parts as you find better ones."
            ]
        },
        {
            "heading": "Story: Into the Zone",
            "body": [
                "Making contact with Oppy, installing the Zone Scanner, investigating the Zone, testing Oppy's theory, activating the Zone Stabilizers, crossing into the Mid-Zone and Deep-Zone, hacking the planet, uncovering the Zone's history, the Red Meadow Records, the Anomaly Barricade, returning from the Well, and equipping the cryptid bobblehead for the ride.",
                "The achievements here: The Auto Shop (Make contact with Oppy and plan your first route into the Zone from her Auto Shop.); Into the Wilderness (Install the Zone Scanner above the Auto Shop.); Investigate the Zone (Return to the Auto Shop after scanning five Anomalies or resources.); A Leap of Faith (Successfully test Oppy's theory and return to her Auto Shop.); Stabilizing the Route (Activate the Zone Stabilizers in the Outer Zone and escape back to the Auto Shop.); The Mid-Zone Crossing (Gain access to the Mid-Zone and escape from there to the Auto Shop.); Hack the Planet! (Find Oppy's secret hideaway in the Auto Shop and deliver the hard drive she stashed there to Francis and Tobias.); The Visions (Uncover some of the Zone's history in the Mid-Zone, then escape back to the Auto Shop.); The Red Meadow Records (Return to the Auto Shop after recovering data ARDA hid in the Red Meadow Research Facility.); The Deep Zone Crossing (Gain access to the Deep-Zone and escape from there to the Auto Shop.); The Anomaly Barricade (Overcharge the car's ARC Device and escape back to the Auto Shop.); The End of the Road (Return from the Well.); Along for the Ride (Equip the cryptid bobblehead item during the final mission, 'The Well', and escape back to the Auto Shop.)."
            ]
        },
        {
            "heading": "Car & Collection Milestones",
            "body": [
                "Driving an exceptional distance, inventing after installing the Zone Scanner, maxing out the Auto Shop and Fabrication Station, discovering Logbook entries, reaching 88mph, scanning an Anomaly mid-storm, escaping a fully collapsed storm, replacing every original car part, fully outfitting and decorating the car, and escaping while airborne.",
                "The achievements here: Long Haul (Drive an exceptional distance); Patent Pending (Invent something new after installing the Zone Scanner); Garage Barrage (Upgrade the Auto Shop into its prime); DIY Expert (Unlock quite a few things in the Fabrication Station); DIY Master (Unlock not everything, but really quite a lot of things in the Fabrication Station); ARDA Record-Keeper (Discover 300 Logbook entries); ARDA Lorekeeper (Discover 600 Logbook entries); Great Scott! (Reach 88mph); Scientific Pursuit (Scan an Anomaly while the storm is approaching); The Eye of the Storm (Escape through a Gateway after the storm has completely collapsed.); Car Of Theseus (Replace all of your car's original doors, panels, wheels and engine so none remain the ones you started with.); Fully Outfitted (Equip or install something in every possible slot on the car); Packrat (Load enough items into your car to fill 150 inventory grid slots.); Personal Methods of Creative Expression are Highly Encouraged (Fully decorate your car by equipping one of each kind of cosmetic item, and applying a paint or decal to installed car parts in every possible slot); Fly Homeward (Escape through a Gateway while the car's wheels are airborne)."
            ]
        },
        {
            "heading": "Run Challenges & Driving Technique",
            "body": [
                "Completing long, resource-heavy, low-fuel, no-repair, structureless, and always-in-drive runs, forgetting to shift into drive twenty times, destroying trees, liberating abandoned car parts, naturally recharging the battery, and stacking multiple status effects on yourself or the car.",
                "The achievements here: Streets Ahead (Complete a run with at least seven junctions); Juiced Up (Complete a run with at least two junctions, and with twice the anchor charge necessary to escape through the Gateway); Running on Empty (Complete a run with at least two junctions, and with the car always having a low or empty fuel tank); It Would Take a Miracle (Complete a run with at least four junctions, and without breaking or removing any car parts); With the Top Down (Complete a run with at least three junctions, and without any panels, doors, or bumpers on the car at any point); No Parking (Complete a run with at least three junctions, and without the car ever being in park); Driver's Ed Dropout (Forget to put the car in drive before hitting the gas, twenty times.); Lumberjack (Destroy 1,000 trees); They Weren't Using It (Liberate and equip a part from an abandoned car); Renewable Power (Fully charge a car battery from under 50% using only natural energy sources); Just Walk it Off (Get electrocuted, acid-burned, and physically hurt all within a minute); Et tu? (Get hit hard by your car)."
            ]
        },
        {
            "heading": "Secrets & Gags",
            "body": [
                "Discovering your Remnant Ghost, driving with a Bunny hitching a ride, kicking an Anomaly, distracting an Anomaly with light, fixing six status effects on one component, diagnosing a Quirk, kicking your own car, deconstructing a resource, and staying airborne for six seconds.",
                "The achievements here: Graverobber (Discover your Remnant Ghost from a previous death, and retrieve any lost items or equipment.); Watch Out for Hop-ons! (Drive several miles with a Bunny on your car); Nothing Personnel, Zone (Kick a Tourist, Tour Bus, or Ticking Tumbler Anomaly.); Sleight of Hand (Distract an Anomaly with a light source); Certified Mechanic (Fix six status effects on the same car component); Car Whisperer (Diagnose and cure a Quirk.); Troubleshooting (Give your car a few swift kicks.); I Don’t Know What I Expected (Deconstruct a resource); Where We're Going, We Don't Need Roads (While driving, remain airborne for six seconds)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Follow Oppy's story missions from the Auto Shop through the Outer, Mid, and Deep Zones to the Well.",
                "2. Fully upgrade the Auto Shop and Fabrication Station as you unlock new blueprints from Logbook entries.",
                "3. Try the run-challenge achievements as opportunities arise - a long run, a low-fuel run, a run with the car stripped of panels.",
                "4. Swap out every original car part over time for 'Car Of Theseus', and fill your inventory grid for 'Packrat'.",
                "5. Try the gag achievements when you think of them - kick your car, kick an Anomaly, and drive with a Bunny riding along.",
                "Tip: 'Along for the Ride' needs the cryptid bobblehead equipped specifically during the final mission, 'The Well' - grab it from the pneumatic tube in the Auto Shop before your last run."
            ]
        }
    ]
};
