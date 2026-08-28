// DOOM Eternal Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/doom-eternal.json), whose 50 achievements
//   were sourced directly from Steam's own achievement schema for appid
//   782330 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js). 34 of 50 ship a real,
//   official Steam description, quoted verbatim below.
// - The 16 hidden achievements ship no Steam description; their
//   conditions here are curatorial, cross-checked against PowerPyx,
//   GameFAQs and the Doom Wiki, and kept spoiler-light (boss names,
//   mission-completion markers and collection rules only).
export const GUIDE = {
    "slug": "doom-eternal-achievement-guide",
    "category": "game",
    "gameSlug": "doom-eternal",
    "icon": "👹",
    "title": "DOOM Eternal Achievement Guide",
    "summary": "A practical guide to all 50 Steam achievements in DOOM Eternal - the campaign and boss markers, the upgrade and collectible completions, the Slayer Gate and cheat/Extra-Life mode achievements, BATTLEMODE, and the two Ancient Gods expansions plus Horde Mode. 16 achievements are hidden and covered with spoiler-light conditions.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "DOOM Eternal has 50 Steam achievements, 16 of them hidden. The base campaign and its collectibles are most of the list; on top of that sit a BATTLEMODE (PvP) block, the two Ancient Gods single-player expansions, and Horde Mode from a later update.",
                "Nothing is permanently missable - Mission Select lets you revisit any mission for its collectibles, Slayer Gates, Secret Encounters and 100% clear - but many completion achievements are tied to a single save slot, so it is cleanest to do the whole game on one file. The hardest are Master all Weapon Mods, all Slayer Gates, all Sentinel Crystals, and defeating the Dark Lord in Ancient Gods Part Two.",
                "Tip: play the base campaign on one save slot, collecting everything and doing each Slayer Gate as you find it, then use Mission Select to finish the collection and challenge achievements. Do BATTLEMODE against bots or in a private lobby for that block, then play the two Ancient Gods parts and Horde Mode."
            ]
        },
        {
            "heading": "Campaign & Bosses",
            "body": [
                "The story markers and boss kills: completing the campaign (The Once and Future Slayer), the mission-completion and boss achievements (Hell on Earth, the Doom Hunters, the Mars core, the Gladiator, the Crucible, the Khan Maykr, the Icon of Sin) and killing 666 demons (It's a Magic Number).",
                "The achievements here: Doomsday (Complete the first campaign mission (Hell on Earth).); The Hunters Became the Hunted (Defeat the Doom Hunters (the Doom Hunter Base mission).); Interplanetary Fracking (Complete the mission that ends at the Mars core.); Thumbs Down (Defeat the Gladiator boss.); Reforged and Refueled (Acquire the reforged Crucible (the Taras Nabad mission).); Nontraditionalist (Defeat the Khan Maykr.); Iconoclast (Defeat the final boss, the Icon of Sin.); The Once and Future Slayer (Complete the Campaign on any difficulty); It's a Magic Number (Kill 666 Demons (excluding Player Demons and Wolves))."
            ]
        },
        {
            "heading": "Upgrades & Collectibles",
            "body": [
                "The single-slot completion set: upgrading and maxing Health/Armor/Ammo (Crystal Craving, King of the Crystals), the Praetor Suit Perks (This One's my Favorite, They're ALL My Favorite), Sentinel Batteries (Homemaykr), 20 Extra Lives, the cheat-code, album, toy and Codex collections, mastering all Weapon Mods (Gunpletionist), 33 unique Glory Kills, the Unmaykr, and every Sentinel Crystal.",
                "The achievements here: Treasure Hunter (Reach 100% completion on a single campaign mission.); Crystal Craving (Upgrade Health, Armor, or Ammo); King of the Crystals (Fully upgrade Health, Armor, or Ammo in a single save slot); This One's my Favorite (Complete a Praetor Suit Perk category in a single save slot); They're ALL My Favorite (Purchase all Praetor Suit Perks in a single save slot); Homemaykr (Spend 8 Sentinel Batteries in the Fortress of Doom in a single save slot); Extra Extra Lives (Pick up 20 Extra Lives Total in a single save slot); Reforged the Genie Lamp (Complete the cheat code collection in a single save slot); Metal Head (Complete the album collection in a single save slot); Playset Sold Separately (Complete the toy collection in a single save slot); If Only I Could Read… (Collect all physical Codex pages in a single save slot); Gunpletionist (Master all Weapon Mods in a single save slot); Meet Your Unmaykr (Obtain all six Empyrean Keys from the Slayer Gates and use them in the Fortress of Doom.); Darn It, They Keep BREAKING (Perform 33 Unique Glory Kills in a single save slot); Crystal Spelunker (Collect every Sentinel Crystal in the campaign.)."
            ]
        },
        {
            "heading": "Slayer Gates, Cheats & Extra-Life Modes",
            "body": [
                "Completing a Slayer Gate and all of them (Bonus Stage, Breaker of Gates, Cross the Threshold), and the modifier-run achievements: a mission with only the Famine cheat, and Extra Life Mode completions with a stocked inventory.",
                "The achievements here: Master of Fasting (Complete a Mission with only the Famine Mode cheat on); Running Up the High Score (Complete Extra Life Mode with 10 Extra Lives in your Inventory); Bonus Stage (Complete a Slayer Gate); Breaker of Gates (Complete all Slayer Gates in a single save slot); Cross the Threshold (Complete every Slayer Gate.)."
            ]
        },
        {
            "heading": "BATTLEMODE",
            "body": [
                "The PvP block: playing as 5 different Player Demons, 5,000 damage as a demon, 200 opponent kills, 25 matches, a kill with each of the 8 Slayer weapons, and healing 50,000 health.",
                "The achievements here: Mix and Match (Play as 5 different Player Demons in BATTLEMODE); Fight Like Hell (Do 5000 damage as a Player Demon in BATTLEMODE); Blood Bath (Kill 200 opponents in BATTLEMODE); Man vs Monsters (Play 25 BATTLEMODE matches); Weapons Expert (Kill a Player Demon with each of the 8 Slayer weapons in BATTLEMODE); Truce between Demons (Heal yourself or your teammate for 50000 health in BATTLEMODE)."
            ]
        },
        {
            "heading": "The Ancient Gods Part One",
            "body": [
                "The first expansion: its mission and boss markers (the UAC Atlantica Facility, the Life Sphere in the Blood Swamps, Samur in the Holt), the Extra Life Mode completion, all Support Runes, all Secret Encounters (Hypersonic) and its Codex pages.",
                "The achievements here: Torrential Pain (The Ancient Gods Part One: complete the UAC Atlantica Facility mission.); To Take a Life Sphere (The Ancient Gods Part One: destroy the Life Sphere in the Blood Swamps.); Regime Change (The Ancient Gods Part One: defeat Samur in the Holt.); 1-Upsmanship (Complete Extra Life Mode with 5 Extra Lives in your Inventory (Ancient Gods 1)); Lucky Charm Bracelet (Acquire all Support Runes in a single save slot (Ancient Gods 1)); Hypersonic (Complete all Secret Encounters in a single save slot (Ancient Gods 1)); Required Reading (Collect all physical Codex pages in a single save slot (Ancient Gods 1))."
            ]
        },
        {
            "heading": "The Ancient Gods Part Two & Horde Mode",
            "body": [
                "The second expansion (all Sentinel Hammer upgrades, an Extra Life Mode completion, its Codex pages, completing Immora, defeating the Dark Lord) and the Horde Mode achievements from a later update (the first mission, re-collecting the Weapon Wheel, beating Horde Mode).",
                "The achievements here: Siege the Day (The Ancient Gods Part Two: complete the Immora mission.); Tougher Than Nails (Acquire all Sentinel Hammer upgrades (Ancient Gods 2)); Rest Your Weary Fists (The Ancient Gods Part Two: defeat the final boss, the Dark Lord.); Live Die Reload (Complete Extra Life Mode with 5 Extra Lives in your Inventory (Ancient Gods 2)); Critical Literature (Collect all physical Codex pages in a single save slot (Ancient Gods 2)); Let's Play (Complete the first Horde Mode Mission); Reinvent the Weapon Wheel (Re-collect all of the weapons on the Weapon Wheel); Game Over (Beat Horde Mode)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the base campaign start to finish on one save slot, collecting every item and doing each Slayer Gate and 100%-ing at least one mission (Treasure Hunter) as you go.",
                "2. Mission Select to finish the collectibles, all Slayer Gates (Cross the Threshold) and all Sentinel Crystals (Crystal Spelunker), then master the remaining Weapon Mods.",
                "3. Do the Fortress of Doom achievements (Homemaykr, the Unmaykr once you have six Empyrean Keys) and the Extra Life / Famine modifier runs.",
                "4. Do BATTLEMODE against bots or in a private lobby for its six achievements.",
                "5. Play The Ancient Gods Part One, then Part Two (finishing on the Dark Lord), then Horde Mode.",
                "Tip: the single-save-slot completion achievements will not merge progress across files - if you have been playing on more than one slot, pick one and use Mission Select to redo whatever it is missing rather than starting over."
            ]
        }
    ]
};
