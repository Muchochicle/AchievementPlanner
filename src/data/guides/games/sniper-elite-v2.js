// Sniper Elite V2 Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/sniper-elite-v2.json), whose 47 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   63380 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "sniper-elite-v2-achievement-guide",
    "category": "game",
    "gameSlug": "sniper-elite-v2",
    "icon": "🎯",
    "title": "Sniper Elite V2 Achievement Guide",
    "summary": "A practical guide to all 47 Steam achievements in Sniper Elite V2 - none are hidden. Covers the sniping skill and trick-shot feats, the campaign mission goals and level challenges, and the co-op Overwatch and DLC-mission achievements.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Sniper Elite V2 has 47 Steam achievements and none of them are hidden. The bulk are sniping skill feats - a 150m scoped headshot, an eye shot, a ricochet headshot, a masked shot, a two-for-one shot, cumulative distance and kill-count milestones (506 sniper kills, a marathon of cumulative kill distance, 100 headshots, 100 moving targets), plus stealth kills and the game's two collectible sets (hidden bottles and stolen gold bars). The rest are the 11 mission goals, completing all missions on the hardest difficulty, four secondary level challenges, the co-op Overwatch achievements (spotter and sniper roles, resuscitations, Bombing Run), and the achievements from the two DLC mission packs (Neudorf Outpost, Landwehr Canal, and the St. Pierre Kill Hitler mission).",
                "Nothing is permanently missable - missions are freely replayable and the cumulative counters carry across every playthrough and co-op session. This is a short completion; the longest pole is Sniper Elite (all missions on the highest difficulty) and the co-op achievements, which need a partner.",
                "Tip: play the campaign once on the highest difficulty for Sniper Elite and the mission goals, doing the trick shots (eye shot, ricochet, grenade-on-webbing) and collectibles as you go, then bring in a co-op partner for the Overwatch and Bombing Run achievements and mop up any cumulative counters together."
            ]
        },
        {
            "heading": "Sniping Skill & Trick-Shot Feats",
            "body": [
                "The 150m scoped headshot, the trip-mine and masked-shot kills, sniping a tank's fuel supply, 25 covert kills, an eye shot, a marathon of cumulative kill distance, half an hour of held breath, 100 explosive kills, 506 sniper kills, 100 moving-target snipes, 100 headshots, all hidden bottles, a ricochet headshot, a two-for-one shot, a 100m grenade-on-webbing snipe, a 100%-accuracy rifle-only level, a no-damage level, and all stolen gold bars.",
                "The achievements here: Front and Center (Get a scoped headshot over 150m); Mousetrap Fuse (Use a trip mine to kill an enemy who is trying to assault your position); Ear Plugs (Kill an enemy while your rifle fire is masked by a loud sound); Fuel Tank (Destroy a tank by sniping the fuel supply); Silent but Deadly (Covertly kill 25 unaware enemies); Deadeye (Snipe an enemy through his eye); Go the Distance (Get a cumulative sniped kill distance of a marathon); Iron Lung (Hold your breath for a cumulative time of half an hour); Potato Masher (Kill 100 enemies with explosives); World Record (Get 506 cumulative sniper kills); Gung Ho (Snipe 100 moving targets); Head Honcho (Get 100 sniped headshots); Jungle Juice (Find and snipe all the hidden bottles throughout the game); Pass the Buck (Get a sniped ricochet headshot); Double Dose (Snipe 2 people with one shot); Cooking Off (Snipe a grenade on an enemy's webbing from 100m); Make Every Bullet Count (Complete a level with 100% accuracy, using only rifles); Hide and Hope (Complete a level without being shot a single time); Gold Rush (Find and retrieve all the stolen gold bars)."
            ]
        },
        {
            "heading": "Campaign Missions & Challenges",
            "body": [
                "The 11 mission goals from Trainee Sniper (escape the German assault) to Legendary Sniper (prevent Wolff from escaping), completing all missions on the highest difficulty, and the four secondary challenges - ground-level convoy kills except Kreidl, the rooftop sniper-team wipe, sending the tank into the river, and reaching the winch room unseen.",
                "The achievements here: Trainee Sniper (Escape the German assault); Novice Sniper (Stop the convoy); Apprentice Sniper (Destroy the V2 Facility and escape to safety); Journeyman Sniper (Hold off the Russian advance); Skilled Sniper (Stop the execution); Pro Sniper (Collect intel from the church and make it out alive); Expert Sniper (Eliminate Müller); Master Sniper (Uncover Wolff's plan); Veteran Sniper (Discover the location of the V2 launch site); Feared Sniper (Destroy the V2 rocket); Legendary Sniper (Prevent Wolff from escaping); Sniper Elite (Complete all missions on highest difficulty); Get Off the Ground (Kill everyone in the convoy from ground level, except for Kreidl); High and Mighty (Wipe out the Elite Russian Sniper Team from the rooftops); Fish Tank (Send the tank into the river by blowing up the bridge); Kilroy was Here (Make it through the tower to the winch room without being spotted)."
            ]
        },
        {
            "heading": "Co-op Overwatch & DLC Missions",
            "body": [
                "The co-op feats - 50 spotter tags, 50 tagged-target snipes, 10 partner resuscitations, surviving 10 Bombing Run games, a career 50 shots on explosives, completing all Overwatch missions - and the DLC missions: the silent and smoking-soldier feats on Neudorf Outpost, the commanders-and-doors and five-sniper feats on Landwehr Canal, and the stealth-kill and 4000m cumulative-distance feats on the St. Pierre Kill Hitler mission.",
                "The achievements here: Target Spotted! (As a spotter in Overwatch, tag 50 enemies); Target Eliminated! (As a sniper in Overwatch, snipe 50 enemies tagged by your partner); Bedpan Commando (Resuscitate your partner in co-op 10 times); Bomb Happy (Survive 10 games of Bombing Run); Detonator (Career total of 50 shots on explosives); Can Do! (Complete all co-op Overwatch Missions); Silence is Golden (Complete Neudorf Outpost without alerting any AI); Smoking Kills (Kill 6 smoking soldiers on Neudorf Outpost); You were only supposed to... (Allow all 3 commanders to enter the command centre in Landwehr Canal, then blow the doors); Watchmen (Eliminate all 5 Snipers watching the meeting point on Landwehr Canal without them spotting you); Secret Service (SAINT PIERRE – Kill all the guards before getting to the church without being detected); Shoot the Alps (SAINT PIERRE – Get a total shot distance of over 4000 meters)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the campaign on the highest difficulty for Sniper Elite and all 11 mission goals, taking your time on each shot.",
                "2. Do the trick shots (eye shot, ricochet headshot, grenade-on-webbing, two-for-one) and both collectible sets (bottles, gold bars) during that run or via mission replay.",
                "3. Do the four secondary level challenges, each a focused replay of one mission.",
                "4. Bring in a co-op partner for the Overwatch missions, alternating spotter and sniper roles to bank both tag achievements, plus the resuscitation and Bombing Run feats.",
                "5. Play the two DLC mission packs and the St. Pierre mission for their stealth and distance achievements.",
                "Tip: the cumulative counters (506 kills, marathon distance, 100 explosive kills, half an hour of held breath) will almost all fall out of a highest-difficulty campaign run plus the co-op sessions - only check what is left afterward and grind a single short mission for the remainder."
            ]
        }
    ]
};
