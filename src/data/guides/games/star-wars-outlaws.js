// Star Wars Outlaws Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/star-wars-outlaws.json), whose 59 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   2842040 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "star-wars-outlaws-achievement-guide",
    "category": "game",
    "gameSlug": "star-wars-outlaws",
    "icon": "🪐",
    "title": "Star Wars Outlaws Achievement Guide",
    "summary": "A practical guide to all 59 Steam achievements in Star Wars Outlaws - none are hidden. Covers the syndicate reputation and gear sets, the open-world and minigame feats, the blaster / speeder / space combat and slicing challenges, the main quests on every planet, and the side content and expansion questlines.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Star Wars Outlaws has 59 Steam achievements and none of them are hidden. They divide into three groups: open-world and progression goals (max reputation with all four syndicates, collect Nix treasures, sample all street food, discover all planet areas, complete 40 contracts, acquire the gear sets), combat and traversal feats (Adrenaline Rush multi-kills, Nix-assisted kills, ship dogfight maneuvers, speeder powerslides, terminal slicing and lockpicking), and story completion - clearing the main quests on each planet (Toshara, Kijimi, Tatooine, Akiva, Canto Bight) plus the expansion questlines.",
                "Some descriptions name story beats (escaping Jabba's palace, learning Sliro's secret), but they are Steam's own non-hidden text quoted as-is. Nothing is missable in the sense that the game's free-roam post-credits state lets you return for every contract, collectible, reputation level and feat you skipped.",
                "Tip: pick one syndicate to favour during the story for its questline rewards, then spend post-game time deliberately swinging reputation back up with the others - the four \"max reputation\" achievements are the biggest single time sink and are much faster once you know which brokers and contracts to farm."
            ]
        },
        {
            "heading": "Reputation, Gear & Open-World Feats",
            "body": [
                "Clearing Wanted levels, upgrading blaster modules, collecting Nix treasures and street food, Expert quests, discovering all planet areas, VIP merchant stock, the gear sets, 40 contracts, max and min reputation with the syndicates, Intel chains and cantina pickpocketing.",
                "The achievements here: It wasn't me (Bribe an Imperial Officer to clear Wanted Level 5); They live up to the name (Clear Wanted status by completing a death trooper confrontation event); Shoot first (Defeat 6 enemies simultaneously using Adrenaline Rush); No match for a good blaster (Fully upgrade a blaster module configuration); Got you something (Collect all Nix treasures); Galactic gourmet (Sample all galactic street food); Good listener (Listen to the longest sob story in the galaxy); Experience outranks everything (Complete all Expert quests); Adventure and excitement (Discover all planet areas); Give me the good stuff (Buy an item from a merchant's VIP stock); Old school cool (Acquire the Disruptor gear set); Honest work (Complete 40 contracts); Cut-throat politics (Reach maximum reputation with the Pyke Syndicate); Cloak and dagger (Reach maximum reputation with Crimson Dawn); What you see is what you get (Reach maximum reputation with the Hutt Cartel); The Queen's word is law (Reach maximum reputation with the Ashiga Clan); Think I had a choice? (Reach the lowest possible reputation with a faction); It's mine now (Acquire the scoundrel gear set); Stay on target (Complete your first Intel chain); Easy pickings (Pickpocket a customer in a cantina on each planet)."
            ]
        },
        {
            "heading": "Combat, Space & Traversal Feats",
            "body": [
                "The fixed fathier race, cheating Lando at Sabacc, arcade high scores, Nix-fetched and Fast-Talk-distracted kills, blinding enemies, capital-ship and nebula dogfights, ship maneuvers, speeder landings and powerslides, terminal slicing, alarm disabling, data-spike lockpicking and acquiring a blaster, starship and speeder.",
                "The achievements here: Against all odds (Win your first fixed fathier race); No such thing as luck (Cheat and win a Sabacc game against Lando); There is no try (Get a high score in an arcade game); Right back at you (Defeat 20 enemies using items fetched by Nix); How rude! (Blind 30 enemies with Nix attacks); Punching up (Defeat each syndicate's capital ship without taking hull damage); Might want to buckle up (Fly into space in a fully upgraded Trailblazer); I'll bet you have (Defeat 20 enemies distracted by Fast-Talk); The heavier they fall (Defeat a Raider to clear Wanted status); Sometimes I amaze even myself (Defeat an enemy ship after doing a loop maneuver); Never tell me the odds (Defeat an enemy ship without dealing the finishing blow with lasers or missiles); Into darkness (Destroy 10 enemy ships inside the Kijimi nebula); Like a bantha (Perform a perfect landing with the speeder); Galaxy drift (Perform a 30 second powerslide drift); Don't get cocky (Defeat 5 enemies with Adrenaline Rush on the speeder simultaneously); Into the main frame (Slice 10 advanced terminals); Slice like you (Slice 20 terminals); Now you see me, now you don't (Disable an alarm using a security terminal while the alarm is active); Get rhythm (Pick 20 locks with the data spike); Made it somehow (Acquire a blaster, a starship, and a speeder)."
            ]
        },
        {
            "heading": "Story: Planets & Main Quests",
            "body": [
                "Completing the main quests on Toshara, Kijimi, Tatooine, Akiva and in Canto Bight, escaping Jabba's palace, liberating the Super Viper Droid, learning Sliro's secret, and the Revelator, Morenia and finale beats.",
                "The achievements here: Tip the scales (Complete all main quests on Toshara); One job at a time (Complete all main quests on Kijimi); Making friends (Escape from Jabba's palace); Rare friends (Complete all main quests on Tatooine); Spiked (Liberate the original Super Viper Droid); Best of the best (Complete all main quests on Akiva); The Director (Learn Sliro's secret); Eye on the score (Complete all main quests in Canto Bight); Calling in some favors (Destroy the Revelator); All in (Find the Morenia); All out (Escape the Morenia)."
            ]
        },
        {
            "heading": "Story: Side Content & Expansions",
            "body": [
                "The remaining questline achievements - saving Aksali Noll, the map to Okala V, the Khepi Tomb and scepter, stealing a Rokana Raider ship, the Khepi secrets, a Refractor contract and composing a pirate's poem.",
                "The achievements here: Take your own advice (Save Aksali Noll); A moon in your hand (Retrieve the map to Okala V); Stranger Tides (Escape from the Khepi Tomb); Price of Loyalty (Get the Khepi scepter hilt); Pirate's Honor (Steal a Rokana Raider ship); Together (Discover the secrets of the Khepi); First Voyage (Complete a contract with a Refractor); Wordsmith (Help compose a pirate's poem)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the main story through all five planets for the per-planet main-quest achievements and the finale beats.",
                "2. Chase the combat, ship and traversal feats opportunistically as the mechanics unlock - most are one-off and can be set up deliberately.",
                "3. Work contracts and Intel chains toward the 40-contract goal and the gear sets.",
                "4. After the credits, grind syndicate reputation to maximum with all four factions and hit minimum with one.",
                "5. Mop up the collectibles (Nix treasures, street food, planet areas, VIP stock) and the expansion questlines.",
                "Tip: the arcade high score, fixed fathier race and Sabacc-cheat achievements are all in cantinas and hubs - do them whenever you pass through rather than making special trips."
            ]
        }
    ]
};
