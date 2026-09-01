// GreedFall Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/greedfall.json), whose 63 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   606880 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 25 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (PowerPyx / Game8 / PlayStationTrophies / TrueAchievements) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "greedfall-achievement-guide",
    "category": "game",
    "gameSlug": "greedfall",
    "icon": "🏴‍☠️",
    "title": "GreedFall Achievement Guide",
    "summary": "A practical guide to all 63 Steam achievements in GreedFall (25 hidden). Covers the Teer Fradee story and its branching coup and election outcomes, the five endings, the companion quests and romances, the five Guardian superbosses, the skill/talent/attribute trees, and the De Vespe Conspiracy DLC. Twenty-five of the achievements are hidden - the story beats, endings and Guardians - and their unlock conditions are researched from community 100% guides.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "GreedFall has 63 Steam achievements and 25 are hidden. Eleven are main-story beats - reaching Teer Fradee, the Congregation's secret, preventing the coup, the Treason betrayal, saving Theleme and San Matheus during the coup, Glendan's test, freeing Constantin, influencing the election, the En on mil frichtimen shrine, and discovering Constantin's actions. Five are the mutually-exclusive endings (A Better World, Back to the Roots, A Big Step Towards Peace, Island for Sale, New Gods) plus 'All for one, one for all!' for uniting every faction. Five more are the region Guardian superbosses, and three come from the De Vespe Conspiracy DLC.",
                "The catalog marks it difficulty 3. The endings and several story beats are mutually exclusive per playthrough, but you can save before the final decisions and reload to see all five endings and the faction-outcome achievements in one run. The main efforts are 'A passion for extreme' (finish on Extreme difficulty) and the full skill/talent/attribute trees.",
                "Tip: keep a save right before the point of no return - the five endings and the faction-save achievements ('In the name of the Enlightened', 'A preserved Alliance') can all be collected by reloading that save and making different choices."
            ]
        },
        {
            "heading": "Main Story, Coup & Endings",
            "body": [
                "Reaching Teer Fradee, the Congregation's secret, preventing the coup, the Treason betrayal, saving Theleme and San Matheus during the coup, Glendan's test, freeing Constantin, influencing the election, the En on mil frichtimen shrine, discovering Constantin's actions, uniting all factions, and the five endings.",
                "The achievements here: All sails set! (Travel to Teer Fradee (finish the prologue).); The Prince's secrets (Discover the secret of the Congregation and your origins.); Missed coup (Prevent the Coin Guard from attempting a coup.); Betrayal in blood (Kill the companion who betrays you during the Treason quest.); In the name of the Enlightened (Save Theleme during the coup attempt.); A preserved Alliance (Save San Matheus during the coup attempt.); Waterproof (Pass Glendan's test.); Outside the stone prison (Free Constantin from the claws of Vinbarr.); Influence game (Influence the election so your favoured candidate becomes high king.); En on míl frichtimen (Enter the shrine and speak to En on mil frichtimen.); Something is rotten (Discover Constantin's actions.); All for one, one for all! (Unite all of the factions against Constantin.); A better world (Reach the 'A better world' ending (reconcile all factions).); Back to the roots (Reach the 'Back to the roots' ending (the natives banish the others from the island).); A big step towards peace (Reach the 'A big step towards peace' ending (kill Constantin, missing one or two alliances).); Island for sale (Reach the 'Island for sale' ending (favour the old world over the natives).); New gods (Reach the 'New gods' ending (unite with Constantin).)."
            ]
        },
        {
            "heading": "Difficulty, Companions & Combat",
            "body": [
                "An Extreme-difficulty clear, 20 side quests, all companion quests, the four romances, the arena challenges, full reputation with the natives, Theleme and the Bridge Alliance, all camp fires, the melee/magic/gun/trap/poison damage counts, 50 potions, 30 assassinations, and the five region Guardian superbosses.",
                "The achievements here: A passion for extreme (Complete the game in extreme mode); Serve to convince (Complete 20 secondary quests); Friendship above all (Finish all companion quests); Guardian of love (Be in a relationship with Kurt); Minundhanem (Be in a relationship with Siora); Love and botany (Be in a relationship with Aphra); Love and the sea (Be in a relationship with Vasco); Arena Excellence (Succeed in all the challenges of the arena); Carants (Have a good reputation with the natives); Thélème's chosen (Have a good reputation with Thélème); Favoured with the Bridge Alliance (Have a good reputation with the Bridge Alliance); Explorer (Find and set all camp fires); Melee virtuoso (Do damage 500 times with a melee weapon); War mage (Do damage 500 times with an offensive spell); Musketeer (Do damage 300 times with shots); Deceitful (Do damage 200 times with traps); Poisoning artist (Poison enemies 100 times); Another sip? (Use 50 potions); Shadow blade (Use your assassination skills 30 times); Master of the woods (Defeat the forest region Guardian (a Nadaig superboss).); King of the peaks (Defeat the mountain region Guardian (a Nadaig superboss).); Swamp creature (Defeat the swamp region Guardian (a Nadaig superboss).); The wrecker (Defeat the coastal region Guardian (a Nadaig superboss).); The legend of the plains (Defeat the plains region Guardian (a Nadaig superboss).)."
            ]
        },
        {
            "heading": "Progression, Crafting & DLC",
            "body": [
                "Hunting animals, 600 monsters, 300 humans, 100 containers, 200 ingredient collections, a legendary item, the full warrior/technique/magic skill trees, talent and attribute levels, 20 lockpicks, 10 equipment and 10 alchemy crafts, and the De Vespe Conspiracy DLC (bringing the chest to Aurelia, ending her schemes, and all the DLC notes).",
                "The achievements here: Hunting with hounds (Hunt 20 animals); The monsters' nightmare (Kill 600 monsters); Coercive diplomacy (Kill 300 humans); Full pockets (Empty 100 containers); Curiosity cabinet (Collect ingredients 200 times); Worthy of legends (Acquire a legendary item); In the footsteps of the masters (Unlock a new skill); The art of war (Unlock all the warrior skills); Incomparable technique (Unlock all Technical skills); Magical perfection (Unlock all Magic skills); Full of talent (Allocate a new talent point); Expertise (Unlock the 3 levels of a talent); Cat burglar (Pick 20 locks); Artisan (Craft 10 equipment improvements); Alchemist (Craft 10 alchemical elements); On the path to power (Allocate a new attribute point); In search of perfection (Unlock the 5 levels of an attribute); Wildcat Hunter (Kill 20 Egsregatts); Unique Weapons (Find all unique weapons hidden in the Aidág ol creidaw region); A Dangerous Fiancée ((De Vespe Conspiracy DLC) Bring the chest back to Aurelia De Vespe.); Cancelled Wedding ((De Vespe Conspiracy DLC) Put an end to Aurelia De Vespe's schemes.); De Vespe Secret Archives ((De Vespe Conspiracy DLC) Collect all of the notes during the DLC quest.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the main story, keeping a save before every major faction decision and the point of no return.",
                "2. Complete every companion quest and at least one romance, and do 20 side quests.",
                "3. Defeat the five region Guardian superbosses and clear the arena.",
                "4. Fill the skill, talent and attribute trees, and do the crafting and combat-count achievements.",
                "5. Reload your pre-finale save to see all five endings and the faction-save achievements, and play the De Vespe Conspiracy DLC.",
                "Tip: 'A passion for extreme' (finish on Extreme difficulty) is best as its own focused run with a strong build - trying to combine it with a first, exploratory playthrough makes the boss fights punishing."
            ]
        }
    ]
};
