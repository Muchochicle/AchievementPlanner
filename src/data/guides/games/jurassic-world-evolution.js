// Jurassic World Evolution Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/jurassic-world-evolution.json), whose 73 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   648350 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "jurassic-world-evolution-achievement-guide",
    "category": "game",
    "gameSlug": "jurassic-world-evolution",
    "icon": "🦖",
    "title": "Jurassic World Evolution Achievement Guide",
    "summary": "A practical guide to all 73 Steam achievements in Jurassic World Evolution - none are hidden. Covers the island, reputation and story-mission achievements, the dinosaur, skill and photography feats, and the challenge-mode and DLC-campaign achievements.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Jurassic World Evolution has 73 Steam achievements and none of them are hidden. The campaign spine is unlocking each of the five islands of Las Cinco Muertes, reaching maximum reputation with the Science, Security and Entertainment divisions and completing all of their missions, and a 5-star rating on every island. Around that is a large pool of hands-on feats - manual tranquilliser trick shots, Ranger jeep driving stunts, releasing at least one of every dinosaur genus, housing 50 dinosaurs at once, and a long list of photography objectives. The rest come from Challenge mode (5-star ratings at increasing difficulties and time limits) and the three add-on campaigns: Secrets of Dr. Wu, Claire's Sanctuary, and Return to Jurassic Park.",
                "Nothing is missable - islands, challenge mode and the DLC campaigns can all be replayed, and the collection and photography feats persist across your career. This is a medium-length completion; the time-limited challenge-mode achievements and the Jurassic-difficulty 5-star are the hardest.",
                "Tip: pursue the manual-control feats (tranquilliser headshots, jeep power slides and air time, medicating and repairing by hand) early while you are learning the ACU and Ranger teams - they are easy filler that also makes the harder challenge-mode runs far more manageable."
            ]
        },
        {
            "heading": "Islands, Reputation & Story Missions",
            "body": [
                "Unlocking Isla Muerta, Isla Tacano, Isla Pena, Isla Sorna and Isla Nublar, a 5-star rating on every Cinco Muertes island, maximum Science / Security / Entertainment reputation, completing all missions for each division, and the manual-control basics - tranquillize, medicate, add a vehicle task, repair a building, research an item, complete a genome, unlock all InGen Database entries, and add a building upgrade.",
                "The achievements here: Not alone on this island (Unlock Isla Muerta); Going to make a fortune with this place (Unlock Isla Tacano); On this island there's no such thing as safe (Unlock Isla Pena); Thank God for Site B (Unlock Isla Sorna); Spared no expense (Unlock Isla Nublar); How did you do this? (Achieve a 5-Star Island Rating on every island in Las Cinco Muertes); I don't understand this Luddite attitude (Reach maximum Science Reputation on an island); Instinct that we can program (Reach maximum Security Reputation on an island); Bigger. Louder. More Teeth. (Reach maximum Entertainment Reputation on an island); Using sophisticated techniques (Complete All Missions: Science); You got them eating out of your hand (Complete All Missions: Security); An aim not devoid of merit (Complete All Missions: Entertainment); Shoot her! (Manually tranquillize a dinosaur with the ACU helicopter); Tenacious (Manually medicate a diseased dinosaur with the Ranger Team); It's all about control with you (Add a task for an ACU or Ranger Team); I think we're back in business (Manually repair a building with the Ranger Team); You're the top minds (Research an item); Fill in the holes and complete the code (Complete a genome to 100%); I read your book (Unlock all InGen Database entries in the game); You think that kind of automation is easy? (Add an upgrade to a building)."
            ]
        },
        {
            "heading": "Dinosaurs, Skill Feats & Photography",
            "body": [
                "The tranquilliser trick shots (headshot, during a fight, while running, from 125m), the Ranger jeep feats (25km driven, 5s at top speed, a 3s power slide, 5s of air time), releasing any dinosaur, a gene-modified one, 50 alive at once, a 150+ Attack one, a T. rex / Velociraptor / Triceratops / Dilophosaurus / Spinosaurus / Stegosaurus / Gallimimus / Brachiosaurus / Indominus rex, one of every genus, and the photography objectives (Spino vs T. rex, Indominus vs T. rex, high-value photos, hunts, socializing raptors, live bait, carnivore and herbivore visitor attacks).",
                "The achievements here: Get a clear shot (Manually perform a headshot with the ACU helicopter); War is a part of nature (Manually tranquillize a dinosaur while it is fighting another dinosaur); Nobody move a muscle (Manually tranquillize a dinosaur while it is running); Shoooot heeer! (Tranquillize a dinosaur from a distance of at least 125m); I thought you failed your driver's test (Manually drive a total distance of 25km in the Ranger Team's vehicle); Must go faster (Drive the Ranger Team's vehicle at top speed for 5 consecutive seconds); Accept you are never actually in control (Power slide with the Ranger Team's vehicle for 3 seconds (within a 5-second window)); Hold on to your butts! (Get 5 seconds of air time with the Ranger Team's vehicle (within a 20-second window)); Life finds a way (Release a dinosaur); Nothing in Jurassic World is natural (Release a genetically modified dinosaur); Now you're John Hammond (House at least 50 live dinosaurs on a single island); Mommy's very angry (Release a modified dinosaur that has over 150 Attack); Follow the screams! (Release a T. rex); Clever girl (Release a Velociraptor); My favorite when I was a kid (Release a Triceratops); A beautiful, but deadly addition (Release a Dilophosaurus); A super-predator (Release a Spinosaurus); Is this even possible? (Release a Stegosaurus); Flocking this way (Release a Gallimimus); Veggiesaurus (Release a Brachiosaurus); That's no dinosaur (Release an Indominus rex); Creation is an act of sheer will (Release at least one of every dinosaur genus in the game); This is very dangerous territory (Photograph a Spinosaurus fighting a T. rex); Learning where she fits in the food chain (Photograph an Indominus Rex fighting a T. rex); Whatever you study, you also change (Take a Photograph worth more than $30000); A kind of biological preserve (Take a Photograph worth more than $100000); Look how it eats! (Photograph a T. rex hunting a Gallimimus); Smarter than primates (Photograph two Velociraptors socializing); Where's the goat? (Photograph a T. rex eating 'live bait'); Who's hungry? (Photograph a carnivore attacking a visitor); I hate being right all the time (Photograph a herbivore attacking visitors)."
            ]
        },
        {
            "heading": "Challenge Mode & DLC Campaigns",
            "body": [
                "The Challenge-mode 5-star feats (any difficulty, under 3 hours on medium+, Jurassic difficulty), then Secrets of Dr. Wu (all missions, the Troodon poison photo, subduing the Spinoraptor, the Comfort-gene and camouflage feats), Claire's Sanctuary (the carnivore-only Pena run, the sub-4-hour and Sanctuary time challenges, 5000 dinosaur rating, 1500 paleobotany, manual disease cure, the photo contract), and Return to Jurassic Park (surviving a T. rex attack, the '97 Stegosaurus photo, the Pteranodon aviary, a 5-star Nublar park, the no-damage Facility Recovery mission, an 18-species tour).",
                "The achievements here: The essence of chaos (Reach 5 stars in challenge mode (any difficulty)); Clocked at 32 mph (Reach 5 stars in Challenge mode in under 3 hours (medium difficulty or above)); Jurassic measures (Reach 5 stars on Jurassic difficulty challenge mode); The Next Step (Complete all of Dr. Wu's missions); Wounding tooth (Photograph a Troodon as it poisons its victim); Shoot her...? (Subdue Dr. Wu's rampaging Spinoraptor); We're just used to being the cat (Using Comfort Genes, create a dinosaur that is impossible to keep calm); It can camouflage! (Release an Indominus Rex with the Adaptive Camouflage Gene); You'll never look at birds the same way! (Complete challenge mode on Pena by only releasing carnivores (medium difficulty or above)); Fast for a biped? (Reach 5 stars in Challenge mode in under 4 hours (hard difficulty or above)); Ratings Master (Get a dinosaur to reach 5000 or more rating); A new home (Complete challenge mode on Sanctuary in under 8.5 hours (hard difficulty or above)); John Hammond's dream (Reach 5 stars on Sanctuary); Green thumb (Reach 1500 paleobotany welfare bonus on a single island); Executive treatment (Eliminate all disease on Nublar North using a manually controlled Ranger Team); Sharp focus (Complete the photography contract on Nublar North); OBJECTS IN MIRROR CLOSER THAN THEY APPEAR (Have a manually controlled Jurassic Park Ranger Team survive for 3 minutes after a T. rex attack); Ooh, aah, that's how it always starts (Take a photograph of a Stegosaurus with a '97 Cosmetic Variant as it attacks a Ranger Team); It's a birdcage (Build an Aviary and fill it with Pteranodons); Return to Jurassic Park (Build a 5 star park on Isla Nublar during the 'Return to Jurassic Park' campaign); Ranger Danger (Complete the 'Facility Recovery' mission without any dinosaur damage to Ranger Teams); You do plan to have dinosaurs, right? (Construct a tour that can see at least 18 species in Jurassic Park Campaign or Challenge mode)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the main campaign island by island, completing every division's missions and pushing each island to 5 stars before moving on.",
                "2. Do the manual-control basics and skill feats as you play - tranquilliser trick shots, the jeep driving stunts, hand-medicating and repairing.",
                "3. Work the dinosaur collection feats: release one of every genus over your career, house 50 at once, and breed the high-Attack and gene-modified variants.",
                "4. Do the photography objectives on a well-stocked sandbox island where you can arrange the fights and hunts you need to shoot.",
                "5. Play the three DLC campaigns and then Challenge mode for the timed 5-star achievements, saving Jurassic difficulty for last.",
                "Tip: build a dedicated 'photo island' in sandbox with a large carnivore pen and mixed herbivores - almost every photography achievement (fights, hunts, visitor attacks, high-value shots) can be staged there in an hour instead of waiting for them to happen naturally in campaign."
            ]
        }
    ]
};
