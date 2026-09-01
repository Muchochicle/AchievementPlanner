// Elden Ring Nightreign Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/elden-ring-nightreign.json), whose 37 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   2622380 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 28 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (PowerPyx / Game8 / PlayStationTrophies / TrueAchievements) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "elden-ring-nightreign-achievement-guide",
    "category": "game",
    "gameSlug": "elden-ring-nightreign",
    "icon": "🌚",
    "title": "Elden Ring Nightreign Achievement Guide",
    "summary": "A practical guide to all 37 Steam achievements in Elden Ring Nightreign (28 hidden). Covers the eight Expeditions and their Nightlord bosses, unlocking the Duchess and Revenant, the ending, the four Shifting Earth secrets, the four raid events, and the run-based challenge achievements. Twenty-eight of the achievements are hidden and their unlock conditions are researched from community 100% guides.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Elden Ring Nightreign has 37 Steam achievements and 28 are hidden. Eight are for defeating each of the Nightlord bosses that end the eight Expeditions - Gladius (Tricephalos), Adel (Gaping Jaw), Gnoster (Sentient Pest), Maris (Augur), Libra (Equilibrious Beast), Fulghor (Darkdrift Knight), Caligo (Fissure in the Fog) and Heolstor (Night Aspect). The rest are story and progression beats: the Nightlords and Night Aspect appearing, unlocking the Duchess and the Revenant, reaching the ending, finding the secret of each of the four Shifting Earth locations (Mountaintop, Crater, Rotted Woods, Noklateo), completing the four raid events, and the hard challenge achievements - beating a Nightlord with all eight characters, three Nightlords in a row, maxing level in one Expedition, and more.",
                "The catalog marks it difficulty 4. This is a co-op roguelike - runs are self-contained and nothing is permanently missable, but everything must be earned across many Expedition attempts, and the two hardest achievements ('A Champion's Path' - a Nightlord kill with every character; 'Nightlord Slayer' - three different Nightlords in a row) demand real mastery. Designed for three players; solo is possible but much harder.",
                "Tip: chase 'A Champion's Path' deliberately by rotating which character you pick each run once you can reliably clear at least one Nightlord - it is the single longest achievement, and spreading kills across all eight characters as you go avoids a grind at the end."
            ]
        },
        {
            "heading": "Expeditions, Nightlords & the Ending",
            "body": [
                "Reaching the Shrouded Roundtable Hold, the Nightlords and Night Aspect appearing, unlocking the Duchess and the Revenant, reaching the ending, defeating all eight Nightlord bosses (Gladius, Adel, Gnoster, Maris, Libra, Fulghor, Caligo, Heolstor), the all-Nightlords clear, and first-time relic, dresser, vessel and legendary-armament milestones.",
                "The achievements here: Nightreign (Earned all achievements); The Shrouded Roundtable Hold (Reached the Shrouded Roundtable Hold); The Nightlords (The Nightlords appeared (story - revealed after your first Expedition).); Night Begins (The Night Aspect appeared.); The Duchess Joins the Fray (The Duchess became a playable character.); The Revenant Joins the Fray (The Revenant became a playable character.); Dawn (Reached the ending - complete the 8th Expedition and offer the Nightlord's Rune.); Tricephalos (Defeated Gladius, Beast of Night (the Tricephalos Expedition's Nightlord).); Gaping Jaw (Defeated Adel, Baron of Night (the Gaping Jaw Expedition's Nightlord).); Sentient Pest (Defeated Gnoster, Wisdom of Night (the Sentient Pest Expedition's Nightlord).); Augur (Defeated Maris, Fathom of Night (the Augur Expedition's Nightlord).); Equilibrious Beast (Defeated Libra, Creature of Night (the Equilibrious Beast Expedition's Nightlord).); Darkdrift Knight (Defeated Fulghor, Champion of Nightglow (the Darkdrift Knight Expedition's Nightlord).); Fissure in the Fog (Defeated Caligo, Miasma of Night (the Fissure in the Fog Expedition's Nightlord).); Night Aspect (Defeated Heolstor the Nightlord (the final Nightlord, ending the Night Aspect Expedition).); Nightlord Conqueror (Defeated all Nightlords); Relic (Invoked the power of a relic for the first time); Dresser (Changed garb via dresser for the first time); Vessel (Acquired a new vessel and conducted a different relic rite for the first time)."
            ]
        },
        {
            "heading": "Shifting Earth, Raids & Run Challenges",
            "body": [
                "Finding the secret of each Shifting Earth location (Mountaintop, the Crater, the Rotted Woods, Noklateo), acquiring many vessels, defeating a Nightlord with every character, maxing level in one Expedition, replenishing sacred flasks, 10+ great-enemy kills in one run, the Oldest Gaol, a full high-rarity loadout, the four raid events (Fell Omen, Plague of Locusts, Typhoon, True Arbiter), and defeating three different Nightlords in a row.",
                "The achievements here: Legendary Armament (Acquired a legendary armament for the first time); Mountaintop (Found the secret of the Mountaintop Shifting Earth location.); The Crater (Found the secret of the Crater Shifting Earth location.); Rotted Woods (Found the secret of the Rotted Woods Shifting Earth location.); Noklateo, the Shrouded City (Found the secret of Noklateo, the Shrouded City.); Shifting Earth (Found the secrets of all Shifting Earth locations); Obtained Vessels (Acquired a great many vessels); A Champion's Path (Defeated a Nightlord with each of the eight playable characters.); Mastery (Attained maximum level within a single Expedition.); Replenished Sacred Flasks (Acquired a great number of flask charges in one Expedition.); Untold Power (Defeated 10 or more great enemies ('Great Enemy Felled') on one Expedition.); Old Gaol (Completed the Oldest Gaol (a stronger gaol variant).); Set and Steadfast (Acquired many pieces of high-rarity equipment on a single Expedition.); Fell Omen (Completed the Fell Omen raid.); Plague of Locusts (Completed the Sentient Pest raid ('Plague of Locusts').); Typhoon (Completed the Augur raid ('Typhoon').); True Arbiter (Completed the Equilibrious Beast raid ('True Arbiter').); Nightlord Slayer (Defeated 3 different Nightlords in a row without failing an Expedition between them.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Learn the loop with early Expeditions, defeating Gladius and Adel and unlocking the Duchess and the Revenant.",
                "2. Work through all eight Nightlords for their individual achievements and the all-Nightlords clear, then reach the ending.",
                "3. Explore each Shifting Earth location fully for its secret (Mountaintop, Crater, Rotted Woods, Noklateo).",
                "4. Clear the four raid events (Fell Omen, Plague of Locusts, Typhoon, True Arbiter).",
                "5. Grind the challenge achievements - a Nightlord kill with each of the eight characters, maxing level in one run, 10+ great-enemy kills, the Oldest Gaol, a full purple loadout, and three Nightlords in a row.",
                "Tip: 'Replenished Sacred Flasks', 'Untold Power' and 'Set and Steadfast' can all be set up on the same strong Expedition run - prioritise Site of Grace churches, minor bosses and treasure early so one good run knocks out several at once."
            ]
        }
    ]
};
