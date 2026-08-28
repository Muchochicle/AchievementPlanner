// Counter-Strike: Source Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/counter-strike-source.json), whose 147
//   achievements were sourced directly from Steam's own achievement
//   schema for appid 240 via ISteamUserStats/GetSchemaForGame (fetched
//   through this app's own backend/services/steamApi.js). None are
//   hidden; every one ships a real, official Steam description, quoted
//   verbatim below.
// - Sections group by theme from the apiname family: bomb/defusal,
//   hostage rescue, weapon kill counts and masteries, round/match
//   achievements, the per-map veteran set, and the combat feats and
//   lifetime milestones.
export const GUIDE = {
    "slug": "counter-strike-source-achievement-guide",
    "category": "game",
    "gameSlug": "counter-strike-source",
    "icon": "🔫",
    "title": "Counter-Strike: Source Achievement Guide",
    "summary": "A practical guide to all 147 Steam achievements in Counter-Strike: Source - none are hidden. The bomb and defusal achievements, the hostage-rescue set, the weapon kill-count tiers and weapon masteries, the round and match achievements, the per-map veteran achievements, and the combat feats and lifetime milestones.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Counter-Strike: Source has 147 Steam achievements and none are hidden. Nearly all are lifetime cumulative counters - kill N enemies with weapon X, win N rounds, plant/defuse N bombs, play N rounds on map Y - so nothing is missable; you play until each fills.",
                "The completion is long: God of War (10,000 kills), the per-weapon kill tiers, the 18 Map Veteran achievements (a lot of rounds on each classic map) and the Weapon Master mastery are all substantial. Bots and community servers both count.",
                "Tip: play with bots on a rotation of the classic maps - the map-veteran, weapon-kill and round-win counters all advance at once, and bots let you practise the specific feats (knife rounds, no-scope kills, grenade multi-kills) with no risk to a real match."
            ]
        },
        {
            "heading": "Bomb & Defusal",
            "body": [
                "The Defusal-mode achievements: winning by planting, planting and defusing 100 bombs, last-second and kit defuses, killing the defuser, and bomb-explosion multi-kills.",
                "The achievements here: Someone Set Up Us The Bomb (Win a round by planting a bomb); Boomala Boomala (Plant 100 bombs); The Hurt Blocker (Defuse 100 bombs); Second to None (Successfully defuse a bomb with less than one second remaining); Combat Ready (Defuse a bomb with a kit when it would have failed without one); Counter-Counter-Terrorist (Kill a CT while he is defusing the bomb); Rite of First Defusal (Win a round by defusing a bomb); Short Fuse (Plant a bomb within 25 seconds); Defuse This! (Kill the defuser with an HE grenade); Clusterstruck (Kill 5 players in a C4 blast); Blast Will and Testament (Win a round by picking up the bomb from a fallen comrade and successfully planting it); Participation Award (Kill an enemy player within 3 seconds of them recovering a dropped bomb)."
            ]
        },
        {
            "heading": "Hostage Rescue",
            "body": [
                "The Hostage-mode achievements: rescuing hostages, rescuing them all at once, a fast rescue, and killing a hostage (the negative one).",
                "The achievements here: Cowboy Diplomacy (Rescue 100 hostages); SAR Czar (Rescue 500 hostages); Good Shepherd (Rescue all hostages in a single round); Freed With Speed (Rescue all hostages within 90 seconds); Dead Shepherd (Kill an enemy player who is leading the hostages without injuring any hostages)."
            ]
        },
        {
            "heading": "Weapon Kill Counts & Masteries",
            "body": [
                "The big block: cumulative kill tiers (Body Bagger, Corpseman, God of War) and a kill-count achievement for each weapon in the game, plus the class masteries (pistol, rifle, SMG, shotgun) and Weapon Master for all of them.",
                "The achievements here: Body Bagger (Kill 25 enemies); Corpseman (Kill 500 enemies); God of War (Kill 10,000 enemies); Lost and F0wnd (KIll an enemy player with a gun they dropped that round); Night Hawk .50c Expert (Kill 200 enemy players with the Night Hawk .50c); KM Tactical .45 Expert (Kill 200 enemy players with the KM Tactical .45); 9x19 Sidearm Expert (Kill 200 enemy players with the 9x19 Sidearm); 228 Compact Expert (Kill 200 enemy players with the 228 Compact); .40 Dual Elites Expert (Kill 100 enemy players with the .40 Dual Elites); ES Five-Seven Expert (Kill 100 enemy players with the ES Five-Seven); Pistol Master (Unlock all 6 Pistol kill achievements); Magnum Sniper Rifle Expert (Kill 1,000 enemy players with the Magnum Sniper Rifle); CV-47 Expert (Kill 1,000 enemy players with the CV-47); Maverick M4A1 Carbine Expert (Kill 1,000 enemy players with the Maverick M4A1 Carbine); Bullpup Expert (Kill 500 enemy players with the Bullpup); Krieg 552 Expert (Kill 500 enemy players with the Krieg 552); Krieg 550 Commando Expert (Kill 500 enemy players with the Krieg 550 Commando); IDF Defender Expert (Kill 500 enemy players with the IDF Defender); Clarion 5.56 Expert (Kill 500 enemy players with the Clarion 5.56); Schmidt Scout Expert (Kill 1,000 enemy players with the Schmidt Scout); D3/AU-1 Expert (Kill 500 enemy players with the D3/AU-1); Rifle Master (Unlock all 10 rifle kill achievements); ES C90 Expert (Kill 1,000 enemy players with the ES C90); KM Sub-Machine Gun Expert (Kill 1,000 enemy players with the KM Sub-Machine Gun); Schmidt Machine Pistol Expert (Kill 500 enemy players with the Schmidt Machine Pistol); Ingram Mac-10 Expert (Kill 500 enemy players with the Ingram Mac-10); KM UMP45 Expert (Kill 1,000 enemy players with the KM UMP45); Sub-Machine Gun Master (Unlock all 5 sub-machine gun kill achievements); Leone 12 Gauge Super Expert (Kill 200 enemy players with the Leone 12 Gauge Super); Leone YG1265 Auto Shotgun Expert (Kill 200 enemy players with the Leone YG1265 Auto Shotgun); Shotgun Master (Unlock both shotgun kill achievements); HE Grenade Expert (Kill 500 enemy players with the HE grenade); Knife Expert (Kill 100 enemy players with the knife); M249 Expert (Kill 500 enemy players with the M249); Master At Arms (Unlock every weapon kill achievement); The Cleaner (Kill the entire enemy team (with at least 5 players) in a single round); Variety Hour (Get kills with 5 different guns in a round); Magic Bullet (Kill an enemy with the last bullet in your magazine (excluding sniper rifles)); Shot With Their Pants Down (Kill an enemy player while they are reloading); Blind Ambition (Kill a total of 25 enemy players blinded by flashbangs); Blind Fury (Kill an enemy player while you are blinded from a flashbang); Friendly Firearms (Kill 100 enemy players with enemy weapons); Expert Marksman (Get a kill with every weapon); Bunny Hunt (Kill an airborne enemy); Spray and Pray (Kill two enemy players while you are blinded from a flashbang)."
            ]
        },
        {
            "heading": "Round & Match Achievements",
            "body": [
                "The round and match achievements: winning many rounds, pistol-round and first-round wins, a fast round win, flawless and lossless victories, surviving many rounds, and knife/dual-wield round wins.",
                "The achievements here: Newb World Order (Win 10 rounds); Pro-moted (Win 200 rounds); Leet-er of Men (Win 5000 rounds); Make the Cut (Win a knife fight); The Bleeding Edge (Win 100 knife fights); Street Fighter (Kill an enemy player with a knife during the pistol round); Blitzkrieg (Win a round in less than 30 seconds (against at least 5 enemy players)); Piece Initiative (Win 5 Pistol Rounds); Give Piece a Chance (Win 25 Pistol Rounds); Piece Treaty (Win 250 Pistol Rounds); Target-Hardened (Survive damage from 5 different players within a round); Mercy Rule (Kill the entire opposing team without any members of your team dying); Clean Sweep (Kill the entire opposing team without any members of your team taking any damage); Akimbo King (Use Dual Elites to kill an enemy player that also has Dual Elites equipped); The Frugal Beret (Win 10 rounds without dying and not spending any cash)."
            ]
        },
        {
            "heading": "Map Veterans",
            "body": [
                "One \"Map Veteran\" achievement for each classic map - playing a set number of rounds on Assault, Compound, Havana, Italy, Militia, Office, Aztec, Cobblestone, Chateau, Dust, Dust2, Inferno, Nuke, Piranesi, Port, Prodigy, Tides and Train.",
                "The achievements here: Assault Map Veteran (Win 100 rounds on the CS_Assault map); Compound Map Veteran (Win 100 rounds on the CS_Compound map); Havana Map Veteran (Win 100 rounds on the CS_Havana map); Italy Map Veteran (Win 100 rounds on the CS_Italy map); Militia Map Veteran (Win 100 rounds on the CS_Militia map); Office Map Veteran (Win 100 rounds on the CS_Office map); Aztec Map Veteran (Win 100 rounds on the DE_Aztec map); Cobblestone Map Veteran (Win 100 rounds on the DE_Cbble map); Chateau Map Veteran (Win 100 rounds on the DE_Chateau map); Dust Map Veteran (Win 100 rounds on the DE_Dust map); Dust2 Map Veteran (Win 100 rounds on the DE_Dust2 map); Inferno Map Veteran (Win 100 rounds on the DE_Inferno map); Nuke Map Veteran (Win 100 rounds on the DE_Nuke map); Piranesi Map Veteran (Win 100 rounds on the DE_Piranesi map); Port Map Veteran (Win 100 rounds on the DE_Port map); Prodigy Map Veteran (Win 100 rounds on the DE_Prodigy map); Tides Map Veteran (Win 100 rounds on the DE_Tides map); Train Map Veteran (Win 100 rounds on the DE_Train map)."
            ]
        },
        {
            "heading": "Combat Feats & Milestones",
            "body": [
                "Everything else: money earned, damage dealt, killing sprees, headshots, no-scope and hip-fire kills, surviving grenades and headshots, sniper duels, grenade multi-kills, breaking windows and props, and the many themed one-off feats.",
                "The achievements here: Points in Your Favor (Inflict 2,500 total points of damage to enemy players); You've Made Your Points (Inflict 50,000 total points of damage to enemy players); A Million Points of Blight (Inflict 1,000,000 total points of damage to enemy players); Ballistic (Kill 5 enemy players within 15 seconds); Ammo Conservation (Kill two enemy players with a single bullet); War Bonds (Earn $125,000 total cash); Spoils of War (Earn $2,500,000 total cash); Blood Money (Earn $50,000,000 total cash); Premature Burial (Kill an enemy with a grenade after you've died); War of Attrition (Be the last player alive in a round (with at least 5 players on your team)); Kill One, Get One Spree (Kill an enemy player who is on a killing spree); A World of Pane (Shoot out 14 windows in a single round on cs_office); Battle Sight Zero (Kill 250 enemy players with headshots); Primer (Do at least 95% damage to an enemy who is then killed by a another player); Finishing Schooled (Kill an enemy player who has been reduced to less than 5% health by other players); Shrapnelproof (Take 80 points of damage from enemy grenades and still survive the round); Safety First (Survive a shot to the head because you had the good sense to wear a helmet); Hip Shot (Kill an enemy with an un-zoomed sniper rifle); Eye to Eye (Kill a zoomed-in enemy sniper with a sniper rifle of your own); Sknifed (Kill a zoomed-in enemy sniper with a knife); Snipe Hunter (Kill 100 zoomed-in enemy snipers); Dead Man Stalking (Kill an enemy while at 1 health); Three the Hard Way (Kill 3 enemy players with a single HE grenade); Wild Gooseman Chase (As the last living terrorist, distract a defuser long enough for the bomb to explode); Mad Props (Break 15 props in a single round); The Art of War (Spray 100 decals); Dead of Night (Do 5,000 damage with nightvision active); The Unstoppable Force (Kill 10 enemy players in a single round); The Immovable Object (Kill an enemy player who has just killed 10 of your teammates in a single round); Head Shred Redemption (Kill 5 enemy players with headshots in a single round); Death From Above (Kill an enemy player while you are airborne); Aerial Necrobatics (Kill an airborne enemy while you are also airborne); Black Bag Operation (Win a round while making no footstep noise and killing at least one enemy); Cold War (Win a round without your team killing any enemy players); Killanthropist (Donate 100 weapons to your teammates); Defusus Interruptus (Stop defusing to kill a terrorist and then successfully finish defusing the bomb); Repeat Offender (Dominate an enemy player); Decimator (Dominate a total of 10 enemy players); Overkill (Kill an opponent you are already dominating); Command and Control (Get a total of 100 kills on enemy players you are dominating); Insurgent (Kill an enemy player that is dominating you); Can't Keep a Good Man Down (Kill a total of 20 enemy players that are dominating you); Dressed to Kill (Start a round with all players on your team wearing the same uniform (at least 5 players)); Hat Trick (Dominate three enemy players simultaneously); Ten Angry Men (Get 10 kills on enemy players you are already dominating during a single match); Excessive Brutality (Kill an enemy player 4 additional times while you are dominating them); Friendly Attire (Start a round on the same team as 4 of your friends, with all of you wearing the same outfit); The Road to Hell (Blind an enemy player who then kills a teammate); Avenging Angel (Kill an enemy player in the same round as they kill a player on your friends list); Clan Warfare (Win a match of at least 10 players where the entirety of each team is composed of a single clan.); Happy Camper (Get two kills standing in the same spot with a zoomed sniper rifle.); Gift Grab (Collect three gifts dropped by opponents.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Set up an offline game with bots on a classic map and just play rounds - the Map Veteran, weapon-kill, round-win and damage counters all climb together.",
                "2. Rotate the map every session so the 18 Map Veteran achievements progress evenly.",
                "3. Deliberately do the one-off feats against bots when the counters are close: knife and dual-wield round wins, grenade multi-kills, no-scope and hip-fire kills, the last-second defuse and the bomb-explosion multi-kill.",
                "4. Grind the top weapon tiers and God of War (10,000 kills) last - by then most single-weapon tiers and the class masteries are already done.",
                "Tip: the Weapon Master mastery needs the kill-count achievement for every weapon, so keep a checklist and deliberately buy the weapons you have not finished (the less-used pistols and SMGs) rather than always taking a rifle."
            ]
        }
    ]
};
