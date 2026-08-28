// Sekiro: Shadows Die Twice's Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/sekiro.json), whose 34 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   814380 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js) - 11 of 34 ship a real,
//   official Steam description, quoted directly below.
// - The other 23 are hidden (FromSoftware's house style: bosses and
//   endings). Their unlock conditions here are curatorial, cross-checked
//   against the Fextralife Sekiro wiki. Boss achievements are described
//   as "defeat X"; the four endings are named but not explained.
// - The grouping (endings, boss defeats, skills and gear, the visible
//   story milestones, then completion) follows the achievements' own
//   apiname order.
export const GUIDE = {

    slug: "sekiro-achievement-guide",
    category: "game",
    gameSlug: "sekiro",
    icon: "🗡️",
    title: "Sekiro: Shadows Die Twice Achievement Guide",
    summary: "A practical guide to all 34 Steam achievements in Sekiro - the four endings, every boss defeat, the skill and prosthetic upgrades, and what New Game Plus is needed for.",

    relatedSlugs: ["achievement-completion-and-tracking", "understanding-achievement-availability"],

    sections: [

        {
            heading: "Overview",
            body: [
                "Sekiro has 34 Steam achievements, 23 of them hidden. Most hidden ones are boss defeats; four are the game's endings.",
                "This is a two-playthrough game. The four endings branch late and are mutually exclusive, and Man Without Equal (defeat every boss on one save) requires New Game Plus because a Shura-ending run skips several bosses that a normal run gets, and vice versa. Master of the Prosthetic also needs NG+ for rare late-game upgrade materials.",
                "Tip: on your first run, avoid the Shura ending (it locks out most of the game's second half). Take Immortal Severance, Purification, or Dragon's Homecoming, then do a Shura run in NG+ specifically for Shura and the bosses it skips."
            ]
        },

        {
            heading: "The Four Endings",
            body: [
                "Immortal Severance is the standard ending. Purification and Dragon's Homecoming require completing an NPC questline and making a specific choice at the finale. Shura is an early alternate ending triggered by one dialogue choice partway through the game - it ends the story immediately, so save it for a dedicated run."
            ]
        },

        {
            heading: "Boss Defeats",
            body: [
                "Early and mid bosses: Gyoubu Masataka Oniwa, The Phantom Lady Butterfly, Genichiro Ashina, Folding Screen Monkeys, and the Corrupted Monk. The Guardian Ape has two: Guardian Ape for the first fight and Guardian Ape Immortality Severed for the follow-up.",
                "Late bosses: Great Shinobi - Owl, Father Surpassed (the optional Owl rematch), Isshin Ashina, and the final boss Sword Saint, Isshin Ashina. Demon of Hatred is a brutal optional fight tied to one ending path.",
                "The two \"hidden depths\" fights: Great Serpent and Great Colored Carp are stealth/environmental kills rather than duels. Gracious Gift of Tears comes from defeating the Divine Dragon and taking its Tears - automatic on any non-Shura run."
            ]
        },

        {
            heading: "Skills & Gear",
            body: [
                "Prosthetic and combat: All Prosthetic Tools (acquire them all), Master of the Prosthetic (upgrade them all to the limit), All Ninjutsu Techniques, Lazuline Upgrade (use Lapis Lazuli to max one Prosthetic Tool), Height of Technique (every skill from the skill trees), and Master of the Arts (obtain a final skill-tree art).",
                "Stats and healing: Peak Physical Strength (max Vitality and Posture) and Ultimate Healing Gourd (fully upgrade the Healing Gourd)."
            ]
        },

        {
            heading: "Story Milestones",
            body: [
                "The visible progression achievements come on their own: Revered Blade (receive Kusabimaru from Kuro), Shinobi Prosthetic (acquire the prosthetic arm), Resurrection (return from death for the first time), Memorial Mob (meet the Memorial Mob merchant), and Ashina Traveler (visit every area in the game)."
            ]
        },

        {
            heading: "Completion",
            body: [
                "Sekiro is the catch-all for unlocking every other achievement in the game, which by definition requires New Game Plus and all four endings."
            ]
        },

        {
            heading: "Suggested Order",
            body: [
                "First run: explore everything (Ashina Traveler), acquire all Prosthetic Tools and Ninjutsu, work the skill trees toward Height of Technique and Master of the Arts, and defeat every boss you meet - Gyoubu Masataka Oniwa, The Phantom Lady Butterfly, Genichiro Ashina, Guardian Ape, Guardian Ape Immortality Severed, Folding Screen Monkeys, Corrupted Monk, Great Serpent, Great Colored Carp, Great Shinobi - Owl, and Demon of Hatred. Take a non-Shura ending (Immortal Severance, Purification, or Dragon's Homecoming), which also gives Gracious Gift of Tears.",
                "New Game Plus: max your stats and gear (Peak Physical Strength, Ultimate Healing Gourd, Master of the Prosthetic, Lazuline Upgrade), pick up Father Surpassed, take the Shura ending for that achievement plus Isshin Ashina, then a final run to the true finale for Sword Saint, Isshin Ashina.",
                "Once every boss and every ending is done across your save, Man Without Equal and Sekiro unlock."
            ]
        }

    ]

};
