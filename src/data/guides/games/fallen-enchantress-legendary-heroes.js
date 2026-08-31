// Fallen Enchantress: Legendary Heroes Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/fallen-enchantress-legendary-heroes.json), whose 54 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   228260 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "fallen-enchantress-legendary-heroes-achievement-guide",
    "category": "game",
    "gameSlug": "fallen-enchantress-legendary-heroes",
    "icon": "🗡",
    "title": "Fallen Enchantress: Legendary Heroes Achievement Guide",
    "summary": "A practical guide to all 54 Steam achievements in Fallen Enchantress: Legendary Heroes - none are hidden. Covers the first-steps and boss achievements, the victory-type and per-faction win achievements, the champion / quest / playtime achievements, and the Legendary Hero recruit achievements. None of the achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Fallen Enchantress: Legendary Heroes has 54 Steam achievements and none are hidden. They cover the basics (kill a monster, build and capture a city, recruit a hero), slaying the five elemental lords and a dragon, winning by each of the seven victory types, winning as each of the ten factions, the champion-level and quest milestones, the playtime milestones (up to 100 hours), and recruiting each of the seven named Legendary Heroes.",
                "The catalog marks it a single long campaign or several - 'One...More...Turn....' (100 hours) and winning as all ten factions plus all seven victory types are the pole. Nothing is missable: every game type, faction and victory condition can be replayed.",
                "Tip: on a large map against weak AI, you can chain several achievements per game - reach a champion to level 15, complete 10 quests, control 5 cities, and win by a specific condition as a specific faction all in one run."
            ]
        },
        {
            "heading": "First Steps & Bosses",
            "body": [
                "Killing a monster, defeating a sovereign in battle, capturing and building a city, recruiting an NPC hero, defeating an army, slaying a dragon, slaying the five elemental lords (Abeix, Delin, Morian, Torax, Vetrar), and completing the Legendary Hero scenario.",
                "The achievements here: Monster Killer (You killed a monster!); Defeated Sovereign in Battle (You defeated a sovereign in battle!); Captured a City (You have captured an enemy city!); Built a City (All nations start with one.); Recruited an NPC (Your Fame has lead a hero to your cause.); Defeated an Army (You have defeated an army!); Dragon Slayer (Not since Peter MacNicol has one been slain!); Defeat the Lord Who Dwells Below (You've managed to slay Abeix!); Defeat the Pyre of Man (You've managed to slay Delin!); Defeat the Ruin of Summer (You've managed to slay Morian!); Defeat the Lord Who Levels Mountains (You've managed to slay Torax!); Defeat the Guardian of the World's End (You've managed to slay Vetrar!); Legendary Hero (Awarded for completion of the Legendary Hero scenario.)."
            ]
        },
        {
            "heading": "Victory Types & Factions I",
            "body": [
                "Winning by Conquest, the Master Quest, the Spell of Making, Diplomacy, the turn limit and by population, and winning as Altar, Gilden, Pariden, Tarth, Kraxis, Magnar, Resoln and Yithril.",
                "The achievements here: A Leader of Men (Win by defeating all of your opponents.); A Great Seeker (Win by completing the Master Quest.); A Mighty Sorcerer (Win by casting the Spell of Making.); Peacemaker (Win by forging an alliance with all players.); Waiting Out the Clock (Win by having the highest score by the turn limit.); Population Manager (Win and have at least 3,000 population.); Rise of Altar (Win as Altar.); Rise of Gilden (Win as Gilden.); Rise of Pariden (Win as Pariden.); Rise of Tarth (Win as Tarth.); Rise of Kraxis (Win as Kraxis.); Rise of Magnar (Win as Magnar.); Rise of Resoln (Win as Resoln.); Rise of Yithril (Win as Yithril.)."
            ]
        },
        {
            "heading": "Champions, Quests & Playtime",
            "body": [
                "Reaching champion level 5 and 15, completing 1 and 10 quests in a game, buying and selling items in shops, the playtime milestones (5, 10, 20, 40 and 100 hours), a level-5 city, controlling 5 cities, tapping 10 resources, exploring 10 goodie huts, defeating a faction, creating a custom sovereign, and designing a unit.",
                "The achievements here: Hero (Reach level 5 with a champion.); Champion (Reach level 15 with a champion.); Adventurer (Complete a quest.); Ratslayer (Complete 10 quests in a single game.); Shopper (Buy an item from a shop.); Trader (Make 1000 gildar from selling items in shops.); Experienced (Play for 5 hours.); Expert (Play for 10 hours.); Veteran (Play for 20 hours.); Hardcore (Play for 40 hours.); One...More...Turn.... (Play for 100 hours.); Urban Sprawl (Get a city to level 5 in one game.); Expansionist (Control 5 cities in a single game.); Exploiter (Tap 10 resources in a single game.); Explorer (Explore 10 goodie huts in a single game.); Exterminator (Defeat a faction.); Nice Pants! (Create a custom sovereign.); Forging Armies (Design a unit.)."
            ]
        },
        {
            "heading": "Legendary Hero Recruits & More Factions",
            "body": [
                "Recruiting Mausolos, Raza the Wild, Kasst, Tuatha, Gallowman, Nen Ratcatcher and Ascian, and winning as Capitar and Umber.",
                "The achievements here: Guard from the Tomb (Recruit Mausolos); The Desert Mage (Recruit Raza the Wild); The Brood Warden Champion (Recruit Kasst); Ally from the Swamp (Recruit Tuatha); Lord of Necromancy (Recruit Gallowman); Darkling Allies (Recruit Nen Ratcatcher); Lady Umber's Assassin (Recruit Ascian); Rise of Capitar (Win as Capitar.); Rise of Umber (Win as Umber.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play a first game to learn the systems - kill monsters, build and capture cities, recruit heroes, and slay a dragon.",
                "2. Complete the Legendary Hero scenario and slay the five elemental lords.",
                "3. Play games aimed at each victory type (Conquest, Quest, Spell of Making, Diplomacy, turn limit, population).",
                "4. Win at least once as every one of the ten factions.",
                "5. Recruit each named Legendary Hero, and keep playing toward the 100-hour milestone.",
                "Tip: the per-faction wins ('Rise of X') just need a win as that faction on any settings - play quick small-map Conquest games on Easy to clear all ten efficiently."
            ]
        }
    ]
};
