// Just Cause 4 Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/just-cause-4.json), whose 61 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   517630 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js). 9 hidden achievements ship no Steam description; their conditions here are curatorial, cross-checked against the game's wiki plus community 100% guides, and kept spoiler-light.
// - Sections group achievements by what each one actually requires.
export const GUIDE = {
    "slug": "just-cause-4-achievement-guide",
    "category": "game",
    "gameSlug": "just-cause-4",
    "icon": "🪂",
    "title": "Just Cause 4 Achievement Guide",
    "summary": "A practical guide to all 61 Steam achievements in Just Cause 4 - campaign & regions, collectibles & discovery, side ops & companions, grappling hook & feats, dare devils & los demonios (dlc), hidden achievements.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Just Cause 4 has 61 Steam achievements, 9 of them hidden (all in the Los Demonios and Danger Rising DLCs). The base game is the campaign Operations, region and faction liberation, the collectible stunt sets, the grappling-hook mod system, and a big pile of sandbox feats; the two other DLCs (Dare Devils of Destruction, Los Demonios) add their own mission and challenge blocks.",
                "Nothing is missable and there is no difficulty requirement. The grind is the grappling-hook \"use only X for 15 minutes\" trio and the Army of Chaos level, plus the two DLC blocks.",
                "Tip: liberate regions to open the map, do the stunt collectibles and hook-mod unlocks, then chip at the sandbox feats. Save the three \"use only one hook mod for 15 non-consecutive minutes\" achievements for a long free-roam session where you deliberately keep the others off."
            ]
        },
        {
            "heading": "Campaign & Regions",
            "body": [
                "Finishing the three campaign Operations (Sandstinger, Windwalker, Thunderbarge), securing Illapa, discovering every Location, securing every Region and every Factory, reaching Army of Chaos Level 14, and Rico was Here for all achievements.",
                "The achievements here: We Put a Giant Gun on It (Finish Operation Sandstinger); A Scorpion's Tale (Secure Illapa); What If I... Dive Down? (Finish Operation Windwalker); Bring It Down! (Finish Operation Thunderbarge); Been Around the World (Discover every Location in the game); Here to Stay (Secure every Region); We're in Business (Secure every Factory); A Whole Army of Chaos (Reach Army of Chaos Level 14); Rico was Here (Earn all Just Cause 4 Achievements)."
            ]
        },
        {
            "heading": "Collectibles & Discovery",
            "body": [
                "Uncovering every Ancient Statue, filming every Speed / Vehicle / Wingsuit Stunt, destroying every Surveillance Airship, discovering 50% of Locations, securing every Supply Drop Blueprint, and securing all Small Arms and Heavy Weapons Blueprints.",
                "The achievements here: Show Me the Way (Uncover every Ancient Statue); I Feel the Need... (Film every Speed Stunt); ...The Harder They Fall (Destroy every Surveillance Airship); Stunt Driver (Film every Vehicle Stunt); All the Right Moves (Film every Wingsuit Stunt); Wanderlust (Discover 50% of all discoverable Locations); Fully Stocked (Secure every Supply Drop Blueprint); Weapon Stash (Secure all Small Arms and Heavy Weapons Blueprints)."
            ]
        },
        {
            "heading": "Side Ops & Companions",
            "body": [
                "The companion questlines: helping Garland King finish her picture, uncovering the Lost Tomb of Otorongo with Javi, helping Sargento stop the Black Hand reinforcements, recruiting every Pilot, and the three intro meetings.",
                "The achievements here: Last Action Hero (Help Garland King finally finish her picture); Knowledge is Power (Uncover the mysteries of the Lost Tomb of Otorongo); His name is Luis (Help Sargento stop an invasion of Black Hand reinforcements); Rico's Roughnecks (Recruit every Pilot); Allow Me to Introduce Myself (Help Sargento with his ambush, meet the mysterious Javi Huerta, and visit Garland King on set)."
            ]
        },
        {
            "heading": "Grappling Hook & Feats",
            "body": [
                "Unlocking every Grappling Hook Mod, a Leaderboard entry for every Feat, the three \"use only one hook mod for 15 minutes\" achievements, beating a tracked Feat score, a Chaos Milestone, a shotgun vehicle kill, a plane-vs-plane crash, 10 Cow Gun conversions in a session, standing on the highest point in Solis, and removing all rigged harbor vehicles.",
                "The achievements here: I Like to Keep My Options Open (Unlock every Grappling Hook Mod); Know My Name (Get on the Leaderboard for every Feat); A Higher Love (Use only the Air Lifter for 15 non-consecutive minutes -- Booster and Retract can't be active!); Lift Off (Use only the Booster for 15 non-consecutive minutes -- Air Lifter and Retract can't be active!); Classic Hits (Use only the Retract for 15 non-consecutive minutes -- Booster and Air Lifter can't be active!); Don't Choke on My Smoke (Beat someone's score while manually tracking the Feat); Chaos Milestone (Increase your Army of Chaos Level by filling up the Chaos bar); Pinball Dreams (Destroy a vehicle with the PBX Auto-Slug 4 shotgun's ); A Game of Chicken (Crash into a flying airplane with your own plane); Cow-Moo-Flage (Turn 10 Black Hand into Cows using the Cow Gun in a single session); Where I Belong (Stand on foot at the highest point in Solís); Bomb Disposal (Remove all rigged vehicles from the harbors of Solís)."
            ]
        },
        {
            "heading": "Dare Devils & Los Demonios (DLC)",
            "body": [
                "The Dare Devils of Destruction trials (the five faction B-Rank runs, the 15- and 25-vehicle challenge kills, the AR tiger images, and S-Ranks in the Solino Underground) and the Los Demonios Infestation missions (The Artifact, Extermination, and purging the Infestation at each named location).",
                "The achievements here: Rookie of the Year (Earn a B Rank in the Trial of Initiation); Dare Devil of Destruction (Earn a B Rank in the Trial of Triumph); Che's Way (Earn a B Rank in LNP's Isla Intensa Trial Run); Doña of Demolition (Earn a B Rank in the Gearheads' Godsbowl Trial Rampage); Rey Slayer (Earn a B Rank in Los Artistas' La Ratonera Survival Trial); Rough Rider (Destroy 15 vehicles during a single challenge); Demo Pro (Destroy 25 vehicles during a single challenge); Tiger Tamer (Drive through all AR tiger images in the Solino Underground's challenges); Solino Grand Prix (Earn an S Rank in every course in the Solino Underground); Now Who's the Idiot? (Finish The Artifact); Never Speak of This Again (Finish Extermination); A Nightmare On Kusi Street (Purge the Infestation on the Mainland); Silence of the Llamas (Expel the Infestation at the Farm); The Power of Rico Compels You (Exorcise the Infestation at the Church); Solino Chainsaw Massacre (Eradicate the Infestation at the Compound); They Came From the Lake (Liquidate the Infestation at the Lake); Demons on a Plane (Obliterate the Infestation at the Crash); The Flying Dead (Abolish the Infestation on the Mountain)."
            ]
        },
        {
            "heading": "Hidden Achievements",
            "body": [
                "Nine achievements are hidden - one Los Demonios secret and eight Danger Rising DLC feats:",
                "The achievements here: Moocifer (In Los Demonios, create a Cow Demon with the Cow Gun (found on a farmstead porch north of Los Romeros).); Interception (In Danger Rising, grapple to an Agent reeling through the air and reel-kick them.); Not My First Rodeo (In Danger Rising, ride a friendly Agency drone for 1,000 m without getting off.); Drone Joust (In Danger Rising, defeat an Agent riding an Agency drone while riding one yourself.); Danger Drone (In Danger Rising, defeat 10 enemies during a single Agency drone ride.); He Talked Too Much (In Danger Rising, defeat Emerson Miller.); Skitchin' (In Danger Rising, match a fast vehicle's speed (200+ km/h) while grappled to it on the Hoverboard.); Long Board (In Danger Rising, ride the Hoverboard for 10,000 m total (electro-mag cables do not count).); Hover or Die (In Danger Rising, complete every submarine Hoverboard course in under 20 seconds.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the three campaign Operations and secure every Region and Factory to open the whole map.",
                "2. Do the stunt collectibles, the Ancient Statues, the Surveillance Airships and the Supply Drop / weapon blueprints.",
                "3. Unlock every hook mod, then spend a long free-roam session on the sandbox feats and the three single-mod grinds.",
                "4. Play the three DLCs - Dare Devils of Destruction, Los Demonios (with the Cow Gun for Moocifer), and Danger Rising (the drone and Hoverboard feats).",
                "Tip: the three \"use only Air Lifter / Booster / Retract for 15 non-consecutive minutes\" achievements track total active time with the other two mods disabled - set your loadout, drive around normally, and let it accrue across a session."
            ]
        }
    ]
};
