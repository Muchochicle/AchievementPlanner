// GRID 2 Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/grid-2.json), whose 60 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   44350 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "grid-2-achievement-guide",
    "category": "game",
    "gameSlug": "grid-2",
    "icon": "🏎",
    "title": "GRID 2 Achievement Guide",
    "summary": "A practical guide to all 60 Steam achievements in GRID 2 - none are hidden. Covers the World Series of Racing career progression, the driving and challenge feats, the online and Global Challenge achievements, and the DLC track-specific achievements. None of the achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "GRID 2 has 60 Steam achievements and none are hidden. A block follows the World Series of Racing career - the regional-to-global season progression, fan milestones, winning every career event, and beating the Prestige and Rival drivers. The rest are one-off driving feats (a 100 m drift, a 7-roll landing, a no-brakes round win, the 'Master Racer' no-Flashbacks hardest-difficulty win), online-level and playlist achievements, Global Challenge wins, and a set of track-specific feats added by the Spa and Bathurst DLC.",
                "The catalog marks it a single playthrough - the career runs once, and everything else is Quick Race, online or Global Challenge content that can be attempted freely. Nothing is missable.",
                "Tip: get 'Master Racer' (win a career event on the hardest difficulty with no Flashbacks) on a short, low-speed event early in the career, when the AI cars are slow and a clean start is enough to win."
            ]
        },
        {
            "heading": "World Series of Racing Career",
            "body": [
                "The career story progression - Callahan's first call, the showroom upgrade, expanding to Asia and going global, the TV montage, becoming WSR champion, and the fan-count milestones up to 23.5 million.",
                "The achievements here: Here's My Number, Call Me Maybe? (You returned Callahan's call and became his poster boy for the World Series of Racing.); That New Showroom Smell (Having wowed the crowds in America, it's time to upgrade your digs.); Oriental Express (Look out Asia, here we come.); Going Global (The WSR goes from regional to global thanks to your impressive form.); Even Balboa Had a Montage (The WSR is so big now that it's even getting montages on TV. You've made it to the big time!); The World's Greatest (Congratulations, you have become the ultimate WSR champion. What an investment!); T3XT M3SSAG1NG I5 GR8 (Thanks to you, the WSR is now the talk of the town.); Internet Famous (The message boards are alight with the talk of the WSR's increasing popularity.); Clubbed to Death (That's it, folks. The club format is behind you, it's all about the leagues now. Good luck!); Toca Juniors No More (You got your first taste of a Super Touring Car and never looked back.); Imma Let You Finish (You amassed more fans than Taylor Swift has Twitter followers. That's 23.5 million, by the way.)."
            ]
        },
        {
            "heading": "Career Feats & Challenges",
            "body": [
                "A Touge shutout, the maximum Overtake multiplier, an online Endurance race, a trade-paint win, 5 and 20 sponsor objectives, the white Challenger and 230 mph feats, a Global Challenge goal, an Upgraded-class car, the Red Bull Ring and Okutama drift challenges, the 7-roll landing, beating a Rival, and winning every career event.",
                "The achievements here: Touge Fast, Touge Furious (You shutout an opponent in a career Touge event.); C-C-C-Combo Maker (You reached the maximum multiplier in an Overtake event.); All Night Long (You took part in and completed an online Endurance race.); Pinball Wizard (You traded paint with every competitor during one offline race and still won the race.); Mo Money, No Problems (You've gone above and beyond the call of duty and completed 5 career sponsor objectives.); Vanishing Point (You've won a race in a white Dodge Challenger but lived to tell the tale, unlike Kowalski.); Rocket Manski (You've driven faster than a Russian torpedo, which incidentally is 230 mph (370 km/h).); Sellout (You've got one thing on your mind: money! You completed 20 career sponsor objectives.); One For The Team (You've completed an individual Global Challenge goal and ultimately helped the community.); A Different Class (You've upgraded a car and bumped it to 'Upgraded' class.); Ring Master (You finished 5 seconds ahead of the target time in a Vehicle Challenge on the Red Bull Ring.); Tokyo Drift (You scored 350,000 drift points in Okutama in a Mazda RX-7 TYPE RZ or a NISMO R34T-R Z-TUNE.); Shaken, Not Stirred (You rolled a car at least 7 times and landed on its wheels, just like Bond did.); Keep Your Friends Close...  (… and your enemies even closer. You beat a Rival on track.); You rOCDed! (You finished first in every career event, during season play and/or via the timeline.)."
            ]
        },
        {
            "heading": "Driving & Progression Feats",
            "body": [
                "Online level 10, a 5-race playlist, a 100 m drift, beating the Prestige drivers, the no-Flashbacks hardest-difficulty win, an upgraded-car win, a Promo Event, a Time Attack first-lap best, lapping a competitor, the Touge 5-second-rule win, 1,000 miles driven, a no-brakes round win, a Vehicle Challenge target time, a Global Challenge week win, the California Big Sur sub-3-minute run, competing in all race types, an Online Playlist win, 5 custom liveries, and repeating an event via the Timeline.",
                "The achievements here: Dipping Your Toes (You've reached level 10 online and opened up a new world of possibilities.); Social Butterfly (You took part in an online playlist and stuck around for at least 5 races.); Sideways Shenanigans (You performed a 100m drift.); Could It Be Magic? (You beat all of the Prestige drivers in career club events.); Master Racer (You won a career event on the hardest difficulty without using Flashbacks.); Harder, Better, Faster, Stronger (You won a race in an upgraded car.); A Vision of What's to Come (You won a career Promo Event.); Beginner's Luck (You set the fastest time on the first lap of a Time Attack event.); Remember Me? (You lapped a competitor.); Eat It! (You won the first round of a career Touge event using the 5 second rule.); Making My Way Down Town (You've driven more than 1,000 miles (1,610km).); Pedal to the Medal (You won a round of a career event without using the brakes.); SWAGtastic! (You beat the target time in a Vehicle Challenge.); Global Domination (You won a week of Global Challenge.); California Dreaming (You completed California Big Sur in under 3 minutes. (Excludes drift events)); Jack of All Trades (You've competed in all race types.); Natural Ability (You won an Online Playlist event.); The Artist (You've individually applied customised liveries to 5 vehicles.); Quantum Leap (You repeated an event using the Timeline.)."
            ]
        },
        {
            "heading": "DLC Track Feats",
            "body": [
                "The Chicago Mustang lap, racing at every city, a 250,000-point drift, a no-contact Overtake win, a LiveRoute win, and the Spa and Bathurst DLC feats (lap times, online Endurance and Checkpoint races, top speeds, super drifts, and the Pagani Zonda and Koenigsegg CCGT event wins).",
                "The achievements here: Gone in 60 Seconds (You completed a lap of Chicago - Wabash Run driving the Ford Mustang Mach 1 in less than 60 seconds.); Harlem Globeshaker (You raced at every city at least once.); Drifting Like a Boss (You've scored 250,000 points in a single drift.); Flawless Victory (You've won an Overtake event making no contact with anything. (Excludes Global Challenge events)); Winging It (You've won a LiveRoute event.); Spa Time (You beat a lap time of 01:49:00 at Spa-Francorchamps. (Excludes drift events)); Staying the Distance (You completed an online Endurance race  at Spa-Francorchamps.); Super Drift (You've scored over 300,000 points in a single drift at Spa-Francorchamps.); Rouge Racer (You went faster than 260mph (418.429km/h) at Spa-Francorchamps.); Aussie Rules (You beat a lap time of 01:39:00 at Bathurst. (Excludes drift events)); Bush-bash (You completed a Time Attack event at Bathurst.); Time Extended (You've won an online Checkpoint event at Bathurst.); Outback and Gone (You reached a speed of over 220mph (354.056km/h) at Bathurst.); An Old Favourite (You've won an elimination event in a Pagani Zonda Revolución.); Turn Back Time (You've won a drift event in a Koenigsegg CCGT (excludes Global Challenge events).)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the WSR career to champion, winning every event as you go for 'You rOCDed!'.",
                "2. Grab 'Master Racer' early on a slow event, and do the sponsor objectives and Rival beats during the career.",
                "3. Do the one-off driving feats (100 m drift, 7-roll landing, no-brakes win) in Quick Race sessions.",
                "4. Play online for the level-10, playlist and Endurance achievements, and win a week of Global Challenge.",
                "5. Do the Spa and Bathurst DLC track feats last.",
                "Tip: the big drift-score achievements are easiest in a rear-wheel-drive drift car on Okutama or Spa - hold one long linked drift around the whole lap rather than chaining short ones."
            ]
        }
    ]
};
