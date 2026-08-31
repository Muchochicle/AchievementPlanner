// Sniper Elite V2 Remastered Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/sniper-elite-v2-remastered.json), whose 71 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   728740 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "sniper-elite-v2-remastered-achievement-guide",
    "category": "game",
    "gameSlug": "sniper-elite-v2-remastered",
    "icon": "🎯",
    "title": "Sniper Elite V2 Remastered Achievement Guide",
    "summary": "A practical guide to all 71 Steam achievements in Sniper Elite V2 Remastered - none are hidden. Covers the marksmanship and kill feats, the campaign missions and secondary objectives, the co-op / Overwatch and DLC achievements, and the remaster feats and multiplayer. None of the achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Sniper Elite V2 Remastered has 71 Steam achievements and none are hidden. Nineteen are marksmanship and kill feats (a scoped headshot over 150m, an eye shot, a marathon of cumulative sniped distance, 30 minutes of held breath, 506 cumulative kills, all hidden bottles, a 100%-accuracy mission, a no-damage mission), sixteen are the eleven campaign mission goals plus the Sniper Elite difficulty clear and four secondary objectives, twelve are co-op Overwatch and the two DLC campaigns, and twenty-four are the remaster's added feats ('Target Führer', 'Fingered') and the multiplayer suite.",
                "The catalog marks it difficulty 4. The Sniper Elite difficulty full clear, the 100%-accuracy and no-damage missions, 40 hours of service and the multiplayer win/kill grinds are the real work.",
                "Tip: play the campaign for the mission and feat achievements, then a Sniper Elite difficulty run and the DLC, and grind multiplayer separately."
            ]
        },
        {
            "heading": "Marksmanship & Kill Feats",
            "body": [
                "A 150m+ scoped headshot, an assault-position trip mine kill, a masked-fire kill, a fuel-tank tank kill, 25 covert kills, an eye shot, a marathon of cumulative distance, 30 minutes of held breath, 100 explosive kills, 506 cumulative sniper kills, 100 moving-target snipes, 100 sniped headshots, all hidden bottles, a ricochet headshot, a two-in-one shot, a 100m grenade snipe, a 100%-accuracy rifles-only mission, a no-damage mission, and all stolen gold bars.",
                "The achievements here: Front and Center (Get a scoped headshot over 150m); Mousetrap Fuse (Use a trip mine to kill an enemy who is trying to assault your position); Ear Plugs (Kill an enemy while your rifle fire is masked by a loud sound); Fuel Tank (Destroy a tank by sniping the fuel supply); Silent but Deadly (Covertly kill 25 unaware enemies); Deadeye (Snipe an enemy through his eye); Go the Distance (Get a cumulative sniped kill distance of a marathon); Iron Lung (Hold your breath for a cumulative time of half an hour); Potato Masher (Kill 100 enemies with explosives); World Record (Get 506 cumulative sniper kills); Gung Ho (Snipe 100 moving targets); Head Honcho (Get 100 sniped headshots); Jungle Juice (Find and snipe all the hidden bottles throughout the game); Pass the Buck (Get a sniped ricochet headshot); Double Dose (Snipe 2 people with one shot); Cooking Off (Snipe a grenade on an enemy's webbing from 100m); Make Every Bullet Count (Complete a mission with 100% accuracy, using only rifles); Hide and Hope (Complete a mission without being shot); Gold Rush (Find and retrieve all the stolen gold bars)."
            ]
        },
        {
            "heading": "Campaign Missions & Secondary Objectives",
            "body": [
                "The eleven campaign mission goals (Trainee to Legendary Sniper), completing all missions on Sniper Elite difficulty, and the four secondary objectives (ground-level convoy, rooftop sniper team, the tank into the river, the tower to the winch room unseen).",
                "The achievements here: Trainee Sniper (Escape the German assault); Novice Sniper (Stop the convoy); Apprentice Sniper (Destroy the V2 Facility and escape to safety); Journeyman Sniper (Hold off the Russian advance); Skilled Sniper (Stop the execution); Pro Sniper (Collect intel from the church and make it out alive); Expert Sniper (Eliminate Müller); Master Sniper (Uncover Wolff's plan); Veteran Sniper (Discover the location of the V2 launch site); Feared Sniper (Destroy the V2 rocket); Legendary Sniper (Prevent Wolff from escaping); Sniper Elite (Complete all missions on Sniper Elite difficulty); Get Off the Ground (Kill everyone in the convoy from ground level, except for Kreidl); High and Mighty (Wipe out the Elite Russian Sniper Team from the rooftops); Fish Tank (Send the tank into the river by blowing up the bridge); Kilroy was Here (Make it through the tower to the winch room without being spotted)."
            ]
        },
        {
            "heading": "Co-op / Overwatch & DLC",
            "body": [
                "Tagging and sniping 50 tagged enemies in Overwatch, 10 partner resuscitations, surviving 10 Bombing Runs, 50 career explosive shots, all Overwatch missions, and the DLC objectives (Neudorf undetected, 6 smoking soldiers, the Landwehr Canal commanders and snipers, Saint Pierre undetected, a 4,000m total shot distance).",
                "The achievements here: Target Spotted! (As a spotter in Overwatch, tag 50 enemies); Target Eliminated! (As a sniper in Overwatch, snipe 50 enemies tagged by your partner); Bedpan Commando (Resuscitate your partner 10 times in Cooperative mode); Bomb Happy (Survive 10 games of Bombing Run); Detonator (Career total of 50 shots on explosives); Can Do! (Complete all Overwatch missions in Cooperative mode); Silence is Golden (Complete Neudorf Outpost without alerting any AI); Smoking Kills (Kill 6 smoking soldiers on Neudorf Outpost); You were only supposed to... (Allow all 3 commanders to enter the command centre in The Landwehr Canal, then blow the doors); Watchmen (Eliminate all 5 Snipers watching the meeting point on The Landwehr Canal without them spotting you); Secret Service (Kill all the guards in Saint Pierre before getting to the church without being detected); Shoot the Alps (Get a total shot distance of over 4,000 meters in Saint Pierre)."
            ]
        },
        {
            "heading": "Remaster Feats & Multiplayer",
            "body": [
                "20 Photo Mode war stories, 50 incapacitations, the 'Target Führer' testicle shot, 25 trap kills, the multiplayer suite (Deathmatch, Distance King, first kills, 100 kills, explosive kills, Kill Tally, Capture the Flag, dog tags, hosting, team leader), a Campaign Coop mission, 40 hours of service, 10 longest-shot trophies, 25 trip mine kills, 50 stealth kills, a finger snipe, and 12 grenade-webbing snipes.",
                "The achievements here: War Reporter (Capture 20 war stories in Photo Mode); Flesh Wounds (Incapacitate 50 enemies); Target Führer (Kill Hitler with a testicle shot); Ambush King (Kill 25 enemies with traps); Competitive Nature (Complete 3 Multiplayer Deathmatch games); Windy Sniper (Win a Distance King Multiplayer game with Wind Strength set to High); First Kill (Get the first kill in a Multiplayer game); Social Killer (Get 100 Multiplayer kills); Big Bang Splat (Get an explosive kill in Multiplayer); Kill Tally Survivor (Survive 5 waves in Kill Tally); Kill Tally Killer (Get 25 kills in Kill Tally); Flag Bearer (Capture the flag in a Multiplayer game); Dog Tag Collector (Collect 12 dog tags in Multiplayer games); War Host (Host any Multiplayer game through to completion); A Stones Throw (Distract 20 enemies with rocks); Target Exploded (Kill an enemy by shooting nearby explosive barrels); Team Leader (Finish with the highest points in any team based Multiplayer game); Cooperative Play (Complete any mission in Campaign Coop); A Seasoned Sniper (Complete 40 hours of service); Long Shot Hot Shot (Earn 10 longest shot trophies in Multiplayer); He Tripped! (Kill 25 enemies with trip mines); Sneaky (Accumulate 50 stealth kills in single player); Fingered (Snipe off an enemy's finger); Exploding Pants (Snipe a grenade on an enemy's webbing 12 times)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the campaign for the eleven mission goals and most kill feats.",
                "2. Do the secondary objectives and the collectible bottles and gold bars on that run.",
                "3. Do a full Sniper Elite difficulty run for 'Sniper Elite', and the 100%-accuracy and no-damage missions on an easy difficulty.",
                "4. Play the two DLC campaigns for their objectives.",
                "5. Grind multiplayer and Kill Tally for the online achievements, and accumulate 40 hours of service.",
                "Tip: the cumulative counters (506 kills, marathon distance, 30 minutes of breath) tick over across every run, so they usually finish during the Sniper Elite playthrough - check what's left before grinding."
            ]
        }
    ]
};
