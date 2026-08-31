// Let's Build a Zoo Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/lets-build-a-zoo.json), whose 45 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1547890 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "lets-build-a-zoo-achievement-guide",
    "category": "game",
    "gameSlug": "lets-build-a-zoo",
    "icon": "🦒",
    "title": "Let's Build a Zoo Achievement Guide",
    "summary": "A practical guide to all 45 Steam achievements in Let's Build a Zoo - none are hidden. Covers the zoo-building and animal basics, the business, trading and black-market systems, the good/evil moral track and research, and the Dinosaur Island and Aquatopia DLC content.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Let's Build a Zoo has 45 Steam achievements and none of them are hidden. The base game asks you to run a zoo: have a baby animal, breed 100, map animal genomes, create hybrids, build wind turbines and (evil) factories, run buses, trade animals with other zoos, and hit money and land milestones. A moral-choice layer adds the good/evil point achievements and the black-market path. The rest come from the Dinosaur Island DLC (clone a dinosaur, the Mammoth dig, discover all dinosaurs) and the Aquatopia DLC (marine hybrids, a blue whale, 50 aquatic animals).",
                "Nothing is missable - genomes, research, trades and moral points all accumulate across a single save, and both DLC areas can be revisited freely.",
                "Tip: decide early whether you are playing a \"good\" or \"evil\" save - the 200-good-points and 200-evil-points achievements pull in opposite directions, so most players do one on a first save and the other on a quick second save rather than fighting the alignment meter."
            ]
        },
        {
            "heading": "Zoo Basics & Animals",
            "body": [
                "The core zoo achievements - a baby animal, 100 nursery births, Captain Cola and protestor visits, firing an employee, a wind turbine, a bacon factory, hybrids, genome mapping, buses and bus routes, flying visits, 10 zoo trades and a Gonky mascot.",
                "The achievements here: Have a baby! (One of your animals must give birth.); Big Birther (Your breeding program must produce 100 babies (Nursery births only).); Captain Cola (Convince Captain Cola to run a promotion at your zoo.); Protest (Have a visit from a protestor.); Fired Up (Fire an employee.); Green Machine (Build your first Wind Turbine.); Tastes Like Bacon (Build a bacon factory.); Hybrid Moments (Create your first hybrid animal.); Cartographer (Map your first Genome.); Map Master (Map 56 standard animal Genomes.); Transport Mogul (Own at least 10 buses.); Route Planner (Unlock 5 bus routes.); Sky Writer (Get a flying visit!); Super Trader (Complete 10 trades with other zoos.); Gonky (Employ a Gonky mascot.)."
            ]
        },
        {
            "heading": "Business, Trading & Black Market",
            "body": [
                "The economy and black-market achievements - a 100-dollar ticket, the Singapore Lion trade, six evil factory types, a 50,000-dollar day, sending a black-marketeer to prison, selling 10 animals to the black market, the Goth and Kaiju Cosplay quests, a trampoline, 20 things researched, a second zoo and full land ownership.",
                "The achievements here: Ticket Master (Sell a ticket for at least 100 dollars.); Lion City (Complete the trade for the Lion in Singapore.); Factory Boss (Have at least 6 unique types of evil factory operating in your zoo.); Cash King (Earn at least $50000 in a single day.); Snitch (Send a member of the black market to prison.); Dealer (Sell 10 animals to the black market.); He Sells Sanctuary ( Complete the Goth quests.); Monster Matinee (Complete all Kaiju Cosplay quests.); Broken Teeth (Break some teeth.); Trampoline ( Buy a trampoline for your zoo.); Researcher (Research 20 things.); Superior Researcher (Research 233 things.); New Zoo (Unlock a second zoo on the world map.); Decorator ( Get a Deco Rating of 100%.); Land Owner ( Buy every plot of land in the starting zoo.)."
            ]
        },
        {
            "heading": "Morality, Research & DLC",
            "body": [
                "The good/evil point milestones, 233 things researched, a 100% Deco Rating, the worst hot dog, and the DLC content - Dinosaur Island (clone a dinosaur, the Mammoth dig, King Sapphire's choices, all dinosaurs) and Aquatopia (fishing, marine hybrids, a jeweller, six mascot types, a blue whale, 50 aquatic animals).",
                "The achievements here: Bad Hot Dog ( Sell a Hotdog at the worst possible quality.); The Saint (Have 200 good points.); Criminal Mastermind (Have 200 evil points.); Dinosaur Rebirth (Clone your first dinosaur.); Bernie And Friends (Employ a Bernie mascot.); Pooped Out (Build a Bio-waste Storage in Dinosaur Island.); A Mammoth Discovery (Complete the dig for the Mammoth.); Death Metal Death (Complete all Critical Choices for King Sapphire.); Dino-Mite (Discover all 51 Dinosaurs/Animals.); First Catch (Get first fish from either boat); Sea Monster (Create your first marine hybrid); Pearlfect (Build a Jeweller); GORSD (Hire 6 different types of mascots); Whale Done (Get a blue whale); Seas the Day! (Collect 50 Aquatic Animals)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Build up a starter zoo: breed animals, map genomes, make hybrids, run buses and trade with other zoos.",
                "2. Work the economy achievements - ticket price, factories, a 50,000-dollar day, research milestones, a second zoo and full land ownership.",
                "3. Commit to a good or evil alignment and push to 200 points, doing the black-market or charitable path to match.",
                "4. Play the Dinosaur Island DLC for the cloning, Mammoth dig and all-dinosaurs achievements.",
                "5. Play the Aquatopia DLC for the fishing, marine hybrid, blue whale and 50-aquatic-animals achievements.",
                "Tip: leave the Nursery running on autopilot from early on - \"Big Birther\" (100 nursery births) is pure time, and it will be done long before you finish the other goals."
            ]
        }
    ]
};
