// Atomic Heart Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/atomic-heart.json), whose 82 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   668580 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js). 1 hidden achievement ships no Steam description; its condition here is curatorial, cross-checked against the game's wiki plus community 100% guides, and kept spoiler-light.
// - Sections group achievements by what each one actually requires.
export const GUIDE = {
    "slug": "atomic-heart-achievement-guide",
    "category": "game",
    "gameSlug": "atomic-heart",
    "icon": "☭",
    "title": "Atomic Heart Achievement Guide",
    "summary": "A practical guide to all 82 Steam achievements in Atomic Heart - story & bosses, crafting, upgrades & skills, exploration & research, combat challenges, expansions & post-game, hidden achievement.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Atomic Heart has 82 Steam achievements, 1 of them hidden. They cover the main campaign's story beats and boss kills, weapon crafting and skill upgrades, a large exploration/research checklist (talking corpses, Chirpers, testing grounds, scans), a set of specific combat challenges, and a big block of DLC and post-game content across the four expansions.",
                "A few base-game achievements are effectively missable in a single run (some story-gated collectibles and the Armageddon-difficulty clear), so a checklist and chapter/mission replays matter. The four DLCs each add their own self-contained set, including several no-death challenge runs.",
                "Tip: play the base game once on Armageddon if you are comfortable (it covers Atomic Heart and the story markers in one pass), keeping a collectible guide for the research sets; then do each DLC, saving its no-death challenges for a practised final attempt."
            ]
        },
        {
            "heading": "Story & Bosses",
            "body": [
                "The campaign spine: the story-progression markers (leaving Chelomey and Vavilov, the Maglev, VDNH, the theater, the hospital, Pavlov, the Academy's secret), the Armageddon-difficulty clear, the ORB lab / Strekoza / BEA-D beats, and the boss kills (Hedgie including the no-shot version, Belyash including melee-only, Plyusch, Natasha, Dewdrop, the Twins).",
                "The achievements here: The Motherland Does Not Forget its Heroes (Unlock all achievements); Strike (Kill Hedgie without making a single shot / destroy all statues); Medium Rare (Kill Belyash); Make It Go Round (Kill Hedgie); Plyusch Rush (Kill Plyusch); Show's Over (Kill Natasha); Dew Point (Kill Dewdrop); Murderous Beauty (Kill Twins); Chop Chop Chop (Kill Belyash with a melee weapon); Happy Polymerization Day! (Fly out of Chelomey); Pistils and Stamens (Get out of Vavilov); Tickets, Please! (Take a train at the Lesnaya Maglev train station); Quite an Achievement (Clear the VDNH complex); Curtain (Finish a theater performance); Medical Checkup (Get to a hospital); Freedom Reflex (Explore Pavlov); Kommunism 2.0 (Find out the AoC's secret); Atomic Heart (Complete the game on Armageddon); Weird Science (Get into the ORB lab); Lord of the Flies (Use a Strekoza for the first time); A Girl's Best Friend (Send all BEA-Ds to NORA's brain)."
            ]
        },
        {
            "heading": "Crafting, Upgrades & Skills",
            "body": [
                "The workshop goals: crafting a first weapon, five weapon types, every weapon, and every consumable type; upgrading a weapon and a full skill tree to max; and the DLC's Klusha-and-Secateur max upgrade.",
                "The achievements here: Artisan (Create a weapon in a crafting machine); Weapon Master (Create five types of weapons); Lord of War (Collect all weapons); Chemist (Craft consumables of all types); The Great Inventor (Upgrade a weapon to the maximum level); Lefthand Mastery (Fully upgrade one skill tree); Maximum Strength (Upgrade the Klusha and Secateur to max)."
            ]
        },
        {
            "heading": "Exploration & Research",
            "body": [
                "The collection and discovery checklist: 100 jelly, all Limbo apples, a Chelomey phone booth, all talking dead animals, every corpse dialogue, all Chirpers, all Lootyagins, finding and completing every testing ground, scanning all mobs, the Hunter's stashes, and all hidden figurines in the complex.",
                "The achievements here: Polymerization (Collect 100 jelly); Apple Pie (Pick all apples in Limbo); How Can I Help You? (Use a phone booth at Chelomey); Beast Friend (Find all talking dead animals); The Necromancer (Talk to every dead); Burning Ears (Find all Chirpers); More Than Profit (Find all Lootyagins); Explorer (Find a testing ground); Clean-up (Complete all testing grounds); Scanner (Scan all mobs); Master of Survival (Find all the Hunter's stashes); Crystal Platinum (Collect all of the figurines hidden in the complex)."
            ]
        },
        {
            "heading": "Combat Challenges",
            "body": [
                "The specific-kill feats: the elemental triple (10 burning / electrified / frozen), 25 PM headshots, freezing a Vova mid-air, stopping a sprout before it matures, knocking down an Owl with a thrown object, a drunken 5-kill, a 3-kill Railgun shot, hitting 20 enemies with a car, the Secateur BEA-D split, a technostasis triple, the hopping-M4D-5 triple, 15 kills with the neuropolymeric launch module, and the window Chirper tune.",
                "The achievements here: Avatar (Kill 10 burning enemies, 10 electrified enemies, and 10 frozen enemies); Hothead (Get 25 kills with headshots using the PM); Below Zero (Freeze a Vova mid-air); Assimilation Procedure Interrupted (Don't let a sprout grow into a mutant); Bull's Eye! (Use Telekinesis to throw an object and knock down an Owl); Alcoholics Anonymous (Get drunk with vodka and kill 5 enemies); Triple Penetration (Kill 3 or more enemies with a single Railgun shot); Hands on the Hood (Hit 20 enemies by a car); Divide et Impera (Separate several combined BEA-Ds with one shot from the Secateur); Time in a Bottle (Kill 3 enemies while using technostasis); John Silver's Crew (Kill 3 M4D-5 robots in a row while they're hopping on one foot); Ultimate Storm (Destroy 15 enemies using the neuropolymeric launch module); Moby Dick (While standing by the window, listen to a chirper narrating the story of the mysterious tune)."
            ]
        },
        {
            "heading": "Expansions & Post-Game",
            "body": [
                "The DLC-completion markers and expansion content: Return to Utopia (Annihilation Instinct), the Trapped in Limbo challenges (3,826 apples, the no-death course clears, Gold Rush, the casino and Pchela feats), Demonstration of Violence, and the two story DLCs (\"And now-CHAR-les\" and \"This Is the End\") with their bosses, secrets and underwater set-pieces.",
                "The achievements here: Return to Utopia (Complete the Annihilation Instinct DLC); Apple Pie 3826 (Collect 3,826 apples in the Trapped in Limbo DLC); Conservationist (Get a gold coin without shooting the Pchela); The Casino Isn't Always in the Black (Get ALL items from the slot machine); Slashing Through the Limbo Waves (Complete the Plateau of Responsibility without dying); Conqueror of Annapurna (Complete the Tower of Memory without dying); Conqueror of Chomolungma (Complete the Cliff of Perseverance without dying); Daring as a Bullet is Sharp (Complete the Avenue of Speed without dying); Don't Mess With the Major (Complete the Trapped in Limbo DLC without dying); Gold Rush (Collect 76 gold coins); Demonstration of Violence (Destroy the Robogirl at Chelomey); And now—CHAR-les (Complete the story DLC); Water Sports (Toss the ball back and forth with the dolphin three times); You've Read the Manual! (Pull yourself close to your enemy with the Whip); I'm here if you need to talk (Talk to Terentiy); Hic Sunt Dracones (Swim beyond the underwater world's borders, ignoring warnings); Marco... Polo! (Fall in the water at Wave and get killed by Morays); Final Burn-down (Destroy all of the infected plants on the submarine); Let's Shake on It! (Exterminate the RACCOON boss); Validol's Our Bro (Complete Validol's mission peacefully); Fluffy Easter Egg (Find the secret room with the fluffball); Better Late Than Never (Find the dolphin figurine in the secret room); Secret Meeting (Open the secret room with observers); Terminator's Death (Use an industrial press to destroy robots); Clean in Two (Defeat the Second Twin); For Chief's a Jolly Good Fellow (Save Sechenov); Farewell, Old Friend (Beat CHAR-les); This Is the End (Complete the story DLC)."
            ]
        },
        {
            "heading": "Hidden Achievement",
            "body": [
                "One achievement is hidden - a gold-coin overflow in the Limbo DLC:",
                "The achievements here: Overkill (In the Trapped in Limbo DLC, collect a 77th gold coin - one more than the 76 needed for Gold Rush - by farming coins from replayed levels.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the campaign (on Armageddon if you want that achievement in the same run) with a research checklist - Chirpers, Lootyagins, talking corpses/animals, testing grounds and figurines.",
                "2. Do the boss-specific challenge kills (Hedgie no-shot, Belyash melee) and the base combat feats on a replay or in chapter select.",
                "3. Play the DLCs in order: Annihilation Instinct, Trapped in Limbo (save the no-death courses for last), then the two story DLCs.",
                "4. Finish with Overkill - farm gold coins from replayed Limbo levels until you bank a 77th.",
                "Tip: many combat-challenge achievements (Triple Penetration, the technostasis and M4D-5 triples, Below Zero) are easiest set up against a known enemy group - reload a save near one and retry until it lands."
            ]
        }
    ]
};
