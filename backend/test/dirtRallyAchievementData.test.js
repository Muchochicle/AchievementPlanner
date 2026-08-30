import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/dirt-rally.json - 170 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 310560 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("dirt-rally");

test("getPlannerData('dirt-rally') returns real planner data with 170 curated achievements", () => {

    assert.ok(game, "expected real planner data for dirt-rally");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 170);

});

test("every DiRT Rally achievement has a unique id from 1 to 170 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 170 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 170);
    assert.strictEqual(new Set(apinames).size, 170);

});

test("every DiRT Rally achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 170 DiRT Rally achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["...Party at the Back", "Fully upgrade a RWD vehicle."],
        ["#HappyStreet", "Be in a full Rallycross PVP lobby where every other player is your friend."],
        ["#ThrowbackThursday", "Win a Masters Championship Event In the MINI Cooper S."],
        ["4", "Fully upgrade a vehicle in four different vehicle classes."],
        ["A Driver Who Is Confident in Their Co-Driver Will Often Follow Instructions Blindly", "Beat the Delta Time at a Single Event at Kreuzungsring."],
        ["A Whole Lot of Cheddar", "Win the maximum return on your stake in a Wager Event in Online Events."],
        ["Absolutely Brilliant", "Finish a Stage with the fastest time in Championships."],
        ["Ain't No Mountain High Enough", "Win a Hillclimb Event."],
        ["Any Given Sunday", "Complete a Weekly Event."],
        ["Born to Run", "Become Champion at Masters level in Championships."],
        ["Boss", "Have all of your engineers operating at maximum efficency."],
        ["Business at the Front...", "Fully upgrade a FWD vehicle."],
        ["Child of the 80's", "Win a Championship in a 1980s RWD vehicle."],
        ["Circuit Trained", "Finish in the top tier of a Rallycross Online Event."],
        ["Clean Sweep", "Finish top of the Heat Leaderboard, win your Semi-final and win the Final."],
        ["Constant Sound of Gravel Hitting Metal", "Beat the Delta Time at a Single Event at Gordolon - Courte montée."],
        ["Cut Corners as Much as You Dare", "Beat the Delta Time at a Single Event at Kathodo Leontiou."],
        ["Damn This Kid Is Good", "Win the FIA World Rallycross Championship."],
        ["Dependable", "Complete a Monthly Event."],
        ["DiRTy Dancer", "Win an Event at Pikes Peak (Mixed Surface) in the Peugeot 405 T16 Pikes Peak."],
        ["DiRTy Love", "Watch the credits."],
        ["Does Your Mother Know?", "Win a Championship in a 1970s vehicle."],
        ["Don't Make Your pace Notes Too Cautious or You Won't Be Fast", "Beat the Delta Time at a Single Event at River Severn Valley."],
        ["Driving Flat out into the Unknown Is about Confidence in Your Car and in Yourself", "Beat the Delta Time at a Single Event at Frauenberg."],
        ["Driving Sideways Is Good", "Beat the Delta Time at a Single Event at Col de Turini - Descente."],
        ["Easier Said than Done", "Finish in the Top Tier of an Online Event. "],
        ["Everybody knows it’s very fast with very wide roads", "Beat the Delta Time at a Single Event at Kailajärvi."],
        ["Experience of Driving on Snow Is Crucial", "Beat the Delta Time at a Single Event at Älgsjön Sprint."],
        ["Faster Chief", "Unlock the Crew Chief's 5th level of skills."],
        ["Fire Spitting Monsters", "Win a Championship in a Group B 4WD vehicle."],
        ["First Time's the Charm", "Finish an Event in Championships without restarting a Stage."],
        ["Friends-Rivals-Champions-Legends", "Win a Championship in a 2000s vehicle."],
        ["Full House", "Hire Engineers into every slot in your Service Area."],
        ["Garage Space", "Own a vehicle in four different classes."],
        ["Genius at Play", "Achieve a Team Rating of 70."],
        ["GG", "Complete a Season in Leagues."],
        ["Going up in the World", "Buy a Hillclimb car."],
        ["Good Spot", "When the spotter recommends you take the Joker on the first lap, do so and then win the race."],
        ["Gotta Get Me One of These", "Complete a Daily Event."],
        ["Happy Trails", "Get promoted to Elite level in Championships."],
        ["Hello? Is It Me You R Looking 4?", "Win a Championship in an R4 vehicle."],
        ["Here's One I Made Earlier", "Win a Championship in a Kit Car vehicle."],
        ["Hitting a Snow Bank Too Fast Can Cause You a Lot of Trouble", "Beat the Delta Time at a Single Event at Elgsjön."],
        ["Homologation", "Win a Championship in a Group A vehicle."],
        ["Hot Coffee", "Apply a Perk to an Engineer."],
        ["How Late Can You Brake When You Don't Know How Much Grip There Will Be?", "Beat the Delta Time at a Single Event at Col de Turini Départ."],
        ["How You Like Me Now?", "Change your Livery."],
        ["I Am the 5%", "Win a Rally event in headcam."],
        ["I Made This!", "Create and complete an Online Rallycross Championship."],
        ["I've Signed the DiRT Charter", "Played DiRT Rally during Early Access."],
        ["Improvising Fixes in the Service Area before the next Stage", "Beat the Delta Time at a Single Event at Verbundsring."],
        ["Investment Vehicle", "Win an Event in PvP with a car that you own."],
        ["It Takes a Special Driver to Win", "Beat the Delta Time at a Single Event at Stor-jangen Sprint."],
        ["It's a Bold Strategy", "Take the Joker on every lap of a race and win."],
        ["It's a Really Big Challenge to Go Fast without Making a Mistake", "Beat the Delta Time at a Single Event at Kakaristo."],
        ["It's about Wilderness Rather than Track", "Beat the Delta Time at a Single Event at Fferm Wynt Reverse."],
        ["It's All about Weight Transfer", "Beat the Delta Time at a Single Event at Kreuzungsring Reverse."],
        ["It's All down to Strategy", "Beat the Delta Time at a Single Event at Ostra Hinnsjon."],
        ["It's Almost Easier When the Conditions Stay Icy so the Grip Levels Are Consistent", "Beat the Delta Time at a Single Event at Norraskoga."],
        ["It's Gonna Cost Ya", "Hire an Engineer to work in your Service Area."],
        ["It's Hugely Different to an Asphalt Rally", "Beat the Delta Time at a Single Event at Ransbysäter."],
        ["It's Not about Fame and Fortune", "Beat the Delta Time at a Single Event at Hammerstein."],
        ["JUST LIKE THE REAL THING!", "Fully upgrade a Rallycross car."],
        ["Keep Calm and Drive a Clean Line", "Beat the Delta Time at a Single Event at Älgsjön."],
        ["Kick the Tyres", "Complete a Shakedown."],
        ["King of the World", "Get promoted to Masters level in Championships."],
        ["Little Light", "Win a Night Stage in Championships."],
        ["Local Hero", "Get promoted to Clubman level in Championships."],
        ["Many Jumps, Many over Crest Corners, Many High Speed Corners", "Beat the Delta Time at a Single Event at Hämelahti."],
        ["Maximum Attack", "Win every stage on a 12 stage event with all assists off."],
        ["Moar Wheel Drive", "Fully upgrade a 4WD vehicle."],
        ["Mondays Be Like…", "Crash your car so bad it ended your rally."],
        ["Monster Energy Supercharge Award", "Be first into the first turn in the Final of an FIA World Rallycross Event. "],
        ["Moosing Around", "Roll your car in a Rallycross event at Höljes."],
        ["Mr. Smooth", "Complete a Rallycross race without colliding with another car."],
        ["Mr. Steady", "Complete a PVP Event with a Very Clean rating."],
        ["MVP", "Win an Event in PVP."],
        ["My Ball, My Rules", "Create a League."],
        ["Nailed It!", "Roll your car, landed on your wheels and carried on."],
        ["National Treasure", "Get promoted to Professional level in Championships."],
        ["Nobody Knows I’m Famous", "Win three Masters Championships using three different vehicles."],
        ["Obviously", "Buy a Rally car."],
        ["On the Limit", "Be on the red line in top gear for 2 seconds."],
        ["Once the Rally Starts the Clock Is Ticking until the End, Even between Stages", "Beat the Delta Time at a Single Event at Oberstein."],
        ["Once You're on the Start Line It's Just You, Your Co-Driver, Your Car and the Road", "Beat the Delta Time at a Single Event at Waldabstieg."],
        ["Owned", "Finish in the Top Tier of the Owners Club Daily in Online Events."],
        ["Pass the Sauce Ari", "Fully upgrade the Peugeot 205 T16 Evo 2."],
        ["Pedal to the Mettle", "Win a 3-event championship in Championship Playlist."],
        ["Percolated", "Fill three of an Engineer's Perk Slots."],
        ["Playing with the Big Boys", "Unlock the FIA World Rallycross Championship."],
        ["Propane & Propane Accessories", "Win a Championship in a Hillclimb vehicle."],
        ["Racing Stripes", "Score 200 heats points in a Championship Rallycross event (fastest in all 4 heats)."],
        ["Roads Carved through Forests and Mountains", "Beat the Delta Time at a Single Event at Dyffryn Afon."],
        ["Room for a Small One?", "Join a League."],
        ["Self Made Millionaire", "Earn a total of 1,000,000CR in Custom Championships."],
        ["Show Boat", "Win an FIA World Rallycross Event by reversing across the finish line."],
        ["So Last Year", "Win a Championship in a 2010s vehicle."],
        ["So Serious", "Complete a Joker Lap in PVP without losing a position."],
        ["Spirit of the Rally", "Finish an event after heavily damaging three or more components."],
        ["Swingin' 60s", "Win a Championship in a 1960s vehicle."],
        ["Take Your Pick", "Win a Hillclimb Stage where both of your Run times are faster than any other."],
        ["That's a Lot of Lakes", "Beat the Delta Time at a Single Event at Kontinjärvi."],
        ["The Absolute Explosion of Noise, Roughness and Power as the Car Leaves the Line", "Beat the Delta Time at a Single Event at Approche du Col de Turini - Montée."],
        ["The Average Speed Is Very High", "Beat the Delta Time at a Single Event at Naarajärvi."],
        ["The Blinding Sun Piercing the Cockpit", "Beat the Delta Time at a Single Event at Pikes Peak (Mixed Surface) - Sector 3."],
        ["The Bounce as the Car Enters a Rut on the Way into a Corner", "Beat the Delta Time at a Single Event at Route de Turini."],
        ["The Buzz of the Service Areas", "Beat the Delta Time at a Single Event at Col de Turini - Sprint en descente."],
        ["The Camera Drones Hovering Overhead", "Beat the Delta Time at a Single Event at Ypsona tou Dasos."],
        ["The Cars Are Brutal and Savage but a Car That Is Being Driven Well Feels so Balletic", "Beat the Delta Time at a Single Event at Waldaufstieg."],
        ["The Change of Engine Note When the Anti-Lag Switch Is Flicked On", "Beat the Delta Time at a Single Event at Col de Turini - Départ en descente."],
        ["The Clouds of Gravel & Dust Launched from the Rear Wheels", "Beat the Delta Time at a Single Event at Abies Koiláda."],
        ["The Clumping of Mud in the Arches", "Beat the Delta Time at a Single Event at Bidno Moorland Reverse."],
        ["The Cold, Biting Chill of the Mountain", "Beat the Delta Time at a Single Event at Pra d’Alart."],
        ["The Condition of the Road You're on Is Heavily Influenced by How Many Cars Went before You", "Beat the Delta Time at a Single Event at Pomona Ékrixi."],
        ["The Curls of Dust Swirling in the Breeze", "Beat the Delta Time at a Single Event at Pikes Peak (Mixed Surface) - Sector 1."],
        ["The Damp, Mugginess of the Forest", "Beat the Delta Time at a Single Event at Sweet Lamb."],
        ["The Dance of the Car through the Hairpins", "Beat the Delta Time at a Single Event at Pikes Peak (Mixed Surface) - Full Course."],
        ["The Euphoria of Reaching the Summit", "Beat the Delta Time at a Single Event at Pedines Epidaxi."],
        ["The Feeling of Traction as You Launch", "Beat the Delta Time at a Single Event at Pikes Peak - Full Course."],
        ["The Fine Spray of Mud That Covers Much of the Car", "Beat the Delta Time at a Single Event at Ruschberg."],
        ["The Fun Starts Here", "Compete in an Event in PVP."],
        ["The Gravel Can Wear Away the Studs on Your Snow Tyres", "Beat the Delta Time at a Single Event at Hamra."],
        ["The Haze of Falling Kick Up", "Beat the Delta Time at a Single Event at Tsiristra Théa."],
        ["The Noticeable Difference between Braking into a Downhill Corner Compared to an Uphill Corner", "Beat the Delta Time at a Single Event at Route de Turini Descente."],
        ["The Only Way Is Up", "Finish in the Top Tier of a Hillclimb Daily in Online Events."],
        ["The Pockets of Expectant Fans Waiting throughout the Stage", "Beat the Delta Time at a Single Event at Flugzeugring Reverse."],
        ["The Pressure Comes from the Intangible, but Weighty Passage of Time", "Beat the Delta Time at a Single Event at Ampelonas Ormi."],
        ["The Quiet & Anticipation", "Beat the Delta Time at a Single Event at Ourea Spevsi."],
        ["The Relation and Trust between Driver and Co-Driver Is Unsurpassed", "Beat the Delta Time at a Single Event at Koryfi Dafni."],
        ["The Roads Are so Fast, They're Always Going up and down like a Rollercoaster", "Beat the Delta Time at a Single Event at Iso Oksjärvi."],
        ["The Robustness of Cars Built to Be Able to Cope with the Attrition of off Road Racing", "Beat the Delta Time at a Single Event at Dyffryn Afon Reverse."],
        ["The Searing Heat of the Desert", "Beat the Delta Time at a Single Event at Anodou Farmakas."],
        ["The Sensations Are Extreme on These Stages", "Beat the Delta Time at a Single Event at Pitkäjärvi."],
        ["The Sense of Flow into and out of a Corner", "Beat the Delta Time at a Single Event at Vallée descendante."],
        ["The Sense of Lightness as You Drive over a Crest", "Beat the Delta Time at a Single Event at Col de Turini - Sprint en montée."],
        ["The Sheer Drop Back down the Mountain", "Beat the Delta Time at a Single Event at Pikes Peak - Sector 3."],
        ["The Slight Breeze", "Beat the Delta Time at a Single Event at Perasma Platani."],
        ["The Snow Banks Can Give You Safety and Can Keep You on the Roads", "Beat the Delta Time at a Single Event at Lysvik."],
        ["The Sound of Dirt Thrown from under the Passing Racer...sideways", "Beat the Delta Time at a Single Event at Bidno Moorland."],
        ["The Sound of Engines Grumbling in the Distance", "Beat the Delta Time at a Single Event at Fourkéta Kourva."],
        ["The Sound of Gravel", "Beat the Delta Time at a Single Event at Pant Mawr."],
        ["The Sound of the Anti-Lag", "Beat the Delta Time at a Single Event at Geufron Forest."],
        ["The Sound of Turbo Chirps", "Beat the Delta Time at a Single Event at Pant Mawr Reverse."],
        ["The Spice of Life", "Complete a Custom Championship in Rally, Hillclimb and Rallycross."],
        ["The Sun Bursting through the Trees", "Beat the Delta Time at a Single Event at Pikes Peak - Sector 2."],
        ["The Throaty Roar of the Engines", "Beat the Delta Time at a Single Event at Fferm Wynt."],
        ["The Traveller", "Win a Single Event in three different locations."],
        ["The Twists and Turns of the Tarmac", "Beat the Delta Time at a Single Event at Pikes Peak - Sector 1."],
        ["The Unnerving Loss of Traction as You Hit the Gravel", "Beat the Delta Time at a Single Event at Pikes Peak (Mixed Surface) - Sector 2."],
        ["There Are a Lot of Long Straights", "Beat the Delta Time at a Single Event at Skogsrallyt."],
        ["There Are Some Narrow and Rough Sections", "Beat the Delta Time at a Single Event at Paskuri."],
        ["There Can Be a Lot of Gravel amongst the Snow and Ice Runs", "Beat the Delta Time at a Single Event at Bjorklangen."],
        ["There's No Fun in Driving Slowly", "Beat the Delta Time at a Single Event at Jyrkysjärvi."],
        ["There's No Pulse...", "Get beaten by the Delta on any stage."],
        ["Threading the Car between Trees, Banks and Ditches", "Beat the Delta Time at a Single Event at Route de Turini Montée."],
        ["Toolbox", "Fill three of the Crew Chief's Perk Slots."],
        ["Turtley Awesome", "Beat the Delta Time in a Delta Daily in Online Events."],
        ["Understeer Is Bad", "Beat the Delta Time at a Single Event at Verbundsring Reverse."],
        ["Unpredictable Surface & Grip Level", "Beat the Delta Time at a Single Event at Flugzeugring."],
        ["Visceral...but in the Correct Meaning of the Word", "Win an event with all assists off, no HUD and in headcam."],
        ["We the Terrors", "Win a Championship in a Group B RWD vehicle."],
        ["Whatever It Takes to Get to the End of a Stage/Leg/Rally/Championship. Perseverance", "Beat the Delta Time at a Single Event at Bronfelen."],
        ["When Jon Met Paul", "Win an Event in the Subaru Impreza 1995 with the DiRT 3 livery applied."],
        ["Whose House?", "Win an Online Custom Championship in PVP."],
        ["WWGFD?", "Unlock an upgrade for one of your cars."],
        ["You Can Call Me Chief", "Apply a Perk to your Crew Chief."],
        ["You Feel like Your Heart Is Going up and down with the Road Sometimes", "Beat the Delta Time at a Single Event at Oksala."],
        ["You'll Need Bravery, Precision and Complete Confidence", "Beat the Delta Time at a Single Event at Kotajärvi."],
        ["Your Heart Will Be in Your Throat over Some of These Jumps", "Beat the Delta Time at a Single Event at Järvenkylä."],
        ["Your Tyres Are Built to Really Dig into the Ice", "Beat the Delta Time at a Single Event at Stor-jangen Sprint Reverse."],
    ];

    assert.strictEqual(officialAchievements.length, 170, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
