// House Flipper Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/house-flipper.json), whose 96 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   613100 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 11 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched (community 100%
//   guides / TrueSteamAchievements) and is a curatorial summary. Every
//   non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "house-flipper-achievement-guide",
    "category": "game",
    "gameSlug": "house-flipper",
    "icon": "🏡",
    "title": "House Flipper Achievement Guide",
    "summary": "A practical guide to all 96 Steam achievements in House Flipper (11 hidden). 11 of the 96 are hidden, all from the Coastal and Dine Out DLC content - researched from Steam Community 100% guides and TrueAchievements, since the base game ships them with no description.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "House Flipper has 96 Steam achievements, 11 of them hidden. 13 achievements are simply awarded for meeting each of the game's recurring client personas (the Big Family, the geek Chang Choi, the doomsday Prepper family, and so on) - one per client. The core business track covers your first paid job, your first million euros, finishing the story, a job done in under a minute, completing every job to 100%, negotiating a 50,000-euro sale, and tiered real-estate milestones for selling 10/20/50 houses. A long tail of one-off feats covers gardening, pest control, plumbing, and named renovation styles.",
                "The hidden achievements split into two DLC groups: Beach Please (from the Coastal DLC - move your main office to a beachfront property such as the Stilt House) and 10 from the Dine Out DLC restaurant-management content - completing your first and fifth Dine Out jobs, finishing all 10 of them, cooking a set of dishes on the universal cooker, renting 5 houses, earning roughly 10,000-15,000 in rental income, falling through a deliberately-built entresol during the 'Wine and Dine' job, decking 10 tables with cutlery and glassware, placing and naming a restaurant sign, and finding all 11 recipes in the DLC.",
                "The catalog marks it difficulty 2 - nothing here requires precision, just working through jobs, the Pets, Farm and Dine Out DLC content, and the client-persona and real-estate milestones at a relaxed pace."
            ]
        },
        {
            "heading": "Client Personas",
            "body": [
                "One achievement per recurring client persona you meet across jobs - the Family man, the Geek, the wealthy Worth Every Penny client, the fashionable I'm a Belieber, the ruthless Wall Street Shark, the mysterious Mr. Mystery, the age-defying Just Enough client, the Tactical Prepper and his Survivalist and Doomsday Prepper family, the Alpha Male, the Pro-creative parents, and the Artistic Soul.",
                "The achievements here: Family man (Family isn't just an important thing, it's everything.); Geek (I'm not a genius, but I am smarter than you are.); Worth every penny (Mind over matter. Money over all.); I'm a Belieber (Fashion is my armor against the realities of everyday life.); Wall Street Shark (It's business. Leave your feelings at the door.); Mr. Mystery (Bra off, party on!); Just enough (Age is just a number. Live life fully, no matter how old you are.); The Tactical Prepper (Always be prepared for the unknown.); The Survivalist (Remember: when disaster strikes, the time to prepare has passed.); Doomsday Prepper (Better to prep 10 years too early than 10 minutes too late!); Alpha Male (What happens in the cave stays in the cave.); Pro-creative (You know, when you're in love, you can't get any sleep… because of your kids screaming around the clock!); Artistic soul (Every child is an artist. The challenge lies in remaining an artist throughout one's adult life.)."
            ]
        },
        {
            "heading": "Getting Started, Business & Real Estate",
            "body": [
                "Your first paid job, your first million euros, finishing the game, a sub-1-minute job, completing every job to 100%, a 50,000-euro negotiated sale, tiered house-selling milestones (10/20/50), gardening and pest-control feats, and a long list of named renovation and furnishing styles.",
                "The achievements here: First money (Complete first job!); Millionaire (Earn your first million euro.); Game over (Finish the game.); Do it ASAP (Complete a job in less than 1 minute.); Perfectionist (Complete every job all the way.); Knock, knock (I am the one who knocks.); Negotiator (Successfully negotiate a sale earning no less than 50,000 Euro.); Strongman (Do you even lift?); Car mechanic (You'll need a car mechanic.); You're doing it wrong. (Kill a cockroach with a hammer.); Junior estate agent (Sell 10 houses.); Estate agent (Sell 20 houses.); Real estate agent (Sell 50 houses.); Give it some fresh air (Don't forget to take it out of the rain!); Beginner gardener (It's time to broaden my qualifications!); Competitor (Look at my garden, it's amazing!); Perfect Layout (Feel Shi… Fence Shi… Well, I tried.); According to the rules. (Blue flower, red thorns…); Fully equipped. (Haven't you forgotten about a place for a few flowers between this sofa and the carousel?); Call me Edward. (You can't hide from my mover!); Gardener (I feel this gardener aura inside of me…); Vegan (Tell the meatatarians my last word is… Carrot…); Let's go swimming. (Bath time?); Whack-A-Mole (Your time has come, Mr. Mole…); Don Quixote (Is this hammer even real?); Down to the last penny (Care to do something more with all that's left?); Truly open space (Must-have: lots of space.); Whole family (Must-have: room for family gatherings.); All the possibilities! (On the other hand…); Chimney sweeper (Can you hear it?); Modern solutions (Can't have a leak when there are no pipes!); Time warp (Let's do the time warp again!); Oliver's way (Now we're talking!); Greta's touch (This place could use a woman's touch!); Homer's house (I will not click on the map.); Renovator (Fix them all!)."
            ]
        },
        {
            "heading": "Beach Please & Late-Game Business Feats",
            "body": [
                "The hidden Coastal DLC office move, replacing 10 windows, a full renovation, a city photo from the Cliff House, finishing every Moonrise Bay job, buying a Luxury DLC house, hiring a butler, a deliberately game-breaking placement, and further business and client feats.",
                "The achievements here: Beach please (Move your main office to a beachfront property, such as the Stilt House (Coastal DLC).); I hope there's no cellar (Now, who’s in for a pool party?); Windows update (Replace 10 windows); The furnisher (One man’s trash is another man’s treasure); I fixed it! (All it takes is a good smack with a hammer); Panorama (Take a picture of the city from the Cliff House); Luxury is always in style (Finish all jobs in Moonrise Bay); I am rich (Purchase one of the houses from Luxury DLC); The Wi-Fi password, anyone? (The next step is to hire a butler); You are too creative! (If we allowed you to do this, the game would crash); Step up your game (Did someone call a stair specialist?); The choice is yours (Will you follow your client's dream?)."
            ]
        },
        {
            "heading": "Pets DLC",
            "body": [
                "The Pets DLC's own progression - adopting your first pet, following its story through Cozy Village, caretaking, grooming, playtime, and photographing it, plus caring for multiple pets and pet types.",
                "The achievements here: What's in the box? (Tons of cuteness to say the least!); A journey full of fluffiness (Morgan is proud of you.); Welcome to Cozy Village (Hope you enjoy the countryside.); Caretaker (Feels like the beginning of something special.); Fresh, clean, and dry (Now your pup can get all dirty again.); It's playtime! (The best part of the day.); Tap-tap-tap... (Can you hear those little paws behind you?); Versatile caretaker (You're not gonna stop here, are you?); The floor is your canvas (Now, that's not a happy little accident.); Teamwork (A helping paw is never a bad thing, eh?); They grow up so fast... (It feels like we've met yesterday!); Picture perfect (It's hard to get a good photo when they move around so quickly.)."
            ]
        },
        {
            "heading": "Museum Piece & Farm DLC",
            "body": [
                "Finding a museum-worthy heirloom, then the Farm DLC's own milestones - owning every farm animal, drone farming, house extensions, an in-house radio, roof and stable work, horseback riding, harvesting, a long farm day, and full creative freedom on a farm property.",
                "The achievements here: This belongs in a museum (Careful now, it’s obviously a family heirloom!); Old McDonald (Is there an animal you haven’t got?); Drone master (Making photos, watering, spraying… Everything on the fly!); The bigger the better (House extensions are just too much fun!); Music to my ears (Your house, your rules, your radio.); Captain Hook (Hope you're not afraid of heights!); Don’t hold your horses (Ride like the wind!); Hardworking farmer (Your efforts have yielded a harvest.); They're all in one basket (Still looking for a golden egg?); Just don't get lost! (Fancy an afternoon snack with a Minotaur?); A long day in the countryside (Hard work pays off!); Talented roofer (Show your true colors!); Free spirit (Finally, nothing limits your imagination!)."
            ]
        },
        {
            "heading": "Dine Out DLC",
            "body": [
                "All 10 hidden Dine Out DLC restaurant achievements: your first and fifth completed Dine Out jobs, finishing all 10, cooking a set of dishes on the universal cooker, renting 5 houses, a rental-income milestone, falling through a deliberately-built entresol, decking 10 tables, placing a named restaurant sign, and finding all 11 DLC recipes.",
                "The achievements here: Appetite comes with eating (Complete your first Dine Out DLC job.); The way to one's heart… (Complete any 5 Dine Out DLC jobs.); The cherry on top (Complete all 10 Dine Out DLC jobs.); 5 Flipper stars (Cook a set of dishes using the restaurant's universal cooker.); Why live on bread and water? (Earn roughly 10,000-15,000 in total rental income.); Property manager (Rent out 5 houses using the rental system.); Land in hot water (During the 'Wine and Dine' job, build an entresol upstairs and fall through it while confirming the changes.); Table, Deck Yourself! (Deck 10 restaurant tables with cutlery and glassware.); Don't judge a restaurant by its sign (Buy, place, and label a restaurant sign.); Flavours Hunter (Find all 11 Dine Out DLC recipes.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through the main story jobs, meeting each client persona and hitting the early business milestones (first job, first million, sub-1-minute job).",
                "2. Work through the Pets and Farm DLC content for their own achievement tracks.",
                "3. Buy a Coastal DLC beach property and move your office there for 'Beach please'.",
                "4. Play the Dine Out DLC start to finish, decking tables, cooking on the universal cooker, placing a sign, and collecting all 11 recipes along the way.",
                "5. Mop up the real-estate tiers (10/20/50 houses sold) and renting 5 houses for 'Property manager'.",
                "Tip: 'Land in hot water' needs a deliberate mistake, not careful building - during 'Wine and Dine', build the entresol, stand on the section you're about to remove, and confirm the change so you fall through."
            ]
        }
    ]
};
