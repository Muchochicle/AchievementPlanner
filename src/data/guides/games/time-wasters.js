// Time Wasters Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/time-wasters.json), whose 96 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1290330 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "time-wasters-achievement-guide",
    "category": "game",
    "gameSlug": "time-wasters",
    "icon": "🚀",
    "title": "Time Wasters Achievement Guide",
    "summary": "A practical guide to all 96 Steam achievements in Time Wasters - none are hidden. None of the achievements are hidden. Every achievement is a victory with a specific character: clearing each rank of waves (Bronze to Champion), the Solo Challenge, and the named Loyalty Challenge, for each of the thirteen characters.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Time Wasters has 96 Steam achievements and none are hidden. The whole list is structured: for each of the thirteen characters (Azurene, Vermillion, Corrosia, Luna, Ram, Raven, TeslAI, Ravebow, Kat, Rosanova, Doc, and The 1.0) there is an achievement for defeating each rank of waves - Bronze, Silver, Gold, Platinum, Diamond and Champion - plus one for the Solo Challenge and one for that character's specific Loyalty Challenge (Boss Rush, Tower Defense, Pinball, Only Up, and so on).",
                "The catalog marks it difficulty 3. It is a bullet-heaven game where power scales fast; the Bronze-to-Gold ranks fall quickly once you understand a character's build, and Platinum / Diamond / Champion are a step up that mostly comes from meta-progression. The Loyalty Challenges are the varied part - each is a different mode with its own gimmick.",
                "Tip: push one character all the way to Champion first to unlock most of the meta-progression, then the Bronze-Gold ranks for the other twelve characters go quickly with those permanent upgrades applied."
            ]
        },
        {
            "heading": "Rank Victories: First Seven Characters",
            "body": [
                "Defeating the Bronze, Silver, Gold, Platinum, Diamond and Champion rank waves with Azurene, Vermillion, Corrosia, Luna, Ram, Raven and TeslAI.",
                "The achievements here: Azurene Bronze Victory (Defeat the Bronze Rank Waves with Azurene); Azurene Silver Victory (Defeat the Silver Rank Waves with Azurene); Azurene Gold Victory (Defeat the Gold Rank Waves with Azurene); Azurene Platinum Victory (Defeat the Platinum Rank Waves with Azurene); Azurene Diamond Victory (Defeat the Diamond Rank Waves with Azurene); Azurene Champion Victory (Defeat the Champion Rank Waves with Azurene); Vermillion Bronze Victory (Defeat the Bronze Rank Waves with Vermillion); Vermillion Silver Victory (Defeat the Silver Rank Waves with Vermillion); Vermillion Gold Victory (Defeat the Gold Rank Waves with Vermillion); Vermillion Platinum Victory (Defeat the Platinum Rank Waves with Vermillion); Vermillion Diamond Victory (Defeat the Diamond Rank Waves with Vermillion); Vermillion Champion Victory (Defeat the Champion Rank Waves with Vermillion); Corrosia Bronze Victory (Defeat the Bronze Rank Waves with Corrosia); Corrosia Silver Victory (Defeat the Silver Rank Waves with Corrosia); Corrosia Gold Victory (Defeat the Gold Rank Waves with Corrosia); Corrosia Platinum Victory (Defeat the Platinum Rank Waves with Corrosia); Corrosia Diamond Victory (Defeat the Diamond Rank Waves with Corrosia); Corrosia Champion Victory (Defeat the Champion Rank Waves with Corrosia); Luna Bronze Victory (Defeat the Bronze Rank Waves with Luna); Luna Silver Victory (Defeat the Silver Rank Waves with Luna); Luna Gold Victory (Defeat the Gold Rank Waves with Luna); Luna Platinum Victory (Defeat the Platinum Rank Waves with Luna); Luna Diamond Victory (Defeat the Diamond Rank Waves with Luna); Luna Champion Victory (Defeat the Champion Rank Waves with Luna); Ram Bronze Victory (Defeat the Bronze Rank Waves with Ram); Ram Silver Victory (Defeat the Silver Rank Waves with Ram); Ram Gold Victory (Defeat the Gold Rank Waves with Ram); Ram Platinum Victory (Defeat the Platinum Rank Waves with Ram); Ram Diamond Victory (Defeat the Diamond Rank Waves with Ram); Ram Champion Victory (Defeat the Champion Rank Waves with Ram); Raven Bronze Victory (Defeat the Bronze Rank Waves with Raven); Raven Silver Victory (Defeat the Silver Rank Waves with Raven); Raven Gold Victory (Defeat the Gold Rank Waves with Raven); Raven Platinum Victory (Defeat the Platinum Rank Waves with Raven); Raven Diamond Victory (Defeat the Diamond Rank Waves with Raven); Raven Champion Victory (Defeat the Champion Rank Waves with Raven); TeslAI Bronze Victory (Defeat the Bronze Rank Waves with TeslAI); TeslAI Silver Victory (Defeat the Silver Rank Waves with TeslAI); TeslAI Gold Victory (Defeat the Gold Rank Waves with TeslAI); TeslAI Platinum Victory (Defeat the Platinum Rank Waves with TeslAI); TeslAI Diamond Victory (Defeat the Diamond Rank Waves with TeslAI); TeslAI Champion Victory (Defeat the Champion Rank Waves with TeslAI)."
            ]
        },
        {
            "heading": "Rank Victories: Ravebow, Kat, Rosanova, Doc",
            "body": [
                "Defeating the Bronze, Silver, Gold, Platinum, Diamond and Champion rank waves with Ravebow, Kat, Rosanova and Doc.",
                "The achievements here: Ravebow Bronze Victory (Defeat the Bronze Rank Waves with Ravebow); Ravebow Silver Victory (Defeat the Silver Rank Waves with Ravebow); Ravebow Gold Victory (Defeat the Gold Rank Waves with Ravebow); Ravebow Platinum Victory (Defeat the Platinum Rank Waves with Ravebow); Ravebow Diamond Victory (Defeat the Diamond Rank Waves with Ravebow); Ravebow Champion Victory (Defeat the Champion Rank Waves with Ravebow); Kat Bronze Victory (Defeat the Bronze Rank Waves with Kat); Kat Silver Victory (Defeat the Silver Rank Waves with Kat); Kat Gold Victory (Defeat the Gold Rank Waves with Kat); Kat Platinum Victory (Defeat the Platinum Rank Waves with Kat); Kat Diamond Victory (Defeat the Diamond Rank Waves with Kat); Kat Champion Victory (Defeat the Champion Rank Waves with Kat); Rosanova Bronze Victory (Defeat the Bronze Rank Waves with Rosanova); Rosanova Silver Victory (Defeat the Silver Rank Waves with Rosanova); Rosanova Gold Victory (Defeat the Gold Rank Waves with Rosanova); Rosanova Platinum Victory (Defeat the Platinum Rank Waves with Rosanova); Rosanova Diamond Victory (Defeat the Diamond Rank Waves with Rosanova); Rosanova Champion Victory (Defeat the Champion Rank Waves with Rosanova); Doc Bronze Victory (Defeat the Bronze Rank Waves with Doc); Doc Silver Victory (Defeat the Silver Rank Waves with Doc); Doc Gold Victory (Defeat the Gold Rank Waves with Doc); Doc Platinum Victory (Defeat the Platinum Rank Waves with Doc); Doc Diamond Victory (Defeat the Diamond Rank Waves with Doc); Doc Champion Victory (Defeat the Champion Rank Waves with Doc)."
            ]
        },
        {
            "heading": "Solo Challenges",
            "body": [
                "Defeating the Solo Challenge with each of the first eleven characters (Azurene, Vermillion, Luna, Raven, TeslAI, Ravebow, Corrosia, Ram, Kat, Rosanova and Doc).",
                "The achievements here: Azurene Solo Victory (Defeat the Solo Challenge with Azurene); Vermillion Solo Victory (Defeat the Solo Challenge with Vermillion); Luna Solo Victory (Defeat the Solo Challenge with Luna); Raven Solo Victory (Defeat the Solo Challenge with Raven); TeslAI Solo Victory (Defeat the Solo Challenge with TeslAI); Ravebow Solo Victory (Defeat the Solo Challenge with Ravebow); Corrosia Solo Victory (Defeat the Solo Challenge with Corrosia); Ram Solo Victory (Defeat the Solo Challenge with Ram); Kat Solo Victory (Defeat the Solo Challenge with Kat); Rosanova Solo Victory (Defeat the Solo Challenge with Rosanova); Doc Solo Victory (Defeat the Solo Challenge with Doc)."
            ]
        },
        {
            "heading": "Loyalty Challenges & The 1.0",
            "body": [
                "Defeating each character's named Loyalty Challenge - Doc's Don't Move, Kat's Boss Rush, Raven's Infested Planets, Corrosia's Slime Planets, Ravebow's Only Up, Azurene's Caves, Ram's Pinball, TeslAI's City Invaders, Vermillion's Tower Defense, Rosanova's Mini Elites and Luna's Fleet Rescue - and The 1.0's full set (all six ranks, the Solo Challenge, and the Green City Loyalty Challenge).",
                "The achievements here: Doc Loyalty Victory (Defeat the Don't Move Challenge with Doc); Kat Loyalty Victory (Defeat the Boss Rush Challenge with Kat); Raven Loyalty Victory (Defeat the Infested Planets Challenge with Raven); Corrosia Loyalty Victory (Defeat the Slime Planets Challenge with Corrosia); Ravebow Loyalty Victory (Defeat the Only Up Challenge with Ravebow); Azurene Loyalty Victory (Defeat the Caves Challenge with Azurene); Ram Loyalty Victory (Defeat the Pinball Challenge with Ram); TeslAI Loyalty Victory (Defeat the City Invaders Challenge with TeslAI); Vermillion Loyalty Victory (Defeat the Tower Defense Challenge with Vermillion); Rosanova Loyalty Victory (Defeat the Mini Elites Challenge with Rosanova); Luna Loyalty Victory (Defeat the Fleet Rescue Challenge with Luna); The 1.0 Bronze Victory (Defeat the Bronze Rank Waves with The 1.0); The 1.0 Silver Victory (Defeat the Silver Rank Waves with The 1.0); The 1.0 Gold Victory (Defeat the Gold Rank Waves with The 1.0); The 1.0 Platinum Victory (Defeat the Platinum Rank Waves with The 1.0); The 1.0 Diamond Victory (Defeat the Diamond Rank Waves with The 1.0); The 1.0 Champion Victory (Defeat the Champion Rank Waves with The 1.0); The 1.0 Solo Victory (Defeat the Solo Challenge with The 1.0); The 1.0 Loyalty Victory (Defeat the Green City Challenge with The 1.0)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Pick one character and push through every rank to Champion, unlocking meta-progression as you go.",
                "2. With those permanent upgrades, clear Bronze through Gold (then higher) with each of the other twelve characters.",
                "3. Do the Solo Challenge with each character.",
                "4. Work through the named Loyalty Challenges - each is a distinct mode.",
                "5. Finish The 1.0's full set of ranks, Solo and Loyalty.",
                "Tip: the Loyalty Challenges are tied to specific characters by name in the achievement text - do each one with the character it names rather than your strongest overall, since that is what the achievement checks."
            ]
        }
    ]
};
