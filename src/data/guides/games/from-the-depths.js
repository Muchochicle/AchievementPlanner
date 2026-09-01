// From the Depths Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/from-the-depths.json), whose 53 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   268650 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "from-the-depths-achievement-guide",
    "category": "game",
    "gameSlug": "from-the-depths",
    "icon": "⚓",
    "title": "From the Depths Achievement Guide",
    "summary": "A practical guide to all 53 Steam achievements in From the Depths - none are hidden. None of the achievements are hidden. Covers the tutorial, destroying each of the eight faction bosses in the Quest for Neter campaign at every difficulty from Easy to Godly, and a set of combat, design and campaign feats.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "From the Depths has 53 Steam achievements and none are hidden. The bulk is the Quest for Neter campaign: destroy each of the eight faction strongholds (the Deepwater Guard's Davy Jones Outpost, the Onyx Watch's Onyx Throne, the White Flayers' Gorgon, the Twin Guard's Eris, the Lightning Hoods' Quartz Stone, the Sky Shrews' Damascus, the Grey Talons' Raven's Nest, and the Scarlet Dawn) at Easy, Medium, Hard and Godly difficulty. The rest are feats: a 150 m/s self-built vehicle, killing 20 planes, a 1,000,000-damage explosive combo, a design past version 100, destroying 1,000 missiles, an adventure-mode level 100, defeating small and large 'godly' craft, a 99%-alive assassination, an Eyrie kill, 1,000,000 commodities made and gifted, a 50,000-material sub-object, a 500-volume-per-second alpha strike, 15+ RTGs on a build, and 50 Scarlet Dawn kills.",
                "The catalog marks it difficulty 5. From the Depths is a deep, difficult vehicle-design and RTS hybrid; the Godly-difficulty faction kills demand genuinely well-engineered craft, and the campaign, adventure-level-100 and commodity-million goals are long. Learning the building systems is a prerequisite for most of the list.",
                "Tip: build (or download from the workshop) one strong, reliable design and use it for the whole Easy-to-Godly progression against every faction - most of the achievement count is the same eight bosses at four difficulties, so a proven craft clears the majority of them."
            ]
        },
        {
            "heading": "Quest for Neter: Faction Strongholds",
            "body": [
                "Completing the first tutorial, and destroying each of the eight faction strongholds in Quest for Neter - Davy Jones Outpost, Onyx Throne, Gorgon, Eris, Quartz Stone, Damascus, Raven's Nest and Scarlet Dawn - at Easy, Medium, Hard and Godly difficulty.",
                "The achievements here: Fast Learner! (Completed the first tutorial); DWG Easy (Destroy the Davy Jones Outpost in Quest for Neter on Easy difficulty or above); DWG Medium (Destroy the Davy Jones Outpost in Quest for Neter on Medium difficulty or above); DWG Hard (Destroy the Davy Jones Outpost in Quest for Neter on Hard difficulty or above); DWG Godly (Destroy the Davy Jones Outpost in Quest for Neter on Godly difficulty); OW Easy (Destroy the Onyx Throne in Quest for Neter on Easy difficulty or above); OW Medium (Destroy the Onyx Throne in Quest for Neter on Medium difficulty or above); OW Hard (Destroy the Onyx Throne in Quest for Neter on Hard difficulty or above); OW Godly (Destroy the Onyx Throne in Quest for Neter on Godly difficulty); WF Easy (Destroy the Gorgon in Quest for Neter on Easy difficulty or above); WF Medium (Destroy the Gorgon in Quest for Neter on Medium difficulty or above); WF Hard (Destroy the Gorgon in Quest for Neter on Hard difficulty or above); WF Godly (Destroy the Gorgon in Quest for Neter on Godly difficulty); TG Easy (Destroy Eris in Quest for Neter on Easy difficulty or above); TG Medium (Destroy Eris in Quest for Neter on Medium difficulty or above); TG Hard (Destroy Eris in Quest for Neter on Hard difficulty or above); TG Godly (Destroy Eris in Quest for Neter on Godly difficulty or above); LH Easy (Destroy the Quartz Stone in Quest for Neter on Easy difficulty or above); LH Medium (Destroy the Quartz Stone in Quest for Neter on Medium difficulty or above); LH Hard (Destroy the Quartz Stone in Quest for Neter on Hard difficulty or above); LH Godly (Destroy the Quartz Stone in Quest for Neter on Godly difficulty ); SS Easy (Destroy the Damascus in Quest for Neter on Easy difficulty or above); SS Medium (Destroy the Damascus in Quest for Neter on Medium difficulty or above); SS Hard (Destroy the Damascus in Quest for Neter on Hard difficulty or above); SS Godly (Destroy the Damascus in Quest for Neter on Godly difficulty); GT Easy (Destroy the Raven's Nest in Quest for Neter on Easy difficulty or above); GT Medium (Destroy the Raven's Nest in Quest for Neter on Medium difficulty or above); GT Hard (Destroy the Raven's Nest in Quest for Neter on Hard difficulty or above); GT Godly (Destroy the Raven's Nest in Quest for Neter on Godly difficulty); SD Easy (Destroy the Scarlet Dawn in Quest for Neter on Easy difficulty or above); SD Medium (Destroy the Scarlet Dawn in Quest for Neter on Medium difficulty or above); SD Hard (Destroy the Scarlet Dawn in Quest for Neter on Hard difficulty or above); SD Godly (Destroy the Scarlet Dawn in Quest for Neter on Godly difficulty or above)."
            ]
        },
        {
            "heading": "Combat, Design & Campaign Feats",
            "body": [
                "A 150 m/s self-built vehicle, 20 planes killed, a 1,000,000-damage explosive combo, a design past version 100, 1,000 missiles destroyed, maximum strategic radar range, 5 battle merits in one battle, defeating small and large godlies, adventure level 100, a 99%-alive assassination, an Eyrie kill, 1,000,000 commodities made and gifted, a 50,000-material sub-object, a 500-volume-per-second alpha strike, 15+ RTGs, a 3-team battle, declaring war on an ally, and 50 Scarlet Dawn kills.",
                "The achievements here: Speed demon (Achieve a sustained speed of 150m/s below 500m altitude in designer with a vehicle you've made yourself. Neter standard physics.); Wing clipper (Kill 20 planes in campaign, story mission or adventure); An explosive combination (Build a  1 million damage explosive combo in the campaigns/missions/adventures of built in planets (using standard game constants)); Peak performance (Get one of your own designs  beyond version 100); What missiles? (Destroy 1000 missiles in the campaigns/missions/adventures of built in planets (using standard game constants)); Espionage (Get a unit that provides the maximum strategic radar range in a campaign); Battle master (Score 5 battle merits in a single (preset difficulty) campaign battle. You'll need to attack a force approximately 10 times your volume and win with 60% of your volume undestroyed to achieve this.); The bigger they are... (Defeat 5 small (<30k volume) godlies in (fixed difficulty) campaigns, missions, or adventures on built in planets using standard game constants); ... the harder they fall (Defeat 5 large (>30k volume) godlies in (fixed difficulty) campaigns, missions or adventures on built-in planets using standard game constants); Worm hole addict (Reach level 100 in adventure mode on Neter using standard game constants); The assassin (Defeat a unit in the campaigns/adventures/missions of built-in planets whilst it still has 99% of its blocks alive); Eyrie survivors' club (Defeat an Eyrie in fixed difficulty campaign/mission/adventures of Neter.); The lord taketh... (Make a total of 1 million commodities for your team in (fixed difficulty) campaigns of built-in planets); ...and the lord gifteth away (Gift a total of 1 million commodities to your forces  in a (fixed difficulty) campaign on a built-in planet.); Heavy weapons (Save a sub-object that costs more than 50,000 materials); Alpha strike (Kill 500 volume per second in a campaign battle (on fixed-difficulty built-in campaigns with standard game constants). Measured when the battle ends.); Hey, I glow in the dark (Use more than 15 RTGs on a vehicle you've made yourself. Unlocked in designer.); Petty squabbles (Take part in a campaign battle with 3 or more teams involved in it (including you). Fixed-difficulty built-in campaigns only.); Et tu, Brute? (Declare war on an ally in a (fixed difficulty) built-in campaign); Planetary defence force (Kill 50 Scarlet Dawn units in Neter's (fixed-difficulty) campaigns, missions or adventures (standard game constants).)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Do the first tutorial, then learn the building systems.",
                "2. Build or download one strong craft and beat every faction stronghold on Easy, then Medium, then Hard.",
                "3. Refine the craft and clear all eight strongholds on Godly.",
                "4. Do the design-mode feats (150 m/s, 15 RTGs, a v100 design, a 50,000-material sub-object).",
                "5. Grind the campaign feats - adventure level 100, the commodity millions, the godly kills, 50 Scarlet Dawn kills.",
                "Tip: the commodity achievements ('The lord taketh...' / '...and the lord gifteth away', 1,000,000 each) accrue over a long fixed-difficulty campaign - just keep playing one campaign to the end rather than restarting, and both finish naturally."
            ]
        }
    ]
};
