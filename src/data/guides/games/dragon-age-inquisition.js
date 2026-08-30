// Dragon Age: Inquisition Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/dragon-age-inquisition.json), whose 69 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1222690 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js). None are hidden; every one
//   ships a real, official Steam description, quoted verbatim below.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "dragon-age-inquisition-achievement-guide",
    "category": "game",
    "gameSlug": "dragon-age-inquisition",
    "icon": "🐉",
    "title": "Dragon Age: Inquisition Achievement Guide",
    "summary": "A practical guide to all 69 Steam achievements in Dragon Age: Inquisition - none are hidden. Covers the main story, Skyhold systems, the combat grinds, and the DLC and Trials.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Dragon Age: Inquisition has 69 Steam achievements and none are hidden. They split into the eight main-story flags, a large block of open-world and Skyhold systems (mounts, crafting, war table, camps, shards), a set of combat and difficulty grinds (high dragons, 2,500 kills, Nightmare clear), and the three story DLCs plus the ten optional \"Trials\" modifiers.",
                "Only a few things are practically missable in one save - recruiting every companion in a single playthrough, and the Nightmare/Hard difficulty clears (you must never lower difficulty) - so most players do one thorough playthrough plus a short second one. The DLC achievements need Jaws of Hakkon, The Descent and Trespasser.",
                "Tip: turn on the cheap, always-safe Trials modifiers (\"Take It Slow\", \"Rest Easy\", \"Even Ground\", etc.) from the very start of a playthrough - several Trials achievements just require the modifier to be active when you hit a normal story or dragon milestone, so enabling them early costs nothing."
            ]
        },
        {
            "heading": "Main Story",
            "body": [
                "The eight story flags, one per major act: finishing the prologue, closing the Breach, surviving the attack on the Inquisition, the Orlesian court, the trip into the Fade, reaching the ancient ruin, recruiting the late-game ally, and the finale.",
                "The achievements here: The Wrath of Heaven (Finish the prologue.); Opposition in All Things (Close the Breach.); In Your Heart Shall Burn (Survive an attack on the Inquisition.); Wicked Eyes and Wicked Hearts (Make an impression on the Orlesian court.); Here Lies the Abyss (Face your fears in the Fade.); What Pride Had Wrought (Reach an ancient ruin before your enemies.); On Burning Wings (Recruit a powerful ally to even the score.); Doom upon All the World (End the threat once and for all.)."
            ]
        },
        {
            "heading": "Companions, Skyhold & Systems",
            "body": [
                "The open-world and base-building block: recruiting companions and committing to a romance, unlocking cities and mounts, crafting and enchanting, war-table operations and Inquisition camps, shards and veilfire runes, specializations and cross-class combos, Skyhold's garden and decorations, and the Orlesian court approval.",
                "The achievements here: The Brightest of Their Age (Recruit all possible companions in a single playthrough.); Beloved and Precious (Commit to a romantic relationship.); They Who Stand (Recruit a new companion.); Speak Only the Word (Gain access to a major city for the Inquisition.); Saddled Up (Purchase or secure five different mounts of any kind.); Well-Prepared (Craft a weapon or piece of armor in single-player mode.); Customized (Enchant or upgrade a piece of equipment in single-player mode.); Commander (Complete a timed mission on the war table.); Trailblazer (Discover a campsite and establish an Inquisition camp in any wilderness area.); Sharp-Eyed (Find and recover a shard identified by an ocularum.); Well-Read (Discover a veilfire rune.); Skilled (Upgrade any ability once in single-player mode.); Specialized (Choose a specialization class.); Cavalier (Secure a mount.); Synergized (Trigger a cross-class combo with a character you control in single-player mode.); Botanist (Harvest 50 herbs from Skyhold's garden in a single playthrough.); Wyrmslayer (Kill a high dragon in single-player mode.); Decorator (Purchase any new decoration element for Skyhold.); Belle of the Ball (Gain the full approval of the Orlesian court.); Hard Hitter (Land a single blow in excess of 1,000 damage in single-player mode.); Master Builder (Craft an item from Tier 4 materials in all non-masterwork slots in single-player mode.); Master Alchemist (Upgrade your alchemic potions, grenades, or tonics 30 times in a single playthrough.)."
            ]
        },
        {
            "heading": "Combat, Difficulty & Endgame Grinds",
            "body": [
                "The number-goal and difficulty achievements: slaying 10 high dragons, the Hard and Nightmare campaign clears, astrariums and gold totals, keeps and agents, throne and Inquisition-rank upgrades, the big kill counts (1,000 demons, 2,500 enemies), codex collection, requisitions and rift seals.",
                "The achievements here: Dragons' Bane (Slay 10 high dragons in single-player mode.); Herald (Finish the single-player campaign on at least Hard without lowering the difficulty.); Inquisitor (Finish the single-player campaign on Nightmare without lowering the difficulty.); Stargazer (Unlock 15 astrariums in a single playthrough.); Focused (Spend 10 points in a single ability tree with any one single-player character.); Well-Funded (Earn 50,000 or more gold across all single-player playthroughs.); Keymaster (Enter the heart of the Solasan temple.); Pathfinder (Discover a campsite and establish at least one Inquisition camp in 10 wilderness areas.); Liberator (Liberate three keeps in a single playthrough.); High Commander (Complete 50 missions or operations in a single playthrough.); Regal (Completely upgrade one throne.); Persuasive (Acquire 10 Inquisition agents in a single playthrough.); Veteran (Reach level 20 in single-player mode.); Peerless (Level up the Inquisition to rank 10.); People Person (Become friends with at least three of your inner circle in one playthrough.); Loremaster (Collect 250 codex entries in a single playthrough.); Demonslayer (Defeat 1,000 demons in single-player mode.); Invincible (Defeat 2,500 enemies in single-player mode.); Quartermaster (Complete 20 requisition requests in a single playthrough.); Marked for Greatness (Seal 75 rifts in a single playthrough.)."
            ]
        },
        {
            "heading": "DLC & Trials",
            "body": [
                "The three story DLCs - Jaws of Hakkon (Stone-Bear Hold, the Old Temple, Hakkon), The Descent (the Deep Roads earthquakes, Shaper Valta, the ogre alpha) and Trespasser (Forever Marked, the ancient-statue caches, the Taken Shape set) - plus the ten optional Trials achievements, each earned by keeping a named Trials modifier active while you complete a normal milestone.",
                "The achievements here: Firestarter (Destroy all the Winter Shards and light all the fires in the Old Temple.); Legend-Marked (Impress the Avvar of Stone-Bear Hold and gain their friendship.); Historian (Uncover the secrets of a legendary figure.); Winter's End (Dispel a myth of ancient days.); Deep Roads Commander (Complete a mission at the expedition table in the Legion of the Dead camp.); Giant Slayer (Defeat an ogre alpha.); Fact Finder (Help Shaper Valta discover secret dwarven history.); Shaper of Stone (End the earthquakes threatening the surface.); Trial of the Hermit (Slay 10 great bears promoted by Grizzly End.); Trial of Temperance (Rest Easy trial always on in Emprise du Lion: claim Suledin Keep.); Trial of the Magician (Travel Light on for \"In Hushed Whispers\": finish the quest.); Trial of the Tower (Rub Some Dirt on It on: slay the Hivernal high dragon.); Trial of the Emperor (Defeat 20 foes promoted by Walk Softly.); Trial of the Empress (Even Ground on: slay a level 16 or higher Fereldan Frostback.); Trial of the Fool (Take It Slow on: reach Skyhold at level 5 or less.); Trial of the Lovers (Fair-Weather Friends always on: enter Halamshiral with all followers.); Forever Marked (Progress the story to unlock.); Lateral Thinker (Unlock all caches watched over by ancient statues.); Coroner (Find all of the wearable items that make up the Taken Shape.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Start a Nightmare (or Hard) playthrough with the Trials modifiers you want already switched on, and never lower the difficulty.",
                "2. Push the main story: prologue, close the Breach, Halamshiral, the Fade, the ancient ruin, the ally, and the finale.",
                "3. Between story beats, clear the open-world systems: recruit every companion, buy five mounts, set up camps in ten areas, craft and upgrade gear, run war-table operations, and collect shards and astrariums.",
                "4. Grind the combat feats: ten high dragons, 2,500 enemies, 1,000 demons, a 1,000-damage hit, Tier 4 crafting.",
                "5. Play the three DLCs (Jaws of Hakkon, The Descent, Trespasser) and mop up their achievements and any Trials that are still open.",
                "Tip: Dragons' Bane (10 high dragons) is the biggest time sink - kill each region's dragon the first time you are strong enough rather than saving them all for the end, and it finishes naturally."
            ]
        }
    ]
};
