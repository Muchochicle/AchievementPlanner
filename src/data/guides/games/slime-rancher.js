// Slime Rancher Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/slime-rancher.json), whose 57 achievements
//   were sourced directly from Steam's own achievement schema for appid
//   433340 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js). None are hidden; every one
//   ships a real, official Steam description, quoted verbatim below (the
//   two Adventure Mode ending achievements are described only by what
//   you do to reach them).
// - Sections group by what each achievement needs: the ranch economy,
//   slime care and variety, exploration and story, one-off stunts, and
//   Slime Science plus Rush Mode.
export const GUIDE = {
    "slug": "slime-rancher-achievement-guide",
    "category": "game",
    "gameSlug": "slime-rancher",
    "icon": "🟣",
    "title": "Slime Rancher Achievement Guide",
    "summary": "A practical guide to all 57 Steam achievements in Slime Rancher - none are hidden. The plort-selling and newbuck economy tiers, the slime feeding and corral-variety goals, the zone discoveries and Adventure Mode ending, the one-off stunts and challenges, and the Slime Science gadget and Rush Mode achievements.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Slime Rancher has 57 Steam achievements and none are hidden. Almost all come naturally from playing Adventure Mode to the end and running a tidy ranch; the outliers are the Rush Mode score achievements, completing the Slimepedia, and a handful of deliberate stunts.",
                "Nothing is permanently missable - the world persists, zones can always be revisited, and the economy and Slimepedia only grow - so this is a low-stress completion.",
                "Tip: keep a diverse ranch from early on (mixed corrals, a stocked pond, several fruit trees and veggie gardens) and most of the variety achievements unlock passively while you play the story and chase newbucks."
            ]
        },
        {
            "heading": "Ranching & Economy",
            "body": [
                "The money side: the plort-selling tiers (Plort Peddler up to Plort Tycoon), the newbuck totals (Fortunate, Well-Off Rancher, Upper Crust), a 5,000-newbuck day, a full upgraded silo, maxed corral/coop/silo, a big Range plort haul, an early Range Exchange, and joining the 7Zee Rewards Club.",
                "The achievements here: Plort Peddler (Sell 100 plorts at the Plort Market); Transplorter (Sell 500 plorts at the Plort Market); Plort Authority (Sell 1,000 plorts at the Plort Market); Plort Powerhouse (Sell 2,500 plorts at the Plort Market); Plort Tycoon (Sell 5,000 plorts at the Plort Market); Fortunate (Earn over 5,000 newbucks); Well-Off Rancher (Earn over 25,000 newbucks); Upper Crust (Earn over 100,000 newbucks); A Quick Newbuck (Earn 5,000 newbucks in a single day); Burstin' at the Seams (Put at least 50 units into each slot of a fully upgraded silo); Fully Loaded (Have a maximally upgraded corral, coop, and silo on the Ranch); Free Rangin' (Collect 50 plorts on the Range in a single day); One Person at a Time (Join the 7Zee Rewards Club)."
            ]
        },
        {
            "heading": "Slime Care & Feeding",
            "body": [
                "Slime husbandry: feeding chickens and favourites, fruit-tree and veggie-garden variety, feeding a pink slime every food type, bursting a gordo, a triple gold plort, and the corral/pond/ranch largo and slime-type variety goals.",
                "The achievements here: Buck Buck Bagu- (Feed 100 chickens to slimes on the Ranch); Fruit Cocktail (Have 3 different fruit trees on the Ranch at the same time); Salad Bar (Have 3 different veggie gardens on the Ranch at the same time); Catch! (Shoot food into an airborne slime's mouth); Omnivorous (Feed pink slimes on the Ranch 10 different types of food); Tasty! (Feed 50 slimes on the Ranch their favorite food); Jelly Belly Burst (Burst a gordo slime); Hat Trick (Obtain at least 3 gold plorts from a single gold slime); Boop! (Let a tabby slime headbutt you right on the nose); Six Pack (Have at least 6 different types of slimes in the same corral); Risky Business (Have at least 3 different types of largos in the same corral); Pool Party (Fill a pond on the Ranch with at least 5 different types of slimes); Diversification (Have at least 10 types of largos on the Ranch); Ball Pit (Jump into a corral containing at least 40 slimes)."
            ]
        },
        {
            "heading": "Exploration & Story",
            "body": [
                "Discovering the Quarry, Moss Blanket, Glass Desert and Ancient Ruins, starting the Glass Desert oasis, completing the Slimepedia, and the two Adventure Mode ending achievements.",
                "The achievements here: Mine, All Mine (Discovered the Quarry); On the Other Side (Discovered the Moss Blanket); Smoke, Fire, and Mirrors (Discovered the Glass Desert); Into the Past (Discover the Ancient Ruins); Renewal (Start bringing life back to the Glass Desert); Pro Style (Complete the Slimepedia); Doors Like These (Discover where Hobson's journey ended, and started once again.); The Adventure Continues! (Complete Adventure Mode and set out for what's next.)."
            ]
        },
        {
            "heading": "Stunts & Challenges",
            "body": [
                "The deliberate one-offs: staying up all night, an early knockout, returning after a long absence, opening a slime gate, incinerating chickens, the airborne feed shot, standing in a rad aura, holding a tarr, a tabby headbutt, an airborne boom largo, vacuuming 15+ slimes, placing a tarr on the Slime Stage, a 50-point slimeball game, using chroma packs, collecting slime toys and snaring a Hunter Gordo.",
                "The achievements here: Up All Night (Stay awake from 6 AM to 6 AM the next day); Not My Morning (Be knocked out before 10 AM); While You Were Away (Return to the Ranch after more than 24 hours); Open Says Me (Open a slime gate); Carousel (Incinerate an elder chicken); You... Monster! (Send an adorable chick to a fiery end, the same place you're now destined to go); Hasty Exchange (Fulfill a Range Exchange request between Noon and 2 PM); That Only Works in Comic Books (Stand inside a rad aura for at least 15 seconds); Once Bitten, Twice... Bitten (Hold onto a tarr for 15 seconds); Fireworks (Shoot a boom slime largo into the air that explodes before landing); Controlling the Chaos (Constrain more than 15 slimes in your vac stream at once while on the range); Best of the Worst (Place a tarr on the #1 Slime Stage); She's on Fire! (Score 50 points in a single game of slimeball); Color Me Impressed (Use chroma packs to change the color of the ranch house, tech, and vacpack); Mint in Box (Purchase at least 10 different types of slime toys); The Hunter Has Become... The Other Thing (Snare a Hunter Gordo)."
            ]
        },
        {
            "heading": "Slime Science & Rush Mode",
            "body": [
                "Fabricating Slime Science gadgets (the first, 35 and 100), and the three Rush Mode newbuck targets (Rush Challenger, Rush Champion, Rush Plortmaster).",
                "The achievements here: Rush Challenger (Reach at least 10,000 newbucks in Rush Mode); Rush Champion (Reach at least 35,000 newbucks in Rush Mode); Rush Plortmaster (Reach at least 75,000 newbucks in Rush Mode); Onward... to SCIENCE! (Fabricate your first Slime Science gadget); Bea the Builder (Fabricate 35 Slime Science gadgets); Never Stop Creating (Fabricate 100 Slime Science gadgets)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play Adventure Mode toward its ending - this unlocks the zone discoveries, the story achievements and most of the economy and slime-variety goals as you go.",
                "2. Keep the ranch varied and upgraded from the start so Six Pack, Pool Party, Diversification, Fully Loaded and Burstin' at the Seams fall into place.",
                "3. Do the stunt achievements deliberately when convenient - most take under a minute once you know what they want.",
                "4. Fabricate Slime Science gadgets toward Never Stop Creating, and finish the Slimepedia.",
                "5. Do a few Rush Mode games at the end for Rush Challenger, Rush Champion and Rush Plortmaster - Rush Plortmaster (75,000 newbucks) needs an efficient plort loop.",
                "Tip: Complete the Slimepedia (Pro Style) needs an entry for every slime, food, resource and gadget - check it before the endgame and go photograph or encounter whatever is still greyed out."
            ]
        }
    ]
};
