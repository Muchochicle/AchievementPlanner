// Streets of Rage 4 Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/streets-of-rage-4.json), whose 45 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   985890 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 8 hidden achievement(s) ship no official description from
//   Steam; their requirements below are curatorial, researched from public
//   community guides.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "streets-of-rage-4-achievement-guide",
    "category": "game",
    "gameSlug": "streets-of-rage-4",
    "icon": "👊",
    "title": "Streets of Rage 4 Achievement Guide",
    "summary": "A practical guide to all 45 Steam achievements in Streets of Rage 4 - 8 are hidden. Covers clearing the game with every playable character, skill and combo feats, environmental kills, and the game's story-tied and easter-egg hidden achievements.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Streets of Rage 4 has 45 Steam achievements, and 8 are hidden. The visible list covers clearing the full game solo with every character - the four core cast members (Axel, Blaze, Cherry, Floyd), retro SOR1/SOR2/SOR3-style characters, and later the DLC characters Estel, Shiva, and Max - plus skill-based feats (S-Ranks, no-damage clears, big combos, Mania difficulty), and a long list of environmental and weapon-specific kills. The 8 hidden achievements split into campaign story beats (meeting or defeating specific characters) and three deliberate easter eggs (a hidden retro level, the Golden Chicken escort, and unlocking secret character Roo).",
                "Nothing is missable - every character clear, combo tier, and environmental kill can be earned on any future playthrough, and the story-related hidden achievements unlock naturally just by finishing the campaign. The real time investment is clearing the game with the full character roster (11+ characters across the base game and DLC), since S-Ranks and no-damage clears both need a genuinely clean run.",
                "Tip: play through the campaign once on a comfortable difficulty just to see the story and pick up the story-tied hidden achievements (Miss Me?, Dojo Master, Snap Out of It, Old-Schooled), then do your character-clear and skill-run passes afterward once you know what is coming."
            ]
        },
        {
            "heading": "Character Clears I",
            "body": [
                "Clearing the full game in single-player as each of the base cast: Axel, Blaze, Cherry, Floyd, Adam, and the retro-style SOR1, SOR2, and SOR3 characters.",
                "The achievements here: All Clear: Axel (Clear all stages in single-player mode as Axel.); All Clear: Blaze (Clear all stages in single-player mode as Blaze.); All Clear: Cherry (Clear all stages in single-player mode as Cherry.); All Clear: Floyd (Clear all stages in single-player mode as Floyd.); All Clear: Adam (Clear all stages in single-player mode as Adam.); All Clear: SOR1 (Clear all stages in single-player mode with a \"SOR1\" character.); All Clear: SOR2 (Clear all stages in single-player mode with a \"SOR2\" character.); All Clear: SOR3 (Clear all stages in single-player mode with a \"SOR3\" character.)."
            ]
        },
        {
            "heading": "Skill & Combo Feats",
            "body": [
                "Skill-based achievements: an S-Rank on any stage, a no-damage stage clear (Perfect), S-Ranks on every stage at Hard or higher (Maniac), clearing a stage on Mania difficulty, the three combo tiers (Super!/Amazing!!/Out of this world!!!), clearing Arcade mode on Hard or higher, a 5,000,000 lifetime score, hitting an ally, catching a weapon in the air, eating a healing item, tossing an enemy in a hole, breaking free of a grab, and breaking both elevator window panes.",
                "The achievements here: Stage Mastery (Get an S-Rank on any stage.); Perfect (Complete a stage without taking damage.); Maniac (Get an S-Rank on all stages on Hard difficulty or higher.); All Too Easy (Complete a stage on Mania difficulty.); Combo Pro (Achieve a \"Super!\" combo.); Combo Expert (Achieve an \"Amazing!!\" combo.); Combo Master (Achieve an \"Out of this world!!!\" combo.); 100 Yen (Clear the Arcade mode on Hard difficulty or higher.); Bleeding Knuckles (Reach a lifetime score of 5,000,000.); Oops (Hit an ally.); Birth of the Cool (Catch a weapon in the air.); Eating off the Ground (Consume a healing item.); THIS IS WOOD OAK CITY!!! (Kill an enemy by tossing them in a hole.); Life's a Struggle (Free yourself from a grab.); It's Chilly in Here (Break both elevator window panes.)."
            ]
        },
        {
            "heading": "Environmental Kills & Character Clears II",
            "body": [
                "Environmental and weapon-specific kills - breaking the car in The Streets, breaking a wine bottle, destroying every motorcycle, a wrecking-ball kill, a 3-enemy barrel/grenade kill, a chandelier kill, breaking a spear - plus clearing the game as the DLC characters Estel, Shiva, and Max.",
                "The achievements here: Dude, My Car! (Break the car in The Streets.); Wasted Wine (Break a wine bottle.); Walk on Foot (Destroy all motorcycles.); Demolition Man (Use a wrecking ball to kill an enemy.); Collateral Damage (Use a barrel or a grenade explosion to kill 3 enemies at the same time.); An Elegant Death (Use a chandelier to kill an enemy.); Broke My Toy (Break a spear.); All Clear: Estel (Clear all stages in single-player mode as Estel.); All Clear: Shiva (Clear all stages in single-player mode as Shiva.); All Clear: Max (Clear all stages in single-player mode as Max.)."
            ]
        },
        {
            "heading": "Mastery & Survival",
            "body": [
                "Unlocking every alternate move for one character, unlocking every alternate move for every character, and reaching level 18 and level 30 in Survival mode.",
                "The achievements here: Ultimate Warrior (Unlock all alternate moves for one character.); The Possibilities Are Endless (Unlock all alternate moves.); Phantom in the Hull (Reach level 18 in survival mode.); I Am the One (Reach level 30 in survival mode.)."
            ]
        },
        {
            "heading": "Hidden Achievements",
            "body": [
                "Streets of Rage 4's 8 hidden achievements split into campaign story beats and 3 deliberate easter eggs, sourced from community guides (Prima Games, XboxAchievements, PlayStationTrophies, Steam Community):",
                "Throwback: Find one of the game's 4 hidden Retro Levels by locating a hidden Arcade Machine on a stage and attacking it. Simply entering the retro level pops the achievement - you do not need to clear it.",
                "Miss Me?: Meet Adam during the campaign - a story-reveal moment that happens naturally as you progress.",
                "Dojo Master: Defeat Shiva in his boss encounter during the campaign.",
                "Snap Out of It: Defeat the possessed version of Max during the campaign.",
                "Old-Schooled: Defeat Mr. and Ms. Y, the game's final campaign bosses.",
                "Family Reunion: In Stage 8's art gallery room, clear out the enemies, then attack the pedestal holding the Golden Chicken to knock it loose. Carry the chicken (do not attack with it, or it breaks) all the way to the end of the level - easiest in co-op with one player escorting the chicken while the other clears enemies.",
                "Somebody Call the Cops!: Play as an SOR1-style character (Axel/Blaze/Adam's original-game moveset, which has no specials or Star moves). Collect a Star power-up, then use the special-move button anyway - instead of the usual Star attack, an SOR1 character calls in a police car that fires a rocket launcher at the surrounding area.",
                "Clown Wars: Unlock the hidden character Roo (hold Up and the special-attack button together at the main menu). Playing as Roo, collect 3 Star power-ups and use his Star special move 3 times in quick succession to have 3 clown allies fighting alongside you at once."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Clear a full campaign run with Axel, Blaze, Cherry, and Floyd, then with retro SOR1/SOR2/SOR3-style characters, picking up the story-related hidden achievements (Miss Me?, Dojo Master, Snap Out of It, Old-Schooled) along the way.",
                "2. Look for a hidden Arcade Machine on an early stage and attack it to discover a Retro Level for Throwback.",
                "3. In Stage 8's art gallery, escort the Golden Chicken to the end of the level without attacking with it, ideally in co-op, for Family Reunion.",
                "4. Play as an SOR1-style character, grab a Star, and use the special button to call in the police car airstrike for Somebody Call the Cops!",
                "5. Work toward the skill achievements - an S-Rank on any stage, a no-damage stage clear, big combos (Super!/Amazing!!/Out of this world!!!), Mania difficulty, and Hard-or-higher S-Ranks on every stage - and pick off the environmental kills (wrecking ball, chandelier, barrel/grenade triple kill, hole toss, car, wine bottle, motorcycles, spear) as opportunities appear.",
                "6. If you own the Mr. X Nightmare DLC, clear the game with Estel, Shiva, and Max, unlock secret character Roo (hold Up + special-attack at the main menu) and use his Star move 3 times fast for Clown Wars, and push survival mode to levels 18 and 30.",
                "Tip: Combo Master (an \"Out of this world!!!\" combo) and the no-damage Perfect achievement both come easiest on an early, familiar stage where you already know every enemy spawn - practice your combo strings there rather than on a stage you are still learning."
            ]
        }
    ]
};
