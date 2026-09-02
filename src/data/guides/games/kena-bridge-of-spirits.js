// Kena: Bridge of Spirits Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/kena-bridge-of-spirits.json), whose 41 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1954200 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 16 achievement(s) are Steam-hidden or ship no Steam
//   description; their description here is researched from community
//   100% guides and is a curatorial summary. Every other description is
//   Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "kena-bridge-of-spirits-achievement-guide",
    "category": "game",
    "gameSlug": "kena-bridge-of-spirits",
    "icon": "🌿",
    "title": "Kena: Bridge of Spirits Achievement Guide",
    "summary": "A practical guide to all 41 Steam achievements in Kena: Bridge of Spirits (16 hidden). The hidden achievements are the three ability unlocks, the nine memory relics tied to the spirits Taro, Adira and Toshi, and the four boss fights - all described spoiler-free. The rest - area discoveries, combat challenges, collectible sweeps and the Master-difficulty clear - carry Steam's own text.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Kena: Bridge of Spirits has 41 Steam achievements, 16 of them hidden. Kena is a spirit guide who helps trapped souls move on while gathering the Rot, small black creatures who fight and build alongside her. The visible achievements cover discovering each area, ten specific combat challenges, the collectible sweeps (all Rot, 50 Rot Hats, every Cursed Chest, every ability upgrade, every Flower Shrine, every Meditation Spot, all Spirit Mail), Photo Mode, and beating the game on Master difficulty.",
                "The 16 hidden achievements are the three ability unlocks (Bow, Bomb, Dash), the nine memory relics tied to the corrupted spirits Taro, Adira and Toshi, and the four boss fights. They are described here spoiler-free.",
                "The catalog marks it difficulty 3 and single-playthrough. Nothing is permanently missable - the world reopens after the credits for collectible cleanup - but the combat challenges and the Master-difficulty run are real skill checks."
            ]
        },
        {
            "heading": "Abilities & Discovery",
            "body": [
                "The three ability unlocks, meeting the Rot, and reaching each of the game's four main areas.",
                "The achievements here: Hunter in the Forest (Unlock the Spirit Bow, gained partway through the Forest area; it powers many later combat challenges.); Harness Your Power (Unlock the Rot Bomb ability, which lets the Rot lob explosives to detonate objects and stagger heavy enemies.); Crossing Over (Unlock the Dash ability, Kena's forward dodge used for both traversal and combat.); Found a Friend (Find the first Rot.); Haikyo (Discover the Village.); Into the Woods (Discover the Forest.); The Open Range (Discover the Farm.); The Lonely Path (Reach the Mountain Shrine.)."
            ]
        },
        {
            "heading": "Spirits' Relics",
            "body": [
                "Nine memory relics - three each for Taro, Adira and Toshi - collected as you work through their questlines. Each pair of Love / Fear / Regret relics fills in that spirit's story.",
                "The achievements here: Taro's Fear (Collect the relic Taro's Knife, found along Taro's questline in the Forgotten Forest.); Taro's Regret (Collect the relic Taro's Lantern, earned after the Corrupt Taro boss fight.); Taro's Love (Collect Taro's food-offering relic, the last of the three memories tied to the lost boy Taro.); Adira's Love (Collect the Ox relic tied to the Woodsmith Adira's memories.); Adira's Fear (Collect Adira's Hammer relic, found along the Woodsmith's questline.); Adira's Regret (Collect the Village Heart relic, the third of Adira's three memories.); Toshi's Love (Collect the Village Crest relic tied to the village leader Toshi's memories.); Toshi's Fear (Collect Toshi's Incense relic, found on his questline near the Mountain Shrine.); Toshi's Regret (Collect Toshi's Harpoon relic, the last of his three memories.)."
            ]
        },
        {
            "heading": "Boss Fights",
            "body": [
                "The three corrupted-spirit bosses and the finale, all described spoiler-free.",
                "The achievements here: Spirit Guide (Defeat Corrupt Taro and free his spirit - the game's first major boss, described here spoiler-free.); A Heavy Hammer (Defeat the Corrupt Woodsmith boss and free Adira's spirit, described here spoiler-free.); A Leader Walks Alone (Defeat the Corrupt Toshi boss, described here spoiler-free.); Restore Balance (Defeat the final boss and restore balance to the mountain - the end of the story, described here spoiler-free.)."
            ]
        },
        {
            "heading": "Combat Challenges",
            "body": [
                "Ten specific combat feats - most need the Bow, Bomb or Parry, so save these for once your kit is complete. They can be farmed at any enemy camp.",
                "The achievements here: Piercing Blow (Hit 3 Enemies with a single Rot Infused Arrow.); Weigh Them Down (Destroy a Moth enemy with a Bomb.); Quick Draw (Hit 3 critical hit spots in 3 seconds.); Bow Master (Hit 3 enemies with a single Multi-shot.); Sharpshooter (Destroy an enemy by shooting a Bomb out of the air.); Between the Eyes (Destroy a Shield Sticks without breaking its shield.); Return to Sender (Destroy a Mage with its own bomb.); Triple Threat (Destroy 3 enemies with a single Parry.); Rot Commander (Use 5 Rot Actions in a single combat.); Triple Tap (Destroy 3 enemies with a single dash attack.)."
            ]
        },
        {
            "heading": "Collectibles & Completion",
            "body": [
                "The full collectible sweeps, Photo Mode, and the Master-difficulty clear.",
                "The achievements here: No Stone Unturned (Find all of the Rot.); Hat Collector (Collect 50 Rot Hats.); Curse Collector (Open all Cursed Chests.); Skillful Spirit Guide (Unlock all ability upgrades.); Good as New (Restore a Flower Shrine.); Restoration Master (Restore all of the Flower Shrines.); Zen Master (Meditate at all Meditation Spots.); The Last Stop (Deliver all Spirit Mail.); Say Cheese (Capture a picture in Photo Mode.); Master Spirit Guide (Beat the game on Master difficulty.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the story straight through - the ability unlocks, relics and all four boss achievements come on the way.",
                "2. Pick up Rot, Rot Hats, Cursed Chests, Flower Shrines, Meditation Spots and Spirit Mail as you pass them; the map tracks what each area still holds.",
                "3. After the credits, use the map's area completion percentages to clean up any missed collectibles for No Stone Unturned, Hat Collector, Curse Collector, Restoration Master, Zen Master and The Last Stop.",
                "4. Farm the ten combat challenges at any enemy camp once you have the full ability set.",
                "5. Start a Master-difficulty run for Master Spirit Guide - enemies hit far harder and the bosses gain new patterns.",
                "Tip: many combat challenges (Bow Master, Return to Sender, Triple Threat) want several enemies grouped up - pull a whole camp together and use the tall-grass stealth opener to line them up before you start the combo."
            ]
        }
    ]
};
