// Fields of Mistria Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/fields-of-mistria.json), whose 69 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   2142790 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js). None are hidden; every one
//   ships a real, official Steam description, quoted verbatim below.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "fields-of-mistria-achievement-guide",
    "category": "game",
    "gameSlug": "fields-of-mistria",
    "icon": "🌾",
    "title": "Fields of Mistria Achievement Guide",
    "summary": "A practical guide to all 69 Steam achievements in Fields of Mistria - none are hidden. story, town & buildings, farming, skills & collections, relationships & completion.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Fields of Mistria has 69 Steam achievements and none are hidden. They run the length of a farming-sim playthrough: the story and town restoration, the farm/skill/collection milestones, and the villager relationships and museum completion.",
                "Nothing is missable - the game is in early access and calendars are forgiving - but the collection and museum achievements want you to hold on to the first of every fish, bug and mineral, and Thoughtful Gifter needs a full known-preferences list for a villager.",
                "Tip: play naturally toward the town-restoration quests, keeping a museum-donation checklist so nothing important gets sold. Work the villager friendships in parallel and follow a gift-preference guide for Thoughtful Gifter."
            ]
        },
        {
            "heading": "Story, Town & Buildings",
            "body": [
                "The story and town-restoration goals: the prologue, repairing Caldarus' Shrine and the Eastern Road bridge, meeting every neighbor, the Saturday Market, and the early main-quest and building milestones.",
                "The achievements here: Welcome to Mistria (Finish the prologue scene.); Don’t You Love That Sense of Achievement? (Repair Caldarus’ Shrine.); Becoming a Familiar Face (Meet all your neighbors.); Bridge Builder (Repair the bridge on the Eastern Road.); Market Regular (Greet the first 4 Saturday Market vendors.); Novice Farmer (Complete Restocking Mistria’s Food Reserves.); On That Grind (Repair the Mill in town.); Summit Scaler (Repair the stairs to the Summit.); For the General Good (Upgrade the General Store.); A Bridge For Terithia (Repair the Beach Bridge.); Novice Rancher (Complete Restocking Mistria’s Food Reserves 2.); Barnyard Bounty (Upgrade Hayden's Barn and Coop.); Horse-Hearted (Befriend the Mistmare.); Inn Good Company (Upgrade the Sleeping Dragon Inn.); Refined  (Build the Stone Refinery.); Good Marketing (Add two new vendors to the Saturday Market.); Fine Grained (Upgrade the Carpenter's Shop.); Hold Your A Plaza (Add two more new vendors to the Saturday Market); Ringing Ovation (Repair the Bell Tower. ); Opened The Water Seal (Break the Water Seal); Opened The Earth Seal (Break the Earth Seal); Opened The Fire Seal (Break the Fire Seal); Opened The Ruins Seal (Break the Ruins Seal)."
            ]
        },
        {
            "heading": "Farming, Skills & Collections",
            "body": [
                "The farm and skill content: crop, animal and mining milestones, levelling each skill, the fishing and foraging collections, and the cooking recipes.",
                "The achievements here: Used The Magic Key (Use the Magic Key in the Priestess Quarters); Opened The Final Seal (Break the Final Seal); Love Is In The Air (Attend the Shooting Star Festival with a date.); New Pet Owner (Welcome your new pet home.); Patron Of The Arts (Complete your first Museum set.); Acquaintance (Reach Two Hearts with any villager. ); Friend (Reach Four Hearts with any villager. ); Good Friend (Reach Six Hearts with any villager.); Best Friend (Reach Eight Hearts with any villager and choose to become best friends.); Romantic (Reach Eight Hearts with a romanceable villager and choose to start dating them. ); True Love (Reach ten hearts with a romanceable villager that you are dating.); I do!  (Get married.); Parent (Have a child. ); Time Flies (Reach your child's first birthday. ); New Friend (Adopt a ranching animal.); Perk Procurer (Acquire a Tier 5 perk in each skill. ); Master Rancher (Breed your first Tier 5 Animal.); The Found Woods ( Unlock the Deep Woods.); Stone Star Rank ( Stone Star Rank Reach Stone Star Town Rank.); Copper Star Rank (Reach Copper Star Town Rank.); Ruby Star Rank (Reach Ruby Star Town Rank.); Iron Star Rank (Reach Iron Star Rank.); Sapphire Star Rank (Reach Sapphire Star Town Rank.)."
            ]
        },
        {
            "heading": "Relationships & Completion",
            "body": [
                "The social and completion goals: befriending and romancing the villagers, the gifting achievements, the museum donations, and the year and late-game milestones.",
                "The achievements here: Silver Star Rank (Reach Silver Star Town Rank.); Emerald Star Rank (Reach Emerald Star Town Rank.); Gold Star Rank (Reach Gold Star Town Rank.); Diamond Star Rank (Reach Diamond Star Town Rank.); Mistril Star Rank (Reach Mistril Star Town Rank. ); First Place (Take first place in a festival. ); Gifted (Give 100 Liked and/or Loved gifts.); Happy Birthday (Give every villager a liked or loved gift on their birthday.); Master Chef (Reach Lvl 60 in the Cooking Skill.); Master Woodcrafter (Reach Lvl 60 in the Woodcrafting Skill.); Master Blacksmith (Reach Lvl 60 in the Blacksmithing Skill.); Entomologist (Complete the Legendary Insect Set in the Museum.); Fish Fanatic (Complete the Legendary Fish Set in the Museum.); Hero (Complete all of Stillwell’s Mission Quests.); Master Farmer (Reach Lvl 60 in the Farming Skill.); Bread Winner (Earn a total of 1,000,000 tesserae. ); Essential Essence (Earn a total of 10,000 essence.); Jack Of All Trades (Reach the maximum level in all skills. ); Go To Sleep Already (Faint from staying up too late. ); From a House to a Home (Fully upgrade your house.); Thoughtful Gifter (Gift all of one villager's Liked and Loved gifts. ); Close Call (Go to sleep after 1:50 am but before 2:00 am.); Celebrated Curator  (Complete the Museum.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Do the prologue and the town-restoration quests (the Shrine, the bridge, the Market), meeting every neighbor.",
                "2. Build up the farm and level every skill, keeping collection and museum checklists as you fish, forage and mine.",
                "3. Befriend and romance the villagers, and do the gifting achievements with a preference guide.",
                "4. Finish the museum and the year/late-game milestones.",
                "Tip: Close Call (sleep between 1:50 and 2:00 am) is a deliberate one-off - stay up late on a low-stakes night and go to bed in that ten-minute window rather than risking passing out."
            ]
        }
    ]
};
