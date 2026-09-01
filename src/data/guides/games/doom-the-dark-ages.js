// DOOM: The Dark Ages Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/doom-the-dark-ages.json), whose 38 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   3017860 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 14 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (TrueAchievements / Steam Community / game wikis) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "doom-the-dark-ages-achievement-guide",
    "category": "game",
    "gameSlug": "doom-the-dark-ages",
    "icon": "🛡",
    "title": "DOOM: The Dark Ages Achievement Guide",
    "summary": "A practical guide to all 38 Steam achievements in DOOM: The Dark Ages (14 hidden). Covers all of the campaign's chapters and champion-demon kills, weapon and shield-rune mastery, and the Revelations bonus campaign. Fourteen of the achievements are hidden and their unlock conditions are researched from community 100% guides.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "DOOM: The Dark Ages has 38 Steam achievements and 14 are hidden. About fourteen are hidden chapter-completion and boss-kill markers, from the Village of Khalim through to the ending, plus specific champion-demon kills and early shield-rune and weapon pickups. The rest are visible completion achievements - weapon and shield-rune mastery, all Mastery Challenges, all Mission Challenges, all collectible demon toys and Codex Lore pages, the Chain Spear and Relic upgrades, the '93 Shotgun, and the Revelations bonus campaign.",
                "The catalog marks it difficulty 3. Nothing here is missable - chapter select lets you go back for any collectible or challenge - so it's a completion checklist rather than a test of skill, though the final boss and the full Mastery Challenge set take real effort.",
                "Tip: play through the campaign on any difficulty for the chapter and boss achievements, then use chapter select afterward to mop up weapon mastery, collectibles and challenges."
            ]
        },
        {
            "heading": "Campaign & Champion Kills",
            "body": [
                "The campaign's chapter completions - Village of Khalim, Barrier Core, The Holy City of Aratum, Spire of Nerathul, Harbor of Souls and Resurrection - the final boss fight against The Old One and the Enhanced Ahzrak, completing the campaign overall, and the Vagary, Agaddon Hunter and Komodo champion-demon kills.",
                "The achievements here: A Dark Beginning (Complete the campaign chapter 'Village of Khalim'.); Supersized Brawl (Complete the campaign chapter 'Barrier Core'.); Bringing the House Down (Complete the campaign chapter 'The Holy City of Aratum'.); Jailbreak (Complete the campaign chapter 'Spire of Nerathul'.); Too Angry to Die (Complete the campaign chapter 'Harbor of Souls'.); Argent Return (Complete the campaign chapter 'Resurrection'.); The Only Thing They Fear (Defeat The Old One and the Enhanced Ahzrak in the campaign's final boss fight.); Game Complete (Complete the campaign on any difficulty.); Vagary Down! (Defeat the Vagary Champion at the end of the 'Sentinel Barracks' chapter.); Agaddon Champion Down! (Defeat the Agaddon Hunter at the end of the 'Abyssal Forest' chapter.); Komodo Champion Down! (Defeat the Komodo demon boss during the 'Spire of Nerathul' chapter.)."
            ]
        },
        {
            "heading": "Weapons, Shields & Upgrades",
            "body": [
                "Weapon upgrades and Mastery Challenges for one weapon and for all of them, the Ballistic Force Crossbow pickup, shield upgrades and your first Shield Rune, a fully upgraded Shield Rune, melee weapon upgrades, all Shield Base/Rune/Melee upgrades together, Demonic Essence ammo, armor and Health upgrades individually and all together, and all Mission Challenges in the campaign.",
                "The achievements here: Upgraded (Acquire your first weapon upgrade.); Fully Loaded (Complete the Mastery Challenge for a single weapon.); Gunpletionist (Complete the Mastery Challenge for all weapons.); Gimme That (Pick up the Ballistic Force Crossbow during the 'Spire of Nerathul' chapter.); Shield Adept (Acquire all shield upgrades under the base category.); Ancestral Blessing (Acquire your first Shield Rune (the Ground Fissure rune) at the end of the 'Ancestral Forge' chapter.); Powerful Investment (Fully upgrade every upgrade for a single Shield Rune, using materials from Sentinel Shrines.); Melee Expert (Acquire all melee weapon upgrades.); Berserker (Acquire all Shield Base, Shield Rune, and Melee Weapon upgrades.); Essential Upgrade (Acquire your first Demonic Essence upgrade.); Essential Ammo (Acquire all Demonic Essence ammo upgrades.); Essential Armor (Acquire all Demonic Essence armor upgrades.); Essential Health (Acquire all Demonic Essence Health upgrades.); Essentially Unstoppable (Acquire all Demonic Essence upgrades.); Challenge Completed (Complete all Mission Challenges in the campaign.)."
            ]
        },
        {
            "heading": "Collectibles, Chain Spear & Revelations",
            "body": [
                "All collectible demon toys and Codex Lore pages, the Revelations bonus campaign, the Praetor Suit and Chain Spear pickups, a fully upgraded Chain Spear ability and all Chain Spear upgrades together, reassembling a single Relic and all Relics, a Ritual of Power, the '93 Shotgun, and defeating Xal'Goroth the Imprisoned.",
                "The achievements here: Toy Collector (Acquire all Collectible demon toys.); Lore Nerd (Acquire all Codex Lore pages.); Revelations Complete (Complete the Revelations Campaign.); Hellwalker (Acquire the Praetor Suit.); Time to Hunt (Acquire the Chain Spear.); Spear Adept (Acquire all upgrades for a single Chain Spear ability.); Spear Mastery (Acquire all Chain Spear upgrades in a single save slot.); Some Assembly Required (Completely reassemble a five-piece Relic.); Archeologist (Completely reassemble all Relics in a single save slot.); Time is Money (Complete a Ritual of Power.); Hello, Old Friend (Acquire the '93 Shotgun.); Xal’Goroth Defeated (Defeat Xal’Goroth the Imprisoned.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through the campaign on any difficulty for the chapter-completion and champion-kill achievements, and the ending.",
                "2. Along the way, pick up the Chain Spear, the Praetor Suit and the Ballistic Force Crossbow, and start upgrading weapons and shield runes.",
                "3. Use chapter select afterward to finish any weapon's Mastery Challenge, all Demonic Essence upgrades, and all Mission Challenges.",
                "4. Track down every collectible demon toy and Codex Lore page, and reassemble every Relic.",
                "5. Play the Revelations bonus campaign for its own completion achievement, and take on Xal'Goroth for the final one.",
                "Tip: nothing is missable thanks to chapter select, so play for the story first and clean up mastery/collectibles afterward."
            ]
        }
    ]
};
