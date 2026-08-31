// FINAL FANTASY V Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/final-fantasy-v.json), whose 96 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   382890 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "final-fantasy-v-achievement-guide",
    "category": "game",
    "gameSlug": "final-fantasy-v",
    "icon": "🔮",
    "title": "FINAL FANTASY V Achievement Guide",
    "summary": "A practical guide to all 96 Steam achievements in FINAL FANTASY V - none are hidden. Covers the story progression through all three worlds, the superbosses, legendary weapons, Bestiary, enemy-kill and gil milestones, the piano and treasure-chest completion, and the job-mastery and character-level grinds.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "FINAL FANTASY V (the pixel-remaster-era PC release) has 96 Steam achievements and none of them are hidden. Roughly the first twenty-five are story progression - obtaining each job crystal, the pirate ship, wind drake, airship and submarine, defeating Gilgamesh and Exdeath, arriving in Galuf's and the merged world, and beating Neo Exdeath (and without a party death). The rest are endgame content: the optional superbosses (Gogo, Omega and Omega Mk.II, Shinryu and Neo Shinryu, Enuo, the assassins), the twelve legendary weapons, the four enemy-kill Hunter ranks (100 / 300 / 1,000 / 2,000), the Bestiary at 10% / 30% / 60% / 100%, the gil milestones (10,000 to 500,000), mastering every piano, and opening every treasure chest.",
                "Nothing is missable in the achievement sense - the pixel remaster lets you fight the superbosses and complete the Bestiary and chests on a single save, and the story achievements come in order.",
                "Tip: play the story naturally for the first block, then in the endgame use the Sealed Temple / Cloister of the Dead area for the superbosses and the last Bestiary pages, and check a chest and piano checklist before the point of no return."
            ]
        },
        {
            "heading": "Story Progression",
            "body": [
                "Obtaining each job crystal (wind, water, fire, earth), the pirate ship, wind drake, airship and submarine, meeting Cid and the moogles, discovering Faris, arriving in Galuf's world and the merged world, defeating Gilgamesh (twice) and Exdeath, and beating Neo Exdeath (and without anyone dying).",
                "The achievements here: FINAL FANTASY V Master (You earned all achievements.); Say Hello, Syldra! (You obtained the pirate ship.); What!? (You obtained a job from the wind crystal.); He's a She! (You found out Faris is a woman.); Fear of Heights (You obtained a wind drake.); Too Late (You obtained a job from the water crystal.); Scientific Genius (You met Cid.); Our Only Hope (You obtained a job from the fire crystal.); Couldn't Tell (You discovered Faris's true identity.); The Skies Are Yours! (You obtained an airship.); The Return (You obtained a job from the earth crystal.); Galuf's World (You arrived in Galuf's world.); Enough of a Beating (You defeated Gilgamesh.); Kupo! (You met a moogle.); Lupine Attack (You mastered lupine attack.); Under the Sea (You obtained a submarine.); Not Dead Yet! (Krile inherited Galuf's power.); Morphing Time! (You defeated Gilgamesh again.); Mwa-hahahaha! (You defeated Exdeath.); Turtle! (You reunited with Ghido in the third world.); Tablets in the Bag! (\"You got the four tablets for unsealing the legendary weapons.\"); Lali-ho! (You met the dwarves.); Made It! (You pinned your hopes on Gilgamesh.); Forget Something? (You escaped from the final battle.); Warriors of Light (You defeated Neo Exdeath.)."
            ]
        },
        {
            "heading": "Superbosses, Weapons & Collection",
            "body": [
                "The optional superbosses (the assassins, Gogo, Omega and Omega Mk.II, Shinryu and Neo Shinryu, Enuo), the Cloister of the Dead, the twelve legendary weapons, the four Hunter enemy-kill ranks (100 / 300 / 1,000 / 2,000), the Bestiary milestones (10% / 30% / 60% / 100%), the gil milestones (10,000 / 50,000 / 200,000 / 500,000), mastering every piano, and opening every treasure chest.",
                "The achievements here: The Real Letter (\"You defeated Neo Exdeath without anyone in your party dying.\"); Dimensional Assassins (\"You defeated Exdeath's servants--assassins from another dimension.\"); Master Mimic (You defeated the mime Gogo.); Mechanical Warrior (You defeated Omega.); Mechanical Warrior II (You defeated Omega Mk.II.); Demon Dragon (You defeated Shinryu.); Neo Demon Dragon (You defeated Neo Shinryu.); The Void (You defeated Enuo.); Fallen Warrior (You cleared the Cloister of the Dead.); Legendary Weapons (You obtained the twelve legendary weapons.); Bronze Hunter (You defeated 100 enemies.); Silver Hunter (You defeated 300 enemies.); Gold Hunter (You defeated 1,000 enemies.); Platinum Hunter (You defeated 2,000 enemies.); Bestiary (32 Pages) (You completed 10% of the Bestiary.); Bestiary (96 Pages) (You completed 30% of the Bestiary.); Bestiary (192 Pages) (You completed 60% of the Bestiary.); Bestiary (323 Pages) (You completed the entire Bestiary.); Low Cash Flow (You earned 10,000 gil.); Gil Cave Time! (You earned 50,000 gil.); Flush with Gil (You earned 200,000 gil.); Gil to Burn (You earned 500,000 gil.); Piano Master (You mastered the piano by playing all the pianos.); Treasure Hunter (You opened all the treasure chests.)."
            ]
        },
        {
            "heading": "Job Mastery",
            "body": [
                "All four party members mastering each individual job (knight, monk, thief, dragoon, ninja, samurai, berserker, ranger, mystic knight, white/black/time mage, summoner, blue/red mage, beastmaster, chemist, geomancer, bard, dancer, necromancer, oracle, cannoneer, gladiator, mime), and \"Job Master\" for all four mastering every job.",
                "The achievements here: Master of Attack & Defense (All four characters mastered the knight job.); Don't Think, Feel! (All four characters mastered the monk job.); Band of Thieves (All four characters mastered the thief job.); Wind Rider (All four characters mastered the dragoon job.); Ninja Legend (All four characters mastered the ninja job.); Four Samurai (All four characters mastered the samurai job.); Skull Buster (All four characters mastered the berserker job.); Marksman (All four characters mastered the ranger job.); One Deadly Blow (All four characters mastered the mystic knight job.); Master of White Magic (All four characters mastered the white mage job.); Master of Black Magic (All four characters mastered the black mage job.); Master of Time and Space (All four characters mastered the time mage job.); Master Summoner (All four characters mastered the summoner job.); Learns from Monsters (All four characters mastered the blue mage job.); Ebony and Ivory (All four characters mastered the red mage job.); Catch and Release (All four characters mastered the beastmaster job.); Trial and Error (All four characters mastered the chemist job.); Child of the Earth (All four characters mastered the geomancer job.); The Music Man (All four characters mastered the bard job.); A One and a Two... (All four characters mastered the dancer job.); Undead Freak (All four characters mastered the necromancer job.); Prediction Machine (All four characters mastered the oracle job.); Blistering Bombardment (All four characters mastered the cannoneer job.); Battle Master (All four characters mastered the gladiator job.); Master of Mimicry (All four characters mastered the mime job.); Job Master (All four characters mastered every job.)."
            ]
        },
        {
            "heading": "Character Levels",
            "body": [
                "Raising Bartz, Lenna, Galuf and Faris each to level 10, 25, 50, 75 and 99, and \"Customer Appreciation\" for playing a new game.",
                "The achievements here: The Wind Calls (You raised Bartz to level 10.); It's Not Over Yet (You raised Bartz to level 25.); The Wind Won't Stop! (You raised Bartz to level 50.); Check Me Out! (You raised Bartz to level 75.); Don't Mess with Me (You raised Bartz to level 99.); Safe Journey! (You raised Lenna to level 10.); A Promise to Return (You raised Lenna to level 25.); Didn't Mean to Worry You (You raised Lenna to level 50.); In Your Debt (You raised Lenna to level 75.); Chancellor' Relief (You raised Lenna to level 99.); Where Am I? (You raised Galuf to level 10.); Give Me Strength (You raised Galuf to level 25.); Thanks Everyone! (You raised Galuf to level 50.); Gotta Be Kidding (You raised Galuf to level 75.); Gone Too Far! (You raised Galuf to level 99.); That Long Journey Smell (You raised Faris to level 10.); Careful Captain! (You raised Faris to level 25.); Time's a-Wasting! (You raised Faris to level 50.); It'll Work Out! (You raised Faris to level 75.); Look at Me Now! (You raised Faris to level 99.); Customer Appreciation (You played a new game.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the story through all three worlds - the story achievements unlock in sequence.",
                "2. Try for the no-party-death Neo Exdeath kill on your final-boss attempt (\"The Real Letter\").",
                "3. In the endgame, farm the legendary weapons and the Cloister of the Dead / Sealed Temple superbosses.",
                "4. Fill the Bestiary to 100% and grind enemy kills to the Platinum Hunter (2,000) rank.",
                "5. Mop up the gil milestones, every piano and every treasure chest before finishing the game.",
                "Tip: the Sealed Temple (added in the GBA/pixel-remaster content) houses Enuo, Neo Shinryu and Gilgamesh - clear it last with a mastered job setup, and it covers most of the remaining superboss achievements in one dungeon."
            ]
        }
    ]
};
