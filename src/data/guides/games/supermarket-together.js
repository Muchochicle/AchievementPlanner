// Supermarket Together Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/supermarket-together.json), whose 51 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   2709570 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 0 achievement(s) are Steam-hidden or ship no Steam
//   description; their description here is researched from community
//   100% guides and is a curatorial summary. Every other description is
//   Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "supermarket-together-achievement-guide",
    "category": "game",
    "gameSlug": "supermarket-together",
    "icon": "🛒",
    "title": "Supermarket Together Achievement Guide",
    "summary": "A practical guide to all 51 Steam achievements in Supermarket Together (0 hidden). Every achievement carries Steam's own text - the collective counter grinds (restocking, recycling, customers, checkouts, cleaning), the money and decoration milestones, the online-orders and manufacturing systems, and the layout secrets (hidden cats, demolition, the enigma cube).",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Supermarket Together has 51 Steam achievements, none hidden. You and up to three friends run a shop co-op: restock shelves, work the register, clean, recycle cardboard, pay invoices, and expand. Most achievements are 'Collective' counters that pool progress across everyone in the store: placing 1,000 / 10,000 / 100,000 products, recycling boxes, serving customers, checking out products, cleaning trash, analysing customers, packing online orders, repairing devices. The rest are milestones (a million in funds, $25,000 in a day, decoration counts) and small feats (pet the outside cat 100 times, return correct change 100 times in a row, the fire-extinguisher bystander push, the enigma cube).",
                "There are no hidden achievements - the list above is the whole set, and every 'Collective' one accumulates across sessions.",
                "The catalog marks it difficulty 2 and single-playthrough (it is one long ongoing save). Nothing is missable; the big counters just take time."
            ]
        },
        {
            "heading": "Collective Counters",
            "body": [
                "The pooled grind achievements: restocking, recycling boxes and bales, serving customers, checkout, cleaning, surveillance analysis, sales, cardboard baler, and invoices.",
                "The achievements here: Basic Restocker (Placed a total of 1000 products in shelves [Collective]); Advanced Restocker (Placed a total of 10000 products in shelves [Collective]); Master Restocker (Placed a total of 100000 products in shelves [Collective]); Basic Recycler (Recycled a total of 50 boxes [Collective]); Advanced Recycler (Recycled a total of 500 boxes [Collective]); Expert Recycler (Recycled a total of 2000 boxes [Collective]); Some Success (500 customers have gone through the store [Collective]); This Is Rolling (2000 customers have gone through the store [Collective]); Sky High (10000 customers have gone through the store [Collective]); Basic Cashier (Checked out a total of 500 products [Collective]); Advanced Cashier (Checked out a total of 2500 products [Collective]); Expert Cashier (Checked out a total of 10000 products [Collective]); Basic Cleaner (Cleaned 50 trash [Collective]); Advanced Cleaner (Cleaned 200 trash [Collective]); Expert Cleaner (Cleaned 500 trash [Collective]); Observation Duty? (Analyzed 500 customers with the surveillance desk [Collective]); Caught Red Handed (Catch 10 thieves with the surveillance desk [Collective]); Good, Pretty, Cheap (Do at least 10 sales [Collective]); Better, Prettier, Cheaper (Do at least 50 sales [Collective]); Feed The Machine (Insert 500 boxes in the cardboard baler [Collective]); Condensed Recycling (Recycle 40 cardboard bales [Collective]); Who Could Resist? (Sell 1000 extra products thanks to sales [Collective]); Taxes? In my store? (Pay your first invoice [Collective])."
            ]
        },
        {
            "heading": "Money & Store Growth",
            "body": [
                "The million-dollar and daily-earnings milestones, the big single checkout, the decoration counts, defaulting on a loan, and the online-order and device-repair systems.",
                "The achievements here: Millionaire's Holiday (Reach one million dollars in funds); Welcome Mr. Whiskers (Pet the cat outside 100 times); Gaining Traction! (Achieve $25.000 or more in earnings in a single day); KA-CHING! (Have a customer pay more than 700 dollars); Basic Decorator (Have 50 or more decorations in your store (lights do count)); Advanced Decorator (Have 100 or more decorations in your store); How Is This Still Standing? (A) (Demolish every possible pillar and beam in the classic layout); Defaulter (Suffer the consequences of not paying a bank loan); A Responsible Owner (Pay 25 invoices [Collective]); Turning The Router On (Pack your first online order.); Still Connected (Complete 25 online orders.); Virtual Benefits (Earn more than 25.000$ with online orders.); Let's Get To Work (Repair your first device); Wrench Specialist (Repair 30 devices [Collective]); Good Morning Dear Customers (Place an announcement desk in your store)."
            ]
        },
        {
            "heading": "Feats & Layout Secrets",
            "body": [
                "The correct-change streak, thief-swatting and dropped-product recovery, petting the cat, the fire-extinguisher bystander push, manufacturing (all departments and recipes, a 7-ingredient recipe), and the classic and plaza layout secrets (demolition, hidden cats, the enigma cube).",
                "The achievements here: Careful Cashier (Return the correct change 100 times in a row while being a cashier); Not On My Guard (Hit a thief  with the broom 500 times); Can't Someone Else Do It? (Recover 500 dropped products); Master Decorator (Have 200 or more decorations in your store); Might Need Two Ladders (Find the missing cat in the classic layout); Tool Of Chaos (Get your hands on a fire extinguiser); Please Check My Prices!! ('Convince' 10 bystanders to become customers by pushing them inside your store with the fire extinguiser in the classic layout (Double transit door needed)); Superfood (Manufacture a recipe with at least 7 extra ingredients); A Wider Array Of Products (Acquire all manufacturing departments); A Good Wares Selection (Unlock all manufacturing recipes available so far); How Is This Still Standing Again? (Demolish every possible pillar and beam in the plaza layout); Might Need Two Ladders... Or More (Find the missing cat in the plaza layout); What is this? (Build the enigma cube in the plaza layout)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play normally with friends - the Collective restocking, recycling, customer, checkout and cleaning counters all climb every session.",
                "2. Grow the store toward a million in funds and 200+ decorations, pay 25 invoices, and take a bank loan (then default once for 'Defaulter').",
                "3. Turn on online orders and the repair bench, and work the manufacturing tree - all departments, all recipes, a 7-ingredient superfood.",
                "4. Do the deliberate feats: 100 correct changes in a row, pet the outside cat 100 times, 500 thief swats, the fire-extinguisher bystander push.",
                "5. In the classic and plaza layouts, demolish every pillar and beam, find both hidden cats, and build the enigma cube.",
                "Tip: assign roles in co-op - one person permanently on restock, one on register, one on cleaning/recycling - and the four biggest Collective counters (100,000 products, 10,000 checkouts, 10,000 customers, 500 trash) fill in parallel instead of one at a time."
            ]
        }
    ]
};
