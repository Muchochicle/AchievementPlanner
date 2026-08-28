// Borderlands 2 Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/borderlands-2.json), whose 75 achievements
//   were sourced directly from Steam's own achievement schema for appid
//   49520 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js) - 54 of 75 ship a real,
//   official Steam description, quoted directly below.
// - The 21 hidden achievements ship no Steam description; their
//   conditions here are curatorial, cross-checked against GamesRadar,
//   the Borderlands Wiki, GameTipCenter and Steam Community 100% guides.
//   The 16 main-story markers are described by which mission they
//   complete, kept free of plot detail.
// - The grouping follows Borderlands 2's structure: the main campaign,
//   character levelling and combat feats, exploration, side missions and
//   base-game feats, and the campaign DLC.
export const GUIDE = {

    slug: "borderlands-2-achievement-guide",
    category: "game",
    gameSlug: "borderlands-2",
    icon: "🔫",
    title: "Borderlands 2 Achievement Guide",
    summary: "A practical guide to all 75 Steam achievements in Borderlands 2 - the main-campaign mission markers, the levelling and combat feats, the map-exploration achievements, the base-game side content, and the campaign DLC (Pirate's Booty, Campaign of Carnage, Hammerlock's Hunt, Tiny Tina's Assault and Commander Lilith).",

    relatedSlugs: ["achievement-completion-and-tracking", "understanding-achievement-availability"],

    sections: [

        {
            heading: "Overview",
            body: [
                "Borderlands 2 has 75 Steam achievements, 21 of them hidden. The base game is the bulk of it; the rest need the five campaign DLCs (the Game of the Year / Handsome Collection edition bundles them all).",
                "Nothing is missable - every mission can be replayed and every area revisited - and most of the list comes naturally from finishing the campaign, all side missions, and reaching level 50. Only a handful (raid bosses, the 90-second Gunzerk, the rainbow gear) need deliberate effort.",
                "Tip: play one character all the way to level 50 doing every side mission, then use that same character for the DLC. Challenge Accepted (level 1 of every non-level-specific challenge on one character) and the level milestones all want a single dedicated character rather than spread progress."
            ]
        },

        {
            heading: "Main Campaign",
            body: [
                "Sixteen hidden achievements are one per story mission and cannot be missed: First One's Free (My First Gun), Dragon Slayer (Best Minion Ever), A Road Less Traveled (The Road To Sanctuary), New In Town (Plan B), An Old Flame (Hunting The Firehawk), No Man Left Behind (A Dam Fine Rescue), Wilhelm Screamed (A Train To Catch), Sky's The Limit (Rising Action), Can See My House From Here (Bright Lights, Flying City), Farewell, Old Girl (Wildlife Preservation), Got The Band Back Together (The Once and Future Slab), Identity Theft (The Man Who Would Be Jack), An Angel's Wish (Where Angels Fear To Tread), Bombs Away (Toil And Trouble), Knowing Is Half The Battle (Data Mining) and Cool Story, Bro (the final boss)."
            ]
        },

        {
            heading: "Levelling & Combat Feats",
            body: [
                "Level milestones: Not Quite Dead (5), Better Than You Were (10), Always Improving (25) and Capped Out... For Now (50). Plus Challenge Accepted (level 1 of every non-level-specific challenge on one character) and How Do I Look? (unlock 10 customization items).",
                "Combat: Goliath, Meet David (let a goliath level up four times then kill it), Went Five Rounds (Round 5 of any Circle of Slaughter), So Much Blood! (Gunzerk 90 seconds straight), Sabre Rattler (100 Sabre turret kills), Phased and Confused (100 Phaselocks), Unseen Predator (10 seconds in Decepti0n), Build Buster (kill a Constructor before it builds a bot), High-Flying Hurler (kill a flyer with a thrown Tediore gun), Cute Loot (kill a Chubby), Definitely An Italian Plumber (kill Donkey Mong) and Tribute To A Vault Hunter (get an item from Michael Mamaril)."
            ]
        },

        {
            heading: "Exploration",
            body: [
                "Discover all named locations, split by region: Arctic Explorer (Three Horns, Tundra Express, Frostburn Canyon), Urban Explorer (Sanctuary, Opportunity, Lynchwood), Highlands Explorer (The Highlands, Thousand Cuts, Wildlife Exploitation Preserve) and Blight Explorer (Eridium Blight, Arid Nexus, Sawtooth Cauldron), then World Traveler for all of them at once.",
                "What does it mean? is the secret Highlands campsite where a double rainbow appears over Sanctuary, and Feels Like The First Time is the hidden chest at the old Borderlands 1 bus stop in Arid Nexus - Boneyard."
            ]
        },

        {
            heading: "Side Missions & Base-Game Feats",
            body: [
                "Side missions: Bounty Hunter (20) and Did It All (all of them). Economy and social: Sugar Daddy (tip Moxxi $10,000), Token Gesture (redeem 25 tokens), Better Than Money (buy 5 black-market items), Decked Out (purple-or-better gear in every slot), Friendship Rules (revive a friend from Fight for Your Life) and Up High, Down Low (high-five Claptrap).",
                "The two toughest base-game fights: Well, That Was Easy (first kill of Terramorphous, via the mission Shoot This Guy in the Face) and Thresher Thrashed (defeat the raid boss Terramorphous the Invincible)."
            ]
        },

        {
            heading: "Campaign DLC",
            body: [
                "Captain Scarlett and Her Pirate's Booty: Treasure Hunter (X Marks the Spot), Gadabout (all Oasis locations) and Completionist (all its side missions).",
                "Mr. Torgue's Campaign of Carnage: Explosive (Long Way To The Top), Motorhead (all its side missions) and Obsessed (10 Moxxi pictures).",
                "Sir Hammerlock's Big Game Hunt: Face Off (The Fall of Nakayama), Done That (all its side missions), Been There (all its locations) and I Totes Planned That Boss (slay Mister Boney Pants Guy).",
                "Tiny Tina's Assault on Dragon Keep: Yaaaaaay (meet the White Knight), Shorty, You So Best (rescue the queen), Girl's Gotta Eat (feed the queen 3 times in one visit), It's Like That One Video (beat The Darkness), They Was All \"Hey That's Mine\" (5 swords from Immortal Skeletaurs without leaving), Dang Girl You Ace At This Game (Murderlin's Temple hardest round), Hmmmmm (wield the Mysterious Amulet), Keep Rollin' Rollin' Rollin' (roll the treasure orb) and Make it Raaaaaid (defeat the Ancient Dragons of Destruction).",
                "Commander Lilith & the Fight for Sanctuary: Anyway, Here's \"Firewall\" (activate the Backburner's firewall), Chocolate Chip Confirmed (Tiny Tina arms the moonshot cannon) and 3 or Bust (Paradise Found). The Headhunter packs add Spicy Boy (Haderax the Invincible), Decrypted! (the Dark Web) and Painbow Connection (Effervescent rainbow gear in every slot but the class mod)."
            ]
        },

        {
            heading: "Suggested Order",
            body: [
                "Pick one Vault Hunter and take it through the whole main campaign for the sixteen story markers (First One's Free through Cool Story, Bro), doing every side mission for Bounty Hunter and Did It All, and fully exploring each region for Arctic Explorer, Urban Explorer, Highlands Explorer, Blight Explorer and World Traveler. Grab What does it mean? and Feels Like The First Time while you are in the Highlands and Arid Nexus.",
                "Push that character to level 50 (Not Quite Dead, Better Than You Were, Always Improving, Capped Out... For Now) and knock out the combat and economy feats along the way (Goliath, Meet David, Went Five Rounds, So Much Blood!, Sabre Rattler, Phased and Confused, Unseen Predator, Build Buster, High-Flying Hurler, Cute Loot, Definitely An Italian Plumber, Tribute To A Vault Hunter, Sugar Daddy, Token Gesture, Better Than Money, Decked Out, How Do I Look?, Up High, Down Low, Friendship Rules, Challenge Accepted).",
                "Then run all five DLC campaigns and their side missions (Treasure Hunter, Gadabout, Completionist, Explosive, Motorhead, Obsessed, Face Off, Done That, Been There, I Totes Planned That Boss, and the whole Tiny Tina and Commander Lilith sets).",
                "Save the raid and challenge fights for last with good gear: Well, That Was Easy, Thresher Thrashed, Make it Raaaaaid, Spicy Boy, Decrypted! and the rainbow-gear grind for Painbow Connection."
            ]
        }

    ]

};
