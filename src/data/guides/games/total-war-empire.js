// Total War: EMPIRE Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/total-war-empire.json), whose 30 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   10500 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "total-war-empire-achievement-guide",
    "category": "game",
    "gameSlug": "total-war-empire",
    "icon": "🎩",
    "title": "Total War: EMPIRE Achievement Guide",
    "summary": "A practical guide to all 30 Steam achievements in Total War: EMPIRE - none are hidden. Covers the campaign feats (diplomacy, assassins, tech, kill and region counts, the Road to Independence campaign, the difficulty clears and continental conquests) and the multiplayer battle achievements.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Total War: EMPIRE (Definitive Edition) has 30 Steam achievements and none of them are hidden. Twenty are campaign-side: diplomacy and treachery feats, 20 assassin and 20 duellist kills, stealing five technologies and researching all of them, lifetime kill counts (up to 1,000,000), region-capture counts (1, 10, 100), 30 missions completed, the Road to Independence campaign, completing the Grand Campaign on each difficulty, and conquering all of Europe, the Americas and India. The other ten are multiplayer battle achievements - playing and winning quick, ranked and classic battles, and 10 siege-attack, siege-defence and naval wins.",
                "Nothing is missable - campaigns restart freely and the kill, region and mission counters accumulate. The demanding parts are the hard-difficulty campaign clear, the three continental-conquest achievements (holding an entire continent at once), and the multiplayer win counts if the player population is thin.",
                "Tip: the three difficulty-clear achievements stack downward, so one hard-difficulty Grand Campaign win covers Accomplished, Veteran and Strategic Genius - and playing a strong western European nation (Great Britain or France) makes the continental-conquest achievements far easier since you start near two of the three continents' contested regions."
            ]
        },
        {
            "heading": "Campaign & Conquest",
            "body": [
                "The campaign feats: turning on five allies, five diplomatic-threat gains, 20 assassin and 20 duellist kills, stealing five technologies and researching all of them, the lifetime kill counts (100,000 / 500,000 / 1,000,000), region-capture counts (1 / 10 / 100), 30 missions completed, the Road to Independence campaign, the Grand Campaign completed on easy, medium and hard, and conquering all of Europe, the Americas and India.",
                "The achievements here: Perfidious Beast (Use treachery to best effect by turning against at least five allied nations and attacking them.); Observe Diplomatic Niceties (Use diplomatic threats to good effect by making gains from five separate negotiations.); Assassin! (Use your assassins to kill, in unlooked-for fashion, twenty men who hinder your plans.); The Efforts of Others (Successfully steal five technologies researched by other nations.); Affairs of Honour (Use your duellists to kill twenty men on the \"field of honour\"); Polymath (Have your natural philosophers and scientists research all the technologies available to your nation.); Bloody Madman (Carve a bloody path to victory: kill a hundred thousand enemies!); Tyrant and Ogre (Bring terror to the hearts of men: kill half a million enemies!); Conqueror of All (Be hailed as a true conqueror: kill a million enemies!); Founding Father (Take one region by conquest, somewhere in the world.); Expansionist Power (Capture ten regions, anywhere in the world.); A New Rome (Demonstrate outstanding ability, and capture one hundred regions.); Only Obeying Orders (Ensure that thirty missions, regardless of detail or type, are successfully brought to a conclusion.); American Hero (Complete the Road to Independence campaigns freeing the American colonists from British rule!); Accomplished Strategist (Complete the main campaign game on the easy difficulty setting.); Veteran Strategist (Complete the main campaign game on the medium difficulty setting.); Strategic Genius (Complete the main campaign game on the hard difficulty setting.); Emperor of Europe (Subdue and hold all the provinces and regions in Europe at the same time.); Master of the Americas (Conquer or control all the provinces and regions in the Americas at the same time.); Maharajah of the Indies (Have mastery over all the provinces and regions in India at the same time.)."
            ]
        },
        {
            "heading": "Multiplayer Battles",
            "body": [
                "The multiplayer battle achievements: 10 siege-attack and 10 siege-defence wins, 10 battles completed, a quick and a ranked battle completed, 10 and 50 total wins, 10 naval wins, taking part in a multiplayer battle, and 10 classic-battle wins.",
                "The achievements here: Into the Breach! (Attack! Attack! Attack! Win ten multi-player siege battles when commanding a besieging army.); The \"Chevaux de Frise\" (Defend, sir, defend! Win ten multi-player siege battles when commanding  the defenders of a fortress. ); Blooded (Demonstrate your sense of duty and honour: complete ten multi-player battles.); Drumbeat to Victory (Draw the sword and march onwards: complete one quick battle.); Whiff of Grapeshot (Gain some experience of combat: complete one ranked battle.); l337 Guard (Achieve victory in ten multiplayer battles, cutting a bloody path to greatness through your enemies' plans.); Marshal's Baton (Achieve victory in fifty multiplayer battles, dashing your enemies' hopes in pieces in the process!); Command of the Ocean (As a commanding admiral, win ten multi-player naval battles.); Raw Recruit (War sir, is a terrifying experience! Take part in a multiplayer battle.); Grand Tactician (Win ten classic multi-player battles.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play one Grand Campaign on hard difficulty as Great Britain or France - the hard win grants the medium and easy achievements, and a strong western nation is well placed for the continental conquests.",
                "2. On that campaign, do the diplomacy, assassin, duellist, technology and mission feats, and hold all of Europe, then all of the Americas, then all of India at some point (they do not need to be simultaneous with each other).",
                "3. Play the Road to Independence campaign for American Hero.",
                "4. Grind the lifetime kill and region-capture counts across your campaign play.",
                "5. Do the multiplayer battle achievements - the quick, ranked and classic battles, and the siege, land and naval win counts - ideally with a partner given the older player base.",
                "Tip: for the continental-conquest achievements, prioritise a naval buildup - EMPIRE's continents are separated by ocean, and a dominant fleet lets you shuttle a conquest stack between the Americas and India to grab the last regions before rebellions or the AI take them back."
            ]
        }
    ]
};
