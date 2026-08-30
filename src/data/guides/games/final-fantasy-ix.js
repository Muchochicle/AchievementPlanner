// FINAL FANTASY IX Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/final-fantasy-ix.json), whose 85 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   377840 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "final-fantasy-ix-achievement-guide",
    "category": "game",
    "gameSlug": "final-fantasy-ix",
    "icon": "🐸",
    "title": "FINAL FANTASY IX Achievement Guide",
    "summary": "A practical guide to all 85 Steam achievements in FINAL FANTASY IX - none are hidden. Covers the synthesis, magic and combat milestones, the superboss, minigame and story achievements, and the Eidolon, ultimate-weapon and elemental-Guardian achievements.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "FINAL FANTASY IX (the PC/Steam re-release) has 85 Steam achievements and none of them are hidden. They span the whole game: use each magic type a set number of times, defeat 100 / 1,000 / 10,000 enemies, complete side content (all beaches, all hidden treasures, the frog-catching sidequest, the Treno auction, the Chocobo Hot and Cold hunt), summon every Eidolon, obtain every character's ultimate weapon, defeat the four elemental Guardians and the superboss Ozma, and finish the game.",
                "Several achievements are genuinely missable or one-shot in a single playthrough. Excalibur II requires reaching a late area within 12 hours of playtime; the King of Jump Rope needs 1,000 consecutive jumps; the Nero Brothers' shuffle game and the Cleyra evacuation happen only once. A blind run will miss a handful, so a guide (or a second file) is normal for a full completion.",
                "Tip: keep a checklist of the missable achievements (Excalibur II, the jump rope, the Nero shuffle, saving all of Cleyra, the friendly enemies) and either commit to a fast low-level run for Excalibur II or accept that it needs its own dedicated playthrough."
            ]
        },
        {
            "heading": "Synthesis, Magic & Combat Milestones",
            "body": [
                "Synthesizing 10 and 30 items, using Black / White / Blue Magic and Summons set numbers of times, defeating 100 / 1,000 / 10,000 enemies, buying out Stiltzkin, all support abilities, the Eidolon Wall secret, Moguo's tantrum, a level-99 chocobo beak, every beach, all hidden world-map treasures, Mognet Central, Superslick, 99 frogs and a golden frog, 10 auction wins, Excalibur, the Ragtime Mouse quiz, and all friendly enemies.",
                "The achievements here: Coming Together I (Synthesize 10 items.); Coming Together II (Synthesize 30 items.); That Old Black Magic (Use Black Magic spells 100 times.); A Healing Touch (Use White Magic spells 200 times.); I'm So Blue (Use Blue Magic spells 100 times.); You Called? (Summon Eidolons 50 times.); Let the Bodies Hit the Floor I (Defeat 100 enemies.); Let the Bodies Hit the Floor II (Defeat 1000 enemies.); Let the Bodies Hit the Floor III (Defeat 10000 enemies.); Driving the Hard Bargain (Purchase all items available from Stiltzkin.); A Pillar of Support (Acquire all available support abilities.); Cracking the Code (Uncover the secret of the Eidolon Wall.); One Nag Too Many (Cause Moguo to have a tantrum.); Follow Your Nose (Raise your chocobo's beak level to 99.); Beach Bum (Visit every beach in Gaia.); Diggin' It (Locate all hidden treasures on the world map.); Back Online (Repair the machine at Mognet Central.); Well Lubricated (Obtain a bottle of Superslick.); Frog Wrangler (Successfully catch 99 frogs.); Going for the Gold (Successfully catch a golden frog.); Auctioneer (Win 10 items at the Treno Auction House.); Sword of Kings (Obtain the sacred blade Excalibur.); Beating the Ragtime Blues (Correctly answer all the questions in Ragtime Mouse's pop quiz.); Mister Nice Guy (Gain the favor of all friendly enemies.)."
            ]
        },
        {
            "heading": "Superbosses, Minigames & Story",
            "body": [
                "Defeating Ozma, the miniature Prima Vista, 10 Queen Stella rewards, the Hammer, Rank S Treasure Hunter, the Dagger-only Behemoth, King of Jump Rope (1,000 jumps) and 100 jumps, the theatre encore, winning the Festival of the Hunt as Vivi, completing the game, level 99, Madain's Ring, freeing Kuppo, Athlete Queen, the Nero Brothers' shuffle nine times, blackjack, one / 10 / 100 Tetra Master wins, the airship, 30 back attacks, 50 Steals and 50 Defends, the all-female and all-male party feats, all status ailments on one character, and first / 50 Trances.",
                "The achievements here: To Ozma and Back (Defeat Ozma.); My Little Airship (Obtain a miniature copy of the Prima Vista.); Earning the Queen's Favor (Receive 10 rewards from Queen Stella.); What's Your Sign? (Obtain the Hammer.); Another Man's Treasure (Receive certification as a Rank S Treasure Hunter.); Dragon Lady (Defeat Behemoth in the Treno weapon shop using Dagger.); Hail to the King (Jump rope 1000 times without tripping and obtain King of Jump Rope.); Skip to My Lou (Jump rope 100 times without tripping.); A Round of Applause (Have the nobles demand an encore.); A-Hunting We Will Go (Win with Vivi during the Festival of the Hunt.); All's Well That Ends Well (Complete FINAL FANTASY IX.); End of the Road (Attain level 99 with at least one character.); The One Ring (Obtain Madain's Ring via mining.); Peek-A-Boo (Free Kuppo from a wall in Fossil Roo.); Track Star (Obtain Athlete Queen.); Found in the Shuffle (Beat the Nero Brothers' shuffling game nine times in a row.); Taking the Black (Play the blackjack minigame.); It's All in the Cards I (Win a Tetra Master match.); It's All in the Cards II (Win 10 Tetra Master matches.(Certain NPCs can be re-challenged to increase your win count after progressing through the game.)); It's All in the Cards III (Win 100 Tetra Master matches. (Certain NPCs can be re-challenged to increase your win count after progressing through the game.)); Take to the Skies (Obtain an airship.); Backstabber (Receive 30 back attacks.); Sticky Fingers (Use the Steal command 50 times.); The Best Offense (Use the Defend command 50 times.); Femme Fatales? (Form a party with Quina Quen and three female characters.); The B-Team (Form a party with four male characters.); A Clean Bill of Health (Have a single character affected by all status ailments. (both beneficial and detrimental).); Getting Emotional (Enter Trance for the first time.); Overly Emotional (Enter trance 50 times.)."
            ]
        },
        {
            "heading": "Eidolons, Ultimate Weapons & Elemental Guardians",
            "body": [
                "The Rebirth Flame, summoning each Eidolon (Shiva, Ifrit, Ramuh, Atomos, Odin, Leviathan, Bahamut, Ark, Carbuncle, Fenrir, Phoenix, Madeen), viewing 79 Active Time Events, 4 moonstones, Kain's Lance, the Tower, and every character's ultimate weapon (Rune Claws, Angel Flute, Mace of Zeus, Gastro Fork, Excalibur II, Whale Whisker, Tiger Racket, Ultima Weapon), the Genji armor set, a Very Good Omen, guiding all of Cleyra to safety, and defeating Maliris, Tiamat, Kraken and Lich.",
                "The achievements here: Still I Rise (Activate the Rebirth Flame ability when all party members are incapacitated.); You're Cold as Ice (Summon the eidolon Shiva.); Heat of the Moment (Summon the eidolon Ifrit.); Bring on the Thunder (Summon the eidolon Ramuh.); Bringing Down the House (Summon the eidolon Atomos.); The Dim Mak (Summon the eidolon Odin.); Surf's Up (Summon the eidolon Leviathan.); King of Dragons (Summon the eidolon Bahamut.); Firin' Mah Lazer (Summon the eidolon Ark.); Here to Help (Summon the eidolon Carbuncle.); Wolf Insanity (Summon the eidolon Fenrir.); Rise from the Ashes (Summon the eidolon Phoenix.); Wolf in Mog's Clothing (Summon the eidolon Madeen.); Movie Critic (View 79 Active Time Events.); Over the Moon (Obtain 4 moonstones.); Kain's Legacy (Obtain Kain's Lance.); Close But No Cigar (Obtain the Tower.); The Ultimate Claws (Obtain the Rune Claws.); The Ultimate Flute (Obtain the Angel Flute.); The Ultimate Mace (Obtain the Mace of Zeus.); The Ultimate Fork (Obtain the Gastro Fork.); The Ultimate Sword (Obtain Excalibur II.); The Ultimate Rod (Obtain the Whale Whisker.); The Ultimate Racket (Obtain the Tiger Racket.); The Ultimate Dual Blade (Obtain the Ultima Weapon.); Path of the Samurai (Obtain the complete set of Genji armor.); Your Lucky Day (Receive a Very Good Omen from a color fortune.); Out of Harm's Way (Guide all the residents of Cleyra to safety.); Putting Out the Fire (Defeat Maliris, the Guardian of Fire.); Gone with the Winds (Defeat Tiamat, the Guardian of Wind.); All Washed Up (Defeat Kraken, the Guardian of Water.); Hitting Rock Bottom (Defeat Lich, the Guardian of Earth.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Decide up front whether you are doing an Excalibur II speed run - if so, that is a dedicated fast, low-encounter playthrough on its own.",
                "2. On your main file, play through the story doing the missable one-shots as you reach them (the Nero shuffle, saving Cleyra, winning the Festival of the Hunt as Vivi).",
                "3. Grind the magic-use, summon and enemy-defeat counters during normal play, and pick up the beaches, treasures and Mognet chain as you get the airship.",
                "4. Do the big sidequests in the postgame: Chocobo Hot and Cold to Rank S, the frog catching, the Treno auction, the jump rope, and 100 Tetra Master wins.",
                "5. Finish with Ozma, the four elemental Guardians, and every character's ultimate weapon.",
                "Tip: King of Jump Rope (1,000 consecutive jumps) is the single most frustrating achievement - do it early in Alexandria before the rhythm speeds up in later attempts, use a metronome or a video's audio cue, and expect to spend a while; it does not have to be done in one sitting of the game, just one unbroken chain."
            ]
        }
    ]
};
