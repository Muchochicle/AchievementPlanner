// Persona 5 Royal Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/persona-5-royal.json), whose 53 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1687950 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js). 10 hidden achievements ship
//   no Steam description; their conditions here are curatorial - story
//   markers kept spoiler-light in the God of War house style, boss and
//   feat conditions cross-checked against community 100% guides.
// - Sections group achievements by roughly what part of the game they belong to.
export const GUIDE = {
    "slug": "persona-5-royal-achievement-guide",
    "category": "game",
    "gameSlug": "persona-5-royal",
    "icon": "🎭",
    "title": "Persona 5 Royal Achievement Guide",
    "summary": "A practical guide to all 53 Steam achievements in Persona 5 Royal - story, confidants & social life, combat, mementos & the velvet room, tokyo activities & part-time jobs, hidden achievements.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Persona 5 Royal has 53 Steam achievements, 10 of them hidden (the seven Palace completions and three finale/ending markers). The rest are the social-sim and Confidant systems, the combat and Velvet Room mechanics, and the Tokyo activities and part-time jobs.",
                "Almost everything is doable in a single ~90-hour playthrough if you follow a schedule guide: some achievements (maxed social stats, a maxed Confidant, the third-semester content) are tight on the in-game calendar, so plan your days. The Path Chosen (an ending) is the only reason you might replay.",
                "Tip: follow a day-by-day walkthrough for your first run so you hit the calendar-gated achievements (all social stats, at least one maxed Confidant, and the Royal third semester), and knock out the Tokyo activities and Velvet Room executions along the way."
            ]
        },
        {
            "heading": "Story, Confidants & Social Life",
            "body": [
                "The story and social-sim spine: obtaining Arsene, forming the Phantom Thieves, a first Mementos request, top exam scores, maxed social stats, a hangout, a special relationship, a maxed Confidant, and evolving a party member's Persona.",
                "The achievements here: The Phenomenal Phantom Thief (Unlocked all achievements.); Spirit of Rebellion (Obtained Arsène.); Phantom Thieves: Assemble! (Established your own squad of thieves.); One Step at a Time (Completed a Mementos request.); A Most Studious Disguise (Scored the highest on your exams.); Pure Perfection (Maxed out all social stats.); Tokyo Tourist (Went to a hangout spot with someone.); My Closest Partner (Entered a special relationship.); True Confidence (Maxed out one of your Confidants.); Awakening the Phantom Thieves (Evolved a party member's Persona.)."
            ]
        },
        {
            "heading": "Combat, Mementos & the Velvet Room",
            "body": [
                "The battle and dungeon systems: Baton Pass, a Disaster Shadow explosion, the grappling hook, a Technical, a Skill Accessory from a Palace ruler, a Treasure Demon, a Showtime attack, Jose's flower and stamp trades, changing Mementos cognition, a deviation, conquering the Reaper, and the six Velvet Room execution types plus Incense, a Fusion Alarm execution and the Electric Chair.",
                "The achievements here: I am Thou... (Obtained a Persona through negotiation.); Tactical Teamwork (Performed a Baton Pass.); Let's Blow It Up (Defeated enemies via Disaster Shadow explosion.); You'd Better Hang On! (Used the grappling hook.); Technician (Triggered a Technical.); Talent Thief (Obtained a Skill Accessory from a Palace ruler.); The Purpose of a Thief (Obtained a Treasure Demon.); It's Showtime! (Performed a Showtime attack.); Jose's Favorite Customer (Traded in flowers while in Mementos.); The Phantom Philatelist (Traded in stamps while in Mementos.); The Search for Power (Completely changed the cognition of Mementos.); The Deviated Cognition (Encountered a deviation in Mementos.); Unsurpassed Rebel (Conquered the Reaper.); A Deadly Debut (Performed a Guillotine execution.); Efficient Executioner (Performed a Group Guillotine execution.); Intensive Training (Used Incense on a Persona in Lockdown.); Success Built on Sacrifice (Performed a Gallows execution.); Accident-Prone (Performed an execution during a Fusion Alarm.); A Grand Experiment (Performed an Electric Chair execution.); Leblanc Buffer (Cleaned up in Leblanc.)."
            ]
        },
        {
            "heading": "Tokyo Activities & Part-Time Jobs",
            "body": [
                "The city content: cleaning Leblanc, a part-time job, the batting cages, the bathhouse, the lottery, the crane game, selling old clothes, darts, billiards, the jazz club, a temple visit, customizing a gun, the fishing pond, and the maid cafe's special menu.",
                "The achievements here: Punch That Clock! (Worked a part-time job.); Batter Up! (Scored a hit at the batting cages.); Getting the Vapors (Couldn't take the heat in the bathhouse.); Easy Money (Won the lottery.); Going Against the Crane (Scored a prize in the crane game.); Trash Into Treasure (Sold old clothing at Furugi no Neuchi.); Dartslinger (Played a game of darts.); A Hustler's Journey (Played a game of billiards.); A Night in Kichijoji (Attended the jazz club.); A Serene Experience (Visited a temple.); Professional Modification (Customized a gun.); Angler's Debut (Passed time at the fishing pond.); Master of Akihabara (Ordered from the special menu at the maid café.)."
            ]
        },
        {
            "heading": "Hidden Achievements",
            "body": [
                "Some achievements are hidden - story markers, boss kills or one-off feats:",
                "The achievements here: Castle of Lust: Seized (Complete the Castle of Lust, the first main-story Palace (story marker, no plot detail).); Museum of Vanity: Repossessed (Complete the Museum of Vanity, a main-story Palace.); Bank of Gluttony: Cleaned Out (Complete the Bank of Gluttony, a main-story Palace.); Pyramid of Wrath: Plundered (Complete the Pyramid of Wrath, a main-story Palace.); Spaceport of Greed: Obliterated (Complete the Spaceport of Greed, a main-story Palace.); Casino of Jealousy: Bankrupted (Complete the Casino of Jealousy, a main-story Palace.); Cruiser of Pride: Capsized (Complete the Cruiser of Pride, a main-story Palace.); The Thorough Trickster (Reach a late-game story marker (no plot detail).); Take Back the Future (Reach a story marker near the finale (no plot detail).); The Path Chosen (Reach an ending of the game (no plot detail).)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Follow a scheduling guide through the story - the seven Palace achievements and the finale markers come as you progress.",
                "2. Prioritise the calendar-gated goals: max your social stats, max at least one Confidant, and unlock the Royal third semester.",
                "3. Do the Tokyo activities (darts, billiards, batting cages, jazz club, temple, fishing, maid cafe) on downtime days.",
                "4. Work through the Velvet Room execution types and the Mementos cognition/deviation goals as they become available.",
                "Tip: the Velvet Room executions (Guillotine, Gallows, Electric Chair, and the rest) all unlock as Confidant ranks progress with Igor's replacements - keep an eye on that Confidant and use each new execution once as soon as it opens."
            ]
        }
    ]
};
