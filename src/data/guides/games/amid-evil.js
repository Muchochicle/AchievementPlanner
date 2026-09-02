// AMID EVIL Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/amid-evil.json), whose 43 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   673130 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 5 achievement(s) are Steam-hidden or ship no Steam
//   description; their description here is researched from community
//   100% guides and is a curatorial summary. Every other description is
//   Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "amid-evil-achievement-guide",
    "category": "game",
    "gameSlug": "amid-evil",
    "icon": "🔮",
    "title": "AMID EVIL Achievement Guide",
    "summary": "A practical guide to all 43 Steam achievements in AMID EVIL (5 hidden). The five hidden achievements are secret areas and bosses (a developer room, a secret underwater level, the FNORD reference, and two Black Labyrinth DLC secrets). Everything else - the seven episode clears, the per-level challenges (all secrets, all enemies, par time, low health), the combat feats, and the free Black Labyrinth DLC's main bosses - carries Steam's own text.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "AMID EVIL has 43 Steam achievements, 5 of them hidden. It is a fast, colourful retro FPS with magical weapons across seven episodes. The visible achievements cover beating each episode (Astral Equinox through The Abyss) and 'Saviour of the Universe', the free Black Labyrinth DLC's Thunder Spirit and Black Labyrinth clears, the per-level challenges (all secrets, all enemies, par time, under 10 health, no mana, full mana, all awards, all inscriptions, destroy all decorations, no pickups), the soul-mode feats, and the combat feats (100 Overkills, 10 axe kills in 10 seconds, banish 10 into a black hole, 5 kills with one sun, each weapon's soul attack).",
                "The 5 hidden achievements are the developer room after the final boss, a secret underwater level in the Arcane Expanse, the FNORD reference in The Sacred Path, and two Black Labyrinth DLC secrets (three developer artifacts in order, a secret boss on the Mystic Shrine).",
                "The catalog marks it difficulty 3 (the par-time and challenge achievements are demanding) and single-playthrough. Nothing is missable - every level and both episodes are replayable from the level select."
            ]
        },
        {
            "heading": "Episodes",
            "body": [
                "Beating each of the seven episodes, 'Saviour of the Universe', and the free Black Labyrinth DLC (the Thunder Spirit and the Black Labyrinth).",
                "The achievements here: Saviour of the Moon (Beat Astral Equinox); Saviour of the Sentinels (Beat Domain of the Sentinels); Saviour of the Sun (Beat Solar Solstice); Saviour of the Pilgrim (Beat the Sacred Path); Saviour of the Machine (Beat the Forges); Saviour of the Mages (Beat the Arcane Expanse); Saviour of the Universe (Beat the Abyss); The first test (Defeat the Thunder Spirit); CHAMPION (Beat the Black Labyrinth)."
            ]
        },
        {
            "heading": "Level Challenges",
            "body": [
                "The per-level challenge achievements - all secrets, all enemies (and a whole episode), par time, under 10 health, no mana, full mana, soul mode on, all awards, all inscriptions, destroy all decorations, no pickups, experience each death - and the pacifist 'Hippie'.",
                "The achievements here: Hippie (Get through a level without killing anything); Genocider (Kill all enemies in an episode); Killer (Kill all enemies in a level); Explorer (Find all the secrets in a level); Speed Runner (Beat a level's par time); Scholar (Read all inscriptions in a level.); Close Shave (Finish a level with less than 10 health); All-out (Finish a level with no mana); Soul Sacrifice (Finish a level with soul mode on); Destroyer (Destroy all decorations in a level); Hardcore (Get all awards in a level); The chosen one (Rest easy.); A Real Klutz (Experience each type of death); NO TOUCHY. (Don't pickup anything in a level); Ready for anything (Finish a level with full mana)."
            ]
        },
        {
            "heading": "Combat & Feats",
            "body": [
                "The combat feats (100 Overkills, 10 axe kills in 10 seconds, 15 gauntlet kills, banish 10 into a black hole, 5 kills with one sun, Void Splitter soul kills, each weapon's soul attack, 30-second soul mode, blow up the earth), the joke achievements, and the five hidden secrets.",
                "The achievements here: Abysmal (Die in the Gateway); Filthy Cheater (Use a cheat code); DON'T GO! (Quit the game); Overkiller (Get 100 Overkills); Heh, Brutal (Kill 10 enemies in under 10 seconds with the Axe); Armageddon (Blow up the earth); Amid Difficulty (Find Evil Difficulty); If you can... (Find the hidden developer room, reached after defeating the final boss.); Wheeeeee! (Use the Axe underwater, in soul mode.); Soul Limbo (Extend soul mode for 30 seconds); The almighty power (Use each weapons soul mode attack once); Seeya (Banish 10 enemies into a black hole); Super Nova (Destroy 5 enemies with a single sun); He swims, he hungers (Find and complete the secret underwater level accessed through the Arcane Expanse.); FNORD (Find the hidden FNORD reference on Journeyman's Way in The Sacred Path.); Pummelled  (Kill 15 enemies in under 10 seconds with the gauntlets); I banish you to the shadow realm! (Kill 10 enemies with the Void Splitter's soul mode attack); Indefatigable (The Black Labyrinth DLC: collect the three developer artifacts in order - the Simon Orb on Dark Coast, the Leon Cube on Thunder Castle, the Andrew Prism on The Chamber.); Cold Fire (The Black Labyrinth DLC: defeat the secret boss on the Mystic Shrine level, reached via a button in a waterfall cave.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the seven episodes to 'Saviour of the Universe', then the Black Labyrinth DLC (Thunder Spirit, then the Black Labyrinth).",
                "2. Replay levels for the per-level challenges - all secrets, all enemies, par time, under 10 health, no mana - a few can stack on one careful run.",
                "3. Farm the combat feats on any enemy-dense level: 100 Overkills, the axe and gauntlet speed kills, black-hole banishes, sun kills.",
                "4. Find the three hidden secrets - the developer room after the final boss, the underwater level in the Arcane Expanse, the FNORD reference in The Sacred Path.",
                "5. In the Black Labyrinth DLC, collect the three developer artifacts in order and beat the secret Mystic Shrine boss.",
                "Tip: soul mode is the key to the challenge achievements - killing enough enemies charges it, and playing a level entirely in soul mode makes 'Soul Sacrifice', 'Soul Limbo', the weapon soul-attacks and 'Overkiller' all fall out of the same run."
            ]
        }
    ]
};
