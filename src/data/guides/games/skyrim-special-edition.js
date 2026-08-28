// The Elder Scrolls V: Skyrim Special Edition's Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/skyrim-special-edition.json), whose 75
//   achievements were sourced directly from Steam's own achievement
//   schema for appid 489830 via ISteamUserStats/GetSchemaForGame
//   (fetched through this app's own backend/services/steamApi.js) - all
//   75 ship a real, official Steam description, quoted directly below.
//   Skyrim Special Edition has no Steam-hidden achievements; the
//   Dawnguard and Dragonborn add-ons are bundled in and their
//   achievements are included.
// - The grouping (main quest, the four joinable factions, the civil
//   war, shouts and dragons, character progression, general "life in
//   Skyrim" feats, then the Dawnguard and Dragonborn add-ons) is read
//   from what each achievement's own description requires.
export const GUIDE = {

    slug: "skyrim-special-edition-achievement-guide",
    category: "game",
    gameSlug: "skyrim-special-edition",
    icon: "🐉",
    title: "Skyrim Special Edition Achievement Guide",
    summary: "A practical guide to all 75 Steam achievements in The Elder Scrolls V: Skyrim Special Edition - the main quest, the four factions, the civil war, shouts and dragons, character progression, and the Dawnguard and Dragonborn add-ons.",

    relatedSlugs: ["achievement-completion-and-tracking", "understanding-achievement-availability"],

    sections: [

        {
            heading: "Overview",
            body: [
                "Skyrim Special Edition has 75 Steam achievements and none are hidden. The Dawnguard and Dragonborn add-ons are bundled in, and their achievements count toward the total.",
                "Nothing is truly missable - the world stays open and quests can be finished at any time - but two paths force a choice: the civil war has an Imperial and a Stormcloak side (either satisfies the achievements), and the Dawnguard add-on lets you side with the vampires or the Dawnguard (the achievements are worded so either works).",
                "Tip: don't rush the main quest. Levelling, exploring, and doing faction questlines first makes the dragon fights and the add-on content far easier, and most of the grind achievements finish on their own while you do everything else."
            ]
        },

        {
            heading: "The Main Quest",
            body: [
                "The main storyline unlocks eight achievements in order: Unbound, Bleak Falls Barrow, The Way of the Voice, Diplomatic Immunity, Alduin's Wall, Elder Knowledge, The Fallen, and finally Dragonslayer for the last battle."
            ]
        },

        {
            heading: "The Factions",
            body: [
                "The Companions: Take Up Arms (join), Blood Oath (join the Circle), and Glory of the Dead (finish their questline). The College of Winterhold: Gatekeeper (join), Revealing the Unseen, and The Eye of Magnus (finish it).",
                "The Thieves Guild: Taking Care of Business (join), Darkness Returns, and One with the Shadows (restore the guild to glory). The Dark Brotherhood: With Friends Like These… (join), Bound Until Death, and Hail Sithis! (finish it)."
            ]
        },

        {
            heading: "The Civil War",
            body: [
                "Taking Sides (join the Stormcloaks or the Imperial Army), War Hero (capture Fort Sungard or Fort Greenwall), and Hero of Skyrim (capture Solitude or Windhelm) can all be earned on either side of the war."
            ]
        },

        {
            heading: "Shouts & Dragons",
            body: [
                "Dragon Soul (absorb your first) and Dragon Hunter (absorb 20). Words of Power (learn all three words of a shout), Thu'um Master (learn 20 shouts), and Legend (defeat a Legendary Dragon, which only appears at very high levels)."
            ]
        },

        {
            heading: "Character Progression",
            body: [
                "Level milestones: Apprentice (5), Adept (10), Expert (25), and Master (50), plus Skill Master (any skill to 100).",
                "Standing Stones and Daedra: Blessed (take a Standing Stone blessing), Standing Stones (find 13), Daedric Influence (acquire a Daedric Artifact), and Oblivion Walker (collect 15 of them - the most involved achievement in this group, since several come from long quests)."
            ]
        },

        {
            heading: "Life in Skyrim",
            body: [
                "Quest counters: Sideways (10 side quests) and Hero of the People (50 Misc Objectives). Skill samplers: Hard Worker (chop wood, mine ore, cook food), Thief (pick 50 locks and 50 pockets), Snake Tongue (persuade, bribe and intimidate), and Artificer (smith, enchant and brew).",
                "Wealth and crime: Citizen (buy a house), Golden Touch (100,000 gold), Wanted (escape jail), Master Criminal (a 1,000-gold bounty in all nine holds). Exploration: Delver (clear 50 dungeons), Explorer (discover 100 locations), and Reader (read 50 skill books).",
                "Home life: Married (get married), A New You (change your face at a Face Sculptor), Proud Parent (adopt a child), and the Hearthfire building chain - Landowner and Land Baron (buy one, then three plots of land), Architect (build three wings on a house), and Master Architect (build three houses)."
            ]
        },

        {
            heading: "Dawnguard",
            body: [
                "The Dawnguard questline: Awakening, Beyond Death, and Kindred Judgement. Lost to the Ages is its long standalone quest for the Aetherium Forge.",
                "Powers and mastery: Soul Tear (learn all three words of the shout), Auriel's Bow (use its special sun power), Werewolf Mastered (11 werewolf perks), and Vampire Mastered (11 vampire perks)."
            ]
        },

        {
            heading: "Dragonborn",
            body: [
                "Arriving and the questline: Outlander (reach Solstheim), The Temple of Miraak, The Path of Knowledge, and At the Summit of Apocrypha.",
                "Solstheim mastery: Dragon Aspect (learn all three words of the shout), Hidden Knowledge (read 5 Black Books), Stalhrim Crafter (craft a Stalhrim item), Dragonrider (tame and ride 5 dragons), Raven Rock Owner (own a house there), and Solstheim Explorer (discover 30 locations on the island)."
            ]
        },

        {
            heading: "Suggested Order",
            body: [
                "Explore and level for the first many hours, letting Apprentice, Adept, Expert, the exploration counters (Explorer, Delver, Reader), and the skill samplers (Hard Worker, Thief, Snake Tongue, Artificer) build naturally. Grab Blessed, Standing Stones, and start collecting Daedric Artifacts toward Oblivion Walker.",
                "Run the four faction questlines (Companions, College, Thieves Guild, Dark Brotherhood) and one side of the civil war (Taking Sides, War Hero, Hero of Skyrim), then push the main quest from Unbound to Dragonslayer.",
                "Do Dawnguard (Awakening through Kindred Judgement, plus Lost to the Ages, Soul Tear, Auriel's Bow) and Dragonborn (Outlander through At the Summit of Apocrypha, plus the Solstheim mastery set).",
                "Finish with the long grinds: Golden Touch, Master Criminal, Master and Skill Master, Thu'um Master, Dragon Hunter, Legend, and the Hearthfire building chain (Landowner, Land Baron, Architect, Master Architect), plus Married, Proud Parent, and A New You whenever they fit."
            ]
        }

    ]

};
