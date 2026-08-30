// Trine Enchanted Edition Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/trine-enchanted-edition.json), whose 33 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   35700 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "trine-enchanted-edition-achievement-guide",
    "category": "game",
    "gameSlug": "trine-enchanted-edition",
    "icon": "🧙",
    "title": "Trine Enchanted Edition Achievement Guide",
    "summary": "A practical guide to all 33 Steam achievements in Trine Enchanted Edition - none are hidden. Covers the level completion and per-level experience-collection achievements, and the skill challenges and bonus achievements.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Trine Enchanted Edition has 33 Steam achievements and none of them are hidden. About twenty are progress and collection: complete the tutorial, complete the game, complete it on the hardest difficulty, find every secret item, and a \"Master\" achievement for collecting all the experience in each of the fifteen levels plus Master Collector for all of it. The rest are skill challenges - build a 12-object tower and stand on it, a multi-kill with one thrown object, a no-death hardest-difficulty boss clear, a three-classes-one-level kill, a no-damage level, a 25-death level, 200 conjured objects in a level, a no-kills level, a skeleton-jumping chain, plus diving, holiday-secret and \"launch the Enchanted Edition\" bonus achievements.",
                "Nothing is missable - every level is replayable from the level select and experience/secrets persist. The completion is short; the hardest parts are the no-death hardest-difficulty boss clear (Better Than Developers!) and What's next? (finish the game on Hardcore-difficulty settings).",
                "Tip: play through once on a normal difficulty collecting all experience and secrets level by level, then replay the final level on the hardest difficulty for the two hard achievements - the Wizard's box-conjuring trivialises most of Trine's platforming and combat once you have the experience to upgrade him."
            ]
        },
        {
            "heading": "Level Completion & Experience Collection",
            "body": [
                "Completing Astral Academy and the whole game, completing it on the hardest difficulty, finding every secret item, and the per-level \"Master\" achievements for collecting all experience in Astral Academy, Academy Hallways, Wolvercote Catacombs, Dragon Graveyard, Crystal Caverns, Crypt of the Damned, Forsaken Dungeons, Throne of the Lost, Fangle Forest, Shadowthorn Thicket, Ruins of the Perished, Heartland Mines, Bramblestoke Village, Iron Forge and Tower of Sarek, plus Master Collector for all experience in the game.",
                "The achievements here: Astral Introduction (Complete Astral Academy); Academy Master (Collect all experience in Astral Academy); Hallways Master (Collect all experience in Academy Hallways); Wolvercote Master (Collect all experience in Wolvercote Catacombs); Graveyard Master (Collect all experience in Dragon Graveyard); Caverns Master (Collect all experience in Crystal Caverns); Crypt Master (Collect all experience in Crypt of the Damned); Dungeon Master (Collect all experience in Forsaken Dungeons); Castle Master (Collect all experience in Throne of the Lost); Forest Master (Collect all experience in Fangle Forest); Thicket Master (Collect all experience in Shadowthorn Thicket); Ruins Master (Collect all experience in Ruins of the Perished); Mines Master (Collect all experience in Heartland Mines); Village Master (Collect all experience in Bramblestoke Village); Forge Master (Collect all experience in Iron Forge); Tower Master (Collect all experience in Tower of Sarek); Master Collector (Collect all experience in the game); Completed! (Complete the entire game); What's next? (Complete the entire game on hardest difficulty (Hardcore mode not required)); Treasure Hunter (Find all secret items in every level)."
            ]
        },
        {
            "heading": "Skill Challenges & Bonus",
            "body": [
                "Building a 12-object tower and standing on it, a 5-monster (3 in Enchanted Edition) single-object multi-kill, a no-death Tower of Sarek clear on the hardest difficulty, killing one monster with each of the three heroes in a level, a no-damage level, a 25-plus-death level, 200 conjured objects in a level, a no-direct-kills level, a 5-skeleton (3 in Enchanted Edition) jump chain, earning every achievement, a 20-second underwater dive, finding the three holiday secret gifts, and launching the Enchanted Edition.",
                "The achievements here: What a View! (Build a tower with at least 12 Wizard-created objects and stand on top of the tower without collapsing it); Whoops! (Kill 5 monsters (or 3 in Enchanted Edition) with a single physical object drop or throw); Better Than Developers! (Complete Tower of Sarek without any deaths on hardest difficulty (Hardcore mode not required)); The Cool Way (In a single level, kill one monster by jumping on it with the Knight, one with the Wizard's abilities and one with the Thief's grappling hook kick); Survivalist (Survive a level other than Astral Academy without any damage); Dead on arrival (Complete a level with 25 or more character deaths); Still no fireball (Conjure 200 objects in a single level); Undead have rights, too! (Complete a level other than Astral Academy without directly killing any enemies); Spring master (Complete at least 5 jumps (or 3 in Enchanted Edition) in a row on different skeletons without touching the ground); Way Out of the Trine (Earn all Achievements in Trine); Summer Dip (Stay underwater for more than 20 seconds without taking damage); Winter Secrets (Find the Academic, Bony and Crystalline holiday secret gifts.); Enchanted (Launch the Enchanted Edition of the game)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through the game once on a comfortable difficulty, collecting all experience and every secret item in each level as you go (use the level select to top up any you miss).",
                "2. That covers Astral Introduction, all fifteen \"Master\" achievements, Master Collector, Completed! and Treasure Hunter.",
                "3. Do the skill-challenge achievements via level replay - the tower build, the multi-kill, the three-heroes kill, the no-damage and no-kills levels, 200 objects, the 25-death level, the skeleton jumps, and the underwater dive.",
                "4. Replay the final level on the hardest difficulty for What's next?, then again for a no-death clear for Better Than Developers!.",
                "5. Pick up the holiday secrets and launch the Enchanted Edition build, which earns you Way Out of the Trine once everything else is done.",
                "Tip: for Better Than Developers! (no-death Tower of Sarek on the hardest difficulty), fully upgrade the Wizard first - conjuring a platform under yourself lets you float over the boss's attacks entirely, turning the fight into a patience check rather than a reflex one."
            ]
        }
    ]
};
