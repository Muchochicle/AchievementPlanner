// Zombie Army Trilogy Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/zombie-army-trilogy.json), whose 68 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   301640 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "zombie-army-trilogy-achievement-guide",
    "category": "game",
    "gameSlug": "zombie-army-trilogy",
    "icon": "🧟",
    "title": "Zombie Army Trilogy Achievement Guide",
    "summary": "A practical guide to all 68 Steam achievements in Zombie Army Trilogy - none are hidden. Covers the fifteen campaign chapters and the Sniper Elite difficulty clear, the cumulative kill counts and combat feats, the map secrets, and the Horde Mode and co-op achievements.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Zombie Army Trilogy has 68 Steam achievements and none of them are hidden. Fifteen are chapter completions across the three episodes (Village of the Dead through Army of Darkness), plus completing all chapters on Sniper Elite difficulty. A large block covers cumulative kills and combat feats - 5,000 kills, enemy-type kill counts, 5-for-1 sniper kills, 50km total shot distance, 1,000 and 10,000 severed limbs, headshot streaks, explosive multi-kills, chain counts - and the map secrets (the phone, the ravens, saving the hospital patient, the tortured souls). Seventeen cover Horde Mode (wave 10 on each map) and co-op (50 saviour kills, 50 revives, 20 Elite kills, a 4-player chapter, every sidequest, playing as every character, the Gold Bars and blood bottles).",
                "Nothing is missable - every chapter, Horde map and difficulty is replayable and all counters are cumulative. The real gate is a co-op group for the Horde and 4-player achievements.",
                "Tip: do a co-op playthrough on a low difficulty for the chapter completions and most kill counts, then a run on Sniper Elite difficulty, then Horde Mode with the same group."
            ]
        },
        {
            "heading": "Campaign Chapters",
            "body": [
                "Completing each of the fifteen campaign chapters across the three episodes, and completing all chapters on Sniper Elite difficulty.",
                "The achievements here: Don't mention the Z word! (Successfully complete Village of the Dead); Resurrection Day (Successfully complete Cathedral of Resurrection); Play it Thule (Successfully complete Labyrinth of Death); The pen is mightier than the sidearm (Successfully complete Library of Evil); No more room in Hell (Successfully complete Subway to Hell); Hell on earth, that's it (Successfully complete Purgatory); Into the fire (Successfully complete Gateway to Hell); Descent into Hell (Successfully complete Crucible of Evil); This is going to be a bumpy ride (Successfully complete Terminal); Code Red (Successfully complete Tower of Hellfire); I think we'll start with a reign of terror (Successfully complete City of Ashes); You got rid of those stiffs yet? (Successfully complete Freight Train of Fear); There's something in the mist! (Successfully complete Forest of Corpses); Broadsword calling Danny Boy (Successfully complete The Keep); Taste some of Mama's home cookin', Adolf! (Successfully complete Army of Darkness); This calls for divine intervention! (Successfully complete all Chapters on Sniper Elite difficulty)."
            ]
        },
        {
            "heading": "Combat Feats & Secrets",
            "body": [
                "The cumulative kill counts (5,000 kills, per-enemy-type totals, 500 headshots, severed limbs, kicks), the sniper and explosive multi-kills, the shot-distance and chain-count feats, the loot and pickup achievements, and the map secrets - the phone, the ravens, the hospital patient and the tortured souls.",
                "The achievements here: Don't get all stingy with your bullets (Kill 5,000 enemies of any kind); The head bone's connected to the...oh, wait (Kill 500 Skeletons); Naughty little boys get what they deserve (Kill 100 Zombie Snipers); We don't need a stretcher. We need a mop! (Kill 50 Suicide Zombies); Good, bad, I'm the guy with the gun (Kill 50 Super Elites); Snuff them out (Kill 25 Fire Demons); Headache relief (Kill 25 Summoners); You want me to salute that pile of..? (Kill an Occult General); Explosive personality! (Pick up a Panzerfaust); I kick arse for the Lord! (Pick up the Preacher); Every bullet counts (Get a 5-for-1 kill with any sniper rifle); We got this by the ass! (Reach a total shot distance of 50km); It's just a flesh wound! (Sever 1,000 limbs); Leave the limbs you've lost (Sever 10,000 limbs); Elite pickpocket (Loot a Super Elite's corpse); Burning a hole in your pocket (Loot a Chainsaw Elite's corpse); Give me something to shoot (Kill a Zombie Sniper in mid-air); We all go a little mad sometimes (Get an unbroken 10-headshot streak); Like a drunk who's lost a bet (Kill 20 enemies as they revive); Got you, didn't I, you little sucker! (Kill a Suicide Zombie by hitting his grenade); Somebody's got to survive! (Get at least 10 for 1 with an explosive kill); My family's always been in meat (Get at least 15 for 1 with an explosive kill); Come and get it! It's a running buffet! (Get at least 20 for 1 with an explosive kill); Your blood pressure is zero over zero (Headshot a Heavy Armour Zombie without removing his helmet); Headshots are the very best (Defeat 500 enemies with headshots); And stay down! (Kick 50 enemies down); Resurrect this! (Score 5,000 with a  single sniper round); I will not negotiate with the Undead! (Reach a Chain Count of 10); Scourge of zombiekind (Reach a Chain Count of 20); You've got red on you (Reach a Chain Count of 30); Nine tenths of the law (Become possessed); Answer the Devil's call (Pick up a phone); We can still fix him (Save the man in the hospital); Merciful death (Put the tortured souls in the Forest out of their misery); Don't worry, they're evil! (Shoot the 3 Zombie Ravens outside the Folterschloss)."
            ]
        },
        {
            "heading": "Horde Mode & Co-op",
            "body": [
                "Reaching wave 10 on each Horde Mode map (and with the highest score / most gold medals), and the co-op achievements - 50 saviour kills, 50 revives, 20 Elite kills, a 4-player chapter, every Survivor sidequest, playing as every character, all Gold Bars and all blood bottles.",
                "The achievements here: Zombies, man, they creep me out! (Reach at least Wave 10 in Horde Mode – Waves of Despair); You're going to meet Death now... (Reach at least Wave 10 in Horde Mode – No Sanctuary); You're going to have to work for your meal (Reach at least Wave 10 in Horde Mode – Flood of Tears); I'll teach ya how to shoot! (Reach at least Wave 10 with the highest score in any Horde Mode map); Guts and glory (Reach at least Wave 10 with more gold medals than your companions); Got your back (Kill 50 enemies that are actively attacking other players); A friend in need (Revive other players 50 times); Got the killshot! (Kill 20 Elites in co-op); You're so dead, you don't even know it (Complete any Campaign chapter in 4-player co-op at any difficulty level); Down but not out (Kill a total of 20 enemies while incapacitated); Man, you sure know a lot about monsters (Complete every Survivor sidequest); We have a Judas in our midst! (Kill a Survivor); Gratuitous violence from the lot of you (Complete levels as every playable character); Just in case we make it (Collect every Gold Bar); They must be destroyed on sight! (Find and shoot every Bottle of Blood); You have...death around you (Reach Wave 10 in Horde Mode – Dead End); They're coming to get you, Barbra! (Reach Wave 10 in Horde Mode – Dead Man's Bluff)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the fifteen campaign chapters in co-op on a low difficulty for the completions and kill counts.",
                "2. Sweep the map secrets (phone, ravens, hospital patient, tortured souls) and the Gold Bars and blood bottles.",
                "3. Do an all-chapters run on Sniper Elite difficulty.",
                "4. Grind the remaining cumulative kill, limb and chain-count feats.",
                "5. Play Horde Mode with your group to wave 10 on every map, and do the co-op saviour, revive and sidequest achievements.",
                "Tip: the 20-for-1 explosive multi-kill and the chain counts are easiest in Horde Mode - let a big wave bunch up at a chokepoint, then drop a Panzerfaust or a mine field."
            ]
        }
    ]
};
