// Crypt Custodian Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/crypt-custodian.json), whose 48 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   2394650 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "crypt-custodian-achievement-guide",
    "category": "game",
    "gameSlug": "crypt-custodian",
    "icon": "🧹",
    "title": "Crypt Custodian Achievement Guide",
    "summary": "A practical guide to all 48 Steam achievements in Crypt Custodian - none are hidden. None of the achievements are hidden. Covers the story bosses and ability unlocks, the upgrade-slot and trapped-spirit collections, the enemy kill counts, every character's photo-memory set, 100% completion, and the boss-rush S+ ranks.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Crypt Custodian has 48 Steam achievements and none are hidden. They track the main path (getting banished, the ability unlocks - broom-erang, Spirit Split, Broom-Dash - and the bosses from the Pot Full of Spiders to Kendra), the collectibles (upgrade slots at 1 / 10 / 25 / 50, trapped spirits at 1 / 5 / 10 / all 20), the enemy kill counts (100 / 500 / 1,000), every one of the eleven characters' photo-memory sets, 100% completion, and the post-game boss rush (an S+ rank, 10 S+ ranks, then an S+ on every boss at every difficulty).",
                "The catalog marks it difficulty 3. The story and collectibles come naturally from a thorough playthrough; the real challenge is 'Undefeated' - an S+ rank on every boss at every difficulty in boss rush mode - which needs clean, no-hit-heavy execution. 'Unscathed' (a single no-damage boss) is a good warm-up for it.",
                "Tip: collect every character's photos as you meet them - the 'Memory' achievements are easy to leave half-done, and backtracking for a single missed picture across the whole map is the most tedious part of 100%."
            ]
        },
        {
            "heading": "Story & Bosses",
            "body": [
                "Getting banished from the Palace, meeting Grizz, the ability unlocks (broom-erang, Spirit Split, Broom-Dash), watching all of GHOST SLAUGHTER 3, catching the Gigantic Stormbeetle, and the bosses - Pot Full of Spiders, Gunk Goliath, Moon Man, the Imposter, Rail Rider, Grief, Kendra - plus entering the Vault and the V.I.P. room.",
                "The achievements here: Very Bad Cat (Get banished from the Palace); Pot Full of Spiders (Defeat the Pot Full of Spiders); A Plan Forms... (Meet Grizz); Right Back at Ya (Unlock the broom-erang); Sticky Business (Defeat the Gunk Goliath); Split Vision (Unlock the Spirit Split); Top of the Tower (Unlock Broom-Dash); Creature Feature (Watch the entirety of GHOST SLAUGHTER 3); Bug Catcher (Catch the Gigantic Stormbeetle); Over the Edge (Defeat the Moon Man); Strange Shopkeeper (Defeat the Imposter); Risky Ride (Defeat the Rail Rider); The Band's Back Together (Find out where Skully went); Rainy Days (Defeat Grief); Crumbling Towers (Defeat Kendra); Sealed Shut (Enter the Vault); Very Important Pluto (Enter the V.I.P. room)."
            ]
        },
        {
            "heading": "Upgrades, Spirits & Combat",
            "body": [
                "Upgrade slots at 1 / 10 / 25 / 50, releasing trapped spirits at 1 / 5 / 10 / all 20, a no-damage boss kill, breaking one curse and then every curse, 100 special attacks, equipping a special, and enemy kills at 100 / 500 / 1,000.",
                "The achievements here: First Slot (Gain your first upgrade slot); Ten Slots (Collect 10 upgrade slots); Twenty-Five Slots (Collect 25 upgrade slots); Fifty Slots (Collect 50 upgrade slots); Trapped Spirit (Release a trapped spirit); A Small Haunt (Release 5 trapped spirits); Halfway There (Release 10 trapped spirits); Gangs All Back Together (Release all 20 trapped spirits); Unscathed (Defeat a boss without taking damage); Hexed Hero (Break a curse); Curse Crusher (Break every curse); Heavy Hitter (Use your special attack 100 times); Ready for Battle (Equip a special attack); Tiny and Tidy (Defeat 100 enemies); Broom Basher (Defeat 500 enemies); Mess Master (Defeat 1000 enemies)."
            ]
        },
        {
            "heading": "Memories & Completion",
            "body": [
                "Collecting every photo for each of the eleven characters (Pebble, Grizz, Mira, Crouton, Dagoberg, the little guys, Wailer, Roy, Rusty, Skully, Kendra), reaching 100% completion, and the boss-rush S+ ranks - one, ten, and finally an S+ on every boss at every difficulty.",
                "The achievements here: Pebble's Memory (Collect all of Pebble's pictures); Grizz's Memory (Collect all of Grizz's pictures); Mira's Memory (Collect all of Mira's pictures); Crouton's Memory (Collect all of Crouton's pictures); Dagoberg's Memory (Collect all of Dagoberg's pictures); The Little Guys' Memory (Collect all of the little guys' pictures); Wailer's Memory (Collect all of Wailer's pictures); Roy's Memory (Collect all of Roy's pictures); Rusty's Memory (Collect all of Rusty's pictures); Skully's Memory (Collect all of Skully's pictures); Kendra's Memory (Collect all of Kendra's pictures); Stocked Up (Reach 100% completion); Perfect Battle (Achieve an S+ rank in boss rush mode); Solid Sweeper (Achieve 10 S+ ranks in boss rush mode); Undefeated (Achieve an S+ rank in every boss at every difficulty in boss rush mode)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the story, unlocking every ability and defeating each boss.",
                "2. Collect upgrade slots, trapped spirits and every character's photos as you explore.",
                "3. Break every curse and finish the enemy kill counts.",
                "4. Reach 100% completion, backtracking for anything missed.",
                "5. Grind boss rush for the S+ ranks, ending with 'Undefeated' (S+ on every boss at every difficulty).",
                "Tip: 'Unscathed' (a no-damage boss) is much easier against an early boss like the Pot Full of Spiders once you are over-levelled from the rest of the game - do it on a return visit rather than fighting fair on the first encounter."
            ]
        }
    ]
};
