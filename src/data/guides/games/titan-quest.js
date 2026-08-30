// Titan Quest Anniversary Edition Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/titan-quest.json), whose 115 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   475150 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 7 achievement(s) are hidden and ship with no official
//   description on Steam; those keep their real name with a curatorial
//   (researched) description sourced from community achievement guides
//   (Steam Community 100% guides, TrueAchievements, PSNProfiles/
//   PlayStationTrophies, GameFAQs, and the games' wikis), noted in the
//   Hidden Achievements section. Every other achievement's description is
//   Steam's own real text, quoted verbatim.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "titan-quest-achievement-guide",
    "category": "game",
    "gameSlug": "titan-quest",
    "icon": "🏺",
    "title": "Titan Quest Anniversary Edition Achievement Guide",
    "summary": "A practical guide to all 115 Steam achievements in Titan Quest Anniversary Edition - 7 are hidden. Covers the base game's Greece-to-Hades campaign and world bosses, the Ragnarok, Atlantis and Eternal Embers expansions, the mastery-by-mastery Legendary clears, and the deaths-free Hardcore and lifetime-grind feats.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Titan Quest: Anniversary Edition has 115 Steam achievements, 7 of which are hidden. It is a large, sprawling action-RPG: the base game runs from Greece through Egypt, Babylon and the Orient to the Underworld, and three expansions (Ragnarok, Atlantis, Eternal Embers) each add their own campaign, bosses and challenges on top. Most achievements come naturally from playing all of that content, but a big chunk are deliberate long-haul grinds - beating Legendary difficulty as every single mastery, finishing all three difficulties deaths-free, killing half a million monsters - that realistically span many characters and playthroughs.",
                "Very little is truly missable in a single character's run because you can revisit every act freely, but several achievements are locked to a specific difficulty (Normal, Epic or Legendary) or require particular builds, so full completion means rolling multiple characters across all three difficulty tiers. The 7 hidden achievements are secret side-content: two soul-freeing milestones in the Underworld, a curse-damage sarcophagus feat, a rare weapon drop, a secret passage, an alternate quest solution, and a detective side-errand in Ragnarok.",
                "Tip: plan your mastery combinations around the \"Beat Legendary difficulty as an X character\" achievements before you start levelling - each one checks the mastery you have invested the most skill points in, so a character that splits points evenly between two masteries may not qualify for either. Dedicated single-mastery or clearly primary-mastery builds are the safe way to tick these off."
            ]
        },
        {
            "heading": "Mastery Completion & Crafting",
            "body": [
                "Beating Legendary difficulty as a character of each of the ten masteries (Warfare, Defense, Earth, Storm, Hunting, Rogue, Spirit, Nature, Dream, and - from Ragnarok - Rune), plus the crafting, relic/charm assembly and basic multiplayer milestones.",
                "The achievements here: Achilles' Equal (Beat Legendary difficulty as a Warfare character); One Man Phalanx (Beat Legendary difficulty as a Defense character); Artisan (Craft a Lesser Artefact); Master Artificer (Craft a Greater Artefact); Son of Hephaestus (Craft a Divine Artefact); Survivalist (Complete 50 charms); Archeologist (Assemble 50 relics); It's dangerous to go alone. (Form a party with other heroes); Recycling (Retrieve a relic from an item); Medic! (Heal other players for a total of 200 000 health.); Trail of Ashes (Beat Legendary difficulty as an Earth character.); I am the Storm (Beat Legendary difficulty as a Storm character.); Titanic Game Hunter (Beat Legendary difficulty as a Hunting character.); Master of Shadows (Beat Legendary difficulty as a Rogue character.); The power of Osiris (Beat Legendary difficulty as a Spirit character.); Force of Nature (Beat Legendary difficulty as a Nature character.); Living the Dream (Beat Legendary difficulty as a Dream character.)."
            ]
        },
        {
            "heading": "The Main Campaign & World Bosses",
            "body": [
                "The base game's story, from saving Helos to the fall of Hades, together with the optional world bosses (Talos, the Manticore, the Dragon Lich, the Hydra) hunted down across Greece, Egypt, the Orient and the Underworld.",
                "The achievements here: A matter of principle (Find and defeat Talos); Down to the 'core (Find and defeat the Manticore); Beast of Beliar (Find and defeat the Dragon Lich); What it says on the tin (Find and defeat the Hydra); No burned village? (Save Helos); The first threshold (Pass the Spartans' test); Nobody did this (Defeat Polyphemus); Hearts of Stone (Defeat the Gorgons); Taste the beast! (Defeat the Minotaur Lord); Found a bug (Cleanse the library); Tough crowd (Defeat the Honor Guard ); No more sequels (Defeat Nehebkau); Fight in the shade (Defeat Aktaios); Discount mercenary (Defeat the Chimera); Best served cold (Defeat Barmanu); Be a man! (Defend the Great Wall); Imperial summit (Meet the Yellow Emperor); Worthy of song (Slay a titan); Can't always use more (Find Medea); I O U (Defeat the Graeae); Don't Pay the Ferryman (Cross the Styx); Echoes in Eternity (Walk the fields of Elysion); When Gods Fall (Finish the Hades storyline); Odysseus' 11 (Loot Hades' treasure vault)."
            ]
        },
        {
            "heading": "Feats, Hardcore Runs & Skill Challenges",
            "body": [
                "Deaths-free \"Hardcore\" runs on each difficulty, huge lifetime kill counts, speed and low-kill challenge runs, and a long list of build-specific skill feats - mass crowd control, summon tricks, damage spikes and set-item bonuses.",
                "The achievements here: Hardcore Player (Finish Normal difficulty with zero deaths); Hardcore Master (Finish Epic difficulty with zero deaths); Hardcore Legend (Finish Legendary difficulty with zero deaths); I have minions for that (Finish Normal with a personal kill count of less than 100); Greece Lightning (Finish all 3 difficulties in less than 20 hours play time); Avatar of Thanatos (Kill half a million monsters); Masterful start (Reach level 2 without taking any damage); Sisyphus go home! (Have a character reach level 80); Strength of Atlas (Hit an enemy for 100.000 damage); Hercules (Kill 100.000 monsters with a single character); Someone your size (Beat Polyphemus while in Colossus Form); K.O. (Stun an enemy for 10 seconds in one hit); Magebreaker (Burn an enemy's mana for 2500 damage); Double Standard (Have two Battle Standards up at the same time); Daemon ex machina (Summon a level 20 Outsider); Call of Nature (Travel with three Wolves and a Nymph); Surprise! (Phantom Strike six enemies at once); Target immobilized (Keep an enemy ensnared for 30 seconds); Delirium (Have 10 enemies running around confused); Epidemic (Have 14 enemies afflicted by Plague at once); Morpheus (Have 12 enemies sleeping simultaneously); Circe (Mind control six enemies at the same time); Good point (Puncture four enemies with one arrow); Together we stand (Cast Rally on yourself and 3 other players); The power of Set (Wear five matching set items); Rock beats scissors (Defeat ten enemies over the course of one Stoneform spell); Specialist (Finish Normal difficulty without selecting a second mastery); Agreeable pursuit (Find and defeat the Boar Snatcher); Out there on the dunes (Find and defeat the Sandwing queen); Dark corners of the map (Defeat Shadowmaw on Normal before leaving Greece); Wodan's Knowledge (Beat Legendary difficulty as a Rune Mastery character); Precision Dvergan Engineering (Improve a legendary item); Bloody Roots (Have 10 enemies immobilized at the same time)."
            ]
        },
        {
            "heading": "Ragnarok: The Northern Lands",
            "body": [
                "The Ragnarok expansion carries the story north of the Alps into the lands of the Celts, Norse and Dvergr, culminating in the fight against Surtr, plus its side bosses (Fafnir, Arganthonios, the Ancient One) and difficulty clears of Tartarus.",
                "The achievements here: New lands (Journey north of the Alps); The one she forgot (Acquire the mistletoe); What lies below (Open the ancient gate); Mission Accomplished (Find new friends); Delayed until further notice (Finish the main storyline); Rheingold (Find Andvari's lost treasure); Altoholic (Have ten different class characters of at least level ten); Dear diary... (Defeat King Arganthonios); Clawsome! (Defeat The Ancient One); Weedkiller (Defeat Ladon); Marduked (Defeat Tiamat); I AM TITAN SLAYER (Defeat Lyktos); Beginner's Luck (Defeat Tartarus on Normal difficulty); Double or Nothing (Defeat Tartarus on Epic difficulty); High Roller (Defeat Tartarus on Legendary difficulty)."
            ]
        },
        {
            "heading": "Atlantis & Eternal Embers",
            "body": [
                "The Atlantis expansion (Tartarus endless mode and its bosses) and the Eternal Embers expansion, which returns to a mythic China with new bosses - Qiong Qi, the Dragon King, Feiyi - the Neidan mastery, and a run of developer-tribute secret fights.",
                "The achievements here: The Fourth Peril (Defeat Qiong Qi); The Dragon King (Defeat Sihai Longwang); The Forgotten King (Defeat Akhenaten); The Setting Sun (Defeat the Suns); Brewmaster (Beat Legendary difficulty as a Neidan character); Bao (Buy a monster item from Bao); BAO (Buy an infrequent monster item from Bao); Old Friend (Talk with the Yellow Emperor); Danger Noodle (Defeat Feiyi); No Stone Unturned (Complete all Eternal Embers quests); Revenge (Defeat all the developers); Emperor's New Clothes (Equip a complete Eternal Embers set); Peach of Immortality (Finish Eternal Embers with zero deaths); I don't like sand (Defeat the Exhumed Medjai); Nesting Doll (Defeat the Terracotta General); Connoisseur (Drink every new potion); The Line of Epic Heroes (Defeat Mr. Fae); You must not read from the book! (Defeat Prosoro); Amusing Mudcrab (Defeat Dimonoider)."
            ]
        },
        {
            "heading": "Hidden Achievements",
            "body": [
                "All 7 hidden achievements are optional secret content and none of them block anything else. Breaker of Chains and Fifty Shades are both earned by freeing shades from the soul cages in Act IV's Stygian Marsh (50 for one, 500 for the other), so they stack on a single Underworld playthrough if you go out of your way to open every cage.",
                "The hidden achievements: Breaker of Chains (Free 500 imprisoned shades by opening the soul cages found throughout Act IV, beginning in the Stygian Marsh.); Turtle Power (Open the hidden secret passage in Coastal Asomata (Act IV), past Rhodes, using a special item - a nod to a certain team of turtles.); Pharaoh's curse (Take poison damage from Act II's cursed sarcophagi by opening them and lingering in the toxic cloud they release.); Sick lewt (Obtain and equip the Adamantine Sickle of Kronos, a rare drop from the third Telkine at the end of Act III.); Fifty Shades (Free 50 imprisoned shades by opening soul cages in Act IV, beginning in the Stygian Marsh.); Give me your Lupines (Solve the 'Giesel' side quest the alternative way - craft a Lupine Necklace from the recipe rewarded by 'The Craftsman's Passion' and hand it over instead of the sheep.); Detective (Defeat the Vengeful Ghost in the Salt Mines (Ragnarok, Act V), take the Ornate Seal Ring it drops, and return it to Elise in Heuneburg.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Pick a clear single-mastery (or obvious primary-mastery) build for your first character and play the whole base game plus all three expansions on Normal difficulty, opening every sarcophagus, soul cage and side area as you go.",
                "2. On that first run, chase the story and world-boss achievements, the crafting/relic/charm milestones, and the 7 hidden feats (soul cages for Breaker of Chains and Fifty Shades, the Coastal Asomata secret passage for Turtle Power, the alternate 'Giesel' solution for Give me your Lupines, and the Ragnarok detective errand).",
                "3. Push that same character through Epic and then Legendary difficulty to unlock the mastery-specific Legendary clears and the Epic/Legendary boss and Tartarus achievements.",
                "4. Roll additional characters of the remaining masteries and take each to Legendary for its \"Beat Legendary difficulty as an X character\" achievement - this is the bulk of the remaining work and the main reason full completion spans many playthroughs.",
                "5. Fold the long grinds (half a million monster kills, 100,000 kills on one character, reaching level 80, the deaths-free Hardcore runs and the sub-20-hour speed clear) into whichever characters suit them best.",
                "Tip: the deaths-free \"Hardcore\" achievements do not require a self-imposed hardcore mode - a single death anywhere in that difficulty's playthrough simply voids it, so treat those runs cautiously and consider over-levelling before hard fights."
            ]
        }
    ]
};
