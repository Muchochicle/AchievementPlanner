// Metro 2033 Redux Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/metro-2033-redux.json), whose 49 achievements
//   were sourced directly from Steam's own achievement schema for appid
//   286690 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js). 48 of 49 ship a real,
//   official Steam description, quoted verbatim below.
// - The one hidden achievement (Toast!) ships no Steam description; its
//   condition here is curatorial, cross-checked against the Metro Wiki
//   and Steam Community 100% guides. Game is flagged missable because
//   several level objectives, the good ending and the Diary pages are
//   per-playthrough missable.
export const GUIDE = {
    "slug": "metro-2033-redux-achievement-guide",
    "category": "game",
    "gameSlug": "metro-2033-redux",
    "icon": "☢️",
    "title": "Metro 2033 Redux Achievement Guide",
    "summary": "A practical guide to all 49 Steam achievements in Metro 2033 Redux - the weapon and kill-count feats, the mission-specific objectives, the collectible / trading / utility achievements, the game-mode and ending achievements, and the one hidden achievement.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Metro 2033 Redux has 49 Steam achievements and one is hidden. The list is a mix of cumulative kill counts by weapon or enemy type, mission-specific objectives (do X on level Y), collectible and trading grinds, and the game-mode / ending achievements.",
                "Several are missable per playthrough - the mission objectives, the good ending (Enlightened), the pacifist level clears (Invisible man, Merciful) and the 51 hidden Diary pages (Blogger) - so a full completion needs at least two playthroughs plus one on Spartan Mode and one on Survival Mode. The game is short (~8 hours a run).",
                "Tip: do a first Ranger Hardcore-style run on Survival Mode for the ending and pacifist achievements with a guide open for the Diary pages and level objectives, then a Spartan Mode run to farm the weapon and enemy kill counts."
            ]
        },
        {
            "heading": "Weapon & Kill Feats",
            "body": [
                "The cumulative kill achievements: by weapon (pneumatic, revolver, shotgun, assault rifle, throwing knife, flamethrower, Hellbreath), by enemy type (lurkers, mutants, nosalises, amoebas, watchmen, spiders, demons, librarians), and the technique feats (stealth kills, close combat, headshots, an undamaged kill streak, one kill with every weapon).",
                "The achievements here: Air Bender (Kill 50 humans with pneumatic weapons.); Cowboy (Kill 100 enemies using revolvers.); Fire in the hole (Kill 20 lurkers.); Fire! (Kill 30 enemies with flame grenades.); Gunman (Kill 100 enemies with shotguns.); Heavy Reader (Kill a librarian.); Hunter (Kill 200 Mutants.); Inquisitor (Kill 2 demons.); Ka-Boom! (Explode 30 enemies.); Trigger Happy (Kill 100 enemies with assault rifles.); Snake (Stealthily kill 15 Enemies.); Ninja (Kill 30 enemies with throwing knives.); Nosalis hunter (Kill 100 nosalises.); Pathoanatomist (Kill 5 amoebas.); Pyro (Kill 30 enemies with a flamethrower.); Shocking (Get 30 kills with Hellbreath.); Slice & Dice (Kill 30 human enemies in close combat.); Sniper (Kill 30 human enemies with headshots.); Marksman (Kill 15 human enemies with Headshots from at least 30 meters' distance.); Spider hunter (Kill 10 Spiders.); Stunning (Knock 30 human enemies out in close combat.); Tank (Kill 10 Enemies in a row without taking any damage.); Warrior (Kill 100 Human Enemies.); Watchman hunter (Kill 50 Watchmen.); Weaponsmith (Kill at least one enemy with each weapon available in the game)."
            ]
        },
        {
            "heading": "Mission-Specific Objectives",
            "body": [
                "The one-per-level objectives: the CURSED STATION demolition, the OUTPOST radio broadcast, clearing FRONTLINE (and clearing it without killing anyone), the pacifist BLACK STATION clear, the HUNTER ventilation defence, the DEPOT stealth break-in, saving the Reds, and 60 seconds in a radiation hotspot.",
                "The achievements here: Demolitionist (Blow up the tunnel and airlock at CURSED STATION.); DJ Artyom (On the level OUTPOST reach the radio tower and broadcast the commander's message.); Hedge-hopper (On the level FRONTLINE kill all of the enemy Red Army and Fascist Soldiers.); Invisible man (Complete FRONTLINE level without killing anyone.); Manhattan Project (Spend 60 seconds in a Radiation Hotspot.); Merciful (Complete the level BLACK STATION without killing or knocking out any enemies.); Quick Draw (On the level HUNTER kill the nosalises before they break through the ventilation grilles.); Raider (On the level DEPOT silently kill the first guard and break into the Fascist station unnoticed.); Rescue Ranger (Save a group of Reds from Fascist captivity.)."
            ]
        },
        {
            "heading": "Collectibles, Trading & Utility",
            "body": [
                "All 51 Diary pages (Blogger), all Ranger stashes in Dead City, 30 weapon-shop deals, 15 safe boxes, saving 1,000 military rounds, disarming 15 wire traps, 75 Medkit uses, exchanging 500 rounds, helping everyone you meet (Generous), and wiping your gas mask 20 times.",
                "The achievements here: Generous (Help the poor, a coin for the kid, medicine for the sick. You help everyone you see.); Metro Trader (Make 30 deals in weapon shops.); Blogger (Complete all 51 of Artyom's hidden Diary pages.); Ranger (Find all Ranger stashes in Dead City.); Thief (Open 15 locked safe boxes.); Scrooge (Save 1000 military-grade rounds.); Soft Touch (Disarm 15 wire traps.); Tonic Man (Use a Medkit 75 times.); Wheeler-Dealer (Exchange 500 Military-Grade 5.45 rounds at Exchange kiosks.); Who goes there? (Wipe your Gas Mask 20 times.)."
            ]
        },
        {
            "heading": "Game Modes & Endings",
            "body": [
                "Completing the game in Spartan Mode and in Survival Mode, finding the truth (Enlightened), and becoming a true ranger.",
                "The achievements here: Enlightened (Find the truth.); Spartan 2033 (Complete the game in Spartan Mode.); Survivor 2033 (Complete the game in Survival Mode.); If it's hostile, you kill it. (Become a true ranger.)."
            ]
        },
        {
            "heading": "Hidden Achievement",
            "body": [
                "One achievement is hidden and ships no Steam description:",
                "The achievements here: Toast! (Drink at every occasion in one playthrough - once at the bar in Market and twice at Polis (on PC, three drinks at Polis works).)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. First run on Survival Mode with a guide: collect all 51 Diary pages, do the missable level objectives and the pacifist clears (Invisible man, Merciful), and steer the moral choices toward Enlightened / true ranger. Do the Toast! drinks along the way.",
                "2. Second run on Spartan Mode: farm the weapon and enemy kill counts (which are easier in the combat-focused mode) and mop up anything missed.",
                "3. Do the trading and utility grinds (Metro Trader, Thief, Scrooge, Soft Touch, Tonic Man, Wheeler-Dealer, Who goes there?) across either run.",
                "Tip: Blogger (all 51 Diary pages) and the missable level objectives are the reason to play with a guide on the first run - almost everything else can be cleaned up on the second."
            ]
        }
    ]
};
