// Shadow Warrior 3 Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/shadow-warrior-3.json), whose 38 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1036890 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "shadow-warrior-3-achievement-guide",
    "category": "game",
    "gameSlug": "shadow-warrior-3",
    "icon": "🐉",
    "title": "Shadow Warrior 3 Achievement Guide",
    "summary": "A practical guide to all 38 Steam achievements in Shadow Warrior 3 - none are hidden. Covers the eleven campaign level completions, the upgrade and combat feats (finishers, elemental kills, spikes, environmental kills), and acquiring all ten boss-specific Gore Tools.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Shadow Warrior 3: Definitive Edition has 38 Steam achievements and none of them are hidden. Eleven are campaign level completions (The Dragon's Back through Intestinal Inspector). A middle block covers upgrades (your first, all upgrades, a fully upgraded ranged weapon and katana, a full skill branch) and combat feats (100 katana kills, 15 and 100 Finishers, 50 enemies on spikes, elemental kill counts for fire/electric/freeze, 150 environmental kills). The last ten are for obtaining each of the game's Gore Tools, which are ripped from a specific mini-boss.",
                "Nothing is missable - chapter select lets you replay any level, the Gore Tools always drop from their boss on replay, and the kill-count feats accumulate. This is a short, guided completion; the only real requirement is playing the whole campaign and hitting the various kill thresholds, most of which come naturally.",
                "Tip: the ten Gore Tool achievements are tied to specific enemies (the Brain Tonic from Shogai, the Equalizer from Oni Hanma, and so on) - if you finish the campaign missing one, replay the level containing that enemy and perform the Gore rip on it rather than hoping to find it elsewhere."
            ]
        },
        {
            "heading": "Campaign Missions",
            "body": [
                "Completing each of the eleven campaign levels: The Dragon's Back, Way to Motoko, Motoko's Thunderdome, That Damn Dam, Walking on Eggshells, Egg Express, Doomsday Device, Wayfarer's Forest, The Fast and the Furry, Midnight Snack, and Intestinal Inspector.",
                "The achievements here: The end of the world (Complete 'The Dragon's Back'); Let me in! LET ME IN! (Complete 'Way to Motoko'); Down the raccoon hole (Complete 'Motoko's Thunderdome'); Damn, that's a big dam (Complete 'That Damn Dam'); Lo Wang, first of his name (Complete 'Walking on Eggshells'); I don't have friends, I got egg (Complete 'Egg Express'); Big-Laser-Gun-10000 (Complete 'Doomsday Device'); Lookin for that special someone (Complete 'Wayfarer's Forest'); Ski pass (Complete 'The Fast and the Furry'); Inside out (Complete 'Midnight Snack'); Dragon Slayer (Complete 'Intestinal Inspector')."
            ]
        },
        {
            "heading": "Upgrades & Combat Feats",
            "body": [
                "Killing 100 enemies with the katana, obtaining your first and then all upgrades, fully upgrading a ranged weapon, the katana and a character skill branch, performing 15 and then 100 Finishers, obtaining all Gore Tool types, 50 enemies on spikes, 50 explodables destroyed, 100 Gore-weapon kills, 200 total kills, and the elemental and environmental kill counts (fire, electrocute, freeze, hazards).",
                "The achievements here: Samurai (Kill 100 enemies with the katana); Shiny! What does it do? (Obtain your first upgrade); Coaching is overrated (Obtain all upgrades); I'm something of a gunsmith myself (Fully upgrade a ranged weapon); Master Smith would be proud (Fully upgrade the katana); Awake Your Inner Wang (Fully upgrade one character skill branch); Surgeon (Perform Finisher 15 times); Executioner (Perform Finisher 100 times); Show me what you're made of (Obtain all Gore Tool types); Acupuncture (Put 50 enemies on spikes); Cool guys don't look at explosions (Explode 50 explodables); Gore Master (Kill 100 enemies with Gore weapons); Don't come closer (Kill 200 enemies); Set the world on fire (Set 25 enemies on fire); Baddies go 'BZZZZZ' (Electrocute 50 enemies without Motoko's help); -273 Kelvin (Freeze 75 enemies); It's dangerous out there (Kill 150 enemies with environmental hazards)."
            ]
        },
        {
            "heading": "Gore Tools",
            "body": [
                "Obtaining each of the ten boss-specific Gore Tools: Brain Tonic (Shogai), Brain Freeze (Kugutsu), Equalizer (Oni Hanma), Disco Grenade (Laser Shogun), Penetrator (Mogura), Seeking Eye (Seeking Shokera), Swarm Launcher (Slinky Jakku), Blade of Hattori (Hattori), Hungry Hungry Heart (Chef Oboru Guruma), and Double Trouble (Gassy Obariyon).",
                "The achievements here: Caution! Watch Your Head. (Obtain \"Brain Tonic\" Gore Tool from Shogai.); A Cold Day in Hell (Obtain \"Brain Freeze\" Gore Tool from Kugutsu.); Stop! Hammertime! (Obtain \"Equalizer\" Gore Tool from Oni Hanma.); Disco Inferno (Obtain \"Disco Grenade\" Gore Tool from Laser Shogun.); Anyone Has a Corkscrew? (Obtain \"Penetrator\" Gore Tool from Mogura.); Eye See You! (Obtain \"Seeking Eye\" from Seeking Shokera.); New Year Has Come Early (Obtain \"Swarm Launcher\" Gore Tool from Slinky Jakku.); Your Sword is Mine! (Obtain \"Blade of Hattori\" Gore Tool from Hattori.); What You're Cooking Here? (Obtain \"Hungry, Hungry Heart\" Gore Tool from Chef Oboru Guruma.); Size Does Matter. (Obtain \"Double Trouble\" Gore Tool from Gassy Obariyon.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through all eleven campaign levels for the level-completion achievements.",
                "2. As you fight each mini-boss, perform the Gore rip to obtain its Gore Tool - keep a checklist so you know which of the ten you still need.",
                "3. Spend upgrade resources as you get them: fully upgrade a ranged weapon, the katana, and one character skill branch, and obtain every upgrade for Coaching is overrated.",
                "4. Do the combat feats during normal play - 100 katana kills, 100 Finishers, 50 spike kills, and the fire/electric/freeze/environmental kill counts all accumulate across the campaign.",
                "5. Use chapter select to replay any level whose Gore Tool or kill feat you missed.",
                "Tip: the elemental kill counts (25 fire, 50 electric without Motoko, 75 freeze) are fastest to farm in the arena-style rooms with large enemy waves - equip the matching Gore weapon or upgrade for that room and focus on that element rather than switching mid-fight."
            ]
        }
    ]
};
