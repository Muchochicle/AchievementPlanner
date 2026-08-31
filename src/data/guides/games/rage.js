// RAGE Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/rage.json), whose 60 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   9200 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "rage-achievement-guide",
    "category": "game",
    "gameSlug": "rage",
    "icon": "🏜",
    "title": "RAGE Achievement Guide",
    "summary": "A practical guide to all 60 Steam achievements in RAGE - none are hidden. Covers the gadget and combat feats, the vehicle / card / minigame content, the campaign dungeons and difficulty clears, the Legends of the Wasteland and multiplayer, and The Scorchers add-on. None of the achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "RAGE has 60 Steam achievements and none are hidden. They cover the engineering-gadget and combat feats (Sentry Bot / Turret / RC Bomb Car kills, wingstick and sniper headshots, crossbow stealth), the vehicle content (18 jumps, races, 100 destroyed cars), the Wasteland minigames (Tombstones, 5 Finger Filet, Strum, playing-card and recipe collection), completing each campaign dungeon, the four difficulty clears and 100% completion, the Legends of the Wasteland co-op missions, the Road RAGE multiplayer, and The Scorchers add-on.",
                "The catalog marks it missable and roughly two playthroughs - 'Gotta Have 'Em All' (all playing cards), 'Master Chef' (all recipes and schematics) and 'Obsessive Compulsive' (100% completion) must be done within a single play-through, so a second run is the safety net, and the difficulty achievements do not stack downward.",
                "Tip: track the playing cards and recipes from the start of a run - both are easy to miss in areas you can't return to, and there is no in-game checklist that flags what you've already picked up."
            ]
        },
        {
            "heading": "Gadgets & Combat Feats",
            "body": [
                "Constructing 10 and 50 engineering items, the Sentry Bot / Sentry Turret / RC Bomb Car multi-kills, 100 kills with deployable gadgets, the jetpack-descent Enforcer kill, 10 crossbow stealth kills, the mind-control triple kill, and 10 headshot kills each with the Wingstick and the Sniper Rifle.",
                "The achievements here: Arts and Crafts (Construct 10 Engineering Items); Tinkerer (Construct 50 Engineering Items); Passive Aggressive (Get 3 kills with a single Sentry Bot); Three Birds, One Bomb Car (Kill 3 Enemies with one RC Bomb Car); Keep 'Em Coming (Get 5 kills with one deployed Sentry Turret); Mechanocide (Kill 100 Enemies with Sentry Bots, Sentry Turrets, or RC Bomb Cars); Jetpacker (Kill an Authority Enforcer during Jetpack descent); Silent But Deadly (Stealth kill 10 Enemies with the Striker Crossbow); Hat Trick (Kill at least 3 Enemies with a single Mind Controlled Enemy); Decapathon (Get 10 Headshot kills with the Wingstick); Open Minded (Get 10 Headshot kills with the Sniper Rifle)."
            ]
        },
        {
            "heading": "Vehicles, Cards & Minigames",
            "body": [
                "All 18 vehicle jumps, all playing cards and all recipes/schematics in one play-through, beating Teague's hardest deck, the Tombstones / 5 Finger Filet / Strum minigame finales, winning all minigames, a campaign race and all campaign races, destroying 100 enemy cars, the three ATV field goals, and running over 10 mutants.",
                "The achievements here: Jumper (Perform all 18 Vehicle Jumps); Gotta Have 'Em All (Collect all Playing Cards on one play-through); Master Chef (Collect all Recipes and Schematics in one play-through); Hardest Deck (Beat Teague's hardest Deck); JACKPOT! (Roll 4 Targets in the first round of Tombstones); Just a Flesh Wound (Complete the final round of 5 Finger Filet); Deliverance (Complete the final round of Strum); Minigamer (Win all Minigames); Lead Foot (Win a Race in the Campaign); Rage Cup (Win all Races in the Campaign); Demolition Man (Destroy 100 Enemy Cars); It's Good! (Score each of the 3 Field Goals from the ATV); Roadkill (Run over 10 Mutants)."
            ]
        },
        {
            "heading": "Campaign Dungeons & Progression",
            "body": [
                "Completing each campaign dungeon (Ghost Hideout, Wasted Garage, Mutant Bash TV, Dead City, The Well, Shrouded Bunker, Dead City Reverse, Authority Prison, Gearhead Vault, Power Plant, Jackal Canyon, Blue Line Station), earning $750 in one Bash TV episode, five Job Board quests, the Developer Graffiti room, the four difficulty clears, and 100% completion.",
                "The achievements here: Ghost Buster (Complete Ghost Hideout in the Campaign); Waste Management (Complete Wasted Garage in the Campaign); Gladiator (Complete Mutant Bash TV in the Campaign); It's Alive! (Complete Dead City in the Campaign); Wellness Plan (Complete The Well in the Campaign); Debunked (Complete Shrouded Bunker in the Campaign); ytiC daeD (Complete Dead City Reverse in the Campaign); Jail Break (Complete Authority Prison in the Campaign); Vault Assault (Complete Gearhead Vault in the Campaign); Power Struggle (Complete Power Plant in the Campaign); Decrypted (Complete Jackal Canyon in the Campaign); Mutie Blues (Complete Blue Line Station in the Campaign); Bringin' Home the Bacon (Earn 750 Dollars in one episode of Bash TV in the Campaign); Mr. Oddjob (Complete 5 Job Board Quests in one play-through); Dev Graffiti (Find the secret Developer Graffiti Room); Hey, not too rough (Finish the Campaign on any difficulty); Hurt me plenty (Finish the Campaign on at least Normal difficulty); Ultra-violence (Finish the Campaign on at least Hard difficulty); RAGE Nightmare (Finish the Campaign on Nightmare difficulty); Obsessive Compulsive (Reach 100% Completion in the Campaign)."
            ]
        },
        {
            "heading": "Legends of the Wasteland & Multiplayer",
            "body": [
                "Completing one and all Legends of the Wasteland co-op missions, one on Nightmare, one with nobody incapacitated, and the two public Road RAGE multiplayer achievements.",
                "The achievements here: The Legend Begins... (Complete a Legend of the Wasteland); Anthology (Complete all Legends of the Wasteland); A True Legend (Complete a Legend of the Wasteland on Nightmare difficulty); No Room for Sidekicks (Complete a Legend of the Wasteland without any player(s) becoming incapacitated); Fresh Meat (Complete a public Road RAGE match); MVP (Get first place in a public Road RAGE match)."
            ]
        },
        {
            "heading": "The Scorchers",
            "body": [
                "The Scorchers add-on - the Ultra Nightmare and Night Terrors difficulty clears, completing Hagar Caves / Refinery / Bash Canyon / Scorcher Base / Wellspring Tunnels in the job path, the Roly-Poly and Video Poker minigame wins, the Railgun through-wall double kill, and pinning an enemy with a Rebar shot.",
                "The achievements here: Night Terrors (Finish the Campaign on Ultra Nightmare difficulty); Cavernous Stumble (Complete Hagar Caves in The Scorchers job path); Plans Refined (Complete Refinery in The Scorchers job path); Thrash Canyon (Complete Bash Canyon in The Scorchers job path); Fired Up! (Complete Scorcher Base in the The Scorchers job path); Lucky  Charms (Bet and win on Green in the Roly-Poly minigame); Foursome (Win with a Four of a Kind in the Video Poker minigame); Wall Hack (Kill 2 enemies with one Railgun Slug shot through a wall); Rebar Pie (Pin an enemy to a surface with a Rebar ammo shot); Rite of Passage (Complete Wellspring Tunnels in The Scorchers job path)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the campaign on Normal or Hard, collecting every playing card and recipe as you go.",
                "2. Do the gadget, vehicle and minigame feats during that run, and complete every campaign dungeon.",
                "3. Finish the run for 100% completion, then replay on Nightmare (and Ultra Nightmare with The Scorchers) for the difficulty achievements.",
                "4. Play the Legends of the Wasteland co-op missions, including one on Nightmare with a partner.",
                "5. Do The Scorchers job path and its minigame and weapon feats, and the two Road RAGE matches.",
                "Tip: 'RAGE Nightmare' and the lower difficulty achievements do not stack - if you want all four, plan to play through at least twice, once low and once on Nightmare."
            ]
        }
    ]
};
