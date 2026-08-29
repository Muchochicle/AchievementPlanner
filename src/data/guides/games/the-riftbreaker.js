// The Riftbreaker Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/the-riftbreaker.json), whose 54 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   780310 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js). None are hidden; every one
//   ships a real, official Steam description, quoted verbatim below.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "the-riftbreaker-achievement-guide",
    "category": "game",
    "gameSlug": "the-riftbreaker",
    "icon": "🤖",
    "title": "The Riftbreaker Achievement Guide",
    "summary": "A practical guide to all 54 Steam achievements in The Riftbreaker - none are hidden. combat & mr. riggs feats, base building & resources, campaign & endgame.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "The Riftbreaker has 54 Steam achievements and none are hidden. They cover the action feats (weapons, gadgets, the Mr. Riggs mech), the base-building and economy goals, and the campaign progression up to saving Galatea 37.",
                "Nothing is missable - the campaign can be replayed and Survival and Sandbox modes stay available - and there is no difficulty requirement for most. The longest is the campaign completion plus the resource and research milestones.",
                "Tip: play the campaign for the story and Megastructure achievements, using its bases for the economy and research goals. The combat feats (dual miniguns, 101 rift jumps, 250 consumables) can be done any time in any mode."
            ]
        },
        {
            "heading": "Combat & Mr. Riggs Feats",
            "body": [
                "The action feats: mission-area exploration, the weapon and gadget goals (dual miniguns, 250 consumables, 101 rift jumps), the Mr. Riggs mech feats, and the enemy-kill and wave-survival milestones.",
                "The achievements here: Indecisive  (Explore at least 50% of a mission area before setting up your HQ in survival. ); Leaving Empty Handed  (Mr. Riggs \"dies\" and drops the last weapon he was holding. ); Something Useful  (Use 250 consumables ); Overkill?  (Fire 2 miniguns at the same time nonstop for 15 seconds. ); Beam Me Up  (No need for Scotty here. Make 101 rift jumps. ); Ashley Phone Home  (Build your first Communications Hub in the campaign or the survival mode. ); Get off my Lawn  (You really want to keep it clean. Destroy 10 000 destructibles. ); I know Kung-Fu  (Use skills 500 times. ); Kaboom!  (Make a big bang. Place a Nuclear Mine. ); I'll do it myself...  (Get your hands dirty! Kill 500 aliens with Mr Riggs' bare hands.); Strip mining  (Leave nothing behind. Extract at least 75% of resource veins in any map. ); Horrible Person  (You are a horrible person! Exterminate 1000 neutral creatures. ); The Treasure Hunter  (No stone unturned. Find at least 75% of hidden underground treasures on any map. ); Swiss Bank Account  (Create enough storage for 50 000 carbonium. ); AI driven  (Simultaneously own over 100 AI cores. ); All that Glitters  (Simultaneously mine every resource type in the game. ); Going Green  (Complete any Survival by building only Solar, Wind, Biomass or Geothermal powerplants.); Inspector Gadget  (Have all the available upgrade, consumable and weapon slots filled. )."
            ]
        },
        {
            "heading": "Base Building & Resources",
            "body": [
                "The base and economy goals: power and resource infrastructure, defensive structures and wall lengths, research completions, and the production and storage milestones.",
                "The achievements here: Queen Bee  (I am the swarm. Have 50 drones of any kind active at the same time. ); Run Robot Run!  (Run 21 097 meters. ); The Great Wall of Galatea 37  (Build 21 196 meters worth of walls. ); Looking for a Perfect House  (Build an outpost on 4 different biomes in campaign mode. ); Investing in Liquid Assets  (Build 1500 pipe segments. ); All Seeing Eye  (Nothing gets by you. Cover at least 75% of any map with radar coverage. ); Excalibur  (Build an Extreme Quality Sword and fully mod it with 3 Extreme mods. ); Scientist?  (Kill 50 000 hostile creatures. ); Final Form  (Equip every single weapon slot for Mr. Riggs with extreme variant gear. ); Walk in the Park  (Vacation on Galatea 37 complete! Finish the campaign or the survival mode. ); Forbidden Knowledge  (Complete all research in one tech tree. ); Book Worm  (Read at least 75% of entries in the encyclopedia/bestiary ); Gold Digger (Open 10 metallic bioanomalies.); Decimation (Kill 500 Flurians.); Mighty Morphin' Tower Rangers (Build 50 Morphium Towers.); No Water? No Problem! (Transfer 5000 of any liquid through compressor/decompressor.); Death Metal (Finish survival or story on metallic biome.); Excavation Site (Dig through or destroy 1000 cavern walls.)."
            ]
        },
        {
            "heading": "Campaign & Endgame",
            "body": [
                "The story and completion goals: scanning for new locations on Galatea 37, building the first Megastructure, the campaign-mission markers, and saving Galatea 37 (the final goal).",
                "The achievements here: Dig or Die (Kill 30 Drillgors.); Brittle (Kill 100 enemies with the crystal walls' explosion.); Home alone (Set up 250 traps.); Underground Glow (Open 10 bioanomalies in the Crystal Caverns biome.); Enter the Exit (Finish survival mode in the Crystal Caverns biome or the Into The Dark story campaign.); They aren’t that tough. (Kill 20 canceroths.); Are we the bad guys now? (Destroy 1000 enemies with HCM.); For science! (Extract resources from Poogret’s poo – 10 times); Tornado season (Shred 250 destructible props with a tornado skill.); I am a Superhero now. (Open 5 Power Wells.); Get out of my swamp! (Finish survival mode in the Fungal Swamp biome or the Swamp story campaign.); For profit!  (Dismantle 10 items at once. ); But is it better than mine?  (Find 50 weapons or upgrades. ); I'm SIGMA  (Kill 30 OMEGA Class Creatures. ); Ask AI, it won't lie.  (Use the \"Search\" option in Research or Inventory. ); Not enough space  (Scan for a new location on Galatea 37. ); It's bigger than I thought  (Build the first Megastructure. ); Next planet, please  (Achieve your final goal and save Galatea 37 )."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the campaign - the mission markers, the scan-for-location and Megastructure goals, and saving Galatea 37.",
                "2. Build out the campaign bases for the power, resource, defensive and research milestones.",
                "3. Do the combat and Mr. Riggs feats as they come up (dual miniguns, rift jumps, consumables).",
                "4. Mop up anything missed in Survival or Sandbox mode.",
                "Tip: Beam Me Up (101 rift jumps) and the consumable/minigun feats are pure counters - they fill naturally over a full campaign, so check the achievement list near the end and only grind the ones you are short on."
            ]
        }
    ]
};
