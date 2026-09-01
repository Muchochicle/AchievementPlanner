// Civilization VII Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/civilization-vii.json), whose 37 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1295660 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "civilization-vii-achievement-guide",
    "category": "game",
    "gameSlug": "civilization-vii",
    "icon": "🏛",
    "title": "Civilization VII Achievement Guide",
    "summary": "A practical guide to all 37 Steam achievements in Civilization VII - none are hidden. Covers winning the modern age as each of the 24 leaders and the Triumph and Deity-difficulty achievements. None of the achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Sid Meier's Civilization VII has 37 Steam achievements and none are hidden. Twenty-four are for winning the modern age as a specific leader - from Tecumseh and Amina through both personas of Ashoka, Himiko, Friedrich and Xerxes, to Trung Trac and Pachacuti. The other thirteen are for completing three Major Triumphs of the same type (Cultural, Economic, Military, Scientific, Diplomatic or Expansionist) in a single age, across both the Antiquity and Exploration ages, plus winning a game on Deity difficulty.",
                "The catalog marks it difficulty 3. No single achievement is hard on its own, but collecting all 24 leader-specific wins means playing (and winning) dozens of full games, and Deity is the game's hardest AI difficulty.",
                "Tip: pick a leader whose civilization bonuses suit the victory type you're going for each game, and knock out a Triumph achievement or two on the side of every leader-win game."
            ]
        },
        {
            "heading": "Win the Modern Age as Every Leader",
            "body": [
                "Winning the modern age with each of the 24 leaders and their personas: Tecumseh, Amina, both personas of Ashoka, Augustus, Ben Franklin, Catherine the Great, Charlemagne, Confucius, both personas of Friedrich, Harriet Tubman, Hatshepsut, both personas of Himiko, Ibn Battuta, Isabella, Jose Rizal, Lafayette, Machiavelli, Pachacuti, Trung Trac, and both personas of Xerxes.",
                "The achievements here: Shawnee Deep in Victory. (Win the modern age as Tecumseh.); Woman-o-war. (Win the modern age as Amina.); Budding Buddhist. (Win the modern age as Ashoka, World Renouncer.); Roman of the Hour. (Win the modern age as Augustus.); Postmaster and Commander. (Win the modern age as Ben Franklin.); Lived up to the Name. (Win the modern age as Catherine the Great.); Magne Squeeze. (Win the modern age as Charlemagne.); Proverbial Wisdom. (Win the modern age as Confucius.); On the Fritz. (Win the modern age as Friedrich, Oblique.); Ground Breaker/Freedom Fighter. (Win the modern age as Harriet Tubman.); Suted for Battle. (Win the modern age as Hatshepsut.); Radiance of the Sun. (Win the modern age as Himiko, Queen of Wa.); Son of a Duck. (Win the modern age as Ibn Battuta.); Inquisitor Queen (Win the modern age as Isabella.); Can't Touch This. (Win the modern age as Jose Rizal.); Had the last Lafayette. (Win the modern age as Lafayette.); Hit Mach 10. (Win the modern age as Machiavelli.); Eat, Inca, and be Merry. (Win the modern age as Pachacuti.); Sisters Before Misters. (Win the modern age as Trung Trac.); Sailed the Seven Xerxes. (Win the modern age as Xerxes, King of kings.); Xerxing Red. (Win the modern age as Xerxes, the Achaemenid.); Sorry Not Sorrow. (Win the modern age as Ashoka, World Conqueror.); Enlightened Rule. (Win the modern age as Himiko, High Shaman.); Deep Friedrich. (Win the modern age as Friedrich, Baroque.)."
            ]
        },
        {
            "heading": "Triumphs & Deity Difficulty",
            "body": [
                "Completing three Major Triumphs of the same type in a single age - Cultural, Economic, Military and Scientific in both the Antiquity Age and the Exploration Age, and Diplomatic and Expansionist likewise in both ages - plus Playing God for winning a game on Deity difficulty.",
                "The achievements here: One Hit Wonder. (Complete 3 Major Cultural Triumphs in a single Antiquity Age.); Trade Secret. (Complete 3 Major Economic Triumphs in a single Antiquity Age.); Pax a Wallop. (Complete 3 Major Military Triumphs in a single Antiquity Age.); Book Smart. (Complete 3 Major Scientific Triumphs in a single Antiquity Age.); Relic Hunter. (Complete 3 Major Cultural Triumphs in a single Exploration Age.); Coin Toss. (Complete 3 Major Economic Triumphs in a single Exploration Age.); Settled the Score. (Complete 3 Major Military Triumphs in a single Exploration Age.); Science in the Suburbs. (Complete 3 Major Scientific Triumphs in a single Exploration Age.); Talk of the Towns. (Complete 3 Major Diplomatic Triumphs in a single Antiquity Age.); Paint the Map. (Complete 3 Major Expansionist Triumphs in a single Antiquity Age.); Velvet Glove. (Complete 3 Major Diplomatic Triumphs in a single Exploration Age.); Beyond the Horizon. (Complete 3 Major Expansionist Triumphs in a single Exploration Age.); Playing God. (Win a game on Deity difficulty.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Start with a leader whose kit fits a victory type you're comfortable with, and win the modern age with them.",
                "2. Work through the rest of the 24 leaders (and both personas of Ashoka, Friedrich, Himiko and Xerxes) a few games at a time.",
                "3. While playing, aim for three Major Triumphs of the same type in a single age when it's convenient, in both the Antiquity and Exploration ages.",
                "4. Take on Deity difficulty once you're comfortable with the game's systems, for Playing God.",
                "Tip: Triumph achievements can be earned incidentally on any leader-win game, so track them alongside your leader checklist rather than farming them separately."
            ]
        }
    ]
};
