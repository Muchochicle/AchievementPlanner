// Robocraft Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/robocraft.json), whose 43 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   301520 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "robocraft-achievement-guide",
    "category": "game",
    "gameSlug": "robocraft",
    "icon": "🤖",
    "title": "Robocraft Achievement Guide",
    "summary": "A practical guide to all 43 Steam achievements in Robocraft - none are hidden. Covers the per-weapon and module feats, the league-rank progression, the per-movement-type play and kill counts, and the CRF and campaign achievements.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Robocraft has 43 Steam achievements and none of them are hidden. They cover the tutorial and campaign, 25-kill counts with each weapon type (Chain, Seeker, Tesla Blades, Lasers, Rails, Plasma, Ion, Aeroflak, Mortars), using each module five times in one battle, capturing control points, healing feats, and a large symmetric block: playing 25 games with each movement type (rotors, mech legs, insect legs, wings, wheels, tank tracks, hover blades) and getting 25 kills against each. The league ranks (Bronze to Protonium) round it out, plus the Community Robot Factory (CRF) achievements.",
                "Nothing is missable - every counter is cumulative across matches. The longest are climbing to Protonium Rank and grinding the play-25-games and kill-25 counts for all seven movement types.",
                "Tip: build one all-purpose robot per movement type and rotate through them - the \"play 25 games\" achievements only need the movement part on your bot, so you can keep the same weapons and just swap the chassis."
            ]
        },
        {
            "heading": "Weapons & Modules",
            "body": [
                "Completing the tutorial, 25-kill counts with each weapon type, using each module (Disc Shield, Ghost, EMP, Blink, Weapon Energy, Windowmaker) five times in one battle, the Tesla decloak kill, capturing 20 control points, winning 5 full-party battles, and the 20x heal feat.",
                "The achievements here: Shredder!!! (Get 25 kills with the Chain weapons); I Got This (Complete the Tutorial); I've got tone! (Get 25 kills with Seeker); Hugs! (Get 25 kills with Tesla Blades); Points of Light (Get 25 kills with Lasers); Magnetic Personality (Get 25 kills with Rails); Burn Therapy (Get 25 kills with Plasma); Bring the Pain (Get 25 kills with either Ion Weapons); Fly Swatter (Get 25 kills with the Aeroflak); Shield Wall (Use your Disc Shield Module five times in one battle); Disappearing Act (Use the Ghost Module five times in one battle); Lights Out! (Use the EMP Module five times in one battle); Energize! (Use the Blink Module five times in one battle); Power Up! (Use the Weapon Energy Module five times in one battle); Open Window (Use the Windowmaker Module five times in one battle); Protonium Miner (Capture 20 control points ); Party Animal (Win 5 battles with a full party); Sneaky, Sneaky (Get a kill with Tesla Blades within two seconds of decloaking); Surgeon General (Heal an ally at 20% health to 100% health 20 times)."
            ]
        },
        {
            "heading": "Ranks & Movement Types",
            "body": [
                "Reaching Bronze, Silver, Gold, Diamond and Protonium Rank, the single-heal feat, playing 25 games with each of the seven movement types, and getting 25 kills against robots using each movement type.",
                "The achievements here: Bronze Rank (Reach Bronze Rank); Silver Rank (Reach Silver Rank); Gold Rank (Reach Gold Rank); Diamond Rank (Reach Diamond Rank); Protonium Rank (Reach Protonium Rank); Doctor (Heal an ally at 20% health to full health); Get to the Choppa! (Play 25 games with a robot with rotors); Walk this Way (Play 25 games with a robot with mech legs); Scuttle Time! (Play 25 games with a robot with insect legs); Fly the Friendly Skies (Play 25 games with a robot with wings or rudders); Keep on Truckin' (Play 25 games with a robot with wheels); Armored Cavalry (Play 25 games with a robot with tracks); Such a Fan! (Play 25 games with a robot with hover); Skeeter Beater (Kill 25 robots that have rotors); Sweep the Knee! (Kill 25 robots that have mech legs); Burn it with Fire! (Kill 25 robots that have insect legs); Wing Clipper (Kill 25 robots that have wings or rudders); Flat Tire (Kill 25 robots that have wheels); Tank Killer (Kill 25 robots that have tank tracks); Hitting the Fan (Kill 25 robots that have hover blades)."
            ]
        },
        {
            "heading": "CRF, Campaign & Mortars",
            "body": [
                "Beating a campaign for the first time, playing 10 games with a CRF-purchased robot, earning robits via the CRF 100 times, and 25 kills with Mortars.",
                "The achievements here: Hurt Locker (Beat any campaign for the first time); Power Shopper (Play 10 games with a robot purchased from the CRF); Mr. Popularity (Earn robits via the CRF 100 times); Lob it! (Get 25 kills with Mortars)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Complete the tutorial and campaign, then start playing ranked to climb the league ranks.",
                "2. Build one bot per weapon type and grind the 25-kill counts.",
                "3. Rotate through the seven movement-type chassis for the play-25-games achievements.",
                "4. Deliberately target enemy bots by movement type for the kill-25 counts, and use each module five times per battle when you have it equipped.",
                "5. Keep laddering toward Protonium Rank and use the CRF for the shopping achievements.",
                "Tip: the module \"five times in one battle\" achievements are easiest in a long, defensive match - equip the module, survive, and spam it whenever it is off cooldown."
            ]
        }
    ]
};
