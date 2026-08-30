// Wolfenstein: The Old Blood Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/wolfenstein-the-old-blood.json), whose 50 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   350080 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "wolfenstein-the-old-blood-achievement-guide",
    "category": "game",
    "gameSlug": "wolfenstein-the-old-blood",
    "icon": "🐺",
    "title": "Wolfenstein: The Old Blood Achievement Guide",
    "summary": "A practical guide to all 50 Steam achievements in Wolfenstein: The Old Blood - none are hidden. Covers the prequel campaign and its Kessler/Annette choice, the three difficulty clears, the eight hidden Wolfenstein 3D nightmare levels, the ten Challenge Map gold medals, the letter and gold-item collectibles, and every perk unlock.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Wolfenstein: The Old Blood has 50 Steam achievements and none of them are hidden. This standalone prequel to The New Order is short and linear, so most of the list unlocks just by playing: infiltrating and escaping Castle Wolfenstein, finishing part one, choosing whether to save Kessler or Annette, and completing the whole game on each difficulty. The rest is optional content - the eight secret Wolfenstein 3D \"nightmare\" levels hidden in beds through the campaign, ten Challenge Map arenas that each award a gold medal, two collectible sets (letters and gold items), and one achievement for every perk you can unlock.",
                "Nothing is permanently missable because chapter select lets you replay any level with your collectible and nightmare progress carried over. The only real planning is difficulty: the three completion achievements do not stack, so you either play three separate runs (any / I AM DEATH INCARNATE! / ÜBER) or do one run each on the two hardest settings.",
                "Tip: the perks in The Old Blood level up automatically as you use the matching playstyle - stealth kills for stealth perks, headshots for the marksman perk, and so on - so rather than grinding them at the end, deliberately vary how you fight during the campaign and most of the 16 perk achievements will unlock on their own."
            ]
        },
        {
            "heading": "Campaign & Endings",
            "body": [
                "The main story: infiltrating and escaping Castle Wolfenstein, completing part one, the branching choice to save Kessler or Annette, and completing the whole game on any difficulty, on I AM DEATH INCARNATE! (or above), and on ÜBER.",
                "The achievements here: Undercover (Infiltrate Castle Wolfenstein); Freedom (Escape Castle Wolfenstein); Revenge (Complete part one); Kessler saved (Choose to save Kessler); Annette saved (Choose to save Annette); Hero (Complete game on any difficulty); Super hero (Complete game on I AM DEATH INCARNATE! (or ÜBER)); Über hero (Complete game on ÜBER)."
            ]
        },
        {
            "heading": "Nightmare Levels",
            "body": [
                "The eight hidden Wolfenstein 3D throwback levels - one tucked away in each chapter, plus the prologue level and the nightmare boss fight - found by interacting with specific beds during the campaign.",
                "The achievements here: Die, Grösse, die! (Complete all nightmare levels); German Alps nightmare (Complete the prologue nightmare); Prison nightmare (Complete the nightmare in chapter 1); Docks nightmare (Complete the nightmare in chapter 2); Wolfenstein Keep nightmare (Complete the nightmare in chapter 3); Escape! nightmare (Complete the nightmare in chapter 4); Wulfburg nightmare (Complete the nightmare in chapter 5); Ruins nightmare (Complete the nightmare in chapter 6); Old town nightmare (Complete the nightmare in chapter 7); Guten tag! (Complete the nightmare boss level)."
            ]
        },
        {
            "heading": "Challenge Maps & Collectibles",
            "body": [
                "Earning a gold medal on each of the ten score-attack Challenge Map arenas, and the two collectible sets: letters (5 and then all of them) and gold items (8, 16, 32 and all 64).",
                "The achievements here: Research centre combat master (Achieve gold medal for this challenge map); Prison docks combat master (Achieve gold medal for this challenge map); Keep foyer combat master (Achieve gold medal for this challenge map); Cable car platform combat master (Achieve gold medal for this challenge map); Caves combat master (Achieve gold medal for this challenge map); Paderborn bridge combat master (Achieve gold medal for this challenge map); Wulfburg square combat master (Achieve gold medal for this challenge map); Workshop combat master (Achieve gold medal for this challenge map); Bathhouse combat master (Achieve gold medal for this challenge map); Graveyard combat master (Achieve gold medal for this challenge map); Paperboy (Collect 5 letters); Postman (Collect all letters); All that glitters (Collect 8 gold items); Glittering gold (Collect 16 gold items); The ecstasy of gold (Collect 32 gold items); Gold master (Collect 64 gold items)."
            ]
        },
        {
            "heading": "Perk Unlocks",
            "body": [
                "Unlocking every perk in the game's four playstyle trees - the health, armour, ammunition and grenade-belt upgrades, weapon-specific upgrades (Kampfpistole, Schockhammer, Bombenschuss), and the assault perks like Eagle Eye, Vampire, Reload mash and Quick turn.",
                "The achievements here: Eagle Eye (Unlock the Eagle Eye perk); Health upgrade I (Unlock the Health upgrade I perk); Health upgrade II (Unlock the Health upgrade II perk); Health upgrade III (Unlock the Health upgrade III perk); Armor upgrade I (Unlock the Armor upgrade I perk); Armor upgrade II (Unlock the Armor upgrade II perk); Ammunition upgrade (Unlock the Ammunition upgrade perk); Grenade belt (Unlock the Grenade belt perk); Vampire (Unlock the Vampire perk); Kampfpistole ammo storage upgrade (Unlock the Kampfpistole ammo storage upgrade perk); Schockhammer clip upgrade (Unlock the Schockhammer clip upgrade perk); Bombenschuss clip upgrade (Unlock the Bombenschuss clip upgrade perk); Carry heavy machinegun (Unlock the Carry heavy machinegun perk); Reload mash (Unlock the Reload mash perk); Quick turn (Unlock the Quick turn perk); Tough Skin (Unlock the Tough Skin perk)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the campaign once on I AM DEATH INCARNATE! difficulty, taking your time to search beds for the eight hidden nightmare levels and to pick up letters and gold items as you pass through each chapter.",
                "2. During that run, deliberately mix up your approach - stealth takedowns, headshots, heavy weapons, grenades - so the perk trees level up and most perk achievements unlock naturally.",
                "3. Make the Kessler-or-Annette choice on this run for one of the two ending achievements; you can replay that chapter afterwards for the other.",
                "4. Use chapter select to mop up any missed nightmare levels, letters or gold items, and to unlock any perks that did not trigger during the campaign.",
                "5. Play the ten Challenge Maps and push each one for its gold-medal score, then do a final ÜBER-difficulty run (chapter select counts) for the last completion achievement.",
                "Tip: on the Challenge Maps, gold medals reward aggression and variety - keep moving, use environmental kills and different weapons, and chain kills quickly rather than playing the slow stealth game the campaign encourages."
            ]
        }
    ]
};
