// Civilization: Beyond Earth Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/civilization-beyond-earth.json), whose 90 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   65980 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "civilization-beyond-earth-achievement-guide",
    "category": "game",
    "gameSlug": "civilization-beyond-earth",
    "icon": "🌌",
    "title": "Civilization: Beyond Earth Achievement Guide",
    "summary": "A practical guide to all 90 Steam achievements in Civilization: Beyond Earth - none are hidden. Covers the sponsors, difficulty levels and victory types, the map, wonder and city-output feats, the virtue, affinity and combat feats, and the Rising Tide expansion achievements.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Sid Meier's Civilization: Beyond Earth has 90 Steam achievements and none of them are hidden. The base game covers winning as each sponsor and on each difficulty (up to Apollo), achieving each of the five victory types, winning on every map size and type, building wonders, hitting 100-per-turn city outputs, fully exploring each virtue tree, and maxing each affinity (Harmony, Purity, Supremacy). The other 26 come from the Rising Tide expansion - four new sponsors, aquatic cities, the diplomacy system, artifacts, hybrid affinities, and the Primordial and Frigid planet types.",
                "Nothing is missable - games restart freely and there are no time-limited achievements. This is a long completion: winning as all thirteen sponsors is thirteen games, the six difficulty wins can be stacked with those, and the map-size/type matrix plus the affinity and virtue-tree feats add many more.",
                "Tip: play most games on a large map at a comfortable difficulty and stack requirements - a single peaceful Purity game can knock out a sponsor win, a victory type, a map size, a map type, an affinity max, and several virtue-tree achievements at once if you plan the settings."
            ]
        },
        {
            "heading": "Sponsors, Difficulty & Victory Types",
            "body": [
                "Winning a game as Fielding, Hutama, Daoming, Kozlov, Barre, Élodie, Bolivar and Kavitha, winning with each base-game leader, winning on Sputnik, Mercury, Vostok, Gemini, Soyuz and Apollo difficulty, and achieving Domination, Contact, Promised Land, Emancipation and Transcendence victories plus one of each other victory.",
                "The achievements here: Chief Extraterrestrial Officer (Win a game as Fielding); The Big Payoff (Win a game as Hutama); Shining Path (Win a game as Daoming); Gagarin's Legacy (Win a game as Kozlov); Father of Nations (Win a game as Barre); The Art of the Infinite (Win a game as Élodie); Never Surrender (Win a game as Bolivar); Moksha (Win a game as Kavitha); Grand Galactic Inquisitor (Win at least one game with each leader (Base Game)); Beep… Beep…. Beep... (Win a game on Sputnik Difficulty); Godspeed (Win a game on Mercury Difficulty); Поехали! (Pojexali!) (Win a game on Vostok Difficulty); 8 Days or Bust (Win a game on Gemini Difficulty); Order of Lenin (Win a game on Soyuz Difficulty); The Eagle Has Landed (Win a game on Apollo Difficulty); Resistance is Futile (Achieve Domination Victory); We Are Not Alone (Achieve Contact Victory); Phone Home (Achieve Promised land); Planned Obsolescence (Achieve Emancipation); It's Full of Stars (Achieve Transcendence); Steely Eyed Missile Man (Achieve one of each other victory)."
            ]
        },
        {
            "heading": "Maps, Wonders & City Milestones",
            "body": [
                "Winning on a Duel, Tiny, Small, Standard and Large map, on Atlantean, Protean, Terran and Archipelago maps, on every map size and type, a multiplayer win, building all wonders and any wonder, playing with a mod, 100+ culture/energy/science per turn in a city, razing 100 Alien nests, embarking a unit, a one-hit kill, and researching all techs.",
                "The achievements here: Aim to Misbehave (Win a game on a Duel Map); Tiny Big Planet (Win a game on a Tiny Map); That's No Moon (Win a game on a Small Map); Pale Blue Dot (Win a game on a Standard Map); The View is Tremendous (Win a game on a Large Map); Poseidon's Children (Win game on Atlantean Map); That New Planet Smell (Win game on Protean Map); A Planet the Very Brother of Your Own (Win game on Terran Map); When Maui Came To This World (Win game on Archipelago Map); United Federation of Planets (Win at least one game on each map size and type); Cylon Computer Virus (Win a multiplayer game); Valley of the Time Tombs (Build all wonders (Base Game)); The Machineries of Joy (Build any wonder); I'm in the middle of some calibrations (Play with a Mod); Mighty Fine Shindig (Develop a city to produce more than 100 culture per turn); Energize (Develop a city to produce more than 100 energy per turn); What Was Once Only Imagined (Develop a city to produce more than 100 science per turn); Making Way for a Hyperspace Bypass (Raze 100 Alien nests); I'm On Another Boat (Embark a unit ); Game over, man! (One Hit Kill); 42 (Research All Techs)."
            ]
        },
        {
            "heading": "Virtues, Affinities & Combat",
            "body": [
                "Fully exploring the Might, Prosperity, Knowledge and Industry virtue trees, upgrading a unit, killing an enemy spy, stealing a tech, purchasing 1,000 tiles, getting beaten to wonders 10 times, downloading a mod, 500 aliens killed, killing a Siege Worm, launching an orbital unit, winning on Taigan, Equatorial and Skirmish maps, unlocking all Tier 1/2/3 virtue synergy bonuses, and reaching max level in Harmony, Purity and Supremacy.",
                "The achievements here: C'mon you apes, you wanna live forever? (Fully explore the Might virtue tree); Live Long and Prosper (Fully explore the Prosperity virtue tree); Logic is the beginning of wisdom (Fully explore the Knowledge virtue tree); No bucks, No Buck Rogers (Fully explore the Industry virtue tree); Mark II (Upgrade a Unit); Enemy Within (Kill an enemy spy); Patent Pending (Steal a tech); Rules of Acquisition (Purchase 1000 Tiles); There is no Try (Get beaten to wonders 10 times); I've made a lot of special modifications myself (Download a mod); The Only Good Bug is a Dead Bug (500 Aliens Killed); Walk Without Rhythm (Killed Siege Worm); Light This Candle (Launch an orbital unit); Just Like Voskhod 2 (Win game on Taigan Map); Cruel and Unusual Geography (Win game on Equatorial Map); Fearful Symmetry (Win game on Skirmish Map (Base Game)); A Fistful of Dollars (Unlock All Tier 1 Virtue Synergy Bonuses); For A Few Dollars More (Unlock All Tier 2 Virtue Synergy Bonuses); Once Upon A Time In Space (Unlock All Tier 3 Virtue Synergy Bonuses); Homo Aliena (Achieve Max Level in Harmony); So Say We All (Achieve Max Level in Purity); The Sound Of Inevitability (Achieve Max Level in Supremacy)."
            ]
        },
        {
            "heading": "Rising Tide Expansion",
            "body": [
                "Winning as Al Falah, North Sea Alliance, INTEGR and Chungsu, founding and moving an aquatic city, winning without land cities, building all aquatic wonders, ramming with an aquatic city, an aquatic-satellite Expedition, creating an Agreement, full Fear and Respect, 100 Diplomatic Capital per turn, a no-war win, finding and cashing in artifacts, collecting 50, building all artifact wonders, unlocking a hybrid affinity, a hybrid Ultimate unit, winning on Primordial and Frigid planets, completing Marvel quests, leashing a Colossal Alien, and 10 kills with Invisible units.",
                "The achievements here: Salam (Win a game as Al Falah); Thy Sea So Great (Win a game as North Sea Alliance); Willing is Not Enough (Win a game as INTEGR); Shadow and Light (Win a game as Chungsu); Splashdown (Found an aquatic city); The Voyageur (Move an aquatic city 50 times); Terror From the Deep (Win without controlling any land cities); Neptune's Glory (Build all aquatic Wonders); Ramming Speed (Kill a unit by moving an aquatic city onto it); Liberty Bell 7 (Complete an Expedition on an aquatic crashed satellite); Let's Make a Deal (Create an Agreement); The Prince (Attain full Fear and full Respect with another player); Lingua Franca (Produce 100 Diplomatic Capital per turn); Ahimsa (Win a game without starting a war); It Belongs in a Museum (Find an Artifact); You Have Chosen Wisely (Cash in an Artifact of each category); 'X' Never Marks the Spot (Collect 50 Artifacts); Fortune and Glory (Build all Artifact Wonders); More Than Meets The Eye (Unlock a Hybrid affinity level); Best of Both Worlds (Build a Hybrid Ultimate unique unit); The Frontier is Everywhere (Win a game on a Primordial planet); Winter is Coming (Win a game on a Frigid planet); The Stuff of Legend (Complete a Marvel quest); The Halls of R'lyeh (Complete all Marvel quests); Shai-Hulud (Leash a Colossal Alien); Silent Service (Kill 10 units with Invisible units)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play a game as each of the eight base sponsors, and stack a difficulty tier, a map size, a map type and a virtue-tree completion onto each.",
                "2. Do the victory-type achievements across those games (aim a couple at Transcendence and Domination specifically).",
                "3. Do the affinity-max and virtue-synergy achievements on games built around one affinity each (Harmony, Purity, Supremacy).",
                "4. Do the combat and city-output feats (100/turn outputs, 500 aliens, Siege Worm, one-hit kill, orbital unit) during any game.",
                "5. Switch to Rising Tide: play as its four sponsors and do the aquatic-city, artifact, diplomacy and hybrid-affinity achievements.",
                "Tip: the map-size and map-type matrix is the biggest count - Beyond Earth lets you win a small, low-difficulty game against weak AI in well under an hour, so grind those specifically rather than hoping full games happen to cover them."
            ]
        }
    ]
};
