// Cronos: The New Dawn Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/cronos-the-new-dawn.json), whose 47 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   2101960 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 21 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched (community 100%
//   guides) and is a curatorial summary, except for a small number of
//   just-released DLC achievements explicitly flagged as unconfirmed where
//   no guide has published real unlock text yet. Every non-hidden
//   description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "cronos-the-new-dawn-achievement-guide",
    "category": "game",
    "gameSlug": "cronos-the-new-dawn",
    "icon": "⏳",
    "title": "Cronos: The New Dawn Achievement Guide",
    "summary": "A practical guide to all 47 Steam achievements in Cronos: The New Dawn (21 hidden). 21 of the 47 are hidden, researched from TheGamer's achievement/trophy guide and cross-checked against a second community source - mostly story milestones, boss fights, and mutually-exclusive ending choices.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Cronos: The New Dawn has 47 Steam achievements, 21 of them hidden. The visible track covers combat feats (multi-enemy kills with the Sword, Hammer and Arbalest, burning 25 dead Orphans, a melee kill, 25 headshot kills), crafting and upgrades (fabricating an item and every item type, fully upgrading a weapon and then every weapon, fully upgrading the Traveler's suit), collectibles (every cat, comic book, Travelog and weapon), and completion modes (Hard Mode, New Game+).",
                "The 21 hidden achievements are almost all story milestones and boss fights: entering the REV-Capsule, finding the Predecessor, defeating the Unmerged One and the Unmerged Terror, executing a Dive and a Gravity Jump and an Ascendance Sequence for the first time, extracting Edward and Dr. Zybert, powering up the tram to reach the Steelworks, defeating the Terror in the Steelworks and at Station B, extracting one of the brothers, defeating Eliza, and getting the Pathfinder to the tram. Two pairs are mutually-exclusive choices within a single playthrough: spare the Pathfinder (A Flicker Of Hope) versus shoot him (I Am Free), and finishing with only Collective-appointed Essences (The Orthodox) versus finishing with Edward's Essence specifically (Punks Not Dead!).",
                "The catalog marks it difficulty 3 and missable:true, and recommends 2 playthroughs - beyond the two explicit either/or choices above, New Game+ is required outright for Free From All The Scars (saving both Weronikas), so no single playthrough can realistically capture every hidden achievement."
            ]
        },
        {
            "heading": "Story & Choices I",
            "body": [
                "The hidden A Flicker Of Hope (spare the Pathfinder) and Down With The Sickness (defeat the Unmerged Terror), headshot and Sword-projectile kills, a Gravity Jump, powering a device with the Conductor, burning dead Orphans, the hidden Essence Aquired (extract Edward), setting 5 enemies on fire, the hidden Fixing Things (discover the Warden's secret) and For Good And For Ill (extract Dr. Zybert), fully upgrading the Temporal Shell, the hidden Free From All The Scars (save both Weronikas, New Game+ only) and Hit Like A Train (defeat the Terror at Station B), the hidden I Am Free (shoot the Pathfinder), and fully upgrading a single weapon.",
                "The achievements here: A Flicker Of Hope (Spare the Pathfinder's life.); Better Than One (Defeat 25 enemies with a headshot.); Counter-Gravity Traversal (Execute a Gravity Jump.); Do Travelers Dream Of Electric Sheep? (Power up a device with the Conductor.); Don't Let Them Merge (Burn 25 dead Orphans.); Down With The Sickness (Defeat the Unmerged Terror.); Efficiency Discipline (Defeat 2 enemies with a single Sword projectile.); Essence Aquired (Extract Edward.); Fire. Spreading. (Set 5 enemies on fire with a single burst of the Torch.); Fixing Things (Discover the Warden's secret.); For Good And For Ill (Extract Dr. Zybert.); Forged In Fire (Fully upgrade the Traveler's Temporal Shell.); Free From All The Scars (Save both Weronikas (New Game+ only).); Hit Like A Train (Defeat the Terror at Station B.); I Am Free (Shoot the Pathfinder.); May It Serve You Fault-Free (Fully upgrade a single weapon.)."
            ]
        },
        {
            "heading": "Story & Choices II",
            "body": [
                "The hidden My Brother's Keeper (extract one of the brothers) and Public Transport (power up the tram to the Steelworks), the hidden Punks Not Dead! (finish with Edward's Essence), a melee kill, burning the Biomass, fabricating an item, a Hard Mode clear, activating a Time Oddity, and the hidden Such Is Our Calling (find the Predecessor), Suppressed Recomposition (defeat the Unmerged One) and Temporal Destination Reached (execute a Dive for the first time).",
                "The achievements here: My Brother's Keeper (Extract one of the brothers.); Public Transport (Power up the tram to reach the Steelworks.); Punks Not Dead! (Finish the game with Edward's Essence.); Raging Bull (Defeat an enemy with a melee attack.); Rapid Oxidation (Burn the Biomass.); Resources Are Scarce (Fabricate an item.); Shell Not Compromised (Finish the game in the Hard Mode.); Spacetime Oddity (Activate a Time Oddity.); Such Is Our Calling (Find the Predecessor.); Suppressed Recomposition (Defeat the Unmerged One.); Temporal Destination Reached (Execute a Dive for the first time.)."
            ]
        },
        {
            "heading": "Boss Fights, Collectibles & Weapon Mastery",
            "body": [
                "Multi-enemy Arbalest and Hammer kills, finding every Travelog, the hidden The Ascendance (execute an Ascendance Sequence) and The Bigger They Are (defeat the Terror in the Steelworks), finding every weapon, petting every cat, selling 15 valuable items, the hidden The Orthodox (finish using only Collective-appointed Essences) and The Pathfinder (get the Pathfinder to the tram), fully upgrading every weapon, transferring every fallen Traveler's Essence, and the hidden The Sacrifice Of The Flesh (defeat Eliza).",
                "The achievements here: The Annihilator (Defeat 5 enemies with a single Arbalest round.); The Anvil Of The Collective (Defeat 4 enemies with a single Hammer shot.); The Archivist (Find all of the Travelogs.); The Ascendance (Execute an Ascendance Sequence for the first time.); The Bigger They Are (Defeat the Terror in the Steelworks.); The Boon Of The Relics (Find all the weapons.); The Catfinder (Pet all the cats.); The Contribution (Sell 15 valuable items.); The Orthodox (Finish the game using only the Essences appointed by the Collective.); The Pathfinder (Get the Pathfinder to the tram.); The Praetorian (Fully upgrade all weapons.); The Preserver (Transfer the Essences from all fallen Travelers.); The Sacrifice Of The Flesh (Defeat Eliza.)."
            ]
        },
        {
            "heading": "Collectibles & Endgame",
            "body": [
                "Transferring a fallen Traveler's Essence, fabricating every item type, the hidden Togetherness (hold the Essences of Lidia, Marcel and Krzysztof at once) and Welcome To The Vocation (exit the REV-Capsule), finding every comic book, finishing the game in New Game+, and burning Biomass with the Pyre.",
                "The achievements here: To Bring Them Back (Transfer an Essence from a fallen Traveler.); To Pave The Path (Fabricate all item types.); Togetherness (Hold the Essences of Lidia, Marcel and Krzysztof at the same time.); Unadulterated Joy (Find all of the comic books.); Welcome To The Vocation (Exit the REV-Capsule.); You Never Give Up (Finish the game in the NG+.); The Pyromaniac (Burn Biomass with the Pyre.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through the main story once, banking the automatic story milestones (REV-Capsule, the Predecessor, Steelworks access, the Unmerged bosses, Eliza).",
                "2. Decide in advance which mutually-exclusive choices you want first: sparing or shooting the Pathfinder, and finishing with Collective-only Essences versus Edward's Essence.",
                "3. Explore thoroughly for collectibles (cats, comic books, Travelogs, weapons) and fully upgrade your weapons and suit as you go.",
                "4. Start New Game+ afterward for Free From All The Scars, the NG+ completion achievement, and a second run at whichever ending choice you skipped.",
                "Tip: since 'The Orthodox' and 'Punks Not Dead!' both require a specific Essence loadout at the finish, decide which one you're chasing before your final playthrough hours rather than after - swapping Essences late risks missing the achievement's exact condition at credits."
            ]
        }
    ]
};
