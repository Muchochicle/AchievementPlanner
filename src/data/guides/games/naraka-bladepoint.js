// NARAKA: BLADEPOINT Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/naraka-bladepoint.json), whose 40
//   achievements were sourced directly from Steam's own achievement
//   schema for appid 1203220 via ISteamUserStats/GetSchemaForGame
//   (fetched through this app's own backend/services/steamApi.js). None
//   are hidden; every one ships a real, official Steam description,
//   quoted verbatim below. The apiname strings are Chinese-character
//   internal IDs, preserved byte-for-byte.
// - Sections group by what each achievement needs: getting started and
//   modes, combat and weapon feats, Undying Glory and match ranking,
//   Souljades and statue fortune, and the per-map and survival
//   challenges.
export const GUIDE = {
    "slug": "naraka-bladepoint-achievement-guide",
    "category": "game",
    "gameSlug": "naraka-bladepoint",
    "icon": "🗡️",
    "title": "NARAKA: BLADEPOINT Achievement Guide",
    "summary": "A practical guide to all 40 Steam achievements in NARAKA: BLADEPOINT - none are hidden. The getting-started and mode achievements, the combat and weapon feats, the Undying Glory and match-ranking goals, the Souljade and statue-fortune achievements, and the per-map \"defeat 5 enemies\" and survival challenges.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "NARAKA: BLADEPOINT has 40 Steam achievements and none are hidden. Most are lifetime or single-match feats in the battle-royale mode - land kills a certain way, deal 5,000 damage with a weapon, defeat 5 enemies in a named area, or reach a cumulative total.",
                "Nothing is missable - the counters accumulate across matches - but a few are grindy (20 Heroic Tales quests, Undying Glory 20 times, a weapon to Lv. 25, a hero's Cultivation to The Chosen One) and depend on how much you play.",
                "Tip: play in a squad and rotate through the named landing zones (Celestra, Shadowjade Mine, Sunwing's Rest, Shipwreck Expanse, Eventide Temple) so the per-area \"defeat 5 enemies\" achievements come naturally, while the weapon-damage and weapon-level achievements build up from just fighting."
            ]
        },
        {
            "heading": "Getting Started & Modes",
            "body": [
                "The early achievements: playing The Survival, getting a first kill, completing Heroic Tales quests, raising a hero's Cultivation, obtaining legendary gear and opening a Stash.",
                "The achievements here: Jack of All Trades (Complete 20 Heroic Tales quests.); As Fate Wills (Raise a hero's Cultivation to 'The Chosen One'.); First Blood (Get the first kill.); And So It Begins (Play a game of The Survival.); A Legend is Born (Obtain a piece of legendary-quality gear.); What Lies Within (Open a Stash.)."
            ]
        },
        {
            "heading": "Combat Feats & Weapons",
            "body": [
                "The fighting achievements: melee and ranged weapon levels, counters and multi-kills in 60 seconds, kills with the waterwheel, a Moonbane Charm, a Ballista and your bare fists, a 50m ranged kill, a Focus Slide knock-up, equipping three Souljades for one weapon, and dealing 5,000 damage with Bloodrippers, Flamebringers and Swarms.",
                "The achievements here: Close Combat (Raise a melee weapon to Lv. 25.); Accuracy Assured (Raise a ranged weapon to Lv. 25.); Unbreakable (Perform 2 Counters in 60 seconds.); Bloodthirsty (Defeat 3 enemies in 60 seconds.); Mortal Coil (Defeat an enemy with the waterwheel.); Focused Momentum (Equip the Focus Slide Souljade and use its effects to knock an enemy airborne.); Ancient Wrath (Defeat an enemy with a Moonbane Charm.); Super Weaponry (Defeat an enemy with a Ballista.); Brawler (Defeat an enemy with your bare fists.); Sixth Sense (Defeat an enemy from over 50m away.); Spirit Spikes (Deal 5,000 damage with Bloodrippers.); Drunken Fire (Deal 5,000 damage with Flamebringers.); Yi's Instrument (Deal 5,000 damage with Swarms.)."
            ]
        },
        {
            "heading": "Undying Glory & Match Ranking",
            "body": [
                "Attaining Undying Glory (once and 20 times), unlocking eight achievements in one match, the Perfect Aim / Sure Shot chain, and becoming the Kill Leader.",
                "The achievements here: Apogee (Attain 'Undying Glory' 20 times.); Spoils of War (Unlock 8 achievements in a single match.); Sure Shot (Unlock Perfect Aim achievement in 3 matches.); Mask of Immortality (Attain 'Undying Glory'.); Fearful Aura (Become the Kill Leader (the player with the most kills in the game so far).)."
            ]
        },
        {
            "heading": "Souljades & Fortune",
            "body": [
                "The Souljade and statue achievements: praying at a Stash statue, feeling another player's prayer effect, obtaining a Gold Souljade, equipping three Gold Souljades at once, and having 10 types of largos... (equipping three different Souljades for a single weapon).",
                "The achievements here: Give Thanks (Pray to a statue in a Stash.); Mighty Mortal (Equip 3 Gold Souljades at once.); Augmented Arms (Equip 3 different Souljades for a single weapon at once.); Luster (Obtain a Gold Souljade.); Fickle Fortune (Feel the effects of a statue another player's prayed to.)."
            ]
        },
        {
            "heading": "Zone Domination & Survival",
            "body": [
                "The single-match challenges: being the last of your party alive and winning, 30,000 Dark Tide Coins, rescuing three downed teammates, killing a Golden Toad, 150 seconds hiding in bushes, travelling 7,500m, and defeating five enemies in each of Celestra, Shadowjade Mine, Sunwing's Rest, Shipwreck Expanse and Eventide Temple.",
                "The achievements here: The Overcomer (Survive for over 3 minutes and achieve victory while the only one in your party still alive.); Deep Pockets (Possess 30,000 Dark Tide Coins.); Hand of Grace (Rescue 3 downed party members in a single game.); Miracle Encounter (Kill a Golden Toad.); Lurker (In a single game, spend a total of 150 sec hiding in bushes.); Marathon Runner (Travel 7,500m in a single game.); Divine Lord (In a single game, defeat 5 enemies in Celestra.); Temple Warrior (In a single game, defeat 5 enemies in Shadowjade Mine.); Sunwing's Messenger (In a single game, defeat 5 enemies in Sunwing's Rest.); Captain's Bloodlust (In a single game, defeat 5 enemies in Shipwreck Expanse.); Fight Fire With Fire (In a single game, defeat 5 enemies in Eventide Temple.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Just play matches in a squad - First Blood, And So It Begins, Mask of Immortality, A Legend is Born, What Lies Within and the combat feats come with normal play.",
                "2. Deliberately rotate landing spots so Divine Lord, Temple Warrior, Sunwing's Messenger, Captain's Bloodlust and Fight Fire With Fire each get their five kills over a few sessions.",
                "3. Focus one weapon type per session to push Close Combat, Accuracy Assured and the 5,000-damage achievements (Spirit Spikes, Drunken Fire, Yi's Instrument).",
                "4. Grind the long counters last: Jack of All Trades (20 Heroic Tales), Apogee (Undying Glory 20 times) and As Fate Wills (Cultivation to The Chosen One).",
                "Tip: Spoils of War (unlock 8 achievements in a single match) is easiest early - go into a game still needing lots of the simple feats (fists kill, 50m kill, counter, waterwheel, bush hiding, marathon) and knock several out in one round."
            ]
        }
    ]
};
