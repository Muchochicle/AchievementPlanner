// FINAL FANTASY VII Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/final-fantasy-vii.json), whose 36 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   39140 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "final-fantasy-vii-achievement-guide",
    "category": "game",
    "gameSlug": "final-fantasy-vii",
    "icon": "🌸",
    "title": "FINAL FANTASY VII Achievement Guide",
    "summary": "A practical guide to all 36 Steam achievements in FINAL FANTASY VII - none are hidden. Covers the story, endgame grind and ultimate-reward achievements, and the first-battle and first-Limit-Break achievements.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "FINAL FANTASY VII (the PC re-release) has 36 Steam achievements and none of them are hidden. About two thirds are grind and completion: complete each of the game's three parts, reach 99,999,999 Gil, hit level 99, get every character's final Limit Break, obtain Knights of the Round and Bahamut Zero, master all Materia, defeat the four optional Weapons (Ultimate, Diamond, Ruby, Emerald), recruit Vincent and Yuffie, and breed a Gold Chocobo. The rest are trivial firsts - win your first battle, use each of the nine playable characters' first Limit Break, and start a Battle Square fight.",
                "Nothing is permanently missable - Vincent and Yuffie are optional but their achievements just require recruiting them, and the endgame content stays available. This is a long completion mainly because Master Materia Overlord (master every Materia), the Gold Chocobo breeding chain, and Emerald/Ruby Weapon all require serious endgame grinding.",
                "Tip: play through the story normally recruiting Vincent and Yuffie, then dedicate the postgame to the grind - breed the Gold Chocobo, farm Materia AP and Gil in the Northern Cave, and use a fully mastered setup to take down Emerald and Ruby Weapon."
            ]
        },
        {
            "heading": "Story, Progression & Ultimate Rewards",
            "body": [
                "Completing Part I, Part II and the game, 99,999,999 Gil, level 99, each character's last Limit Break (Omnislash, Catastrophe, Final Heaven, Great Gospel, Cosmo Memory, All Creation, Slots, Chaos, Highwind), Knights of the Round, a maxed Materia, Bahamut Zero, defeating the Ultimate, Diamond, Ruby and Emerald Weapons, recruiting Vincent and Yuffie, mastering all Materia, and a Gold Chocobo.",
                "The achievements here: End of Part I (Complete the first part of the game); End of Part II (Complete the second part of the game); End of Game (Complete FINAL FANTASY VII); Master of Gil (99,999,999 Gil); Top Level (Reach level 99 with any character); Omnislash (Get Cloud's last Limit Break); Catastrophe (Get Barret's last Limit Break); Final Heaven (Get Tifa's last Limit Break); Great Gospel (Get Aeris's last Limit Break); Cosmo Memory (Get Red XIII's last Limit Break); All Creation (Get Yuffie's last Limit Break); Slots (Get Cait Sith's last Limit Break); Chaos (Get Vincent's last Limit Break); Highwind (Get Cid's last Limit Break); Knights of the Round (Get materia Knights of the Round); Master Materia (Reach the maximum level of any Materia); Bahamut Zero (Get materia Bahamut Zero); Ultimate Weapon (Defeat the Ultimate Weapon); Diamond Weapon (Defeat the Diamond Weapon); Ruby Weapon (Defeat the Ruby Weapon); Emerald Weapon (Defeat the Emerald Weapon); Vincent (Get Vincent on your team); Yuffie (Get Yuffie on your team); Materia Overlord (Master all Materias); Gold Chocobo (Get a Gold Chocobo)."
            ]
        },
        {
            "heading": "First Battles & First Limit Breaks",
            "body": [
                "Winning your first battle, using each character's first Limit Break (Braver, Big Shot, Galian Beast, Healing Wind, Boost Jump, Beat Rush, Greased Lightning, Sled Fang, Dice), and starting a battle in the Battle Square.",
                "The achievements here: Won 1st battle (Win your first battle); Braver (Use Cloud's 1st limit); Big Shot (Use Barret's 1st limit); Galian Beast (Use Vincent's 1st limit); Healing Wind (Use Aeris's 1st limit); Boost Jump (Use Cid's 1st limit); Beat Rush (Use Tifa's 1st limit); Greased Lightning (Use Yuffie’s 1st limit); Sled Fang (Use Red XIII's 1st limit); Dice (Use Cait Sith's 1st limit); Battle Square (Start a battle in the Battle Square)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the story to completion, making sure to recruit Vincent (the Shinra Mansion safe) and Yuffie (a forest random encounter) along the way.",
                "2. Use each character's first Limit Break in a fight as they join - most unlock naturally.",
                "3. In the postgame, breed a Gold Chocobo to reach the Knights of the Round island and grab that Materia.",
                "4. Grind AP in the Northern Cave to master every Materia (you will need multiple copies of some), which covers Master Materia, Materia Overlord and the last Limit Breaks.",
                "5. Fight the four Weapons - Ultimate and Diamond fall during the story's end, then return for Ruby (in the desert) and Emerald (underwater) with a mastered, HP-Absorb setup.",
                "Tip: for Emerald and Ruby Weapon, the classic KOTR + HP Absorb + Mime combo trivialises both fights - link Knights of the Round with HP Absorb on one character and Mime on the others to chain summons while healing to full every cast."
            ]
        }
    ]
};
