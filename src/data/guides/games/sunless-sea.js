// Sunless Sea Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/sunless-sea.json), whose 54 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   304650 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 5 hidden achievement(s) ship no official description from
//   Steam; their requirements below are curatorial, researched from public
//   community guides.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "sunless-sea-achievement-guide",
    "category": "game",
    "gameSlug": "sunless-sea",
    "icon": "⚓",
    "title": "Sunless Sea Achievement Guide",
    "summary": "A practical guide to all 54 Steam achievements in Sunless Sea - 5 are hidden. Covers death and endurance milestones, curses and legacy playthroughs, specific playstyle challenges and underwater perils, port discoveries, and the 5 hidden late-game and secret achievements.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Sunless Sea has 54 Steam achievements, and 5 are hidden. The list covers death (dying is a core, expected part of the roguelike-lineage structure here) and endurance milestones, the game's three signature Curses and five Legacy choices for starting a new captain, playstyle-restriction achievements (finishing without saving manually, without choosing a past), diving beneath the waves and surviving its perils, discovering every port on the map, and the deeper Zubmariner-expansion content (underwater currents, abyssal rituals, the Zubmariner ambition). The 5 hidden achievements are all late-game or secret discoveries - a hidden map location, a completed side-story, and a rare recruitable crew member.",
                "Nothing is missable across your overall save - death restarts your lineage but Sunless Sea is built around that cycle, and most achievements (curses, legacies, port discoveries, deaths) accumulate across every captain you ever play rather than needing to happen in one unbroken run. The genuine long pole is Ten Years at Zee (10 years in a single unbroken lineage), which needs a long, careful, un-died run rather than any specific trick.",
                "Tip: the Legacy achievements (Rival, Pupil, Shipmate, Correspondent, Salvager) are each earned just by choosing that legacy when starting a new game after a captain dies - if you are chasing all five, deliberately pick a different legacy each time you start a fresh captain rather than always defaulting to the same one."
            ]
        },
        {
            "heading": "Death & Endurance",
            "body": [
                "Dying for the first, fifth, and tenth time in an unbroken lineage, sending your child to zee, reaching Terror 90 and then 100, spending 1, 5, and 10 years at zee, and acquiring the Eschatologue-class Dreadnaught.",
                "The achievements here: Sink Beneath the Waves (Die for the first time); Sink Beneath the Waves. Again. (Die 5 times in an unbroken lineage); Never Stop Sinking... (Die 10 times in an unbroken lineage); Zee Fever (Send your child to zee); Thou, All-Shaking Thunder (Let your terror reach 90); Lose your Mind (Let your terror reach 100); One Year at Zee (Spend one year out at zee in an unbroken lineage); Five Years at Zee (Spend five years out at zee in an unbroken lineage); Ten Years at Zee (Spend ten years out at zee in an unbroken lineage); We're Gonna Need a Bigger Boat (Acquire the Eschatologue-class Dreadnaught)."
            ]
        },
        {
            "heading": "Curses, Legacy & Reputation",
            "body": [
                "Wooing a sweetheart in London, suffering Salt's, Stone's, and Storm's Curses, downloading new stories, reaching Admiralty's Favour 10 and Antiquarian 10, and taking each of the five Legacies (Rival, Pupil, Shipmate, Correspondent, Salvager).",
                "The achievements here: Sweet Sorrow (Woo a sweetheart in London); Salt's Curse (Suffer Salt's Curse); Stone's Curse (Suffer Stone's Curse); Storm's Curse (Suffer Storm's Curse); Open Your Ears (Download new stories); Rules the Waves (Achieve Admiralty's Favour 10); Old Unhappy Far-Off Things (Achieve Antiquarian 10); Rival (Take the Rival legacy); Pupil (Take the Pupil legacy); Shipmate (Take the Shipmate legacy); Correspondent (Take the Correspondent legacy); Salvager (Take the Salvager legacy)."
            ]
        },
        {
            "heading": "Playstyle Challenges & Underwater Perils",
            "body": [
                "Creating an ironclad will, completing the game without manually saving, completing it without ever choosing a past, venturing beneath the waves, dying of suffocation, being killed by an underwater creature or the Constant Companion, coming face to face with the Constant Companion, and escaping underwater combat by resurfacing.",
                "The achievements here: Sound Mind? (Create an ironclad will); I am the Captain of my Soul (Complete the game without saving manually); A Past Wreathed in Shadows (Complete the game without ever choosing a past); Frightful, sheer, no-man-fathomed (Venture beneath the waves); Death By Water (Die of suffocation); Consider Phlebas (Be killed by an underwater creature); Ofermod (Be killed by the Constant Companion); What lies beneath (Come face to face with the Constant Companion); A buoyant escape (Escape underwater combat by resurfacing)."
            ]
        },
        {
            "heading": "Port Discoveries",
            "body": [
                "Discovering each of the eleven named ports: Aigul, Anthe, Undercrow, Dahut, The Gant Pole, Hideaway, Low Barnet, Nook, Rosegate, Scrimshander, and Wrack.",
                "The achievements here: No regrets (Discover Aigul); Those are pearls that were his eyes (Discover Anthe); Under the zee (Discover Undercrow); The beauty of the deep (Discover Dahut); Thanks for all the fish (Discover The Gant Pole); Leviathan (Discover Hideaway); The Bell Tolls (Discover Low Barnet); The dragon in the zee (Discover Nook); Rosewater sailor (Discover Rosegate); His bones in whispers (Discover Scrimshander); Knife, Cup and Bone (Discover Wrack)."
            ]
        },
        {
            "heading": "Deep Zee & Endgame",
            "body": [
                "Using underwater currents, avoiding death from the Unexploded Unclear Bomb, using an oasis to raise oxygen, accepting a power of the deep zee, performing an abyssal ritual to encounter Lady Black, completing the Zubmariner ambition, and collecting all three Drownie songs.",
                "The achievements here: A current under zee (Use underwater currents to bear you on your way); Under pressure (Avoid being killed by the Unexploded Unclear Bomb); Depth charge (Use an oasis to increase your oxygen levels); A zee-change (Accept a power of the deep zee); The Lady's Parlour (Perform an abyssal ritual to encounter Lady Black); Romans 6:9 (Complete the Zubmariner ambition); A Drownie devotee (Collect all of Drownie Love-song, Drownie Counterpoint and Drownie Hymn)."
            ]
        },
        {
            "heading": "Hidden Achievements",
            "body": [
                "Sunless Sea's 5 hidden achievements are late-game or secret discoveries, sourced from community guides (TrueAchievements, ChapterCheats, the Sunless Sea Fandom wiki):",
                "HE SUN THE SUN THE SUN T: Find the Dawn Machine, a location hidden in the south-west corner of the map.",
                "The Fall of the House: See the conclusion of the Hunter's Keep storyline, a multi-stage quest chain that unfolds at that port.",
                "Roaring Rise: Discover \"The Eye\" - a hidden location in a randomized 5-tile purple map area. The correct tile shows a \"Something forgotten is here\" message; visiting it reveals a massive closed eye beneath the waves that opens when found. The tile layout is randomized, so checking every tile in the area (and possibly reloading) may be necessary.",
                "The Ascent of Man: Reach the surface by sailing the Cumaean Canal, which needs roughly 22 Fuel and 2 Supplies to attempt.",
                "Come Closer: Trigger the \"An Old Friend\" random event by keeping your Terror above 75 while carrying a Tattoo, then accept the Lady in Lilac aboard your ship. She leaves if Terror drops below 26, so keep Terror elevated to retain her."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play normally and let death happen - Sink Beneath the Waves, then 5, then 10 deaths in an unbroken lineage will happen naturally across your early captains.",
                "2. Push endurance milestones in a single lineage: 1, 5, and 10 years at zee, and let your Terror climb to 90 and then 100 at least once.",
                "3. Explore the map to discover every port for the twelve Discover achievements, and dive beneath the waves for the underwater achievements (Frightful sheer no-man-fathomed, the various death-by-underwater-creature achievements, escaping combat by resurfacing).",
                "4. Across multiple captains, pick a different Legacy each time you start fresh (Rival, Pupil, Shipmate, Correspondent, Salvager), and suffer each of the three Curses (Salt, Stone, Storm) at some point.",
                "5. Attempt the playstyle-restriction achievements deliberately: finish without saving manually (Invictus), and finish without ever choosing a past (A Past Wreathed in Shadows).",
                "6. Explore the deeper Zubmariner content - underwater currents, the Unexploded Unclear Bomb, abyssal rituals, and the Zubmariner ambition - and keep an eye out for the hidden achievements: the Dawn Machine in the map's south-west corner, the conclusion of the Hunter's Keep storyline, the randomized \"Eye\" location, reaching the surface via the Cumaean Canal, and recruiting the Lady in Lilac at high Terror.",
                "Tip: the hidden Eye achievement is genuinely RNG-dependent (a randomized 5-tile area where only one tile has the location), so if you are specifically hunting for it, be prepared to check the area on multiple visits or reload if you do not find it right away."
            ]
        }
    ]
};
