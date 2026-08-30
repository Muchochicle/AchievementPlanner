// Tropico 6 Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/tropico-6.json), whose 40 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   492720 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js). None are hidden; every one
//   ships a real, official Steam description, quoted verbatim below.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "tropico-6-achievement-guide",
    "category": "game",
    "gameSlug": "tropico-6",
    "icon": "🏝️",
    "title": "Tropico 6 Achievement Guide",
    "summary": "A practical guide to all 40 Steam achievements in Tropico 6 - none are hidden. Covers the 15 campaign missions, the sandbox and cross-game challenges, and the wonder and political feats.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Tropico 6 has 40 Steam achievements and none are hidden. Fifteen of them are simply \"complete mission X\" for the base campaign (plus one for finishing all of them); the rest are sandbox goals - population and economy targets, wonder combinations, disaster survival, and political stunts like surviving a coup or holding no elections for 20 years.",
                "Nothing is missable. A few counters (\"500 raids across all games\", \"end 50 protests across all games\") accumulate across every save you ever play, so they tick up on their own. The real work is the campaign and a couple of deliberately awkward sandbox runs (no fire station, no imports, volcano map on Frequent disasters).",
                "Tip: leave one long sandbox game running on a big map and use it as your \"feats\" island - build the wonder pairs, stack 20 inspiring statues, run every trade route, and push population past 1000 all in that one save rather than starting fresh for each."
            ]
        },
        {
            "heading": "Campaign Missions",
            "body": [
                "One achievement for completing each of the fifteen base-game campaign missions, in order from \"Penultimo of the Caribbean\" to \"Battle Royal\", plus \"Been there, Done That\" for clearing every mission.",
                "The achievements here: The Beginning of a Servantship (Complete Mission \"Penultimo of the Caribbean\"); Shackadelic (Complete Mission \"Shackland\"); Of Seals And Men (Complete Mission \"Concrete Beach\"); Number 18 (Complete Mission \"Speakeasy\"); The Legend of Langostino (Complete Mission \"Pirate King\"); The Dreamer of Dreams (Complete Mission \"Chocolate Factory\"); Go Sovereigns! (Complete Mission \"Ballgame\"); Caribbean Comrade (Complete Mission \"Better Red Than Dead\"); Firestarter (Complete Mission \"Superpower Defense\"); For Science! (Complete Mission \"Tropicoland\"); Happy Ending? (Complete Mission \"Acts of God\"); Apocalypso (Complete Mission \"The Referendum\"); Computer Says \"No\" (Complete Mission \"Bureaucrazy 2.0\"); Beware The Betman (Complete Mission \"The One-Percenters\"); Viva Tropico! (Complete Mission \"Battle Royal\"); Been there, Done That (Complete all Missions)."
            ]
        },
        {
            "heading": "Sandbox & Cross-Game Challenges",
            "body": [
                "The sandbox and account-wide goals: generating maps, the cross-game raid and protest counters, playtime and total bridge length, a team multiplayer win, and single-run challenges - no imports, a volcano map on Frequent disasters, no fire station, population 1000, a space-mission event, surviving a coup, and two faction escalations at once.",
                "The achievements here: Terraformer (Generate 15 random maps); Promising Endeavors (Perform 500 raids across all games); My Ways (End 50 protests by force or by bribing the protesters across all games); Just One...More...Term... (Spend 5 hours playing Tropico 6); From Knight to Little Duck (Construct bridges with an accumulated length of 728 grid tiles); Teamplayer (Win a multiplayer game as a team); Make Tropico Great Again! (Finish a sandbox game without any imports); Survivor (Win a sandbox game on a map with a volcano on it with Disasters set to \"Frequent\"); Watch The World Burn (Win a sandbox game without ever constructing a fire station); Un-Lonely Island (Reach a population of 1000); Don't Panic! (Have a Space Mission end with a special event); One Does Not Simply Stage A Coup (Survive a military coup); Double Trouble (Have two faction escalations at the same time)."
            ]
        },
        {
            "heading": "Wonders & Political Feats",
            "body": [
                "The showpiece goals: the three wonder pairs (Statue of Liberty + Eiffel Tower, Sphinx + Great Pyramid, Neuschwanstein + Taj Mahal), all trade routes active at once, four simultaneous heists, 20 inspiring statues, 30 years in the colonial era, 90% single-faction support, convict-labor income, a clean Swiss bank account, and 20 years with no elections.",
                "The achievements here: French Connection (Have the Statue of Liberty and the Eiffel Tower constructed at the same time); Curse of the Mummy (Have the Sphinx and the Great Pyramid constructed at the same time); Fairy Tale Come True (Have Neuschwanstein Castle and the Taj Mahal constructed at the same time); Trade Is My Trait (Have an active trade route for all trade licenses at the same time); The Time For Wonders (Have four heists active at the same time); Narcissist (Have 20 inspiring statues at the same time); The Governator (Remain in colonial era for 30 years in one game); Sublime Subliminal Supreme (Have 90% of all Tropicans support the same faction); Chain Gang (Generate $3,500 in a month with convict labor); I Owe You Nothing (Reach a Swiss bank account credit of S$ 50k without ever accepting a single Broker request); We Don't Have Time For That (Have no elections within a duration of 20 years)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the base campaign in order (Penultimo of the Caribbean through Battle Royal); \"Been there, Done That\" pops when the last one is done.",
                "2. Start one big-map sandbox game and treat it as your feats island: population 1000, the three wonder pairs, 20 statues, all trade routes, four simultaneous heists.",
                "3. Do the deliberately restrictive sandbox runs: no imports, no fire station, and a volcano map with Frequent disasters.",
                "4. Let the cross-game counters (raids, protests, playtime, bridge length) finish on their own across all of the above.",
                "Tip: \"Watch The World Burn\" (win a sandbox game with no fire station ever built) is easiest on a small, wet map with edicts that reduce fire risk - keep buildings spaced out and it is very manageable."
            ]
        }
    ]
};
