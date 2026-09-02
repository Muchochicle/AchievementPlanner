// Millennia Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/millennia.json), whose 49 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1268590 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 8 achievement(s) are Steam-hidden or ship no Steam
//   description; their description here is researched from community
//   100% guides and is a curatorial summary. Every other description is
//   Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "millennia-achievement-guide",
    "category": "game",
    "gameSlug": "millennia",
    "icon": "⏳",
    "title": "Millennia Achievement Guide",
    "summary": "A practical guide to all 49 Steam achievements in Millennia (8 hidden). The eight hidden achievements are the secret Age of Old Ones and the seven-step Glitch / Project ATLAS 'True Ending' anomaly chain. Everything else - taking the timeline into each variant Age, the many victory types, and the religion / faction / expedition / custom-nation systems - carries Steam's own text.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Millennia has 49 Steam achievements, 8 of them hidden. It is a historical 4X where your nation's choices push the shared timeline into Standard, Variant or Crisis Ages. The visible achievements cover taking the timeline into each named Age (Heroes, Monuments, Discovery, Alchemy, Aether, Utopia, Blood, Plague, Intolerance, Heresy, Ignorance, Dystopia, Visitors, Atom, Wasteland), winning via each victory Age (Conquest, Harmony, Generals, Departure, Archangels, Transcendence, Singularity, Wasteland), the other win/lose conditions, and the religion, faction, expedition and custom-nation systems.",
                "The 8 hidden achievements are the secret Age of Old Ones and the Glitch chain: revealing Glitches #1 through #6 (the Project ATLAS anomaly storyline) and winning via the resulting 'True Ending' victory.",
                "The catalog marks it difficulty 3 and multiple playthroughs - the different victory types alone need several games, and the Glitch chain is a deliberate multi-run secret."
            ]
        },
        {
            "heading": "Ages of the Timeline",
            "body": [
                "Taking the timeline into each named Age - Standard, Variant and Crisis - plus the hidden Age of Old Ones and a pure-Standard 'Mainline Timeline' run.",
                "The achievements here: Age of Heroes (Take the timeline into the Age of Heroes.); Age of Monuments (Take the timeline into the Age of Monuments.); Age of Discovery (Take the timeline into the Age of Discovery.); Age of Alchemy (Take the timeline into the Age of Alchemy.); Age of Aether (Take the timeline into the Age of Aether.); Age of Utopia (Take the timeline into the Age of Utopia.); Age of Ecology (Take the timeline into the Age of Ecology.); Age of Blood (Take the timeline into the Age of Blood.); Age of Plague (Take the timeline into the Age of Plague.); Age of Intolerance (Take the timeline into the Age of Intolerance.); Age of Heresy (Take the timeline into the Age of Heresy.); Age of Old Ones (Take the timeline into the hidden Age of Old Ones, a variant Crisis Age.); Age of Ignorance (Take the timeline into the Age of Ignorance.); Age of Dystopia (Take the timeline into the Age of Dystopia.); Age of Visitors (Take the timeline into the Age of Visitors.); Mainline Timeline (Reach the Age of Information with only Standard Ages in the timeline.); Age of Atom (Take the timeline into the Age of Atom.); Age of Wasteland (Take the timeline into the Age of Wasteland.)."
            ]
        },
        {
            "heading": "Victories",
            "body": [
                "Winning via each victory Age, plus winning on the turn limit, as the last nation, against Master AIs, by turn 200, the Wasteland and Singularity victories, and losing a game.",
                "The achievements here: Age of Conquest (Win a game via the Age of Conquest.); Age of Harmony (Win a game via the Age of Harmony.); Age of Generals (Win a game via the Age of Generals.); Age of Departure (Win a game via the Age of Departure.); Age of Archangels (Win a game via the Age of Archangels.); Age of Transcendence (Win a game via the Age of Transcendence.); Out of Time (Win a game by reaching the turn limit.); Time To Die (Win a game by being the last remaining Nation.); Hard Time (Win a game against at least 3 Master AIs.); Fast Times (Win a game by turn 200.); Better Luck Next Time (Lose a game.); Age of the Singularity (Win a game via the Age of the Singularity); Age of Wasteland (Victory) (Win a game via the Age of Wasteland.)."
            ]
        },
        {
            "heading": "Systems & Set Pieces",
            "body": [
                "Starting a religion and a faction, completing an expedition, creating a custom nation, the animal and terrain oddities, and the Wasteland-age set pieces (ICBM, Retaliatory Strike, Peace Convention, Manhattan Project).",
                "The achievements here: Seeds of Faith (Start a religion.); O.G. (Start a Faction.); Dr. Livingstone, I Presume? (Complete an Expedition.); Customizer (Create a Custom Nation.); Petting Zoo (Control both a Mastodon and Smilodon simultaneously.); Abundance (Have a Farm on a Lush Wheat tile.); Network Coverage (Have 4 Tambos.); Undeterred (Launch an ICBM while in Age of Wasteland.); Doomsday Machine (Use a Retaliatory Strike.); Give Peace A Chance (Host a Peace Convention.); I Am Become Death (Complete the Manhattan Project.)."
            ]
        },
        {
            "heading": "The Glitch Chain",
            "body": [
                "The hidden Project ATLAS anomaly storyline: revealing Glitches #1-#6 and winning via the 'True Ending' victory. The community is still documenting the exact triggers.",
                "The achievements here: Glitch #1 (Reveal the first Glitch (Calibration) - part of the hidden Project ATLAS anomaly chain the community is still mapping.); Glitch #2 (Reveal the second Glitch (Purpose) in the hidden Project ATLAS anomaly chain.); Glitch #3 (Reveal the third Glitch in the hidden Project ATLAS anomaly chain.); Glitch #4 (Reveal the fourth Glitch (Darkness) in the hidden Project ATLAS anomaly chain.); Glitch #5 (Reveal the fifth Glitch (Truth) in the hidden Project ATLAS anomaly chain.); Glitch #6 (Reveal the sixth Glitch (Project ATLAS) in the hidden anomaly chain.); True Ending (Win a game via the hidden 'True Ending' victory, reached by completing the Project ATLAS Glitch anomaly chain.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play normal games and take the timeline into whichever Ages your strategy favours; over several runs the Age achievements fill in.",
                "2. Deliberately steer toward each victory type - Conquest, Harmony, Generals, Departure, Archangels, Transcendence - one per game, and try a fast (turn 200) and a Master-AI win.",
                "3. Knock out the systems achievements in any game: found a religion and a faction, run an expedition, build a custom nation, and hit the animal/terrain oddities.",
                "4. Do a Wasteland-age run for the ICBM, Retaliatory Strike, Peace Convention and Manhattan Project set pieces.",
                "5. Pursue the Glitch chain - reveal Glitches #1-#6 across the run and win via the 'True Ending' - using a current community guide, since the triggers are still being mapped.",
                "Tip: the Age achievements are shared-timeline events, not personal ones - on higher-player games another nation can push the timeline into an Age you were setting up, so play smaller or solo-AI games when you are specifically farming a particular Variant or Crisis Age."
            ]
        }
    ]
};
