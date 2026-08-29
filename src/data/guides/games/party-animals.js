// Party Animals Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/party-animals.json), whose 116 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1260320 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js). None are hidden; every one
//   ships a real, official Steam description, quoted verbatim below.
// - Sections group achievements by what each one actually requires.
export const GUIDE = {
    "slug": "party-animals-achievement-guide",
    "category": "game",
    "gameSlug": "party-animals",
    "icon": "🐾",
    "title": "Party Animals Achievement Guide",
    "summary": "A practical guide to all 116 Steam achievements in Party Animals - none are hidden. progression & social, quick match & custom games, map challenges - classic maps, map challenges - more maps, special modes.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Party Animals has 116 Steam achievements and none are hidden. They break into account progression (levels, character and outfit unlocks, friends, weekly challenges), Quick Match and Custom Game results, a long list of per-map trick challenges, and the special asymmetric modes (Space Crisis, Factory Crisis).",
                "Nothing is missable. The bulk of the list is map-specific: each map has a \"win 5 Classic games here\" achievement plus a few trick shots (win a round without being hit, eliminate someone a particular way, survive a hazard). Many are far easier in Custom Games with friends or bots.",
                "Tip: use Custom Games with a full lobby of friends or bots to farm the per-map trick achievements without matchmaking pressure - the \"win 5 Classic games\" ones still want Quick Match, but everything else is easier on your own terms."
            ]
        },
        {
            "heading": "Progression & Social",
            "body": [
                "The account goals: unlocking 92 achievements (Platinum Animal), Animal Level 50 and 100, unlocking 20 characters, 20 and 30 outfits, 15 avatars, the weekly-challenge streaks, and 1 and 10 in-game friends.",
                "The achievements here: Platinum Animal (Unlock 92 achievements); Level 50 (Reach Animal Level 50); Level 100 (Reach Animal Level 100); Animal Unlock: 20 (Unlock 20 Characters); Outfit Unlocked: 20 (Unlock 20 Outfits); Fashionista (Unlock 30 Outfits); Avatar Master (Unlock 15 avatars); Punch In (Successfully finish 4 weekly challenges within a single week); Keep On Keeping On (Successfully finish all weekly challenges for 3 weeks in a row); Yo Man (Get 1 new in-game friend); Friends (Get 10 new in-game friends)."
            ]
        },
        {
            "heading": "Quick Match & Custom Games",
            "body": [
                "The core match results: finishing and 3-starring the Lab, 1 and 10 Quick Match wins, the team-play win and streak achievements, the Custom Game goals, and the podium/photo-moment gags (knock someone out at the podium, be the last one standing at the photo).",
                "The achievements here: Welcome To The Party (Finish the Lab); Nemo For Speed (Earn a 3-star rating in the Lab); First Strike (Win 1 Quick Match game); 10 Quick Match Wins (Win 10 Quick Match games); I Have A Friend (Team up and finish 1 Quick Match game alongside friends); Give Me Five (Team up and finish 10 Quick Match games alongside friends); Currahee (Team up and win 1 Quick Match game alongside friends); Band Of Brothers (Team up and win 10 Quick Match games alongside friends); Hot Shot (Win 5 consecutive games in Quick Match); The Dream Team (Team up and win 5 consecutive Quick Match games alongside friends); OHHHHHH (Win 1 Quick Match game without a single knockout); Piece of Cake (Win Last Stand Classic in exactly 3 rounds (Quick Match)); Match Point (Win Last Stand Classic in exactly 9 rounds (Quick Match)); Fight Everywhere (Win 20 Custom Games in different maps (require more than 6 human players when game ends)); Twice The Fun (Finish 2 Custom Games with multiple local players(splitscreen)); My Rules (Complete 1 Custom Game with modified settings); Who Did That (Throw item and knock out 5 opponents as spectator (require more than 6 human players when game ends)); Sportsmanship (Knock out 1 player at the podium); Who's Laughing Now (Be the sole player who hasn't been knocked out at the photo-taking moment)."
            ]
        },
        {
            "heading": "Map Challenges - Classic Maps",
            "body": [
                "The per-map challenges for the first set of maps (Ichiban, Typhoon, Broken Arrow, Winter Is Coming, Wind Tunnel, Blackhole Lab, Beat-Up Bridge, Gator Valley, Ice Breaker, Lollipop Factory) - each with a \"win 5 Classic games\" goal and two or three trick achievements.",
                "The achievements here: Hooray! The Earth's Strongest Animal (In Ichiban, win 5 Quick Match Classic games); Ice Block (In Ichiban, win a round by freezing yourself to evade elimination by the poison cloud (Quick Match)); Sayonara (In Ichiban, eliminate an opponent by striking them out of the playing field (Quick Match)); Justice Rains From Above (In Ichiban, leap from a central pillar and knock out one player (Quick Match)); Navy OTTERs (In Typhoon, win 5 Quick Match Classic games); Superdry (In Typhoon, win one round without falling into the water (Quick Match)); Case Closed (In Typhoon, eliminate one opponent by throwing it into the missile hatch (Quick Match)); Fireworks (In Typhoon, hold onto the missile for at least one second for 3 times in one round (Quick Match)); Die Hard (In Broken Arrow, win 5 Quick Match Classic games); Touch Down (In Broken Arrow, sustain survival for more than 2 min 30 sec in one round (Quick Match)); Not Like Pat Roach (In Broken Arrow, hold a propeller, spin a lap, and survive (Quick Match)); Survivor (In Winter Is Coming, win 5 Classic Quick Match games); Man vs. Wild (In Winter Is Coming, fall into the frozen lake's hole and return to a bonfire (Quick Match)); Hot Dog (In Winter Is Coming, win one round without getting frozen (Quick Match)); Dog In The Wind (In Wind Tunnel, win 5 Quick Match Classic games); Chill In The Wind (In Wind Tunnel, win one round without grabbing levers and gates (Quick Match)); Dog Behind The Door (In Wind Tunnel, survive for over 45 seconds without being blown by the wind (Quick Match)); Wreck-It Ralph (In Wind Tunnel, survive even after all levers have been broken (Quick Match)); G-Man (In Blackhole Lab, win 5 Classic Quick Match games); The Vortigaunts (In Blackhole Lab, survive from the 4th black hole without using the chain (Quick Match)); Arthur's Dream (In Blackhole Lab, knock out 1 opponent while afloat in mid-air (Quick Match)); Mission: Impossible (In Blackhole Lab, win one round prior to the 2nd black hole's generation (Quick Match)); Waterloo Bridge (In Beat-Up Bridge, win 5 Classic Quick Match games); Peace Elite (In Beat-Up Bridge, win one round without hitting anyone else (Quick Match)); Tarzan (In Beat-Up Bridge, endure for 20 seconds after main-rope snap and win the round (Quick Match)); Escape the Gator (In Gator Valley, win 5 Quick Match Classic games); Still Waters (In Gator Valley, win one round prior to the onset of the 3rd wave (Quick Match)); Surfer Dogs (In Gator Valley, win one round with teammate without falling off the floating bridge (Quick Match)); Reservoir Dogs (In Gator Valley, win one round with teammate while both of you are in the water (Quick Match)); Ice Dog (In Ice Breaker, win 5 Quick Match Classic games); Jack And Rose (In Ice Breaker, win one round by staying alive with teammate (Quick Match)); Smooth Operator (In Ice Breaker, win one round without falling into the water (Quick Match)); Willy Wonka (In Lollipop Factory, win 5 Quick Match Classic games); Less is More (In Lollipop Factory, win the game by only submitting little gummies (Quick Match)); I'm Back (In Lollipop Factory, climb out of the submission gate (Quick Match))."
            ]
        },
        {
            "heading": "Map Challenges - More Maps",
            "body": [
                "The per-map challenges for the rest of the maps and modes (Fluffy Redemption, Into The Game, Safely Afloat, Trebuchet, Buzz Ball, Beast Hockey/Football/Soccer, the Lab knowledge gags, Black Sails and Cast Away solo/co-op modes, Nemo Kart, Ring of Garfat).",
                "The achievements here: L'arrivée d'un train (In Fluffy Redemption, win 5 Quick Match Classic games); Working Dog (In Fluffy Redemption, throw 10 coal pieces into the firebox without being eliminated (Quick Match)); Biofuels (In Fluffy Redemption, throw opponents into the firebox for 10 times in one game (Quick Match)); Dutch's Plan (In Fluffy Redemption, experience a complete team wipeout (Quick Match)); Ready Player One (In Into The Game, win 5 Quick Match Classic games); Diamond Merchant (In Into The Game, win one game and score 20 diamonds on your own(Quick Match)); Gold Rusher (In Into The Game, win one game and score 50 coins on your own (Quick Match)); Immortal Kombat (In Into The Game, knock out opponent playing arcade for 3 times in one game (Quick Match)); Fly Me To The Moon (In Safely Afloat, win 5 Quick Match Classic games); Up (In Safely Afloat, grasp a balloon and stay aloft for 60 seconds in a game (Quick Match)); Mine Cart Carnage (In Safely Afloat, propel the mine cart over the cliff's edge (Quick Match)); Balloon Runner (In Safely Afloat, achieve a score within the initial 30 seconds of the game (Quick Match)); Total War (In Trebuchet, win 5 Quick Match Classic games); The Hurt Locker (In Trebuchet, successfully defuse 10 incoming barrel bombs in a single game (Quick Match)); Airline VIP (In Trebuchet, ride in launched trebuchet 10 times in one game (Quick Match)); Thunderbolt (In Buzz Ball, win 5 Quick Match Classic games); Shock Damage (In Buzz Ball, trigger the buzz ball blast 10 times in one game (Quick Match)); 666 (In Buzz Ball, single-handedly accumulate all points for your team and win (Quick Match)); The Klaw (In Buzz Ball, single-handedly notch a score in the final 10 seconds of the 11th round (Quick Match)); The Mighty Ducks (In Beast Hockey, win 5 Quick Match Classic games); Perfect Guard (In Beast Hockey, parry the puck using a shield thrice in a match (Quick Match)); Bowling Alley Cat (In Beast Hockey, strike the puck, knock out over 2 players and notch a score (Quick Match)); Super Bowl (In Beast Football, win 5 Quick Match Classic games); Ball Weapon (In Beast Football, long pass and knock out opponent (Quick Match)); Run Forrest Run (In Beast Football, score a touchdown within the initial 15 seconds of the round (Quick Match)); Patte d'Or (In Beast Soccer, win 5 Quick Match Classic games); Hat Trick (In Beast Soccer, score 3 goals in one game (Quick Match)); Roy Makaay (In Beast Soccer, score a goal within the initial 10 seconds of the round (Quick Match)); Big Brains (In the Lab, get to know 4 great scientists' names); I'm Enlightened (In the Lab, stand in front of the signboard at the Monolith room for 5 seconds); Aye aye, Captain! (Finish the Black Sails solo mode); Captain Nemo (Earn a 3-star rating in Black Sails solo mode); An Able Bodied Crew (Complete the Black Sails duo mode on hard or beast difficulty); Drink up, me hearties, yo ho! (Complete the Black Sails duo mode on beast difficulty); Keep Breathing (Finish Cast Away); This is my island! (Earn a 3-star rating in Cast Away); Hey, Wilson (In Cast Away, find and pick up the Wilson volleyball); Safely First (Win 1 Nemo Kart games (Quick Match)); Fast and Furry (In Nemo Kart – Shanghai, finish a race within 2:38.00 (Quick Match)); Beast of Mount Akina (In Nemo Kart – Shanghai, perform 34 drift boosts in a single race (Quick Match)); Fur Weight Champion (In Ring of Garfat, win 5 Quick Match Classic games); Nimble As A Cat (In Ring of Garfat, win any round without encountering any falling rocks or flames (Quick Match)); Iron Mike (In Ring of Garfat, win a round within 91 seconds (Quick Match))."
            ]
        },
        {
            "heading": "Special Modes",
            "body": [
                "The asymmetric modes: winning 20 games and the role-specific wins (Goodie, Killer, Neutral) in both Space Crisis and Factory Crisis.",
                "The achievements here: Infinity And Beyond (Win 20 games in Space Crisis); New Dawn (Win 15 games as a Goodie in Space Crisis); I'm Sorry, Dave (Win 5 games as a Killer in Space Crisis); The Monolith (Win 3 games as a Neutral role in Space Crisis); The Call (Win 20 games in Factory Crisis); Tale of the Inspector (Win 15 games as a Goodie in Factory Crisis); The Horror in Clay (Win 5 games as a Killer in Factory Crisis); Madness from the Sea (Win 3 games as a Neutral role in Factory Crisis)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play Quick Match normally for a while - the Lab, the win counters, the team achievements and account levels all accumulate.",
                "2. Set up Custom Games with friends or bots (6+ players) to farm the per-map trick achievements map by map.",
                "3. Do the solo/co-op modes (Black Sails, Cast Away) and the special modes (Space Crisis, Factory Crisis) in dedicated sessions.",
                "4. Grind the last of the unlock counters (characters, outfits, avatars) and the weekly-challenge streaks.",
                "Tip: the \"win 5 Classic games on map X\" achievements are the slow part - queue Classic mode and you cannot pick the map, so treat these as a background tally that fills as you play everything else."
            ]
        }
    ]
};
