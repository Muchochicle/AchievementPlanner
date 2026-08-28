// PUBG: BATTLEGROUNDS Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/pubg-battlegrounds.json), whose 37 achievements
//   were sourced directly from Steam's own achievement schema for appid
//   578080 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js). None are hidden; every one
//   ships a real, official Steam description, quoted verbatim below.
// - The grouping is read from what each achievement requires: winning and
//   placement, the three Novice/Expert/Master weapon kill tiers, the
//   lifetime total-kill counters and one-match combat feats, and the
//   gear, vehicle and novelty unlocks.
export const GUIDE = {
    "slug": "pubg-battlegrounds-achievement-guide",
    "category": "game",
    "gameSlug": "pubg-battlegrounds",
    "icon": "🍗",
    "title": "PUBG: BATTLEGROUNDS Achievement Guide",
    "summary": "A practical guide to all 37 Steam achievements in PUBG: BATTLEGROUNDS - the Chicken Dinner and placement goals, the Novice/Expert/Master weapon kill tiers, the lifetime kill counts and one-match combat feats, and the gear, vehicle and novelty achievements.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "PUBG: BATTLEGROUNDS has 37 Steam achievements and none of them are hidden. Almost all are lifetime cumulative counters - kill X players with a weapon class, win X games, jump from the plane X times - so nothing is permanently missable; you simply keep playing until each counter fills.",
                "The long poles are the top-tier kill counts (CQB Master at 200 close-quarters kills, Marksman Master at 100 long-range kills, Long and Winding Road at 1,000 total kills) and Pacifist (reach the top 10 without a single kill), which usually needs a deliberate hide-and-survive game.",
                "Tip: play Squads with friends for the placement achievements (Fantastic Four, Last Survivor, Top 10) - more guns on your team means more Chicken Dinners - then chip away at the weapon-tier counts naturally by favouring one weapon class at a time (all shotgun/SMG/pistol for the CQB line, all rifle/sniper for the Marksman line)."
            ]
        },
        {
            "heading": "Winning & Placement",
            "body": [
                "These reward finishing near the top of a match. The three Chicken Dinner achievements want a win in each mode, and there are cumulative counters for reaching the top 10 and for winning outright.",
                "The achievements here: Winner Winner Chicken Dinner! (Obtain a Chicken Dinner in Solo.); Dynamic Duo (Obtain a Chicken Dinner in Duos.); Fantastic Four (Obtain a Chicken Dinner in Squads.); Last Survivor (Win a game 10 times.); Top 10 (Reach the top 10 10 times.); Pacifist (Reach the top 10 without killing anyone.); First Blood (Get the first kill of a match.)."
            ]
        },
        {
            "heading": "Weapon Kill Tiers",
            "body": [
                "Three weapon families each have a Novice / Expert / Master tier at 10 / 50 / 200 kills for close-quarters guns, 10 / 30 / 100 for long-range rifles, and 10 / 30 / 50 for grenades. Kills carry over between matches, so pick the matching weapon class every drop.",
                "The achievements here: CQB Novice (Kill 10 players with a shotgun, a submachine gun, and/or a pistol.); CQB Expert (Kill 50 players with a shotgun, a submachine gun, and/or a pistol.); CQB Master (Kill 200 players with a shotgun, a submachine gun, and/or a pistol.); Marksman Novice (Kill 10 players with an assault rifle and/or a sniper rifle from over 100 meters away.); Marksman Expert (Kill 30 players with an assault rifle and/or a sniper rifle from over 100 meters away.); Marksman Master (Kill 100 players with an assault rifle and/or a sniper rifle from over 100 meters away.); Nade King Novice (Kill 10 players with grenades.); Nade King Expert (Kill 30 players with grenades.); Nade King Master (Kill 50 players with grenades.)."
            ]
        },
        {
            "heading": "Total Kills & Combat Feats",
            "body": [
                "This block mixes the big lifetime total-kill counters with a set of one-off combat feats: specific weapons (crossbow, suppressed guns, sniper headshots, bare hands), a four-kill single match, and the first kill of a game.",
                "The achievements here: Blood on My Hands (Kill a player by any means.); Devil Inside Me (Kill 10 players by any means.); Collateral Damage (Kill 100 players by any means.); Long and Winding Road (Kill 1000 players by any means.); Killing Spree (Kill at least 4 players in a single match.); The First Rule Is… (Kill 20 players with bare hands.); Trigonometry Involved (Headshot and kill 10 enemy players with a sniper rifle.); Shoot the Knee (Kill 10 players with the crossbow.); Agent 48 (Kill 50 players with suppressed weapons.); Fury Road (Kill 10 players with a gun while in a vehicle.); Fast and Furious (Kill 10 players by hitting them with a vehicle.)."
            ]
        },
        {
            "heading": "Gear, Vehicles & Odd Jobs",
            "body": [
                "The remaining achievements are about equipment and messing around: full Level 3 armour, a ghillie suit, an all-suppressed loadout, care-package loot, reviving a teammate, and a handful of joke unlocks (the frying pan, wearing a dead player's outfit, sharing a car with an enemy, an energy-drink-and-painkiller overdose).",
                "The achievements here: Okay, Now I'm Ready (Equip a Lv.3 Helmet, Military Vest, and Backpack in 10 matches.); Now You See Me, Now You Don't (Equip a ghillie suit for the first time.); Ghost (Equip a suppressed weapon in every weapon slot. Let's find out which weapon is suppressed!); First Come, First Served (Loot 50 items from the carepackage.); Airborne (Jump out from an airplane 101 times.); Guardian Angel (Revive a knocked-downed teammate.); Don't Pan Me Bro! (Kill another player with the frying pan.); You Complete Me (Wear the outfit of a dead player.); Cruising with the Enemy (Get into a vehicle where an enemy player is already in.); Health Junkie (Charge your boost gauge to the max with energy drink and painkiller overdose.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play normally in Squads with friends and let the placement counters (Last Survivor, Top 10, the Chicken Dinner trio, First Blood) and the total-kill counters (Blood on My Hands, Devil Inside Me, Collateral Damage) fill on their own.",
                "2. Deliberately main one weapon class at a time to push the tiers: shotgun/SMG/pistol for CQB Novice, CQB Expert and CQB Master; assault/sniper rifles at range for Marksman Novice, Marksman Expert and Marksman Master; and throwables for Nade King Novice, Nade King Expert and Nade King Master.",
                "3. Knock out the one-off feats when the situation is safe: Trigonometry Involved, The First Rule Is…, Shoot the Knee, Agent 48, Killing Spree, Fury Road, Fast and Furious, Don't Pan Me Bro!, First Come, First Served, Guardian Angel, Airborne, Okay, Now I'm Ready, Ghost, Now You See Me, Now You Don't, Health Junkie, You Complete Me and Cruising with the Enemy.",
                "4. Save Pacifist and Long and Winding Road (1,000 kills) for last - one needs a patient survival game, the other is pure volume.",
                "Tip: Airborne (jump from the plane 101 times) and Health Junkie both progress even in games you do not expect to win, so treat every early death as a chance to advance them rather than a wasted match."
            ]
        }
    ]
};
