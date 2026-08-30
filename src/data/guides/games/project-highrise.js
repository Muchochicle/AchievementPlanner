// Project Highrise Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/project-highrise.json), whose 88 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   423580 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "project-highrise-achievement-guide",
    "category": "game",
    "gameSlug": "project-highrise",
    "icon": "🏢",
    "title": "Project Highrise Achievement Guide",
    "summary": "A practical guide to all 88 Steam achievements in Project Highrise - none are hidden. Covers the finance, population and tenant-happiness milestones, the tenant-type, building-size and utility goals, the contract, prestige, consultant and media-campaign tracks, and the tutorial, scenario and Las Vegas / hotel DLC achievements.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Project Highrise has 88 Steam achievements and none of them are hidden. Most are sandbox milestones reached by building a large, profitable tower: cash and revenue thresholds, population and happy-tenant counts, moving in each tenant type (tech office, HQ, luxury loft, gourmet restaurant, luxury store), building height and floor-area targets, and using enough of each utility connection. A block covers the meta-progression tracks - completing the four Contracts, reaching prestige tiers, unlocking every consultant upgrade and running every media campaign - plus the art, plaza and decor achievements. The last seventeen are for the tutorial, the ADA/360 report system, the scenario gold medals, mods, and the Las Vegas hotel expansion.",
                "Nothing is missable - a sandbox game runs indefinitely and every counter accumulates, and scenarios can be replayed for their gold medals. The bulk of the list falls out of one very large, well-run sandbox tower; the scenario gold medals (one, five, then ten) are the main separate task.",
                "Tip: build one enormous mixed-use tower as your main sandbox game and pursue nearly every achievement in it - population, revenue, all tenant types, all utility counts, all art and decor, and the full consultant and campaign tracks can all coexist in a single 100-story building, which is far more efficient than starting fresh saves for each goal."
            ]
        },
        {
            "heading": "Finances, Population & Tenants",
            "body": [
                "The economic milestones: $1,000,000 in cash, daily revenue and profit thresholds, 250 and 500 population, 300+ apartment residents, a 100-day tenancy, 200 happy and 50 very-happy tenants in one building, 28 days with no move-outs, 100 city visitors in a day, and taking and repaying a loan.",
                "The achievements here: Baron of Business (Reached $1,000,000 in cash); Cashflow Chief (Reached $50,000 in daily revenues); Revenue Royalty (Reached $100,000 in daily revenues); It is Payday (Reached $200,000 in daily revenues); In the Black (Rent revenues exceed daily expenses); Swimming in Surplus (Reached $25,000 in daily profits); Profound Proceeds (Reached $50,000 in daily profits); People Mover (Reached 250 population); Master of Puppets (Reached 500 population); Lofty Landlord (Have a building with more than 300 apartment residents); First 100 Days (Have a tenant rent for 100 days); Happy Tenants (Have 200 happy tenants in one building); Thrilled Tenants (Have 50 very happy tenants in one building); 28 Days Later (Go 28 days without a tenant moving out); Destination Destiny (Have 100 visitors from the city in one day); Don't Feel a Loan (Take and fully repay a loan)."
            ]
        },
        {
            "heading": "Tenant Types, Building & Utilities",
            "body": [
                "Moving in each tenant type (tech and HQ offices, luxury and loft apartments, dinner/bar/gourmet restaurants, luxury and two-floor stores) and hitting count targets, building five floors, a 50-story and a 100-story tower, floor-area targets, the trash/recycling/grime and service-call achievements, and using 100-200 of each utility connection (power, phone, cable, water, gas).",
                "The achievements here: Plebs Are Needed (Have a building with more than 500 office workers); It's Technical (Move in a tech office); Meet Me at HQ (Move in a headquarters office); Lux Living (Move in a luxury apartment tenant); Penthouse in the Sky (Move in a luxury loft apartment); Refined Palates (Have 20 restaurants functioning in one building); Tasty Profits (Have 10 restaurants make a profit in one day in the same building); Dinner Dash (Move in a restaurant that serves dinner); Potent Potables (Move in a restaurant with a bar); Starred Dining (Move in a gourmet restaurant); Retail Revenue (Have 10 stores make a profit in one day in the same building); Emporium Empire (Have 15 stores in one building); Leveled Up Shops (Have a two-floor store); Boutique Benefits (Move in a luxury store); Starting Skyward (Built five floors above ground); Careful Constructor (Built a 50-story building); Such Great Heights (Build a 100-story building); Floor Galore (Have a building with 500 tiles ); Under One Roof (Have a building with 2,500 tiles); Terrifically Trashed (Have a trashroom fill to 100% capacity); Maximum Reuse (Have a recycling room fill to 100% capacity); Grime is Not Good (Renovate a unit in need repair); Delegate Maintenance (Renovate all units in need of repair from the maintenance office); Rehab Expert (Have an expanded maintenance office); Smooth Service (Have 250 successful service calls in a day); Get Electrified (Have a building using 200 electricity connections); Phoning It In (Have a building using 200 phone connections); Tuned In (Have a building using 100 cable TV connections); Pipe Up (Have a building using 200 water connections); It's a Gas (Have a building using 100 gas connections)."
            ]
        },
        {
            "heading": "Contracts, Prestige, Consultants & Campaigns",
            "body": [
                "Completing the four Contracts (Office Bigwigs, Loft Life, Glut of Gastronomy, Luxury Boutiques), reaching prestige 10/20/50, the consultant achievements (move in a consultant, unlock an upgrade, complete the Aesthetics, Politics and Operations tracks), running every media campaign in each of the four tracks, and the art, plaza, statue, fountain and wallpaper decor achievements.",
                "The achievements here: Office Bigwigs (Complete the Office Bigwigs contract); Loft Life (Complete the Loft Life contract); Glut of Gastronomy (Complete the Glut of Gastronomy contract); Luxury Boutiques (Complete the Luxury Boutiques contract); Your Prestige is Rising (Achieve prestige of 10); Established Fame (Achieve prestige of 20); Sky High Stature (Achieve prestige of 50); Need a Consult (Move in a consultant's office); Upgrade Unlock (Unlock a consultant upgrade); Aestheticly Pleased (Unlock all upgrades in the Aesthetics track); I'm Busy Ruling (Unlock all upgrades in the Politics track); Smooth Operator (Unlock all upgrades in the Operations track); Campaign Launch (Launch a media campaign); Apartment Awareness (Run each media campaign in the Apartments track); Infrastructure Info (Run each media campaign in the Infrastructure track); Commercial Campaigns (Run each media campaign in the Retail and Restaurant track); Office Ovation (Run each media campaign in the Office track); Artfully Done (Place an artwork); Decorator's Touch (Have all of the small artworks in one building); Curated Class (Have all of the medium artworks in one building); Artistic Largesse (Have all of the large artworks in one bulding); Plaza Plan (Place an outdoor plaza); Statue Stature (Have all four statues outside one building); Water Features (Have four fountains in one building); Proper Walls (Decorate a bare wall with fancy wallpaper)."
            ]
        },
        {
            "heading": "Meta, Scenarios & Las Vegas DLC",
            "body": [
                "Completing all tutorial levels, reviewing every ADA/360 report, earning a scenario gold medal (one, five, then ten), downloading and playing with a mod, and the Las Vegas hotel expansion - hotel reviews, honeymoon and presidential suite check-ins, hotel revenue, convention and concert hall events, a grand casino, and 100 HVAC connections.",
                "The achievements here: We Don't Need No Education (Complete all the tutorial levels); Meet ADA/360 (Review every report in the ADA/360 report system); Golden Opportunity (Earn a gold medal finish in one scenario); Scenario Success (Earn a gold medal in five scenarios); Scenario Master (Earn a gold medal in ten scenarios); Mod Squad (Download a mod); Experimential Experience (Play a game with a mod); Three of a Kind (Received 100 hotel reviews); Four of a Kind (Received 1000 hotel reviews); Full House (First guest checks in to the honeymoon suite); Royal Flush (First guest checks in to the presidential suite); Sandbagger (Reached $1,000 in daily hotel revenues); In the Money (Reached $10,000 in daily hotel revenues); Double Down (Started an event at the convention hall); Poker Face (Started an event at the concert hall); High Hand (Have a grand casino); The King of Cool (Have a building using 100 HVAC connections)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Complete all the tutorial levels for We Don't Need No Education, then start one large sandbox game.",
                "2. In that game, build steadily upward toward 100 stories, moving in every tenant type as you can afford it and hitting the population, revenue, profit and happy-tenant milestones as the tower grows.",
                "3. Work the meta tracks in the same save: complete all four Contracts, push prestige to 50, unlock every consultant upgrade, run every media campaign, and place all the art, statues, fountains and decor.",
                "4. Max out every utility connection type and hit the floor-area and no-move-out achievements.",
                "5. Do the scenario gold medals separately (one, five, then ten), download and play a mod, and if you own the Las Vegas expansion, build a hotel tower for its achievement set.",
                "Tip: prestige is driven by expensive prestige-boosting rooms and art, and by keeping tenants happy - if prestige stalls near 50, add high-end restaurants, luxury retail and every artwork rather than more floors, since raw size does little for prestige on its own."
            ]
        }
    ]
};
