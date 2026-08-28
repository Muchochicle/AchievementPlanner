// Monster Hunter Rise Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/monster-hunter-rise.json), whose 100
//   achievements were sourced directly from Steam's own achievement
//   schema for appid 1446780 via ISteamUserStats/GetSchemaForGame
//   (fetched through this app's own backend/services/steamApi.js). None
//   are hidden; every one ships a real, official Steam description,
//   quoted verbatim below (two carry a curly apostrophe, preserved
//   byte-for-byte).
// - Roughly half the list (the GC_Award_N_MR_* apinames) belongs to the
//   Sunbreak expansion. Sections split base game from Sunbreak and then
//   group by what each award tracks: story/Rampage, hunter progression,
//   village life, exploration/ecology, and Sunbreak's Anomaly and Risen
//   endgame.
export const GUIDE = {
    "slug": "monster-hunter-rise-achievement-guide",
    "category": "game",
    "gameSlug": "monster-hunter-rise",
    "icon": "🐉",
    "title": "Monster Hunter Rise Achievement Guide",
    "summary": "A practical guide to all 100 Steam achievements in Monster Hunter Rise - the base-game story and Rampage milestones, hunter-rank and Guild progression, the Kamura Village, Buddy and facility awards, the exploration and ecology collectathons, and the full Sunbreak Master Rank set: its story, the Anomaly Investigation and Risen endgame, and its own progression and Follower awards.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Monster Hunter Rise has 100 Steam achievements and none are hidden. Every achievement is an in-game \"award\" trophy with a flavour-text description, and roughly half belong to the Sunbreak expansion (the GC_Award_N_MR_* set) - you need Sunbreak installed and progressed to Master Rank to finish the list.",
                "Nothing is permanently missable. Every quest, monster, camp, Old Message, Endemic Life photo and crown can be revisited or re-rolled, and the counters (1,000 Wiredashes, 1,000 large-monster hunts, 1,000,000 zenny, 100 afflicted monsters) simply accumulate. Realistically this is a many-hundred-hours completion driven by the Anomaly Investigation grind.",
                "Tip: do not rush the crown achievements (Mini Crown Plaque, Gold Crown Plaque, Miniature Crown Shield, Gold Crown Shield). Size records are registered automatically every hunt, so by the time you have ground Master Rank and the Anomaly endgame you will be most of the way there - chase only the last few missing sizes with targeted Investigations at the very end."
            ]
        },
        {
            "heading": "Base Game: Story & the Rampage",
            "body": [
                "These track the low- and high-rank Village and Hub campaign: defeating the flagship Magnamalo, clearing the Rampage siege mode, and the two-part finale against Wind Serpent Ibushi and Thunder Serpent Narwa. They unlock in campaign order and are all but unmissable if you simply play the story; the two \"Ascendancy\" fans instead ask you to beat the optional hardest quests and the Infernal Springs challenges.",
                "The achievements here: Apex Shortsword (Granted for banishing an Apex in the Rampage. Its blade is riddled with battle scars.); Tempestuous Triumph Scroll (A hanging scroll from Master Hojo, depicting your victory over Wind Serpent Ibushi.); Ancestral Blade (A prize for vanquishing Magnamalo. This blade has led Kamura for generations.); Calamity Conqueror Scroll (Received upon defeating Ibushi and Narwa. Depicts the two serpents leading the Rampage.); Fan of Fading Crimson (A decorative fan awarded to those who vanquished the crimson-glowing threat to the village.); Fan of Ascendancy (The mark of a hunter who has attempted some of the toughest quests around—and won.); Fan of True Ascendancy (Mark of a hunter who has bested Infernal Springs' most arduous challenges.)."
            ]
        },
        {
            "heading": "Base Game: Hunter Progression & Guild Milestones",
            "body": [
                "This block is the low- and high-rank grind markers: your first proof-of-skill trinket and the peerless-hunter badge, Guild certificates for completing many Low Rank, High Rank, Rampage and Arena quests, and the lifetime hunt milestones (1,000 large monsters, 5 monsters in one Expedition, riding many species, and registering miniature and gold crown sizes).",
                "The achievements here: Badge of Excellence (The mark of a peerless hunter, conferred only to those who have earned a lot of awards.); Kamura Amulet (A trinket given to new hunters who have proved themselves capable.); Aspiring Hunter Certificate (A souvenir from the Guild for completing many low rank quests.); Adept Hunter Certificate (A souvenir from the Guild for completing many high rank quests.); Rampage Nemesis Certificate (A souvenir from the Guild for completing many Rampage quests.); Arena Fighter Certificate (A souvenir from the Guild for completing many Arena quests.); Dreadnought Destroyer Plaque (Awarded for hunting 1,000 large monsters.); Five-in-One Plaque (Awarded for hunting 5 monsters in 1 Expedition Tour.); Seasoned Jockey Plaque (Awarded for riding many different monsters.); Mini Crown Plaque (Awarded for registering many miniature crownsized monsters.); Gold Crown Plaque (Awarded for registering many gold crown-sized monsters.)."
            ]
        },
        {
            "heading": "Base Game: Kamura Village, Buddies & Facilities",
            "body": [
                "The village-life awards: fulfilling villagers' requests, cooking well-done steak, hiring Palicoes and Palamutes, sending the Meowcenaries out, maxing support Palicoes, collecting Palamute Gear, forging valuable and layered armour, gathering Petalaces and Switch Skills, helping Yomogi at the Tea Shop, and collecting decorations, hanging scrolls and Cohoot outfits.",
                "The achievements here: Beat-up Construction Kit (Awarded for unlocking lots of camps. Each of its nicks and grooves tells a story.); Wreath of Honor (A wreath received from the villagers as thanks for taking on their many requests.); Well-done Grillmeister (Awarded for cooking a welldone steak 30 times. Good job, and well done!); Thank-mew Letter (Awarded for hiring 50 Buddies. We a-purr-eciate your fur-iendly patronage!); Good Luck Charm (Proof of having sent the Meowcenaries out on a quest 100 times.); From Palicoes, with Love (Awarded for raising various support-type Palicoes to their maximum levels.); Palamute Gear Tune-up Kit (Awarded for collecting a lot of Palamute Gear. Daily maintenance is what will make it last!); Luxury Armor Stand (Awarded for forging many valuable weapons and armor. Made from premium materials.); Colorful Armor Stand (Awarded for forging many a layered armor. Its variegated hues are simply captivating.); Petalace Arrangement Vase (Awarded for obtaining many Petalaces. It fills rooms with a delightful floral aroma.); Master's Black Belt (Awarded for obtaining many Switch Skills, a feat of both mental and bodily discipline.); Chef's Trusty Tools (Awarded for helping Yomogi. You can almost hear the Tea Dealers' chanting when looking at it.); Sturdy Padlock (Awarded for collecting many decorations and hanging scrolls. Remember to lock up!); Cohoots' Dresser (Awarded to connoisseurs of Cohoot outfits. Perfect for storing your avian apparel.); Runner's Sandals (Awarded for talking to many of Kamura's citizens. Feels like walking on a carpet of cloud.)."
            ]
        },
        {
            "heading": "Base Game: Exploration, Ecology & Collectathons",
            "body": [
                "The map-completion awards: completing 50 quests in each of the five base locales (Shrine Ruins, Frost Islands, Flooded Forest, Sandy Plains, Lava Caverns), performing 1,000 Wiredashes, riding Canynes, finding every Great Wirebug launch point, gathering Hunting Helpers and Golden/Gilded Spiribugs, reading Old Messages, fishing, photographing Hunting Helpers, Rare Creatures and Endemic Life, and banking 1,000,000 zenny and 100,000 Kamura Points.",
                "The achievements here: Spiritwood Necklace (Awarded for completing 50 quests in the Shrine Ruins. Made from Spiritwood branches.); Frozen Lampsquid Earring (Awarded for completing 50 quests in the Frost Islands. A relic encased in primeval ice.); Prismatic Chalice (Awarded for completing 50 quests in the Flooded Forest. Was found buried under rubble.); Silver Cactus Ring (Awarded for completing 50 quests in the Sandy Plains. A peculiar silver cactus ring.); Heliotrope Bracelet (Awarded for completing 50 quests in the Lava Caverns. Glitters a red-blue mélange.); Kamura Pinwheel (Awarded for performing 1000 Wiredashes. Spins smoothly in the wind.); Shabby Canyne Saddle (Awarded for riding Canynes many times. Worn in odd places from use on countless voyages.); Great Wirebug Plate (Awarded for discovering many Great Wirebug launch points. Sports a nice relevant design.); Hunting Helpers Plate (Awarded for gathering 500 Hunting Helpers. Features a beautiful depiction of them.); Golden Spiribug Plate (Awarded for gathering 1000 Golden and Gilded Spiribugs. Shines much like they do.); Antique Bookmark (Awarded for finding many Old Messages. Adorned with a tasteful pattern.); Deft-hand Rod (Awarded for catching many fish. Feels familiar in your hands. One cast, one catch!); Copper Ecologist's Award (Awarded for photographing many Hunting Helpers. Proof you've expanded your hunter horizons.); Silver Ecologist's Award (Awarded by one enthusiastic researcher for photographing many Rare Creature.); Gold Ecologist's Award (Awarded for photographing many Endemic Lifeforms. Now you're a Guild-recognized researcher!); Extravagant Cashbox (Awarded for earning 1,000,000 zenny. Heavy with impressively intricate goldwork.); Well-worn Cashbox (Awarded for accumulating 100,000 Kamura Points. Gleams with polish despite great use.)."
            ]
        },
        {
            "heading": "Sunbreak: Master Rank Story",
            "body": [
                "The Sunbreak campaign from Elgado Outpost: the collaboration request that opens the expansion, the investigator's binoculars, and one award each for hunting the Three Lords - Garangolm and Lunagaron - and slaying Malzeno, followed by the declaration marking the Kingdom's peace once the main story is done.",
                "The achievements here: Royal Request for Cooperation (An official request for Kamura's hunter. Awarded for collaboration with Elgado Outpost.); Long-Distance Binoculars (Binoculars giving a clear view of far-off targets. Awarded to staunch investigators.); Survey Cape (Protects the wearer from the harshest environments. Awarded for hunting the Garangolm.); Azure Feather Fountain Pen (A fountain pen with a blue feather gifted by Fiorayne. Awarded for hunting the Lunagaron.); Majestic Desk Banner (A desk flag proving the owner's distinguished service. Awarded for slaying Malzeno.); Royal Declaration of Gratitude (An official thank-you letter. For hunters who contributed greatly to the Kingdom's peace.)."
            ]
        },
        {
            "heading": "Sunbreak: Anomaly Investigations & Risen Endgame",
            "body": [
                "Sunbreak's endgame loop: completing Anomaly Quests and Investigations, slaying your first and your 100th afflicted monster, the deep-research report and the Anomaly Lab, Qurious Crafting to augment weapons and armour, and the Risen monsters - your first Risen kill and 15 of them - plus the Vermilion Amber Essence for clearing the very hardest Research Lab tasks.",
                "The achievements here: Painting - Crimson Nightmare (A depiction of the dreadful Qurio. Awarded for completing numerous Anomaly Quests.); Anomaly Hunt Silver Trophy (Awarded for slaying your first afflicted monster.); Anomaly Hunt Gold Trophy (Awarded for slaying 100 afflicted monsters.); Anomaly Research Report (An extremely detailed report, the result of impressive hard work researching the Anomaly.); Vermilion Amber Essence (Awarded only to those who have completed tasks designated by the Research Lab to be the most difficult.); Bahari's Hand-Wound Birdie (Bahari's handmade toy that walks when wound up. Proves you frequent the Anomaly Lab.); Smithy's Custom-made Gloves (Awarded for Augmenting many weapons via Qurious Crafting. Specially developed to handle dangerous afflicted materials.); Smithy's Tools of the Trade (Awarded for Augmenting a lot of armor via Qurious Crafting. These tools can work even the most brittle of materials.); Surmounter’s Slaying Shield (Awarded for slaying your first Risen monster.); Shining Surmounter’s Shield (Awarded for slaying 15 Risen monsters.)."
            ]
        },
        {
            "heading": "Sunbreak: Progression, Followers & Collectathons",
            "body": [
                "Everything else Sunbreak adds: the Master Rank and Arena quest certificates, Follower Quests, Support Surveys and deepening Follower bonds, the two new locales (Jungle and Citadel) with their 50-quest, camp, Great Wirebug, Old Message and photography awards, the expanded forging, trinket, dango and Buddy-training systems, and the Master Rank hunt milestones (100, 500 and 1,000 large monsters) and near-complete crown collections.",
                "The achievements here: Record of Utmost Valor - Master (A souvenir from the Guild for completing many Master Rank quests.); Snowy Cohoot Mini-Pouch (Awarded for befriending a fledgling Snowy Cohoot from Elgado. Looks tiny, but has a big appetite.); Record of Utmost Valor - Arena (A souvenir from the Guild for completing even more Arena quests.); Painting - Foreign Threads (Awarded for completing many Follower Quests to mark deep village-Outpost ties.); Painting - Seicho's Place (Proof of having completed many Support Surveys. Soar away into a clear blue sky.); Cups of Friendship (Awarded for deepening bonds with many Followers. Sharing this cup fosters friendship.); Sea-Blue Amulet (Awarded for completing 50 quests in the Jungle. A talisman to protect you on your travels.); Copal Brooch (Awarded for completing 50 quests in the Citadel. A charm praying for your good health.); Beloved Bouquet (Awarded for fulfilling various requests in Kamura and/or Elgado.); Familiar Construction Kit (An easy-to-deploy camping kit. Awarded for unlocking a lot of camps in the Jungle and Citadel.); Great Wirebug Medal (Awarded for discovering a lot of Great Wirebug launch points in the Jungle and the Citadel.); Immaculate Bookmark (Awarded for discovering a lot of Old Messages in the Jungle and Citadel. An unspoiled antique.); Natural Picture Frame (A smart frame awarded for photographing many creatures in the Citadel and Jungle.); Transcender's Red Sash (Its refinement exceeds human capability. Awarded for obtaining even more Switch Skills.); Great Helmet (A pretty great winged helmet. Awarded for forging even more valuable weapons and armor.); Gorgeous Helm (A helm with golden hollows and blue wings. Awarded for forging even more valuable layered armor.); Solid Padlock (Awarded for collecting even more trinkets and wall hangings. Won't budge, no matter what.); Maestro's Trusty Tools (Super popular in the Tea Shop! Awarded for helping make new dango, even in far-off Elgado.); Secret Honey Jar (Awarded to dango connoisseurs for using many Hopping Skewers. Add honey to sweeten things up!); Napping Felyne & Canyne (Toys of a cuddling Felyne and Canyne. Awarded to avid instructors at the Buddy Dojo.); Sojourn Necklace (A necklace that ended up with your Buddy. Awarded for trading with Letters of Introduction.); Buddy Whistle (A simple flute with far-reaching tones. Awarded to those who have found a lot of Recon destinations.); Flaky Canyne Pie (A tasty treat for hard-working Canynes. Awarded for teaching your Canyne lots of techniques.); Polychrome Acorn (A cute and colorful painted acorn. Awarded for having lots of Buddies with outstanding Skill Memory.); Windbreaker Scarf (Ignore wind as you whip through the world. Awarded for performing many Switch Skill Swaps.); Jewelgrass Planter (Awarded to those who rode various monsters with the power of Morphed Wirebugs.); Unbreakable Bag (Wow! A whole bag awarded for obtaining samples of items from all over the place.); Comfortable Sandals (Sandals for exploring. Awarded for talking with lots of people in the Outpost.); Hunter's Bronze Shield (Awarded for hunting 100 large master rank monsters.); Hunter's Silver Shield (Awarded for hunting 500 large master rank monsters.); Hunter's Gold Shield (Awarded for hunting 1000 large master rank monsters.); Miniature Crown Shield (Awarded for registering almost all miniature crown-sized monsters.); Gold Crown Shield (Awarded for registering almost all gold crown-sized monsters.); Hero's Accolade (The mark of a great hero, who has acquired a large number of awards.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the base Village and Hub story to credits, which naturally unlocks Ancestral Blade, Apex Shortsword, Tempestuous Triumph Scroll, Calamity Conqueror Scroll, Fan of Fading Crimson and the early Guild certificates (Aspiring Hunter Certificate, Adept Hunter Certificate).",
                "2. Mop up the base collectathons while they are cheap - the five locale necklaces/rings (Spiritwood Necklace, Frozen Lampsquid Earring, Prismatic Chalice, Silver Cactus Ring, Heliotrope Bracelet), Kamura Pinwheel, the plaques and the Ecologist's Awards.",
                "3. Install Sunbreak, push through the Master Rank story for Royal Request for Cooperation, Survey Cape, Azure Feather Fountain Pen, Majestic Desk Banner and Royal Declaration of Gratitude.",
                "4. Settle into the Anomaly Investigation endgame for Anomaly Hunt Silver Trophy, Anomaly Hunt Gold Trophy, the Qurious Crafting awards, Surmounter’s Slaying Shield and Shining Surmounter’s Shield, and the long hunt shields (Hunter's Bronze Shield, Hunter's Silver Shield, Hunter's Gold Shield).",
                "5. Finish with the size collections (Miniature Crown Shield, Gold Crown Shield), Vermilion Amber Essence and the two \"lots of awards\" capstones, Badge of Excellence and Hero's Accolade.",
                "Tip: keep a second controller-free eye on the passive counters from day one - Kamura Pinwheel (1,000 Wiredashes), Golden Spiribug Plate and the zenny/points cashboxes all fill just by playing, so they should never be the thing you are grinding on purpose at the end."
            ]
        }
    ]
};
