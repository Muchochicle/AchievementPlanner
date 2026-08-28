// DAVE THE DIVER's Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/dave-the-diver.json), whose 43 achievements
//   were sourced directly from Steam's own achievement schema for appid
//   1868140 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js) - 39 of 43 ship a real,
//   official Steam description, quoted directly below.
// - The four hidden achievements (Ration Eater, Dev Killer, Creature
//   Hunter, God of Lightning) ship no Steam description. Their unlock
//   conditions here are curatorial, cross-checked against a Steam
//   Community 100% guide and the DAVE THE DIVER wiki.
// - The grouping (main-story progression, the sushi restaurant and
//   Cooksta ranks, the partner villages and farms, moment-to-moment
//   diving/hunting/collecting milestones, then the secrets) is read
//   directly from what each achievement's own description requires.
//   Ending-related achievements are described plainly without spoiling
//   the story beats around them, per this catalog's convention.
export const GUIDE = {

    slug: "dave-the-diver-achievement-guide",
    category: "game",
    gameSlug: "dave-the-diver",
    icon: "🤿",
    title: "DAVE THE DIVER Achievement Guide",
    summary: "A practical guide to all 43 Steam achievements in DAVE THE DIVER - the main-story beats, the Bancho Sushi and Cooksta ranks, the partner farms, and the diving, hunting, and collecting milestones.",

    relatedSlugs: ["achievement-completion-and-tracking", "understanding-achievement-availability"],

    sections: [

        {
            heading: "Overview",
            body: [
                "DAVE THE DIVER has 43 Steam achievements. Four are hidden (Ration Eater, Dev Killer, Creature Hunter, God of Lightning) and the rest are visible progression and milestone unlocks.",
                "Almost everything here comes naturally from finishing the story and then tidying up: nothing is on a hard timer, and the game keeps running after the credits so you can finish any collection or rank goal you left open.",
                "Tip: the loop is dive by day, run the sushi bar by night. Don't rush to the deep zones - upgrading your gun, oxygen tank, and carry weight first makes every later dive (and most of this list) far less painful."
            ]
        },

        {
            heading: "Main-Story Progression",
            body: [
                "These unlock automatically as the story advances: Bancho Sushi is Back! (fix the sushi restaurant), Undersea Gunslinger (finish the gun tutorial), New Undersea Friend (complete the Dolphin's request), Better Equipment (make your first equipment upgrade), Undersea Civilization! (discover the undersea village), and Deep-sea Diver (enter the Deep Sea for the first time).",
                "Later story gates: A Dark and Cold Place (discover the Glacial Passage), Momo's Secret (get to know Momo better), Achoo! (enter the Glacial Area for the first time), and A Peaceful Blue Hole (watch the ending credits)."
            ]
        },

        {
            heading: "Bancho Sushi & Cooksta",
            body: [
                "Running the restaurant: Culinary Researcher (research 5 new dishes), Culinary Master (enhance 5 dishes), Shop's Lookin' Good! (buy your first interior item), Artisan's Flame (research 30 new dishes), Leadership (train an employee to level 20), and Manager (open a branch restaurant).",
                "Cooksta is the in-game restaurant-ranking app. Influencer (Bronze), A Bancho Sushi Regular (Platinum), and Cooksta Influencer (Diamond) track climbing its tiers - each one needs a mix of menu variety, décor, and party size, so they arrive as your restaurant matures rather than on their own."
            ]
        },

        {
            heading: "Partner Villages & Farms",
            body: [
                "Helping the side characters set up their operations: Dumplings in the Water (Mima's restaurant opens), The Seaweed is Growing! (Gumo's seaweed farm opens), and Feeble Blacksmith (Duwa's workshop opens).",
                "Then growing them: Professional Farmer (install sprinklers in the garden), My Wonderful Rice Field! (expand the rice field to maximum), and My Wonderful Field! (expand the vegetable farm to maximum)."
            ]
        },

        {
            heading: "Diving, Hunting & Collecting",
            body: [
                "Combat and salvage: Scrap Metal Collector (pick up 100 items at the Blue Hole), Angry Shark! (catch your first shark), Dave the Sniper (catch 10 fish with a Sniper Rifle), Mister Melee (catch 20 fish with melee weapons), Saved Dave! (revive Dave from the brink of death for the first time), and Predator of the Blue Hole (catch 300 fish there).",
                "Gear and records: Weapon Collector (collect all the blueprints), Arms Craftsman (enhance a gun 3 times), and Sea People Historian (capture all of the Sea People murals).",
                "Odds and ends: GYAO! Master (raise 5 GYAO!s), Photographer (take 10 photos at Photo Spots), Strange Fish (capture 5 FishMon), Catman (feed the cat 20 times), and Blacksmith Helper (sell 200 items at the workshop)."
            ]
        },

        {
            heading: "Hidden Achievements",
            body: [
                "Ration Eater - eat the emergency rations hidden on the lowest floor of the Sea People village, during the mission that sends you down there.",
                "God of Lightning - catch a fish using Mjolnir, a rare weapon found encased in a chunk of ice in the Glacial Passage; it can appear in many spots, so keep an eye out.",
                "Creature Hunter - catch every boss creature in the Blue Hole across the game.",
                "Dev Killer - during the end credits, defeat every developer name before the sequence finishes; if you miss it, it reappears as a phone mini-game the next in-game day."
            ]
        },

        {
            heading: "Suggested Order",
            body: [
                "Play the story straight through, letting the progression achievements (Bancho Sushi is Back! through A Peaceful Blue Hole) and most of the diving milestones unlock as you go. Grab Ration Eater during its story mission and go for Dev Killer the moment the credits roll.",
                "After the credits, finish the restaurant and Cooksta goals (Artisan's Flame, Leadership, Manager, Cooksta Influencer) and max out the partner farms (My Wonderful Rice Field!, My Wonderful Field!, Professional Farmer).",
                "Mop up the collection and count-based achievements - Weapon Collector, Sea People Historian, Predator of the Blue Hole, Strange Fish, Catman, Blacksmith Helper, GYAO! Master, Photographer - and hunt the Glacial Passage for Mjolnir to finish God of Lightning and Creature Hunter."
            ]
        }

    ]

};
