// Nightmare Reaper Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/nightmare-reaper.json), whose 149 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1051690 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "nightmare-reaper-achievement-guide",
    "category": "game",
    "gameSlug": "nightmare-reaper",
    "icon": "🔫",
    "title": "Nightmare Reaper Achievement Guide",
    "summary": "A practical guide to all 149 Steam achievements in Nightmare Reaper - none are hidden. None of the achievements are hidden. Covers the movement and combat feats, the skill tree across all eight worlds, the named level completions, the weapon and loot grinds, both story campaigns and their endings, and the advanced modifiers, jade upgrades, arenas, pets and New Game Plus tiers.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Nightmare Reaper has 149 Steam achievements and none are hidden. The base game covers movement and combat feats (5x to 35x combos, bunnyhop max speed, 20 rocket jumps, 50 kick kills), the skill tree (buy 1 up to 125 skills, then all skills from each of the eight worlds), completing each of the ten named base levels, and enormous loot and kill grinds - sell 500 weapons, kill 5,000 enemies, obtain 10,000 treasures, 1,000,000 gold, and hundreds of each retro-game collectible. The two campaign DLCs add their own named-level completions, the 'pills' mechanic (complete 5 up to 250 levels with pills), both endings (sacrifice / control), and the advanced systems - toxicity completions, jade upgrades, arena rounds, pets, and New Game Plus 1 / 2 / 3.",
                "The catalog marks it difficulty 4. It is a big, long completion rather than a hard one - the kill, gold, treasure and collectible counts (kill 5,000, 1,000,000 gold, 10,000 headshots, 250 levels with pills) are the real time sink, along with buying every skill in all eight worlds and reaching New Game Plus 3.",
                "Tip: everything counts across all runs and both campaigns, so just keep playing whatever mode you enjoy - the giant kill / gold / treasure / collectible counters fill themselves, and the discrete achievements (level completions, endings, skill-tree) are the ones to actually plan around."
            ]
        },
        {
            "heading": "Combat, Movement & Level Feats",
            "body": [
                "5x / 15x / 25x / 35x combos, bunnyhop max speed, 20 rocket jumps, 50 kick kills, 50 high falls into water, dousing yourself 50 times, and getting all kills, all secrets, all treasures and all bonuses in a level.",
                "The achievements here: Offender (Obtain a 5x combo); Repeat offender (Obtain a 15x combo); Killer (Obtain a 25x combo); Unstoppable (Obtain a 35x combo); Bunny hopper (Reach bunnyhop max speed); Burning soles (Do 20 rocket jumps); Soccer (Kick 50 enemies to death); Watch your step (50 high falls into water); Refreshing (Douse yourself 50 times); Monster (Get all kills in a level); Wall hugger (Get all secrets in a level); Raider (Get all treasures in a level); Completionist (Get all bonuses in a level)."
            ]
        },
        {
            "heading": "Skill Tree & World Levels",
            "body": [
                "Buying 1 / 10 / 25 / 50 / 75 / 100 / 125 skills from the tree, buying every skill from each of the eight worlds, and completing each of the ten named base-game levels (Hollow Stone through The Descent).",
                "The achievements here: Birch (Buy a skill from the tree); Maple (Buy 10 skills from the tree); Oak (Buy 25 skills from the tree); Pine (Buy 50 skills from the tree); Aspen (Buy 75 skills from the tree); Fir (Buy 100 skills from the tree); Spruce (Buy 125 skills from the tree); Dirt digger (Buy all skills from world 1); Ice climber (Buy all skills from world 2); Cemetary man (Buy all skills from world 3); Valley of the gods (Buy all skills from world 4); Big hands (Buy all skills from world 5); Breaststroke (Buy all skills from world 6); Factory worker (Buy all skills from world 7); Climate change (Buy all skills from world 8); Claustrophobia (Complete hollow stone); Psychedelic (Complete spore pit); The hunter (Complete immemorial woods); Schamalayan (Complete forsaken village); Red gold (Complete sulfuric mines); On the roof (Complete disavowed town); Its (Complete putrid sewers); Dead evil (Complete drudge village); Overlook hotel (Complete gloom mansion); Brimstone (Complete the descent)."
            ]
        },
        {
            "heading": "Weapons, Loot & Kill Grinds",
            "body": [
                "Weapon rarity and level obtains, waking up prematurely, selling 10 / 25 / 50 / 500 weapons, killing 30 up to 5,000 enemies, obtaining 20 up to 10,000 treasures and 10,000 up to 1,000,000 gold, breaking 100 up to 10,000 clutter objects, the retro-collectible obtains (V, horse water, reflection, nightmare reaper), 20 up to 10,000 headshot kills, a 3-enemy bullet, and completing 5 / 15 / 75 / 250 random events.",
                "The achievements here: Loot (Obtain an uncommon weapon); Shiny (Obtain a rare weapon); Wait for it (Obtain a legendary weapon); A real weapon (Obtain a level 2 weapon); Epic (Obtain a level 3 weapon); Just a dream (Wake up prematurely); Garage sale (Sell 10 weapons); Convenience store (Sell 25 weapons); Department store (Sell 50 weapons); Worldwide chain (Sell 500 weapons); Bloody hands (Kill 30 enemies); It won't come out (Kill 100 enemies); Wardrobe change (Kill 500 enemies); Pleasant bath (Kill 5000 enemies); The things (Obtain 20 treasures); You own (Obtain 100 treasures); End up (Obtain 1000 treasures); Owning you (Obtain 10000 treasures); Money (Obtain 10000 gold); Does not (Obtain 50000 gold); Bring (Obtain 150000 gold); Happiness (Obtain 1000000 gold); Bull (Break 100 clutter objects); Tornado (Break 250 clutter objects); Volcano (Break 2500 clutter objects); Asteroid (Break 10000 clutter objects); Old man (Obtain V); Turtle (Obtain 5 Vs); Sloth (Obtain 20 Vs); Snail (Obtain 500 Vs); Hare (Obtain horse water); Horse (Obtain 5 horse waters); Greyhound (Obtain 20 horse waters); Cheetah (Obtain 500 horse waters); River (Obtain reflection); Glass (Obtain 5 reflections); Gold (Obtain 20 reflections); Mirror (Obtain 500 reflections); Street fight (Obtain nightmare reaper); Hold up (Obtain 5 nightmare reapers); Bank robbery (Obtain 20 nightmare reapers); War (Obtain 500 nightmare reapers); Headshot (Obtain 20 headshot kills); Sniper (Obtain 100 headshot kills); Surgeon (Obtain 1000 headshot kills); Brain fetish (Obtain 10000 headshot kills); Kebab (Kill 3 enemies with one bullet); Loot slime (Complete 5 random events); Flame trap (Complete 15 random events); Ghost head (Complete 75 random events); Slot machine (Complete 250 random events)."
            ]
        },
        {
            "heading": "Campaign DLCs & Endings",
            "body": [
                "Completing each named level of the two campaign DLCs (Carnage Way through Boulder Penitentiary, then The Wasteland through The Flesh Pits), completing 5 / 15 / 45 / 135 / 250 levels with pills, finding everything in the hospital, and both endings - the sacrifice ending and the control ending.",
                "The achievements here: Heavy traffic (Complete carnage way); I hate mondays (Complete tower of toil); Poison ivy (Complete gardens of woe); Contraband (Complete murky docks); Rusty bucket (Complete vermilion princess); Industrial revolution (Complete rust works); Ticket please (Complete void beneath); Blood donator (Complete gibbs medical center); Cholinesterase (Complete boulder penitentiary); Painkiller (Complete 5 levels with pills); Patient (Complete 15 levels with pills); Problematic (Complete 45 levels with pills); Addict (Complete 135 levels with pills); Breaking good (Complete 250 levels with pills); Clear! (Find everything in the hospital); Salvation (Get the sacrifice ending); Condemnation (Get the control ending); Mixed bag (Complete The wasteland); Private savings (Complete Fields of death); Extraterrestrial (Complete Moon terror); Hallowbrook (Complete Sorcerer's mansion); Where am I? (Complete The empty); Hold your breath (Complete Crushing depths); Cara loft (Complete Buried ruins); Sulfur (Complete Blood and brimstone); Barbecue (Complete The flesh pits)."
            ]
        },
        {
            "heading": "Modifiers, Jade, Arenas & NG+",
            "body": [
                "Selling a weapon for 1,000,000, accepting merchant offers, a carried-barrel explosion, a no-weapon level start, kicking a boss, an elemental combo, blood-ammo life loss, stat changes, toxicity completions (20 / 100 / 250), jade obtains and upgrades, arena rounds (10 / 50 / 75) and unlocks, pets and pet skills, and reaching New Game Plus 1, 2 and 3.",
                "The achievements here: Art of the deal (Sell a weapon for 1000000); Game of chance (Accept 5 merchant offers); Overconfidence (Have a carried barrel explode); Hardcore pat (Start a level with no weapon); Disrespect (Kick a boss); Storm ice and fire (Burn freeze and shock an enemy); Blood is fuel (Lose 2000 life as blood ammo); Last laugh (Pickup a weapon after death); Bold and brash (Change a stat to +2 attack); Belongs in the trash (Change a stat to blood ammo); Lead (Complete a level with 20 toxicity); Mercury (Complete a level with 100 toxicity); Uranium (Complete a level with 250 toxicity); Grape (Obtain 20000 jade); Lime (Obtain 60000 jade); Avocado (Obtain 240000 jade); Watermelon (Obtain 1000000 jade); Mac (Buy 10 jade upgrades); Ta (Buy 50 jade upgrades); Bi (Buy 100 jade upgrades); Lis (Buy 180 jade upgrades); Perseverance (Reach round 10 in an arena); Courage (Reach round 50 in an arena); Foolishness (Reach round 75 in an arena); Court (Unlock 2 arenas); Field (Unlock 5 arenas); Stadium (Unlock 8 arenas); Good doggy (Have a pet with 2 skills); Raining cats and dogs (Have 2 pets); Kennel (Unlock all pets); Pet training (Unlock all pet skills); Not too rough (Reach New game+ 1); Hurt me plenty (Reach New game+ 2); Ultra-violence (Reach New game+ 3)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the base campaign, completing all ten named levels and buying skills as you go.",
                "2. Buy every skill in all eight worlds.",
                "3. Play both campaign DLCs, completing their levels and getting both endings.",
                "4. Grind the loot, kill, gold, treasure and collectible counters across every mode.",
                "5. Work the advanced systems - jade upgrades, arenas, pets - and push to New Game Plus 3.",
                "Tip: the 'complete N levels with pills' chain (up to 250) is the single longest grind - once you have the hospital DLC, just take a pill at the start of every level you play, DLC or not, and the count builds passively."
            ]
        }
    ]
};
