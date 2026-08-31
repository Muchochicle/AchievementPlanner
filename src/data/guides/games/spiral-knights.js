// Spiral Knights Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/spiral-knights.json), whose 54 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   99900 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "spiral-knights-achievement-guide",
    "category": "game",
    "gameSlug": "spiral-knights",
    "icon": "⚙",
    "title": "Spiral Knights Achievement Guide",
    "summary": "A practical guide to all 54 Steam achievements in Spiral Knights - none are hidden. Covers the progression and boss achievements, the alchemy and Arsenal achievements, and the gear / survival / one-off feat achievements. None of the achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Spiral Knights has 54 Steam achievements and none are hidden. They cover the progression milestones (reaching Haven, the tier clearances, the Core Terminal), defeating each boss (Royal Jelly, Vanaduke, Snarbolax, the Roarmulus Twins), the alchemy achievements (craft 1- through 5-star items, alchemize up to 50 items), amassing 3/5/10 of every gear type in your Arsenal, and a set of survival feats - completing tier expeditions without reviving, and travelling the whole Clockworks (depth 0 to 29) in one expedition, once and again without a revive.",
                "The catalog marks it difficulty 4 - 'Dauntless Delver' (a full 0-29 run with no revives), amassing 10 of every gear type, and defeating all four bosses take a long, well-equipped account. The game runs on energy, so the Arsenal grind is the real cost. Nothing is missable.",
                "Tip: build one strong five-star loadout of each type before attempting the no-revive runs - 'Dauntless Delver' is a gear and stamina check more than a skill check."
            ]
        },
        {
            "heading": "Progression & Bosses",
            "body": [
                "Reaching the Rescue Camp, Haven, the first Clockworks Terminal, Moorcraft Manor and Emberlight, earning Tier 2 and Tier 3 clearance, descending to the Core Terminal, and defeating the Royal Jelly, Lord Vanaduke and the Snarbolax.",
                "The achievements here: First Steps (Successfully reach the Rescue Camp.); Welcome, Stranger (Cross the chasm into Haven.); Mission Accomplished (Reach the first Clockworks Terminal.); World of Moorcraft (Pay a visit to Moorcraft Manor.); Spiral Spelunker (Earn clearance to explore Tier 2 of the Clockworks.); An Emberlight in the Dark (Pay a visit to Emberlight, the town of gremlin outcasts.); Go Deep (Earn clearance to explore Tier 3 of the Clockworks.); Hardcore (Descend to the Core Terminal.); Royal Pain (Defeat the Royal Jelly squatting in the Royal Jelly Palace.); Free Spirit (Defeat Lord Vanaduke in the heart of the Firestorm Citadel.); O Frabjous Day! (Defeat the fabled Snarbolax that lives deep within the Gloaming Wildwoods.)."
            ]
        },
        {
            "heading": "Alchemy & Arsenal",
            "body": [
                "Alchemizing a 1- through 5-star item, alchemizing 5 / 10 / 25 / 50 items total, and amassing 3, 5 and 10 of each gear type (swords, guns, bombs, helmets, armors, shields) in your Arsenal.",
                "The achievements here: One-Star Smith (Alchemize a 1 star item.); Two-Star Smith (Alchemize a 2 star item.); Three-Star Smith (Alchemize a 3 star item.); Four-Star Smith (Alchemize a 4 star item.); Five-Star Smith (Alchemize a 5 star item.); Apprentice Alchemist (Alchemize 5 items.); Adept Alchemist (Alchemize 10 items.); Accomplished Alchemist (Alchemize 25 items.); Ascendant Alchemist (Alchemize 50 items.); Swordsman (Amass 3 swords in your Arsenal.); Expert Swordsman (Amass 5 swords in your Arsenal.); Master Swordsman (Amass 10 swords in your Arsenal.); Gunslinger (Amass 3 guns in your Arsenal.); Expert Gunslinger (Amass 5 guns in your Arsenal.); Master Gunslinger (Amass 10 guns in your Arsenal.); Bombardier (Amass 3 bombs in your Arsenal.); Expert Bombardier (Amass 5 bombs in your Arsenal.); Master Bombardier (Amass 10 bombs in your Arsenal.); Hatter (Amass 3 helmets in your Arsenal.); Expert Hatter (Amass 5 helmets in your Arsenal.); Mad Hatter (Amass 10 helmets in your Arsenal.); Armorer (Amass 3 armors in your Arsenal.); Expert Armorer (Amass 5 armors in your Arsenal.); Master Armorer (Amass 10 armors in your Arsenal.); Shieldbearer (Amass 3 shields in your Arsenal.); Expert Shieldbearer (Amass 5 shields in your Arsenal.); Master Shieldbearer (Amass 10 shields in your Arsenal.)."
            ]
        },
        {
            "heading": "Gear, Survival & Feats",
            "body": [
                "A full five-star stellar set, building an item to heat level 10, filling every equipment slot, reviving yourself and a party member, using 10 Health and 10 Remedy Capsules, powering up a Mecha Knight, the no-revive tier-expedition clears, the full 0-29 Clockworks run (and again with no revives), defeating the Roarmulus Twins, obtaining a Firecracker bomb, and a Lockdown snowball hit.",
                "The achievements here: Stellar Set (Amass an Arsenal that includes a 5 star helmet, armor, shield, gun and bomb.); Applied Entropy (Build an item to heat level 10.); Fully Loaded (Unlock and fill every equipment slot.); Jump Start (Revive yourself.); Helping Hand (Revive a downed party member.); Pharma Suitable (Use 10 Health Capsules.); Conditioned Response (Use 10 Remedy Capsules.); Energize! (Power up a derelict Mecha Knight.); Bronze Survivor (Complete a Tier 1 expedition without having to revive.); Silver Survivor (Complete a Tier 2 expedition without having to revive.); Gold Survivor (Complete a Tier 3 expedition without having to revive.); Cradle and All (Travel the entire Clockworks from depth 0 to depth 29 in a single expedition.); Dauntless Delver (Travel the entire Clockworks from depth 0 to depth 29 in a single expedition without having to revive.); Terrible Twin Turrets (Defeat the Roarmulus Twins.); Star-Spangled Bomber (Obtain a Firecracker bomb.); Son of a Nutcracker! (Hit an opponent with a snowball in Lockdown.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through the progression - reach Haven, earn Tier 2 and 3 clearance, and descend to the Core Terminal.",
                "2. Defeat all four bosses (Royal Jelly, Vanaduke, Snarbolax, Roarmulus Twins).",
                "3. Grind the Arsenal to 10 of every gear type and alchemize 50 items, building at least one five-star set.",
                "4. Do the no-revive tier-expedition clears (Bronze/Silver/Gold Survivor).",
                "5. Do a full 0-29 Clockworks run, then repeat it with no revives for 'Dauntless Delver'.",
                "Tip: the 'amass 10 of X' achievements only need the items owned, not equipped - craft cheap low-star items of each type to fill the count if you're short."
            ]
        }
    ]
};
