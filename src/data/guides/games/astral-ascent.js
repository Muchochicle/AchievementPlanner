// Astral Ascent's Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/astral-ascent.json), whose 89 achievements
//   were sourced directly from Steam's own achievement schema for appid
//   1280930 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js) - 87 of 89 ship a real,
//   official Steam description, quoted directly below.
// - The two hidden achievements (The Master, Defeat The Master) ship no
//   Steam description. Their apinames (zodiacs_defeat_ophiuchus,
//   zodiacs_trueForm_ophiuchus) place them in the same defeat / "at
//   Destiny Level 6+" pattern as the twelve visible Zodiac pairs, for
//   the game's hidden thirteenth Zodiac, Ophiuchus - stated here
//   without spoiling the story context around that fight.
// - The grouping (run-to-run progression, combat feats, the Garden hub
//   and its residents, the twelve Zodiac bosses and their Unleashed
//   forms, the Star Guardian minibosses, then the Path of Destinies
//   endgame) is read directly from each achievement's own description
//   and apiname prefix.
export const GUIDE = {

    slug: "astral-ascent-achievement-guide",
    category: "game",
    gameSlug: "astral-ascent",
    icon: "✨",
    title: "Astral Ascent Achievement Guide",
    summary: "A practical guide to all 89 Steam achievements in Astral Ascent - run progression, the Garden hub, the twelve Zodiac bosses and their Unleashed forms, the Star Guardian minibosses, and the Path of Destinies endgame.",

    relatedSlugs: ["achievement-completion-and-tracking", "understanding-achievement-availability"],

    sections: [

        {
            heading: "Overview",
            body: [
                "Astral Ascent has 89 Steam achievements. Only two are hidden (The Master and Defeat The Master, the game's secret Zodiac fight). Nothing is missable - it is a roguelite, so every boss, region, and upgrade is always reachable on the next escape attempt.",
                "The bulk of the list is boss kills: the twelve Zodiacs and their harder Unleashed forms, plus a rotating cast of Star Guardian minibosses. Around that sits run progression, a set of combat feats, and the Garden hub where you unlock the four playable characters' endings.",
                "Tip: don't force the hard boss achievements early. Sink your first hours into the Garden's permanent upgrades and getting comfortable with one character - a strong build makes both the Unleashed Zodiacs and the Path of Destinies content much more approachable."
            ]
        },

        {
            heading: "Run Progression",
            body: [
                "Reaching new areas: Scorching Heat (the Red Barrens), Deep Water (the Coral Archipelago), Magnetic Storm (the Crimson Highlands), and Almost out... (the Event Horizon), with Perseverance for starting 30 escape attempts and Where it all started… for reaching the Garden.",
                "Build and economy feats: Precious Belongings (upgrade a spell to level 10), Optimal Affinity (4 affinity gambits on one spell), Astral Wish (equip an Astral Aura), Astral Luck (equip an Astral Gambit), Zodiac Strength (reach level 12), Multi-Classed (8 stones of each type equipped at once), Jackpot (buy out an Itinerant Peddler), Wealthy Prisoner (1000 Quartz in a run), Galaxy Owner (use 200 Stars in a run), and Key Master (open 150 Key Chests).",
                "Room and NPC interactions: Impressed Zodiacs (succeed at a Zodiac Challenge), Maximized Friendship (5 Echoes in a run), Moon Testimony (equip a Zodiac Spell in The Moon Room), Sun Testimony (change a Spell affinity in The Sun Room), Sneaky Ally (meet Chamaeleon), Guardian Angel (your Zodiac sign helps you 3 times), Time for Oneself (12 Bench dialogues), and Yalees Savior (save all Yalees from the Kingdom)."
            ]
        },

        {
            heading: "Combat Feats",
            body: [
                "Lost Spirits (capture 5 Astral Spirits), Celestial Support (summon a Zodiac to support you), Slippery Hero (perfect 30 Fight Rooms), A Ton of Damage (reach 1000 damage in one combo), and Practice makes perfect (use your Signature Spell 500 times) all accumulate over a normal push toward the rest of the list."
            ]
        },

        {
            heading: "The Garden",
            body: [
                "The Garden is the hub, and each resident is a small unlock: Smiley Face (Zim-Zim), Mysterious Face (the Peddler), Knightly Face (Sire Bapy), Stellar Face (Barbecue), Friendly Face (Papa Yalee), Stylized Face (Oloon), The Little Brother (Octave), and The Gifted Artist (Calie).",
                "Then fully building out what each offers: Plants Infused (all Zim-Zim abilities), From the Stars (all Auras from Barbecue), Arsenal (all spells from the Peddler), Synesthesia (all Oloon colors), Grand Library (all memory fragments for Papa Yalee), Halfway Legend (50% of Sire Bapy's achievements), and the one-off Shhh… for finding the hidden nest in the Garden."
            ]
        },

        {
            heading: "The Twelve Zodiacs",
            body: [
                "Each Zodiac boss has a defeat achievement: Taurus, Virgo, Capricorn, Aries, Sagittarius, Leo, Pisces, Scorpio, Cancer, Libra, Aquarius, and Gemini.",
                "Each also has an Unleashed achievement for beating that Zodiac at Destiny Level 6 or higher: Unleashed Taurus, Unleashed Virgo, Unleashed Capricorn, Unleashed Aries, Unleashed Sagittarius, Unleashed Leo, Unleashed Pisces, Unleashed Scorpio, Unleashed Cancer, Unleashed Libra, Unleashed Aquarius, and Unleashed Gemini. Raising the Destiny Level makes every boss on the run tougher, so these come after you can clear a run comfortably."
            ]
        },

        {
            heading: "Star Guardians",
            body: [
                "The Star Guardian minibosses each have a defeat achievement: Star Guardian Pegasus, Star Guardian Lupus, Star Guardian Draco, Star Guardian Hydra, Star Guardian Monoceros, Star Guardian Sculptor, Star Guardian Bodyboulder, Star Guardian Praxis, and Star Guardian Tasmos. Bane of the Star Guardians unlocks for defeating 30 Star Guardians in total, which happens naturally while chasing the individual ones."
            ]
        },

        {
            heading: "Path of Destinies & Endings",
            body: [
                "The Path of Destinies is the game's endgame progression. Sova’s Secret Plan (unlock it), Bending Destiny (collect 100 Destiny Fragments), Undecided Power (activate all Void Catalyst abilities at once), Pushing Limits (upgrade a spell to level 15), and Beyond Horizon (succeed at an escape at Destiny Level 15 or higher) are its milestones.",
                "Each of the four playable characters has an ending achievement: Making the Impossible (Ayla), The Silver Scout (Kiran), Escaping Destiny (Octave), and Time for Prosperity (Calie)."
            ]
        },

        {
            heading: "The Master",
            body: [
                "The two hidden achievements are The Master and Defeat The Master, for the game's secret thirteenth Zodiac, Ophiuchus. The Master unlocks for defeating Ophiuchus once; Defeat The Master unlocks for beating that fight at Destiny Level 6 or higher, mirroring the Unleashed pattern of the other twelve."
            ]
        },

        {
            heading: "Suggested Order",
            body: [
                "Play normally, pushing through the regions (Scorching Heat, Deep Water, Magnetic Storm, Almost out...) and letting the progression and combat feats build. Unlock Garden residents as they appear and spend on their permanent upgrades.",
                "Once you can clear a full run, work through the twelve Zodiac defeats and the Star Guardians, then raise the Destiny Level for the twelve Unleashed Zodiacs and Bane of the Star Guardians.",
                "Fill out the Garden completion goals (Plants Infused, From the Stars, Arsenal, Synesthesia, Grand Library, Halfway Legend) and each character's ending (Making the Impossible, The Silver Scout, Escaping Destiny, Time for Prosperity).",
                "Finish with the Path of Destinies (Sova’s Secret Plan through Beyond Horizon) and, at high Destiny Level, the secret Ophiuchus fight for The Master and Defeat The Master."
            ]
        }

    ]

};
