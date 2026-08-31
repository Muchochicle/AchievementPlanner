// Project CARS Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/project-cars.json), whose 45 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   234630 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "project-cars-achievement-guide",
    "category": "game",
    "gameSlug": "project-cars",
    "icon": "🏎",
    "title": "Project CARS Achievement Guide",
    "summary": "A practical guide to all 45 Steam achievements in Project CARS - none are hidden. Covers the Career and championship achievements, the one-off driving feats, and the online and Time Trial achievements. None of the achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Project CARS has 45 Steam achievements and none are hidden. A large block is Career - winning the LMP1 World Championship, defending titles, the Triple Crown across three disciplines, all Historic Goals, endorsements and invitations, completing every session of a championship, and winning every race in one. The rest are one-off driving feats (a 24-hour real-time race, a standing-still emergency stop, a first-corner crash then a win, the Grand Chelem) and a set of online and Time Trial achievements.",
                "The catalog marks it difficulty 4 - 'A Day In The Life' (a full 24-hour race in real time), 'Conquered. All. Races. Seriously.' (win every race in a Career championship) and the online-win achievements are all long or demanding. Nothing is missable: Career championships, Quick Race Weekends and online lobbies can all be replayed.",
                "Tip: knock out the small driving feats ('Emergency Stop', 'No Roads Needed', 'Do You Smell Somethin'?') in short custom Quick Race sessions where you can set up the exact conditions, rather than hoping they happen during Career races."
            ]
        },
        {
            "heading": "Career & Championships",
            "body": [
                "Earning every other achievement, the LMP1 World Championship, defending a title three years, the Triple Crown, all three Historic Goals, 8 endorsements, 12 invitations, completing every session of a championship, winning every race in one, back-to-back title defences, a two-year Team Championship, the Accolades, 500 fan messages, 50 Signature Car wins, 50%+ Affinity in every class, 20 Favourite Location wins, and the Signature Car photo.",
                "The achievements here: One More For The Road (Earned all other Trophies/Achievements); Zero To Hero (Won the LMP1 World Championship within ten seasons); Defending Champ (Defended a Career Championship for three consecutive years); Triple Crown (Won three Career Championships in three different motorsport disciplines); Hall Of Fame (Completed three Historic Goals and became a racing legend!); Fully Loaded (Signed 8 Endorsement deals); VIP (Received 12 Invitations); Meticulous (Completed every Practice, Qualifying, and Race session in every round in a Career Championship); Conquered. All. Races. Seriously. (Won every race in a Career Championship); Double Rainbow (Won the same Career Championship two years consecutively); No \"I\" In Team (Won a Team Championship two years consecutively); Twerkin' (Won your first Accolade); Taylor Would Be Proud (Won 22 Accolades); Mailbox Full (Received more than 500 messages from your fans); Petrolicious Love (Won more than 50 events with your Signature Car); To Affinity & Beyond (Have an Affinity greater than 50% in all car classes); Home Field Advantage (Won more than 20 events at your Favorite Location); Selfie (Took a photo of your Signature Car at your Favorite Location)."
            ]
        },
        {
            "heading": "Driving Feats",
            "body": [
                "Driving over 333 km/h for 6.66 seconds, saving a pit strategy, a sub-0.2s start reaction, a clean pit in-and-out, a first-corner crash then a win, three laps within 0.1s, a KERS overtake, the Grand Chelem, a real-time 24-hour race, a 100-0 km/h stop in 2 seconds, all four wheels airborne, 1000 C brakes, lapping an opponent, a reverse Azure lap from cockpit, a full-damage Gladiator win, the scenic Italian drive, the California Highway run, and crashing into the SMS employee AI.",
                "The achievements here: Half Racer, Half Demon (Drove faster than 333 km/h for over 6.66 consecutive secs); Pit Boss (Created and saved a Pit Strategy); Ready To Pounce (Had a reaction time of less than 0.2 secs off the starting grid); Requesting Flyby (Entered and exited the pit lane without losing a position (cannot be in last place)); Keep Calm And Race On (Crashed on or before the first corner then went on to win the race); Consistency Is King (Performed three consecutive laps within 0.1 sec of each other); My Little Friend (Overtook a car using Formula A KERS); Grand Chelem (Got pole position in qualifying, fastest lap in the race and won whilst leading every lap); A Day In The Life (Completed a 24 hour race using only realtime progression (and why not stream it?!)); Emergency Stop (Braked to a standstill from 100-0 km/h within 2 secs); No Roads Needed (Got all four wheels in the air for more than 0.88 secs); Do You Smell Somethin'? (Made your brakes reach a temperature of 1000° C); On Your Left (Lapped an opponent in a race); Reversa Corsa (Completed a Quick Race Weekend lap of Azure Circuit in reverse from cockpit view without collisions); Gladiator (Won a Quick Race Weekend with Full Damage, Mechanical Failures, and Tire Wear (must be 5+ laps)); Sunday Driver (Driven the speed limit (50 km/h) in an Italian car and appreciated the Azure coastal scenery (Free Practice not allowed)); Eastbound & Down (Ran the California Highway in under 9 mins in a US car); Credit Where Credit's Due (Crashed into the AI counterpart of an SMS employee)."
            ]
        },
        {
            "heading": "Online & Time Trial",
            "body": [
                "Completing 25+ online races, 50 online podiums, a cockpit-view no-aids manual-gears online win, three clean online wins in a row, a low-collision online record, an online pole, beating a Time Trial leaderboard ghost, setting a time at 50 locations, and 20 Driver Network Community Events.",
                "The achievements here: Player 1 Versus The World (Entered and completed more than 25 Online races); Pentapodia (Finished on the podium more than 50 times in an Online Public race); I Am The 5% (Won an Online Public race using manual gears, and no driving aids, from cockpit view); Clean As A Whistle (Won three Online Public races in a row without being involved in a major collision); Pristine Paintwork (Completed more than 3 Online races with 50% of them avoiding a major collision); Speed Racer (Set a Pole Position time in an Online Public qualifying session); Exorcist (Beat a Ghost from the Time Trial Leaderboards); Lap Time Wizard (Set a time at 50 locations (variations and reverse layouts not necessary)); Community Ambassador (Participated in 20 Driver Network Community Events)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play a full Career, aiming for the LMP1 World Championship and picking disciplines that build toward the Triple Crown.",
                "2. In one championship, complete every session and win every race for 'Meticulous' and 'Conquered. All. Races. Seriously.'.",
                "3. Set up short Quick Race Weekends to tick off the one-off driving feats under controlled conditions.",
                "4. Do the 24-hour real-time race ('A Day In The Life') as a dedicated session.",
                "5. Play online for the race, podium, clean-streak and pole achievements, and beat a Time Trial ghost.",
                "Tip: 'Conquered. All. Races. Seriously.' is easiest in a short, low-round championship on a lower AI difficulty - restart the round if you lose a race so you don't have to redo the whole season."
            ]
        }
    ]
};
