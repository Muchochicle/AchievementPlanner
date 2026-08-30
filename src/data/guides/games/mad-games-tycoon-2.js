// Mad Games Tycoon 2 Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/mad-games-tycoon-2.json), whose 73 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1342330 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "mad-games-tycoon-2-achievement-guide",
    "category": "game",
    "gameSlug": "mad-games-tycoon-2",
    "icon": "🎮",
    "title": "Mad Games Tycoon 2 Achievement Guide",
    "summary": "A practical guide to all 73 Steam achievements in Mad Games Tycoon 2 - none are hidden. Covers the genre and game-type milestone achievements, and the awards, sales and studio-growth achievements.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Mad Games Tycoon 2 has 73 Steam achievements and none of them are hidden. About half are \"create a game of genre X with a rating of at least 70%\" for every genre, plus game types (retro, MMO, F2P, arcade, mobile) and platform/business milestones (make your own engine, console and handheld, contract games, bundles, spin-offs, sequels, ports, remasters). The rest are awards (Game / Developer / Publisher of the Year, best graphics/sound), sales tiers (Gold at 1M units up to Diamond at 50M), review scores (80% / 90% / 100%), and studio growth (year 2050, 1M fans, employee and money milestones, hire a developer legend, buy NPC companies).",
                "Nothing is missable - a single long sandbox game can cover almost everything, and there are no time-limited achievements. A few are marked \"[Difficulty: Legendary]\" in their descriptions (Diamond sales, a 100% review, a billion dollars, a maxed studio reputation) and need a genuinely optimised playthrough.",
                "Tip: play one very long sandbox game from an early start year - work through every genre making 70%+ games, build engines/consoles, and let the money, fan, employee and sales counters climb toward the Legendary-tier milestones."
            ]
        },
        {
            "heading": "Genre & Game-Type Milestones",
            "body": [
                "Creating a 70%+ game in every genre (action, skill, puzzle, adventure, RPG, strategy, platformer, simulation, sport, economic, fighting, building, movie, RTS, FPS, novel, TPS, racing, survival), a retro / MMO / F2P game, an arcade machine, a cell phone game, your own engine / console / handheld, a contract game, a bundle, a budget game, an addon bundle, a spin-off, a sequel, a port, and a remaster.",
                "The achievements here: Hurrican (Create an action game with a rating of at least 70%.); Marble Maze (Create an skill game with a rating of at least 70%.); Dr. Lario (Create an puzzle Game with a rating of at least 70%.); The Island of Monkeys (Create an adventure game with a rating of at least 70%.); Dungeons and Masters (Create an RPG Game with a rating of at least 70%.); The Civilizations (Create an strategy game with a rating of at least 70%.); Super Lario World (Create an platformer with a rating of at least 70%.); Spaceship: Elite (Create an simulation game with a rating of at least 70%.); California Cup (Create an sports game with a rating of at least 70%.); Mad Oil Tycoon (Create an economic simulation with a rating of at least 70%.); Backstreet Fighter (Create an fighting game with a rating of at least 70%.); Simulation City: 1602 (Create an building game with a rating of at least 70%.); Dragon's Cave (Create an interactive movie with a rating of at least 70%.); Commander Yuri (Create an Real-Time strategy game with a rating of at least 70%.); BOOM (Create an First-Person Shooter.); Better Than a Book (Create an visual novel with a rating of at least 70%.); Max Brain (Create an Third-Person Shooter with a rating of at least 70%.); The Test Drivers (Create an racing game with a rating of at least 70%.); Retromania (Create a retro game.); World of Meridian (Create an MMO game.); Is the Game Really Free? (Create an F2P game.); Insert Coin! (Create a arcade machine.); Everyone Likes Snakes (Create a cell phone game.); Born to Be a Programmer (Create your own engine.); Console War (Create your own stationary console.); This Fits in My Pocket (Create your own mobile console.); Bonus Payment (Create a contract game.); Bundles (Create a game bundle.); Discount (Publish a budget game.); Complete Edition (Publish an addon game bundle.); Spin Off (Create a spin off.); I, II, III, IV (Create a sequel to a game.); Game Porting Made Easy (Port a game to another platform.); Better Than the Original? (Create a remaster of one of your games.)."
            ]
        },
        {
            "heading": "Awards, Sales & Studio Growth",
            "body": [
                "Setting a trend, Game / Developer / Publisher of the Year, best-graphics and best-sound awards, a worst-game vote, an overhype, an exclusive publisher contract, 100% client reputation, a self-published game, reaching 2050, publishing an NPC's game, maxing a publisher relationship, Gold / Platin / Diamond sales, 80% / 90% / 100% reviews, 1,000,000 fans, multiplayer with one and four friends, a maxed IP and studio reputation, a 100%-skill employee, 20 / 50 / 100 employees, $50M / $500M / $1B, 10M / 50M own-console sales, hiring a developer legend, and buying 1 / 10 / 30 NPC companies.",
                "The achievements here: Trendsetter (One of your games should set a new trend.); Game of the Year (One of your games must be awarded Game of the Year.); Developer of the Year (Win the Developer of the Year award.); Publisher of the Year (Win the Publisher of the Year award.); Eye Candy (One of your games must get an award for the best graphics.); A Great Soundtrack (One of your games must get an award for the best sound.); This Can't Be Right! (One of your games must be voted the worst game of the year.); Overhype! (Create an overhype for one of your games.); Contractors (Sign an exclusive contract with a publisher.); That Was a Lot of Jobs! (Achieve a reputation with clients of 100%.); Now I Will Become Rich (Produce and distribute a game without a publisher.); This Is the Future! (Reach the year 2050 in the game.); Publisher! (Publish a game from an NPC company.); My Best Friend! (Maximize the relationship with a publisher.); Gold (Sell at least 1,000,000 units of a game.); Platin (Sell at least 10,000,000 units of a game.); Diamond (Sell at least 50,000,000 units of a game. [Difficulty: Legendary]); 80% (One of your games must receive an overall rating of at least 80%.); 90% (One of your games must receive an overall rating of at least 90%.); 100% (One of your games must receive an overall rating of at least 100%. [Difficulty: Legendary]); Everyone Loves Me! (Have at least 1,000,000 fans.); I Don't Like to Be Alone (Start a multiplayer game with at least one friend.); This Is My Team! (Start a multiplayer game with four friends.); Intellectual Property (Maximize the popularity of an IP.); Legendary Game Company (Maximize your studio reputation. [Difficulty: Legendary]); Masterful (Have an employee with an experience of 100% at any skill.); Employer I (Have at least 20 employees.); Employer II (Have at least 50 employees.); Employer III (Have at least 100 employees.); Pocket Money (Have at least $50,000,000.); That Is Not Enough! (Have at least $500,000,000.); Three Commas Club (Have at least a billion dollars. [Difficulty: Legendary]); Console war II (Sell at least 10,000,000 units of your own console.); Market Leader (Sell at least 50,000,000 units of your own console. [Difficulty: Legendary]); My Name Is Sid Maier (Hire a developer legend.); Shopping Tour I (Buy an NPC developer or publisher.); Shopping Tour II (Buy at least 10 NPC developers or publishers.); Shopping Tour III (Buy at least 30 NPC developers or publishers. [Difficulty: Legendary]); Day Zombie (Create an survival game with a rating of at least 70%.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Start one long sandbox game from an early year and commit to it as your main save.",
                "2. Work through every genre and game type, releasing a 70%+ (or better) game in each.",
                "3. Build your own engine, then your own console and handheld, and do the business feats (bundles, spin-offs, sequels, ports, remasters, contract games).",
                "4. Chase the awards and review-score achievements by pouring resources into one flagship title per year.",
                "5. Let the studio grow toward the Legendary-tier milestones - Diamond sales, a billion dollars, 100 employees, a maxed studio reputation, buying 30 NPC companies.",
                "Tip: the \"[Difficulty: Legendary]\" achievements (100% review, 50M-unit Diamond sales, $1B, maxed studio reputation) all depend on the same thing - a late-game engine and team good enough to output near-perfect AAA games repeatedly - so focus your whole run on getting there rather than chasing them individually."
            ]
        }
    ]
};
