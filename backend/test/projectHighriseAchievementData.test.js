import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/project-highrise.json - 88 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 423580 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("project-highrise");

test("getPlannerData('project-highrise') returns real planner data with 88 curated achievements", () => {

    assert.ok(game, "expected real planner data for project-highrise");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 88);

});

test("every Project Highrise achievement has a unique id from 1 to 88 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 88 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 88);
    assert.strictEqual(new Set(apinames).size, 88);

});

test("every Project Highrise achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

    for (const achievement of game.achievements) {

        assert.ok(
            Number.isInteger(achievement.difficulty) && achievement.difficulty >= 1 && achievement.difficulty <= 5,
            `${achievement.name} has an out-of-range difficulty: ${achievement.difficulty}`
        );

        assert.ok(
            Number.isInteger(achievement.estimatedTime) && achievement.estimatedTime > 0,
            `${achievement.name} has an invalid estimatedTime: ${achievement.estimatedTime}`
        );

        assert.ok(achievement.name?.length > 0, "achievement is missing a name");
        assert.ok(achievement.description?.length > 0, `${achievement.name} is missing a description`);
        assert.ok(achievement.apiname?.length > 0, `${achievement.name} is missing an apiname`);

    }

});

test("every one of the 88 Project Highrise achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["28 Days Later", "Go 28 days without a tenant moving out"],
        ["Aestheticly Pleased", "Unlock all upgrades in the Aesthetics track"],
        ["Apartment Awareness", "Run each media campaign in the Apartments track"],
        ["Artfully Done", "Place an artwork"],
        ["Artistic Largesse", "Have all of the large artworks in one bulding"],
        ["Baron of Business", "Reached $1,000,000 in cash"],
        ["Boutique Benefits", "Move in a luxury store"],
        ["Campaign Launch", "Launch a media campaign"],
        ["Careful Constructor", "Built a 50-story building"],
        ["Cashflow Chief", "Reached $50,000 in daily revenues"],
        ["Commercial Campaigns", "Run each media campaign in the Retail and Restaurant track"],
        ["Curated Class", "Have all of the medium artworks in one building"],
        ["Decorator's Touch", "Have all of the small artworks in one building"],
        ["Delegate Maintenance", "Renovate all units in need of repair from the maintenance office"],
        ["Destination Destiny", "Have 100 visitors from the city in one day"],
        ["Dinner Dash", "Move in a restaurant that serves dinner"],
        ["Don't Feel a Loan", "Take and fully repay a loan"],
        ["Double Down", "Started an event at the convention hall"],
        ["Emporium Empire", "Have 15 stores in one building"],
        ["Established Fame", "Achieve prestige of 20"],
        ["Experimential Experience", "Play a game with a mod"],
        ["First 100 Days", "Have a tenant rent for 100 days"],
        ["Floor Galore", "Have a building with 500 tiles "],
        ["Four of a Kind", "Received 1000 hotel reviews"],
        ["Full House", "First guest checks in to the honeymoon suite"],
        ["Get Electrified", "Have a building using 200 electricity connections"],
        ["Glut of Gastronomy", "Complete the Glut of Gastronomy contract"],
        ["Golden Opportunity", "Earn a gold medal finish in one scenario"],
        ["Grime is Not Good", "Renovate a unit in need repair"],
        ["Happy Tenants", "Have 200 happy tenants in one building"],
        ["High Hand", "Have a grand casino"],
        ["I'm Busy Ruling", "Unlock all upgrades in the Politics track"],
        ["In the Black", "Rent revenues exceed daily expenses"],
        ["In the Money", "Reached $10,000 in daily hotel revenues"],
        ["Infrastructure Info", "Run each media campaign in the Infrastructure track"],
        ["It is Payday", "Reached $200,000 in daily revenues"],
        ["It's a Gas", "Have a building using 100 gas connections"],
        ["It's Technical", "Move in a tech office"],
        ["Leveled Up Shops", "Have a two-floor store"],
        ["Loft Life", "Complete the Loft Life contract"],
        ["Lofty Landlord", "Have a building with more than 300 apartment residents"],
        ["Lux Living", "Move in a luxury apartment tenant"],
        ["Luxury Boutiques", "Complete the Luxury Boutiques contract"],
        ["Master of Puppets", "Reached 500 population"],
        ["Maximum Reuse", "Have a recycling room fill to 100% capacity"],
        ["Meet ADA/360", "Review every report in the ADA/360 report system"],
        ["Meet Me at HQ", "Move in a headquarters office"],
        ["Mod Squad", "Download a mod"],
        ["Need a Consult", "Move in a consultant's office"],
        ["Office Bigwigs", "Complete the Office Bigwigs contract"],
        ["Office Ovation", "Run each media campaign in the Office track"],
        ["Penthouse in the Sky", "Move in a luxury loft apartment"],
        ["People Mover", "Reached 250 population"],
        ["Phoning It In", "Have a building using 200 phone connections"],
        ["Pipe Up", "Have a building using 200 water connections"],
        ["Plaza Plan", "Place an outdoor plaza"],
        ["Plebs Are Needed", "Have a building with more than 500 office workers"],
        ["Poker Face", "Started an event at the concert hall"],
        ["Potent Potables", "Move in a restaurant with a bar"],
        ["Profound Proceeds", "Reached $50,000 in daily profits"],
        ["Proper Walls", "Decorate a bare wall with fancy wallpaper"],
        ["Refined Palates", "Have 20 restaurants functioning in one building"],
        ["Rehab Expert", "Have an expanded maintenance office"],
        ["Retail Revenue", "Have 10 stores make a profit in one day in the same building"],
        ["Revenue Royalty", "Reached $100,000 in daily revenues"],
        ["Royal Flush", "First guest checks in to the presidential suite"],
        ["Sandbagger", "Reached $1,000 in daily hotel revenues"],
        ["Scenario Master", "Earn a gold medal in ten scenarios"],
        ["Scenario Success", "Earn a gold medal in five scenarios"],
        ["Sky High Stature", "Achieve prestige of 50"],
        ["Smooth Operator", "Unlock all upgrades in the Operations track"],
        ["Smooth Service", "Have 250 successful service calls in a day"],
        ["Starred Dining", "Move in a gourmet restaurant"],
        ["Starting Skyward", "Built five floors above ground"],
        ["Statue Stature", "Have all four statues outside one building"],
        ["Such Great Heights", "Build a 100-story building"],
        ["Swimming in Surplus", "Reached $25,000 in daily profits"],
        ["Tasty Profits", "Have 10 restaurants make a profit in one day in the same building"],
        ["Terrifically Trashed", "Have a trashroom fill to 100% capacity"],
        ["The King of Cool", "Have a building using 100 HVAC connections"],
        ["Three of a Kind", "Received 100 hotel reviews"],
        ["Thrilled Tenants", "Have 50 very happy tenants in one building"],
        ["Tuned In", "Have a building using 100 cable TV connections"],
        ["Under One Roof", "Have a building with 2,500 tiles"],
        ["Upgrade Unlock", "Unlock a consultant upgrade"],
        ["Water Features", "Have four fountains in one building"],
        ["We Don't Need No Education", "Complete all the tutorial levels"],
        ["Your Prestige is Rising", "Achieve prestige of 10"],
    ];

    assert.strictEqual(officialAchievements.length, 88, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
