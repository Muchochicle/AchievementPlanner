// Total War: PHARAOH Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/total-war-pharaoh.json), whose 76 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1937780 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "total-war-pharaoh-achievement-guide",
    "category": "game",
    "gameSlug": "total-war-pharaoh",
    "icon": "🐍",
    "title": "Total War: PHARAOH Achievement Guide",
    "summary": "A practical guide to all 76 Steam achievements in Total War: PHARAOH - none are hidden. Covers the per-leader Ultimate Victories and exploration achievements, the Ancient Legacy choices and leader-specific campaign feats, and the Sea Peoples campaign achievements.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Total War: PHARAOH has 76 Steam achievements and none of them are hidden. The core is per-leader: achieving a Total War Ultimate Victory as each Faction Leader (Ramesses, Seti, Tausret, Amenmesse, Irsu, Bay, Suppiluliuma, Kurunta, and the Sea Peoples' Iolaos and Walwetes). Around those sit the Ancient Legacy achievements (choose a legacy - Akhenaten, Hatshepsut, Khufu, Thutmose, Muwatalli, Tudhaliya - and complete its specific goal), deity worship, discovering all realms, becoming Pharaoh or the Hittite Great King, surviving the Sea Peoples invasion, and a long list of leader-specific feats. The last twenty belong to the Sea Peoples (Rise of the Republic / Dynasties-style) update - the horde playstyle, the Path of the Sea Peoples and Path of the Marauders mechanics.",
                "Nothing is missable - campaigns restart freely with any leader. This is a long completion: an Ultimate Victory as ten different leaders is ten full campaigns, and the leader-specific feats often require particular in-campaign actions (eliminate a rival, confederate 5 factions, hold every Nile settlement).",
                "Tip: the per-leader feats and that leader's Ultimate Victory can usually be pursued in the same campaign - read the leader's achievement list before you start, since goals like \"eliminate Seti\" or \"become Pharaoh via the first Legitimacy War\" shape your early war and diplomacy choices."
            ]
        },
        {
            "heading": "Ultimate Victories & Exploration",
            "body": [
                "Achieving a Total War Ultimate Victory as Ramesses, Seti, Tausret, Amenmesse, Irsu, Bay, Suppiluliuma and Kurunta, worshipping 2 and 3 gods to their highest tier, discovering all realms (all, plus the Canaanite, Hittite and Egyptian subsets), becoming Egyptian Pharaoh and the Hittite Great King, and surviving the Sea Peoples invasion.",
                "The achievements here: My Name is Ozymandias, King of All This Land (Playing as Ramesses, achieve a Total War Ultimate Victory.); I am the Servant of Sutekh, He Needs No Other (Playing as Seti, achieve a Total War Ultimate Victory.); The Soul of Ra, Beloved of the Gods (Playing as Tausret, achieve a Total War Ultimate Victory.); Small But Mighty (Playing as any Faction Leader, worship 2 gods and reach their highest tier.); Local Gods for Local People (Playing as any Faction Leader, worship 3 gods and reach their highest tier.); Born of Amun (Playing as Amenmesse, achieve a Total War Ultimate Victory.); He Who Made Himself (Playing as Irsu, achieve a Total War Ultimate Victory.); The Maker of Kings (Playing as Bay, achieve a Total War Ultimate Victory.); The Saviour of Hatti (Playing as Suppiluliuma, achieve a Total War Ultimate Victory.); Horned is the Hunter (Playing as Kurunta, achieve a Total War Ultimate Victory.); Ultimate Explorer (Discover all realms on the campaign map.); Levantine Rambler (Discover all Canaanite realms on the campaign map.); Anatolian Traveller (Discover all Hittite realms on the campaign map.); God as Man (Become Egyptian Pharaoh.); Aspire to Greatness (Become the Hittite Great King.); All This Mayhem (Survive the invasion of the Sea Peoples.)."
            ]
        },
        {
            "heading": "Ancient Legacies & Leader-Specific Feats",
            "body": [
                "The Ancient Legacy achievements (Akhenaten's Aten cult centre, Hatshepsut's trade missions, Khufu's Wonders, Thutmose's pre-conquest actions, Muwatalli's vassals, Tudhaliya's princes, the max-Favour-with-Aten feat), and the leader-specific campaign feats for Bay, Amenmesse, Irsu, Kurunta, Ramesses, Seti, Suppiluliuma and Tausret, plus the Pillars of Civilisation end-states (Collapse, Prosperity, Crisis), 20 ambitions in a campaign, and setting 350 buildings on fire in a battle.",
                "The achievements here: The Great Idealist (Having chosen Akhenaten's Ancient Legacy, capture the Cult Centre of Aten.); Foremost Among the Noble (Having chosen Hatshepsut's Ancient Legacy, send a trade mission to every realm.); The Divine Potter (Having chosen Khufu's Ancient Legacy, complete each available Wonder.); Born of Thoth (Having chosen Thuthmose's Ancient Legacy, use a sabotage, support and balance action before conquering the targeted settlement); Intrepid Reformer (Having chosen Muwatalli's Ancient Legacy, max out 3 vassals.); The Eager Beaver (Having chosen Tudhaliya's Ancient Legacy, have 5 princes.); Waiting for the Sun (Playing as any Faction Leader, choose Akhenaten's Ancient Legacy and reach the highest tier of Favour with Aten.); The Isolationist (Playing as any Faction Leader, achieve victory in a campaign without signing a single diplomatic treaty.); Stabby, Stabby, Stabbiness! (Playing as Bay, declare war on 2 allies and conquer their lands.); The Usurper (Playing as Bay, become Pharaoh and use the Court Presence Power to take control of the entire court.); Humbler Origins (Playing as Bay, have 4 vassals under your control.); Plans Within Plans (Playing as Bay, complete 10 Intrigues in the Hittite Court.); Heqa-waset (Playing as Amenmesse, eliminate Seti.); Gold Merchant (Playing as Amenmesse, confederate 5 factions.); The Great Water (Playing as Amenmesse, control each settlement adjacent to the Nile.); Seizure Through Stealth (Playing as Irsu, raze 5 Cult Centres.); All Property is Theft (Playing as Irsu, raze 20 Outposts.); The Crysophilist (Playing as Irsu, have 20,000 gold in your treasury.); Tarhunna? TarhunNAH, More Like... (Playing as Kurunta, defeat or take control of Suppiuliuma's lands.); I am the Deer King! (Playing as Kurunta, become the Hittite king and take control of the entire Hittite court.); Billy No Mates (Playing as Kurunta, have bad diplomatic relations with all Hittite factions.); The Two Powerful Ones (Playing as Ramesses, acquire and equip him with the Pschent Crown.); Reverse the Tide (Playing as Ramesses, destroy 8 Sea Peoples armies.); The Great Ancestor (Playing as Ramesses, partake in the first Legitimacy War and become Pharaoh.); Manifest Death (Playing as Seti, eliminate Amenmesse.); Burn the World (Playing as Seti, be at war with all major Egyptian factions.); The Future is Now (Playing as Seti, partake in the first Legitimacy War and become Pharaoh.); Onwards & Upwards (Playing as Suppiluliuma, have 8 provinces with growth beyond 70.); Internal Intrigues (Playing as Suppiluliuma, become Great King and use Forced Annexation on Kurunta's faction.); Revenge, Served Sweet & Cold (Playing as Suppiluliuma, eliminate Kurunta in the first 25 turns.); Who is the Little One? A Pet Perhaps? (Playing as Tausret, vassalise Seti's faction.); A Man's World (Playing as Tausret, complete 10 court actions.); For the Public Good (Playing as Tausret, become Pharaoh and use Corvee Labour to develop a settlement.); Lovers in Arms (Playing as Tausret and Seti, win a multiplayer co-op game.); All Hope in Eclipse (Complete a campaign with Pillars of Civilisation in Collapse.); Universal Balance (Complete a campaign with Pillars of Civilisation in Prosperity.); Isfet Rising (Complete a campaign with Pillars of Civilisation in Crisis.); Fortune Favours the Bold (Complete 20 ambitions during a single campaign.); Fury & Flames (Set fire to 350 buildings during a battle.); Kemetian Adventurer (Discover all Egyptian realms on the campaign map.)."
            ]
        },
        {
            "heading": "The Sea Peoples Update",
            "body": [
                "The Sea Peoples content: an Ultimate Victory as Iolaos and Walwetes, capturing a settlement as a horde, the Philistia conquest, the Sea Peoples coalition and nomad-tower feats, razing 25 and 50 settlements, surviving 20 turns in Collapse, the Path of the Sea Peoples (Tribal Unity, Tribal Excellence) and Path of the Marauders (Display of Power, Domination, Promise of Glory, Raze & Exterminate) mechanic feats, and worshipping all Sherden and all Peleset gods.",
                "The achievements here: Two Souls United (Playing as Iolaos, achieve a Total War Ultimate Victory.); Total Peleset (Playing as Walwetes, achieve a Total War Ultimate Victory.); Conqueror & Settler (Playing as Iolaos or Walwetes, capture a settlement.); Father of the Peleset (Playing as Walwetes, conquer Yapo, Megiddo, Ashkelon and Urushalim.); Leader of the Sea Peoples (Playing as Iolaos or Walwetes, enter in Military Alliance with all other Sea Peoples factions.); Sea Squatter (Playing as Iolaos or Walwetes, build a Nuraghe Tower or Peleset Village in each Outpost slot in a province not owned by you.); The Divine Firestarter (Playing as Iolaos or Walwetes, raze 50 settlements.); I Will Be Your Villain (Playing as Iolaos or Walwetes, raze 25 settlements.); I Love the Smell of Collapse in the Morning! (Playing as Iolaos or Walwetes, survive 20 turns with the civilization in Collapse.); Tribal Unity (Having chosen Path of the Sea Peoples, keep your faction for 25 turns in one of the 4 innermost positions on the Blades and Dwelling scales.); Tribal Excellence (Having chosen Path of the Sea Peoples, keep your faction for 20 turns in one of the 4 outermost positions on the Blades and Dwelling scales.); Spoiled by War (Playing as Iolaos or Walwetes, receive 10 War Spoils rewards for razing a settlement.); I Come in Peace (Playing as Iolaos or Walwetes, sign 5 peace treaties with non-Sea Peoples factions.); To the Sea We Shall Return (Playing as Iolaos or Walwetes, lose all your occupied regions while still having a Horde.); Look Upon Me and Despair! (Having chosen Path of the Marauders, use Display of Power 3 times.); Lord of Fear (Having chosen Path of the Marauders, use Domination 3 times.); Join the Dark Side! (Having chosen Path of the Marauders, use Promise of Glory 3 times.); ...but the Women and Children Too! (Having chosen Path of the Marauders, use Raze & Exterminate 3 times.); The Light, the Dark & the Blood Between (Playing as Iolaos, worship all Sherden gods and reach their highest tier.); They Came from the Sea (Playing as Walwetes, worship all Peleset gods and reach their highest tier.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play a full campaign as Ramesses (the most beginner-friendly leader), aiming for his Ultimate Victory and doing his leader-specific feats (the Pschent Crown, destroying Sea Peoples armies, the first Legitimacy War).",
                "2. Play a campaign for each remaining base-game leader, pursuing that leader's Ultimate Victory and feats in the same run.",
                "3. Do the Ancient Legacy achievements - pick the relevant legacy at campaign start and complete its goal.",
                "4. Do the Pillars of Civilisation end-state achievements (Collapse, Prosperity, Crisis) by steering the shared civilisation meters over the course of three campaigns.",
                "5. Play the Sea Peoples horde campaigns as Iolaos and Walwetes, working through the Path of the Sea Peoples and Path of the Marauders feats and the god-worship achievements.",
                "Tip: several leader feats have turn limits (\"eliminate Kurunta in the first 25 turns\") - for those, rush a single-minded early war with your starting stack plus one hired mercenary army rather than developing your economy, then settle into a normal campaign for that leader's Ultimate Victory afterward."
            ]
        }
    ]
};
