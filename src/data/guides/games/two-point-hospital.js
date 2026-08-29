// Two Point Hospital Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/two-point-hospital.json), whose 61 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   535930 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js). 7 hidden achievements ship no Steam description; their conditions here are curatorial, cross-checked against the game's wiki plus community 100% guides, and kept spoiler-light.
// - Sections group achievements by what each one actually requires.
export const GUIDE = {
    "slug": "two-point-hospital-achievement-guide",
    "category": "game",
    "gameSlug": "two-point-hospital",
    "icon": "🏥",
    "title": "Two Point Hospital Achievement Guide",
    "summary": "A practical guide to all 61 Steam achievements in Two Point Hospital - hospital basics & staff, gold stars, region completions, scenario challenges, hidden achievements.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Two Point Hospital has 61 Steam achievements, 7 of them hidden. The backbone is earning Gold Stars - 15, then 30, all the way to 108 across every hospital and DLC - alongside a 1-star clear of each region and a long list of scenario-specific feats tied to individual hospitals.",
                "Nothing is missable: every hospital can be reopened and improved, and Gold Stars accumulate permanently. This is a completion grind rather than a challenge - the time is in taking each of the roughly 30 hospitals up to three stars, which the higher Gold Star totals require.",
                "Tip: three-star a hospital before moving on rather than doing 1-star sweeps - the Gold Star total achievements (up to 108) assume near-full three-star completion of the base game and all DLC regions."
            ]
        },
        {
            "heading": "Hospital Basics & Staff",
            "body": [
                "The core progression achievements: curing 1 and 1000 patients, training a world-class Researcher, Psychiatrist and Surgeon, 50 research projects, 50 marketing campaigns, 25 machine upgrades, capturing 100 ghosts, $50,000,000 organisation value, 10,000 Kudosh, a multiplayer challenge, a Level 10 and Level 20 hospital, and winning every award in a single hospital.",
                "The achievements here: Give a Man a Hospital... (Cure 1 Patient); Teach a Man to Hospital... (Cure 1000 Patients); Dr Know (Train a World-Class Researcher); Jung at Heart (Train a World-Class Psychiatrist); Cut Above (Train a World-Class Surgeon); Well-Informed (Complete 50 Research Projects); Always Be Curing (Run 50 Marketing Campaigns); Bells & Whistles (Conduct 25 Machine Upgrades); I. See. You. (Capture 100 Ghosts); JUMBO (Reach $50,000,000 Organisation Value); Two Point Bounty (Earn 10,000 Kudosh); Peer-Reviewed (Complete a Multiplayer Challenge); Double Digits (Have a Level 10 Hospital); Double Double (Have a Level 20 Hospital); I'd Like To Thank My Mother (Win every award in a single hospital)."
            ]
        },
        {
            "heading": "Gold Stars",
            "body": [
                "The cumulative Gold Star milestones at 15, 30, 45, 54, 63, 72, 81, 90, 99 and 108 stars. Each hospital and DLC hospital is worth up to three, so the higher totals mean three-starring nearly everything.",
                "The achievements here: County-Wide (Earn 15 Gold Stars); Inter-Countinental (Earn 30 Gold Stars); Pointy Mountain G.O.A.T (Earn 45 Gold Stars); The New Gold Standard (Earn 54 Gold Stars); The (Second) New Gold Standard (Earn 63 Gold Stars); The (Third) New Gold Standard (Earn 72 Gold Stars); The (Fourth) New Gold Standard (Earn 81 Gold Stars); The (Fifth) New Gold Standard (Earn 90 Gold Stars); The (Sixth) New Gold Standard (Earn 99 Gold Stars); The (Seventh) New Gold Standard (Earn 108 Gold Stars)."
            ]
        },
        {
            "heading": "Region Completions",
            "body": [
                "A 1-star clear of every hospital in a region: the Pointy Mountains, Pebberley Island, Close Encounters, Off The Grid, Culture Shock, A Stitch In Time and Speedy Recovery.",
                "The achievements here: High Altitude Health Service (Earn 1 Star at each hospital in the Pointy Mountains); Busman's Holiday (Earn 1 Star at each hospital on Pebberley Island); Stealthily Healthily (Earn 1 Star at each hospital in Close Encounters); Vote Windsock (Earn 1 Star at each hospital in Off The Grid); Arts & Plaster Casts (Earn 1 Star at each hospital in Culture Shock); Days of Suture Past (Earn 1 Star at each hospital in A Stitch In Time); Intensive Car Unit (Earn 1 Star at each hospital in Speedy Recovery)."
            ]
        },
        {
            "heading": "Scenario Challenges",
            "body": [
                "The hospital-specific feats: Wave 42 on Topless Mountain, unlocking every plot in Overgrowth, two Superbug projects and 50 research nodes, exposing 50 Alien Infiltrators, every Robo-Janitor in Chasm 24, curing Frogborne, the two R.E.M.I.X world clears, the Windsock green-energy and eco-rating goals, a Herb Garden cure, training Roderick Cushion, a high VIBE at Fitzpocket Academy, Wave 18 at Mudbury Festival, the Yesterizer and time-portal cures in Clockwise-above-Thyme, topping every league table at once, a 20-patient Pantomobile trip, and one fully-upgraded ambulance of every type.",
                "The achievements here: Life, the Universe and Everything (Complete Wave 42 on Topless Mountain); Symbiosis (Unlock every plot in Overgrowth); Icebreaker (Complete Superbug Project \"Hair Removal\"); Strength in Numbers (Complete Superbug Project \"Learning Machine Learning\"); Serial Collaborator (Complete 50 Research Nodes); Rose Amongst The Pigeons (Expose 50 Alien Infiltrators); Animation & Sanitation (Activate every Robo-Janitor prototype in Chasm 24); Kissed by a Nurse (Cure a patient with Frogborne); World 1 (Complete R.E.M.I. X versions of Hogsport, Lower Bullocks & Flottering); Greener Grass (Maximise your Green Energy capacity in Windsock); Environmentally Friendliest (Receive the highest possible Eco Rating); First Catch Your Plant (Cure a patient in the Herb Garden); World 2 (Complete R.E.M.I. X versions of Mitton University, Tumble & Flemington); Character Development (Train Roderick Cushion to Level 5 at Plywood Studios); Good VIBErations (Achieve a high VIBE rating at Fitzpocket Academy); Sick-in-the-Mud (Complete Wave 18 at Mudbury Festival); Besterizer (Send 100 cured patients through the Yesterizer in Clockwise-above-Thyme); Swiss Cheese Hospital (Cure 100 patients from time portals in a single year); De-Light Saving Time (Cure a patient with Lightheadedness, Beheadedness, Hotheadedness, and Byteheadedness in Clockwise-above-Thyme); You Got All The Best Lines (Reach the top of every league table at once for 3 months); It's a Wind-up (Collect 20 patients in one trip with a Pantomobile.); Diversified Portaloo (Have at least one of each type of ambulance fully upgraded in the same hospital.)."
            ]
        },
        {
            "heading": "Hidden Achievements",
            "body": [
                "Seven achievements are hidden - the two Monobeast shooting feats, an exploding-machine injury, and four scenario secrets:",
                "The achievements here: Low Brow (Shoot one Monobeast with the Monobrow Blaster (Monobeasts appear during the Monobrow research event).); High Brow (Shoot 10 Monobeasts in a row without missing.); Generating Business (Injure a person by letting a machine catch fire and explode with someone still in the room.); Now Even Cheesier (Complete the \"Cheesier Gubbins\" research project (available in Swelbard).); De-Lux Suite (Have a Level 5 De-Lux Clinic at the Underlook Hotel.); Furry Good Review (Earn a top review from the visiting critic Bartholomew F. Yeti at the Underlook Hotel.); Curing Spree (Trigger a Curing Spree (cure 10 patients in a row) on Topless Mountain.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the campaign region by region, three-starring each hospital before moving on - this covers the Gold Star totals, the region 1-star clears, and most of the basics (cures, research, marketing, upgrades, training).",
                "2. Do each hospital's scenario feat while you are there (Wave 42, the Superbugs, the aliens, the R.E.M.I.X clears, and so on) rather than backtracking.",
                "3. Pick up the hidden achievements opportunistically: trigger the Monobrow event for Low/High Brow, keep a machine burning for Generating Business, and chase Curing Spree on Topless Mountain.",
                "4. Finish with the long counters - 1000 cures, 100 ghosts, $50m value, 10,000 Kudosh - which will likely already be close.",
                "Tip: High Brow (10 Monobeasts hit in a row, no misses) is easiest in a small, paused-and-planned room - line the beasts up, aim carefully, and unpause only to fire."
            ]
        }
    ]
};
