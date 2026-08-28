// Mount & Blade II: Bannerlord Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/mount-and-blade-2-bannerlord.json), whose 50
//   achievements were sourced directly from Steam's own achievement
//   schema for appid 261550 via ISteamUserStats/GetSchemaForGame
//   (fetched through this app's own backend/services/steamApi.js). None
//   are hidden; every one ships a real, official Steam description,
//   quoted verbatim below (a few names/descriptions carry a trailing or
//   double space in Steam's text - preserved byte-for-byte). The
//   apiname of each achievement is its display name.
// - Sections group by what each achievement needs: the campaign and
//   kingdom arc, family and clan, economy and settlements, single-player
//   battle feats, tournaments and villainy, and multiplayer.
export const GUIDE = {
    "slug": "mount-and-blade-2-bannerlord-achievement-guide",
    "category": "game",
    "gameSlug": "mount-and-blade-2-bannerlord",
    "icon": "🐴",
    "title": "Mount & Blade II: Bannerlord Achievement Guide",
    "summary": "A practical guide to all 50 Steam achievements in Mount & Blade II: Bannerlord - none are hidden. The campaign and kingdom-building milestones, the family and clan achievements, the economy and settlement goals, the single-player battle feats, the tournament and villainy achievements, and the multiplayer set.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Mount & Blade II: Bannerlord has 50 Steam achievements and none are hidden. Most are single-player sandbox milestones - build a clan, take fiefs, found or join a kingdom, win a campaign victory - plus a set of battle feats, an economy block, and a group of multiplayer achievements.",
                "Nothing is missable within a campaign in the permanent sense, but a full completion is a very long game (or several): Conquer all Calradia (Supreme Emperor), the victory achievements, clan tier 6, a million denars trade profit and the 10,000-kill counters are each many hours.",
                "Difficulty and estimatedTime here are curatorial; the conquest and long-counter achievements dominate the time.",
                "Tip: run one long campaign aimed at Supreme Emperor - along the way it naturally gives you Landlord, Dynasty, My way, the victory achievement for your culture, the family achievements and most of the battle feats. Do the multiplayer block separately in Skirmish/Siege matches or Captain mode."
            ]
        },
        {
            "heading": "Campaign & Kingdom",
            "body": [
                "The main sandbox arc: assembling the Dragon Banner, reaching clan tier 6, the three faction victories (Barbarian, Imperial, and being a king with 21 clans), capturing a town solo, your first fief, proposing a policy, founding your own kingdom, conquering all Calradia, and finishing the tutorial.",
                "The achievements here: Bannerlord (Assemble Dragon Banner of Calradia.); Dynasty (Reach clan tier 6.); Freedom! (Barbarian victory.); I can do it (Capture a town on your own. ); Kingslayer (Kill a faction King or Queen in battle.); Landlord (Obtain your first fief.); Lawmaker (Propose and win a policy.); Long live the Empire! (Imperial victory.); My way (Start your own Kingdom.); Supreme Emperor (Conquer all Calradia.); Trained (Finish tutorial.); Veni vidi vici (Become a king with 21 clans under your rule.)."
            ]
        },
        {
            "heading": "Family & Clan",
            "body": [
                "The dynasty achievements: your first-born child, becoming a great-grandparent, and having a seventh child.",
                "The achievements here: Apple of my eye (First born child.); Great Granny (Become a great grandparent.); Minor Clan (Have your 7'th kid born.)."
            ]
        },
        {
            "heading": "Economy & Settlements",
            "body": [
                "The money and territory goals: owning a workshop and caravan at once, a million denars trade profit, 10,000 denars a day, 1,000 in daily tributes, completing all projects in a settlement, visiting every settlement, capturing 100 fortifications, clearing a hideout, and completing an issue in a hostile town.",
                "The achievements here: Entrepreneur (Own a workshop and a caravan at the same time. ); Explorer (Visit every settlement in the world in a game.); Fat Cat (Make 1 million denars trade profit.); King Solomon (Acquire 10000 denars a day.); Lawbringer (Clear a hideout.); Real Estate  (Assault and capture 100 fortifications.); The king is pleased (Get 1.000 in tributes in a single day.); Undercover (Complete an issue in a hostile town.); What have the Romans ever done for us? (Complete all projects in a settlement.)."
            ]
        },
        {
            "heading": "Single-Player Battle Feats",
            "body": [
                "The combat achievements: beating a much larger force, defeating an army with your party alone, 10,000 total troop kills, winning 100 battles against armies, 500 couched-lance and 500 mounted-ranged kills, raising a skill to 300, crafting a tier 6 sword, and defeating Radagos in a duel.",
                "The achievements here: Against all odds (Defeat a force that has 500 more troops than you); Crush your enemies (Defeat 10.000 troops.); Duelist (Defeat Radagos in a duel.); Horde breaker (Defeat an Army with your party alone.); Know your enemy (Win 100 battles against enemy armies.); Lance-a-lot (Kill 500 troops with a couched weapon while on horseback. ); Mastery (Increase any skill to 300.); Mounted Archery (Kill 500 troops with range weapons while on horseback. ); Swordbearer (Craft a tier 6 sword.)."
            ]
        },
        {
            "heading": "Tournaments & Villainy",
            "body": [
                "The tournament and dark-deed achievements: winning 100 tournaments, becoming the tournament board leader, repelling a wall assault, and the execution-revenge chain (marry an executed lord's widow, execute a lord you have -100 relations with, execute a lord who executed your clan member).",
                "The achievements here: Best served cold (Execute a lord that has executed one of your clan members.); Crowdfunded (Win 100 tournaments.); God of the Arena (Become the leader of the tournament board.); Heartbreaker (Marry the widow of a lord or lady you personally executed.); I spit on your grave (Execute a lord that you have -100 relations with.); This Is Our Land (Repel an attack on the walls.)."
            ]
        },
        {
            "heading": "Multiplayer",
            "body": [
                "The multiplayer set: Captain-mode kill counts, boulder and mangonel kills, a 200 m headshot, 100 ranged headshots, an all-weapon-type skirmish round, charge-damage and chain-attack kills, kicking a player off a wall, and commandeering a mount for 5 kills.",
                "The achievements here: Butcher of Calradia (Kill 10.000 other opponents in captain mode, with your troops.); Butterlord (Have 100 butters in your inventory.); Catch (Kill an enemy player with a boulder); Crackshot (Score a headshot from 200 meters away.); Headhunter (Kill 100 enemy players with headshots with ranged weapons in multiplayer.); Jack of All Trades (Get a kill with a melee weapon, mounted melee, ranged, mounted range, and cauch lance in one skirmish round. ); Roadkill (Kill 100 enemies with charge damage in multiplayer.); Slice n dice (Kill 10 enemies with a successful chain attack combo.); Strike! (Kill 3 enemy players with a single mangonel shot.); This is Sparta! (Kick an enemy player off a wall to death.); Ride it like you stole it (Spawning on foot, commandeer a mount and kill 5 enemy players without dying.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Start one campaign as your preferred culture and play toward Supreme Emperor - this run should organically clear the Campaign & Kingdom block, Family & Clan, most of Economy & Settlements, and the Single-Player Battle Feats.",
                "2. Deliberately do the one-offs during that run: assemble the Dragon Banner early, craft a tier 6 sword, duel Radagos, clear a hideout, and take the revenge-execution achievements when the situation allows.",
                "3. Grind tournaments for Crowdfunded (100 wins) and God of the Arena whenever you pass through a town with one.",
                "4. Do the Multiplayer block in Skirmish, Siege and Captain matches - most are single-match feats with a cooperative or bot-heavy lobby.",
                "Tip: the 10,000-kill counters (Crush your enemies, Butcher of Calradia) accumulate across the whole game - by the time you have conquered Calradia they are usually done, so do not grind them on purpose until the end."
            ]
        }
    ]
};
