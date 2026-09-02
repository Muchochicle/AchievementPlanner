// Wolfenstein: The New Order Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/wolfenstein-the-new-order.json), whose 50 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   201810 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 50 achievement(s) are Steam-hidden or ship no Steam
//   description; their description here is researched from community
//   100% guides and is a curatorial summary. Every other description is
//   Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "wolfenstein-the-new-order-achievement-guide",
    "category": "game",
    "gameSlug": "wolfenstein-the-new-order",
    "icon": "💀",
    "title": "Wolfenstein: The New Order Achievement Guide",
    "summary": "A practical guide to all 50 Steam achievements in Wolfenstein: The New Order (50 hidden). All 50 achievements are Steam-hidden with no Steam text - the descriptions here are researched from PlayStationTrophies, VideoGamesBlogger, Game Rant and the Wolfenstein Wiki. Eight story markers, three difficulty clears, collectibles, the four Enigma codes, and 32 perk unlocks.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Wolfenstein: The New Order has 50 Steam achievements, 50 of them hidden. MachineGames' 2014 reboot follows B.J. Blazkowicz waking in a 1960s where the Nazis won. Every one of its 50 achievements is Steam-hidden and ships no Steam description, so all of the text here is a researched curatorial summary. The set breaks into eight story markers, three difficulty clears, the gold-item and letter collectibles, the four Enigma codes, and 32 perk unlocks across the Stealth, Tactical, Assault and Demolition trees.",
                "The perk achievements each unlock when B.J. completes that perk's in-game challenge - a number of kills with a given weapon or method, a set of stealth takedowns, headshots down the sights, reloads, and so on. A few exact thresholds here are approximate; the weapon or method for each is correct.",
                "The catalog marks it difficulty 3, missable:true and recommends 2 playthroughs. The Chapter 1 timeline decision splits Fergus saved and Wyatt saved between two separate campaigns, and the difficulty clears (I AM DEATH INCARNATE! and ÜBER) want a dedicated run."
            ]
        },
        {
            "heading": "Story & Difficulty",
            "body": [
                "The eight story markers (Chapter 1, the two timeline choices, joining the resistance, the LaserKraftWerk, the deep-sea chapter, London, and the final assault) and the three difficulty clears (any, I AM DEATH INCARNATE!, ÜBER).",
                "The achievements here: Gunner (Complete Chapter 1 - the assault on Deathshead's compound); Fergus saved (In the Chapter 1 timeline decision, choose to save Fergus (starts the Fergus campaign)); Wyatt saved (In the Chapter 1 timeline decision, choose to save Wyatt (starts the Wyatt campaign)); Vive la resistance! (Reach and join the Kreisau Circle resistance); Power to the laser (Acquire the LaserKraftWerk); Hidden in the deep (Complete the deep-sea / U-boat chapter); London uprising (Complete the London Nautica assault); Deliverance (Reach the final assault on Deathshead's compound); Liberation (Complete the game on any difficulty); Super hero (Complete the game on I AM DEATH INCARNATE! difficulty or higher); Über hero (Complete the game on ÜBER difficulty)."
            ]
        },
        {
            "heading": "Collectibles & Enigma Codes",
            "body": [
                "Collecting 25 and then all gold items, all letters, and solving each of the four Enigma codes (which unlock the alternate-timeline bonus levels).",
                "The achievements here: All that glitters (Collect 25 gold items); Heart of gold (Collect every gold item); The lives of others (Collect every letter); Secrets revealed I (Solve the first Enigma code); Secrets revealed II (Solve the second Enigma code); Secrets revealed III (Solve the third Enigma code); Secrets revealed IV (Solve the fourth Enigma code)."
            ]
        },
        {
            "heading": "Stealth Perks",
            "body": [
                "The Stealth tree - Scout I and II (Commander stealth kills), the thrown-knife perks, Silent Shot, Vampire, and Assassin.",
                "The achievements here: Scout I (Unlock the Scout I stealth perk - stealth-kill a Commander); Knife throwing (Unlock the Knife Throwing perk - kill enemies with thrown knives); Knife sheath + (Unlock the Knife Sheath + perk - more thrown-knife kills); Knife sheath ++ (Unlock the Knife Sheath ++ perk - still more thrown-knife kills); Silent shot (Unlock the Silent Shot perk - get 10 silent kills with a silenced pistol); Vampire (Unlock the Vampire perk - perform 5 stealth takedowns while overcharged); Scout II (Unlock the Scout II perk - stealth-kill more Commanders / mark enemies); Assassin (Unlock the Assassin perk - 50 stealth kills on soldiers plus 5 on Kampfhunds)."
            ]
        },
        {
            "heading": "Tactical Perks",
            "body": [
                "The Tactical tree - Deadeye and Quick Draw (headshots), Quick Regeneration, the per-weapon magazine perks, and Quick Reload.",
                "The achievements here: Deadeye (Unlock the Deadeye perk - assault-rifle and pistol headshots); Quick draw (Unlock the Quick Draw perk - 40 headshots while aiming down sights); Quick regeneration (Unlock the Quick Regeneration perk - pick up health while already full); Gun magazine + (Unlock the Gun Magazine + perk - kills with the pistol); Shotgun magazine + (Unlock the Shotgun Magazine + perk - kills with the shotgun); AR magazine + (Unlock the AR Magazine + perk - kills with an assault rifle); Marksman magazine + (Unlock the Marksman Magazine + perk - kills with the marksman rifle); Quick reload (Unlock the Quick Reload perk - perform many reloads)."
            ]
        },
        {
            "heading": "Assault Perks",
            "body": [
                "The Assault tree - Double Reload, Endurance I and II (sprint-slide kills), Scavenger, Bullet Feeder, Autopanzer, LKW Battery + and Dual-Wield Expert.",
                "The achievements here: Double reload (Unlock the Double Reload perk - reload two dual-wielded weapons at once repeatedly); Endurance I (Unlock the Endurance I perk - 3 kills while sprint-sliding); Scavenger (Unlock the Scavenger perk - 3 dual-wield assault-rifle kills in a row without releasing fire); Bullet feeder (Unlock the Bullet Feeder perk - pick up ammo from many corpses); Endurance II (Unlock the Endurance II perk - more sprint-slide kills); Autopanzer (Unlock the Autopanzer perk - empty a fully-loaded LaserKraftWerk without missing); LKW battery + (Unlock the LKW Battery + perk - kills with the LaserKraftWerk); Dual-wield expert (Unlock the Dual-Wield Expert perk - 100 dual-wield kills and 25 LaserKraftWerk kills)."
            ]
        },
        {
            "heading": "Demolition Perks",
            "body": [
                "The Demolition tree - Throwback, the grenade-pouch perks, Bullseye, Rocket Magazine +, Vaporize, Sentinel and Hardened.",
                "The achievements here: Throwback (Unlock the Throwback perk - throw back live grenades); Grenade pouch + (Unlock the Grenade Pouch + perk - kills with grenades); Grenade pouch ++ (Unlock the Grenade Pouch ++ perk - more grenade kills); Bullseye (Unlock the Bullseye perk - precise grenade throws / multi-kills with one grenade); Rocket magazine + (Unlock the Rocket Magazine + perk - kills with the rocket launcher); Vaporize (Unlock the Vaporize perk - kill 3 enemies with one rocket); Sentinel (Unlock the Sentinel perk - kills with mounted / turret weapons); Hardened (Unlock the Hardened perk - take heavy damage and survive repeatedly)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the campaign once (say, the Fergus timeline) on Normal, going for stealth kills, headshots and varied weapons so the perk challenges tick over naturally.",
                "2. On that run, use a collectible guide for all gold items and letters, and solve all four Enigma codes at the hub between chapters.",
                "3. Deliberately work any perks still missing in the second half of the game - the grenade, rocket, LaserKraftWerk and turret perks are the ones people leave behind.",
                "4. Play the Wyatt timeline for Wyatt saved (and to catch anything missed).",
                "5. Do a full run on I AM DEATH INCARNATE! or ÜBER for the difficulty clears - ÜBER grants the lower one too.",
                "Tip: the perk challenges carry across chapters and playthroughs, so don't stress about finishing each one in a single sitting - just keep using every weapon and stealth option and check the perk menu between chapters."
            ]
        }
    ]
};
