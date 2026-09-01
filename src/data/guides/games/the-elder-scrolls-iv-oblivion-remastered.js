// The Elder Scrolls IV: Oblivion Remastered Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/the-elder-scrolls-iv-oblivion-remastered.json), whose 60 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   2623190 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "the-elder-scrolls-iv-oblivion-remastered-achievement-guide",
    "category": "game",
    "gameSlug": "the-elder-scrolls-iv-oblivion-remastered",
    "icon": "🗿",
    "title": "The Elder Scrolls IV: Oblivion Remastered Achievement Guide",
    "summary": "A practical guide to all 60 Steam achievements in The Elder Scrolls IV: Oblivion Remastered - none are hidden. None of the achievements are hidden. Covers the main questline, the Arena, and rising to the head of the Dark Brotherhood, Thieves Guild, Mages Guild and Fighters Guild, plus the whole Shivering Isles expansion - and a single character can complete every one of these in one playthrough.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "The Elder Scrolls IV: Oblivion Remastered has 60 Steam achievements and none are hidden. They form seven clean tracks: the six-step main quest (escaping the Imperial Sewers through 'Champion of Cyrodiil'), and one achievement for joining and then each rank promotion of the Dark Brotherhood, the Arena, the Thieves Guild, the Mages Guild and the Fighters Guild, ending with the top-rank achievement for finishing each guild's questline. The final ten are the Shivering Isles expansion, one per rank in the Court of Madness from 'Tourist' up to 'Madgod' for stopping the Greymarch.",
                "The catalog marks it difficulty 3. Nothing is missable and nothing needs a second character - Oblivion lets one character lead every faction at once - so this is a long completion rather than a hard one. The Arena and the guild questlines are the bulk of the time; the Mages Guild needs recommendations from every city first, and the Thieves Guild gates promotions behind a running total of gold stolen.",
                "Tip: start the Dark Brotherhood by sleeping after committing a murder - the questline is entirely separate from the main quest and one of the fastest full tracks, and its rewards make everything else easier."
            ]
        },
        {
            "heading": "The Main Quest",
            "body": [
                "Escaping the Imperial Sewers, closing an Oblivion Gate, locating the Shrine of Dagon, delivering a Daedric Artifact, destroying the Great Gate at Bruma, and completing the main questline as the Champion of Cyrodiil.",
                "The achievements here: Escaped the Imperial Sewers (Escaped the Imperial Sewers, Main Quest Beginning); Closed an Oblivion Gate (Closed an Oblivion Gate, Main Quest); Located the Shrine of Dagon (Located the Shrine of Dagon, Main Quest); Delivered Daedric Artifact (Delivered Daedric Artifact, Main Quest); Destroyed the Great Gate (Destroyed the Great Gate, Main Quest); Champion of Cyrodiil (Completed the Main Questline)."
            ]
        },
        {
            "heading": "The Dark Brotherhood",
            "body": [
                "Joining the Dark Brotherhood and each promotion - Murderer, Slayer, Eliminator, Assassin, Silencer, Speaker - up to Listener for finishing the questline.",
                "The achievements here: Murderer, Dark Brotherhood (Join the Dark Brotherhood); Slayer, Dark Brotherhood (Reached Slayer rank in the Dark Brotherhood); Eliminator, Dark Brotherhood (Reached Eliminator rank in the Dark Brotherhood); Assassin, Dark Brotherhood (Reached Assassin rank in the Dark Brotherhood); Silencer, Dark Brotherhood (Reached Silencer rank in the Dark Brotherhood); Speaker, Dark Brotherhood (Reached Speaker rank in the Dark Brotherhood); Listener, Dark Brotherhood (Completed the Dark Brotherhood Questline)."
            ]
        },
        {
            "heading": "The Arena",
            "body": [
                "Joining the Imperial City Arena as a Pit Dog and every rank after it - Brawler, Bloodletter, Myrmidon, Warrior, Gladiator, Hero, Champion - up to Grand Champion for completing the Arena questline.",
                "The achievements here: Pit Dog, Arena (Joined the Arena in the Imperial City); Brawler, Arena (Reached Brawler rank in the Arena); Bloodletter, Arena (Reached Bloodletter rank in the Arena); Myrmidon, Arena (Reached Myrmidon rank in the Arena); Warrior, Arena (Reached Warrior rank in the Arena); Gladiator, Arena (Reached Gladiator rank in the Arena); Hero, Arena (Reached Hero rank in the Arena); Champion, Arena (Reached Champion rank in the Arena); Grand Champion, Arena (Completed the Arena Questline)."
            ]
        },
        {
            "heading": "The Thieves Guild",
            "body": [
                "Joining the Thieves Guild and each rank - Pickpocket, Footpad, Bandit, Prowler, Cat Burglar, Shadowfoot, Master Thief - up to Guildmaster for finishing the questline. Promotions need a growing total of gold stolen as well as the quests.",
                "The achievements here: Pickpocket, Thieves Guild (Joined the Thieves Guild); Footpad, Thieves Guild (Reached Footpad rank in the Thieves Guild); Bandit, Thieves Guild (Reached Bandit rank in the Thieves Guild); Prowler, Thieves Guild (Reached Prowler rank in the Thieves Guild); Cat Burglar, Thieves Guild (Reached Cat Burglar rank in the Thieves Guild); Shadowfoot, Thieves Guild (Reached Shadowfoot rank in the Thieves Guild); Master Thief, Thieves Guild (Reached Master Thief rank in the Thieves Guild); Guildmaster, Thieves Guild (Completed the Thieves Guild Questline)."
            ]
        },
        {
            "heading": "The Mages Guild",
            "body": [
                "Joining the Mages Guild (after earning a recommendation from every city's hall) and each rank - Apprentice, Journeyman, Evoker, Conjurer, Magician, Warlock, Wizard, Master-Wizard - up to Arch-Mage for completing the questline.",
                "The achievements here: Associate, Mages Guild (Joined the Mages Guild); Apprentice, Mages Guild (Reached Apprentice rank in the Mages Guild); Journeyman, Mages Guild (Reached Journeyman rank in the Mages Guild); Evoker, Mages Guild (Reached Evoker rank in the Mages Guild); Conjurer, Mages Guild (Reached Conjurer rank in the Mages Guild); Magician, Mages Guild (Reached Magician rank in the Mages Guild); Warlock, Mages Guild (Reached Warlock rank in the Mages Guild); Wizard, Mages Guild (Reached Wizard rank in the Mages Guild); Master-Wizard, Mages Guild (Reached Master-Wizard rank in the Mages Guild); Arch-Mage, Mages Guild (Completed the Mages Guild Questline)."
            ]
        },
        {
            "heading": "The Fighters Guild",
            "body": [
                "Joining the Fighters Guild and each rank - Apprentice, Journeyman, Swordsman, Protector, Defender, Warder, Guardian, Champion - up to Master for finishing the questline.",
                "The achievements here: Associate, Fighters Guild (Joined the Fighters Guild); Apprentice, Fighters Guild (Reached Apprentice rank in the Fighters Guild); Journeyman, Fighters Guild (Reached Journeyman rank in the Fighters Guild); Swordsman, Fighters Guild (Reached Swordsman rank in the Fighters Guild); Protector, Fighters Guild (Reached Protector rank in the Fighters Guild); Defender, Fighters Guild (Reached Defender rank in the Fighters Guild); Warder, Fighters Guild (Reached Warder rank in the Fighters Guild); Guardian, Fighters Guild (Reached Guardian rank in the Fighters Guild); Champion, Fighters Guild (Reached Champion rank in the Fighters Guild); Master, Fighters Guild (Completed the Fighters Guild Questline)."
            ]
        },
        {
            "heading": "Shivering Isles",
            "body": [
                "Entering the Shivering Isles and every rank in Sheogorath's Court of Madness - Aspirant, Citizen, Madman, Honored Madman, Duke of Dementia, Duke of Mania, Regent, Defender of the Realm - up to Madgod for stopping the Greymarch.",
                "The achievements here: Tourist, Shivering Isles (Entered the Shivering Isles); Aspirant, Shivering Isles (Reached Aspirant Rank in the Court of Madness); Citizen, Shivering Isles (Reached Citizen Rank in the Court of Madness); Madman, Shivering Isles (Reached Madman Rank in the Court of Madness); Honored Madman, Shivering Isles (Reached Honored Madman Rank in the Court of Madness); Duke Dementia, Shivering Isles (Reached Duke of Dementia Rank in the Court of Madness); Duke Mania, Shivering Isles (Reached Duke of Mania Rank in the Court of Madness); Regent, Shivering Isles (Reached Regent Rank in the Court of Madness); Defender, Shivering Isles (Reached Defender of the Realm Rank in the Court of Madness); Madgod, Shivering Isles (Stopped the Greymarch)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the main quest at least as far as you like - it is only six achievements and never becomes unavailable.",
                "2. Run the Arena from Pit Dog to Grand Champion in one visit to the Imperial City.",
                "3. Work the Dark Brotherhood and Thieves Guild together - both are city-based and the Thieves Guild's gold-stolen requirement builds up while you play.",
                "4. Collect all the Mages Guild recommendations, join, and climb to Arch-Mage; do the Fighters Guild alongside it.",
                "5. Start Shivering Isles last and take every rank of the Court of Madness through to Madgod.",
                "Tip: the Thieves Guild ranks are gated by cumulative gold stolen (up to 1000+), not just quests - fence stolen goods and pickpocket freely between quests so you are never waiting on the total."
            ]
        }
    ]
};
