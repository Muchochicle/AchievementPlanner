// Grand Theft Auto: Vice City - The Definitive Edition Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/grand-theft-auto-vice-city-the-definitive-edition.json), whose 34 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1546990 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 4 achievement(s) are Steam-hidden or ship no Steam
//   description; their description here is researched from community
//   100% guides and is a curatorial summary. Every other description is
//   Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "grand-theft-auto-vice-city-the-definitive-edition-achievement-guide",
    "category": "game",
    "gameSlug": "grand-theft-auto-vice-city-the-definitive-edition",
    "icon": "🌴",
    "title": "Grand Theft Auto: Vice City - The Definitive Edition Achievement Guide",
    "summary": "A practical guide to all 34 Steam achievements in Grand Theft Auto: Vice City - The Definitive Edition (4 hidden). The 4 hidden achievements are listening to every radio station, a golf-club kill in 'Four Iron', an M4 kill in 'Rub Out', and maxing out a Deluxo. Sourced from XboxAchievements and TrueAchievements.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Grand Theft Auto: Vice City - The Definitive Edition has 34 Steam achievements, 4 of them hidden. The remaster of the 1980s-Miami-inspired GTA. The visible achievements are named story-mission completions (Riot, All Hands on Deck!, Supply & Demand, Trojan Voodoo, Publicity Tour, Hog Tied, Keep Your Friends Close...), side activities (Vigilante, Paramedic, RC Bandit race, Keepie-Uppy, assassination contracts), property ownership, criminal-rating and media ranks, and the collectible and 100% grind.",
                "The 4 hidden achievements are: listening to every radio music station, killing the property developer with a golf club in 'Four Iron', using the M4 to kill Diaz in 'Rub Out', and hitting maximum speed in a Deluxo.",
                "The catalog marks it difficulty 3, missable:true and single-playthrough. Iron-y and Salutations My Little Friend are each locked to one mission and to one weapon choice, so they need to be planned before starting that mission."
            ]
        },
        {
            "heading": "Story Missions & Secret Objectives",
            "body": [
                "The named story-mission completions (Riot, All Hands on Deck!, Supply & Demand, Trojan Voodoo, Publicity Tour, Hog Tied, Keep Your Friends Close..., Demolition Man) and the four Steam-hidden secrets (radio stations, the 'Four Iron' golf-club kill, the 'Rub Out' M4 kill, the Deluxo top speed).",
                "The achievements here: Born in the 80’s (Listen to every radio music station at least once); Iron-y (Kill the property developer with a golf club during the mission 'Four Iron'); Salutations My Little Friend (Use the M4 to take out Diaz during the mission 'Rub Out'); Don't Need Roads (Hit maximum speed in a Deluxo); Legal Counsel (Complete the \"Riot\" mission); Life of the Party (Complete the \"All Hands on Deck!\" mission); South American Connection (Complete the \"Supply & Demand\" mission); Big Heat from Little Havana (Complete the \"Trojan Voodoo\" mission); Chauffeur (Complete the \"Publicity Tour\" mission); Tommy Two-Wheels (Complete the \"Hog Tied\" mission); Mischief Managed (Complete the \"Keep Your Friends Close...\" mission); Chopper’d Up (Kill all hostile NPCs during the mission \"Demolition Man\" using the RC chopper’s blades)."
            ]
        },
        {
            "heading": "Side Activities & Stunts",
            "body": [
                "Vigilante and Paramedic missions, the G-Spotlight stunt, a 30-second wheelie, Taxi passengers, Firefighter, pizza delivery, the RC Bandit race, Keepie-Uppy, assassination contracts, and 36 unique jumps.",
                "The achievements here: Running Rampant (Complete Vigilante mission level 12); Not my First Time (Complete mission \"G-Spotlight\" without falling from the rooftops); One is Better Than Two (Perform a 30 second wheelie); Point A to Point B (Drop off 25 passengers driving the taxi); High Quality H2O (Extinguish 10 fires); Pie Guy (Deliver 10 pizzas); Somebody Call the Wambulance? (Complete Paramedic Mission level 12); Just Like the Real Thing (Win the RC Bandit Race); Keepie-Uppy Okie Dokie (Earn a high score of 5 with the Keepie-Uppy Beach Ball); Gun for Hire (Complete all assassination contracts); Daredevil (Complete 36 unique jumps)."
            ]
        },
        {
            "heading": "Property, Rank & Completion",
            "body": [
                "Property damage and ownership, a six-star wanted level, police bribes, the media and criminal ranks, 100 hidden packages, 100% completion, and the platinum-equivalent catch-all.",
                "The achievements here: Bull in a China Shop (Cause $1,000,000 in property damage); Vice City Mogul (Own 10 properties); Catch Me if You Can (Achieve a six-star wanted level); Greasy Palms (Use a police bribe to reduce your wanted level); I'm Famous! (Earn the Stuff of Legends media attention rank); Grand Theft Auto (Retrieve every wanted vehicle at Sunshine Autos Import Garage); Bloodstained Hands (Earn the Butcher criminal rating); Take the Cannoli (Earn the Godfather criminal rating); City Sleuth (Find 100 hidden packages); Done it All (Earn 100% completion); Kingpin (Unlock all achievements)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Before starting 'Four Iron' and 'Rub Out', plan the hidden kills - a golf club for the developer, an M4 for Diaz - since each is locked to that one mission.",
                "2. Play the story, completing the named missions and switching radio stations regularly so Born in the 80's fills in naturally.",
                "3. Buy properties as income allows, and work the side jobs (Vigilante, Paramedic, assassination contracts, RC Bandit race).",
                "4. Do the stunt feats (G-Spotlight, the wheelie, 36 unique jumps) and get a Deluxo to top speed once you unlock it.",
                "5. Collect all 100 hidden packages and finish any remaining strands for 100% completion and Kingpin.",
                "Tip: switch to whichever radio station you haven't heard yet every time you get in a car early on - Born in the 80's is easy to leave until last and then a chore to track down which stations you've missed."
            ]
        }
    ]
};
