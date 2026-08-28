// 7 Days to Die Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/7-days-to-die.json), whose 43 achievements
//   were sourced directly from Steam's own achievement schema for appid
//   251570 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js). 38 of 43 ship a real,
//   official Steam description, quoted verbatim below.
// - The 5 hidden achievements ship no Steam description; their
//   conditions here are curatorial, cross-checked against the 7 Days to
//   Die wiki and Steam Community 100% guides.
export const GUIDE = {
    "slug": "7-days-to-die-achievement-guide",
    "category": "game",
    "gameSlug": "7-days-to-die",
    "icon": "🧟‍♂️",
    "title": "7 Days to Die Achievement Guide",
    "summary": "A practical guide to all 43 Steam achievements in 7 Days to Die - the first-craft basics, the crafting / kill / travel grind milestones, the survival, level and Fortitude milestones, the PvP kill counts, and the 5 hidden achievements.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "7 Days to Die has 43 Steam achievements, 5 of them hidden. Almost every achievement is a cumulative counter - craft N items, kill N zombies, travel N kilometres, reach character level N - so nothing is missable and a full completion is really just a long single-player world.",
                "The long poles are Thomas Edison (craft 5,000 items), The Funeral Director (kill 2,500 zombies), Neil Armstrong (travel 1,000 km), Survivalist (reach level 300) and Nearly Immortal (survive 1,680 in-game minutes in one game).",
                "Tip: run one long single-player game with no death-penalty settings changed, keep it going for the level and time milestones, and craft in bulk (stacks of blocks, ammo, forge items) whenever you have spare resources to feed the craft-count achievements - they are the real time sink, not the combat ones."
            ]
        },
        {
            "heading": "First Steps",
            "body": [
                "The tutorial-tier unlocks: your first Stone Ax, a sleeping bag/bed, stopping a critical bleed-out, your first wood frame and your first Land Claim.",
                "The achievements here: Cause he's the Ax Man (Craft your first Stone Ax); Good in the sack (Place your first sleeping bag, old bed or king sized bed); Playing Doctor (Stop a critical bleed-out with a bandage, first aid bandage or first aid kit); Handy Man (Craft your first wood frame); The Homestead Act (Place your first Land Claim)."
            ]
        },
        {
            "heading": "Crafting, Kill & Travel Milestones",
            "body": [
                "The three counter families that fill fastest: craft 50/500/1500/5000 items (Alexander Bell through Thomas Edison), kill 10/100/500/2500 zombies (The Grave Digger through The Funeral Director), and travel 10/50/250/1000 km (Christopher Columbus through Neil Armstrong).",
                "The achievements here: Alexander Bell (Craft 50 Items); Benjamin Franklin (Craft 500 Items); Henry Ford (Craft 1500 Items); Thomas Edison (Craft 5000 Items); The Grave Digger (Kill 10 zombies); The Embalmer (Kill 100 zombies); The Mortician (Kill 500 zombies); The Funeral Director (Kill 2500 zombies); Christopher Columbus (Travel 10 Kilometers); Ferdinand Magellan (Travel 50 Kilometers); Marco Polo (Travel 250 Kilometers); Neil Armstrong (Travel 1000 Kilometers)."
            ]
        },
        {
            "heading": "Survival, Level & Fortitude Milestones",
            "body": [
                "The slower counters: die 1/7/14/28 times, reach Fortitude 4/6/8/10, reach character level 7/28/70/140/300, and survive 60/180/600/1680 minutes in a single game.",
                "The achievements here: Bite the dust (Die one Time); Knock em Dead (Die 7 Times); Your Number's Up (Die 14 Times); Meet Your Maker (Die 28 Times); Alive and Kicking (Reached 4 in Fortitude); Fit as a Fiddle (Reached 6 in Fortitude); Healthy as a Horse (Reached 8 in Fortitude); The Picture of Good Health (Reached 10 in Fortitude); Scavenger (Reached Level 7); Adventurer (Reached Level 28); Nomad (Reached Level 70); Warrior (Reached Level 140); Survivalist (Reached Level 300); Brush with Death (60 Minutes Lived in a single Game); Near Death Experience (180 Minutes Lived in a single Game); Cheated Death (600 Minutes Lived in a single Game); Nearly Immortal (1680 Minutes Lived in a single Game)."
            ]
        },
        {
            "heading": "PvP",
            "body": [
                "The player-versus-player kill counts - kill 1, 5, 10 and 25 other players (Napoleon through Alexander the great) - which need a PvP server or a willing friend.",
                "The achievements here: Napoleon (Kill another player); Julius Caesar (Kill 5 other players); Genghis Khan (Kill 10 other players); Alexander the great (Kill 25 other players)."
            ]
        },
        {
            "heading": "Hidden Achievements",
            "body": [
                "Five achievements are hidden and ship no Steam description:",
                "The achievements here: On top of the world (Reach the maximum world height (about 255 blocks above sea level).); Dig Deep (Dig all the way down to bedrock, the lowest point of the world.); The polar bare club (Be in a sub-zero (snow) biome while wearing no armour.); Dirty Larry (Kill 44 zombies with the .44 Magnum.); Evil Knievel (Suffer a broken leg (usually from fall damage).)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Start a single-player game and just play - First Steps, the early craft/kill/travel tiers and the death and level milestones all come in the first few hours.",
                "2. Keep that world alive for weeks of in-game time for Nearly Immortal and Survivalist, and mass-craft whenever you have resources for Thomas Edison.",
                "3. Do the hidden achievements deliberately: dig to bedrock (Dig Deep), build/climb to max height (On top of the world), strip off in the snow biome (The polar bare club), break a leg on a fall (Evil Knievel) and grind 44 kills with the .44 Magnum (Dirty Larry).",
                "4. Do the PvP kills last on a PvP server or with a friend (Napoleon, Julius Caesar, Genghis Khan, Alexander the great).",
                "Tip: On top of the world and Dig Deep are easiest in Creative/debug mode or on a flat world - build a pillar straight up to the height cap, then dig straight down to bedrock."
            ]
        }
    ]
};
