// Windblown Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/windblown.json), whose 25 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1911610 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "windblown-achievement-guide",
    "category": "game",
    "gameSlug": "windblown",
    "icon": "🌀",
    "title": "Windblown Achievement Guide",
    "summary": "A practical guide to all 25 Steam achievements in Windblown - none are hidden. Covers reaching every biome, defeating every boss, repairing your companions, and unlocking gear and gifts. None of the achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Windblown has 25 Steam achievements and none are hidden. About half are for reaching each biome for the first time (the Factory, Rat Village, Incubator, Fungal Swamp, Sanctuary, Lost Archipelago) and defeating each boss (the Headbanger and its fleeing head, the Tribomber, the Pirate Captain, the Head, the Navelless Brothers, the Memoreaper, the Broken Banger). The rest are progression milestones - repairing FREND-43V3R and Cuprik's hammer, rescuing Pietro, Sigourney and Rhodie during expeditions, unlocking Alterattack, 10 Weapons or Trinkets, 30 Gifts, finishing an Endless Mode loop, escaping the Vortex, and carving for the first time.",
                "The catalog marks it difficulty 3. Windblown is Motion Twin's (Dead Cells) co-op roguelite, so most of this comes from just playing runs and dying a lot; the bosses and the Endless Mode loop are the real skill checks.",
                "Tip: play with a group if you can - rescuing companions during expeditions and reaching every biome goes faster with co-op runs."
            ]
        },
        {
            "heading": "Biomes & Bosses",
            "body": [
                "Reaching the Factory, Rat Village, Incubator and Fungal Swamp for the first time, repairing FREND-43V3R, rescuing Pietro and Sigourney during expeditions, and defeating the Headbanger's fleeing head, the Tribomber, the Headbanger, the Pirate Captain, the Head, and the Navelless Brothers.",
                "The achievements here: Factory (Reach the Factory for the first time); Rat Village (Reach the Rat Village for the first time); Incubator (Reach the Incubator for the first time); Fungal Swamp (Reach the Fungal Swamp for the first time); FREND-43V3R (Repair FREND-43V3R); Pietro (Rescue Pietro during an expedition); Sigourney (Rescue Sigourney during an expedition); Off with its head! (Defeat the Headbanger's head while it's trying to flee); Tribomber (Defeat the Tribomber); Headbanger (Defeat the Headbanger); Pirate Captain (Defeat the Pirate Captain); Head (Defeat the Head); Navelless Brothers (Defeat the Navelless Brothers)."
            ]
        },
        {
            "heading": "Progression & Endgame",
            "body": [
                "Unlocking Alterattack, 10 Weapons or Trinkets and 30 Gifts, finishing an Endless Mode loop, reaching the Sanctuary, defeating the Memoreaper, escaping the Vortex, reaching the Lost Archipelago, defeating the Broken Banger, rescuing Rhodie, carving for the first time, and repairing Cuprik's hammer.",
                "The achievements here: Alterattack (Unlock Alterattack); Gear Adept (Unlock 10 Weapons or Trinkets); Gift Adept (Unlock 30 Gifts); Endless Adept (Finish an Endless Mode loop); Sanctuary (Reach the Sanctuary for the first time); Memoreaper (Defeat the Memoreaper); Stone Cutter (Find a way to escape the Vortex); Lost Archipelago (Reach the Lost Archipelago for the first time); Broken Banger (Defeat the Broken Banger); Rhodie (Rescue Rhodie during an expedition); Carving (Carve for the first time); Original Copy (Repair Cuprik's hammer)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play runs and push into new biomes as you unlock them - Factory, Rat Village, Incubator, Fungal Swamp, Sanctuary and the Lost Archipelago.",
                "2. Rescue Pietro, Sigourney and Rhodie whenever an expedition offers the chance.",
                "3. Work through the boss roster as you meet them, and unlock Alterattack, weapons/trinkets and gifts along the way.",
                "4. Once you're geared up, push for an Endless Mode loop and escaping the Vortex.",
                "Tip: this is a roguelite, so expect to die a lot on the way to full biome and boss coverage - progression carries over between runs."
            ]
        }
    ]
};
