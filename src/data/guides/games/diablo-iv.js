// Diablo IV Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/diablo-iv.json), whose 45 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   2344520 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "diablo-iv-achievement-guide",
    "category": "game",
    "gameSlug": "diablo-iv",
    "icon": "💀",
    "title": "Diablo IV Achievement Guide",
    "summary": "A practical guide to all 45 Steam achievements in Diablo IV - none are hidden. Covers the campaigns and exploration, the class and combat feats, and the endgame grind and collections. None of the achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Diablo IV has 45 Steam achievements and none are hidden. The set spans three campaigns - the base game, Vessel of Hatred and Lord of Hatred - plus exploring every region (Estuar, Nahantu, Skovos), the monster-family slayer achievements (666 kills of bandits, demons, vampires, undead, snakes and more), and every class's signature kill feat. The rest is the endgame: Level 50 and Level 50 Hardcore, Paragon 200 and 300, Torment-tier Elite culls, Nightmare Dungeons, the Dark Citadel, Kurast Undercity, the Echo of Lilith, World Bosses, and gear systems like tempering, Transfigured gear, Charm Sets and War Plans.",
                "The catalog marks it difficulty 4 and a long grind. Paragon 300, 1,000 Elites on Torment XII and the Hardcore Level 50 are the real time sinks; nothing here is a precision-skill wall.",
                "Tip: play all three campaigns first for the story and exploration achievements, then settle into seasonal endgame - Helltides, Nightmare Dungeons and Torment pushes cover most of the remaining list."
            ]
        },
        {
            "heading": "Campaigns, Exploration & Slayers",
            "body": [
                "Completing the base campaign, exploring all of Estuar, reaching Level 50 and Level 50 Hardcore, Paragon 200, the monster-family slayer achievements (666 kills of bandits/cultists, demons/Fallen, Drowned/Vampires, Ghosts/Skeletons), the Barbarian, Druid and Necromancer class feats, collecting Helltide cinders, and crafting an Elixir and an Incense.",
                "The achievements here: Tortured Souls (Kill 666 Bandits, Cultists, or Knights.); Hammer Down (Kill 50 enemies while Berserking as a Barbarian.); Emancipation (Complete the campaign.); Curious Collector (Imprint 10 items at the Occultist with an Aspect from the Codex of Power.); Convenient Crafts (Craft any Elixir and any Incense.); Legion Killer (Kill 666 Demons, Fallen, or Goatmen.); Turned (Kill 666 Drowned, Vampires, or Werewolves.); Shifty Swipes (Kill 50 enemies in Werebear form and 50 enemies in Werewolf form as a Druid. ); Estuar Sightseer (Explore all of Estuar.); Undead Undone (Kill 666 Ghosts, Skeletons, or Zombies.); Turning the Tides (Collect 1000 Aberrant Cinder in Helltide zones. ); Dedicated Protector (Reach Level 50 with any character. ); True Perseverance (Reach Level 50 with a Hardcore character.); Devoted Protector (Reach Paragon Level 200 with any character. ); Army of Bones (Summon 100 Skeleton Mages or Warriors as a Necromancer.)."
            ]
        },
        {
            "heading": "Bosses, Classes & Expansions",
            "body": [
                "A Nightmare Dungeon on Torment 2+, 1,000 Healing Potion uses, 5 PvP kills, the Rogue and Sorcerer kill feats, defeating the Echo of Lilith and any World Boss, tempering gear, Caches of Chaos from the Tree of Whispers, the Vessel of Hatred campaign and the Rise of the Khazra Dark Citadel, exploring Nahantu, and levelling all Mercenaries.",
                "The achievements here: Living Nightmares (Complete a Nightmare Dungeon in Torment 2 or higher.); First Aid (Use your Healing Potion 1,000 times. ); Master Combatant (Get 5 PvP kills.); In and Out (Kill 50 enemies in melee range and 50 enemies out of melee range as a Rogue.); Exterminator (Kill 666 Snakes or Spiders.); Master of the Elements (Kill 100 enemies with Fire, Frost, or Lightning damage as a Sorcerer.); End of the First Mother (Defeat the Echo of Lilith.); Potent Alterations (Temper a piece of Armor, Jewelry, and a Weapon.); Chaotic Whispers (Acquire 10 Caches of Chaos from the Tree of Whispers.); Worldly Slayer (Kill any World Boss.); Hatred Subdued (Complete the Vessel of Hatred campaign.); Bane of the Khazra (Complete the Rise of the Khazra Dark Citadel.); Nahantu Sightseer (Explore all of Nahantu.); Infernal Jungle (Collect 10,000 Aberrant Cinders in Nahantu Helltides.); Hireling Commander (Reach level 10 with all Mercenaries.)."
            ]
        },
        {
            "heading": "Endgame Grind & Collections",
            "body": [
                "Paragon 300, the Spiritborn ultimate feat, 1,000 Elites on Torment IV and Torment XII, 25 Kurast Undercity runs, exploring Skovos, the Lord of Hatred campaign, 1,000 kills in the Echoing Hatred, fishing every fish in a region, a Charm Set's 5-piece bonus, Transfigured gear in every slot, and 10 War Plans.",
                "The achievements here: Wildland Warrior (Kill 666 Dregs, Lacuni, or Hollows.); Devout Champion (Reach Paragon 300 with any character.); Spirited Sparring (Kill 500 enemies with Ultimate Skills as a Spiritborn.); Tormented Massacre (Defeat 1000 Elites on Torment IV.); Kurast Cleanser (Complete 25 runs of the Kurast Undercity.); Tormented Slaughter (Kill 1000 Elites in Torment XII.); Skovos Sojourner (Explore all of Skovos.); Echoing Elites (Kill 1000 Bosses/Elites in the Echoing Hatred.); Demonic Dispute (Kill 100 enemies with your Demonology skills.); Hatred Banished (Complete the Lord of Hatred campaign.); Adept Angler (Collect all the fish in one region.); Skovos Slayer (Kill 666 Golems, Merfolk, or Morlu.); Wholly Horadric (Activate a Charm Set's 5-piece bonus.); Effective Equipment (Equip a piece of Transfigured gear in every slot.); Prepared to Fight (Complete 10 War Plans.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the base campaign, then Vessel of Hatred and Lord of Hatred, exploring each region fully as you go.",
                "2. Level a character to 50, then start pushing Paragon and Torment tiers.",
                "3. Knock out the class feats - some need a specific class, so an alt or a respec run helps.",
                "4. Grind the slayer achievements (666 kills per monster family) during Helltides and Nightmare Dungeons.",
                "5. Finish the endgame systems: Dark Citadel, Kurast Undercity, Echo of Lilith, tempering, Transfigured gear, Charm Sets and War Plans.",
                "Tip: the 666-kill slayer achievements all tick down naturally during Helltides and Nightmare Dungeons - just rotate the zones you farm so every monster family gets covered rather than farming one spot."
            ]
        }
    ]
};
