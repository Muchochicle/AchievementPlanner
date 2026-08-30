// Need for Speed Payback Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/need-for-speed-payback.json), whose 45 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1262540 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "need-for-speed-payback-achievement-guide",
    "category": "game",
    "gameSlug": "need-for-speed-payback",
    "icon": "🚗",
    "title": "Need for Speed Payback Achievement Guide",
    "summary": "A practical guide to all 45 Steam achievements in Need for Speed Payback - none are hidden. Covers the story 'Icon' progression, the racing and tuning feats, and the endgame and community achievements.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Need for Speed Payback has 45 Steam achievements and none of them are hidden. The campaign spine is becoming an Icon in each discipline - Build, Speed, Style, Outlaw and finally the Ultimate Icon - by working through the story's character contacts (Amy, Nakai-San, Magnus, Ken Block) and the crew storyline, plus REP-level milestones (10, 25, 50, 70). Around that sit racing and tuning feats (win with a tuned car, a triple-crown streak, max drift/grip settings, top-tier parts), and a block of endgame and community achievements - Eddie's Challenge and car, wraps and snapshots, the Prestige events at bronze and gold, and mastering a Speedlist.",
                "Nothing is missable - all events and the open world stay available after the story, and races can be replayed. The completion is medium-length; the longest poles are REP Level 70, winning gold on every Prestige event, and Mental Unblock (a 350,000 drift score in Mental Block with Ken's car).",
                "Tip: the story's Icon path is linear - just follow it to the Ultimate Icon and most of the campaign achievements fall out along the way; save the Prestige events, the drift-score challenge and the REP 70 grind for after the credits when you have a full garage of maxed cars."
            ]
        },
        {
            "heading": "Story: The Icon Path",
            "body": [
                "Getting your garage spot, REP Levels 10, 25 and 50, competing against Amy's contacts, meeting Nakai-San, becoming a Build Icon, beating Magnus' record and personal challenge, becoming Speed / Style / Outlaw Icons, the single-take Gymkhana, the Outlaw's roadblock challenge and story reveal, finding and topping a crew, the Risky Devil drift-train mission, and becoming the Ultimate Icon.",
                "The achievements here: Home Is Where Your Car Is (Acquire your spot in the garage); Early Days (Reach REP Level 10); Getting Noticed (Reach REP Level 25); Can I Get Your Autograph? (Reach REP Level 50); Guidance From Amy (Compete against Amy's high horsepower contacts); RWB (Meet the legendary builder Nakai-San); Iconic Builder (Become a Build Icon); I Am Speed (Beat Magnus' record time); Urban Outlaw (Beat Magnus' personal challenge); Fulfilling The Need (Become a Speed Icon); The Hoonigan (Become a Style Icon); Single Take Star (Complete a single-take of Ken's Gymkhana); Unstoppable (Beat the Outlaw's \"2 roadblocks in a pursuit\" challenge); Surprised? Me Neither (Uncover the truth about the Outlaw); Above The Law (Become an Outlaw Icon); One For All... (Find yourself a crew); Choo Choo! (Complete the drift train mission with the Risky Devil crew); ... And All For One (Reach the top with your crew); The Ultimate Icon (Become the Ultimate Icon)."
            ]
        },
        {
            "heading": "Racing Feats & Progression",
            "body": [
                "Winning with a tuned car, maxing drift or grip settings, a three-event win streak, 50 skill callouts, filling every garage spot, buying another car, 15 daily challenges, your first snapshot, maxing all 5 scoring styles in one moment, top-end parts in every category, learning to drive with style, putting Ken's or Morohoshi's car in your garage, winning in their cars, and a 350,000 drift score in Mental Block with Ken's car.",
                "The achievements here: Tuned For Excellence (Win any event with a tuned car); Beyond Extreme (Tune a car to max drift or grip settings); Triple Crown (Win three events in a row); Social Scene (Get called out by other racers 50 times for your skills); Full House (Fill each spot in your garage); Building Your stable (Purchase another car for your garage); Serious Fun (Complete 15 daily challenges); No Filter (Take your first snapshot); That Perfect Moment (Max out all 5 scoring styles in a single moment); Full Power (Equip top end performance parts to each category of a car); Training Wheels Off (Learn to drive with style); Fanboi (Put Ken's or Morohoshi's car in your garage); Iconoclast (Win events driving Ken's and Morohoshi's cars); Mental Unblock (Get a 350000 Drift Score in Mental Block with Ken's car)."
            ]
        },
        {
            "heading": "Endgame & Community",
            "body": [
                "Reaching REP Level 70, completing Eddie's Challenge and winning an event in Eddie's car, sharing and downloading a wrap, Monthly Rank 10 from daily challenges, a Snapshot Pro filter shot, buying a Hot Rod, five Drag Race wins, winning all Prestige events and then gold on all of them, and mastering a Speedlist.",
                "The achievements here: Hit The Ceiling (Reach REP Level 70); Eddie Is Back (Complete Eddie's Challenge); Zero To Hero (Win an event in Eddie's Car); Wrap Artist (Share a Wrap with the Need for Speed™ Community); Climbing the Ranks (Reach Monthly Rank 10 by Completing Daily Challenges); Filter Addict (Take a Snapshot with a Filter in Snapshot Pro Mode); Kustom Kar (Buy your first Hot Rod); Wrap It Up (Download a shared wrap); Drag Queen (Win five Drag Race events); Basic Bronze (Win all the Prestige events); Gold Plated (Win Gold on all Prestige events); Speed Master (Win all the events in a Speedlist)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the story straight through, following the Icon path - Build, Speed, Style and Outlaw - and the crew storyline to the Ultimate Icon.",
                "2. Do the tuning and racing feats as you go: win with a tuned car, max a drift/grip setting, the three-win streak, top-tier parts.",
                "3. After the credits, grind REP to Level 70 and daily challenges to Monthly Rank 10.",
                "4. Buy Ken's and Morohoshi's cars, win in them, and grind Mental Block for the 350,000 drift score.",
                "5. Do the Prestige events for the bronze win, then again for gold on every one, and finish a Speedlist for Speed Master.",
                "Tip: for Mental Unblock, fully upgrade Ken's RX-7, use the drift build, and chain the whole Mental Block run in one long drift with the handbrake - 350,000 is very reachable once the car is maxed and you keep the combo alive through every corner."
            ]
        }
    ]
};
