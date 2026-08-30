// HUMANKIND Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/humankind.json), whose 99 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1124300 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "humankind-achievement-guide",
    "category": "game",
    "gameSlug": "humankind",
    "icon": "🏺",
    "title": "HUMANKIND Achievement Guide",
    "summary": "A practical guide to all 99 Steam achievements in HUMANKIND - none are hidden. Covers the empire feats and per-turn production milestones, the per-affinity Era Star and battle/campaign feats, and the many win-condition and completion achievements.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "HUMANKIND has 99 Steam achievements and none of them are hidden. A block are lifetime or single-game feats (assimilate 15 Independent Peoples, adopt three State Religions in a game, produce 1,000 of a resource per turn in a city, hire 20 armies). A large section is the Era Stars - achieving 12 and then 18 stars of each of the six affinities (Builder, Aesthete, Expansionist, Agrarian, Scientist, Militarist) in a game. The rest are battle and diplomacy feats (a 50-unit killstreak, a nuke on a capital, a train network across 10 territories) and a long list of win-condition achievements - win without military units, with one city, keeping the same culture through every era, against a Metropolis-difficulty AI, by accumulating all Era Stars.",
                "Nothing is missable - games restart freely and the lifetime counters (money accumulated, curiosities collected, cultural wonders built) accumulate across every game. This is a long completion: the win-condition achievements are each a full game with a self-imposed restriction, and the 18-star-per-affinity achievements require a game built around one playstyle.",
                "Tip: stack the win-condition achievements onto the same games - a peaceful, tall, science-focused game can knock out Peacemonger, Spartan, An Endless Civilization, The Meek Shall Inherit the Earth and The Land of Smiles in one run if you plan the restrictions from turn one."
            ]
        },
        {
            "heading": "Empire Feats & Production Milestones",
            "body": [
                "Diplomacy and money feats (3 simultaneous allies, a million money over several games, being Liege of every player), religion and ideology feats, era-progression feats (first to every era, from last to first), assimilating Independent Peoples (5 / 10 / 15), building cultural wonders and collecting curiosities over several games, researching every technology, cutting and the nuclear-weapon counts, the 500- and 1,000-per-turn production milestones for each resource, and hiring 5 / 10 / 20 armies.",
                "The achievements here: Everybody's Friend (Be allied with 3 or more players simultaneously.); Millionaires Club (Amass more than one million in money over several games.); Midas Touch (Amass more than 500k in money over several games.); Omnist (Adopt three different State Religions in a single game.); Animal Lover (Advance from the Neolithic Era without hurting a single animal.); Welcome to the Club (Assimilate 5 Independent Peoples.); Welcome to the Collective (Assimilate 10 Independent Peoples.); Welcome to the Borg (Assimilate 15 Independent Peoples.); Extremist (Be at maximum or minimum values on all Ideology axes simultaneously.); Pacesetter (Be the first to reach all six Eras in a single game.); From Zero to Hero (Be first to reach a new Era after reaching the previous Era last.); King of Kings (Be Liege of every player simultaneously.); Unplugged (Win a game with the AI difficulty set to Metropolis.); Disconnected (Win a game with the AI difficulty set to Nation.); Terminated (Win a game with the AI difficulty set to Humankind.); Wonder-Full (Build 22 Cultural Wonders over several games.); Collector (Collect 20 Curiosities over several games.); Hoarder (Collect 50 Curiosities over several games.); Obsessive (Collect 100 Curiosities over several games.); Polymath (Research every Technology in a single game.); Key Influencer (All Empire capitals are in your sphere of influence.); I'm a Lumberjack... (Cut down 30 Forests in a single game.); Unbend the Knee (Declare war on your Liege.); Does Not Play Well With Others (Eliminate all other players.); Deterrence Era (Possess 10 Nuclear Weapons.); M.A.D. (Possess 20 Nuclear Weapons.); Nuclear Power (Possess 5 Nuclear Weapons.); All You Can Eat Buffet (Produce at least 1000 Food per turn in a City.); Captain of Industry (Produce at least 1000 Industry per turn in a City.); Money, Money, Money (Produce at least 1000 Money per turn in a City.); Nerdopolis (Produce at least 1000 Science per turn in a City.); Just Eat (Produce at least 500 Food per turn in a City.); Industrial Action (Produce at least 500 Industry per turn in a City.); Money for Nothing (Produce at least 500 Money per turn in a City.); Eureka! (Produce at least 500 Science per turn in a City.); Hard Rock Knife (Hire 10 Armies.); Price Cuts (Hire 20 Armies.); Swordpay (Hire 5 Armies.)."
            ]
        },
        {
            "heading": "Era Stars & Battle/Campaign Feats",
            "body": [
                "Achieving 12 and then 18 Era Stars of each affinity (Builder, Aesthete, Expansionist, Agrarian, Scientist, Militarist) in a single game, the destruction feats (a Holy Site, a Cultural Wonder, losing your Neolithic armies), a 10-territory train network, extracting and trading every Strategic Resource, no-defeat and half-territories games, 25- and 50-unit killstreaks, an 8-empire trade route, an 8-empire religion, the capital-nuke feats, and 20- and 30-territory cities.",
                "The achievements here: Hatchepsut (Achieve 12 Builder Era Stars in a single game.); Sejong (Achieve 12 Aesthete Era Stars in a single game.); Timur (Achieve 12 Expansionist Era Stars in a single game.); Antoine-Augustin (Achieve 12 Agrarian Era Stars in a single game.); Nikola (Achieve 12 Scientist Era Stars in a single game.); Moctezuma (Achieve 12 Militarist Era Stars in a single game.); Khufu (Achieve 18 Builder Era Stars in a single game.); Victoria (Achieve 18 Aesthete Era Stars in a single game.); Genghis (Achieve 18 Expansionist Era Stars in a single game.); Jawaharlal (Achieve 18 Agrarian Era Stars in a single game.); Ada (Achieve 18 Scientist Era Stars in a single game.); Napoléon (Achieve 18 Militarist Era Stars in a single game.); Blasphemer (Destroy a Holy Site.); Don't Know Much About History (Destroy a Cultural Wonder.); Neanderthal (Lose all your armies during the Neolithic Era.); Trans-Siberian Lover (End a game with a train network that stretches across 10 Territories.); All the Things (Extract every Strategic Resource in a single game.); Talk to the Hand (Finish a game where you refused every received demand.); In Sargon's Footsteps (Finish a game without losing a battle.); Landstalker (Finish a game possessing at least half the Territories.); Material World (Gain trade access to all Strategic Resources in a game.); Continental Shift (Possess Cities on three continents.); MVP (Achieve a 25 Unit killstreak with a single Unit.); One Man Army (Achieve a 50 Unit killstreak with a single Unit.); Check my Bling! (Gain access to all Strategic and Luxury Resources available on the map by any means.); Crossroads of the World (Possess a Trade Route with at least 8 Empires.); One True Faith (Lead a religion which 8 or more Empires follow.); Capital Punishment (Nuke a capital.); Big Red Button Masher (Nuke at least one City in three players' Empires in a single game.); Falling Out (Nuke the capital of an Empire that was an ally at the turn beginning.); Megalopolis (Possess a City that spans 20 Territories.); Gigalopolis (Possess a City that spans 30 Territories.); Seven Wonders of My World (Construct seven Cultural Wonders in a single game.)."
            ]
        },
        {
            "heading": "Victory Conditions & Completion",
            "body": [
                "A Friendly relationship with an Independent People, an early disembark on an uninhabited continent, and the many win-condition achievements - against 9 AI on the largest map, on the tiniest map, without military units, with one city, a sub-6-turn war, a no-loss war, keeping a culture for four eras and for every era, without declaring war, against an Expert Persona, with double the Fame of a survivor, six affinities in a game, no Civics Backlash, wonders through conquest, all Era Stars, five wars won by surrender, a battle at half combat strength, no Unrest, 10 and 1000 turns played, a multiplayer turn, reforesting 30 forests, and finishing with the Endless Mod.",
                "The achievements here: Sí, Patrón (Reach a \"Friendly\" relationship with an Independent People.); Row, Row, Row Your Boat (Disembark on an uninhabited continent before the Early Modern Era.); There Can Be Only One (Win a game against 9 AI at Humankind difficulty on the largest map.); Lord of the Flies (Win a game against 3 AI at Humankind difficulty on the tiniest map.); Peacemonger (Win a game without constructing a single military Unit, Scouts aside.); Spartan (Win a game with a single City.); The Six-Turns War (Win a war in less than 6 turns.); No Man Down (Win a war without losing any Units.); Rave Culture (Win a game while keeping a Culture for four Eras.); An Endless Civilization (Win a game while keeping the same Culture through every Era.); The Meek Shall Inherit the Earth (Win a game without declaring any wars.); Toe in the Water (Play 10 turns.); Heroic Patience (Play 1000 turns.); Flawless (Win a game against an Expert AI Persona.); Cartographer (Discover 5 Landmarks in a single game.); Behold! (Achieve twice the Fame of a surviving player at the game end.); Jack of All Trades (Play with six different Affinities in a single game.); They Know Not What They Ask (Win a game without accepting a Civics Backlash.); Culture Vulture (Obtain 3 Cultural Wonders through conquest.); Life of Luxury (Possess 5 Wondrous Luxury Resources.); How the Mighty Have Fallen (Sign an Alliance with a player who was once your Liege.); The Stars My Destination (Win a game by accumulating all Era Stars.); Ave Caesar! (Win 5 wars through your enemy's surrender.); Punching Up (Win a battle with less than half Combat Strength of your opponent.); The Land of Smiles (Win a game without Empire Stability falling into Unrest.); A Meeting of Minds (Finish a turn in multiplayer with at least one other human.); Rewilder (Regrow 30 Forests in a single game.); Close Encounters of the Endless Kind (Finish a game with the Official ENDLESS™ Mod activated.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play a long, standard game on a comfortable difficulty and use it to grind the lifetime feats - money accumulated, curiosities collected, cultural wonders, army hires, and the per-turn production milestones in a tall city.",
                "2. On that game, push hard on one affinity to hit 18 Era Stars of it, then plan subsequent games around the other five affinities.",
                "3. Do the battle and diplomacy feats (killstreaks, trade routes, nukes, the train network) during normal play.",
                "4. Do the stackable win-condition games: a peaceful tall game for Peacemonger / Spartan / An Endless Civilization / The Meek Shall Inherit the Earth / The Land of Smiles.",
                "5. Do the remaining single-restriction wins (the tiny-map and huge-map games, the Expert Persona and Metropolis-difficulty wins, the same-culture and all-Era-Stars wins) one per game.",
                "Tip: the 18-Era-Stars-per-affinity achievements are only realistic if you keep re-selecting cultures of that affinity every era - so plan your culture picks for the whole game around one affinity, and use the affinity's Legacy trait to snowball the relevant score (Industry for Builder, Influence for Aesthete, and so on)."
            ]
        }
    ]
};
