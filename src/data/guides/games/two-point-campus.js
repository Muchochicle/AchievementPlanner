// Two Point Campus Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/two-point-campus.json), whose 48 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1649080 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 2 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (PowerPyx / Game8 / PlayStationTrophies / TrueAchievements) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "two-point-campus-achievement-guide",
    "category": "game",
    "gameSlug": "two-point-campus",
    "icon": "🎓",
    "title": "Two Point Campus Achievement Guide",
    "summary": "A practical guide to all 48 Steam achievements in Two Point Campus (2 hidden). Covers the career star ratings, the student, staff and club milestones, the research and pastoral-care totals, the Two Point Hospital crossover illnesses, and all three paid DLCs (Space Academy, School Spirits and Medical School). Two of the achievements are hidden - one Space Academy goal and one Medical School gag - and their conditions are researched from community 100% guides.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Two Point Campus has 48 Steam achievements and 2 are hidden. The hidden two are 'The Good Stuff' (run 50 A-Grade Cheese-Moongery classes, from the Space Academy DLC) and 'Wham & Blast' (have a treatment machine explode, from the Medical School DLC). Everything visible is the base game and DLC content: earning 1 to 36 stars across your career, 1,000 graduations, training world-class staff, big club and friendship milestones, 100 machine upgrades, 50 research projects, the Two Point Hospital crossover illnesses, set-pieces like The Grand Joust and the Blundergrad mole, and the Space Academy, School Spirits (ghosts) and Medical School DLC objectives.",
                "The catalog marks it difficulty 3. It is a long completion rather than a hard one - 'PhDarn Good' wants all 36 career stars, 'Cap & Crown' wants 1,000 graduations, and several achievements need the three paid DLCs. Nothing is missable; you can return to any campus and keep playing.",
                "Tip: leave your best, most profitable campuses running in the background while you work through new levels - the cumulative totals ('Cap & Crown', 'Super Group of Friends', the 100,000-from-research goal) tick up on their own on an established campus."
            ]
        },
        {
            "heading": "Stars & Career",
            "body": [
                "Earning 1 star in Freshleigh Meadows, 12 / 24 / 36 stars across your career, 1 star in the TPU level, and having your first student graduate.",
                "The achievements here: Campus Management 101 (Earn 1 star in Freshleigh Meadows); Bachelor of Smarts (Earn 12 stars across your career); Masters Minded (Earn 24 stars across your career); PhDarn Good (Earn 36 stars across your career); Finishing School (Earn 1 star in TPU); Take a Scroll (Have a student graduate)."
            ]
        },
        {
            "heading": "Students, Staff & Clubs",
            "body": [
                "Capturing bookworms, training staff (including world-class and Wizardry qualifications), 1,000 graduations and 50 dropouts, big club and friendship / soul-mate milestones, 100 machine upgrades, cleaning 1,000 litter, cheeseball wins and losses, 50 research projects and 100,000 from research, 1,000 kudosh, 100 pastoral issues, the Two Point Hospital crossover illnesses, The Grand Joust, the Blundergrad mole, a graduate in every course, and hiring 100 staff.",
                "The achievements here: Bookworm Collector (Capture a bookworm); A Little Wiser (Train a staff member); Cap & Crown (Have 1,000 students graduate); Bookworm Fanatic (Capture 50 bookworms); Like a Millionaire (Have 50 students drop out); A Lot Wiser (Train a staff member to level 10 in a single course-specific qualification); Enough Experts (Train a staff member to level 5 in each course-specific qualification); Club Sandwich (Have a club with 5 members); The Populous Kids (Have 100 members in a single club); Club Dub (Have a club reach level 10); Super Group of Friends (Develop 500 friendships); Best Friends (Have students become best friends); Soul Mates (Develop 50 soul mates); Spanner That Works (Upgrade 100 machines); Magic Staff (Train a staff member to level 5 in the Wizardry qualification); Dropped on OUR Floor (Clean up 1,000 bits of litter); You Win Some (Win 15 cheeseball matches); You Lose Some (Lose 5 cheeseball matches); Jumbo Mega Team (Win a cheeseball match against the Jumbo Mega Team); Do Your Homework (Complete 50 research projects); Smart Money (Earn 100,000 from research projects); Unlocked & Loaded (Earn 1,000 kudosh); We're Listening (Resolve 100 pastoral issues); There's Always a Hospital (Treat 100 medical issues); Recurring Conditions (Treat 1 case of each illness from Two Point Hospital); Huzzah! (Defeat Lord Blaggard in The Grand Joust); Track-a-Mole (Expose a mole in Blundergrad); The Academic Rainbow (Have a student graduate in each course); Staff Boom (Hire 100 staff members)."
            ]
        },
        {
            "heading": "DLC: Space, Ghosts & Medical School",
            "body": [
                "Space Academy (a star on Cheesy Heap: Delta-Rye, 100 space rocks, 10 Space Battles, all rockets, and the hidden 'The Good Stuff' for 50 A-Grade Cheese-Moongery classes), School Spirits (a star on Lifeless Estate, all its plots, 300 ghosts captured), and Medical School (a star on Pointy Peak, a 15-cure streak, 10 patient research projects, every illness treated, and the hidden 'Wham & Blast' for an exploding treatment machine).",
                "The achievements here: Space Cadet (Earn 1 star on Cheesy Heap: Delta-Rye); Say, Cheese? (Mine 100 space rocks); Galactic Domination (Win 10 Space Battle competitions); All Aboard (Unlock all rockets and reach maximum student transport capacity); The Good Stuff (Space Academy DLC: run 50 A-Grade Cheese-Moongery classes.); Schools 'n Ghosts (Earn 1 star on Lifeless Estate); R.I.P & Quiet (Unlock all plots on Lifeless Estate); Haunted Housework (Capture 300 ghosts); The Old Gold Standard (Earn 1 star on Pointy Peak); Curing Spree! (Cure 15 patients in a row); Your Own Medicine (Complete 10 patient research projects); One Wise Cure-All (Successfully treat every patient illness); Wham & Blast (Medical School DLC: have a treatment machine explode (let its maintenance fall to 0% by removing your janitors).)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the campaign, earning stars on every level up to all 36.",
                "2. Let the cumulative totals (graduations, friendships, machine upgrades, research) build on your established campuses.",
                "3. Do the Two Point Hospital crossover illnesses and the set-pieces (The Grand Joust, the Blundergrad mole).",
                "4. Play the Space Academy and School Spirits DLC levels and their objectives.",
                "5. Play the Medical School DLC, and deliberately set up 'Wham & Blast' by firing your janitors on a saved map.",
                "Tip: for 'The Good Stuff' (50 A-Grade Cheese-Moongery classes), build a strong Cheese-Moongery classroom on a Space Academy campus early and keep it staffed with your best-qualified teacher - the count accumulates across the whole campaign."
            ]
        }
    ]
};
