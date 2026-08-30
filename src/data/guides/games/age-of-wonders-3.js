// Age of Wonders III Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/age-of-wonders-3.json), whose 74 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   226840 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js). None are hidden.
// - 1 achievement(s) are NOT hidden but ship a genuinely blank
//   official description in Steam's own schema (a data gap, not secrecy);
//   those keep their real name with a curatorial (researched) description,
//   noted individually where it appears below. Every other achievement's
//   description is Steam's own real text, quoted verbatim.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "age-of-wonders-3-achievement-guide",
    "category": "game",
    "gameSlug": "age-of-wonders-3",
    "icon": "🐉",
    "title": "Age of Wonders III Achievement Guide",
    "summary": "A practical guide to all 74 Steam achievements in Age of Wonders III - none are hidden. Covers battles and leader/city progression, campaign victories across leader classes, multiplayer and the game's Wonders, and the Eternal Lords expansion's Undead, Necromancer, Frostling, Tigran, and Shadowborn content.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Age of Wonders III has 74 Steam achievements and none are hidden - though one (Mine Crafted, a Minecraft reference) ships with a genuinely blank official description on Steam's own schema, a data gap rather than intentional secrecy. The base game covers tactical battles and city founding, winning with each of the six base leader classes, exploration and hero-management milestones, campaign victories for the Commonwealth, Elven Court, and Golden Realm storylines, multiplayer win counts, and building the game's Wonders. The Eternal Lords expansion adds its own three faction campaigns (Undead, Shadowborn, Frostlings) plus Necromancer, Frostling, Tigran, and Shadowborn leader-class content.",
                "Nothing is missable - every battle, city, and leader-class achievement can be earned in any future game, and the campaign achievements simply accumulate as you play through each storyline. The genuine long pole is winning 30 online games for Grand Master of Wonders, which needs sustained multiplayer play over a long period rather than any single strong session.",
                "Tip: the six (later ten with Eternal Lords) leader-class \"Triumph\" achievements do not need a full campaign each - winning any random or scenario map with that leader class counts, so a quick scenario victory is a much faster way to clear the leader-class achievements than replaying full campaigns."
            ]
        },
        {
            "heading": "Battles, Leaders & City Building",
            "body": [
                "Winning a tactical battle, founding an outpost, razing or plundering a town, winning with the Warlord, Sorcerer, Rogue, Dreadnought, Archdruid, and Theocrat leader classes, winning a siege, creating a custom leader, completing a quest, diplomatic town acquisition, clearing an exploration site, promoting a unit to gold, embarking a unit, and acquiring a dwelling.",
                "The achievements here: First Blood (Win a tactical battle); Settling Down (Found an outpost); Scorched Earth (Raze or plunder a town); Warlord's Triumph (Win any level with the Warlord leader class); Sorcerer's Triumph (Win any level with the Sorcerer leader class); Rogue's Triumph (Win any level with the Rogue leader class); Dreadnought's Triumph (Win any level with the Dreadnought leader class); Archdruid's Triumph (Win any level with the Archdruid leader class); Theocrat's Triumph (Win any level with the Theocrat leader class); Siege Master (Win a siege battle); Represent (Create a custom leader); Adventurer (Complete a quest); Silver Tongue (Acquire an independent town through diplomacy); Treasure Raider (Clear an exploration site); Seasoned (Promote a unit to gold); Seaworthy (Embark a unit); Friend of Monsters (Acquire a dwelling); Talent Scout (Recruit 3 heroes in a single game); Well Equipped (Fill all equipment slots on a single leader or hero); Blacksmith (Create an item in the item forge)."
            ]
        },
        {
            "heading": "Progression & Campaign Victories",
            "body": [
                "Recruiting 3 heroes, filling all equipment slots, forging an item, hatching an egg, maxing a city's upgrades, researching every skill, 50 casting points, a pure good or pure evil alignment, winning the Commonwealth and Elven Court campaigns (and as a defector), winning a random scenario, and multiplayer wins up to 30 games.",
                "The achievements here: Mama? (Hatch an egg); Paradise City (Produce all city-upgrades in a single city); Scholar (Research all skills in a single game); Caster (Have 50 casting points on your leader); Protector of the Light (Get a pure good alignment); Champion of the Commonwealth (Win the campaign for the Commonwealth); Champion of the Elven Court (Win the campaign for the Elven Court); Rebel of the Commonwealth (Win as Commonwealth defector); Rebel of the Elven Court (Win as Elven Court defector); Master of the Unknown (Win a random scenario); Challenger (Start an online game); Taste of Victory (Win an online game); Champion of Wonders (Win 10 online games); Grand Master of Wonders (Win 30 online games); Overlord (Get a pure evil alignment); Best Friends Forever (Form an alliance)."
            ]
        },
        {
            "heading": "Multiplayer & Wonders",
            "body": [
                "Recruiting the special \"Notch\" hero, winning the Golden Realm campaign, building a city specialization, winning by seal victory, forcing an AI surrender, completing an empire quest, maxing a unit's luck, using throw filth, befriending an elephant, obtaining a Naga dwelling, and playing a user-created map.",
                "The achievements here: Mine Crafted (A Minecraft reference: recruit the special hero \"Notch\" (Per Notchson), a Human Dreadnought hero wearing a pilgrim hat and monocle who appears among your recruitable heroes. To improve the odds of finding him, start as a Human leader, enable \"Random Heroes match player race\" in Advanced Rules, and raise the Max Number of Heroes.); The Importance of Being Ernest (Win the campaign for the Golden Realm); Mystical City (Build a city specialization upgrade); Power Unleashed (Win any level by claiming a seal victory); You Work for Me Now (Force the AI to surrender to you); First!! (Complete an empire quest); Fortune's Favor (Maximize a unit's luck); Party Pooper (Use throw filth on an enemy); Elephant Whisperer (Befriend an elephant); Fourteenth Bloodline (Obtain a Naga dwelling); Community Member (Play a user created map)."
            ]
        },
        {
            "heading": "Eternal Lords: Undead, Necromancer & Frostling",
            "body": [
                "Winning the Undead and Shadowborn Eternal Lords campaigns, winning the Frostling campaign, winning with the Necromancer leader class, killing a leader with Invoke Death, recruiting a Necromancer hero, researching Harbingers of Death, animating a ruined town, summoning a Dread Reaper, winning with a Frostling leader, freezing an enemy, killing a frozen enemy, winning with a Tigran leader, and 6 Tigran cities in one game.",
                "The achievements here: Master of Eternal Silence (Win the Eternal Lords campaign for the Undead); Master of Eternal Magic (Win the Eternal Lords Campaign for the Shadowborn); Master of Eternal Winter (Win the Eternal Lords Campaign for the Frostlings); Necromancer's Triumph (Win any level with the Necromancer leader class); For Whom the Bell Tolls (Kill a leader with Invoke Death ); Join Me in Death (Recruit a Necromancer hero); Who Wants to Live Forever (Research Harbingers of Death); Living in a Ghost Town (Animate a ruined town); Don't Fear the Reaper (Summon a Dread Reaper); Winter Has Come (Win any level with a Frostling leader); Cold as Ice (Freeze an enemy unit); To Heal a Frozen Heart (Kill a frozen enemy); Cats Rule Everything (Win any level with a Tigran leader); Kittens Everywhere (Have six Tigran cities in a single game)."
            ]
        },
        {
            "heading": "Eternal Lords: Tigran, Shadowborn & Beyond",
            "body": [
                "Summoning a Fallen Angel, winning with a Shadowborn leader, summoning an Arch Angel, winning with a Keeper of Peace leader, summoning a Chthonic Guardian, winning with a Grey Guard leader, obtaining a Reef Colony, participating in and winning a PBEM game, maxing race governance for one and then three races, liberating a city via betrayal, and a unifier victory.",
                "The achievements here: Lady of Darkness (Summon a Fallen Angel); Shadowfall (Win any level with a Shadowborn leader); Lady of Light (Summon an Arch Angel); Keep the Faith (Win any level with a Keeper of Peace leader); Lady of Justice (Summon a Chthonic Guardian); Iron Sky (Win any level with a Grey Guard leader); Deep Friendships (Obtain a Reef Colony); Going Postal (Participate in a PBEM game); V-Mail (Win a PBEM game); Dedicated Monogamist (Max out the race governance for one race in a single game); Interracial Harmony (Max out the race governance for three races in a single game); Liberator (Liberate an oppressed enemy city via a betrayal event); Great Unifier (Win a unifier victory)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Win your first tactical battle, found an outpost, and win a scenario with your starting leader class, then rotate through the remaining base leader classes (Warlord, Sorcerer, Rogue, Dreadnought, Archdruid, Theocrat) for their Triumph achievements.",
                "2. Work through general progression: complete a quest, acquire an independent town diplomatically, clear an exploration site, promote a unit to gold, embark a unit, acquire a dwelling, recruit 3 heroes in a game, and research every skill.",
                "3. Play the Commonwealth, Elven Court, and Golden Realm campaigns to completion (and as their rebel/defector variants where available), then a random scenario for Master of the Unknown.",
                "4. Push multiplayer wins toward Champion of Wonders and Grand Master of Wonders, and build a Wonder for Power Unleashed.",
                "5. If you own Eternal Lords, complete its three campaigns (Undead, Shadowborn, Frostlings), then win scenarios with the Necromancer, Frostling, Tigran, and Shadowborn leader classes and their signature summons (Dread Reaper, Fallen Angel, Chthonic Guardian).",
                "Tip: Mine Crafted (the Minecraft-reference hero) is easiest to find by starting as a Human leader, enabling \"Random Heroes match player race\" in Advanced Rules, and raising the Max Number of Heroes so more candidate heroes (including Notch) appear to recruit."
            ]
        }
    ]
};
