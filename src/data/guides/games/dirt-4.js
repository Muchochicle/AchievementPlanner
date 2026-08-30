// DiRT 4 Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/dirt-4.json), whose 48 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   421020 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "dirt-4-achievement-guide",
    "category": "game",
    "gameSlug": "dirt-4",
    "icon": "🏎️",
    "title": "DiRT 4 Achievement Guide",
    "summary": "A practical guide to all 48 Steam achievements in DiRT 4 - none are hidden. Covers the discipline licences and Career series wins, the Career feats and team-management milestones, and the Joyride, Community Events and Pro Tour achievements.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "DiRT 4 has 48 Steam achievements and none of them are hidden. The Career backbone is earning the eight discipline licences (Rally, Rallycross, Landrush) and winning each series - the Global Rally Series, the FIA World Rallycross Championship, the Landrush World Series, the Historic Legends Series - and then the Triple Crown. A middle block covers Career feats and running your team (completing the Advanced Driving Techniques, owning a fully Grade-A car, hiring engineers, upgrading facilities). The rest are Joyride challenge modes, the Community Events (dailies, weeklies, a full Monthly), and the Pro Tour online ladder.",
                "Nothing is missable - Career events and licences can be re-attempted, Joyride challenges replay freely, and the online Community Events cycle back around. The main time costs are the Community Event achievements (which are gated by real-world event timing) and the Pro Tour grind (25 events, tier promotions).",
                "Tip: the Community Event achievements (Flavour of the Week for back-to-back Weeklies, DiRTy Dozen for all 12 Monthly stages) depend on the game's live event rotation, so start checking in on the Community Events tab early and regularly rather than leaving them for the end - a missed Weekly means waiting a full week for another shot."
            ]
        },
        {
            "heading": "Licences & Career Series",
            "body": [
                "Completing the Welcome Event, earning all eight discipline licences (International Rally R-3/R-1/H-C/H-A, National Stadium Pro-3/Pro-1, International Off-Road C-3/C-1), the first Career wins (underdog win, Rallycross pole, Landrush A-Final, first Career-event win), and winning the Global Rally Series, the FIA World Rallycross Championship, the Landrush World Series, the Historic Legends Series and the Triple Crown.",
                "The achievements here: Thanks for Coming (Complete the Welcome Event); International Rally R-3 (Earn the International Rally R-3 licence); International Rally R-1 (Earn the International Rally R-1 licence); International Rally H-C (Earn the International Rally H-C licence); International Rally H-A (Earn the International Rally H-A licence); National Stadium Pro-3 (Earn the National Stadium Pro-3 licence); National Stadium Pro-1 (Earn the National Stadium Pro-1 licence); International Off-Road C-3 (Earn the International Off-Road C-3 licence); International Off-Road C-1 (Earn the International Off-Road C-1 licence); A Bonafide Underdog Story (Get an overall win in the lowest eligible Vehicle Class in a Rally Event in Career); First on the GRID (Qualify in the top spot in a Rallycross Event in Career); Truckasaurus (Qualify for an A-Final in a Landrush Event in Career); First you have to finish (Finish in first place in a Career Event); Global Superstar (Win the Global Rally Series); Rubbing, son, is racing (Win the FIA World Rallycross Championship); It's all terrain, dummy (Win the Landrush World Series); Obsolete Models a Specialty (Win the Historic Legends Series); Completed it mate (Win the Triple Crown)."
            ]
        },
        {
            "heading": "Career Feats & Team Management",
            "body": [
                "Completing all the DiRT Academy Advanced Driving Techniques, owning a car with all Grade-A parts, winning your class in a multi-class event, buying from the Classifieds, hiring a fourth Engineer, the Fearless Preset and Fearless Bonus feats, winning a Stage in Headcam, a clean Stage, a 65m+ clean jump landing, and the adversity feats.",
                "The achievements here: ...now watch this Drive (Complete all of the Advanced Driving Techniques at the DiRT Academy); New R-Evolution (Own a vehicle equipped with all Grade A parts); Textbook (Win your class in a multi-class Event in Career); Never Raced or Rallied (Buy a vehicle from the Classifieds); Make The Dream Work (Hire a fourth Engineer onto your Team); Be Brave (Complete a Stage or race with the Fearless Preset active); Four-titude (Earn the Fearless Bonus in a Stage or race); I am the 13.9% (Win a Stage in Headcam); Real turbulent juice (Cleanly land a jump longer than 65m); Cleaned up nicely (Complete a clean Stage or race); This is fine (Triumph in the face of adversity); Mondays be like... (Get a bad case of the Mondays)."
            ]
        },
        {
            "heading": "Joyride, Community & Pro Tour",
            "body": [
                "The Joyride challenge modes (a full chapter, 10 Gold medals, a penalty-free Time Attack Gold, the 100-blocks-in-60-seconds feat), the Community Events (a Daily and Delta Daily finish, back-to-back Weeklies, a full Monthly, a Jam Session event, night and sunny Stages), and the Pro Tour ladder (tier promotion, 25 events), plus the service-interval, Joker Lap, on-stage repair and flat-tyre feats.",
                "The achievements here: Chapter and Verse (Set a time in every challenge in a single Joyride Chapter); Always Believe (Achieve 10 Gold medals in Joyride); Precisely (Set a Gold medal time in a Time Attack challenge without hitting a penalty marker); Kenneth? What's the frequency? (Destroy 100 blocks in 60 seconds in Joyride); The Day Today (Finish in the Second Tier or higher in a Daily in Community Events); Delta Force (Finish in the Top Tier of a Delta Daily in Community Events); Flavour of the Week (Complete back to back Weekly Community Events); DiRTy Dozen (Complete all 12 Stages of a Monthly Event in Community Events); tankflybosswalk (Complete an Event in Jam Session); The Nightman Cometh (Win a Stage at night); Taps Aff (Finish a Stage in sunny conditions in Community Events or Clubs); Up and up (Get promoted to a new Tier in Pro Tour); Sweaty (Complete 25 Events in Pro Tour); Little Help? (Call in the Chief Engineer's recommendations during a Service Interval); Double Yolker (Take two Joker Laps and win a Rallycross race); rAd-hoc (Repair your car on Stage and win the Stage); Limp Home (Finish three sectors of a Stage with a flat tyre); Tooled Up (Upgrade three Facilities to Grade A quality)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play Career mode, earning each discipline licence as you unlock it and working toward winning each of the four world series.",
                "2. As you build your team, hire a fourth engineer, upgrade three facilities to Grade A, and build one car with all Grade-A parts.",
                "3. Do the one-off Career feats - the DiRT Academy techniques, the Fearless Preset stage, a Headcam stage win, a clean 65m jump, an on-stage repair win - on targeted events.",
                "4. Play the Joyride challenges for a full chapter, 10 Gold medals, the clean Time Attack Gold, and the block-smash feat.",
                "5. Check the Community Events tab regularly and finish the required Dailies, back-to-back Weeklies and a full Monthly, and grind Pro Tour to 25 events and a tier promotion.",
                "Tip: for the Grade-A car and facilities, focus your R&D and money on a single Rally car and its team rather than spreading upgrades across disciplines - New R-Evolution and Tooled Up both just need one fully upgraded example, and concentrating resources gets you there far sooner."
            ]
        }
    ]
};
