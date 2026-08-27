// Vampire Survivors' Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/vampire-survivors.json), whose 243
//   achievements - the largest list in this catalog - were sourced
//   directly from Steam's own achievement schema for appid 1794680 via
//   ISteamUserStats/GetSchemaForGame (fetched through this app's own
//   backend/services/steamApi.js). All 243 ship a real, official Steam
//   description - Vampire Survivors has no Steam-hidden achievements at
//   all, unusual for a game this size in this catalog.
// - The grouping below (level/survival milestones, weapon evolutions,
//   character mastery, boss fights, secret finds, the Collection,
//   Hyper Mode/Banish challenges, the two paid DLC packs' own
//   achievement sets, general post-launch extras, and the hardest
//   late-game challenge achievements) is read directly from each
//   achievement's own apiname prefix and official description - the
//   MOON-prefixed set is confirmed by its own achievements referencing
//   "Moonspell" directly (the Legacy of the Moonspell DLC), and the
//   FOSC-prefixed set the same way for "Foscari" (the Tides of the
//   Foscari DLC). The remaining EXTRA:/Dark_-prefixed achievements come
//   from a mix of other paid DLC and free content updates - rather than
//   guess which specific pack owns which one, this guide describes what
//   each requires mechanically instead of asserting an unverified DLC
//   name achievement-by-achievement.
export const GUIDE = {

    slug: "vampire-survivors-achievement-guide",
    category: "game",
    gameSlug: "vampire-survivors",
    icon: "🧛",
    title: "Vampire Survivors Achievement Guide",
    summary: "A practical guide to all 243 Steam achievements in Vampire Survivors - the largest achievement list in this catalog, covering level and survival milestones, weapon evolutions, character mastery, secret finds, the Collection, and both major DLC packs.",

    relatedSlugs: ["achievement-completion-and-tracking", "understanding-achievement-availability"],

    sections: [

        {
            heading: "Overview",
            body: [
                "Vampire Survivors has 243 Steam achievements - by far the largest list in this catalog - and unusually for a game this size, none of them are Steam-hidden: every single one ships a real, official description.",
                "Almost nothing here is missable in the traditional sense. Progress (unlocked weapons, characters, and stages) persists permanently across runs, so a run that ends early just means trying again - the achievements track lifetime totals and one-off discoveries, not choices that can be permanently locked out on a given save.",
                "The list breaks down cleanly into a handful of real categories: basic level/survival/stage milestones, weapon-evolution achievements, character-specific mastery runs, boss fights and kill-count totals, secret item finds, the in-game Collection, Hyper Mode and challenge-run achievements, the two paid DLC packs' own achievement sets (Legacy of the Moonspell and Tides of the Foscari), general post-launch extras, and a small tier of genuinely difficult late-game challenge achievements."
            ]
        },

        {
            heading: "Level, Timer & Stage Milestones",
            body: [
                "The most basic achievements track simple level and survival-time thresholds: Wings and Crown for reaching character level 5 and 10, Hollow Heart for surviving your first minute with any character, and Runetracer and Peachone for surviving 5 and 10 minutes. Pentagram extends this to 20 minutes, and several stage-specific timer achievements follow the same pattern at higher difficulty: Inlaid Library and Dairy Plant for reaching level 20 and 40 in those stages, and Gallo Tower for reaching level 60 in the Dairy Plant.",
                "A cluster of character-specific short survival achievements - Pummarola, Tiragisú, Skull O'Maniac, Song of Mana, Phiera Der Tuphello, Eight The Sparrow, Gatti Amari, Shadow Pinion, and Vento Sacro - each ask you to survive a set number of minutes (5, 15, or 20 depending on the achievement) with one specific character, usually the one that character's own weapon evolution is built around.",
                "Lama tracks surviving 20 minutes with at least +10% Curse (a stat that speeds up and intensifies the game), while a run of five \"Skip\" achievements - Skip 1, Skip 2, Skip 3, Skip 4, and Skip 5 - reward surviving 15 minutes in five different normal stages: Il Molise, Green Acres, The Bone Zone, Moongolow, and Boss Rash.",
                "The tougher \"31-minute\" tier - XV - Disco of Gold, XII - Out of Bounds, VIII - Mad Groove, and XX - Silent Old Sanctuary - asks you to push past the game's usual 30-minute run length in the Inlaid Library, Gallo Tower, Mad Forest, and Dairy Plant respectively, well into the harder late-game enemy waves. EXTRA: She-Moon Eeta, EXTRA: Space Dude, EXTRA: Santa Ladonna, and EXTRA: Chula-Reh round this category out with similar timed-survival goals in some of the game's later-added stages."
            ]
        },

        {
            heading: "Weapon Evolutions",
            body: [
                "A large share of the achievement list tracks the game's core progression loop: leveling a base weapon to its max level (usually 4, 6, 7, or 9) while holding the right passive item, then evolving it into its stronger final form. Arca, Bracer, Candelabrador, Porta, Duplicator, Ebony Wings, and Spellbinder are all \"get this weapon to level N\" milestones, while Bloody Tear, Holy Wand, Thousand Edge, Death Spiral, Heaven Sword, Unholy Vespers, Hellfire, Soul Eater, La Borra, Thunder Loop, Mannajja, Gorgeous Moon, NO FUTURE, Vicious Hunger, and Valkyrie Turner are the evolutions those milestones unlock.",
                "Some evolutions require combining two separate weapons instead of leveling just one: Vandalier unites Ebony Wings and Peachone, Phieraggi evolves and unites Phiera Der Tuphello and Eight The Sparrow, and Fuwalafuwaloo unites Vento Sacro and Bloody Tear. Tri-Bracelet is a two-step evolution chain of its own (Bracelet into Bi-Bracelet into Tri-Bracelet), Omni requires getting Torrona's Box to level 9, and Poe Ratcho and Christine are the level-7 milestones that lead into the Soul Eater and Gorgeous Moon evolutions respectively.",
                "Candybox is the payoff for discovering every standard evolution and union in one place, a real capstone rather than a single-weapon goal.",
                "The game's later content adds its own weapon-evolution pairs following the same pattern: EXTRA: Glass Fandango into EXTRA: Celestial Voulge, EXTRA: Phas3r into EXTRA: Evolve the Phas3r., EXTRA: Bat Robbert as an evolution of an earlier weapon, EXTRA: Santa Javelin into EXTRA: Seraphic Cry, EXTRA: Gazebo into EXTRA: Embrace of Gaea, EXTRA: Magi-Stone into EXTRA: Kyra-Stones, and EXTRA: Zi'Appunta Belpaese as a further evolution down that same chain."
            ]
        },

        {
            heading: "Character Mastery & Endgame Runs",
            body: [
                "A long, dedicated tier of achievements - I - Gemini, II - Twilight Requiem, III - Tragic Princess, IV - Awake, V - Chaos in the Dark Night, VII - Iron Blue Will, IX - Divine Bloodline, X - Beginning, XI - Waltz of Pearls, XIII - Wicked Season, XIV - Jail of Crystal, XVI - Slash, XVII - Lost and Found Painting, XVIII - Boogaloo of Illusions, XIX - Heart of Fire, and XXI - Blood Astronomia - each reward reaching character level 50 with one specific character, a roman-numeral-titled set that together covers a large share of the game's full roster.",
                "A further five achievements - Reroll 1, Reroll 2, Reroll 3, Reroll 4, and Reroll 5 - push that same idea to character level 80 with a smaller set of characters, representing an even deeper, more dedicated investment in a single character build than the level-50 tier.",
                "EXTRA: Tiny Bridge, EXTRA: Bat Country, EXTRA: Astral Stair, and EXTRA: Mazerella apply the same \"reach a high level\" idea to the game's harder \"Inverse\" stage variants instead of a specific character - reaching level 80 in each Inverse stage."
            ]
        },

        {
            heading: "Boss Fights & Kill Counts",
            body: [
                "Several achievements reward defeating specific bosses in specific stages: Hyper Mad Forest, Hyper Inlaid Library, Hyper Dairy Plant, and Hyper Gallo Tower each unlock for beating that stage's own unique boss, while Hyper Cappella Magna and Game Killer mark the two-stage final boss encounter in the Cappella Magna. EXTRA: Pako Battiliar and EXTRA: Ammo Appalate reward similar boss-style kill milestones in the game's later content, and EXTRA: Gaze of Gaea is its own distinct late-game boss-adjacent goal.",
                "A separate set tracks lifetime kill-count totals against specific enemy types rather than one-off boss fights: Lightning Ring (5000 total enemies), Mortaccio (3000 Skeletons), Krochi (100,000 total enemies), Yatta Cavallo (3000 Lion Heads), Bianca Ramba (3000 Milk Elementals), O'Sole Meeo (3000 Dragon Shrimps), and Sir Ambrojoe (6000 Stage Killers) - all cumulative across every run you've ever played, not a single-run challenge.",
                "Victory Sword is a much bigger single-run version of the same idea: defeating 100,000 enemies with the character Queen Sigma in one sitting."
            ]
        },

        {
            heading: "Secret Items & Collectibles",
            body: [
                "A large group of achievements reward finding specific hidden items scattered through the game's stages: Clover, Magnet, Clock Lancet, Cross, and Stone Mask are the game's original early passive-item finds, while Milky Way Map, Sorceress' Tears, Randomazzo, Magic Banger, Glass Vizard, Yellow Sign, Grim Grimoire, Ars Gouda, Great Gospel, Forbidden Scrolls, Gracia's Mirror, and Seventh Trumpet are rarer discoveries tied to specific stages or run conditions. Seeker of the Infinite Corridor and Seeker of the Crimson Shroud reward obtaining two of the game's more elusive relics, and The Eudaimonia Machine rewards obtaining every standard relic from every stage.",
                "Cappella Magna itself is unlocked by reaching level 80 in the Gallo Tower, and each stage has its own hidden coffin to find and open: Coffin: Mad Forest, Coffin: Dairy Plant, Coffin: Inlaid Library, Coffin: Gallo Tower, and Coffin: Cappella Magna. VI - Sarabande of Healing is a further reward tied to finding a Randomazzo under a specific condition.",
                "The game's later stages and updates add many more of the same kind of find: EXTRA: Apoplexy, EXTRA: Chaos Malachite, EXTRA: Chaos Rosalia, EXTRA: Trisection, EXTRA: Astral Stair Map, EXTRA: Chaos Altemanna, EXTRA: Whiteout, EXTRA: Antidote, EXTRA: Adventures, EXTRA: Space 54, EXTRA: Brave Story, EXTRA: Laborratory, EXTRA: Arma Dio, EXTRA: Darkasso, EXTRA: Hyper The Coop, EXTRA: Parm Aegis, EXTRA: Game Speed Modifier, EXTRA: Westwoods, EXTRA: Karoma's Mana, EXTRA: Masquerade, EXTRA: Chaos Lazulia, and EXTRA: Preserve - each its own specific hidden pickup, relic, or map fragment in one of the game's many stages."
            ]
        },

        {
            heading: "The Collection & True Completion",
            body: [
                "Mindbender and the five Banish achievements - Banish 1, Banish 2, Banish 3, Banish 4, and Banish 5 - track how much of the game's in-game Collection - its full item/weapon/character encyclopedia - you've filled in, at 50, 60, 70, 80, 90, and 100 entries respectively.",
                "Queen Sigma is the reward for filling every single entry in the Collection - Vampire Survivors' real completionist milestone, realistically the last thing on this list most players finish, since it depends on having found and evolved nearly everything else in the game at least once."
            ]
        },

        {
            heading: "Hyper Mode & Banish Challenges",
            body: [
                "Green Acres, Il Molise, The Bone Zone, and Moongolow each unlock Hyper Mode (a much harder, faster variant) for one specific normal stage, and Boss Rash unlocks it for the last of the five original stages - together these five stage-specific achievements are sometimes grouped under the game's own \"Unlock Hyper Mode\" milestones.",
                "A separate set of four achievements - EXTRA: Seal I, EXTRA: Seal II, EXTRA: Seal III, and EXTRA: Seal All - reward the opposite kind of challenge: banishing (permanently removing) 10, 20, 40, and finally 80 or more weapons from a single run's item pool, deliberately restricting your own options rather than expanding them."
            ]
        },

        {
            heading: "Legacy of the Moonspell",
            body: [
                "Legacy of the Moonspell, the game's first paid DLC, adds its own self-contained progression chain in Mt.Moonspell: Miang for finding and opening that stage's coffin, then Silver Wind, Menya, Four Seasons, Syuuto, Summon Night, Babi-Onna, Mirage Robe, McCoy-Oni, and 108 Bocce as a long sequence of \"survive 15 minutes with this character\" and \"evolve this weapon\" achievements that unlock each other in turn.",
                "Megalo Menya and Megalo Syuuto reward defeating 100,000 enemies in a single run with two of the DLC's characters, Gav'Et-Oni tracks 6000 total Kappa kills, and Night Sword and Muramasa are a further find-then-evolve weapon pair. Hyper Mt.Moonspell marks defeating that stage's own unique boss, Boo Roo Boolle is a further evolution reward, and Mt.Moonspell Map is a hidden map fragment specific to the DLC's stage."
            ]
        },

        {
            heading: "Tides of the Foscari",
            body: [
                "Tides of the Foscari, the second paid DLC, follows a similar self-contained structure centered on Lake Foscari: Eleanor Uziron for finding that stage's coffin, then SpellString, SpellStream, and SpellStrike as three weapons that combine into Maruto Cuts, which itself evolves into Eskizzibur and then Keitha Muort.",
                "Flash Arrow and Millionaire continue that same evolution chain, while Abyss Foscari, Luminaire Foscari, and Genevieve Gruyère mark three distinct \"break the seal\" story milestones reached with three different DLC characters. Prismatic Missile evolves into Luminaire, and Shadow Servant evolves into Ophion.",
                "Je-Ne-Viv rewards defeating 100,000 enemies in a single run with Genevieve Gruyère, Happy Birthday and Rottin'Ghoul track 6000 lifetime kills each against two specific DLC enemy types, and Hyper Lake Foscari and Hyper Abyss Foscari mark the DLC's own two unique boss fights. Lake Foscari Map is the DLC stage's own hidden map fragment, matching Mt.Moonspell Map's role in the earlier DLC."
            ]
        },

        {
            heading: "Post-Launch Extras & Adventures",
            body: [
                "A handful of achievements don't fit neatly into any other category. Empty Tome, Fire Wand, and Garlic are early general-purpose milestones (holding 6 different weapons at once, destroying 20 light sources, and finding 5 Floor Chickens respectively), while Suor Clerici and Dommario reward recovering a total of 1000 HP and earning 5000 coins in a single run.",
                "Torrona's Box and Bracelet are their own weapon-progression achievements outside the main evolution chains covered earlier, and Greatest Jubilee rewards simply watching the game's own celebratory ending fireworks sequence play out.",
                "EXTRA: Carlo Cart tracks a large cumulative damage total dealt with one specific late-game weapon, and EXTRA: A Garlic Paradise, EXTRA: World of Light and Dark, and EXTRA: To End An Ice Age each reward completing one of the game's separate scripted \"Adventure\" modes at least once. EXTRA: Room 1665 is its own standalone secret tied to a specific in-game spell."
            ]
        },

        {
            heading: "The Hardest Challenges",
            body: [
                "A final, small tier of nine achievements - all under the game's own \"Dark\" naming - represent some of the most demanding stat-based goals in the entire list, each tied to a specific character reaching an extreme build: EXTRA: I - Sapphire Mist (an extreme Cooldown reduction with Space Dude), EXTRA: III - Hidden Anathema, EXTRA: V - Pale Diamond Incursion (collecting many Treasure Chests from one character's unique ability in a single run), EXTRA: VI - Moonlight Bolero, EXTRA: X - Hail from the Future, EXTRA: XII - Crystal Cries, EXTRA: XIII - Call of a Mad Moon (an extreme Luck build), EXTRA: XVIII - Victorian Horror (surviving 30 minutes with no weapons at all in a harder Inverse stage), and EXTRA: XXI - Wandering the Jet Black (an extreme Max Health build).",
                "Tip: none of these are realistic goals until you already have a very deep, high-level item/character collection to build around - treat this whole section as the genuine endgame of the achievement list, well after everything else here is already done."
            ]
        },

        {
            heading: "Suggested Order",
            body: [
                "Play normally through the base game's five original stages first - nearly every early level/survival milestone, weapon evolution, and boss-fight achievement here unlocks naturally along the way without any dedicated detour.",
                "Once the base game feels comfortable, work through the character-mastery (level 50/80) achievements a few characters at a time, since a strong late-game build carries over directly into the kill-count and boss achievements too.",
                "Tackle Legacy of the Moonspell and Tides of the Foscari as two separate, self-contained detours whenever you own them - each has its own short, satisfying unlock chain that's easiest to follow stage-by-stage rather than mixed in with base-game runs.",
                "Save the Collection's last few percentage milestones, Hyper Mode's Banish challenges, and The Hardest Challenges for last - by the time you're chasing Queen Sigma and the Dark-tier achievements, you'll already have the deep item and character knowledge those goals actually require."
            ]
        }

    ]

};
