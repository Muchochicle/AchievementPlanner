// Tomb Raider (2013) Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/tomb-raider-2013.json), whose 50 achievements
//   were sourced directly from Steam's own achievement schema for appid
//   203160 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js). 47 of 50 ship a real,
//   official Steam description, quoted verbatim below (several names and
//   descriptions carry a trailing space in Steam's text - preserved
//   byte-for-byte).
// - The 3 hidden achievements ship no Steam description; they are
//   single-player secrets (Boom Goes the Dynamite, Crab Cakes,
//   Chatterbox). Their conditions here are curatorial, cross-checked
//   against PowerPyx and GameTipCenter.
export const GUIDE = {
    "slug": "tomb-raider-2013-achievement-guide",
    "category": "game",
    "gameSlug": "tomb-raider-2013",
    "icon": "🏹",
    "title": "Tomb Raider (2013) Achievement Guide",
    "summary": "A practical guide to all 50 Steam achievements in Tomb Raider (2013) - the collectible percentages, the progression and upgrade goals, the combat feats, the optional tombs / challenges / completion achievements, the three hidden single-player secrets, and the multiplayer set.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Tomb Raider (2013) has 50 Steam achievements, 3 of them hidden (all single-player secrets, despite their multiplayer-style apinames). The single-player set is generous: collectible percentages, weapon-kill and combat feats, all optional tombs and challenges, and completing the game. There is also a full multiplayer block from the game's now-quiet online mode.",
                "Nothing is missable in single-player - the island is a hub-and-spoke of revisitable areas and chapter select fills in the rest - except Chatterbox (all seven Endurance-crew conversations in one playthrough) and the two other hidden secrets, which are easiest to get on a first run with a guide.",
                "Tip: play the story once grabbing conversations, the FeeFee crab and the dynamite shot as you pass them, then use \"Return to a previous area\" for collectibles, tombs and challenges. The multiplayer achievements need a boosting partner or a private lobby to be realistic now."
            ]
        },
        {
            "heading": "Collectibles",
            "body": [
                "The collectible percentage achievements: documents (25%, 75%), relics (25%, 75%), GPS caches (25%, 75%), and finding all documents, relics and GPS caches (No Stone Left Unturned).",
                "The achievements here: Bookworm  (Find 25% of all documents. ); Historian  (Find 75% of all documents. ); Relic Hunter  (Collect 25% of all relics. ); Archaeologist  (Collect 75% of all relics. ); Looking for Trouble  (Find 25% of GPS caches. ); Bag Full O' Cache  (Find 75% of GPS caches. ); No Stone Left Unturned  (Find all documents, relics and GPS caches. ); Scrounger  (Collect 5000 pieces of salvage. )."
            ]
        },
        {
            "heading": "Progression & Upgrades",
            "body": [
                "5,000 salvage, looting 200 enemies, all skills in one category and in all categories, fully modding and upgrading one weapon and all weapons, and the animal-hunt achievements (10 large, 10 small, 10 flying).",
                "The achievements here: Picky  (Loot 200 enemies. ); Clever Girl  (Purchase all skills in one category. ); Lethal  (Purchase all skills in all categories. ); Now We're Getting Serious  (Fully mod and completely upgrade any weapon. ); The Professional  (Fully mod and completely upgrade all weapons. ); Big Game Hunter  (Kill and loot 10 large animals (deer, boar, wolves). ); Tastes Like Chicken!  (Kill and loot 10 small animals (rabbits, chickens, rats). ); Feather Duster  (Kill and loot 10 flying animals (crows and gulls). )."
            ]
        },
        {
            "heading": "Combat Feats",
            "body": [
                "50 headshots, weapon-kill counts (bow, rifle, shotgun, pistol), the dynamite-drop double-kill, 5 rope-pull ledge kills, 25 unaware kills, 15 finishers, 10 zip-line shots, and 25 dodge-counter incapacitations.",
                "The achievements here: Sharp Shooter  (Perform 50 headshot kills in the single player campaign. ); Predator  (Kill 50 enemies with the bow. ); Equalizer  (Kill 75 enemies with the rifle. ); Widowmaker  (Kill 40 enemies with the shotgun. ); Gunslinger  (Kill 35 enemies with the pistol. ); Epic Fumble  (Force an enemy to drop dynamite that kills two people when exploding. ); Get Over Here!  (Rope pull 5 enemies off edges. ); Opportunist  (Kill 25 unaware enemies. ); Down and Dirty  (Perform 15 finishers. ); Deadeye  (Shoot 10 enemies off zip lines. ); Former Adventurer  (Incapacitate 25 enemies with dodge counter. )."
            ]
        },
        {
            "heading": "Tombs, Challenges & Completion",
            "body": [
                "Completing one optional tomb and all of them, completing one challenge and all challenges, and completing the game (A Survivor Is Born).",
                "The achievements here: One Smart Cookie  (Complete one optional tomb. ); Intellectually Superior  (Complete all optional tombs. ); Unfinished Business  (Complete one challenge. ); Inconceivable!  (Complete all challenges. ); A Survivor Is Born  (Complete the game. )."
            ]
        },
        {
            "heading": "Hidden Achievements",
            "body": [
                "Three achievements are hidden. Despite their apinames they are single-player secrets:",
                "The achievements here: Boom Goes the Dynamite  (Shoot a thrown bundle of dynamite out of the air during the Shantytown rooftop ambush.); Crab Cakes  (Shoot the crab with a pink heart on its shell (FeeFee), on the beach during the \"Gone Missing\" mission.); Chatterbox  (Complete all seven conversations with the Endurance crew in a single playthrough.)."
            ]
        },
        {
            "heading": "Multiplayer",
            "body": [
                "The multiplayer set: playing and winning every mode, turret and melee kills, zip-line and snare-trap kills, surviving explosions, reviving teammates, being the sole survivor, reaching level 10 and 60, buying a character and every upgrade.",
                "The achievements here: Adventurer  (Complete a match in all multiplayer modes. ); Artilleryman  (Kill 20 enemy players in multiplayer using a turret. ); Down Boy!  (Kill a zip-lining enemy player in multiplayer. ); Entrapment  (Catch a player in a snare trap in multiplayer. ); Escapist  (Survive 10 explosions in multiplayer. ); Good Samaritan  (Revive a teammate in a multiplayer match. ); I'm all that!  (Win a ranked match in every multiplayer mode. ); Sole Survivor  (In multiplayer, be the only player on your team that isn't dead or downed. ); Lights Out  (Kill 10 multiplayer enemies using your melee attack. ); Master Blaster  (Kill 2 multiplayer enemies with a single explosive. ); Monkey Around  (In multiplayer, escape death 3 times by using the rope ascender. ); Narcissistic  (Purchase a new multiplayer character. ); On My Way Up  (Reach level 10 in multiplayer. ); Shopaholic  (Buy every upgrade and character in multiplayer. ); True Commitment  (Reach level 60 in multiplayer. )."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the story once with a guide: complete every Endurance-crew conversation (Chatterbox), shoot the airborne dynamite in Shantytown (Boom Goes the Dynamite ), and shoot FeeFee the heart-shelled crab on the beach (Crab Cakes ).",
                "2. Use area return to sweep documents, relics and GPS caches (No Stone Left Unturned), complete all optional tombs (Intellectually Superior) and all challenges (Inconceivable!).",
                "3. Finish the progression achievements (all skills, all weapon upgrades, the animal hunts) and the combat feats along the way.",
                "4. Do the multiplayer block last with a boosting partner or private lobby - most are single-match feats plus the level 60 grind.",
                "Tip: Chatterbox is the only real single-player missable - the seventh conversation is easy to walk past, so talk to your crewmates every time the prompt appears and check a guide's conversation checklist before the final act."
            ]
        }
    ]
};
